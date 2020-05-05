<template>
  <div class="mb-8">
    <div
      @click.prevent="active = !active"
      class="border-b border-white flex flex-row items-center justify-between cursor-pointer text-white transition duration-300 hover:text-green-200"
    >
      <h2
        class="text-xs uppercase tracking-wider font-black my-2"
      >{{ title }} by {{ order }} ({{ filter }})</h2>
      <font-awesome-icon v-bind:icon="active ? 'minus' : 'plus'" class="text-white" />
    </div>
    <div v-show="active">
      <section v-for="item in filteredItems(data)" v-bind:key="item.name">
        <Card
          v-bind:item="item"
          v-bind:hemisphere="hemisphere"
          v-bind:leaving="isLeaving(item, hemisphere)"
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
    hemisphere: String
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
    orderByLocation(items) {
      return this.orderByName(items);
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

      if (filter === "leaving") {
        return this[sortMethod](
          items.filter(item => this.isLeaving(item, this.hemisphere))
        );
      }
      return this[sortMethod](items);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
