#  Welcome to the Get Inspired repo! ✨
<img width="30%" alt="Screenshot 2022-03-08 at 16 23 48" src="https://user-images.githubusercontent.com/70577898/157280932-53b589f3-99c8-4c2b-a493-cbbce4da3274.png"> <img width="30%" alt="Screenshot 2022-03-08 at 16 23 53" src="https://user-images.githubusercontent.com/70577898/157280951-3e1656e3-23c8-45e4-b540-359b84673550.png"> <img width="30%" alt="Screenshot 2022-03-08 at 16 24 06" src="https://user-images.githubusercontent.com/70577898/157280976-c4f7b053-7577-4b9c-a782-a713b5725931.png">

## Table of content
- About the SPA
  * The assigment
- Interaction
  * 📚 Filter on subject 
  * 👫 Filter on author
  * ❗ Disclaimer of the filter function
- Practical information
  * Avtivity Diagram
  * The API
- Optimalisation
- Client side vs server side rendering
- How to install
- How to use

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

### Service worker
The service worker checks whether the user has an internet connection. When a request is made, the service worker stores the 'CORE_ASSETS' in the browser's cache memory 'v3'. The CORE_ASSETS contains the offline page and the styling file. This allows the service worker to still show the offline page with associated styling when there is no internet connection. <br><br>
If there is internet connection, the service worker caches the rendered content in 'html cache'. If the user later returns to de SPA without internet, he can see still the pages he has already visited.<br>
<img width="1145" alt="Screenshot 2022-04-08 at 10 12 32" src="https://user-images.githubusercontent.com/70577898/162394341-4b67161b-6528-4325-9991-97123103c70d.png">

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

## Optimalisation
A tool to help you optimize your web app is Lighthouse. Lighthouse is implemented in the chrome browser. It generates a report of your website. In that rapport you get hints of how you can optimize your website. Lighthouse has 4 topics: SEO, Accessibility, Best practices & performance. <br>

**SEO** stands for Search Engine Optimization. Good SEO help people find your website. META-tags for instance lets search engines know what your site is about. <br>
Accessibility is also very important. A view examples of accessibility are: alt-text on images, button have text in them, HTML has a lang-attribute & headings in sequentially-descending order<br>

**Accessibility** is also very important. A view examples of accessibility are: alt-text on images, button have text in them, HTML has a lang-attribute & headings in sequentially-descending order.<br>

**Best practices** are things like: Uses HTTPS, Page has the HTML doctype, Avoids requesting the notification permission on page load & Avoids front-end JavaScript libraries with known security vulnerabilities<br>

**Performance** is important for the loading speed of the page.
I did a view things to help the performance go to 100 on desktop:
* [express-minify package](https://www.npmjs.com/package/express-minify) 
* [compression package](https://www.npmjs.com/package/compression)
* SEO things like META-tags
* `size=""` for images

Now the loading is quite fast!<br>
<img width="794" alt="Schermafbeelding 2022-05-19 om 13 47 17" src="https://user-images.githubusercontent.com/70577898/169288459-f3a9a19d-85f3-4046-bbc3-7a8b68bb6245.png"> <br>

 ❗ Lighthouse said that the images are on the bigger size. So I researched ways to make them smaller like `srcset=""` & `sizes=""`. But I can not use them, because the API does not support it. That is because the API has links from the image on another site. There is no way to make them smaller. That is why the performance is not 100.  
 
 After a view modifications the desktop version are all on 100! <br>
 <img width="80%" alt="Performance Accessibility" src="https://user-images.githubusercontent.com/70577898/169288536-aa0610e7-de1d-4ad6-97c8-52a388b53cf2.png"><br>
 The mobile report is not at 100 on the performance topic. That is because of the image problem I described above.<br>
 <img width="80%" alt="Practices" src="https://user-images.githubusercontent.com/70577898/169288592-b6a84d31-724a-4f93-977f-7e0e20ac27d0.png"><br>


## Client side vs Server side rendering
### Client side rendering

### Server side rendering

 ## How to install
Firstly, make sure you have Git, Node and a working terminal on your computer. Secondly, if you do not use Github desktop yet, stop with what you are doing and download it now. I've spent to much time messing around in the terminal. So that is a little hint from me to you. 😄 <br> 
Now it is time for the code. If you are at the code-tab of this Github repo, you see a green button with the text 'code' in it. Click on that button and click on the option 'open with Github Desktop'. This way, it clones my repo on your computer. <br>
Once you have the code on your computer open the terminal and install all the dependencies by running ``npm install``. If it <br>

## How to Use
Before you can see the SPA on your computer you need to start the server. You can do this by running ``npm run dev`` in the terminal. Once you've done this you can open http://localhost:4567/ in your browser.
