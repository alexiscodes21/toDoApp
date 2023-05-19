import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Task = (props) => {

    return (
      <View style={styles.item}>
        <View style={styles.itemLeft}>
          <View style={styles.itemCheck}></View>
          <Text style={styles.itemText}>{props.text}</Text>
        </View>
        <View style={styles.itemCircle}></View>
      </View>
    );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#b4dfda",
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000000',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  itemCheck: {
    width: 24,
    height: 24,
    backgroundColor: "#ffffff",
    opacity: 0.8,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#000000',
    marginRight: 15,
  },
  itemText: {
    maxWidth: "80%",
  },
  itemCircle: {
    width: 12,
    height: 12,
    borderColor: "#000000",
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default Task;