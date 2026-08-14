
import '../pañolStyles.css'


interface Props {
    name: string,
    quantity: number,
    onAdd: () => void,
    onSubtract: () => void,
}

export const ItemCounter = ({ name, quantity, onSubtract, onAdd }: Props) => {
    const isLowStock = quantity <= 5;


    return (
        <>
            <section className="pañol__section">
                <span className="pañol__products" style={{
                    color: isLowStock ? 'red' : 'black', fontWeight: isLowStock ? 'bold' : 'normal'
                }}>{name} {isLowStock && '(¡Stock Bajo!)'}</span>
                <button onClick={onSubtract} disabled={quantity <= 1}>-</button>
                <span>{quantity}</span>
                <button onClick={onAdd}>+</button>
            </section>
        </>
    )
}
