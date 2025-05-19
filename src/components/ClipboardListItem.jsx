import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function ClipboardListItem({ text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);

    // Reset the copied state after 2 seconds
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.button
      onClick={handleCopy}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={copied ? 'copied' : ''}
    >
      {text}
      <AnimatePresence>
        {copied && (
          <motion.span
            className="copy-indicator"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            Copied!
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

export default ClipboardListItem;
