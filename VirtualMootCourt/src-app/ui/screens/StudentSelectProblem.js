import { Dimensions, FlatList, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { StudentNavBar } from "../components/NavBar";
import { ProblemDropDown } from "../components/DropDown"
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import db from "../../firebase";

const SelectProblemScreen = () => {
    const { height, width } = Dimensions.get('window')
    const navigation = useNavigation();
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
            pressable: {
                width: width / 1.25,
                marginBottom: 10,
                padding: 10,
                backgroundColor: "#91795e",
                borderRadius: 5,
            },
            pressableText: {
                fontSize: 15,
                color: "#ffffff",
            }
        }
    )
    const [category, setCategory] = useState('');
    const [synopsis, setSynopsis] = useState([]);
    const [selectedSynopsis, setSelectedSynopsis] = useState(null);
    useEffect(() => {
        const unsubscribe = db.collection('Problem Statement')
            .where('problemCategory', '==', category)
            .onSnapshot((snapshot) => {
                const synopsisData = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setSynopsis(synopsisData);
            });
        return () => unsubscribe();
    }, [category]);

    const handleCategoryChange = (selectedCategory) => {
        setCategory(selectedCategory);
    };

    const handleProblemPress = (selectedSynopsis) => {
        navigation.navigate('StudentProblemView', { selectedSynopsis });
    };
    return (
        <SafeAreaView style={styles.screenContainer}>
            <ImageBackground source={require("../assets/appBG.jpg")} imageStyle={{ objectFit: "fill" }}>
                <View style={styles.invisibleContainer}>
                    <StudentNavBar></StudentNavBar>
                    <View style={styles.contentContainer}>
                        <View style={styles.marginView}>
                            <ProblemDropDown label={"Problem Category"} onSelectItem={handleCategoryChange}/>
                        </View>
                        <FlatList
                            data={synopsis}
                            renderItem={({ item }) => (
                                <TouchableOpacity style={styles.pressable} onPress={() => handleProblemPress(item)}>
                                    <Text style={styles.pressableText}>{item.problemSynopsis}</Text>
                                </TouchableOpacity>
                            )}
                            keyExtractor={(item) => item.id}
                        />
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default SelectProblemScreen;