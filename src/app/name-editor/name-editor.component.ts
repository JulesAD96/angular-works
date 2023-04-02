import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent {

  name = new FormControl('')
  email = new FormControl('')

  updateName() {
    this.name.setValue("Nancy")
    this.email.setValue("adonsijules@gmail.com")
  }


}
