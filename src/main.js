import { createApp } from "vue";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { fas } from "@fortawesome/free-solid-svg-icons";
import { faBuilding, faLightbulb } from "@fortawesome/free-regular-svg-icons";
import {} from "@fortawesome/free-brands-svg-icons";

library.add(faBuilding, fas, faLightbulb);
const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
