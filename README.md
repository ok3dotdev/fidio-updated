# Start developing your Video Platform
npm init @tycoonsystems/tycoon-video

# Documentation
www.tycoon.systems/documentation

# Notes
Use Bash terminal

# Setup
If you see a bunch of errors in VS Code while developing try:
1. Ctrl+Shift+P -or- ⌘+shift+P
2. Then type: Developer: Reload Window

# video-streaming-client
Video Streaming Client leveraged for Official Tycoon Network and B2B Customers

# Start in order of command below. Must use Bash for following commands

export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

# Use Node.js 16
nvm use 16

# Check node versions
nvm ls

------------
## Git Operations
# You must fork this and create your own repo
Go to https://github.com/Tycoon-Systems-Corp/video-streaming-client and click Fork

# Add Upstream repo once you have forked into your own repo
git remote add upstream https://github.com/Tycoon-Systems-Corp/video-streaming-client

# Create app.config.js file in root. See example file here: https://tycoon-public-share.s3.us-east-2.amazonaws.com/app.config.js
vi app.config.js

# To safely pull /modules folder changes run update script
./update

# If update script is missing run
git checkout -p upstream/master -- update.sh

# If you get Permission denied run following
chmod 722 update_version

# Push data up to your repo
git push
-------------

# Run init_app.js to create required dependency files. Else errors will throw in development
node init_app.js

# Install npm packages
npm install

# For more information go to https://tycoon.systems/documentation?q=initialize%20application

## Start developing

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3020](http://localhost:3020) with your browser to see the result.

## Packages

If you are missing dependencies check /modules/dependencies.txt
Ensure all of these exist atleast once in package.json file

You can make sure all required packages are installed on DEV or PROD by navigating to /admin in app and then going to build. Then you will want to click "Build" tab and upload a package.json. Then click "run npm install"

# To Analyze Dependency Sizes use the following

ANALYZE=true npm run build

## How to Develop
See the documentation.md folder for application tooling and functions
See api.md for routes to public Platform API

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

