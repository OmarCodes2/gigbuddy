import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import QuickLinksScreen from '../screens/QuickLinksScreen';
import DashboardScreen from '../screens/DashboardScreen';
import AvailableOrdersScreen from '../screens/AvailableOrdersScreen';
import SafeModeScreen from '../screens/SafeModeScreen';
import ShiftSummaryScreen from '../screens/ShiftSummaryScreen';
import CommunityScreen from '../screens/CommunityScreen';

const Tab = createBottomTabNavigator();
const QuickLinksStack = createNativeStackNavigator();

function QuickLinksStackNavigator() {
  return (
    <QuickLinksStack.Navigator>
      <QuickLinksStack.Screen 
        name="QuickLinks" 
        component={QuickLinksScreen}
        options={{ headerShown: false }}
      />
      <QuickLinksStack.Screen 
        name="Dashboard" 
        component={DashboardScreen}
        options={{ headerShown: false }}
      />
      <QuickLinksStack.Screen 
        name="AvailableOrders" 
        component={AvailableOrdersScreen}
        options={{ headerShown: false }}
      />
      <QuickLinksStack.Screen 
        name="SafeMode" 
        component={SafeModeScreen}
        options={{ headerShown: false }}
      />
      <QuickLinksStack.Screen 
        name="ShiftSummary" 
        component={ShiftSummaryScreen}
        options={{ headerShown: false }}
      />
    </QuickLinksStack.Navigator>
  );
}

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#8E8E93',
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="QuickLinksTab"
        component={QuickLinksStackNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="grid-outline" size={size} color={color} />
          ),
          tabBarLabel: 'Quick Links',
        }}
      />
      <Tab.Screen
        name="Community"
        component={CommunityScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people-outline" size={size} color={color} />
          ),
          tabBarLabel: 'Community',
        }}
      />
    </Tab.Navigator>
  );
}


