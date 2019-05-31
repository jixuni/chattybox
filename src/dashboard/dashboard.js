import React from "react";
import ChatListComponent from "../chatlist/chatList";
import { Button, widthStyles } from "@material-ui/core";
import styles from "./styles";
import { withStyles } from "@material-ui/styles";

const firebase = require("firebase");

class DashboardCompoent extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedChat: null,
      newChatFormVisible: false,
      email: null,
      chats: []
    };
  }
  //testing
  render() {
    const { classes } = this.props;

    return (
      <div>
        <ChatListComponent
          history={this.props.history}
          newChatBtnFn={this.newChatBtnClicked}
          selectChatFn={this.selectChat}
          chats={this.state.chats}
          userEmail={this.state.email}
          selectedChatIndex={this.state.selectedChat}
        />
        <Button className={classes.signOutBtn} onClick={this.signOut}>
          {" "}
          Sign Out
        </Button>
      </div>
    );
  }

  signOut = () => firebase.auth().signOut();

  selectChat = chatIndex => {
    console.log("Selected a chat", chatIndex);
  };

  newChatBtnClicked = () => {
    this.setState({ newChatFormVisible: true, selectedChat: null });
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(async _usr => {
      if (!_usr) {
        this.props.history.push("/login");
      } else {
        await firebase
          .firestore()
          .collection("chats")
          .where("users", "array-contains", _usr.email)
          .onSnapshot(async res => {
            const chats = res.docs.map(_doc => _doc.data());
            await this.setState({
              email: _usr.email,
              chats: chats
            });
            console.log(this.state);
          });
      }
    });
  };
}

export default withStyles(styles)(DashboardCompoent);
