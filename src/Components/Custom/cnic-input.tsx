import * as React from "react";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";
import type { OTPInputProps } from "input-otp";
import { cn } from "@/lib/utils";

export interface CNICInputProps
  extends Omit<OTPInputProps, "value" | "onChange" | "maxLength" | "render"> {
  value?: string;
  onChange?: (value: string) => void;
}

const CNICInput = React.forwardRef<
  React.ElementRef<typeof InputOTP>,
  CNICInputProps
>(({ onChange, value = "", className, ...props }, ref) => {
  const handleValueChange = (newValue: string) => {
    const formattedValue = newValue.replace(
      /^(\d{5})(\d{7})(\d{1})$/,
      "$1-$2-$3"
    );
    onChange?.(formattedValue);
  };

  return (
    <div className="flex justify-center w-full">
      <InputOTP
        ref={ref}
        maxLength={13}
        value={value.replace(/[^0-9]/g, "")}
        onChange={handleValueChange}
        {...props}
      >
        <InputOTPGroup className={cn("gap-0.5 scale-100", className)}>
          {Array.from({ length: 13 }).map((_, idx) => (
            <React.Fragment key={idx}>
              <InputOTPSlot
                index={idx}
                className="h-8 w-6 rounded-none text-xs"
              />
              {/* {(idx === 4 || idx === 11) && (
                <span className="flex w-1.5 justify-center text-muted-foreground text-xs">
                  -
                </span>
              )} */}
            </React.Fragment>
          ))}
        </InputOTPGroup>
      </InputOTP>
    </div>
  );
});
CNICInput.displayName = "CNICInput";

export { CNICInput };
