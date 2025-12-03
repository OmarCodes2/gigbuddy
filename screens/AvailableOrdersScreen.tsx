import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

type QuickLinksStackParamList = {
  QuickLinks: undefined;
  Dashboard: undefined;
  AvailableOrders: undefined;
  SafeMode: undefined;
  ShiftSummary: undefined;
};

type AvailableOrdersScreenNavigationProp = NativeStackNavigationProp<
  QuickLinksStackParamList,
  "AvailableOrders"
>;

const initialOrders = [
  {
    id: 1,
    app: "DoorDash",
    pay: "$14",
    distance: "3 km",
    dropOffBy: "7:45 PM",
  },
  {
    id: 2,
    app: "Uber Eats",
    pay: "$18",
    distance: "5 km",
    dropOffBy: "8:15 PM",
  },
  {
    id: 3,
    app: "SkipTheDishes",
    pay: "$12",
    distance: "2 km",
    dropOffBy: "7:30 PM",
  },
];

export default function AvailableOrdersScreen() {
  const navigation = useNavigation<AvailableOrdersScreenNavigationProp>();
  const [newOrders, setNewOrders] = useState(initialOrders);
  const [acceptedOrders, setAcceptedOrders] = useState<typeof initialOrders>(
    []
  );

  const handleAccept = (orderId: number) => {
    const order = newOrders.find((o) => o.id === orderId);
    if (order) {
      setNewOrders(newOrders.filter((o) => o.id !== orderId));
      setAcceptedOrders([...acceptedOrders, order]);
      Alert.alert("Order Accepted", `Order ${orderId} has been accepted.`);
    }
  };

  const handleDecline = (orderId: number) => {
    Alert.alert("Order Declined", `Order ${orderId} has been declined.`);
  };

  const handleNotifications = () => {
    Alert.alert("Notifications", "You have no new notifications.");
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

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>New Orders</Text>

        <View style={styles.ordersList}>
          {newOrders.length > 0 ? (
            newOrders.map((order) => (
              <View key={order.id} style={styles.orderCard}>
                <View style={styles.orderHeader}>
                  <Text style={styles.orderApp}>{order.app}</Text>
                  <Text style={styles.orderPay}>{order.pay}</Text>
                </View>
                <Text style={styles.orderDetail}>
                  Distance: {order.distance}
                </Text>
                <Text style={styles.orderDetail}>
                  Drop off by: {order.dropOffBy}
                </Text>
                <View style={styles.orderActions}>
                  <TouchableOpacity
                    style={styles.acceptButton}
                    onPress={() => handleAccept(order.id)}
                  >
                    <Text style={styles.acceptButtonText}>Accept</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.declineButton}
                    onPress={() => handleDecline(order.id)}
                  >
                    <Text style={styles.declineButtonText}>Decline</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))
          ) : (
            <Text style={styles.emptyText}>No new orders available</Text>
          )}
        </View>

        {acceptedOrders.length > 0 && (
          <>
            <Text style={styles.title}>Accepted Orders</Text>
            <View style={styles.ordersList}>
              {acceptedOrders.map((order) => (
                <View key={order.id} style={styles.acceptedOrderCard}>
                  <View style={styles.orderHeader}>
                    <Text style={styles.orderApp}>{order.app}</Text>
                    <View style={styles.acceptedBadge}>
                      <Ionicons
                        name="checkmark-circle"
                        size={20}
                        color="#34C759"
                      />
                      <Text style={styles.acceptedText}>Accepted</Text>
                    </View>
                  </View>
                  <Text style={styles.orderPay}>{order.pay}</Text>
                  <Text style={styles.orderDetail}>
                    Distance: {order.distance}
                  </Text>
                  <Text style={styles.orderDetail}>
                    Drop off by: {order.dropOffBy}
                  </Text>
                </View>
              ))}
            </View>
          </>
        )}
      </ScrollView>
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
    marginBottom: 24,
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
  scrollView: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 20,
    marginTop: 0,
  },
  ordersList: {
    marginBottom: 32,
  },
  emptyText: {
    fontSize: 14,
    color: "#8E8E93",
    textAlign: "center",
    paddingVertical: 20,
  },
  orderCard: {
    backgroundColor: "#F2F2F7",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  orderHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  orderApp: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000000",
  },
  orderPay: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#007AFF",
  },
  orderDetail: {
    fontSize: 14,
    color: "#8E8E93",
    marginBottom: 4,
  },
  orderActions: {
    flexDirection: "row",
    marginTop: 12,
    gap: 12,
  },
  acceptButton: {
    flex: 1,
    backgroundColor: "#34C759",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  acceptButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
  },
  declineButton: {
    flex: 1,
    backgroundColor: "#FF3B30",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  declineButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
  },
  acceptedOrderCard: {
    backgroundColor: "#E8F5E9",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#34C759",
  },
  acceptedBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  acceptedText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#34C759",
  },
});
