<template>
  <button type="button" v-on:click="buttonClicked3()">button 3</button>
</template>

<script>
export default {
  methods: {
    buttonClicked3() {
      alert('button3 clicked.')
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  background-color: blue;
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
