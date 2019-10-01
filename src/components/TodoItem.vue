<template>
  <div class="todo-item card flex-column">
    <b-form-input class="todo-title p-3 border-0 shadow-none" v-model="todo.title"></b-form-input>
    <div class="p-3 flex-row d-flex">
      <div class="flex-column d-flex" v-show="todo.show_checkboxes">
        <div class="tickboxes card" @click="removeLine(lineNum)" v-for="lineNum in this.rows" v-bind:key=lineNum>
        </div>
      </div>
      <b-form-textarea
        @input="onInput"
        v-model="todo.body"
        rows="2"
        max-rows="12"
        no-resize
        no-auto-shrink
        :id="todo.id"
        class="todo-body border-0 shadow-none pl-3 p-0"
        v-bind:style="{ 'height': `calc( ${this.rows} * 20px)`, 'overflow-y': 'visible'}"
      ></b-form-textarea>
    </div>
    <div class="p-3">
      <div class="buttons flex-grow-0 d-flex justify-content-between">
        <div v-click-outside="hideMenu">
          <button @click="toggleMenu" class="remove p-0 border-0 bg-transparent">
            <MenuIcon />
          </button>
          <Menu v-show="menuVisible" v-bind:class="{visible:menuVisible}" />
        </div>
        <button @click="$emit('del-todo', todo.id)" class="remove p-0 border-0 bg-transparent">
          <DeleteIcon />
        </button>
        <button @click="markComplete" class="complete p-0 border-0 bg-transparent">
          <CompleteIcon />
        </button>
      </div>
    </div>
  </div>
</template> 

<script>
import MenuIcon from "./icons/TodoItemMenuIcon.vue";
import DeleteIcon from "./icons/TodoItemDeleteIcon.vue";
import CompleteIcon from "./icons/TodoItemCompleteIcon.vue";
import Menu from "./TodoItemMenu";

export default {
  name: "TodoItem",
  props: ["todo"],
  components: {
    MenuIcon,
    DeleteIcon,
    CompleteIcon,
    Menu
  },
  methods: {
    markComplete() {
      this.todo.completed = !this.todo.completed;
    },
    onInput(e) {
      this.rows = e.split("\n").length;
      this.textthing = e.value;
    },
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    },
    hideMenu() {
      this.menuVisible = false;
    },
    removeLine(lineNum) {
      var lines = this.todo.body.split("\n");
      lines.splice(lineNum-1, 1);
      this.todo.body = lines.join("\n");
      this.rows -= 1;
    }
  },
  data() {
    return {
      rows: 1,
      showBulletPoints: false,
      menuVisible: false
    };
  },
  directives: {
    clickOutside: {
      bind: function(el, binding, vnode) {
        el.clickOutsideEvent = function(event) {
          if (!(el == event.target || el.contains(event.target))) {
            vnode.context[binding.expression](event);
          }
        };
        document.body.addEventListener("click", el.clickOutsideEvent);
      },
      unbind: function(el) {
        document.body.removeEventListener("click", el.clickOutsideEvent);
      }
    }
  }
};
</script>

<style scoped>
.tickboxes {
  width: 10px;
  height: 10px;
  margin: 5px 0;
}

textarea.todo-body {
  line-height: 20px;
}

button {
  height: 32px;
  width: 32px;
  position: relative;
  outline: none !important;
}

.todo-title {
  height: auto;
  font-size: 1.25rem;
  font-weight: 600;
}
</style>
