with
  people as (
    select *
    from people
  )

  , len_on_name as (
    select
      name
      , length(name) as length
    from people
  )

select
  name
  , length
from len_on_name
order by length desc