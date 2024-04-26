import { ImageBackground, SafeAreaView, StyleSheet, View, Text, Image } from "react-native"
import {HomeButton} from "../components/Button";

const HomeScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.screenContainer}>
            <ImageBackground source={require("../assets/HomeScreenBG.jpg")} imageStyle={{objectFit: "fill"}}>
                <View style={styles.invisibleContainer}>
                    <View style={styles.logoContainer}>
                        <Image source={require("../assets/logo.png")} style={styles.logo}></Image>
                    </View>
                    <View style={styles.buttonContainer}>
                        <View style={{marginBottom: 15}}>
                        <HomeButton btnText={"ADMIN LOGIN"} onPress={()=>navigation.navigate("AdminLogin")}></HomeButton>
                        <HomeButton btnText={"STUDENT LOGIN"} onPress={()=>navigation.navigate("StudentLogin")}></HomeButton>
                        </View>
                        <HomeButton btnText={"ENTER MOOT"} onPress={()=>navigation.navigate("EnterMoot")}></HomeButton>
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