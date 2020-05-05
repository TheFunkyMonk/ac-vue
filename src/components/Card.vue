<template>
  <div
    class="my-4 md:my-8 block rounded-lg overflow-hidden transform hover:-translate-y-1 hover:shadow-xl transition duration-200 cursor-pointer"
  >
    <div class="px-4 bg-blue-200 p-px flex flex-wrap justify-between items-center">
      <div class="flex items-center">
        <img
          v-if="item.image"
          v-bind:src="item.image"
          v-bind:alt="item.name"
          class="w-8 -ml-2 mr-1"
        />
        <h2 class="text-base font-medium my-2">{{ item.name }}</h2>
      </div>
      <p
        v-if="leaving"
        class="inline-block text-xs my-2 px-2 leading-loose p-0 rounded-full bg-blue-600 text-white"
      >Leaving Soon!</p>
    </div>
    <div class="px-4 bg-white py-4">
      <p class="text-xs my-0">
        <span class="font-bold">Price</span>
        : {{ item.price }}
      </p>
      <p class="text-xs my-0">
        <span class="font-bold">Location</span>
        : {{ item.location }}
      </p>
      <p class="text-xs my-0">
        <span class="font-bold">Time</span>
        : {{ item.time }}
      </p>
      <p class="text-xs my-0">
        <span class="font-bold">Months Available</span>
        : {{ convertMonthsToText(item.month[hemisphere]) }}
      </p>
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
    leaving: Boolean
  },
  methods: {
    convertMonthsToText: months => {
      if (months.length === 12) return "Year round";
      return months.map(month => MonthData[month - 1 || 0].abbr).join(", ");
    }
  }
};
</script>
