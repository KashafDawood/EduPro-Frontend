import React, { useState } from "react";
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandItem,
} from "@/components/ui/command";

interface AutocompleteProps {
  options: string[];
  placeholder?: string;
  onSelect: (value: string) => void;
}

export const Autocomplete: React.FC<AutocompleteProps> = ({
  options,
  placeholder,
  onSelect,
}) => {
  const [query, setQuery] = useState("");

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Command>
      {/* Input Field */}
      <CommandInput
        placeholder={placeholder || "Search..."}
        onValueChange={(value) => setQuery(value)}
      />

      {/* List of Filtered Options */}
      <CommandList>
        {filteredOptions.length > 0 ? (
          filteredOptions.map((option) => (
            <CommandItem key={option} onSelect={() => onSelect(option)}>
              {option}
            </CommandItem>
          ))
        ) : (
          <CommandEmpty>No results found.</CommandEmpty>
        )}
      </CommandList>
    </Command>
  );
};
