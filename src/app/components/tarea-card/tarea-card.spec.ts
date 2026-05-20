import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaCard } from './tarea-card';

import {Component, Input, EventEmitter, Output} from '@angular/core';
//import {TareaDto} from './models/tarea.model.ts';
import { FormsModule } from '@angular/forms';

@Component({
  selector:'app-tarea-card',
  standalone: true,
  imports:[],
  templateUrl:'./tarea-card.html',
  styleUrl:'./tarea-card.css'
})

@Component({
  selector:'app-login',
  standalone:true,
  imports:[FormsModule],
  templateUrl:'./login.component.html'
})

export class LoginComponent {
  email: string='';
  password: string='';
}
/*
async OnSubmit(): Promise<void>{
  console.console.log(`Login:${this.email}`);

}*/
describe('TareaCard', () => {
  let component: TareaCard;
  let fixture: ComponentFixture<TareaCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TareaCard],
    }).compileComponents();

    fixture = TestBed.createComponent(TareaCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
