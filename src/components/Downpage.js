import React from "react";
import { makeStyles } from "@material-ui/core";
import ImageCard from "./ImageCard";
import coffees from "./coffees";
import useWindowPosition from "../hook/useWindowPosition";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  left: {
    position: "relative",
    top: "10px",
  },
}));
export default function Downpage() {
  const classes = useStyles();
  const checked = useWindowPosition("header");

  return (
    <div className={classes.root} id="coffees1">
      <ImageCard
        coffees={coffees[0]}
        checked={checked}
        className={classes.left}
      />
      <ImageCard coffees={coffees[1]} checked={checked} />
    </div>
  );
}
