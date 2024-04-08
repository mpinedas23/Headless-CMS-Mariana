fetch("assets/data/content.json")
  .then(response => response.json())
  .then(data => {
    console.log(data); 

    // info cards
    const buttons = document.querySelectorAll('.data-container button');
    data.infoCards.forEach((card, index) => {
      const button = buttons[index];
      if (button) {
        const titleSpan = button.querySelector('.card-text');
        const countSpan = button.querySelector('.fw-bold');
        if (titleSpan && countSpan) {
          titleSpan.textContent = card.title;
          countSpan.textContent = card.count;
        }
      }
    });

    //tableCard
    document.getElementById('tableCardmainTitle').textContent = data.tableCard.mainTitle;
    document.getElementById('tableCardmainSubtitle').textContent = data.tableCard.mainSubtitle;
    const tableDataRows = document.querySelectorAll('.left-table-data');
    data.tableCard.tableData.forEach((item, index) => {
      const tableDataRow = tableDataRows[index];
      if (tableDataRow) {
        const titleSpan = tableDataRow.querySelector('.text-wrap');
        const countSpan = tableDataRow.querySelector('.fw-bold');
        if (titleSpan && countSpan) {
          titleSpan.textContent = item.title;
          countSpan.textContent = item.count;
        }
      }
    });

    
    

  })
  .catch(error => console.log('errors:', error));
