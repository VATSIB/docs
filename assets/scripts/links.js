document.addEventListener("DOMContentLoaded", () => {
  const setExternalLinks = () => {
    document.querySelectorAll("a[href]").forEach((link) => {
      const url = new URL(link.href, window.location.href);

      if (url.origin !== window.location.origin) {
        link.target = "_blank";
        link.rel = "noopener noreferrer";
      }
    });
  };

  setExternalLinks();

  // Нужно для navigation.instant в Material
  document.addEventListener("DOMContentLoaded", setExternalLinks);

  if (typeof document$ !== "undefined") {
    document$.subscribe(setExternalLinks);
  }
});