import { Routes } from '@angular/router';
import { HomePage } from '../pages/home/home.components';
import { AboutPage } from '../pages/about/about';
import { AdminPage } from '../pages/admin/admin';
import { InputFormComponent } from '../components/input-form/input-form';

export const routes: Routes = [
    {
        path: '',
        component: HomePage
    },
    { 
        path: 'about',
        component: AboutPage
    },
    {
        path: 'admin',
        component: AdminPage
    },
    {
        path: 'login',
        component: InputFormComponent
    }
];