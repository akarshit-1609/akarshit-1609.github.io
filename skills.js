const skills_data = {
    "Frontend": {
        "fas fa-code card-icon":
            ["HTML5", "CSS3", "JavaScript (ES6+)", "Bootstrap 5"]
    },
    "Backend": {
        "fas fa-server card-icon":
            ["Python (FastAPI)", "Node.js / Express", "PHP"]
    },
    "Database": {
        "fas fa-database card-icon":
            ["MySQL", "PostgreSQL", "MongoDB"]
    },
    "Programming": {
        "fas fa-laptop-code card-icon":
            ["Python", "C/C++", "Java", "JavaScript", "Kotlin", "PHP"]
    },
    "AI & Vector DBs": {
        "fas fa-brain card-icon":
            ["LLM Integration", "Ollama", "Workers AI", "Pinecone", "Qdrant", "Prompt Engineering"]
    },
    "Tools": {
        "fas fa-wrench card-icon":
            ["VS Code", "Git", "Github", "Docker", "Linux", "Shell Script"]
    }
}
for (const [topic, icons] of Object.entries(skills_data)) {
    document.write(`<div class="col-md-4"><div class="card p-4">`);
    for (const [icon, values] of Object.entries(icons)) {
        document.write(`<i class="${icon}"></i>`);
        document.write(`<h4 class="card-title mb-3">${topic}</h4><div>`);
        for (const value of values) {
            document.write(`<span class="badge-skill d-inline-block">${value}</span>`);
        }
    }
    document.write(`</div></div></div>`);
}