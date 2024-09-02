const data = {
   head: {
       title: "Nitish Portfolio",
       meta: [
           { charset: "UTF-8" },
           { name: "viewport", content: "width=device-width, initial-scale=1.0" },
           { name: "description", content: "This is my professional portfolio website" },
           { name: "keywords", content: "portfolio, web development, projects" },
           { name: "author", content: "Nitish Kumar" }

         ]

      //    favicon: {
      //     href: "", // Path to your favicon file
      //     type: "image/x-icon"
      // }
   },
   about: "I am a web developer with experience in building modern web applications.",
   projects: [
       { title: "Project 1", description: "Area wise Disease Predition on Ml" },
       { title: "Project 2", description: "Description of project 2" },
       { title: "Project 3", description: "Portfolio website using Tailwind CSS" }
   ],
   contact: "You can reach me at nitish.edu.in@example.com"
};

// // Function to populate head tags
// function populateHead() {
//    document.title = data.head.title;
//    data.head.meta.forEach(metaInfo => {
//        const meta = document.createElement('meta');
//        Object.keys(metaInfo).forEach(key => {
//            meta.setAttribute(key, metaInfo[key]);
//        });
//        document.head.appendChild(meta);
//    });
// }

// // Function to populate the portfolio content
// function populateContent() {
//    document.getElementById('about-description').textContent = data.about;

//    const projectList = document.getElementById('project-list');
//    data.projects.forEach(project => {
//        const projectDiv = document.createElement('div');
//        projectDiv.className = 'project';
//        projectDiv.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
//        projectList.appendChild(projectDiv);
//    });

//    document.getElementById('contact-info').textContent = data.contact;
// }

// // Call functions to populate head and content
// populateHead();
// populateContent();
