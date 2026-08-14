import { useState } from 'react'

export interface ItemProduct {
    id: string,
    productName: string,
    quantity: number
}



export const initialProducts: ItemProduct[] = [
    {
        id: '1',
        productName: 'Caño de cobre de 1/4',
        quantity: 100
    },
    {
        id: '2',
        productName: 'Caño de cobre de 3/8',
        quantity: 100
    },
    {
        id: '3',
        productName: 'Caño de cobre de 1/2',
        quantity: 100
    },
    {
        id: '4',
        productName: 'Caño de cobre de 5/8',
        quantity: 100
    },
    {
        id: '5',
        productName: 'Caño de cobre de 3/4',
        quantity: 100
    },
]

export const usePañol = () => {

    const [products, setProducts] = useState<ItemProduct[]>(initialProducts);
    const [searchTerm, setSearchTerm] = useState('')

    const handleUpdateQuantity = (id: string, delta: number) => {
        setProducts((prev) => prev.map((item) => {
            if (item.id === id) {
                const newQuantity = item.quantity + delta;
                return { ...item, quantity: newQuantity < 0 ? 0 : newQuantity };
            }
            return item
        }))
    }

    const filteredProducts = products.filter(item => item.productName.toLowerCase().includes(searchTerm.toLowerCase()))


    return {
        products: filteredProducts,
        searchTerm,
        setSearchTerm,
        handleUpdateQuantity
    }
}
