import {quoteList} from './getAndRender.js'
import {hideSectionButton, showOrHideSection} from './sectionInteraction.js'

let profileImg = document.querySelectorAll('main ul li div img')

export function showLoadingState(){
    quoteList.insertAdjacentHTML('afterbegin', 
        `<p>
        We are searching for the inspiring quotes! Hold on just a second.
        </p>`)
}

export function hideLoadingState(){
    quoteList.removeChild(quoteList.firstElementChild);
}

export function showErrorState(){
    quoteList.insertAdjacentHTML('afterbegin', 
    `<p>
    Something went wrong... Please reload this page to try again.
    </p>`)
}