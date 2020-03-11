import { Injectable } from '@angular/core';
import { getLocaleCurrencyCode } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor() { } 
  
   getLocale() {
    return 'pt-BR'
  }
}
