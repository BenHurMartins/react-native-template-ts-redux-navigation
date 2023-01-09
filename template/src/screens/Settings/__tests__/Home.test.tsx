import * as React from 'react';
import Settings from '..';
import {render, screen} from '../../../../jest/helper';

describe('Settings screen', () => {
  test('should render settings screen', () => {
    const expectedText = 'Settings';
    render(<Settings />);
    expect(screen.getByText(expectedText)).toBeTruthy();
  });
});
