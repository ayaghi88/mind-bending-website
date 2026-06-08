DROP POLICY IF EXISTS "Anyone can submit a review" ON public.reviews;

CREATE POLICY "Anyone can submit a review"
ON public.reviews
FOR INSERT
TO public
WITH CHECK (
  length(trim(name)) BETWEEN 1 AND 100
  AND length(trim(book)) BETWEEN 1 AND 200
  AND length(trim(comment)) BETWEEN 1 AND 2000
  AND rating BETWEEN 1 AND 5
);