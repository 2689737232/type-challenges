const tuple = ["tesla", "model 3", "model X", "model Y"] as const;
// 等同于
// const tuple: readonly string[] = ["tesla", "model 3", "model X", "model Y"]

type TupleToObject<T extends readonly any[]> = {
  [key in T[number]]: key;
};

type result = TupleToObject<typeof tuple>; // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}

let a: result = {
  tesla: "tesla",
  "model 3": "model 3",
  "model X": "model X",
  "model Y": "model Y",
};
