import React from 'react';
import { render } from 'react-testing-library';

test('Pass props to randomText and display a text', () => {

  const { getByTestId } = render(
    <RandomText text="Just a random text to make test fail"/>
  )

  expect(getByTestId('test-text').toHaveTextContent(
    "Just a random text to make test fail"
  ))
})