import { AdExpect, AdModules, AdOptions, AdScope, AdTools } from "adcommon";
import {
  QinAsset,
  QinBase,
  QinButton,
  QinColumn,
  QinIcon,
  QinLabel,
  QinLine,
  QinTools
} from "qinpel-cps";
import { QinWaiters } from "qinpel-res";
import { AdNation } from "./ad-nation";
import { AdRegion } from "./ad-region";

class Menu extends QinColumn {
  private qinRegion = new QinButton({
    icon: new QinIcon(QinAsset.FaceRegion),
    label: new QinLabel("Região"),
  });
  private qinNation = new QinButton({
    icon: new QinIcon(QinAsset.FaceGlobe),
    label: new QinLabel("País"),
  });
  private qinLine1 = new QinLine({ items: [this.qinRegion, this.qinNation] });

  public constructor() {
    super();
    this.qinLine1.install(this);
    this.qinRegion.addAction((qinEvent) => {
      if (qinEvent.isMain) {
        this.qinpel.manager.newFrame(
          "Região",
          "adpeople",
          AdTools.newAdOption(AdModules.PEOPLE, [AdScope.ALL])
        );
        this.qinpel.frame.close();
      }
    });
    this.qinNation.addAction((qinEvent) => {
      if (qinEvent.isMain) {
        this.qinpel.manager.newFrame(
          "País",
          "adpeople",
          AdTools.newAdOption(AdModules.NATION, [AdScope.ALL])
        );
        this.qinpel.frame.close();
      }
    });
  }
}

function startUp(): QinBase {
  const module = QinTools.qinpel().frame.getOption(AdOptions.MODULE);
  const scopes = QinTools.qinpel().frame.getOption(AdOptions.SCOPES);
  const filters = QinTools.qinpel().frame.getOption(AdOptions.FILTERS);
  switch (module) {
    case AdModules.REGION:
      return new AdRegion(
        new AdExpect({
          scopes,
          filters,
          waiters: new QinWaiters().addWaiter((result) => {
            this.qinpel().frame.sendWaiters(result);
          }),
        })
      );
    case AdModules.NATION:
      return new AdNation(
        new AdExpect({
          scopes,
          filters,
          waiters: new QinWaiters().addWaiter((result) => {
            this.qinpel().frame.sendWaiters(result);
          }),
        })
      );
    default:
      return new Menu();
  }
}

startUp().style.putAsBody();
