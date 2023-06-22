const checkZero = (n) => n < 10 ? `0${n}` : n;

export const getCurrentTime = () => {
  const months = [
    'Янв',
    'Фев',
    'Мар',
    'Апр',
    'Май',
    'Июн',
    'Июл',
    'Авг',
    'Сен',
    'Окт',
    'Ноя',
    'Дек',
  ];

  const weekdays = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
  ];

  const date = new Date();
  const dayOfMonth = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const dayOfWeek = weekdays[date.getDay()];
  const hours = checkZero(date.getHours());
  const minutes = checkZero(date.getMinutes());

  return { month, year, dayOfMonth, dayOfWeek, hours, minutes };
}

export const getWindDirection = (deg) => {
  const directions = [
    '&#8593;',
    '&#8598;',
    '&#8592;',
    '&#8601;',
    '&#8595;',
    '&#8600;',
    '&#8594;',
    '&#8599;',
  ];

  const i = Math.round(deg / 45) % 8;

  return directions[i];
}

export const calculateDewPoint = (temp, humidity) => {
  const a = 17.27;
  const b = 237.7;

  const ft = (a * temp) / (b + temp) + Math.log(humidity / 100);
  const dewPoint = (b * ft) / (a - ft);

  return dewPoint.toFixed(1);
}

export const converPressure = (pressure) => {
  const mmHg = pressure * 0.750063755419211;
  return mmHg.toFixed(2);
}

export const getWeatherForecastData = (data) => {
  const forecast = data.list.filter((item) =>
    new Date(item.dt_txt).getHours() === 12 &&
    new Date(item.dt_txt).getDate() > new Date().getDate()
  );

  const forecastData = forecast.map((item) => {
    const date = new Date(item.dt_txt);
    const weekdaysShort = [
      'Вс',
      'Пн',
      'Вт',
      'Ср',
      'Чт',
      'Пт',
      'Сб',
    ];

    const dayOfWeek = weekdaysShort[date.getDay()];
    const weatherIcon = item.weather[0].icon;

    let minTemp = Infinity;
    let maxTemp = -Infinity;

    for (let i = 0; i < data.list.length; i++) {
      const temp = data.list[i].main.temp;
      const tempDay = new Date(data.list[i].dt_txt);

      if (tempDay.getDate() === date.getDate()) {
        if (temp < minTemp) {
          minTemp = temp;
        } else {
          maxTemp = temp;
        }
      }
    }

    return {
      dayOfWeek,
      weatherIcon,
      minTemp,
      maxTemp,
    }
  });

  return forecastData;
}