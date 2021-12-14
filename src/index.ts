import { AdExpect, AdModules, AdOptions, AdScope, AdTools } from "adcommon";
import { QinBase, QinButton, QinColumn, QinLabel, QinTools } from "qinpel-cps";
import { AdNation } from "./ad-nation";
import { AdRegion } from "./ad-region";

class Menu extends QinColumn {

    private qinRegion = new QinButton({ label: new QinLabel("Região") });
    private qinNation = new QinButton({ label: new QinLabel("País") });

    public constructor() {
        super();
        this.qinRegion.install(this);
        this.qinRegion.addAction(qinEvent => {
            if (qinEvent.isPrimary()) {
                this.qinpel().manager.newFrame("Região", "adpeople",
                    AdTools.newAdOption(AdModules.REGION, [AdScope.ALL]));
                this.qinpel().frame.close();
            }
        });
        this.qinNation.install(this);
        this.qinNation.addAction(qinEvent => {
            if (qinEvent.isPrimary()) {
                this.qinpel().manager.newFrame("País", "adpeople",
                    AdTools.newAdOption(AdModules.NATION, [AdScope.ALL]));
                this.qinpel().frame.close();
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
            return new AdRegion(new AdExpect(scopes, filters).addWaiter(result => {
                this.qinpel().frame.sendWaiters(result);
            }));
        case AdModules.NATION:
            return new AdNation(new AdExpect(scopes, filters).addWaiter(result => {
                this.qinpel().frame.sendWaiters(result);
            }));
        default:
            return new Menu();
    }
}

startUp().putAsBody();

