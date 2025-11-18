"use client";
import { useState, useRef, useEffect } from "react";
import { Typography, Colors } from "@Coronation-ArchTouch/cor-ui";
import { Icon } from "@Coronation-ArchTouch/cor-ui-icons";

export interface HelperTextProps {
  text?: string;
  color?: string;
  icon?: React.ReactNode;
}

export interface SelectorOption {
  label: string;
  value: string;
}

export interface MultipleSelectorProps {
  options: SelectorOption[];
  placeholder?: string;
  label?: HelperTextProps;
  hint?: HelperTextProps;
  required?: boolean;
  value?: string[]; // multiple values
  onChange?: (values: string[], _options: SelectorOption[]) => void;
  onSearch?: (_searchTerm: string) => void;
  isDisabled?: boolean;
  width?: string | number;
  style?: React.CSSProperties;
  className?: string;
  searchPlaceholder?: string;
  noResultsText?: string;
  maxDropdownHeight?: string;
  borderRadius?: string;
}

const MultipleSelector = ({
  options = [],
  placeholder = "Select options",
  label,
  hint,
  required = false,
  value = [],
  onChange,
  onSearch,
  isDisabled = false,
  borderRadius = "10px",
  width = "100%",
  style = {},
  className = "",
  searchPlaceholder = "Search options...",
  noResultsText = "No options found",
  maxDropdownHeight = "200px",
}: MultipleSelectorProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const optionRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Filter options
  useEffect(() => {
    const filtered = options.filter(
      (option) =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
        option.value.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredOptions(filtered);
    setHighlightedIndex(-1);
    onSearch?.(searchTerm);
  }, [searchTerm, options, onSearch]);

  // Click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
        setSearchTerm("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Auto focus input
  useEffect(() => {
    if (isDropdownOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isDropdownOpen]);

  // Scroll highlighted option
  useEffect(() => {
    if (highlightedIndex >= 0 && optionRefs.current[highlightedIndex]) {
      optionRefs.current[highlightedIndex]?.scrollIntoView({
        block: "nearest",
        behavior: "smooth",
      });
    }
  }, [highlightedIndex]);

  const handleToggleDropdown = () => {
    if (!isDisabled) {
      setIsDropdownOpen(!isDropdownOpen);
      if (!isDropdownOpen) setSearchTerm("");
    }
  };

  const handleSelectOption = (option: SelectorOption) => {
    let newValues: string[];
    if (value.includes(option.value)) {
      // remove if already selected
      newValues = value.filter((v) => v !== option.value);
    } else {
      // add if not selected
      newValues = [...value, option.value];
    }
    const newOptions = options.filter((opt) => newValues.includes(opt.value));
    onChange?.(newValues, newOptions);
    setSearchTerm("");
  };

  const handleRemoveOption = (val: string) => {
    const newValues = value.filter((v) => v !== val);
    const newOptions = options.filter((opt) => newValues.includes(opt.value));
    onChange?.(newValues, newOptions);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isDropdownOpen) {
      if (e.key === "Enter" || e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        setIsDropdownOpen(true);
      }
      return;
    }

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev < filteredOptions.length - 1 ? prev + 1 : 0
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev > 0 ? prev - 1 : filteredOptions.length - 1
        );
        break;
      case "Enter":
        e.preventDefault();
        if (highlightedIndex >= 0 && filteredOptions[highlightedIndex]) {
          handleSelectOption(filteredOptions[highlightedIndex]);
        }
        break;
      case "Escape":
        setIsDropdownOpen(false);
        setSearchTerm("");
        break;
    }
  };

  const selectedOptions = options.filter((opt) => value.includes(opt.value));

  const containerStyle = {
    width,
    position: "relative" as const,
    ...style,
  };

  const dropdownStyle = {
    background: Colors.primary.base.white,
    borderRadius: "8px",
    position: "absolute" as const,
    top: "100%",
    left: 0,
    right: 0,
    border: `1px solid ${Colors.primary.gray.neutral200}`,
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    zIndex: 1000,
    marginTop: "4px",
    maxHeight: maxDropdownHeight,
    overflowY: "auto" as const,
  };

  const searchInputStyle = {
    width: "100%",
    padding: "8px 12px",
    border: "none",
    borderBottom: `1px solid ${Colors.primary.gray.neutral200}`,
    outline: "none",
    fontSize: "14px",
    color: Colors.primary.gray.neutral1000,
  };

  return (
    <div className={className} style={containerStyle}>
      {label && (
        <Typography style={{ color: label.color, fontSize: 14 }}>
          {label.text}
          {required && (
            <span style={{ color: Colors.primary.error.red500 }}>*</span>
          )}
        </Typography>
      )}

      <div ref={dropdownRef} style={{ position: "relative" }}>
        {/* Selected chips */}
        <div
          onClick={handleToggleDropdown}
          onKeyDown={handleKeyDown}
          tabIndex={isDisabled ? -1 : 0}
          className={`selector-wrapper ${isDropdownOpen ? "focused" : ""} ${
            !isDisabled ? "clickable" : ""
          } ${isDisabled ? "disabled" : ""}`}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "6px",
            padding: "10px 12px",
            border: `1px solid ${Colors.primary.gray.neutral200}`,
            borderRadius,
            background: isDisabled
              ? Colors.primary.gray.neutral200
              : Colors.primary.base.white,
            cursor: isDisabled ? "not-allowed" : "pointer",
            outline: "none",
          }}
        >
          {selectedOptions.length > 0 ? (
            selectedOptions.map((opt) => (
              <div
                key={opt.value}
                style={{
                  display: "flex",
                  alignItems: "center",
                  background: Colors.primary.gray.neutral25,
                  padding: "2px 6px",
                  borderRadius: "6px",
                  fontSize: "12px",
                }}
              >
                <Typography style={{ marginRight: 4 }}>{opt.label}</Typography>
                <Icon
                  icon="x-circle" // <-- your custom cancel icon
                  variant="outline"
                  size="12px"
                  color={Colors.primary.error.red700}
                  onClick={(e: MouseEvent) => {
                    e.stopPropagation();
                    handleRemoveOption(opt.value);
                  }}
                />
              </div>
            ))
          ) : (
            <Typography style={{ color: Colors.primary.gray.neutral700 }}>
              {placeholder}
            </Typography>
          )}
          <Icon
            icon={isDropdownOpen ? "caret-up" : "caret-down"}
            variant="outline"
            color={Colors.primary.gray.neutral500}
            style={{ marginLeft: "auto" }}
          />
        </div>

        {isDropdownOpen && !isDisabled && (
          <div style={dropdownStyle}>
            <input
              ref={searchInputRef}
              type="text"
              placeholder={searchPlaceholder}
              value={searchTerm}
              onChange={handleSearchChange}
              onKeyDown={handleKeyDown}
              style={searchInputStyle}
            />

            <div style={{ maxHeight: "150px", overflowY: "auto" }}>
              {filteredOptions.length > 0 ? (
                filteredOptions
                  .filter(
                    (option) =>
                      selectedOptions.findIndex(
                        (opt) => opt.value === option.value
                      ) === -1
                  )
                  .map((option, index) => (
                    <div
                      key={`${option.value}-${index}`}
                      ref={(el: HTMLDivElement | null) => {
                        optionRefs.current[index] = el;
                      }}
                      onClick={() => handleSelectOption(option)}
                      onMouseEnter={() => setHighlightedIndex(index)}
                      className="clickable selector-item"
                      style={{
                        padding: "10px 12px",
                        backgroundColor:
                          highlightedIndex === index
                            ? Colors.primary.gray.neutral100
                            : "transparent",
                        cursor: "pointer",
                      }}
                    >
                      <Typography
                        style={{ color: Colors.primary.gray.neutral1000 }}
                      >
                        {option.label}
                      </Typography>
                    </div>
                  ))
              ) : (
                <div style={{ padding: "10px 12px", textAlign: "center" }}>
                  <Typography style={{ color: Colors.primary.gray.neutral700 }}>
                    {noResultsText}
                  </Typography>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {hint && (
        <div className="flex items-start gap-1 mt-1">
          {hint.icon && (
            <span className="flex items-center mt-0.5 ">{hint.icon}</span>
          )}
          <Typography fontSize={14} style={{ color: hint.color }}>
            {hint.text}
          </Typography>
        </div>
      )}
    </div>
  );
};

export default MultipleSelector;
