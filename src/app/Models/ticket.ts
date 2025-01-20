export class Ticket {

    basicTicketAmount: number;
    studentTicketAmount: number;
    retiredTicketAmount: number;
    private readonly basicTicketPrice: number;
    private readonly studentTicketPrice: number;
    private readonly retiredTicketPrice: number;
    ticketAmount: number;
    MTKflag: boolean;
    totalSum: number; // amount of tickets * price
    firstName: string;
    lastName: string;
    email: string;

    constructor() {
        this.basicTicketAmount = 0;
        this.studentTicketAmount = 0;
        this.retiredTicketAmount = 0;
        this.basicTicketPrice = 15.00;
        this.studentTicketPrice = 10.00;
        this.retiredTicketPrice = 8.00;
        this.MTKflag = false;
        this.totalSum = 0.00;
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.ticketAmount = 0;
      }

    minusFromBasicTicketAmount() {
        if (this.basicTicketAmount > 0) {
          this.basicTicketAmount -= 1;
        }
      }
    addToBasicTicketAmount() {
        if (this.basicTicketAmount < 20) {
          this.basicTicketAmount += 1
        }
    }
    addToStudentTicketAmount() {
        if (this.studentTicketAmount < 20) {
          this.studentTicketAmount += 1
        }
    }
    minusFromStudentTicketAmount() {
        if (this.studentTicketAmount > 0) {
          this.studentTicketAmount -= 1;
        }
      }
    addToRetiredTicketAmount() {
        if (this.retiredTicketAmount < 20) {
          this.retiredTicketAmount += 1
        }
    }
    minusFromRetiredTicketAmount() {
        if (this.retiredTicketAmount > 0) {
          this.retiredTicketAmount -= 1;
        }
      }
    countSum() {
      let result: number;
      let basicTickets: number;
      let studentTickets: number;
      let retiredTickets: number;
      basicTickets = this.basicTicketAmount * this.basicTicketPrice;
      studentTickets = this.studentTicketAmount * this.studentTicketPrice;
      retiredTickets = this.retiredTicketAmount * this.retiredTicketPrice;
      result = (basicTickets + studentTickets + retiredTickets);
      if (this.MTKflag === true) {
        result = result * 0.85;
        return result;
      }
      else {
        result = result;
        return result;
      }

    }
    flipMTKBoolean() {
      if (this.MTKflag == true) {
        this.MTKflag = false;
      }
      else {
        this.MTKflag = true;
      }
      }
    }