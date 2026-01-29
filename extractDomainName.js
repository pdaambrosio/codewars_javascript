const domainName = (url) =>
  /**
   * It returns the domain name from a URL.
   * @param url - The URL to extract the domain name from.
   */
  url.replace(/(https?:\/\/)?(www\.)?/, "").split(".")[0];

console.log(domainName("https://google.com")); // "google"
console.log(domainName("https://google.co.jp")); // "google"
console.log(domainName("www.xakep.ru")); // "xakep"
console.log(domainName("https://youtube.com")); // "youtube"
