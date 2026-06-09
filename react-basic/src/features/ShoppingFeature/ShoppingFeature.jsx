import Heading from "../../components/Heading"
import { shoppingList } from "../../store/staticData"
import ShoppingItem from "./ShoppingItem"

const ShoppingFeature = () => {

    const ListElements = shoppingList.map((item, index) => {
        return <ShoppingItem key={`shoppingList_${index}`} name={item.name} quantity={item.quantity}/>
        //return ShoppingItem(item) => auch möglich aber nicht ratsam und gegen React Prinzipien
        //return <ShoppingItem key={item.name + index} {...item} /> => equivalent zu obigem Return mit Spread Operator "key" MUSS identisch sein zw. Sender und Empfänger
    })

    return <section id="shoppingFeature">
        <div className="innerShoppingFeature">
            <Heading 
                title="Shopping List" 
            />

            <div className="shoppingListView">
                {ListElements}
            </div>


        </div>
    </section>


}

export default ShoppingFeature