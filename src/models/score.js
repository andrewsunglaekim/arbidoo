import axios from 'axios'

class Score {
  static getHighScore(num) {
		let score = {maxNum: num}
    let request = axios({
			method: "get",
			params: {score},
			url: `http://localhost:4000/highscores`
    })
		return request
  }
	static addHighScore(data){
    let request = axios({
			method: "post",
			data: data,
			url: "http://localhost:4000/highscore"
		})
		return request
	}
}

export default Score
