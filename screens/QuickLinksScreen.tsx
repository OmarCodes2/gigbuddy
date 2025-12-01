import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type QuickLinksStackParamList = {
  QuickLinks: undefined;
  Dashboard: undefined;
  AvailableOrders: undefined;
  SafeMode: undefined;
  ShiftSummary: undefined;
};

type QuickLinksScreenNavigationProp = NativeStackNavigationProp<QuickLinksStackParamList, 'QuickLinks'>;

export default function QuickLinksScreen() {
  const navigation = useNavigation<QuickLinksScreenNavigationProp>();

  const menuItems = [
    { id: 1, title: 'Dashboard', route: 'Dashboard' as const },
    { id: 2, title: 'Available Orders', route: 'AvailableOrders' as const },
    { id: 3, title: 'Safe Mode', route: 'SafeMode' as const },
    { id: 4, title: 'Shift Summary', route: 'ShiftSummary' as const },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoBox} />
        <TouchableOpacity>
          <Text style={styles.bellIcon}>🔔</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.menuContainer}>
        {menuItems.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.menuItem}
            onPress={() => navigation.navigate(item.route)}
          >
            <Text style={styles.menuItemNumber}>{item.id}</Text>
            <Text style={styles.menuItemText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 32,
  },
  logoBox: {
    width: 40,
    height: 40,
    backgroundColor: '#007AFF',
    borderRadius: 8,
  },
  bellIcon: {
    fontSize: 24,
  },
  menuContainer: {
    flex: 1,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F7',
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
  },
  menuItemNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007AFF',
    marginRight: 16,
    width: 32,
  },
  menuItemText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
    flex: 1,
  },
});

