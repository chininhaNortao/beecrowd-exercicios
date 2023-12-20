with
    students as (
        select *
        from students
    )
    
    , approved_students as (
        select 
            name
            , grade
        from students
        where grade >= 7
    )

select
    concat('Approved: ',name) as name
    , grade
from approved_students
order by grade desc