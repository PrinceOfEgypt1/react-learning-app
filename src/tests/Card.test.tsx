// src/tests/Card.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Card } from '../components/Card';

describe('Card Component', () => {
  test('exibe título e botão desabilitado quando não há link', () => {
    render(<Card title="Título de Teste" disabled />, { wrapper: MemoryRouter });
    expect(screen.getByRole('heading', { name: /Título de Teste/i })).toBeInTheDocument();
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveTextContent(/Em Breve/i);
  });

  test('exibe botão habilitado e roteamento quando há prop `to`', () => {
    render(
      <Card title="Com Link" to="/fundamentos/logica" />,
      { wrapper: MemoryRouter }
    );
    const button = screen.getByRole('button', { name: /Ver Detalhes/i });
    expect(button).toBeEnabled();
  });
});