<script>
  import { base } from '$app/paths';

  const links = [
    { href: `${base}/what-i-can-do/`, label: 'What I Can Do' },
    { href: `${base}/sites/`, label: 'Sites' },
    { href: `${base}/contact/`, label: 'Contact' }
  ];
</script>

<header class="site-header">
  <a class="brand-lockup" href={`${base}/`} aria-label="Wild Kahuna home">
    <img class="brand-logo" src={`${base}/text-logo-transparent.png`} alt="Wild Kahuna" />
  </a>
  <nav aria-label="Primary navigation">
    {#each links as link}
      <a href={link.href}>{link.label}</a>
    {/each}
  </nav>
</header>
