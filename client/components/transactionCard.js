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

export default class TransactionCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      editable: false,
    
      transaction:this.props.transaction
    };
    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  changeLayout = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({ expanded: !this.state.expanded });
  };
 

  render() {
    

    return (
      <Card style={transactionsStyle.btnTextHolder}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={this.changeLayout}
          style={transactionsStyle.Btn}
        >

          <Text style={transactionsStyle.name}>Date:</Text>
          <Text style={transactionsStyle.nameText2}>{this.state.transaction.date}</Text>
          
          <Text style={transactionsStyle.price}>Total Price</Text>
          <Text style={transactionsStyle.priceText2}>{this.state.transaction.totalPrice}</Text>
          
        </TouchableOpacity>

        <View
          style={{ height: this.state.expanded ? null : 0, overflow: "hidden" }}
        >

          <Text style={transactionsStyle.items1}>Recipes and Items</Text>

          {this.state.transaction.itemsAndMeals.map(element => (

<Text style={{position:'relative',left:20,marginBottom:10}}>{element.name}</Text>

))
}
        </View>
      </Card>
    );
  }
}