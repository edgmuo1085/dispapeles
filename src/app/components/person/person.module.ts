import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonRoutingModule } from './person-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeCustomModule } from '../shared/prime-custom.module';
import { ListPersonComponent } from './pages/list-person/list-person.component';
import { CreatePersonComponent } from './pages/create-person/create-person.component';

@NgModule({
  declarations: [
    ListPersonComponent,
    CreatePersonComponent
  ],
  imports: [CommonModule, PersonRoutingModule, FormsModule, ReactiveFormsModule, PrimeCustomModule],
})
export class PersonModule {}
