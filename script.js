// Dharmi's Boutique — Interactive Website

document.addEventListener("DOMContentLoaded", () => {

  // Mobile menu
  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.querySelector(".nav");

  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }

  // Style Finder
  const styleData = {};

  document.querySelectorAll(".options").forEach((group) => {

    const key = group.dataset.key;

    group.querySelectorAll("button").forEach((button) => {

      button.addEventListener("click", () => {

        group.querySelectorAll("button").forEach((btn) => {
          btn.classList.remove("active");
        });

        button.classList.add("active");

        styleData[key] = button.dataset.value;
      });

    });

  });

  const findStyleButton = document.querySelector("#find-style");
  const resultBox = document.querySelector(".result");

  if (findStyleButton && resultBox) {

    findStyleButton.addEventListener("click", () => {

      const occasion = styleData.occasion || "festive";
      const silhouette = styleData.silhouette || "personalised";
      const mood = styleData.mood || "elegant";

      const occasionText = {
        bridal: "A statement bridal or festive look",
        festive: "A polished festive designer look",
        party: "A modern party look",
        casual: "A refined everyday custom look"
      };

      const silhouetteText = {
        lehenga: "with a beautiful lehenga silhouette",
        blouse: "with a statement blouse",
        threepiece: "with a coordinated three-piece outfit",
        western: "with a contemporary western silhouette",
        personalised: "tailored around your preferred silhouette"
      };

      const moodText = {
        elegant: "with an elegant and refined finish",
        bold: "with a bold statement finish",
        minimal: "with a clean and minimal finish",
        royal: "with a rich and royal finish"
      };

      const finalOccasion =
        occasionText[occasion] || occasionText.festive;

      const finalSilhouette =
        silhouetteText[silhouette] || silhouetteText.personalised;

      const finalMood =
        moodText[mood] || moodText.elegant;

      resultBox.innerHTML = `
        <strong>Your Style Direction</strong>

        <p>
          ${finalOccasion} ${finalSilhouette},
          ${finalMood}.
        </p>

        <a
          class="btn primary"
          href="https://wa.me/917567504456?text=${encodeURIComponent(
            "Hi Dharmi's Boutique, I used your Style Finder and would like to discuss my look."
          )}"
          target="_blank"
          rel="noopener"
        >
          Discuss on WhatsApp
        </a>
      `;

      resultBox.style.display = "block";

      resultBox.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });

    });

  }

});
