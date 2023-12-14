---
intro: "I'm intruiged by React Server Components, and Partial Prerendering is very clever. However, Next.js still has a long way to go."
image: "@assets/images/next14.png"
date: 2023-12-12
---

# Next.js 14 Is Really Cool. But It's Not Ready Yet.

Next.js 14 has been out for over a month now, and I’ve had some time to read and reflect on the new features. I am still intrigued by the integration with React Server Components introduced in Next.js 13, and I genuinely believe that React and Next brings novel stuff to the table that you just can’t find in other frameworks right now. However, even after version 14, I still have the feeling that Next.js isn’t quite ready for prime time.

## New stuff in version 14

I watched the keynote of Next.js Conf in October, and couldn’t help but feel a bit underwhelmed by the announcements. The updates in 14.0 can basically be summed up like this:

1. Existing feature that was previously in beta is still in beta.
2. Existing beta feature (that Remix and SvelteKit already has, by the way) is now finally production ready.
3. Actual new feature! But it’s only available in the bleeding-edge Canary version of Next.
4. Oh and we have some new flashy docs.

Let’s break each down a bit more.

### 1. Turbopack reaches 90% test coverage

While every other Javascript framework on earth is adopting Vite to great success, Vercel has decided to instead craft their own build tool replacement for Webpack. They call it Turbopack, which is a fitting name, because it’s _really_ fast (thank you Rust). Turbopack is built by incredibly skilled engineers and is a massive improvement over Webpack in almost every way.

The first alpha version of Turbopack [was released to the public over a year ago](https://vercel.com/blog/turbopack), and all Next.js developers could try it out by enabling a feature flag. This seemed promising, but fast forward one year, and Turbopack is [still not production ready](https://areweturboyet.com/). Vercel literally went on stage and proudly announced that "no, you still can't use Turbopack in your production apps". What?

I am happy on the behalf of Next.js developers that Turbopack will be ready soon™, but this doesn’t change the fact that in 2023, the most popular Javascript metaframework in the world still uses Webpack as default. This makes the Next.js development server slower than literally all the alternatives, [even Angular](https://blog.angular.io/introducing-angular-v17-4d7033312e4b)!

### 2. Server Actions is now stable

Server Actions is a feature that lets you mutate data from a form without manually calling a JSON API endpoint. Instead, you can just define the mutation as a simple Javascript function, and this function will run securely on the server. This is really neat, as it allows for an even tighter integration between the client and the server, even with full end-to-end type safety. This feature was announced in May this year and it has finally become part of the stable version of Next.

It’s not a particularly groundbreaking feature, given that both Remix and SvelteKit has had this feature since their inception. Still, I’m happy that Next.js now has it, because it is a small thing that really levels up the developer experience that Vercel is all about.

### 3. Preview of Partial Prerendering

_Now_ we're talking! A new feature that we actually haven't seen before in Next nor in any other framework. Honestly, I think this is a super cool feature. It bridges the gap between server-side rendering and static site generation, giving the user the best of both worlds. Without PPR, you would have to choose between:

1. Statically generating the entire route. The server just sends a pre-rendered HTML file to the browser. This gives really fast load times, but you can’t serve dynamic content, e.g. anything from a database or a CMS.
2. Server-side rendering the route. This allows you to serve whatever dynamic content you want, but it is slightly slower than a static page because some computation and rendering actually has to be done at the server before the HTML is sent over.

Partial prerendering elegantly bridges the gap these two. Next.js is able to automatically detect what parts of the page is static, and renders it at build time. Once a request hits the server, this static «shell» is immediately sent to the client. At the same time, the server starts rendering the dynamic parts of the page, and once that’s ready, it gets streamed straight to the browser. The UX here is great; the static parts of the page is shown to the user right away, but the dynamic content is still rendered in as fast as it would with traditional SSR. Vercel even claims that all of this should happen automatically without extra work from the developer.

However, there are some caveats. As of the time of writing, you can only use partial prerendering if you’re 1) using a prerelease version of Next and 2) hosting on Vercel. I certainly hope that by the time Next.js 15 releases, developers are able to utilize this feature in production apps running on any hosting platform.

### 4. A new Next.js Learn course

I have admittedly not checked out this tutorial. It’s most likely great. Still, if I was Vercel I would not consider this a _feature_ of Next.js. I find it strange that they portray it as such, and I suspect they included it because of the low amount of other new stuff in Next.js 14.

## Is next year the one?

Despite this year’s somewhat disappointing update, Next.js is clearly evolving. Along with React Server Components, I can imagine a future where Next.js is an even stronger contender in the current realm of web development tools.

While SvelteKit is still my go-to for the smoothest developer experience, I’m excited for what’s in line for Next. New developments in the React ecosystems are just too big to ignore. Once Turbopack is ready, partial prerendering is more widely available, and the server component paradigm settles a bit, Next.js offers a compelling argument for revisiting the world of React. Until then, I am sticking with Svelte.

<div class="flex justify-center">
    <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Just did a microbenchmark of Next.js and SvelteKit by initializing skeleton projects for both.<br><br>- SvelteKit shipped 4x less JS to the browser<br><br>- SvelteKit’s dev server started up 4x faster<br><br>- SvelteKit’s production build was generated 4x faster<br><br>Don’t sleep on <a href="https://twitter.com/sveltejs?ref_src=twsrc%5Etfw">@sveltejs</a> <a href="https://t.co/cg4VVdxOU2">pic.twitter.com/cg4VVdxOU2</a></p>&mdash; Mikkel Svartveit (@mikkelsvartveit) <a href="https://twitter.com/mikkelsvartveit/status/1735198134333272119?ref_src=twsrc%5Etfw">December 14, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>
