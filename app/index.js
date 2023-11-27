import { View, Text, TextInput} from 'react-native'

function Home() {
    return (
        <View>
            style={{
                backgroundColor: "orange", 
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
            }}
            <Text> Ola mundo </Text>
            <TextInput
                style={{
                    backgroundColor: "#fff",
                    width: 200,
                    height: 50,
                }}
            />
        </View>
    )
}

export default Home;

