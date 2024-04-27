import React from 'react';
import type {User, Message} from '@/lib/types';
import ButtonGroup from '@/components/ButtonGroup';
import Query from '@/components/Query';
import Image from "next/image";
import logoMark from "^/public/images/logo-mark.svg";

type ChatMessageProps = {
  user: User;
  message: Message;
}

export default function ChatMessage({ user, message }: ChatMessageProps) {
  return (
    <div>
      {user.name === "NoxuDataBot" && (
        <ButtonGroup first="Not Confident" last="Human Help" />
      )} 
      <div className="flex items-center gap-[1rem] mt-[1rem]">
        <Image
          src={logoMark}
          alt="Logo Mark"
        /> 
        <p>{message.text}</p>
      </div>
      {message.query && <Query queryData={message.query} /> }
    </div>
  );
}
