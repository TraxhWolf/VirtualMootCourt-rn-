import { Dimensions, Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AdminNavBar } from "../components/NavBar";


const ViewEntriesScreen = () => {
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
                paddingTop: 60
            },
            header: {
                fontSize: 18,
                color: "#ffffff",
                textAlign:  "center",
                marginBottom: 20
            }
        }
    )
    return (
        <SafeAreaView style={styles.screenContainer}>
            <ImageBackground source={require("../assets/appBG.jpg")} imageStyle={{ objectFit: "fill" }}>
                <View style={styles.invisibleContainer}>
                <AdminNavBar></AdminNavBar>
                    <View style={styles.contentContainer}>
                    <Text style={styles.header}>Registered Participants</Text>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default ViewEntriesScreen;