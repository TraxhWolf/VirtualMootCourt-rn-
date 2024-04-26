import { useNavigation } from "@react-navigation/native"
import React from "react"
import { StyleSheet, Dimensions, View, TouchableOpacity, Image, useAnimatedValue } from "react-native"
import { Divider, Menu } from "react-native-paper"

export function AdminNavBar() {
    const { width } = Dimensions.get('window')
    const navigation = useNavigation()
    const styles = StyleSheet.create(
        {
            topNavBar: {
                width: width,
                height: 85,
                backgroundColor: '#131d24cf',
                borderBottomColor: "#ffffff",
                borderBottomWidth: 1,
                marginBottom: 90
            }
        }
    )
    const [visible, setVisible] = React.useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);
    return (
        <View style={styles.topNavBar}>
            <Menu
                visible={visible}
                onDismiss={closeMenu}
                anchor={<MenuIconButton onPress={openMenu} />}
                anchorPosition="bottom"
            >
                <Menu.Item title="Home" onPress={() => navigation.navigate("AdminHome")} />
                <Divider bold={true} />
                <Menu.Item title="View Entries" onPress={() => navigation.navigate("AdminViewEntries")} />
                <Divider bold={true} />
                <Menu.Item title="Add Problem" onPress={() => navigation.navigate("AdminAddProblem")} />
                <Divider bold={true} />
                <Menu.Item title="View Problem" onPress={() => navigation.navigate("AdminViewProblem")} />
                <Divider bold={true} />
                <Menu.Item title="Logout" onPress={() => navigation.popToTop()} />
            </Menu>
        </View>
    )
}

export function StudentNavBar() {
    const { width } = Dimensions.get('window')
    const navigation = useNavigation()
    const styles = StyleSheet.create(
        {
            topNavBar: {
                width: width,
                height: 85,
                backgroundColor: '#131d24cf',
                borderBottomColor: "#ffffff",
                borderBottomWidth: 1,
                marginBottom: 90
            }
        }
    )
    const [visible, setVisible] = React.useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);
    return (
        <View style={styles.topNavBar}>
            <Menu
                visible={visible}
                onDismiss={closeMenu}
                anchor={<MenuIconButton onPress={openMenu} />}
                anchorPosition="bottom"
            >
                <Menu.Item title="Rules" onPress={() => navigation.navigate("StudentRules")} />
                <Divider bold={true} />
                <Menu.Item title="Select Problem" onPress={() => navigation.navigate("StudentSelectProblem")} />
                <Divider bold={true} />
                <Menu.Item title="Consent and Selection" onPress={() => navigation.navigate("StudentConsent")} />
                <Divider bold={true} />
                <Menu.Item title="Logout" onPress={() => navigation.popToTop()} />
            </Menu>
        </View>
    )
}

export function MenuIconButton({ onPress }) {
    const styles = StyleSheet.create(
        {
            button: {
                height: "100%",
                width: "100%",
                justifyContent: "center",
                paddingLeft: 20
            }
        }
    )
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Image source={require("../assets/Icons/menu-icon.png")}></Image>
        </TouchableOpacity>
    )
}