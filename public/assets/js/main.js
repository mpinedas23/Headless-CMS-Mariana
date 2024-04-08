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


      // Update the main title
      const mainTitleElement = document.querySelector('#RightCard .main-title');
      if (mainTitleElement) {
        mainTitleElement.textContent = data['RightCard']['main-title'];
      }
  
      // Update the subtitle
      const subtitleElement = document.querySelector('#RightCard .table_number');
      if (subtitleElement) {
        subtitleElement.textContent = data['RightCard']['subtitle'];
      }
  
      // Loop through each item and update the corresponding row
      data['RightCard']['items'].forEach((item, index) => {
        const row = document.querySelectorAll('#RightCard .rightRow')[index]; // Select the row at the current index
        if (row) {
          const title = row.querySelector('.right-text'); // Select the title element within the row
          const count = row.querySelector('.table_number'); // Select the count element within the row
  
          // Update the title and count
          if (title) {
            title.textContent = item['title'];
          }
          if (count) {
            count.textContent = item['count'];
          }
        }
      });
  
      // Update the details button
      const detailsButtonElement = document.querySelector('#RightCard .text-primary button');
      if (detailsButtonElement) {
        detailsButtonElement.textContent = data['RightCard']['detailsButton'];
      }
    })

  
  
  .catch(error => console.log('errors:', error));
