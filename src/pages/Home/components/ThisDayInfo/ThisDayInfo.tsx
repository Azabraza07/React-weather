import React from "react";
import styles from "./ThisDayInfo.module.scss";
import ThisDayItem from "./ThisDayItem";
import cloud from "../../../../assets/images/cloud.png";
import { Weather } from "../../../../store/types/types";

type Props = {
  weather: Weather;
};

export interface Item {
  icon_id: string;
  name: string;
  value: any;
}

const ThisDayInfo = ({ weather }: Props) => {
  const items = [
    {
      icon_id: "temp",
      name: "Температура",
      value: `${Math.ceil(weather.main.temp)}° - ощущается как ${Math.round(
        weather.main.feels_like
      )}° `,
    },
    {
      icon_id: "pressure",
      name: "Давление",
      value: `${weather.main.pressure} мм ртутного столба - нормальное`,
    },
    {
      icon_id: "precipitation",
      name: "Осадки",
      value: "Без осадков",
    },
    {
      icon_id: "wind",
      name: "Ветер",
      value: `${weather.wind.speed}м/с юго-запад - легкий ветер`,
    },
  ];
  return (
    <div className={styles.thisDay__info}>
      <div className={styles.thisDay__info_item}>
        {items.map((item) => (
          <ThisDayItem item={item} />
        ))}
      </div>
      <img className={styles.cloud__img} src={cloud} alt="cloud" />
    </div>
  );
};

export default ThisDayInfo;
