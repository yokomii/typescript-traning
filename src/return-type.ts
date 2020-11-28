export {};

function sumText(a:number, b:number) {
 return (a + b).toString()
}

type SumTextReturnType = ReturnType<typeof sumText>;
