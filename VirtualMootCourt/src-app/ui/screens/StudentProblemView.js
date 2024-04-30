import { Dimensions, Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AppNavBar, { StudentNavBar } from "../components/NavBar";
import React, { useEffect, useState } from 'react';
import db from '../../firebase';

const StudentProblemViewScreen = ({ route }) => {
    const { height, width } = Dimensions.get('window')
    const { selectedSynopsis } = route.params;
    const [problemStatement, setProblemStatement] = useState('');
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
                paddingBottom: 40,
                alignItems: "center"
            },
            problemText: {
                color: 'white',
                fontSize: 18,
                textAlign: 'justify',
                marginHorizontal: 20,
                lineHeight: 25
            },
        }
    )
    useEffect(() => {
        const fetchData = async () => {
            try {
                const snapshot = await db.collection('Problem Statement').doc(selectedSynopsis.id).get();
                if (snapshot.exists) {
                    const data = snapshot.data();
                    setProblemStatement(data.problemStatement);
                } else {
                    console.log('Document does not exist');
                }
            } catch (error) {
                console.error('Error fetching document: ', error);
            }
        };

        fetchData();

        // Clean up function
        return () => setProblemStatement('');
    }, [selectedSynopsis]);
    return (
        <SafeAreaView style={styles.screenContainer}>
            <ImageBackground source={require("../assets/appBG.jpg")} imageStyle={{ objectFit: "fill" }}>
                <View style={styles.invisibleContainer}>
                    <StudentNavBar></StudentNavBar>
                    <View style={styles.contentContainer}>
                        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
                            <Text style={styles.problemText}>{problemStatement}</Text>
                        </ScrollView>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default StudentProblemViewScreen;