import React from "react";
import ResponsiveAppBar from "./Header";
import SmallNote from "./SmallNote";
import "./Home.css";
import welcomeToBatBlog from "../WelcomeToBatBlog";
import { v4 as uuidv4 } from "uuid";
import OutlinedButtons from "./Button";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <ResponsiveAppBar />
      <div className="noteDiv">
        {welcomeToBatBlog.map((text, idx) => {
          let myuuid = uuidv4();
          return (
            <SmallNote
              top={idx === 1 && 0}
              key={idx}
              title={text.title}
              content={text.content}
              tag={text.tag}
              author={text.author}
              id={myuuid}
            />
          );
        })}
      </div>
      <OutlinedButtons />
      <Footer />
    </div>
  );
}
