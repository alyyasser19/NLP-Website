const post = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    try {
        return await response.json()
    } catch (error) {
        console.log(error)
    }
}

const handleSubmit = async (event) => {
    event.preventDefault();
    alert('OH NO');

    url = document.getElementById('url').value;
    Client.console.log('test1')
    
    if(Client.checkURL(url)){
        post('http://localhost:8080//add-url', { url }).then(data =>{
            document.getElementById('text').innerHTML = data.text;
            document.getElementById('agreement').innerHTML = data.agreement;           
            document.getElementById('subjectivity').innerHTML = data.subjectivity;
            document.getElementById('confidence').innerHTML = data.confidence
            document.getElementById('irony').innerHTML = data.irony;
            document.getElementById('score_tag').innerHTML = data.score_tag;
        })
    }else{
        alert('OH NO')
    }

}

export default handleSubmit
