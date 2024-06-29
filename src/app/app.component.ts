import {Component, inject, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {AsyncPipe, NgClass} from "@angular/common";
import {SidebarModule} from "primeng/sidebar";
import {ButtonModule} from "primeng/button";
import {MenuComponent} from "./entites/components/menu/menu.component";
import {ScrollTopModule} from "primeng/scrolltop";
import {LinksComponent} from "./entites/components/links/links.component";
import {MainService} from "./entites/services/main.service";
import {Observable} from "rxjs";
import {NgLetModule} from "ng-let";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [
    RouterOutlet,
    NgClass,
    SidebarModule,
    ButtonModule,
    MenuComponent,
    ScrollTopModule,
    LinksComponent,
    AsyncPipe,
    NgLetModule
  ]
})
export class AppComponent implements OnInit {
  private _mainService: MainService = inject(MainService);

  public isMobile$: Observable<boolean> = this._mainService.isMobile$;
  public isMenuOpen: boolean = false;

  private _mediaQueryList: MediaQueryList = matchMedia('(width < 1024px)');

  public ngOnInit(): void {
    this._checkMediaQuery();
  }

  /**
   * Зарытие главного меню (для мобильной версии)
   */
  public closeMenu(): void {
    this.isMenuOpen = false;
  }

  /**
   * Изменение видимости главного меню (для мобильной версии)
   */
  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  public openPdf(): void {
    window.open('assets/files/MediaOlimp_oferta.pdf');
  }

  /**
   * Отслеживание медиа-запроса
   * @private
   */
  private _checkMediaQuery(): void {
    this._checkMatches = this._mediaQueryList;
    this._mediaQueryList.addEventListener('change', this._eventListener);
  }

  /**
   * Обработчик события
   * @param {MediaQueryListEvent} event - event media-запроса
   */
  private _eventListener: (event: MediaQueryListEvent) => void = (event: MediaQueryListEvent) => this._checkMatches = event;

  /**
   * Проверка media-запроса
   * @param {MediaQueryListEvent | MediaQueryList} event - event media-запроса | media-запрос
   * @private
   */
  private set _checkMatches(event: MediaQueryListEvent | MediaQueryList) {
    this._mainService.isMobile = event.matches;
    this.closeMenu();
  }
}
