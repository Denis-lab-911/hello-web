const fs = require("fs");
const path = require("path");

describe("Vérification du titre <h1> dans index.html", () => {
  test("le titre doit être 'Hello World depuis GitHub Codespaces !'", () => {
    const filePath = path.resolve(__dirname, "../index.html");
    const html = fs.readFileSync(filePath, "utf8");

    document.body.innerHTML = html;

    const h1 = document.querySelector("h1");

    expect(h1).not.toBeNull();
    expect(h1.textContent.trim()).toBe(
      "Hello World depuis GitHub Codespaces !"
    );
  });
});
