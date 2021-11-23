import { AdModule } from "adcommon";
import { QinColumn, QinLabel } from "qinpel-cps";

export class AdNation extends QinColumn {

    private module: AdModule;
    private label = new QinLabel("País");

    public constructor(module: AdModule) {
        super();
        this.module = module;
        this.label.install(this);
    }

}