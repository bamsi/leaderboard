import { LeaderBoard } from './resource.js';

function loadData() {
  const obj = new LeaderBoard();
  const list = document.querySelector('.list');
  obj.getData().then((response) => {
    // display data
    const data = response.result;
    let itemList = '';
    data.forEach((element) => {
      itemList += `<li class="list-item"> ${element.user}: ${element.score}</li>`;
    });
    list.innerHTML = itemList;
  });
}

export default loadData;
