module.exports = function getLoveTrianglesCount(preferences = []) {
  const tr = preferences;
  var count = 0;
  for (let i = 0; i < tr.length; i++) {
    if (
      tr[tr[tr[i] - 1] - 1] - 1 == i &&
      tr[tr[i] - 1] > tr[tr[tr[i] - 1] - 1] &&
      tr[i] < tr[tr[i] - 1]
    ) {
      count = ++count;
    }
  }
  return count;
};
