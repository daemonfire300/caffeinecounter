import { BeverageStore } from "@/service/store"
import { App } from "@vue/runtime-core"

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $beverageStore: BeverageStore
    }
}

export default {
    install: (app: App, options: any) => {
        app.config.globalProperties.$beverageStore = new BeverageStore(localStorage)
    }
}