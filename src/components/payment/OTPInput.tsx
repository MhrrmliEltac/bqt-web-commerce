import { useMemo } from "react";
import { RE_DIGIT } from "../../lib/constants";

type Props = {
  value: string;
  valueLength: number;
  onChange: (value: string) => void;
};

const OTPInput: React.FC<Props> = ({ value, valueLength, onChange }) => {
  const valueItems = useMemo(() => {
    const valueArray = value.split("");
    const items: Array<string> = [];

    for (let i = 0; i < valueLength; i++) {
      const char = valueArray[i];

      if (RE_DIGIT.test(char)) {
        items.push(char);
      } else {
        items.push("");
      }
    }

    return items;
  }, [value, valueLength]);

  const inputOnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: number
  ) => {
    const target = e.target;
    let targetValue = target.value.trim();
    const isTargetValueDigit = RE_DIGIT.test(targetValue);

    if (!isTargetValueDigit && targetValue !== "") {
      return;
    }

    targetValue = isTargetValueDigit ? targetValue : "";

    const newValue =
      value.substring(0, idx) + targetValue + value.substring(idx + 1);

    onChange(newValue);

    if (isTargetValueDigit) {
      const nextElementSibling =
        target.nextElementSibling as HTMLInputElement | null;
      if (nextElementSibling) {
        nextElementSibling.focus();
      }
    }
  };

  const inputOnKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    idx: number
  ) => {
    if (e.key === "Backspace") {
      e.preventDefault();

      const newValue = value.substring(0, idx) + "" + value.substring(idx + 1);
      onChange(newValue);

      // Əvvəlki inputa fokuslanır
      if (idx > 0) {
        const prevElementSibling = e.currentTarget
          .previousElementSibling as HTMLInputElement | null;
        if (prevElementSibling) {
          prevElementSibling.focus();
        }
      }
    }
  };

  const inputOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.setSelectionRange(0, e.target.value.length);
  };

  const inputOnPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").trim();

    if (!/^\d+$/.test(pastedData)) {
      return;
    }

    const newValueArray = value.split("");
    pastedData.split("").forEach((char, i) => {
      if (i < valueLength && RE_DIGIT.test(char)) {
        newValueArray[i] = char;
      }
    });

    onChange(newValueArray.join(""));
  };

  return (
    <>
      {valueItems.map((digit, idx) => (
        <input
          key={idx}
          type="text"
          inputMode="numeric"
          autoComplete="one-time-code"
          maxLength={1}
          pattern="\d{1}"
          value={digit}
          className="aspect-square text-center border text-xl focus:border-[#2C4B42] dark:text-white bg-transparent rounded-[20px] focus:outline-none focus:ring-2 duration-200 focus:ring-transparent border-[#2C4B42] focus:ring-offset-0 font-kodchasan"
          onChange={(e) => inputOnChange(e, idx)}
          onKeyDown={(e) => inputOnKeyDown(e, idx)}
          onFocus={inputOnFocus}
          onPaste={inputOnPaste}
        />
      ))}
    </>
  );
};

export default OTPInput;
