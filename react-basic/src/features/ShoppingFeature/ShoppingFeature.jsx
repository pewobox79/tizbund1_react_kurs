import { useState } from "react"
import Heading from "../../components/Heading"
import { shoppingList } from "../../store/staticData"
import ShoppingForm from "./ShoppingForm"
import ShoppingItem from "./ShoppingItem"

const ShoppingFeature = () => {
    console.log("shopping feature renders")
    const [list, setList] = useState(shoppingList)

    const ListElements = list.map((item, index) => {
        return <ShoppingItem key={`shoppingList_${index}`} name={item.name} quantity={item.quantity} />
        //return ShoppingItem(item) => auch möglich aber nicht ratsam und gegen React Prinzipien
        //return <ShoppingItem key={item.name + index} {...item} /> => equivalent zu obigem Return mit Spread Operator "key" MUSS identisch sein zw. Sender und Empfänger
    })

    const values = {
        list,
        setList
    }
    return <section id="shoppingFeature">
        <div className="innerShoppingFeature">
            <Heading
                title="Shopping List"
            />

            <ShoppingForm
                {...values}
            />

            <div className="shoppingListView">
                {ListElements}
            </div>


        </div>
    </section>


}

export default ShoppingFeature