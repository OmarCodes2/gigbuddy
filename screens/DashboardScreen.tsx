import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Modal,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";

type QuickLinksStackParamList = {
  QuickLinks: undefined;
  Dashboard: undefined;
  AvailableOrders: undefined;
  SafeMode: undefined;
  ShiftSummary: undefined;
};

type DashboardScreenNavigationProp = NativeStackNavigationProp<
  QuickLinksStackParamList,
  "Dashboard"
>;

export default function DashboardScreen() {
  const navigation = useNavigation<DashboardScreenNavigationProp>();
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    minPrice: false,
    maxPrice: false,
    distance: false,
    appType: [] as string[],
  });

  const handleNotifications = () => {
    Alert.alert("Notifications", "You have no new notifications.");
  };

  const handleOpenFilters = () => {
    setFilterModalVisible(true);
  };

  const handleCloseFilters = () => {
    setFilterModalVisible(false);
  };

  const toggleAppFilter = (app: string) => {
    setSelectedFilters((prev) => ({
      ...prev,
      appType: prev.appType.includes(app)
        ? prev.appType.filter((a) => a !== app)
        : [...prev.appType, app],
    }));
  };

  const handleApplyFilters = () => {
    Alert.alert("Filters Applied", "Your filters have been applied.");
    setFilterModalVisible(false);
  };

  const handleResetFilters = () => {
    setSelectedFilters({
      minPrice: false,
      maxPrice: false,
      distance: false,
      appType: [],
    });
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
        <TouchableOpacity onPress={handleNotifications}>
          <Ionicons name="notifications-outline" size={24} color="#000000" />
        </TouchableOpacity>
      </View>

      <View style={styles.statusRow}>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={handleOpenFilters}
        >
          <Text style={styles.filterButtonText}>Filters</Text>
        </TouchableOpacity>
        <View style={styles.statusPill}>
          <Text style={styles.statusText}>Online 1hr 33mins</Text>
        </View>
      </View>

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
        >
          <Marker
            coordinate={{ latitude: 43.2557, longitude: -79.8711 }}
            title="Hot Zone: Downtown Hamilton"
            description="$18/hr"
            pinColor="red"
          />
          <Marker
            coordinate={{ latitude: 43.265, longitude: -79.88 }}
            title="Hot Zone: Midtown"
            description="$15/hr"
            pinColor="orange"
          />
        </MapView>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.hotZoneText}>Hot Zone: Dt Hamilton $18/hr</Text>
        <Text style={styles.earningsText}>Earnings: $24 / $150</Text>
      </View>

      <Modal
        visible={filterModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={handleCloseFilters}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Filters</Text>
              <TouchableOpacity onPress={handleCloseFilters}>
                <Ionicons name="close" size={24} color="#000000" />
              </TouchableOpacity>
            </View>

            <ScrollView
              style={styles.filterContent}
              showsVerticalScrollIndicator={false}
            >
              <View style={styles.filterSection}>
                <Text style={styles.filterSectionTitle}>Price Range</Text>
                <TouchableOpacity
                  style={[
                    styles.filterOption,
                    selectedFilters.minPrice && styles.filterOptionSelected,
                  ]}
                  onPress={() =>
                    setSelectedFilters((prev) => ({
                      ...prev,
                      minPrice: !prev.minPrice,
                    }))
                  }
                >
                  <Text style={styles.filterOptionText}>$10+ per hour</Text>
                  {selectedFilters.minPrice && (
                    <Ionicons name="checkmark" size={20} color="#007AFF" />
                  )}
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.filterOption,
                    selectedFilters.maxPrice && styles.filterOptionSelected,
                  ]}
                  onPress={() =>
                    setSelectedFilters((prev) => ({
                      ...prev,
                      maxPrice: !prev.maxPrice,
                    }))
                  }
                >
                  <Text style={styles.filterOptionText}>$20+ per hour</Text>
                  {selectedFilters.maxPrice && (
                    <Ionicons name="checkmark" size={20} color="#007AFF" />
                  )}
                </TouchableOpacity>
              </View>

              <View style={styles.filterSection}>
                <Text style={styles.filterSectionTitle}>Distance</Text>
                <TouchableOpacity
                  style={[
                    styles.filterOption,
                    selectedFilters.distance && styles.filterOptionSelected,
                  ]}
                  onPress={() =>
                    setSelectedFilters((prev) => ({
                      ...prev,
                      distance: !prev.distance,
                    }))
                  }
                >
                  <Text style={styles.filterOptionText}>Within 5 km</Text>
                  {selectedFilters.distance && (
                    <Ionicons name="checkmark" size={20} color="#007AFF" />
                  )}
                </TouchableOpacity>
              </View>

              <View style={styles.filterSection}>
                <Text style={styles.filterSectionTitle}>App Type</Text>
                {["DoorDash", "Uber Eats", "SkipTheDishes"].map((app) => (
                  <TouchableOpacity
                    key={app}
                    style={[
                      styles.filterOption,
                      selectedFilters.appType.includes(app) &&
                        styles.filterOptionSelected,
                    ]}
                    onPress={() => toggleAppFilter(app)}
                  >
                    <Text style={styles.filterOptionText}>{app}</Text>
                    {selectedFilters.appType.includes(app) && (
                      <Ionicons name="checkmark" size={20} color="#007AFF" />
                    )}
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.resetButton}
                onPress={handleResetFilters}
              >
                <Text style={styles.resetButtonText}>Reset</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.applyButton}
                onPress={handleApplyFilters}
              >
                <Text style={styles.applyButtonText}>Apply</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
  backButton: {
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  backButtonText: {
    fontSize: 16,
    color: "#007AFF",
    fontWeight: "600",
  },
  statusRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  filterButton: {
    backgroundColor: "#F2F2F7",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  filterButtonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#007AFF",
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
  infoSection: {
    marginBottom: 20,
  },
  hotZoneText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000000",
    marginBottom: 8,
  },
  earningsText: {
    fontSize: 14,
    color: "#8E8E93",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
  },
  modalContent: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    marginHorizontal: 20,
    maxHeight: "80%",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000",
  },
  filterContent: {
    maxHeight: 400,
  },
  filterSection: {
    marginBottom: 24,
  },
  filterSectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000000",
    marginBottom: 12,
  },
  filterOption: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F2F2F7",
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  filterOptionSelected: {
    backgroundColor: "#E3F2FD",
    borderWidth: 1,
    borderColor: "#007AFF",
  },
  filterOptionText: {
    fontSize: 16,
    color: "#000000",
  },
  modalButtons: {
    flexDirection: "row",
    gap: 12,
    marginTop: 20,
  },
  resetButton: {
    flex: 1,
    backgroundColor: "#F2F2F7",
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  resetButtonText: {
    color: "#007AFF",
    fontSize: 16,
    fontWeight: "600",
  },
  applyButton: {
    flex: 1,
    backgroundColor: "#007AFF",
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  applyButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
