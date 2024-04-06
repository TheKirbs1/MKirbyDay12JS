/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adjective = ["great", "big", "gnarly", "tiny"];
  let noun = ["jogger", "raccoon", "driver", "guy"];
  let URL = [".com", ".fr", ".io", ".net", ".tv"];

  console.log("Regular for Loop");
  for (let pronounindex = 0; pronounindex < pronoun.length; ++pronounindex) {
    for (let adjindex = 0; adjindex < adjective.length; ++adjindex) {
      for (let nounindex = 0; nounindex < noun.length; ++nounindex) {
        for (let URLindex = 0; URLindex < URL.length; ++URLindex) {
          console.log(
            `${pronoun[pronounindex]}${adjective[adjindex]}${noun[nounindex]}${URL[URLindex]}`
          );
        }
      }
    }
  }
};
