<template>
  <div class="todo-item card flex-column p-3" v-bind:class="{'is-complete':todo.completed}">
    <b-form-input id="title" class="mb-3 border-0 shadow-none" v-model="todoTitle"></b-form-input>
    <div class="flex-row d-flex">
      <div class="flex-column d-flex">
        <div class="hide" v-for="value in this.rows"></div>
      </div>
      <b-form-textarea
        @input="onInput"
        id="body"
        class="mb-auto border-0 shadow-none py-0"
        v-model="todo.title"
        rows="2"
        max-rows="12"
        no-resize
        no-auto-shrink
      ></b-form-textarea>
    </div>
    <div>
      <div class="buttons flex-grow-0 d-flex justify-content-between">
        <button @click="$emit('del-todo', todo.id)" class="remove border-0 bg-transparent">
          <DeleteIcon />
        </button>
        <button @click="$emit('del-todo', todo.id)" class="remove border-0 bg-transparent">
          <DeleteIcon />
        </button>
        <button @click="markComplete" class="complete border-0 bg-transparent">
          <CompleteIcon />
        </button>
      </div>
    </div>
  </div>
</template> 

<script>
import DeleteIcon from "./icons/Delete.vue";
import CompleteIcon from "./icons/Complete.vue";

export default {
  name: "TodoItem",
  props: ["todo"],
  components: {
    DeleteIcon,
    CompleteIcon
  },
  methods: {
    markComplete() {
      this.todo.completed = !this.todo.completed;
    },
    onInput(e) {
      this.rows = e.split("\n").length;
      console.log(this.rows);
    }
  },
  data() {
    return {
      todoTitle: "Your title here",
      rows: 1
    };
  }
};
</script>

<style scoped>
.hide {
  width: 10px;
  height: 10px;
  margin: 5px 0;
  background-color: #e85656;
}
textarea {
  line-height: 20px;
}
input#title {
  font-size: 1.25rem;
  font-weight: 600;
}
.is-complete {
  text-decoration: line-through;
}
.abuttons button:not(:first-child)::before {
  content: "";
  width: 1px;
  height: 30px;
  position: absolute;
  top: calc(50% - 15px);
  left: 0;
  background: #d8e5e0;
}

button {
  height: 32px;
  width: 32px;
  position: relative;
}
</style>
