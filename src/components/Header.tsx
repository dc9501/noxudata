import React from 'react';
import Image from "next/image";
import avatar from "^/public/images/avatar.jpg";

export default function Header() {
  return (
    <div className="bg-[var(--clr-slate-0)] py-[2rem] w-full">
      <div className="w-[min(100%-2rem,800px)] mx-auto flex items-center gap-[1rem]">
        <Image
          src={avatar}
          alt="Avatar"
          className=""
        />
        <h1>List my top 10 accounts</h1>
      </div>
    </div>
  )
}