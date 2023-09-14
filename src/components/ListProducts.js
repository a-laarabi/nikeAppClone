import { View, FlatList, Image, StyleSheet } from "react-native";
import React from "react";
import products from "../data/products";

const ListProducts = () => (
  <FlatList
    data={products}
    renderItem={({ item }) => {
      return (
        <View style={styles.product}>
          <Image source={{ uri: item.image }} style={styles.productImage} />
        </View>
      );
    }}
    numColumns={2}
  />
);

const styles = StyleSheet.create({
  product: {
    width: "50%",
    padding: 2,
  },

  productImage: {
    width: "100%",
    aspectRatio: 1,
  },
});

export default ListProducts;
