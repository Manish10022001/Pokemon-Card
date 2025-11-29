import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context'
import PokemonCard from './components/PokemonCard';
export default function App() {
  //define properties of pokemon that needs to be rendered
    const charmanderData= {
        name:"Charmander",
        image:require("./assets/charmander.png"),
        type:"Fire",
        hp:39,
        moves:["Scratch", "Ember", "Growl", "Leer"],
        weaknesses:["Water", "Rock"]
    };

    

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* 3.2 add this properties  as prop to pokemon component using spread operator */}
        <PokemonCard {...charmanderData}/>
        {/* <PokemonCard {...squirtleData} />
        <PokemonCard {...bulbasaurData} />
        <PokemonCard {...pikachuData} /> */}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS==="android" ? 24:0,
  },
});
