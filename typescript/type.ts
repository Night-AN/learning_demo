function printId(id:number|string){
    if(typeof id === "string"){
        console.log(id.toUpperCase());
    }else{
        console.log(id);
    }
}

interface Shape {
    kind: "circle" | "square";
    radius?: number;
    sideLength?: number;
}

function getArea(shape: Shape) {
    if (shape.kind === "circle") {
      return Math.PI * shape.radius! ** 2;
    }
}