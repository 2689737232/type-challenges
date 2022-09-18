//www.typescriptlang.org/docs/handbook/2/types-from-types.html
// 索引访问类型
https: const MyArray = [
  { name: "Alice", age: 15 },
  { name: false, sex: "male" },
  { name: "Eve", height: "170cm" },
];
type Person = typeof MyArray[number];
type Person2 = typeof MyArray[number]["name"]; // string | boolean

// 条件类型
interface Animal {
  live(): void;
}
interface Dog {
  woof(): void;
  age: number;
}
type AnimalReturnType<T> = T extends Dog ? number : void;
type a = AnimalReturnType<Dog>; // number

// 映射类型
type Goods = {
  readonly id: string;
  name: string;
  price: number;
};

type Changeable<T extends Object> = {
  -readonly [key in keyof T]: T[key];
};
type ChangeableGoods = Changeable<Goods>;
const computer: ChangeableGoods = {
  id: "sag14j2gas0q52n36",
  name: "computer",
  price: 10000,
};
computer.id = "change";
// ----
type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property];
};
type MaybeUser = {
  id: string;
  name?: string;
  age?: number;
};
type User = Concrete<MaybeUser>;

// 模板字面类型
type Getters<Type> = {
  [Property in keyof Type as `get${Capitalize<
    string & Property
  >}`]: () => Type[Property];
};
interface Person3 {
  name: string;
  age: number;
  location: string;
}
type LazyPerson = Getters<Person3>;

// 使用模板字面类型修改 Concrete， 排除 name
type Concrete2<T extends User> = {
  // [key in keyof T as Exclude<key, "name">]: T[key];
  [Property in keyof T as Exclude<Property, "name">]: T[Property];
};
type User2 = Concrete2<User>;
