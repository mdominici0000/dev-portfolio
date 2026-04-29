<script>
  export let site;
</script>

<article class={`site-card site-card--${site.variant}`}>
  <div class="site-card__visual" aria-hidden="true">
    <span></span>
    <span></span>
    <span></span>
  </div>
  <div class="site-card__content">
    <p class="eyebrow">{site.type}</p>
    <h2>{site.title}</h2>
    <p>{site.description}</p>
    <ul>
      {#each site.points as point}
        <li>{point}</li>
      {/each}
    </ul>
    <a class="text-link" href={site.href} target="_blank" rel="noreferrer">Visit site</a>
  </div>
</article>
