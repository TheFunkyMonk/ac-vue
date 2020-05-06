<template>
  <div id="app">
    <div class="p-4 md:p-12 bg-orange-200 min-h-screen">
      <div class="bg-leaf z-10 fixed top-0 left-0 w-full h-full"></div>
      <div
        class="rounded-lg bg-green-500 max-w-5xl mx-auto px-6 py-2 md:px-8 antialiased relative z-20 shadow-2xl border border-green-600"
      >
        <div class="absolute top-0 right-0 mt-4 mr-8 text-white">
          <div class="absolute top-0 right-0 mt-4 mr-3">
            <font-awesome-icon icon="caret-down" class="block -mt-px" />
          </div>
          <select
            v-model="currentHemisphere"
            class="bg-transparent border border-white w-full subpixel-antialiased text-sm my-2 py-1 pl-2 pr-8 appearance-none rounded-md"
          >
            <option value="north">Northern Hemisphere</option>
            <option value="south">Southern Hemisphere</option>
          </select>
        </div>
        <div class="mt-20 mb-8 md:mb-16 md:text-center">
          <h2 class="text-xs uppercase tracking-wider font-black text-green-800 mb-1 sm:-mb-1">
            <span class="inline xs:hidden">{{ abbr }}</span>
            <span class="hidden xs:inline">{{ subtitle }}</span>
          </h2>
          <h1
            class="text-3xl xs:text-6xl leading-none sm:leading-normal font-black text-white"
          >{{ title }}</h1>
        </div>

        <div
          v-bind:class="'bg-green-800 text-white rounded-lg md:px-1 text-base' + (showFilters ? ' mb-8' : ' mb-8' )"
        >
          <div
            @click.prevent="showFilters = !showFilters"
            v-bind:class="'flex flex-row items-center justify-between cursor-pointer text-white mx-1 py-2 px-3 relative z-20' + (showFilters ? ' -mb-6' : '')"
          >
            <h2 class="text-xs uppercase tracking-wider font-black my-2">
              <span v-bind:class="showFilters ? 'text-transparent' : ''">Filters</span>
            </h2>
            <font-awesome-icon v-bind:icon="showFilters ? 'minus' : 'plus'" class="text-white" />
          </div>
          <div v-if="showFilters" class="flex flex-wrap pb-2 md:pb-4 relative z-10">
            <div class="w-full xs:w-1/3 px-4 my-2">
              <p class="text-xs uppercase tracking-wider font-black">Order By</p>
              <div class="relative text-white">
                <div class="absolute top-0 right-0 mt-4 mr-3">
                  <font-awesome-icon icon="caret-down" class="block -mt-px" />
                </div>
                <select
                  v-model="currentOrder"
                  class="bg-transparent border border-white w-full subpixel-antialiased text-sm my-2 py-1 xs:py-2 pl-3 pr-8 appearance-none rounded-md"
                >
                  <option value="id">ID (in-game)</option>
                  <option value="name">Name</option>
                  <option value="price">Price</option>
                  <option value="location">Location</option>
                </select>
              </div>
            </div>
            <div class="w-full xs:w-1/3 px-4 my-2">
              <p class="text-xs uppercase tracking-wider font-black">Availability</p>
              <div class="relative text-white">
                <div class="absolute top-0 right-0 mt-4 mr-3">
                  <font-awesome-icon icon="caret-down" class="block -mt-px" />
                </div>
                <select
                  v-model="currentFilter"
                  class="bg-transparent border border-white w-full subpixel-antialiased text-sm my-2 py-1 xs:py-2 pl-3 pr-8 appearance-none rounded-md"
                >
                  <option value="all">All</option>
                  <option value="available">Available in {{ monthStringFromNum(currentMonth) }}</option>
                  <option value="leaving">Leaving after {{ monthStringFromNum(currentMonth) }}</option>
                </select>
              </div>
            </div>
            <div class="w-full xs:w-1/3 px-4 my-2">
              <p class="text-xs uppercase tracking-wider font-black">Options</p>
              <div class="relative text-white mt-2 text-sm sub">
                <input type="checkbox" id="show-selected" class="mr-2" v-model="showSelected" />
                <label for="show-selected">Show collected items</label>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap -mx-4 md:mx-0 md:px-1">
          <div class="w-full xs:w-1/2 mb-4 xs:mb-0 px-4">
            <CardList
              title="Fish"
              v-bind:data="fish"
              v-bind:order="currentOrder"
              v-bind:filter="currentFilter"
              v-bind:hemisphere="currentHemisphere"
              v-bind:selectedItems="selectedItems"
              v-bind:showSelected="showSelected"
            />
          </div>
          <div class="w-full xs:w-1/2 mb-4 xs:mb-0 px-4">
            <CardList
              title="Insects"
              v-bind:data="bugs"
              v-bind:order="currentOrder"
              v-bind:filter="currentFilter"
              v-bind:hemisphere="currentHemisphere"
              v-bind:selectedItems="selectedItems"
              v-bind:showSelected="showSelected"
            />
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
import { monthStringFromNum } from "./js/helpers";

export default {
  name: "App",
  components: {
    CardList
  },
  data() {
    return {
      title: "Critter Collector",
      abbr: "Animal Crossing",
      subtitle: "Animal Crossing: New Horizons",
      showFilters: localStorage.showFilters
        ? JSON.parse(localStorage.showFilters)
        : true,
      fish: FishData,
      bugs: BugData,
      showSelected: localStorage.showSelected
        ? JSON.parse(localStorage.showSelected)
        : true,
      currentOrder: localStorage.currentOrder || "id",
      currentFilter: localStorage.currentFilter || "available",
      currentHemisphere: localStorage.currentHemisphere || "north",
      selectedItems: localStorage.selectedItems
        ? JSON.parse(localStorage.selectedItems)
        : {},
      currentMonth: new Date().getMonth()
    };
  },
  methods: {
    monthStringFromNum: monthStringFromNum
  },
  watch: {
    showFilters(newVal) {
      localStorage.showFilters = newVal;
    },
    showSelected(newVal) {
      localStorage.showSelected = newVal;
    },
    currentOrder(newVal) {
      localStorage.currentOrder = newVal;
    },
    currentFilter(newVal) {
      localStorage.currentFilter = newVal;
    },
    currentHemisphere(newVal) {
      localStorage.currentHemisphere = newVal;
    },
    selectedItems: {
      deep: true,
      handler(newVal) {
        localStorage.selectedItems = JSON.stringify(newVal);
      }
    }
  }
};
</script>

<style>
::selection {
  background: theme("colors.black");
  color: theme("colors.white");
}
.bg-leaf {
  background: url("assets/img/leaf-tile.jpg");
}
</style>
