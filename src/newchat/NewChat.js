import React from "react";
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  Paper,
  withStyles,
  CssBaseline,
  Typography
} from "@material-ui/core";
import styles from "./styles";
const firebase = require("firebase");

class NewChatComponent extends React.Component {
  render() {
    return <div>Welcome to new chat compoennt</div>;
  }
}

export default withStyles(styles)(NewChatComponent);
