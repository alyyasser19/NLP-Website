import handleSubmit from './js/formHandler';
import checkURL from './js/checkURL';

//SASS files
import './styles/_base.scss'
import './styles/_footer.scss'
import './styles/_form.scss'
import './styles/_header.scss'
import './styles/_resets.scss'
import './styles/style.scss'

window.addEventListener('DOMContentLoaded', () => {
    //added listener for fromHandler
    document.getElementById('btn').addEventListener('click', (e) => {
        e.preventDefault();
        handleSubmit();
    })
})
export { handleSubmit, checkURL};
