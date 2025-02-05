import { cn } from "@/lib/utils";
import React from "react";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn("w-full border rounded-md px-3 py-2", className)}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = "Input";

export { Input };
