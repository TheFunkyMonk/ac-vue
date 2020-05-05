<template>
  <div>
    <h2 class="text-xs uppercase tracking-wider font-black text-white -mb-4">{{ title }}</h2>
    <section v-for="item in data" v-bind:key="item.id">
      <Card v-bind:item="item" />
    </section>
  </div>
</template>

<script>
import Card from "./Card.vue";

export default {
  name: "CardList",
  components: {
    Card
  },
  props: {
    title: String,
    data: Array
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
