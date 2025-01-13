import React, { ReactNode, useEffect } from "react";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FieldValues, UseFormReset } from "react-hook-form";

interface SlideoutProps {
  formTitle: string;
  buttonLabel: string;
  buttonStyle: string;
  handleSubmit: () => void;
  children: ReactNode;
  reset: UseFormReset<FieldValues>;
}

export const Slideout: React.FC<SlideoutProps> = ({
  formTitle,
  buttonLabel,
  handleSubmit,
  buttonStyle,
  children,
  reset,
}) => {
  useEffect(() => {
    return () => {
      reset();
    };
  }, [reset]);

  return (
    <Sheet>
      {/* Trigger Button */}
      <SheetTrigger className={`${buttonStyle}`} asChild>
        <Button variant="outline">{buttonLabel}</Button>
      </SheetTrigger>

      {/* Slideout Content */}
      <SheetContent className="overflow-scroll">
        {/* Header */}
        <SheetHeader>
          <SheetTitle>{formTitle}</SheetTitle>
        </SheetHeader>

        {/* Content */}
        <div className="mt-4">{children}</div>

        {/* Footer */}
        <SheetFooter>
          <SheetClose asChild>
            <Button onClick={handleSubmit}>Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
