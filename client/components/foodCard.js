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

export default class FoodCard extends React.Component {
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
    this.setState({ expanded: !this.state.expanded });
  };
 

  addToCart = async () => {
     axios({
      method: "post",
      url:
        "http://192.168.1.7:5000/api/recipe/addtoCart",
      data: {
      id:"5de53d6c9f686208fbae3adb",
      idRecipe:this.props.food._id

      },
    }).then(res => {
      return alert("Added successfully");
   
    }).catch(e => {
      console.log(e)
    
      return alert(e.response.data.error);
    });
  
  };


  render() {
    

    return (
      <Card style={transactionsStyle.btnTextHolder}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={this.changeLayout}
          style={transactionsStyle.Btn}
        >

          <Text style={transactionsStyle.name}>Name:</Text>
          <Text style={transactionsStyle.nameText}>{this.state.food.name}</Text>
          
          <Text style={transactionsStyle.price}>Price:</Text>
          <Text style={transactionsStyle.priceText}>{this.state.food.totalPrice}</Text>
          
        </TouchableOpacity>

        <View
          style={{ height: this.state.expanded ? null : 0, overflow: "hidden" }}
        >

          <Text style={transactionsStyle.description}>Description</Text>
          <Text style={transactionsStyle.descriptionText}> {this.state.food.description}</Text>
          
          <Text style={transactionsStyle.items}>INGREDIENTS</Text>

          {this.state.food.items.map(element => (

<Text style={{position:'relative',left:20}}>{element}</Text>

))
}
          <TouchableOpacity style={transactionsStyle.AddTo} onPress={this.addToCart}  >
                  <Text style={{color:'white',fontStyle: "normal",top:2,left:2,
    fontWeight: "normal",
    fontSize: 20,
    lineHeight: 24,}}> Add to MY Cart</Text>
                </TouchableOpacity>
        </View>
      </Card>
    );
  }
}