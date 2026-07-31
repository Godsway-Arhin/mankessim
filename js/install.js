let deferredPrompt;

window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;

    const installBtn = document.getElementById("installApp");

    if (installBtn) {
        installBtn.style.display = "inline-flex";

        installBtn.addEventListener("click", async () => {
            deferredPrompt.prompt();

            const choice = await deferredPrompt.userChoice;

            if (choice.outcome === "accepted") {
                console.log("App Installed");
            }

            deferredPrompt = null;
        });
    }
});
