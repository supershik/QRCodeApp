import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, ImageBackground } from "react-native";

class Splash extends React.Component {
  componentDidMount() {
    setTimeout((navigation) => {
      // this.props.navigation.navigate("Login");
    }, 2000);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground  source={require("../assets/images/splash.png")}
            style={{ width: '100%', height: "100%", justifyContent: 'flex-end', }} imageStyle={{ borderRadius: 15 }}>
            <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Profile")}
            style={styles.mainBtn}
          >
            <Text
              style={{ fontSize: 14, color: "#fff" }}
            >
              Get Start
            </Text>
          </TouchableOpacity>
        </ImageBackground>

        
      </SafeAreaView>
    );
  }
}
export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    flex: 1,
    resizeMode: "contain",
  },
  title: {
    fontSize: 16,
  },
  mainBtn: {
    position: "absolute",
    bottom: 20,
    width: "80%",
    marginHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 6,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#535baa",
  },
});
