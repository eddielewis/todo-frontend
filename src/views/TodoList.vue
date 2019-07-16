<template>
  <div class="d-flex flex-column align-items-center">
    <b-form inline @submit="addTodo" id="add-todo" class="mt-4">
      <b-form-input type="text" v-model="title" class="mr-sm-2" placeholder="Add item" />
      <b-button type="submit" variant="outline-success">Add</b-button>
    </b-form>
    <div>
      <div
        id="todo-list"
        class="mt-4 list-group list-group-flush flex-md-row flex-wrap align-items-center"
      >
        <div v-bind:key="todo.id" v-for="todo in todoList" class="col-lg-4 col-md-6 p-2">
          <TodoItem v-bind:todo="todo" v-on:del-todo="$emit('del-todo', todo.id)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TodoItem from "../components/TodoItem.vue";

export default {
  name: "TodoList",
  components: {
    TodoItem
  },
  props: ["todoList"],
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

<style scoped>
</style>

