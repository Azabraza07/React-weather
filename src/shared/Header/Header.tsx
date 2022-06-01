import React, { useEffect, useState } from "react";
import Select from "react-select";
import SingleValue from "react-select/dist/declarations/src/components/SingleValue";
import { colors } from "react-select/dist/declarations/src/theme";
import { GlobalSvgSelector } from "../../assets/icons/global/GlobalSvgSelector";
import { Theme } from "../../context/ThemeContext";
import { useTheme } from "../../hooks/useTheme";
import styles from "./Header.module.scss";

type Props = {};

const Header = (props: Props) => {
  const theme = useTheme();

  const options = [{ value: "defaultValue", label: "Nur-sultan" }];

  const colorStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor:
        theme.theme === Theme.DARK ? "#fff" : "rgba(71, 147, 255, 0.2)",
      width: "194px",
      height: "37px",
      border: "none",
      borderRadius: "10px",
      zIndex: 100,
    }),
    SingleValue: (styles: any) => ({
      ...styles,
      color: theme.theme === Theme.DARK ? "#fff" : "#000",
    }),
  };

  const changeTheme = () => {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  };

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <GlobalSvgSelector id={"header-logo"} />
        </div>
        <div className={styles.title}>React weather</div>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.change__theme} onClick={changeTheme}>
          <GlobalSvgSelector id={"change-theme"} />
        </div>
        <Select
          defaultValue={options[0]}
          styles={colorStyles}
          options={options}
        />
      </div>
    </header>
  );
};

export default Header;
