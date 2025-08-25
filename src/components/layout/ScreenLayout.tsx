import React, { PropsWithChildren } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, spacing, layout } from '../../theme';

interface ScreenLayoutProps extends PropsWithChildren {
  padded?: boolean;
  backgroundColor?: string;
}

const ScreenLayout: React.FC<ScreenLayoutProps> = ({
  children,
  padded = true,
  backgroundColor = colors.background?.primary ?? '#FFFFFF',
}) => {
  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor }]}> 
      <StatusBar barStyle={'dark-content'} />
      <View
        style={[
          styles.container,
          padded && { padding: layout?.container?.padding ?? spacing.md },
        ]}
      >
        {children}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  container: { flex: 1 },
});

export default ScreenLayout;

