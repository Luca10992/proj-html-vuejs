import { reactive } from "vue";

export const store = reactive({
  linksHeader: ["HOME", "ABOUT", "SERVICES", "WORK", "ARTICLES"],
  //   **SECTION 2
  cards: [
    {
      iconCard: "fa-regular fa-building",
      titleCard: "Buildings",
      titleInfo:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium ut cupiditate ad architecto quia ex.",
    },
    {
      iconCard: "fa-solid fa-arrows-rotate",
      titleCard: "Renovate",
      titleInfo:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium ut cupiditate ad architecto quia ex.",
    },
    {
      iconCard: "fa-solid fa-house-chimney",
      titleCard: "Construct",
      titleInfo:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium ut cupiditate ad architecto quia ex.",
    },
    {
      iconCard: "fa-solid fa-truck",
      titleCard: "Exclusive",
      titleInfo:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium ut cupiditate ad architecto quia ex.",
    },
  ],
  // **SECTION 3
  infoAgency: [
    {
      iconCard: "fa-solid fa-suitcase",
      titleCard: 3534,
      titleInfo: "PLANNING APPLICATION",
    },
    {
      iconCard: "fa-regular fa-building",
      titleCard: 896,
      titleInfo: "COMPLETED PROJECT",
    },
    {
      iconCard: "fa-solid fa-users",
      titleCard: 172,
      titleInfo: "TRAINED PROFESSIONAL",
    },
    {
      iconCard: "fa-solid fa-globe",
      titleCard: 19,
      titleInfo: "INTERNATIONAL OFFICES",
    },
  ],
  // **SECTION 4
  images: [
    "project2-featured-15013609-600x600.jpg",
    "project1-featured-294276386-600x600.jpg",
    "project3-featured-189023420-600x600.jpg",
  ],
  // **SECTION 5
  cardsValue: [
    {
      iconCard: "fa-solid fa-house-chimney",
      line: "",
      backgroundColor: "turquoise",
      titleCard: "Great Services",
      titleInfo:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium ut cupiditate ad.",
    },
    {
      iconCard: "fa-solid fa-gear",
      line: "",
      backgroundColor: "blue",
      titleCard: "Highest Standard",
      titleInfo:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium ut cupiditate ad.",
    },
    {
      iconCard: "fa-solid fa-users",
      line: "",
      backgroundColor: "orange",
      titleCard: "Professional Team",
      titleInfo:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium ut cupiditate ad.",
    },
    {
      iconCard: "fa-regular fa-lightbulb",
      line: "",
      backgroundColor: "green",
      titleCard: "Creative Solution",
      titleInfo:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium ut cupiditate ad.",
    },
  ],
  // **SECTION 6
  currentSlide: 0,
  slides: [
    {
      testimonialImage: "home-testimonial-84268399.jpg",
      testimonial: "HARRY SMITH - NEW HOME OWNER",
    },
    {
      testimonialImage: "home-testimonial-113165296.jpg",
      testimonial: "JANE BROWN - NEW HOME OWNER",
    },
  ],
  // **SECTION 7
  cardsImages: [
    {
      imageName: "blog-post-134132600-600x362.jpg",
      titleCard: "Redeveloping Florida's Remote Southern Coast",
      date: "December 7th, 2015",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione perferendis voluptatibus doloribus eaque, at dicta? Quis laudantium eius ex dolorum, omnis deserunt vitae, autem officiis eaque exercitationem, nulla velit perspiciatis!",
    },
    {
      imageName: "blog-post-92486644-600x362.jpg",
      titleCard: "How We Manage Large Construction Project",
      date: "December 7th, 2015",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione perferendis voluptatibus doloribus eaque, at dicta? Quis laudantium eius ex dolorum, omnis deserunt vitae, autem officiis eaque exercitationem, nulla velit perspiciatis!",
    },
    {
      imageName: "blog-post-332773904-600x362.jpg",
      titleCard: "Future Proofing a Modern Home ",
      date: "December 7th, 2015",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione perferendis voluptatibus doloribus eaque, at dicta? Quis laudantium eius ex dolorum, omnis deserunt vitae, autem officiis eaque exercitationem, nulla velit perspiciatis!",
    },
  ],
});
