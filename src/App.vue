<template>
  <div id="app" class="container">
    <Header v-on:add-todo="addTodo" />
    <router-view v-bind:todoList="todoList" @del-todo="deleteTodo" @add-todo="addTodo" />
  </div>
</template>

<script>
import Header from "./components/layout/Header.vue";
import axios from "axios";

export default {
  name: "app",
  components: {
    Header
  },
  data() {
    return {
      todoList: []
    };
  },
  methods: {
    deleteTodo(id) {
      axios
        .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then((this.todoList = this.todoList.filter(todo => todo.id !== id)))
        .catch(err => console.log(err));
    },
    addTodo(newTodo) {
      const { title, completed } = newTodo;

      axios
        .post("https://jsonplaceholder.typicode.com/todos", {
          title,
          completed
        })
        .then(res => (this.todoList = [...this.todoList, res.data]))
        .catch(err => console.log(err));
    }
  },
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res => (this.todoList = res.data))
      .catch(err => console.log(err));
  }
};
</script>


<style>
#app {
  margin-top: 4.5rem !important;
}
</style>
