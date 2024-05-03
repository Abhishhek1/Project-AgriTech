// Drop Down Javascript code (index.html)
const toggleBtn = document.querySelector('.toggle-btn')
        const toggleBtnIcon = document.querySelector('.toggle-btn i')
        const dropDownMenu = document.querySelector('.dropdown-btn')

        toggleBtn.onclick =function() {
            dropDownMenu.classList.toggle('open')
            const isOpen = dropDownMenu.classList.contains('open')

            toggleBtnIcon.classList - isOpen
            ? 'fa-solid fa-xmarks'
            : 'fa-solid fa-bars'
        }

//home page carousel slide
let currentIndex = 0;
    const totalItems = document.querySelectorAll('.carousel-item').length;
  
    function showSlide(index) {
      const carouselInner = document.querySelector('.carousel-inner');
      const itemWidth = document.querySelector('.carousel-item').offsetWidth;
      const newPosition = -index * itemWidth;
      carouselInner.style.transform = `translateX(${newPosition}px)`;
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalItems;
      showSlide(currentIndex);
    }
  
    function prevSlide() {
      currentIndex = (currentIndex - 1 + totalItems) % totalItems;
      showSlide(currentIndex);
    }



// Blog javascript code(blog.html)
const API_KEY = "dcbaa0f6e99740ccac8815c04b7b9a5f";
const url = "https://newsapi.org/v2/everything?q=";

async function fetchNews(query) {
    try {
        const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
        const data = await res.json();

        if (data.articles && data.articles.length > 0) {
            const newsContainer = document.getElementById('card-container');
            const maxArticlesToShow = 13;

            for (let i = 0; i < Math.min(data.articles.length, maxArticlesToShow); i++) {
                const article = data.articles[i];

                // Check if the article has an image
                if (article.urlToImage) {
                    const cardContainer = document.createElement('div');
                    cardContainer.classList.add('template-news-card');

                    const card = document.createElement('div');
                    card.classList.add('card');

                    const cardHeader = document.createElement('div');
                    cardHeader.classList.add('card-header');

                    const newsImg = document.createElement('img');
                    newsImg.src = article.urlToImage;
                    newsImg.alt = "News Image";
                    newsImg.classList.add('news-img');

                    const cardContent = document.createElement('div');
                    cardContent.classList.add('card-content');

                    const newsTitle = document.createElement('h3');
                    newsTitle.textContent = article.title;
                    newsTitle.classList.add('news-title');

                    const newsSource = document.createElement('h6');
                    // Format the publishedAt date in a human-readable format with the desired time zone
                    const publishedAt = new Date(article.publishedAt).toLocaleString('en-US', { timeZone: 'UTC' });
                    newsSource.textContent = `${article.source.name} ${publishedAt}`;
                    newsSource.classList.add('news-source');

                    const newsDesc = document.createElement('p');
                    newsDesc.textContent = article.description || 'No description available.';
                    newsDesc.classList.add('news-desc');

                    cardHeader.appendChild(newsImg);
                    cardContent.appendChild(newsTitle);
                    cardContent.appendChild(newsSource);
                    cardContent.appendChild(newsDesc);

                    card.appendChild(cardHeader);
                    card.appendChild(cardContent);
                    cardContainer.appendChild(card);

                    newsContainer.appendChild(cardContainer);
                }
            }
        } else {
            console.log("No articles found in the data.");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Example usage
fetchNews("farm + agriculture");




// poster button script
 
document.getElementById('openPageButton').addEventListener('click', function() {
    // Change the URL to the desired page
    window.location.href = 'login.html';
});



// Shop code
