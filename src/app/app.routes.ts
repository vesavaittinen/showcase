import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { RegistrationformComponent } from './registrationform/registrationform.component';
import { ReactiveregistrationformComponent } from './reactiveregistrationform/reactiveregistrationform.component';
import { FinnkinoComponent } from './finnkino/finnkino.component';
import { AgrishowComponent } from './agrishow/agrishow.component';

export const routes: Routes = [
    { path: '', redirectTo: 'hello', pathMatch: 'full'}, // set default page
    { path: 'calculator', component: CalculatorComponent },
    { path: 'feedback', component: FeedbackComponent },
    { path: 'registrationform', component: RegistrationformComponent },
    { path: 'reactiveregistrationform', component: ReactiveregistrationformComponent },
    { path: 'finnkino', component: FinnkinoComponent },
    { path: 'agri', component: AgrishowComponent },
    { path: 'hello', component: HelloWorldComponent },
    { path: '**', component: PageNotFoundComponent }
];
