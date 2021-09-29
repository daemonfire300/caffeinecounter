class BeverageStore {

    readonly storageKey: string = "beverageStore"

    store(qty: number, ofBeverage: Beverage) {
        //localStorage.setItem("beverageStore", JSON.stringify)
    }

    loadStore(): Array<Consumption> {
        let store: Array<Consumption>
        let raw: any = localStorage.getItem(this.storageKey)
        if (raw == "" || raw == null) {
            store = new Array<Consumption>()
            this.setStore(store)
        } else {
            store = JSON.parse(raw)
        }
        return store
    }

    setStore(store: Array<Consumption>) {
        localStorage.setItem(this.storageKey, JSON.stringify(store))
    }
}