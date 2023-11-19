"use client";
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import PrimaryBtn from "./Reuseable/PrimaryBtn";

const NotFound: React.FC = () => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      height='50vh'
    >
      <Typography variant='h4' component='h1' mt={4} mb={2}>
        Page Not Found
      </Typography>
      <Typography variant='body1' align='center' mb={4}>
        The page you are looking for does not exist.
      </Typography>
      <PrimaryBtn
        bg={false}
        text='Go Back'
        clickhandle={() => window.history.back()}
      />
    </Box>
  );
};

export default NotFound;
