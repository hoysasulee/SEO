<script>
document.addEventListener("DOMContentLoaded", function() {
  // Base breadcrumb schema
  const breadcrumbSchema = {
    "@context": "http://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": window.location.origin
      }
    ]
  };

  // Split URL path to create dynamic breadcrumbs
  const pathArray = window.location.pathname.split('/').filter(e => e);
  let currentPath = window.location.origin;
  
  // Loop through each segment to build breadcrumb list
  pathArray.forEach((pathSegment, index) => {
    currentPath += `/${pathSegment}`;
    breadcrumbSchema.itemListElement.push({
      "@type": "ListItem",
      "position": index + 2,
      "name": decodeURIComponent(pathSegment.replace(/-/g, ' ')),
      "item": currentPath
    });
  });

  // Add dynamic JSON-LD script to page head
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(breadcrumbSchema);
  document.head.appendChild(script);
});
</script>
