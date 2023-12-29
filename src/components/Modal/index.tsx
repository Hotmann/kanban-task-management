import { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  return (
    <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-50 max-w-xs w-11/12 sm:max-w-md bg-white dark:bg-dark-grey-2 text-black dark:text-white rounded-lg p-5 pr-3 flex flex-col gap-6 max-h-[90vh] overflow-y-auto">
      {children}
    </div>
  );
};

export default Modal;
