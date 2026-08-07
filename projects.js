const projects_data = {
"Tkinter toggle": {
    "technologies": "Python • Tkinter",
    "description": "A tkinter toggle widget is a reusable UI component for tkinter application.",
    "links": [
        ["View on PyPI", "fab fa-python", "https://pypi.org/project/tkinter-toggle/"],
        ["View Repository", "fab fa-github", "https://github.com/akarshit-1609/tkinter-toggle"],
    ]
},
"GLB 3D Model Viewer": {
    "technologies": "NodeJS • Vite • HTML/CSS/Bootstrap",
    "description": "An interactive web application for viewing and exploring GLB 3D models directly in your browser.",
    "links": [
        ["Visit Website", "fas fa-globe", "https://akarshit-1609.github.io/glb-3d-viewer/"],
        ["View Repository", "fab fa-github", "https://github.com/akarshit-1609/glb-3d-viewer"],
    ]
},
"Seven Segment Display": {
    "technologies": "HTML • CSS • Javascript",
    "description": "A lightweight, powerful JavaScript library for building interactive seven-segment displays on the web.",
    "links": [
        ["Demo Website", "fas fa-globe", "https://akarshit-1609.github.io/seven-segment-display/example/demo.html"],
        ["View Repository", "fab fa-github", "https://github.com/akarshit-1609/seven-segment-display"],
    ]
},
"Grade card export in excel": {
    "technologies": "Python (beautifulsoup4/xlsxwriter)",
    "description": "A Python-based web scraping tool to extract data from grade card marksheet and save it into Excel files.",
    "links": [
        ["Download Software", "fas fa-fas fa-external-link-alt", "https://github.com/akarshit-1609/Grade_Card_Details_Store_in_Excel_File/releases"],
        ["View Repository", "fab fa-github", "https://github.com/akarshit-1609/Grade_Card_Details_Store_in_Excel_File"],
    ]
},
"Webcam floating on the screen": {
    "technologies": "Python (opencv-python/pillow)",
    "description": "Webcam floating window always show top of the screen.",
    "links": [
        ["Download Software", "fas fa-fas fa-external-link-alt", "https://github.com/akarshit-1609/webcam_using_python/releases"],
        ["View Repository", "fab fa-github", "https://github.com/akarshit-1609/webcam_using_python"],
    ]
},
"Remote Mouse and Keyboard": {
    "technologies": "Python (FastAPI/pynput/pyperclip) • HTML/CSS/Javascript",
    "logo": "https://raw.githubusercontent.com/akarshit-1609/Remote_Mouse_and_Keyboard_built_in_Python_FastAPI/main/static/image/icon.png",
    "description": "Turn your mobile device into a wireless mouse and keyboard to control host computer.",
    "links": [
        ["View Repository", "fab fa-github", "https://github.com/akarshit-1609/Remote_Mouse_and_Keyboard_built_in_Python_FastAPI"],
    ]
},
"Brick Breaker Game": {
    "technologies": "Python (pygame)",
    "logo": "https://raw.githubusercontent.com/akarshit-1609/Brick_Breaker_Game_using_Pygame/main/assets/favicon.png",
    "description": "A simple brick breaker game built with python.",
    "links": [
        ["Download Game", "fas fa-gamepad", "https://github.com/akarshit-1609/Brick_Breaker_Game_using_Pygame/releases"],
        ["View Repository", "fab fa-github", "https://github.com/akarshit-1609/Brick_Breaker_Game_using_Pygame"],
    ]
},
"Snake Game": {
    "technologies": "Python (Tkinter)",
    "logo": "https://raw.githubusercontent.com/akarshit-1609/Snake_Game_using_Python_Tkinter/main/src/icons/icon.png",
    "description": "A simple Python Snake game built with Python Tkinter.",
    "links": [
        ["Download Game", "fas fa-gamepad", "https://github.com/akarshit-1609/Snake_Game_using_Python_Tkinter/releases"],
        ["View Repository", "fab fa-github", "https://github.com/akarshit-1609/Snake_Game_using_Python_Tkinter"],
    ]
},
"Control LED light": {
    "technologies": "ESP32 (C++) • HTML/CSS/Javascript",
    "description": "ESP32 PlatformIO Project - Turn on/off LED Light from any device with esp32.",
    "links": [
        ["Demo video", "fab fa-youtube", "https://www.youtube.com/watch?v=oxVEiBCz5go?si=vBeSSYlmwBNJvuOp"],
        ["View Repository", "fab fa-github", "https://github.com/akarshit-1609/Controlling_led_light_with_esp32_web_interface"],
    ]
},
}
for (const [topic, info] of Object.entries(projects_data)) {
document.write(`
<div class="col-md-4">
    <div class="card">
        <div class="card-body">
            <h5 class="card-title fw-bold">${topic}</h5>
            <p class="card-text text-body-secondary small">${info.technologies}</p>
`);
if (Object.hasOwn(info, "logo")) {
    document.write(`<img src="${info.logo}" class="project-logo" alt="project-logo">`);
}
document.write(`<p class="card-text">${info.description}</p></div>`);
for (const [name, icon, link] of info.links) {
    document.write(`
    <div class="card-footer bg-transparent border-0 pb-3">
        <a href="${link}" target="_blank" class="btn btn-sm btn-dark w-100"><i class="${icon}"></i> ${name}</a>
    </div>
    `);
}
document.write(`</div></div>`);
}