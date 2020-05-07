<template>
  <div class="mb-8">
    <div
      @click.prevent="active = !active"
      class="border-b border-white flex flex-row items-center justify-between cursor-pointer text-white transition duration-300 hover:text-green-200"
    >
      <h2 class="text-xs uppercase tracking-wider font-black my-2">{{ title }} ({{ filter }})</h2>
      <font-awesome-icon v-bind:icon="active ? 'minus' : 'plus'" class="text-white" />
    </div>
    <div v-show="active">
      <section v-for="item in filteredItems(data)" v-bind:key="item.name">
        <Card
          v-bind:item="item"
          v-bind:hemisphere="hemisphere"
          v-bind:leaving="isLeaving(item, hemisphere)"
          v-bind:selectedItems="selectedItems"
          v-bind:expandedItems="expandedItems"
          v-bind:hideSelected="hideSelected"
          v-bind:compactLayout="compactLayout"
        />
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
    data: Array,
    order: String,
    filter: String,
    hemisphere: String,
    selectedItems: Object,
    expandedItems: Object,
    hideSelected: Boolean,
    compactLayout: Boolean
  },
  data() {
    return {
      active: true
    };
  },
  methods: {
    orderByPrice(items) {
      return items.slice().sort((a, b) => {
        return b[this.order] - a[this.order];
      });
    },
    orderByName(items) {
      return items.slice().sort((a, b) => {
        return a[this.order] < b[this.order]
          ? -1
          : a[this.order] > b[this.order]
          ? 1
          : 0;
      });
    },
    orderById(items) {
      return items;
    },
    orderByLocation(items) {
      return this.orderByName(items);
    },
    isAvailable: (item, hemisphere) => {
      const months = item.month[hemisphere];
      const currentMonth = new Date().getMonth() + 1;
      let isAvailable = false;

      months.forEach(month => {
        if (month === currentMonth && !isAvailable) isAvailable = true;
      });
      return isAvailable;
    },
    isLeaving: (item, hemisphere) => {
      const months = item.month[hemisphere];
      const currentMonth = new Date().getMonth() + 1;
      let isLeaving = false;

      months.forEach((month, idx) => {
        if (month === currentMonth && !isLeaving) {
          const nextMonth = idx === months.length ? months[0] : months[idx + 1];
          if (nextMonth != month + 1) isLeaving = true;
        }
      });
      return isLeaving;
    },
    filteredItems(items) {
      const filter = this.filter;
      const sortMethod =
        "orderBy" + this.order.charAt(0).toUpperCase() + this.order.slice(1);
      const filterMethod =
        "is" + filter.charAt(0).toUpperCase() + filter.slice(1);
      let finalItems;

      switch (filter) {
        case "leaving":
        case "available":
          finalItems = this[sortMethod](
            items.filter(item => this[filterMethod](item, this.hemisphere))
          );
          break;
        default:
          finalItems = this[sortMethod](items);
      }
      return finalItems;
    }
  }
};
</script>
