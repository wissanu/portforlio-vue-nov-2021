<template>
  <div class="header">
    <h2>{{ text }}</h2>
    <Button text="หน้าถัดไป" color="green"/>
  </div>
</template>

<script>
import Button from '@/components/Button.vue';

export default {
  name: 'Header',
  props:  {
    text: {
      type: String,
      default: 'Initial text'
    }
  },
  components: {
    Button
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  font-size: 1.5em;
}
</style>
