import { ImageBackground, SafeAreaView, StyleSheet, View, Dimensions } from "react-native"
import {BaseInput, PasswordInput} from "../components/InputField"
import { AppButton } from "../components/Button"

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
    
    return (
        <SafeAreaView style={styles.screenContainer}>
            <ImageBackground source={require("../assets/HomeScreenBG.jpg")} imageStyle={{objectFit: "fill"}}>
                <View style={styles.invisibleContainer}>
                    <View style={styles.contentContainer}>
                    <BaseInput inputLabel={"Moot Code"}></BaseInput>
                    <AppButton btnText={"ENTER"} /*PASS onPress={} AFTER btnText FOR UNITY WORK DUDE*/></AppButton>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default EnterMootScreen;