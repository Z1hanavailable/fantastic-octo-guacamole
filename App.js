import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Task from "./Task";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/Feather";
import createPersistedState from "use-persisted-state";
const useCounterState = createPersistedState("count");

export default function App() {
  const [value, setValue] = useState("");
  const [todoList, setTodos] = useState([]);
  let addTodo = () => {
    let newTodo = {
      key: Date.now(),
      text: value,
      checked: false,
    };
    setTodos([...todoList, newTodo]);
    setValue("");
  };
  let removeTodo = (id) => {
    setTodos(
      todoList.filter((todo) => {
        if (todo.key !== id) return true;
      })
    );
  };
  let checkTask = (id) => {
    setTodos(
      todoList.map((todo) => {
        if (todo.key === id) {
          todo.checked = !todo.checked; //flip
        }
        return todo;
      })
    );
  };

  return (
    <SafeAreaView style={appStyle.container}>
      <TodoListContainer>
        <Title>My to-do list</Title>
        <View style={appStyle.inputContainer}>
          <TextInput
            style={appStyle.input}
            onChangeText={(value) => setValue(value)}
            placeholder="Type something..."
            value={value}
          />
          <TouchableOpacity onPress={() => addTodo()}>
            <Icon
              name="plus"
              size={30}
              color="red"
              style={{ marginLeft: 15 }}
            />
          </TouchableOpacity>
        </View>
        <ScrollView style={appStyle.scroll}>
          {todoList.map((task) => (
            <Task
              taskId={task.key}
              key={task.text}
              text={task.text}
              checked={task.checked}
              delete={() => removeTodo(task.key)}
              setChecked={() => checkTask(task.key)}
            />
          ))}
        </ScrollView>
      </TodoListContainer>
    </SafeAreaView>
  );
}
const TodoListContainer = styled.View`
  font-size: 32px;
  color: black;
  text-align: center;
`;
const Title = styled.Text`
  font-size: 32px;
  color: black;
`;
const appStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    borderColor: "white",
    borderWidth: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 120,
    marginBottom: 120,
  },
  title: {
    fontSize: 45,
  },
  inputContainer: {
    flexDirection: "row",
  },
  input: {
    backgroundColor: "lightblue",
    fontSize: 35,
    borderColor: "black",
    borderWidth: 4,
  },
  text: {
    fontSize: 35,
    color: "red",
  },
  scroll: {
    position: "relative",
  },
});
