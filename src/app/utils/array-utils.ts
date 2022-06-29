export class ArrayUtils {
  /**
   * Searches for the first item that appears more times in the array than any other item
   *
   * @param array - The array to be searched in
   * @returns The mode of the array
   *
   */
  static mode(array: any[]) {
    return array
      .sort(
        (a, b) =>
          array.filter((v) => v === a).length -
          array.filter((v) => v === b).length
      )
      .pop();
  }
}
