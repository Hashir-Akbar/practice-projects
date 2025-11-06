"use client";

import * as React from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LuCirclePlay } from "react-icons/lu";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export default function VideoDialog() {
  return (
    <div className="w-full flex justify-center">
      <Dialog>
        <DialogTrigger asChild>
          <LuCirclePlay className="cursor-pointer text-white text-6xl" />
        </DialogTrigger>

        <DialogContent
          className="w-full sm:max-w-5xl mx-auto bg-transparent border-none"
          showCloseButton={false}
        >
          <VisuallyHidden>
            <DialogHeader>
              <DialogTitle>Custom Close Button</DialogTitle>
              <DialogDescription>
                This dialog has a custom close button in the header.
              </DialogDescription>
            </DialogHeader>
          </VisuallyHidden>
          <DialogClose asChild>
            <Button
              variant="secondary"
              size="icon"
              className="absolute right-4 top-1  rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </DialogClose>
          <div className="py-6">
            <iframe
              width="1162"
              className="m-auto w-full"
              height="500"
              src="https://www.youtube.com/embed/ehpLLmnhzxs"
              title="Fun Time | Gopal Bhar গোপাল ভার (Bengali) - 15"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
