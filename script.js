document.addEventListener("DOMContentLoaded", function () {
    // 1. KUSOGEA KWENYE SEHEMU HUSIKA (Smooth Scroll Active Link)
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            // Ondoa 'active' kwenye link zote
            navLinks.forEach(item => item.classList.remove("active"));
            // Weka 'active' kwenye hii iliyobonyezwa
            this.classList.add("active");
        });
    });

    // 2. BADILISHA LUGHA (Language Switcher - Mfano Rahisi)
    const btnSw = document.getElementById("btnSw");
    const btnEn = document.getElementById("btnEn");

    if (btnSw && btnEn) {
        btnSw.addEventListener("click", function () {
            btnSw.classList.add("active");
            btnEn.classList.remove("active");
            // Hapa unaweza kuongeza mfumo wa kubadili maandishi kwenda Kiswahili ukipenda baadae
        });

        btnEn.addEventListener("click", function () {
            btnEn.classList.add("active");
            btnSw.classList.remove("active");
            // Hapa unaweza kuongeza mfumo wa kubadili maandishi kwenda Kiingereza baadae
        });
    }

    // 3. KUWEKA MWAKA MPYA KWENYE COPYRIGHT AUTOMATICALLY
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
