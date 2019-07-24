<template>
  <button type="button" v-on:click="buttonClicked2()">button 2</button>
</template>

<script>
export default {
  methods: {
    buttonClicked2() {
      alert('button2 clicked.')
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  background-color: green;
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
