
import type { Call } from "../types"
import { CardFirst } from "./CardFirst"


interface ChaiListProp{
    items: Call[]
}

export function OrderList({items}: ChaiListProp) { 
    return (
        <div>List Order
            {items.map((chai) => (<CardFirst key={chai.id} name={chai.name} price={chai.price} isSpecial={chai.price > 30} />))}
            
        </div>
    )
}