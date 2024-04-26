import { Dimensions, Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AppNavBar, { StudentNavBar } from "../components/NavBar";
import { AppButton } from "../components/Button";
import { Checkbox } from "react-native-paper";
import React from "react";

const RulesScreen = ({ navigation }) => {
    const { height, width } = Dimensions.get('window')
    const [checked, setChecked] = React.useState(false)
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
                flex: 1,
                width: width,
                backgroundColor: "#131d24cf",
                borderTopLeftRadius: 60,
                borderTopRightRadius: 60,
                borderTopWidth: 1,
                paddingTop: 60,
                alignItems: "center",
                padding: 20
            },
            marginView: {
                marginBottom: 10
            },
            text: {
                color: "#ffffff",
                fontSize: 18,
                marginBottom: 15
            },
            buttonContainer: {
                flex: 1,
                alignSelf: "flex-end",
                marginBottom: 40
            },
            checkboxContainer: {
                width: width / 2,
                flexDirection: "row",
                alignItems: "center"
            },
            checkboxText: {
                color: "#ffffff",
                fontSize: 16
            },
            rules: {
                color: "#ffffff",
                fontSize: 16,
                textAlign: "justify",
                marginBottom: 20,
            },
            scrollable: {
                flex: 1
            }
        }
    )
    return (
        <SafeAreaView style={styles.screenContainer}>
            <ImageBackground source={require("../assets/appBG.jpg")} imageStyle={{ objectFit: "fill" }}>
                <View style={styles.invisibleContainer}>
                    <StudentNavBar></StudentNavBar>
                    <View style={styles.contentContainer}>
                        <Text style={styles.text}>RULES</Text>
                        <ScrollView style={styles.scrollable}>
                            <Text style={styles.rules}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque posuere tellus non iaculis luctus. Maecenas in leo at dui sagittis tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus, erat ac faucibus faucibus, ex turpis pellentesque nunc, imperdiet pharetra augue sem ut nisl. Praesent tincidunt, erat nec accumsan ultricies, mauris augue cursus ipsum, vel pretium sem justo in sem. Morbi euismod, velit eu congue rutrum, turpis neque consectetur justo, vel congue risus purus sit amet elit. Fusce in ullamcorper tortor, et aliquet lectus. Suspendisse consectetur diam eu nunc dapibus rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam eu eros vel nunc viverra eleifend vel in erat. In accumsan, massa id congue rhoncus, arcu neque finibus metus, eu fermentum purus diam sed tortor.</Text>
                            <Text style={styles.rules}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque posuere tellus non iaculis luctus. Maecenas in leo at dui sagittis tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus, erat ac faucibus faucibus, ex turpis pellentesque nunc, imperdiet pharetra augue sem ut nisl. Praesent tincidunt, erat nec accumsan ultricies, mauris augue cursus ipsum, vel pretium sem justo in sem. Morbi euismod, velit eu congue rutrum, turpis neque consectetur justo, vel congue risus purus sit amet elit. Fusce in ullamcorper tortor, et aliquet lectus. Suspendisse consectetur diam eu nunc dapibus rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam eu eros vel nunc viverra eleifend vel in erat. In accumsan, massa id congue rhoncus, arcu neque finibus metus, eu fermentum purus diam sed tortor.</Text>
                            <Text style={styles.rules}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque posuere tellus non iaculis luctus. Maecenas in leo at dui sagittis tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus, erat ac faucibus faucibus, ex turpis pellentesque nunc, imperdiet pharetra augue sem ut nisl. Praesent tincidunt, erat nec accumsan ultricies, mauris augue cursus ipsum, vel pretium sem justo in sem. Morbi euismod, velit eu congue rutrum, turpis neque consectetur justo, vel congue risus purus sit amet elit. Fusce in ullamcorper tortor, et aliquet lectus. Suspendisse consectetur diam eu nunc dapibus rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam eu eros vel nunc viverra eleifend vel in erat. In accumsan, massa id congue rhoncus, arcu neque finibus metus, eu fermentum purus diam sed tortor.</Text>
                            <View style={styles.checkboxContainer}>
                                <Checkbox
                                    status={checked ? 'checked' : 'unchecked'}
                                    onPress={() => { setChecked(!checked) }}
                                    color="#ffffff"
                                    uncheckedColor="#aaaaaa"
                                />
                                <Text style={styles.checkboxText}>I have agreed to all the rules.</Text>
                            </View>
                            <View style={styles.buttonContainer}>
                                <AppButton btnText={"NEXT"} onPress={() => navigation.navigate("StudentSelectProblem")}></AppButton>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default RulesScreen;