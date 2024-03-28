import { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./TopBar.module.scss";
export default function TopBar({ userName, user }) {
  const navigate = useNavigate();

  return (
    <div className={`${styles.container}`}>
      <div className={styles.profile_container}>
        <img src="images/user.png"/>
      </div>
    </div>
  );
}
