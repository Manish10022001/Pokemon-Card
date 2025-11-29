import {ScrollView,View, Text, StyleSheet, Platform, Image} from 'react-native';
//2:styling card
//3:card component content
//4: style the component-> //4.1also create function that return badge styles based on pokemon type0
                           //4.2 display list of moves and weakness
//4
function getTypeDetails(type){
    switch(type.toLowerCase()){
        case "electric":
            return { borderColor: "#FFD700", emoji: "⚡️" };
        case "water":
            return { borderColor: "#6493EA", emoji: "💧" };
        case "fire":
            return { borderColor: "#FF5733", emoji: "🔥" };
        case "grass":
            return { borderColor: "#66CC66", emoji: "🌿" };
        default:
            return { borderColor: "#A0A0A0", emoji: "❓" };
    }
}

export default function PokemonCard({name,image,type,hp,moves,weaknesses}){
    //3.3 destructure the properties from component prop

    //4.2 invoke function in component
    const {borderColor, emoji} = getTypeDetails(type);
    return(
        <ScrollView>
        <View style={styles.card}>
            <View style={styles.nameContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.hp}>💗{hp}</Text>
            </View>
            <Image style={styles.image} 
                    source={image} 
                    accessibilityLabel={`${name} pokemon`} 
                    resizeMode="contain"
            />

            <View style={styles.typeContainer}>
                <View style={[styles.badge, {borderColor}]}>
                    <Text style={styles.typeEmoji}>{emoji}</Text>
                    <Text style={styles.typeText}>{type}</Text>
                </View>
            </View>

            <View style={styles.movesContainer}>
                <Text style={styles.movesText}>Moves: {moves.join(', ')}</Text>
            </View>

            <View style={styles.weaknessContainer}>
                <Text style={styles.weaknessText}>Weakness: {weaknesses.join(', ')}</Text>
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
        }),
    },
    nameContainer:{
        flexDirection:'row',
        justifyContent:"space-between",
        marginBottom:32,
    },
    name:{
        fontSize:32,
        fontWeight:'bold',
    },
    hp:{
        fontSize:22,
    },
    image:{
        width:"100%",
        height:200,
        marginBottom:16,
    },
    typeContainer:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        marginBottom:40,
    },
    badge :{
        flexDirection:"row",
        alignItems:"center",
        paddingVertical:6,
        paddingHorizontal:12,
        borderRadius:20,
        borderWidth:4,
    },
    typeEmoji:{
        fontSize:30,
        marginRight:12,
    },
    typeText:{
        fontSize:22,
        fontWeight:"bold"
    },
    movesContainer:{
        marginBottom:12,
    },
    movesText:{
        fontSize:18,
        fontWeight:'bold',
    },
    weaknessContainer:{
        marginBottom:8,
    },
    weaknessText:{
        fontSize:18,
        fontWeight:'bold'
    }
})