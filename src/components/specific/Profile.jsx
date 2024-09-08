import React from "react";
import { Avatar, Stack, Typography, Divider } from "@mui/material";
import {
  Face as FaceIcon,
  AlternateEmail as UserNameIcon,
  CalendarMonth as CalendarIcon,
  Description as BioIcon,
} from "@mui/icons-material";
import moment from "moment";
import { transformImage } from "../../lib/features";

const Profile = ({ user }) => {
  return (
    <Stack spacing={4} direction="column" alignItems="center">
      <Avatar
        src={transformImage(user?.avatar?.url)}
        sx={{
          width: 120,
          height: 120,
          objectFit: "cover",
          border: "4px solid #fff",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
        }}
      />
      <Stack spacing={3} width="100%" maxWidth="600px">
        <ProfileCard
          heading="Bio"
          text={user?.bio}
          Icon={<BioIcon sx={{ color: "#6C63FF" }} />} // Adding the bio icon with the same unified style
        />
        <ProfileCard
          heading="Username"
          text={user?.username}
          Icon={<UserNameIcon sx={{ color: "#6C63FF" }} />} // Modern purple color
        />
        <ProfileCard
          heading="Name"
          text={user?.name}
          Icon={<FaceIcon sx={{ color: "#6C63FF" }} />} // Unified icon color
        />
        <ProfileCard
          heading="Joined"
          text={moment(user?.createdAt).fromNow()}
          Icon={<CalendarIcon sx={{ color: "#6C63FF" }} />} // Unified icon color
        />
      </Stack>
    </Stack>
  );
};

const ProfileCard = ({ text, Icon, heading }) => (
  <Stack
    direction="row"
    alignItems="center"
    spacing={3} // Increased spacing for better clarity
    sx={{
      padding: "1rem", // Slightly larger padding
      borderRadius: "12px", // Subtly rounded corners
      backgroundColor: "#f9f9f9", // Lighter background for a clean look
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.05)", // Softer modern shadow
    }}
  >
    {Icon && (
      <Stack
        sx={{
          backgroundColor: "#ececec", // Softer background for icons
          borderRadius: "50%",
          padding: "0.75rem", // Increased padding for icons
        }}
      >
        {Icon}
      </Stack>
    )}

    <Stack>
      <Typography
        variant="h8" // Larger font for emphasis
        fontWeight={600}
        color="#333" // Darker, clean text color
      >
        {text}
      </Typography>
      <Typography color="text.secondary" variant="caption">
        {heading}
      </Typography>
    </Stack>
  </Stack>
);

export default Profile;
