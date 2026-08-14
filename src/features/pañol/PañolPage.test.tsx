import { afterEach, describe, expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PañolPage } from './PañolPage'


const mockItemCounter = vi.fn((_props: unknown) => {
    return <div data-testid='itemCounter' />
})

vi.mock("./components/ItemCounter", () => ({
    ItemCounter: (props: unknown) => mockItemCounter(props)
}))

describe('PañolPage', () => {
    afterEach(() => {
        vi.clearAllMocks()
    })
    test('should render with defaults values', () => {
        const { container } = render(<PañolPage />)

        const h3 = container.querySelector('h3')
        const h1 = screen.getByTestId('h1')
        expect(h1?.innerHTML).toContain('Pañol')
        expect(h3?.innerHTML).toContain('Stock herramientas e insumos')
    })
    test('should render ItemCounter with corrects props', () => {

        render(<PañolPage />)

        expect(mockItemCounter).toHaveBeenCalledTimes(20)
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: 'Caño de cobre de 1/4',
            quantity: 100
        })
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: 'Caño de cobre de 3/8',
            quantity: 100
        })
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: 'Caño de cobre de 1/2',
            quantity: 100
        })
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: 'Caño de cobre de 5/8',
            quantity: 100
        })
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: 'Caño de cobre de 3/4',
            quantity: 100
        })
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: 'Aislación de 1/4',
            quantity: 50
        })
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: 'Aislación de 3/8',
            quantity: 50
        })
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: 'Aislación de 1/2',
            quantity: 50
        })
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: 'Aislación de 5/8',
            quantity: 50
        })
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: 'Aislación de 3/4',
            quantity: 50
        })
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: 'Garrafas de gas R22',
            quantity: 10
        })
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: 'Garrafas de gas R410',
            quantity: 10
        })
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: 'Garrafas de gas R32',
            quantity: 10
        })
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: 'Garrafas de gas 141B',
            quantity: 10
        })
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: 'Garrafas de gas R134a',
            quantity: 10
        })
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: 'Garrafas de gas R404a',
            quantity: 10
        })
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: 'Ménsulas de 42cm',
            quantity: 3
        })
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: 'Ménsulas de 42cm',
            quantity: 3
        })
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: 'Ménsulas de 52cm',
            quantity: 3
        })
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: 'Ménsulas de 62cm',
            quantity: 3
        })
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: 'Ménsulas de 82cm',
            quantity: 3
        })
    })
}) 