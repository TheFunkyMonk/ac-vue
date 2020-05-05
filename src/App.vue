<template>
  <div id="app">
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
      rel="stylesheet"
    />
    <div class="p-4 md:p-8 bg-orange-200">
      <div class="rounded-lg bg-green-500 max-w-4xl mx-auto px-8 py-2 antialiased">
        <div class="my-8 xs:my-12 md:text-center">
          <h2 class="text-xs uppercase tracking-wider font-black text-white mb-1 sm:-mb-1">
            <span class="inline xs:hidden">{{ abbr }}</span>
            <span class="hidden xs:inline">{{ subtitle }}</span>
          </h2>
          <h1
            class="text-2xl xs:text-5xl leading-none sm:leading-normal font-black text-white"
          >{{ title }}</h1>
        </div>

        <div class="flex flex-wrap bg-green-800 text-white rounded-lg px-4 py-2 mb-8 text-xs">
          <div class="w-full xs:w-1/2 px-2 my-4">
            <p class="text-xs uppercase tracking-wider font-black">Filter</p>
            <p class>Coming soon</p>
          </div>
          <div class="w-full xs:w-1/2 px-2 xs:pl-4 my-4">
            <p class="text-xs uppercase tracking-wider font-black">Sort</p>
            <p class>Coming soon</p>
          </div>
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
      title: "Critter Collector",
      abbr: "ACNH",
      subtitle: "Animal Crossing: New Horizons",
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
