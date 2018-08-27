import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'conversor' })
export class ConversorPipe implements PipeTransform {
    transform(value_a, value_b){
        let a = parseInt(value_a);
        let b = parseInt(value_b);

        let result = "Result: " + (a*b);

        return result;
    }
}