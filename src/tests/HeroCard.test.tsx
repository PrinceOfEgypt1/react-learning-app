// src/tests/HeroCard.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { HeroCard } from '../components/HeroCard';

describe('HeroCard Component', () => {
  test('renderiza card de Fundamentos com botão explorar', () => {
    render(<HeroCard />, { wrapper: MemoryRouter });
    expect(
      screen.getByRole('heading', { name: /Fundamentos da Programação/i })
    ).toBeInTheDocument();
    const button = screen.getByRole('button', { name: /Explorar Fundamentos/i });
    expect(button).toBeEnabled();
  });
});