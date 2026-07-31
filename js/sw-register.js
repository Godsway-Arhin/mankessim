if ("serviceWorker" in navigator) {
  window.addEventListener("load", async () => {
    try {
      const registration = await navigator.serviceWorker.register("/service-worker.js");

      registration.update();

      console.log("Service Worker registered.");

    } catch (error) {
      console.error("Service Worker registration failed:", error);
    }
  });
}
