# Write your MySQL query statement below
SELECT NAME AS CUSTOMERS #get only name and rename as customers
FROM CUSTOMERS A LEFT JOIN ORDERS B # from the joint table of customer & order
ON A.ID = B.CUSTOMERID #join when id matches customerId
WHERE CUSTOMERID IS NULL; #return only customers that have no customer id meaning they never ordered