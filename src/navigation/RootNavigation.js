import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from "../screens/Home";
import Search from "../screens/Search";
import Library from "../screens/Library";
import Foundation from '@expo/vector-icons/Foundation';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawerContent from "../general/CustomDrawerContent/CustomDrawerContent";
import AddAccount from "../contentPage/AddAccount";
import News from "../contentPage/News";
import Listening from "../contentPage/Listening";
import Setting from "../contentPage/Settings";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { useFocusEffect } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { SearchSettingPage } from "../general/Component/Search/SearchSettingPage";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export const RootNavigation = ({ navigation }) => {
    return (
        <Tab.Navigator initialRouteName="HomeScreen" screenOptions={{
            tabBarStyle: { backgroundColor: 'black' },
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'lightgray',
        }}>
            <Tab.Screen
                name="HomeScreen"
                component={HomeStackNavigation}
                options={{
                    tabBarIcon: ({ color }) => <Foundation name="home" size={24} color={color} />,
                    headerShown: false,
                    tabBarButton: (props) => (
                        <TouchableOpacity
                            {...props}
                            onPress={() => {
                                // Use `navigation` directly to navigate
                                navigation.navigate('HomeScreen');
                                props.onPress(); // Call the original onPress
                            }}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarIcon: ({ color }) => <Ionicons name="search" size={24} color={color} />,
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Library"
                component={Library}
                options={{
                    tabBarIcon: ({ color }) => <MaterialIcons name="library-music" size={24} color={color} />,
                    headerShown: false,
                }}

            />
        </Tab.Navigator>
    );
};

export const HomeStackNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="News" component={News} />
            <Stack.Screen name="Listening" component={Listening} />
            <Stack.Screen name="Settings" component={Setting} />
        </Stack.Navigator>
    );
};

export const SettingStackNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="Settings" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Settings" component={Setting} />
            <Stack.Screen name="SearchSetting" component={SearchSettingPage} />
        </Stack.Navigator>
    );
}


export const RootDrawerNavigation = () => {
    return (
        <Drawer.Navigator initialRouteName="Root" drawerContent={(props) => <CustomDrawerContent {...props} />} screenOptions={{ headerShown: false }}>
            <Drawer.Screen name="Root" component={RootNavigation} />
            <Drawer.Screen name="AddAccount" component={AddAccount} />
        </Drawer.Navigator>
    )
}