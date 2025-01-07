import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface EmailInputProps {
  className?: string;
}

export default function EmailInput({ className }: EmailInputProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor="emailInput">
        Email <span className="text-destructive">*</span>
      </Label>
      <Input
        id="input-02"
        placeholder="Email"
        type="email"
        required
        className={className}
      />
    </div>
  );
}
