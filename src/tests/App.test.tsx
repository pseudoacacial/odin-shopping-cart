import { describe, it, expect } from 'vitest';
import {MemoryRouter} from 'react-router-dom'


describe('something truthy and falsy', () => {
  it('true to be true', () => {
    expect(true).toBe(true);
  });

  it('false to be false', () => {
    expect(false).toBe(false);
  });
});

import { render, screen } from '@testing-library/react';

import App from '../App';

describe('App', () => {
  it('navbar exists', () => {
    render( <MemoryRouter><App/></MemoryRouter>);

    expect(screen.getByRole('navigation')).toBeTruthy;

    // check if App components renders headline
  });
});