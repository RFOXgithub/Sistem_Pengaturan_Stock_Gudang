<template>
  <div class="hello">
    <p>{{ msg }}</p>
    <button @click="clickHandler">Klik Aku!</button>
    <p v-if="clicked">Kamu sudah klik tombol!</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      clicked: false
    }
  },
  methods: {
    clickHandler() {
      this.clicked = true
    }
  }
}
</script>

<style scoped>
.hello {
  border: 1px solid #ccc;
  padding: 20px;
  display: inline-block;
}
button {
  margin-top: 10px;
}
</style>
