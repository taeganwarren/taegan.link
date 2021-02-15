# taegan.link

[![Netlify Status](https://api.netlify.com/api/v1/badges/a6b50957-c14b-44b9-9421-50a3b1b8721e/deploy-status)](https://app.netlify.com/sites/kind-jackson-748eb6/deploys)

Simple personal URL shortner with netlify.

Uses the netlify-shortener npm package to automatically add a given URL to the \_redirects file, push the changes to github, and copy the url to my clipboard.
Netlify will then automatically detect and deploy those changes.

I then have added this function to my `.zshrc` so I can do all of this with one simple command from anywhere in my terminal.

Ex: `shorten <domain> <slug>`
```
shorten() {
        cd /home/taegan/programming/github/taegan.link
        npm run shorten "$1" "$2"
        cd -
}
```
The npm package has support for providing your own slug to the url or will generate one for you if one is not provided.

More info about how this works and how to make your own: https://www.youtube.com/watch?v=HL6paXyx6hM

2/15/21 Update: I have created a simple frontend with Gatsby to display all the current short links and their destinations. I have modified the netlify-shortener package to generate a json file with all the links and to build the project before commiting so the build process in netlify will be faster.
