import { useFileHandler, useInputValidation } from "6pp";
import { CameraAlt as CameraAltIcon } from "@mui/icons-material";
import { FiUser, FiLock, FiUserCheck, FiLogIn } from "react-icons/fi";
import {
  Avatar,
  Button,
  Container,
  IconButton,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { VisuallyHiddenInput } from "../components/styles/StyledComponents";
import { bgGradient } from "../constants/color";
import { server } from "../constants/config";
import { userExists } from "../redux/reducers/auth";
import { usernameValidator } from "../utils/validators";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const toggleLogin = () => setIsLogin((prev) => !prev);

  const name = useInputValidation("");
  const bio = useInputValidation("");
  const username = useInputValidation("", usernameValidator);
  const password = useInputValidation("");

  const avatar = useFileHandler("single");

  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();

    const toastId = toast.loading("Logging In...");

    setIsLoading(true);
    const config = {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        `${server}/api/v1/user/login`,
        {
          username: username.value,
          password: password.value,
        },
        config
      );
      dispatch(userExists(data.user));
      toast.success(data.message, {
        id: toastId,
      });
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something Went Wrong", {
        id: toastId,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    const toastId = toast.loading("Signing Up...");
    setIsLoading(true);

    const formData = new FormData();
    formData.append("avatar", avatar.file);
    formData.append("name", name.value);
    formData.append("bio", bio.value);
    formData.append("username", username.value);
    formData.append("password", password.value);

    const config = {
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    try {
      const { data } = await axios.post(
        `${server}/api/v1/user/new`,
        formData,
        config
      );

      dispatch(userExists(data.user));
      toast.success(data.message, {
        id: toastId,
      });
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something Went Wrong", {
        id: toastId,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{
        background: "#f5f5f5",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Roboto, sans-serif",
      }}
    >
      <Container
        component={"main"}
        maxWidth="md" // Make the form wider
        sx={{
          height: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: "8px",
            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
            backgroundColor: "white",
            maxWidth: "600px", // Increase form width
            width: "100%",
          }}
        >
          {isLogin ? (
            <>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                spacing={2}
              >
                <FiLogIn style={{ marginTop: "0.2rem", fontSize: "2.5rem" }} />
                <Typography variant="h3" fontWeight="bold" gutterBottom>
                  Log in
                </Typography>
              </Stack>
              <form
                style={{
                  width: "100%",
                  marginTop: "1rem",
                }}
                onSubmit={handleLogin}
              >
                <TextField
                  required
                  fullWidth
                  label="Username"
                  margin="normal"
                  variant="outlined"
                  value={username.value}
                  onChange={username.changeHandler}
                  sx={{ borderRadius: "8px" }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <FiUser />
                      </InputAdornment>
                    ),
                  }}
                />

                <TextField
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  margin="normal"
                  variant="outlined"
                  value={password.value}
                  onChange={password.changeHandler}
                  sx={{ borderRadius: "8px" }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <FiLock />
                      </InputAdornment>
                    ),
                  }}
                />

                <Button
                  sx={{
                    marginTop: "1rem",
                    padding: "12px",
                    borderRadius: "8px",
                    backgroundColor: "#0057D9", // Modern blue color
                    ":hover": {
                      backgroundColor: "#0047B3", // Darker modern blue
                    },
                  }}
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                  disabled={isLoading}
                  startIcon={<FiLogIn />} // Adds the icon at the start of the button
                >
                  Login
                </Button>

                <Typography textAlign={"center"} my={"1rem"}>
                  OR
                </Typography>

                <Button
                  disabled={isLoading}
                  fullWidth
                  variant="text"
                  sx={{
                    color: "#0057D9",
                    fontWeight: "bold",
                    ":hover": {
                      color: "#0047B3",
                      textDecoration: "none",
                    },
                  }}
                  onClick={toggleLogin}
                >
                  Sign Up Instead
                </Button>
              </form>
            </>
          ) : (
            <>
              <Typography variant="h3" fontWeight="bold" gutterBottom>
                Sign Up
              </Typography>
              <form
                style={{
                  width: "100%",
                  marginTop: "1rem",
                }}
                onSubmit={handleSignUp}
              >
                <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                  <Avatar
                    sx={{
                      width: "10rem",
                      height: "10rem",
                      objectFit: "contain",
                      border: "2px solid #0057D9", // Modern blue color for border
                      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
                    }}
                    src={avatar.preview}
                  />

                  <IconButton
                    sx={{
                      position: "absolute",
                      bottom: "0",
                      right: "0",
                      color: "white",
                      bgcolor: "#0057D9",
                      ":hover": {
                        bgcolor: "#0047B3",
                      },
                    }}
                    component="label"
                  >
                    <>
                      <CameraAltIcon />
                      <VisuallyHiddenInput
                        type="file"
                        onChange={avatar.changeHandler}
                      />
                    </>
                  </IconButton>
                </Stack>

                {avatar.error && (
                  <Typography
                    m={"1rem auto"}
                    width={"fit-content"}
                    display={"block"}
                    color="error"
                    variant="caption"
                  >
                    {avatar.error}
                  </Typography>
                )}

                <TextField
                  required
                  fullWidth
                  label="Name"
                  margin="normal"
                  variant="outlined"
                  value={name.value}
                  onChange={name.changeHandler}
                  sx={{ borderRadius: "8px" }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <FiUserCheck />
                      </InputAdornment>
                    ),
                  }}
                />

                <TextField
                  required
                  fullWidth
                  label="Bio"
                  margin="normal"
                  variant="outlined"
                  value={bio.value}
                  onChange={bio.changeHandler}
                  sx={{ borderRadius: "8px" }}
                />
                <TextField
                  required
                  fullWidth
                  label="Username"
                  margin="normal"
                  variant="outlined"
                  value={username.value}
                  onChange={username.changeHandler}
                  sx={{ borderRadius: "8px" }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <FiUser />
                      </InputAdornment>
                    ),
                  }}
                />

                {username.error && (
                  <Typography color="error" variant="caption">
                    {username.error}
                  </Typography>
                )}

                <TextField
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  margin="normal"
                  variant="outlined"
                  value={password.value}
                  onChange={password.changeHandler}
                  sx={{ borderRadius: "8px" }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <FiLock />
                      </InputAdornment>
                    ),
                  }}
                />

                <Button
                  sx={{
                    marginTop: "1rem",
                    padding: "12px",
                    borderRadius: "8px",
                    backgroundColor: "#0057D9",
                    ":hover": {
                      backgroundColor: "#0047B3",
                    },
                  }}
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                  disabled={isLoading}
                >
                  Sign Up
                </Button>

                <Typography textAlign={"center"} my={"1rem"}>
                  OR
                </Typography>

                <Button
                  disabled={isLoading}
                  fullWidth
                  variant="text"
                  sx={{
                    color: "#0057D9",
                    fontWeight: "bold",
                    ":hover": {
                      color: "#0047B3",
                      textDecoration: "none",
                    },
                  }}
                  onClick={toggleLogin}
                >
                  Login Instead
                </Button>
              </form>
            </>
          )}
        </Paper>
      </Container>
    </div>
  );
};

export default Login;
