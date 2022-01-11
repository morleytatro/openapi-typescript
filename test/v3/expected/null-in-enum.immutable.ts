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
      readonly myField?: ("foo" | "bar" | null) | null;
    };
    /** @description Enum with null */
    readonly MyTypeNotNullable: {
      /** @enum {string} */
      readonly myField?: "foo" | "bar" | null;
    };
    /** @description Enum with null */
    readonly MyTypeNotNullableNotNull: {
      /** @enum {string} */
      readonly myField?: "foo" | "bar";
    };
    /** @description Enum with null */
    readonly MyTypeMixed: {
      /** @enum {string} */
      readonly myField?: "foo" | 2 | false | null;
    };
  };
}

export interface operations {}

export interface external {}
