

import './App.css'
import { CardFirst } from './Components/CardFirst.tsx';
import { Counter } from './Components/Counter.tsx';
import type { Call } from './types.ts';

import { OrderList } from './Components/OrderList.tsx';
import { FormOrder } from './Components/FormOrder.tsx';
import { Card } from './Components/Card.tsx';

const menu: Call[] = [
  { id: 1, name: "Masala", price: 20 },
  { id: 2, name: "Ginger", price: 100 },
  {id: 3, name: "Elaichi", price: 35}
]

function App() {
  

  return (
    <>
      <div>
        <h1>Vite React</h1>
        <CardFirst name={"Headphones"} price={5000} />
        <CardFirst name={"Iphone 13pro"} price={50000} />
        
        
        <div>
          <Counter />
        </div>

        <div>
          <OrderList items={menu}/>
        </div>

        <div>
          <FormOrder onSubmit={(order) => {
            console.log("Placed", order.name, order.cup)
          }}/>
        </div>


        <div>
          <Card title='Typescript Advance'
            footer={<button>Order NOWWW</button>}
          />
        </div>
      </div>
        
    </>
  );
}

export default App
