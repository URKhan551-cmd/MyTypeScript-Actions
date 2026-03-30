import React, {useState} from 'react'

interface FormProps {
    onSubmit(order: { name: string;  cup: number}) : void
}
export function FormOrder({onSubmit}: FormProps) {
    const [name, setName] = useState<string>("Masala");
    const [cup, setCup] = useState<number>(1);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        onSubmit({ name, cup });
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Chai Name</label>
            <input value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value) } />
            
            <label>Cups</label>
            <input value={cup} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCup(Number(e.target.value) || 0) } />
         
            <button type='submit'>
                Place Order 
            </button>
            </form>
  )
}

