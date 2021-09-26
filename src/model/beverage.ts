interface Beverage {
    name: string
    caffeine: string
}

interface Consumption {
    amount: number
    beverage: Beverage
    date: Date
}