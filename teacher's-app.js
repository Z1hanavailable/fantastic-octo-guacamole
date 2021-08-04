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
const useTodoListState = createPersistedState("todo-list");

export default function App() {
  const [value, setValue] = useState("");
  const [todoList, setTodos] = useTodoListState([]);

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
          todo.checked = !todo.checked; // flip
        }
        return todo;
      })
    );
  };

  return (
    <SafeAreaView style={appStyle.container}>
      <TodoListContainer>
        <Title>My to-do list</Title>

        <InputContainer style={appStyle.inputContainer}>
          <Input
            onChangeText={(value) => setValue(value)}
            placeholder="Type your todo..."
            value={value}
          />
          <TouchableOpacity onPress={() => addTodo()}>
            <AddTodoIcon>
              <Icon name="plus" size={45} />
            </AddTodoIcon>
          </TouchableOpacity>
        </InputContainer>
        <ScrollView style={appStyle.scroll}>
          {todoList.map((task) => (
            <Task
              taskId={task.key}
              key={task.key}
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
const InputContainer = styled.View`
  display:flex;
  flex-direction:row;
  margin-bottom:10px;
`;
const Input = styled.TextInput`
  background-color: lightblue;
  font-size: 35;
  border: 4px solid black;
`;
const AddTodoIcon = styled.View`
  color: red;
  font-size: 70px;
  margin-left: 15px;
  border: 1px solid red;
  border-radius: 50%;
`;

const Title = styled.Text`
  font-size: 32px;
  font-weight: 700;
  color: rgb(50, 80, 168);
`;
const appStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    borderColor: "white",
    borderWidth: 5,
    alignItems: "center",
    justifyContent: "center",
    // new
    marginTop: 120,
    marginBottom: 120,
  },
  title: {
    fontSize: 45,
  },
  
  text: {
    fontSize: 35,
    color: "red",
  },
  scroll: {
    position: "relative",
  },
});

