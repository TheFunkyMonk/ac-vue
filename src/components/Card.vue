<template>
  <div class="my-4 md:my-8 block shadow-lg rounded-lg overflow-hidden">
    <div class="px-4 bg-blue-200 p-px flex items-center justify-start">
      <img v-if="item.image" v-bind:src="item.image" v-bind:alt="item.name" class="w-8 -ml-2 mr-1" />
      <h2 class="text-base font-medium my-2">{{ item.name }}</h2>
    </div>
    <div class="px-4 bg-white py-4">
      <p class="text-xs my-0">
        <span class="font-bold">Price</span>
        : {{ item.price }}
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
