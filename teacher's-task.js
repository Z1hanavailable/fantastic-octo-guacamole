import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ScrollView, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import styled from "styled-components/native";

const Task = (props) => (
  <TodoContainer>
    <Icon
      name={props.checked ? "check" : "square"}
      size={30}
      color="red"
      style={{ marginLeft: 2 }}
      onPress={props.setChecked}
    />
    {props.checked ? (
      <Strikethrough> {props.text}</Strikethrough>
    ) : (
      <RegularText>{props.text}</RegularText>
    )}

    <Icon
      name="trash"
      size={30}
      color="red"
      style={{ marginLeft: "auto" }}
      onPress={props.delete}
    />
  </TodoContainer>
);

const TodoContainer = styled.View`
  text-align: left;
  width: 100%;
  display: flex;
  flex-direction: row;
`;
const RegularText = styled.Text`
  color: black;
  font-size: 14px;
  width: 100%;

  padding: 2px 0px;
  line-height: 14px;
`;
const Strikethrough = styled.Text`
  text-decoration: line-through;
  color: black;
  font-size: 14px;
  line-height: 14px;
  padding: 2px 0px;
`;

const taskStyle = StyleSheet.create({
  taskWrapper: {
    flexDirection: "row",

    borderColor: "black",
    borderWidth: 3,
    width: 300,
  },
});
export default Task;

import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ScrollView, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import styled from "styled-components/native";

const Task = (props) => (
  <TodoContainer>
    <Icon
      name={props.checked ? "check" : "square"}
      size={30}
      color="red"
      style={{ marginLeft: 2 }}
      onPress={props.setChecked}
    />
    {props.checked ? (
      <Strikethrough> {props.text}</Strikethrough>
    ) : (
      <RegularText>{props.text}</RegularText>
    )}

    <Icon
      name="trash"
      size={30}
      color="red"
      style={{ marginLeft: "auto" }}
      onPress={props.delete}
    />
  </TodoContainer>
);

const TodoContainer = styled.View`
  text-align: left;
  width: 100%;
  display: flex;
  flex-direction: row;
`;
const RegularText = styled.Text`
  color: black;
  font-size: 14px;
  width: 100%;

  padding: 2px 0px;
  line-height: 14px;
`;
const Strikethrough = styled.Text`
  text-decoration: line-through;
  color: black;
  font-size: 14px;
  line-height: 14px;
  padding: 2px 0px;
`;

const taskStyle = StyleSheet.create({
  taskWrapper: {
    flexDirection: "row",

    borderColor: "black",
    borderWidth: 3,
    width: 300,
  },
});
export default Task;

