import { AdMenuItem, AdModules, menuStartUp } from "adcommon";
import { AdNation } from "./ad-nation";
import { AdRegion } from "./ad-region";

const items: AdMenuItem[] = [
  { module: AdModules.REGION, register: AdRegion },
  { module: AdModules.NATION, register: AdNation },
];

menuStartUp(items).style.putAsBody();
