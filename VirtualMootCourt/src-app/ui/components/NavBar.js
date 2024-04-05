import { StyleSheet, Dimensions, View, TouchableOpacity, Image } from "react-native"

const AppNavBar = () => {
    const {width} = Dimensions.get('window')
    const styles = StyleSheet.create(
        {
            topNavBar: {
                width: width,
                height: 85,
                backgroundColor: '#131d24cf',
                borderBottomColor: "#ffffff",
                borderBottomWidth: 1,
                marginBottom: 90
            },
            button: {
                height: "100%",
                width: "100%",
                justifyContent: "center",
                paddingLeft: 20
            }
        }
    )
    return(
        <View style={styles.topNavBar}>
                <TouchableOpacity style={styles.button}>
                    <Image source={require("../assets/Icons/menu-icon.png")}></Image>
                </TouchableOpacity>
            </View>
    )
}

export default AppNavBar;