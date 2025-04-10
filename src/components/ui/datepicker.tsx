import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

interface DatePickerProps {
  selected?: Date;
  onSelect: (date: Date | undefined) => void;
  placeholder?: string;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  selected,
  onSelect,
  placeholder,
}) => {
  const [month, setMonth] = React.useState<Date>(selected || new Date());
  const [isOpen, setIsOpen] = React.useState(false);

  const handleSelect = (date: Date | undefined) => {
    onSelect(date);
    setIsOpen(false);
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger
        className={cn(!selected && "text-muted-foreground")}
        asChild
      >
        <Button variant="outline" className="w-full justify-between">
          {selected
            ? `${format(selected, "PPP")}`
            : placeholder || "Pick a date"}
          <CalendarIcon className="ml-2 h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <DayPicker
          mode="single"
          selected={selected}
          onSelect={handleSelect}
          month={month}
          onMonthChange={setMonth}
          fromYear={1950} // Adjust as needed
          toYear={2050} // Adjust as needed
          captionLayout="dropdown" // Enables month & year dropdowns
          pagedNavigation
        />
      </PopoverContent>
    </Popover>
  );
};
