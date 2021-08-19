import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DemoExComponent } from './demo-ex.component';
import { FindStringComponent } from './find-string/find-string.component';


@NgModule({
  declarations: [
    DemoExComponent,
    FindStringComponent
  ],
  imports: [
    FormsModule
  ],
  exports: [
    DemoExComponent,
    FindStringComponent
  ]
})
export class DemoExModule { }
