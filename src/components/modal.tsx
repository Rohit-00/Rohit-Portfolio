import React, {  ReactElement, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { IconX } from '@tabler/icons-react';

interface ModalProps {
  showModal      : boolean;
  onClose        : () => void;
  Children       : ReactElement | any,
  image         ?: string,
  projectName   ?: string,
  projectLink   ?: string,
  projectType   ?: string,
  projectTech   ?: string,
  projectStatus ?: boolean,
  projectDesc   ?: string
}

const Modal: React.FC <ModalProps> = ({ showModal, onClose, Children }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    if (showModal) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
    
  }, [showModal]);

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center">
      <motion.div
        ref={modalRef}
        initial={{ opacity: 1, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        className="bg-black rounded-lg overflow-hidden shadow-xl transform transition-scale sm:max-w-4xl sm:w-full"
      >
        <button onClick={onClose} className="absolute top-0 right-0 m-2 text-gray-400 hover:text-gray-600">
         <IconX/>
        </button>
        <Children/>
      </motion.div>
    </div>
  );
};

export default Modal;
