with
    league as (
        select *
        from league
    )
    
    , first_3 as (
        select
            team
        from league
        order by position asc
        limit 3
    )

    , last_2 as (
        select
            position
        from league
        order by position desc
        limit 2
    )
    
select
  CONCAT('Podium: ', team) as name
from first_3
union all
select
  CONCAT('Demoted: ', team) as name
from league
where position in (select position from last_2)