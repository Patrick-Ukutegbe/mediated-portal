"use client";

import useIsMobile from "@/src/hooks/useIsMobile";
import { Colors, Coronation, Typography } from "@Coronation-ArchTouch/cor-ui";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { Theme } from "@/src/types";
import useTheme from "@/src/hooks/useTheme";

const Footer = () => {
  const isMobile = useIsMobile();
  const { theme } = useTheme();
  const socialLinks = [
    {
      Icon: <FaFacebook color={Colors.primary.base.black} />,
      href: "https://www.facebook.com/coronationnggroup?mibextid=ZbWKwL",
    },
    {
      Icon: <FaLinkedin color={Colors.primary.base.black} />,
      href: "http://linkedin.com/company/coronation-trustees",
    },
    {
      Icon: <FaInstagram color={Colors.primary.base.black} />,
      href: "https://www.instagram.com/coronationgroup/profilecard/?igsh=Y3FiYW5tcGh0OW54",
    },
    {
      Icon: <FaTwitter color={Colors.primary.base.black} />,
      href: "https://x.com/coronation_ng?t=s8v4zjmlCv-B1xrlvBLAoQ&s=09",
    },
  ];

  const description = {
    text: "We are a leading financial service partner that helps build enduring legacies that lead to sustainable wealth creation in Africa.",
  };

  // const mainService = useMemo(
  //   () =>
  //     product.data.map((product) => ({
  //       label: product.title,
  //       link: `/products-and-solutions/${product.slug}`,
  //     })),
  //   []
  // );

  const navlinks = [
    {
      title: "What We Do",
      links: [
        {
          label: "Shareholder Meeting Services",
          link: "https://coronation.ng/",
        },
        {
          label: "Investor Relations",
          link: "https://coronation.ng/",
        },
        {
          label: "Member Registration",
          link: "https://coronation.ng/",
        },
        {
          label: "Securities Offerings",
          link: "https://coronation.ng/",
        },
        {
          label: "Share Transfers",
          link: "https://coronation.ng/",
        },
        {
          label: "Dividend and Interest Payments",
          link: "https://coronation.ng/",
        },
      ],
    },
    {
      title: "Self Services",
      links: [
        {
          label: "Update my name",
          link: "/dashboard/name-update",
        },
        {
          label: "Update my address",
          link: "/dashboard/address-update",
        },
        {
          label: "Update my signature",
          link: "/dashboard/",
        },
        {
          label: "Account Consolidation",
          link: "/dashboard/",
        },
        {
          label: "E-Dividend/Mandate Processing",
          link: "/dashboard/",
        },
        {
          label: "E-Contact Update",
          link: "/dashboard/",
        },
        {
          label: "Airtel Multi-Currency Election Form",
          link: "/dashboard/",
        },
        {
          label: "Probate Processing",
          link: "/dashboard/",
        },
        {
          label: "FAQs",
          link: "/faq",
        },
        {
          label: "Terms of Service",
          link: "/terms-of-service",
        },
      ],
    },
    {
      title: "Affiliations",
      links: [
        {
          label: "Coronation Asset Management",
          link: "https://coronation.ng/institutional/about-us/asset-management",
        },
        {
          label: "Coronation Insurance PLC",
          link: "https://coronation.ng/institutional/about-us/coronation-insurance",
        },
        {
          label: "Coronation Life Assurance",
          link: "https://coronation.ng/institutional/about-us/coronation-life-assurance",
        },
        {
          label: "Coronation Securities",
          link: "https://coronation.ng/institutional/about-us/coronation-securities",
        },
        {
          label: "Coronation Capital",
          link: "https://coronation.ng/institutional/about-us/coronation-capital",
        },
        {
          label: "Coronation Trustees",
          link: "https://coronation.ng/institutional/about-us/trustees",
        },
        {
          label: "Coronation Insurance Ghana",
          link: "https://coronation.ng/institutional/about-us/coronation-insurance-ghana",
        },
        {
          label: "Truim",
          link: "https://coronation.ng/institutional/about-us/trium",
        },
      ],
    },
    {
      title: "Whistle Blowing",
      links: [
        {
          label: "Coronation Whistle Blowing: Coronation Trustees",
          link: "https://coronation.ng/whistle-blowing-coronation-trustees",
        },
        {
          label: "Coronation Whistle Blowing: Asset Management",
          link: "https://coronation.ng/whistle-blowing-coronation-asset-management",
        },
        {
          label: "Coronation Whistle Blowing: Registrars",
          link: "https://coronation.ng/whistle-blowing-coronation-registrars",
        },
        {
          label: "Coronation Whistle Blowing: Coronation Insurance",
          link: "https://coronation.ng/whistle-blowing-coronation-insurance",
        },
        {
          label: "Coronation Whistle Blowing: Coronation Insurance Ghana",
          link: "https://coronation.ng/whistle-blowing-coronation-insurance-ghana",
        },
      ],
    },
  ];

  return (
    <footer className="w-full flex justify-center">
      <div className="md:max-w-[1440px] w-full">
        <div
          className="upper-footer"
          style={{
            padding: isMobile ? "60px 14px 30px" : "80px 0 40px",
          }}
        >
          <div
            className="flex"
            style={{ flex: 2, flexDirection: "column", gap: "18px" }}
          >
            <div style={{ width: 293.33 }}>
              <Coronation theme="light" />
            </div>
            <Typography
              fontSize={18}
              fontWeight={400}
              style={{ color: Colors.primary.gray.neutral500 }}
            >
              {description.text}
            </Typography>
            <div className="social-link flex flex-row gap-4">
              {/* <Typography
                fontSize={18}
                fontWeight={400}
                component="p"
                style={{ color: Colors.primary.base.white }}
              >
                Follow Us
              </Typography> */}
              <ul style={{ display: "flex", gap: "10px" }}>
                {socialLinks?.map(({ href, Icon }, i) => (
                  <li
                    key={i}
                    style={{
                      minWidth: "32px",
                      minHeight: "32px",
                      borderRadius: "50%",
                      background: Colors.primary.base.white,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <a href={href} aria-label={href} target="_blank">
                      {Icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* <div className="md:mt-[150px]">
              <Typography fontSize={18} fontWeight={400} component="p" style={{ color: Colors.primary.base.white }} className="uppercase underline text-[#f3f3f3]">
                Disclosure
              </Typography>
              <Typography
                fontSize={18}
                fontWeight={400}
                component="p"
                style={{ color: Colors.primary.base.white }}
              >
                Coronation Trustees Limited is registered as Trustees and regulated by the Securities and Exchange Commission, Nigeria.
              </Typography>
            </div> */}
          </div>
          <div
            className="flex"
            style={{ flex: 4, flexWrap: "wrap", gap: "24px" }}
          >
            {navlinks.map((navlink, i) => (
              <div
                key={i}
                className="flex"
                style={{
                  flex: 1,
                  minWidth: 120,
                  gap: 12,
                  flexDirection: "column",
                }}
              >
                <Typography
                  fontWeight={500}
                  style={{
                    color: Colors.primary.gray.neutral400,
                    textTransform: "uppercase",
                    fontSize: "1.025rem",
                  }}
                >
                  {navlink.title}
                </Typography>
                <ul
                  className="flex"
                  style={{ flexDirection: "column", gap: 12 }}
                >
                  {navlink.links?.map((link, i) => (
                    <li key={i}>
                      <a href={link.link} aria-label={link.label}>
                        <Typography
                          component="p"
                          fontWeight={400}
                          className={`clickable
                            ${theme === Theme.INDIVIDUAL ? "hover:!text-[#b580d1]" : "hover:!text-[#FF0226]"}
                          `}
                          style={{
                            color: Colors.primary.base.white,
                            fontSize: "0.75rem",
                          }}
                        >
                          {link.label}
                        </Typography>
                      </a>
                      <hr
                        style={{
                          width: "100%",
                          marginTop: "8px",
                          borderColor: Colors.primary.gray.neutral500,
                        }}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div
          className="lower-footer"
          style={{ padding: isMobile ? "0 14px" : "0 0 24px", gap: "24px" }}
        >
          <div
            className="flex gap-[40px] max-md:gap-[10px] flex-wrap"
            style={{ minWidth: "211px" }}
          >
            <Typography
              component="p"
              style={{ color: Colors.primary.gray.neutral500 }}
            >
              @ {new Date().getFullYear()} Coronation. All rights reserved.
            </Typography>
            {/* <a
              href="https://www.coronation.ng/privacy-and-cookie-policy/"
              target="_blank"
            >
              <Typography
                component="p"
                className="clickable"
                style={{ color: Colors.primary.base.white }}
              >
                Privacy Policy
              </Typography>
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

