import { View, Text, FlatList, Image, useWindowDimensions, StyleSheet, ScrollView } from "react-native";
import React from "react";
import products from "../data/products";
import BtnDark from "../shared/BtnDark";


const Product = () => {
  const product = products[1];

  const {width} = useWindowDimensions();

  return (
    <>
    <ScrollView>
      <View>
      <FlatList
        data={product.images}
        renderItem={({item}) =>(
            <Image source={{uri: item}} style={{width, aspectRatio: 1}} />
          )
        }
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
    </View>

    <View style={styles.productInfo}>
        <Text style={styles.title}>{product.name}</Text>

        <Text style={styles.price}>${product.price}</Text>

        <Text style={styles.description}>{product.description}</Text>
    </View>
    </ScrollView>

    <BtnDark>
      <Text style={styles.btnText}>${product.price}</Text>
    </BtnDark>
    </>
  );
};

const styles = StyleSheet.create({
  productInfo: {
    flex: 1,
    padding: 20,
  },

  title:{
    fontWeight: 'bold',
    fontSize: 34,
  },

  price:{
    fontWeight: '500',
    fontSize: 16,
  },

  description:{
    paddingTop: 20,
    textAlign: 'justify',
    fontSize: 13,
    lineHeight: 25,
    paddingBottom: 80,
  },

  // btn

  btnText: {
    color: '#fff',
    fontWeight: "500",
    fontSize: 16,
  }
});

export default Product;
