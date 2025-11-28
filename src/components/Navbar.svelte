<script lang="ts">
  import { slide, fade } from "svelte/transition";

  let { currentPath }: { currentPath: string } = $props();
  const currentPathTrimmed = $derived(currentPath.replace(/\/+$/, ""));

  const navbarContent = [
    { name: "📝 Articles", href: "/articles" },
    { name: "👨‍💻 Projects", href: "/programming" },
    { name: "📷 Photography", href: "/photography" },
  ];

  let collapsed = $state(true);
</script>

<header>
  <nav
    class="mx-auto flex h-16 max-w-5xl flex-wrap items-center justify-between px-6"
  >
    <a
      href="/"
      data-sveltekit-preload-code="eager"
      class="text-lg tracking-wide text-gray-600 decoration-yellow-400 decoration-2 underline-offset-8 duration-100 hover:text-gray-400"
      class:underline={"" === currentPathTrimmed}
    >
      Mikkel Svartveit
    </a>

    <ul class="hidden space-x-8 md:flex">
      {#each navbarContent as { name, href }}
        <li>
          <a
            {href}
            data-sveltekit-preload-code="eager"
            class="text-lg tracking-wide text-gray-600 decoration-yellow-400 decoration-2 underline-offset-8 duration-100 hover:text-gray-400"
            class:underline={href === currentPathTrimmed}
          >
            {name}
          </a>
        </li>
      {/each}
    </ul>

    <button
      aria-label="Open menu"
      class="md:hidden"
      onclick={() => (collapsed = !collapsed)}
    >
      <svg
        class="h-10 w-10 stroke-yellow-500"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Menu / Hamburger_MD">
          <path
            id="Vector"
            d="M5 17H19M5 12H19M5 7H19"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </svg>
    </button>
  </nav>
</header>

{#if !collapsed}
  <div
    role="presentation"
    transition:fade={{ duration: 100 }}
    class="fixed top-0 left-0 z-20 h-full w-full bg-black opacity-50"
    onclick={() => (collapsed = true)}
    onkeydown={(event) => {
      if (event.key === "Escape") collapsed = true;
    }}
  ></div>

  <ul
    transition:slide={{ duration: 300, axis: "x" }}
    class="fixed top-0 right-0 z-30 block h-full bg-white p-4"
  >
    <button
      aria-label="Close menu"
      onclick={() => (collapsed = true)}
      class="ml-auto block h-10 w-10"
    >
      <svg
        class="stroke-gray-400"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 8L8 16M8.00001 8L16 16"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>

    {#each navbarContent as { name, href }}
      <li class="my-6 mr-16 ml-2">
        <a
          {href}
          onclick={() => (collapsed = true)}
          class="text-lg tracking-wide whitespace-nowrap text-gray-600 decoration-yellow-400 decoration-2 underline-offset-8"
          class:underline={href === currentPathTrimmed}
        >
          {name}
        </a>
      </li>
    {/each}
  </ul>
{/if}
