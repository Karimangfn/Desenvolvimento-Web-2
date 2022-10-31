import { render, waitFor, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import List from './List'

describe('List Componente', () => {
    it('should render list items', async () => {
        const { getByText, rerender } = render(<List initialItems={['Diego', 'Rodz', 'Mayk']}/>)

        expect(getByText('Diego')).toBeInTheDocument()
        expect(getByText('Rodz')).toBeInTheDocument()
        expect(getByText('Mayk')).toBeInTheDocument()

        rerender(<List initialItems={['Julia']} />)

        expect(screen.getByText('Julia')).toBeInTheDocument()
        expect(screen.queryByText('Mayk')).not.toBeInTheDocument()
    });

    it('should be able to add new item to the list', async () => {
        const { getByText, getByPlaceholderText} = render(<List initialItems={[]}/>) 

        const inputElement = getByPlaceholderText('Novo item')
        const addButton = getByText('Adicionar');

        await userEvent.type(inputElement, 'Novo')
        await userEvent.click(addButton);

        await waitFor(() => {
            expect(getByText('Novo')).toBeInTheDocument()
        })       
    });
});

it('should be able to add remove item to the list', async () => {
    const { getByText, getAllByText, queryByText} = render(<List initialItems={['Diego']}/>) 

    const removeButtons = getAllByText('Remover')

    await userEvent.click(removeButtons[0]);

    await waitFor(() => {
        expect(queryByText('Novo')).not.toBeInTheDocument()
    })        
});