"use client";

import React, { useRef, useEffect, useState } from "react";
import {
  Button,
  Colors,
  Typography,
  Coronation,
} from "@Coronation-ArchTouch/cor-ui";
import { Icon } from "@Coronation-ArchTouch/cor-ui-icons";
import useIsMobile from "@/hooks/useIsMobile";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import { useRegistration } from "@/contexts/RegistrationContext";

interface ActionProps {
  name: string;
  href?: string;
  subMenu?: ActionProps[];
  onClick?: (e: any) => void;
}

interface NavigationBarProps {
  links?: ActionProps[];
  otherActionButtons?: ActionProps[];
  isMobile?: boolean;
  showRegisterButton?: boolean;
  email?: string;
  setIsAuthenticated?: (isAuthenticated: boolean) => void;
}

const NavBar = ({}: NavigationBarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const isAuthenticated = true;
//   const { isAuthenticated, email, setIsAuthenticated } = useRegistration();

  const isMobile = useIsMobile();
  const pathname = usePathname();

  // Navigation links for header
  const navlinks = [
    { name: "FAQs", href: "/faq" },
    {
      name: "Shares Transmission Checklist",
      href: "/shares-transmission-checkist",
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  // Close mobile menu when switching to desktop
  useEffect(() => {
    if (!isMobile) {
      setIsMenuOpen(false);
    }
  }, [isMobile]);

  return (
    <>
      {/* MOBILE NAV */}
      {isMobile && (
        <div
          className="nav-container mobile"
          role="navigation"
          aria-label="Mobile navigation"
          style={{
            position: "fixed",
            zIndex: 100,
            width: "100%",
            top: 0,
            left: 0,
          }}
        >
          <div
            className="mobile"
            style={{
              background: Colors.primary.base.white,
              boxShadow: "0 1px 0 rgba(0,0,0,0.06)",
              padding: "12px 20px",
              width: "100%",
              justifyContent: "space-between",
              display: "flex",
              alignItems: "center",
              minHeight: "60px",
            }}
          >
            {/* Logo */}
            <Link href="/" className="logo">
              <div className="flex items-center gap-2">
                <Coronation theme="dark" />
              </div>
            </Link>

            {/* Authenticated ? Show Profile Dropdown */}
            {isAuthenticated ? (
              <div className="relative" ref={menuRef}>
                <Button
                  // label={email}
                  label="peterdoe@gmail.com"
                  aria-label="Profile Menu"
                  background={Colors.primary.base.transparent}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  suffixIcon={
                    <Icon
                      icon="user"
                      variant="outline"
                      color={Colors.primary.base.black}
                    />
                  }
                />
                {isDropdownOpen && (
                  <div
                    className="absolute right-0 mt-2 w-56 rounded-xl border border-[#EFF1F3] bg-white shadow-lg"
                    style={{ top: "40px" }}
                  >
                    <div className="px-4 pt-3 pb-2">
                      <Typography
                        style={{ color: Colors.primary.gray.neutral1100 }}
                      >
                        {/* {email} */}
                        peterdoe@gmail.com
                      </Typography>
                    </div>
                    <div className="h-px bg-[#EFF1F3]" />
                    <button
                      className="w-full flex items-center gap-2 px-4 py-3 text-left"
                    //   onClick={() => setIsAuthenticated?.(false)}
                    >
                      <Icon
                        icon="sign-out"
                        variant="outline"
                        color={Colors.primary.error.red300}
                      />
                      <span
                        className="text-[14px]"
                        style={{ color: Colors.primary.error.red300 }}
                      >
                        Sign Out
                      </span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              // Not Authenticated ? Show Menu toggle
              <Button
                aria-label="Menu"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                background={Colors.primary.base.transparent}
                suffixIcon={
                  <Icon
                    icon={isMenuOpen ? "x" : "list"}
                    variant="outline"
                    color={Colors.primary.base.black}
                  />
                }
              />
            )}
          </div>

          {/* Guest Mobile Menu */}
          {!isAuthenticated && isMenuOpen && (
            <>
              {/* Overlay */}
              <div
                className="mobile-menu-overlay"
                onClick={() => setIsMenuOpen(false)}
              />
              {/* Menu Content */}
              <div
                className="mobile-menu-content"
                role="menu"
                aria-expanded={isMenuOpen}
              >
                {navlinks.map((item, i) => (
                  <div key={i} className="mobile-menu-item">
                    <a
                      className="mobile-menu-link"
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Typography fontSize={16}>{item.name}</Typography>
                    </a>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      )}

      {/* DESKTOP NAV */}
      {!isMobile && (
        <div
          className="desktop nav-container"
          role="navigation"
          aria-label="Main navigation"
          style={{
            background: Colors.primary.base.white,
            color: Colors.primary.base.black,
            position: "fixed",
            zIndex: 100,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            top: 0,
            left: 0,
            // padding: "8px 120px",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "1440px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              minHeight: "76px",
              margin: "0 auto",
            }}
          >
            {/* Logo */}
            <Link href="/">
              <div className="flex items-center gap-3">
                <Coronation theme="dark" />
              </div>
            </Link>

            <nav
                  style={{
                    flex: 2,
                    gap: "24px",
                    display: "flex",
                    marginLeft: "24px",
                  }}
                >
                  {navlinks?.map((link, i) => (
                    <a className="link" href={link.href} key={i}>
                      <Typography
                        fontSize={14}
                        style={{
                          color:
                            pathname === link.href
                              ? Colors.primary.base.black
                              : Colors.primary.gray.neutral600,
                        }}
                      >
                        {link.name}
                      </Typography>
                    </a>
                  ))}
                </nav>

            {isAuthenticated ? (
              // Authenticated → Profile Dropdown
              <div className="relative" ref={menuRef}>
                <div className="flex items-center gap-3">
                <input
                  type="text"
                  placeholder="Search"
                  className="px-4 py-2 border rounded-[8px] w-[300px]"
                />
                <Icon
                  icon="bell"
                  variant="outline"
                  color={Colors.primary.gray.neutral1100}
                />
                <Button
                  aria-label="Profile Menu"
                  background={Colors.primary.base.transparent}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="!px-2 !py-1 flex items-center gap-2"
                  prefixIcon={
                    <Icon
                      icon="user"
                      variant="outline"
                      color={Colors.primary.gray.neutral500}
                    />
                  }
                  //   label={email}
                  label="peterdoe@gmail.com"
                  labelColor={Colors.primary.gray.neutral900}
                  suffixIcon={
                    <Icon
                      icon="caret-down"
                      variant="outline"
                      color={Colors.primary.base.black}
                    />
                  }
                />
                </div>
                 
           
                {isDropdownOpen && (
                  <div
                    className="absolute right-0 mt-2 w-56 rounded-xl border border-[#EFF1F3] bg-white shadow-lg"
                    style={{ top: "40px", zIndex: 200 }}
                  >
                    <div className="px-4 pt-3 pb-2">
                      <Typography
                        style={{ color: Colors.primary.gray.neutral1100 }}
                      >
                        {/* {email} */}
                        peterdoe@gmail.com
                      </Typography>
                    </div>
                    <div className="h-px bg-[#EFF1F3]" />
                    <Button
                      prefixIcon={
                        <Icon
                          icon="sign-out"
                          variant="outline"
                          color={Colors.primary.error.red300}
                          size="16px"
                        />
                      }
                      label="Sign Out"
                      labelColor={Colors.primary.error.red300}
                      aria-label="Sign Out"
                      className="w-full !h-10 flex items-center gap-2 px-4 py-3 text-left text-[14px]"
                    //   onClick={() => setIsAuthenticated?.(false)}
                    />
                  </div>
                )}
              </div>
            ) : (
              // Guest → Nav links
              <>
                <nav
                  style={{
                    flex: 2,
                    gap: "24px",
                    display: "flex",
                    marginLeft: "24px",
                  }}
                >
                  {navlinks?.map((link, i) => (
                    <a className="link" href={link.href} key={i}>
                      <Typography
                        fontSize={14}
                        style={{
                          color:
                            pathname === link.href
                              ? Colors.primary.base.black
                              : Colors.primary.gray.neutral600,
                        }}
                      >
                        {link.name}
                      </Typography>
                    </a>
                  ))}
                </nav>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
