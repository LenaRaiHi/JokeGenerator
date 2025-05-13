# Static Web App

This is a demo static web app designed to be deployed on Azure.

## Project Structure

```
static-web-app
├── src
│   ├── index.html      # Main HTML document
│   ├── styles.css      # CSS styles for the web app
│   └── app.js          # JavaScript code for the web app
├── azure.yaml          # Configuration for Azure deployment
└── README.md           # Project documentation
```

## Getting Started

To set up and run this static web app locally, follow these steps:

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd static-web-app
   ```

2. **Open the project in your preferred code editor.**

3. **Run the app:**
   Open `src/index.html` in your web browser to view the app.

## Deployment to Azure

To deploy this static web app to Azure, follow these steps:

1. Ensure you have the Azure CLI installed and configured.
2. Navigate to the project directory.
3. Use the following command to deploy:
   ```
   az staticwebapp create --name <app-name> --source <source-url> --location <location>
   ```

Replace `<app-name>`, `<source-url>`, and `<location>` with your desired values.

## License

This project is licensed under the MIT License.