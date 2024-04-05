import { Dimensions, Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AppNavBar from "../components/NavBar";
import AppDropDown from "../components/DropDown"
import { BigInput, VeryBigInput } from "../components/InputField";
import { AppButton } from "../components/Button";


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
                paddingTop: 60,
                alignItems: "center"
            },
            marginView: {
                marginBottom: 10
            }
        }
    )
    return (
        <SafeAreaView style={styles.screenContainer}>
            <ImageBackground source={require("../assets/appBG.jpg")} imageStyle={{ objectFit: "fill" }}>
                <View style={styles.invisibleContainer}>
                    <AppNavBar></AppNavBar>
                    <View style={styles.contentContainer}>
                        <View style={styles.marginView}>
                            <AppDropDown label={"Problem Category"}></AppDropDown>
                        </View>
                        <View style={styles.marginView}>
                            <BigInput inputLabel={"Synopsis"}></BigInput>
                        </View>
                        <View style={styles.marginView}>
                            <VeryBigInput inputLabel={"Problem Statement"}></VeryBigInput>
                        </View>
                        <AppButton btnText={"DONE"}></AppButton>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default AddProblemScreen;