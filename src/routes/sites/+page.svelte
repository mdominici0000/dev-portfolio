<script>
  import { base } from '$app/paths';
  import PageHero from '$lib/components/PageHero.svelte';
  import SiteFooter from '$lib/components/SiteFooter.svelte';
  import SiteHeader from '$lib/components/SiteHeader.svelte';
  import { businessExamples, softwareExamples } from '$lib/data/content.js';
</script>

<svelte:head>
  <title>Examples | Wild Kahuna</title>
  <meta
    name="description"
    content="Examples of websites, process automation, data workflows, and custom software solutions by Wild Kahuna."
  />
</svelte:head>

<SiteHeader />
<main class="showcase-page">
  <PageHero
    eyebrow="Work Examples"
    title="Websites, workflows, and practical software solutions."
    intro="Some work starts as a public website. Some work becomes a process, database, API, or custom internal tool. The goal is the same: solve the real business problem clearly."
  />

  <section class="example-section" aria-labelledby="website-examples">
    <div class="section-heading">
      <p class="eyebrow">Website examples</p>
      <h2 id="website-examples">Public-facing work with real workflows behind it.</h2>
    </div>
    <div class="business-example-list">
      {#each businessExamples as example}
        <article class="business-example">
          <div class="business-example__content">
            <h3>{example.name}</h3>
            <p>{example.description}</p>
            <ul>
              {#each example.note_list as note}
                <li>{note}</li>
              {/each}
            </ul>
            <a class="text-link" href={example.url} target="_blank" rel="noreferrer">View example</a>
          </div>
          <img src={`${base}${example.image}`} alt={`${example.name} preview`} />
        </article>
      {/each}
    </div>
  </section>

  <section class="example-section" aria-labelledby="software-examples">
    <div class="section-heading">
      <p class="eyebrow">Process and software examples</p>
      <h2 id="software-examples">Custom solutions explained in plain language.</h2>
    </div>
    <div class="software-example-grid">
      {#each softwareExamples as example}
        <article class="software-example">
          <h3>{example.name}</h3>
          <p>{example.description}</p>
          <ul>
            {#each example.note_list as note}
              <li>{note}</li>
            {/each}
          </ul>
        </article>
      {/each}
    </div>
  </section>

  <section class="closing-cta compact">
    <p class="eyebrow">Have a workflow problem?</p>
    <h2>Bring the bottleneck. I will help shape the solution.</h2>
    <a class="button button--primary" href={`${base}/contact/`}>Contact Mitch</a>
  </section>
</main>
<SiteFooter />
