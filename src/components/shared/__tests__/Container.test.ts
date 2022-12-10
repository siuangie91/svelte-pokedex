import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/svelte';
import SlotTesterComponent from 'src/components/__tests__/utils/SlotTesterComponent.svelte';
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

  it('renders the provided slot component', () => {
    render(SlotTesterComponent, {
      Component: Container
    });

    const slotElem = screen.getByTestId('slot');

    expect(slotElem).toBeInTheDocument();
  });
});