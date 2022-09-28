import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeID } from 'src/app/components/models/type-id.interface';
import { PersonService } from '../../person.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.scss'],
})
export class CreatePersonComponent implements OnInit {
  createPersonForm!: FormGroup;
  listTypeID: TypeID[] = [];
  loading: boolean = false;
  idPerson: string = '';
  showModify: boolean = false;

  constructor(
    private fb: FormBuilder,
    private personService: PersonService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService
  ) {
    this.idPerson = this.route.snapshot.params['id'];

    if (this.idPerson) {
      this.showModify = true;
      this.getPersonOne();
    }

    this.getTypeId();
  }

  ngOnInit(): void {
    this.createPersonForm = this.fb.group({
      nombre: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      tipoId: ['', [Validators.required]],
      identificacion: ['', [Validators.required]],
      edad: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      origen: [''],
      id: [''],
    });
  }

  getTypeId() {
    this.personService.getTypeIdentification().subscribe({
      next: response => {
        this.listTypeID = response;
      },
      error: err => {
        console.error(err);
      },
    });
  }

  createPerson() {
    this.loading = true;
    if (this.createPersonForm.invalid) {
      return;
    }

    this.personService.createPerson(this.createPersonForm.value).subscribe({
      next: response => {
        this.messageService.add({ severity: 'success', summary: 'OK!', detail: 'Persona agregada con éxito!' });
        this.router.navigate(['/personas/lista']);
      },
      error: err => {
        console.error(err);
      },
      complete: () => {
        this.loading = false;
      },
    });
  }

  getPersonOne() {
    this.personService.getOne(this.idPerson).subscribe({
      next: response => {
        this.createPersonForm.patchValue({
          nombre: response.nombre,
          apellidos: response.apellidos,
          tipoId: response.tipoId,
          identificacion: response.identificacion,
          edad: response.edad,
          telefono: response.telefono,
          direccion: response.direccion,
          id: response.id,
        });
      },
      error: err => {
        console.error(err);
      },
    });
  }

  modifyPerson() {
    this.loading = true;
    if (this.createPersonForm.invalid) {
      return;
    }

    this.personService.updatePerson(this.idPerson, this.createPersonForm.value).subscribe({
      next: response => {
        this.messageService.add({ severity: 'success', summary: 'OK!', detail: 'Persona actualizada con éxito!' });
        this.router.navigate(['/personas/lista']);
      },
      error: err => {
        console.error(err);
      },
      complete: () => {
        this.loading = false;
      },
    });
  }
}
