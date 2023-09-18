import { View, FlatList, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
// import products from "../data/products";
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from "react-redux";
import { productsSlice } from "../store/productSlice";

const ListProducts = ({}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products)

  return(
    <FlatList
    data={products}
    renderItem={({ item }) => {
      return (
        <Pressable onPress={() => {
            dispatch(productsSlice.actions.setSelectedProduct(item.id));
            navigation.navigate('Product Detail')
          }}
          style={styles.product}>
            <Image source={{ uri: item.image }} style={styles.productImage} />
        </Pressable>
      );
    }}
    numColumns={2}
  />
  )};

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
