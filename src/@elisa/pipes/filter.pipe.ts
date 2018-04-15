import { Pipe, PipeTransform } from '@angular/core';
import { ElisaUtils } from '@elisa/utils';

@Pipe({name: 'filter'})
export class FilterPipe implements PipeTransform
{
    transform(mainArr: any[], searchText: string, property: string): any
    {
        return ElisaUtils.filterArrayByString(mainArr, searchText);
    }
}
