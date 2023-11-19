import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Button, View } from 'react-native';
import PouchDB from 'pouchdb';

const db = new PouchDB('http://localhost:5984/messages');

export default function App() {
  return (
    <View style={styles.container}>
      <DNButton />
      <StatusBar style="auto" />
    </View>
  );
}

function DNButton() {
  const [state, setState] = useState("deez")
  return (
    <Button onPress={() => {
      const deez = db.get("8fb6209a-880d-4b49-97b6-01c50d3a9dcd")
      console.log(deez)
      setState(deez)
    }} title={state}/>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});