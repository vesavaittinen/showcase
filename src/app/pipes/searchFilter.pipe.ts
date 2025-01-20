import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
  standalone: true
})
export class SearchFilter implements PipeTransform {

  transform(value: any[], searchText: string): any[] {
    if (!value) {
      return [];
    }
    if (!searchText) {
      return value;
    }
    console.log(value[0]);
    searchText = searchText.toLocaleLowerCase();

    return value.filter(it => {
      return it.HTMLLead.toLocaleLowerCase().includes(searchText);
    })
  }
}