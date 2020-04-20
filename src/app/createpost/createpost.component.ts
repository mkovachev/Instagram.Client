import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})
export class CreatepostComponent {
  itemForm: FormGroup;

  constructor(private fb: FormBuilder, private itemService: ItemService) {
    this.itemForm = this.fb.group({
      imageUrl: ['', Validators.required],
      description: ['']
    });
  }

  create() {
    this.itemService.create(this.itemForm.value).subscribe(res =>
      console.log(res));
  }

  get imageUrl() {
    return this.itemForm.get('imageUrl');
  }

  get description() {
    return this.itemForm.get('description');
  }
}
