import { View, Text, Pressable, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const BtnDark = (props) => {
  return (
    <View style={styles.footer}>
      <Pressable style={styles.btnDark}>
        {props.children}
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  footer:{
    position: "absolute",
    bottom: 0,
    width: "100%",
    borderColor: "gainsboro",
    padding: 20,
    paddingBottom: 40,
  },

  btnDark: {
    width: "100%",
    backgroundColor: "#000",
    alignSelf: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 100,
  }
})

export default BtnDark