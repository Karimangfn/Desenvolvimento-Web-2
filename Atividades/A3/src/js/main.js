import { masks } from './modules/mask.js'
import { valids } from './modules/valid.js'

document.querySelectorAll('input').forEach(($input) => {
    const field = $input.dataset.js

    $input.addEventListener('input', (e) => {
        e.target.value = masks[field](e.target.value)
    }, false)
})

function checkInputs() {
    document.querySelectorAll('input').forEach(($input) => {
    const field = $input.dataset.js

    $input.addEventListener('input', (e) => {
        let isValid = valids[field](e.target.value)
        if (isValid) {
            e.target.classList.remove('errorInput')
        } else {
            e.target.classList.add('errorInput')
        }
        
    }, false)
    })
}

checkInputs()
