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
  feedback: any; // variable type is any (because this calls the method getQuestions() in the question service, which returns an array of objects)
  constructor(private questions: QuestionsService) { // initialize service in the constructor
    this.feedback = this.questions.getQuestions(); // feedback contains all the objects that are created in the service
  }
  onInputChange(event: any, sliderPart:Question) { // question itself has to be transported as a parameter, because .this cannot be done
    sliderPart.setFeedBack(event.target.value); // event.target.value of the slider is in string format, even if it is a number
  }
}
