import React from "react";
import "./newBlog.css";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";

export default function InputForm(props) {

    return (
        <Grid
            className={props.className}
            sx={props.gridStyle}
            alignContent={props.align}
            xs={props.xs}
            sm={props.sm}
            md={props.md}
            item
        >
            <TextField
                onChange={props.handleChange}
                sx={props.styling}
                label={props.label}
                rows={props.rows}
                maxRows={props.maxRows}
                placeholder={props.placeholder}
                multiline
                variant={props.variant}
                fullWidth={props.fullWidth}
                value={props.value}
                name={props.name}
            />
        </Grid>
    );
}
