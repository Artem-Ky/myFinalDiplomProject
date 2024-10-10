"use client";

import { cn } from "@/shared/lib/utils";
import React from "react";
import { Container } from "@/shared/ui/Container";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn("border-b", className)}>
      <Container className="flex items-center justify-between py-8">

      </Container>
    </header>
  );
};
