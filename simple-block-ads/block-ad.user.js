// ==UserScript==
// @name           Just for testing Chrome APP
// @description    Yes
// @version        1.0
// @author         eleven
// @namespace      eleven.net
// @include        *
// ==/UserScript==
window.addEventListener('load', function() {
  //filter
  let adFilter = ".adsbygoogle";
  adFilter += ",iframe[src*='pos.baidu.com']";
  adFilter += ",[id^=_],[id^=ad_],[id*=-ad-],[id*=_ad_],[class^=ad_],[class*=-ad-],[class*=_ad_]";
  //find and remove
  let adNodes = document.querySelectorAll(adFilter);
  Array.from(adNodes).forEach( n => n.remove());
}, false);