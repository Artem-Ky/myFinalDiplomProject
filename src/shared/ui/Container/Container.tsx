import { cn } from "@/shared/lib/utils";
import React from "react";

interface Props {
  className?: string;
}

export const Container: React.FC<React.PropsWithChildren<Props>> = ({
  className,
  children,
}) => {
  return (
    <div
    className={cn(
      "mx-auto max-w-full",  // по умолчанию контейнер занимает всю ширину
      "sm:max-w-[640px]",
      "md:max-w-[768px]",
      "lg:max-w-[1024px]",
      "xl:max-w-[1280px]",
      className
    )}
  >
    {children}
  </div>
  );
};
