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
import { DialogDescription } from "@/components/ui/dialog";

interface SlideoutProps {
  formTitle: string;
  buttonLabel: string;
  buttonStyle?: string;
  handleSubmit: () => void;
  isSheetOpen: boolean;
  setIsSheetOpen: (isSheetOpen: boolean) => void;
  children: ReactNode;
}

export const Slideout: React.FC<SlideoutProps> = ({
  formTitle,
  buttonLabel,
  buttonStyle,
  handleSubmit,
  isSheetOpen,
  setIsSheetOpen,
  children,
}) => {
  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetTrigger className={buttonStyle} asChild>
        <Button variant="outline">{buttonLabel}</Button>
      </SheetTrigger>

      <SheetContent className="overflow-scroll p-6">
        <SheetHeader>
          <SheetTitle>{formTitle}</SheetTitle>
          <DialogDescription>
            Fill in the details below to add a new{" "}
            {buttonLabel.split(" ").slice(1, 3).join(" ").toLowerCase()}.
          </DialogDescription>
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
