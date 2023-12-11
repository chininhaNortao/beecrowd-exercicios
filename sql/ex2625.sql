with
  customers as (
    select *
    from customers
  )
  
  , natural_person as (
    select *
    from natural_person
  )

  , customers_join_natural_person as (
    select
      natural_person.cpf
    from customers
    inner join natural_person
    on customers.id = natural_person.id_customers 
  )

  , masking_cpf as (
    select
      concat(substring(cpf,1,3),'.',substring(cpf,4,3),'.',substring(cpf,7,3),'-',substring(cpf,10,2))as CPF
    from customers_join_natural_person
  )

select *
from masking_cpf