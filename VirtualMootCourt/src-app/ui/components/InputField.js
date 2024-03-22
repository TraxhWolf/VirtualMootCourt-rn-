import { StyleSheet, Text, TextInput, View } from "react-native"

export const BaseInput = ({inputLabel}) => {

    const styles = StyleSheet.create(
        {
            container: {
                padding: 5,
                marginBottom: 20
            },
            label: {
                color: "#ffffff"
            },
            input: {
                width: 250,
                height: 50,
                backgroundColor: "#ffffff",
                color: "#000000",
                borderRadius: 25
            }
        }
    )
    
    return(
        <View style={styles.container}>
        <Text style={styles.label}>{inputLabel}</Text>
        <TextInput style={styles.input}></TextInput>
        </View>
    )
}

export const PasswordInput = ({passwordLabel}) => {

    const styles = StyleSheet.create(
        {
            container: {
                padding: 5,
                marginBottom: 20
            },
            label: {
                color: "#ffffff"
            },
            input: {
                width: 250,
                height: 50,
                backgroundColor: "#ffffff",
                color: "#000000",
                borderRadius: 25
            }
        }
    )
    
    return(
        <View style={styles.container}>
        <Text style={styles.label}>{passwordLabel}</Text>
        <TextInput style={styles.input}></TextInput>
        </View>
    )
}