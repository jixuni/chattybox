## ChattyBox

![ScreenShot](https://github.com/jixuni/chattybox/blob/master/public/screenshot.png)

ChattyBox is a chat app that communicates in real time using firebase database, without the use of socket.io

## Getting Started

clone the repo and open index.js
change the firebase creditial to your own for testing

### Prerequisites

Chrome or Mozilla, have not tested any other browsers.

## Deployment

It is currently deploy on heroku [chattybox](https://chattymate009.herokuapp.com/login)

## Known Issues

Interesting point when I was trying to deploy it to Heroku, the environmental variable cannot have "-" in them. Took me a while to figure it out. The process.env needs to be parse.

## Built With

- [React](https://reactjs.org/) - JavaScript frame work
- JavaScript
- [MaterialUI](https://material-ui.com/)
- [Firebase](https://firebase.google.com/)

## Bugs

- There is a bug with sending message to another user. Its register in the database but the app is not seeing in for some reason.
