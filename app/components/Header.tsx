// @ts-nocheck
"use client";

import Image from "next/image";
import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";

import { fadeIn, staggerContainer } from "../utils/motion";

const Header = () => {
  return (
    <motion.header
      initial='hidden'
      whileInView='show'
      variants={staggerContainer}
      viewport={{ once: true, amount: 0.25 }}
      className='px-6 md:px-12 py-8 flex items-center bg-zinc-950 border-b-[1px] border-b-neutral-700'
    >
      <motion.div
        variants={fadeIn("down", "spring", 0.5, 1)}
        className='flex justify-between w-full'
      >
        <Grid item className='flex justify-start'>
          <Box className='flex flex-wrap gap-2'>
            <Image
              src='/icons/back-arrow.svg'
              alt='back-arrow'
              width={47}
              height={47}
            />
            <Box className='flex justify-start flex-col '>
              <Box className='flex text-base'>
                <Typography className='font-poppins'>
                  Media management
                </Typography>
                <Image
                  src='/icons/edit.svg'
                  alt='back-arrow'
                  className='mx-2'
                  width={13}
                  height={13}
                />
              </Box>
              <Typography
                component='p'
                className='text-neutral-400 font-poppins'
              >
                Draft compaign
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item className=' gap-2  md:flex md:justify-end'>
          <Box className='hidden md:block'>
            <Typography variant='body1' component='p' className='font-poppins'>
              Jane Cooper
            </Typography>
            <Typography
              variant='body1'
              component='p'
              className='text-fuchsia-400 underline font-poppins'
            >
              Change profile
            </Typography>
          </Box>
          <Image
            src='/icons/profile-icon.svg'
            alt='back-arrow'
            width={40}
            height={40}
          />
        </Grid>
      </motion.div>
    </motion.header>
  );
};

export default Header;
