
select acc.id as account_id, acc.name as account_name,
extract(month from cl.created_at) as month, count(*) as num_clicks from public.accounts acc, public.campaigns cmp, public.clicks cl
where cmp.account_id = acc.id and cmp.id = cl.campaign_id
and cmp.created_at >= now() - interval '6 month' and (cmp.end_date - cmp.start_date) > interval '1 week'
group by acc.id, account_name, month;
