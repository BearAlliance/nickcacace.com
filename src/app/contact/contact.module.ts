import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { ContactFormComponent } from '../contact-form/contact-form.component';

@NgModule({
  imports: [CommonModule, ContactRoutingModule],
  declarations: [ContactComponent, ContactFormComponent],
})
export class ContactModule {}
