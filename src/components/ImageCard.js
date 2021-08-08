import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Collapse } from "@material-ui/core";
import { shadows } from "@material-ui/system";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  root: {
    maxWidth: 445,
    background: "rgba(0,0,0,0.7)",
    margin: "10px",
  },
  media: {
    height: 240,
  },
  title: {
    fontFamily: "Nunito",
    fontWeight: "bold",
    fontSize: "2rem",
    color: "#fff",
  },
  desc: {
    fontFamily: "Nunito",
    fontSize: "1.2rem",
    color: "#ddd",
  },
  box1: {
    margin: "50px 10px",
  },
});

export default function ImageCard({ coffees, checked }) {
  const classes = useStyles();

  return (
    <div>
      <Box boxShadow={3} m={1} p={1} className={classes.box1}>
        <Collapse in={checked} {...(checked ? { timeout: 3000 } : {})}>
          <Card className={classes.root}>
            <CardMedia className={classes.media} image={coffees.imageUrl} />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                className={classes.title}
              >
                {coffees.title}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className={classes.desc}
              >
                {coffees.description}
              </Typography>
            </CardContent>
          </Card>
        </Collapse>
      </Box>
      <Box boxShadow={3} m={1} p={1} className={classes.box1}>
        <Collapse in={checked} {...(checked ? { timeout: 3000 } : {})}>
          <Card className={classes.root}>
            <CardMedia
              component="video"
              className={classes.media}
              image={coffees.video}
              width="320"
              height="240"
              autoPlay
              loop
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                className={classes.title}
              >
                {coffees.titlev}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className={classes.desc}
              >
                {coffees.descriptionv}
              </Typography>
            </CardContent>
          </Card>
        </Collapse>
      </Box>
    </div>
  );
}
