with
    lawyers as (
        select *
        from lawyers
    )
    
    , max_customers as (
        select
            name
            , cast(customers_number as INTEGER) as customers_number
        from lawyers
        order by customers_number desc
        limit 1
    )
    
    , min_customers as (
        select
            name
            , cast(customers_number as INTEGER) as customers_number
        from lawyers
        order by customers_number asc
        limit 1
    )
    
    , avg_customer as (
        select
            'Average' as name
            , cast(avg(customers_number) as INTEGER) as customers_number
        from lawyers
    )

select *
from max_customers
union all
select *
from min_customers
union all
select name, customers_number
from avg_customer