import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {CarouselModule} from "primeng/carousel";
import {AnimateOnScrollModule} from "primeng/animateonscroll";
import {RippleModule} from "primeng/ripple";
import {TimelineModule} from "primeng/timeline";
import {IImage} from "../../interfaces/image.interface";
import {LImage} from "../../labels/image.label";
import {HomeLib} from "./entities/libs/home.lib";
import {ERoute} from "../../enums/route.enum";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
  imports: [
    RouterLink,
    CarouselModule,
    AnimateOnScrollModule,
    RippleModule,
    TimelineModule
  ]
})
export class HomeComponent implements OnInit {
  public sliderImages: IImage[] = [];
  public reasonsCards: IImage[] = HomeLib.reasonsCards;
  public points: IImage[] = HomeLib.points;

  protected readonly LImage: typeof LImage = LImage;
  protected readonly ERoute: typeof ERoute = ERoute;

  public ngOnInit(): void {
    for (let i = 0; i < 10; i++) {
      this.sliderImages.push({
        [LImage.SRC]: `assets/images/home/media-${i}.jpg`,
        [LImage.ALT]: `Медиапикник ${i + 1}`
      });
    }
  }
}
