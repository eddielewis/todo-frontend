<template>
  <div class="todo-item card flex-row" v-bind:class="{'is-complete':todo.completed}">
    <span class="p-3 mr-auto">{{ todo.title }}</span>
    <div class="buttons flex-grow-0 d-flex">
      <button @click="$emit('del-todo', todo.id)" class="remove border-0 bg-transparent h-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 22 22"
          xml:space="preserve"
        >
          <g>
            <g>
              <path
                class="fill"
                d="M16.1,3.6h-1.9V3.3c0-1.3-1-2.3-2.3-2.3h-1.7C8.9,1,7.8,2,7.8,3.3v0.2H5.9c-1.3,0-2.3,1-2.3,2.3v1.3c0,0.5,0.4,0.9,0.9,1v10.5c0,1.3,1,2.3,2.3,2.3h8.5c1.3,0,2.3-1,2.3-2.3V8.2c0.5-0.1,0.9-0.5,0.9-1V5.9C18.4,4.6,17.4,3.6,16.1,3.6z M9.1,3.3c0-0.6,0.5-1.1,1.1-1.1h1.7c0.6,0,1.1,0.5,1.1,1.1v0.2H9.1V3.3z M16.3,18.7c0,0.6-0.5,1.1-1.1,1.1H6.7c-0.6,0-1.1-0.5-1.1-1.1V8.2h10.6L16.3,18.7L16.3,18.7z M17.2,7H4.8V5.9c0-0.6,0.5-1.1,1.1-1.1h10.2c0.6,0,1.1,0.5,1.1,1.1V7z"
              />
            </g>
            <g>
              <g>
                <path
                  class="fill"
                  d="M11,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6v6.8C11.6,17.7,11.4,18,11,18z"
                />
              </g>
              <g>
                <path
                  class="fill"
                  d="M8,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8C7.4,10.2,7.7,10,8,10c0.4,0,0.6,0.3,0.6,0.6v6.8C8.7,17.7,8.4,18,8,18z"
                />
              </g>
              <g>
                <path
                  class="fill"
                  d="M14,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C14.6,17.7,14.3,18,14,18z"
                />
              </g>
            </g>
          </g>
        </svg>
      </button>
      <button @click="markComplete" class="complete border-0 bg-transparent h-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 22 22"
          xml:space="preserve"
        >
          <rect y="0" class="no-fill" width="22" height="22" />
          <g>
            <path
              class="fill"
              d="M9.7,14.4L9.7,14.4c-0.2,0-0.4-0.1-0.5-0.2l-2.7-2.7c-0.3-0.3-0.3-0.8,0-1.1s0.8-0.3,1.1,0l2.1,2.1l4.8-4.8
		c0.3-0.3,0.8-0.3,1.1,0s0.3,0.8,0,1.1l-5.3,5.3C10.1,14.3,9.9,14.4,9.7,14.4z"
            />
          </g>
        </svg>
      </button>
    </div>
  </div>
</template> 

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
    markComplete() {
      this.todo.completed = !this.todo.completed;
    }
  }
};
</script>

<style scoped>
.is-complete {
  text-decoration: line-through;
}
.buttons button:not(:first-child)::before {
  content: "";
  width: 1px;
  height: 30px;
  position: absolute;
  top: calc(50% - 15px);
  left: 0;
  background: #d8e5e0;
}

button {
  width: 50px;
  position: relative;
}

button svg {
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
