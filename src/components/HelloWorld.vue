<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Header text="Header Components"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Header from '@/components/Header.vue';


@Options({
  props: {
    msg: String
  },
  components:{
    Header
  }
})
export default class HelloWorld extends Vue {
  msg! : String
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-size: 1.25em;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
