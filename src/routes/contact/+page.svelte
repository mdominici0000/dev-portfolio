<script>
  import PageHero from '$lib/components/PageHero.svelte';
  import SiteFooter from '$lib/components/SiteFooter.svelte';
  import SiteHeader from '$lib/components/SiteHeader.svelte';
  import { contact } from '$lib/data/content.js';
</script>

<svelte:head>
  <title>Contact | Wild Kahuna</title>
  <meta
    name="description"
    content="Contact Mitch Dominici for websites, workflow automation, and practical software help."
  />
</svelte:head>

<SiteHeader />
<main class="showcase-page">
  <PageHero
    eyebrow="Contact"
    title="Tell me what you are trying to improve."
    intro="Send the goal, the current workflow, and what would make the project worth it. I will help turn that into a clear next step."
  />

  <section class="contact-layout">
    <article class="contact-card">
      <p class="eyebrow">Direct contact</p>
      <h2>{contact.name}</h2>
      <a href={`mailto:${contact.email}`}>{contact.email}</a>
      <a href={contact.phoneHref}>{contact.phone}</a>
    </article>
    <article class="contact-card contact-card--accent">
      <p class="eyebrow">Good fit</p>
      <h2>Websites, automation, and small-business workflow cleanup.</h2>
      <p>
        I am especially interested in projects where better software can remove busywork, simplify
        publishing, or help an owner spend more time on the business instead of the tools.
      </p>
    </article>
  </section>
</main>
<SiteFooter />
