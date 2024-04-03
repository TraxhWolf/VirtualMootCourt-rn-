import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

const AppDropDown = ({label}) => {
    const styles = StyleSheet.create(
        {
            selectionButton: {
                height: 40,
                width: 250,
                backgroundColor: "#ffffff",
                borderRadius: 20
            },
            label: {
                color: "#ffffff",
                marginBottom: 5,
                marginLeft: 7,
                fontSize: 15
            }
        }
    )
    return(
        <View>
            <Text style={styles.label}>{label}</Text>
            <TouchableOpacity style={styles.selectionButton}></TouchableOpacity>
        </View>
    )
}

export default AppDropDown;