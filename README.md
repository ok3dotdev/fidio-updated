# Setup
If you see a bunch of errors in VS Code while developing try:
1. Ctrl+Shift+P -or- ⌘+shift+P
2. Then type: Developer: Reload Window

# video-streaming-client
Video Streaming Client leveraged for Official Tycoon Network and B2B Customers

# Start in order of command below

export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

# Use Node.js 16
nvm use 16

# Check node versions
nvm ls

# You must fork this and create your own repo
# Pull new changes

git remote add upstream https://github.com/Tycoon-Systems-Corp/video-streaming-client
git pull upstream
git merge your-branch
./extract_modules_dist

# Run init_app.js to create required dependency files. Else errors will throw in development
node init_app.js

# Install npm packages
npm install

## Start Developing

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

# Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
