<template>
  <div class="search">
    <div class="about row align-center justify-center">
      <div class="col">
        <div class="row align-center justify-center">
          <div v-if="!this.search.loading" class="txt-center">
            <div v-if="this.search.term">
              <h1 v-if="resultsToShow">
                Search Results for "{{ this.search.term }}"
              </h1>
              <h1 v-else>No Search Results for "{{ this.search.term }}"</h1>
            </div>
            <div
              v-else
              class="row none align-center"
              style="align-items: center; justify-content: center"
            >
              <div class="col info-background">
                <h1>Search</h1>
                <hr />
                <h2>
                  Use the search bar at the top of the screen to search for
                  cards by name.
                </h2>
                <h2>
                  Put the name in double quotes for an exact match, otherwise
                  partial matching will be applied.
                </h2>
                <back-home-button variant="primary"></back-home-button>
              </div>
            </div>
          </div>
        </div>
        <grid-container
          :rarity="rarity"
          :favorite-mode="false"
          :search-mode="true"
          :loading-search="searchLoading"
        ></grid-container>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Search",
  components: {
    GridContainer: () => import("../components/layout/GridContainer.vue"),
    BackHomeButton: () => import("../components/BackHomeButton.vue"),
  },
  data() {
    return {
      rarity: "all",
    };
  },
  computed: {
    ...mapGetters(["search", "searchLoading"]),
    totalResults: function () {
      return this.search.cards.length;
    },
    resultsToShow: function () {
      return this.totalResults > 0;
    },
  },
  methods: {
    ...mapActions(["updateSearch", "customSearch", "focus"]),
  },

  created() {
    if (this.search.term) {
      this.customSearch();
    }
  },
  mounted() {
    this.focus(this.$refs.search);
  },
};
</script>

<style lang="css" scoped>
h1,
h2,
h3,
h4 {
  margin: 0;
  margin: 0.25rem 0;
}
p {
  margin: 0;
  padding: 0.5rem 1rem;
}
ul {
  list-style-type: none;
  margin-left: 0;
  margin-bottom: 0.5rem;
}
.about {
  margin: 0;
  color: #fff;
  width: 100%;
}
.about .col {
  padding: 0;
  font-size: 1.2rem;
}
.search {
  margin-top: 6rem;
}
</style>
