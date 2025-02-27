/* You are given an array of positive integers where each integer represents the height of a vertical line on a chart. Find two lines which togeteher with the x_axis forms a container that would hold the greatest amount of water. Return the area of water it would hold*/

const heightsArray = [7, 1, 2, 3, 9];

const getMaxWaterContainer = function (heights) {
  let maxArea = 0;
  for (let p1 = 0; p1 < heights.length; p1++) {
    for (let p2 = p1 + 1; p2 < heights.length; p2++) {
      const height = Math.min(heights[p1], heights[p2]);
      const width = p2 - p1;
      const area = height * width;
      maxArea = Math.max(maxArea, area);
    }
  }

  return maxArea;
};

console.log(getMaxWaterContainer(heightsArray));
