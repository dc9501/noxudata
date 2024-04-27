"use client";

import React, {forwardRef} from 'react';
import Image from "next/image";
import close from "^/public/images/x.png";

type NotificationProps = {
  onClose: () => void
};

const Notification = forwardRef<HTMLDialogElement, NotificationProps>(({onClose}, ref) => {
  return (
    <dialog ref={ref} className="static m-0 w-full py-[0.5rem] pl-[2.375rem] border-b border-b-[var(--clr-slate-300)] bg-[url('/images/info.png')] bg-no-repeat bg-[left_0.75rem_center] bg-[var(--clr-slate-100)] text-[var(--clr-slate-600)] font-semibold flex items-center">
      Only X rows are shown. View full list for more
      <a onClick={onClose} className="focus:cursor-pointer hover:cursor-pointer ml-auto pr-[0.75rem]">
      <Image
        src={close}
        alt="Close"
      />
      </a>
    </dialog>
  )
});

export default Notification;
