import fs from "fs";
import path from "path";

describe("Vérification du titre <h1> dans index.html", () => {
  test("le titre doit être 'Hello World depuis GitHub Codespaces !'", () => {
    // Charger le contenu du HTML
    const filePath = path.resolve(__dirname, "../index.html");
    const html = fs.readFileSync(filePath, "utf8");

    // Injecter le HTML dans JSDOM
    document.body.innerHTML = html;

    // Récupérer le <h1>
    const h1 = document.querySelector("h1");

    // Vérifier qu'il existe
    expect(h1).not.toBeNull();

    // Vérifier le texte exact
    expect(h1.textContent.trim()).toBe("Hello World depuis GitHub Codespaces !");
  });
});
