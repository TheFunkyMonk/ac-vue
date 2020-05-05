<template>
  <div id="app">
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
      rel="stylesheet"
    />
    <div class="p-4 md:p-8 bg-orange-200">
      <div class="rounded-lg bg-green-500 max-w-3xl mx-auto px-8 py-px antialiased min-h-screen">
        <h1
          class="text-3xl md:text-4xl font-black text-white my-8 md:my-12 border-b border-white"
        >{{ title }}</h1>

        <div class="mb-8 text-white text-xs">
          <p class="text-xs uppercase tracking-wider font-black">Filters</p>
          <p class>Coming soon!</p>
        </div>

        <div class="flex flex-wrap -mx-4">
          <div class="w-full xs:w-1/2 mb-4 xs:mb-0 px-4">
            <CardList title="Fish" v-bind:data="fish" />
          </div>
          <div class="w-full xs:w-1/2 mb-4 xs:mb-0 px-4">
            <CardList title="Insects" v-bind:data="bugs" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardList from "./components/CardList.vue";
import FishData from "./data/fish.json";
import BugData from "./data/bugs.json";

export default {
  name: "App",
  components: {
    CardList
  },
  data() {
    return {
      title: "ACNH Creature Collector",
      fish: FishData,
      bugs: BugData
    };
  }
};
</script>

<style>
::selection {
  background: theme("colors.black");
  color: theme("colors.white");
}
</style>
