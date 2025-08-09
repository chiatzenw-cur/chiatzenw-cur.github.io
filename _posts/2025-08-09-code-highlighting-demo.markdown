---
layout: post
title: "Code Highlighting Demo"
date: 2025-08-09 12:30:00 +0800
categories: demo coding
---

# Cyberpunk Code Highlighting Demo

Welcome to the digital realm! This post demonstrates our enhanced **cyberpunk-themed syntax highlighting** with clean, modern fonts.

## Python Example

Here's some Python code with our custom highlighting:

```python
def cyberpunk_greeting(name):
    """A futuristic greeting function."""
    if not name:
        return "Anonymous user detected"
    
    # Generate cyberpunk-style message
    messages = [
        f"Welcome to the grid, {name}",
        f"Neural link established for {name}",
        f"Access granted, Agent {name}"
    ]
    
    return random.choice(messages)

# Main execution
if __name__ == "__main__":
    user = "Neo"
    print(cyberpunk_greeting(user))
```

## JavaScript Example

Frontend code for our digital interface:

```javascript
class CyberInterface {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.isConnected = false;
    }
    
    async connect() {
        try {
            const response = await fetch('/api/neural-link');
            const data = await response.json();
            
            if (data.status === 'connected') {
                this.isConnected = true;
                this.displayMessage('Neural link established');
            }
        } catch (error) {
            console.error('Connection failed:', error);
        }
    }
    
    displayMessage(msg) {
        this.container.innerHTML = `<span class="neon-glow">${msg}</span>`;
    }
}

// Initialize the interface
const cyberUI = new CyberInterface('main-display');
cyberUI.connect();
```

## CSS Styling

Our cyberpunk theme styles:

```css
.cyber-button {
    background: linear-gradient(135deg, #6a0d83, #c850c8);
    border: 2px solid #00f5ff;
    color: #ffffff;
    padding: 12px 24px;
    font-family: 'JetBrains Mono', monospace;
    cursor: pointer;
    transition: all 0.3s ease;
}

.cyber-button:hover {
    box-shadow: 
        0 0 20px rgba(0, 245, 255, 0.4),
        inset 0 0 20px rgba(255, 7, 58, 0.1);
    transform: translateY(-2px);
}
```

## JSON Configuration

API response structure:

```json
{
    "user": {
        "id": "neo-001",
        "name": "Thomas Anderson",
        "access_level": "architect",
        "neural_implants": [
            {
                "type": "memory_enhancement",
                "version": "v2.1.0",
                "active": true
            },
            {
                "type": "reflex_boost",
                "version": "v1.8.3", 
                "active": false
            }
        ]
    },
    "session": {
        "start_time": "2025-08-09T12:30:00Z",
        "duration": 3600,
        "secure": true
    }
}
```

## Features

- ✨ **Modern typography** with JetBrains Mono and Inter fonts
- 🎨 **Cyberpunk color scheme** with electric blue, neon pink, and purple accents
- 💫 **Subtle glow effects** that activate on hover
- 📱 **Responsive design** for all device sizes
- 🔧 **Line numbers** for better code readability

The theme maintains the cyberpunk aesthetic while being easy on the eyes for extended reading sessions.

---

> "The Matrix is a system, Neo. That system is our enemy." - Morpheus