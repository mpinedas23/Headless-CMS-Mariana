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
    const tableDataRows = document.querySelectorAll('.tableCardData');
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

    //left card
    document.querySelector('#LeftCard .fs-4').textContent = data.leftCard['main-title'];
    document.querySelector('#LeftCard .text-secondary .table_number').textContent = data.leftCard.subtitle;

    
    const leftRows = document.querySelectorAll('#LeftCard .leftRow');
    data.leftCard.items.forEach((item, index) => {
      const leftRow = leftRows[index];
      if (leftRow) {
        leftRow.querySelector('.left-text').textContent = item.title;
        leftRow.querySelector('.table_number').textContent = item.count;
      }
    });

    
    document.querySelector('#LeftCard .text-primary button').textContent = data.leftCard.detailsButton;


    //right card
  
    document.querySelector('#RightCard .fs-4').textContent = data.rightCard['main-title'];
    document.querySelector('#RightCard .text-secondary .table_number').textContent = data.rightCard.subtitle;

    
    const rightRows = document.querySelectorAll('#RightCard .rightRow');
    data.leftCard.items.forEach((item, index) => {
      const leftRow = leftRows[index];
      if (leftRow) {
        leftRow.querySelector('.left-text').textContent = item.title;
        leftRow.querySelector('.table_number').textContent = item.count;
      }
    });

    
    document.querySelector('#LeftCard .text-primary button').textContent = data.leftCard.detailsButton;
  })

  
  
  .catch(error => console.log('errors:', error));
