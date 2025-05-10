import { createApp } from "vue";
import DummyDashboard from "./components/Dashboard.vue";

// mount func to start the app
const mount = (el) => {
  const app = createApp(DummyDashboard);
  app.mount(el);
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_dashboard-dev-root");

  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
