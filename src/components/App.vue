<template>
  <div>
    <h1>{{ message }}</h1>
    <Button1></Button1>
    <Button2></Button2>
    <Button3></Button3>
  </div>
</template>

<script>
import Button1 from './Button1.vue'
import Button2 from './Button2.vue'
import Button3 from './Button3.vue'

export default {
  data: function() {
    return {
      message: 'Hello Buttons World!'
    }
  },
  components: {
    Button1,
    Button2,
    Button3
  }
}
</script>
