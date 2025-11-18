import { Colors, Typography } from "@Coronation-ArchTouch/cor-ui";
import ThemedIcon from "../themedComponents/ThemedIcon";
import { useState } from "react";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  variant?: "compact" | "separate";
  index?: number;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  index,
  title,
  children,
  variant = "compact",
}) => {
  const [isOpen, setIsOpen] = useState(index === 0);

  return (
    <div
      className={`accordion-item ${variant}`}
      style={{ color: Colors.primary.base.white }}
    >
      <button
        className={`accordion-button ${variant}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Typography
          className="!text-[14px] md:!text-[18px] !leading-[24px]"
          style={{ color: Colors.primary.gray.neutral900, fontWeight: 600 }}
        >
          {title}
        </Typography>
        <span className={`accordion-icon`}>
          <ThemedIcon
            icon={isOpen ? "caret-down" : "caret-right"}
            variant="outline"
          />
        </span>
      </button>
      <div className={`accordion-content ${isOpen ? "open" : ""} ${variant}`}>
        {variant === "separate" ? (
          children
        ) : (
          <Typography style={{ color: "#7D828B" }}>
            {children}
          </Typography>
        )}
      </div>
    </div>
  );
};

interface AccordionProps {
  items: {
    title: string;
    content: React.ReactNode;
  }[];
  variant?: "compact" | "separate";
}

const Accordion: React.FC<AccordionProps> = ({
  items,
  variant = "compact",
}) => {
  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem
          index={index}
          key={index}
          title={item.title}
          variant={variant}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;
