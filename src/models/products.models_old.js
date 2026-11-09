import fs from "fs/promises";
import path from "path";
// import datos from "../data/data.json" with { type: "json" };

const _dirname = import.meta.dirname;
const dataPath = path.join(_dirname, "../data/data.json");

export async function getProductsModels() {
  try {
    const data = await fs.readFile(dataPath, "utf8");
    console.log(data);

    const products = JSON.parse(data);
    console.log("Productos:", products);
    return products;
  } catch (error) {
    console.error("Error al leer el archivo de productos:", error);
    throw error;
  }
}

// console.log(datos);

// export async function getProductsModels() {
//   return datos;
// }
