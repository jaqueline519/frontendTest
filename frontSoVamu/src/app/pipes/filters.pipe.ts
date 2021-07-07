import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filters'
})
export class FiltersPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const result = []
    for(const user of value) {
      if(user.nome.toLowerCase().indexOf(arg.toLowerCase())> -1){
        result.push(user)
      }
    }
    return result
  }
 
}
