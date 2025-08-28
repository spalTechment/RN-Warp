import React from 'react';
import TestRenderer from 'react-test-renderer';
import AppProviders from '../src/context/AppProviders';
import { Text } from 'react-native';

describe('AppProviders', () => {
  it('renders children within providers', () => {
    let tree: TestRenderer.ReactTestRenderer;
    TestRenderer.act(() => {
      tree = TestRenderer.create(
        <AppProviders>
          <Text testID="child">Inside</Text>
        </AppProviders>
      );
    });
    const child = (tree as any).root.findByProps({ testID: 'child' });
    expect(child.props.children).toBe('Inside');
  });
});

