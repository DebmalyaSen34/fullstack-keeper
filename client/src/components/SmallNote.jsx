import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import anime from "animejs";

export default function BasicCard(props) {
  const noteStyle = {
    maxWidth: "20vw",
    minWidth: "200px",
    backdropFilter: "blur(10px) saturate(180%)",
    webkitBackdropFilter: "blur(10px) saturate(180%)",
    backgroundColor: "rgba(17, 25, 40, 0.75)",
    borderRadius: "10px",
    border: "1px solid rgba(255, 255, 255, 0.125)",
    margin: "2% 2%",
    color: "white",
    opacity: 0,
    position: "absolute",
    height: "fit-content",
    top: props.top,
  };

  anime({
    targets: ".Card",
    opacity: 1,
    easing: "linear",
    translateX: function (card, i, l) {
      if (i === 0) return "-25vw";
      else if (i === 2) return "25vw";
      else return "0";
    },
    translateY: function (card, i, l) {
      return i === 1 ? "50%" : "0";
    },
  });

  return (
    <Card className="Card" sx={noteStyle}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="primary" gutterBottom>
          {props.tag}
        </Typography>
        <Typography variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="secondary">
          {props.author}
        </Typography>
        <Typography variant="body2">{props.content}</Typography>
      </CardContent>
    </Card>
  );
}
