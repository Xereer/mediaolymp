import {ICard} from "./card.interface";
import {LImgCard} from "../labels/img-card.label";

export interface IImgCard extends ICard {
  [LImgCard.SUBTITLE]: string;
  [LImgCard.SRC]: string;
}
