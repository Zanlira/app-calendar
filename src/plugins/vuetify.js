// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { VDatePicker } from "vuetify/labs/VDatePicker";

// Vuetify
import { createVuetify } from "vuetify";
import { VuetifyDateAdapter } from "vuetify/labs/date/adapters/vuetify";

export default createVuetify({
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
  components: {
    VDatePicker,
  },
  date: {
    adapter: VuetifyDateAdapter,
  },
});
