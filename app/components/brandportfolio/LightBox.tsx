import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface LightboxProps {
  isOpen: boolean;
  imageUrl: string;
  onClose: () => void;
}

export default function LightBox({ isOpen, imageUrl, onClose }: LightboxProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="relative max-w-6xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 text-white text-4xl bg-black/50 rounded-full w-12 h-12 flex items-center justify-center"
            >
              &times;
            </button>
            <div className="relative w-full h-full min-h-[60vh]">
              <Image
                src={imageUrl}
                alt="Enlarged portfolio image"
                fill
                className="object-contain rounded-xl"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
