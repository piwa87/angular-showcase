/**
 * Represents a collection of query string parameters.
 * Provides methods for pushing new parameters or replacing the values of existing parameters.
 */
export class QueryStringParameters {
  private paramsAndValues: string[] = [];

  /**
   * Adds a new parameter with the given key and value, or replaces the value of the existing key if it already exists.
   * @param key - The key of the parameter to add or replace.
   * @param value - The value of the parameter to add or replace.
   */
  public pushOrReplace(key: string, value: Object): void {
    value = encodeURIComponent(value.toString());

    // Check if key already exists
    const existingIndex = this.paramsAndValues.findIndex((param) =>
      param.startsWith(`${key}=`)
    );

    if (existingIndex >= 0) {
      // Replace the value of the existing parameter
      this.paramsAndValues[existingIndex] = [key, value].join('=');
    } else {
      // Add a new parameter
      this.paramsAndValues.push([key, value].join('='));
    }
  }

  /**
   * Adds the specified values to an existing parameter with the given key, or creates a new parameter if none exists.
   * If the parameter with the specified key already exists, the new values are appended to it.
   * If the parameter does not exist, a new parameter with the specified key and values is created.
   * @param {string} key - The key of the parameter to which values will be added or a new parameter will be created.
   * @param {string[]} values - An array of values to add to the parameter.
   */
  public pushOrAddValue(key: string, values: string[]): void {
    values.forEach((value) => {
      const encodedValue = encodeURIComponent(value);
      const existingIndex = this.paramsAndValues.findIndex((param) =>
        param.startsWith(`${key}=`)
      );

      if (existingIndex >= 0) {
        // Append the value to the existing parameter
        this.paramsAndValues[existingIndex] += `&${key}=${encodedValue}`;
      } else {
        // Add a new parameter
        this.paramsAndValues.push(`${key}=${encodedValue}`);
      }
    });
  }

  /**
   * Returns the query string representation of the parameters in this QueryStringParameters instance.
   * @returns The query string representation of the parameters.
   */
  public toString = (): string => this.paramsAndValues.join('&');
}
