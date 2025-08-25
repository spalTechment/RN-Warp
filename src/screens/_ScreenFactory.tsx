// Simple placeholder components for all referenced screens in config
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Screen: React.FC<{ title: string }> = ({ title }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: '600' },
});

export const makeScreen = (name: string) => () => <Screen title={name} />;

