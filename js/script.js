// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add active class to navigation link based on scroll position
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// Typing animation for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.skill-category, .project-card, .highlight-item, .stat');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.2}px)`;
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Interactive Terminal
const terminalCommands = {
    'snake': {
        output: ['Starting Snake game...'],
        type: 'success',
        action: startSnakeGame
    },
    'help': {
        output: [
            'Available commands:',
            '─────────────────────────────────────',
            'whoami        - Display current user',
            'about         - Show personal information',
            'certifications- List all certifications',
            'projects      - Show all projects',
            'skills        - Display technical skills',
            'experience    - Show work experience',
            'contact       - Contact information',
            'github        - Open GitHub profile',
            'linkedin      - Open LinkedIn profile',
            'neofetch      - Display system info',
            'date          - Show current date/time',
            'uptime        - Show portfolio uptime',
            'matrix        - Matrix reference',
            'snake         - Snake game',
            'clear         - Clear terminal',
            'help          - Show this help message',
            '─────────────────────────────────────',
            'Type any command and press Enter to execute'
        ],
        type: 'success'
    },
    'whoami': {
        output: ['yash-patil'],
        type: 'success'
    },
    'about': {
        output: [
            'Name: Yash Patil',
            'Role: DevOps Engineer & Cybersecurity Specialist',
            'Education: B.Tech Computer Engineering (CGPA: 8.69)',
            'Location: Pune, Maharashtra',
            'Specialization: Infrastructure automation, CI/CD, Cloud Security'
        ],
        type: 'success'
    },
    'certifications': {
        output: [
            'Oracle Cloud Infrastructure 2025 Certified - DevOps Professional',
            'Oracle Cloud Infrastructure 2025 Certified - Networking Professional',
            'Google Cloud Computing Foundations Certificate',
            'AWS Academy Graduate - Cloud Foundations Training Badge',
            'Introduction to Cybersecurity - Cisco',
            'Cybersecurity Roles, Processes & Operating System Security'
        ],
        type: 'success'
    },
    'projects': {
        output: [
            'SecureChat - Real-Time Messaging (MERN, Docker, Jenkins)',
            'Monitoring Stack (Prometheus, Grafana, Wireshark)',
            'CI/CD Pipeline for Microservices (Jenkins, Spring Boot)',
            'AWS Infrastructure Automation (Terraform, VPC)',
            'Banking Management System (Spring Boot, MySQL)',
            'Allergen Detection System (TypeScript, ML)',
            'PENTEST-MCP-SERVER (Python, Penetration Testing)'
        ],
        type: 'success'
    },
    'skills': {
        output: [
            'Programming: Python, Java, JavaScript, TypeScript, C++, SQL, Bash, PowerShell',
            'DevOps: Docker, Kubernetes, Jenkins, Terraform, Ansible, GitHub Actions',
            'Cloud: AWS, GCP, OCI, Cloud Security',
            'Cybersecurity: Wireshark, Burp Suite, Nmap, Metasploit, Cryptography',
            'Monitoring: Prometheus, Grafana, Node Exporter',
            'Databases: MongoDB, MySQL, PostgreSQL'
        ],
        type: 'success'
    },
    'experience': {
        output: [
            'App Developer Intern - Bharat-Intern, Pune (June-Aug 2023)',
            'Vice President - Coding Club RSCOE (400+ peers)',
            'Administration Head - ACM RSCOE Student Chapter',
            'Secretary - Avinya 2.0 Hackathon Organizer'
        ],
        type: 'success'
    },
    'contact': {
        output: [
            'Email: yashppatilk23@gmail.com',
            'Phone: +91 7218704350',
            'LinkedIn: linkedin.com/in/yash-patil-069820252',
            'GitHub: github.com/yashpatil118',
            'Location: Pune, Maharashtra'
        ],
        type: 'success'
    },
    'github': {
        output: ['Opening GitHub profile...'],
        type: 'success',
        action: () => window.open('https://github.com/yashpatil118', '_blank', 'noopener,noreferrer')
    },
    'linkedin': {
        output: ['Opening LinkedIn profile...'],
        type: 'success',
        action: () => window.open('https://linkedin.com/in/yash-patil-069820252', '_blank', 'noopener,noreferrer')
    },
    'clear': {
        output: [],
        type: 'clear'
    },
    'date': {
        output: [new Date().toString()],
        type: 'success'
    },
    'uptime': {
        output: ['Portfolio has been running for 24/7 since deployment'],
        type: 'success'
    },
    'neofetch': {
        output: [
            '╭─────────────────────────────────────╮',
            '│                                     │',
            '│  ╭─╮┬ ┬┌┐┌  ┬┌─┐┌┐┌┌─┐┌─┐┬┌─┐┌┐┌    │',
            '│  │ ││ │││││  │├─┘│││├─┤│  ││ ││││   │',
            '│  └─┘└─┘┘└┘└─┘┴└─┘┘└┘┴ ┴└─┘┴└─┘┘└┘   │',
            '│                                     │',
            '│  DevOps Engineer & Cybersecurity    │',
            '│  Specialist                         │',
            '│                                     │',
            '│  OS: Portfolio v1.0                 │',
            '│  Shell: Interactive Terminal        │',
            '│  Location: Pune, Maharashtra        │',
            '│  Status: Available for Opportunities│',
            '╰─────────────────────────────────────╯'
        ],
        type: 'success'
    },
    'matrix': {
        output: [
            'Wake up, Neo...',
            'The Matrix has you...',
            'Follow the white rabbit.',
            '',
            'Just kidding! This is Yash Patil\'s portfolio terminal.',
            'Type "help" to see available commands.'
        ],
        type: 'success'
    }
};

function addTerminalOutput(text, type = 'command-output') {
    const terminalOutput = document.getElementById('terminalOutput');
    const line = document.createElement('div');
    line.className = `terminal-line ${type}`;
    // If text contains box-drawing characters, use <pre> for formatting
    if (typeof text === 'string' && /[╭╮╰╯│─┬┌┐└┘]/.test(text)) {
        line.innerHTML = `<pre style="margin:0;">${text}</pre>`;
    } else {
        line.textContent = text;
    }
    terminalOutput.appendChild(line);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

function processTerminalCommand(command) {
    const trimmedCommand = command.trim().toLowerCase();
    const commandData = terminalCommands[trimmedCommand];
    
    if (commandData) {
        if (commandData.type === 'clear') {
            document.getElementById('terminalOutput').innerHTML = '';
            addTerminalOutput('Terminal cleared.', 'success-output');
            return;
        }
        commandData.output.forEach(output => {
            addTerminalOutput(output, commandData.type === 'success' ? 'success-output' : 'error-output');
        });
        if (commandData.action) {
            commandData.action();
        }
    } else {
        addTerminalOutput(`Command not found: ${command}. Type 'help' for available commands.`, 'error-output');
    }
}

// Snake Game Implementation
function startSnakeGame() {
    const terminalOutput = document.getElementById('terminalOutput');
    terminalOutput.innerHTML = '';
    let gridWidth = 32;
    let gridHeight = 18;
    let snake = [{x: Math.floor(gridWidth/2), y: Math.floor(gridHeight/2)}];
    let direction = 'right';
    let food = {x: Math.floor(Math.random()*gridWidth), y: Math.floor(Math.random()*gridHeight)};
    let gameOver = false;
    let score = 0;

    function drawGrid() {
        let grid = '';
        for (let y = 0; y < gridHeight; y++) {
            let row = '';
            for (let x = 0; x < gridWidth; x++) {
                if (snake.some(s => s.x === x && s.y === y)) {
                    row += `<span style='color:#00d4aa;background:#161b22;'>&#9608;</span>`;
                } else if (food.x === x && food.y === y) {
                    row += `<span style='color:#ff6b35;background:#161b22;'>X</span>`;
                } else {
                    row += `<span style='color:#f1f5f9;background:#161b22;'> </span>`;
                }
            }
            grid += row + '<br>';
        }
        terminalOutput.innerHTML = `<pre style='font-size:1.1em;line-height:1.1;background:#161b22;padding:8px;border-radius:8px;'>Score: ${score}\n${grid}</pre><div style='font-size:0.9em;color:#00d4aa;'>Use arrow keys to move. ESC to quit.</div>`;
    }

    function moveSnake() {
        if (gameOver) return;
        let head = {...snake[0]};
        if (direction === 'up') head.y--;
        if (direction === 'down') head.y++;
        if (direction === 'left') head.x--;
        if (direction === 'right') head.x++;
        // Wall collision
    if (head.x < 0 || head.x >= gridWidth || head.y < 0 || head.y >= gridHeight) {
            endGame();
            return;
        }
        // Self collision
        if (snake.some(s => s.x === head.x && s.y === head.y)) {
            endGame();
            return;
        }
        snake.unshift(head);
        if (head.x === food.x && head.y === food.y) {
            score++;
            food = {x: Math.floor(Math.random()*gridWidth), y: Math.floor(Math.random()*gridHeight)};
        } else {
            snake.pop();
        }
        drawGrid();
    }

    function endGame() {
        gameOver = true;
        terminalOutput.innerHTML += `<div style='color:red;'>Game Over! Final Score: ${score}<br>Type 'snake' to play again.</div>`;
        document.removeEventListener('keydown', handleKey);
    }

    function handleKey(e) {
        if (gameOver) return;
        if (e.key === 'ArrowUp' && direction !== 'down') direction = 'up';
        if (e.key === 'ArrowDown' && direction !== 'up') direction = 'down';
        if (e.key === 'ArrowLeft' && direction !== 'right') direction = 'left';
        if (e.key === 'ArrowRight' && direction !== 'left') direction = 'right';
        if (e.key === 'Escape') endGame();
    }

    document.addEventListener('keydown', handleKey);
    drawGrid();
    let interval = setInterval(() => {
        if (!gameOver) moveSnake();
        else clearInterval(interval);
    }, 300);
}

function initInteractiveTerminal() {
    const terminalInput = document.getElementById('terminalInput');
    
    if (!terminalInput) {
        console.error('Terminal input not found');
        return;
    }
    
    // Focus the input when page loads
    setTimeout(() => {
        terminalInput.focus();
    }, 1000);
    
    terminalInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const command = terminalInput.value.trim();
            
            if (command) {
                // Add command to output
                addTerminalOutput(`yash@portfolio:~$ ${command}`, 'command-output');
                
                // Process command
                processTerminalCommand(command);
            } else {
                // Empty command - just show prompt
                addTerminalOutput(`yash@portfolio:~$`, 'command-output');
            }
            
            // Clear input
            terminalInput.value = '';
            
            // Keep focus on input
            setTimeout(() => {
                terminalInput.focus();
            }, 10);
        }
    });
    
    // Focus on input when terminal is clicked
    document.querySelector('.interactive-terminal').addEventListener('click', (e) => {
        if (e.target !== terminalInput) {
            terminalInput.focus();
        }
    });
    
    // Prevent context menu on terminal
    document.querySelector('.interactive-terminal').addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });
}

// Start interactive terminal when page loads
document.addEventListener('DOMContentLoaded', () => {
    initInteractiveTerminal();
    createParticles();
    initFloatingButton();

    // Disable right-click context menu
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });

    // Block Ctrl+U (view source)
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.key.toLowerCase() === 'u') {
            e.preventDefault();
        }
    });
});

// Particle System
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 4 + 1;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        
        particlesContainer.appendChild(particle);
    }
}

// Floating Action Button
function initFloatingButton() {
    const fab = document.querySelector('.fab-main');
    
    fab.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Show/hide FAB based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            fab.style.opacity = '1';
            fab.style.visibility = 'visible';
        } else {
            fab.style.opacity = '0';
            fab.style.visibility = 'hidden';
        }
    });
    
    // Initially hide FAB
    fab.style.opacity = '0';
    fab.style.visibility = 'hidden';
    fab.style.transition = 'all 0.3s ease';
}


// Skills tags hover effect
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1) translateY(-2px)';
    });
    
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) translateY(0)';
    });
});

// Project cards hover effect
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add ripple effect to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
