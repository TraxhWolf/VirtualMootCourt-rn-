import { Dimensions, Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AppNavBar, { StudentNavBar } from "../components/NavBar";

const StudentProblemViewScreen = () => {
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
                <StudentNavBar></StudentNavBar>
                    <View style={styles.contentContainer}>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default StudentProblemViewScreen;