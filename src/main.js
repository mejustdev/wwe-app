// main.js

import { fetchJsonData, findProductsByGtin } from './util/jsonUtils';

// Assuming you have loaded the JSON data into a variable named jsonData
// For simplicity, you can load it using the fetchJsonData function

// Wait for JSON data to be fetched before proceeding
fetchJsonData().then((jsonData) => {
  if (jsonData) {
    initScanner(jsonData); // Pass the JSON data to your scanner initialization function
  } else {
    console.error('Failed to load JSON data.');
  }
});

function initScanner(jsonData) {
  var resultContainer = document.getElementById('qr-reader-results');
  var lastResult,
    countResults = 0;

  var html5QrcodeScanner = new Html5QrcodeScanner('qr-reader', { fps: 10, qrbox: 250 });

  function onScanSuccess(decodedText, decodedResult) {
    if (decodedText !== lastResult) {
      ++countResults;
      lastResult = decodedText;
      console.log(`Scan result = ${decodedText}`, decodedResult);

      // Check if decodedText matches any gtins
      const matchingProducts = findProductsByGtin(decodedText, jsonData);

      if (matchingProducts) {
        console.log('Matching Products:', matchingProducts);
        resultContainer.innerHTML += `<div>[${countResults}] - ${matchingProducts.map(product => product.title).join(', ')}</div>`;
      } else {
        resultContainer.innerHTML += `<div>[${countResults}] - No matching product found</div>`;
      }

      // Optional: To close the QR code scanning after the result is found
      html5QrcodeScanner.clear();
    }
  }

  // Optional callback for error, can be ignored.
  function onScanError(qrCodeError) {
    // This callback would be called in case of qr code scan error or setup error.
    // You can avoid this callback completely, as it can be very verbose in nature.
  }

  html5QrcodeScanner.render(onScanSuccess, onScanError);
}

// ... (rest of your code)
