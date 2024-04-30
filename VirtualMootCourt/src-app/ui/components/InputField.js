import { StyleSheet, Text, TextInput, View } from "react-native"

export const BaseInput = ({ inputLabel, inputMode, onValueChange, value }) => {

    const styles = StyleSheet.create(
        {
            container: {
                padding: 5,
                marginBottom: 20
            },
            label: {
                color: "#ffffff",
                fontSize: 16,
                marginBottom: 5
            },
            input: {
                width: 300,
                height: 60,
                backgroundColor: "#ffffff",
                color: "#000000",
                borderRadius: 10
            }
        }
    )

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{inputLabel}</Text>
            <TextInput style={styles.input} cursorColor="#131d24" inputMode={inputMode} onChangeText={onValueChange} value={value} />
        </View>
    )
}
export const PasswordInput = ({ passwordLabel, onValueChange, value }) => {

    const styles = StyleSheet.create(
        {
            container: {
                padding: 5,
                marginBottom: 20
            },
            label: {
                color: "#ffffff",
                fontSize: 16
            },
            input: {
                width: 300,
                height: 60,
                backgroundColor: "#ffffff",
                color: "#000000",
                borderRadius: 10
            }
        }
    )

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{passwordLabel}</Text>
            <TextInput style={styles.input} cursorColor="#131d24" onChangeText={onValueChange} value={value} />
        </View>
    )
}
export const BigInput = ({ inputLabel, onValueChange }) => {
    const styles = StyleSheet.create(
        {
            container: {
                padding: 5,
                marginBottom: 20
            },
            label: {
                color: "#ffffff",
                fontSize: 16,
                marginBottom: 5
            },
            input: {
                width: 300,
                height: 70,
                backgroundColor: "#ffffff",
                color: "#000000",
                borderRadius: 10
            }
        }
    )

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{inputLabel}</Text>
            <TextInput style={styles.input} cursorColor={"#131d24"} multiline={true} onChangeText={onValueChange}></TextInput>
        </View>
    )
}
export const VeryBigInput = ({ inputLabel, onValueChange }) => {
    const styles = StyleSheet.create(
        {
            container: {
                padding: 5,
                marginBottom: 20
            },
            label: {
                color: "#ffffff",
                fontSize: 16,
                marginBottom: 5
            },
            input: {
                width: 300,
                height: 270,
                backgroundColor: "#ffffff",
                color: "#000000",
                borderRadius: 10
            }
        }
    )

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{inputLabel}</Text>
            <TextInput
                style={styles.input}
                cursorColor={"#131d24"}
                multiline={true}
                textAlignVertical="top"
                onChangeText={onValueChange}
            />
        </View>
    )
}