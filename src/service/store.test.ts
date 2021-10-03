import { StorageMock } from "./storage.mock";
import { BeverageStore } from "./store";

test('loadEmptyStore', () => {
    let st = new BeverageStore(new StorageMock)
    let res = st.loadStore()
    console.log(res)
    expect(res).toStrictEqual(new Array<Consumption>())
})