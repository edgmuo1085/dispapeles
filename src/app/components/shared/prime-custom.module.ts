import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@NgModule({
  declarations: [],
  imports: [CommonModule, TableModule, TooltipModule, DropdownModule, ToastModule, ConfirmDialogModule],
  exports: [TableModule, TooltipModule, DropdownModule, ToastModule, ConfirmDialogModule],
})
export class PrimeCustomModule {}
