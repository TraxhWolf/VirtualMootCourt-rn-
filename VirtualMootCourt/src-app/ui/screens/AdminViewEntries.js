import { Dimensions, Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AdminNavBar } from "../components/NavBar";
import { useEffect, useState } from "react";
import db from "../../firebase";

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
                textAlign: "center",
                marginBottom: 20
            },
            tableBase: {
                backgroundColor: "#91795ecf",
                flex: 1,
                borderRadius: 10,
                borderColor: "#ffffff",
                borderWidth: 1.5
            },
            headerRow: {
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                borderColor: "#ffffff",
                borderWidth: 1,
                borderRadius: 7,
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                height: 40,
                alignItems: "center"
            },
            tableHeader: {
                fontSize: 16,
                color: "#ffffff",
                fontWeight: "700",
                flex: 1,
                textAlign: "center"
            },
            tableRow: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderBottomWidth: 1,
                borderBottomColor: '#ffffff',
                paddingVertical: 10,
            },
            tableCell: {
                fontSize: 16,
                color: '#ffffff',
                flex: 1,
                textAlign: 'center',
            }
        }
    )
    const [participants, setParticipants] = useState([])
    useEffect(() => {
        const unsubscribe = db.collection("Participants").onSnapshot((snapshot) => {
            const participantData = snapshot.docs.map((doc) => {
                const data = doc.data()
                return {
                    id: doc.id,
                    judgeEmail: data.judgeEmail,
                    petitionerEmail: data.petitionerEmail,
                    respondentEmail: data.respondentEmail,
                    noOfDays: data.noOfDays ? data.noOfDays.value : null
                }
            })
            setParticipants(participantData)
        })
        return () => unsubscribe()
    })

    return (
        <SafeAreaView style={styles.screenContainer}>
            <ImageBackground source={require("../assets/appBG.jpg")} imageStyle={{ objectFit: "fill" }}>
                <View style={styles.invisibleContainer}>
                    <AdminNavBar></AdminNavBar>
                    <View style={styles.contentContainer}>
                        <Text style={styles.header}>Registered Participants</Text>
                        <ScrollView style={styles.tableBase}>
                            <View style={styles.headerRow}>
                                <Text style={styles.tableHeader}>Judge</Text>
                                <Text style={styles.tableHeader}>Petitioner</Text>
                                <Text style={styles.tableHeader}>Respondent</Text>
                                <Text style={styles.tableHeader}>No. of Days</Text>
                            </View>
                            {participants.map((participant) => (
                                <View key={participant.id} style={styles.tableRow}>
                                    <Text style={[styles.tableCell, styles.borderRight]}>{participant.judgeEmail}</Text>
                                    <Text style={[styles.tableCell, styles.borderRight]}>{participant.petitionerEmail}</Text>
                                    <Text style={[styles.tableCell, styles.borderRight]}>{participant.respondentEmail}</Text>
                                    <Text style={styles.tableCell}>{participant.noOfDays}</Text>
                                </View>
                            ))}
                        </ScrollView>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default ViewEntriesScreen;