import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';

const posts = [
  {
    id: 1,
    type: 'warning',
    text: 'Avoid King & Bay – crash at intersection, traffic jam.',
    upvotes: 12,
    downvotes: 2,
  },
  {
    id: 2,
    type: 'tip',
    text: 'Best time to work downtown is 5-8 PM on weekdays.',
    upvotes: 8,
    downvotes: 0,
  },
];

export default function CommunityScreen() {
  const handleShareTip = () => {
    Alert.alert('Share Tip', 'Tip sharing feature coming soon!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoBox} />
        <TouchableOpacity>
          <Text style={styles.bellIcon}>🔔</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.heading}>Community</Text>
        
        <View style={styles.tipOfDaySection}>
          <Text style={styles.tipOfDayTitle}>Tip of the Day:</Text>
          <Text style={styles.tipOfDayText}>
            "Focus on high-traffic areas during lunch and dinner hours for maximum earnings."
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: 40,
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
  content: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 24,
  },
  tipOfDaySection: {
    backgroundColor: '#F2F2F7',
    padding: 16,
    borderRadius: 12,
    marginBottom: 24,
  },
  tipOfDayTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 8,
  },
  tipOfDayText: {
    fontSize: 14,
    color: '#8E8E93',
    lineHeight: 20,
  },
  postsSection: {
    marginBottom: 24,
  },
  postCard: {
    backgroundColor: '#F2F2F7',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  postText: {
    fontSize: 14,
    color: '#000000',
    marginBottom: 12,
    lineHeight: 20,
  },
  postActions: {
    flexDirection: 'row',
    gap: 16,
  },
  voteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  voteIcon: {
    fontSize: 18,
    color: '#8E8E93',
  },
  voteCount: {
    fontSize: 14,
    color: '#8E8E93',
  },
  shareButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
  },
  shareButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

