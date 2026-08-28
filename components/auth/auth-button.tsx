import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

interface Props {
  label: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  form?: string;
}

export default function AuthButton({ label, className, type, form }: Props) {
  return (
    <Button
      className={cn("w-full rounded-lg px-4 py-6", className)}
      variant={"default"}
      type={type}
      form={form}
    >
      {label}
    </Button>
  );
}
