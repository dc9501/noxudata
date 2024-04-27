import React from 'react';

type MessageBoxProps = {
  className?: string;
}

export default function MessageBox({ className }: MessageBoxProps) {
  return (
    <div className={`${className} flex items-center border border-[var(--clr-slate-300)] rounded-[0.375rem] overflow-hidden`}>
      <div className="bg-[url('/images/message-circle.png')] bg-no-repeat bg-[left_0.75rem_center] pl-[2.75rem] border-r border-r[var(--clr-slate-300)] py-[0.5rem]">
        <select className="appearance-none bg-[var(--clr-slate-0)] bg-[url('/images/chevrons-up-down.png')] bg-no-repeat bg-[right_0.75rem_center] pr-[2.25rem] focus:cursor-pointer hover:cursor-pointer">
          <option value="chat">Chat</option>
        </select>
      </div>
      <input type="text" placeholder="Start a new chat" className="w-full pl-[0.75rem] py-[0.5rem] pr-[2.75rem] bg-[url('/images/send.svg')] bg-no-repeat bg-[right_0.5rem_center]" />
    </div>
  );
}
