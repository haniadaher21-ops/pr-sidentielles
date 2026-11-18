const official = "https://melenchon2027.fr";
const chapter = official + "/programme/livre/";
const list = document.querySelector("#liste");
const sheets = document.querySelector("#fiches");
const search = document.querySelector("#recherche");
const result = document.querySelector("#resultat");

function chart(graph) {
  if (!graph) return "";
  const [title, first, second, unit, scale = Math.max(first[1], second[1])] = graph;
  return `<figure class="chart"><figcaption>${title}</figcaption>
    ${[first, second].map(([label, value]) => `<div class="bar-row">
      <div><span>${label}</span><strong>${value}${unit}</strong></div>
      <div class="track" aria-hidden="true"><span style="--width:${value / scale * 100}%"></span></div>
    </div>`).join("")}</figure>`;
}

const pensionTable = `<figure class="chart"><figcaption>Trois situations de retraite</figcaption>
  <table><thead><tr><th scope="col">Situation</th><th scope="col">Ce que le programme propose</th></tr></thead>
  <tbody><tr><th scope="row">Carrière complète</th><td>Pension au moins au niveau du SMIC revalorisé.</td></tr>
  <tr><th scope="row">Carrière incomplète</th><td>Suppression de la décote. Le montant dépendrait des règles de calcul retenues.</td></tr>
  <tr><th scope="row">Minimum vieillesse</th><td>Relèvement au seuil de pauvreté.</td></tr></tbody></table></figure>`;

for (const [id, title, topics, question, number, unit, policies, example, concern, response, sources, graph] of fiches) {
  const card = document.createElement("a");
  card.href = "#" + id;
  card.className = "card";
  card.innerHTML = `<span class="topics">${topics}</span><strong>${title}</strong>
    <span class="card-number">${number}</span><span class="units">${unit}</span><span class="arrow" aria-hidden="true">↗</span>`;
  list.append(card);

  const article = document.createElement("article");
  article.id = id;
  article.className = "sheet";
  article.tabIndex = -1;
  article.setAttribute("aria-labelledby", id + "-titre");
  article.innerHTML = `<header class="sheet-head">
    <div><p class="edition">${title}</p><h2 id="${id}-titre">${question}</h2></div>
    <div class="metric"><span>Proposition 2027</span><strong>${number}</strong><p>${unit}</p></div>
    </header>
    <div class="sheet-body">
      <div><h3>Les mesures clés</h3><ul class="policies">${policies.map(policy => `<li>${policy}</li>`).join("")}</ul></div>
      <div><h3>Dans la vie quotidienne</h3><p>${example}</p>${id === "retraites" ? pensionTable : chart(graph)}</div>
      <aside class="objection"><h3>${concern}</h3><p>${response}</p></aside>
    </div>
    <footer class="sheet-foot"><div><h3>Sources de la fiche</h3><ul>${sources.map(([label, path]) => {
      const url = path.startsWith("https://") ? path : path.startsWith("/") ? official + path : chapter + path;
      return `<li><a href="${url}">${label} ↗</a></li>`;
    }).join("")}</ul></div><a href="#themes">Toutes les fiches ↑</a></footer>`;
  sheets.append(article);
}

const normalize = value => value.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase();
const aliases = {
  budget: "loyer courses facture",
  retraites: "retraite pension ehpad",
  securite: "police plainte braquage trafic",
  sante: "medecin hopital mutuelle urgence"
};
const keywords = fiches.map(([id, ...fields]) => normalize(fields.slice(0, 9).flat().join(" ") + " " + (aliases[id] || "")));

search.addEventListener("input", () => {
  const terms = normalize(search.value).trim().split(/\s+/).filter(Boolean);
  let count = 0;
  for (const [index, card] of Array.from(list.children).entries()) {
    const match = terms.every(term => keywords[index].includes(term));
    card.hidden = !match;
    count += Number(match);
  }
  result.hidden = terms.length === 0;
  result.textContent = count === 0 ? "Aucune fiche trouvée. Essayez un autre mot." : `${count} fiche${count === 1 ? "" : "s"}`;
});

function revealSheet() {
  const target = document.getElementById(location.hash.slice(1));
  if (!target || !target.classList.contains("sheet")) return;
  target.focus({preventScroll: true});
  target.scrollIntoView({block: "start"});
}
window.addEventListener("hashchange", revealSheet);
if (location.hash) revealSheet();
