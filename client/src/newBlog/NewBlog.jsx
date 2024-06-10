import React from "react";
import ResponsiveAppBar from "../components/Header";
import "./newBlog.css";
import Footer from "../components/Footer";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
import { display, grid, height, margin, positions, width } from "@mui/system";
import zIndex from "@mui/material/styles/zIndex";
import anime from "animejs";

export default function NewBlog() {
  const gridStyle = {
    position: "absolute",
    top: "30vh",
    height: "60vh",
    width: "50%",
  };

  const styleTitle = {
    position: "absolute",
    top: "10vh",
    width: "50vw",
    "& .css-e4w4as-MuiFormLabel-root-MuiInputLabel-root": {
      color: "white",
      fontSize: "1em",
    },
    "& .css-o943dk-MuiFormLabel-root-MuiInputLabel-root, & .css-o943dk-MuiFormLabel-root-MuiInputLabel-root":
      {
        color: "violet",
        fontSize: "1.3em",
      },
    "& .MuiInputBase-root": {
      backdropFilter: "blur(10px) saturate(180%)",
      webkitBackdropFilter: "blur(10px) saturate(180%)",
      backgroundColor: "rgba(17, 25, 40, 0.75)",
      border: "1px solid rgba( 255, 255, 255, 0.18 )",
      height: "10vh",
    },
    "& .css-10botns-MuiInputBase-input-MuiFilledInput-input": {
      color: "white",
      fontSize: "1em",
    },
    zIndex: 1000,
    opacity: 0
  };

  const otherStyle = {
    zIndex: 1000,
    "& .css-10ukbsc-MuiInputBase-root-MuiFilledInput-root, & .css-8ewcdo-MuiInputBase-root-MuiOutlinedInput-root":
      {
        backdropFilter: "blur(10px) saturate(180%)",
        webkitBackdropFilter: "blur(10px) saturate(180%)",
        backgroundColor: "rgba(17, 25, 40, 0.75)",
        border: "1px solid rgba( 255, 255, 255, 0.18 )",
      },
    "& .css-u17hlt-MuiFormControl-root-MuiTextField-root": {
      color: "white",
    },
    "& .css-e4w4as-MuiFormLabel-root-MuiInputLabel-root, & .css-o943dk-MuiFormLabel-root-MuiInputLabel-root.Mui-focused,  & .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root":
      {
        color: "violet",
      },
    "& .css-7209ej-MuiInputBase-input-MuiFilledInput-input": {
      color: "white",
    },
    "& .css-o943dk-MuiFormLabel-root-MuiInputLabel-root": {
      color: "pink",
    },
    "& .css-1sqnrkk-MuiInputBase-input-MuiOutlinedInput-input": {
      color: "blanchedalmond",
    },
    "& .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root": {
      color: "powderblue",
    },
  };

  const contentStyle = {
    zIndex: 1000,
    "& .css-8ewcdo-MuiInputBase-root-MuiOutlinedInput-root": {
      backdropFilter: "blur(10px) saturate(180%)",
      webkitBackdropFilter: "blur(10px) saturate(180%)",
      backgroundColor: "rgba(17, 25, 40, 0.75)",
      border: "1px solid rgba( 255, 255, 255, 0.18 )",
    },
    "& .css-e4w4as-MuiFormLabel-root-MuiInputLabel-root, & .css-o943dk-MuiFormLabel-root-MuiInputLabel-root.Mui-focused,  & .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root":
      {
        color: "violet",
      },
    "& .css-1sqnrkk-MuiInputBase-input-MuiOutlinedInput-input": {
      color: "white",
    },
    "& .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root": {
      color: "pink",
    },
  };

  function contentAnimation() {
    anime({
      targets: ".gridContents",
      opacity: 1,
      duration: 500,
      delay: function (grid, i, l){
        return 100*i;
      },
      easing: "easeInOutQuad",
    });
  }

  React.useEffect(() => {
    contentAnimation();
  }, []);

  return (
    <div className="NewBlog">
      <ResponsiveAppBar />
      <TextField
        className="gridContents"
        sx={styleTitle}
        fullWidth
        label="Title"
        id="fullWidth"
        margin="normal"
        size="standard"
        variant="filled"
      />
      <Grid
        sx={gridStyle}
        container
        spacing={{ xs: 1, sm: 1, md: 3 }}
        columns={{ xs: 1, sm: 2, md: 2 }}
        direction="rows"
        justifyContent="space-between"
      >
        <Grid
          sx={{ padding: "3% 5% 0 3%" }}
          container
          spacing={{ xs: 1, sm: 1, md: 1 }}
          columns={{ xs: 1, sm: 2, md: 2 }}
          direction="rows"
          md={1}
        >
          <Grid
            className="gridContents"
            sx={{ height: "fit-content", opacity: '0' }}
            alignContent="center"
            item
            xs={1}
            sm={2}
            md={2}
          >
            <TextField
              sx={otherStyle}
              margin="none"
              id="filled-textarea"
              label="Summary"
              maxRows="5"
              placeholder="Short summary..."
              multiline
              variant="filled"
              fullWidth
            />
          </Grid>
          <Grid
            className="gridContents"
            sx={{ height: "fit-content", opacity: "0"}}
            item
            xs={1}
            sm={1}
            md={1}
          >
            <TextField
              sx={otherStyle}
              id="filled-textarea"
              label="Tag"
              placeholder="Tags..."
              multiline
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid
            className="gridContents"
            sx={{ height: "fit-content", opacity: "0"}}
            item
            xs={2}
            sm={1}
            md={1}
          >
            <TextField
              sx={otherStyle}
              id="filled-textarea"
              label="Author"
              placeholder="Your name..."
              multiline
              variant="outlined"
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid
          className="gridContents"
          id="filled-content"
          alignItems="center"
          justifyContent="center"
          justifyItems="center"
          item
          xs={1}
          sm={2}
          md={1}
          sx={{ width: "100%", height: "100%", padding: "0 2% 0 5%", opacity: "0"}}
        >
          <TextField
            sx={contentStyle}
            label="Content"
            placeholder="Write here..."
            multiline
            variant="outlined"
            rows="15"
            fullWidth
            onClick={contentAnimation}
          />
        </Grid>
      </Grid>
      <div className="svg">
        <svg
          fill="#000000"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 168.116 168.115"
          xml:space="preserve"
          stroke="#000000"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g>
              {" "}
              <path d="M89.795,60.477c0,0-1.229,5.39-6.419,5.39c-5.182,0-5.673-5.39-5.673-5.39s-3.447,8.821-5.756,8.821 c-2.311,0-32.948-14.889-32.948-14.889s-4.662-1.984-2.437-6.063C33.316,49.784,9.957,57.215,0,82.708 c3.411-2.475,6.936-4.278,10.085-2.694c2.533,1.278,15.472,9.437,15.472,9.437s2.012,1.17,1.497,6.735 c0.901-0.781,6.723-5.59,9.929-4.044c3.21,1.549,17.481,10.107,17.481,10.107s1.02,0.65,0.955,6.067 c1.765-2.265,5.657-6.128,8.465-4.716c2.706,1.438,12.216,6.572,16.142,8.755c3.929,2.188,4.418,7.414,4.418,7.414 s0.105-5.215,4.033-7.414c2.479-1.258,15.076-8.088,15.076-8.088s3.194-1.159,9.38,4.729c-0.089-2.222-1.041-4.958,0.71-6.741 c1.746-1.773,16.202-9.75,16.202-9.75s2.835-1.852,9.922,3.686c0.12-1.854,0.043-4.552,2.124-6.067 c2.078-1.516,16.809-9.437,16.809-9.437s4.771-2.503,9.417,4.046c-0.377-3.395-7.895-23.534-35.951-35.036 c-0.498,1.562,1.998,2.626-3.721,5.389c-4.755,2.299-32.279,14.148-32.279,14.148S92.953,70.501,89.795,60.477z"></path>{" "}
            </g>{" "}
          </g>
        </svg>
      </div>
      <Footer />
    </div>
  );
}
