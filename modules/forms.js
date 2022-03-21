import { authorForm, tagForm } from './sectionInteraction.js';
import { cleanElement } from './utility.js'
import {displatyFilteredQuotes, displatyFilteredTags} from './showFiltered.js'
import { renderData } from './getAndRender.js'


export const urlAPI = 'https://quote.api.fdnd.nl/v1/quote'
export const titleFromTagsForm = document.querySelector("main section form:first-of-type h3")
export const titleFromAuthorForm = document.querySelector("main section form:nth-of-type(2) h3")

export const sectionTagsForm = document.querySelector("main section form:nth-of-type(1) section")
export const sectionAuthorForm = document.querySelector("main section form:nth-of-type(2) section")


export const checkboxAuthor = document.querySelectorAll("main section form:nth-of-type(2) input[type='checkbox']") 


export function tagsForm(quotes){
    console.log("GET TAGS")

    tagForm.addEventListener('change', event => {
        filteredTags(quotes, event)
    })

    sectionTagsForm.innerHTML=""
    let allTags = quotes.data.map(data =>{
        return data.tags.split(',')
    });

    allTags = [...new Set(allTags.flat(1))]

    allTags = allTags.map(el => {
        return el.trim()
    });

    allTags.forEach(item => {
        sectionTagsForm.insertAdjacentHTML('afterbegin', 
        `<div>
            <input type="checkbox" id="${item}">
        <label for="${item}"> ${item}</label>
        </div>`)
    })
}

function filteredTags(quotes) {
    let checkedInputsTags = [...tagForm.querySelectorAll('input:checked')].map(el => el.id);
    console.log(checkedInputsTags)
    
    let newData = [];

    // hulp van Robert
    checkedInputsTags.forEach(input => {
        quotes.data.forEach(quote => {
            if(quote.tags.includes(input)) {
                console.log('input matches a quote tag or partial!')
                newData.push(quote);
            } else {
                console.log('input does not match');
            }
        });
    })

    newData = [...new Set(newData)]
    
    
    cleanElement();

    if (newData.length > 0){
        displatyFilteredTags(newData);
    } else{
        renderData(quotes);
    }
    
} 






export function authorsForm(quotes){
    console.log("GET AUTHORS");

    authorForm.addEventListener('change', event => {
        filteredAuthors(quotes, event)
    })

    let authors = []
    sectionAuthorForm.innerHTML=""
    // Bron: https://stackoverflow.com/questions/37856130/javascript-get-values-from-array-but-ignore-duplicates
     for(var i = 0, len = quotes.data.length; i < len; i++) {
        if(authors.indexOf(quotes.data[i].name) == -1) {
           // If the author is not in the array, push it in it
           authors.push(quotes.data[i].name);
        }
    } 
   
    authors.forEach(data => {
        sectionAuthorForm.insertAdjacentHTML('afterbegin', 
        `<div>
            <input type="checkbox" id="${data}">
            <label for="${data}"> ${data}</label>
        </div>`)
    })     
}


function filteredAuthors(quotes) {
    let checkedInputs = [...authorForm.querySelectorAll('input:checked')].map(el => el.id);
    console.log('checkedInputs:')
    console.log(checkedInputs)

    // Filter de oorspronkelijke dataset op de entries die in de checkbox aangevinkt zijn
    let newData = quotes.data.filter(element => {
      // Als een van de checkbox entries matcht met 1 van de dataset entries
        if(checkedInputs.includes(element.name)) {
            // Voeg 'm toe aan de nieuwe array
            return true;
        } else {
            // Filter 'm uit de nieuwe array
            return false;
        }
    })
       
    // gefilterde array
    console.log(newData);
    cleanElement();

    if (newData.length > 0){
        displatyFilteredQuotes(newData);
    } else{
        renderData(quotes);
    }
    
} 



