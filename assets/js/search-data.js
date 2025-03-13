// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "Projects",
          description: "This portion of the website is a showcase of all of my personal projects. Feel free to look through each of them, and ask questions about them by reaching out. Enjoy!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Blog/index.html";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "This portioin of the site contains relevant details relating my skills, accomplishments, and other basic information.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-how-to-understand-black-scholes-explained-by-a-first-year-math-student",
      
        title: "How to understand Black-Scholes: Explained by a first year math student",
      
      description: "an example of a distill-style blog post and main elements",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/distill/";
        
      },
    },{id: "post-a-post-with-disqus-comments",
      
        title: "a post with disqus comments",
      
      description: "an example of a blog post with disqus comments",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/disqus-comments/";
        
      },
    },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-hi-i-just-finished-building-the-basic-framework-of-this-website-today-hoping-to-build-this-site-into-something-great",
          title: 'Hi! I just finished building the basic framework of this website today! Hoping...',
          description: "",
          section: "News",},{id: "projects-deep-learning-2d-and-3d-gradient-descent",
          title: 'Deep Learning: 2D and 3D Gradient Descent',
          description: "Developing a gradient descent model using Deep Learning",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-fractal-tree-generation-in-python",
          title: 'Fractal Tree Generation in Python',
          description: "Methods and strategies I used for this simple Fractal Tree program I wrote in Python",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-enhancing-the-black-scholes-with-dl-based-sentiment-analysis",
          title: 'Enhancing the Black Scholes with DL-based Sentiment Analysis',
          description: "BRUH WHAT AM I DOING WITH MY LIFE",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%68%6A%63%68%6F%61%61@%63%6F%6E%6E%65%63%74.%75%73%74.%68%6B", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/hee-jae-cho-39377a323", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Hjcho123", "_blank");
        },
      },{
        id: 'social-medium',
        title: 'Medium',
        section: 'Socials',
        handler: () => {
          window.open("https://medium.com/@@wouldyouhavethetime", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
