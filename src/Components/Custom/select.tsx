import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CustomSelectProps {
  onChange: (value: string) => void;
  value: string;
  field: {
    name: string;
    label: string;
    options: string[];
  };
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  onChange,
  value,
  field,
}) => {
  return (
    <Select onValueChange={onChange} value={value ?? undefined}>
      <SelectTrigger
        id={field.name}
        className={value ? "" : "text-muted-foreground"}
      >
        <SelectValue placeholder={`Select ${field.label}`} />
      </SelectTrigger>
      <SelectContent>
        {field.options.map((option: string) => (
          <SelectItem key={option} value={option}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default CustomSelect;
