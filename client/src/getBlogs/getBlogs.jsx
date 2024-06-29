import React from "react";
const ResponsiveAppBar = React.lazy(() => import("../components/Header"));
import Footer from "../components/Footer";
import "./getBlogs.css";
import axios from 'axios';
import BasicCard from "../components/SmallNote";
import { v4 as uuidv4 } from 'uuid';
import styles from '../components/Home.module.css';

export default function GetBlogs() {
  React.useEffect(() => {
    return () => {
      document.body.style.backgroundColor = "#0f0c29";
      document.body.style.background =
        "#-webkit-linear-gradient(to left, #24243e, #302b63, #0f0c29)";
      document.body.style.background =
        "#linear-gradient(to left, #24243e, #302b63, #0f0c29)";
    };
  }, []);

  const [blogs, setBlogs] = React.useState([]);

  React.useEffect(() => {
    axios.get('http://localhost:5000/yourBlogs')
    .then(result => setBlogs(result.data))
    .catch(err => console.log(err))
  }, []);

  console.log(blogs);

  return(
    <div className="getBlogs">
    <ResponsiveAppBar />
    <div className="blogs">
      {blogs.map((blog) => (
        <BasicCard key={uuidv4()} id={blog._id} animate={false} tag = {blog.tag} title={blog.title} content={blog.summary} author={blog.author} />
      ))}
    </div>
    <Footer />
    </div>
  )
}
