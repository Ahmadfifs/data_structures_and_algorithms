// In Recursion you most have a solid base case
// find n! using recursion
export function sum(n: number): number {
  // base case
  if (n == 1) {
    return 1
  }

  return n + sum(n - 1)
}
