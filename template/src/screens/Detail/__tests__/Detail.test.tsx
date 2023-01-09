import * as React from 'react';
import Detail from '..';
import {render, screen} from '../../../../jest/helper';

describe('Detail screen', () => {
  test('should render detail screen', () => {
    const expectedText = 'Detail';
    render(<Detail />);
    expect(screen.getByText(expectedText)).toBeTruthy();
  });
});
