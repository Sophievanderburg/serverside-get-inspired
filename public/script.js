import './routes/routie.js'

// Code for the scrollbutton
import { scrollButton, main, scrollFunction } from './modules/scroll.js'

// Show and hide the form
import { section, showSectionButton, hideSectionButton, tagsButton, authorButton, authorForm, showOrHideSection, showTagsForm, showAuthorForm } from './modules/sectionInteraction.js';

// Get and render the quotes form the API
import { urlAPI, quoteList, paragraph, getAndRenderData, renderData } from './modules/getAndRender.js'

//forms
import { checkboxAuthor } from './modules/forms.js'

// import states 
import { showLoadingState } from './modules/states.js'

routie({
    '': () => {
        showLoadingState();
        getAndRenderData();
    },
    'filter': () => {
        showOrHideSection();
    }
});

