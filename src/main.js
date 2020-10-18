const template = `<div>
          <h1> {{ title }} </h1>
          <h2> {{ name }}</h2>
          </div>`

const data = function data() {
    return {
        title: "Vue 3 Tutorial updated",
        name: "Jing"
    }
}

const App = {data, template}
Vue.createApp(App).mount("#vue-app")


// # refers to div-id, . refers to-class name
// <div class ="vue-app"></div>
// app.mount('.vue-app')
// id can only be used once, whereas class can be used many times