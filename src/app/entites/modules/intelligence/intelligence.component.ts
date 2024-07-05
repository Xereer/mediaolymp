import { Component } from '@angular/core';

@Component({
  selector: 'app-intelligence2',
  standalone: true,
  imports: [],
  templateUrl: './intelligence.component.html',
  styleUrl: './intelligence.component.scss'
})
export class IntelligenceComponent {

  public openEducationProgramPdf(): void {
    window.open('https://mediaolimpjur.ru/assets/files/%D0%9F%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B0_%D0%B4%D0%BE%D0%BF_%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F_%D0%BE%D1%82_03_06_2024_%D0%A8%D0%BA%D0%BE%D0%BB%D0%B0_%D0%B1%D1%83%D0%B4%D1%83%D1%89%D0%B5%D0%B3%D0%BE_%D0%BE%D0%BB%D0%B8%D0%BC%D0%BF%D0%B8%D0%B0%D0%B4%D0%BD%D0%B8%D0%BA%D0%B0.pdf');
  //  window.open('assets/files/Программа_доп_образования_от_03_06_2024_Школа_будущего_олимпиадника.pdf');
  }

}
