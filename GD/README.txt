Geometry Dash PWA

Extract this ZIP and upload its contents to a folder on an HTTPS website.
Open the hosted index page online once, then install / Add to Home Screen.
Opening index.html directly from your device does not enable service workers.

The app embeds https://web-dashers.github.io/ in a fullscreen iframe.
The wrapper caches offline. This does NOT download or cache the external game.
Offline gameplay is not included.

The manifest requests landscape. Browsers that do not support native orientation
locking use a CSS rotation fallback when your device is held in portrait.
Fullscreen and orientation support depend on the device/browser.
Embedding depends on the external game continuing to allow iframes.

Replace icon.png (512 x 512), icon-192.png (192 x 192), and icon.svg with your icons.
icon.png is also used for the iPhone Home Screen.
After changing cached files, increment CACHE in sw.js (v1 to v2, etc.).
Existing installations may need to be reinstalled to refresh Home Screen icons.
