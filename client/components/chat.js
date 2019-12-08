import React, { Component } from "react";

import { GiftedChat } from 'react-native-gifted-chat'
import { View } from "native-base";
import axios from "axios";
export default class Chatt extends Component {
    state = {
        messages: [
            {
              _id: 1,
              text: "Hello This is our amazing chatBot you can ask about any recipes and if we dont have an answer we can easily we dont know :D",
              createdAt: new Date(),
              user: {
                _id: 2,
                name: "React Native",
                avatar: "https://placeimg.com/140/140/any",
              },
            },
          ], };
   
    async onSend(messages = []) {
     const newMessages = []
       
       for(let i=0;i<this.state.messages.length;i++){
        newMessages.push(  this.state.messages[i])
       }
        newMessages.push(  {
            _id: 1,
            text: messages[0].text,
            createdAt: new Date(),
            user: {
              _id: 1,
              name: "React Native",
              avatar: "https://placeimg.com/140/140/any",
            },
    })
     
     await axios({
            method: "post",
            url: `http://secure-caverns-33420.herokuapp.com/api/chat/`,
          data: {input: messages[0].text
          }
        }
          )
            .then(res => {
              const { data } = res;
              newMessages.push({
                    _id: 1,
                    text: data.data,
                    createdAt: new Date(),
                    user: {
                      _id: 2,
                      name: "React Native",
                      avatar: "https://placeimg.com/140/140/any",
                    }
                  })
             
         
            })
            .catch(e => {
              console.log(e)
              
              return alert("Something went wrong, please try again later");
            });

         await   this.setState(previousState => ({
                messages:newMessages.sort(function(a,b){
                    return b.createdAt - a.createdAt})}))
      
    }
    render() {
      return (
      
        <GiftedChat 
          messages={this.state.messages}
          onSend={ (messages)  => {this.onSend(messages) 
           }}
          user={{
            _id: 1,
          }}
        />
       
      );
    }
  } 