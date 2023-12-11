with
  customers as (
    select *
    from customers
  )
  
  , distinct_cities as (
    select 
      distinct city
    from customers
  )

select count(*)
from distinct_cities