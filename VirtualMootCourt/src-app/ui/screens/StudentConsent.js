import { Dimensions, Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { StudentNavBar } from "../components/NavBar";
import { BaseInput } from "../components/InputField";
import { AppButton } from "../components/Button";
import { Dialog, Portal } from "react-native-paper";
import React from "react"
import { DaysDropDown, ProblemDropDown } from "../components/DropDown";

const ConsentAndSelectionScreen = () => {
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
                alignItems: "center",
                padding: 20
            },
            marginView: {
                marginBottom: 10
            },
            text: {
                color: "#ffffff",
                fontSize: 16,
                textAlign: "center",
                marginBottom: 5
            },
            dialogContainer: {
                backgroundColor: "#131d24",
                borderRadius: 10,
                alignItems: "center"
            },
            dialog: {
                fontSize: 16,
                color: "#ffffff"
            }
        }
    )
    const [visible, setVisible] = React.useState(false)
    const showDialog = () => setVisible(true)
    const hideDialog = () => setVisible(false)
    return (
        <SafeAreaView style={styles.screenContainer}>
            <ImageBackground source={require("../assets/appBG.jpg")} imageStyle={{ objectFit: "fill" }}>
                <View style={styles.invisibleContainer}>
                    <StudentNavBar></StudentNavBar>
                    <View style={styles.contentContainer}>
                        <View>
                            <Text style={styles.text}>Consent of participation</Text>
                            <Text style={styles.text}>I have confirmed  my participation in this moot session and hereby provide my details for the same.</Text>
                        </View>
                        <View style={{ marginTop: 20 }}>
                            <BaseInput inputLabel={"Judge:"} inputMode="email"></BaseInput>
                            <BaseInput inputLabel={"Advocate(Petitioner):"} inputMode="email"></BaseInput>
                            <BaseInput inputLabel={"Advocate(Respondent):"} inputMode="email"></BaseInput>
                            <DaysDropDown label={"No. of days required:"}></DaysDropDown>
                            <View style={{ alignItems: "center", marginTop: 20 }}>
                                <AppButton btnText={"SUBMIT"} onPress={showDialog} />
                                <Portal>
                                    <Dialog visible={visible} onDismiss={hideDialog} style={styles.dialogContainer}>
                                        <Dialog.Content>
                                            <Text style={styles.dialog}>You have registered successfully.</Text>
                                        </Dialog.Content>
                                        <Dialog.Actions>
                                            <AppButton btnText={"DONE"} onPress={hideDialog}></AppButton>
                                        </Dialog.Actions>
                                    </Dialog>
                                </Portal>
                            </View>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default ConsentAndSelectionScreen;