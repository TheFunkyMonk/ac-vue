<template>
  <div class="my-4 md:my-8 block shadow-lg rounded-lg overflow-hidden">
    <div class="px-4 bg-blue-200 p-px">
      <h2 class="text-lg font-medium my-2">{{ item.name }}</h2>
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
