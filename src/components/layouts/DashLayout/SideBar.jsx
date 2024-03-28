import { forwardRef, useLayoutEffect } from "react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./SideBar.module.scss";
import {
  BestAdsIcon,
  CRMIcon,
  CampaignsIcon,
  DashboardIcon,
  MessagesIcon,
  ReportIcon,
  SalesIcon,
  SideBarIcon,
} from "../../../assets/icons";
const adminMenu = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: <DashboardIcon />,
  },
  {
    title: "Reports",
    href: "/dashboard/reports",
    icon: <ReportIcon />,
  },
  {
    title: "Campaigns",
    href: "/dashboard/campaigns",
    icon: <CampaignsIcon />,
  },
  {
    title: "Best Ads",
    href: "/dashboard/best-ads",
    icon: <BestAdsIcon />,
  },
  {
    title: "CRM",
    href: "/dashboard/crm",
    icon: <CRMIcon />,
  },
  {
    title: "Sales",
    href: "/dashboard/sales",
    icon: <SalesIcon />,
  },
  {
    title: "AI",
    href: "/dashboard/ai",
    icon: <MessagesIcon />,
  },

  // {
  //   title: "Posts",
  //   icon: <BsFileEarmarkTextFill className="h-5 w-5" />,
  //   subMenus: [
  //     {
  //       title: "All Posts",
  //       href: "/dashboard/admin/all-posts",
  //       icon: <BsFileEarmarkTextFill className="h-5 w-5" />
  //     },
  //     {
  //       title: "Posts Requests",
  //       href: "/dashboard/admin/post-request",
  //       icon: <BsFileEarmarkPlusFill className="h-5 w-5" />
  //     },
  //     {
  //       title: "rejected Posts",
  //       href: "/dashboard/admin/rejected-posts",
  //       icon: <BsFillFileEarmarkMinusFill className="h-5 w-5" />
  //     },
  //   ]
  // }
];

const SideBar = forwardRef(({ showNav, setShowNav }, ref) => {
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [route, setRoute] = useState(null);
  const location = useLocation();
  useEffect(() => {
    setRoute(location.pathname);
  }, [window.location.pathname]);
  return (
    <div ref={ref} className={styles.container}>
      <div className={styles.brand_logo_container}>
        <div className={styles.brand_logo}>
          <img
            src="/images/logo.svg"
            alt="company logo"
            style={{ width: showNav ? "32px" : "25px" }}
          />
          {showNav && <div className={styles.logo_text}>VRISTO</div>}
        </div>
        <div
          className={styles.menu_btn}
          onClick={() => {
            setShowNav(!showNav);
          }}
          style={{
            transform: showNav ? "rotate(0deg)" : "rotate(180deg)",
            right: showNav ? "0px" : "-5px",
            position: "relative",
          }}
        >
          {showNav ? <SideBarIcon /> : <SideBarIcon />}
        </div>
      </div>
      {/* Side bar for admin */}
      {
        <div className={styles.side_menu_wrapper}>
          {adminMenu.map((item, index) => (
            <Link
              key={index}
              className={`${styles.side_menu_item_container}  ${
                route == item?.href ? styles.active : ""
              }`}
              to={item.href ? item.href : ""}
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div>
                <div className={`${styles.side_menu_item}`}>
                  {console.log(item?.href?.split("/"))}
                  {console.log(
                    route?.split("/")[1] == item?.href?.split("/")[1]
                  )}
                  {item.icon}
                  {showNav && (
                    <div className={styles.menu_item_text}>{item.title}</div>
                  )}
                  {/* {item.subMenus && (
                      <div className="flex justify-end">
                        <FiChevronDown
                          className={`w-5 h-5 ${subMenuOpen && "rotate-180"}`}
                          onClick={() => setSubMenuOpen(!subMenuOpen)}
                        />
                      </div>
                    )} */}
                </div>
              </div>
              {/* {adminMenu.subMenus && subMenuOpen && (
                                <ul>
                                    {adminMenu.subMenus.map((subMenuItem, idx) => (
                                        <li
                                            key={idx}
                                            className="flex px-5 cursor-pointer text-center text-sm text-gray-900 py-1"
                                        >
                                            {subMenuItem.title}
                                        </li>
                                    ))}
                                </ul>
                            )} */}
            </Link>
          ))}
        </div>
      }
    </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;
