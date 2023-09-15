import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import React from "react";
import ListProducts from "../components/ListProducts";

const Home = () => {
  return (
    <View style={styles.productsContainer}>
      <ListProducts />
    </View>
  );
};

const styles = StyleSheet.create({
  productsContainer: {
    flex: 1,
    padding: 10,
  },

  product: {
    width: "50%",
    padding: 2,
  },

  productImage: {
    width: "100%",
    aspectRatio: 1,
  },
});

export default Home;
