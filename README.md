# COMPLEX APP
A [complex app](https://www.udemy.com/course/learn-javascript-full-stack-from-scratch/) from Brad Schiff in Udemy.

## Running Local Development

### Prerequisites
- Docker (v4.36.0)
- Node (v22.11.0)

### CLI Commands
Open a terminal for each command
```bash 
npm run watch:lib:interfaces
npm run watch:lib:repositories
npm run watch:lib:services
npm run watch:web:express-ts
docker compose up watch 
```

### Local Web URLs
- [Complex Web App](http://localhost:8080)
- [Mongo Express](http://localhost:8081)

### Fixes of issues encountered during development

#### Express Typescript

1. The views folder is not included in typescript build.
    
    Causes
    - .ejs files is not handled by typescript

    Fixes
    - copy the views file to dist/src folder during build

        ```bash
        npm i copy-files-from-to
        ```
    - add copyFiles property to ./web/express-ts-css/package.json
        ```json
        {
           "copyFiles": [
                {
                    "from": "src/views/**/*.ejs",
                    "to": "dist/src/views/"
                }
        }
        ```
    - add copy-files-from-to to build script.
        ```json
        {
            "build": "tsc --build --clean && tsc --build && copy-files-from-to",
        }
        ```