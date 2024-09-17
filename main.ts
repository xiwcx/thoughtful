type SortArgs = {
  /**
   * in centimeters
   */
  width: number;

  /**
   * in centimeters
   */
  height: number;

  /**
   * in centimeters
   */
  length: number;

  /**
   * in kilograms
   */
  mass: number;
};

const isPositiveInteger = (n: number) => Number.isInteger(n) && n > 0;

const valuesFromObject = <T extends string | number, R>(
  obj: Record<T, R>
): R[] => Object.values(obj);

type SortReturn = "STANDARD" | "SPECIAL" | "REJECTED" | Error;

type Sort = (args: SortArgs) => SortReturn;
export const sort: Sort = (args) => {
  for (const arg of valuesFromObject(args)) {
    if (!isPositiveInteger(arg)) {
      throw new Error("All values must be positive integers");
    }
  }

  const { width, height, length, mass } = args;
  const volume = width * height * length;
  const isBulky = volume >= 1000000;
  const isHeavy = mass >= 20;

  if (isBulky && isHeavy) return "REJECTED";

  if (isBulky || isHeavy) return "SPECIAL";

  return "STANDARD";
};
