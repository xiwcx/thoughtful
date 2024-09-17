import { assertEquals, assertThrows } from "@std/assert";
import { sort } from "./main.ts";

Deno.test("bulky and heavy package is rejected", () => {
  assertEquals(
    sort({ width: 100, height: 100, length: 100, mass: 20 }),
    "REJECTED"
  );
});

Deno.test("bulky package is special", () => {
  assertEquals(
    sort({ width: 100, height: 100, length: 100, mass: 10 }),
    "SPECIAL"
  );
});

Deno.test("heavy package is special", () => {
  assertEquals(
    sort({ width: 10, height: 10, length: 10, mass: 20 }),
    "SPECIAL"
  );
});

Deno.test("standard package is standard", () => {
  assertEquals(
    sort({ width: 10, height: 10, length: 10, mass: 10 }),
    "STANDARD"
  );
});

Deno.test("throws error if any value is not a positive integer", () => {
  assertThrows(() => sort({ width: 10, height: 10, length: 10, mass: -1 }));
});
