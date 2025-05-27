# Jenkins CI/CD Demo - Step by Step Guide

## Step 1: Create Project Folder and Files

1. Create a folder named `jenkins-demo`.
2. Inside the folder, create the following files:
   - `add.js` (Node.js server)
   - `index.html` (frontend page)
   - `package.json` (project metadata and scripts)
   - `Jenkinsfile` (pipeline configuration for Jenkins)

---

## Step 2: Write Code in Project Files

- Write the server code in `add.js` to create an HTTP server listening on port 3000 that adds two numbers from URL query parameters.
- Write the frontend code in `index.html` with a form to take two numbers and show their sum by calling the backend.
- Add scripts in `package.json` for starting and testing the app.
- Add Jenkins pipeline stages in `Jenkinsfile` for Build, Test, and Deploy.

---

## Step 3: Initialize Git and Push to GitHub

Open terminal or PowerShell inside the `jenkins-demo` folder and run the following commands one by one:

git init  
git add .  
git commit -m "Initial commit for Jenkins CI/CD demo"  
git remote add origin <your-repo-URL>  
git push -u origin main  

---

## Step 4: Setup Jenkins Locally

1. Install Jenkins on your host machine (if not installed).
2. Open Jenkins in your browser at: http://localhost:8080
3. Unlock Jenkins using the initial admin password.
4. Install suggested plugins.
5. Configure Git in Jenkins:
   - Go to **Manage Jenkins > Global Tool Configuration**.
   - Set the Git executable path, for example:  
     `C:\Users\MI\AppData\Local\Programs\Git\cmd\git.exe`

---

## Step 5: Create Jenkins Pipeline Job

1. In Jenkins dashboard, click **New Item**.
2. Enter a job name like `hello-pipeline`, select **Pipeline**, and click **OK**.
3. Scroll down to the **Pipeline** section.
4. Choose **Pipeline script from SCM**.
5. Select SCM as **Git**.
6. Paste your GitHub repository URL.
7. Set the branch to `main` (or `master`).
8. Save the job.
9. Click **Build Now** to run the pipeline.

---

## Step 6: Verify Your Pipeline and Application

- Jenkins pipeline will:
  - Install dependencies using `npm install`.
  - Run tests using `npm test`.
  - Start the Node.js server with `node add.js`.
- Open the `index.html` file in your browser (double-click or open via live-server).
- Enter two numbers in the form and click **Add**.
- The result will display by calling the backend API at `http://localhost:3000`.

---

## Notes

- The backend API listens on port 3000.
- The frontend is a static HTML file and should be opened directly in a browser.
- Jenkins must have Git configured correctly to clone your repo.
- This setup uses Jenkins installed locally on your machine, **not Docker**.

---

## GitHub Repository

Here is the GitHub repository used for this demo:  
https://github.com/PHANTOM0905/Jenkins-Pipeline-Setup
