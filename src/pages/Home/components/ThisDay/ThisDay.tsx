import React from "react";
import { GlobalSvgSelector } from "../../../../assets/icons/global/GlobalSvgSelector";
import { Weather } from "../../../../store/types/types";
import styles from "./ThisDay.module.scss";
import Moment from "react-moment";

type Props = {
  weather: Weather;
};

const ThisDay = ({ weather }: Props) => {
  return (
    <div className={styles.thisDay}>
      <div className={styles.inner}>
        <div className={styles.today}>
          <div className={styles.today__inner}>
            <div className={styles.temp}>{Math.ceil(weather.main.temp)} °</div>
            <div className={styles.text}>Сегодня <br/>
            <Moment className={styles.day} format="DD-MM-YYYY" interval={1000} /></div>
            
          </div>
          <GlobalSvgSelector id={"sun"} />
        </div>

        <div className={styles.info}>
          <div className={styles.time}>
            Время: <span><Moment format="HH:mm" interval={1000} /></span>
          </div>
          <div className={styles.city}>
            Город: <span>Нур-султан</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThisDay;
