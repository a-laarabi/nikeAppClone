import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import React from "react";
// import cart from '../data/cart'
import AntDesign from "@expo/vector-icons/AntDesign";
import { useDispatch } from "react-redux";
import { cartSlice } from "../store/cartSlice";

export default CartListItem = ({ item }) => {
  const dispatch = useDispatch();

  const incraeseQuantity = () => {
    dispatch(cartSlice.actions.plusQuantity({ productId: item.product.id }));
  };
  const decreaseQuantity = () => {
    dispatch(cartSlice.actions.minusQuantity({ productId: item.product.id }));
  };

  return (
    <View style={styles.cartItemContainer}>
      <Image source={{ uri: item.product.image }} style={styles.cartImage} />
      <View style={styles.orderDescription}>
        <View>
          <Text style={styles.orderTitle}>{item.product.name}</Text>
          <Text style={styles.orderSize}>Size: {item.size}</Text>
        </View>

        <View style={styles.orderQuantityContainer}>
          <AntDesign
            onPress={decreaseQuantity}
            name="minuscircleo"
            size={24}
            color={"gray"}
          />
          <Text style={styles.orderQuantity}>{item.quantity}</Text>
          <AntDesign
            onPress={incraeseQuantity}
            name="pluscircleo"
            size={24}
            color={"gray"}
          />
          <Text style={styles.orderPrice}>
            ${item.product.price * item.quantity}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartItemContainer: {
    paddingTop: 10,
    flexDirection: "row",
  },

  cartImage: {
    width: "40%",
    aspectRatio: 1,
  },

  orderDescription: {
    paddingLeft: 10,
    justifyContent: "space-around",
  },

  orderTitle: {
    fontWeight: "500",
    fontSize: 18,
  },

  orderSize: {
    fontSize: 14,
    color: "gray",
  },

  orderQuantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  orderQuantity: {
    minWidth: 25,
    textAlign: "center",
    color: "gray",
    fontSize: 14,
  },

  orderPrice: {
    fontSize: 16,
    fontWeight: "500",
    marginLeft: 30,
  },
});
