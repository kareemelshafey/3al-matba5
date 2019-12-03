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
 
} from "react-native";

import axios from "axios";
import transactionsStyle from "./transacationsStyle";
import FoodCard from './foodCard'
export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        user:null
    };
    // this.onRefresh = this.onRefresh.bind(this);
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  changeLayout = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({ expanded: !this.state.expanded });
  }
  async componentDidMount() {
    console.log("asss")
    axios({
      method: "post",
      url: `http://192.168.1.42:5000/api/user/viewUser`,
      body: {
        id:'5de53d6c9f686208fbae3adb'
    },
    }
    )
      .then(res => {
          console.log(res.data.data)
        const { data } = res;
       
        this.setState({
            user:data.data
        });
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


  {/* {this.state.user.cart.itemsAndMeals.map(element => (


<FoodCard food={element} ></FoodCard> 
 
))
} */}

  </View>
</View>

</View>
            
        </ScrollView>
      </SafeAreaView>
    );
  }
}