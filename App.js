import React, {useState} from 'react';
import {
  StyleSheet,
  View, 
  FlatList,
  Alert
} from 'react-native';
import Header from './components/Header'
import ListItem from './components/ListItem'
import AddItem from './components/AddItem'

const App = () => {
  const [items, setItems] = useState([
      {id: 1, text: 'Talk about the project goals'},
      {id: 2, text: 'Sketch up MVP and date'},
      {id: 3, text: 'Start building the back-end'},
      {id: 4, text: 'Start building the front-end'}
  ]);

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id)
    })
  }

  const addItem = text => {
    if(!text){
      Alert.alert('Error', 'Please enter a task', 'OK')
    } else {
      setItems(prevItems => {
        return [{id: 5, text}, ...prevItems]
      })
    }
  }

  return (
    <View style={styles.container}>
      <Header title={"To Do List"}/>
      <AddItem addItem={addItem}/>
      <FlatList data={items} renderItem={({item}) => 
        <ListItem item={item} deleteItem={deleteItem} addItem={addItem}/>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60
  }
});

export default App;
