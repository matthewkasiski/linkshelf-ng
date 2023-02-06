# LinkShelf Next Generation

A command-line tool to generate your own "linktree-like" website. Forked from linktree


## Goals
1. Resolve any out of date dependencies via automation
2. Add additional customization features
   1. The ability to customize page background
   2. The ability to add icons to link text
   3. The ability to hotlink images or add statically (e.g. local or inline encoded)
   4. The ability to select font type
3. Implement linting
4. 80%+ code coverage tests to automate PRs (e.g. Dependabot)


## Install

```
npm i -g linkshelf-ng
```

## Usage

```
> linkshelf-ng [config] [outDir]
```

Example:

```
> linkshelf-ng myconfig.json dist
```

## Configuration

Here is an example configuration

```json
{
   "page": {
      "backgroundColorTopRGB": "0, 0, 0",
      "backgroundColorBottomRGB": "0, 0, 0"
   },
   "profile": {
      "picture": "https://pbs.twimg.com/profile_images/1380814586811711492/INwiwIpB_400x400.jpg",
      "name": "YCM Jason",
      "links": [
         {
            "title": "Github",
            "url": "https://github.com/ycmjason"
         },
         {
            "title": "Youtube",
            "url": "https://www.youtube.com/channel/UC5dnaJZdEShWfZOwSCXNGcA"
         }
      ]
   }
}
```

## Author

YCM Jason, Matthew Kasiski
