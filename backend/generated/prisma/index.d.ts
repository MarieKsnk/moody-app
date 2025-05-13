
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model Recipe
 * 
 */
export type Recipe = $Result.DefaultSelection<Prisma.$RecipePayload>
/**
 * Model Type
 * 
 */
export type Type = $Result.DefaultSelection<Prisma.$TypePayload>
/**
 * Model Ingredient
 * 
 */
export type Ingredient = $Result.DefaultSelection<Prisma.$IngredientPayload>
/**
 * Model RecipeIngredient
 * 
 */
export type RecipeIngredient = $Result.DefaultSelection<Prisma.$RecipeIngredientPayload>
/**
 * Model Ustensil
 * 
 */
export type Ustensil = $Result.DefaultSelection<Prisma.$UstensilPayload>
/**
 * Model RecipeUstensil
 * 
 */
export type RecipeUstensil = $Result.DefaultSelection<Prisma.$RecipeUstensilPayload>
/**
 * Model Mood
 * 
 */
export type Mood = $Result.DefaultSelection<Prisma.$MoodPayload>
/**
 * Model MoodRecipe
 * 
 */
export type MoodRecipe = $Result.DefaultSelection<Prisma.$MoodRecipePayload>
/**
 * Model Diet
 * 
 */
export type Diet = $Result.DefaultSelection<Prisma.$DietPayload>
/**
 * Model DietRecipe
 * 
 */
export type DietRecipe = $Result.DefaultSelection<Prisma.$DietRecipePayload>
/**
 * Model Origin
 * 
 */
export type Origin = $Result.DefaultSelection<Prisma.$OriginPayload>
/**
 * Model OriginRecipe
 * 
 */
export type OriginRecipe = $Result.DefaultSelection<Prisma.$OriginRecipePayload>
/**
 * Model Favorite
 * 
 */
export type Favorite = $Result.DefaultSelection<Prisma.$FavoritePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recipe`: Exposes CRUD operations for the **Recipe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recipes
    * const recipes = await prisma.recipe.findMany()
    * ```
    */
  get recipe(): Prisma.RecipeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.type`: Exposes CRUD operations for the **Type** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Types
    * const types = await prisma.type.findMany()
    * ```
    */
  get type(): Prisma.TypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ingredient`: Exposes CRUD operations for the **Ingredient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ingredients
    * const ingredients = await prisma.ingredient.findMany()
    * ```
    */
  get ingredient(): Prisma.IngredientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recipeIngredient`: Exposes CRUD operations for the **RecipeIngredient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RecipeIngredients
    * const recipeIngredients = await prisma.recipeIngredient.findMany()
    * ```
    */
  get recipeIngredient(): Prisma.RecipeIngredientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ustensil`: Exposes CRUD operations for the **Ustensil** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ustensils
    * const ustensils = await prisma.ustensil.findMany()
    * ```
    */
  get ustensil(): Prisma.UstensilDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recipeUstensil`: Exposes CRUD operations for the **RecipeUstensil** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RecipeUstensils
    * const recipeUstensils = await prisma.recipeUstensil.findMany()
    * ```
    */
  get recipeUstensil(): Prisma.RecipeUstensilDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mood`: Exposes CRUD operations for the **Mood** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Moods
    * const moods = await prisma.mood.findMany()
    * ```
    */
  get mood(): Prisma.MoodDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.moodRecipe`: Exposes CRUD operations for the **MoodRecipe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MoodRecipes
    * const moodRecipes = await prisma.moodRecipe.findMany()
    * ```
    */
  get moodRecipe(): Prisma.MoodRecipeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.diet`: Exposes CRUD operations for the **Diet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Diets
    * const diets = await prisma.diet.findMany()
    * ```
    */
  get diet(): Prisma.DietDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dietRecipe`: Exposes CRUD operations for the **DietRecipe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DietRecipes
    * const dietRecipes = await prisma.dietRecipe.findMany()
    * ```
    */
  get dietRecipe(): Prisma.DietRecipeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.origin`: Exposes CRUD operations for the **Origin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Origins
    * const origins = await prisma.origin.findMany()
    * ```
    */
  get origin(): Prisma.OriginDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.originRecipe`: Exposes CRUD operations for the **OriginRecipe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OriginRecipes
    * const originRecipes = await prisma.originRecipe.findMany()
    * ```
    */
  get originRecipe(): Prisma.OriginRecipeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.favorite`: Exposes CRUD operations for the **Favorite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Favorites
    * const favorites = await prisma.favorite.findMany()
    * ```
    */
  get favorite(): Prisma.FavoriteDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Role: 'Role',
    Recipe: 'Recipe',
    Type: 'Type',
    Ingredient: 'Ingredient',
    RecipeIngredient: 'RecipeIngredient',
    Ustensil: 'Ustensil',
    RecipeUstensil: 'RecipeUstensil',
    Mood: 'Mood',
    MoodRecipe: 'MoodRecipe',
    Diet: 'Diet',
    DietRecipe: 'DietRecipe',
    Origin: 'Origin',
    OriginRecipe: 'OriginRecipe',
    Favorite: 'Favorite'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "role" | "recipe" | "type" | "ingredient" | "recipeIngredient" | "ustensil" | "recipeUstensil" | "mood" | "moodRecipe" | "diet" | "dietRecipe" | "origin" | "originRecipe" | "favorite"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      Recipe: {
        payload: Prisma.$RecipePayload<ExtArgs>
        fields: Prisma.RecipeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecipeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecipeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          findFirst: {
            args: Prisma.RecipeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecipeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          findMany: {
            args: Prisma.RecipeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>[]
          }
          create: {
            args: Prisma.RecipeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          createMany: {
            args: Prisma.RecipeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecipeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>[]
          }
          delete: {
            args: Prisma.RecipeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          update: {
            args: Prisma.RecipeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          deleteMany: {
            args: Prisma.RecipeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecipeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecipeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>[]
          }
          upsert: {
            args: Prisma.RecipeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          aggregate: {
            args: Prisma.RecipeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecipe>
          }
          groupBy: {
            args: Prisma.RecipeGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecipeGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecipeCountArgs<ExtArgs>
            result: $Utils.Optional<RecipeCountAggregateOutputType> | number
          }
        }
      }
      Type: {
        payload: Prisma.$TypePayload<ExtArgs>
        fields: Prisma.TypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>
          }
          findFirst: {
            args: Prisma.TypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>
          }
          findMany: {
            args: Prisma.TypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>[]
          }
          create: {
            args: Prisma.TypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>
          }
          createMany: {
            args: Prisma.TypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>[]
          }
          delete: {
            args: Prisma.TypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>
          }
          update: {
            args: Prisma.TypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>
          }
          deleteMany: {
            args: Prisma.TypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>[]
          }
          upsert: {
            args: Prisma.TypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>
          }
          aggregate: {
            args: Prisma.TypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateType>
          }
          groupBy: {
            args: Prisma.TypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<TypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.TypeCountArgs<ExtArgs>
            result: $Utils.Optional<TypeCountAggregateOutputType> | number
          }
        }
      }
      Ingredient: {
        payload: Prisma.$IngredientPayload<ExtArgs>
        fields: Prisma.IngredientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IngredientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IngredientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          findFirst: {
            args: Prisma.IngredientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IngredientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          findMany: {
            args: Prisma.IngredientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>[]
          }
          create: {
            args: Prisma.IngredientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          createMany: {
            args: Prisma.IngredientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IngredientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>[]
          }
          delete: {
            args: Prisma.IngredientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          update: {
            args: Prisma.IngredientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          deleteMany: {
            args: Prisma.IngredientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IngredientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IngredientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>[]
          }
          upsert: {
            args: Prisma.IngredientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          aggregate: {
            args: Prisma.IngredientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIngredient>
          }
          groupBy: {
            args: Prisma.IngredientGroupByArgs<ExtArgs>
            result: $Utils.Optional<IngredientGroupByOutputType>[]
          }
          count: {
            args: Prisma.IngredientCountArgs<ExtArgs>
            result: $Utils.Optional<IngredientCountAggregateOutputType> | number
          }
        }
      }
      RecipeIngredient: {
        payload: Prisma.$RecipeIngredientPayload<ExtArgs>
        fields: Prisma.RecipeIngredientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecipeIngredientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeIngredientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecipeIngredientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeIngredientPayload>
          }
          findFirst: {
            args: Prisma.RecipeIngredientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeIngredientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecipeIngredientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeIngredientPayload>
          }
          findMany: {
            args: Prisma.RecipeIngredientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeIngredientPayload>[]
          }
          create: {
            args: Prisma.RecipeIngredientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeIngredientPayload>
          }
          createMany: {
            args: Prisma.RecipeIngredientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecipeIngredientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeIngredientPayload>[]
          }
          delete: {
            args: Prisma.RecipeIngredientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeIngredientPayload>
          }
          update: {
            args: Prisma.RecipeIngredientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeIngredientPayload>
          }
          deleteMany: {
            args: Prisma.RecipeIngredientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecipeIngredientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecipeIngredientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeIngredientPayload>[]
          }
          upsert: {
            args: Prisma.RecipeIngredientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeIngredientPayload>
          }
          aggregate: {
            args: Prisma.RecipeIngredientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecipeIngredient>
          }
          groupBy: {
            args: Prisma.RecipeIngredientGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecipeIngredientGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecipeIngredientCountArgs<ExtArgs>
            result: $Utils.Optional<RecipeIngredientCountAggregateOutputType> | number
          }
        }
      }
      Ustensil: {
        payload: Prisma.$UstensilPayload<ExtArgs>
        fields: Prisma.UstensilFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UstensilFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UstensilPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UstensilFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UstensilPayload>
          }
          findFirst: {
            args: Prisma.UstensilFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UstensilPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UstensilFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UstensilPayload>
          }
          findMany: {
            args: Prisma.UstensilFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UstensilPayload>[]
          }
          create: {
            args: Prisma.UstensilCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UstensilPayload>
          }
          createMany: {
            args: Prisma.UstensilCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UstensilCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UstensilPayload>[]
          }
          delete: {
            args: Prisma.UstensilDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UstensilPayload>
          }
          update: {
            args: Prisma.UstensilUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UstensilPayload>
          }
          deleteMany: {
            args: Prisma.UstensilDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UstensilUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UstensilUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UstensilPayload>[]
          }
          upsert: {
            args: Prisma.UstensilUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UstensilPayload>
          }
          aggregate: {
            args: Prisma.UstensilAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUstensil>
          }
          groupBy: {
            args: Prisma.UstensilGroupByArgs<ExtArgs>
            result: $Utils.Optional<UstensilGroupByOutputType>[]
          }
          count: {
            args: Prisma.UstensilCountArgs<ExtArgs>
            result: $Utils.Optional<UstensilCountAggregateOutputType> | number
          }
        }
      }
      RecipeUstensil: {
        payload: Prisma.$RecipeUstensilPayload<ExtArgs>
        fields: Prisma.RecipeUstensilFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecipeUstensilFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeUstensilPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecipeUstensilFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeUstensilPayload>
          }
          findFirst: {
            args: Prisma.RecipeUstensilFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeUstensilPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecipeUstensilFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeUstensilPayload>
          }
          findMany: {
            args: Prisma.RecipeUstensilFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeUstensilPayload>[]
          }
          create: {
            args: Prisma.RecipeUstensilCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeUstensilPayload>
          }
          createMany: {
            args: Prisma.RecipeUstensilCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecipeUstensilCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeUstensilPayload>[]
          }
          delete: {
            args: Prisma.RecipeUstensilDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeUstensilPayload>
          }
          update: {
            args: Prisma.RecipeUstensilUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeUstensilPayload>
          }
          deleteMany: {
            args: Prisma.RecipeUstensilDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecipeUstensilUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecipeUstensilUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeUstensilPayload>[]
          }
          upsert: {
            args: Prisma.RecipeUstensilUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeUstensilPayload>
          }
          aggregate: {
            args: Prisma.RecipeUstensilAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecipeUstensil>
          }
          groupBy: {
            args: Prisma.RecipeUstensilGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecipeUstensilGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecipeUstensilCountArgs<ExtArgs>
            result: $Utils.Optional<RecipeUstensilCountAggregateOutputType> | number
          }
        }
      }
      Mood: {
        payload: Prisma.$MoodPayload<ExtArgs>
        fields: Prisma.MoodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MoodFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MoodFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodPayload>
          }
          findFirst: {
            args: Prisma.MoodFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MoodFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodPayload>
          }
          findMany: {
            args: Prisma.MoodFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodPayload>[]
          }
          create: {
            args: Prisma.MoodCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodPayload>
          }
          createMany: {
            args: Prisma.MoodCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MoodCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodPayload>[]
          }
          delete: {
            args: Prisma.MoodDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodPayload>
          }
          update: {
            args: Prisma.MoodUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodPayload>
          }
          deleteMany: {
            args: Prisma.MoodDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MoodUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MoodUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodPayload>[]
          }
          upsert: {
            args: Prisma.MoodUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodPayload>
          }
          aggregate: {
            args: Prisma.MoodAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMood>
          }
          groupBy: {
            args: Prisma.MoodGroupByArgs<ExtArgs>
            result: $Utils.Optional<MoodGroupByOutputType>[]
          }
          count: {
            args: Prisma.MoodCountArgs<ExtArgs>
            result: $Utils.Optional<MoodCountAggregateOutputType> | number
          }
        }
      }
      MoodRecipe: {
        payload: Prisma.$MoodRecipePayload<ExtArgs>
        fields: Prisma.MoodRecipeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MoodRecipeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodRecipePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MoodRecipeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodRecipePayload>
          }
          findFirst: {
            args: Prisma.MoodRecipeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodRecipePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MoodRecipeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodRecipePayload>
          }
          findMany: {
            args: Prisma.MoodRecipeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodRecipePayload>[]
          }
          create: {
            args: Prisma.MoodRecipeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodRecipePayload>
          }
          createMany: {
            args: Prisma.MoodRecipeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MoodRecipeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodRecipePayload>[]
          }
          delete: {
            args: Prisma.MoodRecipeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodRecipePayload>
          }
          update: {
            args: Prisma.MoodRecipeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodRecipePayload>
          }
          deleteMany: {
            args: Prisma.MoodRecipeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MoodRecipeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MoodRecipeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodRecipePayload>[]
          }
          upsert: {
            args: Prisma.MoodRecipeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodRecipePayload>
          }
          aggregate: {
            args: Prisma.MoodRecipeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMoodRecipe>
          }
          groupBy: {
            args: Prisma.MoodRecipeGroupByArgs<ExtArgs>
            result: $Utils.Optional<MoodRecipeGroupByOutputType>[]
          }
          count: {
            args: Prisma.MoodRecipeCountArgs<ExtArgs>
            result: $Utils.Optional<MoodRecipeCountAggregateOutputType> | number
          }
        }
      }
      Diet: {
        payload: Prisma.$DietPayload<ExtArgs>
        fields: Prisma.DietFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DietFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DietPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DietFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DietPayload>
          }
          findFirst: {
            args: Prisma.DietFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DietPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DietFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DietPayload>
          }
          findMany: {
            args: Prisma.DietFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DietPayload>[]
          }
          create: {
            args: Prisma.DietCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DietPayload>
          }
          createMany: {
            args: Prisma.DietCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DietCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DietPayload>[]
          }
          delete: {
            args: Prisma.DietDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DietPayload>
          }
          update: {
            args: Prisma.DietUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DietPayload>
          }
          deleteMany: {
            args: Prisma.DietDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DietUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DietUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DietPayload>[]
          }
          upsert: {
            args: Prisma.DietUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DietPayload>
          }
          aggregate: {
            args: Prisma.DietAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiet>
          }
          groupBy: {
            args: Prisma.DietGroupByArgs<ExtArgs>
            result: $Utils.Optional<DietGroupByOutputType>[]
          }
          count: {
            args: Prisma.DietCountArgs<ExtArgs>
            result: $Utils.Optional<DietCountAggregateOutputType> | number
          }
        }
      }
      DietRecipe: {
        payload: Prisma.$DietRecipePayload<ExtArgs>
        fields: Prisma.DietRecipeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DietRecipeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DietRecipePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DietRecipeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DietRecipePayload>
          }
          findFirst: {
            args: Prisma.DietRecipeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DietRecipePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DietRecipeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DietRecipePayload>
          }
          findMany: {
            args: Prisma.DietRecipeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DietRecipePayload>[]
          }
          create: {
            args: Prisma.DietRecipeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DietRecipePayload>
          }
          createMany: {
            args: Prisma.DietRecipeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DietRecipeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DietRecipePayload>[]
          }
          delete: {
            args: Prisma.DietRecipeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DietRecipePayload>
          }
          update: {
            args: Prisma.DietRecipeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DietRecipePayload>
          }
          deleteMany: {
            args: Prisma.DietRecipeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DietRecipeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DietRecipeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DietRecipePayload>[]
          }
          upsert: {
            args: Prisma.DietRecipeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DietRecipePayload>
          }
          aggregate: {
            args: Prisma.DietRecipeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDietRecipe>
          }
          groupBy: {
            args: Prisma.DietRecipeGroupByArgs<ExtArgs>
            result: $Utils.Optional<DietRecipeGroupByOutputType>[]
          }
          count: {
            args: Prisma.DietRecipeCountArgs<ExtArgs>
            result: $Utils.Optional<DietRecipeCountAggregateOutputType> | number
          }
        }
      }
      Origin: {
        payload: Prisma.$OriginPayload<ExtArgs>
        fields: Prisma.OriginFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OriginFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OriginFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginPayload>
          }
          findFirst: {
            args: Prisma.OriginFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OriginFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginPayload>
          }
          findMany: {
            args: Prisma.OriginFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginPayload>[]
          }
          create: {
            args: Prisma.OriginCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginPayload>
          }
          createMany: {
            args: Prisma.OriginCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OriginCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginPayload>[]
          }
          delete: {
            args: Prisma.OriginDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginPayload>
          }
          update: {
            args: Prisma.OriginUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginPayload>
          }
          deleteMany: {
            args: Prisma.OriginDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OriginUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OriginUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginPayload>[]
          }
          upsert: {
            args: Prisma.OriginUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginPayload>
          }
          aggregate: {
            args: Prisma.OriginAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrigin>
          }
          groupBy: {
            args: Prisma.OriginGroupByArgs<ExtArgs>
            result: $Utils.Optional<OriginGroupByOutputType>[]
          }
          count: {
            args: Prisma.OriginCountArgs<ExtArgs>
            result: $Utils.Optional<OriginCountAggregateOutputType> | number
          }
        }
      }
      OriginRecipe: {
        payload: Prisma.$OriginRecipePayload<ExtArgs>
        fields: Prisma.OriginRecipeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OriginRecipeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginRecipePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OriginRecipeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginRecipePayload>
          }
          findFirst: {
            args: Prisma.OriginRecipeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginRecipePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OriginRecipeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginRecipePayload>
          }
          findMany: {
            args: Prisma.OriginRecipeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginRecipePayload>[]
          }
          create: {
            args: Prisma.OriginRecipeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginRecipePayload>
          }
          createMany: {
            args: Prisma.OriginRecipeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OriginRecipeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginRecipePayload>[]
          }
          delete: {
            args: Prisma.OriginRecipeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginRecipePayload>
          }
          update: {
            args: Prisma.OriginRecipeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginRecipePayload>
          }
          deleteMany: {
            args: Prisma.OriginRecipeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OriginRecipeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OriginRecipeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginRecipePayload>[]
          }
          upsert: {
            args: Prisma.OriginRecipeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginRecipePayload>
          }
          aggregate: {
            args: Prisma.OriginRecipeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOriginRecipe>
          }
          groupBy: {
            args: Prisma.OriginRecipeGroupByArgs<ExtArgs>
            result: $Utils.Optional<OriginRecipeGroupByOutputType>[]
          }
          count: {
            args: Prisma.OriginRecipeCountArgs<ExtArgs>
            result: $Utils.Optional<OriginRecipeCountAggregateOutputType> | number
          }
        }
      }
      Favorite: {
        payload: Prisma.$FavoritePayload<ExtArgs>
        fields: Prisma.FavoriteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FavoriteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FavoriteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          findFirst: {
            args: Prisma.FavoriteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FavoriteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          findMany: {
            args: Prisma.FavoriteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>[]
          }
          create: {
            args: Prisma.FavoriteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          createMany: {
            args: Prisma.FavoriteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FavoriteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>[]
          }
          delete: {
            args: Prisma.FavoriteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          update: {
            args: Prisma.FavoriteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          deleteMany: {
            args: Prisma.FavoriteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FavoriteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FavoriteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>[]
          }
          upsert: {
            args: Prisma.FavoriteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          aggregate: {
            args: Prisma.FavoriteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFavorite>
          }
          groupBy: {
            args: Prisma.FavoriteGroupByArgs<ExtArgs>
            result: $Utils.Optional<FavoriteGroupByOutputType>[]
          }
          count: {
            args: Prisma.FavoriteCountArgs<ExtArgs>
            result: $Utils.Optional<FavoriteCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    role?: RoleOmit
    recipe?: RecipeOmit
    type?: TypeOmit
    ingredient?: IngredientOmit
    recipeIngredient?: RecipeIngredientOmit
    ustensil?: UstensilOmit
    recipeUstensil?: RecipeUstensilOmit
    mood?: MoodOmit
    moodRecipe?: MoodRecipeOmit
    diet?: DietOmit
    dietRecipe?: DietRecipeOmit
    origin?: OriginOmit
    originRecipe?: OriginRecipeOmit
    favorite?: FavoriteOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    recipes: number
    favorites: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipes?: boolean | UserCountOutputTypeCountRecipesArgs
    favorites?: boolean | UserCountOutputTypeCountFavoritesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRecipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFavoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    users: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RoleCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type RecipeCountOutputType
   */

  export type RecipeCountOutputType = {
    ingredients: number
    ustensils: number
    moods: number
    diets: number
    origins: number
    favorites: number
  }

  export type RecipeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredients?: boolean | RecipeCountOutputTypeCountIngredientsArgs
    ustensils?: boolean | RecipeCountOutputTypeCountUstensilsArgs
    moods?: boolean | RecipeCountOutputTypeCountMoodsArgs
    diets?: boolean | RecipeCountOutputTypeCountDietsArgs
    origins?: boolean | RecipeCountOutputTypeCountOriginsArgs
    favorites?: boolean | RecipeCountOutputTypeCountFavoritesArgs
  }

  // Custom InputTypes
  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeCountOutputType
     */
    select?: RecipeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeCountIngredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeIngredientWhereInput
  }

  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeCountUstensilsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeUstensilWhereInput
  }

  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeCountMoodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MoodRecipeWhereInput
  }

  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeCountDietsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DietRecipeWhereInput
  }

  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeCountOriginsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OriginRecipeWhereInput
  }

  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeCountFavoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteWhereInput
  }


  /**
   * Count Type TypeCountOutputType
   */

  export type TypeCountOutputType = {
    recipes: number
  }

  export type TypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipes?: boolean | TypeCountOutputTypeCountRecipesArgs
  }

  // Custom InputTypes
  /**
   * TypeCountOutputType without action
   */
  export type TypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeCountOutputType
     */
    select?: TypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TypeCountOutputType without action
   */
  export type TypeCountOutputTypeCountRecipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeWhereInput
  }


  /**
   * Count Type IngredientCountOutputType
   */

  export type IngredientCountOutputType = {
    recipes: number
  }

  export type IngredientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipes?: boolean | IngredientCountOutputTypeCountRecipesArgs
  }

  // Custom InputTypes
  /**
   * IngredientCountOutputType without action
   */
  export type IngredientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientCountOutputType
     */
    select?: IngredientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IngredientCountOutputType without action
   */
  export type IngredientCountOutputTypeCountRecipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeIngredientWhereInput
  }


  /**
   * Count Type UstensilCountOutputType
   */

  export type UstensilCountOutputType = {
    recipes: number
  }

  export type UstensilCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipes?: boolean | UstensilCountOutputTypeCountRecipesArgs
  }

  // Custom InputTypes
  /**
   * UstensilCountOutputType without action
   */
  export type UstensilCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UstensilCountOutputType
     */
    select?: UstensilCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UstensilCountOutputType without action
   */
  export type UstensilCountOutputTypeCountRecipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeUstensilWhereInput
  }


  /**
   * Count Type MoodCountOutputType
   */

  export type MoodCountOutputType = {
    recipes: number
  }

  export type MoodCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipes?: boolean | MoodCountOutputTypeCountRecipesArgs
  }

  // Custom InputTypes
  /**
   * MoodCountOutputType without action
   */
  export type MoodCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodCountOutputType
     */
    select?: MoodCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MoodCountOutputType without action
   */
  export type MoodCountOutputTypeCountRecipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MoodRecipeWhereInput
  }


  /**
   * Count Type DietCountOutputType
   */

  export type DietCountOutputType = {
    recipes: number
  }

  export type DietCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipes?: boolean | DietCountOutputTypeCountRecipesArgs
  }

  // Custom InputTypes
  /**
   * DietCountOutputType without action
   */
  export type DietCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DietCountOutputType
     */
    select?: DietCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DietCountOutputType without action
   */
  export type DietCountOutputTypeCountRecipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DietRecipeWhereInput
  }


  /**
   * Count Type OriginCountOutputType
   */

  export type OriginCountOutputType = {
    recipes: number
  }

  export type OriginCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipes?: boolean | OriginCountOutputTypeCountRecipesArgs
  }

  // Custom InputTypes
  /**
   * OriginCountOutputType without action
   */
  export type OriginCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginCountOutputType
     */
    select?: OriginCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OriginCountOutputType without action
   */
  export type OriginCountOutputTypeCountRecipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OriginRecipeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    image: string | null
    consent: boolean | null
    roleId: string | null
    createAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    image: string | null
    consent: boolean | null
    roleId: string | null
    createAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    image: number
    consent: number
    roleId: number
    createAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    image?: true
    consent?: true
    roleId?: true
    createAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    image?: true
    consent?: true
    roleId?: true
    createAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    image?: true
    consent?: true
    roleId?: true
    createAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    image: string | null
    consent: boolean
    roleId: string
    createAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    image?: boolean
    consent?: boolean
    roleId?: boolean
    createAt?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    recipes?: boolean | User$recipesArgs<ExtArgs>
    favorites?: boolean | User$favoritesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    image?: boolean
    consent?: boolean
    roleId?: boolean
    createAt?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    image?: boolean
    consent?: boolean
    roleId?: boolean
    createAt?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    image?: boolean
    consent?: boolean
    roleId?: boolean
    createAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "image" | "consent" | "roleId" | "createAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    recipes?: boolean | User$recipesArgs<ExtArgs>
    favorites?: boolean | User$favoritesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      role: Prisma.$RolePayload<ExtArgs>
      recipes: Prisma.$RecipePayload<ExtArgs>[]
      favorites: Prisma.$FavoritePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      image: string | null
      consent: boolean
      roleId: string
      createAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    recipes<T extends User$recipesArgs<ExtArgs> = {}>(args?: Subset<T, User$recipesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favorites<T extends User$favoritesArgs<ExtArgs> = {}>(args?: Subset<T, User$favoritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly consent: FieldRef<"User", 'Boolean'>
    readonly roleId: FieldRef<"User", 'String'>
    readonly createAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.recipes
   */
  export type User$recipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    where?: RecipeWhereInput
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    cursor?: RecipeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }

  /**
   * User.favorites
   */
  export type User$favoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    where?: FavoriteWhereInput
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    cursor?: FavoriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type RoleMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: string
    name: string
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RoleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(args: SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Role$usersArgs<ExtArgs> = {}>(args?: Subset<T, Role$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'String'>
    readonly name: FieldRef<"Role", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role updateManyAndReturn
   */
  export type RoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.users
   */
  export type Role$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model Recipe
   */

  export type AggregateRecipe = {
    _count: RecipeCountAggregateOutputType | null
    _avg: RecipeAvgAggregateOutputType | null
    _sum: RecipeSumAggregateOutputType | null
    _min: RecipeMinAggregateOutputType | null
    _max: RecipeMaxAggregateOutputType | null
  }

  export type RecipeAvgAggregateOutputType = {
    serve: number | null
    prepTime: number | null
    cookTime: number | null
  }

  export type RecipeSumAggregateOutputType = {
    serve: number | null
    prepTime: number | null
    cookTime: number | null
  }

  export type RecipeMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    serve: number | null
    description: string | null
    instructions: string | null
    typeId: string | null
    imageUrl: string | null
    prepTime: number | null
    cookTime: number | null
    createAt: Date | null
  }

  export type RecipeMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    serve: number | null
    description: string | null
    instructions: string | null
    typeId: string | null
    imageUrl: string | null
    prepTime: number | null
    cookTime: number | null
    createAt: Date | null
  }

  export type RecipeCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    serve: number
    description: number
    instructions: number
    typeId: number
    imageUrl: number
    prepTime: number
    cookTime: number
    createAt: number
    _all: number
  }


  export type RecipeAvgAggregateInputType = {
    serve?: true
    prepTime?: true
    cookTime?: true
  }

  export type RecipeSumAggregateInputType = {
    serve?: true
    prepTime?: true
    cookTime?: true
  }

  export type RecipeMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    serve?: true
    description?: true
    instructions?: true
    typeId?: true
    imageUrl?: true
    prepTime?: true
    cookTime?: true
    createAt?: true
  }

  export type RecipeMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    serve?: true
    description?: true
    instructions?: true
    typeId?: true
    imageUrl?: true
    prepTime?: true
    cookTime?: true
    createAt?: true
  }

  export type RecipeCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    serve?: true
    description?: true
    instructions?: true
    typeId?: true
    imageUrl?: true
    prepTime?: true
    cookTime?: true
    createAt?: true
    _all?: true
  }

  export type RecipeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recipe to aggregate.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Recipes
    **/
    _count?: true | RecipeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecipeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecipeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecipeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecipeMaxAggregateInputType
  }

  export type GetRecipeAggregateType<T extends RecipeAggregateArgs> = {
        [P in keyof T & keyof AggregateRecipe]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecipe[P]>
      : GetScalarType<T[P], AggregateRecipe[P]>
  }




  export type RecipeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeWhereInput
    orderBy?: RecipeOrderByWithAggregationInput | RecipeOrderByWithAggregationInput[]
    by: RecipeScalarFieldEnum[] | RecipeScalarFieldEnum
    having?: RecipeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecipeCountAggregateInputType | true
    _avg?: RecipeAvgAggregateInputType
    _sum?: RecipeSumAggregateInputType
    _min?: RecipeMinAggregateInputType
    _max?: RecipeMaxAggregateInputType
  }

  export type RecipeGroupByOutputType = {
    id: string
    userId: string
    title: string
    serve: number | null
    description: string | null
    instructions: string
    typeId: string
    imageUrl: string
    prepTime: number
    cookTime: number
    createAt: Date
    _count: RecipeCountAggregateOutputType | null
    _avg: RecipeAvgAggregateOutputType | null
    _sum: RecipeSumAggregateOutputType | null
    _min: RecipeMinAggregateOutputType | null
    _max: RecipeMaxAggregateOutputType | null
  }

  type GetRecipeGroupByPayload<T extends RecipeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecipeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecipeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecipeGroupByOutputType[P]>
            : GetScalarType<T[P], RecipeGroupByOutputType[P]>
        }
      >
    >


  export type RecipeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    serve?: boolean
    description?: boolean
    instructions?: boolean
    typeId?: boolean
    imageUrl?: boolean
    prepTime?: boolean
    cookTime?: boolean
    createAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    ingredients?: boolean | Recipe$ingredientsArgs<ExtArgs>
    ustensils?: boolean | Recipe$ustensilsArgs<ExtArgs>
    type?: boolean | TypeDefaultArgs<ExtArgs>
    moods?: boolean | Recipe$moodsArgs<ExtArgs>
    diets?: boolean | Recipe$dietsArgs<ExtArgs>
    origins?: boolean | Recipe$originsArgs<ExtArgs>
    favorites?: boolean | Recipe$favoritesArgs<ExtArgs>
    _count?: boolean | RecipeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipe"]>

  export type RecipeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    serve?: boolean
    description?: boolean
    instructions?: boolean
    typeId?: boolean
    imageUrl?: boolean
    prepTime?: boolean
    cookTime?: boolean
    createAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    type?: boolean | TypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipe"]>

  export type RecipeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    serve?: boolean
    description?: boolean
    instructions?: boolean
    typeId?: boolean
    imageUrl?: boolean
    prepTime?: boolean
    cookTime?: boolean
    createAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    type?: boolean | TypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipe"]>

  export type RecipeSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    serve?: boolean
    description?: boolean
    instructions?: boolean
    typeId?: boolean
    imageUrl?: boolean
    prepTime?: boolean
    cookTime?: boolean
    createAt?: boolean
  }

  export type RecipeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "serve" | "description" | "instructions" | "typeId" | "imageUrl" | "prepTime" | "cookTime" | "createAt", ExtArgs["result"]["recipe"]>
  export type RecipeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    ingredients?: boolean | Recipe$ingredientsArgs<ExtArgs>
    ustensils?: boolean | Recipe$ustensilsArgs<ExtArgs>
    type?: boolean | TypeDefaultArgs<ExtArgs>
    moods?: boolean | Recipe$moodsArgs<ExtArgs>
    diets?: boolean | Recipe$dietsArgs<ExtArgs>
    origins?: boolean | Recipe$originsArgs<ExtArgs>
    favorites?: boolean | Recipe$favoritesArgs<ExtArgs>
    _count?: boolean | RecipeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RecipeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    type?: boolean | TypeDefaultArgs<ExtArgs>
  }
  export type RecipeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    type?: boolean | TypeDefaultArgs<ExtArgs>
  }

  export type $RecipePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Recipe"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      ingredients: Prisma.$RecipeIngredientPayload<ExtArgs>[]
      ustensils: Prisma.$RecipeUstensilPayload<ExtArgs>[]
      type: Prisma.$TypePayload<ExtArgs>
      moods: Prisma.$MoodRecipePayload<ExtArgs>[]
      diets: Prisma.$DietRecipePayload<ExtArgs>[]
      origins: Prisma.$OriginRecipePayload<ExtArgs>[]
      favorites: Prisma.$FavoritePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string
      serve: number | null
      description: string | null
      instructions: string
      typeId: string
      imageUrl: string
      prepTime: number
      cookTime: number
      createAt: Date
    }, ExtArgs["result"]["recipe"]>
    composites: {}
  }

  type RecipeGetPayload<S extends boolean | null | undefined | RecipeDefaultArgs> = $Result.GetResult<Prisma.$RecipePayload, S>

  type RecipeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecipeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecipeCountAggregateInputType | true
    }

  export interface RecipeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Recipe'], meta: { name: 'Recipe' } }
    /**
     * Find zero or one Recipe that matches the filter.
     * @param {RecipeFindUniqueArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecipeFindUniqueArgs>(args: SelectSubset<T, RecipeFindUniqueArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Recipe that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecipeFindUniqueOrThrowArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecipeFindUniqueOrThrowArgs>(args: SelectSubset<T, RecipeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recipe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFindFirstArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecipeFindFirstArgs>(args?: SelectSubset<T, RecipeFindFirstArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recipe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFindFirstOrThrowArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecipeFindFirstOrThrowArgs>(args?: SelectSubset<T, RecipeFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Recipes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recipes
     * const recipes = await prisma.recipe.findMany()
     * 
     * // Get first 10 Recipes
     * const recipes = await prisma.recipe.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recipeWithIdOnly = await prisma.recipe.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecipeFindManyArgs>(args?: SelectSubset<T, RecipeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Recipe.
     * @param {RecipeCreateArgs} args - Arguments to create a Recipe.
     * @example
     * // Create one Recipe
     * const Recipe = await prisma.recipe.create({
     *   data: {
     *     // ... data to create a Recipe
     *   }
     * })
     * 
     */
    create<T extends RecipeCreateArgs>(args: SelectSubset<T, RecipeCreateArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Recipes.
     * @param {RecipeCreateManyArgs} args - Arguments to create many Recipes.
     * @example
     * // Create many Recipes
     * const recipe = await prisma.recipe.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecipeCreateManyArgs>(args?: SelectSubset<T, RecipeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Recipes and returns the data saved in the database.
     * @param {RecipeCreateManyAndReturnArgs} args - Arguments to create many Recipes.
     * @example
     * // Create many Recipes
     * const recipe = await prisma.recipe.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Recipes and only return the `id`
     * const recipeWithIdOnly = await prisma.recipe.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecipeCreateManyAndReturnArgs>(args?: SelectSubset<T, RecipeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Recipe.
     * @param {RecipeDeleteArgs} args - Arguments to delete one Recipe.
     * @example
     * // Delete one Recipe
     * const Recipe = await prisma.recipe.delete({
     *   where: {
     *     // ... filter to delete one Recipe
     *   }
     * })
     * 
     */
    delete<T extends RecipeDeleteArgs>(args: SelectSubset<T, RecipeDeleteArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Recipe.
     * @param {RecipeUpdateArgs} args - Arguments to update one Recipe.
     * @example
     * // Update one Recipe
     * const recipe = await prisma.recipe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecipeUpdateArgs>(args: SelectSubset<T, RecipeUpdateArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Recipes.
     * @param {RecipeDeleteManyArgs} args - Arguments to filter Recipes to delete.
     * @example
     * // Delete a few Recipes
     * const { count } = await prisma.recipe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecipeDeleteManyArgs>(args?: SelectSubset<T, RecipeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recipes
     * const recipe = await prisma.recipe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecipeUpdateManyArgs>(args: SelectSubset<T, RecipeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recipes and returns the data updated in the database.
     * @param {RecipeUpdateManyAndReturnArgs} args - Arguments to update many Recipes.
     * @example
     * // Update many Recipes
     * const recipe = await prisma.recipe.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Recipes and only return the `id`
     * const recipeWithIdOnly = await prisma.recipe.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RecipeUpdateManyAndReturnArgs>(args: SelectSubset<T, RecipeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Recipe.
     * @param {RecipeUpsertArgs} args - Arguments to update or create a Recipe.
     * @example
     * // Update or create a Recipe
     * const recipe = await prisma.recipe.upsert({
     *   create: {
     *     // ... data to create a Recipe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recipe we want to update
     *   }
     * })
     */
    upsert<T extends RecipeUpsertArgs>(args: SelectSubset<T, RecipeUpsertArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeCountArgs} args - Arguments to filter Recipes to count.
     * @example
     * // Count the number of Recipes
     * const count = await prisma.recipe.count({
     *   where: {
     *     // ... the filter for the Recipes we want to count
     *   }
     * })
    **/
    count<T extends RecipeCountArgs>(
      args?: Subset<T, RecipeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecipeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecipeAggregateArgs>(args: Subset<T, RecipeAggregateArgs>): Prisma.PrismaPromise<GetRecipeAggregateType<T>>

    /**
     * Group by Recipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RecipeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecipeGroupByArgs['orderBy'] }
        : { orderBy?: RecipeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RecipeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecipeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Recipe model
   */
  readonly fields: RecipeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Recipe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecipeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ingredients<T extends Recipe$ingredientsArgs<ExtArgs> = {}>(args?: Subset<T, Recipe$ingredientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ustensils<T extends Recipe$ustensilsArgs<ExtArgs> = {}>(args?: Subset<T, Recipe$ustensilsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeUstensilPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    type<T extends TypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TypeDefaultArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    moods<T extends Recipe$moodsArgs<ExtArgs> = {}>(args?: Subset<T, Recipe$moodsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoodRecipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    diets<T extends Recipe$dietsArgs<ExtArgs> = {}>(args?: Subset<T, Recipe$dietsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DietRecipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    origins<T extends Recipe$originsArgs<ExtArgs> = {}>(args?: Subset<T, Recipe$originsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OriginRecipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favorites<T extends Recipe$favoritesArgs<ExtArgs> = {}>(args?: Subset<T, Recipe$favoritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Recipe model
   */
  interface RecipeFieldRefs {
    readonly id: FieldRef<"Recipe", 'String'>
    readonly userId: FieldRef<"Recipe", 'String'>
    readonly title: FieldRef<"Recipe", 'String'>
    readonly serve: FieldRef<"Recipe", 'Int'>
    readonly description: FieldRef<"Recipe", 'String'>
    readonly instructions: FieldRef<"Recipe", 'String'>
    readonly typeId: FieldRef<"Recipe", 'String'>
    readonly imageUrl: FieldRef<"Recipe", 'String'>
    readonly prepTime: FieldRef<"Recipe", 'Int'>
    readonly cookTime: FieldRef<"Recipe", 'Int'>
    readonly createAt: FieldRef<"Recipe", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Recipe findUnique
   */
  export type RecipeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where: RecipeWhereUniqueInput
  }

  /**
   * Recipe findUniqueOrThrow
   */
  export type RecipeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where: RecipeWhereUniqueInput
  }

  /**
   * Recipe findFirst
   */
  export type RecipeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recipes.
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recipes.
     */
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }

  /**
   * Recipe findFirstOrThrow
   */
  export type RecipeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recipes.
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recipes.
     */
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }

  /**
   * Recipe findMany
   */
  export type RecipeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipes to fetch.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Recipes.
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }

  /**
   * Recipe create
   */
  export type RecipeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * The data needed to create a Recipe.
     */
    data: XOR<RecipeCreateInput, RecipeUncheckedCreateInput>
  }

  /**
   * Recipe createMany
   */
  export type RecipeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Recipes.
     */
    data: RecipeCreateManyInput | RecipeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Recipe createManyAndReturn
   */
  export type RecipeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * The data used to create many Recipes.
     */
    data: RecipeCreateManyInput | RecipeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Recipe update
   */
  export type RecipeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * The data needed to update a Recipe.
     */
    data: XOR<RecipeUpdateInput, RecipeUncheckedUpdateInput>
    /**
     * Choose, which Recipe to update.
     */
    where: RecipeWhereUniqueInput
  }

  /**
   * Recipe updateMany
   */
  export type RecipeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Recipes.
     */
    data: XOR<RecipeUpdateManyMutationInput, RecipeUncheckedUpdateManyInput>
    /**
     * Filter which Recipes to update
     */
    where?: RecipeWhereInput
    /**
     * Limit how many Recipes to update.
     */
    limit?: number
  }

  /**
   * Recipe updateManyAndReturn
   */
  export type RecipeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * The data used to update Recipes.
     */
    data: XOR<RecipeUpdateManyMutationInput, RecipeUncheckedUpdateManyInput>
    /**
     * Filter which Recipes to update
     */
    where?: RecipeWhereInput
    /**
     * Limit how many Recipes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Recipe upsert
   */
  export type RecipeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * The filter to search for the Recipe to update in case it exists.
     */
    where: RecipeWhereUniqueInput
    /**
     * In case the Recipe found by the `where` argument doesn't exist, create a new Recipe with this data.
     */
    create: XOR<RecipeCreateInput, RecipeUncheckedCreateInput>
    /**
     * In case the Recipe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecipeUpdateInput, RecipeUncheckedUpdateInput>
  }

  /**
   * Recipe delete
   */
  export type RecipeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter which Recipe to delete.
     */
    where: RecipeWhereUniqueInput
  }

  /**
   * Recipe deleteMany
   */
  export type RecipeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recipes to delete
     */
    where?: RecipeWhereInput
    /**
     * Limit how many Recipes to delete.
     */
    limit?: number
  }

  /**
   * Recipe.ingredients
   */
  export type Recipe$ingredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeIngredient
     */
    omit?: RecipeIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientInclude<ExtArgs> | null
    where?: RecipeIngredientWhereInput
    orderBy?: RecipeIngredientOrderByWithRelationInput | RecipeIngredientOrderByWithRelationInput[]
    cursor?: RecipeIngredientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecipeIngredientScalarFieldEnum | RecipeIngredientScalarFieldEnum[]
  }

  /**
   * Recipe.ustensils
   */
  export type Recipe$ustensilsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeUstensil
     */
    select?: RecipeUstensilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeUstensil
     */
    omit?: RecipeUstensilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeUstensilInclude<ExtArgs> | null
    where?: RecipeUstensilWhereInput
    orderBy?: RecipeUstensilOrderByWithRelationInput | RecipeUstensilOrderByWithRelationInput[]
    cursor?: RecipeUstensilWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecipeUstensilScalarFieldEnum | RecipeUstensilScalarFieldEnum[]
  }

  /**
   * Recipe.moods
   */
  export type Recipe$moodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodRecipe
     */
    select?: MoodRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodRecipe
     */
    omit?: MoodRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodRecipeInclude<ExtArgs> | null
    where?: MoodRecipeWhereInput
    orderBy?: MoodRecipeOrderByWithRelationInput | MoodRecipeOrderByWithRelationInput[]
    cursor?: MoodRecipeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MoodRecipeScalarFieldEnum | MoodRecipeScalarFieldEnum[]
  }

  /**
   * Recipe.diets
   */
  export type Recipe$dietsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DietRecipe
     */
    select?: DietRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DietRecipe
     */
    omit?: DietRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietRecipeInclude<ExtArgs> | null
    where?: DietRecipeWhereInput
    orderBy?: DietRecipeOrderByWithRelationInput | DietRecipeOrderByWithRelationInput[]
    cursor?: DietRecipeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DietRecipeScalarFieldEnum | DietRecipeScalarFieldEnum[]
  }

  /**
   * Recipe.origins
   */
  export type Recipe$originsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginRecipe
     */
    select?: OriginRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OriginRecipe
     */
    omit?: OriginRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginRecipeInclude<ExtArgs> | null
    where?: OriginRecipeWhereInput
    orderBy?: OriginRecipeOrderByWithRelationInput | OriginRecipeOrderByWithRelationInput[]
    cursor?: OriginRecipeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OriginRecipeScalarFieldEnum | OriginRecipeScalarFieldEnum[]
  }

  /**
   * Recipe.favorites
   */
  export type Recipe$favoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    where?: FavoriteWhereInput
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    cursor?: FavoriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Recipe without action
   */
  export type RecipeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
  }


  /**
   * Model Type
   */

  export type AggregateType = {
    _count: TypeCountAggregateOutputType | null
    _min: TypeMinAggregateOutputType | null
    _max: TypeMaxAggregateOutputType | null
  }

  export type TypeMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type TypeMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type TypeCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type TypeMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type TypeMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type TypeCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type TypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Type to aggregate.
     */
    where?: TypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Types to fetch.
     */
    orderBy?: TypeOrderByWithRelationInput | TypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Types
    **/
    _count?: true | TypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TypeMaxAggregateInputType
  }

  export type GetTypeAggregateType<T extends TypeAggregateArgs> = {
        [P in keyof T & keyof AggregateType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateType[P]>
      : GetScalarType<T[P], AggregateType[P]>
  }




  export type TypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TypeWhereInput
    orderBy?: TypeOrderByWithAggregationInput | TypeOrderByWithAggregationInput[]
    by: TypeScalarFieldEnum[] | TypeScalarFieldEnum
    having?: TypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TypeCountAggregateInputType | true
    _min?: TypeMinAggregateInputType
    _max?: TypeMaxAggregateInputType
  }

  export type TypeGroupByOutputType = {
    id: string
    name: string
    _count: TypeCountAggregateOutputType | null
    _min: TypeMinAggregateOutputType | null
    _max: TypeMaxAggregateOutputType | null
  }

  type GetTypeGroupByPayload<T extends TypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TypeGroupByOutputType[P]>
            : GetScalarType<T[P], TypeGroupByOutputType[P]>
        }
      >
    >


  export type TypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    recipes?: boolean | Type$recipesArgs<ExtArgs>
    _count?: boolean | TypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["type"]>

  export type TypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["type"]>

  export type TypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["type"]>

  export type TypeSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type TypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["type"]>
  export type TypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipes?: boolean | Type$recipesArgs<ExtArgs>
    _count?: boolean | TypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Type"
    objects: {
      recipes: Prisma.$RecipePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["type"]>
    composites: {}
  }

  type TypeGetPayload<S extends boolean | null | undefined | TypeDefaultArgs> = $Result.GetResult<Prisma.$TypePayload, S>

  type TypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TypeCountAggregateInputType | true
    }

  export interface TypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Type'], meta: { name: 'Type' } }
    /**
     * Find zero or one Type that matches the filter.
     * @param {TypeFindUniqueArgs} args - Arguments to find a Type
     * @example
     * // Get one Type
     * const type = await prisma.type.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TypeFindUniqueArgs>(args: SelectSubset<T, TypeFindUniqueArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Type that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TypeFindUniqueOrThrowArgs} args - Arguments to find a Type
     * @example
     * // Get one Type
     * const type = await prisma.type.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TypeFindUniqueOrThrowArgs>(args: SelectSubset<T, TypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Type that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeFindFirstArgs} args - Arguments to find a Type
     * @example
     * // Get one Type
     * const type = await prisma.type.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TypeFindFirstArgs>(args?: SelectSubset<T, TypeFindFirstArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Type that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeFindFirstOrThrowArgs} args - Arguments to find a Type
     * @example
     * // Get one Type
     * const type = await prisma.type.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TypeFindFirstOrThrowArgs>(args?: SelectSubset<T, TypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Types
     * const types = await prisma.type.findMany()
     * 
     * // Get first 10 Types
     * const types = await prisma.type.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const typeWithIdOnly = await prisma.type.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TypeFindManyArgs>(args?: SelectSubset<T, TypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Type.
     * @param {TypeCreateArgs} args - Arguments to create a Type.
     * @example
     * // Create one Type
     * const Type = await prisma.type.create({
     *   data: {
     *     // ... data to create a Type
     *   }
     * })
     * 
     */
    create<T extends TypeCreateArgs>(args: SelectSubset<T, TypeCreateArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Types.
     * @param {TypeCreateManyArgs} args - Arguments to create many Types.
     * @example
     * // Create many Types
     * const type = await prisma.type.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TypeCreateManyArgs>(args?: SelectSubset<T, TypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Types and returns the data saved in the database.
     * @param {TypeCreateManyAndReturnArgs} args - Arguments to create many Types.
     * @example
     * // Create many Types
     * const type = await prisma.type.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Types and only return the `id`
     * const typeWithIdOnly = await prisma.type.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TypeCreateManyAndReturnArgs>(args?: SelectSubset<T, TypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Type.
     * @param {TypeDeleteArgs} args - Arguments to delete one Type.
     * @example
     * // Delete one Type
     * const Type = await prisma.type.delete({
     *   where: {
     *     // ... filter to delete one Type
     *   }
     * })
     * 
     */
    delete<T extends TypeDeleteArgs>(args: SelectSubset<T, TypeDeleteArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Type.
     * @param {TypeUpdateArgs} args - Arguments to update one Type.
     * @example
     * // Update one Type
     * const type = await prisma.type.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TypeUpdateArgs>(args: SelectSubset<T, TypeUpdateArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Types.
     * @param {TypeDeleteManyArgs} args - Arguments to filter Types to delete.
     * @example
     * // Delete a few Types
     * const { count } = await prisma.type.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TypeDeleteManyArgs>(args?: SelectSubset<T, TypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Types
     * const type = await prisma.type.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TypeUpdateManyArgs>(args: SelectSubset<T, TypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Types and returns the data updated in the database.
     * @param {TypeUpdateManyAndReturnArgs} args - Arguments to update many Types.
     * @example
     * // Update many Types
     * const type = await prisma.type.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Types and only return the `id`
     * const typeWithIdOnly = await prisma.type.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TypeUpdateManyAndReturnArgs>(args: SelectSubset<T, TypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Type.
     * @param {TypeUpsertArgs} args - Arguments to update or create a Type.
     * @example
     * // Update or create a Type
     * const type = await prisma.type.upsert({
     *   create: {
     *     // ... data to create a Type
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Type we want to update
     *   }
     * })
     */
    upsert<T extends TypeUpsertArgs>(args: SelectSubset<T, TypeUpsertArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeCountArgs} args - Arguments to filter Types to count.
     * @example
     * // Count the number of Types
     * const count = await prisma.type.count({
     *   where: {
     *     // ... the filter for the Types we want to count
     *   }
     * })
    **/
    count<T extends TypeCountArgs>(
      args?: Subset<T, TypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TypeAggregateArgs>(args: Subset<T, TypeAggregateArgs>): Prisma.PrismaPromise<GetTypeAggregateType<T>>

    /**
     * Group by Type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TypeGroupByArgs['orderBy'] }
        : { orderBy?: TypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Type model
   */
  readonly fields: TypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Type.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recipes<T extends Type$recipesArgs<ExtArgs> = {}>(args?: Subset<T, Type$recipesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Type model
   */
  interface TypeFieldRefs {
    readonly id: FieldRef<"Type", 'String'>
    readonly name: FieldRef<"Type", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Type findUnique
   */
  export type TypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter, which Type to fetch.
     */
    where: TypeWhereUniqueInput
  }

  /**
   * Type findUniqueOrThrow
   */
  export type TypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter, which Type to fetch.
     */
    where: TypeWhereUniqueInput
  }

  /**
   * Type findFirst
   */
  export type TypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter, which Type to fetch.
     */
    where?: TypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Types to fetch.
     */
    orderBy?: TypeOrderByWithRelationInput | TypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Types.
     */
    cursor?: TypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Types.
     */
    distinct?: TypeScalarFieldEnum | TypeScalarFieldEnum[]
  }

  /**
   * Type findFirstOrThrow
   */
  export type TypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter, which Type to fetch.
     */
    where?: TypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Types to fetch.
     */
    orderBy?: TypeOrderByWithRelationInput | TypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Types.
     */
    cursor?: TypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Types.
     */
    distinct?: TypeScalarFieldEnum | TypeScalarFieldEnum[]
  }

  /**
   * Type findMany
   */
  export type TypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter, which Types to fetch.
     */
    where?: TypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Types to fetch.
     */
    orderBy?: TypeOrderByWithRelationInput | TypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Types.
     */
    cursor?: TypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Types.
     */
    skip?: number
    distinct?: TypeScalarFieldEnum | TypeScalarFieldEnum[]
  }

  /**
   * Type create
   */
  export type TypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * The data needed to create a Type.
     */
    data: XOR<TypeCreateInput, TypeUncheckedCreateInput>
  }

  /**
   * Type createMany
   */
  export type TypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Types.
     */
    data: TypeCreateManyInput | TypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Type createManyAndReturn
   */
  export type TypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * The data used to create many Types.
     */
    data: TypeCreateManyInput | TypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Type update
   */
  export type TypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * The data needed to update a Type.
     */
    data: XOR<TypeUpdateInput, TypeUncheckedUpdateInput>
    /**
     * Choose, which Type to update.
     */
    where: TypeWhereUniqueInput
  }

  /**
   * Type updateMany
   */
  export type TypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Types.
     */
    data: XOR<TypeUpdateManyMutationInput, TypeUncheckedUpdateManyInput>
    /**
     * Filter which Types to update
     */
    where?: TypeWhereInput
    /**
     * Limit how many Types to update.
     */
    limit?: number
  }

  /**
   * Type updateManyAndReturn
   */
  export type TypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * The data used to update Types.
     */
    data: XOR<TypeUpdateManyMutationInput, TypeUncheckedUpdateManyInput>
    /**
     * Filter which Types to update
     */
    where?: TypeWhereInput
    /**
     * Limit how many Types to update.
     */
    limit?: number
  }

  /**
   * Type upsert
   */
  export type TypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * The filter to search for the Type to update in case it exists.
     */
    where: TypeWhereUniqueInput
    /**
     * In case the Type found by the `where` argument doesn't exist, create a new Type with this data.
     */
    create: XOR<TypeCreateInput, TypeUncheckedCreateInput>
    /**
     * In case the Type was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TypeUpdateInput, TypeUncheckedUpdateInput>
  }

  /**
   * Type delete
   */
  export type TypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter which Type to delete.
     */
    where: TypeWhereUniqueInput
  }

  /**
   * Type deleteMany
   */
  export type TypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Types to delete
     */
    where?: TypeWhereInput
    /**
     * Limit how many Types to delete.
     */
    limit?: number
  }

  /**
   * Type.recipes
   */
  export type Type$recipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    where?: RecipeWhereInput
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    cursor?: RecipeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }

  /**
   * Type without action
   */
  export type TypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
  }


  /**
   * Model Ingredient
   */

  export type AggregateIngredient = {
    _count: IngredientCountAggregateOutputType | null
    _min: IngredientMinAggregateOutputType | null
    _max: IngredientMaxAggregateOutputType | null
  }

  export type IngredientMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type IngredientMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type IngredientCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type IngredientMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type IngredientMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type IngredientCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type IngredientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ingredient to aggregate.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ingredients
    **/
    _count?: true | IngredientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IngredientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IngredientMaxAggregateInputType
  }

  export type GetIngredientAggregateType<T extends IngredientAggregateArgs> = {
        [P in keyof T & keyof AggregateIngredient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIngredient[P]>
      : GetScalarType<T[P], AggregateIngredient[P]>
  }




  export type IngredientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngredientWhereInput
    orderBy?: IngredientOrderByWithAggregationInput | IngredientOrderByWithAggregationInput[]
    by: IngredientScalarFieldEnum[] | IngredientScalarFieldEnum
    having?: IngredientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IngredientCountAggregateInputType | true
    _min?: IngredientMinAggregateInputType
    _max?: IngredientMaxAggregateInputType
  }

  export type IngredientGroupByOutputType = {
    id: string
    name: string
    _count: IngredientCountAggregateOutputType | null
    _min: IngredientMinAggregateOutputType | null
    _max: IngredientMaxAggregateOutputType | null
  }

  type GetIngredientGroupByPayload<T extends IngredientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IngredientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IngredientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IngredientGroupByOutputType[P]>
            : GetScalarType<T[P], IngredientGroupByOutputType[P]>
        }
      >
    >


  export type IngredientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    recipes?: boolean | Ingredient$recipesArgs<ExtArgs>
    _count?: boolean | IngredientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingredient"]>

  export type IngredientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["ingredient"]>

  export type IngredientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["ingredient"]>

  export type IngredientSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type IngredientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["ingredient"]>
  export type IngredientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipes?: boolean | Ingredient$recipesArgs<ExtArgs>
    _count?: boolean | IngredientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type IngredientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type IngredientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $IngredientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ingredient"
    objects: {
      recipes: Prisma.$RecipeIngredientPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["ingredient"]>
    composites: {}
  }

  type IngredientGetPayload<S extends boolean | null | undefined | IngredientDefaultArgs> = $Result.GetResult<Prisma.$IngredientPayload, S>

  type IngredientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IngredientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IngredientCountAggregateInputType | true
    }

  export interface IngredientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ingredient'], meta: { name: 'Ingredient' } }
    /**
     * Find zero or one Ingredient that matches the filter.
     * @param {IngredientFindUniqueArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IngredientFindUniqueArgs>(args: SelectSubset<T, IngredientFindUniqueArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ingredient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IngredientFindUniqueOrThrowArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IngredientFindUniqueOrThrowArgs>(args: SelectSubset<T, IngredientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingredient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientFindFirstArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IngredientFindFirstArgs>(args?: SelectSubset<T, IngredientFindFirstArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingredient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientFindFirstOrThrowArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IngredientFindFirstOrThrowArgs>(args?: SelectSubset<T, IngredientFindFirstOrThrowArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ingredients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ingredients
     * const ingredients = await prisma.ingredient.findMany()
     * 
     * // Get first 10 Ingredients
     * const ingredients = await prisma.ingredient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ingredientWithIdOnly = await prisma.ingredient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IngredientFindManyArgs>(args?: SelectSubset<T, IngredientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ingredient.
     * @param {IngredientCreateArgs} args - Arguments to create a Ingredient.
     * @example
     * // Create one Ingredient
     * const Ingredient = await prisma.ingredient.create({
     *   data: {
     *     // ... data to create a Ingredient
     *   }
     * })
     * 
     */
    create<T extends IngredientCreateArgs>(args: SelectSubset<T, IngredientCreateArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ingredients.
     * @param {IngredientCreateManyArgs} args - Arguments to create many Ingredients.
     * @example
     * // Create many Ingredients
     * const ingredient = await prisma.ingredient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IngredientCreateManyArgs>(args?: SelectSubset<T, IngredientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ingredients and returns the data saved in the database.
     * @param {IngredientCreateManyAndReturnArgs} args - Arguments to create many Ingredients.
     * @example
     * // Create many Ingredients
     * const ingredient = await prisma.ingredient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ingredients and only return the `id`
     * const ingredientWithIdOnly = await prisma.ingredient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IngredientCreateManyAndReturnArgs>(args?: SelectSubset<T, IngredientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ingredient.
     * @param {IngredientDeleteArgs} args - Arguments to delete one Ingredient.
     * @example
     * // Delete one Ingredient
     * const Ingredient = await prisma.ingredient.delete({
     *   where: {
     *     // ... filter to delete one Ingredient
     *   }
     * })
     * 
     */
    delete<T extends IngredientDeleteArgs>(args: SelectSubset<T, IngredientDeleteArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ingredient.
     * @param {IngredientUpdateArgs} args - Arguments to update one Ingredient.
     * @example
     * // Update one Ingredient
     * const ingredient = await prisma.ingredient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IngredientUpdateArgs>(args: SelectSubset<T, IngredientUpdateArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ingredients.
     * @param {IngredientDeleteManyArgs} args - Arguments to filter Ingredients to delete.
     * @example
     * // Delete a few Ingredients
     * const { count } = await prisma.ingredient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IngredientDeleteManyArgs>(args?: SelectSubset<T, IngredientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ingredients
     * const ingredient = await prisma.ingredient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IngredientUpdateManyArgs>(args: SelectSubset<T, IngredientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingredients and returns the data updated in the database.
     * @param {IngredientUpdateManyAndReturnArgs} args - Arguments to update many Ingredients.
     * @example
     * // Update many Ingredients
     * const ingredient = await prisma.ingredient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ingredients and only return the `id`
     * const ingredientWithIdOnly = await prisma.ingredient.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IngredientUpdateManyAndReturnArgs>(args: SelectSubset<T, IngredientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ingredient.
     * @param {IngredientUpsertArgs} args - Arguments to update or create a Ingredient.
     * @example
     * // Update or create a Ingredient
     * const ingredient = await prisma.ingredient.upsert({
     *   create: {
     *     // ... data to create a Ingredient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ingredient we want to update
     *   }
     * })
     */
    upsert<T extends IngredientUpsertArgs>(args: SelectSubset<T, IngredientUpsertArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientCountArgs} args - Arguments to filter Ingredients to count.
     * @example
     * // Count the number of Ingredients
     * const count = await prisma.ingredient.count({
     *   where: {
     *     // ... the filter for the Ingredients we want to count
     *   }
     * })
    **/
    count<T extends IngredientCountArgs>(
      args?: Subset<T, IngredientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IngredientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ingredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IngredientAggregateArgs>(args: Subset<T, IngredientAggregateArgs>): Prisma.PrismaPromise<GetIngredientAggregateType<T>>

    /**
     * Group by Ingredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IngredientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IngredientGroupByArgs['orderBy'] }
        : { orderBy?: IngredientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IngredientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIngredientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ingredient model
   */
  readonly fields: IngredientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ingredient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IngredientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recipes<T extends Ingredient$recipesArgs<ExtArgs> = {}>(args?: Subset<T, Ingredient$recipesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ingredient model
   */
  interface IngredientFieldRefs {
    readonly id: FieldRef<"Ingredient", 'String'>
    readonly name: FieldRef<"Ingredient", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Ingredient findUnique
   */
  export type IngredientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where: IngredientWhereUniqueInput
  }

  /**
   * Ingredient findUniqueOrThrow
   */
  export type IngredientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where: IngredientWhereUniqueInput
  }

  /**
   * Ingredient findFirst
   */
  export type IngredientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ingredients.
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ingredients.
     */
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }

  /**
   * Ingredient findFirstOrThrow
   */
  export type IngredientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ingredients.
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ingredients.
     */
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }

  /**
   * Ingredient findMany
   */
  export type IngredientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredients to fetch.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ingredients.
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }

  /**
   * Ingredient create
   */
  export type IngredientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * The data needed to create a Ingredient.
     */
    data: XOR<IngredientCreateInput, IngredientUncheckedCreateInput>
  }

  /**
   * Ingredient createMany
   */
  export type IngredientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ingredients.
     */
    data: IngredientCreateManyInput | IngredientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ingredient createManyAndReturn
   */
  export type IngredientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * The data used to create many Ingredients.
     */
    data: IngredientCreateManyInput | IngredientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ingredient update
   */
  export type IngredientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * The data needed to update a Ingredient.
     */
    data: XOR<IngredientUpdateInput, IngredientUncheckedUpdateInput>
    /**
     * Choose, which Ingredient to update.
     */
    where: IngredientWhereUniqueInput
  }

  /**
   * Ingredient updateMany
   */
  export type IngredientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ingredients.
     */
    data: XOR<IngredientUpdateManyMutationInput, IngredientUncheckedUpdateManyInput>
    /**
     * Filter which Ingredients to update
     */
    where?: IngredientWhereInput
    /**
     * Limit how many Ingredients to update.
     */
    limit?: number
  }

  /**
   * Ingredient updateManyAndReturn
   */
  export type IngredientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * The data used to update Ingredients.
     */
    data: XOR<IngredientUpdateManyMutationInput, IngredientUncheckedUpdateManyInput>
    /**
     * Filter which Ingredients to update
     */
    where?: IngredientWhereInput
    /**
     * Limit how many Ingredients to update.
     */
    limit?: number
  }

  /**
   * Ingredient upsert
   */
  export type IngredientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * The filter to search for the Ingredient to update in case it exists.
     */
    where: IngredientWhereUniqueInput
    /**
     * In case the Ingredient found by the `where` argument doesn't exist, create a new Ingredient with this data.
     */
    create: XOR<IngredientCreateInput, IngredientUncheckedCreateInput>
    /**
     * In case the Ingredient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IngredientUpdateInput, IngredientUncheckedUpdateInput>
  }

  /**
   * Ingredient delete
   */
  export type IngredientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter which Ingredient to delete.
     */
    where: IngredientWhereUniqueInput
  }

  /**
   * Ingredient deleteMany
   */
  export type IngredientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ingredients to delete
     */
    where?: IngredientWhereInput
    /**
     * Limit how many Ingredients to delete.
     */
    limit?: number
  }

  /**
   * Ingredient.recipes
   */
  export type Ingredient$recipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeIngredient
     */
    omit?: RecipeIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientInclude<ExtArgs> | null
    where?: RecipeIngredientWhereInput
    orderBy?: RecipeIngredientOrderByWithRelationInput | RecipeIngredientOrderByWithRelationInput[]
    cursor?: RecipeIngredientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecipeIngredientScalarFieldEnum | RecipeIngredientScalarFieldEnum[]
  }

  /**
   * Ingredient without action
   */
  export type IngredientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
  }


  /**
   * Model RecipeIngredient
   */

  export type AggregateRecipeIngredient = {
    _count: RecipeIngredientCountAggregateOutputType | null
    _min: RecipeIngredientMinAggregateOutputType | null
    _max: RecipeIngredientMaxAggregateOutputType | null
  }

  export type RecipeIngredientMinAggregateOutputType = {
    id: string | null
    recipeId: string | null
    ingredientId: string | null
    quantity: string | null
  }

  export type RecipeIngredientMaxAggregateOutputType = {
    id: string | null
    recipeId: string | null
    ingredientId: string | null
    quantity: string | null
  }

  export type RecipeIngredientCountAggregateOutputType = {
    id: number
    recipeId: number
    ingredientId: number
    quantity: number
    _all: number
  }


  export type RecipeIngredientMinAggregateInputType = {
    id?: true
    recipeId?: true
    ingredientId?: true
    quantity?: true
  }

  export type RecipeIngredientMaxAggregateInputType = {
    id?: true
    recipeId?: true
    ingredientId?: true
    quantity?: true
  }

  export type RecipeIngredientCountAggregateInputType = {
    id?: true
    recipeId?: true
    ingredientId?: true
    quantity?: true
    _all?: true
  }

  export type RecipeIngredientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecipeIngredient to aggregate.
     */
    where?: RecipeIngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeIngredients to fetch.
     */
    orderBy?: RecipeIngredientOrderByWithRelationInput | RecipeIngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecipeIngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeIngredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RecipeIngredients
    **/
    _count?: true | RecipeIngredientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecipeIngredientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecipeIngredientMaxAggregateInputType
  }

  export type GetRecipeIngredientAggregateType<T extends RecipeIngredientAggregateArgs> = {
        [P in keyof T & keyof AggregateRecipeIngredient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecipeIngredient[P]>
      : GetScalarType<T[P], AggregateRecipeIngredient[P]>
  }




  export type RecipeIngredientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeIngredientWhereInput
    orderBy?: RecipeIngredientOrderByWithAggregationInput | RecipeIngredientOrderByWithAggregationInput[]
    by: RecipeIngredientScalarFieldEnum[] | RecipeIngredientScalarFieldEnum
    having?: RecipeIngredientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecipeIngredientCountAggregateInputType | true
    _min?: RecipeIngredientMinAggregateInputType
    _max?: RecipeIngredientMaxAggregateInputType
  }

  export type RecipeIngredientGroupByOutputType = {
    id: string
    recipeId: string
    ingredientId: string
    quantity: string
    _count: RecipeIngredientCountAggregateOutputType | null
    _min: RecipeIngredientMinAggregateOutputType | null
    _max: RecipeIngredientMaxAggregateOutputType | null
  }

  type GetRecipeIngredientGroupByPayload<T extends RecipeIngredientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecipeIngredientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecipeIngredientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecipeIngredientGroupByOutputType[P]>
            : GetScalarType<T[P], RecipeIngredientGroupByOutputType[P]>
        }
      >
    >


  export type RecipeIngredientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recipeId?: boolean
    ingredientId?: boolean
    quantity?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipeIngredient"]>

  export type RecipeIngredientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recipeId?: boolean
    ingredientId?: boolean
    quantity?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipeIngredient"]>

  export type RecipeIngredientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recipeId?: boolean
    ingredientId?: boolean
    quantity?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipeIngredient"]>

  export type RecipeIngredientSelectScalar = {
    id?: boolean
    recipeId?: boolean
    ingredientId?: boolean
    quantity?: boolean
  }

  export type RecipeIngredientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "recipeId" | "ingredientId" | "quantity", ExtArgs["result"]["recipeIngredient"]>
  export type RecipeIngredientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
  }
  export type RecipeIngredientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
  }
  export type RecipeIngredientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
  }

  export type $RecipeIngredientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RecipeIngredient"
    objects: {
      recipe: Prisma.$RecipePayload<ExtArgs>
      ingredient: Prisma.$IngredientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      recipeId: string
      ingredientId: string
      quantity: string
    }, ExtArgs["result"]["recipeIngredient"]>
    composites: {}
  }

  type RecipeIngredientGetPayload<S extends boolean | null | undefined | RecipeIngredientDefaultArgs> = $Result.GetResult<Prisma.$RecipeIngredientPayload, S>

  type RecipeIngredientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecipeIngredientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecipeIngredientCountAggregateInputType | true
    }

  export interface RecipeIngredientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RecipeIngredient'], meta: { name: 'RecipeIngredient' } }
    /**
     * Find zero or one RecipeIngredient that matches the filter.
     * @param {RecipeIngredientFindUniqueArgs} args - Arguments to find a RecipeIngredient
     * @example
     * // Get one RecipeIngredient
     * const recipeIngredient = await prisma.recipeIngredient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecipeIngredientFindUniqueArgs>(args: SelectSubset<T, RecipeIngredientFindUniqueArgs<ExtArgs>>): Prisma__RecipeIngredientClient<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RecipeIngredient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecipeIngredientFindUniqueOrThrowArgs} args - Arguments to find a RecipeIngredient
     * @example
     * // Get one RecipeIngredient
     * const recipeIngredient = await prisma.recipeIngredient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecipeIngredientFindUniqueOrThrowArgs>(args: SelectSubset<T, RecipeIngredientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecipeIngredientClient<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecipeIngredient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeIngredientFindFirstArgs} args - Arguments to find a RecipeIngredient
     * @example
     * // Get one RecipeIngredient
     * const recipeIngredient = await prisma.recipeIngredient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecipeIngredientFindFirstArgs>(args?: SelectSubset<T, RecipeIngredientFindFirstArgs<ExtArgs>>): Prisma__RecipeIngredientClient<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecipeIngredient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeIngredientFindFirstOrThrowArgs} args - Arguments to find a RecipeIngredient
     * @example
     * // Get one RecipeIngredient
     * const recipeIngredient = await prisma.recipeIngredient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecipeIngredientFindFirstOrThrowArgs>(args?: SelectSubset<T, RecipeIngredientFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecipeIngredientClient<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RecipeIngredients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeIngredientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RecipeIngredients
     * const recipeIngredients = await prisma.recipeIngredient.findMany()
     * 
     * // Get first 10 RecipeIngredients
     * const recipeIngredients = await prisma.recipeIngredient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recipeIngredientWithIdOnly = await prisma.recipeIngredient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecipeIngredientFindManyArgs>(args?: SelectSubset<T, RecipeIngredientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RecipeIngredient.
     * @param {RecipeIngredientCreateArgs} args - Arguments to create a RecipeIngredient.
     * @example
     * // Create one RecipeIngredient
     * const RecipeIngredient = await prisma.recipeIngredient.create({
     *   data: {
     *     // ... data to create a RecipeIngredient
     *   }
     * })
     * 
     */
    create<T extends RecipeIngredientCreateArgs>(args: SelectSubset<T, RecipeIngredientCreateArgs<ExtArgs>>): Prisma__RecipeIngredientClient<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RecipeIngredients.
     * @param {RecipeIngredientCreateManyArgs} args - Arguments to create many RecipeIngredients.
     * @example
     * // Create many RecipeIngredients
     * const recipeIngredient = await prisma.recipeIngredient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecipeIngredientCreateManyArgs>(args?: SelectSubset<T, RecipeIngredientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RecipeIngredients and returns the data saved in the database.
     * @param {RecipeIngredientCreateManyAndReturnArgs} args - Arguments to create many RecipeIngredients.
     * @example
     * // Create many RecipeIngredients
     * const recipeIngredient = await prisma.recipeIngredient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RecipeIngredients and only return the `id`
     * const recipeIngredientWithIdOnly = await prisma.recipeIngredient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecipeIngredientCreateManyAndReturnArgs>(args?: SelectSubset<T, RecipeIngredientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RecipeIngredient.
     * @param {RecipeIngredientDeleteArgs} args - Arguments to delete one RecipeIngredient.
     * @example
     * // Delete one RecipeIngredient
     * const RecipeIngredient = await prisma.recipeIngredient.delete({
     *   where: {
     *     // ... filter to delete one RecipeIngredient
     *   }
     * })
     * 
     */
    delete<T extends RecipeIngredientDeleteArgs>(args: SelectSubset<T, RecipeIngredientDeleteArgs<ExtArgs>>): Prisma__RecipeIngredientClient<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RecipeIngredient.
     * @param {RecipeIngredientUpdateArgs} args - Arguments to update one RecipeIngredient.
     * @example
     * // Update one RecipeIngredient
     * const recipeIngredient = await prisma.recipeIngredient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecipeIngredientUpdateArgs>(args: SelectSubset<T, RecipeIngredientUpdateArgs<ExtArgs>>): Prisma__RecipeIngredientClient<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RecipeIngredients.
     * @param {RecipeIngredientDeleteManyArgs} args - Arguments to filter RecipeIngredients to delete.
     * @example
     * // Delete a few RecipeIngredients
     * const { count } = await prisma.recipeIngredient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecipeIngredientDeleteManyArgs>(args?: SelectSubset<T, RecipeIngredientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecipeIngredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeIngredientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RecipeIngredients
     * const recipeIngredient = await prisma.recipeIngredient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecipeIngredientUpdateManyArgs>(args: SelectSubset<T, RecipeIngredientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecipeIngredients and returns the data updated in the database.
     * @param {RecipeIngredientUpdateManyAndReturnArgs} args - Arguments to update many RecipeIngredients.
     * @example
     * // Update many RecipeIngredients
     * const recipeIngredient = await prisma.recipeIngredient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RecipeIngredients and only return the `id`
     * const recipeIngredientWithIdOnly = await prisma.recipeIngredient.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RecipeIngredientUpdateManyAndReturnArgs>(args: SelectSubset<T, RecipeIngredientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RecipeIngredient.
     * @param {RecipeIngredientUpsertArgs} args - Arguments to update or create a RecipeIngredient.
     * @example
     * // Update or create a RecipeIngredient
     * const recipeIngredient = await prisma.recipeIngredient.upsert({
     *   create: {
     *     // ... data to create a RecipeIngredient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RecipeIngredient we want to update
     *   }
     * })
     */
    upsert<T extends RecipeIngredientUpsertArgs>(args: SelectSubset<T, RecipeIngredientUpsertArgs<ExtArgs>>): Prisma__RecipeIngredientClient<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RecipeIngredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeIngredientCountArgs} args - Arguments to filter RecipeIngredients to count.
     * @example
     * // Count the number of RecipeIngredients
     * const count = await prisma.recipeIngredient.count({
     *   where: {
     *     // ... the filter for the RecipeIngredients we want to count
     *   }
     * })
    **/
    count<T extends RecipeIngredientCountArgs>(
      args?: Subset<T, RecipeIngredientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecipeIngredientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RecipeIngredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeIngredientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecipeIngredientAggregateArgs>(args: Subset<T, RecipeIngredientAggregateArgs>): Prisma.PrismaPromise<GetRecipeIngredientAggregateType<T>>

    /**
     * Group by RecipeIngredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeIngredientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RecipeIngredientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecipeIngredientGroupByArgs['orderBy'] }
        : { orderBy?: RecipeIngredientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RecipeIngredientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecipeIngredientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RecipeIngredient model
   */
  readonly fields: RecipeIngredientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RecipeIngredient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecipeIngredientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recipe<T extends RecipeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RecipeDefaultArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ingredient<T extends IngredientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IngredientDefaultArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RecipeIngredient model
   */
  interface RecipeIngredientFieldRefs {
    readonly id: FieldRef<"RecipeIngredient", 'String'>
    readonly recipeId: FieldRef<"RecipeIngredient", 'String'>
    readonly ingredientId: FieldRef<"RecipeIngredient", 'String'>
    readonly quantity: FieldRef<"RecipeIngredient", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RecipeIngredient findUnique
   */
  export type RecipeIngredientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeIngredient
     */
    omit?: RecipeIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientInclude<ExtArgs> | null
    /**
     * Filter, which RecipeIngredient to fetch.
     */
    where: RecipeIngredientWhereUniqueInput
  }

  /**
   * RecipeIngredient findUniqueOrThrow
   */
  export type RecipeIngredientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeIngredient
     */
    omit?: RecipeIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientInclude<ExtArgs> | null
    /**
     * Filter, which RecipeIngredient to fetch.
     */
    where: RecipeIngredientWhereUniqueInput
  }

  /**
   * RecipeIngredient findFirst
   */
  export type RecipeIngredientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeIngredient
     */
    omit?: RecipeIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientInclude<ExtArgs> | null
    /**
     * Filter, which RecipeIngredient to fetch.
     */
    where?: RecipeIngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeIngredients to fetch.
     */
    orderBy?: RecipeIngredientOrderByWithRelationInput | RecipeIngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecipeIngredients.
     */
    cursor?: RecipeIngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeIngredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecipeIngredients.
     */
    distinct?: RecipeIngredientScalarFieldEnum | RecipeIngredientScalarFieldEnum[]
  }

  /**
   * RecipeIngredient findFirstOrThrow
   */
  export type RecipeIngredientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeIngredient
     */
    omit?: RecipeIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientInclude<ExtArgs> | null
    /**
     * Filter, which RecipeIngredient to fetch.
     */
    where?: RecipeIngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeIngredients to fetch.
     */
    orderBy?: RecipeIngredientOrderByWithRelationInput | RecipeIngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecipeIngredients.
     */
    cursor?: RecipeIngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeIngredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecipeIngredients.
     */
    distinct?: RecipeIngredientScalarFieldEnum | RecipeIngredientScalarFieldEnum[]
  }

  /**
   * RecipeIngredient findMany
   */
  export type RecipeIngredientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeIngredient
     */
    omit?: RecipeIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientInclude<ExtArgs> | null
    /**
     * Filter, which RecipeIngredients to fetch.
     */
    where?: RecipeIngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeIngredients to fetch.
     */
    orderBy?: RecipeIngredientOrderByWithRelationInput | RecipeIngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RecipeIngredients.
     */
    cursor?: RecipeIngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeIngredients.
     */
    skip?: number
    distinct?: RecipeIngredientScalarFieldEnum | RecipeIngredientScalarFieldEnum[]
  }

  /**
   * RecipeIngredient create
   */
  export type RecipeIngredientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeIngredient
     */
    omit?: RecipeIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientInclude<ExtArgs> | null
    /**
     * The data needed to create a RecipeIngredient.
     */
    data: XOR<RecipeIngredientCreateInput, RecipeIngredientUncheckedCreateInput>
  }

  /**
   * RecipeIngredient createMany
   */
  export type RecipeIngredientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RecipeIngredients.
     */
    data: RecipeIngredientCreateManyInput | RecipeIngredientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RecipeIngredient createManyAndReturn
   */
  export type RecipeIngredientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeIngredient
     */
    omit?: RecipeIngredientOmit<ExtArgs> | null
    /**
     * The data used to create many RecipeIngredients.
     */
    data: RecipeIngredientCreateManyInput | RecipeIngredientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecipeIngredient update
   */
  export type RecipeIngredientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeIngredient
     */
    omit?: RecipeIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientInclude<ExtArgs> | null
    /**
     * The data needed to update a RecipeIngredient.
     */
    data: XOR<RecipeIngredientUpdateInput, RecipeIngredientUncheckedUpdateInput>
    /**
     * Choose, which RecipeIngredient to update.
     */
    where: RecipeIngredientWhereUniqueInput
  }

  /**
   * RecipeIngredient updateMany
   */
  export type RecipeIngredientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RecipeIngredients.
     */
    data: XOR<RecipeIngredientUpdateManyMutationInput, RecipeIngredientUncheckedUpdateManyInput>
    /**
     * Filter which RecipeIngredients to update
     */
    where?: RecipeIngredientWhereInput
    /**
     * Limit how many RecipeIngredients to update.
     */
    limit?: number
  }

  /**
   * RecipeIngredient updateManyAndReturn
   */
  export type RecipeIngredientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeIngredient
     */
    omit?: RecipeIngredientOmit<ExtArgs> | null
    /**
     * The data used to update RecipeIngredients.
     */
    data: XOR<RecipeIngredientUpdateManyMutationInput, RecipeIngredientUncheckedUpdateManyInput>
    /**
     * Filter which RecipeIngredients to update
     */
    where?: RecipeIngredientWhereInput
    /**
     * Limit how many RecipeIngredients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecipeIngredient upsert
   */
  export type RecipeIngredientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeIngredient
     */
    omit?: RecipeIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientInclude<ExtArgs> | null
    /**
     * The filter to search for the RecipeIngredient to update in case it exists.
     */
    where: RecipeIngredientWhereUniqueInput
    /**
     * In case the RecipeIngredient found by the `where` argument doesn't exist, create a new RecipeIngredient with this data.
     */
    create: XOR<RecipeIngredientCreateInput, RecipeIngredientUncheckedCreateInput>
    /**
     * In case the RecipeIngredient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecipeIngredientUpdateInput, RecipeIngredientUncheckedUpdateInput>
  }

  /**
   * RecipeIngredient delete
   */
  export type RecipeIngredientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeIngredient
     */
    omit?: RecipeIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientInclude<ExtArgs> | null
    /**
     * Filter which RecipeIngredient to delete.
     */
    where: RecipeIngredientWhereUniqueInput
  }

  /**
   * RecipeIngredient deleteMany
   */
  export type RecipeIngredientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecipeIngredients to delete
     */
    where?: RecipeIngredientWhereInput
    /**
     * Limit how many RecipeIngredients to delete.
     */
    limit?: number
  }

  /**
   * RecipeIngredient without action
   */
  export type RecipeIngredientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeIngredient
     */
    omit?: RecipeIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientInclude<ExtArgs> | null
  }


  /**
   * Model Ustensil
   */

  export type AggregateUstensil = {
    _count: UstensilCountAggregateOutputType | null
    _min: UstensilMinAggregateOutputType | null
    _max: UstensilMaxAggregateOutputType | null
  }

  export type UstensilMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type UstensilMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type UstensilCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type UstensilMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type UstensilMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type UstensilCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type UstensilAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ustensil to aggregate.
     */
    where?: UstensilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ustensils to fetch.
     */
    orderBy?: UstensilOrderByWithRelationInput | UstensilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UstensilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ustensils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ustensils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ustensils
    **/
    _count?: true | UstensilCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UstensilMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UstensilMaxAggregateInputType
  }

  export type GetUstensilAggregateType<T extends UstensilAggregateArgs> = {
        [P in keyof T & keyof AggregateUstensil]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUstensil[P]>
      : GetScalarType<T[P], AggregateUstensil[P]>
  }




  export type UstensilGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UstensilWhereInput
    orderBy?: UstensilOrderByWithAggregationInput | UstensilOrderByWithAggregationInput[]
    by: UstensilScalarFieldEnum[] | UstensilScalarFieldEnum
    having?: UstensilScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UstensilCountAggregateInputType | true
    _min?: UstensilMinAggregateInputType
    _max?: UstensilMaxAggregateInputType
  }

  export type UstensilGroupByOutputType = {
    id: string
    name: string
    _count: UstensilCountAggregateOutputType | null
    _min: UstensilMinAggregateOutputType | null
    _max: UstensilMaxAggregateOutputType | null
  }

  type GetUstensilGroupByPayload<T extends UstensilGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UstensilGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UstensilGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UstensilGroupByOutputType[P]>
            : GetScalarType<T[P], UstensilGroupByOutputType[P]>
        }
      >
    >


  export type UstensilSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    recipes?: boolean | Ustensil$recipesArgs<ExtArgs>
    _count?: boolean | UstensilCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ustensil"]>

  export type UstensilSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["ustensil"]>

  export type UstensilSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["ustensil"]>

  export type UstensilSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type UstensilOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["ustensil"]>
  export type UstensilInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipes?: boolean | Ustensil$recipesArgs<ExtArgs>
    _count?: boolean | UstensilCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UstensilIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UstensilIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UstensilPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ustensil"
    objects: {
      recipes: Prisma.$RecipeUstensilPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["ustensil"]>
    composites: {}
  }

  type UstensilGetPayload<S extends boolean | null | undefined | UstensilDefaultArgs> = $Result.GetResult<Prisma.$UstensilPayload, S>

  type UstensilCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UstensilFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UstensilCountAggregateInputType | true
    }

  export interface UstensilDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ustensil'], meta: { name: 'Ustensil' } }
    /**
     * Find zero or one Ustensil that matches the filter.
     * @param {UstensilFindUniqueArgs} args - Arguments to find a Ustensil
     * @example
     * // Get one Ustensil
     * const ustensil = await prisma.ustensil.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UstensilFindUniqueArgs>(args: SelectSubset<T, UstensilFindUniqueArgs<ExtArgs>>): Prisma__UstensilClient<$Result.GetResult<Prisma.$UstensilPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ustensil that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UstensilFindUniqueOrThrowArgs} args - Arguments to find a Ustensil
     * @example
     * // Get one Ustensil
     * const ustensil = await prisma.ustensil.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UstensilFindUniqueOrThrowArgs>(args: SelectSubset<T, UstensilFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UstensilClient<$Result.GetResult<Prisma.$UstensilPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ustensil that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UstensilFindFirstArgs} args - Arguments to find a Ustensil
     * @example
     * // Get one Ustensil
     * const ustensil = await prisma.ustensil.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UstensilFindFirstArgs>(args?: SelectSubset<T, UstensilFindFirstArgs<ExtArgs>>): Prisma__UstensilClient<$Result.GetResult<Prisma.$UstensilPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ustensil that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UstensilFindFirstOrThrowArgs} args - Arguments to find a Ustensil
     * @example
     * // Get one Ustensil
     * const ustensil = await prisma.ustensil.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UstensilFindFirstOrThrowArgs>(args?: SelectSubset<T, UstensilFindFirstOrThrowArgs<ExtArgs>>): Prisma__UstensilClient<$Result.GetResult<Prisma.$UstensilPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ustensils that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UstensilFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ustensils
     * const ustensils = await prisma.ustensil.findMany()
     * 
     * // Get first 10 Ustensils
     * const ustensils = await prisma.ustensil.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ustensilWithIdOnly = await prisma.ustensil.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UstensilFindManyArgs>(args?: SelectSubset<T, UstensilFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UstensilPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ustensil.
     * @param {UstensilCreateArgs} args - Arguments to create a Ustensil.
     * @example
     * // Create one Ustensil
     * const Ustensil = await prisma.ustensil.create({
     *   data: {
     *     // ... data to create a Ustensil
     *   }
     * })
     * 
     */
    create<T extends UstensilCreateArgs>(args: SelectSubset<T, UstensilCreateArgs<ExtArgs>>): Prisma__UstensilClient<$Result.GetResult<Prisma.$UstensilPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ustensils.
     * @param {UstensilCreateManyArgs} args - Arguments to create many Ustensils.
     * @example
     * // Create many Ustensils
     * const ustensil = await prisma.ustensil.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UstensilCreateManyArgs>(args?: SelectSubset<T, UstensilCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ustensils and returns the data saved in the database.
     * @param {UstensilCreateManyAndReturnArgs} args - Arguments to create many Ustensils.
     * @example
     * // Create many Ustensils
     * const ustensil = await prisma.ustensil.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ustensils and only return the `id`
     * const ustensilWithIdOnly = await prisma.ustensil.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UstensilCreateManyAndReturnArgs>(args?: SelectSubset<T, UstensilCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UstensilPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ustensil.
     * @param {UstensilDeleteArgs} args - Arguments to delete one Ustensil.
     * @example
     * // Delete one Ustensil
     * const Ustensil = await prisma.ustensil.delete({
     *   where: {
     *     // ... filter to delete one Ustensil
     *   }
     * })
     * 
     */
    delete<T extends UstensilDeleteArgs>(args: SelectSubset<T, UstensilDeleteArgs<ExtArgs>>): Prisma__UstensilClient<$Result.GetResult<Prisma.$UstensilPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ustensil.
     * @param {UstensilUpdateArgs} args - Arguments to update one Ustensil.
     * @example
     * // Update one Ustensil
     * const ustensil = await prisma.ustensil.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UstensilUpdateArgs>(args: SelectSubset<T, UstensilUpdateArgs<ExtArgs>>): Prisma__UstensilClient<$Result.GetResult<Prisma.$UstensilPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ustensils.
     * @param {UstensilDeleteManyArgs} args - Arguments to filter Ustensils to delete.
     * @example
     * // Delete a few Ustensils
     * const { count } = await prisma.ustensil.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UstensilDeleteManyArgs>(args?: SelectSubset<T, UstensilDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ustensils.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UstensilUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ustensils
     * const ustensil = await prisma.ustensil.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UstensilUpdateManyArgs>(args: SelectSubset<T, UstensilUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ustensils and returns the data updated in the database.
     * @param {UstensilUpdateManyAndReturnArgs} args - Arguments to update many Ustensils.
     * @example
     * // Update many Ustensils
     * const ustensil = await prisma.ustensil.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ustensils and only return the `id`
     * const ustensilWithIdOnly = await prisma.ustensil.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UstensilUpdateManyAndReturnArgs>(args: SelectSubset<T, UstensilUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UstensilPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ustensil.
     * @param {UstensilUpsertArgs} args - Arguments to update or create a Ustensil.
     * @example
     * // Update or create a Ustensil
     * const ustensil = await prisma.ustensil.upsert({
     *   create: {
     *     // ... data to create a Ustensil
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ustensil we want to update
     *   }
     * })
     */
    upsert<T extends UstensilUpsertArgs>(args: SelectSubset<T, UstensilUpsertArgs<ExtArgs>>): Prisma__UstensilClient<$Result.GetResult<Prisma.$UstensilPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ustensils.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UstensilCountArgs} args - Arguments to filter Ustensils to count.
     * @example
     * // Count the number of Ustensils
     * const count = await prisma.ustensil.count({
     *   where: {
     *     // ... the filter for the Ustensils we want to count
     *   }
     * })
    **/
    count<T extends UstensilCountArgs>(
      args?: Subset<T, UstensilCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UstensilCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ustensil.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UstensilAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UstensilAggregateArgs>(args: Subset<T, UstensilAggregateArgs>): Prisma.PrismaPromise<GetUstensilAggregateType<T>>

    /**
     * Group by Ustensil.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UstensilGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UstensilGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UstensilGroupByArgs['orderBy'] }
        : { orderBy?: UstensilGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UstensilGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUstensilGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ustensil model
   */
  readonly fields: UstensilFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ustensil.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UstensilClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recipes<T extends Ustensil$recipesArgs<ExtArgs> = {}>(args?: Subset<T, Ustensil$recipesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeUstensilPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ustensil model
   */
  interface UstensilFieldRefs {
    readonly id: FieldRef<"Ustensil", 'String'>
    readonly name: FieldRef<"Ustensil", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Ustensil findUnique
   */
  export type UstensilFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ustensil
     */
    select?: UstensilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ustensil
     */
    omit?: UstensilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UstensilInclude<ExtArgs> | null
    /**
     * Filter, which Ustensil to fetch.
     */
    where: UstensilWhereUniqueInput
  }

  /**
   * Ustensil findUniqueOrThrow
   */
  export type UstensilFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ustensil
     */
    select?: UstensilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ustensil
     */
    omit?: UstensilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UstensilInclude<ExtArgs> | null
    /**
     * Filter, which Ustensil to fetch.
     */
    where: UstensilWhereUniqueInput
  }

  /**
   * Ustensil findFirst
   */
  export type UstensilFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ustensil
     */
    select?: UstensilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ustensil
     */
    omit?: UstensilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UstensilInclude<ExtArgs> | null
    /**
     * Filter, which Ustensil to fetch.
     */
    where?: UstensilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ustensils to fetch.
     */
    orderBy?: UstensilOrderByWithRelationInput | UstensilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ustensils.
     */
    cursor?: UstensilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ustensils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ustensils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ustensils.
     */
    distinct?: UstensilScalarFieldEnum | UstensilScalarFieldEnum[]
  }

  /**
   * Ustensil findFirstOrThrow
   */
  export type UstensilFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ustensil
     */
    select?: UstensilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ustensil
     */
    omit?: UstensilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UstensilInclude<ExtArgs> | null
    /**
     * Filter, which Ustensil to fetch.
     */
    where?: UstensilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ustensils to fetch.
     */
    orderBy?: UstensilOrderByWithRelationInput | UstensilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ustensils.
     */
    cursor?: UstensilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ustensils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ustensils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ustensils.
     */
    distinct?: UstensilScalarFieldEnum | UstensilScalarFieldEnum[]
  }

  /**
   * Ustensil findMany
   */
  export type UstensilFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ustensil
     */
    select?: UstensilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ustensil
     */
    omit?: UstensilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UstensilInclude<ExtArgs> | null
    /**
     * Filter, which Ustensils to fetch.
     */
    where?: UstensilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ustensils to fetch.
     */
    orderBy?: UstensilOrderByWithRelationInput | UstensilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ustensils.
     */
    cursor?: UstensilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ustensils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ustensils.
     */
    skip?: number
    distinct?: UstensilScalarFieldEnum | UstensilScalarFieldEnum[]
  }

  /**
   * Ustensil create
   */
  export type UstensilCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ustensil
     */
    select?: UstensilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ustensil
     */
    omit?: UstensilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UstensilInclude<ExtArgs> | null
    /**
     * The data needed to create a Ustensil.
     */
    data: XOR<UstensilCreateInput, UstensilUncheckedCreateInput>
  }

  /**
   * Ustensil createMany
   */
  export type UstensilCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ustensils.
     */
    data: UstensilCreateManyInput | UstensilCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ustensil createManyAndReturn
   */
  export type UstensilCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ustensil
     */
    select?: UstensilSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ustensil
     */
    omit?: UstensilOmit<ExtArgs> | null
    /**
     * The data used to create many Ustensils.
     */
    data: UstensilCreateManyInput | UstensilCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ustensil update
   */
  export type UstensilUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ustensil
     */
    select?: UstensilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ustensil
     */
    omit?: UstensilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UstensilInclude<ExtArgs> | null
    /**
     * The data needed to update a Ustensil.
     */
    data: XOR<UstensilUpdateInput, UstensilUncheckedUpdateInput>
    /**
     * Choose, which Ustensil to update.
     */
    where: UstensilWhereUniqueInput
  }

  /**
   * Ustensil updateMany
   */
  export type UstensilUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ustensils.
     */
    data: XOR<UstensilUpdateManyMutationInput, UstensilUncheckedUpdateManyInput>
    /**
     * Filter which Ustensils to update
     */
    where?: UstensilWhereInput
    /**
     * Limit how many Ustensils to update.
     */
    limit?: number
  }

  /**
   * Ustensil updateManyAndReturn
   */
  export type UstensilUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ustensil
     */
    select?: UstensilSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ustensil
     */
    omit?: UstensilOmit<ExtArgs> | null
    /**
     * The data used to update Ustensils.
     */
    data: XOR<UstensilUpdateManyMutationInput, UstensilUncheckedUpdateManyInput>
    /**
     * Filter which Ustensils to update
     */
    where?: UstensilWhereInput
    /**
     * Limit how many Ustensils to update.
     */
    limit?: number
  }

  /**
   * Ustensil upsert
   */
  export type UstensilUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ustensil
     */
    select?: UstensilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ustensil
     */
    omit?: UstensilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UstensilInclude<ExtArgs> | null
    /**
     * The filter to search for the Ustensil to update in case it exists.
     */
    where: UstensilWhereUniqueInput
    /**
     * In case the Ustensil found by the `where` argument doesn't exist, create a new Ustensil with this data.
     */
    create: XOR<UstensilCreateInput, UstensilUncheckedCreateInput>
    /**
     * In case the Ustensil was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UstensilUpdateInput, UstensilUncheckedUpdateInput>
  }

  /**
   * Ustensil delete
   */
  export type UstensilDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ustensil
     */
    select?: UstensilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ustensil
     */
    omit?: UstensilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UstensilInclude<ExtArgs> | null
    /**
     * Filter which Ustensil to delete.
     */
    where: UstensilWhereUniqueInput
  }

  /**
   * Ustensil deleteMany
   */
  export type UstensilDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ustensils to delete
     */
    where?: UstensilWhereInput
    /**
     * Limit how many Ustensils to delete.
     */
    limit?: number
  }

  /**
   * Ustensil.recipes
   */
  export type Ustensil$recipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeUstensil
     */
    select?: RecipeUstensilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeUstensil
     */
    omit?: RecipeUstensilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeUstensilInclude<ExtArgs> | null
    where?: RecipeUstensilWhereInput
    orderBy?: RecipeUstensilOrderByWithRelationInput | RecipeUstensilOrderByWithRelationInput[]
    cursor?: RecipeUstensilWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecipeUstensilScalarFieldEnum | RecipeUstensilScalarFieldEnum[]
  }

  /**
   * Ustensil without action
   */
  export type UstensilDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ustensil
     */
    select?: UstensilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ustensil
     */
    omit?: UstensilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UstensilInclude<ExtArgs> | null
  }


  /**
   * Model RecipeUstensil
   */

  export type AggregateRecipeUstensil = {
    _count: RecipeUstensilCountAggregateOutputType | null
    _min: RecipeUstensilMinAggregateOutputType | null
    _max: RecipeUstensilMaxAggregateOutputType | null
  }

  export type RecipeUstensilMinAggregateOutputType = {
    id: string | null
    recipeId: string | null
    ustensilId: string | null
  }

  export type RecipeUstensilMaxAggregateOutputType = {
    id: string | null
    recipeId: string | null
    ustensilId: string | null
  }

  export type RecipeUstensilCountAggregateOutputType = {
    id: number
    recipeId: number
    ustensilId: number
    _all: number
  }


  export type RecipeUstensilMinAggregateInputType = {
    id?: true
    recipeId?: true
    ustensilId?: true
  }

  export type RecipeUstensilMaxAggregateInputType = {
    id?: true
    recipeId?: true
    ustensilId?: true
  }

  export type RecipeUstensilCountAggregateInputType = {
    id?: true
    recipeId?: true
    ustensilId?: true
    _all?: true
  }

  export type RecipeUstensilAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecipeUstensil to aggregate.
     */
    where?: RecipeUstensilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeUstensils to fetch.
     */
    orderBy?: RecipeUstensilOrderByWithRelationInput | RecipeUstensilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecipeUstensilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeUstensils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeUstensils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RecipeUstensils
    **/
    _count?: true | RecipeUstensilCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecipeUstensilMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecipeUstensilMaxAggregateInputType
  }

  export type GetRecipeUstensilAggregateType<T extends RecipeUstensilAggregateArgs> = {
        [P in keyof T & keyof AggregateRecipeUstensil]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecipeUstensil[P]>
      : GetScalarType<T[P], AggregateRecipeUstensil[P]>
  }




  export type RecipeUstensilGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeUstensilWhereInput
    orderBy?: RecipeUstensilOrderByWithAggregationInput | RecipeUstensilOrderByWithAggregationInput[]
    by: RecipeUstensilScalarFieldEnum[] | RecipeUstensilScalarFieldEnum
    having?: RecipeUstensilScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecipeUstensilCountAggregateInputType | true
    _min?: RecipeUstensilMinAggregateInputType
    _max?: RecipeUstensilMaxAggregateInputType
  }

  export type RecipeUstensilGroupByOutputType = {
    id: string
    recipeId: string
    ustensilId: string
    _count: RecipeUstensilCountAggregateOutputType | null
    _min: RecipeUstensilMinAggregateOutputType | null
    _max: RecipeUstensilMaxAggregateOutputType | null
  }

  type GetRecipeUstensilGroupByPayload<T extends RecipeUstensilGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecipeUstensilGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecipeUstensilGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecipeUstensilGroupByOutputType[P]>
            : GetScalarType<T[P], RecipeUstensilGroupByOutputType[P]>
        }
      >
    >


  export type RecipeUstensilSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recipeId?: boolean
    ustensilId?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    ustensil?: boolean | UstensilDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipeUstensil"]>

  export type RecipeUstensilSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recipeId?: boolean
    ustensilId?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    ustensil?: boolean | UstensilDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipeUstensil"]>

  export type RecipeUstensilSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recipeId?: boolean
    ustensilId?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    ustensil?: boolean | UstensilDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipeUstensil"]>

  export type RecipeUstensilSelectScalar = {
    id?: boolean
    recipeId?: boolean
    ustensilId?: boolean
  }

  export type RecipeUstensilOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "recipeId" | "ustensilId", ExtArgs["result"]["recipeUstensil"]>
  export type RecipeUstensilInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    ustensil?: boolean | UstensilDefaultArgs<ExtArgs>
  }
  export type RecipeUstensilIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    ustensil?: boolean | UstensilDefaultArgs<ExtArgs>
  }
  export type RecipeUstensilIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    ustensil?: boolean | UstensilDefaultArgs<ExtArgs>
  }

  export type $RecipeUstensilPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RecipeUstensil"
    objects: {
      recipe: Prisma.$RecipePayload<ExtArgs>
      ustensil: Prisma.$UstensilPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      recipeId: string
      ustensilId: string
    }, ExtArgs["result"]["recipeUstensil"]>
    composites: {}
  }

  type RecipeUstensilGetPayload<S extends boolean | null | undefined | RecipeUstensilDefaultArgs> = $Result.GetResult<Prisma.$RecipeUstensilPayload, S>

  type RecipeUstensilCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecipeUstensilFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecipeUstensilCountAggregateInputType | true
    }

  export interface RecipeUstensilDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RecipeUstensil'], meta: { name: 'RecipeUstensil' } }
    /**
     * Find zero or one RecipeUstensil that matches the filter.
     * @param {RecipeUstensilFindUniqueArgs} args - Arguments to find a RecipeUstensil
     * @example
     * // Get one RecipeUstensil
     * const recipeUstensil = await prisma.recipeUstensil.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecipeUstensilFindUniqueArgs>(args: SelectSubset<T, RecipeUstensilFindUniqueArgs<ExtArgs>>): Prisma__RecipeUstensilClient<$Result.GetResult<Prisma.$RecipeUstensilPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RecipeUstensil that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecipeUstensilFindUniqueOrThrowArgs} args - Arguments to find a RecipeUstensil
     * @example
     * // Get one RecipeUstensil
     * const recipeUstensil = await prisma.recipeUstensil.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecipeUstensilFindUniqueOrThrowArgs>(args: SelectSubset<T, RecipeUstensilFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecipeUstensilClient<$Result.GetResult<Prisma.$RecipeUstensilPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecipeUstensil that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeUstensilFindFirstArgs} args - Arguments to find a RecipeUstensil
     * @example
     * // Get one RecipeUstensil
     * const recipeUstensil = await prisma.recipeUstensil.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecipeUstensilFindFirstArgs>(args?: SelectSubset<T, RecipeUstensilFindFirstArgs<ExtArgs>>): Prisma__RecipeUstensilClient<$Result.GetResult<Prisma.$RecipeUstensilPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecipeUstensil that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeUstensilFindFirstOrThrowArgs} args - Arguments to find a RecipeUstensil
     * @example
     * // Get one RecipeUstensil
     * const recipeUstensil = await prisma.recipeUstensil.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecipeUstensilFindFirstOrThrowArgs>(args?: SelectSubset<T, RecipeUstensilFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecipeUstensilClient<$Result.GetResult<Prisma.$RecipeUstensilPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RecipeUstensils that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeUstensilFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RecipeUstensils
     * const recipeUstensils = await prisma.recipeUstensil.findMany()
     * 
     * // Get first 10 RecipeUstensils
     * const recipeUstensils = await prisma.recipeUstensil.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recipeUstensilWithIdOnly = await prisma.recipeUstensil.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecipeUstensilFindManyArgs>(args?: SelectSubset<T, RecipeUstensilFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeUstensilPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RecipeUstensil.
     * @param {RecipeUstensilCreateArgs} args - Arguments to create a RecipeUstensil.
     * @example
     * // Create one RecipeUstensil
     * const RecipeUstensil = await prisma.recipeUstensil.create({
     *   data: {
     *     // ... data to create a RecipeUstensil
     *   }
     * })
     * 
     */
    create<T extends RecipeUstensilCreateArgs>(args: SelectSubset<T, RecipeUstensilCreateArgs<ExtArgs>>): Prisma__RecipeUstensilClient<$Result.GetResult<Prisma.$RecipeUstensilPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RecipeUstensils.
     * @param {RecipeUstensilCreateManyArgs} args - Arguments to create many RecipeUstensils.
     * @example
     * // Create many RecipeUstensils
     * const recipeUstensil = await prisma.recipeUstensil.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecipeUstensilCreateManyArgs>(args?: SelectSubset<T, RecipeUstensilCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RecipeUstensils and returns the data saved in the database.
     * @param {RecipeUstensilCreateManyAndReturnArgs} args - Arguments to create many RecipeUstensils.
     * @example
     * // Create many RecipeUstensils
     * const recipeUstensil = await prisma.recipeUstensil.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RecipeUstensils and only return the `id`
     * const recipeUstensilWithIdOnly = await prisma.recipeUstensil.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecipeUstensilCreateManyAndReturnArgs>(args?: SelectSubset<T, RecipeUstensilCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeUstensilPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RecipeUstensil.
     * @param {RecipeUstensilDeleteArgs} args - Arguments to delete one RecipeUstensil.
     * @example
     * // Delete one RecipeUstensil
     * const RecipeUstensil = await prisma.recipeUstensil.delete({
     *   where: {
     *     // ... filter to delete one RecipeUstensil
     *   }
     * })
     * 
     */
    delete<T extends RecipeUstensilDeleteArgs>(args: SelectSubset<T, RecipeUstensilDeleteArgs<ExtArgs>>): Prisma__RecipeUstensilClient<$Result.GetResult<Prisma.$RecipeUstensilPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RecipeUstensil.
     * @param {RecipeUstensilUpdateArgs} args - Arguments to update one RecipeUstensil.
     * @example
     * // Update one RecipeUstensil
     * const recipeUstensil = await prisma.recipeUstensil.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecipeUstensilUpdateArgs>(args: SelectSubset<T, RecipeUstensilUpdateArgs<ExtArgs>>): Prisma__RecipeUstensilClient<$Result.GetResult<Prisma.$RecipeUstensilPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RecipeUstensils.
     * @param {RecipeUstensilDeleteManyArgs} args - Arguments to filter RecipeUstensils to delete.
     * @example
     * // Delete a few RecipeUstensils
     * const { count } = await prisma.recipeUstensil.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecipeUstensilDeleteManyArgs>(args?: SelectSubset<T, RecipeUstensilDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecipeUstensils.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeUstensilUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RecipeUstensils
     * const recipeUstensil = await prisma.recipeUstensil.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecipeUstensilUpdateManyArgs>(args: SelectSubset<T, RecipeUstensilUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecipeUstensils and returns the data updated in the database.
     * @param {RecipeUstensilUpdateManyAndReturnArgs} args - Arguments to update many RecipeUstensils.
     * @example
     * // Update many RecipeUstensils
     * const recipeUstensil = await prisma.recipeUstensil.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RecipeUstensils and only return the `id`
     * const recipeUstensilWithIdOnly = await prisma.recipeUstensil.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RecipeUstensilUpdateManyAndReturnArgs>(args: SelectSubset<T, RecipeUstensilUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeUstensilPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RecipeUstensil.
     * @param {RecipeUstensilUpsertArgs} args - Arguments to update or create a RecipeUstensil.
     * @example
     * // Update or create a RecipeUstensil
     * const recipeUstensil = await prisma.recipeUstensil.upsert({
     *   create: {
     *     // ... data to create a RecipeUstensil
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RecipeUstensil we want to update
     *   }
     * })
     */
    upsert<T extends RecipeUstensilUpsertArgs>(args: SelectSubset<T, RecipeUstensilUpsertArgs<ExtArgs>>): Prisma__RecipeUstensilClient<$Result.GetResult<Prisma.$RecipeUstensilPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RecipeUstensils.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeUstensilCountArgs} args - Arguments to filter RecipeUstensils to count.
     * @example
     * // Count the number of RecipeUstensils
     * const count = await prisma.recipeUstensil.count({
     *   where: {
     *     // ... the filter for the RecipeUstensils we want to count
     *   }
     * })
    **/
    count<T extends RecipeUstensilCountArgs>(
      args?: Subset<T, RecipeUstensilCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecipeUstensilCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RecipeUstensil.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeUstensilAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecipeUstensilAggregateArgs>(args: Subset<T, RecipeUstensilAggregateArgs>): Prisma.PrismaPromise<GetRecipeUstensilAggregateType<T>>

    /**
     * Group by RecipeUstensil.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeUstensilGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RecipeUstensilGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecipeUstensilGroupByArgs['orderBy'] }
        : { orderBy?: RecipeUstensilGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RecipeUstensilGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecipeUstensilGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RecipeUstensil model
   */
  readonly fields: RecipeUstensilFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RecipeUstensil.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecipeUstensilClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recipe<T extends RecipeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RecipeDefaultArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ustensil<T extends UstensilDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UstensilDefaultArgs<ExtArgs>>): Prisma__UstensilClient<$Result.GetResult<Prisma.$UstensilPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RecipeUstensil model
   */
  interface RecipeUstensilFieldRefs {
    readonly id: FieldRef<"RecipeUstensil", 'String'>
    readonly recipeId: FieldRef<"RecipeUstensil", 'String'>
    readonly ustensilId: FieldRef<"RecipeUstensil", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RecipeUstensil findUnique
   */
  export type RecipeUstensilFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeUstensil
     */
    select?: RecipeUstensilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeUstensil
     */
    omit?: RecipeUstensilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeUstensilInclude<ExtArgs> | null
    /**
     * Filter, which RecipeUstensil to fetch.
     */
    where: RecipeUstensilWhereUniqueInput
  }

  /**
   * RecipeUstensil findUniqueOrThrow
   */
  export type RecipeUstensilFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeUstensil
     */
    select?: RecipeUstensilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeUstensil
     */
    omit?: RecipeUstensilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeUstensilInclude<ExtArgs> | null
    /**
     * Filter, which RecipeUstensil to fetch.
     */
    where: RecipeUstensilWhereUniqueInput
  }

  /**
   * RecipeUstensil findFirst
   */
  export type RecipeUstensilFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeUstensil
     */
    select?: RecipeUstensilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeUstensil
     */
    omit?: RecipeUstensilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeUstensilInclude<ExtArgs> | null
    /**
     * Filter, which RecipeUstensil to fetch.
     */
    where?: RecipeUstensilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeUstensils to fetch.
     */
    orderBy?: RecipeUstensilOrderByWithRelationInput | RecipeUstensilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecipeUstensils.
     */
    cursor?: RecipeUstensilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeUstensils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeUstensils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecipeUstensils.
     */
    distinct?: RecipeUstensilScalarFieldEnum | RecipeUstensilScalarFieldEnum[]
  }

  /**
   * RecipeUstensil findFirstOrThrow
   */
  export type RecipeUstensilFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeUstensil
     */
    select?: RecipeUstensilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeUstensil
     */
    omit?: RecipeUstensilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeUstensilInclude<ExtArgs> | null
    /**
     * Filter, which RecipeUstensil to fetch.
     */
    where?: RecipeUstensilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeUstensils to fetch.
     */
    orderBy?: RecipeUstensilOrderByWithRelationInput | RecipeUstensilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecipeUstensils.
     */
    cursor?: RecipeUstensilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeUstensils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeUstensils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecipeUstensils.
     */
    distinct?: RecipeUstensilScalarFieldEnum | RecipeUstensilScalarFieldEnum[]
  }

  /**
   * RecipeUstensil findMany
   */
  export type RecipeUstensilFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeUstensil
     */
    select?: RecipeUstensilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeUstensil
     */
    omit?: RecipeUstensilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeUstensilInclude<ExtArgs> | null
    /**
     * Filter, which RecipeUstensils to fetch.
     */
    where?: RecipeUstensilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeUstensils to fetch.
     */
    orderBy?: RecipeUstensilOrderByWithRelationInput | RecipeUstensilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RecipeUstensils.
     */
    cursor?: RecipeUstensilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeUstensils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeUstensils.
     */
    skip?: number
    distinct?: RecipeUstensilScalarFieldEnum | RecipeUstensilScalarFieldEnum[]
  }

  /**
   * RecipeUstensil create
   */
  export type RecipeUstensilCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeUstensil
     */
    select?: RecipeUstensilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeUstensil
     */
    omit?: RecipeUstensilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeUstensilInclude<ExtArgs> | null
    /**
     * The data needed to create a RecipeUstensil.
     */
    data: XOR<RecipeUstensilCreateInput, RecipeUstensilUncheckedCreateInput>
  }

  /**
   * RecipeUstensil createMany
   */
  export type RecipeUstensilCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RecipeUstensils.
     */
    data: RecipeUstensilCreateManyInput | RecipeUstensilCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RecipeUstensil createManyAndReturn
   */
  export type RecipeUstensilCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeUstensil
     */
    select?: RecipeUstensilSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeUstensil
     */
    omit?: RecipeUstensilOmit<ExtArgs> | null
    /**
     * The data used to create many RecipeUstensils.
     */
    data: RecipeUstensilCreateManyInput | RecipeUstensilCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeUstensilIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecipeUstensil update
   */
  export type RecipeUstensilUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeUstensil
     */
    select?: RecipeUstensilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeUstensil
     */
    omit?: RecipeUstensilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeUstensilInclude<ExtArgs> | null
    /**
     * The data needed to update a RecipeUstensil.
     */
    data: XOR<RecipeUstensilUpdateInput, RecipeUstensilUncheckedUpdateInput>
    /**
     * Choose, which RecipeUstensil to update.
     */
    where: RecipeUstensilWhereUniqueInput
  }

  /**
   * RecipeUstensil updateMany
   */
  export type RecipeUstensilUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RecipeUstensils.
     */
    data: XOR<RecipeUstensilUpdateManyMutationInput, RecipeUstensilUncheckedUpdateManyInput>
    /**
     * Filter which RecipeUstensils to update
     */
    where?: RecipeUstensilWhereInput
    /**
     * Limit how many RecipeUstensils to update.
     */
    limit?: number
  }

  /**
   * RecipeUstensil updateManyAndReturn
   */
  export type RecipeUstensilUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeUstensil
     */
    select?: RecipeUstensilSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeUstensil
     */
    omit?: RecipeUstensilOmit<ExtArgs> | null
    /**
     * The data used to update RecipeUstensils.
     */
    data: XOR<RecipeUstensilUpdateManyMutationInput, RecipeUstensilUncheckedUpdateManyInput>
    /**
     * Filter which RecipeUstensils to update
     */
    where?: RecipeUstensilWhereInput
    /**
     * Limit how many RecipeUstensils to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeUstensilIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecipeUstensil upsert
   */
  export type RecipeUstensilUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeUstensil
     */
    select?: RecipeUstensilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeUstensil
     */
    omit?: RecipeUstensilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeUstensilInclude<ExtArgs> | null
    /**
     * The filter to search for the RecipeUstensil to update in case it exists.
     */
    where: RecipeUstensilWhereUniqueInput
    /**
     * In case the RecipeUstensil found by the `where` argument doesn't exist, create a new RecipeUstensil with this data.
     */
    create: XOR<RecipeUstensilCreateInput, RecipeUstensilUncheckedCreateInput>
    /**
     * In case the RecipeUstensil was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecipeUstensilUpdateInput, RecipeUstensilUncheckedUpdateInput>
  }

  /**
   * RecipeUstensil delete
   */
  export type RecipeUstensilDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeUstensil
     */
    select?: RecipeUstensilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeUstensil
     */
    omit?: RecipeUstensilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeUstensilInclude<ExtArgs> | null
    /**
     * Filter which RecipeUstensil to delete.
     */
    where: RecipeUstensilWhereUniqueInput
  }

  /**
   * RecipeUstensil deleteMany
   */
  export type RecipeUstensilDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecipeUstensils to delete
     */
    where?: RecipeUstensilWhereInput
    /**
     * Limit how many RecipeUstensils to delete.
     */
    limit?: number
  }

  /**
   * RecipeUstensil without action
   */
  export type RecipeUstensilDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeUstensil
     */
    select?: RecipeUstensilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeUstensil
     */
    omit?: RecipeUstensilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeUstensilInclude<ExtArgs> | null
  }


  /**
   * Model Mood
   */

  export type AggregateMood = {
    _count: MoodCountAggregateOutputType | null
    _min: MoodMinAggregateOutputType | null
    _max: MoodMaxAggregateOutputType | null
  }

  export type MoodMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type MoodMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type MoodCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type MoodMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type MoodMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type MoodCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type MoodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mood to aggregate.
     */
    where?: MoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Moods to fetch.
     */
    orderBy?: MoodOrderByWithRelationInput | MoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Moods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Moods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Moods
    **/
    _count?: true | MoodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MoodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MoodMaxAggregateInputType
  }

  export type GetMoodAggregateType<T extends MoodAggregateArgs> = {
        [P in keyof T & keyof AggregateMood]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMood[P]>
      : GetScalarType<T[P], AggregateMood[P]>
  }




  export type MoodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MoodWhereInput
    orderBy?: MoodOrderByWithAggregationInput | MoodOrderByWithAggregationInput[]
    by: MoodScalarFieldEnum[] | MoodScalarFieldEnum
    having?: MoodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MoodCountAggregateInputType | true
    _min?: MoodMinAggregateInputType
    _max?: MoodMaxAggregateInputType
  }

  export type MoodGroupByOutputType = {
    id: string
    name: string
    _count: MoodCountAggregateOutputType | null
    _min: MoodMinAggregateOutputType | null
    _max: MoodMaxAggregateOutputType | null
  }

  type GetMoodGroupByPayload<T extends MoodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MoodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MoodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MoodGroupByOutputType[P]>
            : GetScalarType<T[P], MoodGroupByOutputType[P]>
        }
      >
    >


  export type MoodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    recipes?: boolean | Mood$recipesArgs<ExtArgs>
    _count?: boolean | MoodCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mood"]>

  export type MoodSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["mood"]>

  export type MoodSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["mood"]>

  export type MoodSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type MoodOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["mood"]>
  export type MoodInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipes?: boolean | Mood$recipesArgs<ExtArgs>
    _count?: boolean | MoodCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MoodIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MoodIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MoodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mood"
    objects: {
      recipes: Prisma.$MoodRecipePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["mood"]>
    composites: {}
  }

  type MoodGetPayload<S extends boolean | null | undefined | MoodDefaultArgs> = $Result.GetResult<Prisma.$MoodPayload, S>

  type MoodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MoodFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MoodCountAggregateInputType | true
    }

  export interface MoodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mood'], meta: { name: 'Mood' } }
    /**
     * Find zero or one Mood that matches the filter.
     * @param {MoodFindUniqueArgs} args - Arguments to find a Mood
     * @example
     * // Get one Mood
     * const mood = await prisma.mood.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MoodFindUniqueArgs>(args: SelectSubset<T, MoodFindUniqueArgs<ExtArgs>>): Prisma__MoodClient<$Result.GetResult<Prisma.$MoodPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mood that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MoodFindUniqueOrThrowArgs} args - Arguments to find a Mood
     * @example
     * // Get one Mood
     * const mood = await prisma.mood.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MoodFindUniqueOrThrowArgs>(args: SelectSubset<T, MoodFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MoodClient<$Result.GetResult<Prisma.$MoodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mood that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodFindFirstArgs} args - Arguments to find a Mood
     * @example
     * // Get one Mood
     * const mood = await prisma.mood.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MoodFindFirstArgs>(args?: SelectSubset<T, MoodFindFirstArgs<ExtArgs>>): Prisma__MoodClient<$Result.GetResult<Prisma.$MoodPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mood that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodFindFirstOrThrowArgs} args - Arguments to find a Mood
     * @example
     * // Get one Mood
     * const mood = await prisma.mood.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MoodFindFirstOrThrowArgs>(args?: SelectSubset<T, MoodFindFirstOrThrowArgs<ExtArgs>>): Prisma__MoodClient<$Result.GetResult<Prisma.$MoodPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Moods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Moods
     * const moods = await prisma.mood.findMany()
     * 
     * // Get first 10 Moods
     * const moods = await prisma.mood.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const moodWithIdOnly = await prisma.mood.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MoodFindManyArgs>(args?: SelectSubset<T, MoodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mood.
     * @param {MoodCreateArgs} args - Arguments to create a Mood.
     * @example
     * // Create one Mood
     * const Mood = await prisma.mood.create({
     *   data: {
     *     // ... data to create a Mood
     *   }
     * })
     * 
     */
    create<T extends MoodCreateArgs>(args: SelectSubset<T, MoodCreateArgs<ExtArgs>>): Prisma__MoodClient<$Result.GetResult<Prisma.$MoodPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Moods.
     * @param {MoodCreateManyArgs} args - Arguments to create many Moods.
     * @example
     * // Create many Moods
     * const mood = await prisma.mood.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MoodCreateManyArgs>(args?: SelectSubset<T, MoodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Moods and returns the data saved in the database.
     * @param {MoodCreateManyAndReturnArgs} args - Arguments to create many Moods.
     * @example
     * // Create many Moods
     * const mood = await prisma.mood.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Moods and only return the `id`
     * const moodWithIdOnly = await prisma.mood.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MoodCreateManyAndReturnArgs>(args?: SelectSubset<T, MoodCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoodPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Mood.
     * @param {MoodDeleteArgs} args - Arguments to delete one Mood.
     * @example
     * // Delete one Mood
     * const Mood = await prisma.mood.delete({
     *   where: {
     *     // ... filter to delete one Mood
     *   }
     * })
     * 
     */
    delete<T extends MoodDeleteArgs>(args: SelectSubset<T, MoodDeleteArgs<ExtArgs>>): Prisma__MoodClient<$Result.GetResult<Prisma.$MoodPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mood.
     * @param {MoodUpdateArgs} args - Arguments to update one Mood.
     * @example
     * // Update one Mood
     * const mood = await prisma.mood.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MoodUpdateArgs>(args: SelectSubset<T, MoodUpdateArgs<ExtArgs>>): Prisma__MoodClient<$Result.GetResult<Prisma.$MoodPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Moods.
     * @param {MoodDeleteManyArgs} args - Arguments to filter Moods to delete.
     * @example
     * // Delete a few Moods
     * const { count } = await prisma.mood.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MoodDeleteManyArgs>(args?: SelectSubset<T, MoodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Moods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Moods
     * const mood = await prisma.mood.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MoodUpdateManyArgs>(args: SelectSubset<T, MoodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Moods and returns the data updated in the database.
     * @param {MoodUpdateManyAndReturnArgs} args - Arguments to update many Moods.
     * @example
     * // Update many Moods
     * const mood = await prisma.mood.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Moods and only return the `id`
     * const moodWithIdOnly = await prisma.mood.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MoodUpdateManyAndReturnArgs>(args: SelectSubset<T, MoodUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoodPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Mood.
     * @param {MoodUpsertArgs} args - Arguments to update or create a Mood.
     * @example
     * // Update or create a Mood
     * const mood = await prisma.mood.upsert({
     *   create: {
     *     // ... data to create a Mood
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mood we want to update
     *   }
     * })
     */
    upsert<T extends MoodUpsertArgs>(args: SelectSubset<T, MoodUpsertArgs<ExtArgs>>): Prisma__MoodClient<$Result.GetResult<Prisma.$MoodPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Moods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodCountArgs} args - Arguments to filter Moods to count.
     * @example
     * // Count the number of Moods
     * const count = await prisma.mood.count({
     *   where: {
     *     // ... the filter for the Moods we want to count
     *   }
     * })
    **/
    count<T extends MoodCountArgs>(
      args?: Subset<T, MoodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MoodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mood.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MoodAggregateArgs>(args: Subset<T, MoodAggregateArgs>): Prisma.PrismaPromise<GetMoodAggregateType<T>>

    /**
     * Group by Mood.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MoodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MoodGroupByArgs['orderBy'] }
        : { orderBy?: MoodGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MoodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMoodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mood model
   */
  readonly fields: MoodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mood.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MoodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recipes<T extends Mood$recipesArgs<ExtArgs> = {}>(args?: Subset<T, Mood$recipesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoodRecipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Mood model
   */
  interface MoodFieldRefs {
    readonly id: FieldRef<"Mood", 'String'>
    readonly name: FieldRef<"Mood", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Mood findUnique
   */
  export type MoodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mood
     */
    select?: MoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mood
     */
    omit?: MoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodInclude<ExtArgs> | null
    /**
     * Filter, which Mood to fetch.
     */
    where: MoodWhereUniqueInput
  }

  /**
   * Mood findUniqueOrThrow
   */
  export type MoodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mood
     */
    select?: MoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mood
     */
    omit?: MoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodInclude<ExtArgs> | null
    /**
     * Filter, which Mood to fetch.
     */
    where: MoodWhereUniqueInput
  }

  /**
   * Mood findFirst
   */
  export type MoodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mood
     */
    select?: MoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mood
     */
    omit?: MoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodInclude<ExtArgs> | null
    /**
     * Filter, which Mood to fetch.
     */
    where?: MoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Moods to fetch.
     */
    orderBy?: MoodOrderByWithRelationInput | MoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Moods.
     */
    cursor?: MoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Moods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Moods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Moods.
     */
    distinct?: MoodScalarFieldEnum | MoodScalarFieldEnum[]
  }

  /**
   * Mood findFirstOrThrow
   */
  export type MoodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mood
     */
    select?: MoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mood
     */
    omit?: MoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodInclude<ExtArgs> | null
    /**
     * Filter, which Mood to fetch.
     */
    where?: MoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Moods to fetch.
     */
    orderBy?: MoodOrderByWithRelationInput | MoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Moods.
     */
    cursor?: MoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Moods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Moods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Moods.
     */
    distinct?: MoodScalarFieldEnum | MoodScalarFieldEnum[]
  }

  /**
   * Mood findMany
   */
  export type MoodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mood
     */
    select?: MoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mood
     */
    omit?: MoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodInclude<ExtArgs> | null
    /**
     * Filter, which Moods to fetch.
     */
    where?: MoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Moods to fetch.
     */
    orderBy?: MoodOrderByWithRelationInput | MoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Moods.
     */
    cursor?: MoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Moods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Moods.
     */
    skip?: number
    distinct?: MoodScalarFieldEnum | MoodScalarFieldEnum[]
  }

  /**
   * Mood create
   */
  export type MoodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mood
     */
    select?: MoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mood
     */
    omit?: MoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodInclude<ExtArgs> | null
    /**
     * The data needed to create a Mood.
     */
    data: XOR<MoodCreateInput, MoodUncheckedCreateInput>
  }

  /**
   * Mood createMany
   */
  export type MoodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Moods.
     */
    data: MoodCreateManyInput | MoodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mood createManyAndReturn
   */
  export type MoodCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mood
     */
    select?: MoodSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mood
     */
    omit?: MoodOmit<ExtArgs> | null
    /**
     * The data used to create many Moods.
     */
    data: MoodCreateManyInput | MoodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mood update
   */
  export type MoodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mood
     */
    select?: MoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mood
     */
    omit?: MoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodInclude<ExtArgs> | null
    /**
     * The data needed to update a Mood.
     */
    data: XOR<MoodUpdateInput, MoodUncheckedUpdateInput>
    /**
     * Choose, which Mood to update.
     */
    where: MoodWhereUniqueInput
  }

  /**
   * Mood updateMany
   */
  export type MoodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Moods.
     */
    data: XOR<MoodUpdateManyMutationInput, MoodUncheckedUpdateManyInput>
    /**
     * Filter which Moods to update
     */
    where?: MoodWhereInput
    /**
     * Limit how many Moods to update.
     */
    limit?: number
  }

  /**
   * Mood updateManyAndReturn
   */
  export type MoodUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mood
     */
    select?: MoodSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mood
     */
    omit?: MoodOmit<ExtArgs> | null
    /**
     * The data used to update Moods.
     */
    data: XOR<MoodUpdateManyMutationInput, MoodUncheckedUpdateManyInput>
    /**
     * Filter which Moods to update
     */
    where?: MoodWhereInput
    /**
     * Limit how many Moods to update.
     */
    limit?: number
  }

  /**
   * Mood upsert
   */
  export type MoodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mood
     */
    select?: MoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mood
     */
    omit?: MoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodInclude<ExtArgs> | null
    /**
     * The filter to search for the Mood to update in case it exists.
     */
    where: MoodWhereUniqueInput
    /**
     * In case the Mood found by the `where` argument doesn't exist, create a new Mood with this data.
     */
    create: XOR<MoodCreateInput, MoodUncheckedCreateInput>
    /**
     * In case the Mood was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MoodUpdateInput, MoodUncheckedUpdateInput>
  }

  /**
   * Mood delete
   */
  export type MoodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mood
     */
    select?: MoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mood
     */
    omit?: MoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodInclude<ExtArgs> | null
    /**
     * Filter which Mood to delete.
     */
    where: MoodWhereUniqueInput
  }

  /**
   * Mood deleteMany
   */
  export type MoodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Moods to delete
     */
    where?: MoodWhereInput
    /**
     * Limit how many Moods to delete.
     */
    limit?: number
  }

  /**
   * Mood.recipes
   */
  export type Mood$recipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodRecipe
     */
    select?: MoodRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodRecipe
     */
    omit?: MoodRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodRecipeInclude<ExtArgs> | null
    where?: MoodRecipeWhereInput
    orderBy?: MoodRecipeOrderByWithRelationInput | MoodRecipeOrderByWithRelationInput[]
    cursor?: MoodRecipeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MoodRecipeScalarFieldEnum | MoodRecipeScalarFieldEnum[]
  }

  /**
   * Mood without action
   */
  export type MoodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mood
     */
    select?: MoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mood
     */
    omit?: MoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodInclude<ExtArgs> | null
  }


  /**
   * Model MoodRecipe
   */

  export type AggregateMoodRecipe = {
    _count: MoodRecipeCountAggregateOutputType | null
    _min: MoodRecipeMinAggregateOutputType | null
    _max: MoodRecipeMaxAggregateOutputType | null
  }

  export type MoodRecipeMinAggregateOutputType = {
    id: string | null
    recipeId: string | null
    moodId: string | null
  }

  export type MoodRecipeMaxAggregateOutputType = {
    id: string | null
    recipeId: string | null
    moodId: string | null
  }

  export type MoodRecipeCountAggregateOutputType = {
    id: number
    recipeId: number
    moodId: number
    _all: number
  }


  export type MoodRecipeMinAggregateInputType = {
    id?: true
    recipeId?: true
    moodId?: true
  }

  export type MoodRecipeMaxAggregateInputType = {
    id?: true
    recipeId?: true
    moodId?: true
  }

  export type MoodRecipeCountAggregateInputType = {
    id?: true
    recipeId?: true
    moodId?: true
    _all?: true
  }

  export type MoodRecipeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MoodRecipe to aggregate.
     */
    where?: MoodRecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MoodRecipes to fetch.
     */
    orderBy?: MoodRecipeOrderByWithRelationInput | MoodRecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MoodRecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MoodRecipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MoodRecipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MoodRecipes
    **/
    _count?: true | MoodRecipeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MoodRecipeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MoodRecipeMaxAggregateInputType
  }

  export type GetMoodRecipeAggregateType<T extends MoodRecipeAggregateArgs> = {
        [P in keyof T & keyof AggregateMoodRecipe]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMoodRecipe[P]>
      : GetScalarType<T[P], AggregateMoodRecipe[P]>
  }




  export type MoodRecipeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MoodRecipeWhereInput
    orderBy?: MoodRecipeOrderByWithAggregationInput | MoodRecipeOrderByWithAggregationInput[]
    by: MoodRecipeScalarFieldEnum[] | MoodRecipeScalarFieldEnum
    having?: MoodRecipeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MoodRecipeCountAggregateInputType | true
    _min?: MoodRecipeMinAggregateInputType
    _max?: MoodRecipeMaxAggregateInputType
  }

  export type MoodRecipeGroupByOutputType = {
    id: string
    recipeId: string
    moodId: string
    _count: MoodRecipeCountAggregateOutputType | null
    _min: MoodRecipeMinAggregateOutputType | null
    _max: MoodRecipeMaxAggregateOutputType | null
  }

  type GetMoodRecipeGroupByPayload<T extends MoodRecipeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MoodRecipeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MoodRecipeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MoodRecipeGroupByOutputType[P]>
            : GetScalarType<T[P], MoodRecipeGroupByOutputType[P]>
        }
      >
    >


  export type MoodRecipeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recipeId?: boolean
    moodId?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    mood?: boolean | MoodDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["moodRecipe"]>

  export type MoodRecipeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recipeId?: boolean
    moodId?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    mood?: boolean | MoodDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["moodRecipe"]>

  export type MoodRecipeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recipeId?: boolean
    moodId?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    mood?: boolean | MoodDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["moodRecipe"]>

  export type MoodRecipeSelectScalar = {
    id?: boolean
    recipeId?: boolean
    moodId?: boolean
  }

  export type MoodRecipeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "recipeId" | "moodId", ExtArgs["result"]["moodRecipe"]>
  export type MoodRecipeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    mood?: boolean | MoodDefaultArgs<ExtArgs>
  }
  export type MoodRecipeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    mood?: boolean | MoodDefaultArgs<ExtArgs>
  }
  export type MoodRecipeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    mood?: boolean | MoodDefaultArgs<ExtArgs>
  }

  export type $MoodRecipePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MoodRecipe"
    objects: {
      recipe: Prisma.$RecipePayload<ExtArgs>
      mood: Prisma.$MoodPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      recipeId: string
      moodId: string
    }, ExtArgs["result"]["moodRecipe"]>
    composites: {}
  }

  type MoodRecipeGetPayload<S extends boolean | null | undefined | MoodRecipeDefaultArgs> = $Result.GetResult<Prisma.$MoodRecipePayload, S>

  type MoodRecipeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MoodRecipeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MoodRecipeCountAggregateInputType | true
    }

  export interface MoodRecipeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MoodRecipe'], meta: { name: 'MoodRecipe' } }
    /**
     * Find zero or one MoodRecipe that matches the filter.
     * @param {MoodRecipeFindUniqueArgs} args - Arguments to find a MoodRecipe
     * @example
     * // Get one MoodRecipe
     * const moodRecipe = await prisma.moodRecipe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MoodRecipeFindUniqueArgs>(args: SelectSubset<T, MoodRecipeFindUniqueArgs<ExtArgs>>): Prisma__MoodRecipeClient<$Result.GetResult<Prisma.$MoodRecipePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MoodRecipe that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MoodRecipeFindUniqueOrThrowArgs} args - Arguments to find a MoodRecipe
     * @example
     * // Get one MoodRecipe
     * const moodRecipe = await prisma.moodRecipe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MoodRecipeFindUniqueOrThrowArgs>(args: SelectSubset<T, MoodRecipeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MoodRecipeClient<$Result.GetResult<Prisma.$MoodRecipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MoodRecipe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodRecipeFindFirstArgs} args - Arguments to find a MoodRecipe
     * @example
     * // Get one MoodRecipe
     * const moodRecipe = await prisma.moodRecipe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MoodRecipeFindFirstArgs>(args?: SelectSubset<T, MoodRecipeFindFirstArgs<ExtArgs>>): Prisma__MoodRecipeClient<$Result.GetResult<Prisma.$MoodRecipePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MoodRecipe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodRecipeFindFirstOrThrowArgs} args - Arguments to find a MoodRecipe
     * @example
     * // Get one MoodRecipe
     * const moodRecipe = await prisma.moodRecipe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MoodRecipeFindFirstOrThrowArgs>(args?: SelectSubset<T, MoodRecipeFindFirstOrThrowArgs<ExtArgs>>): Prisma__MoodRecipeClient<$Result.GetResult<Prisma.$MoodRecipePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MoodRecipes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodRecipeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MoodRecipes
     * const moodRecipes = await prisma.moodRecipe.findMany()
     * 
     * // Get first 10 MoodRecipes
     * const moodRecipes = await prisma.moodRecipe.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const moodRecipeWithIdOnly = await prisma.moodRecipe.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MoodRecipeFindManyArgs>(args?: SelectSubset<T, MoodRecipeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoodRecipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MoodRecipe.
     * @param {MoodRecipeCreateArgs} args - Arguments to create a MoodRecipe.
     * @example
     * // Create one MoodRecipe
     * const MoodRecipe = await prisma.moodRecipe.create({
     *   data: {
     *     // ... data to create a MoodRecipe
     *   }
     * })
     * 
     */
    create<T extends MoodRecipeCreateArgs>(args: SelectSubset<T, MoodRecipeCreateArgs<ExtArgs>>): Prisma__MoodRecipeClient<$Result.GetResult<Prisma.$MoodRecipePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MoodRecipes.
     * @param {MoodRecipeCreateManyArgs} args - Arguments to create many MoodRecipes.
     * @example
     * // Create many MoodRecipes
     * const moodRecipe = await prisma.moodRecipe.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MoodRecipeCreateManyArgs>(args?: SelectSubset<T, MoodRecipeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MoodRecipes and returns the data saved in the database.
     * @param {MoodRecipeCreateManyAndReturnArgs} args - Arguments to create many MoodRecipes.
     * @example
     * // Create many MoodRecipes
     * const moodRecipe = await prisma.moodRecipe.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MoodRecipes and only return the `id`
     * const moodRecipeWithIdOnly = await prisma.moodRecipe.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MoodRecipeCreateManyAndReturnArgs>(args?: SelectSubset<T, MoodRecipeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoodRecipePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MoodRecipe.
     * @param {MoodRecipeDeleteArgs} args - Arguments to delete one MoodRecipe.
     * @example
     * // Delete one MoodRecipe
     * const MoodRecipe = await prisma.moodRecipe.delete({
     *   where: {
     *     // ... filter to delete one MoodRecipe
     *   }
     * })
     * 
     */
    delete<T extends MoodRecipeDeleteArgs>(args: SelectSubset<T, MoodRecipeDeleteArgs<ExtArgs>>): Prisma__MoodRecipeClient<$Result.GetResult<Prisma.$MoodRecipePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MoodRecipe.
     * @param {MoodRecipeUpdateArgs} args - Arguments to update one MoodRecipe.
     * @example
     * // Update one MoodRecipe
     * const moodRecipe = await prisma.moodRecipe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MoodRecipeUpdateArgs>(args: SelectSubset<T, MoodRecipeUpdateArgs<ExtArgs>>): Prisma__MoodRecipeClient<$Result.GetResult<Prisma.$MoodRecipePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MoodRecipes.
     * @param {MoodRecipeDeleteManyArgs} args - Arguments to filter MoodRecipes to delete.
     * @example
     * // Delete a few MoodRecipes
     * const { count } = await prisma.moodRecipe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MoodRecipeDeleteManyArgs>(args?: SelectSubset<T, MoodRecipeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MoodRecipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodRecipeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MoodRecipes
     * const moodRecipe = await prisma.moodRecipe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MoodRecipeUpdateManyArgs>(args: SelectSubset<T, MoodRecipeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MoodRecipes and returns the data updated in the database.
     * @param {MoodRecipeUpdateManyAndReturnArgs} args - Arguments to update many MoodRecipes.
     * @example
     * // Update many MoodRecipes
     * const moodRecipe = await prisma.moodRecipe.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MoodRecipes and only return the `id`
     * const moodRecipeWithIdOnly = await prisma.moodRecipe.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MoodRecipeUpdateManyAndReturnArgs>(args: SelectSubset<T, MoodRecipeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoodRecipePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MoodRecipe.
     * @param {MoodRecipeUpsertArgs} args - Arguments to update or create a MoodRecipe.
     * @example
     * // Update or create a MoodRecipe
     * const moodRecipe = await prisma.moodRecipe.upsert({
     *   create: {
     *     // ... data to create a MoodRecipe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MoodRecipe we want to update
     *   }
     * })
     */
    upsert<T extends MoodRecipeUpsertArgs>(args: SelectSubset<T, MoodRecipeUpsertArgs<ExtArgs>>): Prisma__MoodRecipeClient<$Result.GetResult<Prisma.$MoodRecipePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MoodRecipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodRecipeCountArgs} args - Arguments to filter MoodRecipes to count.
     * @example
     * // Count the number of MoodRecipes
     * const count = await prisma.moodRecipe.count({
     *   where: {
     *     // ... the filter for the MoodRecipes we want to count
     *   }
     * })
    **/
    count<T extends MoodRecipeCountArgs>(
      args?: Subset<T, MoodRecipeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MoodRecipeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MoodRecipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodRecipeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MoodRecipeAggregateArgs>(args: Subset<T, MoodRecipeAggregateArgs>): Prisma.PrismaPromise<GetMoodRecipeAggregateType<T>>

    /**
     * Group by MoodRecipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodRecipeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MoodRecipeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MoodRecipeGroupByArgs['orderBy'] }
        : { orderBy?: MoodRecipeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MoodRecipeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMoodRecipeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MoodRecipe model
   */
  readonly fields: MoodRecipeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MoodRecipe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MoodRecipeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recipe<T extends RecipeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RecipeDefaultArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mood<T extends MoodDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MoodDefaultArgs<ExtArgs>>): Prisma__MoodClient<$Result.GetResult<Prisma.$MoodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MoodRecipe model
   */
  interface MoodRecipeFieldRefs {
    readonly id: FieldRef<"MoodRecipe", 'String'>
    readonly recipeId: FieldRef<"MoodRecipe", 'String'>
    readonly moodId: FieldRef<"MoodRecipe", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MoodRecipe findUnique
   */
  export type MoodRecipeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodRecipe
     */
    select?: MoodRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodRecipe
     */
    omit?: MoodRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodRecipeInclude<ExtArgs> | null
    /**
     * Filter, which MoodRecipe to fetch.
     */
    where: MoodRecipeWhereUniqueInput
  }

  /**
   * MoodRecipe findUniqueOrThrow
   */
  export type MoodRecipeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodRecipe
     */
    select?: MoodRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodRecipe
     */
    omit?: MoodRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodRecipeInclude<ExtArgs> | null
    /**
     * Filter, which MoodRecipe to fetch.
     */
    where: MoodRecipeWhereUniqueInput
  }

  /**
   * MoodRecipe findFirst
   */
  export type MoodRecipeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodRecipe
     */
    select?: MoodRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodRecipe
     */
    omit?: MoodRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodRecipeInclude<ExtArgs> | null
    /**
     * Filter, which MoodRecipe to fetch.
     */
    where?: MoodRecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MoodRecipes to fetch.
     */
    orderBy?: MoodRecipeOrderByWithRelationInput | MoodRecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MoodRecipes.
     */
    cursor?: MoodRecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MoodRecipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MoodRecipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MoodRecipes.
     */
    distinct?: MoodRecipeScalarFieldEnum | MoodRecipeScalarFieldEnum[]
  }

  /**
   * MoodRecipe findFirstOrThrow
   */
  export type MoodRecipeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodRecipe
     */
    select?: MoodRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodRecipe
     */
    omit?: MoodRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodRecipeInclude<ExtArgs> | null
    /**
     * Filter, which MoodRecipe to fetch.
     */
    where?: MoodRecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MoodRecipes to fetch.
     */
    orderBy?: MoodRecipeOrderByWithRelationInput | MoodRecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MoodRecipes.
     */
    cursor?: MoodRecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MoodRecipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MoodRecipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MoodRecipes.
     */
    distinct?: MoodRecipeScalarFieldEnum | MoodRecipeScalarFieldEnum[]
  }

  /**
   * MoodRecipe findMany
   */
  export type MoodRecipeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodRecipe
     */
    select?: MoodRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodRecipe
     */
    omit?: MoodRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodRecipeInclude<ExtArgs> | null
    /**
     * Filter, which MoodRecipes to fetch.
     */
    where?: MoodRecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MoodRecipes to fetch.
     */
    orderBy?: MoodRecipeOrderByWithRelationInput | MoodRecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MoodRecipes.
     */
    cursor?: MoodRecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MoodRecipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MoodRecipes.
     */
    skip?: number
    distinct?: MoodRecipeScalarFieldEnum | MoodRecipeScalarFieldEnum[]
  }

  /**
   * MoodRecipe create
   */
  export type MoodRecipeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodRecipe
     */
    select?: MoodRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodRecipe
     */
    omit?: MoodRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodRecipeInclude<ExtArgs> | null
    /**
     * The data needed to create a MoodRecipe.
     */
    data: XOR<MoodRecipeCreateInput, MoodRecipeUncheckedCreateInput>
  }

  /**
   * MoodRecipe createMany
   */
  export type MoodRecipeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MoodRecipes.
     */
    data: MoodRecipeCreateManyInput | MoodRecipeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MoodRecipe createManyAndReturn
   */
  export type MoodRecipeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodRecipe
     */
    select?: MoodRecipeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MoodRecipe
     */
    omit?: MoodRecipeOmit<ExtArgs> | null
    /**
     * The data used to create many MoodRecipes.
     */
    data: MoodRecipeCreateManyInput | MoodRecipeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodRecipeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MoodRecipe update
   */
  export type MoodRecipeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodRecipe
     */
    select?: MoodRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodRecipe
     */
    omit?: MoodRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodRecipeInclude<ExtArgs> | null
    /**
     * The data needed to update a MoodRecipe.
     */
    data: XOR<MoodRecipeUpdateInput, MoodRecipeUncheckedUpdateInput>
    /**
     * Choose, which MoodRecipe to update.
     */
    where: MoodRecipeWhereUniqueInput
  }

  /**
   * MoodRecipe updateMany
   */
  export type MoodRecipeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MoodRecipes.
     */
    data: XOR<MoodRecipeUpdateManyMutationInput, MoodRecipeUncheckedUpdateManyInput>
    /**
     * Filter which MoodRecipes to update
     */
    where?: MoodRecipeWhereInput
    /**
     * Limit how many MoodRecipes to update.
     */
    limit?: number
  }

  /**
   * MoodRecipe updateManyAndReturn
   */
  export type MoodRecipeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodRecipe
     */
    select?: MoodRecipeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MoodRecipe
     */
    omit?: MoodRecipeOmit<ExtArgs> | null
    /**
     * The data used to update MoodRecipes.
     */
    data: XOR<MoodRecipeUpdateManyMutationInput, MoodRecipeUncheckedUpdateManyInput>
    /**
     * Filter which MoodRecipes to update
     */
    where?: MoodRecipeWhereInput
    /**
     * Limit how many MoodRecipes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodRecipeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MoodRecipe upsert
   */
  export type MoodRecipeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodRecipe
     */
    select?: MoodRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodRecipe
     */
    omit?: MoodRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodRecipeInclude<ExtArgs> | null
    /**
     * The filter to search for the MoodRecipe to update in case it exists.
     */
    where: MoodRecipeWhereUniqueInput
    /**
     * In case the MoodRecipe found by the `where` argument doesn't exist, create a new MoodRecipe with this data.
     */
    create: XOR<MoodRecipeCreateInput, MoodRecipeUncheckedCreateInput>
    /**
     * In case the MoodRecipe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MoodRecipeUpdateInput, MoodRecipeUncheckedUpdateInput>
  }

  /**
   * MoodRecipe delete
   */
  export type MoodRecipeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodRecipe
     */
    select?: MoodRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodRecipe
     */
    omit?: MoodRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodRecipeInclude<ExtArgs> | null
    /**
     * Filter which MoodRecipe to delete.
     */
    where: MoodRecipeWhereUniqueInput
  }

  /**
   * MoodRecipe deleteMany
   */
  export type MoodRecipeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MoodRecipes to delete
     */
    where?: MoodRecipeWhereInput
    /**
     * Limit how many MoodRecipes to delete.
     */
    limit?: number
  }

  /**
   * MoodRecipe without action
   */
  export type MoodRecipeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodRecipe
     */
    select?: MoodRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodRecipe
     */
    omit?: MoodRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodRecipeInclude<ExtArgs> | null
  }


  /**
   * Model Diet
   */

  export type AggregateDiet = {
    _count: DietCountAggregateOutputType | null
    _min: DietMinAggregateOutputType | null
    _max: DietMaxAggregateOutputType | null
  }

  export type DietMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type DietMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type DietCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type DietMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type DietMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type DietCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type DietAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Diet to aggregate.
     */
    where?: DietWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diets to fetch.
     */
    orderBy?: DietOrderByWithRelationInput | DietOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DietWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Diets
    **/
    _count?: true | DietCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DietMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DietMaxAggregateInputType
  }

  export type GetDietAggregateType<T extends DietAggregateArgs> = {
        [P in keyof T & keyof AggregateDiet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiet[P]>
      : GetScalarType<T[P], AggregateDiet[P]>
  }




  export type DietGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DietWhereInput
    orderBy?: DietOrderByWithAggregationInput | DietOrderByWithAggregationInput[]
    by: DietScalarFieldEnum[] | DietScalarFieldEnum
    having?: DietScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DietCountAggregateInputType | true
    _min?: DietMinAggregateInputType
    _max?: DietMaxAggregateInputType
  }

  export type DietGroupByOutputType = {
    id: string
    name: string
    _count: DietCountAggregateOutputType | null
    _min: DietMinAggregateOutputType | null
    _max: DietMaxAggregateOutputType | null
  }

  type GetDietGroupByPayload<T extends DietGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DietGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DietGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DietGroupByOutputType[P]>
            : GetScalarType<T[P], DietGroupByOutputType[P]>
        }
      >
    >


  export type DietSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    recipes?: boolean | Diet$recipesArgs<ExtArgs>
    _count?: boolean | DietCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diet"]>

  export type DietSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["diet"]>

  export type DietSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["diet"]>

  export type DietSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type DietOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["diet"]>
  export type DietInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipes?: boolean | Diet$recipesArgs<ExtArgs>
    _count?: boolean | DietCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DietIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DietIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DietPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Diet"
    objects: {
      recipes: Prisma.$DietRecipePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["diet"]>
    composites: {}
  }

  type DietGetPayload<S extends boolean | null | undefined | DietDefaultArgs> = $Result.GetResult<Prisma.$DietPayload, S>

  type DietCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DietFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DietCountAggregateInputType | true
    }

  export interface DietDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Diet'], meta: { name: 'Diet' } }
    /**
     * Find zero or one Diet that matches the filter.
     * @param {DietFindUniqueArgs} args - Arguments to find a Diet
     * @example
     * // Get one Diet
     * const diet = await prisma.diet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DietFindUniqueArgs>(args: SelectSubset<T, DietFindUniqueArgs<ExtArgs>>): Prisma__DietClient<$Result.GetResult<Prisma.$DietPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Diet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DietFindUniqueOrThrowArgs} args - Arguments to find a Diet
     * @example
     * // Get one Diet
     * const diet = await prisma.diet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DietFindUniqueOrThrowArgs>(args: SelectSubset<T, DietFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DietClient<$Result.GetResult<Prisma.$DietPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Diet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DietFindFirstArgs} args - Arguments to find a Diet
     * @example
     * // Get one Diet
     * const diet = await prisma.diet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DietFindFirstArgs>(args?: SelectSubset<T, DietFindFirstArgs<ExtArgs>>): Prisma__DietClient<$Result.GetResult<Prisma.$DietPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Diet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DietFindFirstOrThrowArgs} args - Arguments to find a Diet
     * @example
     * // Get one Diet
     * const diet = await prisma.diet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DietFindFirstOrThrowArgs>(args?: SelectSubset<T, DietFindFirstOrThrowArgs<ExtArgs>>): Prisma__DietClient<$Result.GetResult<Prisma.$DietPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Diets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DietFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Diets
     * const diets = await prisma.diet.findMany()
     * 
     * // Get first 10 Diets
     * const diets = await prisma.diet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dietWithIdOnly = await prisma.diet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DietFindManyArgs>(args?: SelectSubset<T, DietFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DietPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Diet.
     * @param {DietCreateArgs} args - Arguments to create a Diet.
     * @example
     * // Create one Diet
     * const Diet = await prisma.diet.create({
     *   data: {
     *     // ... data to create a Diet
     *   }
     * })
     * 
     */
    create<T extends DietCreateArgs>(args: SelectSubset<T, DietCreateArgs<ExtArgs>>): Prisma__DietClient<$Result.GetResult<Prisma.$DietPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Diets.
     * @param {DietCreateManyArgs} args - Arguments to create many Diets.
     * @example
     * // Create many Diets
     * const diet = await prisma.diet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DietCreateManyArgs>(args?: SelectSubset<T, DietCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Diets and returns the data saved in the database.
     * @param {DietCreateManyAndReturnArgs} args - Arguments to create many Diets.
     * @example
     * // Create many Diets
     * const diet = await prisma.diet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Diets and only return the `id`
     * const dietWithIdOnly = await prisma.diet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DietCreateManyAndReturnArgs>(args?: SelectSubset<T, DietCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DietPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Diet.
     * @param {DietDeleteArgs} args - Arguments to delete one Diet.
     * @example
     * // Delete one Diet
     * const Diet = await prisma.diet.delete({
     *   where: {
     *     // ... filter to delete one Diet
     *   }
     * })
     * 
     */
    delete<T extends DietDeleteArgs>(args: SelectSubset<T, DietDeleteArgs<ExtArgs>>): Prisma__DietClient<$Result.GetResult<Prisma.$DietPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Diet.
     * @param {DietUpdateArgs} args - Arguments to update one Diet.
     * @example
     * // Update one Diet
     * const diet = await prisma.diet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DietUpdateArgs>(args: SelectSubset<T, DietUpdateArgs<ExtArgs>>): Prisma__DietClient<$Result.GetResult<Prisma.$DietPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Diets.
     * @param {DietDeleteManyArgs} args - Arguments to filter Diets to delete.
     * @example
     * // Delete a few Diets
     * const { count } = await prisma.diet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DietDeleteManyArgs>(args?: SelectSubset<T, DietDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Diets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DietUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Diets
     * const diet = await prisma.diet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DietUpdateManyArgs>(args: SelectSubset<T, DietUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Diets and returns the data updated in the database.
     * @param {DietUpdateManyAndReturnArgs} args - Arguments to update many Diets.
     * @example
     * // Update many Diets
     * const diet = await prisma.diet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Diets and only return the `id`
     * const dietWithIdOnly = await prisma.diet.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DietUpdateManyAndReturnArgs>(args: SelectSubset<T, DietUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DietPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Diet.
     * @param {DietUpsertArgs} args - Arguments to update or create a Diet.
     * @example
     * // Update or create a Diet
     * const diet = await prisma.diet.upsert({
     *   create: {
     *     // ... data to create a Diet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Diet we want to update
     *   }
     * })
     */
    upsert<T extends DietUpsertArgs>(args: SelectSubset<T, DietUpsertArgs<ExtArgs>>): Prisma__DietClient<$Result.GetResult<Prisma.$DietPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Diets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DietCountArgs} args - Arguments to filter Diets to count.
     * @example
     * // Count the number of Diets
     * const count = await prisma.diet.count({
     *   where: {
     *     // ... the filter for the Diets we want to count
     *   }
     * })
    **/
    count<T extends DietCountArgs>(
      args?: Subset<T, DietCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DietCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Diet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DietAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DietAggregateArgs>(args: Subset<T, DietAggregateArgs>): Prisma.PrismaPromise<GetDietAggregateType<T>>

    /**
     * Group by Diet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DietGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DietGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DietGroupByArgs['orderBy'] }
        : { orderBy?: DietGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DietGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDietGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Diet model
   */
  readonly fields: DietFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Diet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DietClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recipes<T extends Diet$recipesArgs<ExtArgs> = {}>(args?: Subset<T, Diet$recipesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DietRecipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Diet model
   */
  interface DietFieldRefs {
    readonly id: FieldRef<"Diet", 'String'>
    readonly name: FieldRef<"Diet", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Diet findUnique
   */
  export type DietFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diet
     */
    select?: DietSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diet
     */
    omit?: DietOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietInclude<ExtArgs> | null
    /**
     * Filter, which Diet to fetch.
     */
    where: DietWhereUniqueInput
  }

  /**
   * Diet findUniqueOrThrow
   */
  export type DietFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diet
     */
    select?: DietSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diet
     */
    omit?: DietOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietInclude<ExtArgs> | null
    /**
     * Filter, which Diet to fetch.
     */
    where: DietWhereUniqueInput
  }

  /**
   * Diet findFirst
   */
  export type DietFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diet
     */
    select?: DietSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diet
     */
    omit?: DietOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietInclude<ExtArgs> | null
    /**
     * Filter, which Diet to fetch.
     */
    where?: DietWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diets to fetch.
     */
    orderBy?: DietOrderByWithRelationInput | DietOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Diets.
     */
    cursor?: DietWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Diets.
     */
    distinct?: DietScalarFieldEnum | DietScalarFieldEnum[]
  }

  /**
   * Diet findFirstOrThrow
   */
  export type DietFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diet
     */
    select?: DietSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diet
     */
    omit?: DietOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietInclude<ExtArgs> | null
    /**
     * Filter, which Diet to fetch.
     */
    where?: DietWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diets to fetch.
     */
    orderBy?: DietOrderByWithRelationInput | DietOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Diets.
     */
    cursor?: DietWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Diets.
     */
    distinct?: DietScalarFieldEnum | DietScalarFieldEnum[]
  }

  /**
   * Diet findMany
   */
  export type DietFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diet
     */
    select?: DietSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diet
     */
    omit?: DietOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietInclude<ExtArgs> | null
    /**
     * Filter, which Diets to fetch.
     */
    where?: DietWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diets to fetch.
     */
    orderBy?: DietOrderByWithRelationInput | DietOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Diets.
     */
    cursor?: DietWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diets.
     */
    skip?: number
    distinct?: DietScalarFieldEnum | DietScalarFieldEnum[]
  }

  /**
   * Diet create
   */
  export type DietCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diet
     */
    select?: DietSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diet
     */
    omit?: DietOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietInclude<ExtArgs> | null
    /**
     * The data needed to create a Diet.
     */
    data: XOR<DietCreateInput, DietUncheckedCreateInput>
  }

  /**
   * Diet createMany
   */
  export type DietCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Diets.
     */
    data: DietCreateManyInput | DietCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Diet createManyAndReturn
   */
  export type DietCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diet
     */
    select?: DietSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Diet
     */
    omit?: DietOmit<ExtArgs> | null
    /**
     * The data used to create many Diets.
     */
    data: DietCreateManyInput | DietCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Diet update
   */
  export type DietUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diet
     */
    select?: DietSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diet
     */
    omit?: DietOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietInclude<ExtArgs> | null
    /**
     * The data needed to update a Diet.
     */
    data: XOR<DietUpdateInput, DietUncheckedUpdateInput>
    /**
     * Choose, which Diet to update.
     */
    where: DietWhereUniqueInput
  }

  /**
   * Diet updateMany
   */
  export type DietUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Diets.
     */
    data: XOR<DietUpdateManyMutationInput, DietUncheckedUpdateManyInput>
    /**
     * Filter which Diets to update
     */
    where?: DietWhereInput
    /**
     * Limit how many Diets to update.
     */
    limit?: number
  }

  /**
   * Diet updateManyAndReturn
   */
  export type DietUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diet
     */
    select?: DietSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Diet
     */
    omit?: DietOmit<ExtArgs> | null
    /**
     * The data used to update Diets.
     */
    data: XOR<DietUpdateManyMutationInput, DietUncheckedUpdateManyInput>
    /**
     * Filter which Diets to update
     */
    where?: DietWhereInput
    /**
     * Limit how many Diets to update.
     */
    limit?: number
  }

  /**
   * Diet upsert
   */
  export type DietUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diet
     */
    select?: DietSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diet
     */
    omit?: DietOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietInclude<ExtArgs> | null
    /**
     * The filter to search for the Diet to update in case it exists.
     */
    where: DietWhereUniqueInput
    /**
     * In case the Diet found by the `where` argument doesn't exist, create a new Diet with this data.
     */
    create: XOR<DietCreateInput, DietUncheckedCreateInput>
    /**
     * In case the Diet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DietUpdateInput, DietUncheckedUpdateInput>
  }

  /**
   * Diet delete
   */
  export type DietDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diet
     */
    select?: DietSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diet
     */
    omit?: DietOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietInclude<ExtArgs> | null
    /**
     * Filter which Diet to delete.
     */
    where: DietWhereUniqueInput
  }

  /**
   * Diet deleteMany
   */
  export type DietDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Diets to delete
     */
    where?: DietWhereInput
    /**
     * Limit how many Diets to delete.
     */
    limit?: number
  }

  /**
   * Diet.recipes
   */
  export type Diet$recipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DietRecipe
     */
    select?: DietRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DietRecipe
     */
    omit?: DietRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietRecipeInclude<ExtArgs> | null
    where?: DietRecipeWhereInput
    orderBy?: DietRecipeOrderByWithRelationInput | DietRecipeOrderByWithRelationInput[]
    cursor?: DietRecipeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DietRecipeScalarFieldEnum | DietRecipeScalarFieldEnum[]
  }

  /**
   * Diet without action
   */
  export type DietDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diet
     */
    select?: DietSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diet
     */
    omit?: DietOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietInclude<ExtArgs> | null
  }


  /**
   * Model DietRecipe
   */

  export type AggregateDietRecipe = {
    _count: DietRecipeCountAggregateOutputType | null
    _min: DietRecipeMinAggregateOutputType | null
    _max: DietRecipeMaxAggregateOutputType | null
  }

  export type DietRecipeMinAggregateOutputType = {
    id: string | null
    recipeId: string | null
    dietId: string | null
  }

  export type DietRecipeMaxAggregateOutputType = {
    id: string | null
    recipeId: string | null
    dietId: string | null
  }

  export type DietRecipeCountAggregateOutputType = {
    id: number
    recipeId: number
    dietId: number
    _all: number
  }


  export type DietRecipeMinAggregateInputType = {
    id?: true
    recipeId?: true
    dietId?: true
  }

  export type DietRecipeMaxAggregateInputType = {
    id?: true
    recipeId?: true
    dietId?: true
  }

  export type DietRecipeCountAggregateInputType = {
    id?: true
    recipeId?: true
    dietId?: true
    _all?: true
  }

  export type DietRecipeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DietRecipe to aggregate.
     */
    where?: DietRecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DietRecipes to fetch.
     */
    orderBy?: DietRecipeOrderByWithRelationInput | DietRecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DietRecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DietRecipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DietRecipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DietRecipes
    **/
    _count?: true | DietRecipeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DietRecipeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DietRecipeMaxAggregateInputType
  }

  export type GetDietRecipeAggregateType<T extends DietRecipeAggregateArgs> = {
        [P in keyof T & keyof AggregateDietRecipe]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDietRecipe[P]>
      : GetScalarType<T[P], AggregateDietRecipe[P]>
  }




  export type DietRecipeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DietRecipeWhereInput
    orderBy?: DietRecipeOrderByWithAggregationInput | DietRecipeOrderByWithAggregationInput[]
    by: DietRecipeScalarFieldEnum[] | DietRecipeScalarFieldEnum
    having?: DietRecipeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DietRecipeCountAggregateInputType | true
    _min?: DietRecipeMinAggregateInputType
    _max?: DietRecipeMaxAggregateInputType
  }

  export type DietRecipeGroupByOutputType = {
    id: string
    recipeId: string
    dietId: string
    _count: DietRecipeCountAggregateOutputType | null
    _min: DietRecipeMinAggregateOutputType | null
    _max: DietRecipeMaxAggregateOutputType | null
  }

  type GetDietRecipeGroupByPayload<T extends DietRecipeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DietRecipeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DietRecipeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DietRecipeGroupByOutputType[P]>
            : GetScalarType<T[P], DietRecipeGroupByOutputType[P]>
        }
      >
    >


  export type DietRecipeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recipeId?: boolean
    dietId?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    diet?: boolean | DietDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dietRecipe"]>

  export type DietRecipeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recipeId?: boolean
    dietId?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    diet?: boolean | DietDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dietRecipe"]>

  export type DietRecipeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recipeId?: boolean
    dietId?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    diet?: boolean | DietDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dietRecipe"]>

  export type DietRecipeSelectScalar = {
    id?: boolean
    recipeId?: boolean
    dietId?: boolean
  }

  export type DietRecipeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "recipeId" | "dietId", ExtArgs["result"]["dietRecipe"]>
  export type DietRecipeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    diet?: boolean | DietDefaultArgs<ExtArgs>
  }
  export type DietRecipeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    diet?: boolean | DietDefaultArgs<ExtArgs>
  }
  export type DietRecipeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    diet?: boolean | DietDefaultArgs<ExtArgs>
  }

  export type $DietRecipePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DietRecipe"
    objects: {
      recipe: Prisma.$RecipePayload<ExtArgs>
      diet: Prisma.$DietPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      recipeId: string
      dietId: string
    }, ExtArgs["result"]["dietRecipe"]>
    composites: {}
  }

  type DietRecipeGetPayload<S extends boolean | null | undefined | DietRecipeDefaultArgs> = $Result.GetResult<Prisma.$DietRecipePayload, S>

  type DietRecipeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DietRecipeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DietRecipeCountAggregateInputType | true
    }

  export interface DietRecipeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DietRecipe'], meta: { name: 'DietRecipe' } }
    /**
     * Find zero or one DietRecipe that matches the filter.
     * @param {DietRecipeFindUniqueArgs} args - Arguments to find a DietRecipe
     * @example
     * // Get one DietRecipe
     * const dietRecipe = await prisma.dietRecipe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DietRecipeFindUniqueArgs>(args: SelectSubset<T, DietRecipeFindUniqueArgs<ExtArgs>>): Prisma__DietRecipeClient<$Result.GetResult<Prisma.$DietRecipePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DietRecipe that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DietRecipeFindUniqueOrThrowArgs} args - Arguments to find a DietRecipe
     * @example
     * // Get one DietRecipe
     * const dietRecipe = await prisma.dietRecipe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DietRecipeFindUniqueOrThrowArgs>(args: SelectSubset<T, DietRecipeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DietRecipeClient<$Result.GetResult<Prisma.$DietRecipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DietRecipe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DietRecipeFindFirstArgs} args - Arguments to find a DietRecipe
     * @example
     * // Get one DietRecipe
     * const dietRecipe = await prisma.dietRecipe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DietRecipeFindFirstArgs>(args?: SelectSubset<T, DietRecipeFindFirstArgs<ExtArgs>>): Prisma__DietRecipeClient<$Result.GetResult<Prisma.$DietRecipePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DietRecipe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DietRecipeFindFirstOrThrowArgs} args - Arguments to find a DietRecipe
     * @example
     * // Get one DietRecipe
     * const dietRecipe = await prisma.dietRecipe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DietRecipeFindFirstOrThrowArgs>(args?: SelectSubset<T, DietRecipeFindFirstOrThrowArgs<ExtArgs>>): Prisma__DietRecipeClient<$Result.GetResult<Prisma.$DietRecipePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DietRecipes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DietRecipeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DietRecipes
     * const dietRecipes = await prisma.dietRecipe.findMany()
     * 
     * // Get first 10 DietRecipes
     * const dietRecipes = await prisma.dietRecipe.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dietRecipeWithIdOnly = await prisma.dietRecipe.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DietRecipeFindManyArgs>(args?: SelectSubset<T, DietRecipeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DietRecipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DietRecipe.
     * @param {DietRecipeCreateArgs} args - Arguments to create a DietRecipe.
     * @example
     * // Create one DietRecipe
     * const DietRecipe = await prisma.dietRecipe.create({
     *   data: {
     *     // ... data to create a DietRecipe
     *   }
     * })
     * 
     */
    create<T extends DietRecipeCreateArgs>(args: SelectSubset<T, DietRecipeCreateArgs<ExtArgs>>): Prisma__DietRecipeClient<$Result.GetResult<Prisma.$DietRecipePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DietRecipes.
     * @param {DietRecipeCreateManyArgs} args - Arguments to create many DietRecipes.
     * @example
     * // Create many DietRecipes
     * const dietRecipe = await prisma.dietRecipe.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DietRecipeCreateManyArgs>(args?: SelectSubset<T, DietRecipeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DietRecipes and returns the data saved in the database.
     * @param {DietRecipeCreateManyAndReturnArgs} args - Arguments to create many DietRecipes.
     * @example
     * // Create many DietRecipes
     * const dietRecipe = await prisma.dietRecipe.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DietRecipes and only return the `id`
     * const dietRecipeWithIdOnly = await prisma.dietRecipe.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DietRecipeCreateManyAndReturnArgs>(args?: SelectSubset<T, DietRecipeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DietRecipePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DietRecipe.
     * @param {DietRecipeDeleteArgs} args - Arguments to delete one DietRecipe.
     * @example
     * // Delete one DietRecipe
     * const DietRecipe = await prisma.dietRecipe.delete({
     *   where: {
     *     // ... filter to delete one DietRecipe
     *   }
     * })
     * 
     */
    delete<T extends DietRecipeDeleteArgs>(args: SelectSubset<T, DietRecipeDeleteArgs<ExtArgs>>): Prisma__DietRecipeClient<$Result.GetResult<Prisma.$DietRecipePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DietRecipe.
     * @param {DietRecipeUpdateArgs} args - Arguments to update one DietRecipe.
     * @example
     * // Update one DietRecipe
     * const dietRecipe = await prisma.dietRecipe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DietRecipeUpdateArgs>(args: SelectSubset<T, DietRecipeUpdateArgs<ExtArgs>>): Prisma__DietRecipeClient<$Result.GetResult<Prisma.$DietRecipePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DietRecipes.
     * @param {DietRecipeDeleteManyArgs} args - Arguments to filter DietRecipes to delete.
     * @example
     * // Delete a few DietRecipes
     * const { count } = await prisma.dietRecipe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DietRecipeDeleteManyArgs>(args?: SelectSubset<T, DietRecipeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DietRecipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DietRecipeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DietRecipes
     * const dietRecipe = await prisma.dietRecipe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DietRecipeUpdateManyArgs>(args: SelectSubset<T, DietRecipeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DietRecipes and returns the data updated in the database.
     * @param {DietRecipeUpdateManyAndReturnArgs} args - Arguments to update many DietRecipes.
     * @example
     * // Update many DietRecipes
     * const dietRecipe = await prisma.dietRecipe.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DietRecipes and only return the `id`
     * const dietRecipeWithIdOnly = await prisma.dietRecipe.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DietRecipeUpdateManyAndReturnArgs>(args: SelectSubset<T, DietRecipeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DietRecipePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DietRecipe.
     * @param {DietRecipeUpsertArgs} args - Arguments to update or create a DietRecipe.
     * @example
     * // Update or create a DietRecipe
     * const dietRecipe = await prisma.dietRecipe.upsert({
     *   create: {
     *     // ... data to create a DietRecipe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DietRecipe we want to update
     *   }
     * })
     */
    upsert<T extends DietRecipeUpsertArgs>(args: SelectSubset<T, DietRecipeUpsertArgs<ExtArgs>>): Prisma__DietRecipeClient<$Result.GetResult<Prisma.$DietRecipePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DietRecipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DietRecipeCountArgs} args - Arguments to filter DietRecipes to count.
     * @example
     * // Count the number of DietRecipes
     * const count = await prisma.dietRecipe.count({
     *   where: {
     *     // ... the filter for the DietRecipes we want to count
     *   }
     * })
    **/
    count<T extends DietRecipeCountArgs>(
      args?: Subset<T, DietRecipeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DietRecipeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DietRecipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DietRecipeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DietRecipeAggregateArgs>(args: Subset<T, DietRecipeAggregateArgs>): Prisma.PrismaPromise<GetDietRecipeAggregateType<T>>

    /**
     * Group by DietRecipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DietRecipeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DietRecipeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DietRecipeGroupByArgs['orderBy'] }
        : { orderBy?: DietRecipeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DietRecipeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDietRecipeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DietRecipe model
   */
  readonly fields: DietRecipeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DietRecipe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DietRecipeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recipe<T extends RecipeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RecipeDefaultArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    diet<T extends DietDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DietDefaultArgs<ExtArgs>>): Prisma__DietClient<$Result.GetResult<Prisma.$DietPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DietRecipe model
   */
  interface DietRecipeFieldRefs {
    readonly id: FieldRef<"DietRecipe", 'String'>
    readonly recipeId: FieldRef<"DietRecipe", 'String'>
    readonly dietId: FieldRef<"DietRecipe", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DietRecipe findUnique
   */
  export type DietRecipeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DietRecipe
     */
    select?: DietRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DietRecipe
     */
    omit?: DietRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietRecipeInclude<ExtArgs> | null
    /**
     * Filter, which DietRecipe to fetch.
     */
    where: DietRecipeWhereUniqueInput
  }

  /**
   * DietRecipe findUniqueOrThrow
   */
  export type DietRecipeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DietRecipe
     */
    select?: DietRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DietRecipe
     */
    omit?: DietRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietRecipeInclude<ExtArgs> | null
    /**
     * Filter, which DietRecipe to fetch.
     */
    where: DietRecipeWhereUniqueInput
  }

  /**
   * DietRecipe findFirst
   */
  export type DietRecipeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DietRecipe
     */
    select?: DietRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DietRecipe
     */
    omit?: DietRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietRecipeInclude<ExtArgs> | null
    /**
     * Filter, which DietRecipe to fetch.
     */
    where?: DietRecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DietRecipes to fetch.
     */
    orderBy?: DietRecipeOrderByWithRelationInput | DietRecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DietRecipes.
     */
    cursor?: DietRecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DietRecipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DietRecipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DietRecipes.
     */
    distinct?: DietRecipeScalarFieldEnum | DietRecipeScalarFieldEnum[]
  }

  /**
   * DietRecipe findFirstOrThrow
   */
  export type DietRecipeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DietRecipe
     */
    select?: DietRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DietRecipe
     */
    omit?: DietRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietRecipeInclude<ExtArgs> | null
    /**
     * Filter, which DietRecipe to fetch.
     */
    where?: DietRecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DietRecipes to fetch.
     */
    orderBy?: DietRecipeOrderByWithRelationInput | DietRecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DietRecipes.
     */
    cursor?: DietRecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DietRecipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DietRecipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DietRecipes.
     */
    distinct?: DietRecipeScalarFieldEnum | DietRecipeScalarFieldEnum[]
  }

  /**
   * DietRecipe findMany
   */
  export type DietRecipeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DietRecipe
     */
    select?: DietRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DietRecipe
     */
    omit?: DietRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietRecipeInclude<ExtArgs> | null
    /**
     * Filter, which DietRecipes to fetch.
     */
    where?: DietRecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DietRecipes to fetch.
     */
    orderBy?: DietRecipeOrderByWithRelationInput | DietRecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DietRecipes.
     */
    cursor?: DietRecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DietRecipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DietRecipes.
     */
    skip?: number
    distinct?: DietRecipeScalarFieldEnum | DietRecipeScalarFieldEnum[]
  }

  /**
   * DietRecipe create
   */
  export type DietRecipeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DietRecipe
     */
    select?: DietRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DietRecipe
     */
    omit?: DietRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietRecipeInclude<ExtArgs> | null
    /**
     * The data needed to create a DietRecipe.
     */
    data: XOR<DietRecipeCreateInput, DietRecipeUncheckedCreateInput>
  }

  /**
   * DietRecipe createMany
   */
  export type DietRecipeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DietRecipes.
     */
    data: DietRecipeCreateManyInput | DietRecipeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DietRecipe createManyAndReturn
   */
  export type DietRecipeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DietRecipe
     */
    select?: DietRecipeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DietRecipe
     */
    omit?: DietRecipeOmit<ExtArgs> | null
    /**
     * The data used to create many DietRecipes.
     */
    data: DietRecipeCreateManyInput | DietRecipeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietRecipeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DietRecipe update
   */
  export type DietRecipeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DietRecipe
     */
    select?: DietRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DietRecipe
     */
    omit?: DietRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietRecipeInclude<ExtArgs> | null
    /**
     * The data needed to update a DietRecipe.
     */
    data: XOR<DietRecipeUpdateInput, DietRecipeUncheckedUpdateInput>
    /**
     * Choose, which DietRecipe to update.
     */
    where: DietRecipeWhereUniqueInput
  }

  /**
   * DietRecipe updateMany
   */
  export type DietRecipeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DietRecipes.
     */
    data: XOR<DietRecipeUpdateManyMutationInput, DietRecipeUncheckedUpdateManyInput>
    /**
     * Filter which DietRecipes to update
     */
    where?: DietRecipeWhereInput
    /**
     * Limit how many DietRecipes to update.
     */
    limit?: number
  }

  /**
   * DietRecipe updateManyAndReturn
   */
  export type DietRecipeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DietRecipe
     */
    select?: DietRecipeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DietRecipe
     */
    omit?: DietRecipeOmit<ExtArgs> | null
    /**
     * The data used to update DietRecipes.
     */
    data: XOR<DietRecipeUpdateManyMutationInput, DietRecipeUncheckedUpdateManyInput>
    /**
     * Filter which DietRecipes to update
     */
    where?: DietRecipeWhereInput
    /**
     * Limit how many DietRecipes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietRecipeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DietRecipe upsert
   */
  export type DietRecipeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DietRecipe
     */
    select?: DietRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DietRecipe
     */
    omit?: DietRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietRecipeInclude<ExtArgs> | null
    /**
     * The filter to search for the DietRecipe to update in case it exists.
     */
    where: DietRecipeWhereUniqueInput
    /**
     * In case the DietRecipe found by the `where` argument doesn't exist, create a new DietRecipe with this data.
     */
    create: XOR<DietRecipeCreateInput, DietRecipeUncheckedCreateInput>
    /**
     * In case the DietRecipe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DietRecipeUpdateInput, DietRecipeUncheckedUpdateInput>
  }

  /**
   * DietRecipe delete
   */
  export type DietRecipeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DietRecipe
     */
    select?: DietRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DietRecipe
     */
    omit?: DietRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietRecipeInclude<ExtArgs> | null
    /**
     * Filter which DietRecipe to delete.
     */
    where: DietRecipeWhereUniqueInput
  }

  /**
   * DietRecipe deleteMany
   */
  export type DietRecipeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DietRecipes to delete
     */
    where?: DietRecipeWhereInput
    /**
     * Limit how many DietRecipes to delete.
     */
    limit?: number
  }

  /**
   * DietRecipe without action
   */
  export type DietRecipeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DietRecipe
     */
    select?: DietRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DietRecipe
     */
    omit?: DietRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DietRecipeInclude<ExtArgs> | null
  }


  /**
   * Model Origin
   */

  export type AggregateOrigin = {
    _count: OriginCountAggregateOutputType | null
    _min: OriginMinAggregateOutputType | null
    _max: OriginMaxAggregateOutputType | null
  }

  export type OriginMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type OriginMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type OriginCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type OriginMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type OriginMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type OriginCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type OriginAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Origin to aggregate.
     */
    where?: OriginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Origins to fetch.
     */
    orderBy?: OriginOrderByWithRelationInput | OriginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OriginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Origins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Origins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Origins
    **/
    _count?: true | OriginCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OriginMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OriginMaxAggregateInputType
  }

  export type GetOriginAggregateType<T extends OriginAggregateArgs> = {
        [P in keyof T & keyof AggregateOrigin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrigin[P]>
      : GetScalarType<T[P], AggregateOrigin[P]>
  }




  export type OriginGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OriginWhereInput
    orderBy?: OriginOrderByWithAggregationInput | OriginOrderByWithAggregationInput[]
    by: OriginScalarFieldEnum[] | OriginScalarFieldEnum
    having?: OriginScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OriginCountAggregateInputType | true
    _min?: OriginMinAggregateInputType
    _max?: OriginMaxAggregateInputType
  }

  export type OriginGroupByOutputType = {
    id: string
    name: string
    _count: OriginCountAggregateOutputType | null
    _min: OriginMinAggregateOutputType | null
    _max: OriginMaxAggregateOutputType | null
  }

  type GetOriginGroupByPayload<T extends OriginGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OriginGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OriginGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OriginGroupByOutputType[P]>
            : GetScalarType<T[P], OriginGroupByOutputType[P]>
        }
      >
    >


  export type OriginSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    recipes?: boolean | Origin$recipesArgs<ExtArgs>
    _count?: boolean | OriginCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["origin"]>

  export type OriginSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["origin"]>

  export type OriginSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["origin"]>

  export type OriginSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type OriginOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["origin"]>
  export type OriginInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipes?: boolean | Origin$recipesArgs<ExtArgs>
    _count?: boolean | OriginCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OriginIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OriginIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OriginPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Origin"
    objects: {
      recipes: Prisma.$OriginRecipePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["origin"]>
    composites: {}
  }

  type OriginGetPayload<S extends boolean | null | undefined | OriginDefaultArgs> = $Result.GetResult<Prisma.$OriginPayload, S>

  type OriginCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OriginFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OriginCountAggregateInputType | true
    }

  export interface OriginDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Origin'], meta: { name: 'Origin' } }
    /**
     * Find zero or one Origin that matches the filter.
     * @param {OriginFindUniqueArgs} args - Arguments to find a Origin
     * @example
     * // Get one Origin
     * const origin = await prisma.origin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OriginFindUniqueArgs>(args: SelectSubset<T, OriginFindUniqueArgs<ExtArgs>>): Prisma__OriginClient<$Result.GetResult<Prisma.$OriginPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Origin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OriginFindUniqueOrThrowArgs} args - Arguments to find a Origin
     * @example
     * // Get one Origin
     * const origin = await prisma.origin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OriginFindUniqueOrThrowArgs>(args: SelectSubset<T, OriginFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OriginClient<$Result.GetResult<Prisma.$OriginPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Origin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginFindFirstArgs} args - Arguments to find a Origin
     * @example
     * // Get one Origin
     * const origin = await prisma.origin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OriginFindFirstArgs>(args?: SelectSubset<T, OriginFindFirstArgs<ExtArgs>>): Prisma__OriginClient<$Result.GetResult<Prisma.$OriginPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Origin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginFindFirstOrThrowArgs} args - Arguments to find a Origin
     * @example
     * // Get one Origin
     * const origin = await prisma.origin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OriginFindFirstOrThrowArgs>(args?: SelectSubset<T, OriginFindFirstOrThrowArgs<ExtArgs>>): Prisma__OriginClient<$Result.GetResult<Prisma.$OriginPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Origins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Origins
     * const origins = await prisma.origin.findMany()
     * 
     * // Get first 10 Origins
     * const origins = await prisma.origin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const originWithIdOnly = await prisma.origin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OriginFindManyArgs>(args?: SelectSubset<T, OriginFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OriginPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Origin.
     * @param {OriginCreateArgs} args - Arguments to create a Origin.
     * @example
     * // Create one Origin
     * const Origin = await prisma.origin.create({
     *   data: {
     *     // ... data to create a Origin
     *   }
     * })
     * 
     */
    create<T extends OriginCreateArgs>(args: SelectSubset<T, OriginCreateArgs<ExtArgs>>): Prisma__OriginClient<$Result.GetResult<Prisma.$OriginPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Origins.
     * @param {OriginCreateManyArgs} args - Arguments to create many Origins.
     * @example
     * // Create many Origins
     * const origin = await prisma.origin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OriginCreateManyArgs>(args?: SelectSubset<T, OriginCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Origins and returns the data saved in the database.
     * @param {OriginCreateManyAndReturnArgs} args - Arguments to create many Origins.
     * @example
     * // Create many Origins
     * const origin = await prisma.origin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Origins and only return the `id`
     * const originWithIdOnly = await prisma.origin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OriginCreateManyAndReturnArgs>(args?: SelectSubset<T, OriginCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OriginPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Origin.
     * @param {OriginDeleteArgs} args - Arguments to delete one Origin.
     * @example
     * // Delete one Origin
     * const Origin = await prisma.origin.delete({
     *   where: {
     *     // ... filter to delete one Origin
     *   }
     * })
     * 
     */
    delete<T extends OriginDeleteArgs>(args: SelectSubset<T, OriginDeleteArgs<ExtArgs>>): Prisma__OriginClient<$Result.GetResult<Prisma.$OriginPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Origin.
     * @param {OriginUpdateArgs} args - Arguments to update one Origin.
     * @example
     * // Update one Origin
     * const origin = await prisma.origin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OriginUpdateArgs>(args: SelectSubset<T, OriginUpdateArgs<ExtArgs>>): Prisma__OriginClient<$Result.GetResult<Prisma.$OriginPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Origins.
     * @param {OriginDeleteManyArgs} args - Arguments to filter Origins to delete.
     * @example
     * // Delete a few Origins
     * const { count } = await prisma.origin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OriginDeleteManyArgs>(args?: SelectSubset<T, OriginDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Origins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Origins
     * const origin = await prisma.origin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OriginUpdateManyArgs>(args: SelectSubset<T, OriginUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Origins and returns the data updated in the database.
     * @param {OriginUpdateManyAndReturnArgs} args - Arguments to update many Origins.
     * @example
     * // Update many Origins
     * const origin = await prisma.origin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Origins and only return the `id`
     * const originWithIdOnly = await prisma.origin.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OriginUpdateManyAndReturnArgs>(args: SelectSubset<T, OriginUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OriginPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Origin.
     * @param {OriginUpsertArgs} args - Arguments to update or create a Origin.
     * @example
     * // Update or create a Origin
     * const origin = await prisma.origin.upsert({
     *   create: {
     *     // ... data to create a Origin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Origin we want to update
     *   }
     * })
     */
    upsert<T extends OriginUpsertArgs>(args: SelectSubset<T, OriginUpsertArgs<ExtArgs>>): Prisma__OriginClient<$Result.GetResult<Prisma.$OriginPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Origins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginCountArgs} args - Arguments to filter Origins to count.
     * @example
     * // Count the number of Origins
     * const count = await prisma.origin.count({
     *   where: {
     *     // ... the filter for the Origins we want to count
     *   }
     * })
    **/
    count<T extends OriginCountArgs>(
      args?: Subset<T, OriginCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OriginCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Origin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OriginAggregateArgs>(args: Subset<T, OriginAggregateArgs>): Prisma.PrismaPromise<GetOriginAggregateType<T>>

    /**
     * Group by Origin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OriginGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OriginGroupByArgs['orderBy'] }
        : { orderBy?: OriginGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OriginGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOriginGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Origin model
   */
  readonly fields: OriginFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Origin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OriginClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recipes<T extends Origin$recipesArgs<ExtArgs> = {}>(args?: Subset<T, Origin$recipesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OriginRecipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Origin model
   */
  interface OriginFieldRefs {
    readonly id: FieldRef<"Origin", 'String'>
    readonly name: FieldRef<"Origin", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Origin findUnique
   */
  export type OriginFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Origin
     */
    select?: OriginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Origin
     */
    omit?: OriginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginInclude<ExtArgs> | null
    /**
     * Filter, which Origin to fetch.
     */
    where: OriginWhereUniqueInput
  }

  /**
   * Origin findUniqueOrThrow
   */
  export type OriginFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Origin
     */
    select?: OriginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Origin
     */
    omit?: OriginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginInclude<ExtArgs> | null
    /**
     * Filter, which Origin to fetch.
     */
    where: OriginWhereUniqueInput
  }

  /**
   * Origin findFirst
   */
  export type OriginFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Origin
     */
    select?: OriginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Origin
     */
    omit?: OriginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginInclude<ExtArgs> | null
    /**
     * Filter, which Origin to fetch.
     */
    where?: OriginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Origins to fetch.
     */
    orderBy?: OriginOrderByWithRelationInput | OriginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Origins.
     */
    cursor?: OriginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Origins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Origins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Origins.
     */
    distinct?: OriginScalarFieldEnum | OriginScalarFieldEnum[]
  }

  /**
   * Origin findFirstOrThrow
   */
  export type OriginFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Origin
     */
    select?: OriginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Origin
     */
    omit?: OriginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginInclude<ExtArgs> | null
    /**
     * Filter, which Origin to fetch.
     */
    where?: OriginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Origins to fetch.
     */
    orderBy?: OriginOrderByWithRelationInput | OriginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Origins.
     */
    cursor?: OriginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Origins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Origins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Origins.
     */
    distinct?: OriginScalarFieldEnum | OriginScalarFieldEnum[]
  }

  /**
   * Origin findMany
   */
  export type OriginFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Origin
     */
    select?: OriginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Origin
     */
    omit?: OriginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginInclude<ExtArgs> | null
    /**
     * Filter, which Origins to fetch.
     */
    where?: OriginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Origins to fetch.
     */
    orderBy?: OriginOrderByWithRelationInput | OriginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Origins.
     */
    cursor?: OriginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Origins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Origins.
     */
    skip?: number
    distinct?: OriginScalarFieldEnum | OriginScalarFieldEnum[]
  }

  /**
   * Origin create
   */
  export type OriginCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Origin
     */
    select?: OriginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Origin
     */
    omit?: OriginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginInclude<ExtArgs> | null
    /**
     * The data needed to create a Origin.
     */
    data: XOR<OriginCreateInput, OriginUncheckedCreateInput>
  }

  /**
   * Origin createMany
   */
  export type OriginCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Origins.
     */
    data: OriginCreateManyInput | OriginCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Origin createManyAndReturn
   */
  export type OriginCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Origin
     */
    select?: OriginSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Origin
     */
    omit?: OriginOmit<ExtArgs> | null
    /**
     * The data used to create many Origins.
     */
    data: OriginCreateManyInput | OriginCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Origin update
   */
  export type OriginUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Origin
     */
    select?: OriginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Origin
     */
    omit?: OriginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginInclude<ExtArgs> | null
    /**
     * The data needed to update a Origin.
     */
    data: XOR<OriginUpdateInput, OriginUncheckedUpdateInput>
    /**
     * Choose, which Origin to update.
     */
    where: OriginWhereUniqueInput
  }

  /**
   * Origin updateMany
   */
  export type OriginUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Origins.
     */
    data: XOR<OriginUpdateManyMutationInput, OriginUncheckedUpdateManyInput>
    /**
     * Filter which Origins to update
     */
    where?: OriginWhereInput
    /**
     * Limit how many Origins to update.
     */
    limit?: number
  }

  /**
   * Origin updateManyAndReturn
   */
  export type OriginUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Origin
     */
    select?: OriginSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Origin
     */
    omit?: OriginOmit<ExtArgs> | null
    /**
     * The data used to update Origins.
     */
    data: XOR<OriginUpdateManyMutationInput, OriginUncheckedUpdateManyInput>
    /**
     * Filter which Origins to update
     */
    where?: OriginWhereInput
    /**
     * Limit how many Origins to update.
     */
    limit?: number
  }

  /**
   * Origin upsert
   */
  export type OriginUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Origin
     */
    select?: OriginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Origin
     */
    omit?: OriginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginInclude<ExtArgs> | null
    /**
     * The filter to search for the Origin to update in case it exists.
     */
    where: OriginWhereUniqueInput
    /**
     * In case the Origin found by the `where` argument doesn't exist, create a new Origin with this data.
     */
    create: XOR<OriginCreateInput, OriginUncheckedCreateInput>
    /**
     * In case the Origin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OriginUpdateInput, OriginUncheckedUpdateInput>
  }

  /**
   * Origin delete
   */
  export type OriginDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Origin
     */
    select?: OriginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Origin
     */
    omit?: OriginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginInclude<ExtArgs> | null
    /**
     * Filter which Origin to delete.
     */
    where: OriginWhereUniqueInput
  }

  /**
   * Origin deleteMany
   */
  export type OriginDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Origins to delete
     */
    where?: OriginWhereInput
    /**
     * Limit how many Origins to delete.
     */
    limit?: number
  }

  /**
   * Origin.recipes
   */
  export type Origin$recipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginRecipe
     */
    select?: OriginRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OriginRecipe
     */
    omit?: OriginRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginRecipeInclude<ExtArgs> | null
    where?: OriginRecipeWhereInput
    orderBy?: OriginRecipeOrderByWithRelationInput | OriginRecipeOrderByWithRelationInput[]
    cursor?: OriginRecipeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OriginRecipeScalarFieldEnum | OriginRecipeScalarFieldEnum[]
  }

  /**
   * Origin without action
   */
  export type OriginDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Origin
     */
    select?: OriginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Origin
     */
    omit?: OriginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginInclude<ExtArgs> | null
  }


  /**
   * Model OriginRecipe
   */

  export type AggregateOriginRecipe = {
    _count: OriginRecipeCountAggregateOutputType | null
    _min: OriginRecipeMinAggregateOutputType | null
    _max: OriginRecipeMaxAggregateOutputType | null
  }

  export type OriginRecipeMinAggregateOutputType = {
    id: string | null
    recipeId: string | null
    originId: string | null
  }

  export type OriginRecipeMaxAggregateOutputType = {
    id: string | null
    recipeId: string | null
    originId: string | null
  }

  export type OriginRecipeCountAggregateOutputType = {
    id: number
    recipeId: number
    originId: number
    _all: number
  }


  export type OriginRecipeMinAggregateInputType = {
    id?: true
    recipeId?: true
    originId?: true
  }

  export type OriginRecipeMaxAggregateInputType = {
    id?: true
    recipeId?: true
    originId?: true
  }

  export type OriginRecipeCountAggregateInputType = {
    id?: true
    recipeId?: true
    originId?: true
    _all?: true
  }

  export type OriginRecipeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OriginRecipe to aggregate.
     */
    where?: OriginRecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OriginRecipes to fetch.
     */
    orderBy?: OriginRecipeOrderByWithRelationInput | OriginRecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OriginRecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OriginRecipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OriginRecipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OriginRecipes
    **/
    _count?: true | OriginRecipeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OriginRecipeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OriginRecipeMaxAggregateInputType
  }

  export type GetOriginRecipeAggregateType<T extends OriginRecipeAggregateArgs> = {
        [P in keyof T & keyof AggregateOriginRecipe]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOriginRecipe[P]>
      : GetScalarType<T[P], AggregateOriginRecipe[P]>
  }




  export type OriginRecipeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OriginRecipeWhereInput
    orderBy?: OriginRecipeOrderByWithAggregationInput | OriginRecipeOrderByWithAggregationInput[]
    by: OriginRecipeScalarFieldEnum[] | OriginRecipeScalarFieldEnum
    having?: OriginRecipeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OriginRecipeCountAggregateInputType | true
    _min?: OriginRecipeMinAggregateInputType
    _max?: OriginRecipeMaxAggregateInputType
  }

  export type OriginRecipeGroupByOutputType = {
    id: string
    recipeId: string
    originId: string
    _count: OriginRecipeCountAggregateOutputType | null
    _min: OriginRecipeMinAggregateOutputType | null
    _max: OriginRecipeMaxAggregateOutputType | null
  }

  type GetOriginRecipeGroupByPayload<T extends OriginRecipeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OriginRecipeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OriginRecipeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OriginRecipeGroupByOutputType[P]>
            : GetScalarType<T[P], OriginRecipeGroupByOutputType[P]>
        }
      >
    >


  export type OriginRecipeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recipeId?: boolean
    originId?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    origin?: boolean | OriginDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["originRecipe"]>

  export type OriginRecipeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recipeId?: boolean
    originId?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    origin?: boolean | OriginDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["originRecipe"]>

  export type OriginRecipeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recipeId?: boolean
    originId?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    origin?: boolean | OriginDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["originRecipe"]>

  export type OriginRecipeSelectScalar = {
    id?: boolean
    recipeId?: boolean
    originId?: boolean
  }

  export type OriginRecipeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "recipeId" | "originId", ExtArgs["result"]["originRecipe"]>
  export type OriginRecipeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    origin?: boolean | OriginDefaultArgs<ExtArgs>
  }
  export type OriginRecipeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    origin?: boolean | OriginDefaultArgs<ExtArgs>
  }
  export type OriginRecipeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    origin?: boolean | OriginDefaultArgs<ExtArgs>
  }

  export type $OriginRecipePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OriginRecipe"
    objects: {
      recipe: Prisma.$RecipePayload<ExtArgs>
      origin: Prisma.$OriginPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      recipeId: string
      originId: string
    }, ExtArgs["result"]["originRecipe"]>
    composites: {}
  }

  type OriginRecipeGetPayload<S extends boolean | null | undefined | OriginRecipeDefaultArgs> = $Result.GetResult<Prisma.$OriginRecipePayload, S>

  type OriginRecipeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OriginRecipeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OriginRecipeCountAggregateInputType | true
    }

  export interface OriginRecipeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OriginRecipe'], meta: { name: 'OriginRecipe' } }
    /**
     * Find zero or one OriginRecipe that matches the filter.
     * @param {OriginRecipeFindUniqueArgs} args - Arguments to find a OriginRecipe
     * @example
     * // Get one OriginRecipe
     * const originRecipe = await prisma.originRecipe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OriginRecipeFindUniqueArgs>(args: SelectSubset<T, OriginRecipeFindUniqueArgs<ExtArgs>>): Prisma__OriginRecipeClient<$Result.GetResult<Prisma.$OriginRecipePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OriginRecipe that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OriginRecipeFindUniqueOrThrowArgs} args - Arguments to find a OriginRecipe
     * @example
     * // Get one OriginRecipe
     * const originRecipe = await prisma.originRecipe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OriginRecipeFindUniqueOrThrowArgs>(args: SelectSubset<T, OriginRecipeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OriginRecipeClient<$Result.GetResult<Prisma.$OriginRecipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OriginRecipe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginRecipeFindFirstArgs} args - Arguments to find a OriginRecipe
     * @example
     * // Get one OriginRecipe
     * const originRecipe = await prisma.originRecipe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OriginRecipeFindFirstArgs>(args?: SelectSubset<T, OriginRecipeFindFirstArgs<ExtArgs>>): Prisma__OriginRecipeClient<$Result.GetResult<Prisma.$OriginRecipePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OriginRecipe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginRecipeFindFirstOrThrowArgs} args - Arguments to find a OriginRecipe
     * @example
     * // Get one OriginRecipe
     * const originRecipe = await prisma.originRecipe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OriginRecipeFindFirstOrThrowArgs>(args?: SelectSubset<T, OriginRecipeFindFirstOrThrowArgs<ExtArgs>>): Prisma__OriginRecipeClient<$Result.GetResult<Prisma.$OriginRecipePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OriginRecipes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginRecipeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OriginRecipes
     * const originRecipes = await prisma.originRecipe.findMany()
     * 
     * // Get first 10 OriginRecipes
     * const originRecipes = await prisma.originRecipe.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const originRecipeWithIdOnly = await prisma.originRecipe.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OriginRecipeFindManyArgs>(args?: SelectSubset<T, OriginRecipeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OriginRecipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OriginRecipe.
     * @param {OriginRecipeCreateArgs} args - Arguments to create a OriginRecipe.
     * @example
     * // Create one OriginRecipe
     * const OriginRecipe = await prisma.originRecipe.create({
     *   data: {
     *     // ... data to create a OriginRecipe
     *   }
     * })
     * 
     */
    create<T extends OriginRecipeCreateArgs>(args: SelectSubset<T, OriginRecipeCreateArgs<ExtArgs>>): Prisma__OriginRecipeClient<$Result.GetResult<Prisma.$OriginRecipePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OriginRecipes.
     * @param {OriginRecipeCreateManyArgs} args - Arguments to create many OriginRecipes.
     * @example
     * // Create many OriginRecipes
     * const originRecipe = await prisma.originRecipe.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OriginRecipeCreateManyArgs>(args?: SelectSubset<T, OriginRecipeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OriginRecipes and returns the data saved in the database.
     * @param {OriginRecipeCreateManyAndReturnArgs} args - Arguments to create many OriginRecipes.
     * @example
     * // Create many OriginRecipes
     * const originRecipe = await prisma.originRecipe.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OriginRecipes and only return the `id`
     * const originRecipeWithIdOnly = await prisma.originRecipe.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OriginRecipeCreateManyAndReturnArgs>(args?: SelectSubset<T, OriginRecipeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OriginRecipePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OriginRecipe.
     * @param {OriginRecipeDeleteArgs} args - Arguments to delete one OriginRecipe.
     * @example
     * // Delete one OriginRecipe
     * const OriginRecipe = await prisma.originRecipe.delete({
     *   where: {
     *     // ... filter to delete one OriginRecipe
     *   }
     * })
     * 
     */
    delete<T extends OriginRecipeDeleteArgs>(args: SelectSubset<T, OriginRecipeDeleteArgs<ExtArgs>>): Prisma__OriginRecipeClient<$Result.GetResult<Prisma.$OriginRecipePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OriginRecipe.
     * @param {OriginRecipeUpdateArgs} args - Arguments to update one OriginRecipe.
     * @example
     * // Update one OriginRecipe
     * const originRecipe = await prisma.originRecipe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OriginRecipeUpdateArgs>(args: SelectSubset<T, OriginRecipeUpdateArgs<ExtArgs>>): Prisma__OriginRecipeClient<$Result.GetResult<Prisma.$OriginRecipePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OriginRecipes.
     * @param {OriginRecipeDeleteManyArgs} args - Arguments to filter OriginRecipes to delete.
     * @example
     * // Delete a few OriginRecipes
     * const { count } = await prisma.originRecipe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OriginRecipeDeleteManyArgs>(args?: SelectSubset<T, OriginRecipeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OriginRecipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginRecipeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OriginRecipes
     * const originRecipe = await prisma.originRecipe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OriginRecipeUpdateManyArgs>(args: SelectSubset<T, OriginRecipeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OriginRecipes and returns the data updated in the database.
     * @param {OriginRecipeUpdateManyAndReturnArgs} args - Arguments to update many OriginRecipes.
     * @example
     * // Update many OriginRecipes
     * const originRecipe = await prisma.originRecipe.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OriginRecipes and only return the `id`
     * const originRecipeWithIdOnly = await prisma.originRecipe.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OriginRecipeUpdateManyAndReturnArgs>(args: SelectSubset<T, OriginRecipeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OriginRecipePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OriginRecipe.
     * @param {OriginRecipeUpsertArgs} args - Arguments to update or create a OriginRecipe.
     * @example
     * // Update or create a OriginRecipe
     * const originRecipe = await prisma.originRecipe.upsert({
     *   create: {
     *     // ... data to create a OriginRecipe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OriginRecipe we want to update
     *   }
     * })
     */
    upsert<T extends OriginRecipeUpsertArgs>(args: SelectSubset<T, OriginRecipeUpsertArgs<ExtArgs>>): Prisma__OriginRecipeClient<$Result.GetResult<Prisma.$OriginRecipePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OriginRecipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginRecipeCountArgs} args - Arguments to filter OriginRecipes to count.
     * @example
     * // Count the number of OriginRecipes
     * const count = await prisma.originRecipe.count({
     *   where: {
     *     // ... the filter for the OriginRecipes we want to count
     *   }
     * })
    **/
    count<T extends OriginRecipeCountArgs>(
      args?: Subset<T, OriginRecipeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OriginRecipeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OriginRecipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginRecipeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OriginRecipeAggregateArgs>(args: Subset<T, OriginRecipeAggregateArgs>): Prisma.PrismaPromise<GetOriginRecipeAggregateType<T>>

    /**
     * Group by OriginRecipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginRecipeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OriginRecipeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OriginRecipeGroupByArgs['orderBy'] }
        : { orderBy?: OriginRecipeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OriginRecipeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOriginRecipeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OriginRecipe model
   */
  readonly fields: OriginRecipeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OriginRecipe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OriginRecipeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recipe<T extends RecipeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RecipeDefaultArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    origin<T extends OriginDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OriginDefaultArgs<ExtArgs>>): Prisma__OriginClient<$Result.GetResult<Prisma.$OriginPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OriginRecipe model
   */
  interface OriginRecipeFieldRefs {
    readonly id: FieldRef<"OriginRecipe", 'String'>
    readonly recipeId: FieldRef<"OriginRecipe", 'String'>
    readonly originId: FieldRef<"OriginRecipe", 'String'>
  }
    

  // Custom InputTypes
  /**
   * OriginRecipe findUnique
   */
  export type OriginRecipeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginRecipe
     */
    select?: OriginRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OriginRecipe
     */
    omit?: OriginRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginRecipeInclude<ExtArgs> | null
    /**
     * Filter, which OriginRecipe to fetch.
     */
    where: OriginRecipeWhereUniqueInput
  }

  /**
   * OriginRecipe findUniqueOrThrow
   */
  export type OriginRecipeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginRecipe
     */
    select?: OriginRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OriginRecipe
     */
    omit?: OriginRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginRecipeInclude<ExtArgs> | null
    /**
     * Filter, which OriginRecipe to fetch.
     */
    where: OriginRecipeWhereUniqueInput
  }

  /**
   * OriginRecipe findFirst
   */
  export type OriginRecipeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginRecipe
     */
    select?: OriginRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OriginRecipe
     */
    omit?: OriginRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginRecipeInclude<ExtArgs> | null
    /**
     * Filter, which OriginRecipe to fetch.
     */
    where?: OriginRecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OriginRecipes to fetch.
     */
    orderBy?: OriginRecipeOrderByWithRelationInput | OriginRecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OriginRecipes.
     */
    cursor?: OriginRecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OriginRecipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OriginRecipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OriginRecipes.
     */
    distinct?: OriginRecipeScalarFieldEnum | OriginRecipeScalarFieldEnum[]
  }

  /**
   * OriginRecipe findFirstOrThrow
   */
  export type OriginRecipeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginRecipe
     */
    select?: OriginRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OriginRecipe
     */
    omit?: OriginRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginRecipeInclude<ExtArgs> | null
    /**
     * Filter, which OriginRecipe to fetch.
     */
    where?: OriginRecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OriginRecipes to fetch.
     */
    orderBy?: OriginRecipeOrderByWithRelationInput | OriginRecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OriginRecipes.
     */
    cursor?: OriginRecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OriginRecipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OriginRecipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OriginRecipes.
     */
    distinct?: OriginRecipeScalarFieldEnum | OriginRecipeScalarFieldEnum[]
  }

  /**
   * OriginRecipe findMany
   */
  export type OriginRecipeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginRecipe
     */
    select?: OriginRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OriginRecipe
     */
    omit?: OriginRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginRecipeInclude<ExtArgs> | null
    /**
     * Filter, which OriginRecipes to fetch.
     */
    where?: OriginRecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OriginRecipes to fetch.
     */
    orderBy?: OriginRecipeOrderByWithRelationInput | OriginRecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OriginRecipes.
     */
    cursor?: OriginRecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OriginRecipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OriginRecipes.
     */
    skip?: number
    distinct?: OriginRecipeScalarFieldEnum | OriginRecipeScalarFieldEnum[]
  }

  /**
   * OriginRecipe create
   */
  export type OriginRecipeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginRecipe
     */
    select?: OriginRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OriginRecipe
     */
    omit?: OriginRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginRecipeInclude<ExtArgs> | null
    /**
     * The data needed to create a OriginRecipe.
     */
    data: XOR<OriginRecipeCreateInput, OriginRecipeUncheckedCreateInput>
  }

  /**
   * OriginRecipe createMany
   */
  export type OriginRecipeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OriginRecipes.
     */
    data: OriginRecipeCreateManyInput | OriginRecipeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OriginRecipe createManyAndReturn
   */
  export type OriginRecipeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginRecipe
     */
    select?: OriginRecipeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OriginRecipe
     */
    omit?: OriginRecipeOmit<ExtArgs> | null
    /**
     * The data used to create many OriginRecipes.
     */
    data: OriginRecipeCreateManyInput | OriginRecipeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginRecipeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OriginRecipe update
   */
  export type OriginRecipeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginRecipe
     */
    select?: OriginRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OriginRecipe
     */
    omit?: OriginRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginRecipeInclude<ExtArgs> | null
    /**
     * The data needed to update a OriginRecipe.
     */
    data: XOR<OriginRecipeUpdateInput, OriginRecipeUncheckedUpdateInput>
    /**
     * Choose, which OriginRecipe to update.
     */
    where: OriginRecipeWhereUniqueInput
  }

  /**
   * OriginRecipe updateMany
   */
  export type OriginRecipeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OriginRecipes.
     */
    data: XOR<OriginRecipeUpdateManyMutationInput, OriginRecipeUncheckedUpdateManyInput>
    /**
     * Filter which OriginRecipes to update
     */
    where?: OriginRecipeWhereInput
    /**
     * Limit how many OriginRecipes to update.
     */
    limit?: number
  }

  /**
   * OriginRecipe updateManyAndReturn
   */
  export type OriginRecipeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginRecipe
     */
    select?: OriginRecipeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OriginRecipe
     */
    omit?: OriginRecipeOmit<ExtArgs> | null
    /**
     * The data used to update OriginRecipes.
     */
    data: XOR<OriginRecipeUpdateManyMutationInput, OriginRecipeUncheckedUpdateManyInput>
    /**
     * Filter which OriginRecipes to update
     */
    where?: OriginRecipeWhereInput
    /**
     * Limit how many OriginRecipes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginRecipeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OriginRecipe upsert
   */
  export type OriginRecipeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginRecipe
     */
    select?: OriginRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OriginRecipe
     */
    omit?: OriginRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginRecipeInclude<ExtArgs> | null
    /**
     * The filter to search for the OriginRecipe to update in case it exists.
     */
    where: OriginRecipeWhereUniqueInput
    /**
     * In case the OriginRecipe found by the `where` argument doesn't exist, create a new OriginRecipe with this data.
     */
    create: XOR<OriginRecipeCreateInput, OriginRecipeUncheckedCreateInput>
    /**
     * In case the OriginRecipe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OriginRecipeUpdateInput, OriginRecipeUncheckedUpdateInput>
  }

  /**
   * OriginRecipe delete
   */
  export type OriginRecipeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginRecipe
     */
    select?: OriginRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OriginRecipe
     */
    omit?: OriginRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginRecipeInclude<ExtArgs> | null
    /**
     * Filter which OriginRecipe to delete.
     */
    where: OriginRecipeWhereUniqueInput
  }

  /**
   * OriginRecipe deleteMany
   */
  export type OriginRecipeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OriginRecipes to delete
     */
    where?: OriginRecipeWhereInput
    /**
     * Limit how many OriginRecipes to delete.
     */
    limit?: number
  }

  /**
   * OriginRecipe without action
   */
  export type OriginRecipeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginRecipe
     */
    select?: OriginRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OriginRecipe
     */
    omit?: OriginRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginRecipeInclude<ExtArgs> | null
  }


  /**
   * Model Favorite
   */

  export type AggregateFavorite = {
    _count: FavoriteCountAggregateOutputType | null
    _min: FavoriteMinAggregateOutputType | null
    _max: FavoriteMaxAggregateOutputType | null
  }

  export type FavoriteMinAggregateOutputType = {
    id: string | null
    userId: string | null
    recipeId: string | null
    createAt: Date | null
  }

  export type FavoriteMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    recipeId: string | null
    createAt: Date | null
  }

  export type FavoriteCountAggregateOutputType = {
    id: number
    userId: number
    recipeId: number
    createAt: number
    _all: number
  }


  export type FavoriteMinAggregateInputType = {
    id?: true
    userId?: true
    recipeId?: true
    createAt?: true
  }

  export type FavoriteMaxAggregateInputType = {
    id?: true
    userId?: true
    recipeId?: true
    createAt?: true
  }

  export type FavoriteCountAggregateInputType = {
    id?: true
    userId?: true
    recipeId?: true
    createAt?: true
    _all?: true
  }

  export type FavoriteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favorite to aggregate.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Favorites
    **/
    _count?: true | FavoriteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavoriteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavoriteMaxAggregateInputType
  }

  export type GetFavoriteAggregateType<T extends FavoriteAggregateArgs> = {
        [P in keyof T & keyof AggregateFavorite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavorite[P]>
      : GetScalarType<T[P], AggregateFavorite[P]>
  }




  export type FavoriteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteWhereInput
    orderBy?: FavoriteOrderByWithAggregationInput | FavoriteOrderByWithAggregationInput[]
    by: FavoriteScalarFieldEnum[] | FavoriteScalarFieldEnum
    having?: FavoriteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavoriteCountAggregateInputType | true
    _min?: FavoriteMinAggregateInputType
    _max?: FavoriteMaxAggregateInputType
  }

  export type FavoriteGroupByOutputType = {
    id: string
    userId: string
    recipeId: string
    createAt: Date
    _count: FavoriteCountAggregateOutputType | null
    _min: FavoriteMinAggregateOutputType | null
    _max: FavoriteMaxAggregateOutputType | null
  }

  type GetFavoriteGroupByPayload<T extends FavoriteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavoriteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavoriteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavoriteGroupByOutputType[P]>
            : GetScalarType<T[P], FavoriteGroupByOutputType[P]>
        }
      >
    >


  export type FavoriteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    recipeId?: boolean
    createAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type FavoriteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    recipeId?: boolean
    createAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type FavoriteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    recipeId?: boolean
    createAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type FavoriteSelectScalar = {
    id?: boolean
    userId?: boolean
    recipeId?: boolean
    createAt?: boolean
  }

  export type FavoriteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "recipeId" | "createAt", ExtArgs["result"]["favorite"]>
  export type FavoriteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }
  export type FavoriteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }
  export type FavoriteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }

  export type $FavoritePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Favorite"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      recipe: Prisma.$RecipePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      recipeId: string
      createAt: Date
    }, ExtArgs["result"]["favorite"]>
    composites: {}
  }

  type FavoriteGetPayload<S extends boolean | null | undefined | FavoriteDefaultArgs> = $Result.GetResult<Prisma.$FavoritePayload, S>

  type FavoriteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FavoriteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FavoriteCountAggregateInputType | true
    }

  export interface FavoriteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Favorite'], meta: { name: 'Favorite' } }
    /**
     * Find zero or one Favorite that matches the filter.
     * @param {FavoriteFindUniqueArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FavoriteFindUniqueArgs>(args: SelectSubset<T, FavoriteFindUniqueArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Favorite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FavoriteFindUniqueOrThrowArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FavoriteFindUniqueOrThrowArgs>(args: SelectSubset<T, FavoriteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favorite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindFirstArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FavoriteFindFirstArgs>(args?: SelectSubset<T, FavoriteFindFirstArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favorite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindFirstOrThrowArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FavoriteFindFirstOrThrowArgs>(args?: SelectSubset<T, FavoriteFindFirstOrThrowArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Favorites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Favorites
     * const favorites = await prisma.favorite.findMany()
     * 
     * // Get first 10 Favorites
     * const favorites = await prisma.favorite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const favoriteWithIdOnly = await prisma.favorite.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FavoriteFindManyArgs>(args?: SelectSubset<T, FavoriteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Favorite.
     * @param {FavoriteCreateArgs} args - Arguments to create a Favorite.
     * @example
     * // Create one Favorite
     * const Favorite = await prisma.favorite.create({
     *   data: {
     *     // ... data to create a Favorite
     *   }
     * })
     * 
     */
    create<T extends FavoriteCreateArgs>(args: SelectSubset<T, FavoriteCreateArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Favorites.
     * @param {FavoriteCreateManyArgs} args - Arguments to create many Favorites.
     * @example
     * // Create many Favorites
     * const favorite = await prisma.favorite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FavoriteCreateManyArgs>(args?: SelectSubset<T, FavoriteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Favorites and returns the data saved in the database.
     * @param {FavoriteCreateManyAndReturnArgs} args - Arguments to create many Favorites.
     * @example
     * // Create many Favorites
     * const favorite = await prisma.favorite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Favorites and only return the `id`
     * const favoriteWithIdOnly = await prisma.favorite.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FavoriteCreateManyAndReturnArgs>(args?: SelectSubset<T, FavoriteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Favorite.
     * @param {FavoriteDeleteArgs} args - Arguments to delete one Favorite.
     * @example
     * // Delete one Favorite
     * const Favorite = await prisma.favorite.delete({
     *   where: {
     *     // ... filter to delete one Favorite
     *   }
     * })
     * 
     */
    delete<T extends FavoriteDeleteArgs>(args: SelectSubset<T, FavoriteDeleteArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Favorite.
     * @param {FavoriteUpdateArgs} args - Arguments to update one Favorite.
     * @example
     * // Update one Favorite
     * const favorite = await prisma.favorite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FavoriteUpdateArgs>(args: SelectSubset<T, FavoriteUpdateArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Favorites.
     * @param {FavoriteDeleteManyArgs} args - Arguments to filter Favorites to delete.
     * @example
     * // Delete a few Favorites
     * const { count } = await prisma.favorite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FavoriteDeleteManyArgs>(args?: SelectSubset<T, FavoriteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Favorites
     * const favorite = await prisma.favorite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FavoriteUpdateManyArgs>(args: SelectSubset<T, FavoriteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favorites and returns the data updated in the database.
     * @param {FavoriteUpdateManyAndReturnArgs} args - Arguments to update many Favorites.
     * @example
     * // Update many Favorites
     * const favorite = await prisma.favorite.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Favorites and only return the `id`
     * const favoriteWithIdOnly = await prisma.favorite.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FavoriteUpdateManyAndReturnArgs>(args: SelectSubset<T, FavoriteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Favorite.
     * @param {FavoriteUpsertArgs} args - Arguments to update or create a Favorite.
     * @example
     * // Update or create a Favorite
     * const favorite = await prisma.favorite.upsert({
     *   create: {
     *     // ... data to create a Favorite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Favorite we want to update
     *   }
     * })
     */
    upsert<T extends FavoriteUpsertArgs>(args: SelectSubset<T, FavoriteUpsertArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteCountArgs} args - Arguments to filter Favorites to count.
     * @example
     * // Count the number of Favorites
     * const count = await prisma.favorite.count({
     *   where: {
     *     // ... the filter for the Favorites we want to count
     *   }
     * })
    **/
    count<T extends FavoriteCountArgs>(
      args?: Subset<T, FavoriteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavoriteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Favorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FavoriteAggregateArgs>(args: Subset<T, FavoriteAggregateArgs>): Prisma.PrismaPromise<GetFavoriteAggregateType<T>>

    /**
     * Group by Favorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FavoriteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavoriteGroupByArgs['orderBy'] }
        : { orderBy?: FavoriteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FavoriteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavoriteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Favorite model
   */
  readonly fields: FavoriteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Favorite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FavoriteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    recipe<T extends RecipeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RecipeDefaultArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Favorite model
   */
  interface FavoriteFieldRefs {
    readonly id: FieldRef<"Favorite", 'String'>
    readonly userId: FieldRef<"Favorite", 'String'>
    readonly recipeId: FieldRef<"Favorite", 'String'>
    readonly createAt: FieldRef<"Favorite", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Favorite findUnique
   */
  export type FavoriteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite findUniqueOrThrow
   */
  export type FavoriteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite findFirst
   */
  export type FavoriteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favorites.
     */
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Favorite findFirstOrThrow
   */
  export type FavoriteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favorites.
     */
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Favorite findMany
   */
  export type FavoriteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorites to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Favorite create
   */
  export type FavoriteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * The data needed to create a Favorite.
     */
    data: XOR<FavoriteCreateInput, FavoriteUncheckedCreateInput>
  }

  /**
   * Favorite createMany
   */
  export type FavoriteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Favorites.
     */
    data: FavoriteCreateManyInput | FavoriteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Favorite createManyAndReturn
   */
  export type FavoriteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * The data used to create many Favorites.
     */
    data: FavoriteCreateManyInput | FavoriteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Favorite update
   */
  export type FavoriteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * The data needed to update a Favorite.
     */
    data: XOR<FavoriteUpdateInput, FavoriteUncheckedUpdateInput>
    /**
     * Choose, which Favorite to update.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite updateMany
   */
  export type FavoriteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Favorites.
     */
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyInput>
    /**
     * Filter which Favorites to update
     */
    where?: FavoriteWhereInput
    /**
     * Limit how many Favorites to update.
     */
    limit?: number
  }

  /**
   * Favorite updateManyAndReturn
   */
  export type FavoriteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * The data used to update Favorites.
     */
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyInput>
    /**
     * Filter which Favorites to update
     */
    where?: FavoriteWhereInput
    /**
     * Limit how many Favorites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Favorite upsert
   */
  export type FavoriteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * The filter to search for the Favorite to update in case it exists.
     */
    where: FavoriteWhereUniqueInput
    /**
     * In case the Favorite found by the `where` argument doesn't exist, create a new Favorite with this data.
     */
    create: XOR<FavoriteCreateInput, FavoriteUncheckedCreateInput>
    /**
     * In case the Favorite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FavoriteUpdateInput, FavoriteUncheckedUpdateInput>
  }

  /**
   * Favorite delete
   */
  export type FavoriteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter which Favorite to delete.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite deleteMany
   */
  export type FavoriteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favorites to delete
     */
    where?: FavoriteWhereInput
    /**
     * Limit how many Favorites to delete.
     */
    limit?: number
  }

  /**
   * Favorite without action
   */
  export type FavoriteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    image: 'image',
    consent: 'consent',
    roleId: 'roleId',
    createAt: 'createAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const RecipeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    serve: 'serve',
    description: 'description',
    instructions: 'instructions',
    typeId: 'typeId',
    imageUrl: 'imageUrl',
    prepTime: 'prepTime',
    cookTime: 'cookTime',
    createAt: 'createAt'
  };

  export type RecipeScalarFieldEnum = (typeof RecipeScalarFieldEnum)[keyof typeof RecipeScalarFieldEnum]


  export const TypeScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type TypeScalarFieldEnum = (typeof TypeScalarFieldEnum)[keyof typeof TypeScalarFieldEnum]


  export const IngredientScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type IngredientScalarFieldEnum = (typeof IngredientScalarFieldEnum)[keyof typeof IngredientScalarFieldEnum]


  export const RecipeIngredientScalarFieldEnum: {
    id: 'id',
    recipeId: 'recipeId',
    ingredientId: 'ingredientId',
    quantity: 'quantity'
  };

  export type RecipeIngredientScalarFieldEnum = (typeof RecipeIngredientScalarFieldEnum)[keyof typeof RecipeIngredientScalarFieldEnum]


  export const UstensilScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type UstensilScalarFieldEnum = (typeof UstensilScalarFieldEnum)[keyof typeof UstensilScalarFieldEnum]


  export const RecipeUstensilScalarFieldEnum: {
    id: 'id',
    recipeId: 'recipeId',
    ustensilId: 'ustensilId'
  };

  export type RecipeUstensilScalarFieldEnum = (typeof RecipeUstensilScalarFieldEnum)[keyof typeof RecipeUstensilScalarFieldEnum]


  export const MoodScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type MoodScalarFieldEnum = (typeof MoodScalarFieldEnum)[keyof typeof MoodScalarFieldEnum]


  export const MoodRecipeScalarFieldEnum: {
    id: 'id',
    recipeId: 'recipeId',
    moodId: 'moodId'
  };

  export type MoodRecipeScalarFieldEnum = (typeof MoodRecipeScalarFieldEnum)[keyof typeof MoodRecipeScalarFieldEnum]


  export const DietScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type DietScalarFieldEnum = (typeof DietScalarFieldEnum)[keyof typeof DietScalarFieldEnum]


  export const DietRecipeScalarFieldEnum: {
    id: 'id',
    recipeId: 'recipeId',
    dietId: 'dietId'
  };

  export type DietRecipeScalarFieldEnum = (typeof DietRecipeScalarFieldEnum)[keyof typeof DietRecipeScalarFieldEnum]


  export const OriginScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type OriginScalarFieldEnum = (typeof OriginScalarFieldEnum)[keyof typeof OriginScalarFieldEnum]


  export const OriginRecipeScalarFieldEnum: {
    id: 'id',
    recipeId: 'recipeId',
    originId: 'originId'
  };

  export type OriginRecipeScalarFieldEnum = (typeof OriginRecipeScalarFieldEnum)[keyof typeof OriginRecipeScalarFieldEnum]


  export const FavoriteScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    recipeId: 'recipeId',
    createAt: 'createAt'
  };

  export type FavoriteScalarFieldEnum = (typeof FavoriteScalarFieldEnum)[keyof typeof FavoriteScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    consent?: BoolFilter<"User"> | boolean
    roleId?: StringFilter<"User"> | string
    createAt?: DateTimeFilter<"User"> | Date | string
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    recipes?: RecipeListRelationFilter
    favorites?: FavoriteListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrderInput | SortOrder
    consent?: SortOrder
    roleId?: SortOrder
    createAt?: SortOrder
    role?: RoleOrderByWithRelationInput
    recipes?: RecipeOrderByRelationAggregateInput
    favorites?: FavoriteOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    consent?: BoolFilter<"User"> | boolean
    roleId?: StringFilter<"User"> | string
    createAt?: DateTimeFilter<"User"> | Date | string
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    recipes?: RecipeListRelationFilter
    favorites?: FavoriteListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrderInput | SortOrder
    consent?: SortOrder
    roleId?: SortOrder
    createAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    consent?: BoolWithAggregatesFilter<"User"> | boolean
    roleId?: StringWithAggregatesFilter<"User"> | string
    createAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: StringFilter<"Role"> | string
    name?: StringFilter<"Role"> | string
    users?: UserListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    users?: UserListRelationFilter
  }, "id" | "name">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Role"> | string
    name?: StringWithAggregatesFilter<"Role"> | string
  }

  export type RecipeWhereInput = {
    AND?: RecipeWhereInput | RecipeWhereInput[]
    OR?: RecipeWhereInput[]
    NOT?: RecipeWhereInput | RecipeWhereInput[]
    id?: StringFilter<"Recipe"> | string
    userId?: StringFilter<"Recipe"> | string
    title?: StringFilter<"Recipe"> | string
    serve?: IntNullableFilter<"Recipe"> | number | null
    description?: StringNullableFilter<"Recipe"> | string | null
    instructions?: StringFilter<"Recipe"> | string
    typeId?: StringFilter<"Recipe"> | string
    imageUrl?: StringFilter<"Recipe"> | string
    prepTime?: IntFilter<"Recipe"> | number
    cookTime?: IntFilter<"Recipe"> | number
    createAt?: DateTimeFilter<"Recipe"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    ingredients?: RecipeIngredientListRelationFilter
    ustensils?: RecipeUstensilListRelationFilter
    type?: XOR<TypeScalarRelationFilter, TypeWhereInput>
    moods?: MoodRecipeListRelationFilter
    diets?: DietRecipeListRelationFilter
    origins?: OriginRecipeListRelationFilter
    favorites?: FavoriteListRelationFilter
  }

  export type RecipeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    serve?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    instructions?: SortOrder
    typeId?: SortOrder
    imageUrl?: SortOrder
    prepTime?: SortOrder
    cookTime?: SortOrder
    createAt?: SortOrder
    user?: UserOrderByWithRelationInput
    ingredients?: RecipeIngredientOrderByRelationAggregateInput
    ustensils?: RecipeUstensilOrderByRelationAggregateInput
    type?: TypeOrderByWithRelationInput
    moods?: MoodRecipeOrderByRelationAggregateInput
    diets?: DietRecipeOrderByRelationAggregateInput
    origins?: OriginRecipeOrderByRelationAggregateInput
    favorites?: FavoriteOrderByRelationAggregateInput
  }

  export type RecipeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RecipeWhereInput | RecipeWhereInput[]
    OR?: RecipeWhereInput[]
    NOT?: RecipeWhereInput | RecipeWhereInput[]
    userId?: StringFilter<"Recipe"> | string
    title?: StringFilter<"Recipe"> | string
    serve?: IntNullableFilter<"Recipe"> | number | null
    description?: StringNullableFilter<"Recipe"> | string | null
    instructions?: StringFilter<"Recipe"> | string
    typeId?: StringFilter<"Recipe"> | string
    imageUrl?: StringFilter<"Recipe"> | string
    prepTime?: IntFilter<"Recipe"> | number
    cookTime?: IntFilter<"Recipe"> | number
    createAt?: DateTimeFilter<"Recipe"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    ingredients?: RecipeIngredientListRelationFilter
    ustensils?: RecipeUstensilListRelationFilter
    type?: XOR<TypeScalarRelationFilter, TypeWhereInput>
    moods?: MoodRecipeListRelationFilter
    diets?: DietRecipeListRelationFilter
    origins?: OriginRecipeListRelationFilter
    favorites?: FavoriteListRelationFilter
  }, "id">

  export type RecipeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    serve?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    instructions?: SortOrder
    typeId?: SortOrder
    imageUrl?: SortOrder
    prepTime?: SortOrder
    cookTime?: SortOrder
    createAt?: SortOrder
    _count?: RecipeCountOrderByAggregateInput
    _avg?: RecipeAvgOrderByAggregateInput
    _max?: RecipeMaxOrderByAggregateInput
    _min?: RecipeMinOrderByAggregateInput
    _sum?: RecipeSumOrderByAggregateInput
  }

  export type RecipeScalarWhereWithAggregatesInput = {
    AND?: RecipeScalarWhereWithAggregatesInput | RecipeScalarWhereWithAggregatesInput[]
    OR?: RecipeScalarWhereWithAggregatesInput[]
    NOT?: RecipeScalarWhereWithAggregatesInput | RecipeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Recipe"> | string
    userId?: StringWithAggregatesFilter<"Recipe"> | string
    title?: StringWithAggregatesFilter<"Recipe"> | string
    serve?: IntNullableWithAggregatesFilter<"Recipe"> | number | null
    description?: StringNullableWithAggregatesFilter<"Recipe"> | string | null
    instructions?: StringWithAggregatesFilter<"Recipe"> | string
    typeId?: StringWithAggregatesFilter<"Recipe"> | string
    imageUrl?: StringWithAggregatesFilter<"Recipe"> | string
    prepTime?: IntWithAggregatesFilter<"Recipe"> | number
    cookTime?: IntWithAggregatesFilter<"Recipe"> | number
    createAt?: DateTimeWithAggregatesFilter<"Recipe"> | Date | string
  }

  export type TypeWhereInput = {
    AND?: TypeWhereInput | TypeWhereInput[]
    OR?: TypeWhereInput[]
    NOT?: TypeWhereInput | TypeWhereInput[]
    id?: StringFilter<"Type"> | string
    name?: StringFilter<"Type"> | string
    recipes?: RecipeListRelationFilter
  }

  export type TypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    recipes?: RecipeOrderByRelationAggregateInput
  }

  export type TypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: TypeWhereInput | TypeWhereInput[]
    OR?: TypeWhereInput[]
    NOT?: TypeWhereInput | TypeWhereInput[]
    recipes?: RecipeListRelationFilter
  }, "id" | "name">

  export type TypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: TypeCountOrderByAggregateInput
    _max?: TypeMaxOrderByAggregateInput
    _min?: TypeMinOrderByAggregateInput
  }

  export type TypeScalarWhereWithAggregatesInput = {
    AND?: TypeScalarWhereWithAggregatesInput | TypeScalarWhereWithAggregatesInput[]
    OR?: TypeScalarWhereWithAggregatesInput[]
    NOT?: TypeScalarWhereWithAggregatesInput | TypeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Type"> | string
    name?: StringWithAggregatesFilter<"Type"> | string
  }

  export type IngredientWhereInput = {
    AND?: IngredientWhereInput | IngredientWhereInput[]
    OR?: IngredientWhereInput[]
    NOT?: IngredientWhereInput | IngredientWhereInput[]
    id?: StringFilter<"Ingredient"> | string
    name?: StringFilter<"Ingredient"> | string
    recipes?: RecipeIngredientListRelationFilter
  }

  export type IngredientOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    recipes?: RecipeIngredientOrderByRelationAggregateInput
  }

  export type IngredientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: IngredientWhereInput | IngredientWhereInput[]
    OR?: IngredientWhereInput[]
    NOT?: IngredientWhereInput | IngredientWhereInput[]
    recipes?: RecipeIngredientListRelationFilter
  }, "id" | "name">

  export type IngredientOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: IngredientCountOrderByAggregateInput
    _max?: IngredientMaxOrderByAggregateInput
    _min?: IngredientMinOrderByAggregateInput
  }

  export type IngredientScalarWhereWithAggregatesInput = {
    AND?: IngredientScalarWhereWithAggregatesInput | IngredientScalarWhereWithAggregatesInput[]
    OR?: IngredientScalarWhereWithAggregatesInput[]
    NOT?: IngredientScalarWhereWithAggregatesInput | IngredientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ingredient"> | string
    name?: StringWithAggregatesFilter<"Ingredient"> | string
  }

  export type RecipeIngredientWhereInput = {
    AND?: RecipeIngredientWhereInput | RecipeIngredientWhereInput[]
    OR?: RecipeIngredientWhereInput[]
    NOT?: RecipeIngredientWhereInput | RecipeIngredientWhereInput[]
    id?: StringFilter<"RecipeIngredient"> | string
    recipeId?: StringFilter<"RecipeIngredient"> | string
    ingredientId?: StringFilter<"RecipeIngredient"> | string
    quantity?: StringFilter<"RecipeIngredient"> | string
    recipe?: XOR<RecipeScalarRelationFilter, RecipeWhereInput>
    ingredient?: XOR<IngredientScalarRelationFilter, IngredientWhereInput>
  }

  export type RecipeIngredientOrderByWithRelationInput = {
    id?: SortOrder
    recipeId?: SortOrder
    ingredientId?: SortOrder
    quantity?: SortOrder
    recipe?: RecipeOrderByWithRelationInput
    ingredient?: IngredientOrderByWithRelationInput
  }

  export type RecipeIngredientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RecipeIngredientWhereInput | RecipeIngredientWhereInput[]
    OR?: RecipeIngredientWhereInput[]
    NOT?: RecipeIngredientWhereInput | RecipeIngredientWhereInput[]
    recipeId?: StringFilter<"RecipeIngredient"> | string
    ingredientId?: StringFilter<"RecipeIngredient"> | string
    quantity?: StringFilter<"RecipeIngredient"> | string
    recipe?: XOR<RecipeScalarRelationFilter, RecipeWhereInput>
    ingredient?: XOR<IngredientScalarRelationFilter, IngredientWhereInput>
  }, "id">

  export type RecipeIngredientOrderByWithAggregationInput = {
    id?: SortOrder
    recipeId?: SortOrder
    ingredientId?: SortOrder
    quantity?: SortOrder
    _count?: RecipeIngredientCountOrderByAggregateInput
    _max?: RecipeIngredientMaxOrderByAggregateInput
    _min?: RecipeIngredientMinOrderByAggregateInput
  }

  export type RecipeIngredientScalarWhereWithAggregatesInput = {
    AND?: RecipeIngredientScalarWhereWithAggregatesInput | RecipeIngredientScalarWhereWithAggregatesInput[]
    OR?: RecipeIngredientScalarWhereWithAggregatesInput[]
    NOT?: RecipeIngredientScalarWhereWithAggregatesInput | RecipeIngredientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RecipeIngredient"> | string
    recipeId?: StringWithAggregatesFilter<"RecipeIngredient"> | string
    ingredientId?: StringWithAggregatesFilter<"RecipeIngredient"> | string
    quantity?: StringWithAggregatesFilter<"RecipeIngredient"> | string
  }

  export type UstensilWhereInput = {
    AND?: UstensilWhereInput | UstensilWhereInput[]
    OR?: UstensilWhereInput[]
    NOT?: UstensilWhereInput | UstensilWhereInput[]
    id?: StringFilter<"Ustensil"> | string
    name?: StringFilter<"Ustensil"> | string
    recipes?: RecipeUstensilListRelationFilter
  }

  export type UstensilOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    recipes?: RecipeUstensilOrderByRelationAggregateInput
  }

  export type UstensilWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: UstensilWhereInput | UstensilWhereInput[]
    OR?: UstensilWhereInput[]
    NOT?: UstensilWhereInput | UstensilWhereInput[]
    recipes?: RecipeUstensilListRelationFilter
  }, "id" | "name">

  export type UstensilOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: UstensilCountOrderByAggregateInput
    _max?: UstensilMaxOrderByAggregateInput
    _min?: UstensilMinOrderByAggregateInput
  }

  export type UstensilScalarWhereWithAggregatesInput = {
    AND?: UstensilScalarWhereWithAggregatesInput | UstensilScalarWhereWithAggregatesInput[]
    OR?: UstensilScalarWhereWithAggregatesInput[]
    NOT?: UstensilScalarWhereWithAggregatesInput | UstensilScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ustensil"> | string
    name?: StringWithAggregatesFilter<"Ustensil"> | string
  }

  export type RecipeUstensilWhereInput = {
    AND?: RecipeUstensilWhereInput | RecipeUstensilWhereInput[]
    OR?: RecipeUstensilWhereInput[]
    NOT?: RecipeUstensilWhereInput | RecipeUstensilWhereInput[]
    id?: StringFilter<"RecipeUstensil"> | string
    recipeId?: StringFilter<"RecipeUstensil"> | string
    ustensilId?: StringFilter<"RecipeUstensil"> | string
    recipe?: XOR<RecipeScalarRelationFilter, RecipeWhereInput>
    ustensil?: XOR<UstensilScalarRelationFilter, UstensilWhereInput>
  }

  export type RecipeUstensilOrderByWithRelationInput = {
    id?: SortOrder
    recipeId?: SortOrder
    ustensilId?: SortOrder
    recipe?: RecipeOrderByWithRelationInput
    ustensil?: UstensilOrderByWithRelationInput
  }

  export type RecipeUstensilWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RecipeUstensilWhereInput | RecipeUstensilWhereInput[]
    OR?: RecipeUstensilWhereInput[]
    NOT?: RecipeUstensilWhereInput | RecipeUstensilWhereInput[]
    recipeId?: StringFilter<"RecipeUstensil"> | string
    ustensilId?: StringFilter<"RecipeUstensil"> | string
    recipe?: XOR<RecipeScalarRelationFilter, RecipeWhereInput>
    ustensil?: XOR<UstensilScalarRelationFilter, UstensilWhereInput>
  }, "id">

  export type RecipeUstensilOrderByWithAggregationInput = {
    id?: SortOrder
    recipeId?: SortOrder
    ustensilId?: SortOrder
    _count?: RecipeUstensilCountOrderByAggregateInput
    _max?: RecipeUstensilMaxOrderByAggregateInput
    _min?: RecipeUstensilMinOrderByAggregateInput
  }

  export type RecipeUstensilScalarWhereWithAggregatesInput = {
    AND?: RecipeUstensilScalarWhereWithAggregatesInput | RecipeUstensilScalarWhereWithAggregatesInput[]
    OR?: RecipeUstensilScalarWhereWithAggregatesInput[]
    NOT?: RecipeUstensilScalarWhereWithAggregatesInput | RecipeUstensilScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RecipeUstensil"> | string
    recipeId?: StringWithAggregatesFilter<"RecipeUstensil"> | string
    ustensilId?: StringWithAggregatesFilter<"RecipeUstensil"> | string
  }

  export type MoodWhereInput = {
    AND?: MoodWhereInput | MoodWhereInput[]
    OR?: MoodWhereInput[]
    NOT?: MoodWhereInput | MoodWhereInput[]
    id?: StringFilter<"Mood"> | string
    name?: StringFilter<"Mood"> | string
    recipes?: MoodRecipeListRelationFilter
  }

  export type MoodOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    recipes?: MoodRecipeOrderByRelationAggregateInput
  }

  export type MoodWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: MoodWhereInput | MoodWhereInput[]
    OR?: MoodWhereInput[]
    NOT?: MoodWhereInput | MoodWhereInput[]
    recipes?: MoodRecipeListRelationFilter
  }, "id" | "name">

  export type MoodOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: MoodCountOrderByAggregateInput
    _max?: MoodMaxOrderByAggregateInput
    _min?: MoodMinOrderByAggregateInput
  }

  export type MoodScalarWhereWithAggregatesInput = {
    AND?: MoodScalarWhereWithAggregatesInput | MoodScalarWhereWithAggregatesInput[]
    OR?: MoodScalarWhereWithAggregatesInput[]
    NOT?: MoodScalarWhereWithAggregatesInput | MoodScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Mood"> | string
    name?: StringWithAggregatesFilter<"Mood"> | string
  }

  export type MoodRecipeWhereInput = {
    AND?: MoodRecipeWhereInput | MoodRecipeWhereInput[]
    OR?: MoodRecipeWhereInput[]
    NOT?: MoodRecipeWhereInput | MoodRecipeWhereInput[]
    id?: StringFilter<"MoodRecipe"> | string
    recipeId?: StringFilter<"MoodRecipe"> | string
    moodId?: StringFilter<"MoodRecipe"> | string
    recipe?: XOR<RecipeScalarRelationFilter, RecipeWhereInput>
    mood?: XOR<MoodScalarRelationFilter, MoodWhereInput>
  }

  export type MoodRecipeOrderByWithRelationInput = {
    id?: SortOrder
    recipeId?: SortOrder
    moodId?: SortOrder
    recipe?: RecipeOrderByWithRelationInput
    mood?: MoodOrderByWithRelationInput
  }

  export type MoodRecipeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MoodRecipeWhereInput | MoodRecipeWhereInput[]
    OR?: MoodRecipeWhereInput[]
    NOT?: MoodRecipeWhereInput | MoodRecipeWhereInput[]
    recipeId?: StringFilter<"MoodRecipe"> | string
    moodId?: StringFilter<"MoodRecipe"> | string
    recipe?: XOR<RecipeScalarRelationFilter, RecipeWhereInput>
    mood?: XOR<MoodScalarRelationFilter, MoodWhereInput>
  }, "id">

  export type MoodRecipeOrderByWithAggregationInput = {
    id?: SortOrder
    recipeId?: SortOrder
    moodId?: SortOrder
    _count?: MoodRecipeCountOrderByAggregateInput
    _max?: MoodRecipeMaxOrderByAggregateInput
    _min?: MoodRecipeMinOrderByAggregateInput
  }

  export type MoodRecipeScalarWhereWithAggregatesInput = {
    AND?: MoodRecipeScalarWhereWithAggregatesInput | MoodRecipeScalarWhereWithAggregatesInput[]
    OR?: MoodRecipeScalarWhereWithAggregatesInput[]
    NOT?: MoodRecipeScalarWhereWithAggregatesInput | MoodRecipeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MoodRecipe"> | string
    recipeId?: StringWithAggregatesFilter<"MoodRecipe"> | string
    moodId?: StringWithAggregatesFilter<"MoodRecipe"> | string
  }

  export type DietWhereInput = {
    AND?: DietWhereInput | DietWhereInput[]
    OR?: DietWhereInput[]
    NOT?: DietWhereInput | DietWhereInput[]
    id?: StringFilter<"Diet"> | string
    name?: StringFilter<"Diet"> | string
    recipes?: DietRecipeListRelationFilter
  }

  export type DietOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    recipes?: DietRecipeOrderByRelationAggregateInput
  }

  export type DietWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: DietWhereInput | DietWhereInput[]
    OR?: DietWhereInput[]
    NOT?: DietWhereInput | DietWhereInput[]
    recipes?: DietRecipeListRelationFilter
  }, "id" | "name">

  export type DietOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: DietCountOrderByAggregateInput
    _max?: DietMaxOrderByAggregateInput
    _min?: DietMinOrderByAggregateInput
  }

  export type DietScalarWhereWithAggregatesInput = {
    AND?: DietScalarWhereWithAggregatesInput | DietScalarWhereWithAggregatesInput[]
    OR?: DietScalarWhereWithAggregatesInput[]
    NOT?: DietScalarWhereWithAggregatesInput | DietScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Diet"> | string
    name?: StringWithAggregatesFilter<"Diet"> | string
  }

  export type DietRecipeWhereInput = {
    AND?: DietRecipeWhereInput | DietRecipeWhereInput[]
    OR?: DietRecipeWhereInput[]
    NOT?: DietRecipeWhereInput | DietRecipeWhereInput[]
    id?: StringFilter<"DietRecipe"> | string
    recipeId?: StringFilter<"DietRecipe"> | string
    dietId?: StringFilter<"DietRecipe"> | string
    recipe?: XOR<RecipeScalarRelationFilter, RecipeWhereInput>
    diet?: XOR<DietScalarRelationFilter, DietWhereInput>
  }

  export type DietRecipeOrderByWithRelationInput = {
    id?: SortOrder
    recipeId?: SortOrder
    dietId?: SortOrder
    recipe?: RecipeOrderByWithRelationInput
    diet?: DietOrderByWithRelationInput
  }

  export type DietRecipeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DietRecipeWhereInput | DietRecipeWhereInput[]
    OR?: DietRecipeWhereInput[]
    NOT?: DietRecipeWhereInput | DietRecipeWhereInput[]
    recipeId?: StringFilter<"DietRecipe"> | string
    dietId?: StringFilter<"DietRecipe"> | string
    recipe?: XOR<RecipeScalarRelationFilter, RecipeWhereInput>
    diet?: XOR<DietScalarRelationFilter, DietWhereInput>
  }, "id">

  export type DietRecipeOrderByWithAggregationInput = {
    id?: SortOrder
    recipeId?: SortOrder
    dietId?: SortOrder
    _count?: DietRecipeCountOrderByAggregateInput
    _max?: DietRecipeMaxOrderByAggregateInput
    _min?: DietRecipeMinOrderByAggregateInput
  }

  export type DietRecipeScalarWhereWithAggregatesInput = {
    AND?: DietRecipeScalarWhereWithAggregatesInput | DietRecipeScalarWhereWithAggregatesInput[]
    OR?: DietRecipeScalarWhereWithAggregatesInput[]
    NOT?: DietRecipeScalarWhereWithAggregatesInput | DietRecipeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DietRecipe"> | string
    recipeId?: StringWithAggregatesFilter<"DietRecipe"> | string
    dietId?: StringWithAggregatesFilter<"DietRecipe"> | string
  }

  export type OriginWhereInput = {
    AND?: OriginWhereInput | OriginWhereInput[]
    OR?: OriginWhereInput[]
    NOT?: OriginWhereInput | OriginWhereInput[]
    id?: StringFilter<"Origin"> | string
    name?: StringFilter<"Origin"> | string
    recipes?: OriginRecipeListRelationFilter
  }

  export type OriginOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    recipes?: OriginRecipeOrderByRelationAggregateInput
  }

  export type OriginWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: OriginWhereInput | OriginWhereInput[]
    OR?: OriginWhereInput[]
    NOT?: OriginWhereInput | OriginWhereInput[]
    recipes?: OriginRecipeListRelationFilter
  }, "id" | "name">

  export type OriginOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: OriginCountOrderByAggregateInput
    _max?: OriginMaxOrderByAggregateInput
    _min?: OriginMinOrderByAggregateInput
  }

  export type OriginScalarWhereWithAggregatesInput = {
    AND?: OriginScalarWhereWithAggregatesInput | OriginScalarWhereWithAggregatesInput[]
    OR?: OriginScalarWhereWithAggregatesInput[]
    NOT?: OriginScalarWhereWithAggregatesInput | OriginScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Origin"> | string
    name?: StringWithAggregatesFilter<"Origin"> | string
  }

  export type OriginRecipeWhereInput = {
    AND?: OriginRecipeWhereInput | OriginRecipeWhereInput[]
    OR?: OriginRecipeWhereInput[]
    NOT?: OriginRecipeWhereInput | OriginRecipeWhereInput[]
    id?: StringFilter<"OriginRecipe"> | string
    recipeId?: StringFilter<"OriginRecipe"> | string
    originId?: StringFilter<"OriginRecipe"> | string
    recipe?: XOR<RecipeScalarRelationFilter, RecipeWhereInput>
    origin?: XOR<OriginScalarRelationFilter, OriginWhereInput>
  }

  export type OriginRecipeOrderByWithRelationInput = {
    id?: SortOrder
    recipeId?: SortOrder
    originId?: SortOrder
    recipe?: RecipeOrderByWithRelationInput
    origin?: OriginOrderByWithRelationInput
  }

  export type OriginRecipeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OriginRecipeWhereInput | OriginRecipeWhereInput[]
    OR?: OriginRecipeWhereInput[]
    NOT?: OriginRecipeWhereInput | OriginRecipeWhereInput[]
    recipeId?: StringFilter<"OriginRecipe"> | string
    originId?: StringFilter<"OriginRecipe"> | string
    recipe?: XOR<RecipeScalarRelationFilter, RecipeWhereInput>
    origin?: XOR<OriginScalarRelationFilter, OriginWhereInput>
  }, "id">

  export type OriginRecipeOrderByWithAggregationInput = {
    id?: SortOrder
    recipeId?: SortOrder
    originId?: SortOrder
    _count?: OriginRecipeCountOrderByAggregateInput
    _max?: OriginRecipeMaxOrderByAggregateInput
    _min?: OriginRecipeMinOrderByAggregateInput
  }

  export type OriginRecipeScalarWhereWithAggregatesInput = {
    AND?: OriginRecipeScalarWhereWithAggregatesInput | OriginRecipeScalarWhereWithAggregatesInput[]
    OR?: OriginRecipeScalarWhereWithAggregatesInput[]
    NOT?: OriginRecipeScalarWhereWithAggregatesInput | OriginRecipeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OriginRecipe"> | string
    recipeId?: StringWithAggregatesFilter<"OriginRecipe"> | string
    originId?: StringWithAggregatesFilter<"OriginRecipe"> | string
  }

  export type FavoriteWhereInput = {
    AND?: FavoriteWhereInput | FavoriteWhereInput[]
    OR?: FavoriteWhereInput[]
    NOT?: FavoriteWhereInput | FavoriteWhereInput[]
    id?: StringFilter<"Favorite"> | string
    userId?: StringFilter<"Favorite"> | string
    recipeId?: StringFilter<"Favorite"> | string
    createAt?: DateTimeFilter<"Favorite"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    recipe?: XOR<RecipeScalarRelationFilter, RecipeWhereInput>
  }

  export type FavoriteOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    recipeId?: SortOrder
    createAt?: SortOrder
    user?: UserOrderByWithRelationInput
    recipe?: RecipeOrderByWithRelationInput
  }

  export type FavoriteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FavoriteWhereInput | FavoriteWhereInput[]
    OR?: FavoriteWhereInput[]
    NOT?: FavoriteWhereInput | FavoriteWhereInput[]
    userId?: StringFilter<"Favorite"> | string
    recipeId?: StringFilter<"Favorite"> | string
    createAt?: DateTimeFilter<"Favorite"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    recipe?: XOR<RecipeScalarRelationFilter, RecipeWhereInput>
  }, "id">

  export type FavoriteOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    recipeId?: SortOrder
    createAt?: SortOrder
    _count?: FavoriteCountOrderByAggregateInput
    _max?: FavoriteMaxOrderByAggregateInput
    _min?: FavoriteMinOrderByAggregateInput
  }

  export type FavoriteScalarWhereWithAggregatesInput = {
    AND?: FavoriteScalarWhereWithAggregatesInput | FavoriteScalarWhereWithAggregatesInput[]
    OR?: FavoriteScalarWhereWithAggregatesInput[]
    NOT?: FavoriteScalarWhereWithAggregatesInput | FavoriteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Favorite"> | string
    userId?: StringWithAggregatesFilter<"Favorite"> | string
    recipeId?: StringWithAggregatesFilter<"Favorite"> | string
    createAt?: DateTimeWithAggregatesFilter<"Favorite"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    image?: string | null
    consent?: boolean
    createAt?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    recipes?: RecipeCreateNestedManyWithoutUserInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    image?: string | null
    consent?: boolean
    roleId: string
    createAt?: Date | string
    recipes?: RecipeUncheckedCreateNestedManyWithoutUserInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    consent?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    recipes?: RecipeUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    consent?: BoolFieldUpdateOperationsInput | boolean
    roleId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipes?: RecipeUncheckedUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    image?: string | null
    consent?: boolean
    roleId: string
    createAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    consent?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    consent?: BoolFieldUpdateOperationsInput | boolean
    roleId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleCreateInput = {
    id?: string
    name: string
    users?: UserCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: string
    name: string
    users?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: string
    name: string
  }

  export type RoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RecipeCreateInput = {
    id?: string
    title: string
    serve?: number | null
    description?: string | null
    instructions: string
    imageUrl: string
    prepTime: number
    cookTime: number
    createAt?: Date | string
    user: UserCreateNestedOneWithoutRecipesInput
    ingredients?: RecipeIngredientCreateNestedManyWithoutRecipeInput
    ustensils?: RecipeUstensilCreateNestedManyWithoutRecipeInput
    type: TypeCreateNestedOneWithoutRecipesInput
    moods?: MoodRecipeCreateNestedManyWithoutRecipeInput
    diets?: DietRecipeCreateNestedManyWithoutRecipeInput
    origins?: OriginRecipeCreateNestedManyWithoutRecipeInput
    favorites?: FavoriteCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateInput = {
    id?: string
    userId: string
    title: string
    serve?: number | null
    description?: string | null
    instructions: string
    typeId: string
    imageUrl: string
    prepTime: number
    cookTime: number
    createAt?: Date | string
    ingredients?: RecipeIngredientUncheckedCreateNestedManyWithoutRecipeInput
    ustensils?: RecipeUstensilUncheckedCreateNestedManyWithoutRecipeInput
    moods?: MoodRecipeUncheckedCreateNestedManyWithoutRecipeInput
    diets?: DietRecipeUncheckedCreateNestedManyWithoutRecipeInput
    origins?: OriginRecipeUncheckedCreateNestedManyWithoutRecipeInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    serve?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    prepTime?: IntFieldUpdateOperationsInput | number
    cookTime?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRecipesNestedInput
    ingredients?: RecipeIngredientUpdateManyWithoutRecipeNestedInput
    ustensils?: RecipeUstensilUpdateManyWithoutRecipeNestedInput
    type?: TypeUpdateOneRequiredWithoutRecipesNestedInput
    moods?: MoodRecipeUpdateManyWithoutRecipeNestedInput
    diets?: DietRecipeUpdateManyWithoutRecipeNestedInput
    origins?: OriginRecipeUpdateManyWithoutRecipeNestedInput
    favorites?: FavoriteUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    serve?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: StringFieldUpdateOperationsInput | string
    typeId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    prepTime?: IntFieldUpdateOperationsInput | number
    cookTime?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredients?: RecipeIngredientUncheckedUpdateManyWithoutRecipeNestedInput
    ustensils?: RecipeUstensilUncheckedUpdateManyWithoutRecipeNestedInput
    moods?: MoodRecipeUncheckedUpdateManyWithoutRecipeNestedInput
    diets?: DietRecipeUncheckedUpdateManyWithoutRecipeNestedInput
    origins?: OriginRecipeUncheckedUpdateManyWithoutRecipeNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeCreateManyInput = {
    id?: string
    userId: string
    title: string
    serve?: number | null
    description?: string | null
    instructions: string
    typeId: string
    imageUrl: string
    prepTime: number
    cookTime: number
    createAt?: Date | string
  }

  export type RecipeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    serve?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    prepTime?: IntFieldUpdateOperationsInput | number
    cookTime?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecipeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    serve?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: StringFieldUpdateOperationsInput | string
    typeId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    prepTime?: IntFieldUpdateOperationsInput | number
    cookTime?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TypeCreateInput = {
    id?: string
    name: string
    recipes?: RecipeCreateNestedManyWithoutTypeInput
  }

  export type TypeUncheckedCreateInput = {
    id?: string
    name: string
    recipes?: RecipeUncheckedCreateNestedManyWithoutTypeInput
  }

  export type TypeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    recipes?: RecipeUpdateManyWithoutTypeNestedInput
  }

  export type TypeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    recipes?: RecipeUncheckedUpdateManyWithoutTypeNestedInput
  }

  export type TypeCreateManyInput = {
    id?: string
    name: string
  }

  export type TypeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TypeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type IngredientCreateInput = {
    id?: string
    name: string
    recipes?: RecipeIngredientCreateNestedManyWithoutIngredientInput
  }

  export type IngredientUncheckedCreateInput = {
    id?: string
    name: string
    recipes?: RecipeIngredientUncheckedCreateNestedManyWithoutIngredientInput
  }

  export type IngredientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    recipes?: RecipeIngredientUpdateManyWithoutIngredientNestedInput
  }

  export type IngredientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    recipes?: RecipeIngredientUncheckedUpdateManyWithoutIngredientNestedInput
  }

  export type IngredientCreateManyInput = {
    id?: string
    name: string
  }

  export type IngredientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type IngredientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RecipeIngredientCreateInput = {
    id?: string
    quantity: string
    recipe: RecipeCreateNestedOneWithoutIngredientsInput
    ingredient: IngredientCreateNestedOneWithoutRecipesInput
  }

  export type RecipeIngredientUncheckedCreateInput = {
    id?: string
    recipeId: string
    ingredientId: string
    quantity: string
  }

  export type RecipeIngredientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: StringFieldUpdateOperationsInput | string
    recipe?: RecipeUpdateOneRequiredWithoutIngredientsNestedInput
    ingredient?: IngredientUpdateOneRequiredWithoutRecipesNestedInput
  }

  export type RecipeIngredientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipeId?: StringFieldUpdateOperationsInput | string
    ingredientId?: StringFieldUpdateOperationsInput | string
    quantity?: StringFieldUpdateOperationsInput | string
  }

  export type RecipeIngredientCreateManyInput = {
    id?: string
    recipeId: string
    ingredientId: string
    quantity: string
  }

  export type RecipeIngredientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: StringFieldUpdateOperationsInput | string
  }

  export type RecipeIngredientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipeId?: StringFieldUpdateOperationsInput | string
    ingredientId?: StringFieldUpdateOperationsInput | string
    quantity?: StringFieldUpdateOperationsInput | string
  }

  export type UstensilCreateInput = {
    id?: string
    name: string
    recipes?: RecipeUstensilCreateNestedManyWithoutUstensilInput
  }

  export type UstensilUncheckedCreateInput = {
    id?: string
    name: string
    recipes?: RecipeUstensilUncheckedCreateNestedManyWithoutUstensilInput
  }

  export type UstensilUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    recipes?: RecipeUstensilUpdateManyWithoutUstensilNestedInput
  }

  export type UstensilUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    recipes?: RecipeUstensilUncheckedUpdateManyWithoutUstensilNestedInput
  }

  export type UstensilCreateManyInput = {
    id?: string
    name: string
  }

  export type UstensilUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UstensilUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RecipeUstensilCreateInput = {
    id?: string
    recipe: RecipeCreateNestedOneWithoutUstensilsInput
    ustensil: UstensilCreateNestedOneWithoutRecipesInput
  }

  export type RecipeUstensilUncheckedCreateInput = {
    id?: string
    recipeId: string
    ustensilId: string
  }

  export type RecipeUstensilUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipe?: RecipeUpdateOneRequiredWithoutUstensilsNestedInput
    ustensil?: UstensilUpdateOneRequiredWithoutRecipesNestedInput
  }

  export type RecipeUstensilUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipeId?: StringFieldUpdateOperationsInput | string
    ustensilId?: StringFieldUpdateOperationsInput | string
  }

  export type RecipeUstensilCreateManyInput = {
    id?: string
    recipeId: string
    ustensilId: string
  }

  export type RecipeUstensilUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type RecipeUstensilUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipeId?: StringFieldUpdateOperationsInput | string
    ustensilId?: StringFieldUpdateOperationsInput | string
  }

  export type MoodCreateInput = {
    id?: string
    name: string
    recipes?: MoodRecipeCreateNestedManyWithoutMoodInput
  }

  export type MoodUncheckedCreateInput = {
    id?: string
    name: string
    recipes?: MoodRecipeUncheckedCreateNestedManyWithoutMoodInput
  }

  export type MoodUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    recipes?: MoodRecipeUpdateManyWithoutMoodNestedInput
  }

  export type MoodUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    recipes?: MoodRecipeUncheckedUpdateManyWithoutMoodNestedInput
  }

  export type MoodCreateManyInput = {
    id?: string
    name: string
  }

  export type MoodUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MoodUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MoodRecipeCreateInput = {
    id?: string
    recipe: RecipeCreateNestedOneWithoutMoodsInput
    mood: MoodCreateNestedOneWithoutRecipesInput
  }

  export type MoodRecipeUncheckedCreateInput = {
    id?: string
    recipeId: string
    moodId: string
  }

  export type MoodRecipeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipe?: RecipeUpdateOneRequiredWithoutMoodsNestedInput
    mood?: MoodUpdateOneRequiredWithoutRecipesNestedInput
  }

  export type MoodRecipeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipeId?: StringFieldUpdateOperationsInput | string
    moodId?: StringFieldUpdateOperationsInput | string
  }

  export type MoodRecipeCreateManyInput = {
    id?: string
    recipeId: string
    moodId: string
  }

  export type MoodRecipeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type MoodRecipeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipeId?: StringFieldUpdateOperationsInput | string
    moodId?: StringFieldUpdateOperationsInput | string
  }

  export type DietCreateInput = {
    id?: string
    name: string
    recipes?: DietRecipeCreateNestedManyWithoutDietInput
  }

  export type DietUncheckedCreateInput = {
    id?: string
    name: string
    recipes?: DietRecipeUncheckedCreateNestedManyWithoutDietInput
  }

  export type DietUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    recipes?: DietRecipeUpdateManyWithoutDietNestedInput
  }

  export type DietUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    recipes?: DietRecipeUncheckedUpdateManyWithoutDietNestedInput
  }

  export type DietCreateManyInput = {
    id?: string
    name: string
  }

  export type DietUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DietUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DietRecipeCreateInput = {
    id?: string
    recipe: RecipeCreateNestedOneWithoutDietsInput
    diet: DietCreateNestedOneWithoutRecipesInput
  }

  export type DietRecipeUncheckedCreateInput = {
    id?: string
    recipeId: string
    dietId: string
  }

  export type DietRecipeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipe?: RecipeUpdateOneRequiredWithoutDietsNestedInput
    diet?: DietUpdateOneRequiredWithoutRecipesNestedInput
  }

  export type DietRecipeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipeId?: StringFieldUpdateOperationsInput | string
    dietId?: StringFieldUpdateOperationsInput | string
  }

  export type DietRecipeCreateManyInput = {
    id?: string
    recipeId: string
    dietId: string
  }

  export type DietRecipeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type DietRecipeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipeId?: StringFieldUpdateOperationsInput | string
    dietId?: StringFieldUpdateOperationsInput | string
  }

  export type OriginCreateInput = {
    id?: string
    name: string
    recipes?: OriginRecipeCreateNestedManyWithoutOriginInput
  }

  export type OriginUncheckedCreateInput = {
    id?: string
    name: string
    recipes?: OriginRecipeUncheckedCreateNestedManyWithoutOriginInput
  }

  export type OriginUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    recipes?: OriginRecipeUpdateManyWithoutOriginNestedInput
  }

  export type OriginUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    recipes?: OriginRecipeUncheckedUpdateManyWithoutOriginNestedInput
  }

  export type OriginCreateManyInput = {
    id?: string
    name: string
  }

  export type OriginUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type OriginUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type OriginRecipeCreateInput = {
    id?: string
    recipe: RecipeCreateNestedOneWithoutOriginsInput
    origin: OriginCreateNestedOneWithoutRecipesInput
  }

  export type OriginRecipeUncheckedCreateInput = {
    id?: string
    recipeId: string
    originId: string
  }

  export type OriginRecipeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipe?: RecipeUpdateOneRequiredWithoutOriginsNestedInput
    origin?: OriginUpdateOneRequiredWithoutRecipesNestedInput
  }

  export type OriginRecipeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipeId?: StringFieldUpdateOperationsInput | string
    originId?: StringFieldUpdateOperationsInput | string
  }

  export type OriginRecipeCreateManyInput = {
    id?: string
    recipeId: string
    originId: string
  }

  export type OriginRecipeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type OriginRecipeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipeId?: StringFieldUpdateOperationsInput | string
    originId?: StringFieldUpdateOperationsInput | string
  }

  export type FavoriteCreateInput = {
    id?: string
    createAt?: Date | string
    user: UserCreateNestedOneWithoutFavoritesInput
    recipe: RecipeCreateNestedOneWithoutFavoritesInput
  }

  export type FavoriteUncheckedCreateInput = {
    id?: string
    userId: string
    recipeId: string
    createAt?: Date | string
  }

  export type FavoriteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFavoritesNestedInput
    recipe?: RecipeUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type FavoriteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    recipeId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteCreateManyInput = {
    id?: string
    userId: string
    recipeId: string
    createAt?: Date | string
  }

  export type FavoriteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    recipeId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type RecipeListRelationFilter = {
    every?: RecipeWhereInput
    some?: RecipeWhereInput
    none?: RecipeWhereInput
  }

  export type FavoriteListRelationFilter = {
    every?: FavoriteWhereInput
    some?: FavoriteWhereInput
    none?: FavoriteWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RecipeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FavoriteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrder
    consent?: SortOrder
    roleId?: SortOrder
    createAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrder
    consent?: SortOrder
    roleId?: SortOrder
    createAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrder
    consent?: SortOrder
    roleId?: SortOrder
    createAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RecipeIngredientListRelationFilter = {
    every?: RecipeIngredientWhereInput
    some?: RecipeIngredientWhereInput
    none?: RecipeIngredientWhereInput
  }

  export type RecipeUstensilListRelationFilter = {
    every?: RecipeUstensilWhereInput
    some?: RecipeUstensilWhereInput
    none?: RecipeUstensilWhereInput
  }

  export type TypeScalarRelationFilter = {
    is?: TypeWhereInput
    isNot?: TypeWhereInput
  }

  export type MoodRecipeListRelationFilter = {
    every?: MoodRecipeWhereInput
    some?: MoodRecipeWhereInput
    none?: MoodRecipeWhereInput
  }

  export type DietRecipeListRelationFilter = {
    every?: DietRecipeWhereInput
    some?: DietRecipeWhereInput
    none?: DietRecipeWhereInput
  }

  export type OriginRecipeListRelationFilter = {
    every?: OriginRecipeWhereInput
    some?: OriginRecipeWhereInput
    none?: OriginRecipeWhereInput
  }

  export type RecipeIngredientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecipeUstensilOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MoodRecipeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DietRecipeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OriginRecipeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecipeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    serve?: SortOrder
    description?: SortOrder
    instructions?: SortOrder
    typeId?: SortOrder
    imageUrl?: SortOrder
    prepTime?: SortOrder
    cookTime?: SortOrder
    createAt?: SortOrder
  }

  export type RecipeAvgOrderByAggregateInput = {
    serve?: SortOrder
    prepTime?: SortOrder
    cookTime?: SortOrder
  }

  export type RecipeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    serve?: SortOrder
    description?: SortOrder
    instructions?: SortOrder
    typeId?: SortOrder
    imageUrl?: SortOrder
    prepTime?: SortOrder
    cookTime?: SortOrder
    createAt?: SortOrder
  }

  export type RecipeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    serve?: SortOrder
    description?: SortOrder
    instructions?: SortOrder
    typeId?: SortOrder
    imageUrl?: SortOrder
    prepTime?: SortOrder
    cookTime?: SortOrder
    createAt?: SortOrder
  }

  export type RecipeSumOrderByAggregateInput = {
    serve?: SortOrder
    prepTime?: SortOrder
    cookTime?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type TypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type IngredientCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type IngredientMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type IngredientMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RecipeScalarRelationFilter = {
    is?: RecipeWhereInput
    isNot?: RecipeWhereInput
  }

  export type IngredientScalarRelationFilter = {
    is?: IngredientWhereInput
    isNot?: IngredientWhereInput
  }

  export type RecipeIngredientCountOrderByAggregateInput = {
    id?: SortOrder
    recipeId?: SortOrder
    ingredientId?: SortOrder
    quantity?: SortOrder
  }

  export type RecipeIngredientMaxOrderByAggregateInput = {
    id?: SortOrder
    recipeId?: SortOrder
    ingredientId?: SortOrder
    quantity?: SortOrder
  }

  export type RecipeIngredientMinOrderByAggregateInput = {
    id?: SortOrder
    recipeId?: SortOrder
    ingredientId?: SortOrder
    quantity?: SortOrder
  }

  export type UstensilCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type UstensilMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type UstensilMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type UstensilScalarRelationFilter = {
    is?: UstensilWhereInput
    isNot?: UstensilWhereInput
  }

  export type RecipeUstensilCountOrderByAggregateInput = {
    id?: SortOrder
    recipeId?: SortOrder
    ustensilId?: SortOrder
  }

  export type RecipeUstensilMaxOrderByAggregateInput = {
    id?: SortOrder
    recipeId?: SortOrder
    ustensilId?: SortOrder
  }

  export type RecipeUstensilMinOrderByAggregateInput = {
    id?: SortOrder
    recipeId?: SortOrder
    ustensilId?: SortOrder
  }

  export type MoodCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type MoodMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type MoodMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type MoodScalarRelationFilter = {
    is?: MoodWhereInput
    isNot?: MoodWhereInput
  }

  export type MoodRecipeCountOrderByAggregateInput = {
    id?: SortOrder
    recipeId?: SortOrder
    moodId?: SortOrder
  }

  export type MoodRecipeMaxOrderByAggregateInput = {
    id?: SortOrder
    recipeId?: SortOrder
    moodId?: SortOrder
  }

  export type MoodRecipeMinOrderByAggregateInput = {
    id?: SortOrder
    recipeId?: SortOrder
    moodId?: SortOrder
  }

  export type DietCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type DietMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type DietMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type DietScalarRelationFilter = {
    is?: DietWhereInput
    isNot?: DietWhereInput
  }

  export type DietRecipeCountOrderByAggregateInput = {
    id?: SortOrder
    recipeId?: SortOrder
    dietId?: SortOrder
  }

  export type DietRecipeMaxOrderByAggregateInput = {
    id?: SortOrder
    recipeId?: SortOrder
    dietId?: SortOrder
  }

  export type DietRecipeMinOrderByAggregateInput = {
    id?: SortOrder
    recipeId?: SortOrder
    dietId?: SortOrder
  }

  export type OriginCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type OriginMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type OriginMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type OriginScalarRelationFilter = {
    is?: OriginWhereInput
    isNot?: OriginWhereInput
  }

  export type OriginRecipeCountOrderByAggregateInput = {
    id?: SortOrder
    recipeId?: SortOrder
    originId?: SortOrder
  }

  export type OriginRecipeMaxOrderByAggregateInput = {
    id?: SortOrder
    recipeId?: SortOrder
    originId?: SortOrder
  }

  export type OriginRecipeMinOrderByAggregateInput = {
    id?: SortOrder
    recipeId?: SortOrder
    originId?: SortOrder
  }

  export type FavoriteCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    recipeId?: SortOrder
    createAt?: SortOrder
  }

  export type FavoriteMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    recipeId?: SortOrder
    createAt?: SortOrder
  }

  export type FavoriteMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    recipeId?: SortOrder
    createAt?: SortOrder
  }

  export type RoleCreateNestedOneWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    connect?: RoleWhereUniqueInput
  }

  export type RecipeCreateNestedManyWithoutUserInput = {
    create?: XOR<RecipeCreateWithoutUserInput, RecipeUncheckedCreateWithoutUserInput> | RecipeCreateWithoutUserInput[] | RecipeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecipeCreateOrConnectWithoutUserInput | RecipeCreateOrConnectWithoutUserInput[]
    createMany?: RecipeCreateManyUserInputEnvelope
    connect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
  }

  export type FavoriteCreateNestedManyWithoutUserInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type RecipeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RecipeCreateWithoutUserInput, RecipeUncheckedCreateWithoutUserInput> | RecipeCreateWithoutUserInput[] | RecipeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecipeCreateOrConnectWithoutUserInput | RecipeCreateOrConnectWithoutUserInput[]
    createMany?: RecipeCreateManyUserInputEnvelope
    connect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
  }

  export type FavoriteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RoleUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    upsert?: RoleUpsertWithoutUsersInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUsersInput, RoleUpdateWithoutUsersInput>, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RecipeUpdateManyWithoutUserNestedInput = {
    create?: XOR<RecipeCreateWithoutUserInput, RecipeUncheckedCreateWithoutUserInput> | RecipeCreateWithoutUserInput[] | RecipeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecipeCreateOrConnectWithoutUserInput | RecipeCreateOrConnectWithoutUserInput[]
    upsert?: RecipeUpsertWithWhereUniqueWithoutUserInput | RecipeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RecipeCreateManyUserInputEnvelope
    set?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    disconnect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    delete?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    connect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    update?: RecipeUpdateWithWhereUniqueWithoutUserInput | RecipeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RecipeUpdateManyWithWhereWithoutUserInput | RecipeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RecipeScalarWhereInput | RecipeScalarWhereInput[]
  }

  export type FavoriteUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutUserInput | FavoriteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutUserInput | FavoriteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutUserInput | FavoriteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type RecipeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RecipeCreateWithoutUserInput, RecipeUncheckedCreateWithoutUserInput> | RecipeCreateWithoutUserInput[] | RecipeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecipeCreateOrConnectWithoutUserInput | RecipeCreateOrConnectWithoutUserInput[]
    upsert?: RecipeUpsertWithWhereUniqueWithoutUserInput | RecipeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RecipeCreateManyUserInputEnvelope
    set?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    disconnect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    delete?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    connect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    update?: RecipeUpdateWithWhereUniqueWithoutUserInput | RecipeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RecipeUpdateManyWithWhereWithoutUserInput | RecipeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RecipeScalarWhereInput | RecipeScalarWhereInput[]
  }

  export type FavoriteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutUserInput | FavoriteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutUserInput | FavoriteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutUserInput | FavoriteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRecipesInput = {
    create?: XOR<UserCreateWithoutRecipesInput, UserUncheckedCreateWithoutRecipesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecipesInput
    connect?: UserWhereUniqueInput
  }

  export type RecipeIngredientCreateNestedManyWithoutRecipeInput = {
    create?: XOR<RecipeIngredientCreateWithoutRecipeInput, RecipeIngredientUncheckedCreateWithoutRecipeInput> | RecipeIngredientCreateWithoutRecipeInput[] | RecipeIngredientUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: RecipeIngredientCreateOrConnectWithoutRecipeInput | RecipeIngredientCreateOrConnectWithoutRecipeInput[]
    createMany?: RecipeIngredientCreateManyRecipeInputEnvelope
    connect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
  }

  export type RecipeUstensilCreateNestedManyWithoutRecipeInput = {
    create?: XOR<RecipeUstensilCreateWithoutRecipeInput, RecipeUstensilUncheckedCreateWithoutRecipeInput> | RecipeUstensilCreateWithoutRecipeInput[] | RecipeUstensilUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: RecipeUstensilCreateOrConnectWithoutRecipeInput | RecipeUstensilCreateOrConnectWithoutRecipeInput[]
    createMany?: RecipeUstensilCreateManyRecipeInputEnvelope
    connect?: RecipeUstensilWhereUniqueInput | RecipeUstensilWhereUniqueInput[]
  }

  export type TypeCreateNestedOneWithoutRecipesInput = {
    create?: XOR<TypeCreateWithoutRecipesInput, TypeUncheckedCreateWithoutRecipesInput>
    connectOrCreate?: TypeCreateOrConnectWithoutRecipesInput
    connect?: TypeWhereUniqueInput
  }

  export type MoodRecipeCreateNestedManyWithoutRecipeInput = {
    create?: XOR<MoodRecipeCreateWithoutRecipeInput, MoodRecipeUncheckedCreateWithoutRecipeInput> | MoodRecipeCreateWithoutRecipeInput[] | MoodRecipeUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: MoodRecipeCreateOrConnectWithoutRecipeInput | MoodRecipeCreateOrConnectWithoutRecipeInput[]
    createMany?: MoodRecipeCreateManyRecipeInputEnvelope
    connect?: MoodRecipeWhereUniqueInput | MoodRecipeWhereUniqueInput[]
  }

  export type DietRecipeCreateNestedManyWithoutRecipeInput = {
    create?: XOR<DietRecipeCreateWithoutRecipeInput, DietRecipeUncheckedCreateWithoutRecipeInput> | DietRecipeCreateWithoutRecipeInput[] | DietRecipeUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: DietRecipeCreateOrConnectWithoutRecipeInput | DietRecipeCreateOrConnectWithoutRecipeInput[]
    createMany?: DietRecipeCreateManyRecipeInputEnvelope
    connect?: DietRecipeWhereUniqueInput | DietRecipeWhereUniqueInput[]
  }

  export type OriginRecipeCreateNestedManyWithoutRecipeInput = {
    create?: XOR<OriginRecipeCreateWithoutRecipeInput, OriginRecipeUncheckedCreateWithoutRecipeInput> | OriginRecipeCreateWithoutRecipeInput[] | OriginRecipeUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: OriginRecipeCreateOrConnectWithoutRecipeInput | OriginRecipeCreateOrConnectWithoutRecipeInput[]
    createMany?: OriginRecipeCreateManyRecipeInputEnvelope
    connect?: OriginRecipeWhereUniqueInput | OriginRecipeWhereUniqueInput[]
  }

  export type FavoriteCreateNestedManyWithoutRecipeInput = {
    create?: XOR<FavoriteCreateWithoutRecipeInput, FavoriteUncheckedCreateWithoutRecipeInput> | FavoriteCreateWithoutRecipeInput[] | FavoriteUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutRecipeInput | FavoriteCreateOrConnectWithoutRecipeInput[]
    createMany?: FavoriteCreateManyRecipeInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type RecipeIngredientUncheckedCreateNestedManyWithoutRecipeInput = {
    create?: XOR<RecipeIngredientCreateWithoutRecipeInput, RecipeIngredientUncheckedCreateWithoutRecipeInput> | RecipeIngredientCreateWithoutRecipeInput[] | RecipeIngredientUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: RecipeIngredientCreateOrConnectWithoutRecipeInput | RecipeIngredientCreateOrConnectWithoutRecipeInput[]
    createMany?: RecipeIngredientCreateManyRecipeInputEnvelope
    connect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
  }

  export type RecipeUstensilUncheckedCreateNestedManyWithoutRecipeInput = {
    create?: XOR<RecipeUstensilCreateWithoutRecipeInput, RecipeUstensilUncheckedCreateWithoutRecipeInput> | RecipeUstensilCreateWithoutRecipeInput[] | RecipeUstensilUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: RecipeUstensilCreateOrConnectWithoutRecipeInput | RecipeUstensilCreateOrConnectWithoutRecipeInput[]
    createMany?: RecipeUstensilCreateManyRecipeInputEnvelope
    connect?: RecipeUstensilWhereUniqueInput | RecipeUstensilWhereUniqueInput[]
  }

  export type MoodRecipeUncheckedCreateNestedManyWithoutRecipeInput = {
    create?: XOR<MoodRecipeCreateWithoutRecipeInput, MoodRecipeUncheckedCreateWithoutRecipeInput> | MoodRecipeCreateWithoutRecipeInput[] | MoodRecipeUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: MoodRecipeCreateOrConnectWithoutRecipeInput | MoodRecipeCreateOrConnectWithoutRecipeInput[]
    createMany?: MoodRecipeCreateManyRecipeInputEnvelope
    connect?: MoodRecipeWhereUniqueInput | MoodRecipeWhereUniqueInput[]
  }

  export type DietRecipeUncheckedCreateNestedManyWithoutRecipeInput = {
    create?: XOR<DietRecipeCreateWithoutRecipeInput, DietRecipeUncheckedCreateWithoutRecipeInput> | DietRecipeCreateWithoutRecipeInput[] | DietRecipeUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: DietRecipeCreateOrConnectWithoutRecipeInput | DietRecipeCreateOrConnectWithoutRecipeInput[]
    createMany?: DietRecipeCreateManyRecipeInputEnvelope
    connect?: DietRecipeWhereUniqueInput | DietRecipeWhereUniqueInput[]
  }

  export type OriginRecipeUncheckedCreateNestedManyWithoutRecipeInput = {
    create?: XOR<OriginRecipeCreateWithoutRecipeInput, OriginRecipeUncheckedCreateWithoutRecipeInput> | OriginRecipeCreateWithoutRecipeInput[] | OriginRecipeUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: OriginRecipeCreateOrConnectWithoutRecipeInput | OriginRecipeCreateOrConnectWithoutRecipeInput[]
    createMany?: OriginRecipeCreateManyRecipeInputEnvelope
    connect?: OriginRecipeWhereUniqueInput | OriginRecipeWhereUniqueInput[]
  }

  export type FavoriteUncheckedCreateNestedManyWithoutRecipeInput = {
    create?: XOR<FavoriteCreateWithoutRecipeInput, FavoriteUncheckedCreateWithoutRecipeInput> | FavoriteCreateWithoutRecipeInput[] | FavoriteUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutRecipeInput | FavoriteCreateOrConnectWithoutRecipeInput[]
    createMany?: FavoriteCreateManyRecipeInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutRecipesNestedInput = {
    create?: XOR<UserCreateWithoutRecipesInput, UserUncheckedCreateWithoutRecipesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecipesInput
    upsert?: UserUpsertWithoutRecipesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRecipesInput, UserUpdateWithoutRecipesInput>, UserUncheckedUpdateWithoutRecipesInput>
  }

  export type RecipeIngredientUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<RecipeIngredientCreateWithoutRecipeInput, RecipeIngredientUncheckedCreateWithoutRecipeInput> | RecipeIngredientCreateWithoutRecipeInput[] | RecipeIngredientUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: RecipeIngredientCreateOrConnectWithoutRecipeInput | RecipeIngredientCreateOrConnectWithoutRecipeInput[]
    upsert?: RecipeIngredientUpsertWithWhereUniqueWithoutRecipeInput | RecipeIngredientUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: RecipeIngredientCreateManyRecipeInputEnvelope
    set?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    disconnect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    delete?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    connect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    update?: RecipeIngredientUpdateWithWhereUniqueWithoutRecipeInput | RecipeIngredientUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: RecipeIngredientUpdateManyWithWhereWithoutRecipeInput | RecipeIngredientUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: RecipeIngredientScalarWhereInput | RecipeIngredientScalarWhereInput[]
  }

  export type RecipeUstensilUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<RecipeUstensilCreateWithoutRecipeInput, RecipeUstensilUncheckedCreateWithoutRecipeInput> | RecipeUstensilCreateWithoutRecipeInput[] | RecipeUstensilUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: RecipeUstensilCreateOrConnectWithoutRecipeInput | RecipeUstensilCreateOrConnectWithoutRecipeInput[]
    upsert?: RecipeUstensilUpsertWithWhereUniqueWithoutRecipeInput | RecipeUstensilUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: RecipeUstensilCreateManyRecipeInputEnvelope
    set?: RecipeUstensilWhereUniqueInput | RecipeUstensilWhereUniqueInput[]
    disconnect?: RecipeUstensilWhereUniqueInput | RecipeUstensilWhereUniqueInput[]
    delete?: RecipeUstensilWhereUniqueInput | RecipeUstensilWhereUniqueInput[]
    connect?: RecipeUstensilWhereUniqueInput | RecipeUstensilWhereUniqueInput[]
    update?: RecipeUstensilUpdateWithWhereUniqueWithoutRecipeInput | RecipeUstensilUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: RecipeUstensilUpdateManyWithWhereWithoutRecipeInput | RecipeUstensilUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: RecipeUstensilScalarWhereInput | RecipeUstensilScalarWhereInput[]
  }

  export type TypeUpdateOneRequiredWithoutRecipesNestedInput = {
    create?: XOR<TypeCreateWithoutRecipesInput, TypeUncheckedCreateWithoutRecipesInput>
    connectOrCreate?: TypeCreateOrConnectWithoutRecipesInput
    upsert?: TypeUpsertWithoutRecipesInput
    connect?: TypeWhereUniqueInput
    update?: XOR<XOR<TypeUpdateToOneWithWhereWithoutRecipesInput, TypeUpdateWithoutRecipesInput>, TypeUncheckedUpdateWithoutRecipesInput>
  }

  export type MoodRecipeUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<MoodRecipeCreateWithoutRecipeInput, MoodRecipeUncheckedCreateWithoutRecipeInput> | MoodRecipeCreateWithoutRecipeInput[] | MoodRecipeUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: MoodRecipeCreateOrConnectWithoutRecipeInput | MoodRecipeCreateOrConnectWithoutRecipeInput[]
    upsert?: MoodRecipeUpsertWithWhereUniqueWithoutRecipeInput | MoodRecipeUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: MoodRecipeCreateManyRecipeInputEnvelope
    set?: MoodRecipeWhereUniqueInput | MoodRecipeWhereUniqueInput[]
    disconnect?: MoodRecipeWhereUniqueInput | MoodRecipeWhereUniqueInput[]
    delete?: MoodRecipeWhereUniqueInput | MoodRecipeWhereUniqueInput[]
    connect?: MoodRecipeWhereUniqueInput | MoodRecipeWhereUniqueInput[]
    update?: MoodRecipeUpdateWithWhereUniqueWithoutRecipeInput | MoodRecipeUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: MoodRecipeUpdateManyWithWhereWithoutRecipeInput | MoodRecipeUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: MoodRecipeScalarWhereInput | MoodRecipeScalarWhereInput[]
  }

  export type DietRecipeUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<DietRecipeCreateWithoutRecipeInput, DietRecipeUncheckedCreateWithoutRecipeInput> | DietRecipeCreateWithoutRecipeInput[] | DietRecipeUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: DietRecipeCreateOrConnectWithoutRecipeInput | DietRecipeCreateOrConnectWithoutRecipeInput[]
    upsert?: DietRecipeUpsertWithWhereUniqueWithoutRecipeInput | DietRecipeUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: DietRecipeCreateManyRecipeInputEnvelope
    set?: DietRecipeWhereUniqueInput | DietRecipeWhereUniqueInput[]
    disconnect?: DietRecipeWhereUniqueInput | DietRecipeWhereUniqueInput[]
    delete?: DietRecipeWhereUniqueInput | DietRecipeWhereUniqueInput[]
    connect?: DietRecipeWhereUniqueInput | DietRecipeWhereUniqueInput[]
    update?: DietRecipeUpdateWithWhereUniqueWithoutRecipeInput | DietRecipeUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: DietRecipeUpdateManyWithWhereWithoutRecipeInput | DietRecipeUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: DietRecipeScalarWhereInput | DietRecipeScalarWhereInput[]
  }

  export type OriginRecipeUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<OriginRecipeCreateWithoutRecipeInput, OriginRecipeUncheckedCreateWithoutRecipeInput> | OriginRecipeCreateWithoutRecipeInput[] | OriginRecipeUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: OriginRecipeCreateOrConnectWithoutRecipeInput | OriginRecipeCreateOrConnectWithoutRecipeInput[]
    upsert?: OriginRecipeUpsertWithWhereUniqueWithoutRecipeInput | OriginRecipeUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: OriginRecipeCreateManyRecipeInputEnvelope
    set?: OriginRecipeWhereUniqueInput | OriginRecipeWhereUniqueInput[]
    disconnect?: OriginRecipeWhereUniqueInput | OriginRecipeWhereUniqueInput[]
    delete?: OriginRecipeWhereUniqueInput | OriginRecipeWhereUniqueInput[]
    connect?: OriginRecipeWhereUniqueInput | OriginRecipeWhereUniqueInput[]
    update?: OriginRecipeUpdateWithWhereUniqueWithoutRecipeInput | OriginRecipeUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: OriginRecipeUpdateManyWithWhereWithoutRecipeInput | OriginRecipeUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: OriginRecipeScalarWhereInput | OriginRecipeScalarWhereInput[]
  }

  export type FavoriteUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<FavoriteCreateWithoutRecipeInput, FavoriteUncheckedCreateWithoutRecipeInput> | FavoriteCreateWithoutRecipeInput[] | FavoriteUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutRecipeInput | FavoriteCreateOrConnectWithoutRecipeInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutRecipeInput | FavoriteUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: FavoriteCreateManyRecipeInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutRecipeInput | FavoriteUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutRecipeInput | FavoriteUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type RecipeIngredientUncheckedUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<RecipeIngredientCreateWithoutRecipeInput, RecipeIngredientUncheckedCreateWithoutRecipeInput> | RecipeIngredientCreateWithoutRecipeInput[] | RecipeIngredientUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: RecipeIngredientCreateOrConnectWithoutRecipeInput | RecipeIngredientCreateOrConnectWithoutRecipeInput[]
    upsert?: RecipeIngredientUpsertWithWhereUniqueWithoutRecipeInput | RecipeIngredientUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: RecipeIngredientCreateManyRecipeInputEnvelope
    set?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    disconnect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    delete?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    connect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    update?: RecipeIngredientUpdateWithWhereUniqueWithoutRecipeInput | RecipeIngredientUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: RecipeIngredientUpdateManyWithWhereWithoutRecipeInput | RecipeIngredientUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: RecipeIngredientScalarWhereInput | RecipeIngredientScalarWhereInput[]
  }

  export type RecipeUstensilUncheckedUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<RecipeUstensilCreateWithoutRecipeInput, RecipeUstensilUncheckedCreateWithoutRecipeInput> | RecipeUstensilCreateWithoutRecipeInput[] | RecipeUstensilUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: RecipeUstensilCreateOrConnectWithoutRecipeInput | RecipeUstensilCreateOrConnectWithoutRecipeInput[]
    upsert?: RecipeUstensilUpsertWithWhereUniqueWithoutRecipeInput | RecipeUstensilUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: RecipeUstensilCreateManyRecipeInputEnvelope
    set?: RecipeUstensilWhereUniqueInput | RecipeUstensilWhereUniqueInput[]
    disconnect?: RecipeUstensilWhereUniqueInput | RecipeUstensilWhereUniqueInput[]
    delete?: RecipeUstensilWhereUniqueInput | RecipeUstensilWhereUniqueInput[]
    connect?: RecipeUstensilWhereUniqueInput | RecipeUstensilWhereUniqueInput[]
    update?: RecipeUstensilUpdateWithWhereUniqueWithoutRecipeInput | RecipeUstensilUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: RecipeUstensilUpdateManyWithWhereWithoutRecipeInput | RecipeUstensilUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: RecipeUstensilScalarWhereInput | RecipeUstensilScalarWhereInput[]
  }

  export type MoodRecipeUncheckedUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<MoodRecipeCreateWithoutRecipeInput, MoodRecipeUncheckedCreateWithoutRecipeInput> | MoodRecipeCreateWithoutRecipeInput[] | MoodRecipeUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: MoodRecipeCreateOrConnectWithoutRecipeInput | MoodRecipeCreateOrConnectWithoutRecipeInput[]
    upsert?: MoodRecipeUpsertWithWhereUniqueWithoutRecipeInput | MoodRecipeUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: MoodRecipeCreateManyRecipeInputEnvelope
    set?: MoodRecipeWhereUniqueInput | MoodRecipeWhereUniqueInput[]
    disconnect?: MoodRecipeWhereUniqueInput | MoodRecipeWhereUniqueInput[]
    delete?: MoodRecipeWhereUniqueInput | MoodRecipeWhereUniqueInput[]
    connect?: MoodRecipeWhereUniqueInput | MoodRecipeWhereUniqueInput[]
    update?: MoodRecipeUpdateWithWhereUniqueWithoutRecipeInput | MoodRecipeUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: MoodRecipeUpdateManyWithWhereWithoutRecipeInput | MoodRecipeUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: MoodRecipeScalarWhereInput | MoodRecipeScalarWhereInput[]
  }

  export type DietRecipeUncheckedUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<DietRecipeCreateWithoutRecipeInput, DietRecipeUncheckedCreateWithoutRecipeInput> | DietRecipeCreateWithoutRecipeInput[] | DietRecipeUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: DietRecipeCreateOrConnectWithoutRecipeInput | DietRecipeCreateOrConnectWithoutRecipeInput[]
    upsert?: DietRecipeUpsertWithWhereUniqueWithoutRecipeInput | DietRecipeUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: DietRecipeCreateManyRecipeInputEnvelope
    set?: DietRecipeWhereUniqueInput | DietRecipeWhereUniqueInput[]
    disconnect?: DietRecipeWhereUniqueInput | DietRecipeWhereUniqueInput[]
    delete?: DietRecipeWhereUniqueInput | DietRecipeWhereUniqueInput[]
    connect?: DietRecipeWhereUniqueInput | DietRecipeWhereUniqueInput[]
    update?: DietRecipeUpdateWithWhereUniqueWithoutRecipeInput | DietRecipeUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: DietRecipeUpdateManyWithWhereWithoutRecipeInput | DietRecipeUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: DietRecipeScalarWhereInput | DietRecipeScalarWhereInput[]
  }

  export type OriginRecipeUncheckedUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<OriginRecipeCreateWithoutRecipeInput, OriginRecipeUncheckedCreateWithoutRecipeInput> | OriginRecipeCreateWithoutRecipeInput[] | OriginRecipeUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: OriginRecipeCreateOrConnectWithoutRecipeInput | OriginRecipeCreateOrConnectWithoutRecipeInput[]
    upsert?: OriginRecipeUpsertWithWhereUniqueWithoutRecipeInput | OriginRecipeUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: OriginRecipeCreateManyRecipeInputEnvelope
    set?: OriginRecipeWhereUniqueInput | OriginRecipeWhereUniqueInput[]
    disconnect?: OriginRecipeWhereUniqueInput | OriginRecipeWhereUniqueInput[]
    delete?: OriginRecipeWhereUniqueInput | OriginRecipeWhereUniqueInput[]
    connect?: OriginRecipeWhereUniqueInput | OriginRecipeWhereUniqueInput[]
    update?: OriginRecipeUpdateWithWhereUniqueWithoutRecipeInput | OriginRecipeUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: OriginRecipeUpdateManyWithWhereWithoutRecipeInput | OriginRecipeUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: OriginRecipeScalarWhereInput | OriginRecipeScalarWhereInput[]
  }

  export type FavoriteUncheckedUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<FavoriteCreateWithoutRecipeInput, FavoriteUncheckedCreateWithoutRecipeInput> | FavoriteCreateWithoutRecipeInput[] | FavoriteUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutRecipeInput | FavoriteCreateOrConnectWithoutRecipeInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutRecipeInput | FavoriteUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: FavoriteCreateManyRecipeInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutRecipeInput | FavoriteUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutRecipeInput | FavoriteUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type RecipeCreateNestedManyWithoutTypeInput = {
    create?: XOR<RecipeCreateWithoutTypeInput, RecipeUncheckedCreateWithoutTypeInput> | RecipeCreateWithoutTypeInput[] | RecipeUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: RecipeCreateOrConnectWithoutTypeInput | RecipeCreateOrConnectWithoutTypeInput[]
    createMany?: RecipeCreateManyTypeInputEnvelope
    connect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
  }

  export type RecipeUncheckedCreateNestedManyWithoutTypeInput = {
    create?: XOR<RecipeCreateWithoutTypeInput, RecipeUncheckedCreateWithoutTypeInput> | RecipeCreateWithoutTypeInput[] | RecipeUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: RecipeCreateOrConnectWithoutTypeInput | RecipeCreateOrConnectWithoutTypeInput[]
    createMany?: RecipeCreateManyTypeInputEnvelope
    connect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
  }

  export type RecipeUpdateManyWithoutTypeNestedInput = {
    create?: XOR<RecipeCreateWithoutTypeInput, RecipeUncheckedCreateWithoutTypeInput> | RecipeCreateWithoutTypeInput[] | RecipeUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: RecipeCreateOrConnectWithoutTypeInput | RecipeCreateOrConnectWithoutTypeInput[]
    upsert?: RecipeUpsertWithWhereUniqueWithoutTypeInput | RecipeUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: RecipeCreateManyTypeInputEnvelope
    set?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    disconnect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    delete?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    connect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    update?: RecipeUpdateWithWhereUniqueWithoutTypeInput | RecipeUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: RecipeUpdateManyWithWhereWithoutTypeInput | RecipeUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: RecipeScalarWhereInput | RecipeScalarWhereInput[]
  }

  export type RecipeUncheckedUpdateManyWithoutTypeNestedInput = {
    create?: XOR<RecipeCreateWithoutTypeInput, RecipeUncheckedCreateWithoutTypeInput> | RecipeCreateWithoutTypeInput[] | RecipeUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: RecipeCreateOrConnectWithoutTypeInput | RecipeCreateOrConnectWithoutTypeInput[]
    upsert?: RecipeUpsertWithWhereUniqueWithoutTypeInput | RecipeUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: RecipeCreateManyTypeInputEnvelope
    set?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    disconnect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    delete?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    connect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    update?: RecipeUpdateWithWhereUniqueWithoutTypeInput | RecipeUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: RecipeUpdateManyWithWhereWithoutTypeInput | RecipeUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: RecipeScalarWhereInput | RecipeScalarWhereInput[]
  }

  export type RecipeIngredientCreateNestedManyWithoutIngredientInput = {
    create?: XOR<RecipeIngredientCreateWithoutIngredientInput, RecipeIngredientUncheckedCreateWithoutIngredientInput> | RecipeIngredientCreateWithoutIngredientInput[] | RecipeIngredientUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: RecipeIngredientCreateOrConnectWithoutIngredientInput | RecipeIngredientCreateOrConnectWithoutIngredientInput[]
    createMany?: RecipeIngredientCreateManyIngredientInputEnvelope
    connect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
  }

  export type RecipeIngredientUncheckedCreateNestedManyWithoutIngredientInput = {
    create?: XOR<RecipeIngredientCreateWithoutIngredientInput, RecipeIngredientUncheckedCreateWithoutIngredientInput> | RecipeIngredientCreateWithoutIngredientInput[] | RecipeIngredientUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: RecipeIngredientCreateOrConnectWithoutIngredientInput | RecipeIngredientCreateOrConnectWithoutIngredientInput[]
    createMany?: RecipeIngredientCreateManyIngredientInputEnvelope
    connect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
  }

  export type RecipeIngredientUpdateManyWithoutIngredientNestedInput = {
    create?: XOR<RecipeIngredientCreateWithoutIngredientInput, RecipeIngredientUncheckedCreateWithoutIngredientInput> | RecipeIngredientCreateWithoutIngredientInput[] | RecipeIngredientUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: RecipeIngredientCreateOrConnectWithoutIngredientInput | RecipeIngredientCreateOrConnectWithoutIngredientInput[]
    upsert?: RecipeIngredientUpsertWithWhereUniqueWithoutIngredientInput | RecipeIngredientUpsertWithWhereUniqueWithoutIngredientInput[]
    createMany?: RecipeIngredientCreateManyIngredientInputEnvelope
    set?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    disconnect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    delete?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    connect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    update?: RecipeIngredientUpdateWithWhereUniqueWithoutIngredientInput | RecipeIngredientUpdateWithWhereUniqueWithoutIngredientInput[]
    updateMany?: RecipeIngredientUpdateManyWithWhereWithoutIngredientInput | RecipeIngredientUpdateManyWithWhereWithoutIngredientInput[]
    deleteMany?: RecipeIngredientScalarWhereInput | RecipeIngredientScalarWhereInput[]
  }

  export type RecipeIngredientUncheckedUpdateManyWithoutIngredientNestedInput = {
    create?: XOR<RecipeIngredientCreateWithoutIngredientInput, RecipeIngredientUncheckedCreateWithoutIngredientInput> | RecipeIngredientCreateWithoutIngredientInput[] | RecipeIngredientUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: RecipeIngredientCreateOrConnectWithoutIngredientInput | RecipeIngredientCreateOrConnectWithoutIngredientInput[]
    upsert?: RecipeIngredientUpsertWithWhereUniqueWithoutIngredientInput | RecipeIngredientUpsertWithWhereUniqueWithoutIngredientInput[]
    createMany?: RecipeIngredientCreateManyIngredientInputEnvelope
    set?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    disconnect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    delete?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    connect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    update?: RecipeIngredientUpdateWithWhereUniqueWithoutIngredientInput | RecipeIngredientUpdateWithWhereUniqueWithoutIngredientInput[]
    updateMany?: RecipeIngredientUpdateManyWithWhereWithoutIngredientInput | RecipeIngredientUpdateManyWithWhereWithoutIngredientInput[]
    deleteMany?: RecipeIngredientScalarWhereInput | RecipeIngredientScalarWhereInput[]
  }

  export type RecipeCreateNestedOneWithoutIngredientsInput = {
    create?: XOR<RecipeCreateWithoutIngredientsInput, RecipeUncheckedCreateWithoutIngredientsInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutIngredientsInput
    connect?: RecipeWhereUniqueInput
  }

  export type IngredientCreateNestedOneWithoutRecipesInput = {
    create?: XOR<IngredientCreateWithoutRecipesInput, IngredientUncheckedCreateWithoutRecipesInput>
    connectOrCreate?: IngredientCreateOrConnectWithoutRecipesInput
    connect?: IngredientWhereUniqueInput
  }

  export type RecipeUpdateOneRequiredWithoutIngredientsNestedInput = {
    create?: XOR<RecipeCreateWithoutIngredientsInput, RecipeUncheckedCreateWithoutIngredientsInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutIngredientsInput
    upsert?: RecipeUpsertWithoutIngredientsInput
    connect?: RecipeWhereUniqueInput
    update?: XOR<XOR<RecipeUpdateToOneWithWhereWithoutIngredientsInput, RecipeUpdateWithoutIngredientsInput>, RecipeUncheckedUpdateWithoutIngredientsInput>
  }

  export type IngredientUpdateOneRequiredWithoutRecipesNestedInput = {
    create?: XOR<IngredientCreateWithoutRecipesInput, IngredientUncheckedCreateWithoutRecipesInput>
    connectOrCreate?: IngredientCreateOrConnectWithoutRecipesInput
    upsert?: IngredientUpsertWithoutRecipesInput
    connect?: IngredientWhereUniqueInput
    update?: XOR<XOR<IngredientUpdateToOneWithWhereWithoutRecipesInput, IngredientUpdateWithoutRecipesInput>, IngredientUncheckedUpdateWithoutRecipesInput>
  }

  export type RecipeUstensilCreateNestedManyWithoutUstensilInput = {
    create?: XOR<RecipeUstensilCreateWithoutUstensilInput, RecipeUstensilUncheckedCreateWithoutUstensilInput> | RecipeUstensilCreateWithoutUstensilInput[] | RecipeUstensilUncheckedCreateWithoutUstensilInput[]
    connectOrCreate?: RecipeUstensilCreateOrConnectWithoutUstensilInput | RecipeUstensilCreateOrConnectWithoutUstensilInput[]
    createMany?: RecipeUstensilCreateManyUstensilInputEnvelope
    connect?: RecipeUstensilWhereUniqueInput | RecipeUstensilWhereUniqueInput[]
  }

  export type RecipeUstensilUncheckedCreateNestedManyWithoutUstensilInput = {
    create?: XOR<RecipeUstensilCreateWithoutUstensilInput, RecipeUstensilUncheckedCreateWithoutUstensilInput> | RecipeUstensilCreateWithoutUstensilInput[] | RecipeUstensilUncheckedCreateWithoutUstensilInput[]
    connectOrCreate?: RecipeUstensilCreateOrConnectWithoutUstensilInput | RecipeUstensilCreateOrConnectWithoutUstensilInput[]
    createMany?: RecipeUstensilCreateManyUstensilInputEnvelope
    connect?: RecipeUstensilWhereUniqueInput | RecipeUstensilWhereUniqueInput[]
  }

  export type RecipeUstensilUpdateManyWithoutUstensilNestedInput = {
    create?: XOR<RecipeUstensilCreateWithoutUstensilInput, RecipeUstensilUncheckedCreateWithoutUstensilInput> | RecipeUstensilCreateWithoutUstensilInput[] | RecipeUstensilUncheckedCreateWithoutUstensilInput[]
    connectOrCreate?: RecipeUstensilCreateOrConnectWithoutUstensilInput | RecipeUstensilCreateOrConnectWithoutUstensilInput[]
    upsert?: RecipeUstensilUpsertWithWhereUniqueWithoutUstensilInput | RecipeUstensilUpsertWithWhereUniqueWithoutUstensilInput[]
    createMany?: RecipeUstensilCreateManyUstensilInputEnvelope
    set?: RecipeUstensilWhereUniqueInput | RecipeUstensilWhereUniqueInput[]
    disconnect?: RecipeUstensilWhereUniqueInput | RecipeUstensilWhereUniqueInput[]
    delete?: RecipeUstensilWhereUniqueInput | RecipeUstensilWhereUniqueInput[]
    connect?: RecipeUstensilWhereUniqueInput | RecipeUstensilWhereUniqueInput[]
    update?: RecipeUstensilUpdateWithWhereUniqueWithoutUstensilInput | RecipeUstensilUpdateWithWhereUniqueWithoutUstensilInput[]
    updateMany?: RecipeUstensilUpdateManyWithWhereWithoutUstensilInput | RecipeUstensilUpdateManyWithWhereWithoutUstensilInput[]
    deleteMany?: RecipeUstensilScalarWhereInput | RecipeUstensilScalarWhereInput[]
  }

  export type RecipeUstensilUncheckedUpdateManyWithoutUstensilNestedInput = {
    create?: XOR<RecipeUstensilCreateWithoutUstensilInput, RecipeUstensilUncheckedCreateWithoutUstensilInput> | RecipeUstensilCreateWithoutUstensilInput[] | RecipeUstensilUncheckedCreateWithoutUstensilInput[]
    connectOrCreate?: RecipeUstensilCreateOrConnectWithoutUstensilInput | RecipeUstensilCreateOrConnectWithoutUstensilInput[]
    upsert?: RecipeUstensilUpsertWithWhereUniqueWithoutUstensilInput | RecipeUstensilUpsertWithWhereUniqueWithoutUstensilInput[]
    createMany?: RecipeUstensilCreateManyUstensilInputEnvelope
    set?: RecipeUstensilWhereUniqueInput | RecipeUstensilWhereUniqueInput[]
    disconnect?: RecipeUstensilWhereUniqueInput | RecipeUstensilWhereUniqueInput[]
    delete?: RecipeUstensilWhereUniqueInput | RecipeUstensilWhereUniqueInput[]
    connect?: RecipeUstensilWhereUniqueInput | RecipeUstensilWhereUniqueInput[]
    update?: RecipeUstensilUpdateWithWhereUniqueWithoutUstensilInput | RecipeUstensilUpdateWithWhereUniqueWithoutUstensilInput[]
    updateMany?: RecipeUstensilUpdateManyWithWhereWithoutUstensilInput | RecipeUstensilUpdateManyWithWhereWithoutUstensilInput[]
    deleteMany?: RecipeUstensilScalarWhereInput | RecipeUstensilScalarWhereInput[]
  }

  export type RecipeCreateNestedOneWithoutUstensilsInput = {
    create?: XOR<RecipeCreateWithoutUstensilsInput, RecipeUncheckedCreateWithoutUstensilsInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutUstensilsInput
    connect?: RecipeWhereUniqueInput
  }

  export type UstensilCreateNestedOneWithoutRecipesInput = {
    create?: XOR<UstensilCreateWithoutRecipesInput, UstensilUncheckedCreateWithoutRecipesInput>
    connectOrCreate?: UstensilCreateOrConnectWithoutRecipesInput
    connect?: UstensilWhereUniqueInput
  }

  export type RecipeUpdateOneRequiredWithoutUstensilsNestedInput = {
    create?: XOR<RecipeCreateWithoutUstensilsInput, RecipeUncheckedCreateWithoutUstensilsInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutUstensilsInput
    upsert?: RecipeUpsertWithoutUstensilsInput
    connect?: RecipeWhereUniqueInput
    update?: XOR<XOR<RecipeUpdateToOneWithWhereWithoutUstensilsInput, RecipeUpdateWithoutUstensilsInput>, RecipeUncheckedUpdateWithoutUstensilsInput>
  }

  export type UstensilUpdateOneRequiredWithoutRecipesNestedInput = {
    create?: XOR<UstensilCreateWithoutRecipesInput, UstensilUncheckedCreateWithoutRecipesInput>
    connectOrCreate?: UstensilCreateOrConnectWithoutRecipesInput
    upsert?: UstensilUpsertWithoutRecipesInput
    connect?: UstensilWhereUniqueInput
    update?: XOR<XOR<UstensilUpdateToOneWithWhereWithoutRecipesInput, UstensilUpdateWithoutRecipesInput>, UstensilUncheckedUpdateWithoutRecipesInput>
  }

  export type MoodRecipeCreateNestedManyWithoutMoodInput = {
    create?: XOR<MoodRecipeCreateWithoutMoodInput, MoodRecipeUncheckedCreateWithoutMoodInput> | MoodRecipeCreateWithoutMoodInput[] | MoodRecipeUncheckedCreateWithoutMoodInput[]
    connectOrCreate?: MoodRecipeCreateOrConnectWithoutMoodInput | MoodRecipeCreateOrConnectWithoutMoodInput[]
    createMany?: MoodRecipeCreateManyMoodInputEnvelope
    connect?: MoodRecipeWhereUniqueInput | MoodRecipeWhereUniqueInput[]
  }

  export type MoodRecipeUncheckedCreateNestedManyWithoutMoodInput = {
    create?: XOR<MoodRecipeCreateWithoutMoodInput, MoodRecipeUncheckedCreateWithoutMoodInput> | MoodRecipeCreateWithoutMoodInput[] | MoodRecipeUncheckedCreateWithoutMoodInput[]
    connectOrCreate?: MoodRecipeCreateOrConnectWithoutMoodInput | MoodRecipeCreateOrConnectWithoutMoodInput[]
    createMany?: MoodRecipeCreateManyMoodInputEnvelope
    connect?: MoodRecipeWhereUniqueInput | MoodRecipeWhereUniqueInput[]
  }

  export type MoodRecipeUpdateManyWithoutMoodNestedInput = {
    create?: XOR<MoodRecipeCreateWithoutMoodInput, MoodRecipeUncheckedCreateWithoutMoodInput> | MoodRecipeCreateWithoutMoodInput[] | MoodRecipeUncheckedCreateWithoutMoodInput[]
    connectOrCreate?: MoodRecipeCreateOrConnectWithoutMoodInput | MoodRecipeCreateOrConnectWithoutMoodInput[]
    upsert?: MoodRecipeUpsertWithWhereUniqueWithoutMoodInput | MoodRecipeUpsertWithWhereUniqueWithoutMoodInput[]
    createMany?: MoodRecipeCreateManyMoodInputEnvelope
    set?: MoodRecipeWhereUniqueInput | MoodRecipeWhereUniqueInput[]
    disconnect?: MoodRecipeWhereUniqueInput | MoodRecipeWhereUniqueInput[]
    delete?: MoodRecipeWhereUniqueInput | MoodRecipeWhereUniqueInput[]
    connect?: MoodRecipeWhereUniqueInput | MoodRecipeWhereUniqueInput[]
    update?: MoodRecipeUpdateWithWhereUniqueWithoutMoodInput | MoodRecipeUpdateWithWhereUniqueWithoutMoodInput[]
    updateMany?: MoodRecipeUpdateManyWithWhereWithoutMoodInput | MoodRecipeUpdateManyWithWhereWithoutMoodInput[]
    deleteMany?: MoodRecipeScalarWhereInput | MoodRecipeScalarWhereInput[]
  }

  export type MoodRecipeUncheckedUpdateManyWithoutMoodNestedInput = {
    create?: XOR<MoodRecipeCreateWithoutMoodInput, MoodRecipeUncheckedCreateWithoutMoodInput> | MoodRecipeCreateWithoutMoodInput[] | MoodRecipeUncheckedCreateWithoutMoodInput[]
    connectOrCreate?: MoodRecipeCreateOrConnectWithoutMoodInput | MoodRecipeCreateOrConnectWithoutMoodInput[]
    upsert?: MoodRecipeUpsertWithWhereUniqueWithoutMoodInput | MoodRecipeUpsertWithWhereUniqueWithoutMoodInput[]
    createMany?: MoodRecipeCreateManyMoodInputEnvelope
    set?: MoodRecipeWhereUniqueInput | MoodRecipeWhereUniqueInput[]
    disconnect?: MoodRecipeWhereUniqueInput | MoodRecipeWhereUniqueInput[]
    delete?: MoodRecipeWhereUniqueInput | MoodRecipeWhereUniqueInput[]
    connect?: MoodRecipeWhereUniqueInput | MoodRecipeWhereUniqueInput[]
    update?: MoodRecipeUpdateWithWhereUniqueWithoutMoodInput | MoodRecipeUpdateWithWhereUniqueWithoutMoodInput[]
    updateMany?: MoodRecipeUpdateManyWithWhereWithoutMoodInput | MoodRecipeUpdateManyWithWhereWithoutMoodInput[]
    deleteMany?: MoodRecipeScalarWhereInput | MoodRecipeScalarWhereInput[]
  }

  export type RecipeCreateNestedOneWithoutMoodsInput = {
    create?: XOR<RecipeCreateWithoutMoodsInput, RecipeUncheckedCreateWithoutMoodsInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutMoodsInput
    connect?: RecipeWhereUniqueInput
  }

  export type MoodCreateNestedOneWithoutRecipesInput = {
    create?: XOR<MoodCreateWithoutRecipesInput, MoodUncheckedCreateWithoutRecipesInput>
    connectOrCreate?: MoodCreateOrConnectWithoutRecipesInput
    connect?: MoodWhereUniqueInput
  }

  export type RecipeUpdateOneRequiredWithoutMoodsNestedInput = {
    create?: XOR<RecipeCreateWithoutMoodsInput, RecipeUncheckedCreateWithoutMoodsInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutMoodsInput
    upsert?: RecipeUpsertWithoutMoodsInput
    connect?: RecipeWhereUniqueInput
    update?: XOR<XOR<RecipeUpdateToOneWithWhereWithoutMoodsInput, RecipeUpdateWithoutMoodsInput>, RecipeUncheckedUpdateWithoutMoodsInput>
  }

  export type MoodUpdateOneRequiredWithoutRecipesNestedInput = {
    create?: XOR<MoodCreateWithoutRecipesInput, MoodUncheckedCreateWithoutRecipesInput>
    connectOrCreate?: MoodCreateOrConnectWithoutRecipesInput
    upsert?: MoodUpsertWithoutRecipesInput
    connect?: MoodWhereUniqueInput
    update?: XOR<XOR<MoodUpdateToOneWithWhereWithoutRecipesInput, MoodUpdateWithoutRecipesInput>, MoodUncheckedUpdateWithoutRecipesInput>
  }

  export type DietRecipeCreateNestedManyWithoutDietInput = {
    create?: XOR<DietRecipeCreateWithoutDietInput, DietRecipeUncheckedCreateWithoutDietInput> | DietRecipeCreateWithoutDietInput[] | DietRecipeUncheckedCreateWithoutDietInput[]
    connectOrCreate?: DietRecipeCreateOrConnectWithoutDietInput | DietRecipeCreateOrConnectWithoutDietInput[]
    createMany?: DietRecipeCreateManyDietInputEnvelope
    connect?: DietRecipeWhereUniqueInput | DietRecipeWhereUniqueInput[]
  }

  export type DietRecipeUncheckedCreateNestedManyWithoutDietInput = {
    create?: XOR<DietRecipeCreateWithoutDietInput, DietRecipeUncheckedCreateWithoutDietInput> | DietRecipeCreateWithoutDietInput[] | DietRecipeUncheckedCreateWithoutDietInput[]
    connectOrCreate?: DietRecipeCreateOrConnectWithoutDietInput | DietRecipeCreateOrConnectWithoutDietInput[]
    createMany?: DietRecipeCreateManyDietInputEnvelope
    connect?: DietRecipeWhereUniqueInput | DietRecipeWhereUniqueInput[]
  }

  export type DietRecipeUpdateManyWithoutDietNestedInput = {
    create?: XOR<DietRecipeCreateWithoutDietInput, DietRecipeUncheckedCreateWithoutDietInput> | DietRecipeCreateWithoutDietInput[] | DietRecipeUncheckedCreateWithoutDietInput[]
    connectOrCreate?: DietRecipeCreateOrConnectWithoutDietInput | DietRecipeCreateOrConnectWithoutDietInput[]
    upsert?: DietRecipeUpsertWithWhereUniqueWithoutDietInput | DietRecipeUpsertWithWhereUniqueWithoutDietInput[]
    createMany?: DietRecipeCreateManyDietInputEnvelope
    set?: DietRecipeWhereUniqueInput | DietRecipeWhereUniqueInput[]
    disconnect?: DietRecipeWhereUniqueInput | DietRecipeWhereUniqueInput[]
    delete?: DietRecipeWhereUniqueInput | DietRecipeWhereUniqueInput[]
    connect?: DietRecipeWhereUniqueInput | DietRecipeWhereUniqueInput[]
    update?: DietRecipeUpdateWithWhereUniqueWithoutDietInput | DietRecipeUpdateWithWhereUniqueWithoutDietInput[]
    updateMany?: DietRecipeUpdateManyWithWhereWithoutDietInput | DietRecipeUpdateManyWithWhereWithoutDietInput[]
    deleteMany?: DietRecipeScalarWhereInput | DietRecipeScalarWhereInput[]
  }

  export type DietRecipeUncheckedUpdateManyWithoutDietNestedInput = {
    create?: XOR<DietRecipeCreateWithoutDietInput, DietRecipeUncheckedCreateWithoutDietInput> | DietRecipeCreateWithoutDietInput[] | DietRecipeUncheckedCreateWithoutDietInput[]
    connectOrCreate?: DietRecipeCreateOrConnectWithoutDietInput | DietRecipeCreateOrConnectWithoutDietInput[]
    upsert?: DietRecipeUpsertWithWhereUniqueWithoutDietInput | DietRecipeUpsertWithWhereUniqueWithoutDietInput[]
    createMany?: DietRecipeCreateManyDietInputEnvelope
    set?: DietRecipeWhereUniqueInput | DietRecipeWhereUniqueInput[]
    disconnect?: DietRecipeWhereUniqueInput | DietRecipeWhereUniqueInput[]
    delete?: DietRecipeWhereUniqueInput | DietRecipeWhereUniqueInput[]
    connect?: DietRecipeWhereUniqueInput | DietRecipeWhereUniqueInput[]
    update?: DietRecipeUpdateWithWhereUniqueWithoutDietInput | DietRecipeUpdateWithWhereUniqueWithoutDietInput[]
    updateMany?: DietRecipeUpdateManyWithWhereWithoutDietInput | DietRecipeUpdateManyWithWhereWithoutDietInput[]
    deleteMany?: DietRecipeScalarWhereInput | DietRecipeScalarWhereInput[]
  }

  export type RecipeCreateNestedOneWithoutDietsInput = {
    create?: XOR<RecipeCreateWithoutDietsInput, RecipeUncheckedCreateWithoutDietsInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutDietsInput
    connect?: RecipeWhereUniqueInput
  }

  export type DietCreateNestedOneWithoutRecipesInput = {
    create?: XOR<DietCreateWithoutRecipesInput, DietUncheckedCreateWithoutRecipesInput>
    connectOrCreate?: DietCreateOrConnectWithoutRecipesInput
    connect?: DietWhereUniqueInput
  }

  export type RecipeUpdateOneRequiredWithoutDietsNestedInput = {
    create?: XOR<RecipeCreateWithoutDietsInput, RecipeUncheckedCreateWithoutDietsInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutDietsInput
    upsert?: RecipeUpsertWithoutDietsInput
    connect?: RecipeWhereUniqueInput
    update?: XOR<XOR<RecipeUpdateToOneWithWhereWithoutDietsInput, RecipeUpdateWithoutDietsInput>, RecipeUncheckedUpdateWithoutDietsInput>
  }

  export type DietUpdateOneRequiredWithoutRecipesNestedInput = {
    create?: XOR<DietCreateWithoutRecipesInput, DietUncheckedCreateWithoutRecipesInput>
    connectOrCreate?: DietCreateOrConnectWithoutRecipesInput
    upsert?: DietUpsertWithoutRecipesInput
    connect?: DietWhereUniqueInput
    update?: XOR<XOR<DietUpdateToOneWithWhereWithoutRecipesInput, DietUpdateWithoutRecipesInput>, DietUncheckedUpdateWithoutRecipesInput>
  }

  export type OriginRecipeCreateNestedManyWithoutOriginInput = {
    create?: XOR<OriginRecipeCreateWithoutOriginInput, OriginRecipeUncheckedCreateWithoutOriginInput> | OriginRecipeCreateWithoutOriginInput[] | OriginRecipeUncheckedCreateWithoutOriginInput[]
    connectOrCreate?: OriginRecipeCreateOrConnectWithoutOriginInput | OriginRecipeCreateOrConnectWithoutOriginInput[]
    createMany?: OriginRecipeCreateManyOriginInputEnvelope
    connect?: OriginRecipeWhereUniqueInput | OriginRecipeWhereUniqueInput[]
  }

  export type OriginRecipeUncheckedCreateNestedManyWithoutOriginInput = {
    create?: XOR<OriginRecipeCreateWithoutOriginInput, OriginRecipeUncheckedCreateWithoutOriginInput> | OriginRecipeCreateWithoutOriginInput[] | OriginRecipeUncheckedCreateWithoutOriginInput[]
    connectOrCreate?: OriginRecipeCreateOrConnectWithoutOriginInput | OriginRecipeCreateOrConnectWithoutOriginInput[]
    createMany?: OriginRecipeCreateManyOriginInputEnvelope
    connect?: OriginRecipeWhereUniqueInput | OriginRecipeWhereUniqueInput[]
  }

  export type OriginRecipeUpdateManyWithoutOriginNestedInput = {
    create?: XOR<OriginRecipeCreateWithoutOriginInput, OriginRecipeUncheckedCreateWithoutOriginInput> | OriginRecipeCreateWithoutOriginInput[] | OriginRecipeUncheckedCreateWithoutOriginInput[]
    connectOrCreate?: OriginRecipeCreateOrConnectWithoutOriginInput | OriginRecipeCreateOrConnectWithoutOriginInput[]
    upsert?: OriginRecipeUpsertWithWhereUniqueWithoutOriginInput | OriginRecipeUpsertWithWhereUniqueWithoutOriginInput[]
    createMany?: OriginRecipeCreateManyOriginInputEnvelope
    set?: OriginRecipeWhereUniqueInput | OriginRecipeWhereUniqueInput[]
    disconnect?: OriginRecipeWhereUniqueInput | OriginRecipeWhereUniqueInput[]
    delete?: OriginRecipeWhereUniqueInput | OriginRecipeWhereUniqueInput[]
    connect?: OriginRecipeWhereUniqueInput | OriginRecipeWhereUniqueInput[]
    update?: OriginRecipeUpdateWithWhereUniqueWithoutOriginInput | OriginRecipeUpdateWithWhereUniqueWithoutOriginInput[]
    updateMany?: OriginRecipeUpdateManyWithWhereWithoutOriginInput | OriginRecipeUpdateManyWithWhereWithoutOriginInput[]
    deleteMany?: OriginRecipeScalarWhereInput | OriginRecipeScalarWhereInput[]
  }

  export type OriginRecipeUncheckedUpdateManyWithoutOriginNestedInput = {
    create?: XOR<OriginRecipeCreateWithoutOriginInput, OriginRecipeUncheckedCreateWithoutOriginInput> | OriginRecipeCreateWithoutOriginInput[] | OriginRecipeUncheckedCreateWithoutOriginInput[]
    connectOrCreate?: OriginRecipeCreateOrConnectWithoutOriginInput | OriginRecipeCreateOrConnectWithoutOriginInput[]
    upsert?: OriginRecipeUpsertWithWhereUniqueWithoutOriginInput | OriginRecipeUpsertWithWhereUniqueWithoutOriginInput[]
    createMany?: OriginRecipeCreateManyOriginInputEnvelope
    set?: OriginRecipeWhereUniqueInput | OriginRecipeWhereUniqueInput[]
    disconnect?: OriginRecipeWhereUniqueInput | OriginRecipeWhereUniqueInput[]
    delete?: OriginRecipeWhereUniqueInput | OriginRecipeWhereUniqueInput[]
    connect?: OriginRecipeWhereUniqueInput | OriginRecipeWhereUniqueInput[]
    update?: OriginRecipeUpdateWithWhereUniqueWithoutOriginInput | OriginRecipeUpdateWithWhereUniqueWithoutOriginInput[]
    updateMany?: OriginRecipeUpdateManyWithWhereWithoutOriginInput | OriginRecipeUpdateManyWithWhereWithoutOriginInput[]
    deleteMany?: OriginRecipeScalarWhereInput | OriginRecipeScalarWhereInput[]
  }

  export type RecipeCreateNestedOneWithoutOriginsInput = {
    create?: XOR<RecipeCreateWithoutOriginsInput, RecipeUncheckedCreateWithoutOriginsInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutOriginsInput
    connect?: RecipeWhereUniqueInput
  }

  export type OriginCreateNestedOneWithoutRecipesInput = {
    create?: XOR<OriginCreateWithoutRecipesInput, OriginUncheckedCreateWithoutRecipesInput>
    connectOrCreate?: OriginCreateOrConnectWithoutRecipesInput
    connect?: OriginWhereUniqueInput
  }

  export type RecipeUpdateOneRequiredWithoutOriginsNestedInput = {
    create?: XOR<RecipeCreateWithoutOriginsInput, RecipeUncheckedCreateWithoutOriginsInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutOriginsInput
    upsert?: RecipeUpsertWithoutOriginsInput
    connect?: RecipeWhereUniqueInput
    update?: XOR<XOR<RecipeUpdateToOneWithWhereWithoutOriginsInput, RecipeUpdateWithoutOriginsInput>, RecipeUncheckedUpdateWithoutOriginsInput>
  }

  export type OriginUpdateOneRequiredWithoutRecipesNestedInput = {
    create?: XOR<OriginCreateWithoutRecipesInput, OriginUncheckedCreateWithoutRecipesInput>
    connectOrCreate?: OriginCreateOrConnectWithoutRecipesInput
    upsert?: OriginUpsertWithoutRecipesInput
    connect?: OriginWhereUniqueInput
    update?: XOR<XOR<OriginUpdateToOneWithWhereWithoutRecipesInput, OriginUpdateWithoutRecipesInput>, OriginUncheckedUpdateWithoutRecipesInput>
  }

  export type UserCreateNestedOneWithoutFavoritesInput = {
    create?: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoritesInput
    connect?: UserWhereUniqueInput
  }

  export type RecipeCreateNestedOneWithoutFavoritesInput = {
    create?: XOR<RecipeCreateWithoutFavoritesInput, RecipeUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutFavoritesInput
    connect?: RecipeWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFavoritesNestedInput = {
    create?: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoritesInput
    upsert?: UserUpsertWithoutFavoritesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFavoritesInput, UserUpdateWithoutFavoritesInput>, UserUncheckedUpdateWithoutFavoritesInput>
  }

  export type RecipeUpdateOneRequiredWithoutFavoritesNestedInput = {
    create?: XOR<RecipeCreateWithoutFavoritesInput, RecipeUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutFavoritesInput
    upsert?: RecipeUpsertWithoutFavoritesInput
    connect?: RecipeWhereUniqueInput
    update?: XOR<XOR<RecipeUpdateToOneWithWhereWithoutFavoritesInput, RecipeUpdateWithoutFavoritesInput>, RecipeUncheckedUpdateWithoutFavoritesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type RoleCreateWithoutUsersInput = {
    id?: string
    name: string
  }

  export type RoleUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
  }

  export type RoleCreateOrConnectWithoutUsersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type RecipeCreateWithoutUserInput = {
    id?: string
    title: string
    serve?: number | null
    description?: string | null
    instructions: string
    imageUrl: string
    prepTime: number
    cookTime: number
    createAt?: Date | string
    ingredients?: RecipeIngredientCreateNestedManyWithoutRecipeInput
    ustensils?: RecipeUstensilCreateNestedManyWithoutRecipeInput
    type: TypeCreateNestedOneWithoutRecipesInput
    moods?: MoodRecipeCreateNestedManyWithoutRecipeInput
    diets?: DietRecipeCreateNestedManyWithoutRecipeInput
    origins?: OriginRecipeCreateNestedManyWithoutRecipeInput
    favorites?: FavoriteCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    serve?: number | null
    description?: string | null
    instructions: string
    typeId: string
    imageUrl: string
    prepTime: number
    cookTime: number
    createAt?: Date | string
    ingredients?: RecipeIngredientUncheckedCreateNestedManyWithoutRecipeInput
    ustensils?: RecipeUstensilUncheckedCreateNestedManyWithoutRecipeInput
    moods?: MoodRecipeUncheckedCreateNestedManyWithoutRecipeInput
    diets?: DietRecipeUncheckedCreateNestedManyWithoutRecipeInput
    origins?: OriginRecipeUncheckedCreateNestedManyWithoutRecipeInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeCreateOrConnectWithoutUserInput = {
    where: RecipeWhereUniqueInput
    create: XOR<RecipeCreateWithoutUserInput, RecipeUncheckedCreateWithoutUserInput>
  }

  export type RecipeCreateManyUserInputEnvelope = {
    data: RecipeCreateManyUserInput | RecipeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FavoriteCreateWithoutUserInput = {
    id?: string
    createAt?: Date | string
    recipe: RecipeCreateNestedOneWithoutFavoritesInput
  }

  export type FavoriteUncheckedCreateWithoutUserInput = {
    id?: string
    recipeId: string
    createAt?: Date | string
  }

  export type FavoriteCreateOrConnectWithoutUserInput = {
    where: FavoriteWhereUniqueInput
    create: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput>
  }

  export type FavoriteCreateManyUserInputEnvelope = {
    data: FavoriteCreateManyUserInput | FavoriteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RoleUpsertWithoutUsersInput = {
    update: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUsersInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RoleUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RecipeUpsertWithWhereUniqueWithoutUserInput = {
    where: RecipeWhereUniqueInput
    update: XOR<RecipeUpdateWithoutUserInput, RecipeUncheckedUpdateWithoutUserInput>
    create: XOR<RecipeCreateWithoutUserInput, RecipeUncheckedCreateWithoutUserInput>
  }

  export type RecipeUpdateWithWhereUniqueWithoutUserInput = {
    where: RecipeWhereUniqueInput
    data: XOR<RecipeUpdateWithoutUserInput, RecipeUncheckedUpdateWithoutUserInput>
  }

  export type RecipeUpdateManyWithWhereWithoutUserInput = {
    where: RecipeScalarWhereInput
    data: XOR<RecipeUpdateManyMutationInput, RecipeUncheckedUpdateManyWithoutUserInput>
  }

  export type RecipeScalarWhereInput = {
    AND?: RecipeScalarWhereInput | RecipeScalarWhereInput[]
    OR?: RecipeScalarWhereInput[]
    NOT?: RecipeScalarWhereInput | RecipeScalarWhereInput[]
    id?: StringFilter<"Recipe"> | string
    userId?: StringFilter<"Recipe"> | string
    title?: StringFilter<"Recipe"> | string
    serve?: IntNullableFilter<"Recipe"> | number | null
    description?: StringNullableFilter<"Recipe"> | string | null
    instructions?: StringFilter<"Recipe"> | string
    typeId?: StringFilter<"Recipe"> | string
    imageUrl?: StringFilter<"Recipe"> | string
    prepTime?: IntFilter<"Recipe"> | number
    cookTime?: IntFilter<"Recipe"> | number
    createAt?: DateTimeFilter<"Recipe"> | Date | string
  }

  export type FavoriteUpsertWithWhereUniqueWithoutUserInput = {
    where: FavoriteWhereUniqueInput
    update: XOR<FavoriteUpdateWithoutUserInput, FavoriteUncheckedUpdateWithoutUserInput>
    create: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput>
  }

  export type FavoriteUpdateWithWhereUniqueWithoutUserInput = {
    where: FavoriteWhereUniqueInput
    data: XOR<FavoriteUpdateWithoutUserInput, FavoriteUncheckedUpdateWithoutUserInput>
  }

  export type FavoriteUpdateManyWithWhereWithoutUserInput = {
    where: FavoriteScalarWhereInput
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyWithoutUserInput>
  }

  export type FavoriteScalarWhereInput = {
    AND?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
    OR?: FavoriteScalarWhereInput[]
    NOT?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
    id?: StringFilter<"Favorite"> | string
    userId?: StringFilter<"Favorite"> | string
    recipeId?: StringFilter<"Favorite"> | string
    createAt?: DateTimeFilter<"Favorite"> | Date | string
  }

  export type UserCreateWithoutRoleInput = {
    id?: string
    name: string
    email: string
    password: string
    image?: string | null
    consent?: boolean
    createAt?: Date | string
    recipes?: RecipeCreateNestedManyWithoutUserInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRoleInput = {
    id?: string
    name: string
    email: string
    password: string
    image?: string | null
    consent?: boolean
    createAt?: Date | string
    recipes?: RecipeUncheckedCreateNestedManyWithoutUserInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRoleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserCreateManyRoleInputEnvelope = {
    data: UserCreateManyRoleInput | UserCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
  }

  export type UserUpdateManyWithWhereWithoutRoleInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    consent?: BoolFilter<"User"> | boolean
    roleId?: StringFilter<"User"> | string
    createAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserCreateWithoutRecipesInput = {
    id?: string
    name: string
    email: string
    password: string
    image?: string | null
    consent?: boolean
    createAt?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRecipesInput = {
    id?: string
    name: string
    email: string
    password: string
    image?: string | null
    consent?: boolean
    roleId: string
    createAt?: Date | string
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRecipesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRecipesInput, UserUncheckedCreateWithoutRecipesInput>
  }

  export type RecipeIngredientCreateWithoutRecipeInput = {
    id?: string
    quantity: string
    ingredient: IngredientCreateNestedOneWithoutRecipesInput
  }

  export type RecipeIngredientUncheckedCreateWithoutRecipeInput = {
    id?: string
    ingredientId: string
    quantity: string
  }

  export type RecipeIngredientCreateOrConnectWithoutRecipeInput = {
    where: RecipeIngredientWhereUniqueInput
    create: XOR<RecipeIngredientCreateWithoutRecipeInput, RecipeIngredientUncheckedCreateWithoutRecipeInput>
  }

  export type RecipeIngredientCreateManyRecipeInputEnvelope = {
    data: RecipeIngredientCreateManyRecipeInput | RecipeIngredientCreateManyRecipeInput[]
    skipDuplicates?: boolean
  }

  export type RecipeUstensilCreateWithoutRecipeInput = {
    id?: string
    ustensil: UstensilCreateNestedOneWithoutRecipesInput
  }

  export type RecipeUstensilUncheckedCreateWithoutRecipeInput = {
    id?: string
    ustensilId: string
  }

  export type RecipeUstensilCreateOrConnectWithoutRecipeInput = {
    where: RecipeUstensilWhereUniqueInput
    create: XOR<RecipeUstensilCreateWithoutRecipeInput, RecipeUstensilUncheckedCreateWithoutRecipeInput>
  }

  export type RecipeUstensilCreateManyRecipeInputEnvelope = {
    data: RecipeUstensilCreateManyRecipeInput | RecipeUstensilCreateManyRecipeInput[]
    skipDuplicates?: boolean
  }

  export type TypeCreateWithoutRecipesInput = {
    id?: string
    name: string
  }

  export type TypeUncheckedCreateWithoutRecipesInput = {
    id?: string
    name: string
  }

  export type TypeCreateOrConnectWithoutRecipesInput = {
    where: TypeWhereUniqueInput
    create: XOR<TypeCreateWithoutRecipesInput, TypeUncheckedCreateWithoutRecipesInput>
  }

  export type MoodRecipeCreateWithoutRecipeInput = {
    id?: string
    mood: MoodCreateNestedOneWithoutRecipesInput
  }

  export type MoodRecipeUncheckedCreateWithoutRecipeInput = {
    id?: string
    moodId: string
  }

  export type MoodRecipeCreateOrConnectWithoutRecipeInput = {
    where: MoodRecipeWhereUniqueInput
    create: XOR<MoodRecipeCreateWithoutRecipeInput, MoodRecipeUncheckedCreateWithoutRecipeInput>
  }

  export type MoodRecipeCreateManyRecipeInputEnvelope = {
    data: MoodRecipeCreateManyRecipeInput | MoodRecipeCreateManyRecipeInput[]
    skipDuplicates?: boolean
  }

  export type DietRecipeCreateWithoutRecipeInput = {
    id?: string
    diet: DietCreateNestedOneWithoutRecipesInput
  }

  export type DietRecipeUncheckedCreateWithoutRecipeInput = {
    id?: string
    dietId: string
  }

  export type DietRecipeCreateOrConnectWithoutRecipeInput = {
    where: DietRecipeWhereUniqueInput
    create: XOR<DietRecipeCreateWithoutRecipeInput, DietRecipeUncheckedCreateWithoutRecipeInput>
  }

  export type DietRecipeCreateManyRecipeInputEnvelope = {
    data: DietRecipeCreateManyRecipeInput | DietRecipeCreateManyRecipeInput[]
    skipDuplicates?: boolean
  }

  export type OriginRecipeCreateWithoutRecipeInput = {
    id?: string
    origin: OriginCreateNestedOneWithoutRecipesInput
  }

  export type OriginRecipeUncheckedCreateWithoutRecipeInput = {
    id?: string
    originId: string
  }

  export type OriginRecipeCreateOrConnectWithoutRecipeInput = {
    where: OriginRecipeWhereUniqueInput
    create: XOR<OriginRecipeCreateWithoutRecipeInput, OriginRecipeUncheckedCreateWithoutRecipeInput>
  }

  export type OriginRecipeCreateManyRecipeInputEnvelope = {
    data: OriginRecipeCreateManyRecipeInput | OriginRecipeCreateManyRecipeInput[]
    skipDuplicates?: boolean
  }

  export type FavoriteCreateWithoutRecipeInput = {
    id?: string
    createAt?: Date | string
    user: UserCreateNestedOneWithoutFavoritesInput
  }

  export type FavoriteUncheckedCreateWithoutRecipeInput = {
    id?: string
    userId: string
    createAt?: Date | string
  }

  export type FavoriteCreateOrConnectWithoutRecipeInput = {
    where: FavoriteWhereUniqueInput
    create: XOR<FavoriteCreateWithoutRecipeInput, FavoriteUncheckedCreateWithoutRecipeInput>
  }

  export type FavoriteCreateManyRecipeInputEnvelope = {
    data: FavoriteCreateManyRecipeInput | FavoriteCreateManyRecipeInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutRecipesInput = {
    update: XOR<UserUpdateWithoutRecipesInput, UserUncheckedUpdateWithoutRecipesInput>
    create: XOR<UserCreateWithoutRecipesInput, UserUncheckedCreateWithoutRecipesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRecipesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRecipesInput, UserUncheckedUpdateWithoutRecipesInput>
  }

  export type UserUpdateWithoutRecipesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    consent?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRecipesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    consent?: BoolFieldUpdateOperationsInput | boolean
    roleId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RecipeIngredientUpsertWithWhereUniqueWithoutRecipeInput = {
    where: RecipeIngredientWhereUniqueInput
    update: XOR<RecipeIngredientUpdateWithoutRecipeInput, RecipeIngredientUncheckedUpdateWithoutRecipeInput>
    create: XOR<RecipeIngredientCreateWithoutRecipeInput, RecipeIngredientUncheckedCreateWithoutRecipeInput>
  }

  export type RecipeIngredientUpdateWithWhereUniqueWithoutRecipeInput = {
    where: RecipeIngredientWhereUniqueInput
    data: XOR<RecipeIngredientUpdateWithoutRecipeInput, RecipeIngredientUncheckedUpdateWithoutRecipeInput>
  }

  export type RecipeIngredientUpdateManyWithWhereWithoutRecipeInput = {
    where: RecipeIngredientScalarWhereInput
    data: XOR<RecipeIngredientUpdateManyMutationInput, RecipeIngredientUncheckedUpdateManyWithoutRecipeInput>
  }

  export type RecipeIngredientScalarWhereInput = {
    AND?: RecipeIngredientScalarWhereInput | RecipeIngredientScalarWhereInput[]
    OR?: RecipeIngredientScalarWhereInput[]
    NOT?: RecipeIngredientScalarWhereInput | RecipeIngredientScalarWhereInput[]
    id?: StringFilter<"RecipeIngredient"> | string
    recipeId?: StringFilter<"RecipeIngredient"> | string
    ingredientId?: StringFilter<"RecipeIngredient"> | string
    quantity?: StringFilter<"RecipeIngredient"> | string
  }

  export type RecipeUstensilUpsertWithWhereUniqueWithoutRecipeInput = {
    where: RecipeUstensilWhereUniqueInput
    update: XOR<RecipeUstensilUpdateWithoutRecipeInput, RecipeUstensilUncheckedUpdateWithoutRecipeInput>
    create: XOR<RecipeUstensilCreateWithoutRecipeInput, RecipeUstensilUncheckedCreateWithoutRecipeInput>
  }

  export type RecipeUstensilUpdateWithWhereUniqueWithoutRecipeInput = {
    where: RecipeUstensilWhereUniqueInput
    data: XOR<RecipeUstensilUpdateWithoutRecipeInput, RecipeUstensilUncheckedUpdateWithoutRecipeInput>
  }

  export type RecipeUstensilUpdateManyWithWhereWithoutRecipeInput = {
    where: RecipeUstensilScalarWhereInput
    data: XOR<RecipeUstensilUpdateManyMutationInput, RecipeUstensilUncheckedUpdateManyWithoutRecipeInput>
  }

  export type RecipeUstensilScalarWhereInput = {
    AND?: RecipeUstensilScalarWhereInput | RecipeUstensilScalarWhereInput[]
    OR?: RecipeUstensilScalarWhereInput[]
    NOT?: RecipeUstensilScalarWhereInput | RecipeUstensilScalarWhereInput[]
    id?: StringFilter<"RecipeUstensil"> | string
    recipeId?: StringFilter<"RecipeUstensil"> | string
    ustensilId?: StringFilter<"RecipeUstensil"> | string
  }

  export type TypeUpsertWithoutRecipesInput = {
    update: XOR<TypeUpdateWithoutRecipesInput, TypeUncheckedUpdateWithoutRecipesInput>
    create: XOR<TypeCreateWithoutRecipesInput, TypeUncheckedCreateWithoutRecipesInput>
    where?: TypeWhereInput
  }

  export type TypeUpdateToOneWithWhereWithoutRecipesInput = {
    where?: TypeWhereInput
    data: XOR<TypeUpdateWithoutRecipesInput, TypeUncheckedUpdateWithoutRecipesInput>
  }

  export type TypeUpdateWithoutRecipesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TypeUncheckedUpdateWithoutRecipesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MoodRecipeUpsertWithWhereUniqueWithoutRecipeInput = {
    where: MoodRecipeWhereUniqueInput
    update: XOR<MoodRecipeUpdateWithoutRecipeInput, MoodRecipeUncheckedUpdateWithoutRecipeInput>
    create: XOR<MoodRecipeCreateWithoutRecipeInput, MoodRecipeUncheckedCreateWithoutRecipeInput>
  }

  export type MoodRecipeUpdateWithWhereUniqueWithoutRecipeInput = {
    where: MoodRecipeWhereUniqueInput
    data: XOR<MoodRecipeUpdateWithoutRecipeInput, MoodRecipeUncheckedUpdateWithoutRecipeInput>
  }

  export type MoodRecipeUpdateManyWithWhereWithoutRecipeInput = {
    where: MoodRecipeScalarWhereInput
    data: XOR<MoodRecipeUpdateManyMutationInput, MoodRecipeUncheckedUpdateManyWithoutRecipeInput>
  }

  export type MoodRecipeScalarWhereInput = {
    AND?: MoodRecipeScalarWhereInput | MoodRecipeScalarWhereInput[]
    OR?: MoodRecipeScalarWhereInput[]
    NOT?: MoodRecipeScalarWhereInput | MoodRecipeScalarWhereInput[]
    id?: StringFilter<"MoodRecipe"> | string
    recipeId?: StringFilter<"MoodRecipe"> | string
    moodId?: StringFilter<"MoodRecipe"> | string
  }

  export type DietRecipeUpsertWithWhereUniqueWithoutRecipeInput = {
    where: DietRecipeWhereUniqueInput
    update: XOR<DietRecipeUpdateWithoutRecipeInput, DietRecipeUncheckedUpdateWithoutRecipeInput>
    create: XOR<DietRecipeCreateWithoutRecipeInput, DietRecipeUncheckedCreateWithoutRecipeInput>
  }

  export type DietRecipeUpdateWithWhereUniqueWithoutRecipeInput = {
    where: DietRecipeWhereUniqueInput
    data: XOR<DietRecipeUpdateWithoutRecipeInput, DietRecipeUncheckedUpdateWithoutRecipeInput>
  }

  export type DietRecipeUpdateManyWithWhereWithoutRecipeInput = {
    where: DietRecipeScalarWhereInput
    data: XOR<DietRecipeUpdateManyMutationInput, DietRecipeUncheckedUpdateManyWithoutRecipeInput>
  }

  export type DietRecipeScalarWhereInput = {
    AND?: DietRecipeScalarWhereInput | DietRecipeScalarWhereInput[]
    OR?: DietRecipeScalarWhereInput[]
    NOT?: DietRecipeScalarWhereInput | DietRecipeScalarWhereInput[]
    id?: StringFilter<"DietRecipe"> | string
    recipeId?: StringFilter<"DietRecipe"> | string
    dietId?: StringFilter<"DietRecipe"> | string
  }

  export type OriginRecipeUpsertWithWhereUniqueWithoutRecipeInput = {
    where: OriginRecipeWhereUniqueInput
    update: XOR<OriginRecipeUpdateWithoutRecipeInput, OriginRecipeUncheckedUpdateWithoutRecipeInput>
    create: XOR<OriginRecipeCreateWithoutRecipeInput, OriginRecipeUncheckedCreateWithoutRecipeInput>
  }

  export type OriginRecipeUpdateWithWhereUniqueWithoutRecipeInput = {
    where: OriginRecipeWhereUniqueInput
    data: XOR<OriginRecipeUpdateWithoutRecipeInput, OriginRecipeUncheckedUpdateWithoutRecipeInput>
  }

  export type OriginRecipeUpdateManyWithWhereWithoutRecipeInput = {
    where: OriginRecipeScalarWhereInput
    data: XOR<OriginRecipeUpdateManyMutationInput, OriginRecipeUncheckedUpdateManyWithoutRecipeInput>
  }

  export type OriginRecipeScalarWhereInput = {
    AND?: OriginRecipeScalarWhereInput | OriginRecipeScalarWhereInput[]
    OR?: OriginRecipeScalarWhereInput[]
    NOT?: OriginRecipeScalarWhereInput | OriginRecipeScalarWhereInput[]
    id?: StringFilter<"OriginRecipe"> | string
    recipeId?: StringFilter<"OriginRecipe"> | string
    originId?: StringFilter<"OriginRecipe"> | string
  }

  export type FavoriteUpsertWithWhereUniqueWithoutRecipeInput = {
    where: FavoriteWhereUniqueInput
    update: XOR<FavoriteUpdateWithoutRecipeInput, FavoriteUncheckedUpdateWithoutRecipeInput>
    create: XOR<FavoriteCreateWithoutRecipeInput, FavoriteUncheckedCreateWithoutRecipeInput>
  }

  export type FavoriteUpdateWithWhereUniqueWithoutRecipeInput = {
    where: FavoriteWhereUniqueInput
    data: XOR<FavoriteUpdateWithoutRecipeInput, FavoriteUncheckedUpdateWithoutRecipeInput>
  }

  export type FavoriteUpdateManyWithWhereWithoutRecipeInput = {
    where: FavoriteScalarWhereInput
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyWithoutRecipeInput>
  }

  export type RecipeCreateWithoutTypeInput = {
    id?: string
    title: string
    serve?: number | null
    description?: string | null
    instructions: string
    imageUrl: string
    prepTime: number
    cookTime: number
    createAt?: Date | string
    user: UserCreateNestedOneWithoutRecipesInput
    ingredients?: RecipeIngredientCreateNestedManyWithoutRecipeInput
    ustensils?: RecipeUstensilCreateNestedManyWithoutRecipeInput
    moods?: MoodRecipeCreateNestedManyWithoutRecipeInput
    diets?: DietRecipeCreateNestedManyWithoutRecipeInput
    origins?: OriginRecipeCreateNestedManyWithoutRecipeInput
    favorites?: FavoriteCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateWithoutTypeInput = {
    id?: string
    userId: string
    title: string
    serve?: number | null
    description?: string | null
    instructions: string
    imageUrl: string
    prepTime: number
    cookTime: number
    createAt?: Date | string
    ingredients?: RecipeIngredientUncheckedCreateNestedManyWithoutRecipeInput
    ustensils?: RecipeUstensilUncheckedCreateNestedManyWithoutRecipeInput
    moods?: MoodRecipeUncheckedCreateNestedManyWithoutRecipeInput
    diets?: DietRecipeUncheckedCreateNestedManyWithoutRecipeInput
    origins?: OriginRecipeUncheckedCreateNestedManyWithoutRecipeInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeCreateOrConnectWithoutTypeInput = {
    where: RecipeWhereUniqueInput
    create: XOR<RecipeCreateWithoutTypeInput, RecipeUncheckedCreateWithoutTypeInput>
  }

  export type RecipeCreateManyTypeInputEnvelope = {
    data: RecipeCreateManyTypeInput | RecipeCreateManyTypeInput[]
    skipDuplicates?: boolean
  }

  export type RecipeUpsertWithWhereUniqueWithoutTypeInput = {
    where: RecipeWhereUniqueInput
    update: XOR<RecipeUpdateWithoutTypeInput, RecipeUncheckedUpdateWithoutTypeInput>
    create: XOR<RecipeCreateWithoutTypeInput, RecipeUncheckedCreateWithoutTypeInput>
  }

  export type RecipeUpdateWithWhereUniqueWithoutTypeInput = {
    where: RecipeWhereUniqueInput
    data: XOR<RecipeUpdateWithoutTypeInput, RecipeUncheckedUpdateWithoutTypeInput>
  }

  export type RecipeUpdateManyWithWhereWithoutTypeInput = {
    where: RecipeScalarWhereInput
    data: XOR<RecipeUpdateManyMutationInput, RecipeUncheckedUpdateManyWithoutTypeInput>
  }

  export type RecipeIngredientCreateWithoutIngredientInput = {
    id?: string
    quantity: string
    recipe: RecipeCreateNestedOneWithoutIngredientsInput
  }

  export type RecipeIngredientUncheckedCreateWithoutIngredientInput = {
    id?: string
    recipeId: string
    quantity: string
  }

  export type RecipeIngredientCreateOrConnectWithoutIngredientInput = {
    where: RecipeIngredientWhereUniqueInput
    create: XOR<RecipeIngredientCreateWithoutIngredientInput, RecipeIngredientUncheckedCreateWithoutIngredientInput>
  }

  export type RecipeIngredientCreateManyIngredientInputEnvelope = {
    data: RecipeIngredientCreateManyIngredientInput | RecipeIngredientCreateManyIngredientInput[]
    skipDuplicates?: boolean
  }

  export type RecipeIngredientUpsertWithWhereUniqueWithoutIngredientInput = {
    where: RecipeIngredientWhereUniqueInput
    update: XOR<RecipeIngredientUpdateWithoutIngredientInput, RecipeIngredientUncheckedUpdateWithoutIngredientInput>
    create: XOR<RecipeIngredientCreateWithoutIngredientInput, RecipeIngredientUncheckedCreateWithoutIngredientInput>
  }

  export type RecipeIngredientUpdateWithWhereUniqueWithoutIngredientInput = {
    where: RecipeIngredientWhereUniqueInput
    data: XOR<RecipeIngredientUpdateWithoutIngredientInput, RecipeIngredientUncheckedUpdateWithoutIngredientInput>
  }

  export type RecipeIngredientUpdateManyWithWhereWithoutIngredientInput = {
    where: RecipeIngredientScalarWhereInput
    data: XOR<RecipeIngredientUpdateManyMutationInput, RecipeIngredientUncheckedUpdateManyWithoutIngredientInput>
  }

  export type RecipeCreateWithoutIngredientsInput = {
    id?: string
    title: string
    serve?: number | null
    description?: string | null
    instructions: string
    imageUrl: string
    prepTime: number
    cookTime: number
    createAt?: Date | string
    user: UserCreateNestedOneWithoutRecipesInput
    ustensils?: RecipeUstensilCreateNestedManyWithoutRecipeInput
    type: TypeCreateNestedOneWithoutRecipesInput
    moods?: MoodRecipeCreateNestedManyWithoutRecipeInput
    diets?: DietRecipeCreateNestedManyWithoutRecipeInput
    origins?: OriginRecipeCreateNestedManyWithoutRecipeInput
    favorites?: FavoriteCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateWithoutIngredientsInput = {
    id?: string
    userId: string
    title: string
    serve?: number | null
    description?: string | null
    instructions: string
    typeId: string
    imageUrl: string
    prepTime: number
    cookTime: number
    createAt?: Date | string
    ustensils?: RecipeUstensilUncheckedCreateNestedManyWithoutRecipeInput
    moods?: MoodRecipeUncheckedCreateNestedManyWithoutRecipeInput
    diets?: DietRecipeUncheckedCreateNestedManyWithoutRecipeInput
    origins?: OriginRecipeUncheckedCreateNestedManyWithoutRecipeInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeCreateOrConnectWithoutIngredientsInput = {
    where: RecipeWhereUniqueInput
    create: XOR<RecipeCreateWithoutIngredientsInput, RecipeUncheckedCreateWithoutIngredientsInput>
  }

  export type IngredientCreateWithoutRecipesInput = {
    id?: string
    name: string
  }

  export type IngredientUncheckedCreateWithoutRecipesInput = {
    id?: string
    name: string
  }

  export type IngredientCreateOrConnectWithoutRecipesInput = {
    where: IngredientWhereUniqueInput
    create: XOR<IngredientCreateWithoutRecipesInput, IngredientUncheckedCreateWithoutRecipesInput>
  }

  export type RecipeUpsertWithoutIngredientsInput = {
    update: XOR<RecipeUpdateWithoutIngredientsInput, RecipeUncheckedUpdateWithoutIngredientsInput>
    create: XOR<RecipeCreateWithoutIngredientsInput, RecipeUncheckedCreateWithoutIngredientsInput>
    where?: RecipeWhereInput
  }

  export type RecipeUpdateToOneWithWhereWithoutIngredientsInput = {
    where?: RecipeWhereInput
    data: XOR<RecipeUpdateWithoutIngredientsInput, RecipeUncheckedUpdateWithoutIngredientsInput>
  }

  export type RecipeUpdateWithoutIngredientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    serve?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    prepTime?: IntFieldUpdateOperationsInput | number
    cookTime?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRecipesNestedInput
    ustensils?: RecipeUstensilUpdateManyWithoutRecipeNestedInput
    type?: TypeUpdateOneRequiredWithoutRecipesNestedInput
    moods?: MoodRecipeUpdateManyWithoutRecipeNestedInput
    diets?: DietRecipeUpdateManyWithoutRecipeNestedInput
    origins?: OriginRecipeUpdateManyWithoutRecipeNestedInput
    favorites?: FavoriteUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateWithoutIngredientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    serve?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: StringFieldUpdateOperationsInput | string
    typeId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    prepTime?: IntFieldUpdateOperationsInput | number
    cookTime?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ustensils?: RecipeUstensilUncheckedUpdateManyWithoutRecipeNestedInput
    moods?: MoodRecipeUncheckedUpdateManyWithoutRecipeNestedInput
    diets?: DietRecipeUncheckedUpdateManyWithoutRecipeNestedInput
    origins?: OriginRecipeUncheckedUpdateManyWithoutRecipeNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type IngredientUpsertWithoutRecipesInput = {
    update: XOR<IngredientUpdateWithoutRecipesInput, IngredientUncheckedUpdateWithoutRecipesInput>
    create: XOR<IngredientCreateWithoutRecipesInput, IngredientUncheckedCreateWithoutRecipesInput>
    where?: IngredientWhereInput
  }

  export type IngredientUpdateToOneWithWhereWithoutRecipesInput = {
    where?: IngredientWhereInput
    data: XOR<IngredientUpdateWithoutRecipesInput, IngredientUncheckedUpdateWithoutRecipesInput>
  }

  export type IngredientUpdateWithoutRecipesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type IngredientUncheckedUpdateWithoutRecipesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RecipeUstensilCreateWithoutUstensilInput = {
    id?: string
    recipe: RecipeCreateNestedOneWithoutUstensilsInput
  }

  export type RecipeUstensilUncheckedCreateWithoutUstensilInput = {
    id?: string
    recipeId: string
  }

  export type RecipeUstensilCreateOrConnectWithoutUstensilInput = {
    where: RecipeUstensilWhereUniqueInput
    create: XOR<RecipeUstensilCreateWithoutUstensilInput, RecipeUstensilUncheckedCreateWithoutUstensilInput>
  }

  export type RecipeUstensilCreateManyUstensilInputEnvelope = {
    data: RecipeUstensilCreateManyUstensilInput | RecipeUstensilCreateManyUstensilInput[]
    skipDuplicates?: boolean
  }

  export type RecipeUstensilUpsertWithWhereUniqueWithoutUstensilInput = {
    where: RecipeUstensilWhereUniqueInput
    update: XOR<RecipeUstensilUpdateWithoutUstensilInput, RecipeUstensilUncheckedUpdateWithoutUstensilInput>
    create: XOR<RecipeUstensilCreateWithoutUstensilInput, RecipeUstensilUncheckedCreateWithoutUstensilInput>
  }

  export type RecipeUstensilUpdateWithWhereUniqueWithoutUstensilInput = {
    where: RecipeUstensilWhereUniqueInput
    data: XOR<RecipeUstensilUpdateWithoutUstensilInput, RecipeUstensilUncheckedUpdateWithoutUstensilInput>
  }

  export type RecipeUstensilUpdateManyWithWhereWithoutUstensilInput = {
    where: RecipeUstensilScalarWhereInput
    data: XOR<RecipeUstensilUpdateManyMutationInput, RecipeUstensilUncheckedUpdateManyWithoutUstensilInput>
  }

  export type RecipeCreateWithoutUstensilsInput = {
    id?: string
    title: string
    serve?: number | null
    description?: string | null
    instructions: string
    imageUrl: string
    prepTime: number
    cookTime: number
    createAt?: Date | string
    user: UserCreateNestedOneWithoutRecipesInput
    ingredients?: RecipeIngredientCreateNestedManyWithoutRecipeInput
    type: TypeCreateNestedOneWithoutRecipesInput
    moods?: MoodRecipeCreateNestedManyWithoutRecipeInput
    diets?: DietRecipeCreateNestedManyWithoutRecipeInput
    origins?: OriginRecipeCreateNestedManyWithoutRecipeInput
    favorites?: FavoriteCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateWithoutUstensilsInput = {
    id?: string
    userId: string
    title: string
    serve?: number | null
    description?: string | null
    instructions: string
    typeId: string
    imageUrl: string
    prepTime: number
    cookTime: number
    createAt?: Date | string
    ingredients?: RecipeIngredientUncheckedCreateNestedManyWithoutRecipeInput
    moods?: MoodRecipeUncheckedCreateNestedManyWithoutRecipeInput
    diets?: DietRecipeUncheckedCreateNestedManyWithoutRecipeInput
    origins?: OriginRecipeUncheckedCreateNestedManyWithoutRecipeInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeCreateOrConnectWithoutUstensilsInput = {
    where: RecipeWhereUniqueInput
    create: XOR<RecipeCreateWithoutUstensilsInput, RecipeUncheckedCreateWithoutUstensilsInput>
  }

  export type UstensilCreateWithoutRecipesInput = {
    id?: string
    name: string
  }

  export type UstensilUncheckedCreateWithoutRecipesInput = {
    id?: string
    name: string
  }

  export type UstensilCreateOrConnectWithoutRecipesInput = {
    where: UstensilWhereUniqueInput
    create: XOR<UstensilCreateWithoutRecipesInput, UstensilUncheckedCreateWithoutRecipesInput>
  }

  export type RecipeUpsertWithoutUstensilsInput = {
    update: XOR<RecipeUpdateWithoutUstensilsInput, RecipeUncheckedUpdateWithoutUstensilsInput>
    create: XOR<RecipeCreateWithoutUstensilsInput, RecipeUncheckedCreateWithoutUstensilsInput>
    where?: RecipeWhereInput
  }

  export type RecipeUpdateToOneWithWhereWithoutUstensilsInput = {
    where?: RecipeWhereInput
    data: XOR<RecipeUpdateWithoutUstensilsInput, RecipeUncheckedUpdateWithoutUstensilsInput>
  }

  export type RecipeUpdateWithoutUstensilsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    serve?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    prepTime?: IntFieldUpdateOperationsInput | number
    cookTime?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRecipesNestedInput
    ingredients?: RecipeIngredientUpdateManyWithoutRecipeNestedInput
    type?: TypeUpdateOneRequiredWithoutRecipesNestedInput
    moods?: MoodRecipeUpdateManyWithoutRecipeNestedInput
    diets?: DietRecipeUpdateManyWithoutRecipeNestedInput
    origins?: OriginRecipeUpdateManyWithoutRecipeNestedInput
    favorites?: FavoriteUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateWithoutUstensilsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    serve?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: StringFieldUpdateOperationsInput | string
    typeId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    prepTime?: IntFieldUpdateOperationsInput | number
    cookTime?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredients?: RecipeIngredientUncheckedUpdateManyWithoutRecipeNestedInput
    moods?: MoodRecipeUncheckedUpdateManyWithoutRecipeNestedInput
    diets?: DietRecipeUncheckedUpdateManyWithoutRecipeNestedInput
    origins?: OriginRecipeUncheckedUpdateManyWithoutRecipeNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type UstensilUpsertWithoutRecipesInput = {
    update: XOR<UstensilUpdateWithoutRecipesInput, UstensilUncheckedUpdateWithoutRecipesInput>
    create: XOR<UstensilCreateWithoutRecipesInput, UstensilUncheckedCreateWithoutRecipesInput>
    where?: UstensilWhereInput
  }

  export type UstensilUpdateToOneWithWhereWithoutRecipesInput = {
    where?: UstensilWhereInput
    data: XOR<UstensilUpdateWithoutRecipesInput, UstensilUncheckedUpdateWithoutRecipesInput>
  }

  export type UstensilUpdateWithoutRecipesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UstensilUncheckedUpdateWithoutRecipesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MoodRecipeCreateWithoutMoodInput = {
    id?: string
    recipe: RecipeCreateNestedOneWithoutMoodsInput
  }

  export type MoodRecipeUncheckedCreateWithoutMoodInput = {
    id?: string
    recipeId: string
  }

  export type MoodRecipeCreateOrConnectWithoutMoodInput = {
    where: MoodRecipeWhereUniqueInput
    create: XOR<MoodRecipeCreateWithoutMoodInput, MoodRecipeUncheckedCreateWithoutMoodInput>
  }

  export type MoodRecipeCreateManyMoodInputEnvelope = {
    data: MoodRecipeCreateManyMoodInput | MoodRecipeCreateManyMoodInput[]
    skipDuplicates?: boolean
  }

  export type MoodRecipeUpsertWithWhereUniqueWithoutMoodInput = {
    where: MoodRecipeWhereUniqueInput
    update: XOR<MoodRecipeUpdateWithoutMoodInput, MoodRecipeUncheckedUpdateWithoutMoodInput>
    create: XOR<MoodRecipeCreateWithoutMoodInput, MoodRecipeUncheckedCreateWithoutMoodInput>
  }

  export type MoodRecipeUpdateWithWhereUniqueWithoutMoodInput = {
    where: MoodRecipeWhereUniqueInput
    data: XOR<MoodRecipeUpdateWithoutMoodInput, MoodRecipeUncheckedUpdateWithoutMoodInput>
  }

  export type MoodRecipeUpdateManyWithWhereWithoutMoodInput = {
    where: MoodRecipeScalarWhereInput
    data: XOR<MoodRecipeUpdateManyMutationInput, MoodRecipeUncheckedUpdateManyWithoutMoodInput>
  }

  export type RecipeCreateWithoutMoodsInput = {
    id?: string
    title: string
    serve?: number | null
    description?: string | null
    instructions: string
    imageUrl: string
    prepTime: number
    cookTime: number
    createAt?: Date | string
    user: UserCreateNestedOneWithoutRecipesInput
    ingredients?: RecipeIngredientCreateNestedManyWithoutRecipeInput
    ustensils?: RecipeUstensilCreateNestedManyWithoutRecipeInput
    type: TypeCreateNestedOneWithoutRecipesInput
    diets?: DietRecipeCreateNestedManyWithoutRecipeInput
    origins?: OriginRecipeCreateNestedManyWithoutRecipeInput
    favorites?: FavoriteCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateWithoutMoodsInput = {
    id?: string
    userId: string
    title: string
    serve?: number | null
    description?: string | null
    instructions: string
    typeId: string
    imageUrl: string
    prepTime: number
    cookTime: number
    createAt?: Date | string
    ingredients?: RecipeIngredientUncheckedCreateNestedManyWithoutRecipeInput
    ustensils?: RecipeUstensilUncheckedCreateNestedManyWithoutRecipeInput
    diets?: DietRecipeUncheckedCreateNestedManyWithoutRecipeInput
    origins?: OriginRecipeUncheckedCreateNestedManyWithoutRecipeInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeCreateOrConnectWithoutMoodsInput = {
    where: RecipeWhereUniqueInput
    create: XOR<RecipeCreateWithoutMoodsInput, RecipeUncheckedCreateWithoutMoodsInput>
  }

  export type MoodCreateWithoutRecipesInput = {
    id?: string
    name: string
  }

  export type MoodUncheckedCreateWithoutRecipesInput = {
    id?: string
    name: string
  }

  export type MoodCreateOrConnectWithoutRecipesInput = {
    where: MoodWhereUniqueInput
    create: XOR<MoodCreateWithoutRecipesInput, MoodUncheckedCreateWithoutRecipesInput>
  }

  export type RecipeUpsertWithoutMoodsInput = {
    update: XOR<RecipeUpdateWithoutMoodsInput, RecipeUncheckedUpdateWithoutMoodsInput>
    create: XOR<RecipeCreateWithoutMoodsInput, RecipeUncheckedCreateWithoutMoodsInput>
    where?: RecipeWhereInput
  }

  export type RecipeUpdateToOneWithWhereWithoutMoodsInput = {
    where?: RecipeWhereInput
    data: XOR<RecipeUpdateWithoutMoodsInput, RecipeUncheckedUpdateWithoutMoodsInput>
  }

  export type RecipeUpdateWithoutMoodsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    serve?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    prepTime?: IntFieldUpdateOperationsInput | number
    cookTime?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRecipesNestedInput
    ingredients?: RecipeIngredientUpdateManyWithoutRecipeNestedInput
    ustensils?: RecipeUstensilUpdateManyWithoutRecipeNestedInput
    type?: TypeUpdateOneRequiredWithoutRecipesNestedInput
    diets?: DietRecipeUpdateManyWithoutRecipeNestedInput
    origins?: OriginRecipeUpdateManyWithoutRecipeNestedInput
    favorites?: FavoriteUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateWithoutMoodsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    serve?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: StringFieldUpdateOperationsInput | string
    typeId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    prepTime?: IntFieldUpdateOperationsInput | number
    cookTime?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredients?: RecipeIngredientUncheckedUpdateManyWithoutRecipeNestedInput
    ustensils?: RecipeUstensilUncheckedUpdateManyWithoutRecipeNestedInput
    diets?: DietRecipeUncheckedUpdateManyWithoutRecipeNestedInput
    origins?: OriginRecipeUncheckedUpdateManyWithoutRecipeNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type MoodUpsertWithoutRecipesInput = {
    update: XOR<MoodUpdateWithoutRecipesInput, MoodUncheckedUpdateWithoutRecipesInput>
    create: XOR<MoodCreateWithoutRecipesInput, MoodUncheckedCreateWithoutRecipesInput>
    where?: MoodWhereInput
  }

  export type MoodUpdateToOneWithWhereWithoutRecipesInput = {
    where?: MoodWhereInput
    data: XOR<MoodUpdateWithoutRecipesInput, MoodUncheckedUpdateWithoutRecipesInput>
  }

  export type MoodUpdateWithoutRecipesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MoodUncheckedUpdateWithoutRecipesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DietRecipeCreateWithoutDietInput = {
    id?: string
    recipe: RecipeCreateNestedOneWithoutDietsInput
  }

  export type DietRecipeUncheckedCreateWithoutDietInput = {
    id?: string
    recipeId: string
  }

  export type DietRecipeCreateOrConnectWithoutDietInput = {
    where: DietRecipeWhereUniqueInput
    create: XOR<DietRecipeCreateWithoutDietInput, DietRecipeUncheckedCreateWithoutDietInput>
  }

  export type DietRecipeCreateManyDietInputEnvelope = {
    data: DietRecipeCreateManyDietInput | DietRecipeCreateManyDietInput[]
    skipDuplicates?: boolean
  }

  export type DietRecipeUpsertWithWhereUniqueWithoutDietInput = {
    where: DietRecipeWhereUniqueInput
    update: XOR<DietRecipeUpdateWithoutDietInput, DietRecipeUncheckedUpdateWithoutDietInput>
    create: XOR<DietRecipeCreateWithoutDietInput, DietRecipeUncheckedCreateWithoutDietInput>
  }

  export type DietRecipeUpdateWithWhereUniqueWithoutDietInput = {
    where: DietRecipeWhereUniqueInput
    data: XOR<DietRecipeUpdateWithoutDietInput, DietRecipeUncheckedUpdateWithoutDietInput>
  }

  export type DietRecipeUpdateManyWithWhereWithoutDietInput = {
    where: DietRecipeScalarWhereInput
    data: XOR<DietRecipeUpdateManyMutationInput, DietRecipeUncheckedUpdateManyWithoutDietInput>
  }

  export type RecipeCreateWithoutDietsInput = {
    id?: string
    title: string
    serve?: number | null
    description?: string | null
    instructions: string
    imageUrl: string
    prepTime: number
    cookTime: number
    createAt?: Date | string
    user: UserCreateNestedOneWithoutRecipesInput
    ingredients?: RecipeIngredientCreateNestedManyWithoutRecipeInput
    ustensils?: RecipeUstensilCreateNestedManyWithoutRecipeInput
    type: TypeCreateNestedOneWithoutRecipesInput
    moods?: MoodRecipeCreateNestedManyWithoutRecipeInput
    origins?: OriginRecipeCreateNestedManyWithoutRecipeInput
    favorites?: FavoriteCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateWithoutDietsInput = {
    id?: string
    userId: string
    title: string
    serve?: number | null
    description?: string | null
    instructions: string
    typeId: string
    imageUrl: string
    prepTime: number
    cookTime: number
    createAt?: Date | string
    ingredients?: RecipeIngredientUncheckedCreateNestedManyWithoutRecipeInput
    ustensils?: RecipeUstensilUncheckedCreateNestedManyWithoutRecipeInput
    moods?: MoodRecipeUncheckedCreateNestedManyWithoutRecipeInput
    origins?: OriginRecipeUncheckedCreateNestedManyWithoutRecipeInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeCreateOrConnectWithoutDietsInput = {
    where: RecipeWhereUniqueInput
    create: XOR<RecipeCreateWithoutDietsInput, RecipeUncheckedCreateWithoutDietsInput>
  }

  export type DietCreateWithoutRecipesInput = {
    id?: string
    name: string
  }

  export type DietUncheckedCreateWithoutRecipesInput = {
    id?: string
    name: string
  }

  export type DietCreateOrConnectWithoutRecipesInput = {
    where: DietWhereUniqueInput
    create: XOR<DietCreateWithoutRecipesInput, DietUncheckedCreateWithoutRecipesInput>
  }

  export type RecipeUpsertWithoutDietsInput = {
    update: XOR<RecipeUpdateWithoutDietsInput, RecipeUncheckedUpdateWithoutDietsInput>
    create: XOR<RecipeCreateWithoutDietsInput, RecipeUncheckedCreateWithoutDietsInput>
    where?: RecipeWhereInput
  }

  export type RecipeUpdateToOneWithWhereWithoutDietsInput = {
    where?: RecipeWhereInput
    data: XOR<RecipeUpdateWithoutDietsInput, RecipeUncheckedUpdateWithoutDietsInput>
  }

  export type RecipeUpdateWithoutDietsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    serve?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    prepTime?: IntFieldUpdateOperationsInput | number
    cookTime?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRecipesNestedInput
    ingredients?: RecipeIngredientUpdateManyWithoutRecipeNestedInput
    ustensils?: RecipeUstensilUpdateManyWithoutRecipeNestedInput
    type?: TypeUpdateOneRequiredWithoutRecipesNestedInput
    moods?: MoodRecipeUpdateManyWithoutRecipeNestedInput
    origins?: OriginRecipeUpdateManyWithoutRecipeNestedInput
    favorites?: FavoriteUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateWithoutDietsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    serve?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: StringFieldUpdateOperationsInput | string
    typeId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    prepTime?: IntFieldUpdateOperationsInput | number
    cookTime?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredients?: RecipeIngredientUncheckedUpdateManyWithoutRecipeNestedInput
    ustensils?: RecipeUstensilUncheckedUpdateManyWithoutRecipeNestedInput
    moods?: MoodRecipeUncheckedUpdateManyWithoutRecipeNestedInput
    origins?: OriginRecipeUncheckedUpdateManyWithoutRecipeNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type DietUpsertWithoutRecipesInput = {
    update: XOR<DietUpdateWithoutRecipesInput, DietUncheckedUpdateWithoutRecipesInput>
    create: XOR<DietCreateWithoutRecipesInput, DietUncheckedCreateWithoutRecipesInput>
    where?: DietWhereInput
  }

  export type DietUpdateToOneWithWhereWithoutRecipesInput = {
    where?: DietWhereInput
    data: XOR<DietUpdateWithoutRecipesInput, DietUncheckedUpdateWithoutRecipesInput>
  }

  export type DietUpdateWithoutRecipesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DietUncheckedUpdateWithoutRecipesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type OriginRecipeCreateWithoutOriginInput = {
    id?: string
    recipe: RecipeCreateNestedOneWithoutOriginsInput
  }

  export type OriginRecipeUncheckedCreateWithoutOriginInput = {
    id?: string
    recipeId: string
  }

  export type OriginRecipeCreateOrConnectWithoutOriginInput = {
    where: OriginRecipeWhereUniqueInput
    create: XOR<OriginRecipeCreateWithoutOriginInput, OriginRecipeUncheckedCreateWithoutOriginInput>
  }

  export type OriginRecipeCreateManyOriginInputEnvelope = {
    data: OriginRecipeCreateManyOriginInput | OriginRecipeCreateManyOriginInput[]
    skipDuplicates?: boolean
  }

  export type OriginRecipeUpsertWithWhereUniqueWithoutOriginInput = {
    where: OriginRecipeWhereUniqueInput
    update: XOR<OriginRecipeUpdateWithoutOriginInput, OriginRecipeUncheckedUpdateWithoutOriginInput>
    create: XOR<OriginRecipeCreateWithoutOriginInput, OriginRecipeUncheckedCreateWithoutOriginInput>
  }

  export type OriginRecipeUpdateWithWhereUniqueWithoutOriginInput = {
    where: OriginRecipeWhereUniqueInput
    data: XOR<OriginRecipeUpdateWithoutOriginInput, OriginRecipeUncheckedUpdateWithoutOriginInput>
  }

  export type OriginRecipeUpdateManyWithWhereWithoutOriginInput = {
    where: OriginRecipeScalarWhereInput
    data: XOR<OriginRecipeUpdateManyMutationInput, OriginRecipeUncheckedUpdateManyWithoutOriginInput>
  }

  export type RecipeCreateWithoutOriginsInput = {
    id?: string
    title: string
    serve?: number | null
    description?: string | null
    instructions: string
    imageUrl: string
    prepTime: number
    cookTime: number
    createAt?: Date | string
    user: UserCreateNestedOneWithoutRecipesInput
    ingredients?: RecipeIngredientCreateNestedManyWithoutRecipeInput
    ustensils?: RecipeUstensilCreateNestedManyWithoutRecipeInput
    type: TypeCreateNestedOneWithoutRecipesInput
    moods?: MoodRecipeCreateNestedManyWithoutRecipeInput
    diets?: DietRecipeCreateNestedManyWithoutRecipeInput
    favorites?: FavoriteCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateWithoutOriginsInput = {
    id?: string
    userId: string
    title: string
    serve?: number | null
    description?: string | null
    instructions: string
    typeId: string
    imageUrl: string
    prepTime: number
    cookTime: number
    createAt?: Date | string
    ingredients?: RecipeIngredientUncheckedCreateNestedManyWithoutRecipeInput
    ustensils?: RecipeUstensilUncheckedCreateNestedManyWithoutRecipeInput
    moods?: MoodRecipeUncheckedCreateNestedManyWithoutRecipeInput
    diets?: DietRecipeUncheckedCreateNestedManyWithoutRecipeInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeCreateOrConnectWithoutOriginsInput = {
    where: RecipeWhereUniqueInput
    create: XOR<RecipeCreateWithoutOriginsInput, RecipeUncheckedCreateWithoutOriginsInput>
  }

  export type OriginCreateWithoutRecipesInput = {
    id?: string
    name: string
  }

  export type OriginUncheckedCreateWithoutRecipesInput = {
    id?: string
    name: string
  }

  export type OriginCreateOrConnectWithoutRecipesInput = {
    where: OriginWhereUniqueInput
    create: XOR<OriginCreateWithoutRecipesInput, OriginUncheckedCreateWithoutRecipesInput>
  }

  export type RecipeUpsertWithoutOriginsInput = {
    update: XOR<RecipeUpdateWithoutOriginsInput, RecipeUncheckedUpdateWithoutOriginsInput>
    create: XOR<RecipeCreateWithoutOriginsInput, RecipeUncheckedCreateWithoutOriginsInput>
    where?: RecipeWhereInput
  }

  export type RecipeUpdateToOneWithWhereWithoutOriginsInput = {
    where?: RecipeWhereInput
    data: XOR<RecipeUpdateWithoutOriginsInput, RecipeUncheckedUpdateWithoutOriginsInput>
  }

  export type RecipeUpdateWithoutOriginsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    serve?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    prepTime?: IntFieldUpdateOperationsInput | number
    cookTime?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRecipesNestedInput
    ingredients?: RecipeIngredientUpdateManyWithoutRecipeNestedInput
    ustensils?: RecipeUstensilUpdateManyWithoutRecipeNestedInput
    type?: TypeUpdateOneRequiredWithoutRecipesNestedInput
    moods?: MoodRecipeUpdateManyWithoutRecipeNestedInput
    diets?: DietRecipeUpdateManyWithoutRecipeNestedInput
    favorites?: FavoriteUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateWithoutOriginsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    serve?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: StringFieldUpdateOperationsInput | string
    typeId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    prepTime?: IntFieldUpdateOperationsInput | number
    cookTime?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredients?: RecipeIngredientUncheckedUpdateManyWithoutRecipeNestedInput
    ustensils?: RecipeUstensilUncheckedUpdateManyWithoutRecipeNestedInput
    moods?: MoodRecipeUncheckedUpdateManyWithoutRecipeNestedInput
    diets?: DietRecipeUncheckedUpdateManyWithoutRecipeNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type OriginUpsertWithoutRecipesInput = {
    update: XOR<OriginUpdateWithoutRecipesInput, OriginUncheckedUpdateWithoutRecipesInput>
    create: XOR<OriginCreateWithoutRecipesInput, OriginUncheckedCreateWithoutRecipesInput>
    where?: OriginWhereInput
  }

  export type OriginUpdateToOneWithWhereWithoutRecipesInput = {
    where?: OriginWhereInput
    data: XOR<OriginUpdateWithoutRecipesInput, OriginUncheckedUpdateWithoutRecipesInput>
  }

  export type OriginUpdateWithoutRecipesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type OriginUncheckedUpdateWithoutRecipesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutFavoritesInput = {
    id?: string
    name: string
    email: string
    password: string
    image?: string | null
    consent?: boolean
    createAt?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    recipes?: RecipeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFavoritesInput = {
    id?: string
    name: string
    email: string
    password: string
    image?: string | null
    consent?: boolean
    roleId: string
    createAt?: Date | string
    recipes?: RecipeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFavoritesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
  }

  export type RecipeCreateWithoutFavoritesInput = {
    id?: string
    title: string
    serve?: number | null
    description?: string | null
    instructions: string
    imageUrl: string
    prepTime: number
    cookTime: number
    createAt?: Date | string
    user: UserCreateNestedOneWithoutRecipesInput
    ingredients?: RecipeIngredientCreateNestedManyWithoutRecipeInput
    ustensils?: RecipeUstensilCreateNestedManyWithoutRecipeInput
    type: TypeCreateNestedOneWithoutRecipesInput
    moods?: MoodRecipeCreateNestedManyWithoutRecipeInput
    diets?: DietRecipeCreateNestedManyWithoutRecipeInput
    origins?: OriginRecipeCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateWithoutFavoritesInput = {
    id?: string
    userId: string
    title: string
    serve?: number | null
    description?: string | null
    instructions: string
    typeId: string
    imageUrl: string
    prepTime: number
    cookTime: number
    createAt?: Date | string
    ingredients?: RecipeIngredientUncheckedCreateNestedManyWithoutRecipeInput
    ustensils?: RecipeUstensilUncheckedCreateNestedManyWithoutRecipeInput
    moods?: MoodRecipeUncheckedCreateNestedManyWithoutRecipeInput
    diets?: DietRecipeUncheckedCreateNestedManyWithoutRecipeInput
    origins?: OriginRecipeUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeCreateOrConnectWithoutFavoritesInput = {
    where: RecipeWhereUniqueInput
    create: XOR<RecipeCreateWithoutFavoritesInput, RecipeUncheckedCreateWithoutFavoritesInput>
  }

  export type UserUpsertWithoutFavoritesInput = {
    update: XOR<UserUpdateWithoutFavoritesInput, UserUncheckedUpdateWithoutFavoritesInput>
    create: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFavoritesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFavoritesInput, UserUncheckedUpdateWithoutFavoritesInput>
  }

  export type UserUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    consent?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    recipes?: RecipeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    consent?: BoolFieldUpdateOperationsInput | boolean
    roleId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipes?: RecipeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RecipeUpsertWithoutFavoritesInput = {
    update: XOR<RecipeUpdateWithoutFavoritesInput, RecipeUncheckedUpdateWithoutFavoritesInput>
    create: XOR<RecipeCreateWithoutFavoritesInput, RecipeUncheckedCreateWithoutFavoritesInput>
    where?: RecipeWhereInput
  }

  export type RecipeUpdateToOneWithWhereWithoutFavoritesInput = {
    where?: RecipeWhereInput
    data: XOR<RecipeUpdateWithoutFavoritesInput, RecipeUncheckedUpdateWithoutFavoritesInput>
  }

  export type RecipeUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    serve?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    prepTime?: IntFieldUpdateOperationsInput | number
    cookTime?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRecipesNestedInput
    ingredients?: RecipeIngredientUpdateManyWithoutRecipeNestedInput
    ustensils?: RecipeUstensilUpdateManyWithoutRecipeNestedInput
    type?: TypeUpdateOneRequiredWithoutRecipesNestedInput
    moods?: MoodRecipeUpdateManyWithoutRecipeNestedInput
    diets?: DietRecipeUpdateManyWithoutRecipeNestedInput
    origins?: OriginRecipeUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    serve?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: StringFieldUpdateOperationsInput | string
    typeId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    prepTime?: IntFieldUpdateOperationsInput | number
    cookTime?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredients?: RecipeIngredientUncheckedUpdateManyWithoutRecipeNestedInput
    ustensils?: RecipeUstensilUncheckedUpdateManyWithoutRecipeNestedInput
    moods?: MoodRecipeUncheckedUpdateManyWithoutRecipeNestedInput
    diets?: DietRecipeUncheckedUpdateManyWithoutRecipeNestedInput
    origins?: OriginRecipeUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeCreateManyUserInput = {
    id?: string
    title: string
    serve?: number | null
    description?: string | null
    instructions: string
    typeId: string
    imageUrl: string
    prepTime: number
    cookTime: number
    createAt?: Date | string
  }

  export type FavoriteCreateManyUserInput = {
    id?: string
    recipeId: string
    createAt?: Date | string
  }

  export type RecipeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    serve?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    prepTime?: IntFieldUpdateOperationsInput | number
    cookTime?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredients?: RecipeIngredientUpdateManyWithoutRecipeNestedInput
    ustensils?: RecipeUstensilUpdateManyWithoutRecipeNestedInput
    type?: TypeUpdateOneRequiredWithoutRecipesNestedInput
    moods?: MoodRecipeUpdateManyWithoutRecipeNestedInput
    diets?: DietRecipeUpdateManyWithoutRecipeNestedInput
    origins?: OriginRecipeUpdateManyWithoutRecipeNestedInput
    favorites?: FavoriteUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    serve?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: StringFieldUpdateOperationsInput | string
    typeId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    prepTime?: IntFieldUpdateOperationsInput | number
    cookTime?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredients?: RecipeIngredientUncheckedUpdateManyWithoutRecipeNestedInput
    ustensils?: RecipeUstensilUncheckedUpdateManyWithoutRecipeNestedInput
    moods?: MoodRecipeUncheckedUpdateManyWithoutRecipeNestedInput
    diets?: DietRecipeUncheckedUpdateManyWithoutRecipeNestedInput
    origins?: OriginRecipeUncheckedUpdateManyWithoutRecipeNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    serve?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: StringFieldUpdateOperationsInput | string
    typeId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    prepTime?: IntFieldUpdateOperationsInput | number
    cookTime?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipe?: RecipeUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type FavoriteUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipeId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipeId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyRoleInput = {
    id?: string
    name: string
    email: string
    password: string
    image?: string | null
    consent?: boolean
    createAt?: Date | string
  }

  export type UserUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    consent?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipes?: RecipeUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    consent?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipes?: RecipeUncheckedUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    consent?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecipeIngredientCreateManyRecipeInput = {
    id?: string
    ingredientId: string
    quantity: string
  }

  export type RecipeUstensilCreateManyRecipeInput = {
    id?: string
    ustensilId: string
  }

  export type MoodRecipeCreateManyRecipeInput = {
    id?: string
    moodId: string
  }

  export type DietRecipeCreateManyRecipeInput = {
    id?: string
    dietId: string
  }

  export type OriginRecipeCreateManyRecipeInput = {
    id?: string
    originId: string
  }

  export type FavoriteCreateManyRecipeInput = {
    id?: string
    userId: string
    createAt?: Date | string
  }

  export type RecipeIngredientUpdateWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: StringFieldUpdateOperationsInput | string
    ingredient?: IngredientUpdateOneRequiredWithoutRecipesNestedInput
  }

  export type RecipeIngredientUncheckedUpdateWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    ingredientId?: StringFieldUpdateOperationsInput | string
    quantity?: StringFieldUpdateOperationsInput | string
  }

  export type RecipeIngredientUncheckedUpdateManyWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    ingredientId?: StringFieldUpdateOperationsInput | string
    quantity?: StringFieldUpdateOperationsInput | string
  }

  export type RecipeUstensilUpdateWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    ustensil?: UstensilUpdateOneRequiredWithoutRecipesNestedInput
  }

  export type RecipeUstensilUncheckedUpdateWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    ustensilId?: StringFieldUpdateOperationsInput | string
  }

  export type RecipeUstensilUncheckedUpdateManyWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    ustensilId?: StringFieldUpdateOperationsInput | string
  }

  export type MoodRecipeUpdateWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    mood?: MoodUpdateOneRequiredWithoutRecipesNestedInput
  }

  export type MoodRecipeUncheckedUpdateWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    moodId?: StringFieldUpdateOperationsInput | string
  }

  export type MoodRecipeUncheckedUpdateManyWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    moodId?: StringFieldUpdateOperationsInput | string
  }

  export type DietRecipeUpdateWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    diet?: DietUpdateOneRequiredWithoutRecipesNestedInput
  }

  export type DietRecipeUncheckedUpdateWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    dietId?: StringFieldUpdateOperationsInput | string
  }

  export type DietRecipeUncheckedUpdateManyWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    dietId?: StringFieldUpdateOperationsInput | string
  }

  export type OriginRecipeUpdateWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    origin?: OriginUpdateOneRequiredWithoutRecipesNestedInput
  }

  export type OriginRecipeUncheckedUpdateWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    originId?: StringFieldUpdateOperationsInput | string
  }

  export type OriginRecipeUncheckedUpdateManyWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    originId?: StringFieldUpdateOperationsInput | string
  }

  export type FavoriteUpdateWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type FavoriteUncheckedUpdateWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUncheckedUpdateManyWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecipeCreateManyTypeInput = {
    id?: string
    userId: string
    title: string
    serve?: number | null
    description?: string | null
    instructions: string
    imageUrl: string
    prepTime: number
    cookTime: number
    createAt?: Date | string
  }

  export type RecipeUpdateWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    serve?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    prepTime?: IntFieldUpdateOperationsInput | number
    cookTime?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRecipesNestedInput
    ingredients?: RecipeIngredientUpdateManyWithoutRecipeNestedInput
    ustensils?: RecipeUstensilUpdateManyWithoutRecipeNestedInput
    moods?: MoodRecipeUpdateManyWithoutRecipeNestedInput
    diets?: DietRecipeUpdateManyWithoutRecipeNestedInput
    origins?: OriginRecipeUpdateManyWithoutRecipeNestedInput
    favorites?: FavoriteUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    serve?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    prepTime?: IntFieldUpdateOperationsInput | number
    cookTime?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredients?: RecipeIngredientUncheckedUpdateManyWithoutRecipeNestedInput
    ustensils?: RecipeUstensilUncheckedUpdateManyWithoutRecipeNestedInput
    moods?: MoodRecipeUncheckedUpdateManyWithoutRecipeNestedInput
    diets?: DietRecipeUncheckedUpdateManyWithoutRecipeNestedInput
    origins?: OriginRecipeUncheckedUpdateManyWithoutRecipeNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateManyWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    serve?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    prepTime?: IntFieldUpdateOperationsInput | number
    cookTime?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecipeIngredientCreateManyIngredientInput = {
    id?: string
    recipeId: string
    quantity: string
  }

  export type RecipeIngredientUpdateWithoutIngredientInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: StringFieldUpdateOperationsInput | string
    recipe?: RecipeUpdateOneRequiredWithoutIngredientsNestedInput
  }

  export type RecipeIngredientUncheckedUpdateWithoutIngredientInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipeId?: StringFieldUpdateOperationsInput | string
    quantity?: StringFieldUpdateOperationsInput | string
  }

  export type RecipeIngredientUncheckedUpdateManyWithoutIngredientInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipeId?: StringFieldUpdateOperationsInput | string
    quantity?: StringFieldUpdateOperationsInput | string
  }

  export type RecipeUstensilCreateManyUstensilInput = {
    id?: string
    recipeId: string
  }

  export type RecipeUstensilUpdateWithoutUstensilInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipe?: RecipeUpdateOneRequiredWithoutUstensilsNestedInput
  }

  export type RecipeUstensilUncheckedUpdateWithoutUstensilInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipeId?: StringFieldUpdateOperationsInput | string
  }

  export type RecipeUstensilUncheckedUpdateManyWithoutUstensilInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipeId?: StringFieldUpdateOperationsInput | string
  }

  export type MoodRecipeCreateManyMoodInput = {
    id?: string
    recipeId: string
  }

  export type MoodRecipeUpdateWithoutMoodInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipe?: RecipeUpdateOneRequiredWithoutMoodsNestedInput
  }

  export type MoodRecipeUncheckedUpdateWithoutMoodInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipeId?: StringFieldUpdateOperationsInput | string
  }

  export type MoodRecipeUncheckedUpdateManyWithoutMoodInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipeId?: StringFieldUpdateOperationsInput | string
  }

  export type DietRecipeCreateManyDietInput = {
    id?: string
    recipeId: string
  }

  export type DietRecipeUpdateWithoutDietInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipe?: RecipeUpdateOneRequiredWithoutDietsNestedInput
  }

  export type DietRecipeUncheckedUpdateWithoutDietInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipeId?: StringFieldUpdateOperationsInput | string
  }

  export type DietRecipeUncheckedUpdateManyWithoutDietInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipeId?: StringFieldUpdateOperationsInput | string
  }

  export type OriginRecipeCreateManyOriginInput = {
    id?: string
    recipeId: string
  }

  export type OriginRecipeUpdateWithoutOriginInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipe?: RecipeUpdateOneRequiredWithoutOriginsNestedInput
  }

  export type OriginRecipeUncheckedUpdateWithoutOriginInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipeId?: StringFieldUpdateOperationsInput | string
  }

  export type OriginRecipeUncheckedUpdateManyWithoutOriginInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipeId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}