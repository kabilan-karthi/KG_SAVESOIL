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
  
  // Function to initialize and update tweet counter
  function initTweetCounter() {
    // Get counter element
    const counterElement = document.getElementById('tweet-counter');
    
    // Set initial random count between 100 and 600
    let count = Math.floor(Math.random() * 500) + 100;
    counterElement.textContent = count.toLocaleString();
    
    // Simulate real-time updates
    setInterval(() => {
      // Random chance of increasing count (30% chance)
      if (Math.random() < 0.3) {
        // Increase by 1-3 tweets
        const increase = Math.floor(Math.random() * 3) + 1;
        count += increase;
        
        // Update counter with animation
        counterElement.classList.add('highlight');
        counterElement.textContent = count.toLocaleString();
        
        // Show visual feedback for new tweets
        showNewTweetNotification(increase);
        
        // Remove highlight class after animation completes
        setTimeout(() => {
          counterElement.classList.remove('highlight');
        }, 1000);
      }
    }, 5000); // Check every 5 seconds
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
  
  // Add CSS for notification animation
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
