export {};

type DebugType = () => void;
type SomeTypes = string | number | DebugType

type ExcludeTypes = Exclude<SomeTypes, DebugType>;
type ExtractTypes = Extract<SomeTypes, Function>;

type NullableTypes = string | null
type NonNullableTypes = NonNullable<NullableTypes>;

type MyExclude<T, U> = T extends string | number ? T : never;
type MyExcluedeTypes = MyExclude<SomeTypes, DebugType>;
