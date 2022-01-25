import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View, TextInput, Keyboard, KeyboardAvoidingView, TouchableOpacity , Button } from 'react-native';
import { TaskManager } from './taskmanager.js';
import Task from './task.js';
import Controller from './Controller.js';

export default function App() {

  // const newTask = (props) => {
  //   return <Text>Task: {props.name}, Duration: {props.duration}, Urgency: {props.urgency}</Text>
  // }

  // const [name, setName] = useState("");
  // const [time, setTime] = useState("");
  // const [priority, setPriority] = useState("");

  const task = new Task("Task", 60);
  const task2 = new Task("Task2", 60);
  

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true}/>
      {/* {newTask("Task", 60)}
      <TextInput 
      placeholder="Add Task Here" 
      onChangeText={newText => setName(newText)}
      />
      <TextInput 
      placeholder="Add Task Here" 
      onChangeText={newText => setName(newText)}
      />
      <TextInput placeholder="Urgency" /> */}
      
      <TouchableOpacity onPress={() => console.log("task a pressed")}><Text>Add Task A</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => TaskManager.addTask(task2)}><Text>Add Task B</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => TaskManager.removeAllTasks()}><Text>Clear Tasks</Text></TouchableOpacity>
      {/* <TouchableOpacity onPress={() => TaskManager.getAllTasks()}><Text>Show Tasks</Text></TouchableOpacity> */}
      <Text>{JSON.stringify(TaskManager.getAllTasks())}</Text>
      
      {/* <Text>{[TaskManager.getAllTasks()]}</Text> */}
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {},
});
