import { createStackNavigator, createAppContainer } from "react-navigation";
import React, { Component } from "react";

import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  LayoutAnimation,
  Platform,
  UIManager,

  TouchableOpacity,
  
 
} from "react-native";

import axios from "axios";
import transactionsStyle from "./transacationsStyle";
import CartCard from './cartCard'
export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        cart:[],
        totalPrice:0
    };
    // this.onRefresh = this.onRefresh.bind(this);
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  Buy = async () => {
    axios({
     method: "post",
     url:
       "http://192.168.1.7:5000/api/transaction/",
     data: {
      userId:"5de53d6c9f686208fbae3adb",
      date:Date().toString(),
      itemsAndMeals:this.state.cart,
      totalPrice:this.state.totalPrice
     },
   }).then(res => {
     return alert("Done Purchase");
  
   }).catch(e => {
     console.log(e)
   
     return alert(e.response.data.error);
   });
 
 };
  changeLayout = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({ expanded: !this.state.expanded });
  }
  async componentDidMount() {
    axios({
      method: "post",
      url: `http://192.168.1.7:5000/api/user/viewUser`,
    data: {
        id:'5de53d6c9f686208fbae3adb'
    },
    }
    )
      .then(res => {
        const { data } = res;
       
        this.setState({
     
            totalPrice:data.data.cart.totalBalance
        });
        this.setState({
          cart:data.data.cart.itemsAndMeals

      });
        console.log(this.state.user)
   
      })
      .catch(e => {
        this.setState({ loading: false, refreshing: false });
        console.log(e)
        
        return alert("Something went wrong, please try again later");
      });
  }
 
  render() {
    
    return (
      <SafeAreaView style={{ flex: 1, }}>
        <ScrollView>
            <View>
                <Text style={{
                    height:50,
                    top:20,
                    left:20,
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 24,
    lineHeight: 32,

    }}>My Cart</Text>
               


                <View style={ {
    flex: 1,

    paddingHorizontal: 10,
    justifyContent: 'center',
    paddingTop: (Platform.OS === 'ios') ? 20 : 0
  }}>
<View style={transactionsStyle.container}>


   {
   
   this.state.cart.map(element => (


<CartCard food={element} ></CartCard> 
 
))
} 

  </View>


  <Text style={{
                    height:50,
                    marginTop:20,
                    left:20,
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 18,
    lineHeight: 24,
    color:'#03fc94'

    }} > Total Price : {this.state.totalPrice} </Text>

<TouchableOpacity style={transactionsStyle.AddTo1} onPress={this.addToCart}  >
                  <Text style={{color:'white',fontStyle: "normal",top:2,left:2,
    fontWeight: "normal",
    fontSize: 20,
    lineHeight: 24,}} onPress={this.Buy}> BUY</Text>
                </TouchableOpacity>
</View>

</View>
            
        </ScrollView>
      </SafeAreaView>
    );
  }
}