// Dynamically creating the main navigation page
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.margin = "0";
document.body.style.padding = "0";
document.body.style.backgroundColor = "#f4f4f4";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.height = "100vh";

// Create container
const container = document.createElement("div");
container.style.textAlign = "center";
container.style.background = "white";
container.style.padding = "2rem";
container.style.borderRadius = "8px";
container.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
container.style.width = "80%";
container.style.maxWidth = "600px";

document.body.appendChild(container);

// Add title
const title = document.createElement("h1");
title.textContent = "Welcome to My Project Hub";
title.style.marginBottom = "1rem";
title.style.color = "#333";
container.appendChild(title);

// Add description
const description = document.createElement("p");
description.textContent = "Select a project to explore:";
container.appendChild(description);

// Create navigation menu
const nav = document.createElement("nav");
const ul = document.createElement("ul");
ul.style.listStyleType = "none";
ul.style.padding = "0";

// Projects list
const projects = [
    { name: "To-Do List", func: createToDoList },
    { name: "Weather App", func: createWeatherApp },
    { name: "Gallery Page", func: createGalleryPage },
    { name: "Quiz App", func: createQuizApp },
    { name: "E-Commerce Product Page", func: createEcommercePage },
    { name: "Random Quote Generator", func: createQuoteGenerator },
];

// Loop through projects and create links
projects.forEach((project) => {
    const li = document.createElement("li");
    li.style.margin = "1rem 0";

    const link = document.createElement("button");
    link.textContent = project.name;
    link.style.textDecoration = "none";
    link.style.color = "white";
    link.style.backgroundColor = "#007bff";
    link.style.padding = "0.75rem 1.5rem";
    link.style.border = "none";
    link.style.borderRadius = "5px";
    link.style.fontWeight = "bold";
    link.style.transition = "background 0.3s";
    link.style.cursor = "pointer";

    link.addEventListener("click", () => {
        container.innerHTML = ""; // Clear main page content
        project.func(); // Load the project content
    });

    link.addEventListener("mouseover", () => {
        link.style.backgroundColor = "#0056b3";
    });

    link.addEventListener("mouseout", () => {
        link.style.backgroundColor = "#007bff";
    });

    li.appendChild(link);
    ul.appendChild(li);
});

nav.appendChild(ul);
container.appendChild(nav);



function createToDoList() {
    // Add title for To-Do List
    const title = document.createElement("h2");
    title.textContent = "To-Do List";
    container.appendChild(title);

    // Add a form for task input
    const form = document.createElement("form");
    form.id = "task-form";

    const input = document.createElement("input");
    input.type = "text";
    input.id = "task-input";
    input.placeholder = "Add a new task...";
    input.required = true;

    const button = document.createElement("button");
    button.type = "submit";
    button.textContent = "Add Task";
    button.style.marginLeft = "10px";

    form.appendChild(input);
    form.appendChild(button);
    container.appendChild(form);

    // Add a task list container
    const taskList = document.createElement("ul");
    taskList.id = "task-list";
    taskList.style.listStyleType = "none";
    taskList.style.padding = "0";
    taskList.style.marginTop = "1rem";
    container.appendChild(taskList);

    // Style the To-Do List components
    taskList.style.borderTop = "1px solid #ddd";
    taskList.style.paddingTop = "1rem";

    form.style.marginBottom = "1rem";
    input.style.width = "70%";
    input.style.padding = "0.5rem";
    input.style.border = "1px solid #ddd";
    input.style.borderRadius = "4px";

    button.style.padding = "0.5rem";
    button.style.backgroundColor = "#5cb85c";
    button.style.color = "white";
    button.style.border = "none";
    button.style.borderRadius = "4px";
    button.style.cursor = "pointer";

    button.addEventListener("mouseover", () => {
        button.style.backgroundColor = "#4cae4c";
    });

    button.addEventListener("mouseout", () => {
        button.style.backgroundColor = "#5cb85c";
    });

    // JavaScript logic for task management
    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent page refresh
        const taskText = input.value.trim();
        if (taskText) {
            // Create a task item
            const listItem = document.createElement("li");
            listItem.style.display = "flex";
            listItem.style.justifyContent = "space-between";
            listItem.style.alignItems = "center";
            listItem.style.marginBottom = "0.5rem";
            listItem.style.padding = "0.5rem";
            listItem.style.border = "1px solid #ddd";
            listItem.style.borderRadius = "4px";
            listItem.style.backgroundColor = "#f9f9f9";

            // Task content
            const taskContent = document.createElement("span");
            taskContent.textContent = taskText;

            // Delete button
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.style.backgroundColor = "#d9534f";
            deleteButton.style.color = "white";
            deleteButton.style.border = "none";
            deleteButton.style.padding = "0.3rem 0.5rem";
            deleteButton.style.borderRadius = "4px";
            deleteButton.style.cursor = "pointer";

            deleteButton.addEventListener("mouseover", () => {
                deleteButton.style.backgroundColor = "#c9302c";
            });

            deleteButton.addEventListener("mouseout", () => {
                deleteButton.style.backgroundColor = "#d9534f";
            });

            deleteButton.addEventListener("click", () => {
                listItem.remove(); // Remove the task
            });

            // Add task content and delete button to the list item
            listItem.appendChild(taskContent);
            listItem.appendChild(deleteButton);
            taskList.appendChild(listItem);

            // Clear the input field
            input.value = "";
        }
    });
}



function createWeatherApp() {
    // Add title for Weather App
    const title = document.createElement("h2");
    title.textContent = "Weather App";
    container.appendChild(title);

    // Add a form for city input
    const form = document.createElement("form");
    form.id = "weather-form";

    const input = document.createElement("input");
    input.type = "text";
    input.id = "city-input";
    input.placeholder = "Enter city name...";
    input.required = true;

    const button = document.createElement("button");
    button.type = "submit";
    button.textContent = "Get Weather";
    button.style.marginLeft = "10px";

    form.appendChild(input);
    form.appendChild(button);
    container.appendChild(form);

    // Add a container to display weather details
    const weatherDisplay = document.createElement("div");
    weatherDisplay.id = "weather-display";
    weatherDisplay.style.marginTop = "1rem";
    container.appendChild(weatherDisplay);

    // Style components
    form.style.marginBottom = "1rem";
    input.style.width = "70%";
    input.style.padding = "0.5rem";
    input.style.border = "1px solid #ddd";
    input.style.borderRadius = "4px";

    button.style.padding = "0.5rem";
    button.style.backgroundColor = "#007bff";
    button.style.color = "white";
    button.style.border = "none";
    button.style.borderRadius = "4px";
    button.style.cursor = "pointer";

    button.addEventListener("mouseover", () => {
        button.style.backgroundColor = "#0056b3";
    });

    button.addEventListener("mouseout", () => {
        button.style.backgroundColor = "#007bff";
    });

    // Fetch weather data from API
    form.addEventListener("submit", async function (e) {
        e.preventDefault(); // Prevent page refresh
        const city = input.value.trim();
        if (city) {
            const apiKey = "your_openweathermap_api_key"; // Replace with your API key
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

            try {
                const response = await fetch(apiUrl);
                if (!response.ok) throw new Error("City not found");

                const data = await response.json();
                displayWeather(data); // Display the weather data
            } catch (error) {
                weatherDisplay.textContent = "Error: " + error.message;
                weatherDisplay.style.color = "red";
            }
        }
    });

    // Function to display weather data
    function displayWeather(data) {
        weatherDisplay.innerHTML = ""; // Clear previous content

        const cityName = document.createElement("h3");
        cityName.textContent = `Weather in ${data.name}, ${data.sys.country}`;

        const temperature = document.createElement("p");
        temperature.textContent = `Temperature: ${data.main.temp}°C`;

        const description = document.createElement("p");
        description.textContent = `Condition: ${data.weather[0].description}`;

        const humidity = document.createElement("p");
        humidity.textContent = `Humidity: ${data.main.humidity}%`;

        weatherDisplay.appendChild(cityName);
        weatherDisplay.appendChild(temperature);
        weatherDisplay.appendChild(description);
        weatherDisplay.appendChild(humidity);

        weatherDisplay.style.color = "#333";
    }
}


function createGalleryPage() {
    // Add title for the Gallery Page
    const title = document.createElement("h2");
    title.textContent = "Gallery Page";
    container.appendChild(title);

    // Add a description
    const description = document.createElement("p");
    description.textContent = "Click on any image to view it in full size.";
    container.appendChild(description);

    // Create a grid container for the gallery
    const galleryContainer = document.createElement("div");
    galleryContainer.style.display = "grid";
    galleryContainer.style.gridTemplateColumns = "repeat(auto-fit, minmax(150px, 1fr))";
    galleryContainer.style.gap = "1rem";
    galleryContainer.style.marginTop = "1rem";
    container.appendChild(galleryContainer);

    // Array of image URLs (replace these with your own image links)
    const imageUrls = [
        "https://via.placeholder.com/300", // Placeholder images
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
    ];

    // Add images to the gallery
    imageUrls.forEach((url) => {
        const img = document.createElement("img");
        img.src = url;
        img.alt = "Gallery Image";
        img.style.width = "100%";
        img.style.borderRadius = "8px";
        img.style.cursor = "pointer";
        img.style.transition = "transform 0.3s";

        // Add hover effect
        img.addEventListener("mouseover", () => {
            img.style.transform = "scale(1.05)";
        });

        img.addEventListener("mouseout", () => {
            img.style.transform = "scale(1)";
        });

        // Add click event to expand image
        img.addEventListener("click", () => {
            displayFullImage(url);
        });

        galleryContainer.appendChild(img);
    });

    // Function to display the clicked image in full size
    function displayFullImage(url) {
        // Create a modal overlay
        const overlay = document.createElement("div");
        overlay.style.position = "fixed";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        overlay.style.display = "flex";
        overlay.style.justifyContent = "center";
        overlay.style.alignItems = "center";
        overlay.style.zIndex = "1000";

        // Create a full-size image
        const fullImage = document.createElement("img");
        fullImage.src = url;
        fullImage.alt = "Full-Size Image";
        fullImage.style.maxWidth = "90%";
        fullImage.style.maxHeight = "90%";
        fullImage.style.borderRadius = "8px";

        // Add click event to close the modal
        overlay.addEventListener("click", () => {
            overlay.remove();
        });

        overlay.appendChild(fullImage);
        document.body.appendChild(overlay);
    }
}

function createQuizApp() {
    // Add title for the Quiz App
    const title = document.createElement("h2");
    title.textContent = "Quiz App";
    container.appendChild(title);

    // Add a description
    const description = document.createElement("p");
    description.textContent = "Answer the questions below and test your knowledge!";
    container.appendChild(description);

    // Array of questions
    const questions = [
        {
            question: "What is the capital of France?",
            options: ["Berlin", "Madrid", "Paris", "Rome"],
            answer: 2, // Index of the correct answer
        },
        {
            question: "What is 5 + 3?",
            options: ["5", "8", "10", "15"],
            answer: 1,
        },
        {
            question: "Who wrote 'To Kill a Mockingbird'?",
            options: ["Harper Lee", "Mark Twain", "J.K. Rowling", "Ernest Hemingway"],
            answer: 0,
        },
    ];

    let currentQuestion = 0;
    let score = 0;

    // Create a container for the quiz
    const quizContainer = document.createElement("div");
    quizContainer.id = "quiz-container";
    container.appendChild(quizContainer);

    // Function to load a question
    function loadQuestion() {
        // Clear the quiz container
        quizContainer.innerHTML = "";

        // If all questions are answered, display the result
        if (currentQuestion >= questions.length) {
            displayResult();
            return;
        }

        // Display the question
        const questionText = document.createElement("h3");
        questionText.textContent = questions[currentQuestion].question;
        quizContainer.appendChild(questionText);

        // Display the options
        questions[currentQuestion].options.forEach((option, index) => {
            const button = document.createElement("button");
            button.textContent = option;
            button.style.margin = "5px";
            button.style.padding = "10px 15px";
            button.style.border = "1px solid #ddd";
            button.style.borderRadius = "4px";
            button.style.cursor = "pointer";
            button.style.backgroundColor = "#f4f4f4";

            button.addEventListener("mouseover", () => {
                button.style.backgroundColor = "#d9d9d9";
            });

            button.addEventListener("mouseout", () => {
                button.style.backgroundColor = "#f4f4f4";
            });

            button.addEventListener("click", () => {
                if (index === questions[currentQuestion].answer) {
                    score++;
                }
                currentQuestion++;
                loadQuestion();
            });

            quizContainer.appendChild(button);
        });
    }

    // Function to display the result
    function displayResult() {
        quizContainer.innerHTML = ""; // Clear the quiz container

        const resultText = document.createElement("h3");
        resultText.textContent = `You scored ${score} out of ${questions.length}!`;
        quizContainer.appendChild(resultText);

        const restartButton = document.createElement("button");
        restartButton.textContent = "Restart Quiz";
        restartButton.style.marginTop = "10px";
        restartButton.style.padding = "10px 15px";
        restartButton.style.border = "1px solid #ddd";
        restartButton.style.borderRadius = "4px";
        restartButton.style.cursor = "pointer";
        restartButton.style.backgroundColor = "#5cb85c";
        restartButton.style.color = "white";

        restartButton.addEventListener("mouseover", () => {
            restartButton.style.backgroundColor = "#4cae4c";
        });

        restartButton.addEventListener("mouseout", () => {
            restartButton.style.backgroundColor = "#5cb85c";
        });

        restartButton.addEventListener("click", () => {
            currentQuestion = 0;
            score = 0;
            loadQuestion();
        });

        quizContainer.appendChild(restartButton);
    }

    // Load the first question
    loadQuestion();
}

function createEcommercePage() {
    // Add title for the E-Commerce Page
    const title = document.createElement("h2");
    title.textContent = "E-Commerce Product Page";
    container.appendChild(title);

    // Add a description
    const description = document.createElement("p");
    description.textContent = "Browse through our products and add them to your cart!";
    container.appendChild(description);

    // Create a grid container for products
    const productContainer = document.createElement("div");
    productContainer.style.display = "grid";
    productContainer.style.gridTemplateColumns = "repeat(auto-fit, minmax(200px, 1fr))";
    productContainer.style.gap = "1rem";
    productContainer.style.marginTop = "1rem";
    container.appendChild(productContainer);

    // Array of product details
    const products = [
        {
            name: "Wireless Headphones",
            price: "$99.99",
            image: "https://via.placeholder.com/200",
        },
        {
            name: "Smart Watch",
            price: "$149.99",
            image: "https://via.placeholder.com/200",
        },
        {
            name: "Gaming Laptop",
            price: "$999.99",
            image: "https://via.placeholder.com/200",
        },
        {
            name: "4K Monitor",
            price: "$249.99",
            image: "https://via.placeholder.com/200",
        },
        {
            name: "Bluetooth Speaker",
            price: "$49.99",
            image: "https://via.placeholder.com/200",
        },
    ];

    // Create individual product cards
    products.forEach((product) => {
        const card = document.createElement("div");
        card.style.border = "1px solid #ddd";
        card.style.borderRadius = "8px";
        card.style.overflow = "hidden";
        card.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
        card.style.padding = "1rem";
        card.style.textAlign = "center";
        card.style.backgroundColor = "white";

        const img = document.createElement("img");
        img.src = product.image;
        img.alt = product.name;
        img.style.width = "100%";
        img.style.borderRadius = "4px";

        const productName = document.createElement("h3");
        productName.textContent = product.name;
        productName.style.margin = "0.5rem 0";

        const productPrice = document.createElement("p");
        productPrice.textContent = product.price;
        productPrice.style.color = "#28a745";
        productPrice.style.fontWeight = "bold";

        const addToCartButton = document.createElement("button");
        addToCartButton.textContent = "Add to Cart";
        addToCartButton.style.backgroundColor = "#007bff";
        addToCartButton.style.color = "white";
        addToCartButton.style.border = "none";
        addToCartButton.style.borderRadius = "4px";
        addToCartButton.style.padding = "0.5rem 1rem";
        addToCartButton.style.cursor = "pointer";

        addToCartButton.addEventListener("mouseover", () => {
            addToCartButton.style.backgroundColor = "#0056b3";
        });

        addToCartButton.addEventListener("mouseout", () => {
            addToCartButton.style.backgroundColor = "#007bff";
        });

        addToCartButton.addEventListener("click", () => {
            alert(`Added ${product.name} to cart!`);
        });

        card.appendChild(img);
        card.appendChild(productName);
        card.appendChild(productPrice);
        card.appendChild(addToCartButton);
        productContainer.appendChild(card);
    });
}


function createQuoteGenerator() {
    // Add title for the Quote Generator
    const title = document.createElement("h2");
    title.textContent = "Random Quote Generator";
    container.appendChild(title);

    // Add a description
    const description = document.createElement("p");
    description.textContent = "Click the button below to generate a random inspirational quote!";
    container.appendChild(description);

    // Create a container for the quote display
    const quoteContainer = document.createElement("div");
    quoteContainer.id = "quote-container";
    quoteContainer.style.marginTop = "1rem";
    quoteContainer.style.padding = "1rem";
    quoteContainer.style.border = "1px solid #ddd";
    quoteContainer.style.borderRadius = "8px";
    quoteContainer.style.backgroundColor = "#f9f9f9";
    quoteContainer.style.textAlign = "center";
    container.appendChild(quoteContainer);

    const quoteText = document.createElement("p");
    quoteText.id = "quote-text";
    quoteText.textContent = "Your quote will appear here!";
    quoteText.style.fontStyle = "italic";
    quoteText.style.marginBottom = "1rem";
    quoteContainer.appendChild(quoteText);

    const authorText = document.createElement("p");
    authorText.id = "quote-author";
    authorText.textContent = "- Unknown";
    authorText.style.fontWeight = "bold";
    quoteContainer.appendChild(authorText);

    // Create the button to generate a random quote
    const quoteButton = document.createElement("button");
    quoteButton.textContent = "Generate Quote";
    quoteButton.style.marginTop = "1rem";
    quoteButton.style.padding = "0.5rem 1rem";
    quoteButton.style.backgroundColor = "#007bff";
    quoteButton.style.color = "white";
    quoteButton.style.border = "none";
    quoteButton.style.borderRadius = "4px";
    quoteButton.style.cursor = "pointer";
    quoteButton.style.fontWeight = "bold";

    quoteButton.addEventListener("mouseover", () => {
        quoteButton.style.backgroundColor = "#0056b3";
    });

    quoteButton.addEventListener("mouseout", () => {
        quoteButton.style.backgroundColor = "#007bff";
    });

    container.appendChild(quoteButton);

    // List of predefined quotes
    const quotes = [
        {
            text: "The only way to do great work is to love what you do.",
            author: "Steve Jobs",
        },
        {
            text: "In the middle of every difficulty lies opportunity.",
            author: "Albert Einstein",
        },
        {
            text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
            author: "Winston Churchill",
        },
        {
            text: "Believe you can and you're halfway there.",
            author: "Theodore Roosevelt",
        },
        {
            text: "Happiness is not something ready made. It comes from your own actions.",
            author: "Dalai Lama",
        },
        {
            text: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
            author: "Zig Ziglar",
        },
    ];

    // Add event listener to the button
    quoteButton.addEventListener("click", () => {
        // Generate a random quote
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];

        // Display the quote
        quoteText.textContent = `"${randomQuote.text}"`;
        authorText.textContent = `- ${randomQuote.author}`;
    });
}

