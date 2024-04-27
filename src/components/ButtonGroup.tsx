import React from 'react';

type ButtonGroupProps = {
  first: string;
  last: string;
  className?: string;
}

export default function ButtonGroup({first, last, className}: ButtonGroupProps) {
  return (
    <div className={`${className} bg-[var(--clr-slate-0)] inline-block border border-[var(--clr-slate-300)] rounded-[0.375rem] text-[var(--clr-orange)] font-semibold`}>
      <button className={`py-[0.375rem] pr-[0.75rem] pl-[2rem] border-r-[1px] border-[var(--clr-slate-300)] bg-[url('/images/alert-circle.png')] bg-no-repeat bg-[left_0.375rem_center]`}>{first}</button>
      <button className={`py-[0.375rem] pl-[0.75rem] pr-[2rem] bg-[url('/images/arrow-right.png')] bg-no-repeat bg-[right_0.375rem_center]`}>{last}</button>
    </div>
  );
}
