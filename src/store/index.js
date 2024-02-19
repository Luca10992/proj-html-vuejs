import { reactive } from "vue";

export const store = reactive({
  linksHeader: ["HOME", "ABOUT", "SERVICES", "WORK", "ARTICLES"],
  cards: [
    {
      iconCard: "fa-regular fa-building",
      titleCard: "Buildings",
    },
    {
      iconCard: "fa-solid fa-arrows-rotate",
      titleCard: "Renovate",
    },
    {
      iconCard: "fa-solid fa-house-chimney",
      titleCard: "Construct",
    },
    {
      iconCard: "fa-solid fa-truck",
      titleCard: "Exclusive",
    },
  ],
});
