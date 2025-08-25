// Main bottom tabs with nested stacks per config
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  MainTabParamList,
  HomeStackParamList,
  PetsStackParamList,
  OrdersStackParamList,
  ProfileStackParamList,
} from '../types/navigation';

// Screens
import HomeScreen from '../screens/HomeScreen';
import PetsScreen from '../screens/PetsScreen';
import OrdersScreen from '../screens/OrdersScreen';
import ProfileScreen from '../screens/ProfileScreen';
import PetDetailsScreen from '../screens/PetDetailsScreen';
import AddPetScreen from '../screens/AddPetScreen';
import EditPetScreen from '../screens/EditPetScreen';
import OrderDetailsScreen from '../screens/OrderDetailsScreen';
import CheckoutScreen from '../screens/CheckoutScreen';
import SearchScreen from '../screens/SearchScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import OrderPetScreen from '../screens/OrderPetScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator<MainTabParamList>();

const HomeStack = createNativeStackNavigator<HomeStackParamList>();
const PetsStack = createNativeStackNavigator<PetsStackParamList>();
const OrdersStack = createNativeStackNavigator<OrdersStackParamList>();
const ProfileStack = createNativeStackNavigator<ProfileStackParamList>();

const HomeStackNavigator = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
    <HomeStack.Screen name="PetDetails" component={PetDetailsScreen} />
    <HomeStack.Screen name="AddPet" component={AddPetScreen} />
    <HomeStack.Screen name="EditPet" component={EditPetScreen} />
    <HomeStack.Screen name="OrderDetails" component={OrderDetailsScreen} />
    <HomeStack.Screen name="Checkout" component={CheckoutScreen} />
  </HomeStack.Navigator>
);

const PetsStackNavigator = () => (
  <PetsStack.Navigator>
    <PetsStack.Screen name="Pets" component={PetsScreen} options={{ headerShown: false }} />
    <PetsStack.Screen name="PetDetails" component={PetDetailsScreen} />
    <PetsStack.Screen name="AddPet" component={AddPetScreen} />
    <PetsStack.Screen name="EditPet" component={EditPetScreen} />
    <PetsStack.Screen name="Search" component={SearchScreen} />
    <PetsStack.Screen name="Favorites" component={FavoritesScreen} />
  </PetsStack.Navigator>
);

const OrdersStackNavigator = () => (
  <OrdersStack.Navigator>
    <OrdersStack.Screen name="Orders" component={OrdersScreen} options={{ headerShown: false }} />
    <OrdersStack.Screen name="OrderDetails" component={OrderDetailsScreen} />
    <OrdersStack.Screen name="Checkout" component={CheckoutScreen} />
    <OrdersStack.Screen name="OrderPet" component={OrderPetScreen} />
  </OrdersStack.Navigator>
);

const ProfileStackNavigator = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
    <ProfileStack.Screen name="EditProfile" component={EditProfileScreen} />
    <ProfileStack.Screen name="Settings" component={SettingsScreen} />
  </ProfileStack.Navigator>
);

const MainBottomTabs = () => (
  <Tab.Navigator initialRouteName="HomeStack">
    <Tab.Screen name="HomeStack" component={HomeStackNavigator} options={{ title: 'Home' }} />
    <Tab.Screen name="PetsStack" component={PetsStackNavigator} options={{ title: 'Pets' }} />
    <Tab.Screen name="OrdersStack" component={OrdersStackNavigator} options={{ title: 'Orders' }} />
    <Tab.Screen name="ProfileStack" component={ProfileStackNavigator} options={{ title: 'Profile' }} />
  </Tab.Navigator>
);

export default MainBottomTabs;

