import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { ScreenLayout } from '../../components';
import { colors, spacing, typography, borderRadius } from '../../theme';

const LoginScreen: React.FC = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onGooglePress = () => {
    // TODO: integrate real Google sign-in when configured
  };

  const onCreateAccount = () => {
    // TODO: handle submit per screenFlow when auth is wired
  };

  const onLoginLink = () => {
    // TODO: navigate to existing Login per screenFlow if needed
  };

  return (
    <ScreenLayout padded>
      <View style={styles.container}>
        <Text style={styles.title}>Create account</Text>

        <TouchableOpacity style={styles.googleButton} onPress={onGooglePress} accessibilityRole="button">
          <View style={styles.googleIconCircle}>
            <Text style={styles.googleIconText}>G</Text>
          </View>
          <Text style={styles.googleText}>Sign up with Google</Text>
        </TouchableOpacity>

        <View style={styles.orRow}>
          <View style={styles.orLine} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.orLine} />
        </View>

        <View style={styles.fieldBlock}>
          <Text style={styles.label}>Name*</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            placeholderTextColor={colors.text?.secondary}
            value={name}
            onChangeText={setName}
          />
        </View>

        <View style={styles.fieldBlock}>
          <Text style={styles.label}>Email*</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor={colors.text?.secondary}
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.fieldBlock}>
          <Text style={styles.label}>Password*</Text>
          <TextInput
            style={styles.input}
            placeholder="Create a password"
            placeholderTextColor={colors.text?.secondary}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <Text style={styles.helper}>Must be at least 8 characters.</Text>
        </View>

        <TouchableOpacity style={styles.primaryButton} onPress={onCreateAccount} accessibilityRole="button">
          <Text style={styles.primaryButtonText}>Create account</Text>
        </TouchableOpacity>

        <View style={styles.footerRow}>
          <Text style={styles.footerText}>Already have an account? </Text>
          <TouchableOpacity onPress={onLoginLink} accessibilityRole="link">
            <Text style={styles.linkText}>Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontFamily: typography?.fontFamily?.secondary ?? 'System',
    fontSize: typography?.fontSize?.['4xl'] ?? 24,
    fontWeight: '700',
    color: colors.text?.primary ?? '#000',
    marginBottom: spacing.lg ?? 24,
  },
  googleButton: {
    height: 48,
    borderRadius: borderRadius?.md ?? 4,
    borderWidth: 1,
    borderColor: colors.border?.light ?? '#E0E0E0',
    backgroundColor: colors.background?.primary ?? '#FFFFFF',
    paddingHorizontal: spacing.md ?? 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  googleIconCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.background?.secondary ?? '#F1F1F1',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.sm ?? 8,
  },
  googleIconText: {
    color: '#DB4437',
    fontWeight: '700',
  },
  googleText: {
    color: colors.text?.primary ?? '#000',
    fontSize: typography?.fontSize?.lg ?? 16,
    fontWeight: '600',
  },
  orRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: spacing.lg ?? 24,
  },
  orLine: {
    flex: 1,
    height: 1,
    backgroundColor: colors.border?.light ?? '#E0E0E0',
  },
  orText: {
    marginHorizontal: spacing.md ?? 16,
    color: colors.text?.secondary ?? '#5D5D5D',
    fontWeight: '600',
  },
  fieldBlock: {
    marginBottom: spacing.md ?? 16,
  },
  label: {
    marginBottom: spacing.sm ?? 8,
    color: colors.text?.primary ?? '#28272F',
    fontWeight: '600',
  },
  input: {
    height: 48,
    borderRadius: borderRadius?.md ?? 4,
    borderWidth: 1,
    borderColor: colors.border?.light ?? '#E0E0E0',
    paddingHorizontal: spacing.md ?? 16,
    backgroundColor: colors.background?.primary ?? '#FFFFFF',
  },
  helper: {
    marginTop: spacing.sm ?? 8,
    color: colors.text?.secondary ?? '#5D5D5D',
    fontSize: typography?.fontSize?.sm ?? 13,
  },
  primaryButton: {
    height: 52,
    borderRadius: borderRadius?.button ?? borderRadius?.md ?? 4,
    backgroundColor: colors.accent?.yellow ?? '#f2cf66',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing.lg ?? 24,
  },
  primaryButtonText: {
    color: colors.text?.blackColor ?? '#2C2A38',
    fontWeight: '700',
    fontSize: typography?.fontSize?.lg ?? 16,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: spacing.lg ?? 24,
  },
  footerText: {
    color: colors.text?.secondary ?? '#5D5D5D',
  },
  linkText: {
    color: colors.text?.blue ?? '#436386',
    textDecorationLine: 'underline',
    fontWeight: '600',
  },
});

export default LoginScreen;

