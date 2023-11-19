//@ts-nocheck
"use client";
import { Slider, Stack, Typography } from "@mui/material";
import React from "react";

const indigo = "#523FD7";
const fuchsia = "#FF7DFF";
const neutral = "#3A3940";

export default function SliderComp() {
  return (
    <Stack
      spacing={2}
      direction='row'
      className='bg-zinc-950 rounded-xl max-w-[400px] w-full px-8 py-2'
      alignItems='center'
    >
      <Typography className='text-white font-poppins'>100</Typography>
      <Slider
        valueLabelDisplay='auto'
        aria-label='slider'
        defaultValue={700}
        sx={{
          color: neutral,
          height: 8,
          "& .MuiSlider-thumb": {
            height: 24,
            width: 24,
            backgroundColor: "transparent",
            backgroundImage: `url('/icons/thum-icon.svg')`,
            backgroundSize: "cover",
            border: "2px solid #FF7DFF",
            "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
              boxShadow: "inherit",
            },
          },
          "& .MuiSlider-track": {
            background: `linear-gradient(to right, ${indigo}, ${fuchsia})`,
          },
          "& .MuiSlider-valueLabel": {
            fontSize: 12,
            padding: "2px 4px",
            width: 32,
            borderRadius: "20%",
            backgroundColor: indigo,
            "&:before": { display: "block" },
          },
        }}
        valueLabelDisplay='on'
        min={100}
        max={1000}
      />
      <Typography className='text-white font-poppins'>1000</Typography>
    </Stack>
  );
}
