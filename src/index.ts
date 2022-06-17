import { AdMenuItem, AdModules, menuStartUp } from "adcommon";
import { AdBusiness } from "./ad-business";
import { AdCity } from "./ad-city";
import { AdDistrict } from "./ad-district";
import { AdNation } from "./ad-nation";
import { AdPeople } from "./ad-people";
import { AdPeopleGroup } from "./ad-people-group";
import { AdPeopleSubGroup } from "./ad-people-subgroup";
import { AdRegion } from "./ad-region";
import { AdState } from "./ad-state";

const items: AdMenuItem[] = [
  { module: AdModules.BUSINESS, register: AdBusiness },
  { module: AdModules.REGION, register: AdRegion },
  { module: AdModules.NATION, register: AdNation },
  { module: AdModules.STATE, register: AdState },
  { module: AdModules.CITY, register: AdCity },
  { module: AdModules.DISTRICT, register: AdDistrict },
  { module: AdModules.PEOPLE_GROUP, register: AdPeopleGroup },
  { module: AdModules.PEOPLE_SUBGROUP, register: AdPeopleSubGroup },
  { module: AdModules.PEOPLE, register: AdPeople },
];

menuStartUp(items).style.putAsBody();
