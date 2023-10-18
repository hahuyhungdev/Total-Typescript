// origin
// export type Letters = "a" | "b" | "c";

// type RemoveC<TType> = any;

// type WowWithoutC = RemoveC<Letters>;

export type Letters = "a" | "b" | "c";

type RemoveC<TType> = TType extends "c" ? never : TType;
// or
type RemoveCAndAddD<TType> = TType extends "c" ? "d" : TType;

type WowWithoutC = RemoveC<Letters>;
type WowWithoutCAndAddD = RemoveCAndAddD<Letters>;
