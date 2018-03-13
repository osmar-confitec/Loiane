import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ElementDef } from '@angular/core/src/view';

@Component({
  selector: 'curso-loiane-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent implements OnInit {

  constructor() { }

  @ViewChild('inputBtn') btnImput :ElementRef;

  ngOnInit() {



  }

  verificar(){
    console.log(this.btnImput.nativeElement.value);
    
  }

}
