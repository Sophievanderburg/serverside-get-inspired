import {quoteList} from './getAndRender.js'

export function displatyFilteredTags (gefilterdeTags){
    gefilterdeTags.forEach(data => {
        quoteList.insertAdjacentHTML('afterbegin', 
        `<li> 
            <p> ${data.text}</p>
            <div>
                <img src='${data.avatar}' alt='Profielfoto' onerror="this.src='./images/placeholder.jpeg'">
                <h3>${data.name}</h3>
            </div
        </li>`)
        })
}



export function displatyFilteredQuotes (gefilterdeQuotes){
    gefilterdeQuotes.forEach(data => {
        quoteList.insertAdjacentHTML('afterbegin', 
        `<li> 
            <p> ${data.text}</p>
            <div>
                <img src='${data.avatar}' alt='Profielfoto' onerror="this.src='./images/placeholder.jpeg'">
                <h3>${data.name}</h3>
            </div
        </li>`)
        })
}
