import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { InputField } from './InputField';

describe('InputField', () => {
  it('should render the label correctly', () => {
    
    const labelText = 'Email Address';
    render(<InputField label={labelText} />);

    
    const labelElement = screen.getByText(labelText);

    
    expect(labelElement).toBeInTheDocument();
  });
});