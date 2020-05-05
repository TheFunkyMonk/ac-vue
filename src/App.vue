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
            <p class="text-xs uppercase tracking-wider font-black">Sort</p>
            <div class="relative text-white">
              <div class="absolute top-0 right-0 mt-4 mr-3">
                <font-awesome-icon icon="caret-down" class="block mt-px" />
              </div>
              <select
                v-model="currentOrder"
                class="bg-transparent border border-white w-full subpixel-antialiased text-sm my-2 py-1 px-2 appearance-none"
              >
                <option value="name">Name</option>
                <option value="price">Price</option>
                <option value="location">Location</option>
              </select>
            </div>
          </div>
          <div class="w-full xs:w-1/2 px-2 xs:pl-4 my-4">
            <p class="text-xs uppercase tracking-wider font-black">Filter</p>
            <p class>Coming soon</p>
          </div>
        </div>

        <div class="flex flex-wrap -mx-4">
          <div class="w-full xs:w-1/2 mb-4 xs:mb-0 px-4">
            <CardList title="Fish" v-bind:data="fish" v-bind:order="currentOrder" />
          </div>
          <div class="w-full xs:w-1/2 mb-4 xs:mb-0 px-4">
            <CardList title="Insects" v-bind:data="bugs" v-bind:order="currentOrder" />
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
      bugs: BugData,
      currentOrder: "name"
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
