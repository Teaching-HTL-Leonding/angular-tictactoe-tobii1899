import { Routes } from '@angular/router';
import { TicTacToeFieldComponent } from './tic-tac-toe-field/tic-tac-toe-field.component';

export const routes: Routes = [
  { path: 'tic-tac-toe-field', component: TicTacToeFieldComponent },
  { path: '', redirectTo: '/tic-tac-toe-field', pathMatch: 'full' },
];
