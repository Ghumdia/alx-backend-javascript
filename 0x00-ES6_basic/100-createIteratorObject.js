export default function createIteratorObject(report) {
  const iterator = {
    *[Symbol.iterator]() {
      for (const department of Object.values(report.allEmployees)) {
        yield* department;
      }
    }
  };

  return iterator;
}
