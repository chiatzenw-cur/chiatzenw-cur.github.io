// CRT Effects and Background Video Handler
class CRTEffects {
  constructor() {
    this.init();
  }

  init() {
    this.createBackgroundVideo();
    this.initializeGlitchEffects();
    this.initializeTextEffects();
    this.handleVisibilityChange();
  }

  createBackgroundVideo() {
    // Create a video element for the background
    const video = document.createElement('video');
    video.id = 'crt-background';
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: -2;
      pointer-events: none;
    `;
    
    // Add multiple source formats for better compatibility
    const source = document.createElement('source');
    source.src = '/assets/images/output.mp4';
    source.type = 'video/mp4';
    video.appendChild(source);
    
    // Add error handling
    video.addEventListener('error', (e) => {
      console.warn('Video failed to load, falling back to image background');
      // Fallback to original background image
      document.body.style.backgroundImage = "url('/assets/images/bg.jpg')";
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundPosition = "center";
      document.body.style.backgroundAttachment = "fixed";
    });
    
    document.body.prepend(video);
    
    // Create a canvas for additional CRT noise effects on top
    const canvas = document.createElement('canvas');
    canvas.id = 'crt-noise';
    canvas.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      opacity: 0.1;
      pointer-events: none;
    `;
    
    document.body.prepend(canvas);
    
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Create animated noise effect
    this.animateNoise(ctx, canvas);
  }

  animateNoise(ctx, canvas) {
    const imageData = ctx.createImageData(canvas.width, canvas.height);
    
    const animate = () => {
      // Create TV static/noise
      for (let i = 0; i < imageData.data.length; i += 4) {
        const noise = Math.random() * 255;
        const alpha = Math.random() * 0.1; // Very low opacity for subtle effect
        
        // Create One Dark Pro tint
        imageData.data[i] = noise * 0.2 + 40; // Red component
        imageData.data[i + 1] = noise * 0.3 + 44; // Green component
        imageData.data[i + 2] = noise * 0.4 + 52; // Blue component
        imageData.data[i + 3] = alpha * 255; // Alpha
      }
      
      ctx.putImageData(imageData, 0, 0);
      
      // Add One Dark Pro scanlines effect
      ctx.fillStyle = 'rgba(97, 175, 239, 0.015)';
      for (let y = 0; y < canvas.height; y += 4) {
        ctx.fillRect(0, y, canvas.width, 1);
      }
      ctx.fillStyle = 'rgba(198, 120, 221, 0.01)';
      for (let y = 2; y < canvas.height; y += 8) {
        ctx.fillRect(0, y, canvas.width, 1);
      }
      
      // Random frame drops (skip frames occasionally)
      if (Math.random() < 0.95) {
        requestAnimationFrame(animate);
      } else {
        // Skip 1-3 frames to simulate frame drops
        setTimeout(() => {
          requestAnimationFrame(animate);
        }, Math.random() * 100 + 50);
      }
    };
    
    animate();
  }

  initializeGlitchEffects() {
    // Random glitch effects
    setInterval(() => {
      if (Math.random() < 0.1) { // 10% chance every interval
        this.triggerGlitch();
      }
    }, 3000);
  }

  triggerGlitch() {
    const elements = document.querySelectorAll('h1, h2, h3, .site-title');
    const element = elements[Math.floor(Math.random() * elements.length)];
    
    if (element) {
      element.style.textShadow = `
        ${Math.random() * 8 - 4}px 0 #61afef,
        ${Math.random() * 8 - 4}px 0 #e06c75,
        ${Math.random() * 8 - 4}px 0 #c678dd,
        0 0 10px rgba(97, 175, 239, 0.6),
        0 0 20px rgba(224, 108, 117, 0.4)
      `;
      
      setTimeout(() => {
        element.style.textShadow = '';
      }, 150);
    }
  }

  initializeTextEffects() {
    // Add CRT text classes to elements
    document.addEventListener('DOMContentLoaded', () => {
      const headers = document.querySelectorAll('h1, h2, h3, .site-title');
      headers.forEach(header => {
        header.classList.add('crt-text');
      });
    });
  }

  handleVisibilityChange() {
    // Pause effects when tab is not visible to save resources
    document.addEventListener('visibilitychange', () => {
      const video = document.getElementById('crt-background');
      const canvas = document.getElementById('crt-noise');
      
      if (document.hidden) {
        if (video) video.pause();
        if (canvas) canvas.style.display = 'none';
      } else {
        if (video) video.play();
        if (canvas) canvas.style.display = 'block';
      }
    });
  }
}

// Screen flicker effect
function addScreenFlicker() {
  document.body.classList.add('crt-flicker');
  
  // Occasional intense flickers
  setInterval(() => {
    if (Math.random() < 0.05) { // 5% chance
      document.body.style.filter = 'brightness(1.2) contrast(1.1)';
      setTimeout(() => {
        document.body.style.filter = '';
      }, 50);
    }
  }, 1000);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new CRTEffects();
  addScreenFlicker();
  document.body.classList.add('crt-container', 'crt-background');
});

// Add typing effect for text
function addTypingEffect() {
  const elements = document.querySelectorAll('.typing-effect');
  
  elements.forEach(element => {
    const text = element.textContent;
    element.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50 + Math.random() * 50);
      }
    };
    
    // Start typing after a delay
    setTimeout(typeWriter, 500);
  });
}

// Export for use in other scripts
window.CRTEffects = CRTEffects;