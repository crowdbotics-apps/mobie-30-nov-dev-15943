import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View } from 'react-native'
class App extends Component {
                 render() {
      return (
          <View style={styles.container}>
              <Text>Blank</Text>
          </View>
      );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    padding: 20
  },
})
AppRegistry.registerComponent('App', () => App)
