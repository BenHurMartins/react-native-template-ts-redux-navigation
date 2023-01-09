import * as React from 'react';
import Home from '..';
import {render, screen} from '../../../../jest/helper';

describe('Home screen', () => {
  test('should render home screen', () => {
    const expectedText = 'Home';
    render(<Home />);
    expect(screen.getByText(expectedText)).toBeTruthy();
  });
});
