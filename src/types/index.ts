export type item = {
    id: number
    title: string
    name: string
    image: string
    price: number
}

export type bagItem = item & {
    quantity: number
}