import type { PropsWithChildren, ReactNode } from "react"

interface CardSimpleProps extends PropsWithChildren {
    title: string;
    footer?: ReactNode
}

export function Card({title, children, footer}: CardSimpleProps) {
  return (
      <section>
          <h2>{title}</h2>
          <div>{children}</div>
          {footer && <footer>{ footer }</footer>}
   </section>
  )
}

