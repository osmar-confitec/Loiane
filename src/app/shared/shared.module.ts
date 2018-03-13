import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnderecosComponent } from './enderecos/enderecos.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EnderecosComponent],
  exports:[EnderecosComponent]
})
export class SharedModule { }
