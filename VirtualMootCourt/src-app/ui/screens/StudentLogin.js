import { Alert, ImageBackground, SafeAreaView, StyleSheet, View, Dimensions } from "react-native"
import {BaseInput, PasswordInput} from "../components/InputField"
import { AppButton } from "../components/Button"
import { useState } from "react"
import db from "../../firebase"

const StudentLoginScreen = ({navigation}) => {
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
    const [credential, setCredential] = useState('')
    const [password, setPassword] = useState('')
    const handleStudentLogin = async () => {
        setCredential('')
        setPassword('')
        const fetchdata = db.collection("Students").onSnapshot(snapshot => {
            let found = false
            snapshot.forEach(doc => {
                const data = doc.data();
                if (data.studentRegisterNumber === credential && data.studentPassword === password) {
                    found = true
                    navigation.navigate("StudentRules");
                    return
                }
            });
            if (!found) {
                Alert.alert('Login Failed', 'Register number or Password is incorrect');
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
                    <BaseInput inputLabel={"Register Number"} onValueChange={setCredential}></BaseInput>
                    <PasswordInput passwordLabel={"Password"} onValueChange={setPassword}></PasswordInput>
                    <AppButton btnText={"LOGIN"} onPress={handleStudentLogin}></AppButton>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default StudentLoginScreen;