This is the main TLS website's redesign build repository

## Installation on local
1. Git clone repository
1. `cd` to this folder directory
1. Run `npm install` via CLI
1. Ignore any npm audit fix requests

## Running on local
1. Run `npm run build` via CLI. This creates a build of the Next.js app
1. Run `npm run dev` via CLI to start the website at https://localhost:3000

## Deploying build to Cpanel
`Information taken from: https://www.youtube.com/watch?v=1ykSXau838c&t=401s`
1. Delete `.next` folder and `.node_modules` folder
1. Run `npm run build` via CLI.
1. Zip the folder except redundant files such as `.git`, `.gitignore`, `readme.md`, and `node_modules`
1. Enter the `https://thelasallian.com:2083` Cpanel site
1. Log in using authorized credentials
1. Maneuver to the `\developer.thelasallian.com\` folder
1. Upload folder and unzip in same Cpanel directory
1. `Tools > Application Manager` and search for the `developer.thelasallian.com` domain. Run `Ensure Dependencies`
1. Check `https://www.developer.thelasallian.com` for expected changes.