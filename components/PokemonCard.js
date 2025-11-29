import {ScrollView,View, Text, StyleSheet, Platform, Image} from 'react-native';
//2:styling card
//3:card component content
export default function PokemonCard({name,image,type,hp,moves,weaknesses}){
    //3.3 destructure the properties from component prop
    return(
        <ScrollView>
        <View style={styles.card}>
            <View>
                <Text>{name}</Text>
                <Text>{hp}</Text>
            </View>
            <Image source={image} accessibilityLabel={`${name} pokemon`}/>

            <View>
                <Text>{type}</Text>
            </View>

            <View>
                <Text>Moves: {moves.join(', ')}</Text>
                <Text>Weakness: {weaknesses?.join(', ')}</Text>
            </View>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    card:{
        backgroundColor:"white",
        borderRadius:16,
        borderWidth:2, 
        padding:16,
        margin:16,
        //for shadow effect , will use Platform
        ...Platform.select({
            ios:{
                shadowOffset:{width:2, height:2},
                shadowColor: '#333',
                shadowOpacity:0.3,
                shadowRadius:4,
            },
            android:{
                elevation:4,
            }
        })
    }
})