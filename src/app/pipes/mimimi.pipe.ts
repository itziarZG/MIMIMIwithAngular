import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mimimi',
})
export class MimimiPipe implements PipeTransform {
  transform(mess: string): string {
    const newmess: string = mess.replace(/[aeiou]/gi, 'i');
    return newmess;
  }
}
