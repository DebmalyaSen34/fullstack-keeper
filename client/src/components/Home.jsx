import React, { useEffect } from "react";
import ResponsiveAppBar from "./Header";
import SmallNote from "./SmallNote";
import styles from './Home.module.css'
import welcomeToBatBlog from "../WelcomeToBatBlog";
import { v4 as uuidv4 } from "uuid";
import Footer from "./Footer";
import BasicButtons from "./Button";

export default function Home() {


  useEffect(() => {
    return () => { 
      document.body.style.backgroundColor = '#0f0c29';
      document.body.style.background = '#-webkit-linear-gradient(to left, #24243e, #302b63, #0f0c29)';
      document.body.style.background = '#linear-gradient(to left, #24243e, #302b63, #0f0c29)';
    }
  }, []);

  return (
    <div>
      <ResponsiveAppBar />
      <div className={styles.noteDiv}>
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
              animate={true}
            />
          );
        })}
      </div>
      <BasicButtons
      style={{position: 'relative', top: '50vh'}}
      text="Get started" animation={true} redirect="/login" />
      <Footer />
    </div>
  );
}
