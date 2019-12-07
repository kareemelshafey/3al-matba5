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
import TransactionCard from './transactionCard'
export default class Transaction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        transactions:[],
        totalPrice:0
    };
    // this.onRefresh = this.onRefresh.bind(this);
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  changeLayout = () => {
    console.log("asss")
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({ expanded: !this.state.expanded });
  }
  async componentDidMount() {
    axios({
      method: "post",
      url: `http://192.168.1.7:3000/api/transaction/viewAllTransactions`,
    
    }
    )
      .then(res => {
        const { data } = res;
        console.log(data.data)
        this.setState({
     
            transactions:data.data
        });
     console.log(data.data)
   
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

    }}>My Transactions</Text>
               


                <View style={ {
    flex: 1,

    paddingHorizontal: 10,
    justifyContent: 'center',
    paddingTop: (Platform.OS === 'ios') ? 20 : 0
  }}>
<View style={transactionsStyle.container}>


   {
   
   this.state.transactions.map(element => (


<TransactionCard transaction={element} ></TransactionCard> 
 
))
} 

  </View>


</View>

</View>
            
        </ScrollView>
      </SafeAreaView>
    );
  }
}