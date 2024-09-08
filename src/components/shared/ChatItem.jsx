import React, { memo } from "react";
import { Link } from "../styles/StyledComponents";
import { Box, Stack, Typography, Badge } from "@mui/material";
import AvatarCard from "./AvatarCard";
import { motion } from "framer-motion";

const ChatItem = ({
  avatar = [],
  name,
  _id,
  groupChat = false,
  sameSender,
  isOnline,
  newMessageAlert,
  index = 0,
  handleDeleteChat,
}) => {
  return (
    <Link
      sx={{ textDecoration: "none", width: "100%" }}
      to={`/chat/${_id}`}
      onContextMenu={(e) => handleDeleteChat(e, _id, groupChat)}
    >
      <motion.div
        initial={{ opacity: 0, y: "-100%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 * index, type: "spring", stiffness: 50 }}
        style={{
          display: "flex",
          alignItems: "center",
          padding: "1rem",
          borderRadius: "8px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)", // Soft shadow for modern touch
          backgroundColor: sameSender ? "#333" : "#fff",
          color: sameSender ? "#fff" : "#000",
          position: "relative",
          gap: "1rem",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
        }}
        whileHover={{ scale: 1.02 }} // Smooth scale on hover
      >
        <AvatarCard avatar={avatar} />

        <Stack spacing={0.5} sx={{ flexGrow: 1 }}>
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 600,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis", // Prevents overflow for long names
            }}
          >
            {name}
          </Typography>

          {newMessageAlert ? (
            <Typography
              variant="caption"
              sx={{ color: "gray", fontWeight: 500 }}
            >
              {newMessageAlert.count} New Message
              {newMessageAlert.count > 1 && "s"}
            </Typography>
          ) : (
            <Typography variant="caption" sx={{ color: "gray" }}>
              No new messages
            </Typography>
          )}
        </Stack>

        {isOnline && (
          <Box
            sx={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "green",
              position: "absolute",
              top: "50%",
              right: "1rem",
              transform: "translateY(-50%)",
            }}
          />
        )}
      </motion.div>
    </Link>
  );
};

export default memo(ChatItem);
