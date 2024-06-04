import { Link } from "react-router-dom";
import { sidebarLinks } from "../constants";
import { cn } from "../lib/utils";

const SideBar = ({ user }: SiderbarProps) => {
  //   const pathname = usePathname();

  return (
    <section className="sidebar">
      <nav>
        {/* Home Link */}
        <div className="mb-12 cursor-pointer items-center gap-2">
          <Link to="/">
            <img
              src="/icons/logo.svg"
              width={34}
              height={34}
              alt="home-logo"
              className="size-[24px] max-xl:size-14"
            />
            <h1 className="sidebar-logo">Horizon</h1>
          </Link>
        </div>
        {/* Dyanamic Side Bar Links */}
        {sidebarLinks.map((item) => {
          //   const isActive =
          //     pathname === item.route || pathname.startsWith(`${item.route}/`);

          return (
            <div key={item.label}>
              <Link
                to={item.route}
                // className={cn("sidebar-link", { "bg-bank-gradient": isActive })}
              >
                <div className="relative size-6">
                  <img
                    src={item.imgURL}
                    alt={item.label}
                    // className={cn({ "brightness-[3] invert-0": isActive })}
                    className={cn("brightness-[3] invert-0")}
                  />
                </div>

                <p className={cn("sidebar-label", "!text-white")}>
                  {/* <p className={cn("sidebar-label", { "!text-white": isActive })}> */}
                  {item.label}
                </p>
              </Link>
            </div>
          );
        })}
        {/* User */}
        User
      </nav>

      {/* footer */}
    </section>
  );
};

export default SideBar;
