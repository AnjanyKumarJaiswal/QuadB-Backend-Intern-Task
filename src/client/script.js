document.addEventListener('DOMContentLoaded', () => {
    fetchCryptoData();
  });
  
  async function fetchCryptoData() {
    try {
      const response = await fetch('/stocks'); // Fetch data from backend
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const cryptoData = data.data;
  
      if (cryptoData && cryptoData.length > 0) {
        updateCryptoTable(cryptoData);
      } else {
        console.error('No crypto data received from the server.');
      }
    } catch (error) {
      console.error('Error fetching crypto data:', error);
    }
  }
  
  function updateCryptoTable(data) {
    const tableBody = document.getElementById('crypto-data');
    tableBody.innerHTML = ''; // Clear existing data
  
    data.forEach((crypto, index) => {
      const row = document.createElement('tr');
  
      row.innerHTML = `
        <td>${index + 1}</td>
        <td><img src="${crypto.name.toLowerCase()}-logo.png" alt="${crypto.name} Logo"> ${crypto.name}</td> 
        <td>₹ ${crypto.last.toLocaleString('en-IN')}</td>
        <td>₹ ${crypto.buy.toLocaleString('en-IN')} / ₹ ${crypto.sell.toLocaleString('en-IN')}</td>
        <td class="${crypto.buy > crypto.sell ? 'positive-change' : 'negative-change'}">${(crypto.buy - crypto.sell).toFixed(2)}%</td>
        <td class="${crypto.buy > crypto.sell ? 'positive-savings' : 'negative-savings'}">${crypto.buy > crypto.sell ? '▲' : '▼'} ₹ ${(Math.abs(crypto.buy - crypto.sell)).toLocaleString('en-IN')}</td>
      `;
  
      tableBody.appendChild(row);
    });
  }