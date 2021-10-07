import { Beverage, Consumption } from "@/model/beverage"

export class BeverageStore {

    readonly storageKey: string = "beverageStore"

    db: Storage

    constructor(db: Storage) {
        this.db = db
    }

    store(qty: number, ofBeverage: Beverage, at: Date) {
        const c: Consumption = {
            amount: qty,
            beverage: ofBeverage,
            date: at,
        }
        const data = this.loadStore()
        data.push(c)
        this.db.setItem("beverageStore", JSON.stringify(data))
    }

    loadStore(): Array<Consumption> {
        let store: Array<Consumption>
        const raw: any = this.db.getItem(this.storageKey)
        if (raw == "" || raw == null) {
            store = new Array<Consumption>()
            this.setStore(store)
        } else {
            store = JSON.parse(raw)
            store.map((value: Consumption|any): Consumption => {
                if (value.date instanceof Date) {
                    return value
                }
                value.date = new Date(value.date)
                return value
            })
        }
        return store
    }

    setStore(store: Array<Consumption>) {
        this.db.setItem(this.storageKey, JSON.stringify(store))
    }
}