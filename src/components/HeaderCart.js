import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { selectNumberOfItems } from "../store/cartSlice";
import { useNavigation } from "@react-navigation/native";

export const HeaderCart = () => {
  const navigation = useNavigation();
  const cartItem = useSelector(selectNumberOfItems);
  const handlePress = () => {
    navigation.navigate("cart")
  }
  return (
    <Pressable
      onPress={handlePress}
      style={styles.cartIconHeader}
    >
      <Entypo name="shopping-cart" size={32} />
      <Text style={styles.itemCount}>{cartItem}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cartIconHeader: {
    flexDirection: "row",
  },

  itemCount: {
    position: 'absolute',
    top: -5,
    right: -10,
    color: '#fff',
    backgroundColor: 'gray',
    textAlign: 'center',
    width: 20,
   height: 20,
   borderRadius: 20/2
  },
});
