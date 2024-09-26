import { render, screen } from '@testing-library/react';
import Button from '.';
import React from 'react';

import '@testing-library/jest-dom';

describe('Button Component', () => {
    test('should verify component render', () => {
        render(
           <Button> review credit</Button>
        );
        const buttonComponent = screen.getByTestId('button');
        expect(buttonComponent).toBeInTheDocument();
        expect(screen.getByText(/review credit/i)).toBeInTheDocument();
    });

  
});
