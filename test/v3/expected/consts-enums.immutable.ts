/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  readonly "/test": {
    readonly get: {
      readonly responses: {
        /** A list of types. */
        readonly 200: unknown;
      };
    };
  };
}

export interface components {
  readonly schemas: {
    /** @description Enum with null and nullable */
    readonly MyType: {
      /** @enum {string|null} */
      readonly myEnumTestFieldNullable?: ("foo" | "bar" | null) | null;
      /** @enum {string|null} */
      readonly myEnumTestField?: ("foo" | "bar" | null) | null;
      /** @constant */
      readonly myConstTestField?: "constant-value";
      /** @constant */
      readonly myConstTestFieldNullable?: 4 | null;
    };
  };
}

export interface operations {}

export interface external {}
