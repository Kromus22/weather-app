import { startWidget } from "./modules/widgetService.js";

const app = document.querySelector('#app');

const init = (app) => {
  const widget = startWidget();

  app.append(widget);
}

init(app);

