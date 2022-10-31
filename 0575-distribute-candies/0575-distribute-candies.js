/**
 * @param {number[]} candyType
 * @return {number}
 */
const distributeCandies = (candyType) => {
    return Math.min(candyType.length / 2, new Set(candyType).size);
}