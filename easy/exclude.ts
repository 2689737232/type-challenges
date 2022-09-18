type MyExclude = {};
type Result = MyExclude<"a" | "b" | "c", "a">; // 'b' | 'c'

interface CallOrConstruct {
  new (s: string): Date;
  (n?: number): number;
}

const a: CallOrConstruct = () => {};
