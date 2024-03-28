import { Fragment, useEffect, useState } from "react";
import TopBar from "./TopBar";
import SideBar from "./SideBar";
import styles from './index.module.scss'
export default function DashLayout({ children }) {
    const [showNav, setShowNav] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
    console.log(user)
    //   function handleResize() {
    //     if (innerWidth <= 640) {
    //       setShowNav(false);
    //       setIsMobile(true);
    //     } else {
    //       // setShowNav(true);
    //       setIsMobile(false);
    //     }
    //   }
    //   useEffect(() => {
    //     if (typeof window != undefined) {
    //       addEventListener("resize", handleResize);
    //     }

    //     return () => {
    //       removeEventListener("resize", handleResize);
    //     };
    //   }, []);

    return (
        <div className={styles.layout_root}>

            <div style={{
                width: showNav ? "260px" : "80px", marginRight: "33px",
            }}>
                <SideBar showNav={showNav} setShowNav={setShowNav} />

            </div>
            <div className={styles.main_wrapper}>
                <TopBar showNav={showNav} setShowNav={setShowNav} user={user} />

                <main className={`${styles.main_container}`}>
                    <div className={styles.content_wrapper}>{children}</div>
                </main>
            </div>
        </div>
    );
}