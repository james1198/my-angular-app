import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
@Component({
selector: 'app-input-form',
standalone: true,
imports: [ReactiveFormsModule],
templateUrl: './input-form.html'
})
export class InputFormComponent {}