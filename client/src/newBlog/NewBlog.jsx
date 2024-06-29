import React, { useState } from "react";
const ResponsiveAppBar = React.lazy(() => import('../components/Header'));
import "./newBlog.css";
import Footer from "../components/Footer";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
import anime from "animejs";
import InputForm from "./InputForm";
import BasicButtons from "../components/Button";
import axios from "axios";

export default function NewBlog(props) {

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    tag: "",
    author: "",
    summary: ""
  });

  const onChange = React.useCallback((event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setFormData(prevNote => {
      return {
        ...prevNote,
        [name]: value
      }
    })
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();

    axios.post('http://localhost:5000/submitBlog', formData, {
      withCredentials: true
    })
      .then(result => {
        if (result.status === 200) {
          console.log(result);
          console.log('Data successfully submitted!')
        }
      })
      .catch(error => {
        if (error.response && error.response.status === 401) {
          console.log(error.response.data.message);
        } else {
          console.log(error.message);
        }
      })

    setFormData({
      title: "",
      content: "",
      tag: "",
      author: "",
      summary: ""
    });
  };


  const gridStyle = React.useMemo(() => ({
    position: "absolute",
    top: "30vh",
    height: "fit-content",
    width: "50%",
  }), []);

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
      delay: function (grid, i, l) {
        return 100 * i;
      },
      easing: "easeInOutQuad",
    });
  }

  React.useEffect(() => {
    return () => {
      contentAnimation();
      document.body.style.backgroundColor = '#0f0c29';
      document.body.style.background = '#-webkit-linear-gradient(to left, #24243e, #302b63, #0f0c29)';
      document.body.style.background = '#linear-gradient(to left, #24243e, #302b63, #0f0c29)';
    }
  }, []);

  console.log(formData);

  return (
    <form>
      <div className="NewBlog">
        <ResponsiveAppBar />
        <TextField
          name="title"
          onChange={onChange}
          className="gridContents"
          sx={styleTitle}
          fullWidth
          label="Title"
          id="fullWidth"
          margin="normal"
          size="standard"
          variant="filled"
          value={formData.title}
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
            <InputForm
              name="summary"
              handleChange={onChange}
              className="gridContents"
              gridStyle={{ height: "fit-content", opacity: '0' }}
              align="center"
              xs={1}
              sm={2}
              md={2}
              styling={otherStyle}
              label='Summary'
              maxRows="5"
              placeholder="Short summary..."
              variant="filled"
              fullWidth={true}
              value={formData.summary}
            />

            <InputForm
              name="tag"
              handleChange={onChange}
              className="gridContents"
              gridStyle={{ height: "fit-content", opacity: "0" }}
              xs={2}
              sm={1}
              md={1}
              styling={otherStyle}
              label="Tag"
              maxRows='2'
              placeholder="Tag this with..."
              fullWidth={true}
              variant='outlined'
              value={formData.tag}
            />

            <InputForm
              name="author"
              handleChange={onChange}
              className="gridContents"
              gridStyle={{ height: "fit-content", opacity: "0" }}
              xs={2}
              sm={1}
              md={1}
              styling={otherStyle}
              label="Author"
              placeholder="Your name..."
              variant="outlined"
              fullWidth={true}
              maxRows="2"
              value={formData.author}
            />
          </Grid>
          <InputForm
            name="content"
            handleChange={onChange}
            className="gridContents"
            alignItems="center"
            justifyContent="center"
            justifyItems="center"
            xs={1}
            sm={2}
            md={1}
            gridStyle={{ width: "100%", height: "100%", padding: "0 2% 0 5%", opacity: "0" }}
            styling={contentStyle}
            label="Content"
            placeholder="Write here..."
            variant="outlined"
            rows="12"
            fullWidth={true}
            value={formData.content}
          />
          <BasicButtons
            style={{ left: '50%', width: 'fit-content', position: 'relative', bottom: "-40px" }}
            animation={true}
            text="Submit"
            ClickOn={onSubmit}
          />
        </Grid>
        <Footer />
      </div>
    </form>
  );
}