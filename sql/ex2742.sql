with
    dimensions as (
        select *
        from dimensions
    )
    
    , life_registry as (
        select *
        from life_registry
    )
    
    , dimensions_union_life as (
        select 
            dimensions.name as name_dimension
            , life_registry.name as name_life
            , (life_registry.omega * 1.618) as fator_n
        from dimensions 
        inner join life_registry
        on dimensions.id = life_registry.dimensions_id
        order by fator_n asc
    )

select 
    name_life as name
    , round(fator_n, 3) as "Fator N"
from dimensions_union_life
where 
  name_dimension in ('C774', 'C875')
	and name_life like 'Richard%'