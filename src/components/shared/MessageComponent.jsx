import { Box, Typography } from "@mui/material";
import React, { memo } from "react";
import { primaryBlue } from "../../constants/color";
import moment from "moment";
import { fileFormat } from "../../lib/features";
import RenderAttachment from "./RenderAttachment";
import { motion } from "framer-motion";

const MessageComponent = ({ message, user }) => {
  const { sender, content, attachments = [], createdAt } = message;
  const sameSender = sender?._id === user?._id;
  const timeAgo = moment(createdAt).fromNow();

  return (
    <motion.div
      initial={{ opacity: 0, x: sameSender ? "100%" : "-100%" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", stiffness: 50, damping: 15 }}
      style={{
        alignSelf: sameSender ? "flex-end" : "flex-start",
        backgroundColor: sameSender ? "#DCF8C6" : "#fff", // WhatsApp-like color for user messages
        color: "black",
        borderRadius: "12px",
        padding: "1rem",
        maxWidth: "80%",
        boxShadow: "0 2px 12px rgba(0, 0, 0, 0.1)", // Soft shadow for modern look
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
      }}
    >
      {/* Sender's Name for incoming messages */}
      {!sameSender && (
        <Typography
          color={primaryBlue}
          fontWeight={600}
          variant="caption"
          sx={{ marginBottom: "0.5rem" }}
        >
          {sender.name}
        </Typography>
      )}

      {/* Message Content */}
      {content && (
        <Typography variant="body1" sx={{ wordWrap: "break-word" }}>
          {content}
        </Typography>
      )}

      {/* Attachments */}
      {attachments.length > 0 &&
        attachments.map((attachment, index) => {
          const url = attachment.url;
          const file = fileFormat(url);

          return (
            <Box key={index} sx={{ marginTop: "0.5rem" }}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                download
                style={{
                  textDecoration: "none",
                  color: sameSender ? "#007BFF" : "#000", // Modern link color
                }}
              >
                {RenderAttachment(file, url)}
              </a>
            </Box>
          );
        })}

      {/* Timestamp */}
      <Typography
        variant="caption"
        color="text.secondary"
        sx={{ alignSelf: "flex-end", marginTop: "0.5rem" }}
      >
        {timeAgo}
      </Typography>
    </motion.div>
  );
};

export default memo(MessageComponent);
