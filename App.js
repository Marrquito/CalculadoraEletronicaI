import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, Pressable } from 'react-native';

export default function App(props) {
    const {onPress, title = 'Calcular!'} = props
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Calculadora Eletronica I</Text>
            <View style={styles.inputContainer}>
                    <TextInput 
                        style={styles.input}
                        placeholder="Campo1"
                    />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Campo2"
                />
            </View>
            
            <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.text}>{title}</Text>
            </Pressable>
            
            <Button title="Calcular!" color="#ff00ff"/>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffbfff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  inputContainer: {
    width: 300,
    height: 40,
    borderRadius: 10,
    borderColor: "#0EDF4A",
    borderWidth: 1,
    padding: 1,
    margin: 10,
  },
  input: {
    height: 40,
    padding: 10,
    fontSize: 16,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },

});
