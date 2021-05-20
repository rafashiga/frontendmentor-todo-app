import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SharedModule } from '@/shared/shared.module';

@NgModule({
  declarations: [TodoComponent],
  imports: [CommonModule, SharedModule, DragDropModule],
})
export class TodoModule {}
