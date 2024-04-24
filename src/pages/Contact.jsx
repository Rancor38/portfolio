import ClipboardListItem from "../components/ClipboardListItem";

const Contact = () => {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <main>
        <li>Name: <ClipboardListItem text="Zakariah J Hallow"/></li>
        <li>Email: <ClipboardListItem text="zakariahjhallow@outlook.com"/></li>
        <li>LinkedIn:  
          <a href="https://www.linkedin.com/in/zakariah-om">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png" alt="LinkedIn" />
          </a>
        </li>
        <li>GitHub:  
          <a href="https://github.com/Rancor38">
            <img src="https://symbols.getvecta.com/stencil_65/6_github.a79e66470c.svg" alt="GitHub" />
          </a>
        </li>
        <li>Discord: 
          <a href="https://discordapp.com/users/Rancor38/">
            <img src="https://th.bing.com/th/id/OIP.EZkdm25nbQDs_PjFN8hmewAAAA?rs=1&pid=ImgDetMain" alt="Discord" />
          </a>
        </li>
      </main>
    </section>
  );
};

export default Contact;
