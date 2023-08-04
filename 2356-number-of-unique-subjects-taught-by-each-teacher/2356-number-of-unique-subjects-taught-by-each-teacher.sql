# Write your MySQL query statement below
SELECT TEACHER_ID, COUNT(DISTINCT SUBJECT_ID) AS CNT #(teacher_id, count)
FROM TEACHER
GROUP BY TEACHER_ID #(this is needed because of the distinct)
;