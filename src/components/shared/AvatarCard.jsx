import { Avatar, AvatarGroup, Box, Stack } from "@mui/material";
import React from "react";
import { transformImage } from "../../lib/features";

// Modern and Elegant AvatarCard
const AvatarCard = ({ avatar = [], max = 4 }) => {
  return (
    <Stack direction="row" spacing={1}>
      <AvatarGroup
        max={max}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          "& .MuiAvatar-root": {
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Modern shadow
            transition: "transform 0.2s ease-in-out", // Smooth hover effect
            "&:hover": {
              transform: "scale(1.1)", // Slightly enlarge on hover
            },
          },
        }}
      >
        {avatar.map((i, index) => (
          <Avatar
            key={index}
            src={transformImage(i)}
            alt={`Avatar ${index}`}
            sx={{
              width: 48, // Standardize to 48px (3rem equivalent)
              height: 48,
              marginLeft: index === 0 ? 0 : "-12px", // Slight overlap
              border: "2px solid white", // Creates a border for clarity
            }}
          />
        ))}
      </AvatarGroup>
    </Stack>
  );
};

export default AvatarCard;
