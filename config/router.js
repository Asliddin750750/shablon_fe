import path from "path";

export let router = [
  {
    name: 'home',
    path: '/',
    component: path.resolve(__dirname, '../pages/index.vue'),
    chunkName: 'pages/index'
  }
]
