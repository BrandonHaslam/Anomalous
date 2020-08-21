// copyright update
copyrightDate = document.getElementById("date");
let date = new Date();
let year = date.getFullYear();
let day = date.getDay();
copyrightDate.innerText = year;

// Carousel
const slides = document.querySelectorAll(".carousel__slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

slides.forEach(function (slide, index) {
    slide.style.left = `${index * 100}%`
})

let counter = 0;

nextBtn.addEventListener("click", function () {
    counter++;
    carousel()
});
prevBtn.addEventListener("click", function () {
    counter--;
    carousel();
});

function carousel() {
    slides.forEach(function (slide) {
        // working with slides
        if (counter === slides.length) {
            counter = 0;
        }
        if (counter < 0) {
            counter = slides.length - 1
        }

        slide.style.transform = `translateX(-${counter * 100}%)`
    })
}

// Carousel Designs Popout
let design = document.querySelectorAll(".carousel__design")
let enhanceContainer = document.querySelector(".enhance--container")
let enhance = document.querySelector(".enhance")
design.forEach(function (e) {
    e.addEventListener("click", function () {
        let designSrc = e.src;
        let remove = document.getElementById("delete");
        enhance.src = designSrc
        enhanceContainer.classList.add("show")
        remove.addEventListener("click", () => {
            enhanceContainer.classList.remove("show")
            enhance.src = ""
        })

    })
})
// Pop out buttons

let btn = document.querySelectorAll(".button")
let articleLocation = document.querySelector(".popout__container")
const articles = {
    webDev: `     <div class="article-location">
    <button type="button" class="delete-btn">Go Back</button>
    <div class="popout__window">
        <div class="popout__container--container">
            <h1 class="popout__quote">Website Development</h1>
            <h3 class="popout__header">“Don’t have a website? Are you even legit?”</h3>
        </div>
        
        <div class="popout__text--container">
        <p class="popout__text"> Nowadays, if you don’t have a website, you might as well not have a business. No seriously have you ever trusted a business with your hard earned cash that didn’t at least have a site of their own? A website isn’t only about building trust with a client, but it’s also about exposing your brand to those who may not have heard of you.
        </p>
        <p class="popout__text">
        With our expertise in building and deploying websites custom built to your needs, you will be boosting sales in no time. Our bespoke packages
        mean you can have a business website fully customisable to your budget and still blow away the competition. Meet with our web developer to design
        your site to your needs and be fully satisfied with the results and display your product to the world and your potential customers.
        </p>
        <p class="popout__text">Get in touch today by using our contact form at the bottom of our website.</p>
    </div>
    </div>
    `,
    socialMedia: `      <div class="article-location">
    <button type="button" class="delete-btn">Go Back</button>
    <div class="popout__window">
        <div class="popout__container--container">
            <h1 class="popout__quote">Social Media Management</h1>
            <h3 class="popout__header">“Do less, be more”</h3>
        </div>
        
        <div class="popout__text--container">
        <p class="popout__text">So you’re up and running online, you’ve spent hours making sure it looks amazing and all the
            relevant information is available to your customers. You start posting daily content and then
            BAM! You run out of steam - you need to focus more on running your business and a little less on
            running your social platforms. At the end of the day if your service offering is not up to
            scratch then your time is wasted on social media.
        </p>
        <p class="popout__text">One sure fire way to lose followers and potential sales is by not updating your feed regularly.
        </p>
        <p class="popout__text">How we can help</p>
        <p class="popout__text">Anomalous can take over the daily running of your social media. We can create the content that
            you need to engage with your targeted community. Our small but mighty team of marketing and
            design professionals are dedicated to developing original content and graphics that promote your
            business better, making it bypass the competition. </p>
        <p class="popout__text">Get in touch today by using our contact form at the bottom of our website.</p>
    </div>
    </div>
</div> `,
    brandDesign: `          <div class="article-location">
    <button type="button" class="delete-btn">Go Back</button>
    <div class="popout__window">
        <div class="popout__container">
            <h1 class="popout__quote">Brand Design</h1>
            <h3 class="popout__header">“Design is more than a logo, design is a strategy made visual.”</h3>
        </div>
        
        <div class="popout__text--container">
        <p class="popout__text">One of the first steps to creating a business or brand is to visualise your ideas. Go on, try it.</p>  
        <p class="popout__text">The most successful companies in the world transform a simple logo into a symbol of reliability and quality. Anomalous have helped many businesses transform their ideas into reality and create a brand that everyone can immediately recognise. </p>  
        <p class="popout__text">We can do the same for you!</p>  
        <p class="popout__text">Are you looking to take your social media to the next level? Looking to create a logo for your online shop? Want to completely rebrand your existing business? Get in contact with our team today.</p>  
        <p class="popout__text">Logo packages start from as little as £50 and social media packages start even lower! Have a look at some of the amazing companies we have already helped on above, or head over to our instagram <a class="popout__link" href="https://www.instagram.com/anomalous_content_design/">@anomalous_content_design</a>
        </p>
        <p class="popout__text">Get in touch today by using our contact form at the bottom of our website.</p>
    </div>
    </div>`,
    copyWriting: ` <div class="article-location">
    <button type="button" class="delete-btn">Go Back</button>
    <div class="popout__window">
        <div class="popout__container--container">
            <h1 class="popout__quote">Copy Writing</h1>
            <h3 class="popout__header">"Copywriters who show off their skills are as ineffective </h3>
            <h3 class="popout__header">as fishermen who reveal the hook.” </h3>
        </div>
        
        <div class="popout__text--container">
        <p class="popout__text">Anomalous can create sales emails, blog posts, 
        Instagram posts, Social media bio’s and website content to fit any call to action.
        Once you and our design team are done producing your new graphic, be that a logo, 
        social media post or something else, our in-house Copywriter gets to work on selling your brand. 
        </p>
        <p class="popout__text">We create detailed sales copy to encourage your followers to buy your product or service, subscribe or visit your website. 
        One of the biggest pitfalls many small businesses fall into is not knowing how to sell online. 
        Sales copy is the big secret.
        </p>
        <p class="popout__text">  Does your website landing page have a high bounce rate? You will
         be able to reduce how often this happens and increase sales simply by changing how you word your 
         opening paragraph, or even by changing the font on your landing page. 
        Still stuck on how to get started? Get in touch and let's see how we can convert your page views into sales. </p>
        <p class="popout__text">Get in touch today by using our contact form at the bottom of our website.</p>
    </div>
    </div>`
}




btn.forEach(function (e) {
    e.addEventListener("click", () => {
        console.log(e.id);
        let id = e.id
        const article = document.createElement("div")
        article.classList.add("article-location")
        let articleContent = articles[id];
        console.log(articleContent);
        article.innerHTML = articles[id]
        articleLocation.appendChild(article)

        const deleteBtn = document.querySelector(".delete-btn");
        deleteBtn.addEventListener("click", function (e) {
            const element = e.currentTarget.parentElement.parentElement;
            articleLocation.removeChild(element);
        });
    })
})



//       <div class="article-location">
// <button type="button" class="delete-btn">Delete</button>
// <div class="popout__window">
//     <div class="popout__container--container">
//         <h1 class="popout__quote">Social Media Management</h1>
//         <h3 class="popout__header">“Do less, be more”</h3>
//     </div>

//     <div class="popout__text--container">
//     <p class="popout__text">So you’re up and running online, you’ve spent hours making sure it looks amazing and all the
//         relevant information is available to your customers. You start posting daily content and then
//         BAM! You run out of steam - you need to focus more on running your business and a little less on
//         running your social platforms. At the end of the day if your service offering is not up to
//         scratch then your time is wasted on social media.
//     </p>
//     <p class="popout__text">One sure fire way to lose followers and potential sales is by not updating your feed regularly.
//     </p>
//     <p class="popout__text">How we can help</p>
//     <p class="popout__text">Anomalous can take over the daily running of your social media. We can create the content that
//         you need to engage with your targeted community. Our small but mighty team of marketing and
//         design professionals are dedicated to developing original content and graphics that promote your
//         business better, making it bypass the competition. </p>
//     <p class="popout__text">Get in touch today by using our contact form at the bottom of our website 😁</p>
// </div>
// </div>
// </div> 