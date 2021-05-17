import { styles } from 'ansi-colors'
import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Ball from './BallMoving'

class Deck extends Component {
    renderCard(){
        return this.props.data.map((item) => {
            return this.props.renderCard(item)
        })
    }
    render(){
        return(
            <View style={styles.container}>
                {this.renderCard()}
            </View>
        )
    }
}

export default Deck