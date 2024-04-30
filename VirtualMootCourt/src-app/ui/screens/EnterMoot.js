import { ImageBackground, SafeAreaView, StyleSheet, View, Dimensions, Alert } from "react-native"
import {BaseInput, PasswordInput} from "../components/InputField"
import { AppButton } from "../components/Button"
import { useState } from "react"
import db from "../../firebase"

const EnterMootScreen = () => {
    const {width,height} = Dimensions.get('window')
    const styles = StyleSheet.create(
        {
            screenContainer: {
                flex: 1,
            },
            invisibleContainer: {
                width: "100%",
                height: "100%",
                backgroundColor: "#ffffff6f",
                padding: 20,
                justifyContent: "center",
                alignItems: "center"
            },
            contentContainer: {
                height: height/2,
                width: width,
                backgroundColor: "#131d24",
                borderRadius: height/2,
                alignItems: "center",
                justifyContent: "center"
            }
        }
    )
    const [code, setCode] = useState('')
    const handleMootCodeAuth = async () => {
        setCode('')
        const fetchdata = db.collection("Moot Codes").onSnapshot(snapshot => {
            let found = false
            snapshot.forEach(doc => {
                const data = doc.data();
                if (data.mootCode === code) {
                    found = true
                    return
                }
            });
            if (!found) {
                Alert.alert('Incorrect Moot code');
            }
        }, error => {
            console.error('Error fetching users:', error);
        });
    }
    return (
        <SafeAreaView style={styles.screenContainer}>
            <ImageBackground source={require("../assets/HomeScreenBG.jpg")} imageStyle={{objectFit: "fill"}}>
                <View style={styles.invisibleContainer}>
                    <View style={styles.contentContainer}>
                    <BaseInput inputLabel={"Moot Code"} onValueChange={setCode}></BaseInput>
                    <AppButton btnText={"ENTER"} onPress={handleMootCodeAuth}></AppButton>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default EnterMootScreen;