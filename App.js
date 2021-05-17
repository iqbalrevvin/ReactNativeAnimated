import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import BallMoving from './src/Screens/BasicAnimated/BallMoving'
import Deck from './src/Screens/BasicAnimated/Deck'

const DATA = [
  { id: 1, text: 'Card #1', uri: 'https://picsum.photos/seed/picsum/400/300' },
  { id: 2, text: 'Card #2', uri: 'https://picsum.photos/id/1/400/300' },
  { id: 3, text: 'Card #3', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 4, text: 'Card #4', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
  { id: 5, text: 'Card #5', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 6, text: 'Card #6', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 7, text: 'Card #7', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 8, text: 'Card #8', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
];
class App extends Component {

  renderCard(item) {
    return (
      // <Text key={item.id}>{item.text}</Text>
      <Card key={item.id}>
        <Card.Title>HELLO WORLD</Card.Title>
        <Card.Divider />
        <Card.Image source={{ uri: 'https://picsum.photos/id/'+item.id+'/400/300' }}>
        </Card.Image>
          <Text style={{ margin: 10 }}>
            {item.text} but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Text>
          <Button
            icon={<Icon name='home' color='#ffffff' />}
            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
            title='VIEW NOW' />
      </Card>
    )
  }

  render() {
    return (
      <SafeAreaProvider>
        <ScrollView>
          <Deck data={DATA} renderCard={this.renderCard} />
        </ScrollView>
      </SafeAreaProvider>
    )
  }
}
export default App

const styles = StyleSheet.create({
  imageSection: {
    flex: 1,
    width: '100%'
  }
})