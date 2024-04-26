import { Dimensions, Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {AdminNavBar} from "../components/NavBar";

const AdminHomeScreen = () => {
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
                flex: 1,
                width: width,
                backgroundColor: "#131d24cf",
                borderTopLeftRadius: 60,
                borderTopRightRadius: 60,
                borderTopWidth: 1,
                padding: 25,
                paddingTop: 60
            },
            rules: {
                fontSize: 16,
                color: "#ffffff",
                textAlign: "justify"
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
                    <AdminNavBar></AdminNavBar>
                    <View style={styles.contentContainer}>
                    <ScrollView style={styles.scrollable}>
                    <Text style={styles.rules}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque posuere tellus non iaculis luctus. Maecenas in leo at dui sagittis tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus, erat ac faucibus faucibus, ex turpis pellentesque nunc, imperdiet pharetra augue sem ut nisl. Praesent tincidunt, erat nec accumsan ultricies, mauris augue cursus ipsum, vel pretium sem justo in sem. Morbi euismod, velit eu congue rutrum, turpis neque consectetur justo, vel congue risus purus sit amet elit. Fusce in ullamcorper tortor, et aliquet lectus. Suspendisse consectetur diam eu nunc dapibus rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam eu eros vel nunc viverra eleifend vel in erat. In accumsan, massa id congue rhoncus, arcu neque finibus metus, eu fermentum purus diam sed tortor.</Text>
                    <Text style={styles.rules}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque posuere tellus non iaculis luctus. Maecenas in leo at dui sagittis tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus, erat ac faucibus faucibus, ex turpis pellentesque nunc, imperdiet pharetra augue sem ut nisl. Praesent tincidunt, erat nec accumsan ultricies, mauris augue cursus ipsum, vel pretium sem justo in sem. Morbi euismod, velit eu congue rutrum, turpis neque consectetur justo, vel congue risus purus sit amet elit. Fusce in ullamcorper tortor, et aliquet lectus. Suspendisse consectetur diam eu nunc dapibus rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam eu eros vel nunc viverra eleifend vel in erat. In accumsan, massa id congue rhoncus, arcu neque finibus metus, eu fermentum purus diam sed tortor.</Text>
                    <Text style={styles.rules}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque posuere tellus non iaculis luctus. Maecenas in leo at dui sagittis tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus, erat ac faucibus faucibus, ex turpis pellentesque nunc, imperdiet pharetra augue sem ut nisl. Praesent tincidunt, erat nec accumsan ultricies, mauris augue cursus ipsum, vel pretium sem justo in sem. Morbi euismod, velit eu congue rutrum, turpis neque consectetur justo, vel congue risus purus sit amet elit. Fusce in ullamcorper tortor, et aliquet lectus. Suspendisse consectetur diam eu nunc dapibus rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam eu eros vel nunc viverra eleifend vel in erat. In accumsan, massa id congue rhoncus, arcu neque finibus metus, eu fermentum purus diam sed tortor.</Text>
                    </ScrollView>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default AdminHomeScreen;