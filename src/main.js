import { createApp } from "vue";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { fas } from "@fortawesome/free-solid-svg-icons";
import {
  faBuilding,
  faLightbulb,
  faHeart,
  faClock,
  faEnvelope,
} from "@fortawesome/free-regular-svg-icons";
import {
  faTwitter,
  faYoutube,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faBuilding,
  fas,
  faLightbulb,
  faTwitter,
  faHeart,
  faClock,
  faEnvelope,
  faYoutube,
  faFacebook,
  faInstagram
);
const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
