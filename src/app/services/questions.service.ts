import { Injectable } from '@angular/core';
import { Question } from '../Models/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  questions: Array<Question>;

  constructor() {
    this.questions = [new Question('Onko tänään hyvä päivä?'), new Question('Oliko minkälainen asiakaspalvelukokemuksenne?'),
       new Question('Oliko viimeisin lukemasi kirja minkälainen?'), new Question('Oliko illalla hyvä elokuva?')]
  }

  getQuestions() {
    return this.questions;
  }
}
