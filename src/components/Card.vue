<template>
  <div
    class="my-4 md:my-8 block rounded-lg overflow-hidden transform hover:-translate-y-1 hover:shadow-xl transition duration-200 cursor-pointer"
  >
    <div class="px-4 bg-blue-200 p-px flex items-center justify-start">
      <img v-if="item.image" v-bind:src="item.image" v-bind:alt="item.name" class="w-8 -ml-2 mr-1" />
      <h2 class="text-base font-medium my-2">{{ item.name }}</h2>
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
        <span class="font-bold">Northern Months</span>
        : {{ item.month.north }}
      </p>
      <p class="text-xs my-0">
        <span class="font-bold">Southern Months</span>
        : {{ item.month.south }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    item: Object
  }
};
</script>
