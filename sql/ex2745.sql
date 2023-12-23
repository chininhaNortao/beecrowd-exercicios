with
  people as (
    select *
    from people
  )

  , adding_tax as (
    select
      name
      , salary
      , (salary * 0.1) as tax
    from people
  )

  , people_needing_tax as (
    select 
      name
      , round(tax,2) as tax
    from adding_tax
    where salary > 3000
  )

select *
from people_needing_tax