"use client";

import { useState,useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";

const navigation = [
  { name: "Players", href: "/players" },
  { name: "Paltan World", href: "/paltanworld" },
  { name: "Tickets", href: "https://in.bookmyshow.com/sports/pro-kabaddi-league-season-11-2024/ET00414457" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleMenuClick = () => {
    setMobileMenuOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 h-10 z-50 py-5 px-2 md:p-6 ">
      <nav
        aria-label="Global"
        className="w-full flex items-center justify-between text-sm italic h-28 p-6 lg:px-8 bg-black/40"
        // style={{ clipPath: "polygon( 2% 0, 100% 0, 98% 100%, 0% 100%)" }}
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-6.5 p-1.5 md:m-10">
            <span className="sr-only">Your Company</span>
            <img alt="" src="src/assets/images/logos/logo.gif" className="w-10 h-25 w-20 md:h-[150px] md:w-[120px]" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-10 2xl:gap-x-15 pr-100 tracking-wider">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className="text-[18px] font-semibold text-white hover:text-orange-500"
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    onClick={handleMenuClick}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
              
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
