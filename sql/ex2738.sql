with
    candidate as (
        select *
        from candidate
    )
    
    , candidate_score as (
        select *
        from score
    )
    
    , candidate_union_score as (
        select
            candidate.name
            , round(((score.math * 2) + (score.specific * 3) + (score.project_plan * 5))/10 ,2) as avg
        from candidate
        inner join candidate_score as score
        on candidate.id = score.candidate_id
        order by avg desc
    )
    
select *
from candidate_union_score