import { AdActions, AdExpect, AdModules, AdOptions, AdTools } from "adcommon";
import { QinButton, QinColumn, QinLabel, QinPanel } from "qinpel-cps";

import { AdRegion } from "./region";
import { AdNation } from "./nation";

class Menu extends QinColumn {

    private qinRegion = new QinButton(null, new QinLabel("Região"));
    private qinNation = new QinButton(null, new QinLabel("País"));

    public constructor() {
        super();
        this.qinRegion.install(this);
        this.qinRegion.addAction(qinEvent => {
            if (qinEvent.isPrimary()) {
                this.qinpel().manager.newFrame("Região", "adpeople",
                    AdTools.newAdOption(AdModules.REGION, AdActions.ALL));
                this.qinpel().frame.close();
            }
        });
        this.qinNation.install(this);
        this.qinNation.addAction(qinEvent => {
            if (qinEvent.isPrimary()) {
                this.qinpel().manager.newFrame("País", "adpeople",
                    AdTools.newAdOption(AdModules.NATION, AdActions.ALL));
                this.qinpel().frame.close();
            }
        });
    }

}

class Index extends QinPanel {

    public constructor() {
        super();
        const module = this.qinpel().frame.getOption(AdOptions.MODULE);
        const action = this.qinpel().frame.getOption(AdOptions.ACTION);
        const filter = this.qinpel().frame.getOption(AdOptions.FILTER);
        switch (module) {
            case AdModules.REGION:
                new AdRegion(new AdExpect(action, filter).addWaiter(result => {
                    this.qinpel().frame.sendWaiters(result);
                })).install(this);
                break;
            case AdModules.NATION:
                new AdNation(new AdExpect(action, filter).addWaiter(result => {
                    this.qinpel().frame.sendWaiters(result);
                })).install(this);
                break;
            default:
                new Menu().install(this);
                break;
        }
    }

}

new Index().putAsBody();