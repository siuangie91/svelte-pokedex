import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/svelte';

import Description from '../Description.svelte';

describe('Description', () => {
  it('renders the passed in description', () => {
    const mockDescription = 'mock description';
    render(Description, {
      description: mockDescription,
    });

    const descriptionText = screen.getByText(mockDescription);
    expect(descriptionText).toBeInTheDocument();
  });
});
