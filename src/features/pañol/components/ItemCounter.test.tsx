import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";


describe('ItemCounter', () => {
    test('should render with correct props', () => {
        const name = 'pepe';
        const quantity = 5;

        render(<ItemCounter name={name} quantity={quantity} />)

        expect(name).toBeDefined()
        expect(name).not.toBeNull()
    })

    test('should counter increment when +1 is pressed', () => {
        const name = 'pepe';
        const quantity = 5;

        render(<ItemCounter name={name} quantity={quantity} />)

        const [_b1, b2] = screen.getAllByRole('button');

        fireEvent.click(b2)

        expect(screen.getByText('6')).toBeDefined()

    })

    test('should counter decrement when -1 is pressed', () => {
        const name = 'pepe';
        const quantity = 5;

        render(<ItemCounter name={name} quantity={quantity} />)

        const [b1, _b2] = screen.getAllByRole('button');

        fireEvent.click(b1)

        expect(screen.getByText('4')).toBeDefined()

    })

    test('should counter not decrement when -1 is pressed and quantity is 1', () => {
        const name = 'pepe';
        const quantity = 1;

        render(<ItemCounter name={name} quantity={quantity} />)

        const [b1, _b2] = screen.getAllByRole('button');

        fireEvent.click(b1)

        expect(screen.getByText('1')).toBeDefined()

    })

    test('should change name color to red when -1 is pressed and quantity is 2', () => {
        const name = 'pepe';
        const quantity = 2;

        render(<ItemCounter name={name} quantity={quantity} />)

        const [b1, _b2] = screen.getAllByRole('button');
        const itemText = screen.getByText('pepe')

        fireEvent.click(b1)

        expect(itemText.style.color).toBe('red')

    })

    test('should change name color to black when +1 is pressed and quantity is 1', () => {
        const name = 'pepe';
        const quantity = 1;

        render(<ItemCounter name={name} quantity={quantity} />)

        const [_b1, b2] = screen.getAllByRole('button');
        const itemText = screen.getByText('pepe')

        fireEvent.click(b2)

        expect(itemText.style.color).toBe('black')

    })
})