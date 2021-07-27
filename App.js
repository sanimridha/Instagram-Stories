import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Story from 'react-native-story'

export default function App() {
  const stories = [
    {
      id: "1",
      source: require("./assets/story.jpg"),
      user: "Ugur Erdal",
      avatar: require("./assets/avatar.jpg")
    },
    {
      id: "2",
      source: require("./assets/story2.jpg"),
      user: "Mustafa",
      avatar: require("./assets/avatar.jpg")
    },
    {
      id: "3",
      source: require("./assets/story.jpg"),
      user: "Ugur Erdal",
      avatar: require("./assets/avatar.jpg")
    },
    {
      id: "4",
      source: require("./assets/story2.jpg"),
      user: "Mustafa",
      avatar: require("./assets/avatar.jpg")
    },
  ];
  return (
    <Story
            unPressedBorderColor="#e95950"
            pressedBorderColor="#ebebeb"
            stories={stories}
            footerComponent={
                <TextInput
                    placeholder="Send message"
                    placeholderTextColor="white"
                    style={styles.footerInput}
                />
            }
        />

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
