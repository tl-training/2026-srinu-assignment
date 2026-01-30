 export enum Operator {
    ADD="add",
    MULTIPLY="multiply"
  }
  export default function createCalc(op: Operator) {
   if (!(op === Operator.ADD || op === Operator.MULTIPLY)) {
      throw new Error("Invalid operation");
   }

   
    return {
      op,
      execute(a: number, b:number):number {
        if(op === Operator.ADD) {
          return a+b;
        }else if(op === Operator.MULTIPLY){
          return a*b;
        }
        return 0; 
      },
    };
  }