export const webdevCategory = {
  id: 'webdev',
  label: 'Web Dev Reviewer',
  description: 'Frontend and version control fundamentals.',
  accentColor: '#7c6af7',
  accentRgb: '124,106,247',
  modules: [
    {
      id: 'wd1',
      num: 'Module 1',
      shortTitle: 'Git & GitHub',
      title: 'Version Control · Git & GitHub',
      accentColor: '#7c6af7',
      accentRgb: '124,106,247',
      terms: [
        { term: 'Version Control', def: 'A system that records changes made to files over time.' },
        { term: 'Git', def: 'A distributed version control system used locally.' },
        { term: 'GitHub', def: 'A cloud platform for hosting Git repositories.' },
        { term: 'Repository', def: 'A folder where project files and history are stored.' },
        { term: 'Commit', def: 'A saved snapshot of changes in your project.' },
        { term: 'Push', def: 'Uploads local commits to the remote repository.' },
        { term: 'Pull', def: 'Downloads latest changes from the remote repository.' },
        { term: 'Branch', def: 'A separate line of development for new features or fixes.' },
      ],
      codeExamples: [
        {
          lang: 'GIT',
          desc: 'Clone a repository',
          code: `git clone https://github.com/username/repository-name.git`,
        },
        {
          lang: 'GIT',
          desc: 'Check repository status',
          code: `git status`,
        },
        {
          lang: 'GIT',
          desc: 'Stage, commit, and push',
          code: `git add .
git commit -m "Initial commit"
git push origin main`,
        },
        {
          lang: 'GIT',
          desc: 'Create and switch to a new branch',
          code: `git checkout -b feature-navbar`,
        },
        {
          lang: 'GIT',
          desc: 'Pull latest changes',
          code: `git pull origin main`,
        },
        {
          lang: 'GIT',
          desc: 'Merge a branch into main',
          code: `git checkout main
git merge feature-navbar`,
        },
      ],
      bestPractices: [
        'Commit often',
        'Write clear commit messages',
        'Pull before pushing',
        'Use branches for features',
        'Keep one purpose per commit',
      ],
    },
    {
      id: 'wd2',
      num: 'Module 2',
      shortTitle: 'HTML',
      title: 'HTML · Build the Structure',
      accentColor: '#f97b6b',
      accentRgb: '249,123,107',
      terms: [
        { term: 'HTML', def: 'The standard markup language for webpages.' },
        { term: 'Element', def: 'A complete HTML item with tag and content.' },
        { term: 'Tag', def: 'The markup used to define elements.' },
        { term: 'Attribute', def: 'Extra details inside an opening tag.' },
        { term: 'Semantic Elements', def: 'Tags like header, nav, main, section, and footer that describe content meaning.' },
        { term: 'Form', def: 'Used to collect user input.' },
      ],
      codeExamples: [
        {
          lang: 'HTML',
          desc: 'Basic HTML5 structure',
          code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>My Page</title>
</head>
<body>
  <h1>Hello World</h1>
</body>
</html>`,
        },
        {
          lang: 'HTML',
          desc: 'Semantic page layout',
          code: `<header>
  <h1>My Portfolio</h1>
  <nav>
    <a href="#about">About</a>
    <a href="#projects">Projects</a>
  </nav>
</header>

<main>
  <section id="about">
    <h2>About Me</h2>
    <p>I am a student developer.</p>
  </section>
</main>

<footer>
  <p>© 2026</p>
</footer>`,
        },
        {
          lang: 'HTML',
          desc: 'Lists, image, and link',
          code: `<h2>Skills</h2>
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>

<img src="photo.jpg" alt="Profile photo" />

<a href="https://github.com/">Visit GitHub</a>`,
        },
        {
          lang: 'HTML',
          desc: 'Simple form',
          code: `<form>
  <label for="name">Name</label>
  <input type="text" id="name" />

  <label for="email">Email</label>
  <input type="email" id="email" />

  <button type="submit">Submit</button>
</form>`,
        },
      ],
      bestPractices: [
        'Use semantic tags',
        'Keep proper heading order',
        'Add alt text to images',
        'Use labels in forms',
        'Close tags properly',
      ],
    },
    {
      id: 'wd3',
      num: 'Module 3',
      shortTitle: 'CSS',
      title: 'CSS · Styling the Web',
      accentColor: '#4ecdc4',
      accentRgb: '78,205,196',
      terms: [
        { term: 'CSS', def: 'Used to style HTML elements.' },
        { term: 'Selector', def: 'Targets elements to style.' },
        { term: 'Property', def: 'The style feature to change.' },
        { term: 'Value', def: 'The chosen setting for a property.' },
        { term: 'Flexbox', def: 'A layout method for arranging items in rows or columns.' },
        { term: 'Grid', def: 'A layout method for rows and columns.' },
      ],
      codeExamples: [
        {
          lang: 'CSS',
          desc: 'Basic CSS',
          code: `body {
  background: #111;
  color: white;
}

h1 {
  color: skyblue;
}`,
        },
        {
          lang: 'CSS',
          desc: 'Class selector and hover effect',
          code: `.btn {
  background: #7c6af7;
  color: white;
  padding: 10px 16px;
  border-radius: 8px;
}

.btn:hover {
  opacity: 0.8;
}`,
        },
        {
          lang: 'CSS',
          desc: 'Flexbox example',
          code: `.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
}`,
        },
        {
          lang: 'CSS',
          desc: 'Grid example',
          code: `.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}`,
        },
        {
          lang: 'CSS',
          desc: 'Universal reset and box sizing',
          code: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}`,
        },
      ],
      bestPractices: [
        'Use classes more than IDs',
        'Keep CSS organized',
        'Avoid repeated styles',
        'Use flexbox for alignment',
        'Use grid for multi-column layouts',
      ],
    },
    {
      id: 'wd4',
      num: 'Module 4',
      shortTitle: 'JavaScript',
      title: 'JavaScript · Interactivity',
      accentColor: '#ffd166',
      accentRgb: '255,209,102',
      terms: [
        { term: 'JavaScript', def: 'Adds interactivity to webpages.' },
        { term: 'Variable', def: 'Stores a value.' },
        { term: 'Function', def: 'Runs a block of code.' },
        { term: 'DOM', def: 'The page structure JavaScript can modify.' },
        { term: 'Event Listener', def: 'Runs code when an event happens.' },
        { term: 'Condition', def: 'Checks whether something is true or false.' },
      ],
      codeExamples: [
        {
          lang: 'JS',
          desc: 'Button click example',
          code: `const button = document.getElementById('btn')

button.addEventListener('click', () => {
  alert('Button clicked!')
})`,
        },
        {
          lang: 'JS',
          desc: 'Change text content',
          code: `const title = document.getElementById('title')
title.textContent = 'Updated Title'`,
        },
        {
          lang: 'JS',
          desc: 'Toggle a class',
          code: `const menu = document.getElementById('menu')
menu.classList.toggle('open')`,
        },
        {
          lang: 'JS',
          desc: 'Simple if statement',
          code: `const score = 85

if (score >= 75) {
  console.log('Passed')
} else {
  console.log('Failed')
}`,
        },
        {
          lang: 'JS',
          desc: 'Form validation example',
          code: `const form = document.getElementById('form')

form.addEventListener('submit', (event) => {
  event.preventDefault()

  const name = document.getElementById('name').value

  if (name === '') {
    alert('Name is required')
  } else {
    alert('Form submitted')
  }
})`,
        },
      ],
      bestPractices: [
        'Use meaningful names',
        'Keep functions simple',
        'Test in the console',
        'Use const when value does not change',
        'Prevent default form submission when validating',
      ],
    },
  ],
}