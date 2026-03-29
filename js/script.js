/* HERO BEAM */
const hero = document.getElementById("hero");
const heroBeam = document.getElementById("heroBeam");
const logo = document.getElementById("lighthouseLogo");
const heroOrigin = { x: 390, y: -90 };

hero.addEventListener("mousemove", (e) => {
  const rect = hero.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  const dx = mouseX - heroOrigin.x;
  const dy = mouseY - heroOrigin.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  const angle = Math.atan2(dy, dx) * (180 / Math.PI);

  heroBeam.style.width = distance + "px";
  heroBeam.style.transform =
    `translate(${heroOrigin.x}px, ${heroOrigin.y - 20}px) rotate(${angle}deg)`;
});

/* SECTION 1 BEAM + LETTER EFFECT */
const section = document.getElementById("section1");
const sectionBeam = document.getElementById("sectionBeam");
const text = document.getElementById("beamText");

const origin = { x: 670, y: 30 };

// split letters
text.innerHTML = text.innerText.split("").map(c =>
  `<span class="beam-letter">${c === " " ? "&nbsp;" : c}</span>`
).join("");

section.addEventListener("mousemove", (e) => {
  const rect = section.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  const dx = mouseX - origin.x;
  const dy = mouseY - origin.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  const angle = Math.atan2(dy, dx) * (180 / Math.PI);

  sectionBeam.style.width = distance + "px";
  sectionBeam.style.transform =
    `translate(${origin.x}px, ${origin.y}px) rotate(${angle}deg)`;

  document.querySelectorAll(".beam-letter").forEach(letter => {
    const r = letter.getBoundingClientRect();
    const cx = r.left + r.width / 2 - rect.left;
    const cy = r.top + r.height / 2 - rect.top;

    const d = Math.sqrt((cx - origin.x) ** 2 + (cy - origin.y) ** 2);
    const a = Math.abs(angle - (Math.atan2(cy - origin.y, cx - origin.x) * 180 / Math.PI));

    letter.style.opacity = (a < 5 && d < distance) ? 1 : 0;
  });
});
