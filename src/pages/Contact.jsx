import React from 'react';
import { motion } from 'framer-motion';
import ClipboardListItem from "../components/ClipboardListItem";
import TypeOut from "../components/TypeOut";

const Contact = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const contactItems = [
    {
      label: "Name",
      content: <ClipboardListItem text="Zakariah J Hallow" />,
      icon: null
    },
    {
      label: "Email",
      content: <ClipboardListItem text="zakariahjhallow@outlook.com" />,
      icon: null
    },
    {
      label: "LinkedIn",
      content: <a href="https://www.linkedin.com/in/zakariah-om">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png" alt="LinkedIn" />
      </a>,
      icon: null
    },
    {
      label: "GitHub",
      content: <a href="https://github.com/Rancor38">
        <img src="https://symbols.getvecta.com/stencil_65/6_github.a79e66470c.svg" alt="GitHub" />
      </a>,
      icon: null
    },
    {
      label: "Discord",
      content: <a href="https://discordapp.com/users/Rancor38/">
        <img src="https://th.bing.com/th/id/OIP.EZkdm25nbQDs_PjFN8hmewAAAA?rs=1&pid=ImgDetMain" alt="Discord" />
      </a>,
      icon: null
    }
  ];

  return (
    <section className="contact">
      <h2><TypeOut inputString="Let's Connect" typeSpeed={50} /></h2>

      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {contactItems.map((item, index) => (
          <motion.li
            key={item.label}
            variants={itemVariants}
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="contact-label">{item.label}:</span> {item.content}
          </motion.li>
        ))}
      </motion.main>

      <motion.div
        className="contact-cta"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <p>I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.</p>
      </motion.div>
    </section>
  );
};

export default Contact;
