import {Component} from '@angular/core';
import {ERoute} from "../../enums/route.enum";
import {RouterLink} from "@angular/router";
import {AnimateOnScrollModule} from "primeng/animateonscroll";
import {ResultsLib} from "./entities/libs/results.lib";
import {IImgCard} from "../../interfaces/img-card.interface";
import {LCard} from "../../labels/card.label";
import {LImgCard} from "../../labels/img-card.label";

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [
    RouterLink,
    AnimateOnScrollModule,
  ],
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss'
})
export class ResultsComponent {
  public histories: IImgCard[] = ResultsLib.histories;

  protected readonly ERoute: typeof ERoute = ERoute;
  protected readonly LCard: typeof LCard = LCard;
  protected readonly LImgCard: typeof LImgCard = LImgCard;
}
