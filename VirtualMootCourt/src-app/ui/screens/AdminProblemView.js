import React, { useEffect, useState } from 'react';
import { Dimensions, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { AdminNavBar } from '../components/NavBar';
import db from '../../firebase';

const AdminProblemViewScreen = ({ route }) => {
    const { height, width } = Dimensions.get('window');
    const { selectedSynopsis } = route.params;
    const [problemStatement, setProblemStatement] = useState('');

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

    const styles = StyleSheet.create({
        screenContainer: {
            flex: 1,
        },
        invisibleContainer: {
            width: width,
            height: height,
        },
        contentContainer: {
            flex: 1,
            backgroundColor: '#131d24cf',
            borderTopLeftRadius: 60,
            borderTopRightRadius: 60,
            borderTopWidth: 1,
            paddingTop: 60,
            paddingBottom: 40,
            alignItems: 'center',
            justifyContent: 'center',
        },
        problemText: {
            color: 'white',
            fontSize: 18,
            textAlign: 'justify',
            marginHorizontal: 20,
            lineHeight: 25
        },
    });

    return (
        <SafeAreaView style={styles.screenContainer}>
            <ImageBackground source={require('../assets/appBG.jpg')} imageStyle={{ objectFit: 'fill' }}>
                <View style={styles.invisibleContainer}>
                    <AdminNavBar />
                    <View style={styles.contentContainer}>
                        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
                            <Text style={styles.problemText}>{problemStatement}</Text>
                        </ScrollView>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
};

export default AdminProblemViewScreen;