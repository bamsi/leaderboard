import { LeaderBoard } from './resource.js';

function addFormData() {
  const name = document.getElementById('name');
  const score = document.getElementById('score');
  const payload = {
    user: name.value,
    score: score.value,
  };
  const obj = new LeaderBoard();
  obj.addScore(payload).then((response) => response.result);
}

export default addFormData;
