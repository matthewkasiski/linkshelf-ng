type Config = {
  page: {
    backgroundColorTopRGB: string // TODO: Add Integer children with ranges
    backgroundColorBottomRGB: string
  }
  profile: {
    picture: string
    name: string
    links: {
      title: string
      url: string
    }[]
  }
}

type FileData = {
  name: string
  content: string
}

export const generateLinkshelf = (config: Config): FileData[] => {
  return [
    {
      name: 'index.html',
      content: `
      <html lang="en">
        <head>
          <title>${config.profile.name}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <link rel="stylesheet" href="./main.css">
        </head>
        <body>
          <div class="background">
            <div class="container">
              <img class="profile-picture" alt="Profile Picture" src="${config.profile.picture}">
              <div class="name">${config.profile.name}</div>
              ${config.profile.links
                .map(({ title, url }) => {
                  return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="link">${title}</a>`
                })
                .join('')}
            </div>
          </div>
        </body>
    </html>`
    },
    {
      name: 'main.css',
      content: `
      @import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap');

      html {
        color: white;
        font-size: 25px;
        font-family: 'Architects Daughter', cursive;
      }

      body {
        margin: 0;
      }

      .background {
        background: linear-gradient(0deg, rgb(${config.page.backgroundColorTopRGB}), rgb(${config.page.backgroundColorBottomRGB}));
        min-width: 100vw;
        min-height: 100vh;
      }

      .container {
        max-width: 32rem;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem;
      }

      .profile-picture {
        width: 5rem;
        border-radius: 100%;
        margin-bottom: 1rem;
      }

      .name {
        margin-bottom: 2rem;
      }

      .link {
        display: block;
        text-align: center;
        width: 100%;
        border: 2px solid white;
        padding: 0.5rem;
        transition: box-shadow 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s,
          color 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s,
          border-color 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s,
          transform 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s,
          background-color 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s;
        color: white;
        text-decoration: none;
        margin-bottom: 1rem;
      }

      .link:hover {
        background: white;
        color: rgb(105, 79, 246);
      }
      `
    }
  ]
}
