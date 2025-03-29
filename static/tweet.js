// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  });
      // Container for Twitter cards
      const twitterCardsContainer = document.getElementById('twitter-cards');
      const loadingElement = document.getElementById('loading');

      // Function to fetch and render Twitter URLs
      async function fetchAndRenderTwitterUrls() {
          try {
              loadingElement.textContent = 'Loading tweets...';
              
              // Simulated fetch - replace with actual fetch to your backend
              const response = await fetch('http://127.0.0.1:5000/api/tweets');
              const urls = await response.json();

              // Clear previous cards
              twitterCardsContainer.innerHTML = '';
              console.log(urls); // Log the URLs for debugging
              // Create cards for each URL
              for (const url of urls.urls) {
                  const cardElement = document.createElement('div');
                  cardElement.className = 'twitter-card';
                  
                  const blockquote = document.createElement('blockquote');
                  blockquote.className = 'twitter-tweet';
                  
                  const link = document.createElement('a');
                  link.href = url;
               
                  
                  blockquote.appendChild(link);
                  cardElement.appendChild(blockquote);
                  
                  twitterCardsContainer.appendChild(cardElement);
              };

              // Load Twitter widget script to render tweets
              loadingElement.textContent = '';
              const script = document.createElement('script');
              script.async = true;
              script.src = 'https://platform.twitter.com/widgets.js';
              script.charset = 'utf-8';
              document.body.appendChild(script);
          } catch (error) {
              loadingElement.textContent = 'Error loading tweets: ' + error.message;
              console.error('Failed to fetch Twitter URLs:', error);
          }
      }

      // Initial load
      fetchAndRenderTwitterUrls();

    // Reload the whole page every 30 seconds
    setInterval(() => {
      location.reload();
   
    }, 30000);

  (function() {
    const style = document.createElement('style');
    style.textContent = `
      .tweet-notification {
        position: absolute;
        top: 20px;
        right: 20px;
        background-color: #2e7d32;
        color: white;
        padding: 8px 12px;
        border-radius: 20px;
        font-size: 0.9rem;
        opacity: 0;
        transform: translateY(-10px);
        animation: notificationIn 0.3s forwards;
      }
      
      @keyframes notificationIn {
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      .fade-out {
        animation: fadeOut 0.5s forwards;
      }
      
      @keyframes fadeOut {
        to {
          opacity: 0;
          transform: translateY(-10px);
        }
      }
      
      .highlight {
        animation: highlight 1s;
      }
      
      @keyframes highlight {
        0% {
          color: #2e7d32;
        }
        50% {
          color: #4caf50;
          transform: scale(1.1);
        }
        100% {
          color: #2e7d32;
          transform: scale(1);
        }
      }
    `;
    document.head.appendChild(style);
  })();
