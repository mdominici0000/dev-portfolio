<script>
  import { base } from '$app/paths';
  import SiteFooter from '$lib/components/SiteFooter.svelte';
  import SiteHeader from '$lib/components/SiteHeader.svelte';
</script>

<svelte:head>
  <title>Wild Kahuna | Mitch Dominici</title>
  <meta
    name="description"
    content="Custom websites, process automation, and practical software that improve efficiency and remove workflow headaches."
  />
</svelte:head>

<SiteHeader />
<main class="home-page">
  <section class="home-landing">
    <img class="home-watermark" src={`${base}/main-logo.png`} alt="" />
    <div class="home-copy">
      <h1>
        <span>Calm websites.</span>
        <span>Cleaner workflows.</span>
        <span>Real business momentum.</span>
      </h1>
      <p class="home-summary">
        <span>I build custom websites and process automation that improve efficiency.</span>
        <span>I clear recurring headaches and make daily work easier to run.</span>
      </p>
      <div class="action-row">
        <a class="button button--primary" href={`${base}/what-i-can-do/`}>Show Me What Is Possible</a>
        <a class="button" href={`${base}/sites/`}>See The Sites</a>
        <a class="button button--quiet" href={`${base}/contact/`}>Start A Conversation</a>
      </div>
    </div>
  </section>
</main>
<SiteFooter />
