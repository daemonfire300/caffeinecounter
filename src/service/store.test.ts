import { Consumption, Beverage } from "@/model/beverage";
import { StorageMock } from "./storage.mock";
import { BeverageStore } from "./store";

test('loadEmptyStore', () => {
    const st = new BeverageStore(new StorageMock)
    const res = st.loadStore()
    expect(res).toStrictEqual(new Array<Consumption>())
})

test('storeAndAddOneEntry', () => {
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
            id: res[0].id,
            amount: 500,
            beverage: bev,
            date: now,
        }
    ]
    expect(res).toStrictEqual(expected)
})

test('storeAndAddAndRemoveOneEntry', () => {
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
            id: res[0].id,
            amount: 500,
            beverage: bev,
            date: now,
        }
    ]
    expect(res).toStrictEqual(expected)
    st.removeItem(res[0].id)
    const resAfterDelete = st.loadStore()
    expect(resAfterDelete).toStrictEqual([])
})

test('storeAndAddOneEntryToday', () => {
    const st = new BeverageStore(new StorageMock)
    const bev: Beverage = {
        name: "Club Mate",
        caffeine: 30,
    }
    const now = new Date
    st.store(500, bev, now)
    const res = st.loadConsumptionsOfDay(new Date)
    const expected: Array<Consumption> = [
        {
            id: res[0].id,
            amount: 500,
            beverage: bev,
            date: now,
        }
    ]
    expect(res).toStrictEqual(expected)
})

test('storeAndAddOneEntryTodayDefault', () => {
    const st = new BeverageStore(new StorageMock)
    const bev: Beverage = {
        name: "Club Mate",
        caffeine: 30,
    }
    const now = new Date
    st.store(500, bev, now)
    const res = st.loadConsumptionsOfDay()
    const expected: Array<Consumption> = [
        {
            id: res[0].id,
            amount: 500,
            beverage: bev,
            date: now,
        }
    ]
    expect(res).toStrictEqual(expected)
})

test('storeAndAddOneEntryTodayAndOneYesterday', () => {
    const st = new BeverageStore(new StorageMock)
    const bev: Beverage = {
        name: "Club Mate",
        caffeine: 30,
    }
    const now = new Date
    st.store(500, bev, now)
    const bev2: Beverage = {
        name: "Henry Mate",
        caffeine: 32,
    }
    const yesterday = new Date
    yesterday.setDate(now.getDate() - 1)
    st.store(330, bev2, yesterday)
    const res = st.loadConsumptionsOfDay(new Date)
    const expected: Array<Consumption> = [
        {
            id: res[0].id,
            amount: 500,
            beverage: bev,
            date: now,
        }
    ]
    expect(res).toStrictEqual(expected)
})