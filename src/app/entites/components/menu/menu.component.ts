import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";
import {IRouterLink} from "../../interfaces/router-link.interface";
import {LRouterLink} from "../../labels/router-link.label";
import {MenuLib} from "./entities/libs/menu.lib";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  standalone: true,
  imports: [RouterLink]
})
export class MenuComponent {
  public menuRoutes: IRouterLink[] = MenuLib.menuRoutes;

  protected readonly LRouterLink: typeof LRouterLink = LRouterLink;
}
