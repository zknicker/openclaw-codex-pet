import { existsSync, readFileSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

const repoRoot = fileURLToPath(new URL("..", import.meta.url));
const errors = [];

function readJson(path) {
  try {
    return JSON.parse(readFileSync(path, "utf8"));
  } catch (error) {
    errors.push(`${path}: ${error.message}`);
    return null;
  }
}

const petJsonPath = join(repoRoot, "pet.json");
const spritesheetPath = join(repoRoot, "spritesheet.webp");
const requiredPaths = [
  petJsonPath,
  spritesheetPath,
  join(repoRoot, "README.md"),
  join(repoRoot, "assets", "previews", "contact-sheet.png"),
];

for (const requiredPath of requiredPaths) {
  if (!existsSync(requiredPath)) {
    errors.push(`missing ${requiredPath.replace(`${repoRoot}/`, "")}`);
  }
}

const pet = existsSync(petJsonPath) ? readJson(petJsonPath) : null;
if (pet) {
  if (pet.id !== "openclaw") {
    errors.push("pet.json id must be openclaw");
  }

  if (pet.displayName !== "Openclaw") {
    errors.push("pet.json displayName must be Openclaw");
  }

  if (pet.spritesheetPath !== "spritesheet.webp") {
    errors.push("pet.json spritesheetPath must be spritesheet.webp");
  }
}

if (existsSync(spritesheetPath)) {
  const spritesheetSize = statSync(spritesheetPath).size;
  if (spritesheetSize === 0) {
    errors.push("spritesheet.webp is empty");
  }
}

for (const state of [
  "idle",
  "waving",
  "running",
  "running-right",
  "running-left",
  "waiting",
  "jumping",
  "failed",
  "review",
]) {
  const previewPath = join(repoRoot, "assets", "previews", "gifs", `${state}.gif`);
  if (!existsSync(previewPath)) {
    errors.push(`missing ${previewPath.replace(`${repoRoot}/`, "")}`);
  }
}

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log("Openclaw pet package is valid.");
