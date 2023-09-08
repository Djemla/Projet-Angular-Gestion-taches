import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statut'
})
export class StatutPipe implements PipeTransform {

  transform(value: Date): string {
    
    let v1=new Date(value).toLocaleDateString();
    let v2= new Date().toLocaleDateString()
    
      if(v1<v2){
          return 'fini'
      }else{
          return 'en cours'
      }
    }
  }


