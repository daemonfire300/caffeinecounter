import { Beverage, Consumption } from "@/model/beverage"
import { v4 as uuidv4 } from 'uuid';

export class BeverageStore {

    readonly storageKey: string = "beverageStore"

    db: Storage

    constructor(db: Storage) {
        this.db = db
    }

    store(qty: number, ofBeverage: Beverage, at: Date) {
        const c: Consumption = {
            id: uuidv4(),
            amount: qty,
            beverage: ofBeverage,
            date: at,
        }
        const data = this.loadStore()
        data.push(c)
        this.db.setItem("beverageStore", JSON.stringify(data))
    }

    removeItem(id: String) {
        const data = this.loadStore()
        const newData = data.filter((val: Consumption): Boolean => {
            return val.id != id
        })
        this.db.setItem("beverageStore", JSON.stringify(newData))
    }

    loadStore(): Array<Consumption> {
        let store: Array<Consumption>
        const raw: any = this.db.getItem(this.storageKey)
        if (raw == "" || raw == null) {
            store = new Array<Consumption>()
            this.setStore(store)
        } else {
            store = JSON.parse(raw)
            store.map((value: Consumption | any): Consumption => {
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