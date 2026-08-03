let deferredPrompt;

window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;

    const popup = document.getElementById("install-popup");

    if (popup) {
        popup.classList.remove("hidden");
    }
});

document.addEventListener("DOMContentLoaded", () => {

    const installBtn = document.getElementById("install-now");
    const laterBtn = document.getElementById("install-later");

    installBtn?.addEventListener("click", async () => {

        if (!deferredPrompt) return;

        deferredPrompt.prompt();

        await deferredPrompt.userChoice;

        deferredPrompt = null;

        document.getElementById("install-popup").classList.add("hidden");

    });

    laterBtn?.addEventListener("click", () => {

        document.getElementById("install-popup").classList.add("hidden");

    });

});
