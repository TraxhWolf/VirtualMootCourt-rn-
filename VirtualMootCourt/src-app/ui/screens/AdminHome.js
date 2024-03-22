import { Dimensions, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

const AdminHomeScreen = () => {
    
    const {width,height} = Dimensions.get('window')
    const styles = StyleSheet.create(
        {
            screenContainer: {
                flex: 1
            },
            invisibleContainer: {
                width: width,
                height: height
            },
            topNavBar: {
                width: width,
                height: 85,
                backgroundColor: '#131d24cf',
                borderBottomColor: "#ffffff",
                borderBottomWidth: 1,
                marginBottom: 90
            },
            contentContainer: {
                width: width,
                backgroundColor: "#131d24cf",
                borderTopLeftRadius: 60,
                borderTopRightRadius: 60,
                borderColor: "#ffffff",
                borderTopWidth: 1,
                padding: 25,
                paddingTop: 60
            },
            text: {
                color: "#ffffff",
                fontSize: 18,
                textAlign: "justify"
            }
        }
    )

    return(
        <SafeAreaView style={styles.screenContainer}>
            <ImageBackground source={require("C:/Users/traxh/Documents/MootCourt/VirtualMootCourt/src-app/assets/appBG.jpg")} imageStyle={{objectFit: "fill"}}>
            <View style={styles.invisibleContainer}>
            <View style={styles.topNavBar}></View>
            <View style={styles.contentContainer}>
            <ScrollView>
                <Text style={styles.text}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit sed ligula tempus efficitur eget at nisl. Vivamus nec odio malesuada, tristique ligula vitae, finibus metus. Nulla dictum magna quis ipsum sodales, feugiat placerat orci aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum nisi eget velit tristique fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce augue enim, congue non congue et, feugiat sit amet erat. Nam elementum enim diam, ac suscipit ligula tincidunt nec. Vivamus sodales elit et lacus convallis, sed feugiat mi molestie. Cras dictum tellus sit amet metus pharetra gravida. Etiam quis maximus erat. Aliquam erat volutpat. Integer malesuada nulla vitae nibh venenatis placerat.

Pellentesque blandit diam elit, sit amet iaculis eros euismod vitae. In quis enim vel dui venenatis condimentum. Suspendisse blandit tincidunt mauris, et mattis nulla sagittis in. Aenean ac erat lacus. Nam vestibulum gravida nulla, in malesuada orci consectetur ut. Mauris sagittis sagittis sem, sed sollicitudin justo finibus in. Sed lacus urna, feugiat quis scelerisque pellentesque, commodo ut diam. Quisque maximus tempus fringilla. Proin rhoncus sem ac augue cursus eleifend. Sed non posuere orci, non ultrices tellus. Morbi vel feugiat nisl.

Sed vitae nisi magna. Nunc vitae cursus dolor. Suspendisse dui sapien, laoreet sed dictum id, hendrerit et urna. Nullam vitae velit enim. Phasellus faucibus blandit iaculis. Curabitur at ultrices tortor, sed sagittis felis. Nullam ac tempus tortor, id fermentum est.

In nisi felis, ornare vitae consequat a, vehicula id risus. Fusce vitae erat purus. Mauris sed est vel mi tempor tempor. Aliquam iaculis dui in erat lobortis elementum. Integer ligula justo, scelerisque ac semper mattis, malesuada at nisl. Duis ultrices leo ac lobortis malesuada. Mauris molestie lorem ac congue placerat. Phasellus non ante quis libero bibendum blandit. Morbi vel lorem libero. Suspendisse potenti. Fusce fermentum hendrerit dolor, vestibulum pulvinar nulla pharetra eu. Vestibulum facilisis enim at neque vulputate, sed porta nisl interdum.

Donec vel odio pellentesque, consequat turpis nec, efficitur nisl. Donec lobortis tortor ac erat scelerisque, a laoreet lorem sagittis. Phasellus urna arcu, rutrum sit amet orci vitae, volutpat hendrerit purus. Nunc orci urna, consectetur eget malesuada viverra, pretium id arcu. Sed nibh purus, congue ac enim quis, tincidunt elementum nulla. Aenean libero dui, semper sed hendrerit a, interdum in mauris. Morbi luctus mauris tempor velit accumsan volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed leo turpis, vehicula in porttitor sed, cursus ac mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam posuere id dui quis maximus. Aenean eu lorem ornare, lacinia purus non, viverra sem. Morbi cursus cursus augue nec lobortis. Vestibulum eu odio sit amet velit commodo laoreet. Nunc vitae massa ac enim lacinia condimentum. Morbi dapibus bibendum blandit."</Text>
            </ScrollView>
            </View>
            </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default AdminHomeScreen;