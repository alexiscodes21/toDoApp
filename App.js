import React, { useState } from "react";
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Task from "./components/Task";

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    {/* dismiss the keyboard after we add the task */}
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
      {/* section with tasks */}
      <View style={styles.tasksWrapper}>
        {/* title for the top of the page */}
        <Text style={styles.sectionTitle}>Tasks</Text>

        <View style={styles.items}>
          {/* tasks are here, iterate over the setTasksItems */}
          {taskItems.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Task text={item} />
              </TouchableOpacity>
            )            
          })}
        </View>
      </View>

      {/* use keyboard to write task */}
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.writeTaskWrapper}>
        <TextInput style={styles.inputNewItem} placeholder={"Write a task..."} value={task} onChangeText={(text) => setTask(text)} />

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addItemButton}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#446b66",
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  inputNewItem: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#b4dfda",
    borderRadius: 60,
    borderColor: "#000000",
    borderWidth: 1,
    width: 300,
  },
  addItemButton: {
    width: 50,
    height: 50,
    backgroundColor: "#b4dfda",
    borderRadius: 60,
    borderColor: "#000000",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  addText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
