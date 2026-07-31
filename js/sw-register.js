if ("serviceWorker" in navigator) {
  window.addEventListener("load", async () => {
    try {
      const registration = await navigator.serviceWorker.register("/service-worker.js");

      registration.addEventListener("updatefound", () => {
        const worker = registration.installing;

        worker.addEventListener("statechange", () => {
          if (
            worker.state === "installed" &&
            navigator.serviceWorker.controller
          ) {
            if (confirm("A new version of Mankessim Heritage is available. Reload now?")) {
              window.location.reload();
            }
          }
        });
      });

    } catch (err) {
      console.log("Service Worker Error:", err);
    }
  });
}