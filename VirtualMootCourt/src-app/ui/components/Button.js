import { StyleSheet, TouchableOpacity, Text } from "react-native"

export const HomeButton = ({btnText}) => {

    const styles = StyleSheet.create(
        {
            button: {
                height: 40,
                width: 275,
                borderRadius: 10,
                backgroundColor: "#131d24",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 20
            },
            text: {
                color: "#ffffff",
                fontSize: 15
            }
        }
    ) 

    return(
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>{btnText}</Text>
        </TouchableOpacity>
    )
}

export const AppButton = ({btnText}) => {

    const styles = StyleSheet.create(
        {
            button: {
                height: 35,
                width: 95,
                borderRadius: 5,
                backgroundColor: "#91795e",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10
            },
            text: {
                color: "#ffffff",
                fontSize: 15
            }
        }
    ) 
    
    return(
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>{btnText}</Text>
        </TouchableOpacity>
    )
}