//import products from "./produtos.json"
import fs, { writeFileSync } from "node:fs"
import path from "node:path"

const productJson = JSON.stringify([
  {
    "name": "Pair of Socks",
    "amountInStock": 100,
    "unitValue": 5
  },

  {
    "name": "T-Shirt",
    "amountInStock": 500,
    "unitValue": 45
  }
], null, 0)

const fileOutPath = path.join(__dirname, "generated-products.json")

const products = JSON.parse(productJson)

fs.writeFileSync(fileOutPath, productJson)
console.log(productJson)
console.log(products)
//products.forEach(product => console.log(product.name))

