const routes = [
    {path: "/home", component: home},
    {path: "/departamentos", component: departamentos},
    {path: "/funcionarios", component: funcionarios},
]

const router = VueRouter.createRouter ({
    history: VueRouter.createWebHashHistory(),
    routes
})

const app = Vue.createApp({})

app.use(router)
app.mount("#app")