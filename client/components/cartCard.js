import React, { Component } from "react";
import {
  Text,
  View,
  Alert,
  LayoutAnimation,
  Platform,
  UIManager,
  TouchableOpacity,
  Image,
  AsyncStorage,
  TextInput
} from "react-native";
import axios from "axios";
import { Card, CardContent } from "react-native-cards";
import transactionsStyle from "./transacationsStyle";
import { Icon } from 'react-native-elements'
export default class CartCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      editable: false,
    
      food:this.props.food
    };
    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  changeLayout = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  };
 
  delete = async () => {
    axios({
     method: "post",
     url:
       "http://192.168.1.7:5000/api/recipe/removeFromCart",
     data: {
     id:"5de53d6c9f686208fbae3adb",
     idRecipe:this.props.food._id

     },
   }).then(res => {
    this.setState({ expanded: !this.state.expanded });

       return alert("Deleted successfully");
  
   }).catch(e => {
     console.log(e)
   
     return alert(e.response.data.error);
   });
 
 };

  render() {
let price;
if(this.state.food.type=="item"){
  price=  
   <Text style={transactionsStyle.priceText1}>{this.state.food.totalPrice}</Text>
   
}else{
price =<Text style={transactionsStyle.priceText}>{this.state.food.totalPrice}</Text>
   
}    

    return (
      <Card style={transactionsStyle.btnTextHolder1}>
          <Text style={transactionsStyle.name1}>Name:</Text>
          <Text style={transactionsStyle.nameText1}>{this.state.food.name}</Text>
          
          <Text style={transactionsStyle.price1}>Price:</Text>
          {price}
          <TouchableOpacity style={{position:'absolute',left:295,top:12}} onPress={this.delete}
                            >
                                <Icon name="delete" />
                            </TouchableOpacity>
          
      </Card>

    );
  }
}