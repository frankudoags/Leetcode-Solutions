# Write your MySQL query statement below
SELECT E.NAME AS EMPLOYEE
FROM EMPLOYEE E
LEFT JOIN EMPLOYEE M ON E.MANAGERID = M.ID
WHERE E.SALARY > M.SALARY;
