### How To Use

Write this in cmd to use this starter

```
pnpm create next-app {project-name} -e https://github.com/rishi0777/rms-next-app
```

### SET GITHUB_TOKEN

- GITHUB_TOKEN is required for installing dependencies/packages of @rms-forge
- To set it in windows environment `set GITHUB_TOKEN=`
- To set it in linux/MAC environment `export const GITHUB_TOKEN=`
- Its value is which you have got after making the classic token in the Github
  account where your @rms-forge repository is present.
- Classic Token must have permission to read:packages

### Remember to create a .env.local file

1. Copy the content .env.local.example
1. Add the value of necessary constants in it.

### Update the name of package in package.json file

```
 "name": "rms-next-app",
```

```
 "name": "your-package-name",
```
