<template>
  <div class="list-group list-group-flush flex-md-row flex-wrap align-items-center">
    <div v-bind:key="todo.id" v-for="todo in todoList" class="col-lg-4 col-md-6 p-2">
      <TodoItem v-bind:todo="todo" v-on:del-todo="$emit('del-todo', todo.id)" />
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
  name: "Todos",
  components: {
    TodoItem
  },
  props: ["todoList"]
};
</script>

<style scoped>
</style>