// import React, { Component } from 'react'
// import {View, Animated} from 'react-native'

// class BallMoving extends Component {
//     constructor(){
//         super()
//         console.log('contructor')
//     }

//     position = new Animated.ValueXY(0,0)
//     componentDidMount(){
//         console.log('componentDidMount')
//         Animated.spring(this.position, {
//             useNativeDriver:false,
//             toValue: {x:200, y:200}
//         }).start()
//     }

//     render(){
//         console.log('render component')
//         return(
//             <Animated.View style={this.position.getLayout()}>
//                 <View style={styles.ball} />
//             </Animated.View>
//         )
//     }
// }

// export default BallMoving

// const styles = {
//     ball: {
//         height: 60,
//         width: 60,
//         borderRadius: 30,
//         borderWidth: 30,
//         borderColor: 'black'
//     }
// }


import React, { useEffect } from 'react'
import { View, Animated } from 'react-native'

const BallMoving = () => {

    useEffect(() => {
        Animated.spring(position, {
            useNativeDriver: false,
            toValue: { x: 200, y: 200 }
        }).start()
    }, [])

    let position = new Animated.ValueXY(0, 0)
    return (
        <Animated.View style={position.getLayout()}>
            <View style={styles.ball} />
        </Animated.View>
    )
}

export default BallMoving

const styles = {
    ball: {
        height: 60,
        width: 60,
        borderRadius: 30,
        borderWidth: 30,
        borderColor: 'black'
    }
}