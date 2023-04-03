This is the main TLS website's redesign build repository

## Tech stack used
[comment]: <this was taken from: https://home.aveek.io/GitHub-Profile-Badges/>
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)
![Next.js](https://img.shields.io/badge/Next.js-000000.svg?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React.js](https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black)
![Sass](https://img.shields.io/badge/Sass-CC6699.svg?style=for-the-badge&logo=Sass&logoColor=white)
![Sharp](https://img.shields.io/badge/sharp-99CC00.svg?style=for-the-badge&logo=sharp&logoColor=white)
![cPanel](https://img.shields.io/badge/cPanel-FF6C2C.svg?style=for-the-badge&logo=cPanel&logoColor=white)
![WordPress](https://img.shields.io/badge/WordPress-21759B.svg?style=for-the-badge&logo=WordPress&logoColor=white)

## Installation on local
1. Git clone repository
1. `cd` to this folder directory
1. Run `npm install` via CLI
1. Ignore any npm audit fix requests

## Running on local
1. Run `npm run build` via CLI. This creates a build of the Next.js app
1. Run `npm run dev` via CLI to start the website at https://localhost:3000

## Deploying build to cPanel
`Information taken from: https://www.youtube.com/watch?v=1ykSXau838c&t=401s`
1. Delete `.next` folder and `.node_modules` folder
1. Run `npm run build` via CLI.
1. Zip the folder except redundant files such as `.git`, `.gitignore`, `readme.md`, and `node_modules`
1. Enter the `https://thelasallian.com:2083` cPanel site
1. Log in using authorized credentials
1. Maneuver to the `\developer.thelasallian.com\` folder
1. Upload folder and unzip in same cPanel directory
1. `Tools > Application Manager` and search for the `developer.thelasallian.com` domain. Run `Ensure Dependencies`
1. Check `https://www.developer.thelasallian.com` for expected changes.