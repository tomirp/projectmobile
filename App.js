import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import ListItem from "./src/components/ListItem/ListItem";

export default class App extends Component {
  state = {
    places: []
  };

  placeSubmitHandler = (placeName) => { //Data baru masuk
    if(placeName.trim() === ""){ //trim memotong spasi 
      return //berhenti
    }

    //setState diberikan function, property yang masuk adalah data state sebelumnya
    this.setState((prevState) => { //variable previous state || Data lama
      return {
        places: prevState.places.concat(placeName)
      }
    })
  };

  render() {
    const outputList = this.state.places.map(place => {
      return <ListItem placeName = {place}/>
    }) 

    return (
      <View style={styles.container}>
        <PlaceInput onSubmitHandler = {this.placeSubmitHandler}/>
        <View>{outputList}</View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
