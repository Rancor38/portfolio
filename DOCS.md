# Documentation
Last updated --> May 3, 2023
## Components
  * ClipboardListItem --> A component for a button that can be used to copy its text content onto the user's clipboard
  * DownloadPDF --> A component that onClick downloads the resume pdf from the public folder
  * Header --> the header component contained within the About page, it has the z-logo and some TypeOut components to look cool
  * Loading --> This would display "Loading..." but this hasn't been used yet, because I don't have any lingering functions on the site... unfortunately the site is really well optomized and doesn't need it, but maybe someday it will
  * Nav --> The navigation bar containing links and the DownloadPDF component
  * Project --> Each project accepts name, description, and url as props and passes those indie to render a TypeOut description and a button link to the project
  * Redirects --> Redirects on the mount to a new URL. Currently used for PageNotFound to handle 404s
  * TypeOut --> This accepts the inputs inputString (the text being written), time (the amount of time to wait before the text begins typing itself), and typeSpeed (the speed that the text is typed in)

## Pages
* About --> Landing page/information about me. Renders the Header component as well
* Contact --> A page with my contact information. Includes a couple of ClipboardListItems for name and Email
* PageNotFound --> A landing page for 404 handling
* Projects --> A page that renders a list of projects as a series of project components. Edit the projects array with any new projects
*Skills --> A page that renders sections of skills. Edit each list for languages, frameworks, databases, deployment, or other, to update skills

### Future Features

For the moment nothing major is in the icebox. There might be in the future, but we'll see.

I want to make the loading page look nicer, maybe add a loading circle instead, but there's not much of a point since I don't have it rendering.

Make snoofs responsive

Make menu bar responsive for small phones.