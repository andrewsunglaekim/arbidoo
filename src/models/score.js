import axios from 'axios'

class Score {
  static getHighScore(maxNum) {
    let request = axios({
			method: "get",
			url: `http://localhost:4000/highscores/${maxNum}`
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
