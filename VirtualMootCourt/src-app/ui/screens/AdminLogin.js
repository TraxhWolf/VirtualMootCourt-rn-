import { ImageBackground, SafeAreaView, StyleSheet, View, Dimensions, Alert } from "react-native"
import { BaseInput, PasswordInput } from "../components/InputField"
import { AppButton } from "../components/Button"
import { useContext, useState } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import db from "../../firebase"

const AdminLoginScreen = ({navigation}) => {
    const { width, height } = Dimensions.get('window')
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
                height: height / 2,
                width: width,
                backgroundColor: "#131d24",
                borderRadius: height / 2,
                alignItems: "center",
                justifyContent: "center"
            },
            inputContainer: {
                alignItems: "center",
                
            }
        }
    )
    const {  isLoggedIn, setIsLoggedIn  } = useContext(AuthContext)
    const [credential, setCredential] = useState('')
    const [password, setPassword] = useState('')
    const handleAdminLogin = async () => {
        setCredential('')
        setPassword('')
        const fetchdata = db.collection("Admin").onSnapshot(snapshot => {
            let found = false
            snapshot.forEach(doc => {
                const data = doc.data();
                if (data.adminCredential === credential && data.adminPassword === password) {
                    found = true
                    navigation.navigate("AdminHome");
                    return
                }
            });
            if (!found) {
                Alert.alert('Login Failed', 'Username or Password is incorrect');
            }
        }, error => {
            console.error('Error fetching users:', error);
        });
    }
    return (
        <SafeAreaView style={styles.screenContainer}>
            <ImageBackground source={require("../assets/HomeScreenBG.jpg")} imageStyle={{ objectFit: "fill" }}>
                <View style={styles.invisibleContainer}>
                    <View style={styles.contentContainer}>
                        <View style={styles.inputContainer}>
                            <BaseInput inputLabel={"Username"} onValueChange={setCredential}></BaseInput>
                            <PasswordInput passwordLabel={"Password"} onValueChange={setPassword}></PasswordInput>
                            <AppButton btnText={"LOGIN"} onPress={handleAdminLogin} ></AppButton>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default AdminLoginScreen;