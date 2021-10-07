export interface Beverage {
    name: string
    caffeine: number // in mg/100ml
}

export interface Consumption {
    amount: number // in ml
    beverage: Beverage
    date: Date
}