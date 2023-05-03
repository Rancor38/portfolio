const languages = [
  {
    name: "HTML",
    url: "https://html.spec.whatwg.org/multipage/",
    logo:"https://symbols.getvecta.com/stencil_25/37_html5.d4d8050235.svg"
  },
  {
    name: "CSS",
    url: "https://www.w3.org/TR/CSS/",
    logo:"https://symbols.getvecta.com/stencil_25/14_css3.d930bfb832.svg"
  },
  {
    name: "JavaScript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    logo:"https://symbols.getvecta.com/stencil_25/41_javascript.0ca26ec4ab.svg"
  },
  {
    name: "TypeScript",
    url: "https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html",
    logo:"https://symbols.getvecta.com/stencil_25/87_typescript.cb2d7326fa.svg"
  },
  {
    name: "Python",
    url: "https://www.python.org/",
    logo:"https://symbols.getvecta.com/stencil_25/69_python.34cfd522d6.svg"
  },
  {
    name: "Sass",
    url: "https://sass-lang.com/",
    logo:"https://sass-lang.com/assets/img/styleguide/seal-color-aef0354c.png"
  },
  {
    name: "EJS",
    url: "https://ejs.co/",
    logo:"https://cdn.icon-icons.com/icons2/2148/PNG/512/ejs_icon_132422.png"
  },
]

const frameworks = [
  {
    name: "React",
    url: "https://react.dev/",
    logo:"https://ionicframework.com/docs/icons/logo-react-icon.png"
  },
  {
    name: "Django",
    url: "https://www.djangoproject.com/",
    logo:"https://img.stackshare.io/service/994/4aGjtNQv.png"
  },
  {
    name: "Next.js",
    url: "https://nextjs.org/",
    logo:"https://seeklogo.com/images/N/next-js-icon-logo-EE302D5DBD-seeklogo.com.png"
  },
  {
    name: "Vite",
    url: "https://vitejs.dev/",
    logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1039px-Vitejs-logo.svg.png"
  },
  {
    name: "Express.js",
    url: "https://expressjs.com/",
    logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Status_iucn_EX_icon.svg/480px-Status_iucn_EX_icon.svg.png"
  },
  {
    name: "Flask",
    url: "https://flask.palletsprojects.com/en/2.3.x/",
    logo:"https://flask.palletsprojects.com/en/2.2.x/_static/flask-icon.png"
  },
  {
    name: "Bootstrap",
    url: "https://getbootstrap.com/",
    logo:"https://symbols.getvecta.com/stencil_25/5_bootstrap.bbf5d3d59c.svg"
  },
  {
    name: "Tailwind",
    url: "https://tailwindcss.com/",
    logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png"
  },
  {
    name: "Bulma",
    url: "https://bulma.io/",
    logo:"https://raw.githubusercontent.com/github/explore/ad9cd7e959a88047c830c3a9cc4e9ffcf5e644f7/topics/bulma/bulma.png"
  },
  {
    name: "Framer/Motion",
    url: "https://www.framer.com/motion/",
    logo:"https://cdn.worldvectorlogo.com/logos/framer-motion.svg"
  },
]

const databases = [
  {
    name: "MongoDB",
    url: "https://www.mongodb.com/",
    logo:"https://symbols.getvecta.com/stencil_261/25_mongodb.cef7d00b8a.svg"
  },
  {
    name: "PostgreSQL",
    url: "https://www.postgresql.org/",
    logo:"https://symbols.getvecta.com/stencil_261/33_postgresql.2657499023.svg"
  },
]

const deployment = [
  {
    name: "Heroku",
    url: "https://www.heroku.com/",
    logo:"https://static-00.iconduck.com/assets.00/heroku-icon-icon-461x512-ysg7u9o2.png"
  },
  {
    name: "Netlify",
    url: "https://www.netlify.com/",
    logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQputThLbGZrA6yYmG-gxYXCJsS-hk4_hFJ-jUzJhQQuY6q8bhw53jICOn8RCwmHM-MKpw&usqp=CAU"
  },
  {
    name: "Railway",
    url: "https://railway.app/",
    logo:"https://railway.app/brand/logo-dark.svg"
  },
  {
    name: "Vercel",
    url: "https://vercel.com/",
    logo:"https://static.wikia.nocookie.net/logopedia/images/a/a7/Vercel_favicon.svg/"
  },
  {
    name: "Koyeb",
    url: "https://www.koyeb.com/",
    logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEy_MaUm9gVibL02miy3YQl-_rKNSpkvHuoNyv5e7MOd7JvbhbdPaVY3kjzjQgd-7vK9U&usqp=CAU"
  },
]

const other = [
  {
    name: "GitHub",
    url: "https://github.com/",
    logo:"https://symbols.getvecta.com/stencil_65/6_github.a79e66470c.svg"
  },
  {
    name: "Node.js",
    url: "https://nodejs.org/en",
    logo:"https://symbols.getvecta.com/stencil_25/63_nodejs.124d3fe0e1.svg"
  },
  {
    name: "Visual Studio Code",
    url: "https://code.visualstudio.com/",
    logo:"https://symbols.getvecta.com/stencil_27/121_visual-studio-team-services.117b5070bc.svg"
  },
  {
    name: "Postman",
    url: "https://www.postman.com/",
    logo:"https://cdn.worldvectorlogo.com/logos/postman.svg"
  },
  {
    name: "Notion",
    url: "https://www.notion.so/",
    logo:"https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png"
  },
  {
    name: "Canva",
    url: "https://www.canva.com/",
    logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Canva_icon_2021.svg/2048px-Canva_icon_2021.svg.png"
  },
  {
    name: "Jira",
    url: "https://www.atlassian.com/software/jira",
    logo:"https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/184_Jira_logo_logos-512.png"
  },
  {
    name: "Miro",
    url: "https://miro.com/",
    logo:"https://avatars.slack-edge.com/2019-03-07/570928183895_30458630978ac1eccde9_512.png"
  },
  {
    name: "Trello",
    url: "https://trello.com/",
    logo:"https://w7.pngwing.com/pngs/115/721/png-transparent-trello-social-icons-icon.png"
  },
  {
    name: "Office 365",
    url: "https://www.office.com/",
    logo:"https://seeklogo.com/images/M/microsoft-365-logo-6D6E233C94-seeklogo.com.png"
  },
  {
    name: "DM's Guild",
    url: "https://www.dmsguild.com/",
    logo:"https://www.dmsguild.com/images/site_resources/DMsGuildLogo.jpg"
  },
]

const Skills = () => {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <h3>Languages</h3>
      <ul>
        {languages.map((map) => (
          <a href={map.url} target="_blank" rel="noreferer noreferrer">
            <img src={map.logo} alt={map.name} />
            <li>{map.name}</li>
          </a>
        ))}
      </ul>
      <h3>Libraries / Frameworks</h3>
      <ul>
      {frameworks.map((map) => (
          <a href={map.url} target="_blank" rel="noreferer noreferrer">
          <img src={map.logo} alt={map.name} />
          <li>{map.name}</li>
        </a>
        ))}
      </ul>
      <h3>Database Management</h3>
      <ul>
      {databases.map((map) => (
          <a href={map.url} target="_blank" rel="noreferer noreferrer">
          <img src={map.logo} alt={map.name} />
          <li>{map.name}</li>
        </a>
        ))}
      </ul>
      <h3>Deployment</h3>
      <ul>
      {deployment.map((map) => (
          <a href={map.url} target="_blank" rel="noreferer noreferrer">
          <img src={map.logo} alt={map.name} />
          <li>{map.name}</li>
        </a>
        ))}
      </ul>
      <h3>Other Tech</h3>
      <ul>
        {other.map((map) => (
          <a href={map.url} target="_blank" rel="noreferer noreferrer">
          <img src={map.logo} alt={map.name} />
          <li>{map.name}</li>
        </a>
        ))}
      </ul>
    </section>
  )
}

export default Skills
