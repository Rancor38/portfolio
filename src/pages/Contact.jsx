import ClipboardListItem from "../components/ClipboardListItem";

const Contact = () => {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <main>
        <li>Name: <ClipboardListItem text="Zakariah O'Mara-Mezzano"/></li>
        <li>Email: <ClipboardListItem text="zak.text@gmail.com"/></li>
        <li>LinkedIn:  <a href="https://www.linkedin.com/in/zakariah-om">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png" alt="LinkedIn" />
        </a>
        </li>
        <li>GitHub:  <a href="https://github.com/Rancor38">
          <img src="https://symbols.getvecta.com/stencil_65/6_github.a79e66470c.svg" alt="GitHub" />
        </a>
        </li>
      </main>
    </section>
  );
};

export default Contact;