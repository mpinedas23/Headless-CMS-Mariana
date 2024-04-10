fetch("assets/data/content.json")
  .then(response => response.json())
  .then(data => {
    console.log(data); 

    //side bar
    
    const sidebarItems = document.querySelectorAll('.items-sidebar');
    data.sidebar.forEach((item, index) => {
      const sidebarText = sidebarItems[index].querySelector('.sidebar-text'); //.sidebar-text refers to the class applied to the items in my html, it is targeting all elements with it inside my sidebar.
      
      if (sidebarText) {
        sidebarText.textContent = item.text; //(item.text) refers to the content inside the json file
      } 
    });

    //header
    const headerData = data.header;
    document.getElementById('overview-title').textContent = headerData.overviewTitle;
    document.getElementById('James-Name').textContent = headerData.profileName;

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

    //bottom left card
    document.querySelector('#LeftCard .fs-4').textContent = data.leftCard['main-title'];
    document.querySelector('#LeftCard .text-secondary .table_number').textContent = data.leftCard.subtitle;

    
    const leftRows = document.querySelectorAll('#LeftCard .leftRow');
    data.leftCard.items.forEach((item, index) => {
      const leftRow = leftRows[index];
      if (leftRow) {
        leftRow.querySelector('.left-text').textContent = item.title;
        leftRow.querySelector('.table_number').textContent = item.count;
      } 
      document.querySelector('#LeftCard .text-primary button').textContent = data.leftCard.detailsButton;
    });


    // bottom right card
    document.querySelector('#RightCardMainTitle').textContent = data.rightCard.mainTitle;
    document.querySelector('#RightCardSubTitle').textContent = data.rightCard.subTitle;

    // Set details button text
    document.querySelector('#RightCardDetailsButton').textContent = data.rightCard.detailsButton;

    // Set task items
    const rightRows = document.querySelectorAll('#RightCard .row');
    data.rightCard.items.forEach((item, index) => {
      const rightRow = rightRows[index + 1]; // (this Skips the first row (main title row))
      if (rightRow) {
        const taskElement = rightRow.querySelector('.text-secondary');
        const statusElement = rightRow.querySelector('.table_number');
        if (taskElement && statusElement) {
          taskElement.textContent = item.task;
          statusElement.textContent = item.status;
        } else {
          console.error(`Task or status element not found in row ${index}`);
        }
      } else {
        console.error(`Row ${index} not found`);
      }
    });
    
    })

  
  
  .catch(error => console.log('errors:', error));
