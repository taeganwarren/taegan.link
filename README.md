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
        if [ "$2" ]
        then
                npm run shorten "$1" "$2"
        else
                npm run shorten "$1"
        fi
        cd -
}
```
The npm package has support for providing your own slug to the url or will generate one for you if one is not provided.