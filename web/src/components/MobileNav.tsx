"use client";

import { Sheet } from "lucide-react";
import { Link } from "react-router-dom";
import { sidebarLinks } from "../constants";
import { cn } from "../lib/utils";
import { SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";

const MobileNav = ({ user }: MobileNavProps) => {
  // const pathname = usePathname();

  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <img
            src="/icons/hamburger.svg"
            width={30}
            height={30}
            alt="mobile menu"
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-white">
          {/* Home Link */}
          <Link to="/" className="cursor-pointer flex items-center gap-1 px-4">
            <img src="/icons/logo.svg" width={34} height={34} alt="home-logo" />
            <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
              Horizon
            </h1>
          </Link>

          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <nav className="flex h-full flex-col gap-4 pt-16 text-white">
                {/* Dyanamic Side Bar Links */}
                {sidebarLinks.map((item) => {
                  // const isActive = pathname === item.route || pathname.startsWith
                  //     (`${item.route}/`)

                  return (
                    <SheetClose asChild key={item.label}>
                      <Link
                        to={item.route}
                        className={cn(
                          "mobilenav-sheet_close w-full",
                          "bg-bank-gradient"
                        )}
                      >
                        <img
                          src={item.imgURL}
                          alt={item.label}
                          width={20}
                          height={20}
                          className={cn("brightness-[3] invert-0")}
                        />

                        <p
                          className={cn(
                            "text-16 font-semibold text-black-2",
                            "text-white"
                          )}
                        >
                          {item.label}
                        </p>
                      </Link>
                    </SheetClose>
                  );
                })}
                {/* User */}
                User
              </nav>
            </SheetClose>
            {/* FOOTER */}
            Footer
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
