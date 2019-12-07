import React, { Component } from "react";

import { GiftedChat } from 'react-native-gifted-chat'
import { View } from "native-base";
import axios from "axios";
export default class Chatt extends Component {
    state = {
        messages: [
            {
              _id: 1,
              text: "How Can I Help You Sir",
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
            url: `http://192.168.1.7:3000/api/chat/`,
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