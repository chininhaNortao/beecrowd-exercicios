with
    loan as (
        select *
        from loan
    )
    
    , select_day as (
        select
            name
            , cast(extract(day from payday) as int) as day
        from loan
    )
    
select *
from select_day