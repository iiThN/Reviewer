# Web Dev Reviewer

A personal reviewer site for Modules 1-4 (Git, HTML, CSS, JavaScript) built with React + Vite.

## Local Development

    npm install
    npm run dev

## Deploy to GitHub Pages

1. Create a GitHub repo (e.g. web-dev-reviewer)
2. In vite.config.js, set base to '/your-repo-name/'
3. Push your code to GitHub:
    git init
    git add .
    git commit -m "initial commit"
    git branch -M main
    git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
    git push -u origin main

4. Deploy:
    npm run deploy

5. Go to GitHub repo Settings > Pages > select branch gh-pages > Save
6. Your site: https://YOUR_USERNAME.github.io/YOUR_REPO/

## Adding Content
Edit src/data/reviewerData.js to add or modify terms, code examples, and best practices.
