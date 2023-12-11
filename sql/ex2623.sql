with
  products as (
    select *
    from products
  )
  
  , categories as (
    select *
    from categories
  )

  , filtering_products as (
    select *
    from products
    where amount > 100
      and id_categories in (1,2,3,6,9)
  )

  , products_join_categories as (
    select
      products.name as name_p
      , categories.name as name_c
      , products.id_categories
    from filtering_products as products
    inner join categories
    on products.id_categories = categories.id
  )

select
  name_p as name
  , name_c as name
from products_join_categories
order by id_categories asc