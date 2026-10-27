# 3. Website

- `index.html` : the landing page (what visitors see first), with "Use on the web" and "Download the Android app" buttons.
- `app/` : the web version of the app, with everything the Android app has. Same accounts, same wallet.
- `downloads/` : put your `lookup-mobile-hub.apk` here.
- `assets/`, `landing.css`, `landing.js` : landing page files.

## Normal setup (recommended)
The server (folder 1) serves this website, so you don't host it separately. `app/config.js` says `window.LMH_API = ""`, meaning "use the server I was loaded from".

## Hosting these files somewhere else (for example lookup.wuaze.com)
1. Edit `app/config.js` and set `window.LMH_API = "https://YOUR-SERVER";`
2. Upload everything in this folder to the host's web folder (`htdocs` on InfinityFree).
3. On the server, `APP_ORIGIN` must include your website address (it already lists https://lookup.wuaze.com).
The admin panel always stays on the server's own address.
