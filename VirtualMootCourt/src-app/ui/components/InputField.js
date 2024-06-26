import { StyleSheet, Text, TextInput, View } from "react-native"

export const BaseInput = ({ inputLabel, inputMode }) => {

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
            <TextInput style={styles.input} cursorColor="#131d24" inputMode={inputMode} />
        </View>
    )
}

export const PasswordInput = ({ passwordLabel }) => {

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
            <TextInput style={styles.input} cursorColor="#131d24" />
        </View>
    )
}

export const BigInput = ({ inputLabel }) => {
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
            <TextInput style={styles.input} cursorColor={"#131d24"} multiline={true}></TextInput>
        </View>
    )
}

export const VeryBigInput = ({ inputLabel }) => {
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
            />
        </View>
    )
}