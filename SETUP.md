# Aleena & Sudheesh: three-day wedding invitation

Upload the WHOLE folder to GitHub (index.html, config.js, images/, music/). Do not upload single files on their own,
because the page finds its photos and music by their folders.

## Files and folders
- `index.html`: the invitation
- `config.js`: the settings you may want to edit (wishes database, music file, start point and volume)
- `images/`: every photo on the page, one folder per section (see `images/README.txt`). Replace a file with the same name to change a photo
- `music/`: the background song (`bgm.mp3`) and notes (`music/README.txt`)
- `firebase-rules.json`: security rules for the wishes wall

## 1. Publish
Put this folder in your GitHub repo as `wedding/`. The page is then at `https://<account>.github.io/<repo>/wedding/`.
To check it on your own computer first, open `index.html` from the unzipped folder (keep the folders together).
Open `index.html` in a text editor and set `og:url` to the page address. `og:image` already points to
`images/social-preview/og-thumb.jpg`; for the WhatsApp preview to show, change it to the full https address of that file, for example
`https://<account>.github.io/<repo>/wedding/images/social-preview/og-thumb.jpg`.

## 2. Change photos
Every photo is its own file inside `images/<section>/`. To change one, save your new photo with the same file name (.jpg) in the same folder.
`images/README.txt` lists which file appears where, and the best shape for each.

## 3. Make wishes appear on the page for everyone (about 5 minutes, free)
A static GitHub page has nowhere to keep guests' wishes, so it needs a small database. Firebase's free plan is plenty.
1. Go to console.firebase.google.com, create a project (Google Analytics can stay off).
2. Build > Realtime Database > Create database. Pick a region near India, start in locked mode.
3. Open the Rules tab, paste everything from `firebase-rules.json`, press Publish.
4. Copy the database address shown at the top of the Data tab (it looks like
   `https://xxxx-default-rtdb.asia-southeast1.firebasedatabase.app`) into `wishesDb` in `config.js`.
5. Reload the page. Every wish now shows on the wall right after it is sent, and appears for other guests within about 10 seconds.
To remove a wish, delete it in the Firebase console (Data tab).
Until step 4 is done the page is in preview mode: wishes are kept on that one device only, and a small note says so.
To see the wall with sample wishes, add `?demo=1` to the page address.

## 4. Music
The song is in `music/bgm.mp3` (saved at 128 kbps so it loads quickly). It starts as soon as a guest taps "Open the doors", from 0:24 of the song,
and fades in very softly. A small round button at the bottom left lets guests pause or play.
Change the file name, start point or loudness in `config.js` (`music`, `musicStart`, `musicVolume`).
If there is no sound: make sure the `music` folder was uploaded next to `index.html`, and that the browser tab is not muted.
GitHub Pages supports jumping to the start point; some other hosts may start from 0:00.
Film songs are copyrighted, so make sure you are allowed to use the track publicly.

## How wishes are protected
- Every wish is drawn with `textContent`, never as HTML, so pasted code shows as plain text and cannot run.
- The page has a Content Security Policy: only its own script can run, and it can only talk to your Firebase database.
- Text is cleaned (hidden and control characters removed) and limited to 60 characters for the name and 400 for the message. Web links are refused.
- A hidden trap field catches simple bots. A wish needs at least 2 seconds of writing time. Each browser can send one wish every 30 seconds and five in total.
- Firebase itself enforces the same limits through `firebase-rules.json`: guests can only add new wishes, never edit or delete them, and cannot store extra fields.
- The rules also stop anyone downloading the whole database in one go: reads are limited to 50 wishes at a time.
- No password or secret key is stored on the page. The database address alone is not enough to change or delete anything.
- Anything read back from the database is checked again before it is shown.
Optional extra: in the Firebase console you can turn on App Check to block traffic that does not come from your page.
