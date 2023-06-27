export default function concatArrays(array1, array2, string) {
  const k = [...array1, ...array2, ...string];
  return k;
}
