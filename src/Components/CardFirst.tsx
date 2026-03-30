interface CardFirstProp {
    name: string;
    price: number;
    isSpecial?: boolean
}

export function CardFirst({ name, price, isSpecial = false }: CardFirstProp) { 
    return (
        <article>
            <h2>
                {name} {isSpecial && <span>%%</span>}
            </h2>
            <p>{price}</p>
        </article>
    )
} 