<template>
  <div class="mb-8">
    <div
      @click.prevent="active = !active"
      class="border-b border-white flex flex-row items-center justify-between cursor-pointer text-white transition duration-300 hover:text-green-200"
    >
      <h2 class="text-xs uppercase tracking-wider font-black my-2">{{ title }}</h2>
      <font-awesome-icon v-bind:icon="active ? 'minus' : 'plus'" class="text-white" />
    </div>
    <div v-show="active">
      <section v-for="item in data" v-bind:key="item.id">
        <Card v-bind:item="item" />
      </section>
    </div>
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
  },
  data() {
    return {
      active: true
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
