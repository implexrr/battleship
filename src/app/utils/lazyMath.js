// Mod function since built in JS mod is annoying with negative numbers
export default function mod(num, m) {
  return ((num % m) + m) % m;
}
