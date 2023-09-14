import { View, Text, FlatList, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import cart from '../data/cart'
import AntDesign from '@expo/vector-icons/AntDesign'
import BtnDark from '../shared/BtnDark'

const ShoppingCart = () => {
  return (
    <>
    <View style={styles.cartContainer}>
      <FlatList
        data={cart}
        renderItem={({item}) => {
          return(
            <View style={styles.cartItemContainer}>
              <Image source={{uri:item.product.image}} style={styles.cartImage}/>
              <View style={styles.orderDescription}>
                <View>
                  <Text style={styles.orderTitle}>{item.product.name}</Text>
                  <Text style={styles.orderSize}>Size: {item.size}</Text>
                </View>

                <View style={styles.orderQuantityContainer}>
                  <AntDesign name='pluscircleo' size={24} color={'gray'}/>
                  <Text style={styles.orderQuantity}>{item.quantity}</Text>
                  <AntDesign name='minuscircleo' size={24} color={'gray'} />
                  <Text style={styles.orderPrice}>${item.product.price}</Text>
                </View>
              </View>
            </View>
          )
        }}
      />
    

    <View style={styles.totalsContainer}>
	    <View style={styles.row}>
	      <Text style={styles.text}>Subtotal</Text>
	      <Text style={styles.text}>410,00 US$</Text>
	    </View>
	    <View style={styles.row}>
	      <Text style={styles.text}>Delivery</Text>
	      <Text style={styles.text}>16,50 US$</Text>
	    </View>
	    <View style={styles.row}>
	      <Text style={styles.textBold}>Total</Text>
	      <Text style={styles.textBold}>426,50 US$</Text>
	    </View>
	  </View>

    </View>

    <BtnDark>
                <Text style={styles.btnText}>Checkout</Text>
              </BtnDark>
    </>
    
  )
}

const styles = StyleSheet.create({
  cartContainer: {
    padding: 20,
  },

  cartItemContainer: {
    paddingTop: 10,
    flexDirection: 'row',
  },

  cartImage: {
    width:'40%',
    aspectRatio:1
  },

  orderDescription: {
    paddingLeft: 10,
    justifyContent: 'space-around'
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
    flexDirection: 'row',
    alignItems: 'center'
  },

  orderQuantity: {
    minWidth: 25,
    textAlign: 'center',
    color: 'gray',
    fontSize: 14,
  },

  orderPrice: {
    fontSize: 16,
    fontWeight: "500",
    marginLeft: 30,
  },

  totalsContainer: {
    marginTop: 30,
    paddingTop: 10,
    paddingBottom: 80,
    borderTopWidth: 1,
    borderColor: 'gray'
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  text: {
    color: 'gray'
  },

  textBold: {
    fontWeight: '500'
  },

  btnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500'
  },
})

export default ShoppingCart