import {Component, inject} from '@angular/core';
import {ICard} from "../../../../../interfaces/card.interface";
import {AdmissionTestsLib} from "./entities/libs/admission-tests.lib";
import {LCard} from "../../../../../labels/card.label";
import {AnimateOnScrollModule} from "primeng/animateonscroll";
import {AccordionModule} from "primeng/accordion";
import {IFaq} from "../../../../../interfaces/faq.interface";
import {LFaq} from "../../../../../labels/faq.label";
import {IRate} from "../../../../../interfaces/rate.interface";
import {LRate} from "../../../../../labels/rate.label";
import {LImage} from "../../../../../labels/image.label";
import {IImage} from "../../../../../interfaces/image.interface";
import {CarouselModule} from "primeng/carousel";
import {MainService} from "../../../../../services/main.service";
import {map, Observable, pipe, tap} from "rxjs";
import {NgLetModule} from "ng-let";
import {TimelineModule} from "primeng/timeline";
import {ERoute} from "../../../../../enums/route.enum";
import {RouterLink} from "@angular/router";
import {DialogModule} from "primeng/dialog";
import {InputTextModule} from "primeng/inputtext";
import {Button} from "primeng/button";

@Component({
  selector: 'app-admission-tests',
  templateUrl: './admission-tests.component.html',
  styleUrl: './admission-tests.component.scss',
  standalone: true,
  imports: [
    AnimateOnScrollModule,
    AccordionModule,
    CarouselModule,
    NgLetModule,
    TimelineModule,
    RouterLink,
    DialogModule,
    InputTextModule,
    Button
  ]
})
export class AdmissionTestsComponent {
  private _mainService: MainService = inject(MainService);

  public mainBlocks: ICard[] = AdmissionTestsLib.mainBlocks;
  public programItems: ICard[] = AdmissionTestsLib.programItems;
  public lessonsFormats: IImage[] = AdmissionTestsLib.lessonsFormats;
  public rates: IRate[] = AdmissionTestsLib.rates;

  public faqItems: IFaq[] = AdmissionTestsLib.faqItems;

  public isMobile$: Observable<boolean> = this._mainService.isMobile$;

  protected readonly LImage: typeof LImage = LImage;
  protected readonly LCard: typeof LCard = LCard;
  protected readonly LFaq: typeof LFaq = LFaq;
  protected readonly LRate: typeof LRate = LRate;
  protected readonly ERoute: typeof ERoute = ERoute;

  public scrollToRates(element: HTMLElement): void {
    window.scrollTo({
      top: element.getBoundingClientRect().top + window.scrollY - 80,
      behavior: "smooth"
    });
  }

  public display: boolean = false;
  public rate: any = null;
  public closable: boolean = true;
  public dismissableMask: boolean = false;
  // Установите высоту и ширину для вашего popup
  public width: string = '1000px';
  public height: string = '500px';
  // Стили контента для вашего popup (можно использовать, например, для настройки отступов)
  public contentStyle: any = { 'text-align': 'center' };

  showDialog(rate: any) {
    this.rate = rate;
    this.display = true;
  }

  public onDialogClose() {
    this.display = false;
  }

  public hideDialog() {
    this.display = false;
    const form = document.getElementById('myForm')!;
    const formElements = ['fullName', 'phoneNumber', 'email', 'vk'];
    const formCheckboxes = ['acceptOffer', 'personalData'];
    let countOfEmpty = 0;
    for (let i: number = 0; i < formElements.length; i++) {
      // @ts-ignore
      form.elements[formElements[i]].value = null;
    }

    for (let i: number = 0; i < formCheckboxes.length; i++) {
      // @ts-ignore
      form.elements[formCheckboxes[i]].checked = null;
    }
    this.rate = null;
  }

  public sendInputValues() {
    // Получаем форму по id
    const form = document.getElementById('myForm')!;
    const formElements = ['fullName', 'phoneNumber', 'email', 'vk'];
    const formCheckboxes = ['acceptOffer', 'personalData'];
    let countOfEmpty = 0;
    for (let i: number = 0; i < formElements.length; i++) {
      // @ts-ignore
      if (!form.elements[formElements[i]].value.length) {
        countOfEmpty++;
      }
    }

    for (let i: number = 0; i < formCheckboxes.length; i++) {
      // @ts-ignore
      if (!form.elements[formCheckboxes[i]].checked) {
        countOfEmpty++;
      }
    }

    if (Boolean(countOfEmpty)) {
      alert('Внимание! Заполните все обязательные поля');
    return;
    }

    console.log(this.rate);

    // прокидывание this.rate на бэк

    this.hideDialog();
  }

  public openAcceptOffer(): void {
    window.open('https://mediaolimpjur.ru/assets/files/MediaOlimp_oferta.pdf');
  }

  public openPersonalData(): void {
    alert('Здесь могла быть ссылка на персональные данные, но Глеб её потерял');
    //window.open('https://media-olimp.ru/a/agreement/2/');
  }

  public openVK(): void {
    window.open('https://vk.com/mediaolimpjur');
  }
}
