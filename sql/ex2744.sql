with 
  account as (
    select *
    from account
  )

  , transforming_md5 as (
    select 
      id
      , password
      , md5(password) as MD5
    from account
  )

select *
from transforming_md5