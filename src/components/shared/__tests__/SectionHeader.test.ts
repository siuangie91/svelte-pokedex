import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/svelte';
import SectionHeader from '../SectionHeader.svelte';

describe('SectionHeader', () => {
  it('renders whatever content is given to it', () => {
    const content = 'mock content';

    render(SectionHeader, {
      content
    });

    const contentElem = screen.getByText(content);

    expect(contentElem).toBeInTheDocument();
  });
});