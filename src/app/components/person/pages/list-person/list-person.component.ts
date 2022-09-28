import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Person } from 'src/app/components/models/person.interface';
import { PersonService } from '../../person.service';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.scss'],
})
export class ListPersonComponent implements OnInit {
  listaPersonas: Person[] = [];
  selectedListaPersonas: Person[] = [];
  loading: boolean = false;
  showLoadingDelete: boolean = false;

  @ViewChild('tablePerson') tablePerson!: Table;

  constructor(
    private personService: PersonService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllPersons();
  }

  getAllPersons() {
    this.loading = true;
    this.listaPersonas = [];
    this.personService.getAll().subscribe({
      next: response => {
        this.listaPersonas = response;
      },
      error: err => {
        console.error(err);
      },
      complete: () => {
        this.loading = false;
      },
    });
  }

  onSubmitDeletePerson(persona: Person) {
    this.confirmationService.confirm({
      message: `Esta seguro de borrar a '${persona.nombre} ${persona.apellidos}'?`,
      key: 'deletePerson',
      header: 'Borrar persona',
      accept: () => {
        this.deletePerson(persona.id);
      },
    });
  }

  deletePerson(idPerson: string) {
    this.showLoadingDelete = true;
    this.personService.deletePerson(idPerson).subscribe({
      next: response => {
        this.messageService.add({ severity: 'success', summary: 'OK!', detail: 'Persona eliminada con éxito!' });
        this.getAllPersons();
      },
      error: err => {
        console.error(err);
      },
      complete: () => {
        this.showLoadingDelete = false;
      },
    });
  }

  onSubmitUpdatePerson(id: string) {
    this.router.navigate(['/personas/modificar/' + id]);
  }
}
