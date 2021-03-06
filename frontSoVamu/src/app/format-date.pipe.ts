import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(value: any, lacale: 'pt-BR' ): any {
    if(value.lengh<10) {
      return value
    }
   let dateArray = value.split('-')
   if(dateArray.length!=3){
     return value
   }
   let date = new Date(dateArray[0], dateArray[1]-1, dateArray[2])
    return Intl.DateTimeFormat('pt-BR').format(date)
  }

}
