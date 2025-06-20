document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('ruleSearch');
  const tables = [
    document.getElementById('inGameTable'),
    document.getElementById('discordTable')
  ];

  if (!searchInput) {
    console.error('Search input element with id "ruleSearch" not found.');
    return;
  }

  if (tables.some(table => !table)) {
    console.error('One or more tables with ids "inGameTable" or "discordTable" not found.');
    return;
  }

  searchInput.addEventListener('input', () => {
    const filter = searchInput.value.toLowerCase().trim();

    tables.forEach(table => {
      const rows = table.tBodies[0].rows;
      for (let row of rows) {
        // Combine text from all cells in the row
        const rowText = Array.from(row.cells).map(cell => cell.textContent.toLowerCase()).join(' ');
        row.style.display = rowText.includes(filter) ? '' : 'none';
      }
    });
  });
});
