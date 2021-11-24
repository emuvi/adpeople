import { AdExpect } from "adcommon";
import { QinColumn, QinLabel } from "qinpel-cps";

export class AdNation extends QinColumn {

    private expect: AdExpect;
    private label = new QinLabel("País");

    public constructor(expect: AdExpect) {
        super();
        this.expect = expect;
        this.label.install(this);
    }

}