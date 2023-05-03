import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.scss']
})
export class FormExampleComponent {
  myForm: FormGroup;
  selectedOption: string;
  myOptions: any[] = [
    {
      displayText: "Option 1",
      value: "Value 1",
      icon: "home"
    },
    {
      displayText: "Option 2",
      value: "Value 2",
      icon: "home"
    },
    {
      displayText: "Option 3",
      value: "Value 3"
    }
  ];

  constructor() {
    this.myForm = new FormGroup({
      mySelect: new FormControl('')
    });
  }
  onSubmit() {
    console.log(this.myForm.value.mySelect);
  }
}
