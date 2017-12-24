
//filters
let filters = [
  ".adsbygoogle",
  "iframe[src*='pos.baidu.com']",
  "[id^=_],[id^=ad_],[id*=-ad-],[id*=_ad_]",
  "[class^=ad_],[class*=-ad-],[class*=_ad_]",
  "#daily_topic_flnr, #todayFix",
  ".IL_BASE" //infolinks
];
let selector = filters.join(",");
console.log(selector);

//find and remove
let adNodes = document.querySelectorAll(filters.join(","));
Array.from(adNodes).forEach( n => n.remove());