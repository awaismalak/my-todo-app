import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { SharedService } from './shared/shared.service';
import { EditTaskComponent } from './common/components/dialogs/edit-task/edit-task.component';
import { MatListModule } from '@angular/material/list';
import { PickerModule } from '@ctrl/ngx-emoji-mart';

@NgModule({
  declarations: [AppComponent, EditTaskComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatListModule,
    PickerModule,
  ],
  providers: [SharedService],
  entryComponents: [EditTaskComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
