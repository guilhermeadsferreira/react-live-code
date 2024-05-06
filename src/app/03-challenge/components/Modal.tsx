"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Modal = () => {
  const [visible, setVisible] = useState(false);

  return (
    <Dialog open={visible} onOpenChange={setVisible}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Lorem ipsum</DialogTitle>
          <DialogDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dicta
            molestiae iusto nam illum dolores laborum, dignissimos eum quod
            tenetur in cupiditate qui? Ad, maxime iusto ut libero eveniet
            soluta.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
