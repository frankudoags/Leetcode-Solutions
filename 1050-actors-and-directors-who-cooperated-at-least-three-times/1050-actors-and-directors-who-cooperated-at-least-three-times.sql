# Write your MySQL query statement below
SELECT ACTOR_ID, DIRECTOR_ID
FROM ACTORDIRECTOR
GROUP BY ACTOR_ID, DIRECTOR_ID
HAVING COUNT(TIMESTAMP) >= 3;

/*
group by actor_id, direction_id, check that their timestamps is at least up to 3
after grouping
*/