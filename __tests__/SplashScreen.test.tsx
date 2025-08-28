import React from 'react';
import TestRenderer from 'react-test-renderer';
import SplashScreen from '../src/screens/SplashScreen';
import { Text } from 'react-native';

const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => {
  const actual = jest.requireActual('@react-navigation/native');
  return {
    ...actual,
    useNavigation: () => ({ navigate: mockNavigate }),
  };
});

describe('SplashScreen', () => {
  it('renders title and navigates after timeout', () => {
    jest.useFakeTimers();

    let tree: TestRenderer.ReactTestRenderer;
    TestRenderer.act(() => {
      tree = TestRenderer.create(<SplashScreen />);
    });

    const textNodes = (tree as any).root.findAllByType(Text);
    expect(textNodes.some((n: any) => n.props.children === 'SplashScreen')).toBe(true);

    TestRenderer.act(() => {
      jest.advanceTimersByTime(3000);
    });
    expect(mockNavigate).toHaveBeenCalledWith('AuthStack');

    jest.useRealTimers();
  });
});

