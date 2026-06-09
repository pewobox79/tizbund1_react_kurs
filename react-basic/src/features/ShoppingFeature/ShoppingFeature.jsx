import Heading from "../../components/Heading"
import { shoppingList } from "../../store/staticData"

const ShoppingFeature = () => {

    console.log("shoplist", shoppingList)

    const ListElements = shoppingList.map((item) => {
        return <div className="shoppingItem" style={
            {
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }
        }>
            <h4 className="shoppintItemName">{item.name}</h4>
            <p>Anzahl: {item.quantity}</p>
        </div>
    })

    console.log("Listelements", ListElements)
    return <section id="shoppingFeature">
        <div className="innerShoppingFeature">
            <Heading title="Shopping List" />

            <div className="shoppingListView">
                {ListElements}
            </div>


        </div>
    </section>


}

export default ShoppingFeature