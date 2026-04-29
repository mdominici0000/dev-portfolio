<script>
  import { contact } from '$lib/data/content.js';
</script>

<footer class="site-footer">
  <p>{contact.name}</p>
  <div>
    <a href={`mailto:${contact.email}`}>{contact.email}</a>
    <a href={contact.phoneHref}>{contact.phone}</a>
  </div>
</footer>
