import { cityServiceSearch } from "./modules/cityServiceSearch.js";
import { startWidget } from "./modules/widgetService.js";

const app = document.querySelector('#app');

const init = async (app) => {
  const widget = await startWidget();

  app.append(widget);

  cityServiceSearch(widget);
}

init(app);

