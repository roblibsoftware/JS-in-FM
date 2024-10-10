const data = 'SQL_RESULT';
const itemList = data.split('|');
const grid = document.querySelector('.grid');

itemList.forEach(row => {
  const [id, title, auth] = row.split('‡');
  const item = document.createElement('div');
  item.setAttribute('class', 'item');
  item.setAttribute('id', id);
  if (!auth) {
    item.setAttribute('class', 'item item_disabled');
  }
  item.innerHTML = `${title}`;

  const btnContainer = document.createElement('div');
  btnContainer.classList.add('btn-container');

   const viewBtn = document.createElement('button');
  viewBtn.setAttribute('id', 'edit');
  if(auth>0) {
    viewBtn.setAttribute('class', 'btn btn-outline-primary btn-container');
    viewBtn.setAttribute('style', '--bs-btn-padding-y: .5rem; --bs-btn-padding-x: 2rem;');
    viewBtn.innerHTML = '<i class="bi bi-camera-reels"></i>';
  } else {
    viewBtn.setAttribute('class', 'btn btn-outline-light btn-sm disabled');
    viewBtn.innerHTML = '<i class="bi bi-x"></i>';
  }
  viewBtn.addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent triggering the card click event
    FileMaker.PerformScript("open support resource by ID in viewer", "<id>"+id+"</id>");
  });

  btnContainer.appendChild(viewBtn);	
  item.appendChild(btnContainer);
  grid.appendChild(item);
  });