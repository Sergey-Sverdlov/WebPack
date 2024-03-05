import axios from 'axios'

function generateName() {

    axios.get('https://randomuser.me/api/').then(res => {
        console.log("HERE", res)
        document.getElementById('joke').innerHTML = res.data.results[0].name.first
    })
}

export default generateName