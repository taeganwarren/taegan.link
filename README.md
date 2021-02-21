# taegan.link

[![Netlify Status](https://api.netlify.com/api/v1/badges/a6b50957-c14b-44b9-9421-50a3b1b8721e/deploy-status)](https://app.netlify.com/sites/kind-jackson-748eb6/deploys)

Simple personal URL shortner with netlify.

Uses the netlify-shortener npm package to automatically add a given URL to the \_redirects file, push the changes to github, and copy the url to my clipboard.
Netlify will then automatically detect and deploy those changes.

I then have added this function to my `.zshrc` so I can do all of this with one command.

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

In addition to the link shortener, I added a frontend which uses handlebars and a custom generation script to produce a plain html and css homepage that displays all the current slugs and their destination URL's.