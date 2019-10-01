<template>
  <b-list-group id="menu" class="card">
    <div class="item">Cras justo odio</div>
    <div class="item">Dapibus ac facilisis in</div>
    <div class="item">Morbi leo risus</div>
  </b-list-group>
</template>

<script>
export default {
  name: "Menu"
};
</script>

<style scoped>
#menu {
  position: absolute;
  z-index: 1;
  max-width: 200px;
  bottom: calc(1rem + 32px);
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.2);
  padding: 6px 0;
}

#menu .item {
  padding: 6px 12px;
}

#menu .item:hover {
  background-color: #d8e5e0;
  cursor: pointer;
  user-select: none;
}
</style>
