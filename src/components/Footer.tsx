import React from 'react';
import ButtonList from './ButtonList';
import MessageBox from '@/components/MessageBox';
import Button from '@/components/Button';

export default function Footer() {
  return (
    <div className="bg-[var(--clr-slate-0)] w-full pb-[2rem]">
      <div className="w-[min(100%-2rem,800px)] mx-auto">
        <ButtonList titles={["Suggest question 1", "Suggest question 2", "Suggest question 3"]} className="px-0 " />
        <div className="flex gap-[1rem] w-full">
          <MessageBox className="grow" />
          <Button title="End Chat" type="warning" />
        </div>
      </div>
    </div>
  )
}