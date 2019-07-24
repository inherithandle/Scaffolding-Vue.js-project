<template>
  <button type="button" class="button" v-on:click="buttonClicked1()">button 1</button>
</template>

<script>
export default {
  methods: {
    buttonClicked1() {
      alert('button1 clicked.')
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  background-color: red;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
</style>
