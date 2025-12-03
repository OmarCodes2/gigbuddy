import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

type MainTabsParamList = {
  Home: undefined;
  QuickLinksTab: undefined;
  Community: undefined;
};

type HomeScreenNavigationProp = BottomTabNavigationProp<
  MainTabsParamList,
  "Home"
>;

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handleStartShift = () => {
    navigation.navigate("QuickLinksTab");
  };

  const handleNotifications = () => {
    Alert.alert("Notifications", "You have no new notifications.");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.logoBox}
          onPress={() => navigation.navigate("Home")}
        >
          <Ionicons name="briefcase-outline" size={24} color="#007AFF" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNotifications}>
          <Ionicons name="notifications-outline" size={24} color="#000000" />
        </TouchableOpacity>
      </View>

      <Text style={styles.greeting}>Hi, Amira,</Text>

      <View style={styles.goalSection}>
        <Text style={styles.goalText}>Goal: $150</Text>
        <Text style={styles.progressText}>Progress: $78</Text>
        <View style={styles.progressBarContainer}>
          <View style={[styles.progressBar, { width: "51%" }]} />
        </View>
      </View>

      <TouchableOpacity
        style={styles.startShiftButton}
        onPress={handleStartShift}
      >
        <Text style={styles.startShiftButtonText}>START SHIFT</Text>
      </TouchableOpacity>

      <View style={styles.hotZonesSection}>
        <Text style={styles.hotZonesTitle}>Upcoming Hot Zones:</Text>
        <Text style={styles.hotZoneText}>Downtown: Starts in 30 mins</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  logoBox: {
    width: 40,
    height: 40,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  greeting: {
    fontSize: 24,
    fontWeight: "600",
    color: "#000000",
    marginBottom: 24,
  },
  goalSection: {
    marginBottom: 32,
  },
  goalText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000000",
    marginBottom: 8,
  },
  progressText: {
    fontSize: 16,
    color: "#8E8E93",
    marginBottom: 12,
  },
  progressBarContainer: {
    height: 8,
    backgroundColor: "#E5E5EA",
    borderRadius: 4,
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#007AFF",
  },
  startShiftButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 20,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 32,
  },
  startShiftButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  hotZonesSection: {
    marginTop: "auto",
  },
  hotZonesTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000000",
    marginBottom: 8,
  },
  hotZoneText: {
    fontSize: 14,
    color: "#8E8E93",
  },
});
