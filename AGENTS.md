# Project architecture

- Keep distinct book projects and acting information in dedicated React Router pages linked from the shared navigation, so each has a direct URL.
- Render Mind Bending's cover only through the Lulu product-showcase embed on purchase pages, so the product image is not duplicated.
- Maintain the static sitemap with canonical page URLs; use lastmod only when a significant page-specific change date is known, preserving legacy dates whose origin is unknown.