// src/tests/Home.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Home } from '../pages/Home';

describe('Home Page', () => {
  test('renderiza título e subtítulo', () => {
    render(<Home />, { wrapper: MemoryRouter });
    expect(
      screen.getByRole('heading', { name: /Aplicação de Aprendizagem/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Lógica de Programação, Algoritmos, Java e Python/i)
    ).toBeInTheDocument();
  });

  test('renderiza seis cards desabilitados', () => {
    render(<Home />, { wrapper: MemoryRouter });
    const buttons = screen.getAllByRole('button', { name: /Em Breve/i });
    expect(buttons).toHaveLength(6);
    buttons.forEach((btn) => expect(btn).toBeDisabled());
  });
});