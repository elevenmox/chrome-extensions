
[脚本格式:](https://github.com/EchoFUN/melodycoder/issues/12)
```javascipt
// ==UserScript==
// @name           XX
// @description    XX
// @version        XX
// @author         XX
// @namespace      XX
// @include        *
// ==/UserScript==
window.addEventListener('load', function() {
  // block method here
}, false);
```

[应用:](https://stackoverflow.com/questions/5258989/manually-adding-a-userscript-to-google-chrome#answer-13672143)

1. Browse in Chrome to chrome://extensions
2.  Drag the .user.js file into that page.

1. Right click on your "Chrome" icon.
2. Choose properties
3. At the end of your target line, place these parameters: `--enable-easy-off-store-extension-install`
4. It should look like: `chrome.exe --enable-easy-off-store-extension-install`
5. Start Chrome by double-clicking on the icon
