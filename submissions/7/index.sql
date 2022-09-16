
/* What table index/indices will you set up to optimise the performance of the query?
Table public.campaigns, index on created_at
Table public.clicks, index on created_at
Table public.campaigns, index on end_date - start_date (campaign duration)
 */

CREATE INDEX campaigns_created_at_index ON public.campaigns (created_at);
CREATE INDEX clicks_created_at_index ON public.clicks (created_at);
CREATE INDEX campaigns_duration_index ON public.campaigns ((end_date-start_date));
