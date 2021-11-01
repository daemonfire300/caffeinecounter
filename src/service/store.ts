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
        this.setStore(data)
    }

    removeItem(id: String) {
        const data = this.loadStore()
        const newData = data.filter((val: Consumption): Boolean => {
            return val.id != id
        })
        this.setStore(newData)
    }

    setStore(data: any) {
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

    loadConsumptionsOfDay(day?: Date): Array<Consumption> {
        let targetDay: Date // sorry for this stupid extra variable and if/else
        if (day == undefined) { // but the IDE complained about "day" being potentially undefined...
            targetDay = new Date
        } else {
            targetDay = day
        }
        return this.loadStore().filter((val: Consumption): Boolean => {
            const isToday: Boolean =
                val.date.getDate() == targetDay.getDate() &&
                val.date.getFullYear() == targetDay.getFullYear() &&
                val.date.getMonth() == targetDay.getMonth()
            return isToday
        })
    }
}