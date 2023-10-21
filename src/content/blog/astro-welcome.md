---
intro: "How I built this website, why I picked the Astro framework, and the reason Tailwind is the best way to write CSS in 2023!"
image: "@assets/images/rocket.png"
date: 2023-10-20
---

# Welcome to My New Personal Website!

Thanks for checking out my brand new portfolio website! In this write-up, I’ll walk through the purpose of this website, explain the frameworks and tools I used to build and deploy it, as well as some challenges I discovered along the way. Let’s get started!

## Why I built this site

I’ve wanted to build a new website for a while, and finally found the time and motivation to do so. When developing this site I had a few goals in mind:

1. Having an online portfolio where I can showcase my stuff, namely programming projects and photos I’ve taken.
2. Being able to share ideas and knowlegde through the occacional blog post (like this one).
3. Improving my online presence on a platform that I fully control.
4. Having a platform where I can play with and experiment with new web technologies that I find interesting.

With that out of the way, let’s run through the technologies that power [mikkelsvartveit.com](https://mikkelsvartveit.com)

## Astro

The main tool that this website was built with is [Astro](https://astro.build). Astro takes a different approach than other JavaScript frameworks. Where Next.js, SvelteKit and the likes are mainly targeting web _applications_, Astro is really meant for writing websites where content is the focus. In a way, where other frameworks tend to feel centered around JavaScript, Astro is centered around HTML. Astro has a few tricks up its sleeve that makes it a great fit for a website like this.

### First-class Markdown integration

I wrote the first version of this website in SvelteKit. I love Svelte and SvelteKit. However, it turns out that using Markdown with SvelteKit is not ideal. The nice thing about Markdown is that it makes it super easy for me to publish content on the website. I can write an article in my note-taking app, export it as Markdown, and place it right into the Git repository. While I did eventually get Markdown working with a third-party library in SvelteKit, it felt hacky and had a few annoying quirks. Astro, on the other hand, was built with Markdown in mind from day one. Just place the Markdown files in a special `content/` folder, and you can easily map each file to a page route. Astro even makes sure that the frontmatter (a special section on top of the Markdown file where you can define things like dates and tags) follows the format you intend, and throws a type error whenever you make a mistake.

### Automatic image optimization

I have a lot of images around this website. In SvelteKit, I wrote a Node.js script that took all my huge photos, resized them in two different sizes (one for thumbnails and one for full-screen views), and placed them in another directory. This script ran every time I did the `npm run build` process. While this did work just fine, Astro made it so much more intuitive with the built-in `<Image />` component. Just replace the regular `<img>` tag with this component, specify the resolution you want, and Astro automatically generates optimized versions of the images at build-time. You can even make it generate multiple file types and resolutions for each image, allowing the browser to choose the best version of the image itself. Nice!

### Bring your own UI framework

Another _really_ cool feature of Astro is the ability to use components from pretty much any modern JavaScript framework you can think of. You can use React, Vue or Svelte within your Astro pages, and even mix components from different frameworks on the same page! This is not only impressive from a technical standpoint, but also super useful. Unlike most web frameworks, Astro ships zero JavaScript as default. This is great for performance and accessibility, but once in a while it's nice to write components in something like React when you really need the interactiveness.

I utilized this feature for the navigation bar on the top of this site. It has a box shadow that shows and hides dynamically, and on mobile browsers it shows a menu button that expands a shelf of navigation links. Sure, I could have done this with vanilla JS, but I felt that using a Svelte component would be simpler and more maintainable. Besides, I already had this component ready from the old SvelteKit version of the website! I simply copied this file over, and it just worked right away, which was kind of a mind-blowing moment.

### View Transitions

While the new View Transitions API is only supported in Chrome and other Chromium-based browsers for now, it is undeniably very cool. Astro utilizes this API in a really frictionless way. With just _one line_ of code, Astro will enable a 3KB large Javascript router that provides really sleek transitions between all your pages. And with a few more lines, you can achieve even more impressive transitions with elements persisting across pages. I’ve tried doing this on my photography page to medium success, yet the best demo I’ve seen for this is this [Spotify clone](https://spotify-astro-transitions.vercel.app) made by Igor M. Penaque. Go check it out!

## Tailwind CSS

I’ve heard people talking about Tailwind for years, but I never really gave it any thought until quite recently. You see, Tailwind is one of those things that seem _really_ bad in theory. What it does is basically to provide you with a bunch of HTML classes for almost every CSS property that exists. The idea is that instead of writing CSS, you just throw a bunch of these classes into each HTML element and call it a day. Sounds terrible, right? Well, I thought so too, until I heard a coworker say something that really hit home with me. I’m paraphrasing, but he said something along the lines of “styling with Tailwind is so fast that I no longer bother with Figma”. I really don’t like Figma at all, as I just get the feeling of having to implement the same styles twice, first in Figma and then in CSS, so this point naturally made me curious.

I decided to actually give Tailwind a try, and now I would honestly call Tailwind my favorite web development tool ever. It solves pretty much all the things I didn’t know I disliked about CSS:

- There is no need to come up with HTML classes yourself anymore. This is a surprisingly delightful feature. Coming up with good class names selectors is hard, especially on a project where you collaborate with people that might have a different coding style than you. And all those hours wasted figuring out which CSS selectors gets the highest priority? Tailwind solves it. Your Tailwind classes determine how your element is styled, and there’s no need to think about anything more than that.
- It reduces decision fatigue. As an overly perfectionist developer, I used to find myself making micro-adjustments to my styles that no one but myself would ever notice. I would frequently think “this color should probably be 2% darker”, or “this `div` for sure deserves one more pixel of bottom padding”. Tailwind mitigates this by providing a perfectly balanced style system, where the possible values are spaced apart in a way that limits your choices _just_ enough to reduce overthinking, while giving you the granularity you need.
- Speaking of colors: instead of spending hours in a color picker trying to find the perfect hex value, Tailwind provides 22 base colors with 10 shades for each of them referenced in the format of `blue-400` and `amber-800`. This makes it super easy to keep a consistent color scheme but use different shades for stuff like hover effects. This color selection is so nice that in project where I don’t have Tailwind, I actually [reference the Tailwind colors from their docs](https://tailwindcss.com/docs/customizing-colors).
- Each style is tightly coupled to a single element. This is great for a couple of reasons. First, if you decide to delete some HTML or JSX code down the line, you can be sure that the styling gets deleted with it. A lot of large projects have leftovers in the CSS filel because the developers didn’t realize that style is not in use anymore. On the flip side, you never have to worry about breaking something else when changing a style in Tailwind, because the style is only in use for that one element in the first place.
- And, like my coworker suggested, building websites with Tailwind is _so_ fast. Not having to constantly context switch between HTML and CSS files is a relief I didn’t realize I needed.
