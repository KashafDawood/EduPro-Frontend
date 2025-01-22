import React, { ReactNode } from "react";
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

interface SlideoutProps {
  formTitle: string;
  buttonLabel: string;
  buttonStyle?: string;
  handleSubmit: () => void;
  children: ReactNode;
}

export const Slideout: React.FC<SlideoutProps> = ({
  formTitle,
  buttonLabel,
  buttonStyle,
  handleSubmit,
  children,
}) => {
  return (
    <Sheet>
      <SheetTrigger className={buttonStyle} asChild>
        <Button variant="outline">{buttonLabel}</Button>
      </SheetTrigger>

      <SheetContent className="overflow-scroll p-6">
        <SheetHeader>
          <SheetTitle>{formTitle}</SheetTitle>
        </SheetHeader>

        <div className="mt-4">{children}</div>

        <SheetFooter className="mt-6">
          <SheetClose asChild>
            <Button onClick={handleSubmit}>Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
