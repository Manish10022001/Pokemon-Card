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
        weakness:["Water", "Rock"]
    };

    const squirtleData = {
    name: "Squirtle",
    image: require("./assets/squirtle.png"), // Replace with the actual image path
    type: "Water",
    hp: 44,
    moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
    weaknesses: ["Electric", "Grass"],
  };

  const bulbasaurData = {
    name: "Bulbasaur",
    image: require("./assets/bulbasaur.png"), // Replace with the actual image path
    type: "Grass",
    hp: 45,
    moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
  };

  const pikachuData = {
    name: "Pikachu",
    image: require("./assets/pikachu.png"), // Replace with the actual image path
    type: "Electric",
    hp: 35,
    moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
    weaknesses: ["Ground"],
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* 3.2 add this properties  as prop to pokemon component using spread operator */}
        <PokemonCard {...charmanderData}/>
        <PokemonCard {...squirtleData} />
        <PokemonCard {...bulbasaurData} />
        <PokemonCard {...pikachuData} />
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
