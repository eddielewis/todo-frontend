<template>
  <div>
    <Header v-on:add-todo="addTodo" />
    <!--<AddTodo v-on:add-todo="addTodo" />-->
    <main class="container">
      <Todos v-bind:todoList="todoList" v-on:del-todo="deleteTodo" />
    </main>
  </div>
</template>

<script>
import Header from "../components/layout/Header.vue";
import Todos from "../components/Todos.vue";
import AddTodo from "../components/AddTodo.vue";
import axios from "axios";

export default {
  name: "home",
  components: {
    Todos,
    Header,
    AddTodo
  },
  data() {
    return {
      todoList: [
        {
          id: 1,
          title: "Todo One",
          completed: false
        },
        {
          id: 2,
          title: "Todo Two",
          completed: true
        },
        {
          id: 3,
          title: "Todo Three",
          completed: false
        }
      ]
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
.buttons button:not(:first-child)::before {
  content: "";
  width: 1px;
  height: 30px;
  position: absolute;
  top: calc(50% - 15px);
  left: 0;
  background: #d8e5e0;
}

.todo-item-button {
  width: 50px;
  position: relative;
}

.todo-item-button svg {
  width: 22px;
  height: 22px;
  top: calc(50% - 11px);
  left: calc(50% - 11px);
  position: absolute;
}

.buttons button svg .fill {
  transition: fill 0.2s ease;
}

button.remove svg {
  fill: #c0cecb;
}

button.remove:hover svg {
  fill: #e85656;
}

button.complete svg {
  border-radius: 11px;
  border: 1.5px solid #25b99a;
  transition: background 0.2s ease;
}

button.complete svg .fill {
  fill: #25b99a;
}

button.complete:hover svg {
  background: rgba(37, 185, 154, 0.5);
}

button.complete:hover svg .fill {
  fill: #ffffff;
}

svg .no-fill {
  fill: none;
}
</style>
