<template>
  <div
    v-if="showSelected  || (!selectedItems[item.name] && !showSelected)"
    class="my-4 md:my-8 block rounded-lg overflow-hidden cursor-pointer relative"
  >
    <div
      v-on:click="toggleSelected(item.name)"
      v-if="selectedItems[item.name]"
      class="absolute top-0 left-0 w-full h-full z-20"
    >
      <div
        class="absolute top-0 left-0 w-full h-full z-20 flex items-center justify-center text-green-400"
      >
        <font-awesome-icon icon="check-circle" size="3x" />
      </div>
      <div class="absolute top-0 left-0 w-full h-full bg-white opacity-75 z-10"></div>
    </div>

    <div
      v-on:click="toggleSelected(item.name)"
      class="px-4 bg-blue-200 p-px flex flex-wrap justify-between items-center relative z-10"
    >
      <div class="flex items-center">
        <img
          v-if="item.image"
          v-bind:src="item.image"
          v-bind:alt="item.name"
          class="w-8 -ml-2 mr-1"
        />
        <h2 class="text-base font-medium my-2">{{ item.name }}</h2>
      </div>
      <input type="checkbox" class="pointer-events-none" v-if="!selectedItems[item.name]" />
    </div>
    <div class="px-4 bg-white py-4 relative" v-on:click="toggleExpanded(item.name)">
      <font-awesome-icon
        v-bind:icon="expandedItems[item.name] ? 'minus' : 'plus'"
        class="text-blue-200 absolute top-0 right-0 mr-4 mt-4"
      />
      <p class="text-xs my-0">
        <span class="font-bold">Location</span>
        : {{ item.location }}
      </p>
      <p class="text-xs my-0">
        <span class="font-bold">Time</span>
        : {{ item.time }}
      </p>
      <div v-if="expandedItems[item.name]">
        <p class="text-xs my-0">
          <span class="font-bold">Price</span>
          : {{ item.price }}
        </p>
        <p v-if="item.shadowSize" class="text-xs my-0">
          <span class="font-bold">Shadow Size</span>
          : {{ item.shadowSize }}
        </p>
        <div class="mt-2 -ml-1">
          <p
            v-if="leaving"
            class="inline-block text-xs px-2 leading-loose p-0 rounded-full bg-blue-600 text-white"
          >Leaving Soon!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MonthData from "../data/months.json";
export default {
  name: "Card",
  props: {
    item: Object,
    hemisphere: String,
    leaving: Boolean,
    selectedItems: Object,
    expandedItems: Object,
    showSelected: Boolean
  },
  methods: {
    convertMonthsToText: months => {
      if (months.length === 12) return "Year round";
      return months.map(month => MonthData[month - 1 || 0].abbr).join(", ");
    },
    toggleSelected(name) {
      this.$set(this.selectedItems, name, 1 - (this.selectedItems[name] | 0));
    },
    toggleExpanded(name) {
      this.$set(this.expandedItems, name, 1 - (this.expandedItems[name] | 0));
    }
  }
};
</script>
