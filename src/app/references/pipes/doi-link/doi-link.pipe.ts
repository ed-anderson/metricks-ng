import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doiLink',
})
export class DoiLinkPipe implements PipeTransform {
  transform(value: string): string {
    return `https://dx.doi.org/${value}`;
  }
}
