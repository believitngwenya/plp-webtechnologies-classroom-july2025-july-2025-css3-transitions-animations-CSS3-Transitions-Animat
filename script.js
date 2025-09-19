
        // Global variables
        let animationsRunning = true;
        const themes = [
            ['#2c3e50', '#4a6583'],
            ['#1e3c72', '#2a5298'],
            ['#203a43', '#2c5364'],
            ['#283e51', '#4b79a1'],
            ['#3a1c71', '#d76d77']
        ];
        
        // DOM elements
        const statusElement = document.getElementById('status');
        const outputElement = document.getElementById('output');
        const modal = document.getElementById('modal');
        
        // Function to toggle animation class
        function toggleAnimation(elementId, animationClass) {
            const element = document.getElementById(elementId);
            if (element.classList.contains(animationClass)) {
                element.classList.remove(animationClass);
                updateStatus('Animation stopped for ' + elementId);
            } else {
                element.classList.add(animationClass);
                updateStatus('Animation started for ' + elementId);
            }
        }
        
        // Function to start all animations
        function startAllAnimations() {
            document.getElementById('book1').classList.add('pulse');
            document.getElementById('book2').classList.add('spin');
            document.getElementById('book3').classList.add('bounce');
            document.getElementById('book4').classList.add('book-flip');
            animationsRunning = true;
            updateStatus('All animations started');
        }
        
        // Function to stop all animations
        function stopAllAnimations() {
            document.getElementById('book1').classList.remove('pulse');
            document.getElementById('book2').classList.remove('spin');
            document.getElementById('book3').classList.remove('bounce');
            document.getElementById('book4').classList.remove('book-flip');
            animationsRunning = false;
            updateStatus('All animations stopped');
        }
        
        // Function to update status text
        function updateStatus(message) {
            statusElement.textContent = message;
            
            // Add a highlight effect
            statusElement.style.color = '#5ab9ea';
            setTimeout(() => {
                statusElement.style.color = 'white';
            }, 1000);
        }
        
        // Function to randomize animations
        function randomizeAnimations() {
            const animations = ['pulse', 'spin', 'bounce', 'book-flip'];
            const books = ['book1', 'book2', 'book3', 'book4'];
            
            // Remove all animations
            stopAllAnimations();
            
            // Add random animations
            books.forEach(bookId => {
                const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
                document.getElementById(bookId).classList.add(randomAnimation);
            });
            
            updateStatus('Random animations applied');
        }
        
        // Function to show modal
        function showModal() {
            modal.classList.add('active');
        }
        
        // Function to hide modal
        function hideModal() {
            modal.classList.remove('active');
        }
        
        // Function to calculate reading time (demonstrating parameters and return values)
        function calculateReadingTime() {
            const pages = parseFloat(prompt('Enter number of pages:'));
            const readingSpeed = parseFloat(prompt('Enter your reading speed (pages per hour):'));
            
            if (isNaN(pages) || isNaN(readingSpeed)) {
                outputElement.textContent = 'Invalid input. Please enter numbers.';
                return;
            }
            
            const readingTime = calculateTime(pages, readingSpeed);
            outputElement.textContent = `At ${readingSpeed} pages per hour, it will take ${readingTime} hours to read ${pages} pages.`;
        }
        
        // Helper function with parameters and return value
        function calculateTime(pages, speed) {
            return (pages / speed).toFixed(1);
        }
        
        // Function to update book title
        function updateBookTitle() {
            const newTitle = prompt('Enter new book title:');
            if (newTitle) {
                // Demonstrating scope - this only changes the first book title
                document.querySelector('.book-card h2').textContent = newTitle;
                outputElement.textContent = `Book title updated to: ${newTitle}`;
            }
        }
        
        // Function to change theme
        function changeTheme() {
            const randomTheme = themes[Math.floor(Math.random() * themes.length)];
            document.body.style.background = `linear-gradient(135deg, ${randomTheme[0]}, ${randomTheme[1]})`;
            outputElement.textContent = `Theme changed to gradient: ${randomTheme[0]} to ${randomTheme[1]}`;
        }
        
        // Function to calculate book stats
        function calculateBookStats() {
            const bookCount = document.querySelectorAll('.book-card').length;
            const animatedBooks = document.querySelectorAll('.book-cover[class*="animation"]').length;
            
            outputElement.textContent = `We have ${bookCount} books in our gallery. ${animatedBooks} are currently animated.`;
        }
        
        // Initialize page with animations
        document.addEventListener('DOMContentLoaded', () => {
            // Add initial animations with delays
            setTimeout(() => {
                startAllAnimations();
            }, 1000);
        });
    
