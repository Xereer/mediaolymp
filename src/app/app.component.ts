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

  public openEducationProgramPdf(): void {
    window.open('https://mediaolimpjur.ru/assets/files/%D0%9F%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B0_%D0%B4%D0%BE%D0%BF_%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F_%D0%BE%D1%82_03_06_2024_%D0%A8%D0%BA%D0%BE%D0%BB%D0%B0_%D0%B1%D1%83%D0%B4%D1%83%D1%89%D0%B5%D0%B3%D0%BE_%D0%BE%D0%BB%D0%B8%D0%BC%D0%BF%D0%B8%D0%B0%D0%B4%D0%BD%D0%B8%D0%BA%D0%B0.pdf');
  //  window.open('assets/files/Программа_доп_образования_от_03_06_2024_Школа_будущего_олимпиадника.pdf');
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
