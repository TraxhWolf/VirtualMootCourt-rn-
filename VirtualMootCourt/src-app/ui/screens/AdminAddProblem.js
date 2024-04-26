import { Dimensions, Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {ProblemDropDown} from "../components/DropDown"
import { BigInput, VeryBigInput } from "../components/InputField";
import { AppButton } from "../components/Button";
import { AdminNavBar } from "../components/NavBar";
import { Dialog, Portal } from "react-native-paper";
import React from "react";


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
                <AdminNavBar></AdminNavBar>
                    <View style={styles.contentContainer}>
                        <View style={styles.marginView}>
                            <ProblemDropDown label={"Problem Category"} />
                        </View>
                        <View style={styles.marginView}>
                            <BigInput inputLabel={"Synopsis"}></BigInput>
                        </View>
                        <View style={styles.marginView}>
                            <VeryBigInput inputLabel={"Problem Statement"}></VeryBigInput>
                        </View>
                        <AppButton btnText={"DONE"} onPress={showDialog}></AppButton>
                        <Portal>
                            <Dialog visible={visible} onDismiss={hideDialog} style={styles.dialogContainer}>
                                <Dialog.Content>
                                    <Text style={styles.dialog}>Problem added succesfully.</Text>
                                </Dialog.Content>
                                <Dialog.Actions>
                                    <AppButton btnText={"DONE"} onPress={hideDialog}></AppButton>
                                </Dialog.Actions>
                            </Dialog>
                        </Portal>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default AddProblemScreen;