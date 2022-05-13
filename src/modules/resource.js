class leaderBoard {
  constructor() {
    this.baseUrl = `https://us-central1-js-capstone-backend.cloudfunctions.net/api`;
  }

  async addGame(payload) {
    const response = await fetch(`${this.baseUrl}/games/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    return response.json();
  }

  async getData() {
    const response = await fetch(
      `${this.baseUrl}/games/y8y1XUZf5CL6Niz8MXE6/scores`
    );
    return response.json();
  }

  async addScore(payload) {
    const response = await fetch(
      `${this.baseUrl}/games/y8y1XUZf5CL6Niz8MXE6/scores`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );
    return response.json();
  }
}

export default leaderBoard;
