import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  Modal,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const initialPosts = [
  {
    id: 1,
    type: "warning",
    text: "Avoid King & Bay – crash at intersection, traffic jam.",
    upvotes: 12,
    downvotes: 2,
  },
  {
    id: 2,
    type: "tip",
    text: "Best time to work downtown is 5-8 PM on weekdays.",
    upvotes: 8,
    downvotes: 0,
  },
];

type MainTabsParamList = {
  Home: undefined;
  QuickLinksTab: undefined;
  Community: undefined;
};

export default function CommunityScreen() {
  const navigation =
    useNavigation<BottomTabNavigationProp<MainTabsParamList>>();
  const [posts, setPosts] = useState(initialPosts);
  const [modalVisible, setModalVisible] = useState(false);
  const [tipText, setTipText] = useState("");

  const handleLogoPress = () => {
    navigation.navigate("Home");
  };

  const handleShareTip = () => {
    setModalVisible(true);
  };

  const handleSubmitTip = () => {
    if (tipText.trim() === "") {
      Alert.alert("Error", "Please enter a tip before submitting.");
      return;
    }

    const newPost = {
      id: posts.length + 1,
      type: "tip",
      text: tipText.trim(),
      upvotes: 0,
      downvotes: 0,
    };

    setPosts([newPost, ...posts]);
    setTipText("");
    setModalVisible(false);
    Alert.alert("Success", "Your tip has been shared!");
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setTipText("");
  };

  const handleNotifications = () => {
    Alert.alert("Notifications", "You have no new notifications.");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.logoBox} onPress={handleLogoPress}>
          <Ionicons name="briefcase-outline" size={24} color="#007AFF" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNotifications}>
          <Ionicons name="notifications-outline" size={24} color="#000000" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.heading}>Community</Text>

        <View style={styles.tipOfDaySection}>
          <Text style={styles.tipOfDayTitle}>Tip of the Day:</Text>
          <Text style={styles.tipOfDayText}>
            "Focus on high-traffic areas during lunch and dinner hours for
            maximum earnings."
          </Text>
        </View>

        <View style={styles.postsSection}>
          {posts.map((post) => (
            <View key={post.id} style={styles.postCard}>
              <Text style={styles.postText}>{post.text}</Text>
              <View style={styles.postActions}>
                <TouchableOpacity style={styles.voteButton}>
                  <Text style={styles.voteIcon}>↑</Text>
                  <Text style={styles.voteCount}>{post.upvotes}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.voteButton}>
                  <Text style={styles.voteIcon}>↓</Text>
                  <Text style={styles.voteCount}>{post.downvotes}</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>

        <TouchableOpacity style={styles.shareButton} onPress={handleShareTip}>
          <Text style={styles.shareButtonText}>Share a Tip</Text>
        </TouchableOpacity>
      </ScrollView>

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={handleCloseModal}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.modalOverlay}
        >
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Share a Tip</Text>
              <TouchableOpacity onPress={handleCloseModal}>
                <Ionicons name="close" size={24} color="#000000" />
              </TouchableOpacity>
            </View>

            <Text style={styles.modalLabel}>Your Tip:</Text>
            <TextInput
              style={styles.tipInput}
              placeholder="Enter your tip or suggestion..."
              placeholderTextColor="#8E8E93"
              multiline
              numberOfLines={4}
              value={tipText}
              onChangeText={setTipText}
              textAlignVertical="top"
            />

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={handleCloseModal}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.submitButton}
                onPress={handleSubmitTip}
              >
                <Text style={styles.submitButtonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    paddingTop: 60,
  },
  logoBox: {
    width: 40,
    height: 40,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 24,
  },
  tipOfDaySection: {
    backgroundColor: "#F2F2F7",
    padding: 16,
    borderRadius: 12,
    marginBottom: 24,
  },
  tipOfDayTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000000",
    marginBottom: 8,
  },
  tipOfDayText: {
    fontSize: 14,
    color: "#8E8E93",
    lineHeight: 20,
  },
  postsSection: {
    marginBottom: 24,
  },
  postCard: {
    backgroundColor: "#F2F2F7",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  postText: {
    fontSize: 14,
    color: "#000000",
    marginBottom: 12,
    lineHeight: 20,
  },
  postActions: {
    flexDirection: "row",
    gap: 16,
  },
  voteButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  voteIcon: {
    fontSize: 18,
    color: "#8E8E93",
  },
  voteCount: {
    fontSize: 14,
    color: "#8E8E93",
  },
  shareButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 20,
  },
  shareButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
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
  modalLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000000",
    marginBottom: 8,
  },
  tipInput: {
    borderWidth: 1,
    borderColor: "#E5E5EA",
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
    minHeight: 100,
    maxHeight: 150,
    backgroundColor: "#FFFFFF",
    color: "#000000",
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: "row",
    gap: 12,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: "#F2F2F7",
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  cancelButtonText: {
    color: "#007AFF",
    fontSize: 16,
    fontWeight: "600",
  },
  submitButton: {
    flex: 1,
    backgroundColor: "#007AFF",
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  submitButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
