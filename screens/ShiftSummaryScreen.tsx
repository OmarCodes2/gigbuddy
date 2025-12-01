import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ShiftSummaryScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>$78 / $150 Goal</Text>
        <View style={styles.progressBarContainer}>
          <View style={[styles.progressBar, { width: '51%' }]} />
        </View>
      </View>

      <View style={styles.statsSection}>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>Jobs Completed</Text>
          <Text style={styles.statValue}>7</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>Time Online</Text>
          <Text style={styles.statValue}>2 hrs 41 mins</Text>
        </View>
      </View>

      <View style={styles.adviceSection}>
        <Text style={styles.adviceTitle}>Suggestion:</Text>
        <Text style={styles.adviceText}>
          Stay in Midtown for the next 30 mins. Surge expected!
        </Text>
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
    marginTop: 40,
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 16,
    textAlign: 'center',
  },
  progressBarContainer: {
    height: 12,
    backgroundColor: '#E5E5EA',
    borderRadius: 6,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#007AFF',
  },
  statsSection: {
    marginBottom: 40,
  },
  statItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5EA',
  },
  statLabel: {
    fontSize: 16,
    color: '#8E8E93',
  },
  statValue: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
  },
  adviceSection: {
    backgroundColor: '#F2F2F7',
    padding: 20,
    borderRadius: 12,
  },
  adviceTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 8,
  },
  adviceText: {
    fontSize: 14,
    color: '#8E8E93',
    lineHeight: 20,
  },
});

