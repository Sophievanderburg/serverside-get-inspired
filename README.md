#  Welcome to the Get Inspired repo! ✨
<img width="250" alt="Screenshot 2022-03-08 at 16 23 48" src="https://user-images.githubusercontent.com/70577898/157280932-53b589f3-99c8-4c2b-a493-cbbce4da3274.png"> <img width="250" alt="Screenshot 2022-03-08 at 16 23 53" src="https://user-images.githubusercontent.com/70577898/157280951-3e1656e3-23c8-45e4-b540-359b84673550.png"> <img width="250" alt="Screenshot 2022-03-08 at 16 24 06" src="https://user-images.githubusercontent.com/70577898/157280976-c4f7b053-7577-4b9c-a782-a713b5725931.png">

## Table of content
- About the SPA
  * The assigment
- Interaction
  * 📚 Filter on subject 
  * 👫 Filter on author
  * ❗ Disclaimer of the filter function
- Practical information
  * Avtivity Diagram
  * How to install
  * How to use
  * The API


##

## About the SPA
### The assignment
For the course [Progressive Web Apps](https://github.com/cmda-minor-web/progressive-web-apps-2122) for the minor Web Design & Devlopement I had to design and build a single page web app based on a User Story using NodeJs, Git & EJS. 

>  💬 The used user story <br>
> As a student Digital Design, I want to look at inspiring web design quotes, to get some fresh energy when I'm down while working on crazy deadlines.

## Interaction 
### 📚 Filter on subject 
When you open the app, all the quotes are shown. There are quotes about all sorts of subjects like: design, code & prototyping. It could be that you are in the middle of the prototyping fase and you only want to see those kind of quotes. You can do that by selecting that subject in the filter form. This way you only need to see the quotes you probably want to see.

### 👫 Filter on author
Maybe you have a favourite designer and you only want to see the quotes they said/wrote. You can do that by selecting the designer in the filter form. This way you only need to see the quotes form your  favourite designer.

### ❗ Disclaimer of the filter
The two forms can not be combined when you are filtering. So you can use the subjects-form or the auhtors-form.



## Practical information
### Activity diagram
<img width="1187" alt="Screenshot 2022-04-04 at 13 44 15" src="https://user-images.githubusercontent.com/70577898/161536923-870ea3e1-fa35-4477-883b-91559266869e.png">

### How the service-worker works
<img width="1145" alt="Screenshot 2022-04-08 at 10 12 32" src="https://user-images.githubusercontent.com/70577898/162394341-4b67161b-6528-4325-9991-97123103c70d.png">

### How to install
Firstly, make sure you have Git, Node and a working terminal on your computer. Secondly, if you do not use Github desktop yet, stop with what you are doing and download it now. I've spent to much time messing around in the terminal. So that is a little hint from me to you. 😄 <br> 
Now it is time for the code. If you are at the code-tab of this Github repo, you see a green button with the text 'code' in it. Click on that button and click on the option 'open with Github Desktop'. This way, it clones my repo on your computer. <br>
Once you have the code on your computer open the terminal and install all the dependencies by running ``npm install``.<br>

### How to Use
Before you can see the SPA on your computer you need to start the server. You can do this by running ``npm run dev`` in the terminal. Once you've done this you can open http://localhost:4567/ in your browser.


### The API
URL: https://quote.api.fdnd.nl/v1/quote <br>
From the API I fetch the quotes that are rendered in the SPA

Once the fetch is transformed to ``.json``, you recieve an array with objects in it. In every object is all the data of 1 quote. <br>
Here is an example of what an object looks like:

```   
{"quoteId":"<number>",
"tags":"<tags>",
"text":"<text of the quote>",
"authorId":<number>,
"name":"<name of the author>",
"bio":"<bio of the author>",
"avatar":"<url to a picture of the author>"}
```

