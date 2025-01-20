import { Component } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { Question } from '../Models/question';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { QuestionsService } from '../services/questions.service';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [ MatSliderModule, CommonModule, NgFor, MatCardModule ],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})

export class FeedbackComponent {
  feedback: any; // alustetaan muuttuja tyypillä any (koska tämä kutsuu question-servicen metodia getQuestions(), joka palauttaa arrayn olioita)
  constructor(private questions: QuestionsService) { // constructorissa otetaan service käyttöön
    this.feedback = this.questions.getQuestions(); // muuttujaan feedback tallennetaan servicessä luodut oliot, joiden luokkamuuttujat (kysymys ja sliderin arvot) ovat täten käytössä
  }
  onInputChange(event: any, sliderPart:Question) { // itse question on välitettävä parametrina, ei voi tehdä .this-viittausta
    sliderPart.setFeedBack(event.target.value); // sliderin event.target.value on string-muodossa, vaikka se on numero
  }
}
