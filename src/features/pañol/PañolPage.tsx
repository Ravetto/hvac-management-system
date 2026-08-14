import { ItemCounter } from "./components/ItemCounter"
import { usePañol } from "./custom-hooks/usePañol"


export const PañolPage = () => {
    const { products, setSearchTerm, searchTerm, handleUpdateQuantity } = usePañol()
    return (
        <>
            <h1 data-testid='h1'>Pañol</h1>
            <input
                type="text"
                placeholder="buscar productos"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <h3>Stock herramientas e insumos</h3>
            <hr />
            {
                products.map(({ id, productName, quantity }) => (
                    <ItemCounter key={id} name={productName} quantity={quantity} onAdd={() => handleUpdateQuantity(id, +1)} onSubtract={() => handleUpdateQuantity(id, -1)} />
                ))
            }
        </>
    )
}
