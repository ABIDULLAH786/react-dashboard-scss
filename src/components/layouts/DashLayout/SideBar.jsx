import { forwardRef, useLayoutEffect } from "react";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./SideBar.module.scss";
import {
  ArrowIcon,
  ArrowRightIcon,
  BestAdsIcon,
  CRMIcon,
  CampaignsIcon,
  DashboardIcon,
  MessagesIcon,
  MinusIcon,
  ReportIcon,
  SalesIcon,
  SideBarIcon,
} from "../../../assets/icons";
import { Minus } from "../../../assets/icons/minus-icon";
const adminMenu = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: <DashboardIcon />,
  },
  {
    title: "Reports",
    // href: "/dashboard/reports",
    icon: <ReportIcon />,
    subMenus: [
      {
        title: "Daily Report",
        href: "/dashboard/reports/daily-report",
        icon: <Minus />,
      },
      {
        title: "Today Report",
        href: "/dashboard/reports/today-report",
        icon: <Minus />,
      },
      {
        title: "Yesterday Report",
        href: "/dashboard/reports/yesterday-report",
        icon: <Minus />,
      },
    ],
  },
  {
    title: "Campaigns",
    href: "/dashboard/campaigns",
    icon: <CampaignsIcon />,
  },
  {
    title: "Best Ads",
    // href: "/dashboard/best-ads",
    icon: <BestAdsIcon />,
    subMenus: [
      {
        title: "Best Ad Set",
        href: "/dashboard/best-ads/set",
        icon: <Minus />,
      },
      {
        title: "Best Ads",
        href: "/dashboard/best-ads",
        icon: <Minus />,
      },
    ],
  },
  {
    title: "CRM",
    // href: "/dashboard/crm",
    icon: <CRMIcon />,
    subMenus: [
      {
        title: "All Calls Booked",
        href: "/dashboard/crm/all-calls-booked",
        icon: <Minus />,
      },
      {
        title: "All Leads",
        href: "/dashboard/crm/all-leads",
        icon: <Minus />,
      },
      {
        title: "High Quality Leads",
        href: "/dashboard/crm/heigh-quality-leads",
        icon: <Minus />,
      },
    ],
  },
  {
    title: "Sales",
    // href: "/dashboard/sales",
    icon: <SalesIcon />,
    subMenus: [
      {
        title: "JR Sales",
        href: "/dashboard/sales/jr-sales",
        icon: <Minus />,
      },
      {
        title: "JR Premium Sales",
        href: "/dashboard/sales/jr-premium-sales",
        icon: <Minus />,
      },
    ],
  },
  {
    title: "AI",
    href: "/dashboard/ai-chat",
    icon: <MessagesIcon />,
  },
];

const SideBar = forwardRef(({ showNav, setShowNav }, ref) => {
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [openedMenu, setOpenedMenu] = useState("");
  const [route, setRoute] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    setRoute(location.pathname);
  }, [window.location.pathname]);

  const handleMenuItemClick = (link, title) => {
    if (link) {
      navigate(link);
    } else if (title !== openedMenu) {
      setOpenedMenu(title);
      setSubMenuOpen(true);
    } else {
      setSubMenuOpen(!subMenuOpen);
    }
  };
  return (
    <div
      ref={ref}
      className={styles.container}
      style={{ width: showNav ? "260px" : "80px" }}
    >
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
            <>
              <div
                key={index}
                className={`${styles.side_menu_item_container}  ${
                  route == item?.href ||
                  item?.subMenus?.map((item) => item.href)?.includes(route)
                    ? styles.active_menu_item
                    : ""
                }`}
                onClick={() => handleMenuItemClick(item.href, item.title)}
              >
                <div style={{ width: "100%" }}>
                  <div className={`${styles.side_menu_item}`}>
                    {item.icon}
                    {showNav && (
                      <div className={styles.menu_item_text}>{item.title}</div>
                    )}
                    {item.subMenus && (
                      <div
                        className={styles.arrow_icon}
                        style={{
                          transform:
                            item.title == openedMenu && subMenuOpen
                              ? "rotate(90deg)"
                              : "rotate(0deg)",
                        }}
                      >
                        <ArrowRightIcon />
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {item.subMenus &&
                showNav &&
                subMenuOpen &&
                item.title == openedMenu && (
                  <div className={styles.sub_menu_items_container}>
                    {item.subMenus.map((subMenuItem, index) => (
                      <Link
                        to={subMenuItem.href ? subMenuItem.href : ""}
                        style={{
                          textDecoration: "none",
                          color: route == subMenuItem.href ? "#1570EF" : "",
                        }}
                        className={`${styles.sub_menu_item}`}
                        key={index}
                      >
                        <MinusIcon
                          color={
                            route == subMenuItem.href ? "#1570EF" : "#D6D6D6"
                          }
                        />
                        {subMenuItem.title}
                      </Link>
                    ))}
                  </div>
                )}
            </>
          ))}
        </div>
      }
    </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;
