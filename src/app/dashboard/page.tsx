"use client";

import { Card, Colors, Typography, Button } from "@Coronation-ArchTouch/cor-ui";
import { useEffect } from "react";
import ThemedContainer from "@/src/components/themedComponents/ThemedContainer";
import ThemedButton from "@/src/components/themedComponents/ThemedButton";
import ThemedSelector from "@/src/components/themedComponents/ThemedSelector";
import ThemedIcon from "@/src/components/themedComponents/ThemedIcon";
import { Icon } from "@Coronation-ArchTouch/cor-ui-icons";
import useTheme from "@/src/hooks/useTheme";
import useIsMobile from "@/src/hooks/useIsMobile";
import Image from "next/image";
import { Theme } from "@/src/types";
import Accordion from "@/src/components/organisms/Accordion";
import Footer from "@/src/components/organisms/Footer";

const Dashboard = () => {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme(Theme.CORPORATE);
  }, [setTheme]);

  const isMobile = useIsMobile();

  const heroProducts = [
    {
      id: 1,
      title: "Marine Insurance",
      icon: "anchor-simple",
    },
    {
      id: 2,
      title: "Personal Accident Insurance",
      icon: "first-aid-kit",
    },
    {
      id: 3,
      title: "Motor Insurance",
      icon: "car",
    },
    {
      id: 4,
      title: "Enhanced Term Insurance",
      icon: "devices",
    },
    {
      id: 5,
      title: "Other Products",
      icon: "shield-check",
    },
  ];

  const insuranceProducts = [
    {
      id: 1,
      title: "Marine Insurance",
      image: "/marine-insurance.png",
      description:
        "Strategic insights for the upcoming quarter explored critical economic indicators and high conviction investment....",
      isEnabled: true,
    },
    {
      id: 2,
      title: "Enhanced Term Insurance",
      image: "/enhanced-term-insurance.png",
      description:
        "Strategic insights for the upcoming quarter explores critical economic indicators and high conviction investment....",
      isEnabled: true,
    },
    {
      id: 3,
      title: "Personal Accident Insurance",
      image: "/personal-accident-insurance.png",
      description:
        "Strategic insights for the upcoming quarter explores critical economic indicators and high conviction investment....",
      isEnabled: true,
    },
    {
      id: 4,
      title: "Motor Insurance",
      image: "/motor-insurance.png",
      description:
        "Strategic insights for the upcoming quarter explores critical economic indicators and high conviction investment....",
      isEnabled: true,
    },
    {
      id: 5,
      title: "Other Products",
      image: "/other-products.png",
      description:
        "Strategic insights for the upcoming quarter explores critical economic indicators and high conviction investment....",
      isEnabled: true,
    },
  ];

  const quickActions = [
    {
      label: "Login in to Your Policy",
      description: "Easily Access and Manage Your Coverage",
      icon: "caret-right",
    },
    {
      label: "Report a Claim",
      description: "Submit Your Claim Quickly and Easily",
      icon: "caret-right",
    },
    {
      label: "Track a Claim",
      description: "Stay Update on the Status of Your Claim",
      icon: "caret-right",
    },
  ];

  const faqItems = [
    {
      title:
        "How long does it take to recive policy document via Marine portal?",
      content: (
        <Typography
          style={{ color: Colors.primary.gray.neutral600 }}
          className="!text-[18px] leading-[24px]"
        >
          Coronation Insurance provides a range of coverage options to protect
          you, your family, and your business. We offer personal and commercial
          insurance tailored to your needs.
        </Typography>
      ),
    },
    {
      title: "I had issues logging into the Marine Portal. Is this resolved?",
      content: (
        <Typography
          style={{ color: Colors.primary.gray.neutral600 }}
          className="!text-[18px] leading-[24px]"
        >
          If you're experiencing login issues, please try resetting your
          password using the 'Forgot Password' link. If problems persist,
          contact our support team.
        </Typography>
      ),
    },
    {
      title:
        "Will I receive a copy of the marine certificate after generation?",
      content: (
        <Typography
          style={{ color: Colors.primary.gray.neutral600 }}
          className="!text-[18px] leading-[24px]"
        >
          Marine certificates are issued automatically upon policy activation.
          You can download them from your account or request a copy via email.
        </Typography>
      ),
    },
    {
      title:
        "How do I know if my marine certificate has been successfully submitted?",
      content: (
        <Typography
          style={{ color: Colors.primary.gray.neutral600 }}
          className="!text-[18px] leading-[24px]"
        >
          Error messages are usually related to payment processing or missing
          information. Please check your payment details and ensure all required
          fields are completed.
        </Typography>
      ),
    },
    {
      title:
        "I previously received an error message while using the portal. What should I do if this happens again?",
      content: (
        <Typography
          style={{ color: Colors.primary.gray.neutral600 }}
          className="!text-[18px] leading-[24px]"
        >
          For technical support, please email support@coronation.ng or call our
          helpline. Our team is available Monday to Friday, 8 AM to 5 PM.
        </Typography>
      ),
    },
    {
      title:
        "What should I do if I face any technical issues with the Marine Portal?",
      content: (
        <Typography
          style={{ color: Colors.primary.gray.neutral600 }}
          className="!text-[18px] leading-[24px]"
        >
          For technical support, please email support@coronation.ng or call our
          helpline. Our team is available Monday to Friday, 8 AM to 5 PM.
        </Typography>
      ),
    },
  ];

  return (
    <ThemedContainer className="w-full">
      {/* Hero Section - Dark Background */}
      <ThemedContainer className="flex flex-col md:flex-row w-full">
        {/* Left Side */}
        <ThemedContainer
          className="flex w-full md:w-1/2 py-[80px] h-[784px]"
          style={{ backgroundColor: Colors.primary.gray.neutral1100 }}
        >
          {/* Centered Inner Container */}
          <ThemedContainer className="w-full max-w-[572px] mx-auto space-y-[48px] px-6 mt-[80px]">
            <ThemedContainer className="space-y-4">
              <Typography
                component="p"
                className="!font-[600] !text-[20px] leading-[28px] pb-[16px]"
                style={{ color: Colors.primary.base.white }}
              >
                Welcome to Coronation Insurance
              </Typography>

              <Typography
                component="h1"
                className="!font-[600] !text-[40px] leading-[44px]"
                style={{ color: Colors.primary.base.white }}
              >
                Enjoy the convenience <br /> of the Mediated Portal
              </Typography>

              <Typography
                className="!text-[20px] leading-[28px] !font-[500]"
                style={{ color: Colors.primary.gray.neutral500 }}
              >
                Buy from our range of digital insurance products
              </Typography>
            </ThemedContainer>

            {/* Product Selection Card */}
            <ThemedContainer className="p-[16px] bg-white space-y-[12px] shadow-lg w-full h-[348px]">
              <Typography
                className="!font-[400] !text-[16px] leading-[24px]"
                style={{ color: Colors.primary.gray.neutral600 }}
              >
                Select your plan:
              </Typography>

              {/* Product Cards Grid */}
              <ThemedContainer className="grid grid-cols-2 gap-[16px]">
                {heroProducts.map((product) => (
                  <ThemedContainer
                    key={product.id}
                    className="p-3 border cursor-pointer hover:bg-gray-50 transition-colors flex items-center"
                    style={{ borderColor: Colors.primary.gray.neutral100 }}
                  >
                    <ThemedContainer className="flex flex-row items-center gap-2">
                      <ThemedContainer
                        className="flex items-center justify-center !rounded-full"
                        style={{
                          backgroundColor: "#f7f7f8",
                          width: "40px",
                          height: "40px",
                        }}
                      >
                        <ThemedIcon
                          icon={product.icon}
                          variant="outline"
                          size="20px"
                          color={Colors.primary.gray.neutral700}
                        />
                      </ThemedContainer>

                      <Typography
                        className="!text-[16px] !font-[500] leading-[24px]"
                        style={{ color: Colors.primary.gray.neutral1100 }}
                      >
                        {product.title}
                      </Typography>
                    </ThemedContainer>
                  </ThemedContainer>
                ))}
              </ThemedContainer>

              <ThemedContainer className="pt-1">
                <ThemedButton
                  label="Start a quote"
                  background={Colors.primary.error.red300}
                  labelColor={Colors.primary.base.white}
                  style={{
                    width: "122px",
                    height: "44px",
                  }}
                />
              </ThemedContainer>
            </ThemedContainer>
          </ThemedContainer>
        </ThemedContainer>

        {/* Right Image */}
        <ThemedContainer className="relative w-full md:w-1/2 h-[784px]">
          <Image
            src="/hero-image.png"
            alt="Professional person"
            fill
            className="object-cover object-top"
          />
        </ThemedContainer>
      </ThemedContainer>

      {/* Comprehensive Insurance Solutions Section */}
      <ThemedContainer className="py-16 px-8 bg-[#F7F7F8]">
        <ThemedContainer className="max-w-7xl mx-auto">
          <ThemedContainer className="mb-[16px]">
            <Typography
              className="!font-[700] !text-[28px] md:!text-[40px] leading-[44px]"
              style={{ color: Colors.primary.gray.neutral900 }}
            >
              Comprehensive Insurance solutions tailored just for you
            </Typography>
          </ThemedContainer>
          <ThemedContainer className="mb-[50px]">
            <Typography
              className="!text-[20px] leading-[28px] !font-[500]"
              style={{ color: Colors.primary.gray.neutral600 }}
            >
              We prioritize your security and convenience, offering a seamless
              online experience through our user-friendly portal.
            </Typography>
          </ThemedContainer>

          <ThemedContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {insuranceProducts.map((item) => (
              <Card
                key={item.id}
                variant="standard"
                accentColor={Colors.primary.error.red300}
                title={item.title}
                description={item.description}
                imageSrc={item.image}
                imageClassName="w-full  md:h-auto object-cover mb-[16px]"
                className="bg-white px-[8px]  flex flex-col !border-b-4 !border-[#FF0226] pb-[32px] w-[408px]"
                //   containerClassName="flex flex-col h-full"
                buttonLabel="Purchase"
                labelColor={Colors.primary.base.white}
                buttonStyle={{
                  //   width: "100%",
                  marginTop: "24px",
                  height: "44px",
                  borderRadius: "0px",
                  fontWeight: 600,
                  fontSize: "14px",
                  lineHeight: "20px",
                  cursor: !item.isEnabled ? "not-allowed" : "pointer",
                }}
                titleStyle={{
                  color: item.isEnabled
                    ? Colors.primary.gray.neutral1100
                    : Colors.primary.gray.neutral400,
                  fontWeight: 600,
                  fontSize: "20px",
                  lineHeight: "28px",
                  whiteSpace: "normal",
                }}
                descriptionStyle={{
                  color: Colors.primary.gray.neutral600,
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "20px",
                  marginTop: "8px",
                }}
                // imageStyle={{
                //   width: "100%",
                //   height: "200px",
                //   objectFit: "cover",
                //   borderTopLeftRadius: "8px",
                //   borderTopRightRadius: "8px",
                // }}
              />
            ))}
          </ThemedContainer>
        </ThemedContainer>
      </ThemedContainer>

      {/* Quick Claims Access Section - Dark Background */}
      <ThemedContainer
        className="w-full px-[80px] py-[80px] h-[730px]"
        style={{ backgroundColor: Colors.primary.gray.neutral1100 }}
      >
        <ThemedContainer className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          {/* Left Image */}
          <ThemedContainer className="relative w-full md:w-1/2 h-[570px]">
            <Image
              src="/quickly-access-claims.png"
              alt="People shaking hands"
              fill
              className="object-fit rounded-lg"
            />
          </ThemedContainer>

          {/* Right Content */}
          <ThemedContainer className="w-full md:w-1/2 ">
            <ThemedContainer className="mb-[16px]">
              <Typography
                className="!font-[600] !text-[28px] md:!text-[40px] leading-[44px]"
                style={{ color: Colors.primary.base.white }}
              >
                Quickly Access Your Claims <br></br> and Policy Information
              </Typography>
            </ThemedContainer>
            <ThemedContainer className="mb-[48px]">
              <Typography
                className="!font-[500] !text-[20px] leading-[28px]"
                style={{ color: Colors.primary.gray.neutral500 }}
              >
                Effortlessly Manage Your Claims and Policy Information
              </Typography>
            </ThemedContainer>
            <ThemedContainer className="space-y-4 max-w-[592px]">
              {quickActions.map((action, index) => (
                <ThemedContainer
                  key={index}
                  className="flex items-center justify-between w-full cursor-pointer transition"
                  style={{
                    background: Colors.primary.base.white,
                    padding: "16px 20px",
                    borderRadius: "12px",
                    border: `1px solid ${Colors.primary.gray.neutral200}`,
                  }}
                >
                  <ThemedContainer className="flex flex-col">
                    <Typography
                      className="!text-[24px] !font-[500] leading-[32px]"
                      style={{ color: Colors.primary.base.black }}
                    >
                      {action.label}
                    </Typography>

                    {action.description && (
                      <Typography
                        className="!text-[18px] !font-[400] mt-[8px] leading-[24px]"
                        style={{ color: Colors.primary.gray.neutral600 }}
                      >
                        {action.description}
                      </Typography>
                    )}
                  </ThemedContainer>

                  <ThemedIcon
                    icon={action.icon}
                    variant="outline"
                    size="24px"
                    color={Colors.primary.base.black}
                  />
                </ThemedContainer>
              ))}
            </ThemedContainer>
          </ThemedContainer>
        </ThemedContainer>
      </ThemedContainer>

      {/* FAQ Section */}
      <ThemedContainer className="py-16 px-8 bg-white">
        <ThemedContainer className="max-w-7xl mx-[80px]">
          <ThemedContainer>
            <ThemedContainer className="mb-[16px]">
              <Typography
                className="!font-[600] !text-[28px] md:!text-[40px] leading-[44px]"
                style={{ color: Colors.primary.gray.neutral1100 }}
              >
                Frequently Asked Questions
              </Typography>
            </ThemedContainer>
            <ThemedContainer className="mb-[60px]">
              <Typography
                className="!font-[500] !text-[20px] leading-[28px]"
                style={{ color: Colors.primary.gray.neutral600 }}
              >
                Explore Our FAQ for Quick Answers and Guidance
              </Typography>
            </ThemedContainer>
          </ThemedContainer>

          <Accordion items={faqItems} variant="compact" />
        </ThemedContainer>
      </ThemedContainer>

      {/* App Download Section */}
      <ThemedContainer className="bg-[#F7F7F8] relative overflow-hidden py-10 md:py-16">
        <ThemedContainer className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-4">
          {/* Left Image */}
          <ThemedContainer className="relative w-full md:w-1/2 max-w-[420px] h-[380px] flex justify-center md:justify-start">
            <Image
              src="/mobile-phones.png"
              alt="Two mobile phones"
              fill
              className="object-contain object-bottom"
            />
          </ThemedContainer>

          {/* Right Content */}
          <ThemedContainer className="w-full md:w-1/2 flex flex-col gap-6">
            {/* Text + QR Side by Side */}
            <ThemedContainer className="flex flex-row items-center justify-between gap-4">
              <Typography
                className="!font-[600] leading-[56px] !text-[28px] md:!text-[40px]"
                style={{ color: Colors.primary.gray.neutral1100 }}
              >
                Download the <br /> Coronation Wealth App
              </Typography>

              {/* QR Code */}
              <ThemedContainer className="relative w-[120px] h-[120px] md:w-[140px] md:h-[140px] flex-shrink-0  rounded-lg bg-white p-2">
                <Image
                  src="/qr-code.png"
                  alt="QR Code"
                  fill
                  className="object-contain"
                />
              </ThemedContainer>
            </ThemedContainer>

            {/* Download Badges */}
            <ThemedContainer className="flex flex-row flex-wrap gap-4">
              <ThemedContainer className="relative w-[160px] h-[52px]">
                <Image
                  src="/google-play.png"
                  alt="Google play badge"
                  fill
                  className="object-contain"
                />
              </ThemedContainer>

              <ThemedContainer className="relative w-[160px] h-[52px]">
                <Image
                  src="/app-store.png"
                  alt="App store badge"
                  fill
                  className="object-contain"
                />
              </ThemedContainer>
            </ThemedContainer>
          </ThemedContainer>
        </ThemedContainer>
      </ThemedContainer>

      {/* Footer */}
      <Footer />
    </ThemedContainer>
  );
};

export default Dashboard;
