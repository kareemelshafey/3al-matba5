import { createStackNavigator, createAppContainer } from "react-navigation";
import React, { Component } from "react";
import FoodCard from './foodCard'
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

export default class Food extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        recipes:[]
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
      url: `http://192.168.1.7:3000/api/recipe/viewAllRecipes`,
    }
    )
      .then(res => {
          console.log(res.data.data)
        const { data } = res;
       
        this.setState({
            recipes:data.data
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

    }}>Recipes</Text>
               


                <View style={ {
    flex: 1,

    paddingHorizontal: 10,
    justifyContent: 'center',
    paddingTop: (Platform.OS === 'ios') ? 20 : 0
  }}>
<View style={transactionsStyle.container}>


  {this.state.recipes.map(element => (


<FoodCard food={element} ></FoodCard> 
 
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