# Write your MySQL query statement below
SELECT T.TWEET_ID
FROM TWEETS T
WHERE LENGTH(T.CONTENT) > 15;