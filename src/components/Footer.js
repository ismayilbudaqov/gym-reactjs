import React from "react";

import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo.png";
const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt="logo" width="80px" height="60px" />
<Typography variant="h4" fontWeight="bold"  >

  GOLD GYM
</Typography>
        <Typography variant="h5" pb="40px" mt="20px" fontWeight="bold" color="darkred">
          Made By ISMAYIL BUDAQOV
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
