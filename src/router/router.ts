import { createRouter, createWebHashHistory } from "vue-router";
import Overview from "../views/Overview.vue"
import Add from "../views/Add.vue"


export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: "/", component: Overview },
        { path: "/add", component: Add },
    ],
    linkActiveClass: "nav-link active",
    linkExactActiveClass: "nav-link active",
})