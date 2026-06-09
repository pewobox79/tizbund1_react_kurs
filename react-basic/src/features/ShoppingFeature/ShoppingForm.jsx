import Heading from '../../components/Heading'
import { useState } from 'react'

const DEFAULT_VALUE = {
    name: "",
    quantity: 1
}

const ShoppingForm = ({ list, setList }) => {

    const [newShoppingItem, setNewShoppingItem] = useState(DEFAULT_VALUE)
    console.log(newShoppingItem)
    function handleChange(event) {
        console.log("event in handler", event.target.name, event.target.value)
        setNewShoppingItem({ ...newShoppingItem, [event.target.name]: event.target.value })
    }

    function handleSubmit(event) {
        event.preventDefault() //=> button erhält damit den natürlichen Status
        setList([...list, newShoppingItem])
    }

    return <div>
        <Heading title="neues ShoppingItem" />

        <form>
            <input
                name="name"
                type="text"
                value={newShoppingItem.name}
                placeholder="Item Name"
                onChange={handleChange}
            />
            <input
                name="quantity"
                type="number"
                value={newShoppingItem.quantity}
                placeholder="Wie viel?"
                onChange={handleChange}
            />
            <button type="submit" onClick={handleSubmit}>add new item</button>
        </form>
    </div>
}

export default ShoppingForm