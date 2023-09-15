import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import React from "react";
import BtnDark from "../shared/BtnDark";
import { useSelector } from "react-redux";
import CartListItem from "../components/CartListItem";
import {selectDeliveryPrice, selectSubtotal, selecttotal} from '../store/cartSlice'

const ShoppingCartFooter = () => {
  const subtotal = useSelector(selectSubtotal);
  const deliveryFees = useSelector(selectDeliveryPrice);
  const total = useSelector(selecttotal)

  return(
    <View style={styles.totalsContainer}>
          <View style={styles.row}>
            <Text style={styles.text}>Subtotal</Text>
            <Text style={styles.text}>{subtotal} US$</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>Delivery</Text>
            <Text style={styles.text}>{deliveryFees} US$</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.textBold}>Total</Text>
            <Text style={styles.textBold}>{total} US$</Text>
          </View>
        </View>
  )
}

const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart.items);
  return (
    <>
      <View style={styles.cartContainer}>
        <FlatList
          data={cart}
          renderItem={({ item }) => {
            return (
              <CartListItem item={item} />
            );
          }}
          ListFooterComponent = {ShoppingCartFooter}
          showsVerticalScrollIndicator = {false}
        />
      </View>

      <BtnDark>
        <Text style={styles.btnText}>Checkout</Text>
      </BtnDark>
    </>
  );
};

const styles = StyleSheet.create({
  cartContainer: {
    padding: 20,
  },

  totalsContainer: {
    marginTop: 30,
    paddingTop: 10,
    paddingBottom: 120,
    borderTopWidth: 1,
    borderColor: "gray",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  text: {
    color: "gray",
  },

  textBold: {
    fontWeight: "500",
  },

  btnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
});

export default ShoppingCart;
