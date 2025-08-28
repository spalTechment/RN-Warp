import React from 'react';
import TestRenderer from 'react-test-renderer';
import ErrorBoundary from '../src/components/ErrorBoundary';
import { Text } from 'react-native';

describe('ErrorBoundary', () => {
  it('renders children when no error', () => {
    let tree: TestRenderer.ReactTestRenderer;
    TestRenderer.act(() => {
      tree = TestRenderer.create(
        <ErrorBoundary>
          <Text testID="child">Hello</Text>
        </ErrorBoundary>
      );
    });
    const child = (tree as any).root.findByProps({ testID: 'child' });
    expect(child.props.children).toBe('Hello');
  });

  it('shows fallback UI when child throws', () => {
    const spy = jest.spyOn(console, 'error').mockImplementation(() => {});

    const ProblemChild = () => {
      throw new Error('boom');
    };

    let tree: TestRenderer.ReactTestRenderer;
    TestRenderer.act(() => {
      tree = TestRenderer.create(
        <ErrorBoundary>
          <ProblemChild />
        </ErrorBoundary>
      );
    });

    const textNodes = (tree as any).root.findAllByType(Text);
    expect(textNodes.some((n: any) => n.props.children === 'Something went wrong.')).toBe(true);

    spy.mockRestore();
  });
});

