import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';
import AddProblemScreen from '../screens/AdminAddProblem';
import AdminHomeScreen from '../screens/AdminHome';
import AdminLoginScreen from '../screens/AdminLogin';
import AdminProblemViewScreen from '../screens/AdminProblemView';
import ViewEntriesScreen from '../screens/AdminViewEntries';
import AdminViewProblemScreen from '../screens/AdminViewProblem';
import EnterMootScreen from '../screens/EnterMoot';
import ConsentAndSelectionScreen from '../screens/StudentConsent';
import StudentLoginScreen from '../screens/StudentLogin';
import StudentProblemViewScreen from '../screens/StudentProblemView';
import RulesScreen from '../screens/StudentRules';
import SelectProblemScreen from '../screens/StudentSelectProblem';

const Stack = createNativeStackNavigator()

const Navigator = () => {
    return(
        <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="AdminAddProblem" component={AddProblemScreen} />
            <Stack.Screen name="AdminHome" component={AdminHomeScreen} />
            <Stack.Screen name="AdminLogin" component={AdminLoginScreen} />
            <Stack.Screen name="AdminProblemView" component={AdminProblemViewScreen} />
            <Stack.Screen name="AdminViewEntries" component={ViewEntriesScreen} />
            <Stack.Screen name="AdminViewProblem" component={AdminViewProblemScreen} />
            <Stack.Screen name="EnterMoot" component={EnterMootScreen} />
            <Stack.Screen name="StudentConsent" component={ConsentAndSelectionScreen} />
            <Stack.Screen name="StudentLogin" component={StudentLoginScreen} />
            <Stack.Screen name="StudentProblemView" component={StudentProblemViewScreen} />
            <Stack.Screen name="StudentRules" component={RulesScreen} />
            <Stack.Screen name="StudentSelectProblem" component={SelectProblemScreen} />
        </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator;