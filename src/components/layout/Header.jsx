import {
  AppBar,
  Backdrop,
  Badge,
  Box,
  Divider,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { Suspense, lazy } from "react";
import { primaryBlue } from "../../constants/color";
import {
  Add as AddIcon,
  Menu as MenuIcon,
  Search as SearchIcon,
  Group as GroupIcon,
  Logout as LogoutIcon,
  Notifications as NotificationsIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../../constants/config";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { userNotExists } from "../../redux/reducers/auth";
import {
  setIsMobile,
  setIsNewGroup,
  setIsNotification,
  setIsSearch,
} from "../../redux/reducers/misc";
import { resetNotificationCount } from "../../redux/reducers/chat";

const SearchDialog = lazy(() => import("../specific/Search"));
const NotifcationDialog = lazy(() => import("../specific/Notifications"));
const NewGroupDialog = lazy(() => import("../specific/NewGroup"));

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isSearch, isNotification, isNewGroup } = useSelector(
    (state) => state.misc
  );
  const { notificationCount } = useSelector((state) => state.chat);

  const handleMobile = () => dispatch(setIsMobile(true));

  const openSearch = () => dispatch(setIsSearch(true));

  const openNewGroup = () => {
    dispatch(setIsNewGroup(true));
  };

  const openNotification = () => {
    dispatch(setIsNotification(true));
    dispatch(resetNotificationCount());
  };

  const navigateToGroup = () => navigate("/groups");

  const logoutHandler = async () => {
    try {
      const { data } = await axios.get(`${server}/api/v1/user/logout`, {
        withCredentials: true,
      });
      dispatch(userNotExists());
      toast.success(data.message);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar
          position="static"
          sx={{
            bgcolor: "#ffffff",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)", // Soft shadow for depth
            paddingX: { xs: "1rem", sm: "2rem" }, // Padding for better spacing
          }}
        >
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            {/* Logo Section */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src="../../../public/chatApp.png"
                alt="Logo"
                style={{ height: "3rem", width: "auto" }}
              />

              {/* Menu Icon for Mobile */}
              <IconButton
                color="inherit"
                sx={{
                  display: { xs: "block", sm: "none" },
                  marginLeft: "1rem",
                }}
                onClick={handleMobile}
              >
                <MenuIcon sx={{ color: "#000000" }} />
              </IconButton>
            </Box>

            {/* Icon Section */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { xs: "0.5rem", sm: "1rem" }, // Space between icons
              }}
            >
              <IconBtn
                title={"Search"}
                icon={<SearchIcon sx={{ color: "#4f4f4f" }} />} // Subtle icon color
                onClick={openSearch}
              />

              <IconBtn
                title={"New Group"}
                icon={<AddIcon sx={{ color: "#4f4f4f" }} />}
                onClick={openNewGroup}
              />

              <IconBtn
                title={"Manage Groups"}
                icon={<GroupIcon sx={{ color: "#4f4f4f" }} />}
                onClick={navigateToGroup}
              />

              <IconBtn
                title={"Notifications"}
                icon={<NotificationsIcon sx={{ color: "#4f4f4f" }} />}
                onClick={openNotification}
                value={notificationCount}
              />

              <IconBtn
                title={"Logout"}
                icon={<LogoutIcon sx={{ color: "#4f4f4f" }} />}
                onClick={logoutHandler}
              />
            </Box>
          </Toolbar>
          <Divider sx={{ bgcolor: "#e0e0e0" }} />
        </AppBar>
      </Box>

      {isSearch && (
        <Suspense fallback={<Backdrop open />}>
          <SearchDialog />
        </Suspense>
      )}

      {isNotification && (
        <Suspense fallback={<Backdrop open />}>
          <NotifcationDialog />
        </Suspense>
      )}

      {isNewGroup && (
        <Suspense fallback={<Backdrop open />}>
          <NewGroupDialog />
        </Suspense>
      )}
    </>
  );
};

const IconBtn = ({ title, icon, onClick, value }) => {
  return (
    <Tooltip title={title}>
      <IconButton color="inherit" size="large" onClick={onClick}>
        {value ? (
          <Badge badgeContent={value} color="error">
            {icon}
          </Badge>
        ) : (
          icon
        )}
      </IconButton>
    </Tooltip>
  );
};

export default Header;
