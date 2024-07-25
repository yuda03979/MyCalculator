
import React, { Component } from "react";
import { Dimensions, ScrollView, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Button from "../components/Buttons";
import Row from "../components/Row";
import calc, { arr } from "./calc";

export default class App extends Component {
  state = { array: arr, result: "0" };

  HandleTap = ({ type, value }) => {
    this.setState((state) => {
      let [Array, result] = calc({ type, value, arr: this.state.array, result: this.state.result});
      console.log(result)
      return { array: Array, result };
    });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.calculator}>
            <View style={styles.outputScreen}>
              <Text style={styles.textOutputScreen}>
                {this.state.result.toLocaleString()}
              </Text>
            </View>

            <Row>
              <Button text="C" onPress={() => this.HandleTap({ type: "clear", value: "" })} />
              <Button text="+-" onPress={() => this.HandleTap({ type: "posneg", value: "" })} />
              <Button text="%" onPress={() => this.HandleTap({ type: "percentage", value: "" })} />
              <Button text="/" onPress={() => this.HandleTap({ type: "operator", value: "/" })} />
            </Row>

            <Row>
              <Button text="7" onPress={() => this.HandleTap({ type: "number", value: "7" })} />
              <Button text="8" onPress={() => this.HandleTap({ type: "number", value: "8" })} />
              <Button text="9" onPress={() => this.HandleTap({ type: "number", value: "9" })} />
              <Button text="X" onPress={() => this.HandleTap({ type: "operator", value: "*" })} />
            </Row>

            <Row>
              <Button text="4" onPress={() => this.HandleTap({ type: "number", value: "4" })} />
              <Button text="5" onPress={() => this.HandleTap({ type: "number", value: "5" })} />
              <Button text="6" onPress={() => this.HandleTap({ type: "number", value: "6" })} />
              <Button text="-" onPress={() => this.HandleTap({ type: "operator", value: "-" })} />
            </Row>

            <Row>
              <Button text="1" onPress={() => this.HandleTap({ type: "number", value: "1" })} />
              <Button text="2" onPress={() => this.HandleTap({ type: "number", value: "2" })} />
              <Button text="3" onPress={() => this.HandleTap({ type: "number", value: "3" })} />
              <Button text="+" onPress={() => this.HandleTap({ type: "operator", value: "+" })} />
            </Row>

            <Row>
              <Button text="0" onPress={() => this.HandleTap({ type: "number", value: "0" })} />
              <Button text="." onPress={() => this.HandleTap({ type: "number", value: "." })} />
              <Button text="=" onPress={() => this.HandleTap({ type: "equal", value: "="})} />
            </Row>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const screenWidth = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5400e5",
    paddingTop: 50,
    height: '100%'
  },
  calculator: {
    backgroundColor: "#2d3542",
    padding: 5,
    borderRadius: 10,
    alignSelf: "center",
    alignItems: "center",
    width: screenWidth - 10,
  },
  outputScreen: {
    backgroundColor: "#009b57",
    borderRadius: 10,
    width: screenWidth - 30,
    padding: 15,
    margin: 10,
    textAlign: "right",
  },
  textOutputScreen: {
    color: "#fff",
    fontSize: 42,
    textAlign: "right",
  },
});