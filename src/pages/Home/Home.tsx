import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useCustomDispatch, useCustomSelector } from "../../hooks/store";
import Popup from "../../shared/Popup/Popup";
import { fetchCurrentWeather } from "../../store/thunks/fetchCurrentWeather";
import { selectCurrentWeatherData } from "../../store/types/selectors";
import Days from "./components/Days/Days";
import Tabs from "./components/Days/Tabs";
import ThisDay from "./components/ThisDay/ThisDay";
import ThisDayInfo from "./components/ThisDayInfo/ThisDayInfo";
import styles from "./Home.module.scss";

type Props = {};

const Home = (props: Props) => {
  const dispatch = useCustomDispatch();

  const {weather} = useCustomSelector
  (selectCurrentWeatherData)

  useEffect(() => {
    dispatch(fetchCurrentWeather("Nur-Sultan"));
  }, []);

  return (
    <div className={styles.home}>
      {/* <Popup/> */}
      <div className={styles.wrapper}>
        <ThisDay weather={weather} />
        <ThisDayInfo weather={weather} />
      </div>
      {/* <Tabs /> */}
      {/* <Days /> */}
    </div>
  );
};

export default Home;
