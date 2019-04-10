import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  objects = [
    {id: 1, name: 'optie 1'},
    {id: 2, name: 'optie 2'},
    {id: 3, name: 'optie 3'},
  ]


  form = new FormGroup({
    name : new FormControl(2)
  })
}

export interface testobject{
  id: number;
  name: string;
}
