import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Typography from "@mui/material/Typography";

function Footer() {
    return (
        <footer style={{zIndex: 4}}>
            <Typography className="footerContent" variant="caption">
                Developed and maintained by <br></br> Debmalya Sen
            </Typography>
            <div className="socialMedia">
                <InstagramIcon sx={{ color: "pink", fontSize: "30px" }} />
                <FacebookIcon sx={{ color: "blue", fontSize: "30px" }} />
                <GitHubIcon sx={{ color: "grey", fontSize: "30px" }} />
                <LinkedIn sx={{ color: "lightblue", fontSize: "30px" }} />
            </div>
        </footer>
    );
}

export default Footer;
