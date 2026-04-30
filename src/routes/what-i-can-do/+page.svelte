<script>
  import { base } from '$app/paths';
  import PageHero from '$lib/components/PageHero.svelte';
  import SiteFooter from '$lib/components/SiteFooter.svelte';
  import SiteHeader from '$lib/components/SiteHeader.svelte';
  import { automationSteps, capabilities } from '$lib/data/content.js';
</script>

<svelte:head>
  <title>What I Can Do | Wild Kahuna</title>
  <meta
    name="description"
    content="Custom websites, process automation, APIs, databases, and practical systems that remove repeated work."
  />
</svelte:head>

<SiteHeader />
<main class="showcase-page">
  <PageHero
    eyebrow="What I Can Do"
    title="I build useful websites and the systems behind them."
    intro="The website is often the visible part. The bigger win is usually the workflow behind it: cleaner data, fewer repeated steps, better handoffs, and software that helps the business run."
  />

  <section class="capability-grid" aria-label="Capabilities">
    {#each capabilities as item}
      <article class="info-card">
        <h2>{item.title}</h2>
        <p>{item.description}</p>
      </article>
    {/each}
  </section>

  <section class="story-panel">
    <div>
      <p class="eyebrow">Workflow example</p>
      <h2>Turning everyday tracking into a working system.</h2>
      <p>
        A client may already have the important information in a spreadsheet, inbox, form, or shared
        document. Instead of forcing a brand-new process, I look for the parts that already work and
        build software around them.
      </p>
      <p>
        That can mean a website, an admin screen, a small database, an API, or an automated update
        path. The point is to remove duplicate entry, reduce mistakes, and make the work easier to
        keep current.
      </p>
    </div>
    <ol class="process-list">
      {#each automationSteps as step}
        <li>{step}</li>
      {/each}
    </ol>
  </section>

  <section class="closing-cta">
    <p class="eyebrow">How I work</p>
    <h2>Practical software that earns its place in the business.</h2>
    <p>
      I start with the real headache, then build the smallest useful system that can grow with the
      work instead of becoming another thing to manage.
    </p>
    <a class="button button--primary" href={`${base}/contact/`}>Talk Through A Project</a>
  </section>
</main>
<SiteFooter />
