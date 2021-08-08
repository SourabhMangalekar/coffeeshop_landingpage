import React, { useEffect, useState } from "react";
import {
  AppBar,
  Collapse,
  Fade,
  IconButton,
  makeStyles,
  MenuItem,
  Slide,
  Toolbar,
  Zoom,
} from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { Link as Scroll } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  appbar: {
    background: "none",
  },
  title: {
    flexGrow: "1",
    fontFamily: "Nunito",
  },
  wrapper: {
    width: "80%",
    margin: "0 auto",
  },
  colorTitle: {
    color: "#553520",
  },

  icon: {
    color: "#fff",
    fontSize: "1.5rem",
  },
  hText: {
    color: "#fff",
    fontFamily: "Nunito",
    textAlign: "center",
    fontSize: "3.5rem",
  },
  goDown: {
    color: "#452A1E",
    fontSize: "3rem",
  },
  container: {
    textAlign: "center",
  },
}));
export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.wrapper}>
          <Collapse
            in={checked}
            {...(checked ? { timeout: 2000 } : {})}
            collapsedHeight="150"
          >
            <h1 className={classes.title}>
              <span className={classes.colorTitle}>Coffee</span>Shop
              <span className={classes.colorTitle}>.</span>
            </h1>
          </Collapse>

          <IconButton>
            <SortIcon className={classes.icon}></SortIcon>
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className={classes.container}>
        <Fade
          in={checked}
          {...(checked ? { timeout: 4000 } : {})}
          collapsedHeight="50"
        >
          <div>
            <h1 className={classes.hText}>
              {" "}
              Welcome to the <br />{" "}
              <span className={classes.colorTitle}>Coffee</span>shop
              <span className={classes.colorTitle}>.</span>{" "}
            </h1>{" "}
            <br />
            <Scroll to="coffees1" smooth={true}>
              <ExpandMore className={classes.goDown} />
            </Scroll>
          </div>
        </Fade>
      </div>
    </div>
  );
}
