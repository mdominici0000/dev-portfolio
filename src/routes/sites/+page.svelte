<script>
  import { base } from '$app/paths';
  import PageHero from '$lib/components/PageHero.svelte';
  import SiteCard from '$lib/components/SiteCard.svelte';
  import SiteFooter from '$lib/components/SiteFooter.svelte';
  import SiteHeader from '$lib/components/SiteHeader.svelte';
  import { siteLinks } from '$lib/data/content.js';
</script>

<svelte:head>
  <title>Sites | Wild Kahuna</title>
  <meta
    name="description"
    content="Live examples of Mitch Dominici's software and website work: Fenrir / ST Engine and Missouri River Valley Loop."
  />
</svelte:head>

<SiteHeader />
<main class="showcase-page">
  <PageHero
    eyebrow="Sites"
    title="Two live examples: one deep engineering system, one small-business website."
    intro="The range matters. I can work on advanced technical systems and still care about simple, useful web delivery for real people."
  />

  <section class="site-grid" aria-label="Live site links">
    {#each siteLinks as site}
      <SiteCard {site} />
    {/each}
  </section>

  <section class="closing-cta compact">
    <p class="eyebrow">Need something similar?</p>
    <h2>Bring the business problem. I will help shape the software.</h2>
    <a class="button button--primary" href={`${base}/contact/`}>Contact Mitch</a>
  </section>
</main>
<SiteFooter />
