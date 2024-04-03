import { Dimensions, Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AppNavBar from "../components/NavBar";
import AppDropDown from "../components/DropDown"


const AddProblemScreen = () => {
    const { height, width } = Dimensions.get('window')

    const styles = StyleSheet.create(
        {
            screenContainer: {
                flex: 1
            },
            invisibleContainer: {
                width: width,
                height: height
            },
            contentContainer: {
                width: width,
                height: height,
                backgroundColor: "#131d24cf",
                borderTopLeftRadius: 60,
                borderTopRightRadius: 60,
                borderTopWidth: 1,
                padding: 25,
                paddingTop: 60,
                alignItems: "center"
            }
        }
    )
    return (
        <SafeAreaView style={styles.screenContainer}>
            <ImageBackground source={require("C:/Users/Superuser/Documents/MootCourt/VirtualMootCourt-rn-/VirtualMootCourt/src-app/assets/appBG.jpg")} imageStyle={{ objectFit: "fill" }}>
                <View style={styles.invisibleContainer}>
                    <AppNavBar></AppNavBar>
                    <View style={styles.contentContainer}>
                    <AppDropDown label={"Problem Category"}></AppDropDown>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default AddProblemScreen;