import { Add as AddIcon, Remove as RemoveIcon } from "@mui/icons-material";
import { Avatar, IconButton, ListItem, Stack, Typography } from "@mui/material";
import React, { memo } from "react";
import { transformImage } from "../../lib/features";

const UserItem = ({
  user,
  handler,
  handlerIsLoading,
  isAdded = false,
  styling = {},
}) => {
  const { name, _id, avatar } = user;

  return (
    <ListItem
      sx={{
        padding: "0.5rem 1rem",
        borderRadius: "8px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Modern shadow
        marginBottom: "0.5rem",
        backgroundColor: "#fff", // Clean white background
        "&:hover": {
          backgroundColor: "#f5f5f5", // Subtle hover effect
        },
        ...styling,
      }}
    >
      <Stack direction="row" alignItems="center" spacing={2} width="100%">
        <Avatar
          src={transformImage(avatar)}
          sx={{
            width: 40,
            height: 40,
            border: "2px solid #ddd", // Subtle border for modern look
          }}
        />

        <Typography
          variant="body1"
          sx={{
            flexGrow: 1,
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            color: "#333", // Slightly darker text for better readability
            fontWeight: 500, // Slightly bolder text
          }}
        >
          {name}
        </Typography>

        <IconButton
          size="small"
          sx={{
            bgcolor: isAdded ? "error.main" : "primary.main",
            color: "white",
            borderRadius: "50%", // Round button
            "&:hover": {
              bgcolor: isAdded ? "error.dark" : "primary.dark",
            },
            transition: "background-color 0.3s", // Smooth transition
          }}
          onClick={() => handler(_id)}
          disabled={handlerIsLoading}
        >
          {isAdded ? <RemoveIcon /> : <AddIcon />}
        </IconButton>
      </Stack>
    </ListItem>
  );
};

export default memo(UserItem);
