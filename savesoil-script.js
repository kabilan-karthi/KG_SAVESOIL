// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Generate QR code
    generateQRCode();
    
    // Initialize tweet counter
    initTweetCounter();

  });
  
  // Function to generate QR code
  function generateQRCode() {
    // Improved tweet text with better hashtag formatting
    const tweetText = encodeURIComponent("I'm supporting the #SaveSoilKGISLEDU movement! 🌍🌱 Join us to help save our planet's soil and secure our future. Learn more at savesoil.org");
    const tweetUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;
    
    // Generate QR code using qrcode-generator library
    const typeNumber = 0;
    const errorCorrectionLevel = 'L';
    const qr = qrcode(typeNumber, errorCorrectionLevel);
    qr.addData(tweetUrl);
    qr.make();
    
    // Display QR code
    document.getElementById('qrcode').innerHTML = qr.createImgTag(5);
  }
  
  
  // Function to show notification for new tweets
  function showNewTweetNotification(count) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'tweet-notification';
    notification.textContent = `+${count} new ${count === 1 ? 'post' : 'posts'}!`;
    
    // Add notification to counter container
    const counterContainer = document.querySelector('.counter-container');
    counterContainer.appendChild(notification);
    
    // Animate and remove notification
    setTimeout(() => {
      notification.classList.add('fade-out');
      setTimeout(() => {
        notification.remove();
      }, 500);
    }, 2000);
  }
  
  // Add CSS for notification animation// Function to fetch and update the tweet counter from API
    async function fetchTweetCount() {
      const counterElement = document.getElementById('tweet-counter');
      const API_URL = "https://decisive-foremost-trail.glitch.me/api/count";

      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log(data); // Log the response data for debugging
        if (data && typeof data.accessCount === "number") {
          counterElement.textContent = data.accessCount.toLocaleString();
        } else {
          counterElement.textContent = "N/A";
        }
      } catch (error) {
        console.error("Error fetching tweet count:", error);
        counterElement.textContent = "N/A";
      }
    }

    // Run fetchTweetCount every 3 seconds
    setInterval(fetchTweetCount, 3000);
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
