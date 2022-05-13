import leaderBoard from "./resource";

function addFormData() {
  const name = document.getElementById("name");
  const score = document.getElementById("score");
  const payload = {
    user: name.value,
    score: score.value,
  };
  const obj = new leaderBoard();
  obj
    .addScore(payload)
    .then((response) => {
      return response.result;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

export default addFormData;
