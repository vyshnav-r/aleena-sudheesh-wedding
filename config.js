/* Settings for the invitation. Everything here is optional. */
window.WEDDING_CONFIG = {
  // SHARED WISHES WALL. Paste your Firebase Realtime Database address here so that every wish
  // appears on the page for all guests. See SETUP.md (about 5 minutes, free).
  // Example: 'https://your-project-default-rtdb.asia-southeast1.firebasedatabase.app'
  // Left empty, the page runs in preview mode: wishes stay on the visitor's own device only.
  wishesDb: '',

  // Where wishes are stored inside the database (letters, numbers, - and _ only)
  wishesNode: 'aleena-sudheesh/wishes',

  // Background music kept in this repo (music folder). It starts as soon as a guest opens the doors.
  music: 'music/bgm.mp3',
  musicStart: '24',     // start the song from this many seconds (24 = 0:24)
  musicVolume: '0.5'    // 0.1 (very soft) to 1 (full). It fades in gently to this level.
};
