import { createRouter, createWebHashHistory } from "vue-router";
import Overview from "../views/Overview.vue"
import Add from "../views/Add.vue"
import DayView from "../views/DayView.vue"


export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: "/", component: Overview },
        { name: "day", path: "/day/:day", component: DayView, props: true },
        { path: "/add", component: Add },
    ],
    linkActiveClass: "nav-link active",
    linkExactActiveClass: "nav-link active",
})