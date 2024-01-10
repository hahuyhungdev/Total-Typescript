// Access deeper parts of objects and arrays
interface UserRoleConfig {
  user: ["view1", "create", "update"];
  superAdmin: ["view", "create", "update", "delete", "test"];
}

type Role = UserRoleConfig[keyof UserRoleConfig][number];
// --------------------------------------------------------------------
// Use infer in combination with string literals to manipulate keys of objects(watched)

interface ApiData {
  "maps:longitude": string;
  "maps:latitude": string;
  awesome: boolean;
}
// option 1
// type RemoveMaps<T> = T extends `maps:${string}` ? "hung" : T;
// option 2
type RemoveMaps<T> = T extends `maps:${infer U}` ? "hung" : T;
type TRemoveMapsFromObject<T> = {
  [K in keyof T as RemoveMaps<K>]: T[K];
};
type resultRemoveMaps = TRemoveMapsFromObject<ApiData>;
type Post = {
  title: string;
  content: string;
};
