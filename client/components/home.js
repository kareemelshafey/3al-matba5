import * as React from 'react'
import Food from './food'
import Cart from './cart'
import {
    View,
    Text,Image
    
} from 'react-native'

import {
    Container,
    Header,
    Content,
    Left,
    Right,
    Footer,
    FooterTab,
    Button,
} from 'native-base'
import { Icon } from 'react-native-elements'

export default class MyComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            chat: false,
            food: true,
            item: false,
            cart: false,
        }
    }
    chat = () => {
        this.setState({ item: false })
        this.setState({ food: false })
        this.setState({ cart: false })
        this.setState({ chat: true })
    }
    cart = () => {
        this.setState({ item: false })
        this.setState({ food: false })
        this.setState({ chat: false })
        this.setState({ cart: true })
    }
    item = () => {
        this.setState({ food: false })
        this.setState({ chat: false })
        this.setState({ cart: false })
        this.setState({ item: true })
    }
    food = () => {
        this.setState({ item: false })
        this.setState({ chat: false })
        this.setState({ cart: false })
        this.setState({ food: true })
      }

    render() {
        let render
        if(this.state.food){
        render =<Food></Food>}
if(this.state.cart)
{
render=<Cart></Cart>    
           }           return (
                <Container>
                    <View>
                        <Header style={{ backgroundColor: '#FFF', height: 145 }}>
                           
                                <Image
                                    source={require('../assets/logo.png')}
                                    style={{ alignContent:'center',top:-10 }}
                                />
                           
                           </Header>
                    </View>

                    <Content>
                        {render}
                    </Content>
                    <Footer>
                        <FooterTab style={{ backgroundColor: '#FFF' }}>
                            <Button
                             active={this.state.chat}
                             onPress={this.chat}
                            >
                                <Icon
                                    name="chat"
                                    type="material-community"
                                />
                            </Button>
                            <Button
                             active={this.state.food}
                             onPress={this.food}
                            >
                                <Icon
                                    name="food"
                                    type="material-community"
                                />
                            </Button>
                            <Button
                             active={this.state.item}
                             onPress={this.item}
                            >
                                <Icon  name="local-drink" 
                                
                            
                                />
                            </Button>

                            <Button
                             active={this.state.cart}
                             onPress={this.cart}
                            >
                                 <Image
                                    source={require('../assets/cart.png')}
                                
                                />
                            </Button>

                        </FooterTab>
                    </Footer>
                </Container>
            )
    }
}