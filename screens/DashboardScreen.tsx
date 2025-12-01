import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function DashboardScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoBox} />
        <TouchableOpacity>
          <Text style={styles.bellIcon}>🔔</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.statusRow}>
        <TouchableOpacity style={styles.filterButton}>
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
            coordinate={{ latitude: 43.2650, longitude: -79.8800 }}
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
    marginBottom: 20,
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
  statusRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  filterButton: {
    backgroundColor: '#F2F2F7',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  filterButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#007AFF',
  },
  statusPill: {
    backgroundColor: '#34C759',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  mapContainer: {
    flex: 1,
    marginBottom: 20,
    borderRadius: 12,
    overflow: 'hidden',
  },
  map: {
    flex: 1,
  },
  infoSection: {
    marginBottom: 20,
  },
  hotZoneText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 8,
  },
  earningsText: {
    fontSize: 14,
    color: '#8E8E93',
  },
});

