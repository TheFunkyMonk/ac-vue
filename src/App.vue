<template>
  <div id="app">
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
      rel="stylesheet"
    />
    <div class="p-4 md:p-8 bg-orange-200">
      <div
        class="rounded-lg shadow-xl bg-green-500 max-w-3xl mx-auto px-8 py-4 antialiased min-h-screen"
      >
        <h1 class="text-3xl md:text-4xl font-black text-white my-8">{{ title }}</h1>

        <section v-if="errored">
          <p
            class="text-white font-bold"
          >We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
        </section>

        <section v-else>
          <div v-if="loading">
            <p class="text-white font-bold">Loading...</p>
          </div>

          <div v-else class="flex flex-wrap -mx-4">
            <div class="w-full sm:w-1/2 mb-4 sm:mb-0 px-4">
              <CardList title="Fish" v-bind:errored="errored" v-bind:data="fish" />
            </div>
            <div class="w-full sm:w-1/2 mb-4 sm:mb-0 px-4">
              <CardList title="Bugs" v-bind:errored="errored" v-bind:data="bugs" />
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CardList from "./components/CardList.vue";

export default {
  name: "App",
  components: {
    CardList
  },
  data() {
    return {
      title: "ACNH Creature Collector",
      fish: null,
      bugs: null,
      loading: true,
      errored: false
    };
  },
  mounted() {
    axios
      .get("http://acnhapi.com/fish")
      .then(response => {
        this.fish = response.data;

        axios
          .get("http://acnhapi.com/bugs")
          .then(response => (this.bugs = response.data))
          .catch(error => {
            console.log(error);
            this.errored = true;
          });
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  }
};
</script>

<style>
::selection {
  background: theme("colors.black");
  color: theme("colors.white");
}
</style>
