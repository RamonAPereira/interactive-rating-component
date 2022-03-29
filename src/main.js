import { createApp } from "vue";
import App from "./App.vue";

import BaseCard from "./components/UI/BaseCard.vue";
import BaseIcon from "./components/UI/BaseIcon.vue";

const app = createApp(App);

app.component("base-card", BaseCard);
app.component("base-icon", BaseIcon);

app.mount("#app");
