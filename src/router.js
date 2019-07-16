import Vue from 'vue'
import Router from 'vue-router'
import TodoList from './views/TodoList.vue'
import Settings from './views/Settings.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'todoList',
      component: TodoList
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    }
  ]
})
