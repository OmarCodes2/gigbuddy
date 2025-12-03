import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import MapView, { Marker, Polyline } from "react-native-maps";

type QuickLinksStackParamList = {
  QuickLinks: undefined;
  Dashboard: undefined;
  AvailableOrders: undefined;
  SafeMode: undefined;
  ShiftSummary: undefined;
};

type SafeModeScreenNavigationProp = NativeStackNavigationProp<
  QuickLinksStackParamList,
  "SafeMode"
>;

export default function SafeModeScreen() {
  const navigation = useNavigation<SafeModeScreenNavigationProp>();
  const [orderAccepted, setOrderAccepted] = useState(false);

  const handleAccept = () => {
    setOrderAccepted(true);
    Alert.alert("Accepted", "Order accepted in Safe Mode.");
  };

  const handleDecline = () => {
    Alert.alert("Declined", "Order declined.");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
        <View style={styles.statusPill}>
          <Text style={styles.statusText}>Online 1hr 33mins</Text>
        </View>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>SAFE MODE</Text>
      </View>

      {orderAccepted && (
        <View style={styles.safeModeBanner}>
          <Ionicons name="shield-checkmark" size={24} color="#FFFFFF" />
          <Text style={styles.safeModeBannerText}>
            Order Accepted - Safe Mode Active
          </Text>
        </View>
      )}

      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 43.2557,
            longitude: -79.8711,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
          showsUserLocation={true}
          showsMyLocationButton={false}
          mapType="standard"
          customMapStyle={[
            {
              elementType: "geometry",
              stylers: [{ color: "#1C1C1E" }],
            },
            {
              elementType: "labels.text.stroke",
              stylers: [{ color: "#1C1C1E" }],
            },
            {
              elementType: "labels.text.fill",
              stylers: [{ color: "#8E8E93" }],
            },
          ]}
        >
          <Marker
            coordinate={{ latitude: 43.2557, longitude: -79.8711 }}
            title="Pickup Location"
            pinColor="green"
          />
          <Marker
            coordinate={{ latitude: 43.265, longitude: -79.88 }}
            title="Drop-off Location"
            pinColor="red"
          />
          <Polyline
            coordinates={[
              { latitude: 43.2557, longitude: -79.8711 },
              { latitude: 43.265, longitude: -79.88 },
            ]}
            strokeColor="#007AFF"
            strokeWidth={4}
          />
        </MapView>
      </View>

      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.acceptButton} onPress={handleAccept}>
          <Text style={styles.acceptButtonText}>Accept</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.declineButton} onPress={handleDecline}>
          <Text style={styles.declineButtonText}>Decline</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.suggestionText}>
        Suggestion: Stay in Midtown for the next 30 mins.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  backButton: {
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  backButtonText: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "600",
  },
  titleContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  safeModeBanner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 20,
    gap: 8,
  },
  safeModeBannerText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  statusPill: {
    backgroundColor: "#34C759",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
  },
  statusText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  mapContainer: {
    flex: 1,
    marginBottom: 20,
    borderRadius: 12,
    overflow: "hidden",
  },
  map: {
    flex: 1,
  },
  actionsContainer: {
    flexDirection: "row",
    gap: 16,
    marginBottom: 20,
  },
  acceptButton: {
    flex: 1,
    backgroundColor: "#34C759",
    paddingVertical: 20,
    borderRadius: 12,
    alignItems: "center",
  },
  acceptButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  declineButton: {
    flex: 1,
    backgroundColor: "#FF3B30",
    paddingVertical: 20,
    borderRadius: 12,
    alignItems: "center",
  },
  declineButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  suggestionText: {
    fontSize: 14,
    color: "#8E8E93",
    textAlign: "center",
    marginBottom: 20,
  },
});
