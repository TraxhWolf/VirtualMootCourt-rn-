import { ImageBackground, SafeAreaView, StyleSheet, View, Text, Image } from "react-native"
import {HomeButton} from "../components/Button";

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.screenContainer}>
            <ImageBackground source={require("C:/Users/Superuser/Documents/MootCourt/VirtualMootCourt-rn-/VirtualMootCourt/src-app/assets/HomeScreenBG.jpg")} imageStyle={{objectFit: "fill"}}>
                <View style={styles.invisibleContainer}>
                    <View style={styles.logoContainer}>
                        <Image source={require("C:/Users/Superuser/Documents/MootCourt/VirtualMootCourt-rn-/VirtualMootCourt/src-app/assets/logo.png")} style={styles.logo}></Image>
                    </View>
                    <View style={styles.buttonContainer}>
                        <View style={{marginBottom: 15}}>
                        <HomeButton btnText={"ADMIN LOGIN"}></HomeButton>
                        <HomeButton btnText={"STUDENT LOGIN"}></HomeButton>
                        </View>
                        <HomeButton btnText={"ENTER MOOT"}></HomeButton>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create(
    {
        screenContainer: {
            flex: 1,
        },
        invisibleContainer: {
            width: "100%",
            height: "100%",
            backgroundColor: "#ffffff6f",
            padding: 20
        },
        logoContainer: {
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 250
        },
        logo: {
            height: 75,
            width: 370
        },
        buttonContainer: {
            alignItems: "center"
        }
    }
)

export default HomeScreen;