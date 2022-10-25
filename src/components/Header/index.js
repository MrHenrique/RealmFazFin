import React from "react";
import { Feather } from "@expo/vector-icons";
import { SafeAreaView, Text, TouchableOpacity, StyleSheet } from "react-native";
function Header({ title }) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.menuButton}>
        <Feather name="menu" size={30} color="#FFF" />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row-reverse",
    alignItems: "center",
    backgroundColor: "rgba(15, 109, 0, 0.9)",
    height: 50,
    paddingLeft: 10,
  },
  menuButton: {
    height: 30,
    justifyContent: "center",
    paddingLeft: 15,
  },
  title: {
    color: "#FFF",
    fontSize: 25,
    fontWeight: "bold",
  },
});
export default Header;
