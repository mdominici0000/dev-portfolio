<script>
  import { base } from '$app/paths';
  import SiteFooter from '$lib/components/SiteFooter.svelte';
  import SiteHeader from '$lib/components/SiteHeader.svelte';
  import WorkflowVisual from '$lib/components/WorkflowVisual.svelte';
</script>

<svelte:head>
  <title>Wild Kahuna | Mitch Dominici</title>
  <meta
    name="description"
    content="Websites, workflow automation, and practical software for small businesses and self-employed operators."
  />
</svelte:head>

<SiteHeader />
<main class="home-page">
  <section class="home-landing">
    <div class="home-copy">
      <p class="eyebrow">Wild Kahuna software</p>
      <h1>Calm websites. Cleaner workflows. Real business momentum.</h1>
      <p>
        I build fast websites and practical automation for small businesses, self-employed people,
        and teams that need software to make daily work easier.
      </p>
      <div class="action-row">
        <a class="button button--primary" href={`${base}/what-i-can-do/`}>Show Me What Is Possible</a>
        <a class="button" href={`${base}/sites/`}>See The Sites</a>
        <a class="button button--quiet" href={`${base}/contact/`}>Start A Conversation</a>
      </div>
    </div>
    <WorkflowVisual />
  </section>

  <section class="cta-strip" aria-label="Portfolio promise">
    <article>
      <span>Build</span>
      <strong>Launch a site that looks professional and loads fast.</strong>
    </article>
    <article>
      <span>Automate</span>
      <strong>Replace repetitive manual updates with a workflow people will use.</strong>
    </article>
    <article>
      <span>Improve</span>
      <strong>Find practical ways to make the business run smoother.</strong>
    </article>
  </section>
</main>
<SiteFooter />
