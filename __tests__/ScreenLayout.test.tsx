import React from 'react';
import TestRenderer from 'react-test-renderer';
import ScreenLayout from '../src/components/layout/ScreenLayout';
import { Text } from 'react-native';

describe('ScreenLayout', () => {
  it('renders children', () => {
    let tree: TestRenderer.ReactTestRenderer;
    TestRenderer.act(() => {
      tree = TestRenderer.create(
        <ScreenLayout>
          <Text testID="child">Content</Text>
        </ScreenLayout>
      );
    });
    const child = (tree as any).root.findByProps({ testID: 'child' });
    expect(child.props.children).toBe('Content');
  });

  it('respects padded=false', () => {
    let tree: TestRenderer.ReactTestRenderer;
    TestRenderer.act(() => {
      tree = TestRenderer.create(
        <ScreenLayout padded={false}>
          <Text>Content</Text>
        </ScreenLayout>
      );
    });
    expect((tree as any).toJSON()).toBeTruthy();
  });
});

