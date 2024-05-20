import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { Championnat } from './championnat';
import { CHAMPIONNATS } from './mock-championnats';

@Injectable({
  providedIn: 'root'
})
export class ChampionnatService {

  constructor(
    private messageService: MessageService) { 
  }

  getChampionnats(): Championnat[] {
    this.log('fetched championnats');
    return CHAMPIONNATS;
  }

  /** 
   * Log a message with the MessageService
   */
  private log(message: string) {
    this.messageService.add(`ChampionnatService: ${message}`);
  }
}
