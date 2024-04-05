import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

const AppDropDown = ({label}) => {
    const styles = StyleSheet.create(
        {
            selectionButton: {
                height: 60,
                width: 300,
                backgroundColor: "#ffffff",
                borderRadius: 10
            },
            label: {
                color: "#ffffff",
                marginBottom: 5,
                fontSize: 16
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