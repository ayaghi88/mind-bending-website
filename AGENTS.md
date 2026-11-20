# Project architecture

- Keep distinct book projects and acting information in dedicated React Router pages linked from the shared navigation, so each has a direct URL.
- Render Mind Bending's cover only through the Lulu product-showcase embed on purchase pages, so the product image is not duplicated.
- Maintain the static sitemap with canonical page URLs; use lastmod only when a significant page-specific change date is known, preserving legacy dates whose origin is unknown.
- Reset document scroll on React Router location keys, not only pathnames, so reselecting a tab also starts at the top without resetting the mobile tab bar.
- Keep email privacy guidance reusable beside contact forms and the full terms/privacy notice on a dedicated page linked by every footer, so disclosures remain accessible.
- Keep service availability in a shared flag and disable unavailable booking choices, so the app page and inquiry form agree.