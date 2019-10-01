<template>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path class="no-fill" d="M0 0h24v24H0z" />
    <path
      class="fill"
      d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
    />
  </svg>
</template>

<script>
export default {
  name: "TodoItemMenuItem"
};
</script>

<style scoped>
svg {
  width: 22px;
  height: 22px;
  top: calc(50% - 11px);
  left: calc(50% - 11px);
  position: absolute;
  fill: #c0cecb;
}

.no-fill {
  fill: none;
}
</style>