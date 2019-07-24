<template>
  <div>
    <h1>{{ message }}</h1>
    <button type="button" class="button" v-on:click="buttonClicked1()">button 1</button>
    <button type="button" v-on:click="buttonClicked2()">button 2</button>
    <button type="button" v-on:click="buttonClicked3()">button 3</button>
    <button type="button" v-on:click="reverseMessage()">reverse world</button>
  </div>
</template>

<script>
module.exports = {
  data: function() {
    return {
      message: 'Hello Buttons World!'
    }
  },
  methods: {
    buttonClicked1() {
      alert('button1 clicked.')
    },
    buttonClicked2() {
      alert('button2 clicked.')
    },
    buttonClicked3() {
      alert('button3 clicked.')
    },
    reverseMessage() {
      this.message = this.message.split('').reverse().join('')
    }
  }
}
</script>

<style lang="scss">
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
