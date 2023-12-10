# SimpleServer

## Description

This project is a simple Node.js server that responds with a JSON message when accessed at the "/sayHello" endpoint. Additionally, it includes a GitHub Actions workflow (`deploy.yml`) for automated deployment to a server using SSH.

## Files and Directory Structure

- `.github/workflows/deploy.yml`: GitHub Actions workflow for deploying the application to a server.
- `app.js`: Node.js server code.
- `package.json`: Package configuration file with dependencies and scripts.
- `.gitignore`: File specifying patterns for files and directories to be ignored by version control.

## Deployment Workflow

The deployment workflow is triggered on each push to the `main` branch. It performs the following steps:

1. **Checkout Repository:** Checks out the latest code from the repository.
2. **Set Up Node.js:** Configures the GitHub Actions runner environment with Node.js.
3. **Install Dependencies:** Uses npm to install project dependencies.
4. **Deploy to Server:** Utilizes the `appleboy/ssh-action` to connect to the specified server and perform deployment tasks.
   - Pulls the latest changes from the `main` branch.
   - Installs the Express library.
   - Installs pm2 globally and restarts the `app.js` application.
5. **Notify Deployment Status:** Echoes a success message when the deployment is successful.
6. **Notify Deployment Failure:** Echoes a failure message and exits with an error code if the deployment fails.

## Additional Notes

- Ensure that sensitive information such as server host, username, and private key are stored as secrets in the GitHub repository.
