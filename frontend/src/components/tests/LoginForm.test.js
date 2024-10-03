import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from '../LoginForm';

test('renders LoginForm and submits credentials', () => {
  const handleLogin = jest.fn();
  render(<LoginForm onLogin={handleLogin} />);

  const emailInput = screen.getByPlaceholderText(/email/i);
  const passwordInput = screen.getByPlaceholderText(/password/i);
  const submitButton = screen.getByRole('button', { name: /login/i });

  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  fireEvent.change(passwordInput, { target: { value: 'password' } });
  fireEvent.click(submitButton);

  expect(handleLogin).toHaveBeenCalledWith({
    email: 'test@example.com',
    password: 'password',
  });
});
