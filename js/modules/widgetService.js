import { renderWidgetForecast, renderWidgetOther, renderWidgetToday } from "./render.js";

export const startWidget = () => {
  const widget = document.querySelector('#app');
  widget.classList.add('widget');

  renderWidgetToday(widget);
  renderWidgetOther(widget);
  renderWidgetForecast(widget);

  return widget;
}