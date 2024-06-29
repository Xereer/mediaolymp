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
import {Observable} from "rxjs";
import {NgLetModule} from "ng-let";
import {TimelineModule} from "primeng/timeline";
import {ERoute} from "../../../../../enums/route.enum";
import {RouterLink} from "@angular/router";

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
}
