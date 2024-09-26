<div align="center">
  <img src="https://github.com/user-attachments/assets/86f8ecfb-1a7b-4807-a02b-7b00735e1a96" width=250px: alt="N8n Ultimate Scraper Logo">
  <h1>Welcome to the best way to scape using N8n</h1>
  <p>A Web Scraper framework for N8n</p>
<h1></h1>
</div>

## N8n Ultimate Scraper: Scraper for N8n builders

N8n Ultimate Scraper is an open-source framework designed for N8n builders who want to use an efficient and scalable scraper for their projects.

Our web scraper can find any data displayed on a webpage and can also use cookies to log in to the targeted webpage.

## How It Work
The scraper takes the following input parameters:
 - Subject (e.g., Hugging Face)
 - Domain name/website (e.g., github.com)
 - Targeted data (e.g., number of followers)
 - Website cookies (optional for authentication)

 The result of this request will be a structured JSON containing the number of followers on the Hugging Face GitHub page.


## 🚀 Getting Started

**Docker Compose Setup for n8n and Selenium**
This repository contains a Docker Compose configuration for deploying [n8n](https://n8n.io) and Selenium standalone Chrome services.

Follow these steps to deploy the services using Docker Compose:

### Prerequisites

1. **Docker**: Ensure Docker is installed on your system. You can download it from [here](https://www.docker.com/get-started).
2. **Docker Compose**: Ensure you have Docker Compose installed. You can check by running:
   ```bash
   docker-compose --version
   ```

### Clone the Repository

Start by cloning the repository that contains the `docker-compose.yml` file and the `.env` file.

```bash
git clone https://github.com/Touxan/n8n-ultimate-scraper.git
cd n8n-ultimate-scraper
```

### Configure the Environment Variables

Modify the `.env` file in the root directory modify the necessary environment variables for `n8n` and `selenium`.

```bash
# .env
# N8n Variables
N8N_BASIC_AUTH_ACTIVE=true
N8N_BASIC_AUTH_USER=n8nuser
N8N_BASIC_AUTH_PASSWORD=n8npassword

# Selenium Variables
HTTP_PROXY=http://proxyAdress:port
HTTPS_PROXY=http://proxyAdress:port
```

Make sure to replace `n8nuser` and `n8npassword` with more safer values.
Make sure to replace `proxyAddress` and `port` with the actual values for your proxy.

### Deploying the Services

To deploy the `n8n` and `selenium` services, run the following command:

```bash
docker-compose up -d
```

This will:
- Spin up the `n8n` service and expose it on port `5678`.
- Spin up the `selenium` Chrome standalone service and expose it on port `4444`.
- Connect both services on a custom Docker network.

### Accessing the Services

- **n8n**: You can access `n8n` by navigating to [http://localhost:5678](http://localhost:5678) in your browser. 

- **Workflow**: You can import on your n8n the Selenium_Ultimate_Scraper_Workflow.json and activate it 
  
### Request the workflow

To request the workflow you can start with this cur command : 
```bash
curl -X POST http://localhost:5678/yourwebhookid \
-H "Content-Type: application/json" \
-d '{
  "subject": "Hugging Face",
  "Url": "github.com",
  "Target data": [
    {
      "DataName": "Followers",
      "description": "The number of followers of the GitHub page"
    },
    {
      "DataName": "Total Stars",
      "description": "The total numbers of stars on the different repos"
    }
  ],
  "cookies": []
}'
```
Or to just scrap a url :
```bash
curl -X POST http://localhost:5678/webhook-test/67d77918-2d5b-48c1-ae73-2004b32125f0 \
-H "Content-Type: application/json" \
-d '{
  "Target Url": "https://github.com",
  "Target data": [
    {
      "DataName": "Followers",
      "description": "The number of followers of the GitHub page"
    },
    {
      "DataName": "Total Stars",
      "description": "The total numbers of stars on the different repo"
    }
  ],
  "cookies": []
}'
```

### Stopping the Services

To stop the running containers:

```bash
docker-compose down
```

This will stop and remove the containers, but your data will be persisted in the `n8n_data` volume.


## Cookies Extraction

To extract cookies in the correct format for using a logged session with the scraper, you can use the extension provided in the repository.

### Quick Installation Guide: Installing a Chrome Extension from a Folder

Follow these steps to install a Chrome extension from a local folder:

### 1. Download or Clone the Extension
Ensure you have the extension's files downloaded or cloned to a local folder on your computer.

### 2. Open Chrome Extensions Page
Open Google Chrome and navigate to the extensions page by either:
- Typing `chrome://extensions/` into the address bar, OR
- Clicking the three dots (menu) in the top-right corner → `More Tools` → `Extensions`.

### 3. Enable Developer Mode
On the extensions page, toggle on **Developer mode**. You’ll find this option in the upper-right corner of the page.

### 4. Load Unpacked Extension
Click the **Load unpacked** button (appears after enabling Developer mode).

### 5. Select the Extension Folder
A file browser will open. Navigate to the folder where the extension files are stored.
Select the folder containing the extension’s `manifest.json` file and click **Select Folder**.

### 6. Verify Installation
The extension will appear on the extensions page. Make sure it is enabled.
You should now see the extension icon in the Chrome toolbar, or you can manage it from the extensions page.

---

That's it! Your extension is now installed and ready to use from the folder.


## 🔎 Support

If you're experiencing any issues getting started with n8n-ultimate-scraper, you can:

- Opening a [GitHub issue](https://github.com/Touxan/n8n-ultimate-scraper/issues) describing your issue
