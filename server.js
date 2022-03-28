const express = require('express')
const fetch = require('node-fetch')

const app = express()
const port = 4567

// Link the templating engine to the express app
app.set('view engine', 'ejs');

// Tell the views engine/ejs where the template files are stored (Settingname, value)
app.set('views', './views');

app.use(express.static(__dirname + '/public'));


app.get("/", renderPagina)
app.get("/search", zoeken)


/*--------------------- Functions ------------------------- */
function renderPagina (req, res){
  fetch(`https://quote.api.fdnd.nl/v1/quote/`)
  .then(function(response){
    return response.json()
  })
  .then((jsonData) =>{
    jsonData.data = jsonData.data.slice(0,-5)
    res.render('index', {
      data: jsonData.data,
      data2: jsonData.data,
      pageTitle: "Quotes"
    })
  })
}

function zoeken(req,res){
  let checked = req.query.query
  let data = []

  fetch('https://quote.api.fdnd.nl/v1/quote/')
  .then(function(response){
    return response.json()
  })
  .then((jsonData)=>{
    jsonData.data = jsonData.data.slice(0,-5)

    checked.forEach(input => {
      jsonData.data.forEach(quote => {
          if(quote.tags.includes(input)) {
              data.push(quote);
          } 
      });
    })
    console.log('data is:')
    console.log(data)

    res.render('index', {
      data: jsonData.data,
      data2: data,
      pageTitle: "Quotes"
    })
  })
  
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

/**
 * Wraps the fetch api and returns the response body parsed through json
 * @param {*} url the api endpoint to address
 * @returns the json response from the api endpoint
 */
async function fetchJson(url) {
  return await fetch(url)
    .then((response) => response.json())
    .then((body) => body.data)
    .catch((error) => error)
}