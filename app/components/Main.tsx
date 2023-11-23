// @ts-nocheck
"use client";

import React, { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";

import PrimaryBtn from "../Reuseable/PrimaryBtn";
import { data } from "../utils/data.js";
import SliderComp from "../Reuseable/Slider";
import AutoCompleteInput from "../Reuseable/AutoCompleteInput";
import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";

const Home = () => {
  const [selectedTopic, setSelectedTopic] = useState("Fun");

  return (
    <motion.Box
      initial='hidden'
      whileInView='show'
      variants={staggerContainer}
      viewport={{ once: true, amount: 0.25 }}
      className='flex flex-col px-6 md:px-12 py-8 md:pt-0'
    >
      <motion.Box
        variants={fadeIn("down", "spring", 0.4, 1)}
        className='flex flex-col border-b-[.5px] border-b-neutral-700 py-8 md:mt-[-80px]'
      >
        <Typography className='text-white text-2xl font-poppins'>
          Content type
        </Typography>
        <Typography className='text-neutral-400 font-poppins'>
          Choose a content type that best fits your needs.
        </Typography>
      </motion.Box>
      <Box className='flex flex-col justify-start py-6 '>
        <Box className='flex flex-col py-4'>
          <Typography className='text-white font-poppins py-2'>
            What type of content are you creating
          </Typography>
          <Box className='flex flex-wrap gap-1 md:gap-2 mt-4'>
            {data.conv_topics.map((topic, i) => (
              <motion.Box
                key={i}
                variants={zoomIn(i == 0 ? 0.4 * i : (0.4 * i) / 2, 1)}
              >
                <PrimaryBtn
                  text={topic}
                  bg={selectedTopic === topic}
                  clickhandle={() => setSelectedTopic(topic)}
                />
              </motion.Box>
            ))}
          </Box>
        </Box>
        <Box className='flex flex-col py-4 max-w-[517px]'>
          <Typography className='text-white font-poppins py-2 pb-4'>
            Which type of "{selectedTopic}" content do you want to create?
          </Typography>
          <motion.Box variants={zoomIn(0.9, 1)}>
            <AutoCompleteInput options={data[selectedTopic]} />
          </motion.Box>
        </Box>
        <Box className='flex flex-col py-4 relative'>
          <Typography className='text-white font-poppins py-2 pb-6'>
            Set the number of words for ourput text.
          </Typography>
          <motion.Box variants={zoomIn(1.1, 0.5)}>
            <SliderComp />
          </motion.Box>
        </Box>
      </Box>
    </motion.Box>
  );
};

export default Home;
