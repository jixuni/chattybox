import React from "react";
import TextField from "@material-ui/core/TextField";
import Send from "@material-ui/icons/Send";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";

class ChatTextBoxComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      chatText: ""
    };
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.chatTextBoxContainer}>
        <TextField
          placeholder="Type your message..."
          onKeyUp={e => this.userTyping(e)}
          id="chattextbox"
          className={classes.chatTextBox}
          onFocus={this.userClickedInput}
        />
        <Send onClick={this.submitMessage} className={classes.sendBtn} />
      </div>
    );
  }

  userTyping = e =>
    e.keyCode === 13
      ? this.submitMessage()
      : this.setState({ chatText: e.target.value });
  //Regex check if its empty input
  messageValid = txt => txt && txt.replace(/\s/g, "").length;

  userClickedInput = () => {
    console.log("Clicked Input");
  };
  submitMessage = () => {
    if (this.messageValid(this.state.chatText)) {
      //call parent function
      document.getElementById("chattextbox").value = "";
    }
  };
}

export default withStyles(styles)(ChatTextBoxComponent);
