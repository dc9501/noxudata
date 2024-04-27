import React from 'react';

export type ButtonProps = {
  title: string;
  type?: 'default' | 'warning';
};

export default function Button({title, type = 'default'}: ButtonProps) {
  return (
    <button className={`${type === 'warning' ? 'border-[var(--clr-red)] text-[var(--clr-red)]' : 'border-[var(--clr-slate-300)] text-[var(--clr-slate-900)]' } bg-[var(--clr-slate-0)] border font-medium text-[0.875rem] rounded-[0.375rem] py-[0.5rem] px-[1rem]`}>{title}</button>
  )
}