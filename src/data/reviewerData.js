export const modules = [
  {
    id: 'm1',
    num: 'Module 1',
    shortTitle: 'Git & GitHub',
    title: 'Version Control · Git & GitHub',
    accentColor: '#7c6af7',
    accentRgb: '124,106,247',
    terms: [
      { term: 'Version Control', def: 'A system that records changes made to a file or set of files over time, allowing you to revert to specific versions later.' },
      { term: 'Git', def: 'A free, open-source version control system installed locally on your computer that tracks code changes. Developed in 2005, it is the most widely used VCS.' },
      { term: 'GitHub', def: 'An online hosting platform for Git repositories. Files are stored in the cloud and are accessible from any computer — similar to Dropbox, but with version tracking.' },
      { term: 'Repository (Repo)', def: "The project's folder/directory where all version-controlled files and their recorded history are stored. Can be public or private on GitHub." },
      { term: 'Commit', def: 'A snapshot of your files at a point in time. Git logs what changed, who changed it, and why. Each commit should address one single issue.' },
      { term: 'Push', def: 'Uploading your committed local changes to the shared remote repository so that collaborators can access your edits.' },
      { term: 'Pull', def: 'Downloading the latest changes from the remote repository to your local machine to stay up to date with your collaborators.' },
      { term: 'Staging', def: 'Preparing a specific file for a commit using git add. Allows you to group related changes separately before committing them.' },
      { term: 'Branch', def: 'A parallel version of the repository. Local edits create a branch separate from the main repo until they are merged back.' },
      { term: 'Merge', def: 'Combining independent edits from different branches into a single, unified file. Git identifies and integrates both sets of changes.' },
      { term: 'Conflict', def: 'When two people edit the same part of a file and Git cannot automatically merge the changes. Requires manual resolution by the user.' },
      { term: 'Clone', def: 'Creating a local copy of an existing remote Git repository, including all its files and complete change history.' },
      { term: 'Fork', def: "A personal copy of someone else's repository. Changes you make are logged on your fork, not the original owner's repository." },
    ],
    codeExamples: [
      {
        lang: 'GIT',
        desc: 'Clone a repository using a Personal Access Token',
        code: `git clone https://<username>:<token>@github.com/<username>/<repo>.git`,
      },
      {
        lang: 'GIT',
        desc: 'Stage, commit, and push your changes',
        code: `git add .                        # stage all changed files
git status                       # review what is staged
git commit -m "add demo.txt"     # commit with a clear message
git push -u origin main          # push to the remote repository`,
      },
    ],
    bestPractices: [
      'Make purposeful, single-issue commits',
      'Write informative commit messages every time',
      'Pull frequently to stay up to date',
      'Push after completing each section of work',
      "Never hoard local changes — share with collaborators",
    ],
  },

  {
    id: 'm2',
    num: 'Module 2',
    shortTitle: 'HTML',
    title: 'HTML · Build the Structure',
    accentColor: '#f97b6b',
    accentRgb: '249,123,107',
    terms: [
      { term: 'HTML', def: 'HyperText Markup Language. The standard language used to structure content on the web. It defines meaning and structure — not design.' },
      { term: 'HTML5', def: 'The current modern standard version of HTML, supported by all major browsers. Introduces semantic elements, better accessibility, and mobile compatibility.' },
      { term: 'Element', def: 'A complete building block of a webpage — an opening tag + content + closing tag. Example: <p>Hello</p> is a paragraph element.' },
      { term: 'Tag', def: 'The markup syntax used to begin or end an element. Opening: <p> — Closing: </p>. Tags and elements are not the same thing.' },
      { term: 'Attribute', def: 'Extra information placed inside an opening tag that modifies the element. Written as name="value". Example: class="card", href="page.html".' },
      { term: 'Boilerplate', def: 'The required base HTML structure every document must start with — DOCTYPE, html, head, and body. Ensures browsers parse the page correctly.' },
      { term: 'Semantic Elements', def: 'Tags that clearly describe their purpose to both browsers and developers, like <header>, <nav>, <main>, <section>, <footer>. Always prefer these over <div>.' },
      { term: 'DOM', def: "Document Object Model. The browser's internal tree-like representation of the HTML document. JavaScript interacts with the DOM to change content." },
      { term: 'Heading Elements', def: 'Tags h1 through h6 that define the content hierarchy on a page. Use exactly one <h1> per page, and never skip heading levels.' },
      { term: 'Hyperlink', def: 'Created with the <a> element and href attribute. Navigates users to other pages or resources. Can link internally or externally.' },
      { term: 'alt Attribute', def: 'Required text alternative for <img> elements. Used by screen readers for accessibility and displayed when the image fails to load.' },
    ],
    codeExamples: [
      {
        lang: 'HTML',
        desc: 'HTML5 Boilerplate — start every file with this',
        code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Page</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <!-- visible content goes here -->
    <script src="index.js"></script>
  </body>
</html>`,
      },
      {
        lang: 'HTML',
        desc: 'Semantic structure + headings + lists',
        code: `<header>
  <h1>Juan dela Cruz</h1>
  <nav>
    <a href="#about">About</a>
    <a href="#skills">Skills</a>
  </nav>
</header>
<main>
  <section id="skills">
    <h2>Skills</h2>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
  </section>
</main>
<footer><p>© 2025</p></footer>`,
      },
      {
        lang: 'HTML',
        desc: 'Image, table, and contact form',
        code: `<!-- Image — always include alt -->
<img src="images/photo.jpg" alt="Profile photo">

<!-- Table — for data only, not layout -->
<table>
  <tr><th>School</th><th>Year</th></tr>
  <tr><td>XU</td><td>2025</td></tr>
</table>

<!-- Contact Form -->
<form>
  <input type="text"  placeholder="Name">
  <input type="email" placeholder="Email">
  <textarea placeholder="Message"></textarea>
  <button type="submit">Send</button>
</form>`,
      },
    ],
    bestPractices: [
      'Use only one <h1> per page',
      'Always include alt attribute on <img> tags',
      'Use semantic elements instead of <div> whenever possible',
      'Always close your tags properly',
      'Follow proper heading order — never skip levels',
      'Tables are for tabular data, not for page layout',
      'Only display images you own or that are in the public domain',
    ],
  },

  {
    id: 'm3',
    num: 'Module 3',
    shortTitle: 'CSS',
    title: 'CSS · Do It with Style',
    accentColor: '#4ecdc4',
    accentRgb: '78,205,196',
    terms: [
      { term: 'CSS', def: 'Cascading Style Sheets. The language used to style existing HTML — controlling colors, fonts, spacing, layout, and overall visual hierarchy.' },
      { term: 'Selector', def: 'Targets the HTML element(s) to be styled. Four types to master: element (p), class (.card), ID (#header), pseudo-class (a:hover).' },
      { term: 'Property & Value', def: 'A property names the style aspect to change (e.g., color) and the value is what it is set to (e.g., green). Written as: property: value;' },
      { term: 'External CSS', def: 'CSS written in a separate .css file and linked in the HTML <head> via <link rel="stylesheet">. Preferred — cleaner, reusable, and industry standard.' },
      { term: 'Box Model', def: 'Every HTML element is a box. Each box has four layers: Content → Padding → Border → Margin. Total width = content + padding + border.' },
      { term: 'border-box', def: 'A box-sizing value that makes an element\'s width include its padding and border. This simplifies layout math and should be used in every modern project.' },
      { term: 'Flexbox', def: 'A one-dimensional CSS layout system (row OR column). Best for aligning items horizontally, centering content, and building navigation bars.' },
      { term: 'Grid', def: 'A two-dimensional CSS layout system (rows AND columns simultaneously). Best for complex page layouts and building multi-column sections.' },
      { term: 'display Property', def: 'Controls how an element is rendered in the layout flow. Common values: block, inline, inline-block, flex, grid.' },
      { term: 'position Property', def: 'Controls where an element is placed. Values: static (default), relative, absolute, fixed (stays on screen while scrolling), sticky.' },
      { term: 'CSS Sizing Units', def: 'px — precise sizes for borders and small details. em/rem — scalable typography. % — responsive sizing relative to parent. Avoid mixing too many units.' },
    ],
    codeExamples: [
      {
        lang: 'CSS',
        desc: 'Basic syntax and all four selector types',
        code: `/* Link external CSS in HTML <head> */
<link rel="stylesheet" href="css/styles.css">

/* 1. Element selector */
p { color: green; text-align: center; }

/* 2. Class selector — use this most often */
.card { background: #fff; padding: 16px; border-radius: 8px; }

/* 3. ID selector — use sparingly */
#header { background: #333; color: white; }

/* 4. Pseudo-class */
a:hover { color: royalblue; text-decoration: underline; }`,
      },
      {
        lang: 'CSS',
        desc: 'Box model, Flexbox centering, sticky nav, dark mode & hidden utility',
        code: `/* Universal border-box reset */
* { box-sizing: border-box; margin: 0; padding: 0; }

/* Centering with Flexbox */
.container {
  display: flex;
  justify-content: center;  /* horizontal axis */
  align-items: center;      /* vertical axis */
}

/* Sticky top navigation */
nav {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
}

/* Body typography */
body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
}

/* Dark mode (toggled by JS adding this class to body) */
.dark-mode { background-color: #222; color: white; }

/* Hidden utility (toggled by JS) */
.hidden { display: none; }`,
      },
    ],
    bestPractices: [
      'Use class selectors for almost everything',
      'Always apply box-sizing: border-box globally',
      'Use an external stylesheet — avoid inline and internal CSS',
      'Avoid overly specific or deeply nested selectors',
      'Always declare fallback fonts (e.g., Arial, sans-serif)',
      'Comment your major CSS sections',
      'Use Flexbox for centering and one-dimensional layouts',
      'Avoid overusing absolute positioning early on',
    ],
  },

  {
    id: 'm4',
    num: 'Module 4',
    shortTitle: 'JavaScript',
    title: 'JavaScript · Making Pages Interactive',
    accentColor: '#ffd166',
    accentRgb: '255,209,102',
    terms: [
      { term: 'JavaScript', def: 'A programming language that runs in the browser, making web pages interactive — responding to user actions, validating forms, and modifying content dynamically.' },
      { term: 'External JS File', def: 'JavaScript written in a separate .js file and linked via <script src="..."> placed just before the closing </body> tag.' },
      { term: 'DOM Selection', def: 'Accessing HTML elements from JavaScript using document.getElementById("id") or document.querySelector(".class") to read or change them.' },
      { term: 'Event Listener', def: 'Attaches a function to an element that fires when a user action occurs. Syntax: element.addEventListener("click", function() { ... }).' },
      { term: 'event.preventDefault()', def: "Stops the browser's default behavior for an event — most commonly preventing a form from reloading the page on submit." },
      { term: 'classList.toggle()', def: "Adds a CSS class to an element if it's absent, or removes it if it's present. Used for toggling dark mode, show/hide sections, menus, etc." },
      { term: 'Form Validation', def: 'Checking that user-submitted values meet requirements (e.g., fields are not empty, email is valid) before allowing the form to submit.' },
      { term: 'console.log()', def: "Prints a message or value to the browser's Developer Tools console. Essential for debugging — checking if scripts load and verifying variable values." },
    ],
    codeExamples: [
      {
        lang: 'HTML',
        desc: 'Linking JS file and setting up button IDs',
        code: `<!-- Place this just before </body> -->
<script src="js/script.js"></script>

<!-- Header button -->
<button id="themeToggle">Toggle Dark Mode</button>

<!-- Skills section with toggle -->
<button id="toggleSkills">Show/Hide Skills</button>
<section class="card" id="skillsSection">...</section>

<!-- Contact form with IDs -->
<input type="text"  id="name"  placeholder="Name">
<input type="email" id="email" placeholder="Email">
<button type="submit" id="submitBtn">Send</button>`,
      },
      {
        lang: 'JS',
        desc: 'Dark mode toggle + show/hide section + form validation',
        code: `// Confirm JS file loaded correctly
console.log("script.js loaded");

// ── Dark Mode Toggle ──────────────────────────
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});

// ── Show / Hide Skills Section ────────────────
const toggleSkills  = document.getElementById("toggleSkills");
const skillsSection = document.getElementById("skillsSection");

toggleSkills.addEventListener("click", function() {
  skillsSection.classList.toggle("hidden");
});

// ── Form Validation ───────────────────────────
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function(event) {
  event.preventDefault(); // stop page reload

  const name  = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if (name === "" || email === "") {
    alert("Please fill in all required fields.");
  } else {
    alert("Form submitted successfully!");
  }
});`,
      },
    ],
    bestPractices: [
      'Link the JS file before </body>, not inside <head>',
      'Use const for variables that will not be reassigned',
      'Always call event.preventDefault() on form submit buttons',
      'Use console.log() to verify your script is connected',
      'Open DevTools (F12) and check the Console for errors',
      'Use exact commit message: WSAT-M4: JavaScript interactivity added',
      'Push all changes and submit both App URL and Repo URL on Canvas',
    ],
  },
];
