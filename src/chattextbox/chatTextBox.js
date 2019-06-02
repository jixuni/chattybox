import React from "react";
import TexField from "@material-ui/core/TextField";
import Send from "@material-ui/icons/Send";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";

class ChatTextBoxComponent extends React.Component {
  render() {
    return <div> Hello from chat text box</div>;
  }
}

export default withStyles(styles)(ChatTextBoxComponent);
