export interface Beverage {
    name: string
    caffeine: number // in mg/100ml
}

export interface Consumption {
    id: string
    amount: number // in ml
    beverage: Beverage
    date: Date
}