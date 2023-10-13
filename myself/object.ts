const shapes = {
  circle: {
    shapes: ["x", "y", "z"],
  },
  square: ["a", "b", "z"],
} as const;

type Shape = keyof typeof shapes;

// const resolveShapes = (shapes: TResolveShapes) => {
//   return {};
// };
const resolveShapes = <T extends Shape>(shape: T): (typeof shapes)[Shape] => {
  return {} as any;
};
const result = resolveShapes("square");

type TResolveShapes = (typeof shapes)[keyof typeof shapes];
// ----------------------------------------------
const shapesValue = {
  hung: "hung",
  circle: "circldadse1",
  square: "square1sad",
};
const pickKeyObject = <TObj extends object, TOmitted extends keyof TObj>(
  object: TObj,
  pickKeys: TOmitted[]
) => {
  for (let key of pickKeys) {
    delete object[key];
  }
  return object as Omit<TObj, TOmitted>;
};
const resultPick = pickKeyObject(shapesValue, ["circle", "hung"]);
type TUnknow = {};
const test = (data: TUnknow) => {
  if ("test" in data && typeof data.test === "string") {
    console.log(data.test);
  }
};
