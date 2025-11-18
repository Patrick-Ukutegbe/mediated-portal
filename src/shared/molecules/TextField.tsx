"use client";
import { HTMLInputTypeAttribute, useState, useRef, useEffect } from "react";
import { Typography, Colors } from "@Coronation-ArchTouch/cor-ui";
import { Icon } from "@Coronation-ArchTouch/cor-ui-icons";
import useIsMobile from "../hooks/useIsMobile";

interface HelperTextProps {
  text?: string;
  color?: string;
  style?: React.CSSProperties;
  icon?: React.ReactNode;
}

interface SelectorPrefixProps {
  default?: string;
  list: { label: string; value: string }[];
}

interface TextFieldProps {
  type: HTMLInputTypeAttribute | "textArea";
  isPassword?: boolean;
  placeholder?: string;
  label?: HelperTextProps;
  hint?: HelperTextProps;
  required?: boolean;
  selectorPrefix?: SelectorPrefixProps;
  select?: SelectorPrefixProps;
  outlineColor?: string;
  backgroundColor?: string;
  prefixIcon?: React.JSX.Element;
  suffixIcon?: React.JSX.Element;
  onChange?: (e: any, value?: string) => void;
  onSelectorPrefixChange?: (e: any) => void;
  width?: string | number;
  style?: React.CSSProperties;
  rows?: number;
  textAreaStyle?: React.CSSProperties;
  value?: string | number;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onPaste?: (e: React.ClipboardEvent) => void;
  ref?: React.Ref<HTMLInputElement>;
  maxLength?: number;
  inputMode?: "numeric" | "text" | "tel" | "email" | "url";
  pattern?: string;
  className?: string;
  structure?: "otp" | "default";
  isDisabled?: boolean;
  inputStyle?: React.CSSProperties;
  borderRadius?: string;
  [key: string]: any;
}

const TextField = ({
  type = "text",
  placeholder,
  label,
  hint,
  required,
  outlineColor,
  backgroundColor,
  selectorPrefix,
  select,
  prefixIcon,
  suffixIcon,
  onChange,
  style,
  width = "100%",
  rows,
  textAreaStyle,
  onSelectorPrefixChange,
  value,
  onKeyDown,
  onPaste,
  ref,
  // maxLength,
  // inputMode,
  // pattern,
  className,
  structure = "default",
  isDisabled,
  // inputStyle,
  ...props
}: TextFieldProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordOpen, setIsPasswordOpen] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const isMobile = useIsMobile();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        !isDisabled &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isDisabled]);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

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
    zIndex: 1000,
    marginTop: "4px",
    maxWidth: "100%",
  };

  return (
    <div
      className={
        !isMobile
          ? select || type === "textArea"
            ? ""
            : "input-container"
          : ""
      }
      style={containerStyle}
    >
      <Typography
        style={{ color: label?.color, fontSize: 14, ...label?.style }}
      >
        {label?.text}
        {required && (
          <span style={{ color: Colors.primary.error.red500 }}>*</span>
        )}
      </Typography>
      {select ? (
        <div style={{ width: "100%", position: "relative" }} ref={dropdownRef}>
          <div
            onClick={() =>
              !isDisabled &&
              !props.disabled &&
              setIsDropdownOpen(!isDropdownOpen)
            }
            className={`selector-wrapper ${isFocused ? "focused" : ""} ${
              select && !props.disabled ? "clickable" : ""
            } ${props.disabled || isDisabled ? "disabled" : ""}`}
            style={{
              borderColor: outlineColor,
              background:
                props.disabled || isDisabled
                  ? Colors.primary.gray.neutral200
                  : backgroundColor,
            }}
          >
            {prefixIcon && (
              <div className="input-prefix-icon">{prefixIcon}</div>
            )}
            <div style={{ flex: 1 }}>
              {value ? (
                <Typography style={{ color: Colors.primary.gray.neutral1100 }}>
                  {value}
                </Typography>
              ) : (
                <Typography style={{ color: Colors.primary.gray.neutral700 }}>
                  {placeholder}
                </Typography>
              )}
            </div>
            <div className="input-prefix-icon">
              <Icon
                icon={isDropdownOpen ? "caret-up" : "caret-down"}
                variant="outline"
                color={Colors.primary.gray.neutral500}
                onClick={() =>
                  !isDisabled && setIsDropdownOpen(!isDropdownOpen)
                }
              />
            </div>
          </div>
          {!isDisabled && isDropdownOpen && (
            <div style={dropdownStyle} className={isDisabled ? "disabled" : ""}>
              {select.list.map((item, i) => (
                <div
                  className="clickable selector-item"
                  key={i}
                  onClick={() => {
                    setIsDropdownOpen(false);
                    onChange?.(item.value, item.value);
                  }}
                  style={{ padding: "10px" }}
                >
                  <Typography>{item.label}</Typography>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : type === "textArea" ? (
        <div>
          <textarea
            className="input-field"
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={(e) => {
              onChange?.(e.target.value);
            }}
            placeholder={placeholder}
            value={value}
            rows={rows}
            style={{
              width: "100%",
              background: Colors.primary.base.white,
              padding: "10px 12px",
              minHeight: "133px",
              ...textAreaStyle,
            }}
          />
        </div>
      ) : (
        <div
          className={`input-wrapper ${isFocused ? "focused" : ""}`}
          style={{
            borderColor: outlineColor,
            borderRadius: props.borderRadius ?? "10px",
            background:
              props.disabled || isDisabled
                ? Colors.primary.gray.neutral200
                : backgroundColor,
            ...style,
          }}
        >
          {type === "password" ? (
            <div className="input-prefix-icon">
              <Icon
                icon="lock"
                variant="outline"
                color={Colors.primary.gray.neutral500}
              />
            </div>
          ) : selectorPrefix ? (
            <div className="input-prefix-icon">
              <select
                onChange={(e) =>
                  onSelectorPrefixChange &&
                  onSelectorPrefixChange(e.target.value)
                }
                style={{ color: Colors.primary.gray.neutral1100 }}
                disabled={props.disabled || isDisabled}
              >
                {selectorPrefix.list.map((item, i) => (
                  <option
                    key={i}
                    value={item.value}
                    label={item.label}
                    style={{ color: Colors.primary.gray.neutral1100 }}
                  >
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
          ) : (
            prefixIcon && <div className="input-prefix-icon">{prefixIcon}</div>
          )}
          <input
            type={
              type === "password"
                ? isPasswordOpen
                  ? "text"
                  : "password"
                : type
            }
            autoComplete="chrome-off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            autoSave="off"
            autoFocus={false}
            placeholder={placeholder}
            className={`input-field ${className}`}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={(e) => {
              onChange?.(e.target.value);
            }}
            style={{ padding: structure === "otp" ? " 0 8px" : "" }}
            value={value}
            onKeyDown={onKeyDown}
            onPaste={onPaste}
            ref={ref}
            // disabled={isDisabled}
            // {...props}
          />
          {select ? (
            <div className="input-prefix-icon">
              <Icon
                icon="caret-down"
                variant="outline"
                color={Colors.primary.gray.neutral500}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              />
            </div>
          ) : type === "password" ? (
            <div className="input-prefix-icon">
              <Icon
                icon={!isPasswordOpen ? "eye" : "eye-slash"}
                variant="outline"
                color={Colors.primary.gray.neutral500}
                onClick={() => setIsPasswordOpen(!isPasswordOpen)}
              />
            </div>
          ) : (
            suffixIcon && <div className="input-suffix-icon">{suffixIcon}</div>
          )}
        </div>
      )}
      {hint && (hint.text || hint.icon) && (
        <div className="flex items-center gap-1 mt-1" style={hint.style}>
          {hint.icon}
          <Typography fontSize={14} style={{ color: hint?.color }}>
            {hint.text}
          </Typography>
        </div>
      )}
    </div>
  );
};

export const OtpInput = ({
  length = 6,
  onChange,
  className,
  isError = false,
}: {
  length?: number;
  onChange?: (_otp: string) => void;
  className?: string;
  isError?: boolean;
}) => {
  const [otp, setOtp] = useState<string[]>(new Array(length).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    // Initialize refs array
    inputRefs.current = inputRefs.current.slice(0, length);
  }, [length]);

  const handleChange = (index: number, value: string) => {
    if (isNaN(Number(value))) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    // Call onChange with complete OTP
    const otpString = newOtp.join("");
    onChange?.(otpString);
    setValue(otpString);

    // Move to next input if value is entered
    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      // Move to previous input on backspace if current input is empty
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, length);
    const pastedArray = pastedData
      .split("")
      .map((char) => (isNaN(Number(char)) ? "" : char));

    setOtp((prev) => {
      const newOtp = [...prev];
      pastedArray.forEach((value, index) => {
        if (index < length) newOtp[index] = value;
      });
      return newOtp;
    });

    if (
      pastedArray.length === length &&
      pastedArray.every((value) => value !== "") &&
      !isNaN(Number(pastedData))
    ) {
      setValue(pastedData);
      onChange?.(pastedData);
    }

    // Focus last input or first empty input
    const lastFilledIndex = pastedArray.length - 1;
    if (lastFilledIndex >= 0 && lastFilledIndex < length) {
      inputRefs.current[lastFilledIndex]?.focus();
    }
  };

  return (
    <div className="flex gap-2 w-full">
      {otp.map((digit, index) => (
        <TextField
          key={index}
          structure="otp"
          type="text"
          value={digit}
          outlineColor={
            isError
              ? Colors.primary.error.red300
              : length === value.length
              ? Colors.primary.brand.purple600
              : Colors.primary.gray.neutral200
          }
          style={{
            width: "50px",
            flex: 1,
            textAlign: "center",
            marginRight:
              length % 2 === 0 && length / 2 === index + 1 ? "30px" : "0px",
          }}
          inputStyle={{
            minHeight: "70px",
          }}
          className={`px-auto ${className}`}
          onChange={(e) => handleChange(index, e)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          onPaste={handlePaste}
          ref={(el) => {
            if (el) {
              inputRefs.current[index] = el;
            }
          }}
          maxLength={1}
          inputMode="numeric"
          pattern="\d*"
        />
      ))}
    </div>
  );
};

export const FileInput = ({
  label,
  onChange,
  className,
  accept,
  multiple,
  required,
  hint,
  placeholder = "Choose file",
  value,
}: {
  label: string;
  onChange: (_e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  accept?: string;
  multiple?: boolean;
  required?: boolean;
  hint?: HelperTextProps;
  placeholder?: string;
  value?: string;
}) => {
  const [fileName, setFileName] = useState<string>(value || "");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setFileName(multiple ? `${files.length} files selected` : files[0].name);
    }
    onChange(e);
  };

  return (
    <div className={className}>
      <Typography style={{ fontSize: 14 }}>
        {label}
        {required && (
          <span style={{ color: Colors.primary.error.red500 }}>*</span>
        )}
      </Typography>
      <div
        className="input-wrapper"
        style={{
          border: `1px solid ${Colors.primary.gray.neutral200}`,
          borderRadius: "8px",
          padding: "10px 12px",
          background: Colors.primary.base.white,
          cursor: "pointer",
        }}
        onClick={() => fileInputRef.current?.click()}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Icon
            icon={fileName ? "link" : "upload"}
            variant="outline"
            color={Colors.primary.gray.neutral500}
          />
          <Typography
            className="line-clamp-1"
            style={{
              color: fileName ? Colors.primary.gray.neutral1100 : "#888991",
            }}
          >
            {fileName || placeholder}
          </Typography>
        </div>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept={accept}
          multiple={multiple}
          style={{ display: "none" }}
        />
      </div>
      {hint && (hint.text || hint.icon) && (
        <div className="flex items-center gap-1 mt-1" style={hint.style}>
          {hint.icon}
          <Typography fontSize={14} style={{ color: hint.color }}>
            {hint.text}
          </Typography>
        </div>
      )}
    </div>
  );
};

export default TextField;
