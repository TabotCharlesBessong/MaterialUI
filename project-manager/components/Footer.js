import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import footerAdornment from '../public/assets/footerAdornment.svg'

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    zIndex: 1302,
    position: "relative"
  },
  adornment: {
    width: "25em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "21em"
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em"
    }
  },
  
}));

export default function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Image className={classes.adornment} src={footerAdornment} alt="" width={300} height={150} />
    </footer>
  );
}
