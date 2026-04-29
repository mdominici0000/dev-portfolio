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
    content="Websites, workflow automation, process improvements, and static deployment support for small businesses."
  />
</svelte:head>

<SiteHeader />
<main class="showcase-page">
  <PageHero
    eyebrow="What I Can Do"
    title="I build the website, then look for the workflow hiding behind it."
    intro="A good project should make the business easier to run. I care about the software, the handoff, the update process, and whether the solution fits the way people already work."
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
      <h2>Turning a spreadsheet into a publishing system.</h2>
      <p>
        My aunt was managing events through a generic site builder where each event had to be entered
        manually. She was already using spreadsheets to track towns, businesses, and events, so I kept
        that natural workflow and built around it.
      </p>
      <p>
        GitHub Actions now pulls the Google Sheet, generates a JSON file, commits the update to the
        project, and deploys the site. She keeps using a familiar spreadsheet, and the website stays
        current without duplicate entry.
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
    <h2>Dedicated, direct, and focused on the best practical solution.</h2>
    <p>
      I will work hard to understand the real problem, communicate clearly, and deliver software that
      earns its place in the business.
    </p>
    <a class="button button--primary" href={`${base}/contact/`}>Talk Through A Project</a>
  </section>
</main>
<SiteFooter />
