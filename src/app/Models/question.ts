export class Question {
    question: string = '';
    sliderValues: Array<string> = ['No value', 'Bad', 'Ok', 'Good'];
    sliderText: string = this.sliderValues[0];
    setFeedBack(value: any) {
           switch(value) {
            case '0':
                this.sliderText = this.sliderValues[0];
                return this.sliderText;
            case '1':
                this.sliderText = this.sliderValues[1];
                return this.sliderText;
            case '2':
                this.sliderText = this.sliderValues[2];
                return this.sliderText;
            case '3':
                this.sliderText = this.sliderValues[3];
                return this.sliderText;
            default:
                this.sliderText = this.sliderValues[0];
                return this.sliderText;
           }
        }
    constructor(question: string) {
        this.question = question;
    }
}
