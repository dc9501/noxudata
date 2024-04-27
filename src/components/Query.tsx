"use client";

import React, { useRef, useEffect } from 'react';
import Notification from "@/components/Notification";
import ButtonList from "@/components/ButtonList";
import type { Query } from "@/lib/types";

type QueryProps = {
  queryData: Query[];
};

export default function Query({queryData}: QueryProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    dialogRef.current?.show();
    dialogRef.current.blur();
  }, []);

  const handleClose = () => {
    console.log('Notification dialog closed.');
    dialogRef.current?.close()
  }

  return (
    <div className="rounded-[0.75rem] overflow-hidden border border-[var(--clr-slate-300)] mt-[1rem] [@media(min-width:37em)]:ml-[3.5rem]">
      <table className="bg-[var(--clr-slate-0)] w-full">
          <thead className="text-left text-[var(--clr-slate-500)]">
            <tr className="border-b border-b-[var(--clr-slate-300)]">
              <th className="[@media(max-width:34.75em)]:hidden font-medium py-[0.5rem] bg-[url('/images/chevrons-up-down.png')] bg-no-repeat bg-[left_1.5ch_center] focus:cursor-pointer hover:cursor-pointer"></th>
              <th className="[@media(max-width:34.75em)]:hidden font-medium py-[0.5rem] bg-[url('/images/chevrons-up-down.png')] bg-no-repeat bg-[left_5ch_center] focus:cursor-pointer hover:cursor-pointer">Name</th>
              <th className="[@media(max-width:34.75em)]:hidden font-medium py-[0.5rem]">Industry</th>
              <th className="[@media(max-width:34.75em)]:hidden font-medium py-[0.5rem] bg-[url('/images/chevrons-up-down.png')] bg-no-repeat bg-[left_4ch_center] focus:cursor-pointer hover:cursor-pointer">City</th>
              <th className="[@media(max-width:34.75em)]:hidden font-medium py-[0.5rem] bg-[url('/images/chevrons-up-down.png')] bg-no-repeat bg-[left_5ch_center] focus:cursor-pointer hover:cursor-pointer">State</th>
              <th className="[@media(max-width:34.75em)]:hidden font-medium py-[0.5rem]">Segment</th>
              <th className="[@media(max-width:34.75em)]:hidden font-medium py-[0.5rem] bg-[url('/images/chevrons-up-down.png')] bg-no-repeat bg-[left_8ch_center] focus:cursor-pointer hover:cursor-pointer">Owner ID</th>
            </tr>
          </thead>
          <tbody>
            {queryData.map(({id, nameId, name, industry, city, state, segment, ownerId}) => (
              <tr key={id} className="border-b border-b-[var(--clr-slate-300)]">
                <td data-heading="Name Id: " className="[@media(max-width:34.75em)]:block [@media(max-width:34.75em)]:before:content-[attr(data-heading)] [@media(max-width:34.75em)]:pb-[0] py-[0.5rem] pl-[1rem]">{nameId}</td>
                <td data-heading="Name: " className="[@media(max-width:34.75em)]:block [@media(max-width:34.75em)]:before:content-[attr(data-heading)] [@media(max-width:34.75em)]:py-[0] [@media(max-width:34.75em)]:pl-[1rem] py-[0.5rem]">{name}</td>
                <td data-heading="Industry: " className="[@media(max-width:34.75em)]:block [@media(max-width:34.75em)]:before:content-[attr(data-heading)] [@media(max-width:34.75em)]:py-[0] [@media(max-width:34.75em)]:pl-[1rem] py-[0.5rem]">{industry}</td>
                <td data-heading="City: " className="[@media(max-width:34.75em)]:block [@media(max-width:34.75em)]:before:content-[attr(data-heading)] [@media(max-width:34.75em)]:py-[0] [@media(max-width:34.75em)]:pl-[1rem] py-[0.5rem]">{city}</td>
                <td data-heading="State: " className="[@media(max-width:34.75em)]:block [@media(max-width:34.75em)]:before:content-[attr(data-heading)] [@media(max-width:34.75em)]:py-[0] [@media(max-width:34.75em)]:pl-[1rem] py-[0.5rem]">{state}</td>
                <td data-heading="Segment: " className="[@media(max-width:34.75em)]:block [@media(max-width:34.75em)]:before:content-[attr(data-heading)] [@media(max-width:34.75em)]:py-[0] [@media(max-width:34.75em)]:pl-[1rem] py-[0.5rem]">{segment}</td>
                <td data-heading="Owner ID: " className="[@media(max-width:34.75em)]:block [@media(max-width:34.75em)]:before:content-[attr(data-heading)] [@media(max-width:34.75em)]:py-[0] [@media(max-width:34.75em)]:pl-[1rem] [@media(max-width:34.75em)]:pb-[0.5rem] py-[0.5rem]">{ownerId}</td>
              </tr>
            ))}
          </tbody>
      </table>
      <Notification onClose={handleClose} ref={dialogRef} />
      <ButtonList titles={["Show Full List", "Show Query", "Show Chart", "Pin to Dashboard"]} className="bg-[var(--clr-slate-0)] flex-wrap [@media(min-width:29rem)]:flex-nowrap" />
    </div>
  )
}
