import React from 'react';
import Button from "@/components/Button";

type ButtonListProps = {
  titles: string[];
  className?: string;
}

export default function ButtonList({titles, className} : ButtonListProps) {
  return (
    <div className={`${className} flex gap-[1rem] p-[0.75rem]`}>
      {titles.map(title => (
        <Button key={title} title={title} />
      ))}
    </div>
  )
}
