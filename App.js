import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, SafeAreaView, Alert, Keyboard } from 'react-native';

export default function App(props) {
    
    const [vbb, onChangeVbb] = React.useState("");
    const [rb, onChangeRb] = React.useState("");
    const [bcc, onChangeBcc] = React.useState("");
    const [rc, onChangeRc] = React.useState("");
    const [vcc, onChangeVcc] = React.useState("");

    const current = (v, r) => {
        const vbe = 0.07
        
        return (v - vbe) / r
    }

    const power = (v, i) => {
        return v * i
    }

    const calculate = () => {
        console.log(vbb, typeof(vbb), typeof(rb))

        const ib    = current(vbb, rb) // Corrente IB
        const ic    = ib * Number(bcc) // Corrente IC
        const vce   = Number(vcc) - (Number(rc) * ic) // Tensão Vce
        const pd    = power(vce, ic) // Potência dissipada no transistor PD


        const str = "Corrente Ib: " + ib.toFixed(6) + "\nCorrente Ic: " + ic.toFixed(6) + "\nTensão Vce: " + vce.toFixed(6)  + "\nPotência dissipada no transistor Pd: " + pd.toFixed(6)

        Alert.alert(str)
    }

    return (
        <SafeAreaView style={styles.container} >
            <View style={styles.container} onPress={(event) => {event.stopPropagation(); Keyboard.dismiss();}}>
                <Text style={styles.title}>Calculadora Eletronica I</Text>
                <View style={styles.inputContainer}>
                        <TextInput 
                            style={styles.input}
                            placeholder="V_bb"
                            onChangeText={onChangeVbb}
                            value={vbb}
                        />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="R_b"
                        value={rb}
                        onChangeText={onChangeRb}
                        
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="B_cc"
                        value={bcc}
                        onChangeText={onChangeBcc}
                        
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="R_c"
                        value={rc}
                        onChangeText={onChangeRc}
                        
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeVcc}
                        value={vcc}
                        placeholder="V_cc"
                        
                    />
                </View>
                
                <Button 
                    title="Calcular!" 
                    color="#ff00ff"
                    onPress={calculate}
                />
            </View>
        </SafeAreaView>
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
    width: 150,
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