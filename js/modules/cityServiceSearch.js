import { startWidget } from "./widgetService.js";

export const cityServiceSearch = (widget) => {
  const button = document.querySelector('.widget__change-city');

  button.addEventListener('click', () => {
    const form = document.createElement('form');
    form.classList.add('widget__form');

    const inputCity = document.createElement('input');
    inputCity.classList.add('widget__input');
    inputCity.name = 'city';
    inputCity.type = 'search';
    inputCity.placeholder = 'Введите город';

    form.append(inputCity);
    widget.append(form);

    inputCity.focus();

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      widget.textContent = '';
      await startWidget(inputCity.value, widget);
      cityServiceSearch(widget);
    });
  });
}