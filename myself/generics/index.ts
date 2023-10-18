// interface Animal {
//   name: string;
// }

// interface Human {
//   firstName: string;
//   lastName: string;
// }
// export const getDisplayName = (
//   item: Animal | Human
// ): { displayName: string } => {
//   return {
//     displayName: item.name,
//   };
// };

/// ANSWER
interface Animal {
  name: string;
}

interface Human {
  firstName: string;
  lastName: string;
}

type DisplayName = { animalName: string } | { humanName: string };

export const getDisplayName = (item: Animal | Human): DisplayName => {
  if ("name" in item) {
    return { animalName: item.name };
  }

  return { humanName: `${item.firstName} ${item.lastName}` };
};

const result = getDisplayName({ name: "Lion" });
console.log(result); // { animalName: 'Lion' }

const result2 = getDisplayName({ firstName: "John", lastName: "Doe" });
console.log(result2); // { humanName: 'John Doe' }

// -------------------------------------------------------------------------------------
