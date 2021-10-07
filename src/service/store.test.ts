import { Consumption, Beverage } from "@/model/beverage";
import { StorageMock } from "./storage.mock";
import { BeverageStore } from "./store";

test('loadEmptyStore', () => {
    const st = new BeverageStore(new StorageMock)
    const res = st.loadStore()
    expect(res).toStrictEqual(new Array<Consumption>())
})

test('storeAndAddTwoEntries', () => {
    const st = new BeverageStore(new StorageMock)
    const bev: Beverage = {
        name: "Club Mate",
        caffeine: 30,
    }
    const now = new Date
    st.store(500, bev, now)
    const res = st.loadStore()
    const expected: Array<Consumption> = [
        {
            amount: 500,
            beverage: bev,
            date: now,
        }
    ]
    expect(res).toStrictEqual(expected)
})