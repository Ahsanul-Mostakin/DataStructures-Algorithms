/* 
6. Merge Intervals
Problem: Given an array of intervals where `intervals[i] = [start_i, end_i]`, merge overlapping intervals.
*/
function mergeBrute(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const result = [];
  for (let i = 0; i < intervals.length; i++) {
    let [start, end] = intervals[i];
    for (let j = i + 1; j < intervals.length; j++) {
      if (end >= intervals[j][0]) {
        end = Math.max(end, intervals[j][1]);
        intervals.splice(j, 1);
        j--;
      }
    }
    result.push([start, end]);
  }
  return result;
}

// Optimal
function merge(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const result = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    const last = result[result.length - 1];
    if (last[1] >= intervals[i][0]) {
      last[1] = Math.max(last[1], intervals[i][1]);
    } else {
      result.push(intervals[i]);
    }
  }
  return result;
}

console.log(
  merge([
    [1, 3],
    [2, 4],
    [5, 7],
    [6, 8],
    [9, 10],
  ])
);
console.log(
  mergeBrute([
    [1, 3],
    [2, 4],
    [5, 7],
    [6, 8],
    [9, 10],
  ])
);
