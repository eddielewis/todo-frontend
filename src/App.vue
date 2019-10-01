<template>
  <div id="app" class="container">
    <Header v-on:add-todo="addTodo" />
    <router-view v-bind:todoList="todoList" @del-todo="deleteTodo" @add-todo="addTodo" />
  </div>
</template>

<script>
import Header from "./components/layout/Header.vue";
import axios from "axios";

import Vuex from "vuex";
import db from "@/main";

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
        .delete(`http://127.0.0.1:8000/api/${id}`)
        .then((this.todoList = this.todoList.filter(todo => todo.id !== id)))
        .catch(err => console.log(err));
    },
    addTodo(newTodoTitle) {
      console.log(newTodoTitle);
      axios
        .post("http://127.0.0.1:8000/api/", {
          title: newTodoTitle,
          body: "",
          show_checkboxes: false,
          is_archived: false
        })
        .then(res => (this.todoList = [...this.todoList, res.data]))
        .catch(err => console.log(err));
    }
  },
  created() {
    axios
      .get("http://127.0.0.1:8000/api/")
      .then(res => (this.todoList = res.data))
      .catch(err => console.log(err));
  },
  completeItem(id, j) {}
};
</script>


<style>
#app {
  margin-top: 4.5rem !important;
}
</style>
