// jsonUtils.js

// Function to fetch JSON data asynchronously
export async function fetchJsonData() {
  try {
    const response = await fetch('src/data/ah.json'); // Update the path accordingly
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error('Error fetching JSON data:', error);
    return null;
  }
}

// Function to find products by GTIN
export function findProductsByGtin(gtin, jsonData) {
  const matchingProducts = [];

  for (const product of jsonData.products) {
    if (product.gtins.includes(parseInt(gtin))) {
      matchingProducts.push(product);
    }
  }

  return matchingProducts.length > 0 ? matchingProducts : null;
}
