import {LRate} from "../labels/rate.label";

export interface IRate {
  [LRate.TITLE]: string;
  [LRate.PRICE]: number;
  [LRate.POINTS]: string[];
  [LRate.HAS_COMMENT]: boolean;
  [LRate.URL]: string;
  [LRate.PRICE_EXT]?: number;
}
