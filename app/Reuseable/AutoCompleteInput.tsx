// @ts-nocheck
import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import InputAdornment from "@mui/material/InputAdornment";
import Image from "next/image";
import { Paper } from "@mui/material";

function AutoCompleteInput({ options }: any) {
  const [value, setValue] = useState(null);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    setValue(null);
  }, [options]);

  return (
    <Autocomplete
      disablePortal
      id='combo-box-demo'
      options={options}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      PaperComponent={({ children }) => (
        <Paper
          className='bg-[#3A3940] text-white mt-2 max-h-56 overflow-y-scroll scrollbar-custom scrollbar-thumb-custom scrollbar-track-custom'
          sx={{
            "& .MuiAutocomplete-noOptions": {
              color: "white",
            },
            "& .MuiAutocomplete-option": {
              "&:hover": {
                backgroundColor: "#523FD7",
              },
            },
          }}
        >
          {children}
        </Paper>
      )}
      sx={{
        maxWidth: 500,
        width: "w-full",
        color: "white",
        position: "relative",
        border: "1px solid transparent",
        backgroundClip: "padding-box",
        "&:after": {
          position: "absolute",
          top: -1,
          left: -1,
          right: -1,
          bottom: -1,
          background: isClicked
            ? `linear-gradient(to right, #523FD7, #FF7DFF)`
            : "transparent",
          content: '""',
          zIndex: -1,
          borderRadius: "16px",
        },
        "& .MuiFormLabel-root": {
          color: "white",
        },
        "& .MuiInputBase-root": {
          paddingRight: "15px !important",
          color: "white",
        },

        "&:focus": {
          outline: "none",
        },
        "&:hover": {
          outline: "none",
        },
      }}
      onOpen={() => {
        setIsClicked(true);
      }}
      onClose={() => {
        setIsClicked(false);
      }}
      disableClearable
      className={`rounded-2xl  ${value ? "bg-indigo-700" : "bg-neutral-800"}`}
      renderInput={params => {
        return (
          <TextField
            {...params}
            label='Select'
            sx={{
              color: "white",
              "&:focus": {
                outline: "none",
              },
              "&:hover": {
                outline: "none",
              },
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "transparent",
                },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "white",
              },
            }}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <InputAdornment position='end' className=''>
                  <Image
                    src='/icons/arrow-down.svg'
                    alt='search-icon'
                    className={isClicked ? "transform rotate-180" : ""}
                    width={20}
                    height={20}
                  />
                </InputAdornment>
              ),
            }}
          />
        );
      }}
    />
  );
}

export default AutoCompleteInput;
