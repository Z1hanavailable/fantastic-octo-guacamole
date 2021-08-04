import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styled from "styled-components/native";
const Task = (props) => (
    <TodoContainer style={taskStyle.taskWrapper}>
        <Icon
            name= { props.checked ? "check" : "square"}
            size={30}
            color='red'
            style={{marginLeft: 2}}
            onPress={props.setChecked}/>
        {props.checked?
        <Strikethrough>{props.text}</Strikethrough>:
        <RegularText>{props.text}</RegularText>
        };

        <Icon
            name="trash"
            size={30}
            color="red"
            style={{marginLeft: "auto"}}
            onPress={props.delete}/>

    </TodoContainer>
);
const TodoListContainer= styled.View`
    text-align:left;
    width:100%;
    display:inline-block;
    display:flex;
    flex-direction:row
`;
const RegularText=styled.Text`
    color:black;
    font-size:14px;
    display:flex;
    flex-direction:row;
    padding: 2px 0px;
    line-height:14px;
`;
const Strikethrough=styled.Text`
    text-decoration: line-through;
    color:black;

`;
const AddTodoIcon=styled.Icon`

`;

const appStyle = StyleSheet.create({
    taskWrapper:{
        flexDirection: 'row',
        borderColor:'black',
        borderWidth:3,
        width:300
    }

});

export default Task;