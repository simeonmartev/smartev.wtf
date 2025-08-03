const cvJson = {
    "name": "Simeon Martev",
    "title": "VP of Engineering at Identrics",
    "bio": "Software developer with 15+ years of experience, currently leading engineering teams at Identrics, a part of UpDataOne. Skilled in data extraction, aggregation, ETL, new technology research, and software architecture, with a strong background in CMS projects using Perl Catalyst and Python Django.",
    "contact": {
        "website": "https://smartev.wtf",
        "linkedin.com": "https://www.linkedin.com/in/smartev/"
    },
    "education": {
        "degree": "Computer Science (Incomplete)",
        "institution": "University of Ruse",
        "year": "Drop out on the third year"
    },
    "skills": [
        "Python", "Perl", "PHP", "Scrapy", "PostgreSQL", "Elasticsearch", "Airflow", "spaCy", "FastAPI", "RabbitMQ", "GraphDB"
    ],
    "experience": [
        {
            "company": "UpDataOne (Identrics)",
            "position": "VP of Engineering",
            "period": "2012 - Present",
            "responsibilities": [
                "Developed and maintained CMS projects utilising Perl Catalyst and Python Django frameworks.",
                "Oversaw data extraction and aggregation processes, ensuring data accuracy and efficiency.",
                "Managed ETL tasks to facilitate seamless data integration between systems.",
                "Conducted research on emerging technologies and integrated them into the company's workflow.",
                "Designed software architecture to support scalable and maintainable systems.",
                "Set up new projects, providing technical guidance and leadership."
            ]
        },
        {
            "company": "Mag Dvartisign",
            "position": "Web Developer",
            "period": "2010 - 2012",
            "responsibilities": [
                "Created bespoke advert websites using PHP, ensuring high-quality design and functionality.",
                "Developed custom WordPress themes and plugins to meet client requirements.",
                "Utilised Drupal to build feature-rich web applications, tailored to client needs.",
                "Implemented Joomla-based solutions to deliver responsive and visually appealing websites."
            ]
        },
        {
            "company": "Point Studio",
            "position": "Web Developer",
            "period": "2007 - 2009",
            "responsibilities": [
                "Designed and developed websites using PHP, adhering to best practices and client specifications."
            ]
        }
    ]
};
document.getElementById('cv-json').innerText = JSON.stringify(cvJson, null, 4);
