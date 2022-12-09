import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/svelte';
import Container from '../Container.svelte';

describe('Container', () => {
  it('renders the given title', () => {
    const title = 'title';

    render(Container, {
      title, 
    });

    const titleElem = screen.getByText(title);

    expect(titleElem).toBeInTheDocument();
  });
});