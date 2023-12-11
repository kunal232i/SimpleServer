# SimpleServer

## Description

This project is a simple Node.js server that responds with a JSON message when accessed at the "/sayHello" endpoint. Additionally, it includes a GitHub Actions workflow (`deploy.yml`) for automated deployment to a server using SSH.

## Files and Directory Structure

- `.github/workflows/deploy.yml`: GitHub Actions workflow for deploying the application to a server.
- `app.js`: Node.js server code.
- `package.json`: Package configuration file with dependencies and scripts.
- `.gitignore`: File specifying patterns for files and directories to be ignored by version control.

## Deploy Workflow

The deployment workflow is defined in `.github/workflows/deploy.yml`. It triggers on each push to the main branch. The workflow performs the following steps:

1. **Checkout Repository**: Checks out the main branch of the repository using the `actions/checkout` action.

2. **Copy Files to VM**: Uses the `appleboy/scp-action` to copy the repository files to a specified directory (`test/`) on a remote VM. The VM connection details are stored as secrets in the GitHub repository.

3. **SSH into VM and Deploy**: Utilizes the `appleboy/ssh-action` to SSH into the remote VM and deploy the server. This involves updating packages, pulling the latest code, installing dependencies, and restarting the server using `pm2`.

4. **Notify Deployment Status**: If the deployment is successful, it echoes "Deployment successful!"

5. **Notify Deployment Failure**: If the deployment fails, it echoes "Deployment failed!" and exits with an error.
