import leaderBoard from "./resource";

function loadData() {
  const obj = new leaderBoard();
  const list = document.querySelector(".list");
  obj.getData().then((response) => {
    //display data
    let data = response.result;
    let itemList = "";
    data.forEach((element) => {
      itemList += `<li class="list-item"> ${element.user}: ${element.score}</li>`;
    });
    list.innerHTML = itemList;
  });
}

export default loadData;
