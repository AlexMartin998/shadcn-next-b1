'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

export type PageProps = {};

const SHEET_SIDES = ['top', 'right', 'bottom', 'left'] as const;

const Page: React.FC<PageProps> = () => {
  const [name, setName] = useState('Pedro Duarte');
  const [username, setUsername] = useState('pedro');

  return (
    <div className="grid grid-cols-2 gap-2">
      {SHEET_SIDES.map(side => (
        // ======================== Sheet ========================
        <Sheet key={side}>
          {/* ============== Trigger ============== */}
          <SheetTrigger asChild>
            <Button variant="outline">Open {side} sheet</Button>
          </SheetTrigger>

          {/* ============== Content ============== */}
          <SheetContent side={side}>
            {/* ---------- Header ---------- */}
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when you&apos;re
                done.
              </SheetDescription>
            </SheetHeader>

            {/* ---------- Body ---------- */}
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="col-span-3"
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input
                  id="username"
                  className="col-span-3"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                />
              </div>
            </div>

            {/* ---------- Footer ---------- */}
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Save changes</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
};

export default Page;
