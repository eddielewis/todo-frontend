<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light justify-content-between">
    <router-link class="navbar-brand" to="/">Todo App</router-link>
    <div class="nav-item">
      <router-link class="nav-link" to="/settings">Home</router-link>
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
