import React from "react";
import ChatListComponent from "../chatlist/chatList";

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

  render() {
    return (
      <div>
        <div>Hello World From Dashboard</div>
        <ChatListComponent
          history={this.props.history}
          newChatBtnFn={this.newChatBtnClicked}
          selectChatFn={this.selectChat}
          chats={this.state.chats}
          userEmail={this.state.email}
          selectedChatIndex={this.state.selectedChat}
        />
      </div>
    );
  }

  selectChat = () => {
    console.log("Selected a chat");
  };

  newChatBtnClicked = () => {
    console.log("New Chat button Clicked!");
  };
}

export default DashboardCompoent;
