# Deployment Instructions

To host this project on GitHub Pages:

1.  **Create a GitHub Repository**:
    *   Go to GitHub and create a new public repository (e.g., `privateos-clone`).

2.  **Update Configuration**:
    *   Open `package.json` and replace `GITHUB_USERNAME` and `REPO_NAME` with your actual details.
    *   Open `vite.config.ts` and replace `/REPO_NAME/` with your repository name (e.g., `/privateos-clone/`).

3.  **Push Code to GitHub**:
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    git branch -M main
    git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
    git push -u origin main
    ```

4.  **Deploy**:
    ```bash
    npm run deploy
    ```

5.  **Enable GitHub Pages**:
    *   Go to your repository Settings -> Pages.
    *   Ensure the source is set to `gh-pages` branch.
