import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EnquiryFormComponent } from './enquiry-form/enquiry-form.component';
import { CourseUXUIComponent } from './course-uxui/course-uxui.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'enquery-form', component: EnquiryFormComponent },
  { path: 'UX-UI-Designing', component: CourseUXUIComponent }
];

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    EnquiryFormComponent,
    CourseUXUIComponent,
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
