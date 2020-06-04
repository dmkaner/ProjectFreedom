import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShellComponent } from './shell/shell.component';
import { RouterModule } from '@angular/router';

const components = [ShellComponent];

const modules = [CommonModule, RouterModule];


@NgModule({
  declarations: [...components],
  imports: [
    ...modules
  ],
  exports: [
    ...components,
    ...modules,
  ]
})
export class SharedModule { }
