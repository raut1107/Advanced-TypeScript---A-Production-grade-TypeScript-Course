
type UserList = [
  { username: "user1"; role: "user" },
  { username: "user2"; role: "admin" }
];

type MapRoles<List extends unknown[]> = List extends [
  infer First,
  ...infer Rest
]
  ? [ExtractRole<First>, ...MapRoles<Rest>]
  : [];

type ExtractRole<Obj> = Obj extends { role: infer R } ? R : "no-role";

type test1 = MapRoles<UserList>;
