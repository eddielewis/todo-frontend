<template>
  <!--
  <header class="header">
    <h1>TodoList</h1>
    <div id="nav">
      <router-link to="/todo">Todo App</router-link>|
      <router-link to="/">Home</router-link>
    </div>
  </header> 
  -->
  <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light justify-content-between">
    <a class="navbar-brand" href="#">Todo App</a>
    <form @submit="addTodo" class="form-inline">
      <input
        type="text"
        v-model="title"
        name="title"
        class="form-control mr-sm-2"
        placeholder="Add item"
      />
      <button type="submit" class="btn btn-outline-success my-2 my-sm-0">Add</button>
    </form>
    <div class="nav-item">
      <router-link class="nav-link" to="/">Home</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      title: ""
    };
  },
  methods: {
    addTodo(e) {
      e.preventDefault();
      const newTodo = {
        title: this.title,
        completed: false
      };
      this.$emit("add-todo", newTodo);
      this.title = "";
    }
  }
};
</script>
