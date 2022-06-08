(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdApprise = exports.AdApprised = void 0;
class AdApprised {
    constructor(message, popup) {
        this.message = message;
        this.popup = popup !== null && popup !== void 0 ? popup : true;
    }
}
exports.AdApprised = AdApprised;
class AdApprise {
}
exports.AdApprise = AdApprise;
AdApprise.CANCELED_BY_MUTATIONS = new AdApprised("The user canceled this action to not loose his mutations.", false);
AdApprise.NO_RESULTS_FOUND = new AdApprised("No results found.", true);
AdApprise.INSERTED_REGISTER = new AdApprised("Inserted one register.", false);
AdApprise.UPDATED_REGISTER = new AdApprised("Updated one register.", false);
AdApprise.DELETED_REGISTER = new AdApprised("Row deleted with success.", true);

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdExpect = void 0;
class AdExpect {
    constructor(options) {
        this._scopes = options.scopes;
        this._filters = options.filters;
        this._waiters = options.waiters;
    }
    get scopes() {
        return this._scopes;
    }
    get filters() {
        return this._filters;
    }
    get waiters() {
        return this._waiters;
    }
}
exports.AdExpect = AdExpect;

},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdField = void 0;
const qinpel_cps_1 = require("qinpel-cps");
class AdField {
    constructor(newer) {
        var _a;
        this._edit = null;
        this._typed = null;
        this._value = null;
        this._key = (_a = newer.key) !== null && _a !== void 0 ? _a : false;
        this._title = newer.title;
        this._name = newer.name;
        this._alias = newer.alias;
        this._kind = newer.kind;
        this._options = newer.options;
        this.init();
    }
    init() {
        this._edit = qinpel_cps_1.QinMutantsArm.newEdit(this._kind, this._options);
        this._typed = {
            name: this._name,
            type: this._edit.getNature(),
            alias: this._alias,
        };
    }
    get key() {
        return this._key;
    }
    get source() {
        let dotPos = this._name.indexOf(".");
        if (dotPos < 0) {
            return "";
        }
        return this._name.substring(0, dotPos);
    }
    get title() {
        return this._title;
    }
    get name() {
        return this._name;
    }
    get kind() {
        return this._kind;
    }
    get alias() {
        return this._alias;
    }
    get options() {
        return this._options;
    }
    get typed() {
        return this._typed;
    }
    get valued() {
        let name = this._name;
        let type = this._edit.getNature();
        let data = this._edit.value;
        return { name, type, data };
    }
    get value() {
        let result = this._edit.value;
        if (result === "") {
            result = null;
        }
        return result;
    }
    set value(data) {
        this._edit.value = data;
        this._value = data;
    }
    install(on) {
        if (this._title) {
            const titled = new qinpel_cps_1.QinField(this._title, this._edit);
            titled.install(on);
        }
        else {
            this._edit.install(on);
        }
    }
    hasMutations() {
        let early = this._value;
        let byNow = this.value;
        return early != byNow;
    }
    undoMutations() {
        this._edit.value = this._value;
    }
    clean() {
        this.value = null;
    }
    saved() {
        this._value = this.value;
    }
    turnReadOnly() {
        this._edit.turnReadOnly();
    }
    turnEditable() {
        this._edit.turnEditable();
    }
    isEditable() {
        this._edit.isEditable();
    }
    addOnChanged(waiter) {
        this._edit.addOnChanged(waiter);
    }
    focus() {
        this._edit.focus();
    }
}
exports.AdField = AdField;

},{"qinpel-cps":24}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdFilterTies = exports.AdFilterLikes = exports.AdFilterSeems = exports.AdFilter = void 0;
class AdFilter {
    constructor(options) {
        var _a, _b, _c;
        this.seems = (_a = options === null || options === void 0 ? void 0 : options.seems) !== null && _a !== void 0 ? _a : AdFilterSeems.SAME;
        this.likes = (_b = options === null || options === void 0 ? void 0 : options.likes) !== null && _b !== void 0 ? _b : AdFilterLikes.EQUALS;
        this.valued = options === null || options === void 0 ? void 0 : options.valued;
        this.linked = options === null || options === void 0 ? void 0 : options.linked;
        this.ties = (_c = options === null || options === void 0 ? void 0 : options.ties) !== null && _c !== void 0 ? _c : AdFilterTies.AND;
    }
}
exports.AdFilter = AdFilter;
var AdFilterSeems;
(function (AdFilterSeems) {
    AdFilterSeems["SAME"] = "SAME";
    AdFilterSeems["DIVERSE"] = "DIVERSE";
})(AdFilterSeems = exports.AdFilterSeems || (exports.AdFilterSeems = {}));
var AdFilterLikes;
(function (AdFilterLikes) {
    AdFilterLikes["EQUALS"] = "EQUALS";
    AdFilterLikes["BIGGER"] = "BIGGER";
    AdFilterLikes["LESSER"] = "LESSER";
    AdFilterLikes["BIGGER_EQUALS"] = "BIGGER_EQUALS";
    AdFilterLikes["LESSER_EQUALS"] = "LESSER_EQUALS";
    AdFilterLikes["STARTS_WITH"] = "STARTS_WITH";
    AdFilterLikes["ENDS_WITH"] = "ENDS_WITH";
    AdFilterLikes["CONTAINS"] = "CONTAINS";
})(AdFilterLikes = exports.AdFilterLikes || (exports.AdFilterLikes = {}));
var AdFilterTies;
(function (AdFilterTies) {
    AdFilterTies["AND"] = "AND";
    AdFilterTies["OR"] = "OR";
})(AdFilterTies = exports.AdFilterTies || (exports.AdFilterTies = {}));

},{}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdJoinedTies = void 0;
var AdJoinedTies;
(function (AdJoinedTies) {
    AdJoinedTies[AdJoinedTies["INNER"] = 0] = "INNER";
    AdJoinedTies[AdJoinedTies["LEFT"] = 1] = "LEFT";
    AdJoinedTies[AdJoinedTies["RIGHT"] = 2] = "RIGHT";
    AdJoinedTies[AdJoinedTies["FULL"] = 3] = "FULL";
    AdJoinedTies[AdJoinedTies["CROSS"] = 4] = "CROSS";
})(AdJoinedTies = exports.AdJoinedTies || (exports.AdJoinedTies = {}));

},{}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuStartUp = exports.AdMenu = void 0;
const qinpel_cps_1 = require("qinpel-cps");
const qinpel_res_1 = require("qinpel-res");
const ad_expect_1 = require("./ad-expect");
const ad_names_1 = require("./ad-names");
const ad_tools_1 = require("./ad-tools");
class AdMenu extends qinpel_cps_1.QinColumn {
    constructor(items) {
        super();
        this._lines = new Array();
        for (const item of items) {
            const line = this.getLine(item.group);
            const button = new qinpel_cps_1.QinButton({
                icon: new qinpel_cps_1.QinIcon(item.module.icon, qinpel_res_1.QinGrandeur.MEDIUM),
                label: new qinpel_cps_1.QinLabel(item.module.title),
            });
            button.putAsColumn();
            button.addActionMain((_) => {
                this.qinpel.chief.newJobber(item.module.title, item.module.app, ad_tools_1.AdTools.newAdSetupOption(item.module, [ad_tools_1.AdScope.ALL]));
                this.qinpel.jobbed.close();
            });
            line.put(button);
        }
    }
    getLine(title) {
        if (!title) {
            if (this._lines.length === 0) {
                const newLine = new qinpel_cps_1.QinTitled();
                newLine.install(this);
                this._lines.push(newLine);
            }
            return this._lines[this._lines.length - 1];
        }
        for (const line of this._lines) {
            if (line.title == title) {
                return line;
            }
        }
        const newLine = new qinpel_cps_1.QinTitled({ title });
        newLine.install(this);
        this._lines.push(newLine);
        return newLine;
    }
}
exports.AdMenu = AdMenu;
function menuStartUp(menus) {
    const adSetup = qinpel_cps_1.QinTool.qinpel.jobbed.getOption(ad_names_1.AdNames.AdSetup);
    if (adSetup && adSetup.module) {
        for (const menu of menus) {
            if (ad_tools_1.AdTools.isSameModule(menu.module, adSetup.module)) {
                let expect = new ad_expect_1.AdExpect({
                    scopes: adSetup.scopes,
                    filters: adSetup.filters,
                    waiters: new qinpel_res_1.QinWaiters().addWaiter((result) => {
                        qinpel_cps_1.QinTool.qinpel.jobbed.sendWaiters(result);
                    }),
                });
                if (menu.register) {
                    return new menu.register(menu.module, expect);
                }
                else {
                    throw new Error("No menu action defined");
                }
            }
        }
    }
    return new AdMenu(menus);
}
exports.menuStartUp = menuStartUp;

},{"./ad-expect":2,"./ad-names":8,"./ad-tools":17,"qinpel-cps":24,"qinpel-res":57}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdModules = void 0;
const qinpel_cps_1 = require("qinpel-cps");
class AdModules {
}
exports.AdModules = AdModules;
AdModules.BUSINESS = {
    app: "adpeople",
    title: "Negócios",
    icon: qinpel_cps_1.QinAsset.FaceGlobe,
};
AdModules.REGION = {
    app: "adpeople",
    title: "Região",
    icon: qinpel_cps_1.QinAsset.FaceRegion,
};
AdModules.NATION = {
    app: "adpeople",
    title: "Países",
    icon: qinpel_cps_1.QinAsset.FaceGlobe,
};
AdModules.STATE = {
    app: "adpeople",
    title: "Estados",
    icon: qinpel_cps_1.QinAsset.FaceGlobe,
};
AdModules.CITY = {
    app: "adpeople",
    title: "Cidades",
    icon: qinpel_cps_1.QinAsset.FaceGlobe,
};
AdModules.DISTRICT = {
    app: "adpeople",
    title: "Bairros",
    icon: qinpel_cps_1.QinAsset.FaceGlobe,
};
AdModules.PEOPLE = {
    app: "adpeople",
    title: "Pessoas",
    icon: qinpel_cps_1.QinAsset.FaceGlobe,
};
AdModules.PEOPLE_GROUP = {
    app: "adpeople",
    title: "Grupos de Pessoas",
    icon: qinpel_cps_1.QinAsset.FaceGlobe,
};
AdModules.PEOPLE_SUBGROUP = {
    app: "adpeople",
    title: "SubGrupos de Pessoas",
    icon: qinpel_cps_1.QinAsset.FaceGlobe,
};

},{"qinpel-cps":24}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdNames = void 0;
var AdNames;
(function (AdNames) {
    AdNames["AdBoard"] = "AdBoard";
    AdNames["AdMister"] = "AdMister";
    AdNames["AdPeople"] = "AdPeople";
    AdNames["AdProduct"] = "AdProduct";
    AdNames["AdProject"] = "AdProject";
    AdNames["AdSales"] = "AdSales";
    AdNames["AdSetup"] = "AdSetup";
})(AdNames = exports.AdNames || (exports.AdNames = {}));

},{}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdRegBar = void 0;
const qinpel_cps_1 = require("qinpel-cps");
const ad_apprise_1 = require("./ad-apprise");
const ad_register_1 = require("./ad-register");
class AdRegBar extends qinpel_cps_1.QinLine {
    constructor(register) {
        super();
        this._qinMenu = new qinpel_cps_1.QinButton({ icon: new qinpel_cps_1.QinIcon(qinpel_cps_1.QinAsset.FaceMenuLines) });
        this._qinMenuViewSingle = new qinpel_cps_1.QinButton({
            icon: new qinpel_cps_1.QinIcon(qinpel_cps_1.QinAsset.FaceSplitNotView),
        });
        this._qinMenuViewVertical = new qinpel_cps_1.QinButton({
            icon: new qinpel_cps_1.QinIcon(qinpel_cps_1.QinAsset.FaceSplitViewVertical),
        });
        this._qinMenuViewHorizontal = new qinpel_cps_1.QinButton({
            icon: new qinpel_cps_1.QinIcon(qinpel_cps_1.QinAsset.FaceSplitViewHorizontal),
        });
        this._qinMenuFocusBody = new qinpel_cps_1.QinButton({
            icon: new qinpel_cps_1.QinIcon(qinpel_cps_1.QinAsset.FaceListView),
        });
        this._qinMenuFocusTable = new qinpel_cps_1.QinButton({
            icon: new qinpel_cps_1.QinIcon(qinpel_cps_1.QinAsset.FaceGridView),
        });
        this._qinMenuBody = new qinpel_cps_1.QinLine({
            items: [
                this._qinMenuViewSingle,
                this._qinMenuViewVertical,
                this._qinMenuViewHorizontal,
                new qinpel_cps_1.QinDivider(),
                this._qinMenuFocusBody,
                this._qinMenuFocusTable,
            ],
        });
        this._qinPopup = new qinpel_cps_1.QinPopup(this._qinMenuBody);
        this._qinInsert = new qinpel_cps_1.QinIcon(qinpel_cps_1.QinAsset.FaceAdd);
        this._qinSearch = new qinpel_cps_1.QinIcon(qinpel_cps_1.QinAsset.FaceSearch);
        this._qinNotice = new qinpel_cps_1.QinIcon(qinpel_cps_1.QinAsset.FaceEye);
        this._qinMode = new qinpel_cps_1.QinIconPick({
            icons: [this._qinInsert, this._qinSearch, this._qinNotice],
            readOnly: true,
        });
        this._qinGoFirst = new qinpel_cps_1.QinButton({ icon: new qinpel_cps_1.QinIcon(qinpel_cps_1.QinAsset.FaceRUpChevronPush) });
        this._qinGoPrior = new qinpel_cps_1.QinButton({
            icon: new qinpel_cps_1.QinIcon(qinpel_cps_1.QinAsset.FaceRLeftChevronPush),
        });
        this._qinGoNext = new qinpel_cps_1.QinButton({
            icon: new qinpel_cps_1.QinIcon(qinpel_cps_1.QinAsset.FaceRRightChevronPush),
        });
        this._qinGoLast = new qinpel_cps_1.QinButton({
            icon: new qinpel_cps_1.QinIcon(qinpel_cps_1.QinAsset.FaceRDownChevronPush),
        });
        this._qinMutate = new qinpel_cps_1.QinButton({ icon: new qinpel_cps_1.QinIcon(qinpel_cps_1.QinAsset.FacePencil) });
        this._qinConfirm = new qinpel_cps_1.QinButton({ icon: new qinpel_cps_1.QinIcon(qinpel_cps_1.QinAsset.FaceConfirm) });
        this._qinCancel = new qinpel_cps_1.QinButton({ icon: new qinpel_cps_1.QinIcon(qinpel_cps_1.QinAsset.FaceCancel) });
        this._qinDelete = new qinpel_cps_1.QinButton({ icon: new qinpel_cps_1.QinIcon(qinpel_cps_1.QinAsset.FaceTrash) });
        this._reg = register;
        this.initMenu();
        this.initMode();
        this.initMove();
        this.initMake();
        this.style.putAsPaddingBottom(2);
        this.style.putAsBorderBottom(2, "#999");
        this.style.putAsMarginBottom(2);
    }
    initMenu() {
        this._qinMenu.install(this);
        this._qinMenu.addActionMain((_) => this._qinPopup.showOnParent(this._qinMenu));
        this._qinMenuViewSingle.addActionMain((_) => {
            this._qinPopup.close();
            this._reg.viewSingle();
        });
        this._qinMenuViewVertical.addActionMain((_) => {
            this._qinPopup.close();
            this._reg.viewVertical();
        });
        this._qinMenuViewHorizontal.addActionMain((_) => {
            this._qinPopup.close();
            this._reg.viewHorizontal();
        });
        this._qinMenuFocusBody.addActionMain((_) => {
            this._qinPopup.close();
            this._reg.focusBody();
        });
        this._qinMenuFocusTable.addActionMain((_) => {
            this._qinPopup.close();
            this._reg.focusTable();
        });
    }
    initMode() {
        this._qinMode.install(this);
        this._qinInsert.addActionMain((_) => this._reg.tryTurnInsert().catch((err) => {
            this._reg.displayError(err, "{adcommon}(ErrCode-000003)");
        }));
        this._qinSearch.addActionMain((_) => this._reg.tryTurnSearch().catch((err) => {
            this._reg.displayError(err, "{adcommon}(ErrCode-000004)");
        }));
        this._qinNotice.addActionMain((_) => this._reg.tryTurnNotice().catch((err) => {
            this._reg.displayError(err, "{adcommon}(ErrCode-000005)");
        }));
        this._reg.addListener({
            event: ad_register_1.AdRegTurn.TURN_MODE,
            onDid: (turned) => this.setMode(turned.newMode),
        });
    }
    initMove() {
        this._qinGoFirst.install(this);
        this._qinGoFirst.addActionMain((_) => this._reg.tryGoFirst());
        this._qinGoPrior.install(this);
        this._qinGoPrior.addActionMain((_) => this._reg.tryGoPrior());
        this._qinGoNext.install(this);
        this._qinGoNext.addActionMain((_) => this._reg.tryGoNext());
        this._qinGoLast.install(this);
        this._qinGoLast.addActionMain((_) => this._reg.tryGoLast());
    }
    initMake() {
        this._qinMutate.install(this);
        this._qinMutate.addActionMain((_) => this._reg.tryTurnMutate().catch((err) => {
            this._reg.displayError(err, "{adcommon}(ErrCode-000012)");
        }));
        this._qinConfirm.install(this);
        this._qinConfirm.addActionMain((_) => this._reg.tryConfirm().catch((err) => {
            this._reg.displayError(err, "{adcommon}(ErrCode-000007)");
        }));
        this._qinCancel.install(this);
        this._qinCancel.addActionMain((_) => this._reg.tryCancel());
        this._qinDelete.install(this);
        this._qinDelete.addActionMain((_) => this._reg
            .tryDelete()
            .then((_) => {
            this.qinpel.jobbed.showInfo(ad_apprise_1.AdApprise.DELETED_REGISTER, "{adcommon}(ErrCode-000011)");
        })
            .catch((err) => {
            this._reg.displayError(err, "{adcommon}(ErrCode-000006)");
        }));
    }
    setMode(mode) {
        this._qinMode.value = null;
        if (mode) {
            switch (mode) {
                case ad_register_1.AdRegMode.INSERT:
                    this._qinMode.value = this._qinInsert.asset;
                    this._qinGoFirst.unDisplay();
                    this._qinGoPrior.unDisplay();
                    this._qinGoNext.unDisplay();
                    this._qinGoLast.unDisplay();
                    this._qinMutate.unDisplay();
                    this._qinConfirm.reDisplay();
                    this._qinCancel.reDisplay();
                    this._qinDelete.unDisplay();
                    break;
                case ad_register_1.AdRegMode.SEARCH:
                    this._qinMode.value = this._qinSearch.asset;
                    this._qinGoFirst.unDisplay();
                    this._qinGoPrior.unDisplay();
                    this._qinGoNext.unDisplay();
                    this._qinGoLast.unDisplay();
                    this._qinMutate.unDisplay();
                    this._qinConfirm.reDisplay();
                    this._qinCancel.reDisplay();
                    this._qinDelete.unDisplay();
                    break;
                case ad_register_1.AdRegMode.NOTICE:
                    this._qinMode.value = this._qinNotice.asset;
                    this._qinGoFirst.reDisplay();
                    this._qinGoPrior.reDisplay();
                    this._qinGoNext.reDisplay();
                    this._qinGoLast.reDisplay();
                    this._qinMutate.reDisplay();
                    this._qinConfirm.unDisplay();
                    this._qinCancel.unDisplay();
                    this._qinDelete.unDisplay();
                    break;
                case ad_register_1.AdRegMode.MUTATE:
                    this._qinMode.value = this._qinNotice.asset;
                    this._qinGoFirst.unDisplay();
                    this._qinGoPrior.unDisplay();
                    this._qinGoNext.unDisplay();
                    this._qinGoLast.unDisplay();
                    this._qinMutate.unDisplay();
                    this._qinConfirm.reDisplay();
                    this._qinCancel.reDisplay();
                    this._qinDelete.reDisplay();
                    break;
            }
        }
    }
}
exports.AdRegBar = AdRegBar;

},{"./ad-apprise":1,"./ad-register":16,"qinpel-cps":24}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdRegBase = void 0;
class AdRegBase {
}
exports.AdRegBase = AdRegBase;

},{}],11:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdRegEditor = void 0;
const qinpel_cps_1 = require("qinpel-cps");
class AdRegEditor extends qinpel_cps_1.QinPanel {
    constructor(register) {
        super();
        this._tabs = null;
        this._column = null;
        this._line = null;
        this._reg = register;
    }
    addTab(title) {
        if (this._tabs == null) {
            this._tabs = new qinpel_cps_1.QinTabs();
            this._tabs.install(this);
        }
        this._column = new qinpel_cps_1.QinColumn();
        this._tabs.addTab({ title, viewer: this._column });
        this._line = new qinpel_cps_1.QinLine();
        this._line.install(this._column);
    }
    addLine() {
        if (this._column == null) {
            this._column = new qinpel_cps_1.QinColumn();
            this._column.install(this);
        }
        this._line = new qinpel_cps_1.QinLine();
        this._line.install(this._column);
    }
    addField(field) {
        if (this._line == null) {
            this.addLine();
        }
        field.install(this._line);
    }
}
exports.AdRegEditor = AdRegEditor;

},{"qinpel-cps":24}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdRegLoader = void 0;
const qinpel_cps_1 = require("qinpel-cps");
const ad_apprise_1 = require("./ad-apprise");
class AdRegLoader {
    constructor(register) {
        this._reg = register;
    }
    load() {
        return new Promise((resolve, reject) => {
            let registry = this._reg.registry;
            let fields = this._reg.model.typeds;
            let joins = this._reg.base.joins;
            let filters = null;
            if (this._reg.base.filters) {
                if (filters == null) {
                    filters = [];
                }
                filters.push(...this._reg.base.filters);
            }
            if (this._reg.expect.filters) {
                if (filters == null) {
                    filters = [];
                }
                filters.push(...this._reg.expect.filters);
            }
            let searchingFor = this._reg.search.getFilters();
            if (searchingFor) {
                if (filters == null) {
                    filters = [];
                }
                filters.push(...searchingFor);
            }
            let orders = this._reg.base.orders;
            let select = { registry, fields, joins, filters, orders };
            qinpel_cps_1.QinTool.qinpel.talk
                .post("/reg/ask", select)
                .then((res) => {
                this._reg
                    .unselectAll()
                    .then(() => {
                    this._reg.table.delLines();
                    let rows = qinpel_cps_1.QinTool.qinpel.our.soul.body.getCSVRows(res.data);
                    if (rows.length == 0) {
                        this._reg.displayInfo(ad_apprise_1.AdApprise.NO_RESULTS_FOUND, "{adcommon}(ErrCode-000008)");
                    }
                    else {
                        for (let row of rows) {
                            this._reg.table.addLine(row);
                        }
                    }
                    resolve();
                })
                    .catch((err) => {
                    reject(err);
                });
            })
                .catch((err) => {
                reject(err);
            });
        });
    }
}
exports.AdRegLoader = AdRegLoader;

},{"./ad-apprise":1,"qinpel-cps":24}],13:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdRegModel = void 0;
const ad_filter_1 = require("./ad-filter");
class AdRegModel {
    constructor(register) {
        this._fields = [];
        this._typeds = null;
        this._reg = register;
    }
    get fields() {
        return this._fields;
    }
    get typeds() {
        if (this._typeds == null) {
            this._typeds = [];
            for (let field of this._fields) {
                this._typeds.push(field.typed);
            }
        }
        return this._typeds;
    }
    addField(field) {
        this._fields.push(field);
    }
    getFieldByName(name) {
        for (let field of this._fields) {
            if (field.name === name) {
                return field;
            }
        }
        return null;
    }
    setValue(index, value) {
        this._fields[index].value = value;
    }
    clean() {
        for (let field of this._fields) {
            field.clean();
        }
    }
    turnReadOnly() {
        for (let field of this._fields) {
            field.turnReadOnly();
        }
    }
    turnEditable() {
        for (let field of this._fields) {
            field.turnEditable();
        }
    }
    hasMutations() {
        let result = null;
        for (let field of this._fields) {
            if (field.hasMutations()) {
                if (result == null) {
                    result = [];
                }
                result.push(field.title);
            }
        }
        return result;
    }
    undoMutations() {
        for (let field of this._fields) {
            field.undoMutations();
        }
    }
    insert() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                let valueds = new Array();
                for (let field of this._fields) {
                    valueds.push(field.valued);
                }
                let inserting = {
                    registry: this._reg.registry,
                    valueds: valueds,
                };
                this._reg.qinpel.chief.talk
                    .post("/reg/new", inserting)
                    .then((_) => {
                    resolve(valueds);
                })
                    .catch((err) => {
                    reject(err);
                });
            });
        });
    }
    update() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                let valueds = new Array();
                for (let field of this._fields) {
                    valueds.push(field.valued);
                }
                let updating = {
                    registry: this._reg.registry,
                    valueds: this.getMutationValueds(),
                    filters: this.getKeyFieldsFilter(),
                    limit: 1,
                };
                this._reg.qinpel.chief.talk
                    .post("/reg/set", updating)
                    .then((_) => {
                    for (let field of this._fields) {
                        field.saved();
                    }
                    resolve(valueds);
                })
                    .catch((err) => {
                    reject(err);
                });
            });
        });
    }
    delete() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                let deleting = {
                    registry: this._reg.registry,
                    filters: this.getKeyFieldsFilter(),
                    limit: 1,
                };
                this._reg.qinpel.chief.talk
                    .post("/reg/del", deleting)
                    .then((_) => {
                    this.clean();
                    resolve();
                })
                    .catch((err) => {
                    reject(err);
                });
            });
        });
    }
    getMutationValueds() {
        let result = [];
        for (let field of this._fields) {
            if (field.hasMutations() && !field.key) {
                if (result == null) {
                    result = [];
                }
                result.push(field.valued);
            }
        }
        return result;
    }
    getKeyFieldsFilter() {
        let result = [];
        for (let field of this._fields) {
            if (field.key) {
                let filter = new ad_filter_1.AdFilter({
                    seems: ad_filter_1.AdFilterSeems.SAME,
                    likes: ad_filter_1.AdFilterLikes.EQUALS,
                    valued: field.valued,
                    ties: ad_filter_1.AdFilterTies.AND,
                });
                result.push(filter);
            }
        }
        return result;
    }
}
exports.AdRegModel = AdRegModel;

},{"./ad-filter":4}],14:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdRegSearch = void 0;
const qinpel_cps_1 = require("qinpel-cps");
const ad_filter_1 = require("./ad-filter");
class AdRegSearch extends qinpel_cps_1.QinScroll {
    constructor(register) {
        super();
        this._lines = new qinpel_cps_1.QinColumn();
        this._clauses = new Array();
        this._reg = register;
        this._lines.install(this);
        const first = new SearchClause(this);
        this._clauses.push(first);
        first.install(this._lines);
    }
    get reg() {
        return this._reg;
    }
    addField(field) {
        this._clauses.forEach((clause) => {
            clause.addField({ title: field.title, value: field.name });
        });
    }
    addClause(after) {
        const clause = new SearchClause(this);
        this._reg.model.fields.forEach((field) => {
            clause.addField({ title: field.title, value: field.name });
        });
        const index = this._clauses.indexOf(after);
        this._clauses.splice(index + 1, 0, clause);
        this.rebuild();
    }
    delClause(clause) {
        if (this._clauses.length > 1) {
            const index = this._clauses.indexOf(clause);
            this._clauses.splice(index, 1);
            this.rebuild();
        }
        else {
            this._clauses[0].clean();
        }
    }
    rebuild() {
        this._lines.unInstallChildren();
        this._clauses.forEach((clause) => {
            clause.install(this._lines);
        });
    }
    getFilters() {
        let results = null;
        this._clauses.forEach((clause) => {
            let filter = clause.getFilter();
            if (filter) {
                if (!results) {
                    results = [];
                }
                results.push(filter);
            }
        });
        return results;
    }
    clean() {
        if (this._clauses.length > 1) {
            this._clauses.splice(1, this._clauses.length - 1);
            this.rebuild();
        }
        this._clauses[0].clean();
    }
}
exports.AdRegSearch = AdRegSearch;
class SearchClause extends qinpel_cps_1.QinLine {
    constructor(dad) {
        super();
        this._qinSame = new SearchSame();
        this._qinField = new qinpel_cps_1.QinCombo();
        this._qinLikes = new SearchCondition();
        this._qinValue = new qinpel_cps_1.QinString();
        this._qinTies = new SearchTie();
        this._qinAdd = new qinpel_cps_1.QinButton({ icon: new qinpel_cps_1.QinIcon(qinpel_cps_1.QinAsset.FacePlus) });
        this._qinDel = new qinpel_cps_1.QinButton({ icon: new qinpel_cps_1.QinIcon(qinpel_cps_1.QinAsset.FaceMinus) });
        this._dad = dad;
        this._qinSame.install(this);
        this._qinField.addItem({ title: "", value: "" });
        this._qinField.install(this);
        this._qinLikes.install(this);
        this._qinValue.install(this);
        this._qinTies.install(this);
        this._qinAdd.install(this);
        this._qinDel.install(this);
        this._qinAdd.addActionMain((_) => {
            this._dad.addClause(this);
        });
        this._qinDel.addActionMain((_) => {
            this._dad.delClause(this);
        });
        this.style.putAsPaddingBottom(4);
        this.style.putAsBorderBottom(2, "#bbb");
        this.style.putAsMarginBottom(4);
    }
    addField(item) {
        this._qinField.addItem(item);
    }
    clean() {
        this._qinSame.value = ad_filter_1.AdFilterSeems.SAME;
        this._qinLikes.value = ad_filter_1.AdFilterLikes.EQUALS;
        this._qinValue.value = null;
        this._qinTies.value = ad_filter_1.AdFilterTies.AND;
    }
    getFilter() {
        let fieldName = this._qinField.value;
        if (!fieldName) {
            return null;
        }
        const field = this._dad.reg.model.getFieldByName(fieldName);
        if (!field) {
            return null;
        }
        return new ad_filter_1.AdFilter({
            seems: this._qinSame.value,
            likes: this._qinLikes.value,
            valued: {
                name: field.typed.alias || field.typed.name,
                type: field.typed.type,
                data: this._qinValue.value,
            },
            ties: this._qinTies.value,
        });
    }
}
class SearchSame extends qinpel_cps_1.QinCombo {
    constructor() {
        super();
        this.addItem({ title: "==", value: ad_filter_1.AdFilterSeems.SAME });
        this.addItem({ title: "!=", value: ad_filter_1.AdFilterSeems.DIVERSE });
        this.style.putAsMaxWidth(64);
    }
}
class SearchCondition extends qinpel_cps_1.QinCombo {
    constructor() {
        super();
        this.addItem({ title: "=", value: ad_filter_1.AdFilterLikes.EQUALS });
        this.addItem({ title: ">", value: ad_filter_1.AdFilterLikes.BIGGER });
        this.addItem({ title: "<", value: ad_filter_1.AdFilterLikes.LESSER });
        this.addItem({ title: ">=", value: ad_filter_1.AdFilterLikes.BIGGER_EQUALS });
        this.addItem({ title: "<=", value: ad_filter_1.AdFilterLikes.LESSER_EQUALS });
        this.addItem({ title: "$_", value: ad_filter_1.AdFilterLikes.STARTS_WITH });
        this.addItem({ title: "_$", value: ad_filter_1.AdFilterLikes.ENDS_WITH });
        this.addItem({ title: "_$_", value: ad_filter_1.AdFilterLikes.CONTAINS });
        this.style.putAsMaxWidth(64);
    }
}
class SearchTie extends qinpel_cps_1.QinCombo {
    constructor() {
        super();
        this.addItem({ title: "&&", value: ad_filter_1.AdFilterTies.AND });
        this.addItem({ title: "||", value: ad_filter_1.AdFilterTies.OR });
        this.style.putAsMaxWidth(64);
    }
}

},{"./ad-filter":4,"qinpel-cps":24}],15:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdRegTable = void 0;
const qinpel_cps_1 = require("qinpel-cps");
class AdRegTable extends qinpel_cps_1.QinTable {
    constructor(register) {
        super({ singleSelection: true });
        this._reg = register;
        this.addOnLineMainAct((row, values) => {
            this._reg.tryTurnNoticeRow(row, values);
        });
    }
}
exports.AdRegTable = AdRegTable;

},{"qinpel-cps":24}],16:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdRegTurn = exports.AdRegView = exports.AdRegMode = exports.AdRegister = void 0;
const qinpel_cps_1 = require("qinpel-cps");
const ad_apprise_1 = require("./ad-apprise");
const ad_filter_1 = require("./ad-filter");
const ad_reg_bar_1 = require("./ad-reg-bar");
const ad_reg_editor_1 = require("./ad-reg-editor");
const ad_reg_loader_1 = require("./ad-reg-loader");
const ad_reg_model_1 = require("./ad-reg-model");
const ad_reg_search_1 = require("./ad-reg-search");
const ad_reg_table_1 = require("./ad-reg-table");
const ad_tools_1 = require("./ad-tools");
class AdRegister extends qinpel_cps_1.QinColumn {
    constructor(module, expect, base) {
        super();
        this._seeRow = -1;
        this._seeValues = null;
        this._listener = new Array();
        this._body = new qinpel_cps_1.QinStack();
        this._viewSingle = new qinpel_cps_1.QinStack();
        this._viewVertical = new qinpel_cps_1.QinSplitter({ horizontal: false });
        this._viewHorizontal = new qinpel_cps_1.QinSplitter({ horizontal: true });
        this._bar = new ad_reg_bar_1.AdRegBar(this);
        this._editor = new ad_reg_editor_1.AdRegEditor(this);
        this._search = new ad_reg_search_1.AdRegSearch(this);
        this._table = new ad_reg_table_1.AdRegTable(this);
        this._loader = new ad_reg_loader_1.AdRegLoader(this);
        this._module = module;
        this._expect = expect;
        this._base = base;
        this._model = new ad_reg_model_1.AdRegModel(this);
        this._viewSingle.style.putAsFlexMax();
        this._viewVertical.style.putAsFlexMax();
        this._viewHorizontal.style.putAsFlexMax();
        this._bar.install(this);
        this._body.stack(this._editor);
        this._body.stack(this._search);
        this.viewVertical();
        this._body.style.putAsFlexMax();
        this._editor.style.putAsFlexMax();
        this._search.style.putAsFlexMax();
        this._table.style.putAsFlexMax();
        this._bar.tabIndex = 0;
        this._body.tabIndex = 1;
        this._table.tabIndex = 2;
    }
    get module() {
        return this._module;
    }
    get base() {
        return this._base;
    }
    get registry() {
        return this._base.registry;
    }
    get expect() {
        return this._expect;
    }
    get model() {
        return this._model;
    }
    get regMode() {
        return this._regMode;
    }
    get regView() {
        return this._regView;
    }
    get bar() {
        return this._bar;
    }
    get editor() {
        return this._editor;
    }
    get search() {
        return this._search;
    }
    get table() {
        return this._table;
    }
    get loader() {
        return this._loader;
    }
    addTab(title) {
        this._editor.addTab(title);
    }
    addLine() {
        this._editor.addLine();
    }
    addField(field) {
        this._model.addField(field);
        this._editor.addField(field);
        this._search.addField(field);
        this._table.addHead(field.title);
    }
    prepare() {
        this._model.clean();
        if (this._expect.scopes.find((scope) => scope === ad_tools_1.AdScope.ALL || scope === ad_tools_1.AdScope.INSERT)) {
            this.tryTurnMode(AdRegMode.INSERT);
        }
        else {
            this.tryTurnMode(AdRegMode.SEARCH);
        }
        if (this._base.joins) {
            this._base.joins.forEach((join) => {
                if (join.filters) {
                    join.filters.forEach((filter) => {
                        if (filter.linked) {
                            let linkedField = this._model.getFieldByName(filter.linked.name);
                            linkedField.addOnChanged((_) => {
                                this.updateJoined(join);
                            });
                        }
                    });
                }
            });
        }
    }
    updateJoined(joined) {
        var _a, _b;
        let source = (_b = (_a = joined.alias) !== null && _a !== void 0 ? _a : joined.registry.alias) !== null && _b !== void 0 ? _b : joined.registry.name;
        let toUpdate = [];
        for (let field of this._model.fields) {
            if (field.source === source) {
                toUpdate.push(field);
            }
        }
        if (toUpdate.length == 0)
            return;
        let registry = joined.alias ? Object.assign(Object.assign({}, joined.registry), { alias: joined.alias }) : joined.registry;
        let fields = [];
        for (let field of toUpdate) {
            fields.push(field.typed);
        }
        let filters = [];
        if (joined.filters) {
            for (let filter of joined.filters) {
                if (filter.linked) {
                    let fromField = this._model.getFieldByName(filter.linked.name);
                    let thisFilter = new ad_filter_1.AdFilter({
                        seems: ad_filter_1.AdFilterSeems.SAME,
                        likes: ad_filter_1.AdFilterLikes.EQUALS,
                        valued: {
                            name: filter.linked.with,
                            type: fromField.typed.type,
                            data: fromField.valued.data,
                        },
                        ties: ad_filter_1.AdFilterTies.AND,
                    });
                    filters.push(thisFilter);
                }
                else {
                    filters.push(filter);
                }
            }
        }
        let select = { registry, fields, joins: null, filters, orders: null, limit: 1 };
        this.qinpel.talk
            .post("/reg/ask", select)
            .then((res) => {
            let rows = this.qinpel.our.soul.body.getCSVRows(res.data);
            if (rows.length > 0) {
                let row = rows[0];
                for (let i = 0; i < toUpdate.length; i++) {
                    toUpdate[i].value = row[i];
                }
            }
        })
            .catch((err) => {
            this.displayError(err, "{adcommon}(ErrCode-000013)");
        });
    }
    tryTurnInsert() {
        return new Promise((resolve, reject) => {
            this.tryTurnMode(AdRegMode.INSERT)
                .then(() => {
                this._model.clean();
                resolve({});
            })
                .catch((err) => reject(err));
        });
    }
    tryTurnSearch() {
        return new Promise((resolve, reject) => {
            this.tryTurnMode(AdRegMode.SEARCH)
                .then(() => {
                resolve({});
            })
                .catch((err) => reject(err));
        });
    }
    tryTurnNotice() {
        return new Promise((resolve, reject) => {
            if (!this.isSeeRowValid()) {
                reject({ why: "There's no valid row selected to notice." });
                return;
            }
            this.tryTurnMode(AdRegMode.NOTICE)
                .then(() => {
                let turningNotice = {
                    oldRow: this._seeRow,
                    newRow: this._seeRow,
                };
                let canceledNotice = this.callTryListeners(AdRegTurn.TURN_NOTICE, turningNotice);
                if (canceledNotice) {
                    reject(canceledNotice);
                }
                this.setRowAndValues(this._seeRow, this._seeValues);
                this.callDidListeners(AdRegTurn.TURN_NOTICE, turningNotice);
                resolve(turningNotice);
            })
                .catch((err) => {
                reject(err);
            });
        });
    }
    tryTurnNoticeRow(row, values) {
        return new Promise((resolve, reject) => {
            this.tryTurnMode(AdRegMode.NOTICE)
                .then(() => {
                let turningNotice = {
                    oldRow: this._seeRow,
                    newRow: row,
                };
                let canceledNotice = this.callTryListeners(AdRegTurn.TURN_NOTICE, turningNotice);
                if (canceledNotice) {
                    reject(canceledNotice);
                }
                this.setRowAndValues(row, values);
                this.callDidListeners(AdRegTurn.TURN_NOTICE, turningNotice);
                resolve(turningNotice);
            })
                .catch((err) => {
                reject(err);
            });
        });
    }
    tryTurnMutate() {
        return new Promise((resolve, reject) => {
            if (!this.isSeeRowValid()) {
                reject({ why: "There's no valid row selected to mutate." });
                return;
            }
            this.tryTurnMode(AdRegMode.MUTATE)
                .then(() => { })
                .catch((err) => reject(err));
        });
    }
    tryTurnMode(mode) {
        return new Promise((resolve, reject) => {
            this.checkForMutations()
                .then(() => {
                let turning = {
                    oldMode: this._regMode,
                    newMode: mode,
                };
                let canceled = this.callTryListeners(AdRegTurn.TURN_MODE, turning);
                if (canceled) {
                    reject(canceled);
                }
                this.turnMode(mode);
                this.callDidListeners(AdRegTurn.TURN_MODE, turning);
                resolve(turning);
            })
                .catch((err) => {
                reject(err);
            });
        });
    }
    isSeeRowValid() {
        return this._seeRow >= 0 && this._seeRow < this._table.getLinesSize();
    }
    setRowAndValues(row, values) {
        for (let i = 0; i < values.length; i++) {
            this._model.setValue(i, values[i]);
        }
        this._seeRow = row;
        this._seeValues = values;
        this._table.select(row);
        this._table.scrollTo(row);
    }
    isThereAnyRowSelected() {
        return this._seeRow > -1;
    }
    turnMode(mode) {
        if (mode === AdRegMode.SEARCH) {
            this._body.show(this._search);
        }
        else {
            this._body.show(this._editor);
        }
        if (mode === AdRegMode.NOTICE) {
            this._model.turnReadOnly();
        }
        else {
            this._model.turnEditable();
        }
        this._regMode = mode;
    }
    unselectAll() {
        return new Promise((resolve, reject) => {
            this.checkForMutations()
                .then(() => {
                this._seeRow = -1;
                this._table.unselectAll();
                this._model.clean();
                resolve();
            })
                .catch((err) => {
                reject(err);
            });
        });
    }
    tryGoFirst() {
        if (this._table.getLinesSize() > 0) {
            let values = this._table.getLine(0);
            this.tryTurnNoticeRow(0, values);
        }
    }
    tryGoPrior() {
        let size = this._table.getLinesSize();
        let attempt = this._seeRow - 1;
        if (attempt >= 0 && attempt < size) {
            let values = this._table.getLine(attempt);
            this.tryTurnNoticeRow(attempt, values);
        }
    }
    tryGoNext() {
        let size = this._table.getLinesSize();
        let attempt = this._seeRow + 1;
        if (attempt < size) {
            let values = this._table.getLine(attempt);
            this.tryTurnNoticeRow(attempt, values);
        }
    }
    tryGoLast() {
        let size = this._table.getLinesSize();
        if (size > 0) {
            let values = this._table.getLine(size - 1);
            this.tryTurnNoticeRow(size - 1, values);
        }
    }
    tryConfirm() {
        if (this.regMode === AdRegMode.SEARCH) {
            return this.trySelect();
        }
        else if (this.regMode === AdRegMode.INSERT) {
            return this.tryInsert();
        }
        else if (this.regMode === AdRegMode.MUTATE) {
            return this.tryUpdate();
        }
    }
    trySelect() {
        return this.loader.load();
    }
    tryInsert() {
        return new Promise((resolve, reject) => {
            this.model
                .insert()
                .then((res) => {
                this._model.clean();
                this.focusFirstField();
                this.displayInfo(ad_apprise_1.AdApprise.INSERTED_REGISTER, "{adcommon}(ErrCode-000009)");
                let values = res.map((valued) => valued.data);
                this._table.addLine(values);
                resolve();
            })
                .catch((err) => {
                reject(err);
            });
        });
    }
    tryUpdate() {
        return new Promise((resolve, reject) => {
            this.model
                .update()
                .then((res) => {
                this.focusFirstField();
                this.displayInfo(ad_apprise_1.AdApprise.UPDATED_REGISTER, "{adcommon}(ErrCode-000010)");
                let values = res.map((valued) => valued.data);
                this._table.setLine(this._seeRow, values);
                this.tryTurnMode(AdRegMode.NOTICE);
                resolve();
            })
                .catch((err) => {
                reject(err);
            });
        });
    }
    tryCancel() {
        if (this.regMode === AdRegMode.INSERT) {
            this.checkForMutations().then((_) => this._model.clean());
        }
        else if (this.regMode === AdRegMode.SEARCH) {
            this._search.clean();
        }
        else if (this.regMode === AdRegMode.MUTATE) {
            this.tryTurnMode(AdRegMode.NOTICE);
        }
    }
    tryDelete() {
        return new Promise((resolve, reject) => {
            this.checkForMutations()
                .then(() => {
                if (!this.isThereAnyRowSelected()) {
                    reject({ why: "No selected row to delete" });
                    return;
                }
                this.qinpel.jobbed
                    .showDialog("Do you really want to delete?")
                    .then((want) => {
                    if (want) {
                        let turning = {
                            seeRow: this._seeRow,
                        };
                        let canceled = this.callTryListeners(AdRegTurn.TURN_DELETE, turning);
                        if (canceled) {
                            reject(canceled);
                        }
                        this._model
                            .delete()
                            .then(() => {
                            this._table.delLine(this._seeRow);
                            this.callDidListeners(AdRegTurn.TURN_DELETE, turning);
                            this.tryTurnMode(AdRegMode.INSERT);
                            resolve(turning);
                        })
                            .catch((err) => {
                            reject(err);
                        });
                    }
                })
                    .catch((err) => {
                    reject(err);
                });
            })
                .catch((err) => {
                reject(err);
            });
        });
    }
    checkForMutations() {
        return new Promise((resolve, reject) => {
            const mutations = this._model.hasMutations();
            if (mutations) {
                let message = "There are mutations on:\n" + mutations.join(", ") + "\nShould we continue?";
                this.qinpel.jobbed.showDialog(message).then((confirmed) => {
                    if (confirmed) {
                        resolve();
                    }
                    else {
                        reject(ad_apprise_1.AdApprise.CANCELED_BY_MUTATIONS);
                    }
                });
            }
            else {
                resolve();
            }
        });
    }
    displayInfo(info, origin) {
        if (info instanceof ad_apprise_1.AdApprised) {
            if (info.popup) {
                this.qinpel.jobbed.showInfo(info, origin);
            }
        }
        this.qinpel.jobbed.statusInfo(info, origin);
    }
    displayError(error, origin) {
        if (error instanceof ad_apprise_1.AdApprised) {
            if (error.popup) {
                this.qinpel.jobbed.showError(error, origin);
            }
        }
        else {
            this.qinpel.jobbed.showError(error, origin);
        }
        this.qinpel.jobbed.statusError(error, origin);
    }
    viewSingle() {
        this._viewVertical.unInstall();
        this._viewHorizontal.unInstall();
        this._viewSingle.install(this);
        this._body.install(this._viewSingle);
        this._table.install(this._viewSingle);
        if (this._regMode === AdRegMode.SEARCH) {
            this._viewSingle.show(this._table);
        }
        else {
            this._viewSingle.show(this._body);
        }
        this._regView = AdRegView.SINGLE;
        this.callDidListeners(AdRegTurn.TURN_VIEW, { newValue: this._regView });
    }
    viewVertical() {
        this._viewSingle.unInstall();
        this._viewHorizontal.unInstall();
        this._viewVertical.install(this);
        this._body.install(this._viewVertical);
        this._table.install(this._viewVertical);
        this._body.reDisplay();
        this._table.reDisplay();
        this._regView = AdRegView.VERTICAL;
        this.callDidListeners(AdRegTurn.TURN_VIEW, { newValue: this._regView });
    }
    viewHorizontal() {
        this._viewSingle.unInstall();
        this._viewVertical.unInstall();
        this._viewHorizontal.install(this);
        this._body.install(this._viewHorizontal);
        this._table.install(this._viewHorizontal);
        this._body.reDisplay();
        this._table.reDisplay();
        this._regView = AdRegView.HORIZONTAL;
        this.callDidListeners(AdRegTurn.TURN_VIEW, { newValue: this._regView });
    }
    addListener(listener) {
        this._listener.push(listener);
    }
    delListener(listener) {
        var index = this._listener.indexOf(listener);
        if (index >= 0) {
            this._listener.splice(index, 1);
        }
    }
    callTryListeners(event, valued) {
        this._listener.forEach((listen) => {
            if (listen.event === event) {
                if (listen.onTry) {
                    let cancel = listen.onTry(valued);
                    if (cancel) {
                        return cancel;
                    }
                }
            }
        });
        return null;
    }
    callDidListeners(event, mutation) {
        this._listener.forEach((listen) => {
            if (listen.event === event) {
                if (listen.onDid) {
                    listen.onDid(mutation);
                }
            }
        });
    }
    focusFirstField() {
        if (this.model.fields.length > 0) {
            this.model.fields[0].focus();
        }
    }
    focusBody() {
        if (this._regView == AdRegView.SINGLE) {
            this._viewSingle.show(this._body);
        }
        this._body.focus();
    }
    focusTable() {
        if (this._regView == AdRegView.SINGLE) {
            this._viewSingle.show(this._table);
        }
        this._table.focus();
    }
}
exports.AdRegister = AdRegister;
var AdRegMode;
(function (AdRegMode) {
    AdRegMode["INSERT"] = "INSERT";
    AdRegMode["SEARCH"] = "SEARCH";
    AdRegMode["MUTATE"] = "MUTATE";
    AdRegMode["NOTICE"] = "NOTICE";
})(AdRegMode = exports.AdRegMode || (exports.AdRegMode = {}));
var AdRegView;
(function (AdRegView) {
    AdRegView["SINGLE"] = "SINGLE";
    AdRegView["VERTICAL"] = "VERTICAL";
    AdRegView["HORIZONTAL"] = "HORIZONTAL";
})(AdRegView = exports.AdRegView || (exports.AdRegView = {}));
var AdRegTurn;
(function (AdRegTurn) {
    AdRegTurn["TURN_VIEW"] = "TURN_VIEW";
    AdRegTurn["TURN_MODE"] = "TURN_MODE";
    AdRegTurn["TURN_INSERT"] = "TURN_INSERT";
    AdRegTurn["TURN_NOTICE"] = "TURN_NOTICE";
    AdRegTurn["TURN_MUTATE"] = "TURN_MUTATE";
    AdRegTurn["TURN_DELETE"] = "TURN_DELETE";
})(AdRegTurn = exports.AdRegTurn || (exports.AdRegTurn = {}));

},{"./ad-apprise":1,"./ad-filter":4,"./ad-reg-bar":9,"./ad-reg-editor":11,"./ad-reg-loader":12,"./ad-reg-model":13,"./ad-reg-search":14,"./ad-reg-table":15,"./ad-tools":17,"qinpel-cps":24}],17:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdTools = exports.AdScope = void 0;
const ad_names_1 = require("./ad-names");
var AdScope;
(function (AdScope) {
    AdScope["ALL"] = "all";
    AdScope["INSERT"] = "insert";
    AdScope["SEARCH"] = "search";
    AdScope["MUTATE"] = "mutate";
    AdScope["DELETE"] = "delete";
})(AdScope = exports.AdScope || (exports.AdScope = {}));
function isSameModule(one, two) {
    return (one === null || one === void 0 ? void 0 : one.app) == (two === null || two === void 0 ? void 0 : two.app) && (one === null || one === void 0 ? void 0 : one.title) == (two === null || two === void 0 ? void 0 : two.title);
}
function newAdSetup(module, scopes, filters) {
    return {
        module,
        scopes,
        filters,
    };
}
function newAdSetupOption(module, scopes, filters) {
    let result = {};
    result[ad_names_1.AdNames.AdSetup] = newAdSetup(module, scopes, filters);
    return result;
}
exports.AdTools = {
    isSameModule,
    newAdSetup,
    newAdSetupOption,
};

},{"./ad-names":8}],18:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdTools = exports.AdScope = exports.AdRegTurn = exports.AdRegView = exports.AdRegMode = exports.AdRegister = exports.AdRegTable = exports.AdRegSearch = exports.AdRegModel = exports.AdRegLoader = exports.AdRegEditor = exports.AdRegBase = exports.AdRegBar = exports.AdNames = exports.AdModules = exports.menuStartUp = exports.AdMenu = exports.AdJoinedTies = exports.AdFilterTies = exports.AdFilterLikes = exports.AdFilterSeems = exports.AdFilter = exports.AdField = exports.AdExpect = exports.AdApprise = exports.AdApprised = void 0;
var ad_apprise_1 = require("./ad-apprise");
Object.defineProperty(exports, "AdApprised", { enumerable: true, get: function () { return ad_apprise_1.AdApprised; } });
var ad_apprise_2 = require("./ad-apprise");
Object.defineProperty(exports, "AdApprise", { enumerable: true, get: function () { return ad_apprise_2.AdApprise; } });
var ad_expect_1 = require("./ad-expect");
Object.defineProperty(exports, "AdExpect", { enumerable: true, get: function () { return ad_expect_1.AdExpect; } });
var ad_field_1 = require("./ad-field");
Object.defineProperty(exports, "AdField", { enumerable: true, get: function () { return ad_field_1.AdField; } });
var ad_filter_1 = require("./ad-filter");
Object.defineProperty(exports, "AdFilter", { enumerable: true, get: function () { return ad_filter_1.AdFilter; } });
var ad_filter_2 = require("./ad-filter");
Object.defineProperty(exports, "AdFilterSeems", { enumerable: true, get: function () { return ad_filter_2.AdFilterSeems; } });
var ad_filter_3 = require("./ad-filter");
Object.defineProperty(exports, "AdFilterLikes", { enumerable: true, get: function () { return ad_filter_3.AdFilterLikes; } });
var ad_filter_4 = require("./ad-filter");
Object.defineProperty(exports, "AdFilterTies", { enumerable: true, get: function () { return ad_filter_4.AdFilterTies; } });
var ad_joined_1 = require("./ad-joined");
Object.defineProperty(exports, "AdJoinedTies", { enumerable: true, get: function () { return ad_joined_1.AdJoinedTies; } });
var ad_menu_1 = require("./ad-menu");
Object.defineProperty(exports, "AdMenu", { enumerable: true, get: function () { return ad_menu_1.AdMenu; } });
var ad_menu_2 = require("./ad-menu");
Object.defineProperty(exports, "menuStartUp", { enumerable: true, get: function () { return ad_menu_2.menuStartUp; } });
var ad_modules_1 = require("./ad-modules");
Object.defineProperty(exports, "AdModules", { enumerable: true, get: function () { return ad_modules_1.AdModules; } });
var ad_names_1 = require("./ad-names");
Object.defineProperty(exports, "AdNames", { enumerable: true, get: function () { return ad_names_1.AdNames; } });
var ad_reg_bar_1 = require("./ad-reg-bar");
Object.defineProperty(exports, "AdRegBar", { enumerable: true, get: function () { return ad_reg_bar_1.AdRegBar; } });
var ad_reg_base_1 = require("./ad-reg-base");
Object.defineProperty(exports, "AdRegBase", { enumerable: true, get: function () { return ad_reg_base_1.AdRegBase; } });
var ad_reg_editor_1 = require("./ad-reg-editor");
Object.defineProperty(exports, "AdRegEditor", { enumerable: true, get: function () { return ad_reg_editor_1.AdRegEditor; } });
var ad_reg_loader_1 = require("./ad-reg-loader");
Object.defineProperty(exports, "AdRegLoader", { enumerable: true, get: function () { return ad_reg_loader_1.AdRegLoader; } });
var ad_reg_model_1 = require("./ad-reg-model");
Object.defineProperty(exports, "AdRegModel", { enumerable: true, get: function () { return ad_reg_model_1.AdRegModel; } });
var ad_reg_search_1 = require("./ad-reg-search");
Object.defineProperty(exports, "AdRegSearch", { enumerable: true, get: function () { return ad_reg_search_1.AdRegSearch; } });
var ad_reg_table_1 = require("./ad-reg-table");
Object.defineProperty(exports, "AdRegTable", { enumerable: true, get: function () { return ad_reg_table_1.AdRegTable; } });
var ad_register_1 = require("./ad-register");
Object.defineProperty(exports, "AdRegister", { enumerable: true, get: function () { return ad_register_1.AdRegister; } });
var ad_register_2 = require("./ad-register");
Object.defineProperty(exports, "AdRegMode", { enumerable: true, get: function () { return ad_register_2.AdRegMode; } });
var ad_register_3 = require("./ad-register");
Object.defineProperty(exports, "AdRegView", { enumerable: true, get: function () { return ad_register_3.AdRegView; } });
var ad_register_4 = require("./ad-register");
Object.defineProperty(exports, "AdRegTurn", { enumerable: true, get: function () { return ad_register_4.AdRegTurn; } });
var ad_tools_1 = require("./ad-tools");
Object.defineProperty(exports, "AdScope", { enumerable: true, get: function () { return ad_tools_1.AdScope; } });
var ad_tools_2 = require("./ad-tools");
Object.defineProperty(exports, "AdTools", { enumerable: true, get: function () { return ad_tools_2.AdTools; } });

},{"./ad-apprise":1,"./ad-expect":2,"./ad-field":3,"./ad-filter":4,"./ad-joined":5,"./ad-menu":6,"./ad-modules":7,"./ad-names":8,"./ad-reg-bar":9,"./ad-reg-base":10,"./ad-reg-editor":11,"./ad-reg-loader":12,"./ad-reg-model":13,"./ad-reg-search":14,"./ad-reg-table":15,"./ad-register":16,"./ad-tools":17}],19:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdNation = exports.register = exports.registry = void 0;
const adcommon_1 = require("adcommon");
const qinpel_cps_1 = require("qinpel-cps");
const base = qinpel_cps_1.QinTool.qinpel.chief.loadConfig(qinpel_cps_1.QinTool.qinpel.our.names.QinBaseSelected);
exports.registry = { base, name: "paises" };
exports.register = {
    registry: exports.registry,
};
class AdNation extends adcommon_1.AdRegister {
    constructor(module, expect) {
        super(module, expect, exports.register);
        this.addField(new adcommon_1.AdField({
            key: true,
            name: "codigo",
            title: "Código",
            kind: qinpel_cps_1.QinMutants.STRING,
            options: {
                maxLength: 4,
            },
        }));
        this.addField(new adcommon_1.AdField({
            name: "ativo",
            title: "Ativo",
            kind: qinpel_cps_1.QinMutants.COMBO,
            options: {
                items: [
                    {
                        title: "",
                        value: "",
                    },
                    {
                        title: "Sim",
                        value: "S",
                    },
                    {
                        title: "Não",
                        value: "N",
                    },
                ],
            },
        }));
        this.addField(new adcommon_1.AdField({
            name: "nome",
            title: "Nome",
            kind: qinpel_cps_1.QinMutants.STRING,
            options: {
                maxLength: 60,
            },
        }));
        this.prepare();
    }
}
exports.AdNation = AdNation;

},{"adcommon":18,"qinpel-cps":24}],20:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdPeopleGroup = exports.register = exports.registry = void 0;
const adcommon_1 = require("adcommon");
const qinpel_cps_1 = require("qinpel-cps");
const base = qinpel_cps_1.QinTool.qinpel.chief.loadConfig(qinpel_cps_1.QinTool.qinpel.our.names.QinBaseSelected);
exports.registry = { base, name: "grupos_pessoas" };
exports.register = {
    registry: exports.registry,
};
class AdPeopleGroup extends adcommon_1.AdRegister {
    constructor(module, expect) {
        super(module, expect, exports.register);
        this.addField(new adcommon_1.AdField({
            key: true,
            name: "codigo",
            title: "Código",
            kind: qinpel_cps_1.QinMutants.STRING,
            options: {
                maxLength: 4,
            },
        }));
        this.addField(new adcommon_1.AdField({
            name: "ativo",
            title: "Ativo",
            kind: qinpel_cps_1.QinMutants.COMBO,
            options: {
                items: [
                    {
                        title: "",
                        value: "",
                    },
                    {
                        title: "Sim",
                        value: "S",
                    },
                    {
                        title: "Não",
                        value: "N",
                    },
                ],
            },
        }));
        this.addField(new adcommon_1.AdField({
            name: "nome",
            title: "Nome",
            kind: qinpel_cps_1.QinMutants.STRING,
            options: {
                maxLength: 60,
            },
        }));
        this.prepare();
    }
}
exports.AdPeopleGroup = AdPeopleGroup;

},{"adcommon":18,"qinpel-cps":24}],21:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdPeopleSubGroup = void 0;
const adcommon_1 = require("adcommon");
const qinpel_cps_1 = require("qinpel-cps");
const ad_people_group_1 = require("./ad-people-group");
const base = qinpel_cps_1.QinTool.qinpel.chief.loadConfig(qinpel_cps_1.QinTool.qinpel.our.names.QinBaseSelected);
const registry = {
    base,
    name: "subgrupos_pessoas",
};
const register = {
    registry,
    joins: [
        {
            registry: ad_people_group_1.registry,
            alias: "people_group",
            filters: [
                new adcommon_1.AdFilter({
                    linked: { name: "grupo", with: "codigo" },
                }),
            ],
        },
    ],
};
class AdPeopleSubGroup extends adcommon_1.AdRegister {
    constructor(module, expect) {
        super(module, expect, register);
        this.addField(new adcommon_1.AdField({
            key: true,
            name: "grupo",
            title: "Grupo - Cód.",
            kind: qinpel_cps_1.QinMutants.STRING,
            options: {
                maxLength: 4,
            },
        }));
        this.addField(new adcommon_1.AdField({
            key: true,
            name: "people_group.nome",
            title: "Grupo - Nome",
            kind: qinpel_cps_1.QinMutants.STRING,
            options: {
                maxLength: 60,
            },
        }));
        this.addField(new adcommon_1.AdField({
            key: true,
            name: "codigo",
            title: "Código",
            kind: qinpel_cps_1.QinMutants.STRING,
            options: {
                maxLength: 4,
            },
        }));
        this.addField(new adcommon_1.AdField({
            name: "ativo",
            title: "Ativo",
            kind: qinpel_cps_1.QinMutants.COMBO,
            options: {
                items: [
                    {
                        title: "",
                        value: "",
                    },
                    {
                        title: "Sim",
                        value: "S",
                    },
                    {
                        title: "Não",
                        value: "N",
                    },
                ],
            },
        }));
        this.addField(new adcommon_1.AdField({
            name: "nome",
            title: "Nome",
            kind: qinpel_cps_1.QinMutants.STRING,
            options: {
                maxLength: 60,
            },
        }));
        this.prepare();
    }
}
exports.AdPeopleSubGroup = AdPeopleSubGroup;

},{"./ad-people-group":20,"adcommon":18,"qinpel-cps":24}],22:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdRegion = exports.register = exports.registry = void 0;
const adcommon_1 = require("adcommon");
const qinpel_cps_1 = require("qinpel-cps");
const base = qinpel_cps_1.QinTool.qinpel.chief.loadConfig(qinpel_cps_1.QinTool.qinpel.our.names.QinBaseSelected);
exports.registry = { base, name: "regioes" };
exports.register = {
    registry: exports.registry,
};
class AdRegion extends adcommon_1.AdRegister {
    constructor(module, expect) {
        super(module, expect, exports.register);
        this.addField(new adcommon_1.AdField({
            key: true,
            name: "codigo",
            title: "Código",
            kind: qinpel_cps_1.QinMutants.STRING,
            options: {
                maxLength: 4,
            },
        }));
        this.addField(new adcommon_1.AdField({
            name: "ativo",
            title: "Ativo",
            kind: qinpel_cps_1.QinMutants.COMBO,
            options: {
                items: [
                    {
                        title: "",
                        value: "",
                    },
                    {
                        title: "Sim",
                        value: "S",
                    },
                    {
                        title: "Não",
                        value: "N",
                    },
                ],
            },
        }));
        this.addField(new adcommon_1.AdField({
            name: "nome",
            title: "Nome",
            kind: qinpel_cps_1.QinMutants.STRING,
            options: {
                maxLength: 60,
            },
        }));
        this.prepare();
    }
}
exports.AdRegion = AdRegion;

},{"adcommon":18,"qinpel-cps":24}],23:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const adcommon_1 = require("adcommon");
const ad_nation_1 = require("./ad-nation");
const ad_people_group_1 = require("./ad-people-group");
const ad_people_subgroup_1 = require("./ad-people-subgroup");
const ad_region_1 = require("./ad-region");
const items = [
    { module: adcommon_1.AdModules.REGION, register: ad_region_1.AdRegion },
    { module: adcommon_1.AdModules.NATION, register: ad_nation_1.AdNation },
    { module: adcommon_1.AdModules.PEOPLE_GROUP, register: ad_people_group_1.AdPeopleGroup },
    { module: adcommon_1.AdModules.PEOPLE_SUBGROUP, register: ad_people_subgroup_1.AdPeopleSubGroup },
];
(0, adcommon_1.menuStartUp)(items).style.putAsBody();

},{"./ad-nation":19,"./ad-people-group":20,"./ad-people-subgroup":21,"./ad-region":22,"adcommon":18}],24:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinTool = exports.QinTitled = exports.QinTabs = exports.QinTable = exports.QinString = exports.QinStack = exports.QinSplitter = exports.QinSpacer = exports.QinScroll = exports.QinRow = exports.QinPopup = exports.QinPanel = exports.QinMutantsArm = exports.QinMutants = exports.QinLine = exports.QinLabel = exports.QinInteger = exports.QinIcon = exports.QinIconPick = exports.QinIconCell = exports.QinFileView = exports.QinFilePick = exports.QinFilePath = exports.QinField = exports.QinEdit = exports.QinDivider = exports.QinCombo = exports.QinColumn = exports.QinButton = exports.QinBoolean = exports.QinBase = exports.QinBaseStyle = exports.qinUrlAsset = exports.qinAssetUrl = exports.QinAsset = void 0;
var qin_assets_1 = require("./qin-assets");
Object.defineProperty(exports, "QinAsset", { enumerable: true, get: function () { return qin_assets_1.QinAsset; } });
var qin_assets_2 = require("./qin-assets");
Object.defineProperty(exports, "qinAssetUrl", { enumerable: true, get: function () { return qin_assets_2.qinAssetUrl; } });
var qin_assets_3 = require("./qin-assets");
Object.defineProperty(exports, "qinUrlAsset", { enumerable: true, get: function () { return qin_assets_3.qinUrlAsset; } });
var qin_base_style_1 = require("./qin-base-style");
Object.defineProperty(exports, "QinBaseStyle", { enumerable: true, get: function () { return qin_base_style_1.QinBaseStyle; } });
var qin_base_1 = require("./qin-base");
Object.defineProperty(exports, "QinBase", { enumerable: true, get: function () { return qin_base_1.QinBase; } });
var qin_boolean_1 = require("./qin-boolean");
Object.defineProperty(exports, "QinBoolean", { enumerable: true, get: function () { return qin_boolean_1.QinBoolean; } });
var qin_button_1 = require("./qin-button");
Object.defineProperty(exports, "QinButton", { enumerable: true, get: function () { return qin_button_1.QinButton; } });
var qin_column_1 = require("./qin-column");
Object.defineProperty(exports, "QinColumn", { enumerable: true, get: function () { return qin_column_1.QinColumn; } });
var qin_combo_1 = require("./qin-combo");
Object.defineProperty(exports, "QinCombo", { enumerable: true, get: function () { return qin_combo_1.QinCombo; } });
var qin_divider_1 = require("./qin-divider");
Object.defineProperty(exports, "QinDivider", { enumerable: true, get: function () { return qin_divider_1.QinDivider; } });
var qin_edit_1 = require("./qin-edit");
Object.defineProperty(exports, "QinEdit", { enumerable: true, get: function () { return qin_edit_1.QinEdit; } });
var qin_field_1 = require("./qin-field");
Object.defineProperty(exports, "QinField", { enumerable: true, get: function () { return qin_field_1.QinField; } });
var qin_file_path_1 = require("./qin-file-path");
Object.defineProperty(exports, "QinFilePath", { enumerable: true, get: function () { return qin_file_path_1.QinFilePath; } });
var qin_file_pick_1 = require("./qin-file-pick");
Object.defineProperty(exports, "QinFilePick", { enumerable: true, get: function () { return qin_file_pick_1.QinFilePick; } });
var qin_file_view_1 = require("./qin-file-view");
Object.defineProperty(exports, "QinFileView", { enumerable: true, get: function () { return qin_file_view_1.QinFileView; } });
var qin_icon_cell_1 = require("./qin-icon-cell");
Object.defineProperty(exports, "QinIconCell", { enumerable: true, get: function () { return qin_icon_cell_1.QinIconCell; } });
var qin_icon_pick_1 = require("./qin-icon-pick");
Object.defineProperty(exports, "QinIconPick", { enumerable: true, get: function () { return qin_icon_pick_1.QinIconPick; } });
var qin_icon_1 = require("./qin-icon");
Object.defineProperty(exports, "QinIcon", { enumerable: true, get: function () { return qin_icon_1.QinIcon; } });
var qin_integer_1 = require("./qin-integer");
Object.defineProperty(exports, "QinInteger", { enumerable: true, get: function () { return qin_integer_1.QinInteger; } });
var qin_label_1 = require("./qin-label");
Object.defineProperty(exports, "QinLabel", { enumerable: true, get: function () { return qin_label_1.QinLabel; } });
var qin_line_1 = require("./qin-line");
Object.defineProperty(exports, "QinLine", { enumerable: true, get: function () { return qin_line_1.QinLine; } });
var qin_mutants_1 = require("./qin-mutants");
Object.defineProperty(exports, "QinMutants", { enumerable: true, get: function () { return qin_mutants_1.QinMutants; } });
var qin_mutants_2 = require("./qin-mutants");
Object.defineProperty(exports, "QinMutantsArm", { enumerable: true, get: function () { return qin_mutants_2.QinMutantsArm; } });
var qin_panel_1 = require("./qin-panel");
Object.defineProperty(exports, "QinPanel", { enumerable: true, get: function () { return qin_panel_1.QinPanel; } });
var qin_popup_1 = require("./qin-popup");
Object.defineProperty(exports, "QinPopup", { enumerable: true, get: function () { return qin_popup_1.QinPopup; } });
var qin_row_1 = require("./qin-row");
Object.defineProperty(exports, "QinRow", { enumerable: true, get: function () { return qin_row_1.QinRow; } });
var qin_scroll_1 = require("./qin-scroll");
Object.defineProperty(exports, "QinScroll", { enumerable: true, get: function () { return qin_scroll_1.QinScroll; } });
var qin_spacer_1 = require("./qin-spacer");
Object.defineProperty(exports, "QinSpacer", { enumerable: true, get: function () { return qin_spacer_1.QinSpacer; } });
var qin_splitter_1 = require("./qin-splitter");
Object.defineProperty(exports, "QinSplitter", { enumerable: true, get: function () { return qin_splitter_1.QinSplitter; } });
var qin_stack_1 = require("./qin-stack");
Object.defineProperty(exports, "QinStack", { enumerable: true, get: function () { return qin_stack_1.QinStack; } });
var qin_string_1 = require("./qin-string");
Object.defineProperty(exports, "QinString", { enumerable: true, get: function () { return qin_string_1.QinString; } });
var qin_table_1 = require("./qin-table");
Object.defineProperty(exports, "QinTable", { enumerable: true, get: function () { return qin_table_1.QinTable; } });
var qin_tabs_1 = require("./qin-tabs");
Object.defineProperty(exports, "QinTabs", { enumerable: true, get: function () { return qin_tabs_1.QinTabs; } });
var qin_titled_1 = require("./qin-titled");
Object.defineProperty(exports, "QinTitled", { enumerable: true, get: function () { return qin_titled_1.QinTitled; } });
var qin_tool_1 = require("./qin-tool");
Object.defineProperty(exports, "QinTool", { enumerable: true, get: function () { return qin_tool_1.QinTool; } });

},{"./qin-assets":25,"./qin-base":27,"./qin-base-style":26,"./qin-boolean":28,"./qin-button":29,"./qin-column":30,"./qin-combo":31,"./qin-divider":32,"./qin-edit":33,"./qin-field":34,"./qin-file-path":35,"./qin-file-pick":36,"./qin-file-view":37,"./qin-icon":40,"./qin-icon-cell":38,"./qin-icon-pick":39,"./qin-integer":41,"./qin-label":42,"./qin-line":43,"./qin-mutants":44,"./qin-panel":45,"./qin-popup":46,"./qin-row":47,"./qin-scroll":48,"./qin-spacer":49,"./qin-splitter":50,"./qin-stack":51,"./qin-string":52,"./qin-table":53,"./qin-tabs":54,"./qin-titled":55,"./qin-tool":56}],25:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.qinUrlAsset = exports.qinAssetUrl = exports.QinAsset = void 0;
var QinAsset;
(function (QinAsset) {
    QinAsset["BackgroundDark0"] = "background-dark-0.png";
    QinAsset["BackgroundDark1"] = "background-dark-1.png";
    QinAsset["BackgroundDark10"] = "background-dark-10.png";
    QinAsset["BackgroundDark11"] = "background-dark-11.png";
    QinAsset["BackgroundDark12"] = "background-dark-12.png";
    QinAsset["BackgroundDark13"] = "background-dark-13.png";
    QinAsset["BackgroundDark14"] = "background-dark-14.png";
    QinAsset["BackgroundDark15"] = "background-dark-15.png";
    QinAsset["BackgroundDark16"] = "background-dark-16.png";
    QinAsset["BackgroundDark17"] = "background-dark-17.png";
    QinAsset["BackgroundDark18"] = "background-dark-18.png";
    QinAsset["BackgroundDark19"] = "background-dark-19.png";
    QinAsset["BackgroundDark2"] = "background-dark-2.png";
    QinAsset["BackgroundDark20"] = "background-dark-20.png";
    QinAsset["BackgroundDark21"] = "background-dark-21.png";
    QinAsset["BackgroundDark22"] = "background-dark-22.png";
    QinAsset["BackgroundDark23"] = "background-dark-23.png";
    QinAsset["BackgroundDark24"] = "background-dark-24.png";
    QinAsset["BackgroundDark25"] = "background-dark-25.png";
    QinAsset["BackgroundDark26"] = "background-dark-26.png";
    QinAsset["BackgroundDark27"] = "background-dark-27.png";
    QinAsset["BackgroundDark28"] = "background-dark-28.png";
    QinAsset["BackgroundDark29"] = "background-dark-29.png";
    QinAsset["BackgroundDark3"] = "background-dark-3.png";
    QinAsset["BackgroundDark4"] = "background-dark-4.png";
    QinAsset["BackgroundDark5"] = "background-dark-5.png";
    QinAsset["BackgroundDark6"] = "background-dark-6.png";
    QinAsset["BackgroundDark7"] = "background-dark-7.png";
    QinAsset["BackgroundDark8"] = "background-dark-8.png";
    QinAsset["BackgroundDark9"] = "background-dark-9.png";
    QinAsset["BackgroundDark"] = "background-dark.png";
    QinAsset["BackgroundLight0"] = "background-light-0.png";
    QinAsset["BackgroundLight1"] = "background-light-1.png";
    QinAsset["BackgroundLight10"] = "background-light-10.png";
    QinAsset["BackgroundLight11"] = "background-light-11.png";
    QinAsset["BackgroundLight12"] = "background-light-12.png";
    QinAsset["BackgroundLight13"] = "background-light-13.png";
    QinAsset["BackgroundLight14"] = "background-light-14.png";
    QinAsset["BackgroundLight15"] = "background-light-15.png";
    QinAsset["BackgroundLight16"] = "background-light-16.png";
    QinAsset["BackgroundLight17"] = "background-light-17.png";
    QinAsset["BackgroundLight18"] = "background-light-18.png";
    QinAsset["BackgroundLight19"] = "background-light-19.png";
    QinAsset["BackgroundLight2"] = "background-light-2.png";
    QinAsset["BackgroundLight20"] = "background-light-20.png";
    QinAsset["BackgroundLight21"] = "background-light-21.png";
    QinAsset["BackgroundLight22"] = "background-light-22.png";
    QinAsset["BackgroundLight23"] = "background-light-23.png";
    QinAsset["BackgroundLight24"] = "background-light-24.png";
    QinAsset["BackgroundLight25"] = "background-light-25.png";
    QinAsset["BackgroundLight26"] = "background-light-26.png";
    QinAsset["BackgroundLight27"] = "background-light-27.png";
    QinAsset["BackgroundLight28"] = "background-light-28.png";
    QinAsset["BackgroundLight29"] = "background-light-29.png";
    QinAsset["BackgroundLight3"] = "background-light-3.png";
    QinAsset["BackgroundLight4"] = "background-light-4.png";
    QinAsset["BackgroundLight5"] = "background-light-5.png";
    QinAsset["BackgroundLight6"] = "background-light-6.png";
    QinAsset["BackgroundLight7"] = "background-light-7.png";
    QinAsset["BackgroundLight8"] = "background-light-8.png";
    QinAsset["BackgroundLight9"] = "background-light-9.png";
    QinAsset["BackgroundLight"] = "background-light.png";
    QinAsset["BackgroundNormal0"] = "background-normal-0.png";
    QinAsset["BackgroundNormal1"] = "background-normal-1.png";
    QinAsset["BackgroundNormal10"] = "background-normal-10.png";
    QinAsset["BackgroundNormal11"] = "background-normal-11.png";
    QinAsset["BackgroundNormal12"] = "background-normal-12.png";
    QinAsset["BackgroundNormal13"] = "background-normal-13.png";
    QinAsset["BackgroundNormal14"] = "background-normal-14.png";
    QinAsset["BackgroundNormal15"] = "background-normal-15.png";
    QinAsset["BackgroundNormal16"] = "background-normal-16.png";
    QinAsset["BackgroundNormal17"] = "background-normal-17.png";
    QinAsset["BackgroundNormal18"] = "background-normal-18.png";
    QinAsset["BackgroundNormal19"] = "background-normal-19.png";
    QinAsset["BackgroundNormal2"] = "background-normal-2.png";
    QinAsset["BackgroundNormal20"] = "background-normal-20.png";
    QinAsset["BackgroundNormal21"] = "background-normal-21.png";
    QinAsset["BackgroundNormal22"] = "background-normal-22.png";
    QinAsset["BackgroundNormal23"] = "background-normal-23.png";
    QinAsset["BackgroundNormal24"] = "background-normal-24.png";
    QinAsset["BackgroundNormal25"] = "background-normal-25.png";
    QinAsset["BackgroundNormal26"] = "background-normal-26.png";
    QinAsset["BackgroundNormal27"] = "background-normal-27.png";
    QinAsset["BackgroundNormal28"] = "background-normal-28.png";
    QinAsset["BackgroundNormal29"] = "background-normal-29.png";
    QinAsset["BackgroundNormal3"] = "background-normal-3.png";
    QinAsset["BackgroundNormal4"] = "background-normal-4.png";
    QinAsset["BackgroundNormal5"] = "background-normal-5.png";
    QinAsset["BackgroundNormal6"] = "background-normal-6.png";
    QinAsset["BackgroundNormal7"] = "background-normal-7.png";
    QinAsset["BackgroundNormal8"] = "background-normal-8.png";
    QinAsset["BackgroundNormal9"] = "background-normal-9.png";
    QinAsset["BackgroundNormal"] = "background-normal.png";
    QinAsset["ExplorerApps"] = "explorer-apps.png";
    QinAsset["ExplorerCmds"] = "explorer-cmds.png";
    QinAsset["ExplorerDir"] = "explorer-dir.png";
    QinAsset["ExplorerExec"] = "explorer-exec.png";
    QinAsset["ExplorerFile"] = "explorer-file.png";
    QinAsset["ExplorerImage"] = "explorer-image.png";
    QinAsset["ExplorerMovie"] = "explorer-movie.png";
    QinAsset["ExplorerMusic"] = "explorer-music.png";
    QinAsset["ExplorerZipped"] = "explorer-zipped.png";
    QinAsset["FaceAdd"] = "face-add.png";
    QinAsset["FaceAltWork"] = "face-alt-work.png";
    QinAsset["FaceArrowDown"] = "face-arrow-down.png";
    QinAsset["FaceArrowLeft"] = "face-arrow-left.png";
    QinAsset["FaceArrowRight"] = "face-arrow-right.png";
    QinAsset["FaceArrowUp"] = "face-arrow-up.png";
    QinAsset["FaceAttach"] = "face-attach.png";
    QinAsset["FaceAzSort"] = "face-az-sort.png";
    QinAsset["FaceBagShopping"] = "face-bag-shopping.png";
    QinAsset["FaceBag"] = "face-bag.png";
    QinAsset["FaceBellDisable"] = "face-bell-disable.png";
    QinAsset["FaceBell"] = "face-bell.png";
    QinAsset["FaceBetweenSpace"] = "face-between-space.png";
    QinAsset["FaceBoilerHomeSmart"] = "face-boiler-home-smart.png";
    QinAsset["FaceBottomToolbar"] = "face-bottom-toolbar.png";
    QinAsset["FaceCUsb"] = "face-c-usb.png";
    QinAsset["FaceCalendar"] = "face-calendar.png";
    QinAsset["FaceCameraDisable"] = "face-camera-disable.png";
    QinAsset["FaceCamera"] = "face-camera.png";
    QinAsset["FaceCancel"] = "face-cancel.png";
    QinAsset["FaceCartShopping"] = "face-cart-shopping.png";
    QinAsset["FaceCart"] = "face-cart.png";
    QinAsset["FaceCheckRadio"] = "face-check-radio.png";
    QinAsset["FaceCheck"] = "face-check.png";
    QinAsset["FaceCheckedRadio"] = "face-checked-radio.png";
    QinAsset["FaceChipSmartphone"] = "face-chip-smartphone.png";
    QinAsset["FaceCircleHalfShape"] = "face-circle-half-shape.png";
    QinAsset["FaceCircleShape"] = "face-circle-shape.png";
    QinAsset["FaceCircle"] = "face-circle.png";
    QinAsset["FaceClearPull"] = "face-clear-pull.png";
    QinAsset["FaceClockSand"] = "face-clock-sand.png";
    QinAsset["FaceClock"] = "face-clock.png";
    QinAsset["FaceClose"] = "face-close.png";
    QinAsset["FaceCog"] = "face-cog.png";
    QinAsset["FaceColsView"] = "face-cols-view.png";
    QinAsset["FaceComfortableView"] = "face-comfortable-view.png";
    QinAsset["FaceCompass"] = "face-compass.png";
    QinAsset["FaceConfirm"] = "face-confirm.png";
    QinAsset["FaceContact"] = "face-contact.png";
    QinAsset["FaceControl"] = "face-control.png";
    QinAsset["FaceCookerHomeSmart"] = "face-cooker-home-smart.png";
    QinAsset["FaceCopy"] = "face-copy.png";
    QinAsset["FaceDayView"] = "face-day-view.png";
    QinAsset["FaceDel"] = "face-del.png";
    QinAsset["FaceDoubleTap"] = "face-double-tap.png";
    QinAsset["FaceDownChevronPush"] = "face-down-chevron-push.png";
    QinAsset["FaceDownPush"] = "face-down-push.png";
    QinAsset["FaceDownTrending"] = "face-down-trending.png";
    QinAsset["FaceDownloadSoftware"] = "face-download-software.png";
    QinAsset["FaceDownload"] = "face-download.png";
    QinAsset["FaceEmptyTrash"] = "face-empty-trash.png";
    QinAsset["FaceEnlarge"] = "face-enlarge.png";
    QinAsset["FaceEnter"] = "face-enter.png";
    QinAsset["FaceErase"] = "face-erase.png";
    QinAsset["FaceExit"] = "face-exit.png";
    QinAsset["FaceEyeDisable"] = "face-eye-disable.png";
    QinAsset["FaceEye"] = "face-eye.png";
    QinAsset["FaceFile"] = "face-file.png";
    QinAsset["FaceFilter"] = "face-filter.png";
    QinAsset["FaceFirstRow"] = "face-first-row.png";
    QinAsset["FaceFolder"] = "face-folder.png";
    QinAsset["FaceFoundSearch"] = "face-found-search.png";
    QinAsset["FaceGear"] = "face-gear.png";
    QinAsset["FaceGlobe"] = "face-globe.png";
    QinAsset["FaceGridView"] = "face-grid-view.png";
    QinAsset["FaceHScroll"] = "face-h-scroll.png";
    QinAsset["FaceHeart"] = "face-heart.png";
    QinAsset["FaceHeatHomeSmart"] = "face-heat-home-smart.png";
    QinAsset["FaceHexagonShape"] = "face-hexagon-shape.png";
    QinAsset["FaceHome"] = "face-home.png";
    QinAsset["FaceHuntProduct"] = "face-hunt-product.png";
    QinAsset["FaceImage"] = "face-image.png";
    QinAsset["FaceInZoom"] = "face-in-zoom.png";
    QinAsset["FaceKitUi"] = "face-kit-ui.png";
    QinAsset["FaceLabel"] = "face-label.png";
    QinAsset["FaceLastRow"] = "face-last-row.png";
    QinAsset["FaceLeftChevronPush"] = "face-left-chevron-push.png";
    QinAsset["FaceLeftPush"] = "face-left-push.png";
    QinAsset["FaceLeftToolbar"] = "face-left-toolbar.png";
    QinAsset["FaceLightHomeSmart"] = "face-light-home-smart.png";
    QinAsset["FaceLink"] = "face-link.png";
    QinAsset["FaceListUser"] = "face-list-user.png";
    QinAsset["FaceListView"] = "face-list-view.png";
    QinAsset["FaceLoadingSearch"] = "face-loading-search.png";
    QinAsset["FaceLock"] = "face-lock.png";
    QinAsset["FaceMachineWashHomeSmart"] = "face-machine-wash-home-smart.png";
    QinAsset["FaceMail"] = "face-mail.png";
    QinAsset["FaceMapDisable"] = "face-map-disable.png";
    QinAsset["FaceMap"] = "face-map.png";
    QinAsset["FaceMenuLines"] = "face-menu-lines.png";
    QinAsset["FaceMessage"] = "face-message.png";
    QinAsset["FaceMicDisable"] = "face-mic-disable.png";
    QinAsset["FaceMic"] = "face-mic.png";
    QinAsset["FaceMinus"] = "face-minus.png";
    QinAsset["FaceMirrorScreen"] = "face-mirror-screen.png";
    QinAsset["FaceMonthView"] = "face-month-view.png";
    QinAsset["FaceMouthNoSmile"] = "face-mouth-no-smile.png";
    QinAsset["FaceMovie"] = "face-movie.png";
    QinAsset["FaceNeutralSmile"] = "face-neutral-smile.png";
    QinAsset["FaceNews"] = "face-news.png";
    QinAsset["FaceNoneSmile"] = "face-none-smile.png";
    QinAsset["FaceODownChevronPush"] = "face-o-down-chevron-push.png";
    QinAsset["FaceOLeftChevronPush"] = "face-o-left-chevron-push.png";
    QinAsset["FaceONextTrackPlay"] = "face-o-next-track-play.png";
    QinAsset["FaceOPrevTrackPlay"] = "face-o-prev-track-play.png";
    QinAsset["FaceOQuote"] = "face-o-quote.png";
    QinAsset["FaceORightChevronPush"] = "face-o-right-chevron-push.png";
    QinAsset["FaceOSelect"] = "face-o-select.png";
    QinAsset["FaceOUpChevronPush"] = "face-o-up-chevron-push.png";
    QinAsset["FaceOVoicemail"] = "face-o-voicemail.png";
    QinAsset["FaceOffSquareToggle"] = "face-off-square-toggle.png";
    QinAsset["FaceOffToggle"] = "face-off-toggle.png";
    QinAsset["FaceOnToggle"] = "face-on-toggle.png";
    QinAsset["FaceOpenMouthSmile"] = "face-open-mouth-smile.png";
    QinAsset["FaceOpenSidebar"] = "face-open-sidebar.png";
    QinAsset["FaceOutZoom"] = "face-out-zoom.png";
    QinAsset["FacePaste"] = "face-paste.png";
    QinAsset["FacePencil"] = "face-pencil.png";
    QinAsset["FacePerson"] = "face-person.png";
    QinAsset["FacePhoneDisable"] = "face-phone-disable.png";
    QinAsset["FacePhone"] = "face-phone.png";
    QinAsset["FacePin"] = "face-pin.png";
    QinAsset["FacePlug"] = "face-plug.png";
    QinAsset["FacePlus"] = "face-plus.png";
    QinAsset["FacePocket"] = "face-pocket.png";
    QinAsset["FacePokemon"] = "face-pokemon.png";
    QinAsset["FacePolaroid"] = "face-polaroid.png";
    QinAsset["FacePoll"] = "face-poll.png";
    QinAsset["FacePresentation"] = "face-presentation.png";
    QinAsset["FacePrevTrackPlay"] = "face-prev-track-play.png";
    QinAsset["FacePrinter"] = "face-printer.png";
    QinAsset["FaceProfile"] = "face-profile.png";
    QinAsset["FaceQr"] = "face-qr.png";
    QinAsset["FaceQuote"] = "face-quote.png";
    QinAsset["FaceRDownChevronPush"] = "face-r-down-chevron-push.png";
    QinAsset["FaceRLeftChevronPush"] = "face-r-left-chevron-push.png";
    QinAsset["FaceRNextTrackPlay"] = "face-r-next-track-play.png";
    QinAsset["FaceRPrevTrackPlay"] = "face-r-prev-track-play.png";
    QinAsset["FaceRRemove"] = "face-r-remove.png";
    QinAsset["FaceRRightChevronPush"] = "face-r-right-chevron-push.png";
    QinAsset["FaceRSelect"] = "face-r-select.png";
    QinAsset["FaceRUpChevronPush"] = "face-r-up-chevron-push.png";
    QinAsset["FaceRVoicemail"] = "face-r-voicemail.png";
    QinAsset["FaceRamSmartphone"] = "face-ram-smartphone.png";
    QinAsset["FaceRatio"] = "face-ratio.png";
    QinAsset["FaceRead"] = "face-read.png";
    QinAsset["FaceReadme"] = "face-readme.png";
    QinAsset["FaceRecord"] = "face-record.png";
    QinAsset["FaceRedo2"] = "face-redo-2.png";
    QinAsset["FaceRedo"] = "face-redo.png";
    QinAsset["FaceRefrigeratorHomeSmart"] = "face-refrigerator-home-smart.png";
    QinAsset["FaceRegion"] = "face-region.png";
    QinAsset["FaceRemote"] = "face-remote.png";
    QinAsset["FaceRemoveUser"] = "face-remove-user.png";
    QinAsset["FaceRemove"] = "face-remove.png";
    QinAsset["FaceRename"] = "face-rename.png";
    QinAsset["FaceReorder"] = "face-reorder.png";
    QinAsset["FaceRepeat"] = "face-repeat.png";
    QinAsset["FaceRhombusShape"] = "face-rhombus-shape.png";
    QinAsset["FaceRightChevronPush"] = "face-right-chevron-push.png";
    QinAsset["FaceRightPush"] = "face-right-push.png";
    QinAsset["FaceRightSidebar"] = "face-right-sidebar.png";
    QinAsset["FaceRightToolbar"] = "face-right-toolbar.png";
    QinAsset["FaceRing"] = "face-ring.png";
    QinAsset["FaceRuler"] = "face-ruler.png";
    QinAsset["FaceSadSmile"] = "face-sad-smile.png";
    QinAsset["FaceSave"] = "face-save.png";
    QinAsset["FaceScan"] = "face-scan.png";
    QinAsset["FaceScreen"] = "face-screen.png";
    QinAsset["FaceSearch2"] = "face-search-2.png";
    QinAsset["FaceSearch"] = "face-search.png";
    QinAsset["FaceSelect"] = "face-select.png";
    QinAsset["FaceSend"] = "face-send.png";
    QinAsset["FaceServer"] = "face-server.png";
    QinAsset["FaceServerless"] = "face-serverless.png";
    QinAsset["FaceSettings"] = "face-settings.png";
    QinAsset["FaceShakeSmartphone"] = "face-shake-smartphone.png";
    QinAsset["FaceShare2"] = "face-share-2.png";
    QinAsset["FaceShare"] = "face-share.png";
    QinAsset["FaceShield2"] = "face-shield-2.png";
    QinAsset["FaceShield"] = "face-shield.png";
    QinAsset["FaceShortcut"] = "face-shortcut.png";
    QinAsset["FaceShotScreen"] = "face-shot-screen.png";
    QinAsset["FaceShrink"] = "face-shrink.png";
    QinAsset["FaceShutterstock"] = "face-shutterstock.png";
    QinAsset["FaceSidebar"] = "face-sidebar.png";
    QinAsset["FaceSignal"] = "face-signal.png";
    QinAsset["FaceSingleTap"] = "face-single-tap.png";
    QinAsset["FaceSize"] = "face-size.png";
    QinAsset["FaceSketch"] = "face-sketch.png";
    QinAsset["FaceSlack"] = "face-slack.png";
    QinAsset["FaceSleep"] = "face-sleep.png";
    QinAsset["FaceSmartphone"] = "face-smartphone.png";
    QinAsset["FaceSmile"] = "face-smile.png";
    QinAsset["FaceSpeakerDisable"] = "face-speaker-disable.png";
    QinAsset["FaceSpeaker"] = "face-speaker.png";
    QinAsset["FaceSpectrum"] = "face-spectrum.png";
    QinAsset["FaceSpinnerAltTwo"] = "face-spinner-alt-two.png";
    QinAsset["FaceSpinnerAlt"] = "face-spinner-alt.png";
    QinAsset["FaceSpinnerTwo"] = "face-spinner-two.png";
    QinAsset["FaceSpinner"] = "face-spinner.png";
    QinAsset["FaceSplitNotView"] = "face-split-not-view.png";
    QinAsset["FaceSplitViewHorizontal"] = "face-split-view-horizontal.png";
    QinAsset["FaceSplitViewVertical"] = "face-split-view-vertical.png";
    QinAsset["FaceSplitView"] = "face-split-view.png";
    QinAsset["FaceSquareShape"] = "face-square-shape.png";
    QinAsset["FaceSquareToggle"] = "face-square-toggle.png";
    QinAsset["FaceSquare"] = "face-square.png";
    QinAsset["FaceStack"] = "face-stack.png";
    QinAsset["FaceStar"] = "face-star.png";
    QinAsset["FaceStark"] = "face-stark.png";
    QinAsset["FaceStopwatch"] = "face-stopwatch.png";
    QinAsset["FaceStories"] = "face-stories.png";
    QinAsset["FaceStudio"] = "face-studio.png";
    QinAsset["FaceStyle"] = "face-style.png";
    QinAsset["FaceSun"] = "face-sun.png";
    QinAsset["FaceSupport"] = "face-support.png";
    QinAsset["FaceSwap"] = "face-swap.png";
    QinAsset["FaceSweden"] = "face-sweden.png";
    QinAsset["FaceSwiss"] = "face-swiss.png";
    QinAsset["FaceSync"] = "face-sync.png";
    QinAsset["FaceTab"] = "face-tab.png";
    QinAsset["FaceTag"] = "face-tag.png";
    QinAsset["FaceTally"] = "face-tally.png";
    QinAsset["FaceTemplate"] = "face-template.png";
    QinAsset["FaceTennis"] = "face-tennis.png";
    QinAsset["FaceTerminal"] = "face-terminal.png";
    QinAsset["FaceTerrain"] = "face-terrain.png";
    QinAsset["FaceThermometer"] = "face-thermometer.png";
    QinAsset["FaceThermostat"] = "face-thermostat.png";
    QinAsset["FaceTikcode"] = "face-tikcode.png";
    QinAsset["FaceTime"] = "face-time.png";
    QinAsset["FaceTimelapse"] = "face-timelapse.png";
    QinAsset["FaceTimer"] = "face-timer.png";
    QinAsset["FaceToday"] = "face-today.png";
    QinAsset["FaceToolbox"] = "face-toolbox.png";
    QinAsset["FaceTopToolbar"] = "face-top-toolbar.png";
    QinAsset["FaceTouchpad"] = "face-touchpad.png";
    QinAsset["FaceTrack"] = "face-track.png";
    QinAsset["FaceTranscript"] = "face-transcript.png";
    QinAsset["FaceTrash2"] = "face-trash-2.png";
    QinAsset["FaceTrash"] = "face-trash.png";
    QinAsset["FaceTree"] = "face-tree.png";
    QinAsset["FaceTrees"] = "face-trees.png";
    QinAsset["FaceTrello"] = "face-trello.png";
    QinAsset["FaceTrending"] = "face-trending.png";
    QinAsset["FaceTriangleShape"] = "face-triangle-shape.png";
    QinAsset["FaceTrophy"] = "face-trophy.png";
    QinAsset["FaceTv"] = "face-tv.png";
    QinAsset["FaceTwilio"] = "face-twilio.png";
    QinAsset["FaceTwitter"] = "face-twitter.png";
    QinAsset["FaceUmbrella"] = "face-umbrella.png";
    QinAsset["FaceUnavailable"] = "face-unavailable.png";
    QinAsset["FaceUnblock"] = "face-unblock.png";
    QinAsset["FaceUndo2"] = "face-undo-2.png";
    QinAsset["FaceUndo"] = "face-undo.png";
    QinAsset["FaceUnfold"] = "face-unfold.png";
    QinAsset["FaceUnlink"] = "face-unlink.png";
    QinAsset["FaceUnlock"] = "face-unlock.png";
    QinAsset["FaceUnsplash"] = "face-unsplash.png";
    QinAsset["FaceUpChevronPush"] = "face-up-chevron-push.png";
    QinAsset["FaceUpPush"] = "face-up-push.png";
    QinAsset["FaceUploadSoftware"] = "face-upload-software.png";
    QinAsset["FaceUpload"] = "face-upload.png";
    QinAsset["FaceUpsideSmile"] = "face-upside-smile.png";
    QinAsset["FaceUsb"] = "face-usb.png";
    QinAsset["FaceUserAdd"] = "face-user-add.png";
    QinAsset["FaceUser"] = "face-user.png";
    QinAsset["FaceUserlane"] = "face-userlane.png";
    QinAsset["FaceVBetweenSpace"] = "face-v-between-space.png";
    QinAsset["FaceVScroll"] = "face-v-scroll.png";
    QinAsset["FaceVerticalSwap"] = "face-vertical-swap.png";
    QinAsset["FaceVinyl"] = "face-vinyl.png";
    QinAsset["FaceVoicemail"] = "face-voicemail.png";
    QinAsset["FaceVolume"] = "face-volume.png";
    QinAsset["FaceWebcam"] = "face-webcam.png";
    QinAsset["FaceWebsite"] = "face-website.png";
    QinAsset["FaceWideScreen"] = "face-wide-screen.png";
    QinAsset["FaceWifiDisable"] = "face-wifi-disable.png";
    QinAsset["FaceWifi"] = "face-wifi.png";
    QinAsset["FaceWindows"] = "face-windows.png";
    QinAsset["FaceYinyang"] = "face-yinyang.png";
    QinAsset["FaceYoutube"] = "face-youtube.png";
    QinAsset["FaceZaSort"] = "face-za-sort.png";
    QinAsset["FaceZeit"] = "face-zeit.png";
    QinAsset["FaceZigzagShape"] = "face-zigzag-shape.png";
    QinAsset["Favicon"] = "favicon.ico";
    QinAsset["JobberClose"] = "jobber-close.png";
    QinAsset["JobberMaximize"] = "jobber-maximize.png";
    QinAsset["JobberMenu"] = "jobber-menu.png";
    QinAsset["JobberMinimize"] = "jobber-minimize.png";
    QinAsset["JobberResize"] = "jobber-resize.png";
    QinAsset["JobberStatusError"] = "jobber-status-error.png";
    QinAsset["JobberStatusInfo"] = "jobber-status-info.png";
    QinAsset["LoginKey"] = "login-key.png";
    QinAsset["MenuDevtools"] = "menu-devtools.ico";
    QinAsset["Qinpel"] = "qinpel.png";
    QinAsset["SourceSansPro"] = "source-sans-pro.ttf";
    QinAsset["SourceSerifPro"] = "source-serif-pro.ttf";
})(QinAsset = exports.QinAsset || (exports.QinAsset = {}));
function qinAssetUrl(asset) {
    return "/app/qinpel-app/assets/" + asset;
}
exports.qinAssetUrl = qinAssetUrl;
function qinUrlAsset(url) {
    const asset = url.substring(url.lastIndexOf("/") + 1);
    return asset;
}
exports.qinUrlAsset = qinUrlAsset;

},{}],26:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinBaseStyle = void 0;
const qinpel_res_1 = require("qinpel-res");
class QinBaseStyle {
    constructor(element) {
        this._styledAsEditableFocusEvent = null;
        this._styledAsEditableFocusoutEvent = null;
        this._styledAsReadOnlyFocusEvent = null;
        this._styledAsReadOnlyFocusoutEvent = null;
        this._el = element;
    }
    putAsBody() {
        document.body.appendChild(this._el);
        qinpel_res_1.QinSkin.styleAsBody(this._el);
    }
    delAsBody() {
        document.body.removeChild(this._el);
    }
    putAsWhole() {
        this.putAsPositionAbsolute();
        this.putAsBounds(0, 0, 0, 0);
    }
    putAsBase() {
        qinpel_res_1.QinSkin.styleAsBase(this._el);
    }
    putAsEditable() {
        this.putAsBase();
        this._el.style.backgroundColor = qinpel_res_1.QinSkin.styles.ColorInactive;
        this._el.style.border = "1px solid " + qinpel_res_1.QinSkin.styles.ColorForeground;
        this._el.style.borderRadius = "3px";
        this._el.style.outline = "none";
        if (!this._styledAsEditableFocusEvent) {
            this._styledAsEditableFocusEvent = () => {
                this._el.style.backgroundColor = qinpel_res_1.QinSkin.styles.ColorActive;
                this._el.style.border = "1px solid " + qinpel_res_1.QinSkin.styles.ColorAccent;
            };
        }
        if (!this._styledAsEditableFocusoutEvent) {
            this._styledAsEditableFocusoutEvent = () => {
                this._el.style.backgroundColor = qinpel_res_1.QinSkin.styles.ColorInactive;
                this._el.style.border = "1px solid " + qinpel_res_1.QinSkin.styles.ColorForeground;
            };
        }
        if (this._styledAsReadOnlyFocusEvent) {
            this._el.removeEventListener("focus", this._styledAsReadOnlyFocusEvent);
        }
        if (this._styledAsReadOnlyFocusoutEvent) {
            this._el.removeEventListener("focusout", this._styledAsReadOnlyFocusoutEvent);
        }
        this._el.addEventListener("focus", this._styledAsEditableFocusEvent);
        this._el.addEventListener("focusout", this._styledAsEditableFocusoutEvent);
    }
    putAsReadOnly() {
        this.putAsBase();
        this._el.style.backgroundColor = qinpel_res_1.QinSkin.styles.ColorBlocked;
        this._el.style.border = "1px solid " + qinpel_res_1.QinSkin.styles.ColorForeground;
        this._el.style.borderRadius = "3px";
        this._el.style.outline = "none";
        if (!this._styledAsReadOnlyFocusEvent) {
            this._styledAsReadOnlyFocusEvent = () => {
                this._el.style.backgroundColor = qinpel_res_1.QinSkin.styles.ColorEntered;
                this._el.style.border = "1px solid " + qinpel_res_1.QinSkin.styles.ColorAttend;
            };
        }
        if (!this._styledAsReadOnlyFocusoutEvent) {
            this._styledAsReadOnlyFocusoutEvent = () => {
                this._el.style.backgroundColor = qinpel_res_1.QinSkin.styles.ColorBlocked;
                this._el.style.border = "1px solid " + qinpel_res_1.QinSkin.styles.ColorForeground;
            };
        }
        if (this._styledAsEditableFocusEvent) {
            this._el.removeEventListener("focus", this._styledAsEditableFocusEvent);
        }
        if (this._styledAsEditableFocusoutEvent) {
            this._el.removeEventListener("focusout", this._styledAsEditableFocusoutEvent);
        }
        this._el.addEventListener("focus", this._styledAsReadOnlyFocusEvent);
        this._el.addEventListener("focusout", this._styledAsReadOnlyFocusoutEvent);
    }
    putAsScroll() {
        this._el.style.overflow = "auto";
    }
    putAsMargin(margin) {
        this._el.style.margin = this.getPixelsOrInitial(margin);
    }
    putAsMarginTop(margin) {
        this._el.style.marginTop = this.getPixelsOrInitial(margin);
    }
    putAsMarginBottom(margin) {
        this._el.style.marginBottom = this.getPixelsOrInitial(margin);
    }
    putAsMarginLeft(margin) {
        this._el.style.marginLeft = this.getPixelsOrInitial(margin);
    }
    putAsMarginRight(margin) {
        this._el.style.marginRight = this.getPixelsOrInitial(margin);
    }
    putAsPadding(padding) {
        this._el.style.padding = this.getPixelsOrInitial(padding);
    }
    putAsPaddingTop(padding) {
        this._el.style.paddingTop = this.getPixelsOrInitial(padding);
    }
    putAsPaddingBottom(padding) {
        this._el.style.paddingBottom = this.getPixelsOrInitial(padding);
    }
    putAsPaddingLeft(padding) {
        this._el.style.paddingLeft = this.getPixelsOrInitial(padding);
    }
    putAsPaddingRight(padding) {
        this._el.style.paddingRight = this.getPixelsOrInitial(padding);
    }
    putAsBorder(thick, color = qinpel_res_1.QinSkin.styles.ColorForeground, style = "solid") {
        if (thick) {
            this._el.style.border = thick + "px " + style + " " + color;
        }
        else {
            this._el.style.border = "none";
        }
    }
    putAsBorderTop(thick, color = qinpel_res_1.QinSkin.styles.ColorForeground, style = "solid") {
        if (thick) {
            this._el.style.borderTop = thick + "px " + style + " " + color;
        }
        else {
            this._el.style.borderTop = "none";
        }
    }
    putAsBorderBottom(thick, color = qinpel_res_1.QinSkin.styles.ColorForeground, style = "solid") {
        if (thick) {
            this._el.style.borderBottom = thick + "px " + style + " " + color;
        }
        else {
            this._el.style.borderBottom = "none";
        }
    }
    putAsBorderLeft(thick, color = qinpel_res_1.QinSkin.styles.ColorForeground, style = "solid") {
        if (thick) {
            this._el.style.borderLeft = thick + "px " + style + " " + color;
        }
        else {
            this._el.style.borderLeft = "none";
        }
    }
    putAsBorderRight(thick, color = qinpel_res_1.QinSkin.styles.ColorForeground, style = "solid") {
        if (thick) {
            this._el.style.borderRight = thick + "px " + style + " " + color;
        }
        else {
            this._el.style.borderRight = "none";
        }
    }
    putAsBorderRadius(radius) {
        this._el.style.borderRadius = radius + "px";
    }
    putAsDisplayFlex() {
        this._el.style.display = "flex";
    }
    putAsDisplayInline() {
        this._el.style.display = "inline";
    }
    putAsDisplayInlineBlock() {
        this._el.style.display = "inline-block";
    }
    putAsPositionStatic() {
        this._el.style.position = "static";
    }
    putAsPositionAbsolute() {
        this._el.style.position = "absolute";
    }
    putAsPositionFixed() {
        this._el.style.position = "fixed";
    }
    putAsPositionRelative() {
        this._el.style.position = "relative";
    }
    putAsPositionSthicky() {
        this._el.style.position = "sthicky";
    }
    putAsPositionInitial() {
        this._el.style.position = "initial";
    }
    putAsFlexDirectionRow() {
        this._el.style.flexDirection = "row";
    }
    putAsFlexDirectionRowReverse() {
        this._el.style.flexDirection = "row-reverse";
    }
    putAsFlexDirectionColumn() {
        this._el.style.flexDirection = "column";
    }
    putAsFlexDirectionColumnReverse() {
        this._el.style.flexDirection = "column-reverse";
    }
    putAsFlexWrap() {
        this._el.style.flexWrap = "wrap";
    }
    putAsFlexWrapNot() {
        this._el.style.flexWrap = "nowrap";
    }
    putAsFlexWrapReverse() {
        this._el.style.flexWrap = "wrap-reverse";
    }
    putAsFlexMin() {
        this._el.style.flex = "none";
    }
    putAsFlexMax() {
        this._el.style.flex = "auto";
    }
    putAsAllCentered() {
        this._el.style.textAlign = "center";
        this._el.style.alignItems = "center";
        this._el.style.alignContent = "center";
        this._el.style.verticalAlign = "middle";
    }
    putAsBounds(top, right, bottom, left) {
        this._el.style.top = this.getPixelsOrInitial(top);
        this._el.style.right = this.getPixelsOrInitial(right);
        this._el.style.bottom = this.getPixelsOrInitial(bottom);
        this._el.style.left = this.getPixelsOrInitial(left);
    }
    putAsWidth(width) {
        this._el.style.width = this.getPixelsOrInitial(width);
    }
    putAsHeight(height) {
        this._el.style.height = this.getPixelsOrInitial(height);
    }
    putAsSize(width, height) {
        this._el.style.width = this.getPixelsOrInitial(width);
        this._el.style.height = this.getPixelsOrInitial(height);
    }
    putAsMinWidth(width) {
        this._el.style.minWidth = this.getPixelsOrInitial(width);
    }
    putAsMinHeight(height) {
        this._el.style.minHeight = this.getPixelsOrInitial(height);
    }
    putAsMinSize(width, height) {
        this._el.style.minWidth = this.getPixelsOrInitial(width);
        this._el.style.minHeight = this.getPixelsOrInitial(height);
    }
    putAsMaxWidth(width) {
        this._el.style.maxWidth = this.getPixelsOrInitial(width);
    }
    putAsMaxHeight(height) {
        this._el.style.maxHeight = this.getPixelsOrInitial(height);
    }
    putAsMaxSize(width, height) {
        this._el.style.maxWidth = this.getPixelsOrInitial(width);
        this._el.style.maxHeight = this.getPixelsOrInitial(height);
    }
    putAsForeground(foreground) {
        this._el.style.color = foreground;
    }
    putAsBackground(background) {
        this._el.style.background = background;
    }
    putAsBackAsset(asset) {
        this._el.style.backgroundImage = "url('/app/qinpel-app/assets/" + asset + "')";
    }
    putAsBackInitial() {
        this._el.style.backgroundImage = "initial";
    }
    putAsZIndex(index) {
        if (index == null || index == undefined) {
            this._el.style.zIndex = "initial";
        }
        else {
            this._el.style.zIndex = index.toString();
        }
    }
    putAsDisabledSelection() {
        qinpel_res_1.QinSkin.disableSelection(this._el);
    }
    getPixelsOrInitial(value) {
        if (value == null || value == undefined) {
            return "initial";
        }
        return value + "px";
    }
}
exports.QinBaseStyle = QinBaseStyle;

},{"qinpel-res":57}],27:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinBase = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_base_style_1 = require("./qin-base-style");
const qin_tool_1 = require("./qin-tool");
class QinBase {
    constructor(qindred, qined) {
        this._baseParent = null;
        this._pastParent = null;
        this._baseChildren = [];
        this._baseDisplay = null;
        this._baseVisibility = null;
        this._style = null;
        this._qindred = qindred;
        if (qined instanceof QinBase) {
            qined.qinedHTML.id = qindred + qined.qinedHTML.id;
        }
        else {
            qined.id = qin_tool_1.QinTool.qinpel.our.soul.body.makeQindredUID(qindred);
        }
        this._qined = qined;
    }
    get qinedHTML() {
        if (this._qined instanceof QinBase) {
            return this._qined.qinedHTML;
        }
        else {
            return this._qined;
        }
    }
    get qinedBase() {
        if (this._qined instanceof QinBase) {
            return this._qined;
        }
        else {
            return null;
        }
    }
    styled(styles) {
        qinpel_res_1.QinSkin.applyStyles(this.qinedHTML, styles);
        return this;
    }
    get qindred() {
        return this._qindred;
    }
    get qinpel() {
        return qin_tool_1.QinTool.qinpel;
    }
    get style() {
        if (this._style == null) {
            this._style = new qin_base_style_1.QinBaseStyle(this.qinedHTML);
        }
        return this._style;
    }
    put(item) {
        item.install(this);
        return this;
    }
    install(onBase) {
        this.unInstall();
        this._baseParent = onBase;
        this._baseParent.addChild(this);
    }
    unInstall() {
        if (this._baseParent != null) {
            this._baseParent.delChild(this);
            this._pastParent = this._baseParent;
            this._baseParent = null;
        }
    }
    reInstall() {
        this.unInstall();
        if (this._pastParent != null) {
            this._pastParent.addChild(this);
            this._baseParent = this._pastParent;
        }
    }
    unInstallChildren() {
        for (let i = this._baseChildren.length - 1; i >= 0; i--) {
            this._baseChildren[i].unInstall();
        }
    }
    unDisplay() {
        if (this.qinedHTML.style.display !== "none") {
            this._baseDisplay = this.qinedHTML.style.display;
            this.qinedHTML.style.display = "none";
        }
    }
    reDisplay() {
        if (this._baseDisplay != null) {
            this.qinedHTML.style.display = this._baseDisplay;
        }
    }
    unVisible() {
        if (this.qinedHTML.style.display !== "hidden") {
            this._baseVisibility = this.qinedHTML.style.visibility;
            this.qinedHTML.style.visibility = "hidden";
        }
    }
    reVisible() {
        if (this._baseVisibility != null) {
            this.qinedHTML.style.visibility = this._baseVisibility;
        }
    }
    addChild(child) {
        this._baseChildren.push(child);
        this.qinedHTML.appendChild(child.qinedHTML);
    }
    delChild(child) {
        let index = this._baseChildren.indexOf(child);
        if (index > -1) {
            this._baseChildren.splice(index, 1);
        }
        this.qinedHTML.removeChild(child.qinedHTML);
    }
    children() {
        return this._baseChildren;
    }
    mustId() {
        var result = this.id;
        if (!result) {
            result = qinpel_res_1.QinBody.makeQinUID();
            this.id = result;
        }
        return result;
    }
    get id() {
        return this.qinedHTML.id;
    }
    set id(id) {
        this.qinedHTML.id = id;
    }
    get tabIndex() {
        return this.qinedHTML.tabIndex;
    }
    set tabIndex(index) {
        this.qinedHTML.tabIndex = index;
    }
    focus() {
        this.qinedHTML.focus();
    }
    addAction(action) {
        qinpel_res_1.QinArms.addAction(this.qinedHTML, action);
    }
    addActionMain(action) {
        qinpel_res_1.QinArms.addActionMain(this.qinedHTML, action);
    }
    addActionMainKey(action) {
        qinpel_res_1.QinArms.addActionMainKey(this.qinedHTML, action);
    }
    addActionMainMouse(action) {
        qinpel_res_1.QinArms.addActionMainMouse(this.qinedHTML, action);
    }
    addActionMainTouch(action) {
        qinpel_res_1.QinArms.addActionMainTouch(this.qinedHTML, action);
    }
    addActionMainPoint(action) {
        qinpel_res_1.QinArms.addActionMainPoint(this.qinedHTML, action);
    }
    addActionMidi(action) {
        qinpel_res_1.QinArms.addActionMidi(this.qinedHTML, action);
    }
    addActionMidiKey(action) {
        qinpel_res_1.QinArms.addActionMidiKey(this.qinedHTML, action);
    }
    addActionMidiMouse(action) {
        qinpel_res_1.QinArms.addActionMidiMouse(this.qinedHTML, action);
    }
    addActionMidiTouch(action) {
        qinpel_res_1.QinArms.addActionMidiTouch(this.qinedHTML, action);
    }
    addActionMidiPoint(action) {
        qinpel_res_1.QinArms.addActionMidiPoint(this.qinedHTML, action);
    }
    addActionMenu(action) {
        qinpel_res_1.QinArms.addActionMenu(this.qinedHTML, action);
    }
    addActionMenuKey(action) {
        qinpel_res_1.QinArms.addActionMenuKey(this.qinedHTML, action);
    }
    addActionMenuMouse(action) {
        qinpel_res_1.QinArms.addActionMenuMouse(this.qinedHTML, action);
    }
    addActionMenuTouch(action) {
        qinpel_res_1.QinArms.addActionMenuTouch(this.qinedHTML, action);
    }
    addActionMenuPoint(action) {
        qinpel_res_1.QinArms.addActionMenuPoint(this.qinedHTML, action);
    }
}
exports.QinBase = QinBase;

},{"./qin-base-style":26,"./qin-tool":56,"qinpel-res":57}],28:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinBoolean = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_assets_1 = require("./qin-assets");
const qin_edit_1 = require("./qin-edit");
const qin_icon_1 = require("./qin-icon");
const qin_label_1 = require("./qin-label");
const qin_line_1 = require("./qin-line");
class QinBoolean extends qin_edit_1.QinEdit {
    constructor(options, isQindred) {
        super((isQindred ? isQindred + "_" : "") + "boolean", new qin_line_1.QinLine());
        this._qinSpan = new qin_label_1.QinLabel();
        this._qinIcon = new qin_icon_1.QinIcon(qin_assets_1.QinAsset.FaceCheckRadio);
        this._value = false;
        this._readOnly = false;
        this._qinSpan.install(this.qinedBase);
        this._qinIcon.install(this._qinSpan);
        this._qinSpan.style.putAsEditable();
        this._qinSpan.style.putAsDisplayFlex();
        this._qinSpan.style.putAsAllCentered();
        this._qinSpan.addAction((qinEvent) => {
            if (qinEvent.isMain && !this._readOnly) {
                this.toggle();
            }
        });
        if (options === null || options === void 0 ? void 0 : options.initial) {
            this.setData(options.initial);
        }
        if (options === null || options === void 0 ? void 0 : options.readOnly) {
            this.turnReadOnly();
        }
    }
    castedQine() {
        return this.qinedBase;
    }
    styled(styles) {
        super.styled(styles);
        return this;
    }
    getNature() {
        return qinpel_res_1.QinNature.BOOL;
    }
    getData() {
        return this._value;
    }
    setData(data) {
        this._value = data;
        this.updateIcon();
    }
    mayChange() {
        return [];
    }
    turnReadOnly() {
        this._readOnly = true;
        this._qinSpan.style.putAsReadOnly();
    }
    turnEditable() {
        this._readOnly = false;
        this._qinSpan.style.putAsEditable();
    }
    isEditable() {
        return !this._readOnly;
    }
    updateIcon() {
        if (this._value) {
            this._qinIcon.asset = qin_assets_1.QinAsset.FaceCheckedRadio;
        }
        else {
            this._qinIcon.asset = qin_assets_1.QinAsset.FaceCheckRadio;
        }
    }
    toggle() {
        this.value = !this.value;
    }
}
exports.QinBoolean = QinBoolean;

},{"./qin-assets":25,"./qin-edit":33,"./qin-icon":40,"./qin-label":42,"./qin-line":43,"qinpel-res":57}],29:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinButton = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_base_1 = require("./qin-base");
class QinButton extends qin_base_1.QinBase {
    constructor(options, isQindred) {
        super((isQindred ? isQindred + "_" : "") + "button", document.createElement("button"));
        this._qinIcon = null;
        this._qinLabel = null;
        styles.applyOnButton(this.qinedHTML);
        if (options === null || options === void 0 ? void 0 : options.icon) {
            this._qinIcon = options.icon;
            this._qinIcon.install(this);
        }
        if (options === null || options === void 0 ? void 0 : options.label) {
            this._qinLabel = options.label;
            this._qinLabel.install(this);
        }
    }
    castedQine() {
        return this.qinedHTML;
    }
    styled(styles) {
        super.styled(styles);
        return this;
    }
    get qinIcon() {
        return this._qinIcon;
    }
    get qinLabel() {
        return this._qinLabel;
    }
    putAsRow() {
        this.style.putAsFlexDirectionRow();
    }
    putAsRowReverse() {
        this.style.putAsFlexDirectionRowReverse();
    }
    putAsColumn() {
        this.style.putAsFlexDirectionColumn();
    }
    putAsColumnReverse() {
        this.style.putAsFlexDirectionColumnReverse();
    }
}
exports.QinButton = QinButton;
const styles = {
    applyOnButton: (el) => {
        qinpel_res_1.QinSkin.styleAsActionable(el);
        el.style.display = "flex";
        el.style.flexDirection = "row";
        el.style.alignItems = "center";
        el.style.justifyContent = "center";
    },
};

},{"./qin-base":27,"qinpel-res":57}],30:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinColumn = void 0;
const qin_panel_1 = require("./qin-panel");
class QinColumn extends qin_panel_1.QinPanel {
    constructor(options, isQindred) {
        super(options, (isQindred ? isQindred + "_" : "") + "column");
        this.style.putAsFlexDirectionColumn();
        this.style.putAsFlexWrapNot();
    }
    styled(styles) {
        super.styled(styles);
        return this;
    }
    put(item) {
        item.install(this);
        return this;
    }
}
exports.QinColumn = QinColumn;

},{"./qin-panel":45}],31:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinCombo = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_edit_1 = require("./qin-edit");
class QinCombo extends qin_edit_1.QinEdit {
    constructor(options, isQindred) {
        super((isQindred ? isQindred + "_" : "") + "combo", document.createElement("select"));
        this._elGroups = new Array();
        this.style.putAsEditable();
        if (options === null || options === void 0 ? void 0 : options.items) {
            for (let item of options.items) {
                this.addItem(item);
            }
        }
        if (options === null || options === void 0 ? void 0 : options.selected) {
            this.setData(options.selected);
        }
        if (options === null || options === void 0 ? void 0 : options.readOnly) {
            this.turnReadOnly();
        }
    }
    castedQine() {
        return this.qinedHTML;
    }
    styled(styles) {
        super.styled(styles);
        return this;
    }
    getNature() {
        return qinpel_res_1.QinNature.CHARS;
    }
    getData() {
        return this.castedQine().value;
    }
    setData(data) {
        this.castedQine().value = data;
    }
    mayChange() {
        return [this.castedQine()];
    }
    turnReadOnly() {
        this.castedQine().disabled = true;
        this.style.putAsReadOnly();
    }
    turnEditable() {
        this.castedQine().disabled = false;
        this.style.putAsEditable();
    }
    isEditable() {
        return !this.castedQine().disabled;
    }
    addItem(item) {
        const option = document.createElement("option");
        option.text = item.title;
        option.value = item.value;
        if (item.selected != undefined && item.selected != null) {
            option.selected = item.selected;
        }
        let group = this.getGroup(item.group);
        if (group) {
            group.appendChild(option);
        }
        else {
            qinpel_res_1.QinSkin.styleAsBase(option);
            this.qinedHTML.appendChild(option);
        }
        return this;
    }
    getGroup(label) {
        if (!label) {
            return null;
        }
        for (let group of this._elGroups) {
            if (group.label == label) {
                return group;
            }
        }
        let newGroup = document.createElement("optgroup");
        newGroup.label = label;
        qinpel_res_1.QinSkin.styleAsBase(newGroup);
        this._elGroups.push(newGroup);
        this.qinedHTML.appendChild(newGroup);
        return newGroup;
    }
}
exports.QinCombo = QinCombo;

},{"./qin-edit":33,"qinpel-res":57}],32:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinDivider = void 0;
const qin_base_1 = require("./qin-base");
class QinDivider extends qin_base_1.QinBase {
    constructor(options, isQindred) {
        super((isQindred ? isQindred + "_" : "") + "divider", document.createElement("div"));
        this._isHorizontal = true;
        if (options === null || options === void 0 ? void 0 : options.horizontal) {
            this.setHorizontal();
        }
        else {
            this.setVertical();
        }
    }
    castedQine() {
        return this.qinedHTML;
    }
    styled(styles) {
        super.styled(styles);
        return this;
    }
    setHorizontal() {
        this.qinedHTML.style.minWidth = "initial";
        this.qinedHTML.style.maxWidth = "initial";
        this.qinedHTML.style.minHeight = "6px";
        this.qinedHTML.style.maxHeight = "6px";
        this.qinedHTML.style.height = "6px";
        this.qinedHTML.style.background =
            "linear-gradient(180deg, rgba(255,250,239,0.1) 0%, rgba(255,250,239,0.1) 26%, rgba(24,0,39,0.8) 42%, rgba(24,0,39,0.8) 58%, rgba(255,250,239,0.1) 74%, rgba(255,250,239,0.1) 100%)";
        this._isHorizontal = true;
    }
    setVertical() {
        this.qinedHTML.style.flexDirection = "row";
        this.qinedHTML.style.minWidth = "6px";
        this.qinedHTML.style.maxWidth = "6px";
        this.qinedHTML.style.minHeight = "initial";
        this.qinedHTML.style.maxHeight = "initial";
        this.qinedHTML.style.width = "6px";
        this.qinedHTML.style.background =
            "linear-gradient(90deg, rgba(255,250,239,0.1) 0%, rgba(255,250,239,0.1) 26%, rgba(24,0,39,0.8) 42%, rgba(24,0,39,0.8) 58%, rgba(255,250,239,0.1) 74%, rgba(255,250,239,0.1) 100%)";
        this._isHorizontal = false;
    }
    get isHorizontal() {
        return this._isHorizontal;
    }
}
exports.QinDivider = QinDivider;

},{"./qin-base":27}],33:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinEdit = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_base_1 = require("./qin-base");
class QinEdit extends qin_base_1.QinBase {
    constructor(qindred, qined) {
        super(qindred + "_" + "edit", qined);
        this._changedWaiters = new qinpel_res_1.QinWaiters();
        for (let mayChange of this.mayChange()) {
            mayChange.addEventListener("change", () => {
                this.sendChanged();
            });
        }
    }
    get value() {
        return this.getData();
    }
    set value(data) {
        this.setData(data);
        this.sendChanged();
    }
    sendChanged() {
        this._changedWaiters.sendWaiters(this.getData());
    }
    addOnChanged(waiter) {
        this._changedWaiters.addWaiter(waiter);
    }
    getChangeable() {
        return this.mayChange();
    }
}
exports.QinEdit = QinEdit;

},{"./qin-base":27,"qinpel-res":57}],34:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinField = void 0;
const qin_column_1 = require("./qin-column");
const qin_label_1 = require("./qin-label");
class QinField extends qin_column_1.QinColumn {
    constructor(title, edit, isQindred) {
        super(null, (isQindred ? isQindred + "_" : "") + edit.qindred + "_field");
        this._qinLabel = new qin_label_1.QinLabel();
        this._qinLabel.title = title;
        this._qinLabel.install(this);
        this._qinEdit = edit;
        this._qinEdit.install(this);
        this._qinLabel.qinLink(this._qinEdit);
        this.style.putAsMargin(3);
    }
    styled(styles) {
        super.styled(styles);
        return this;
    }
    get label() {
        return this._qinLabel;
    }
    get edit() {
        return this._qinEdit;
    }
    getNature() {
        return this._qinEdit.getNature();
    }
    get value() {
        return this._qinEdit.value;
    }
    set value(data) {
        this._qinEdit.value = data;
    }
    turnReadOnly() {
        this._qinEdit.turnReadOnly();
    }
    turnEditable() {
        this._qinEdit.turnEditable();
    }
    isEditable() {
        return this._qinEdit.isEditable();
    }
    addOnChanged(waiter) {
        this._qinEdit.addOnChanged(waiter);
    }
    focus() {
        this._qinEdit.focus();
    }
}
exports.QinField = QinField;

},{"./qin-column":30,"./qin-label":42}],35:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinFilePath = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_assets_1 = require("./qin-assets");
const qin_button_1 = require("./qin-button");
const qin_edit_1 = require("./qin-edit");
const qin_file_pick_1 = require("./qin-file-pick");
const qin_icon_1 = require("./qin-icon");
const qin_line_1 = require("./qin-line");
const qin_string_1 = require("./qin-string");
class QinFilePath extends qin_edit_1.QinEdit {
    constructor(options, isQindred) {
        super((isQindred ? isQindred + "_" : "") + "file-path", new qin_line_1.QinLine());
        this._qinPath = new qin_string_1.QinString();
        this._qinSearch = new qin_button_1.QinButton({
            icon: new qin_icon_1.QinIcon(qin_assets_1.QinAsset.FaceFolder),
        });
        this._readOnly = false;
        this._qinPicker = new qin_file_pick_1.QinFilePick({
            nature: options === null || options === void 0 ? void 0 : options.nature,
            operation: options === null || options === void 0 ? void 0 : options.operation,
            descriptors: options === null || options === void 0 ? void 0 : options.descriptors,
            singleSelection: true,
        });
        this._qinPopup = this.qinpel.jobbed.newPopup(this._qinPicker.castedQine().castedQine());
        this._qinPath.install(this.qinedBase);
        this._qinSearch.install(this.qinedBase);
        this._qinSearch.addAction((qinEvent) => {
            if (qinEvent.isMain) {
                this._qinPopup.show();
                const upperHeight = this._qinPicker.qinUpper.qinedHTML.clientHeight;
                const explorerMaxHeight = this._qinPopup.maxHeight - (upperHeight + 12);
                this._qinPicker.qinExplorer.style.putAsMaxHeight(explorerMaxHeight);
            }
        });
        this._qinPicker.addChosen((chosen) => {
            if (chosen && chosen.length > 0) {
                this._qinPath.value = chosen[0];
            }
            this._qinPopup.close();
        });
        if (options === null || options === void 0 ? void 0 : options.initial) {
            this.setData(options.initial);
        }
        if (options === null || options === void 0 ? void 0 : options.readOnly) {
            this.turnReadOnly();
        }
    }
    castedQine() {
        return this.qinedBase;
    }
    styled(styles) {
        super.styled(styles);
        return this;
    }
    getNature() {
        return qinpel_res_1.QinNature.CHARS;
    }
    getData() {
        return this._qinPath.value;
    }
    setData(data) {
        this._qinPath.value = data;
    }
    mayChange() {
        return [...this._qinPath.getChangeable(), ...this._qinPicker.getChangeable()];
    }
    turnReadOnly() {
        this._readOnly = true;
        this._qinPath.turnReadOnly();
    }
    turnEditable() {
        this._readOnly = false;
        this._qinPath.turnEditable();
    }
    isEditable() {
        return !this._readOnly;
    }
    get qinPath() {
        return this._qinPath;
    }
    get qinSearch() {
        return this._qinSearch;
    }
    get qinChooser() {
        return this._qinPicker;
    }
    get qinPopup() {
        return this._qinPopup;
    }
}
exports.QinFilePath = QinFilePath;

},{"./qin-assets":25,"./qin-button":29,"./qin-edit":33,"./qin-file-pick":36,"./qin-icon":40,"./qin-line":43,"./qin-string":52,"qinpel-res":57}],36:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinFilePick = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_assets_1 = require("./qin-assets");
const qin_button_1 = require("./qin-button");
const qin_column_1 = require("./qin-column");
const qin_combo_1 = require("./qin-combo");
const qin_edit_1 = require("./qin-edit");
const qin_file_view_1 = require("./qin-file-view");
const qin_icon_1 = require("./qin-icon");
const qin_line_1 = require("./qin-line");
const qin_panel_1 = require("./qin-panel");
const qin_string_1 = require("./qin-string");
class QinFilePick extends qin_edit_1.QinEdit {
    constructor(options, isQindred) {
        var _a;
        super((isQindred ? isQindred + "_" : "") + "file-pick", new qin_column_1.QinColumn());
        this._qinUpper = new qin_line_1.QinLine();
        this._qinConfirm = new qin_button_1.QinButton({
            icon: new qin_icon_1.QinIcon(qin_assets_1.QinAsset.FaceConfirm),
        });
        this._qinFolder = new qin_string_1.QinString();
        this._qinExtensions = new qin_combo_1.QinCombo();
        this._qinSearch = new qin_button_1.QinButton({
            icon: new qin_icon_1.QinIcon(qin_assets_1.QinAsset.FaceSearch),
        });
        this._qinUnder = new qin_panel_1.QinPanel();
        this._qinExplorer = new qin_file_view_1.QinFileView();
        this._listeners = [];
        this._readOnly = false;
        this._nature = (options === null || options === void 0 ? void 0 : options.nature) ? options.nature : qinpel_res_1.QinFilesNature.BOTH;
        this._operation = (options === null || options === void 0 ? void 0 : options.operation) ? options.operation : qinpel_res_1.QinFilesOperation.OPEN;
        this._descriptors = (options === null || options === void 0 ? void 0 : options.descriptors) ? options.descriptors : [];
        this._singleSelection = (_a = options === null || options === void 0 ? void 0 : options.singleSelection) !== null && _a !== void 0 ? _a : false;
        this.initMain();
        this.initUpper();
        this.initUnder();
        if (options === null || options === void 0 ? void 0 : options.readOnly) {
            this.turnReadOnly();
        }
    }
    initMain() {
        this._qinUpper.install(this.qinedBase);
        this._qinUnder.install(this.qinedBase);
    }
    initUpper() {
        this._qinUpper.style.putAsFlexMin();
        this._qinConfirm.install(this._qinUpper);
        this._qinConfirm.addActionMain((_) => {
            let data = this.getData();
            for (const chosen of this._listeners) {
                chosen(data);
            }
        });
        this._qinFolder.install(this._qinUpper);
        this._qinFolder.style.putAsMinWidth(100);
        this._qinFolder.style.putAsFlexMax();
        this._qinFolder.addActionMain((_) => {
            if (this.isEditable()) {
                this.loadFolder();
            }
        });
        this._qinExtensions.install(this._qinUpper);
        this._qinExtensions.style.putAsMinWidth(100);
        this.initExtensions();
        this._qinSearch.install(this._qinUpper);
        this._qinSearch.addAction((_) => {
            if (this.isEditable()) {
                this.loadFolder();
            }
        });
    }
    initUnder() {
        this._qinUnder.style.putAsScroll();
        this._qinUnder.style.putAsFlexMax();
        this._qinExplorer.install(this._qinUnder);
        this._qinExplorer.nature = this._nature;
        this._qinExplorer.singleSelection = this._singleSelection;
    }
    initExtensions() {
        if (this._descriptors.length == 0) {
            this._qinExtensions.addItem({
                title: this.qinpel.tr("All files") + " (*.*)",
                value: "*",
                selected: true,
            });
            this._qinExplorer.extensions = [];
        }
        else {
            for (let index = 0; index < this._descriptors.length; index++) {
                const descriptor = this._descriptors[index];
                this._qinExtensions.addItem({
                    title: descriptor.description,
                    value: descriptor.extensions.join(";"),
                    selected: index == 0,
                });
            }
            this._qinExplorer.extensions = this._descriptors[0].extensions;
        }
    }
    castedQine() {
        return this.qinedBase;
    }
    styled(styles) {
        super.styled(styles);
        return this;
    }
    getNature() {
        return qinpel_res_1.QinNature.CHARS;
    }
    getData() {
        return this._qinExplorer.value;
    }
    setData(data) {
        this._qinExplorer.value = data;
    }
    mayChange() {
        return [...this._qinExplorer.getChangeable()];
    }
    turnReadOnly() {
        this._readOnly = true;
        this._qinFolder.turnReadOnly();
        this._qinExtensions.turnReadOnly();
        this._qinExplorer.turnReadOnly();
    }
    turnEditable() {
        this._readOnly = false;
        this._qinFolder.turnEditable();
        this._qinExtensions.turnEditable();
        this._qinExplorer.turnEditable();
    }
    isEditable() {
        return !this._readOnly;
    }
    get qinUpper() {
        return this._qinUpper;
    }
    get qinConfirm() {
        return this._qinConfirm;
    }
    get qinFolder() {
        return this._qinFolder;
    }
    get qinExtensions() {
        return this._qinExtensions;
    }
    get qinSearch() {
        return this._qinSearch;
    }
    get qinUnder() {
        return this._qinUnder;
    }
    get qinExplorer() {
        return this._qinExplorer;
    }
    get nature() {
        return this._nature;
    }
    set nature(value) {
        this._nature = value;
        this._qinExplorer.nature = value;
    }
    get operation() {
        return this._operation;
    }
    set operation(value) {
        this._operation = value;
    }
    get descriptors() {
        return this._descriptors;
    }
    set descriptors(value) {
        this._descriptors = value;
    }
    get singleSelection() {
        return this._singleSelection;
    }
    set singleSelection(value) {
        this._singleSelection = value;
        this._qinExplorer.singleSelection = value;
    }
    loadFolder() {
        this._qinExplorer.load(this._qinFolder.value, (loaded) => {
            this._qinFolder.value = loaded;
        });
    }
    addChosen(chosen) {
        this._listeners.push(chosen);
        return this;
    }
}
exports.QinFilePick = QinFilePick;

},{"./qin-assets":25,"./qin-button":29,"./qin-column":30,"./qin-combo":31,"./qin-edit":33,"./qin-file-view":37,"./qin-icon":40,"./qin-line":43,"./qin-panel":45,"./qin-string":52,"qinpel-res":57}],37:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinFileView = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_edit_1 = require("./qin-edit");
const qin_panel_1 = require("./qin-panel");
class QinFileView extends qin_edit_1.QinEdit {
    constructor(options, isQindred) {
        var _a;
        super((isQindred ? isQindred + "_" : "") + "file-view", new qin_panel_1.QinPanel());
        this._folderActual = "";
        this._folderServer = "";
        this._items = [];
        this._readOnly = false;
        this._nature = (options === null || options === void 0 ? void 0 : options.nature) ? options.nature : qinpel_res_1.QinFilesNature.BOTH;
        this._extensions = (options === null || options === void 0 ? void 0 : options.extensions) ? options.extensions : [];
        this._singleSelection = (_a = options === null || options === void 0 ? void 0 : options.singleSelection) !== null && _a !== void 0 ? _a : false;
        this.initMain();
        if (options === null || options === void 0 ? void 0 : options.readOnly) {
            this.turnReadOnly();
        }
    }
    initMain() {
        this.style.putAsEditable();
        styles.applyOnMain(this.qinedHTML);
        this.qinedBase.addActionMain((_) => {
            if (!this._readOnly) {
                this.cleanSelection();
            }
        });
        this.qinedBase.style.putAsDisabledSelection();
    }
    castedQine() {
        return this.qinedBase;
    }
    styled(styles) {
        super.styled(styles);
        return this;
    }
    getNature() {
        return qinpel_res_1.QinNature.CHARS;
    }
    getData() {
        let result = [];
        this._items.forEach((item) => {
            if (item.isSelected()) {
                result.push(qinpel_res_1.QinSoul.foot.getPathJoin(this._folderServer, item.getName()));
            }
        });
        return result;
    }
    setData(data) {
        this.clean();
        if (data && data.length > 0) {
            let folderRoot = qinpel_res_1.QinSoul.foot.getParent(data[0]);
            this.load(folderRoot, (_) => {
                for (const itemPath of data) {
                    let itemRoot = qinpel_res_1.QinSoul.foot.getParent(itemPath);
                    let itemName = qinpel_res_1.QinSoul.foot.getStem(itemPath);
                    if (itemRoot !== folderRoot) {
                        this.qinpel.jobbed.statusError(`The item '${itemPath}' is not on the root '${folderRoot}'.`, "{qinpel-cps}(ErrCode-000001)");
                    }
                    else {
                        if (!this.select(itemName)) {
                            this.qinpel.jobbed.statusError(`Does not have the item '${itemName}' on the folder '${folderRoot}'`, "{qinpel-cps}(ErrCode-000002)");
                        }
                    }
                }
            });
        }
    }
    mayChange() {
        return [];
    }
    turnReadOnly() {
        this._readOnly = true;
        this.style.putAsReadOnly();
    }
    turnEditable() {
        this._readOnly = false;
        this.style.putAsEditable();
    }
    isEditable() {
        return !this._readOnly;
    }
    get nature() {
        return this._nature;
    }
    set nature(value) {
        this._nature = value;
    }
    get extensions() {
        return this._extensions;
    }
    set extensions(value) {
        this._extensions = value;
    }
    get singleSelection() {
        return this._singleSelection;
    }
    set singleSelection(value) {
        this._singleSelection = value;
        this.updateSingleSelection();
    }
    get folderActual() {
        return this._folderActual;
    }
    get folderServer() {
        return this._folderServer;
    }
    updateSingleSelection() {
        if (this._singleSelection) {
            let alreadyHas = false;
            for (const item of this._items) {
                if (item.isSelected()) {
                    if (alreadyHas) {
                        item.unselect();
                    }
                    else {
                        alreadyHas = true;
                    }
                }
            }
        }
    }
    load(folder, onLoad) {
        this.clean();
        this.qinpel.talk
            .post("/dir/list", { path: folder })
            .then((res) => {
            this._folderActual = folder;
            for (let line of qinpel_res_1.QinSoul.body.getTextLines(res.data)) {
                let lineValue = line.substring(3);
                if (!lineValue) {
                    continue;
                }
                if (line.startsWith("P: ")) {
                    this._folderServer = lineValue;
                    if (onLoad) {
                        onLoad(lineValue);
                    }
                }
                else if (line.startsWith("D: ")) {
                    if (this._nature == qinpel_res_1.QinFilesNature.BOTH ||
                        this._nature == qinpel_res_1.QinFilesNature.DIRECTORIES) {
                        this.newDir(lineValue);
                    }
                }
                else if (line.startsWith("F: ")) {
                    if (this._nature == qinpel_res_1.QinFilesNature.BOTH || this._nature == qinpel_res_1.QinFilesNature.FILES) {
                        let extension = qinpel_res_1.QinSoul.foot.getFileExtension(lineValue);
                        let passedExtension = true;
                        if (this._extensions && this._extensions.length > 0) {
                            passedExtension = this._extensions.indexOf(extension) > -1;
                        }
                        if (passedExtension) {
                            this.newFile(lineValue, extension);
                        }
                    }
                }
            }
        })
            .catch((err) => {
            this.qinpel.jobbed.statusError(err, "{qinpel-cps}(ErrCode-000003)");
        });
    }
    reload(onLoad) {
        this.load(this._folderServer, onLoad);
    }
    goFolderUp(onLoad) {
        let parent = qinpel_res_1.QinFoot.getParent(this._folderServer);
        if (parent) {
            this.load(parent, onLoad);
        }
    }
    clean() {
        this.qinedHTML.innerHTML = "";
        this._items = [];
        this._folderActual = "";
        this._folderServer = "";
    }
    cleanSelection() {
        for (const item of this._items) {
            item.unselect();
        }
    }
    select(itemName) {
        let item = this._items.find((inside) => inside.getName() == itemName);
        if (item) {
            item.select();
            return true;
        }
        else {
            return false;
        }
    }
    unselect(itemName) {
        let item = this._items.find((inside) => inside.getName() == itemName);
        if (item) {
            item.unselect();
            return true;
        }
        else {
            return false;
        }
    }
    newDir(name) {
        this.newItem(name, "explorer-dir.png");
    }
    newFile(name, extension) {
        this.newItem(name, getIconName(extension));
    }
    newItem(name, icon) {
        const item = new Item(this, name, icon);
        item.install(this.qinedHTML);
        this._items.push(item);
    }
}
exports.QinFileView = QinFileView;
class Item {
    constructor(dad, fileName, iconName) {
        this._divItem = document.createElement("div");
        this._divBody = document.createElement("div");
        this._spanIcon = document.createElement("span");
        this._imgIcon = document.createElement("img");
        this._spanText = document.createElement("span");
        this._selected = false;
        this._dad = dad;
        this._fileName = fileName;
        this._iconName = iconName;
        this.initItem();
    }
    initItem() {
        styles.applyOnDivItem(this._divItem);
        this._divItem.tabIndex = 0;
        styles.applyOnDivBody(this._divBody);
        this._divItem.appendChild(this._divBody);
        styles.applyOnSpanIcon(this._spanIcon);
        this._divBody.appendChild(this._spanIcon);
        this._imgIcon.src = "/app/qinpel-app/assets/" + this._iconName;
        this._spanIcon.appendChild(this._imgIcon);
        this._spanText.innerText = this._fileName;
        styles.applyOnSpanText(this._spanText);
        this._divBody.appendChild(this._spanText);
        qinpel_res_1.QinSoul.arms.addActionMain(this._divItem, (qinEvent) => {
            if (this._dad.isEditable()) {
                this._divItem.focus();
                this.toggle();
            }
        });
    }
    install(on) {
        on.appendChild(this._divItem);
    }
    select() {
        styles.applyOnDivSelect(this._divItem);
        this._selected = true;
    }
    unselect() {
        styles.applyOnDivUnSelect(this._divItem);
        this._selected = false;
    }
    toggle() {
        if (this._selected) {
            this.unselect();
        }
        else {
            if (this._dad.singleSelection) {
                this._dad.cleanSelection();
            }
            this.select();
        }
    }
    getName() {
        return this._fileName;
    }
    isSelected() {
        return this._selected;
    }
}
function getIconName(fromExtension) {
    let result = "explorer-file.png";
    if (qinpel_res_1.QinSoul.foot.isFileApp(fromExtension)) {
        result = "explorer-apps.png";
    }
    else if (qinpel_res_1.QinSoul.foot.isFileCmd(fromExtension)) {
        result = "explorer-cmds.png";
    }
    else if (qinpel_res_1.QinSoul.foot.isFileExec(fromExtension)) {
        result = "explorer-exec.png";
    }
    else if (qinpel_res_1.QinSoul.foot.isFileImage(fromExtension)) {
        result = "explorer-image.png";
    }
    else if (qinpel_res_1.QinSoul.foot.isFileVector(fromExtension)) {
        result = "explorer-image.png";
    }
    else if (qinpel_res_1.QinSoul.foot.isFileMusic(fromExtension)) {
        result = "explorer-music.png";
    }
    else if (qinpel_res_1.QinSoul.foot.isFileMovie(fromExtension)) {
        result = "explorer-movie.png";
    }
    else if (qinpel_res_1.QinSoul.foot.isFileZipped(fromExtension)) {
        result = "explorer-zipped.png";
    }
    return result;
}
const styles = {
    applyOnMain: (el) => {
        el.style.overflow = "auto";
        el.style.minWidth = "160px";
        el.style.minHeight = "160px";
        el.tabIndex = 0;
    },
    applyOnDivItem: (el) => {
        el.style.margin = "2px";
        el.style.padding = "9px";
        el.style.display = "inline-block";
        el.style.outline = "none";
        el.style.backgroundColor = "#ffffff";
        el.style.border = "1px solid #360045";
        el.style.borderRadius = "3px";
        el.style.color = "#270036";
        el.addEventListener("focus", () => {
            el.style.outline = "none";
            el.style.border = "1px solid #ae0000";
        });
        el.addEventListener("focusout", () => {
            el.style.outline = "none";
            el.style.border = "1px solid #360045";
        });
    },
    applyOnDivBody: (el) => {
        el.style.display = "flex";
        el.style.flexDirection = "column";
        el.style.width = "96px";
    },
    applyOnSpanIcon: (el) => {
        el.style.textAlign = "center";
    },
    applyOnSpanText: (el) => {
        el.style.textAlign = "center";
        el.style.wordWrap = "break-word";
    },
    applyOnDivSelect: (el) => {
        el.style.backgroundColor = "#faefff";
    },
    applyOnDivUnSelect: (el) => {
        el.style.backgroundColor = "#ffffff";
    },
};

},{"./qin-edit":33,"./qin-panel":45,"qinpel-res":57}],38:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinIconCell = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_panel_1 = require("./qin-panel");
class QinIconCell extends qin_panel_1.QinPanel {
    constructor(icon, isQindred) {
        super(null, (isQindred ? isQindred + "_" : "") + "icon-cell");
        this._selected = false;
        let border = Math.round(icon.size.width / 10);
        let padding = border * 2;
        this.style.putAsBorderRadius(border);
        this.style.putAsPadding(padding);
        this._qinIcon = icon;
        this._qinIcon.install(this);
    }
    styled(styles) {
        super.styled(styles);
        return this;
    }
    get qinIcon() {
        return this._qinIcon;
    }
    get selected() {
        return this._selected;
    }
    set selected(value) {
        this._selected = value;
        if (this._selected) {
            this.qinedHTML.style.backgroundColor = qinpel_res_1.QinSkin.styles.ColorSelected;
        }
        else {
            this.qinedHTML.style.backgroundColor = "initial";
        }
    }
    get asset() {
        return this._qinIcon.asset;
    }
}
exports.QinIconCell = QinIconCell;

},{"./qin-panel":45,"qinpel-res":57}],39:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinIconPick = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_edit_1 = require("./qin-edit");
const qin_icon_cell_1 = require("./qin-icon-cell");
const qin_line_1 = require("./qin-line");
class QinIconPick extends qin_edit_1.QinEdit {
    constructor(options, isQindred) {
        super((isQindred ? isQindred + "_" : "") + "icon-pick", new qin_line_1.QinLine());
        this._readOnly = false;
        this.style.putAsEditable();
        if (options === null || options === void 0 ? void 0 : options.initial) {
            this.setData(options === null || options === void 0 ? void 0 : options.initial);
        }
        if (options === null || options === void 0 ? void 0 : options.icons) {
            for (const icon of options.icons) {
                this.addIcon(icon);
            }
        }
        if (options === null || options === void 0 ? void 0 : options.cells) {
            for (const cell of options.cells) {
                this.addCell(cell);
            }
        }
        if (options === null || options === void 0 ? void 0 : options.readOnly) {
            this.turnReadOnly();
        }
    }
    castedQine() {
        return this.qinedBase;
    }
    styled(styles) {
        super.styled(styles);
        return this;
    }
    getNature() {
        return qinpel_res_1.QinNature.CHARS;
    }
    getData() {
        for (let child of this.children()) {
            if (child instanceof qin_icon_cell_1.QinIconCell) {
                if (child.selected) {
                    return child.qinIcon.asset;
                }
            }
        }
        return null;
    }
    setData(asset) {
        let found = false;
        for (let child of this.qinedBase.children()) {
            if (child instanceof qin_icon_cell_1.QinIconCell) {
                if (child.qinIcon.asset == asset) {
                    found = true;
                    child.selected = true;
                }
                else {
                    child.selected = false;
                }
            }
        }
    }
    mayChange() {
        return [];
    }
    turnReadOnly() {
        this._readOnly = true;
        this.style.putAsReadOnly();
    }
    turnEditable() {
        this._readOnly = false;
        this.style.putAsEditable();
    }
    isEditable() {
        return !this._readOnly;
    }
    addIcon(icon) {
        this.addCell(new qin_icon_cell_1.QinIconCell(icon));
    }
    addCell(cell) {
        cell.addActionMain((_) => {
            if (this.isEditable()) {
                this.setData(cell.asset);
            }
        });
        cell.install(this.qinedBase);
    }
}
exports.QinIconPick = QinIconPick;

},{"./qin-edit":33,"./qin-icon-cell":38,"./qin-line":43,"qinpel-res":57}],40:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinIcon = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_assets_1 = require("./qin-assets");
const qin_base_1 = require("./qin-base");
class QinIcon extends qin_base_1.QinBase {
    constructor(asset, size = qinpel_res_1.QinGrandeur.SMALL, isQindred) {
        super((isQindred ? isQindred + "_" : "") + "icon", document.createElement("img"));
        this.castedQine().src = (0, qin_assets_1.qinAssetUrl)(asset);
        qinpel_res_1.QinSkin.styleSize(this.qinedHTML, size);
    }
    castedQine() {
        return this.qinedHTML;
    }
    styled(styles) {
        super.styled(styles);
        return this;
    }
    get asset() {
        return (0, qin_assets_1.qinUrlAsset)(this.castedQine().src);
    }
    set asset(asset) {
        this.castedQine().src = (0, qin_assets_1.qinAssetUrl)(asset);
    }
    get size() {
        return qinpel_res_1.QinSkin.getDimension(this.qinedHTML);
    }
}
exports.QinIcon = QinIcon;

},{"./qin-assets":25,"./qin-base":27,"qinpel-res":57}],41:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinInteger = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_edit_1 = require("./qin-edit");
class QinInteger extends qin_edit_1.QinEdit {
    constructor(options, isQindred) {
        super((isQindred ? isQindred + "_" : "") + "integer", document.createElement("input"));
        this.castedQine().type = "number";
        qinpel_res_1.QinSkin.styleAsEditable(this.qinedHTML);
        this.qinedHTML.style.width = "120px";
        this.qinedHTML.addEventListener("focusout", () => {
            this.setData(this.getData());
        });
        if (options === null || options === void 0 ? void 0 : options.initial) {
            this.setData(options.initial);
        }
        if (options === null || options === void 0 ? void 0 : options.readOnly) {
            this.turnReadOnly();
        }
    }
    castedQine() {
        return this.qinedHTML;
    }
    styled(styles) {
        super.styled(styles);
        return this;
    }
    getNature() {
        return qinpel_res_1.QinNature.INT;
    }
    getData() {
        const value = this.castedQine().value;
        if (value == null || value == undefined || value.length == 0) {
            return null;
        }
        else {
            return parseInt(value, 10);
        }
    }
    setData(data) {
        if (data == null || data == undefined) {
            this.castedQine().value = "";
        }
        else {
            this.castedQine().value = data.toString();
        }
    }
    mayChange() {
        return [this.castedQine()];
    }
    turnReadOnly() {
        this.castedQine().readOnly = true;
        qinpel_res_1.QinSkin.styleAsReadOnly(this.qinedHTML);
    }
    turnEditable() {
        this.castedQine().readOnly = false;
        qinpel_res_1.QinSkin.styleAsEditable(this.qinedHTML);
    }
    isEditable() {
        return !this.castedQine().readOnly;
    }
}
exports.QinInteger = QinInteger;

},{"./qin-edit":33,"qinpel-res":57}],42:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinLabel = void 0;
const qin_base_1 = require("./qin-base");
class QinLabel extends qin_base_1.QinBase {
    constructor(title, isQindred) {
        super((isQindred ? isQindred + "_" : "") + "label", document.createElement("label"));
        if (title) {
            this.qinedHTML.textContent = title;
        }
    }
    castedQine() {
        return this.qinedHTML;
    }
    styled(styles) {
        super.styled(styles);
        return this;
    }
    get title() {
        return this.qinedHTML.textContent;
    }
    set title(title) {
        this.qinedHTML.textContent = title;
    }
    get link() {
        return this.qinedHTML.getAttribute("for");
    }
    set link(name) {
        this.qinedHTML.setAttribute("for", name);
    }
    qinLink(qinComp) {
        this.link = qinComp.mustId();
    }
}
exports.QinLabel = QinLabel;

},{"./qin-base":27}],43:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinLine = void 0;
const qin_panel_1 = require("./qin-panel");
class QinLine extends qin_panel_1.QinPanel {
    constructor(options, isQindred) {
        super(options, (isQindred ? isQindred + "_" : "") + "line");
        this.style.putAsFlexDirectionRow();
        this.style.putAsFlexWrap();
        this.qinedHTML.style.minWidth = "min-content";
        this.qinedHTML.style.minHeight = "min-content";
    }
    styled(styles) {
        super.styled(styles);
        return this;
    }
    put(item) {
        item.install(this);
        return this;
    }
}
exports.QinLine = QinLine;

},{"./qin-panel":45}],44:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinMutantsArm = exports.QinMutants = void 0;
const qin_boolean_1 = require("./qin-boolean");
const qin_combo_1 = require("./qin-combo");
const qin_file_path_1 = require("./qin-file-path");
const qin_file_pick_1 = require("./qin-file-pick");
const qin_file_view_1 = require("./qin-file-view");
const qin_icon_pick_1 = require("./qin-icon-pick");
const qin_integer_1 = require("./qin-integer");
const qin_string_1 = require("./qin-string");
const qin_tool_1 = require("./qin-tool");
var QinMutants;
(function (QinMutants) {
    QinMutants["BOOLEAN"] = "boolean";
    QinMutants["INTEGER"] = "integer";
    QinMutants["STRING"] = "string";
    QinMutants["COMBO"] = "combo";
    QinMutants["ICON_PICK"] = "icon-pick";
    QinMutants["FILE_PATH"] = "file_path";
    QinMutants["FILE_PICK"] = "file_pick";
    QinMutants["FILE_VIEW"] = "file_view";
})(QinMutants = exports.QinMutants || (exports.QinMutants = {}));
function newEdit(kind, options) {
    switch (kind) {
        case QinMutants.BOOLEAN:
            return new qin_boolean_1.QinBoolean(options);
        case QinMutants.INTEGER:
            return new qin_integer_1.QinInteger(options);
        case QinMutants.STRING:
            return new qin_string_1.QinString(options);
        case QinMutants.COMBO:
            return new qin_combo_1.QinCombo(options);
        case QinMutants.ICON_PICK:
            return new qin_icon_pick_1.QinIconPick(options);
        case QinMutants.FILE_PATH:
            return new qin_file_path_1.QinFilePath(options);
        case QinMutants.FILE_PICK:
            return new qin_file_pick_1.QinFilePick(options);
        case QinMutants.FILE_VIEW:
            return new qin_file_view_1.QinFileView(options);
        default:
            throw new Error(qin_tool_1.QinTool.qinpel.tr("Unknown kind of mutant to create: ") + kind);
    }
}
exports.QinMutantsArm = {
    newEdit,
};

},{"./qin-boolean":28,"./qin-combo":31,"./qin-file-path":35,"./qin-file-pick":36,"./qin-file-view":37,"./qin-icon-pick":39,"./qin-integer":41,"./qin-string":52,"./qin-tool":56}],45:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinPanel = void 0;
const qin_base_1 = require("./qin-base");
class QinPanel extends qin_base_1.QinBase {
    constructor(options, isQindred) {
        super((isQindred ? isQindred + "_" : "") + "panel", document.createElement("div"));
        this.style.putAsDisplayFlex();
        if (options === null || options === void 0 ? void 0 : options.items) {
            for (const item of options.items) {
                item.install(this);
            }
        }
    }
    castedQine() {
        return this.qinedHTML;
    }
    styled(styles) {
        super.styled(styles);
        return this;
    }
    put(item) {
        item.install(this);
        return this;
    }
}
exports.QinPanel = QinPanel;

},{"./qin-base":27}],46:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinPopup = void 0;
const qin_tool_1 = require("./qin-tool");
class QinPopup {
    constructor(contents) {
        this._qinMain = qin_tool_1.QinTool.qinpel.jobbed.newPopup(contents.castedQine());
    }
    show() {
        this._qinMain.show();
    }
    showOnParent(parent) {
        this._qinMain.showOnParent(parent.qinedHTML);
    }
    showOnBounds(bounds) {
        this._qinMain.showOnBounds(bounds);
    }
    close() {
        this._qinMain.close();
    }
}
exports.QinPopup = QinPopup;

},{"./qin-tool":56}],47:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinRow = void 0;
const qin_panel_1 = require("./qin-panel");
class QinRow extends qin_panel_1.QinPanel {
    constructor(options, isQindred) {
        super(options, (isQindred ? isQindred + "_" : "") + "row");
        this.style.putAsFlexDirectionRow();
        this.style.putAsFlexWrapNot();
        this.qinedHTML.style.minWidth = "min-content";
        this.qinedHTML.style.minHeight = "min-content";
    }
    styled(styles) {
        return this;
    }
    put(item) {
        item.install(this);
        return this;
    }
}
exports.QinRow = QinRow;

},{"./qin-panel":45}],48:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinScroll = void 0;
const qin_panel_1 = require("./qin-panel");
class QinScroll extends qin_panel_1.QinPanel {
    constructor(options, isQindred) {
        super(options, (isQindred ? isQindred + "_" : "") + "scroll");
        this.style.putAsScroll();
    }
    styled(styles) {
        super.styled(styles);
        return this;
    }
    put(item) {
        item.install(this);
        return this;
    }
}
exports.QinScroll = QinScroll;

},{"./qin-panel":45}],49:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinSpacer = void 0;
const qin_panel_1 = require("./qin-panel");
class QinSpacer extends qin_panel_1.QinPanel {
    constructor(distance, isQindred) {
        super(null, (isQindred ? isQindred + "_" : "") + "spacer");
        this.style.putAsMinSize(distance !== null && distance !== void 0 ? distance : 4, distance !== null && distance !== void 0 ? distance : 4);
    }
    styled(styles) {
        super.styled(styles);
        return this;
    }
}
exports.QinSpacer = QinSpacer;

},{"./qin-panel":45}],50:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinSplitter = void 0;
const qin_base_1 = require("./qin-base");
class QinSplitter extends qin_base_1.QinBase {
    constructor(options, isQindred) {
        super((isQindred ? isQindred + "_" : "") + "splitter", document.createElement("div"));
        this._elSideA = document.createElement("div");
        this._elMover = document.createElement("div");
        this._elGrowA = document.createElement("div");
        this._elGrowB = document.createElement("div");
        this._elSideB = document.createElement("div");
        this._isHorizontal = true;
        this._qinSideA = null;
        this._qinSideB = null;
        this.qinedHTML.appendChild(this._elSideA);
        this.qinedHTML.appendChild(this._elMover);
        this._elMover.appendChild(this._elGrowA);
        this._elMover.appendChild(this._elGrowB);
        this.qinedHTML.appendChild(this._elSideB);
        this.qinedHTML.style.display = "flex";
        this.qinedHTML.style.flexWrap = "nowrap";
        this._elSideA.style.display = "flex";
        this._elSideA.style.flexWrap = "nowrap";
        this._elSideA.style.overflow = "auto";
        this._elMover.style.display = "flex";
        this._elMover.style.flexWrap = "nowrap";
        this._elMover.style.borderRadius = "12px";
        this._elMover.style.border = "1px solid rgba(255,250,239,0.1)";
        this._elMover.style.overflow = "hidden";
        this._elMover.style.flex = "0";
        this._elGrowA.style.flex = "1";
        this._elGrowB.style.flex = "1";
        this._elSideB.style.display = "flex";
        this._elSideB.style.flexWrap = "nowrap";
        this._elSideB.style.overflow = "auto";
        let balance = (grow, fall) => {
            let related = this._isHorizontal ? "width" : "height";
            let growAt = parseInt(grow.style[related]);
            let fallAt = parseInt(fall.style[related]);
            if (fallAt <= 10)
                return;
            grow.style[related] = growAt + 10 + "%";
            fall.style[related] = fallAt - 10 + "%";
        };
        this._elGrowA.addEventListener("mousedown", (_) => balance(this._elSideA, this._elSideB));
        this._elGrowA.addEventListener("touchstart", (_) => balance(this._elSideA, this._elSideB));
        this._elGrowB.addEventListener("mousedown", (_) => balance(this._elSideB, this._elSideA));
        this._elGrowB.addEventListener("touchstart", (_) => balance(this._elSideB, this._elSideA));
        if (options) {
            if (options.sideA) {
                this.setSideA(options.sideA);
            }
            if (options.sideB) {
                this.setSideB(options.sideB);
            }
        }
        if (options === null || options === void 0 ? void 0 : options.horizontal) {
            this.setHorizontal();
        }
        else {
            this.setVertical();
        }
    }
    castedQine() {
        return this.qinedHTML;
    }
    styled(styles) {
        super.styled(styles);
        return this;
    }
    addChild(child) {
        if (this._qinSideA === null) {
            this._qinSideA = child;
            this._elSideA.appendChild(child.qinedHTML);
        }
        else {
            if (this._qinSideB !== null) {
                this._qinSideB.unInstall();
                this._qinSideB = null;
            }
            this._qinSideB = child;
            this._elSideB.appendChild(child.qinedHTML);
        }
        this._baseChildren.push(child);
    }
    delChild(child) {
        let index = this._baseChildren.indexOf(child);
        if (index > -1) {
            this._baseChildren.splice(index, 1);
        }
        if (this._qinSideA === child) {
            this._elSideA.removeChild(child.qinedHTML);
            this._qinSideA = null;
        }
        else if (this._qinSideB === child) {
            this._elSideB.removeChild(child.qinedHTML);
            this._qinSideB = null;
        }
    }
    setHorizontal() {
        this.qinedHTML.style.flexDirection = "row";
        this._elMover.style.flexDirection = "row";
        this._elSideA.style.width = "50%";
        this._elSideA.style.height = "100%";
        this._elSideB.style.width = "50%";
        this._elSideB.style.height = "100%";
        this._elMover.style.minWidth = "24px";
        this._elMover.style.maxWidth = "24px";
        this._elMover.style.minHeight = "initial";
        this._elMover.style.maxHeight = "initial";
        this._elMover.style.width = "24px";
        this._elMover.style.height = "100%";
        this._elGrowA.style.background =
            "linear-gradient(90deg, rgba(255,250,239,0.1) 0%, rgba(255,250,239,0.1) 84%, rgba(24,0,39,0.8) 98%, rgba(24,0,39,0.8) 100%)";
        this._elGrowB.style.background =
            "linear-gradient(270deg, rgba(255,250,239,0.1) 0%, rgba(255,250,239,0.1) 84%, rgba(24,0,39,0.8) 98%, rgba(24,0,39,0.8) 100%)";
        this._isHorizontal = true;
    }
    setVertical() {
        this.qinedHTML.style.flexDirection = "column";
        this._elMover.style.flexDirection = "column";
        this._elSideA.style.width = "100%";
        this._elSideA.style.height = "50%";
        this._elSideB.style.width = "100%";
        this._elSideB.style.height = "50%";
        this._elMover.style.minWidth = "initial";
        this._elMover.style.maxWidth = "initial";
        this._elMover.style.minHeight = "24px";
        this._elMover.style.maxHeight = "24px";
        this._elMover.style.width = "100%";
        this._elMover.style.height = "24px";
        this._elGrowA.style.background =
            "linear-gradient(180deg, rgba(255,250,239,0.1) 0%, rgba(255,250,239,0.1) 84%, rgba(24,0,39,0.8) 98%, rgba(24,0,39,0.8) 100%)";
        this._elGrowB.style.background =
            "linear-gradient(0deg, rgba(255,250,239,0.1) 0%, rgba(255,250,239,0.1) 84%, rgba(24,0,39,0.8) 98%, rgba(24,0,39,0.8) 100%)";
        this._isHorizontal = false;
    }
    setSideA(side) {
        if (this._qinSideA !== null) {
            this._qinSideA.unInstall();
            this._qinSideA = null;
        }
        this._qinSideA = side;
        this._elSideA.appendChild(side.qinedHTML);
    }
    setSideB(side) {
        if (this._qinSideB !== null) {
            this._qinSideB.unInstall();
            this._qinSideB = null;
        }
        this._qinSideB = side;
        this._elSideB.appendChild(side.qinedHTML);
    }
}
exports.QinSplitter = QinSplitter;

},{"./qin-base":27}],51:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinStack = void 0;
const qin_panel_1 = require("./qin-panel");
class QinStack extends qin_panel_1.QinPanel {
    constructor(options, isQindred) {
        super(options, (isQindred ? isQindred + "_" : "") + "stack");
        this.style.putAsFlexDirectionRow();
        this.style.putAsFlexWrapNot();
    }
    styled(styles) {
        super.styled(styles);
        return this;
    }
    put(item) {
        item.install(this);
        return this;
    }
    addChild(child) {
        this.children().forEach((inChild) => {
            inChild.unDisplay();
        });
        super.addChild(child);
    }
    stack(child) {
        return this.put(child);
    }
    show(child) {
        this.children().forEach((inChild) => {
            if (inChild === child) {
                inChild.reDisplay();
            }
            else {
                inChild.unDisplay();
            }
        });
    }
}
exports.QinStack = QinStack;

},{"./qin-panel":45}],52:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinString = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_edit_1 = require("./qin-edit");
class QinString extends qin_edit_1.QinEdit {
    constructor(options, isQindred) {
        super((isQindred ? isQindred + "_" : "") + "string", document.createElement("input"));
        this.castedQine().type = "text";
        this.style.putAsEditable();
        if (options === null || options === void 0 ? void 0 : options.maxLength) {
            this.castedQine().maxLength = options.maxLength;
            let position = Math.min(Math.max(options.maxLength - 10, 0), 90);
            let width = Math.floor(90 + (position * 7) / 3);
            this.qinedHTML.style.width = width + "px";
        }
        if (options === null || options === void 0 ? void 0 : options.initial) {
            this.setData(options.initial);
        }
        if (options === null || options === void 0 ? void 0 : options.readOnly) {
            this.turnReadOnly();
        }
    }
    castedQine() {
        return this.qinedHTML;
    }
    styled(styles) {
        super.styled(styles);
        return this;
    }
    getNature() {
        return qinpel_res_1.QinNature.CHARS;
    }
    getData() {
        return this.castedQine().value;
    }
    setData(data) {
        this.castedQine().value = data;
    }
    mayChange() {
        return [this.castedQine()];
    }
    turnReadOnly() {
        this.castedQine().readOnly = true;
        this.style.putAsReadOnly();
    }
    turnEditable() {
        this.castedQine().readOnly = false;
        this.style.putAsEditable();
    }
    isEditable() {
        return !this.castedQine().readOnly;
    }
    insertAtCursor(data) {
        if (!data)
            return;
        let startPos = this.castedQine().selectionStart;
        let endPos = this.castedQine().selectionEnd;
        let oldVal = this.castedQine().value;
        let newVal = (startPos > 0 ? oldVal.substring(0, startPos) : "") +
            data +
            (endPos < oldVal.length ? oldVal.substring(endPos) : "");
        this.value = newVal;
        this.castedQine().selectionStart = startPos;
        this.castedQine().selectionEnd = startPos + data.length;
    }
}
exports.QinString = QinString;

},{"./qin-edit":33,"qinpel-res":57}],53:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinTable = void 0;
const qin_base_1 = require("./qin-base");
const qin_tool_1 = require("./qin-tool");
class QinTable extends qin_base_1.QinBase {
    constructor(options, isQindred) {
        var _a;
        super((isQindred ? isQindred + "_" : "") + "table", document.createElement("div"));
        this._elTable = document.createElement("table");
        this._elTHead = document.createElement("thead");
        this._elTHeadRow = document.createElement("tr");
        this._elTBody = document.createElement("tbody");
        this._linesSize = 0;
        this._onLineMainAct = null;
        this._onLineMidiAct = null;
        this._onLineMenuAct = null;
        this._onColumnMainAct = null;
        this._onColumnMidiAct = null;
        this._onColumnMenuAct = null;
        this.qinedHTML.appendChild(this._elTable);
        this._elTable.appendChild(this._elTHead);
        this._elTHead.appendChild(this._elTHeadRow);
        this._elTable.appendChild(this._elTBody);
        styles.applyOnTable(this._elTable);
        styles.applyOnHead(this._elTHead);
        styles.applyOnHeadRow(this._elTHeadRow);
        styles.applyOnBody(this._elTBody);
        if (options) {
            if (options.head) {
                this.setHead(options.head);
            }
            if (options.lines) {
                this.setLines(options.lines);
            }
        }
        this._singleSelection = (_a = options === null || options === void 0 ? void 0 : options.singleSelection) !== null && _a !== void 0 ? _a : false;
    }
    castedQine() {
        return this.qinedHTML;
    }
    styled(styles) {
        super.styled(styles);
        return this;
    }
    getLines() {
        let result = [];
        this._elTBody.querySelectorAll("tr").forEach((tr) => {
            result.push(this.getColumnsValues(tr));
        });
        return result;
    }
    getLinesSize() {
        return this._elTBody.querySelectorAll("tr").length;
    }
    getLine(row) {
        let lines = this._elTBody.querySelectorAll("tr");
        if (row < lines.length) {
            return this.getColumnsValues(lines[row]);
        }
        return null;
    }
    getColumnsValues(tr) {
        let result = [];
        tr.querySelectorAll("td").forEach((td) => {
            result.push(td.innerText);
        });
        return result;
    }
    setHead(head) {
        this._elTHeadRow.innerHTML = "";
        for (const cell of head) {
            let th = document.createElement("th");
            th.innerText = cell;
            styles.applyOnHeadCol(th);
            this._elTHeadRow.appendChild(th);
        }
    }
    getHead() {
        let result = [];
        this._elTHeadRow.querySelectorAll("th").forEach((th) => {
            result.push(th.innerText);
        });
        return result;
    }
    addHead(head) {
        let th = document.createElement("th");
        th.innerText = head;
        styles.applyOnHeadCol(th);
        this._elTHeadRow.appendChild(th);
    }
    setLines(lines) {
        this.delLines();
        for (const line of lines) {
            this.addLine(line);
        }
    }
    setLine(row, values) {
        let lines = this._elTBody.querySelectorAll("tr");
        let rowElement = lines[row];
        let columns = rowElement.querySelectorAll("td");
        for (let i = 0; i < values.length; i++) {
            columns[i].innerText = values[i];
        }
    }
    addLine(line) {
        const tr = document.createElement("tr");
        if (this._linesSize % 2 === 0) {
            styles.applyOnBodyRow(tr);
        }
        else {
            styles.applyOnBodyRowOdd(tr);
        }
        const row = this._elTBody.children.length;
        if (this._onLineMainAct) {
            tr.style.cursor = "pointer";
            qin_tool_1.QinTool.qinpel.our.soul.arms.addActionMain(tr, (_) => {
                this._onLineMainAct.forEach((act) => {
                    act(row, this.getColumnsValues(tr));
                });
            });
        }
        if (this._onLineMidiAct) {
            tr.style.cursor = "pointer";
            qin_tool_1.QinTool.qinpel.our.soul.arms.addActionMidi(tr, (_) => {
                this._onLineMidiAct.forEach((act) => {
                    act(row, this.getColumnsValues(tr));
                });
            });
        }
        if (this._onLineMenuAct) {
            tr.style.cursor = "pointer";
            qin_tool_1.QinTool.qinpel.our.soul.arms.addActionMenu(tr, (_) => {
                this._onLineMenuAct.forEach((act) => {
                    act(row, this.getColumnsValues(tr));
                });
            });
        }
        let column = 0;
        for (const cell of line) {
            const td = document.createElement("td");
            td.innerText = cell.toString();
            styles.applyOnBodyCol(td);
            if (this._onColumnMainAct) {
                td.style.cursor = "pointer";
                qin_tool_1.QinTool.qinpel.our.soul.arms.addActionMain(td, (_) => {
                    this._onColumnMainAct.forEach((act) => {
                        act(row, column, td.innerText);
                    });
                });
            }
            if (this._onColumnMidiAct) {
                td.style.cursor = "pointer";
                qin_tool_1.QinTool.qinpel.our.soul.arms.addActionMidi(td, (_) => {
                    this._onColumnMidiAct.forEach((act) => {
                        act(row, column, td.innerText);
                    });
                });
            }
            if (this._onColumnMenuAct) {
                td.style.cursor = "pointer";
                qin_tool_1.QinTool.qinpel.our.soul.arms.addActionMenu(td, (_) => {
                    this._onColumnMenuAct.forEach((act) => {
                        act(row, column, td.innerText);
                    });
                });
            }
            tr.appendChild(td);
            column++;
        }
        this._elTBody.appendChild(tr);
        this._linesSize++;
    }
    delLines() {
        this._elTBody.innerHTML = "";
        this._linesSize = 0;
    }
    delLine(row) {
        let lines = this._elTBody.querySelectorAll("tr");
        this._elTBody.removeChild(lines[row]);
    }
    select(row) {
        if (this._singleSelection) {
            this.unselectAll();
        }
        let lines = this._elTBody.querySelectorAll("tr");
        if (row < lines.length) {
            lines[row].querySelectorAll("td").forEach((td) => {
                td.style.backgroundColor = "#3333ff33";
            });
        }
    }
    unselect(row) {
        let lines = this._elTBody.querySelectorAll("tr");
        if (row < lines.length) {
            lines[row].querySelectorAll("td").forEach((td) => {
                td.style.backgroundColor = "#ffffff00";
            });
        }
    }
    unselectAll() {
        let lines = this._elTBody.querySelectorAll("tr");
        lines.forEach((tr) => {
            tr.querySelectorAll("td").forEach((td) => {
                td.style.backgroundColor = "#ffffff00";
            });
        });
    }
    scrollTo(row) {
        let index = 0;
        this._elTBody.querySelectorAll("tr").forEach((tr) => {
            if (index === row) {
                tr.scrollIntoView();
            }
            index++;
        });
    }
    addOnLineMainAct(act) {
        if (!this._onLineMainAct) {
            this._onLineMainAct = [];
        }
        this._onLineMainAct.push(act);
    }
    delOnLineMainAct(act) {
        if (this._onLineMainAct) {
            const index = this._onLineMainAct.indexOf(act);
            if (index > -1) {
                this._onLineMainAct.splice(index, 1);
            }
        }
    }
    addOnLineMidiAct(act) {
        if (!this._onLineMidiAct) {
            this._onLineMidiAct = [];
        }
        this._onLineMidiAct.push(act);
    }
    delOnLineMidiAct(act) {
        if (this._onLineMidiAct) {
            const index = this._onLineMidiAct.indexOf(act);
            if (index > -1) {
                this._onLineMidiAct.splice(index, 1);
            }
        }
    }
    addOnLineMenuAct(act) {
        if (!this._onLineMenuAct) {
            this._onLineMenuAct = [];
        }
        this._onLineMenuAct.push(act);
    }
    delOnLineMenuAct(act) {
        if (this._onLineMenuAct) {
            const index = this._onLineMenuAct.indexOf(act);
            if (index > -1) {
                this._onLineMenuAct.splice(index, 1);
            }
        }
    }
    addOnColumnMainAct(act) {
        if (!this._onColumnMainAct) {
            this._onColumnMainAct = [];
        }
        this._onColumnMainAct.push(act);
    }
    delOnColumnMainAct(act) {
        if (this._onColumnMainAct) {
            const index = this._onColumnMainAct.indexOf(act);
            if (index > -1) {
                this._onColumnMainAct.splice(index, 1);
            }
        }
    }
    addOnColumnMidiAct(act) {
        if (!this._onColumnMidiAct) {
            this._onColumnMidiAct = [];
        }
        this._onColumnMidiAct.push(act);
    }
    delOnColumnMidiAct(act) {
        if (this._onColumnMidiAct) {
            const index = this._onColumnMidiAct.indexOf(act);
            if (index > -1) {
                this._onColumnMidiAct.splice(index, 1);
            }
        }
    }
    addOnColumnMenuAct(act) {
        if (!this._onColumnMenuAct) {
            this._onColumnMenuAct = [];
        }
        this._onColumnMenuAct.push(act);
    }
    delOnColumnMenuAct(act) {
        if (this._onColumnMenuAct) {
            const index = this._onColumnMenuAct.indexOf(act);
            if (index > -1) {
                this._onColumnMenuAct.splice(index, 1);
            }
        }
    }
}
exports.QinTable = QinTable;
const styles = {
    applyOnTable: (el) => {
        el.style.margin = "0px";
        el.style.padding = "0px";
        el.style.border = "1px solid #9e9e9e";
    },
    applyOnHead: (el) => {
        el.style.margin = "0px";
        el.style.padding = "0px";
    },
    applyOnHeadRow: (el) => {
        el.style.margin = "0px";
        el.style.padding = "0px";
        el.style.backgroundColor = "#56cd6436";
    },
    applyOnHeadCol: (el) => {
        el.style.margin = "0px";
        el.style.padding = "5px";
        el.style.borderRight = "1px solid #5e5e5e";
        el.style.borderBottom = "2px solid #5e5e5e";
    },
    applyOnBody: (el) => {
        el.style.margin = "0px";
        el.style.padding = "0px";
    },
    applyOnBodyRow: (el) => {
        el.style.margin = "0px";
        el.style.padding = "0px";
        el.style.backgroundColor = "#ba56cd1f";
        el.addEventListener("mouseenter", () => {
            el.style.backgroundColor = "#cd566436";
        });
        el.addEventListener("mouseleave", () => {
            el.style.backgroundColor = "#ba56cd1f";
        });
    },
    applyOnBodyRowOdd: (el) => {
        el.style.margin = "0px";
        el.style.padding = "0px";
        el.style.backgroundColor = "#cda9561f";
        el.addEventListener("mouseenter", () => {
            el.style.backgroundColor = "#cd566436";
        });
        el.addEventListener("mouseleave", () => {
            el.style.backgroundColor = "#cda9561f";
        });
    },
    applyOnBodyCol: (el) => {
        el.style.margin = "0px";
        el.style.padding = "5px";
        el.style.borderRight = "1px solid #5e5e5e";
        el.style.borderBottom = "2px solid #5e5e5e";
        el.style.backgroundColor = "#ffffff00";
    },
};

},{"./qin-base":27,"./qin-tool":56}],54:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinTabs = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_button_1 = require("./qin-button");
const qin_column_1 = require("./qin-column");
const qin_label_1 = require("./qin-label");
const qin_line_1 = require("./qin-line");
const qin_panel_1 = require("./qin-panel");
class QinTabs extends qin_column_1.QinColumn {
    constructor(options, isQindred) {
        super(null, (isQindred ? isQindred + "_" : "") + "tabs");
        this._qinTabs = new qin_line_1.QinLine();
        this._qinPanel = new qin_panel_1.QinPanel();
        this._tabs = [];
        this._qinTabs.install(this);
        this._qinPanel.install(this);
        if (options === null || options === void 0 ? void 0 : options.initial) {
            for (const tab of options === null || options === void 0 ? void 0 : options.initial) {
                this.addTab(tab);
            }
        }
    }
    styled(styles) {
        super.styled(styles);
        return this;
    }
    get qinTabs() {
        return this._qinTabs;
    }
    get qinPanel() {
        return this._qinPanel;
    }
    addTab(tab) {
        const button = new qin_button_1.QinButton({ label: new qin_label_1.QinLabel(tab.title) });
        button.style.putAsBackground(qinpel_res_1.QinSkin.styles.ColorInactive);
        button.addAction((qinEvent) => {
            if (qinEvent.isMain) {
                this.showViewer(tab.viewer);
            }
        });
        button.install(this._qinTabs);
        let first = this._tabs.length == 0;
        let tabRef = {
            title: tab.title,
            viewer: tab.viewer,
            button,
        };
        this._tabs.push(tabRef);
        if (first) {
            this.showViewer(tab.viewer);
        }
    }
    showTab(title) {
        for (const tab of this._tabs) {
            if (tab.title == title) {
                this.showViewer(tab.viewer);
                break;
            }
        }
    }
    showViewer(viewer) {
        this._qinPanel.unInstallChildren();
        viewer.install(this._qinPanel);
        for (const tab of this._tabs) {
            if (tab.viewer == viewer) {
                tab.button.style.putAsBackground(qinpel_res_1.QinSkin.styles.ColorActive);
            }
            else {
                tab.button.style.putAsBackground(qinpel_res_1.QinSkin.styles.ColorInactive);
            }
        }
    }
}
exports.QinTabs = QinTabs;

},{"./qin-button":29,"./qin-column":30,"./qin-label":42,"./qin-line":43,"./qin-panel":45,"qinpel-res":57}],55:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinTitled = void 0;
const qin_column_1 = require("./qin-column");
const qin_label_1 = require("./qin-label");
const qin_line_1 = require("./qin-line");
class QinTitled extends qin_column_1.QinColumn {
    constructor(options, isQindred) {
        super(null, (isQindred ? isQindred + "_" : "") + "titled");
        this._qinTitle = new qin_label_1.QinLabel();
        this._qinHead = new qin_line_1.QinLine({ items: [this._qinTitle] });
        this._qinBody = new qin_line_1.QinLine();
        if (options === null || options === void 0 ? void 0 : options.title) {
            this._qinTitle.title = options.title;
        }
        this._qinHead.install(this);
        this._qinBody.install(this);
        if (options === null || options === void 0 ? void 0 : options.items) {
            options.items.forEach((item) => item.install(this));
        }
    }
    styled(styles) {
        super.styled(styles);
        return this;
    }
    put(item) {
        item.install(this);
        return this;
    }
    addChild(child) {
        if (child === this._qinBody || child === this._qinHead) {
            super.addChild(child);
        }
        else {
            this._qinBody.addChild(child);
        }
    }
    delChild(child) {
        if (child === this._qinBody || child === this._qinHead) {
            super.delChild(child);
        }
        else {
            this._qinBody.delChild(child);
        }
    }
    get title() {
        return this._qinTitle.title;
    }
    set title(title) {
        this._qinTitle.title = title;
    }
}
exports.QinTitled = QinTitled;

},{"./qin-column":30,"./qin-label":42,"./qin-line":43}],56:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinTool = void 0;
const refQinpel = window.frameElement.qinpel;
exports.QinTool = {
    qinpel: refQinpel,
};

},{}],57:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinSoul = exports.QinSkin = exports.QinStyles = exports.QinGrandeur = exports.QinBounds = exports.QinDimension = exports.QinPoint = exports.QinLegs = exports.QinHead = exports.tr = exports.QinFoot = exports.QinFilesDescriptor = exports.QinFilesOperation = exports.QinFilesNature = exports.QinBody = exports.QinNature = exports.QinArms = exports.QinPointerCalls = exports.QinWaiters = exports.QinEvent = exports.QinActionKind = void 0;
var qin_arms_1 = require("./qin-arms");
Object.defineProperty(exports, "QinActionKind", { enumerable: true, get: function () { return qin_arms_1.QinActionKind; } });
var qin_arms_2 = require("./qin-arms");
Object.defineProperty(exports, "QinEvent", { enumerable: true, get: function () { return qin_arms_2.QinEvent; } });
var qin_arms_3 = require("./qin-arms");
Object.defineProperty(exports, "QinWaiters", { enumerable: true, get: function () { return qin_arms_3.QinWaiters; } });
var qin_arms_4 = require("./qin-arms");
Object.defineProperty(exports, "QinPointerCalls", { enumerable: true, get: function () { return qin_arms_4.QinPointerCalls; } });
var qin_arms_5 = require("./qin-arms");
Object.defineProperty(exports, "QinArms", { enumerable: true, get: function () { return qin_arms_5.QinArms; } });
var qin_body_1 = require("./qin-body");
Object.defineProperty(exports, "QinNature", { enumerable: true, get: function () { return qin_body_1.QinNature; } });
var qin_body_2 = require("./qin-body");
Object.defineProperty(exports, "QinBody", { enumerable: true, get: function () { return qin_body_2.QinBody; } });
var qin_foot_1 = require("./qin-foot");
Object.defineProperty(exports, "QinFilesNature", { enumerable: true, get: function () { return qin_foot_1.QinFilesNature; } });
var qin_foot_2 = require("./qin-foot");
Object.defineProperty(exports, "QinFilesOperation", { enumerable: true, get: function () { return qin_foot_2.QinFilesOperation; } });
var qin_foot_3 = require("./qin-foot");
Object.defineProperty(exports, "QinFilesDescriptor", { enumerable: true, get: function () { return qin_foot_3.QinFilesDescriptor; } });
var qin_foot_4 = require("./qin-foot");
Object.defineProperty(exports, "QinFoot", { enumerable: true, get: function () { return qin_foot_4.QinFoot; } });
var qin_head_1 = require("./qin-head");
Object.defineProperty(exports, "tr", { enumerable: true, get: function () { return qin_head_1.tr; } });
var qin_head_2 = require("./qin-head");
Object.defineProperty(exports, "QinHead", { enumerable: true, get: function () { return qin_head_2.QinHead; } });
var qin_legs_1 = require("./qin-legs");
Object.defineProperty(exports, "QinLegs", { enumerable: true, get: function () { return qin_legs_1.QinLegs; } });
var qin_skin_1 = require("./qin-skin");
Object.defineProperty(exports, "QinPoint", { enumerable: true, get: function () { return qin_skin_1.QinPoint; } });
var qin_skin_2 = require("./qin-skin");
Object.defineProperty(exports, "QinDimension", { enumerable: true, get: function () { return qin_skin_2.QinDimension; } });
var qin_skin_3 = require("./qin-skin");
Object.defineProperty(exports, "QinBounds", { enumerable: true, get: function () { return qin_skin_3.QinBounds; } });
var qin_skin_4 = require("./qin-skin");
Object.defineProperty(exports, "QinGrandeur", { enumerable: true, get: function () { return qin_skin_4.QinGrandeur; } });
var qin_skin_5 = require("./qin-skin");
Object.defineProperty(exports, "QinStyles", { enumerable: true, get: function () { return qin_skin_5.QinStyles; } });
var qin_skin_6 = require("./qin-skin");
Object.defineProperty(exports, "QinSkin", { enumerable: true, get: function () { return qin_skin_6.QinSkin; } });
var qin_soul_1 = require("./qin-soul");
Object.defineProperty(exports, "QinSoul", { enumerable: true, get: function () { return qin_soul_1.QinSoul; } });

},{"./qin-arms":58,"./qin-body":59,"./qin-foot":60,"./qin-head":61,"./qin-legs":62,"./qin-skin":63,"./qin-soul":64}],58:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinArms = exports.QinPointerCalls = exports.QinWaiters = exports.QinEvent = exports.QinActionKind = void 0;
const qin_skin_1 = require("./qin-skin");
var QinActionKind;
(function (QinActionKind) {
    QinActionKind["MAIN"] = "MAIN";
    QinActionKind["MIDI"] = "MIDI";
    QinActionKind["MENU"] = "MENU";
})(QinActionKind = exports.QinActionKind || (exports.QinActionKind = {}));
class QinEvent {
    constructor(origin, isStart, kind) {
        var _a, _b, _c;
        this._eventKey = null;
        this._eventMouse = null;
        this._eventTouch = null;
        this._point = null;
        this._stop = false;
        this._origin = origin;
        this._start = isStart;
        this._eventKey = (_a = kind === null || kind === void 0 ? void 0 : kind.eventKey) !== null && _a !== void 0 ? _a : null;
        this._eventMouse = (_b = kind === null || kind === void 0 ? void 0 : kind.eventMouse) !== null && _b !== void 0 ? _b : null;
        this._eventTouch = (_c = kind === null || kind === void 0 ? void 0 : kind.eventTouch) !== null && _c !== void 0 ? _c : null;
        if (this._eventMouse) {
            this._point = makeEventMousePoint(isStart, this._eventMouse);
        }
        else if (this._eventTouch) {
            this._point = makeEventTouch(isStart, this._eventTouch);
        }
    }
    get isStart() {
        return this._start;
    }
    get fromOrigin() {
        return this._origin;
    }
    get fromTarget() {
        if (this._eventKey) {
            return this._eventKey.target;
        }
        else if (this._eventMouse) {
            return this._eventMouse.target;
        }
        else if (this._eventTouch) {
            return this._eventTouch.target;
        }
        return null;
    }
    get fromTyping() {
        return !!this._eventKey;
    }
    get fromPointing() {
        return !!this._point;
    }
    get hasAlt() {
        if (this._eventKey) {
            return this._eventKey.altKey;
        }
        else if (this._eventMouse) {
            return this._eventMouse.altKey;
        }
        else if (this._eventTouch) {
            return this._eventTouch.altKey;
        }
        return false;
    }
    get hasCtrl() {
        if (this._eventKey) {
            return this._eventKey.ctrlKey;
        }
        else if (this._eventMouse) {
            return this._eventMouse.ctrlKey;
        }
        else if (this._eventTouch) {
            return this._eventTouch.ctrlKey;
        }
        return false;
    }
    get hasShift() {
        if (this._eventKey) {
            return this._eventKey.shiftKey;
        }
        else if (this._eventMouse) {
            return this._eventMouse.shiftKey;
        }
        else if (this._eventTouch) {
            return this._eventTouch.shiftKey;
        }
        return false;
    }
    get hasMeta() {
        if (this._eventKey) {
            return this._eventKey.metaKey;
        }
        else if (this._eventMouse) {
            return this._eventMouse.metaKey;
        }
        else if (this._eventTouch) {
            return this._eventTouch.metaKey;
        }
        return false;
    }
    get keyTyped() {
        if (this._eventKey) {
            return this._eventKey.key;
        }
        return null;
    }
    get isEnter() {
        return isKeyEnter(this._eventKey);
    }
    get isEscape() {
        return isKeyEscape(this._eventKey);
    }
    get isSpace() {
        return isKeySpace(this._eventKey);
    }
    get isDouble() {
        if (this._eventMouse) {
            return isEventMouseDouble(this._start, this._eventMouse);
        }
        else if (this._eventTouch) {
            return isEventTouchDouble(this._start, this._eventTouch);
        }
        return false;
    }
    get isLong() {
        if (this._eventMouse) {
            return isEventMouseLong(this._start, this._eventMouse);
        }
        else if (this._eventTouch) {
            return isEventTouchLong(this._start, this._eventTouch);
        }
        return false;
    }
    get point() {
        return this._point;
    }
    get pointX() {
        var _a;
        return (_a = this._point) === null || _a === void 0 ? void 0 : _a.posX;
    }
    get pointY() {
        var _a;
        return (_a = this._point) === null || _a === void 0 ? void 0 : _a.posY;
    }
    get isFirstButton() {
        return isFirstButton(this._eventMouse);
    }
    get isMiddleButton() {
        return isMiddleButton(this._eventMouse);
    }
    get isSecondButton() {
        return isSecondButton(this._eventMouse);
    }
    get isOneFinger() {
        return isOneFinger(this._eventTouch);
    }
    get isTwoFingers() {
        return isTwoFingers(this._eventTouch);
    }
    get isThreeFingers() {
        return isThreeFingers(this._eventTouch);
    }
    get isFourFingers() {
        return isFourFingers(this._eventTouch);
    }
    get isMain() {
        if (this._start) {
            return false;
        }
        if (this._eventKey) {
            return isMainKey(this._eventKey);
        }
        else if (this._eventMouse) {
            return isMainMouse(this._eventMouse);
        }
        else if (this._eventTouch) {
            return isMainTouch(this._eventTouch);
        }
        return false;
    }
    get isMainKey() {
        if (this._start) {
            return false;
        }
        return isMainKey(this._eventKey);
    }
    get isMainMouse() {
        if (this._start) {
            return false;
        }
        return isMainMouse(this._eventMouse);
    }
    get isMainTouch() {
        if (this._start) {
            return false;
        }
        return isMainTouch(this._eventTouch);
    }
    get isMainPoint() {
        if (this._start) {
            return false;
        }
        return isMainMouse(this._eventMouse) || isMainTouch(this._eventTouch);
    }
    get isMidi() {
        if (this._start) {
            return false;
        }
        if (this._eventKey) {
            return isMidiKey(this._eventKey);
        }
        else if (this._eventMouse) {
            return isMidiMouse(this._eventMouse);
        }
        else if (this._eventTouch) {
            return isMidiTouch(this._eventTouch);
        }
        return false;
    }
    get isMidiKey() {
        if (this._start) {
            return false;
        }
        return isMidiKey(this._eventKey);
    }
    get isMidiMouse() {
        if (this._start) {
            return false;
        }
        return isMidiMouse(this._eventMouse);
    }
    get isMidiTouch() {
        if (this._start) {
            return false;
        }
        return isMidiTouch(this._eventTouch);
    }
    get isMidiPoint() {
        if (this._start) {
            return false;
        }
        if (this._eventMouse) {
            return isMidiMouse(this._eventMouse);
        }
        else if (this._eventTouch) {
            return isMidiTouch(this._eventTouch);
        }
        return false;
    }
    get isMenu() {
        if (this._start) {
            return false;
        }
        if (this._eventKey) {
            return isMenuKey(this._eventKey);
        }
        else if (this._eventKey) {
            return isMenuMouse(this._eventMouse);
        }
        else if (this._eventKey) {
            return isMenuTouch(this._eventTouch);
        }
        return false;
    }
    get isMenuKey() {
        if (this._start) {
            return false;
        }
        return isMenuKey(this._eventKey);
    }
    get isMenuMouse() {
        if (this._start) {
            return false;
        }
        return isMenuMouse(this._eventMouse);
    }
    get isMenuTouch() {
        if (this._start) {
            return false;
        }
        return isMenuTouch(this._eventTouch);
    }
    get isMenuPoint() {
        if (this._start) {
            return false;
        }
        if (this._eventMouse) {
            return isMenuMouse(this._eventMouse);
        }
        else if (this._eventTouch) {
            return isMenuTouch(this._eventTouch);
        }
        return false;
    }
    get stop() {
        return this._stop;
    }
    consumed() {
        this._stop = true;
    }
}
exports.QinEvent = QinEvent;
class QinWaiters {
    constructor(initial) {
        this.waiters = initial ? initial : [];
    }
    addWaiter(waiter) {
        this.waiters.push(waiter);
        return this;
    }
    hasWaiter() {
        return this.waiters.length > 0;
    }
    sendWaiters(result) {
        for (const waiter of this.waiters) {
            waiter(result);
        }
    }
}
exports.QinWaiters = QinWaiters;
class QinPointerCalls {
}
exports.QinPointerCalls = QinPointerCalls;
function stopEvent(event) {
    if (event.preventDefault) {
        event.preventDefault();
    }
    return stopPropagation(event);
}
function stopPropagation(event) {
    if (event.stopPropagation) {
        event.stopPropagation();
    }
    event.cancelBubble = true;
    return false;
}
var lastEventMouse = null;
var lastEventTouch = null;
function makeEventMousePoint(isStart, ev) {
    if (!ev) {
        return null;
    }
    const result = {
        posX: 0,
        posY: 0,
    };
    if (ev.clientX || ev.clientY) {
        result.posX = ev.clientX;
        result.posY = ev.clientY;
    }
    if (isStart) {
        lastEventMouse = ev;
    }
    return result;
}
function makeEventTouch(isStart, ev) {
    if (!ev) {
        return null;
    }
    const result = {
        posX: 0,
        posY: 0,
    };
    if (ev.touches && this._event.touches.length >= 1) {
        let index = Math.floor(this._event.touches.length / 2);
        result.posX = ev.touches[index].clientX;
        result.posY = ev.touches[index].clientY;
    }
    if (isStart) {
        lastEventTouch = ev;
    }
    return result;
}
function isEventMouseDouble(isStart, ev) {
    if (!isStart || lastEventMouse == null || ev == null) {
        return false;
    }
    const timeDif = ev.timeStamp - lastEventMouse.timeStamp;
    return timeDif < 450;
}
function isEventTouchDouble(isStart, ev) {
    if (!isStart || lastEventTouch == null || ev == null) {
        return false;
    }
    const timeDif = ev.timeStamp - lastEventTouch.timeStamp;
    return timeDif < 450;
}
function isEventMouseLong(isStart, ev) {
    if (!isStart || lastEventMouse == null || ev == null) {
        return false;
    }
    const timeDif = ev.timeStamp - lastEventMouse.timeStamp;
    return timeDif > 840;
}
function isEventTouchLong(isStart, ev) {
    if (!isStart || lastEventTouch == null || ev == null) {
        return false;
    }
    const timeDif = ev.timeStamp - lastEventTouch.timeStamp;
    return timeDif > 840;
}
function isKeyInList(ev, list) {
    if (!ev) {
        return false;
    }
    let keyLower = ev.key.toLowerCase();
    return list.indexOf(keyLower) > -1;
}
function isKeyEnter(ev) {
    if (!ev) {
        return false;
    }
    return isKeyInList(ev, ["enter", "return"]) || ev.keyCode === 13;
}
function isKeyEscape(ev) {
    if (!ev) {
        return false;
    }
    return isKeyInList(ev, ["esc", "escape"]) || ev.keyCode === 27;
}
function isKeySpace(ev) {
    if (!ev) {
        return false;
    }
    return isKeyInList(ev, [" ", "space", "spacebar"]) || ev.keyCode === 32;
}
function isFirstButton(ev) {
    if (!ev) {
        return false;
    }
    return (ev === null || ev === void 0 ? void 0 : ev.button) == 0;
}
function isMiddleButton(ev) {
    if (!ev) {
        return false;
    }
    return (ev === null || ev === void 0 ? void 0 : ev.button) == 1;
}
function isSecondButton(ev) {
    if (!ev) {
        return false;
    }
    return (ev === null || ev === void 0 ? void 0 : ev.button) == 2;
}
function isOneFinger(ev) {
    if (!ev) {
        return false;
    }
    return (ev === null || ev === void 0 ? void 0 : ev.touches.length) == 1;
}
function isTwoFingers(ev) {
    if (!ev) {
        return false;
    }
    return (ev === null || ev === void 0 ? void 0 : ev.touches.length) == 2;
}
function isThreeFingers(ev) {
    if (!ev) {
        return false;
    }
    return (ev === null || ev === void 0 ? void 0 : ev.touches.length) == 3;
}
function isFourFingers(ev) {
    if (!ev) {
        return false;
    }
    return (ev === null || ev === void 0 ? void 0 : ev.touches.length) == 4;
}
function isMainKey(ev) {
    if (!ev) {
        return false;
    }
    return isKeyEnter(ev);
}
function isMidiKey(ev) {
    if (!ev) {
        return false;
    }
    return ev.ctrlKey && ev.altKey && isKeySpace(ev);
}
function isMenuKey(ev) {
    if (!ev) {
        return false;
    }
    return ev.ctrlKey && !ev.altKey && isKeySpace(ev);
}
function isMainMouse(ev) {
    if (!ev) {
        return false;
    }
    return isFirstButton(ev);
}
function isMainTouch(ev) {
    if (!ev) {
        return false;
    }
    return isOneFinger(ev);
}
function isMidiMouse(ev) {
    if (!ev) {
        return false;
    }
    return isMiddleButton(ev);
}
function isMidiTouch(ev) {
    if (!ev) {
        return false;
    }
    return isThreeFingers(ev);
}
function isMenuMouse(ev) {
    if (!ev) {
        return false;
    }
    return isSecondButton(ev);
}
function isMenuTouch(ev) {
    if (!ev) {
        return false;
    }
    return isTwoFingers(ev);
}
function addAction(origin, action) {
    origin.addEventListener("keydown", actKeyDown);
    origin.addEventListener("keyup", actKeyUp);
    origin.addEventListener("mousedown", actMouseDown);
    origin.addEventListener("mouseup", actMouseUp);
    origin.addEventListener("touchstart", actTouchStart);
    origin.addEventListener("touchend", actTouchEnd);
    function actKeyDown(ev) {
        let qinEvent = new QinEvent(origin, true, { eventKey: ev });
        action(qinEvent);
        if (qinEvent.stop) {
            return stopEvent(ev);
        }
        else {
            return stopPropagation(ev);
        }
    }
    function actKeyUp(ev) {
        let qinEvent = new QinEvent(origin, false, { eventKey: ev });
        action(qinEvent);
        if (qinEvent.stop) {
            return stopEvent(ev);
        }
        else {
            return stopPropagation(ev);
        }
    }
    function actMouseDown(ev) {
        let qinEvent = new QinEvent(origin, true, { eventMouse: ev });
        action(qinEvent);
        if (qinEvent.stop) {
            return stopEvent(ev);
        }
        else {
            return stopPropagation(ev);
        }
    }
    function actMouseUp(ev) {
        let qinEvent = new QinEvent(origin, false, { eventMouse: ev });
        action(qinEvent);
        if (qinEvent.stop) {
            return stopEvent(ev);
        }
        else {
            return stopPropagation(ev);
        }
    }
    function actTouchStart(ev) {
        let qinEvent = new QinEvent(origin, true, { eventTouch: ev });
        action(qinEvent);
        if (qinEvent.stop) {
            return stopEvent(ev);
        }
        else {
            return stopPropagation(ev);
        }
    }
    function actTouchEnd(ev) {
        let qinEvent = new QinEvent(origin, false, { eventTouch: ev });
        action(qinEvent);
        if (qinEvent.stop) {
            return stopEvent(ev);
        }
        else {
            return stopPropagation(ev);
        }
    }
}
function addActionMain(origin, action) {
    addAction(origin, (qinEvent) => {
        if (qinEvent.isMain) {
            action(qinEvent);
            qinEvent.consumed();
        }
    });
}
function addActionMainKey(origin, action) {
    addAction(origin, (qinEvent) => {
        if (qinEvent.isMainKey) {
            action(qinEvent);
            qinEvent.consumed();
        }
    });
}
function addActionMainMouse(origin, action) {
    addAction(origin, (qinEvent) => {
        if (qinEvent.isMainMouse) {
            action(qinEvent);
            qinEvent.consumed();
        }
    });
}
function addActionMainTouch(origin, action) {
    addAction(origin, (qinEvent) => {
        if (qinEvent.isMainMouse) {
            action(qinEvent);
            qinEvent.consumed();
        }
    });
}
function addActionMainPoint(origin, action) {
    addAction(origin, (qinEvent) => {
        if (qinEvent.isMainPoint) {
            action(qinEvent);
            qinEvent.consumed();
        }
    });
}
function addActionMidi(origin, action) {
    addAction(origin, (qinEvent) => {
        if (qinEvent.isMidi) {
            action(qinEvent);
            qinEvent.consumed();
        }
    });
}
function addActionMidiKey(origin, action) {
    addAction(origin, (qinEvent) => {
        if (qinEvent.isMidiKey) {
            action(qinEvent);
            qinEvent.consumed();
        }
    });
}
function addActionMidiMouse(origin, action) {
    addAction(origin, (qinEvent) => {
        if (qinEvent.isMidiMouse) {
            action(qinEvent);
            qinEvent.consumed();
        }
    });
}
function addActionMidiTouch(origin, action) {
    addAction(origin, (qinEvent) => {
        if (qinEvent.isMidiMouse) {
            action(qinEvent);
            qinEvent.consumed();
        }
    });
}
function addActionMidiPoint(origin, action) {
    addAction(origin, (qinEvent) => {
        if (qinEvent.isMidiPoint) {
            action(qinEvent);
            qinEvent.consumed();
        }
    });
}
function addActionMenu(origin, action) {
    addAction(origin, (qinEvent) => {
        if (qinEvent.isMenu) {
            action(qinEvent);
            qinEvent.consumed();
        }
    });
}
function addActionMenuKey(origin, action) {
    addAction(origin, (qinEvent) => {
        if (qinEvent.isMenuKey) {
            action(qinEvent);
            qinEvent.consumed();
        }
    });
}
function addActionMenuMouse(origin, action) {
    addAction(origin, (qinEvent) => {
        if (qinEvent.isMenuMouse) {
            action(qinEvent);
            qinEvent.consumed();
        }
    });
}
function addActionMenuTouch(origin, action) {
    addAction(origin, (qinEvent) => {
        if (qinEvent.isMenuMouse) {
            action(qinEvent);
            qinEvent.consumed();
        }
    });
}
function addActionMenuPoint(origin, action) {
    addAction(origin, (qinEvent) => {
        if (qinEvent.isMenuPoint) {
            action(qinEvent);
            qinEvent.consumed();
        }
    });
}
function addActions(origins, action) {
    for (const element of origins) {
        addAction(element, action);
    }
}
function addActionsMain(origins, action) {
    for (const element of origins) {
        addActionMain(element, action);
    }
}
function addActionsMainKey(origins, action) {
    for (const element of origins) {
        addActionMainKey(element, action);
    }
}
function addActionsMainMouse(origins, action) {
    for (const element of origins) {
        addActionMainMouse(element, action);
    }
}
function addActionsMainTouch(origins, action) {
    for (const element of origins) {
        addActionMainPoint(element, action);
    }
}
function addActionsMainPoint(origins, action) {
    for (const element of origins) {
        addActionMainPoint(element, action);
    }
}
function addActionsMidi(origins, action) {
    for (const element of origins) {
        addActionMidi(element, action);
    }
}
function addActionsMidiKey(origins, action) {
    for (const element of origins) {
        addActionMidiKey(element, action);
    }
}
function addActionsMidiMouse(origins, action) {
    for (const element of origins) {
        addActionMidiMouse(element, action);
    }
}
function addActionsMidiTouch(origins, action) {
    for (const element of origins) {
        addActionMidiPoint(element, action);
    }
}
function addActionsMidiPoint(origins, action) {
    for (const element of origins) {
        addActionMidiPoint(element, action);
    }
}
function addActionsMenu(origins, action) {
    for (const element of origins) {
        addActionMenu(element, action);
    }
}
function addActionsMenuKey(origins, action) {
    for (const element of origins) {
        addActionMenuKey(element, action);
    }
}
function addActionsMenuMouse(origins, action) {
    for (const element of origins) {
        addActionMenuMouse(element, action);
    }
}
function addActionsMenuTouch(origins, action) {
    for (const element of origins) {
        addActionMenuPoint(element, action);
    }
}
function addActionsMenuPoint(origins, action) {
    for (const element of origins) {
        addActionMenuPoint(element, action);
    }
}
function addMover(sources, target, dragCalls) {
    var dragInitEventX = 0;
    var dragInitEventY = 0;
    var dragInitPosX = 0;
    var dragInitPosY = 0;
    for (let source of sources) {
        source.onmousedown = onMoverMouseInit;
        source.ontouchstart = onMoverTouchInit;
        source.ondragstart = stopEvent;
    }
    function onMoverMouseInit(ev) {
        if (document.onmousemove || document.ontouchmove) {
            return;
        }
        if (dragCalls && dragCalls.onDouble && isEventMouseDouble(true, ev)) {
            dragCalls.onDouble();
            return;
        }
        if (dragCalls && dragCalls.onLong && isEventMouseLong(true, ev)) {
            dragCalls.onLong();
            return;
        }
        const pointer = makeEventMousePoint(true, ev);
        dragInitEventX = pointer.posX;
        dragInitEventY = pointer.posY;
        dragInitPosX = parseInt(target.style.left, 10);
        dragInitPosY = parseInt(target.style.top, 10);
        document.onmousemove = onMoverMouseMove;
        document.ontouchmove = onMoverTouchMove;
        document.onmouseup = onMoverClose;
        document.ontouchend = onMoverClose;
        qin_skin_1.QinSkin.hideAllIFrames();
        if (dragCalls && dragCalls.onStart) {
            dragCalls.onStart();
        }
        return stopEvent(ev);
    }
    function onMoverTouchInit(ev) {
        if (document.onmousemove || document.ontouchmove) {
            return;
        }
        if (dragCalls && dragCalls.onDouble && isEventTouchDouble(true, ev)) {
            dragCalls.onDouble();
            return;
        }
        if (dragCalls && dragCalls.onLong && isEventTouchLong(true, ev)) {
            dragCalls.onLong();
            return;
        }
        const pointer = makeEventTouch(true, ev);
        dragInitEventX = pointer.posX;
        dragInitEventY = pointer.posY;
        dragInitPosX = parseInt(target.style.left, 10);
        dragInitPosY = parseInt(target.style.top, 10);
        document.onmousemove = onMoverMouseMove;
        document.ontouchmove = onMoverTouchMove;
        document.onmouseup = onMoverClose;
        document.ontouchend = onMoverClose;
        qin_skin_1.QinSkin.hideAllIFrames();
        if (dragCalls && dragCalls.onStart) {
            dragCalls.onStart();
        }
        return stopEvent(ev);
    }
    function onMoverMouseMove(ev) {
        const pointer = makeEventMousePoint(false, ev);
        var dragDifX = pointer.posX - dragInitEventX;
        var dragDifY = pointer.posY - dragInitEventY;
        var dragFinalX = dragInitPosX + dragDifX;
        var dragFinalY = dragInitPosY + dragDifY;
        target.style.left = (dragFinalX > 0 ? dragFinalX : 0) + "px";
        target.style.top = (dragFinalY > 0 ? dragFinalY : 0) + "px";
        if (dragCalls && dragCalls.onMove) {
            dragCalls.onMove();
        }
        return stopEvent(ev);
    }
    function onMoverTouchMove(ev) {
        const pointer = makeEventTouch(false, ev);
        var dragDifX = pointer.posX - dragInitEventX;
        var dragDifY = pointer.posY - dragInitEventY;
        var dragFinalX = dragInitPosX + dragDifX;
        var dragFinalY = dragInitPosY + dragDifY;
        target.style.left = (dragFinalX > 0 ? dragFinalX : 0) + "px";
        target.style.top = (dragFinalY > 0 ? dragFinalY : 0) + "px";
        if (dragCalls && dragCalls.onMove) {
            dragCalls.onMove();
        }
        return stopEvent(ev);
    }
    function onMoverClose(ev) {
        document.ontouchmove = null;
        document.onmousemove = null;
        document.ontouchend = null;
        document.onmouseup = null;
        qin_skin_1.QinSkin.showAllIFrames();
        qin_skin_1.QinSkin.clearSelection();
        if (dragCalls && dragCalls.onEnd) {
            dragCalls.onEnd();
        }
        return stopEvent(ev);
    }
}
function addResizer(sources, target, dragCalls) {
    var dragInitEventX = 0;
    var dragInitEventY = 0;
    var dragInitWidth = 0;
    var dragInitHeight = 0;
    for (let source of sources) {
        source.onmousedown = onResizerMouseInit;
        source.ontouchstart = onResizerTouchInit;
        source.ondragstart = stopEvent;
    }
    function onResizerMouseInit(ev) {
        if (document.onmousemove || document.ontouchmove) {
            return;
        }
        if (dragCalls && dragCalls.onDouble && isEventMouseDouble(true, ev)) {
            dragCalls.onDouble();
            return;
        }
        if (dragCalls && dragCalls.onLong && isEventMouseLong(true, ev)) {
            dragCalls.onLong();
            return;
        }
        const pointer = makeEventMousePoint(true, ev);
        dragInitEventX = pointer.posX;
        dragInitEventY = pointer.posY;
        dragInitWidth = parseInt(target.style.width, 10);
        dragInitHeight = parseInt(target.style.height, 10);
        document.onmousemove = onResizerMouseMove;
        document.ontouchmove = onResizerTouchMove;
        document.onmouseup = onResizerClose;
        document.ontouchend = onResizerClose;
        qin_skin_1.QinSkin.hideAllIFrames();
        if (dragCalls && dragCalls.onStart) {
            dragCalls.onStart();
        }
        return stopEvent(ev);
    }
    function onResizerTouchInit(ev) {
        if (document.onmousemove || document.ontouchmove) {
            return;
        }
        if (dragCalls && dragCalls.onDouble && isEventTouchDouble(true, ev)) {
            dragCalls.onDouble();
            return;
        }
        if (dragCalls && dragCalls.onLong && isEventTouchLong(true, ev)) {
            dragCalls.onLong();
            return;
        }
        const pointer = makeEventTouch(true, ev);
        dragInitEventX = pointer.posX;
        dragInitEventY = pointer.posY;
        dragInitWidth = parseInt(target.style.width, 10);
        dragInitHeight = parseInt(target.style.height, 10);
        document.onmousemove = onResizerMouseMove;
        document.ontouchmove = onResizerTouchMove;
        document.onmouseup = onResizerClose;
        document.ontouchend = onResizerClose;
        qin_skin_1.QinSkin.hideAllIFrames();
        if (dragCalls && dragCalls.onStart) {
            dragCalls.onStart();
        }
        return stopEvent(ev);
    }
    function onResizerMouseMove(ev) {
        const pointer = makeEventMousePoint(false, ev);
        var frameDragDifX = pointer.posX - dragInitEventX;
        var frameDragDifY = pointer.posY - dragInitEventY;
        var frameDragFinalWidth = dragInitWidth + frameDragDifX;
        var frameDragFinalHeight = dragInitHeight + frameDragDifY;
        target.style.width = (frameDragFinalWidth > 0 ? frameDragFinalWidth : 0) + "px";
        target.style.height = (frameDragFinalHeight > 0 ? frameDragFinalHeight : 0) + "px";
        if (dragCalls && dragCalls.onMove) {
            dragCalls.onMove();
        }
        return stopEvent(ev);
    }
    function onResizerTouchMove(ev) {
        const pointer = makeEventTouch(false, ev);
        var frameDragDifX = pointer.posX - dragInitEventX;
        var frameDragDifY = pointer.posY - dragInitEventY;
        var frameDragFinalWidth = dragInitWidth + frameDragDifX;
        var frameDragFinalHeight = dragInitHeight + frameDragDifY;
        target.style.width = (frameDragFinalWidth > 0 ? frameDragFinalWidth : 0) + "px";
        target.style.height = (frameDragFinalHeight > 0 ? frameDragFinalHeight : 0) + "px";
        if (dragCalls && dragCalls.onMove) {
            dragCalls.onMove();
        }
        return stopEvent(ev);
    }
    function onResizerClose(ev) {
        document.ontouchmove = null;
        document.onmousemove = null;
        document.ontouchend = null;
        document.onmouseup = null;
        qin_skin_1.QinSkin.showAllIFrames();
        qin_skin_1.QinSkin.clearSelection();
        if (dragCalls && dragCalls.onEnd) {
            dragCalls.onEnd();
        }
        return stopEvent(ev);
    }
}
function addScroller(target, dragCalls) {
    var dragInitX = 0;
    var dragInitY = 0;
    var dragScrollX = 0;
    var dragScrollY = 0;
    target.ondragstart = stopEvent;
    target.onmousedown = onScrollerMouseInit;
    target.ontouchstart = onScrollerTouchInit;
    function onScrollerMouseInit(ev) {
        if (document.onmousemove || document.ontouchmove) {
            return;
        }
        stopPropagation(ev);
        if (dragCalls && dragCalls.onDouble && isEventMouseDouble(true, ev)) {
            dragCalls.onDouble();
            return;
        }
        if (dragCalls && dragCalls.onLong && isEventMouseLong(true, ev)) {
            dragCalls.onLong();
            return;
        }
        const pointer = makeEventMousePoint(true, ev);
        dragInitX = pointer.posX;
        dragInitY = pointer.posY;
        dragScrollX = target.scrollLeft;
        dragScrollY = target.scrollTop;
        document.onmousemove = onScrollerMouseMove;
        document.ontouchmove = onScrollerTouchMove;
        document.ontouchend = onScrollerClose;
        document.onmouseup = onScrollerClose;
        qin_skin_1.QinSkin.hideAllIFrames();
        if (dragCalls && dragCalls.onStart) {
            dragCalls.onStart();
        }
        return stopEvent(ev);
    }
    function onScrollerTouchInit(ev) {
        if (document.onmousemove || document.ontouchmove) {
            return;
        }
        if (dragCalls && dragCalls.onDouble && isEventTouchDouble(true, ev)) {
            dragCalls.onDouble();
            return;
        }
        if (dragCalls && dragCalls.onLong && isEventTouchLong(true, ev)) {
            dragCalls.onLong();
            return;
        }
        const pointer = makeEventTouch(true, ev);
        dragInitX = pointer.posX;
        dragInitY = pointer.posY;
        dragScrollX = target.scrollLeft;
        dragScrollY = target.scrollTop;
        document.onmousemove = onScrollerMouseMove;
        document.ontouchmove = onScrollerTouchMove;
        document.onmouseup = onScrollerClose;
        document.ontouchend = onScrollerClose;
        qin_skin_1.QinSkin.hideAllIFrames();
        if (dragCalls && dragCalls.onStart) {
            dragCalls.onStart();
        }
        return stopEvent(ev);
    }
    function onScrollerMouseMove(ev) {
        const pointer = makeEventMousePoint(false, ev);
        var dragDifX = pointer.posX - dragInitX;
        var dragDifY = pointer.posY - dragInitY;
        var dragNewX = dragScrollX - dragDifX;
        var dragNewY = dragScrollY - dragDifY;
        target.scrollTo(dragNewX, dragNewY);
        if (dragCalls && dragCalls.onMove) {
            dragCalls.onMove();
        }
        return stopEvent(ev);
    }
    function onScrollerTouchMove(ev) {
        const pointer = makeEventTouch(false, ev);
        var dragDifX = pointer.posX - dragInitX;
        var dragDifY = pointer.posY - dragInitY;
        var dragNewX = dragScrollX - dragDifX;
        var dragNewY = dragScrollY - dragDifY;
        target.scrollTo(dragNewX, dragNewY);
        if (dragCalls && dragCalls.onMove) {
            dragCalls.onMove();
        }
        return stopEvent(ev);
    }
    function onScrollerClose(ev) {
        document.ontouchmove = null;
        document.ontouchend = null;
        document.onmousemove = null;
        document.onmouseup = null;
        qin_skin_1.QinSkin.showAllIFrames();
        qin_skin_1.QinSkin.clearSelection();
        if (dragCalls && dragCalls.onEnd) {
            dragCalls.onEnd();
        }
        return stopEvent(ev);
    }
}
exports.QinArms = {
    stopEvent,
    makeEventMousePoint,
    makeEventTouch,
    isEventMouseDouble,
    isEventTouchDouble,
    isEventMouseLong,
    isEventTouchLong,
    isKeyInList,
    isKeyEnter,
    isKeySpace,
    isFirstButton,
    isMiddleButton,
    isSecondButton,
    isOneFinger,
    isTwoFingers,
    isThreeFingers,
    isFourFingers,
    isMainMouse,
    isMainTouch,
    isMidiMouse,
    isMidiTouch,
    isMenuMouse,
    isMenuTouch,
    addAction,
    addActionMain,
    addActionMainKey,
    addActionMainMouse,
    addActionMainTouch,
    addActionMainPoint,
    addActionMidi,
    addActionMidiKey,
    addActionMidiMouse,
    addActionMidiTouch,
    addActionMidiPoint,
    addActionMenu,
    addActionMenuKey,
    addActionMenuMouse,
    addActionMenuTouch,
    addActionMenuPoint,
    addActions,
    addActionsMain,
    addActionsMainKey,
    addActionsMainMouse,
    addActionsMainTouch,
    addActionsMainPoint,
    addActionsMidi,
    addActionsMidiKey,
    addActionsMidiMouse,
    addActionsMidiTouch,
    addActionsMidiPoint,
    addActionsMenu,
    addActionsMenuKey,
    addActionsMenuMouse,
    addActionsMenuTouch,
    addActionsMenuPoint,
    addMover,
    addResizer,
    addScroller,
};

},{"./qin-skin":63}],59:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinBody = exports.QinNature = void 0;
var QinNature;
(function (QinNature) {
    QinNature["BIT"] = "BIT";
    QinNature["BOOL"] = "BOOL";
    QinNature["BYTE"] = "BYTE";
    QinNature["TINY"] = "TINY";
    QinNature["SMALL"] = "SMALL";
    QinNature["INT"] = "INT";
    QinNature["LONG"] = "LONG";
    QinNature["SERIAL"] = "SERIAL";
    QinNature["BIG_SERIAL"] = "BIG_SERIAL";
    QinNature["FLOAT"] = "FLOAT";
    QinNature["REAL"] = "REAL";
    QinNature["DOUBLE"] = "DOUBLE";
    QinNature["NUMERIC"] = "NUMERIC";
    QinNature["BIG_NUMERIC"] = "BIG_NUMERIC";
    QinNature["CHAR"] = "CHAR";
    QinNature["CHARS"] = "CHARS";
    QinNature["DATE"] = "DATE";
    QinNature["TIME"] = "TIME";
    QinNature["DATE_TIME"] = "DATE_TIME";
    QinNature["TIMESTAMP"] = "TIMESTAMP";
    QinNature["BYTES"] = "BYTES";
    QinNature["BLOB"] = "BLOB";
    QinNature["TEXT"] = "TEXT";
})(QinNature = exports.QinNature || (exports.QinNature = {}));
function makeQinUID() {
    return ("qin_uid_" +
        getLastChars(Date.now() + "", 4, "0", false) +
        "_" +
        fillToString(Math.floor(Math.random() * 10000), 5, "0", false));
}
function makeQindredUID(qindred) {
    return (qindred +
        "_qindred_" +
        getLastChars(Date.now() + "", 4, "0", false) +
        "_" +
        fillToString(Math.floor(Math.random() * 10000), 5, "0", false));
}
function getLastChars(source, count, fillWith = " ", atEnd = true) {
    if (source.length < count) {
        return fillToString(source, count, fillWith, atEnd);
    }
    return source.substring(source.length - count);
}
function fillToString(value, tilSize, withStr = " ", atEnd = true) {
    let result = value.toString();
    while (result.length < tilSize) {
        if (atEnd) {
            result += withStr;
        }
        else {
            result = withStr + result;
        }
    }
    return result;
}
function getTextLines(fromText) {
    if (fromText) {
        return fromText.match(/[^\r\n]+/g);
    }
    else {
        return [];
    }
}
function getCSVRows(fromText) {
    var lines = getTextLines(fromText);
    var result = [];
    for (let line of lines) {
        let row = new Array();
        let inside_quotes = false;
        let column_value = "";
        let column_index = 0;
        for (let char_index = 0; char_index < line.length; char_index++) {
            let actual = line.charAt(char_index);
            if (inside_quotes) {
                if (actual == '"') {
                    let next = char_index < line.length - 1 ? line.charAt(char_index + 1) : "";
                    if (next == '"') {
                        column_value += actual;
                        char_index++;
                    }
                    else {
                        inside_quotes = false;
                    }
                }
                else {
                    column_value += actual;
                }
            }
            else {
                if (actual == '"') {
                    inside_quotes = true;
                }
                else if (actual == ",") {
                    column_value = unmaskSpecialChars(column_value);
                    row.push(column_value);
                    column_value = "";
                    column_index++;
                }
                else {
                    column_value += actual;
                }
            }
        }
        column_value = unmaskSpecialChars(column_value);
        row.push(column_value);
        result.push(row);
    }
    return result;
}
function maskSpecialChars(fromText) {
    return fromText
        .replace("\\", "\\\\")
        .replace("\r", "\\r")
        .replace("\n", "\\n")
        .replace("\t", "\\t");
}
function unmaskSpecialChars(fromText) {
    return fromText
        .replace("\\\\", "\\")
        .replace("\\r", "\r")
        .replace("\\n", "\n")
        .replace("\\t", "\t");
}
function parseParameters(source) {
    let result = [];
    let open = false;
    let actual = "";
    for (const letter of Array.from(source)) {
        if (open) {
            if (letter == '"') {
                open = false;
                if (actual) {
                    result.push(actual);
                    actual = "";
                }
            }
            else {
                actual += letter;
            }
        }
        else {
            if (letter == '"') {
                open = true;
                if (actual) {
                    result.push(actual);
                    actual = "";
                }
            }
            else if (letter == " ") {
                if (actual) {
                    result.push(actual);
                    actual = "";
                }
            }
            else {
                actual += letter;
            }
        }
    }
    return result;
}
exports.QinBody = {
    makeQinUID,
    makeQindredUID,
    getLastChars,
    fillToString,
    getTextLines,
    getCSVRows,
    maskSpecialChars,
    unmaskSpecialChars,
    parseParameters,
};

},{}],60:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinFoot = exports.QinFilesDescriptor = exports.QinFilesOperation = exports.QinFilesNature = void 0;
var QinFilesNature;
(function (QinFilesNature) {
    QinFilesNature["BOTH"] = "both";
    QinFilesNature["DIRECTORIES"] = "directories";
    QinFilesNature["FILES"] = "files";
})(QinFilesNature = exports.QinFilesNature || (exports.QinFilesNature = {}));
var QinFilesOperation;
(function (QinFilesOperation) {
    QinFilesOperation["OPEN"] = "open";
    QinFilesOperation["SAVE"] = "save";
})(QinFilesOperation = exports.QinFilesOperation || (exports.QinFilesOperation = {}));
class QinFilesDescriptor {
}
exports.QinFilesDescriptor = QinFilesDescriptor;
function getLocation() {
    return window.location.href;
}
function isLocalHost() {
    var location = getLocation();
    var start = location.indexOf("://");
    if (start == -1) {
        start = 0;
    }
    else {
        start += 3;
    }
    location = location.substring(start);
    return location.indexOf("localhost") === 0 || location.indexOf("127.0.0.1") === 0;
}
function getSeparator(ofPath) {
    let result = "/";
    if (ofPath && ofPath.indexOf("\\") > -1) {
        result = "\\";
    }
    return result;
}
function getPathJoin(pathA, pathB) {
    if (pathA == null || pathA == undefined) {
        pathA = "";
    }
    if (pathB == null || pathB == undefined) {
        pathB = "";
    }
    if (pathA.length == 0) {
        return pathB;
    }
    else if (pathB.length == 0) {
        return pathA;
    }
    else {
        let union = "/";
        if (pathA.indexOf("\\") > -1 || pathB.indexOf("\\") > -1) {
            union = "\\";
        }
        let pathAEnd = pathA.substring(pathA.length - 1, pathA.length);
        let pathBStart = pathB.substring(0, 1);
        if (pathAEnd == union || pathBStart == union) {
            union = "";
        }
        return pathA + union + pathB;
    }
}
function getParent(path) {
    if (path) {
        let separator = getSeparator(path);
        let last = path.lastIndexOf(separator);
        if (last > -1) {
            return path.substring(0, last);
        }
    }
    return "";
}
function getStem(path) {
    if (path) {
        let separator = getSeparator(path);
        let last = path.lastIndexOf(separator);
        if (last > -1) {
            return path.substring(last + 1);
        }
    }
    return "";
}
function getFileExtension(name) {
    let position = name.lastIndexOf(".");
    if (position > -1) {
        return name.substring(position + 1);
    }
    else {
        return "";
    }
}
const appsExtensions = [
    "htm", "html", "css", "js", "jsx", "ts", "tsx", "phtml"
];
function isFileApp(extension) {
    return appsExtensions.indexOf(extension) > -1;
}
const cmdsExtensions = [
    "h", "c", "hpp", "cpp", "rs", "jl",
    "cs", "csproj", "fs", "ml", "fsi", "mli", "fsx", "fsscript",
    "java", "gy", "gvy", "groovy", "sc", "scala", "clj",
    "py", "ruby", "php", "phtml",
];
function isFileCmd(extension) {
    return cmdsExtensions.indexOf(extension) > -1;
}
const execExtensions = [
    "exe", "jar", "com", "bat", "sh"
];
function isFileExec(extension) {
    return execExtensions.indexOf(extension) > -1;
}
const imageExtensions = [
    "jpg", "jpeg", "png", "gif", "bmp"
];
function isFileImage(extension) {
    return imageExtensions.indexOf(extension) > -1;
}
const vectorExtensions = [
    "svg"
];
function isFileVector(extension) {
    return vectorExtensions.indexOf(extension) > -1;
}
const movieExtensions = [
    "avi", "mp4"
];
function isFileMovie(extension) {
    return movieExtensions.indexOf(extension) > -1;
}
const musicExtensions = [
    "wav", "mp3"
];
function isFileMusic(extension) {
    return musicExtensions.indexOf(extension) > -1;
}
const zippedExtensions = [
    "zip", "rar", "7z", "tar", "gz"
];
function isFileZipped(extension) {
    return zippedExtensions.indexOf(extension) > -1;
}
exports.QinFoot = {
    getLocation,
    isLocalHost,
    getSeparator,
    getPathJoin,
    getParent,
    getStem,
    getFileExtension,
    isFileApp,
    isFileCmd,
    isFileExec,
    isFileImage,
    isFileVector,
    isFileMovie,
    isFileMusic,
    isFileZipped,
};

},{}],61:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinHead = exports.tr = void 0;
const qin_body_1 = require("./qin-body");
const dictionary = new Map();
function tr(of) {
    console.log("tr: " + of);
    return dictionary.get(of) || of;
}
exports.tr = tr;
function translate(of, to) {
    dictionary.set(of, to);
}
function translations(dictionary) {
    let lines = qin_body_1.QinBody.getTextLines(dictionary);
    for (let line of lines) {
        let index = line.indexOf("=");
        if (index > 0) {
            let of = line.substring(0, index);
            let to = line.substring(index + 1);
            translate(of, to);
        }
    }
}
function forgetAll() {
    dictionary.clear();
}
function getCookie(name, orDefault) {
    let cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
        let cookiePair = cookies[i].split("=");
        if (name == decodeURIComponent(cookiePair[0]).trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return orDefault;
}
function setCookie(name, value, options = {}) {
    options = Object.assign({ path: "/" }, options);
    if (!options.expires) {
        let date = new Date();
        date.setTime(date.getTime() + 1 * 24 * 60 * 60 * 1000);
        options.expires = date;
    }
    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }
    options["SameSite"] = "Strict";
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }
    updatedCookie += "; Secure";
    document.cookie = updatedCookie;
}
function delCookie(name, options = {}) {
    let updatedCookie = encodeURIComponent(name) + "=;  expires=Thu, 01 Jan 1970 00:00:00 GMT";
    if (options.expires) {
        delete options.expires;
    }
    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }
    document.cookie = updatedCookie;
}
function getDeskAPI() {
    var win = window;
    if (win.deskAPI) {
        return win.deskAPI;
    }
    else {
        win = window.parent;
    }
    if (win.deskAPI) {
        return win.deskAPI;
    }
    else {
        win = window.top;
    }
    if (win.deskAPI) {
        return win.deskAPI;
    }
    return undefined;
}
const logged = [];
function getLogged() {
    return logged;
}
function log(message) {
    logged.push(message);
    try {
        console.log(message);
    }
    catch (_) { }
    try {
        getDeskAPI().send("logOnMain", message);
    }
    catch (_) { }
}
function logInfo(error, origin) {
    log(getInfoMessage(error, origin));
}
function getInfoMessage(info, origin) {
    return getTreatMessage(tr("Look"), info, origin);
}
function logError(error, origin) {
    log(getErrorMessage(error, origin));
}
function getErrorMessage(error, origin) {
    return getTreatMessage(tr("Problem"), error, origin);
}
function logWarning(error, origin) {
    log(getWarningMessage(error, origin));
}
function getWarningMessage(error, origin) {
    return getTreatMessage(tr("Attention"), error, origin);
}
function getTreatMessage(prefix, value, origin) {
    var result = tr(" on: ");
    if (typeof value == "string" || value instanceof String) {
        result += value.toString();
    }
    else {
        if (value && value.why) {
            result += getMessageOrData(value.why);
        }
        if (value && value.message) {
            result += getMessageOrData(value.message);
        }
        if (value && value.response && value.response.data) {
            if (result) {
                result += "\n" + tr("And");
            }
            result += tr(" was returned") + getMessageOrData(value.response.data);
        }
    }
    if (origin) {
        result += "\n" + tr("By origin: ") + origin;
    }
    return prefix + result;
}
function getMessageOrData(of) {
    if (typeof of == "string" || of instanceof String) {
        return of.toString();
    }
    else {
        return tr(" with data:") + "\n" + JSON.stringify(of);
    }
}
function toggleDevTools() {
    try {
        getDeskAPI().send("toggleDevTools");
    }
    catch (e) {
        logError(e, "{qinpel-res}(ErrCode-000001)");
    }
}
exports.QinHead = {
    translate,
    translations,
    forgetAll,
    getCookie,
    setCookie,
    delCookie,
    getDeskAPI,
    getLogged,
    log,
    logInfo,
    getInfoMessage,
    logError,
    getErrorMessage,
    logWarning,
    getWarningMessage,
    getTreatMessage,
    toggleDevTools,
};

},{"./qin-body":59}],62:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinLegs = void 0;
const qin_skin_1 = require("./qin-skin");
function newRow(items, styles) {
    const result = document.createElement("div");
    result.style.display = "flex";
    result.style.flexDirection = "row";
    if (items) {
        for (const item of items) {
            result.appendChild(item);
        }
    }
    qin_skin_1.QinSkin.applyStyles(result, styles);
    return result;
}
function newLine(items, styles) {
    const result = document.createElement("div");
    result.style.display = "flex";
    result.style.flexDirection = "row";
    result.style.flexWrap = "wrap";
    if (items) {
        for (const item of items) {
            result.appendChild(item);
        }
    }
    qin_skin_1.QinSkin.applyStyles(result, styles);
    return result;
}
function newColumn(items, styles) {
    const result = document.createElement("div");
    result.style.display = "flex";
    result.style.flexDirection = "column";
    if (items) {
        for (const item of items) {
            result.appendChild(item);
        }
    }
    qin_skin_1.QinSkin.applyStyles(result, styles);
    return result;
}
function newSpan(text, styles) {
    const result = document.createElement("div");
    result.innerText = text;
    qin_skin_1.QinSkin.applyStyles(result, styles);
    return result;
}
function newImg(src, styles) {
    const result = document.createElement("img");
    result.src = src;
    qin_skin_1.QinSkin.applyStyles(result, styles);
    return result;
}
exports.QinLegs = {
    newRow,
    newLine,
    newColumn,
    newSpan,
    newImg,
};

},{"./qin-skin":63}],63:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinSkin = exports.QinStyles = exports.QinGrandeur = exports.QinBounds = exports.QinDimension = exports.QinPoint = void 0;
const qin_arms_1 = require("./qin-arms");
class QinPoint {
}
exports.QinPoint = QinPoint;
class QinDimension {
}
exports.QinDimension = QinDimension;
class QinBounds {
}
exports.QinBounds = QinBounds;
var QinGrandeur;
(function (QinGrandeur) {
    QinGrandeur["SMALL"] = "small";
    QinGrandeur["MEDIUM"] = "medium";
    QinGrandeur["LARGE"] = "large";
})(QinGrandeur = exports.QinGrandeur || (exports.QinGrandeur = {}));
exports.QinStyles = {
    ColorForeground: "#180027ff",
    ColorBackground: "#fffcf9ff",
    ColorInactive: "#fff0ffff",
    ColorActive: "#fff0f0ff",
    ColorAccent: "#ae0000ff",
    ColorInactiveAct: "#f0f7ffff",
    ColorActiveAct: "#ddddffff",
    ColorAccentAct: "#0000aeff",
    ColorBlocked: "#f0f0f0ff",
    ColorEntered: "#e7f0e7ff",
    ColorAttend: "#496b49ff",
    ColorSelected: "#5d72de8f",
    FontName: "SourceSansPro",
    FontSize: "16px",
};
function styleAsBody(el) {
    el.style.position = "absolute";
    el.style.top = "0px";
    el.style.right = "0px";
    el.style.bottom = "0px";
    el.style.left = "0px";
    el.style.padding = "9px";
    el.style.overflow = "auto";
}
function styleAsBase(el) {
    el.style.margin = "1px";
    el.style.padding = "3px";
    el.style.outline = "none";
    el.style.color = exports.QinStyles.ColorForeground;
    el.style.fontFamily = "SourceSansPro";
    el.style.fontSize = "16px";
}
function styleAsEditable(el) {
    styleAsBase(el);
    el.style.backgroundColor = exports.QinStyles.ColorInactive;
    el.style.border = "1px solid " + exports.QinStyles.ColorForeground;
    el.style.borderRadius = "3px";
    el.style.outline = "none";
    el.addEventListener("focus", () => {
        el.style.backgroundColor = exports.QinStyles.ColorActive;
        el.style.border = "1px solid " + exports.QinStyles.ColorAccent;
    });
    el.addEventListener("focusout", () => {
        el.style.backgroundColor = exports.QinStyles.ColorInactive;
        el.style.border = "1px solid " + exports.QinStyles.ColorForeground;
    });
}
function styleAsActionable(el) {
    styleAsBase(el);
    el.style.backgroundColor = exports.QinStyles.ColorInactiveAct;
    el.style.border = "1px solid " + exports.QinStyles.ColorForeground;
    el.style.borderRadius = "3px";
    el.style.outline = "none";
    el.addEventListener("focus", () => {
        el.style.backgroundColor = exports.QinStyles.ColorActiveAct;
        el.style.border = "1px solid " + exports.QinStyles.ColorAccentAct;
    });
    el.addEventListener("focusout", () => {
        el.style.backgroundColor = exports.QinStyles.ColorInactiveAct;
        el.style.border = "1px solid " + exports.QinStyles.ColorForeground;
    });
}
function styleAsReadOnly(el) {
    styleAsBase(el);
    el.style.backgroundColor = exports.QinStyles.ColorBlocked;
    el.style.border = "1px solid " + exports.QinStyles.ColorForeground;
    el.style.borderRadius = "3px";
    el.style.outline = "none";
    el.addEventListener("focus", () => {
        el.style.backgroundColor = exports.QinStyles.ColorEntered;
        el.style.border = "1px solid " + exports.QinStyles.ColorAttend;
    });
    el.addEventListener("focusout", () => {
        el.style.backgroundColor = exports.QinStyles.ColorBlocked;
        el.style.border = "1px solid " + exports.QinStyles.ColorForeground;
    });
}
function styleMaxSizeForNotOverFlow(el, parent) {
    console.log("D1");
    if (!parent) {
        parent = el.parentElement;
        console.log("D2: " + parent);
    }
    if (parent) {
        let maxWidth = 0;
        let maxHeight = 0;
        let imediate = el;
        do {
            maxWidth = maxWidth + imediate.clientLeft;
            maxHeight = maxHeight + imediate.clientTop;
            console.log("D3: " + maxWidth);
            console.log("D4: " + maxHeight);
            imediate = imediate.parentElement;
        } while (imediate != null && imediate != parent);
        maxWidth = parent.clientWidth - maxWidth;
        maxHeight = parent.clientHeight - maxHeight;
        console.log("D5: " + maxWidth);
        console.log("D6: " + maxHeight);
        el.style.maxWidth = maxWidth + "px";
        el.style.maxHeight = maxHeight + "px";
    }
}
function styleSize(el, size) {
    if (size) {
        if (size instanceof QinDimension) {
            el.style.width = size.width + "px";
            el.style.height = size.height + "px";
        }
        else {
            let dim = getDimensionSize(size);
            el.style.width = dim.width + "px";
            el.style.height = dim.height + "px";
        }
    }
}
function styleFlexMax(el) {
    el.style.flex = "1";
}
function styleFlexMin(el) {
    el.style.flex = "0";
}
function getWindowSize() {
    return {
        width: document.body.clientWidth,
        height: document.body.clientHeight,
    };
}
function getWindowSizeStyle() {
    const width = getWindowSize().width;
    if (width < 600) {
        return QinGrandeur.SMALL;
    }
    else if (width < 1000) {
        return QinGrandeur.MEDIUM;
    }
    else {
        return QinGrandeur.LARGE;
    }
}
function hideAllIFrames() {
    var doc_iframes = document.getElementsByTagName("iframe");
    for (let i = 0; i < doc_iframes.length; i++) {
        let doc_iframe = doc_iframes[i];
        doc_iframe.style.visibility = "hidden";
    }
}
function showAllIFrames() {
    var doc_iframes = document.getElementsByTagName("iframe");
    for (let i = 0; i < doc_iframes.length; i++) {
        let doc_iframe = doc_iframes[i];
        doc_iframe.style.visibility = "visible";
    }
}
function disableSelection(element) {
    element.style.userSelect = "none";
    element.style.webkitUserSelect = "none";
    element.onselectstart = qin_arms_1.QinArms.stopEvent;
}
function clearSelection() {
    setTimeout(() => {
        if (window.getSelection) {
            window.getSelection().removeAllRanges();
        }
    }, 360);
}
function isElementVisibleInScroll(element) {
    if (element.parentElement) {
        if (element.offsetTop < element.parentElement.scrollTop) {
            return false;
        }
        if (element.offsetLeft < element.parentElement.scrollLeft) {
            return false;
        }
        if (element.clientWidth >
            element.parentElement.clientWidth -
                (element.offsetLeft - element.parentElement.scrollLeft)) {
            return false;
        }
        if (element.clientHeight >
            element.parentElement.clientHeight - (element.offsetTop - element.parentElement.scrollTop)) {
            return false;
        }
    }
    return true;
}
function getDimension(el) {
    return {
        width: parseInt(el.style.width),
        height: parseInt(el.style.height),
    };
}
function getDimensionSize(size) {
    if (size == QinGrandeur.LARGE) {
        return getDimensionLarge();
    }
    else if (size == QinGrandeur.MEDIUM) {
        return getDimensionMedium();
    }
    else {
        return getDimensionSmall();
    }
}
const dimensionSmall = {
    width: 21,
    height: 21,
};
function getDimensionSmall() {
    return dimensionSmall;
}
const dimensionMedium = {
    width: 32,
    height: 32,
};
function getDimensionMedium() {
    return dimensionMedium;
}
const dimensionLarge = {
    width: 64,
    height: 64,
};
function getDimensionLarge() {
    return dimensionLarge;
}
function applyStyles(element, styles) {
    if (element && styles) {
        for (const key in styles) {
            element.style[key] = styles[key];
        }
    }
}
exports.QinSkin = {
    styles: exports.QinStyles,
    styleAsBody,
    styleAsBase,
    styleAsEditable,
    styleAsActionable,
    styleAsReadOnly,
    styleMaxSizeForNotOverFlow,
    styleSize,
    styleFlexMax,
    styleFlexMin,
    getWindowSize,
    getWindowSizeStyle,
    hideAllIFrames,
    showAllIFrames,
    disableSelection,
    clearSelection,
    isElementVisibleInScroll,
    getDimension,
    getDimensionSize,
    getDimensionSmall,
    getDimensionMedium,
    getDimensionLarge,
    applyStyles,
};

},{"./qin-arms":58}],64:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinSoul = void 0;
const qin_arms_1 = require("./qin-arms");
const qin_body_1 = require("./qin-body");
const qin_foot_1 = require("./qin-foot");
const qin_head_1 = require("./qin-head");
const qin_legs_1 = require("./qin-legs");
const qin_skin_1 = require("./qin-skin");
exports.QinSoul = {
    skin: qin_skin_1.QinSkin,
    head: qin_head_1.QinHead,
    arms: qin_arms_1.QinArms,
    body: qin_body_1.QinBody,
    legs: qin_legs_1.QinLegs,
    foot: qin_foot_1.QinFoot,
};

},{"./qin-arms":58,"./qin-body":59,"./qin-foot":60,"./qin-head":61,"./qin-legs":62,"./qin-skin":63}]},{},[23])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL1VzZXJzL2VtdXZpL0FwcERhdGEvUm9hbWluZy9ucG0vbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi4uL2FkY29tbW9uL2J1aWxkL2FkLWFwcHJpc2UuanMiLCIuLi9hZGNvbW1vbi9idWlsZC9hZC1leHBlY3QuanMiLCIuLi9hZGNvbW1vbi9idWlsZC9hZC1maWVsZC5qcyIsIi4uL2FkY29tbW9uL2J1aWxkL2FkLWZpbHRlci5qcyIsIi4uL2FkY29tbW9uL2J1aWxkL2FkLWpvaW5lZC5qcyIsIi4uL2FkY29tbW9uL2J1aWxkL2FkLW1lbnUuanMiLCIuLi9hZGNvbW1vbi9idWlsZC9hZC1tb2R1bGVzLmpzIiwiLi4vYWRjb21tb24vYnVpbGQvYWQtbmFtZXMuanMiLCIuLi9hZGNvbW1vbi9idWlsZC9hZC1yZWctYmFyLmpzIiwiLi4vYWRjb21tb24vYnVpbGQvYWQtcmVnLWJhc2UuanMiLCIuLi9hZGNvbW1vbi9idWlsZC9hZC1yZWctZWRpdG9yLmpzIiwiLi4vYWRjb21tb24vYnVpbGQvYWQtcmVnLWxvYWRlci5qcyIsIi4uL2FkY29tbW9uL2J1aWxkL2FkLXJlZy1tb2RlbC5qcyIsIi4uL2FkY29tbW9uL2J1aWxkL2FkLXJlZy1zZWFyY2guanMiLCIuLi9hZGNvbW1vbi9idWlsZC9hZC1yZWctdGFibGUuanMiLCIuLi9hZGNvbW1vbi9idWlsZC9hZC1yZWdpc3Rlci5qcyIsIi4uL2FkY29tbW9uL2J1aWxkL2FkLXRvb2xzLmpzIiwiLi4vYWRjb21tb24vYnVpbGQvYWxsLmpzIiwiYnVpbGQvYWQtbmF0aW9uLmpzIiwiYnVpbGQvYWQtcGVvcGxlLWdyb3VwLmpzIiwiYnVpbGQvYWQtcGVvcGxlLXN1Ymdyb3VwLmpzIiwiYnVpbGQvYWQtcmVnaW9uLmpzIiwiYnVpbGQvaW5kZXguanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL2FsbC5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLWFzc2V0cy5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLWJhc2Utc3R5bGUuanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1iYXNlLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tYm9vbGVhbi5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLWJ1dHRvbi5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLWNvbHVtbi5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLWNvbWJvLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tZGl2aWRlci5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLWVkaXQuanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1maWVsZC5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLWZpbGUtcGF0aC5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLWZpbGUtcGljay5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLWZpbGUtdmlldy5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLWljb24tY2VsbC5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLWljb24tcGljay5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLWljb24uanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1pbnRlZ2VyLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tbGFiZWwuanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1saW5lLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tbXV0YW50cy5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLXBhbmVsLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tcG9wdXAuanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1yb3cuanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1zY3JvbGwuanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1zcGFjZXIuanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1zcGxpdHRlci5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLXN0YWNrLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tc3RyaW5nLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tdGFibGUuanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi10YWJzLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tdGl0bGVkLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tdG9vbC5qcyIsIi4uL3FpbnBlbC1yZXMvYnVpbGQvYWxsLmpzIiwiLi4vcWlucGVsLXJlcy9idWlsZC9xaW4tYXJtcy5qcyIsIi4uL3FpbnBlbC1yZXMvYnVpbGQvcWluLWJvZHkuanMiLCIuLi9xaW5wZWwtcmVzL2J1aWxkL3Fpbi1mb290LmpzIiwiLi4vcWlucGVsLXJlcy9idWlsZC9xaW4taGVhZC5qcyIsIi4uL3FpbnBlbC1yZXMvYnVpbGQvcWluLWxlZ3MuanMiLCIuLi9xaW5wZWwtcmVzL2J1aWxkL3Fpbi1za2luLmpzIiwiLi4vcWlucGVsLXJlcy9idWlsZC9xaW4tc291bC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9HQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0tBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDak1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaFdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0V0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdG9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDblJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuQWRBcHByaXNlID0gZXhwb3J0cy5BZEFwcHJpc2VkID0gdm9pZCAwO1xyXG5jbGFzcyBBZEFwcHJpc2VkIHtcclxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIHBvcHVwKSB7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcclxuICAgICAgICB0aGlzLnBvcHVwID0gcG9wdXAgIT09IG51bGwgJiYgcG9wdXAgIT09IHZvaWQgMCA/IHBvcHVwIDogdHJ1ZTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkFkQXBwcmlzZWQgPSBBZEFwcHJpc2VkO1xyXG5jbGFzcyBBZEFwcHJpc2Uge1xyXG59XHJcbmV4cG9ydHMuQWRBcHByaXNlID0gQWRBcHByaXNlO1xyXG5BZEFwcHJpc2UuQ0FOQ0VMRURfQllfTVVUQVRJT05TID0gbmV3IEFkQXBwcmlzZWQoXCJUaGUgdXNlciBjYW5jZWxlZCB0aGlzIGFjdGlvbiB0byBub3QgbG9vc2UgaGlzIG11dGF0aW9ucy5cIiwgZmFsc2UpO1xyXG5BZEFwcHJpc2UuTk9fUkVTVUxUU19GT1VORCA9IG5ldyBBZEFwcHJpc2VkKFwiTm8gcmVzdWx0cyBmb3VuZC5cIiwgdHJ1ZSk7XHJcbkFkQXBwcmlzZS5JTlNFUlRFRF9SRUdJU1RFUiA9IG5ldyBBZEFwcHJpc2VkKFwiSW5zZXJ0ZWQgb25lIHJlZ2lzdGVyLlwiLCBmYWxzZSk7XHJcbkFkQXBwcmlzZS5VUERBVEVEX1JFR0lTVEVSID0gbmV3IEFkQXBwcmlzZWQoXCJVcGRhdGVkIG9uZSByZWdpc3Rlci5cIiwgZmFsc2UpO1xyXG5BZEFwcHJpc2UuREVMRVRFRF9SRUdJU1RFUiA9IG5ldyBBZEFwcHJpc2VkKFwiUm93IGRlbGV0ZWQgd2l0aCBzdWNjZXNzLlwiLCB0cnVlKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWQtYXBwcmlzZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkFkRXhwZWN0ID0gdm9pZCAwO1xyXG5jbGFzcyBBZEV4cGVjdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5fc2NvcGVzID0gb3B0aW9ucy5zY29wZXM7XHJcbiAgICAgICAgdGhpcy5fZmlsdGVycyA9IG9wdGlvbnMuZmlsdGVycztcclxuICAgICAgICB0aGlzLl93YWl0ZXJzID0gb3B0aW9ucy53YWl0ZXJzO1xyXG4gICAgfVxyXG4gICAgZ2V0IHNjb3BlcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2NvcGVzO1xyXG4gICAgfVxyXG4gICAgZ2V0IGZpbHRlcnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZpbHRlcnM7XHJcbiAgICB9XHJcbiAgICBnZXQgd2FpdGVycygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fd2FpdGVycztcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkFkRXhwZWN0ID0gQWRFeHBlY3Q7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFkLWV4cGVjdC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkFkRmllbGQgPSB2b2lkIDA7XHJcbmNvbnN0IHFpbnBlbF9jcHNfMSA9IHJlcXVpcmUoXCJxaW5wZWwtY3BzXCIpO1xyXG5jbGFzcyBBZEZpZWxkIHtcclxuICAgIGNvbnN0cnVjdG9yKG5ld2VyKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIHRoaXMuX2VkaXQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX3R5cGVkID0gbnVsbDtcclxuICAgICAgICB0aGlzLl92YWx1ZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fa2V5ID0gKF9hID0gbmV3ZXIua2V5KSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBmYWxzZTtcclxuICAgICAgICB0aGlzLl90aXRsZSA9IG5ld2VyLnRpdGxlO1xyXG4gICAgICAgIHRoaXMuX25hbWUgPSBuZXdlci5uYW1lO1xyXG4gICAgICAgIHRoaXMuX2FsaWFzID0gbmV3ZXIuYWxpYXM7XHJcbiAgICAgICAgdGhpcy5fa2luZCA9IG5ld2VyLmtpbmQ7XHJcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IG5ld2VyLm9wdGlvbnM7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICB9XHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMuX2VkaXQgPSBxaW5wZWxfY3BzXzEuUWluTXV0YW50c0FybS5uZXdFZGl0KHRoaXMuX2tpbmQsIHRoaXMuX29wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuX3R5cGVkID0ge1xyXG4gICAgICAgICAgICBuYW1lOiB0aGlzLl9uYW1lLFxyXG4gICAgICAgICAgICB0eXBlOiB0aGlzLl9lZGl0LmdldE5hdHVyZSgpLFxyXG4gICAgICAgICAgICBhbGlhczogdGhpcy5fYWxpYXMsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGdldCBrZXkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2tleTtcclxuICAgIH1cclxuICAgIGdldCBzb3VyY2UoKSB7XHJcbiAgICAgICAgbGV0IGRvdFBvcyA9IHRoaXMuX25hbWUuaW5kZXhPZihcIi5cIik7XHJcbiAgICAgICAgaWYgKGRvdFBvcyA8IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9uYW1lLnN1YnN0cmluZygwLCBkb3RQb3MpO1xyXG4gICAgfVxyXG4gICAgZ2V0IHRpdGxlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90aXRsZTtcclxuICAgIH1cclxuICAgIGdldCBuYW1lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xyXG4gICAgfVxyXG4gICAgZ2V0IGtpbmQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2tpbmQ7XHJcbiAgICB9XHJcbiAgICBnZXQgYWxpYXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FsaWFzO1xyXG4gICAgfVxyXG4gICAgZ2V0IG9wdGlvbnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX29wdGlvbnM7XHJcbiAgICB9XHJcbiAgICBnZXQgdHlwZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3R5cGVkO1xyXG4gICAgfVxyXG4gICAgZ2V0IHZhbHVlZCgpIHtcclxuICAgICAgICBsZXQgbmFtZSA9IHRoaXMuX25hbWU7XHJcbiAgICAgICAgbGV0IHR5cGUgPSB0aGlzLl9lZGl0LmdldE5hdHVyZSgpO1xyXG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5fZWRpdC52YWx1ZTtcclxuICAgICAgICByZXR1cm4geyBuYW1lLCB0eXBlLCBkYXRhIH07XHJcbiAgICB9XHJcbiAgICBnZXQgdmFsdWUoKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMuX2VkaXQudmFsdWU7XHJcbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgc2V0IHZhbHVlKGRhdGEpIHtcclxuICAgICAgICB0aGlzLl9lZGl0LnZhbHVlID0gZGF0YTtcclxuICAgICAgICB0aGlzLl92YWx1ZSA9IGRhdGE7XHJcbiAgICB9XHJcbiAgICBpbnN0YWxsKG9uKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3RpdGxlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlZCA9IG5ldyBxaW5wZWxfY3BzXzEuUWluRmllbGQodGhpcy5fdGl0bGUsIHRoaXMuX2VkaXQpO1xyXG4gICAgICAgICAgICB0aXRsZWQuaW5zdGFsbChvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9lZGl0Lmluc3RhbGwob24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGhhc011dGF0aW9ucygpIHtcclxuICAgICAgICBsZXQgZWFybHkgPSB0aGlzLl92YWx1ZTtcclxuICAgICAgICBsZXQgYnlOb3cgPSB0aGlzLnZhbHVlO1xyXG4gICAgICAgIHJldHVybiBlYXJseSAhPSBieU5vdztcclxuICAgIH1cclxuICAgIHVuZG9NdXRhdGlvbnMoKSB7XHJcbiAgICAgICAgdGhpcy5fZWRpdC52YWx1ZSA9IHRoaXMuX3ZhbHVlO1xyXG4gICAgfVxyXG4gICAgY2xlYW4oKSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBzYXZlZCgpIHtcclxuICAgICAgICB0aGlzLl92YWx1ZSA9IHRoaXMudmFsdWU7XHJcbiAgICB9XHJcbiAgICB0dXJuUmVhZE9ubHkoKSB7XHJcbiAgICAgICAgdGhpcy5fZWRpdC50dXJuUmVhZE9ubHkoKTtcclxuICAgIH1cclxuICAgIHR1cm5FZGl0YWJsZSgpIHtcclxuICAgICAgICB0aGlzLl9lZGl0LnR1cm5FZGl0YWJsZSgpO1xyXG4gICAgfVxyXG4gICAgaXNFZGl0YWJsZSgpIHtcclxuICAgICAgICB0aGlzLl9lZGl0LmlzRWRpdGFibGUoKTtcclxuICAgIH1cclxuICAgIGFkZE9uQ2hhbmdlZCh3YWl0ZXIpIHtcclxuICAgICAgICB0aGlzLl9lZGl0LmFkZE9uQ2hhbmdlZCh3YWl0ZXIpO1xyXG4gICAgfVxyXG4gICAgZm9jdXMoKSB7XHJcbiAgICAgICAgdGhpcy5fZWRpdC5mb2N1cygpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQWRGaWVsZCA9IEFkRmllbGQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFkLWZpZWxkLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuQWRGaWx0ZXJUaWVzID0gZXhwb3J0cy5BZEZpbHRlckxpa2VzID0gZXhwb3J0cy5BZEZpbHRlclNlZW1zID0gZXhwb3J0cy5BZEZpbHRlciA9IHZvaWQgMDtcclxuY2xhc3MgQWRGaWx0ZXIge1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgICAgIHZhciBfYSwgX2IsIF9jO1xyXG4gICAgICAgIHRoaXMuc2VlbXMgPSAoX2EgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuc2VlbXMpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IEFkRmlsdGVyU2VlbXMuU0FNRTtcclxuICAgICAgICB0aGlzLmxpa2VzID0gKF9iID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmxpa2VzKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBBZEZpbHRlckxpa2VzLkVRVUFMUztcclxuICAgICAgICB0aGlzLnZhbHVlZCA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy52YWx1ZWQ7XHJcbiAgICAgICAgdGhpcy5saW5rZWQgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMubGlua2VkO1xyXG4gICAgICAgIHRoaXMudGllcyA9IChfYyA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy50aWVzKSAhPT0gbnVsbCAmJiBfYyAhPT0gdm9pZCAwID8gX2MgOiBBZEZpbHRlclRpZXMuQU5EO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQWRGaWx0ZXIgPSBBZEZpbHRlcjtcclxudmFyIEFkRmlsdGVyU2VlbXM7XHJcbihmdW5jdGlvbiAoQWRGaWx0ZXJTZWVtcykge1xyXG4gICAgQWRGaWx0ZXJTZWVtc1tcIlNBTUVcIl0gPSBcIlNBTUVcIjtcclxuICAgIEFkRmlsdGVyU2VlbXNbXCJESVZFUlNFXCJdID0gXCJESVZFUlNFXCI7XHJcbn0pKEFkRmlsdGVyU2VlbXMgPSBleHBvcnRzLkFkRmlsdGVyU2VlbXMgfHwgKGV4cG9ydHMuQWRGaWx0ZXJTZWVtcyA9IHt9KSk7XHJcbnZhciBBZEZpbHRlckxpa2VzO1xyXG4oZnVuY3Rpb24gKEFkRmlsdGVyTGlrZXMpIHtcclxuICAgIEFkRmlsdGVyTGlrZXNbXCJFUVVBTFNcIl0gPSBcIkVRVUFMU1wiO1xyXG4gICAgQWRGaWx0ZXJMaWtlc1tcIkJJR0dFUlwiXSA9IFwiQklHR0VSXCI7XHJcbiAgICBBZEZpbHRlckxpa2VzW1wiTEVTU0VSXCJdID0gXCJMRVNTRVJcIjtcclxuICAgIEFkRmlsdGVyTGlrZXNbXCJCSUdHRVJfRVFVQUxTXCJdID0gXCJCSUdHRVJfRVFVQUxTXCI7XHJcbiAgICBBZEZpbHRlckxpa2VzW1wiTEVTU0VSX0VRVUFMU1wiXSA9IFwiTEVTU0VSX0VRVUFMU1wiO1xyXG4gICAgQWRGaWx0ZXJMaWtlc1tcIlNUQVJUU19XSVRIXCJdID0gXCJTVEFSVFNfV0lUSFwiO1xyXG4gICAgQWRGaWx0ZXJMaWtlc1tcIkVORFNfV0lUSFwiXSA9IFwiRU5EU19XSVRIXCI7XHJcbiAgICBBZEZpbHRlckxpa2VzW1wiQ09OVEFJTlNcIl0gPSBcIkNPTlRBSU5TXCI7XHJcbn0pKEFkRmlsdGVyTGlrZXMgPSBleHBvcnRzLkFkRmlsdGVyTGlrZXMgfHwgKGV4cG9ydHMuQWRGaWx0ZXJMaWtlcyA9IHt9KSk7XHJcbnZhciBBZEZpbHRlclRpZXM7XHJcbihmdW5jdGlvbiAoQWRGaWx0ZXJUaWVzKSB7XHJcbiAgICBBZEZpbHRlclRpZXNbXCJBTkRcIl0gPSBcIkFORFwiO1xyXG4gICAgQWRGaWx0ZXJUaWVzW1wiT1JcIl0gPSBcIk9SXCI7XHJcbn0pKEFkRmlsdGVyVGllcyA9IGV4cG9ydHMuQWRGaWx0ZXJUaWVzIHx8IChleHBvcnRzLkFkRmlsdGVyVGllcyA9IHt9KSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFkLWZpbHRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkFkSm9pbmVkVGllcyA9IHZvaWQgMDtcclxudmFyIEFkSm9pbmVkVGllcztcclxuKGZ1bmN0aW9uIChBZEpvaW5lZFRpZXMpIHtcclxuICAgIEFkSm9pbmVkVGllc1tBZEpvaW5lZFRpZXNbXCJJTk5FUlwiXSA9IDBdID0gXCJJTk5FUlwiO1xyXG4gICAgQWRKb2luZWRUaWVzW0FkSm9pbmVkVGllc1tcIkxFRlRcIl0gPSAxXSA9IFwiTEVGVFwiO1xyXG4gICAgQWRKb2luZWRUaWVzW0FkSm9pbmVkVGllc1tcIlJJR0hUXCJdID0gMl0gPSBcIlJJR0hUXCI7XHJcbiAgICBBZEpvaW5lZFRpZXNbQWRKb2luZWRUaWVzW1wiRlVMTFwiXSA9IDNdID0gXCJGVUxMXCI7XHJcbiAgICBBZEpvaW5lZFRpZXNbQWRKb2luZWRUaWVzW1wiQ1JPU1NcIl0gPSA0XSA9IFwiQ1JPU1NcIjtcclxufSkoQWRKb2luZWRUaWVzID0gZXhwb3J0cy5BZEpvaW5lZFRpZXMgfHwgKGV4cG9ydHMuQWRKb2luZWRUaWVzID0ge30pKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWQtam9pbmVkLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMubWVudVN0YXJ0VXAgPSBleHBvcnRzLkFkTWVudSA9IHZvaWQgMDtcclxuY29uc3QgcWlucGVsX2Nwc18xID0gcmVxdWlyZShcInFpbnBlbC1jcHNcIik7XHJcbmNvbnN0IHFpbnBlbF9yZXNfMSA9IHJlcXVpcmUoXCJxaW5wZWwtcmVzXCIpO1xyXG5jb25zdCBhZF9leHBlY3RfMSA9IHJlcXVpcmUoXCIuL2FkLWV4cGVjdFwiKTtcclxuY29uc3QgYWRfbmFtZXNfMSA9IHJlcXVpcmUoXCIuL2FkLW5hbWVzXCIpO1xyXG5jb25zdCBhZF90b29sc18xID0gcmVxdWlyZShcIi4vYWQtdG9vbHNcIik7XHJcbmNsYXNzIEFkTWVudSBleHRlbmRzIHFpbnBlbF9jcHNfMS5RaW5Db2x1bW4ge1xyXG4gICAgY29uc3RydWN0b3IoaXRlbXMpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX2xpbmVzID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbmUgPSB0aGlzLmdldExpbmUoaXRlbS5ncm91cCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IG5ldyBxaW5wZWxfY3BzXzEuUWluQnV0dG9uKHtcclxuICAgICAgICAgICAgICAgIGljb246IG5ldyBxaW5wZWxfY3BzXzEuUWluSWNvbihpdGVtLm1vZHVsZS5pY29uLCBxaW5wZWxfcmVzXzEuUWluR3JhbmRldXIuTUVESVVNKSxcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBuZXcgcWlucGVsX2Nwc18xLlFpbkxhYmVsKGl0ZW0ubW9kdWxlLnRpdGxlKSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5wdXRBc0NvbHVtbigpO1xyXG4gICAgICAgICAgICBidXR0b24uYWRkQWN0aW9uTWFpbigoXykgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5xaW5wZWwuY2hpZWYubmV3Sm9iYmVyKGl0ZW0ubW9kdWxlLnRpdGxlLCBpdGVtLm1vZHVsZS5hcHAsIGFkX3Rvb2xzXzEuQWRUb29scy5uZXdBZFNldHVwT3B0aW9uKGl0ZW0ubW9kdWxlLCBbYWRfdG9vbHNfMS5BZFNjb3BlLkFMTF0pKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucWlucGVsLmpvYmJlZC5jbG9zZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbGluZS5wdXQoYnV0dG9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRMaW5lKHRpdGxlKSB7XHJcbiAgICAgICAgaWYgKCF0aXRsZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fbGluZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdMaW5lID0gbmV3IHFpbnBlbF9jcHNfMS5RaW5UaXRsZWQoKTtcclxuICAgICAgICAgICAgICAgIG5ld0xpbmUuaW5zdGFsbCh0aGlzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xpbmVzLnB1c2gobmV3TGluZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xpbmVzW3RoaXMuX2xpbmVzLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IGxpbmUgb2YgdGhpcy5fbGluZXMpIHtcclxuICAgICAgICAgICAgaWYgKGxpbmUudGl0bGUgPT0gdGl0bGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBsaW5lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG5ld0xpbmUgPSBuZXcgcWlucGVsX2Nwc18xLlFpblRpdGxlZCh7IHRpdGxlIH0pO1xyXG4gICAgICAgIG5ld0xpbmUuaW5zdGFsbCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9saW5lcy5wdXNoKG5ld0xpbmUpO1xyXG4gICAgICAgIHJldHVybiBuZXdMaW5lO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQWRNZW51ID0gQWRNZW51O1xyXG5mdW5jdGlvbiBtZW51U3RhcnRVcChtZW51cykge1xyXG4gICAgY29uc3QgYWRTZXR1cCA9IHFpbnBlbF9jcHNfMS5RaW5Ub29sLnFpbnBlbC5qb2JiZWQuZ2V0T3B0aW9uKGFkX25hbWVzXzEuQWROYW1lcy5BZFNldHVwKTtcclxuICAgIGlmIChhZFNldHVwICYmIGFkU2V0dXAubW9kdWxlKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBtZW51IG9mIG1lbnVzKSB7XHJcbiAgICAgICAgICAgIGlmIChhZF90b29sc18xLkFkVG9vbHMuaXNTYW1lTW9kdWxlKG1lbnUubW9kdWxlLCBhZFNldHVwLm1vZHVsZSkpIHtcclxuICAgICAgICAgICAgICAgIGxldCBleHBlY3QgPSBuZXcgYWRfZXhwZWN0XzEuQWRFeHBlY3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlczogYWRTZXR1cC5zY29wZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyczogYWRTZXR1cC5maWx0ZXJzLFxyXG4gICAgICAgICAgICAgICAgICAgIHdhaXRlcnM6IG5ldyBxaW5wZWxfcmVzXzEuUWluV2FpdGVycygpLmFkZFdhaXRlcigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHFpbnBlbF9jcHNfMS5RaW5Ub29sLnFpbnBlbC5qb2JiZWQuc2VuZFdhaXRlcnMocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1lbnUucmVnaXN0ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IG1lbnUucmVnaXN0ZXIobWVudS5tb2R1bGUsIGV4cGVjdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBtZW51IGFjdGlvbiBkZWZpbmVkXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ldyBBZE1lbnUobWVudXMpO1xyXG59XHJcbmV4cG9ydHMubWVudVN0YXJ0VXAgPSBtZW51U3RhcnRVcDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWQtbWVudS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkFkTW9kdWxlcyA9IHZvaWQgMDtcclxuY29uc3QgcWlucGVsX2Nwc18xID0gcmVxdWlyZShcInFpbnBlbC1jcHNcIik7XHJcbmNsYXNzIEFkTW9kdWxlcyB7XHJcbn1cclxuZXhwb3J0cy5BZE1vZHVsZXMgPSBBZE1vZHVsZXM7XHJcbkFkTW9kdWxlcy5CVVNJTkVTUyA9IHtcclxuICAgIGFwcDogXCJhZHBlb3BsZVwiLFxyXG4gICAgdGl0bGU6IFwiTmVnw7NjaW9zXCIsXHJcbiAgICBpY29uOiBxaW5wZWxfY3BzXzEuUWluQXNzZXQuRmFjZUdsb2JlLFxyXG59O1xyXG5BZE1vZHVsZXMuUkVHSU9OID0ge1xyXG4gICAgYXBwOiBcImFkcGVvcGxlXCIsXHJcbiAgICB0aXRsZTogXCJSZWdpw6NvXCIsXHJcbiAgICBpY29uOiBxaW5wZWxfY3BzXzEuUWluQXNzZXQuRmFjZVJlZ2lvbixcclxufTtcclxuQWRNb2R1bGVzLk5BVElPTiA9IHtcclxuICAgIGFwcDogXCJhZHBlb3BsZVwiLFxyXG4gICAgdGl0bGU6IFwiUGHDrXNlc1wiLFxyXG4gICAgaWNvbjogcWlucGVsX2Nwc18xLlFpbkFzc2V0LkZhY2VHbG9iZSxcclxufTtcclxuQWRNb2R1bGVzLlNUQVRFID0ge1xyXG4gICAgYXBwOiBcImFkcGVvcGxlXCIsXHJcbiAgICB0aXRsZTogXCJFc3RhZG9zXCIsXHJcbiAgICBpY29uOiBxaW5wZWxfY3BzXzEuUWluQXNzZXQuRmFjZUdsb2JlLFxyXG59O1xyXG5BZE1vZHVsZXMuQ0lUWSA9IHtcclxuICAgIGFwcDogXCJhZHBlb3BsZVwiLFxyXG4gICAgdGl0bGU6IFwiQ2lkYWRlc1wiLFxyXG4gICAgaWNvbjogcWlucGVsX2Nwc18xLlFpbkFzc2V0LkZhY2VHbG9iZSxcclxufTtcclxuQWRNb2R1bGVzLkRJU1RSSUNUID0ge1xyXG4gICAgYXBwOiBcImFkcGVvcGxlXCIsXHJcbiAgICB0aXRsZTogXCJCYWlycm9zXCIsXHJcbiAgICBpY29uOiBxaW5wZWxfY3BzXzEuUWluQXNzZXQuRmFjZUdsb2JlLFxyXG59O1xyXG5BZE1vZHVsZXMuUEVPUExFID0ge1xyXG4gICAgYXBwOiBcImFkcGVvcGxlXCIsXHJcbiAgICB0aXRsZTogXCJQZXNzb2FzXCIsXHJcbiAgICBpY29uOiBxaW5wZWxfY3BzXzEuUWluQXNzZXQuRmFjZUdsb2JlLFxyXG59O1xyXG5BZE1vZHVsZXMuUEVPUExFX0dST1VQID0ge1xyXG4gICAgYXBwOiBcImFkcGVvcGxlXCIsXHJcbiAgICB0aXRsZTogXCJHcnVwb3MgZGUgUGVzc29hc1wiLFxyXG4gICAgaWNvbjogcWlucGVsX2Nwc18xLlFpbkFzc2V0LkZhY2VHbG9iZSxcclxufTtcclxuQWRNb2R1bGVzLlBFT1BMRV9TVUJHUk9VUCA9IHtcclxuICAgIGFwcDogXCJhZHBlb3BsZVwiLFxyXG4gICAgdGl0bGU6IFwiU3ViR3J1cG9zIGRlIFBlc3NvYXNcIixcclxuICAgIGljb246IHFpbnBlbF9jcHNfMS5RaW5Bc3NldC5GYWNlR2xvYmUsXHJcbn07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFkLW1vZHVsZXMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5BZE5hbWVzID0gdm9pZCAwO1xyXG52YXIgQWROYW1lcztcclxuKGZ1bmN0aW9uIChBZE5hbWVzKSB7XHJcbiAgICBBZE5hbWVzW1wiQWRCb2FyZFwiXSA9IFwiQWRCb2FyZFwiO1xyXG4gICAgQWROYW1lc1tcIkFkTWlzdGVyXCJdID0gXCJBZE1pc3RlclwiO1xyXG4gICAgQWROYW1lc1tcIkFkUGVvcGxlXCJdID0gXCJBZFBlb3BsZVwiO1xyXG4gICAgQWROYW1lc1tcIkFkUHJvZHVjdFwiXSA9IFwiQWRQcm9kdWN0XCI7XHJcbiAgICBBZE5hbWVzW1wiQWRQcm9qZWN0XCJdID0gXCJBZFByb2plY3RcIjtcclxuICAgIEFkTmFtZXNbXCJBZFNhbGVzXCJdID0gXCJBZFNhbGVzXCI7XHJcbiAgICBBZE5hbWVzW1wiQWRTZXR1cFwiXSA9IFwiQWRTZXR1cFwiO1xyXG59KShBZE5hbWVzID0gZXhwb3J0cy5BZE5hbWVzIHx8IChleHBvcnRzLkFkTmFtZXMgPSB7fSkpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hZC1uYW1lcy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkFkUmVnQmFyID0gdm9pZCAwO1xyXG5jb25zdCBxaW5wZWxfY3BzXzEgPSByZXF1aXJlKFwicWlucGVsLWNwc1wiKTtcclxuY29uc3QgYWRfYXBwcmlzZV8xID0gcmVxdWlyZShcIi4vYWQtYXBwcmlzZVwiKTtcclxuY29uc3QgYWRfcmVnaXN0ZXJfMSA9IHJlcXVpcmUoXCIuL2FkLXJlZ2lzdGVyXCIpO1xyXG5jbGFzcyBBZFJlZ0JhciBleHRlbmRzIHFpbnBlbF9jcHNfMS5RaW5MaW5lIHtcclxuICAgIGNvbnN0cnVjdG9yKHJlZ2lzdGVyKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl9xaW5NZW51ID0gbmV3IHFpbnBlbF9jcHNfMS5RaW5CdXR0b24oeyBpY29uOiBuZXcgcWlucGVsX2Nwc18xLlFpbkljb24ocWlucGVsX2Nwc18xLlFpbkFzc2V0LkZhY2VNZW51TGluZXMpIH0pO1xyXG4gICAgICAgIHRoaXMuX3Fpbk1lbnVWaWV3U2luZ2xlID0gbmV3IHFpbnBlbF9jcHNfMS5RaW5CdXR0b24oe1xyXG4gICAgICAgICAgICBpY29uOiBuZXcgcWlucGVsX2Nwc18xLlFpbkljb24ocWlucGVsX2Nwc18xLlFpbkFzc2V0LkZhY2VTcGxpdE5vdFZpZXcpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX3Fpbk1lbnVWaWV3VmVydGljYWwgPSBuZXcgcWlucGVsX2Nwc18xLlFpbkJ1dHRvbih7XHJcbiAgICAgICAgICAgIGljb246IG5ldyBxaW5wZWxfY3BzXzEuUWluSWNvbihxaW5wZWxfY3BzXzEuUWluQXNzZXQuRmFjZVNwbGl0Vmlld1ZlcnRpY2FsKSxcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9xaW5NZW51Vmlld0hvcml6b250YWwgPSBuZXcgcWlucGVsX2Nwc18xLlFpbkJ1dHRvbih7XHJcbiAgICAgICAgICAgIGljb246IG5ldyBxaW5wZWxfY3BzXzEuUWluSWNvbihxaW5wZWxfY3BzXzEuUWluQXNzZXQuRmFjZVNwbGl0Vmlld0hvcml6b250YWwpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX3Fpbk1lbnVGb2N1c0JvZHkgPSBuZXcgcWlucGVsX2Nwc18xLlFpbkJ1dHRvbih7XHJcbiAgICAgICAgICAgIGljb246IG5ldyBxaW5wZWxfY3BzXzEuUWluSWNvbihxaW5wZWxfY3BzXzEuUWluQXNzZXQuRmFjZUxpc3RWaWV3KSxcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9xaW5NZW51Rm9jdXNUYWJsZSA9IG5ldyBxaW5wZWxfY3BzXzEuUWluQnV0dG9uKHtcclxuICAgICAgICAgICAgaWNvbjogbmV3IHFpbnBlbF9jcHNfMS5RaW5JY29uKHFpbnBlbF9jcHNfMS5RaW5Bc3NldC5GYWNlR3JpZFZpZXcpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX3Fpbk1lbnVCb2R5ID0gbmV3IHFpbnBlbF9jcHNfMS5RaW5MaW5lKHtcclxuICAgICAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Fpbk1lbnVWaWV3U2luZ2xlLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcWluTWVudVZpZXdWZXJ0aWNhbCxcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Fpbk1lbnVWaWV3SG9yaXpvbnRhbCxcclxuICAgICAgICAgICAgICAgIG5ldyBxaW5wZWxfY3BzXzEuUWluRGl2aWRlcigpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcWluTWVudUZvY3VzQm9keSxcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Fpbk1lbnVGb2N1c1RhYmxlLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX3FpblBvcHVwID0gbmV3IHFpbnBlbF9jcHNfMS5RaW5Qb3B1cCh0aGlzLl9xaW5NZW51Qm9keSk7XHJcbiAgICAgICAgdGhpcy5fcWluSW5zZXJ0ID0gbmV3IHFpbnBlbF9jcHNfMS5RaW5JY29uKHFpbnBlbF9jcHNfMS5RaW5Bc3NldC5GYWNlQWRkKTtcclxuICAgICAgICB0aGlzLl9xaW5TZWFyY2ggPSBuZXcgcWlucGVsX2Nwc18xLlFpbkljb24ocWlucGVsX2Nwc18xLlFpbkFzc2V0LkZhY2VTZWFyY2gpO1xyXG4gICAgICAgIHRoaXMuX3Fpbk5vdGljZSA9IG5ldyBxaW5wZWxfY3BzXzEuUWluSWNvbihxaW5wZWxfY3BzXzEuUWluQXNzZXQuRmFjZUV5ZSk7XHJcbiAgICAgICAgdGhpcy5fcWluTW9kZSA9IG5ldyBxaW5wZWxfY3BzXzEuUWluSWNvblBpY2soe1xyXG4gICAgICAgICAgICBpY29uczogW3RoaXMuX3Fpbkluc2VydCwgdGhpcy5fcWluU2VhcmNoLCB0aGlzLl9xaW5Ob3RpY2VdLFxyXG4gICAgICAgICAgICByZWFkT25seTogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9xaW5Hb0ZpcnN0ID0gbmV3IHFpbnBlbF9jcHNfMS5RaW5CdXR0b24oeyBpY29uOiBuZXcgcWlucGVsX2Nwc18xLlFpbkljb24ocWlucGVsX2Nwc18xLlFpbkFzc2V0LkZhY2VSVXBDaGV2cm9uUHVzaCkgfSk7XHJcbiAgICAgICAgdGhpcy5fcWluR29QcmlvciA9IG5ldyBxaW5wZWxfY3BzXzEuUWluQnV0dG9uKHtcclxuICAgICAgICAgICAgaWNvbjogbmV3IHFpbnBlbF9jcHNfMS5RaW5JY29uKHFpbnBlbF9jcHNfMS5RaW5Bc3NldC5GYWNlUkxlZnRDaGV2cm9uUHVzaCksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fcWluR29OZXh0ID0gbmV3IHFpbnBlbF9jcHNfMS5RaW5CdXR0b24oe1xyXG4gICAgICAgICAgICBpY29uOiBuZXcgcWlucGVsX2Nwc18xLlFpbkljb24ocWlucGVsX2Nwc18xLlFpbkFzc2V0LkZhY2VSUmlnaHRDaGV2cm9uUHVzaCksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fcWluR29MYXN0ID0gbmV3IHFpbnBlbF9jcHNfMS5RaW5CdXR0b24oe1xyXG4gICAgICAgICAgICBpY29uOiBuZXcgcWlucGVsX2Nwc18xLlFpbkljb24ocWlucGVsX2Nwc18xLlFpbkFzc2V0LkZhY2VSRG93bkNoZXZyb25QdXNoKSxcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9xaW5NdXRhdGUgPSBuZXcgcWlucGVsX2Nwc18xLlFpbkJ1dHRvbih7IGljb246IG5ldyBxaW5wZWxfY3BzXzEuUWluSWNvbihxaW5wZWxfY3BzXzEuUWluQXNzZXQuRmFjZVBlbmNpbCkgfSk7XHJcbiAgICAgICAgdGhpcy5fcWluQ29uZmlybSA9IG5ldyBxaW5wZWxfY3BzXzEuUWluQnV0dG9uKHsgaWNvbjogbmV3IHFpbnBlbF9jcHNfMS5RaW5JY29uKHFpbnBlbF9jcHNfMS5RaW5Bc3NldC5GYWNlQ29uZmlybSkgfSk7XHJcbiAgICAgICAgdGhpcy5fcWluQ2FuY2VsID0gbmV3IHFpbnBlbF9jcHNfMS5RaW5CdXR0b24oeyBpY29uOiBuZXcgcWlucGVsX2Nwc18xLlFpbkljb24ocWlucGVsX2Nwc18xLlFpbkFzc2V0LkZhY2VDYW5jZWwpIH0pO1xyXG4gICAgICAgIHRoaXMuX3FpbkRlbGV0ZSA9IG5ldyBxaW5wZWxfY3BzXzEuUWluQnV0dG9uKHsgaWNvbjogbmV3IHFpbnBlbF9jcHNfMS5RaW5JY29uKHFpbnBlbF9jcHNfMS5RaW5Bc3NldC5GYWNlVHJhc2gpIH0pO1xyXG4gICAgICAgIHRoaXMuX3JlZyA9IHJlZ2lzdGVyO1xyXG4gICAgICAgIHRoaXMuaW5pdE1lbnUoKTtcclxuICAgICAgICB0aGlzLmluaXRNb2RlKCk7XHJcbiAgICAgICAgdGhpcy5pbml0TW92ZSgpO1xyXG4gICAgICAgIHRoaXMuaW5pdE1ha2UoKTtcclxuICAgICAgICB0aGlzLnN0eWxlLnB1dEFzUGFkZGluZ0JvdHRvbSgyKTtcclxuICAgICAgICB0aGlzLnN0eWxlLnB1dEFzQm9yZGVyQm90dG9tKDIsIFwiIzk5OVwiKTtcclxuICAgICAgICB0aGlzLnN0eWxlLnB1dEFzTWFyZ2luQm90dG9tKDIpO1xyXG4gICAgfVxyXG4gICAgaW5pdE1lbnUoKSB7XHJcbiAgICAgICAgdGhpcy5fcWluTWVudS5pbnN0YWxsKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX3Fpbk1lbnUuYWRkQWN0aW9uTWFpbigoXykgPT4gdGhpcy5fcWluUG9wdXAuc2hvd09uUGFyZW50KHRoaXMuX3Fpbk1lbnUpKTtcclxuICAgICAgICB0aGlzLl9xaW5NZW51Vmlld1NpbmdsZS5hZGRBY3Rpb25NYWluKChfKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3FpblBvcHVwLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlZy52aWV3U2luZ2xlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fcWluTWVudVZpZXdWZXJ0aWNhbC5hZGRBY3Rpb25NYWluKChfKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3FpblBvcHVwLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlZy52aWV3VmVydGljYWwoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9xaW5NZW51Vmlld0hvcml6b250YWwuYWRkQWN0aW9uTWFpbigoXykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9xaW5Qb3B1cC5jbG9zZSgpO1xyXG4gICAgICAgICAgICB0aGlzLl9yZWcudmlld0hvcml6b250YWwoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9xaW5NZW51Rm9jdXNCb2R5LmFkZEFjdGlvbk1haW4oKF8pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fcWluUG9wdXAuY2xvc2UoKTtcclxuICAgICAgICAgICAgdGhpcy5fcmVnLmZvY3VzQm9keSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX3Fpbk1lbnVGb2N1c1RhYmxlLmFkZEFjdGlvbk1haW4oKF8pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fcWluUG9wdXAuY2xvc2UoKTtcclxuICAgICAgICAgICAgdGhpcy5fcmVnLmZvY3VzVGFibGUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGluaXRNb2RlKCkge1xyXG4gICAgICAgIHRoaXMuX3Fpbk1vZGUuaW5zdGFsbCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9xaW5JbnNlcnQuYWRkQWN0aW9uTWFpbigoXykgPT4gdGhpcy5fcmVnLnRyeVR1cm5JbnNlcnQoKS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlZy5kaXNwbGF5RXJyb3IoZXJyLCBcInthZGNvbW1vbn0oRXJyQ29kZS0wMDAwMDMpXCIpO1xyXG4gICAgICAgIH0pKTtcclxuICAgICAgICB0aGlzLl9xaW5TZWFyY2guYWRkQWN0aW9uTWFpbigoXykgPT4gdGhpcy5fcmVnLnRyeVR1cm5TZWFyY2goKS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlZy5kaXNwbGF5RXJyb3IoZXJyLCBcInthZGNvbW1vbn0oRXJyQ29kZS0wMDAwMDQpXCIpO1xyXG4gICAgICAgIH0pKTtcclxuICAgICAgICB0aGlzLl9xaW5Ob3RpY2UuYWRkQWN0aW9uTWFpbigoXykgPT4gdGhpcy5fcmVnLnRyeVR1cm5Ob3RpY2UoKS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlZy5kaXNwbGF5RXJyb3IoZXJyLCBcInthZGNvbW1vbn0oRXJyQ29kZS0wMDAwMDUpXCIpO1xyXG4gICAgICAgIH0pKTtcclxuICAgICAgICB0aGlzLl9yZWcuYWRkTGlzdGVuZXIoe1xyXG4gICAgICAgICAgICBldmVudDogYWRfcmVnaXN0ZXJfMS5BZFJlZ1R1cm4uVFVSTl9NT0RFLFxyXG4gICAgICAgICAgICBvbkRpZDogKHR1cm5lZCkgPT4gdGhpcy5zZXRNb2RlKHR1cm5lZC5uZXdNb2RlKSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGluaXRNb3ZlKCkge1xyXG4gICAgICAgIHRoaXMuX3FpbkdvRmlyc3QuaW5zdGFsbCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9xaW5Hb0ZpcnN0LmFkZEFjdGlvbk1haW4oKF8pID0+IHRoaXMuX3JlZy50cnlHb0ZpcnN0KCkpO1xyXG4gICAgICAgIHRoaXMuX3FpbkdvUHJpb3IuaW5zdGFsbCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9xaW5Hb1ByaW9yLmFkZEFjdGlvbk1haW4oKF8pID0+IHRoaXMuX3JlZy50cnlHb1ByaW9yKCkpO1xyXG4gICAgICAgIHRoaXMuX3FpbkdvTmV4dC5pbnN0YWxsKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX3FpbkdvTmV4dC5hZGRBY3Rpb25NYWluKChfKSA9PiB0aGlzLl9yZWcudHJ5R29OZXh0KCkpO1xyXG4gICAgICAgIHRoaXMuX3FpbkdvTGFzdC5pbnN0YWxsKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX3FpbkdvTGFzdC5hZGRBY3Rpb25NYWluKChfKSA9PiB0aGlzLl9yZWcudHJ5R29MYXN0KCkpO1xyXG4gICAgfVxyXG4gICAgaW5pdE1ha2UoKSB7XHJcbiAgICAgICAgdGhpcy5fcWluTXV0YXRlLmluc3RhbGwodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fcWluTXV0YXRlLmFkZEFjdGlvbk1haW4oKF8pID0+IHRoaXMuX3JlZy50cnlUdXJuTXV0YXRlKCkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9yZWcuZGlzcGxheUVycm9yKGVyciwgXCJ7YWRjb21tb259KEVyckNvZGUtMDAwMDEyKVwiKTtcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgdGhpcy5fcWluQ29uZmlybS5pbnN0YWxsKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX3FpbkNvbmZpcm0uYWRkQWN0aW9uTWFpbigoXykgPT4gdGhpcy5fcmVnLnRyeUNvbmZpcm0oKS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlZy5kaXNwbGF5RXJyb3IoZXJyLCBcInthZGNvbW1vbn0oRXJyQ29kZS0wMDAwMDcpXCIpO1xyXG4gICAgICAgIH0pKTtcclxuICAgICAgICB0aGlzLl9xaW5DYW5jZWwuaW5zdGFsbCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9xaW5DYW5jZWwuYWRkQWN0aW9uTWFpbigoXykgPT4gdGhpcy5fcmVnLnRyeUNhbmNlbCgpKTtcclxuICAgICAgICB0aGlzLl9xaW5EZWxldGUuaW5zdGFsbCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9xaW5EZWxldGUuYWRkQWN0aW9uTWFpbigoXykgPT4gdGhpcy5fcmVnXHJcbiAgICAgICAgICAgIC50cnlEZWxldGUoKVxyXG4gICAgICAgICAgICAudGhlbigoXykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnFpbnBlbC5qb2JiZWQuc2hvd0luZm8oYWRfYXBwcmlzZV8xLkFkQXBwcmlzZS5ERUxFVEVEX1JFR0lTVEVSLCBcInthZGNvbW1vbn0oRXJyQ29kZS0wMDAwMTEpXCIpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlZy5kaXNwbGF5RXJyb3IoZXJyLCBcInthZGNvbW1vbn0oRXJyQ29kZS0wMDAwMDYpXCIpO1xyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxuICAgIHNldE1vZGUobW9kZSkge1xyXG4gICAgICAgIHRoaXMuX3Fpbk1vZGUudmFsdWUgPSBudWxsO1xyXG4gICAgICAgIGlmIChtb2RlKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAobW9kZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBhZF9yZWdpc3Rlcl8xLkFkUmVnTW9kZS5JTlNFUlQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcWluTW9kZS52YWx1ZSA9IHRoaXMuX3Fpbkluc2VydC5hc3NldDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9xaW5Hb0ZpcnN0LnVuRGlzcGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3FpbkdvUHJpb3IudW5EaXNwbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcWluR29OZXh0LnVuRGlzcGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3FpbkdvTGFzdC51bkRpc3BsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9xaW5NdXRhdGUudW5EaXNwbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcWluQ29uZmlybS5yZURpc3BsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9xaW5DYW5jZWwucmVEaXNwbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcWluRGVsZXRlLnVuRGlzcGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBhZF9yZWdpc3Rlcl8xLkFkUmVnTW9kZS5TRUFSQ0g6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcWluTW9kZS52YWx1ZSA9IHRoaXMuX3FpblNlYXJjaC5hc3NldDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9xaW5Hb0ZpcnN0LnVuRGlzcGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3FpbkdvUHJpb3IudW5EaXNwbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcWluR29OZXh0LnVuRGlzcGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3FpbkdvTGFzdC51bkRpc3BsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9xaW5NdXRhdGUudW5EaXNwbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcWluQ29uZmlybS5yZURpc3BsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9xaW5DYW5jZWwucmVEaXNwbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcWluRGVsZXRlLnVuRGlzcGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBhZF9yZWdpc3Rlcl8xLkFkUmVnTW9kZS5OT1RJQ0U6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcWluTW9kZS52YWx1ZSA9IHRoaXMuX3Fpbk5vdGljZS5hc3NldDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9xaW5Hb0ZpcnN0LnJlRGlzcGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3FpbkdvUHJpb3IucmVEaXNwbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcWluR29OZXh0LnJlRGlzcGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3FpbkdvTGFzdC5yZURpc3BsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9xaW5NdXRhdGUucmVEaXNwbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcWluQ29uZmlybS51bkRpc3BsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9xaW5DYW5jZWwudW5EaXNwbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcWluRGVsZXRlLnVuRGlzcGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBhZF9yZWdpc3Rlcl8xLkFkUmVnTW9kZS5NVVRBVEU6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcWluTW9kZS52YWx1ZSA9IHRoaXMuX3Fpbk5vdGljZS5hc3NldDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9xaW5Hb0ZpcnN0LnVuRGlzcGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3FpbkdvUHJpb3IudW5EaXNwbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcWluR29OZXh0LnVuRGlzcGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3FpbkdvTGFzdC51bkRpc3BsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9xaW5NdXRhdGUudW5EaXNwbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcWluQ29uZmlybS5yZURpc3BsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9xaW5DYW5jZWwucmVEaXNwbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcWluRGVsZXRlLnJlRGlzcGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQWRSZWdCYXIgPSBBZFJlZ0JhcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWQtcmVnLWJhci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkFkUmVnQmFzZSA9IHZvaWQgMDtcclxuY2xhc3MgQWRSZWdCYXNlIHtcclxufVxyXG5leHBvcnRzLkFkUmVnQmFzZSA9IEFkUmVnQmFzZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWQtcmVnLWJhc2UuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5BZFJlZ0VkaXRvciA9IHZvaWQgMDtcclxuY29uc3QgcWlucGVsX2Nwc18xID0gcmVxdWlyZShcInFpbnBlbC1jcHNcIik7XHJcbmNsYXNzIEFkUmVnRWRpdG9yIGV4dGVuZHMgcWlucGVsX2Nwc18xLlFpblBhbmVsIHtcclxuICAgIGNvbnN0cnVjdG9yKHJlZ2lzdGVyKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl90YWJzID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9jb2x1bW4gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX2xpbmUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX3JlZyA9IHJlZ2lzdGVyO1xyXG4gICAgfVxyXG4gICAgYWRkVGFiKHRpdGxlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3RhYnMgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLl90YWJzID0gbmV3IHFpbnBlbF9jcHNfMS5RaW5UYWJzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3RhYnMuaW5zdGFsbCh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fY29sdW1uID0gbmV3IHFpbnBlbF9jcHNfMS5RaW5Db2x1bW4oKTtcclxuICAgICAgICB0aGlzLl90YWJzLmFkZFRhYih7IHRpdGxlLCB2aWV3ZXI6IHRoaXMuX2NvbHVtbiB9KTtcclxuICAgICAgICB0aGlzLl9saW5lID0gbmV3IHFpbnBlbF9jcHNfMS5RaW5MaW5lKCk7XHJcbiAgICAgICAgdGhpcy5fbGluZS5pbnN0YWxsKHRoaXMuX2NvbHVtbik7XHJcbiAgICB9XHJcbiAgICBhZGRMaW5lKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9jb2x1bW4gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9jb2x1bW4gPSBuZXcgcWlucGVsX2Nwc18xLlFpbkNvbHVtbigpO1xyXG4gICAgICAgICAgICB0aGlzLl9jb2x1bW4uaW5zdGFsbCh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fbGluZSA9IG5ldyBxaW5wZWxfY3BzXzEuUWluTGluZSgpO1xyXG4gICAgICAgIHRoaXMuX2xpbmUuaW5zdGFsbCh0aGlzLl9jb2x1bW4pO1xyXG4gICAgfVxyXG4gICAgYWRkRmllbGQoZmllbGQpIHtcclxuICAgICAgICBpZiAodGhpcy5fbGluZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkTGluZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaWVsZC5pbnN0YWxsKHRoaXMuX2xpbmUpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQWRSZWdFZGl0b3IgPSBBZFJlZ0VkaXRvcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWQtcmVnLWVkaXRvci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkFkUmVnTG9hZGVyID0gdm9pZCAwO1xyXG5jb25zdCBxaW5wZWxfY3BzXzEgPSByZXF1aXJlKFwicWlucGVsLWNwc1wiKTtcclxuY29uc3QgYWRfYXBwcmlzZV8xID0gcmVxdWlyZShcIi4vYWQtYXBwcmlzZVwiKTtcclxuY2xhc3MgQWRSZWdMb2FkZXIge1xyXG4gICAgY29uc3RydWN0b3IocmVnaXN0ZXIpIHtcclxuICAgICAgICB0aGlzLl9yZWcgPSByZWdpc3RlcjtcclxuICAgIH1cclxuICAgIGxvYWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHJlZ2lzdHJ5ID0gdGhpcy5fcmVnLnJlZ2lzdHJ5O1xyXG4gICAgICAgICAgICBsZXQgZmllbGRzID0gdGhpcy5fcmVnLm1vZGVsLnR5cGVkcztcclxuICAgICAgICAgICAgbGV0IGpvaW5zID0gdGhpcy5fcmVnLmJhc2Uuam9pbnM7XHJcbiAgICAgICAgICAgIGxldCBmaWx0ZXJzID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3JlZy5iYXNlLmZpbHRlcnMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChmaWx0ZXJzID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJzID0gW107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXJzLnB1c2goLi4udGhpcy5fcmVnLmJhc2UuZmlsdGVycyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuX3JlZy5leHBlY3QuZmlsdGVycykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZpbHRlcnMgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcnMgPSBbXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZpbHRlcnMucHVzaCguLi50aGlzLl9yZWcuZXhwZWN0LmZpbHRlcnMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBzZWFyY2hpbmdGb3IgPSB0aGlzLl9yZWcuc2VhcmNoLmdldEZpbHRlcnMoKTtcclxuICAgICAgICAgICAgaWYgKHNlYXJjaGluZ0Zvcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZpbHRlcnMgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcnMgPSBbXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZpbHRlcnMucHVzaCguLi5zZWFyY2hpbmdGb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBvcmRlcnMgPSB0aGlzLl9yZWcuYmFzZS5vcmRlcnM7XHJcbiAgICAgICAgICAgIGxldCBzZWxlY3QgPSB7IHJlZ2lzdHJ5LCBmaWVsZHMsIGpvaW5zLCBmaWx0ZXJzLCBvcmRlcnMgfTtcclxuICAgICAgICAgICAgcWlucGVsX2Nwc18xLlFpblRvb2wucWlucGVsLnRhbGtcclxuICAgICAgICAgICAgICAgIC5wb3N0KFwiL3JlZy9hc2tcIiwgc2VsZWN0KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVnXHJcbiAgICAgICAgICAgICAgICAgICAgLnVuc2VsZWN0QWxsKClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVnLnRhYmxlLmRlbExpbmVzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJvd3MgPSBxaW5wZWxfY3BzXzEuUWluVG9vbC5xaW5wZWwub3VyLnNvdWwuYm9keS5nZXRDU1ZSb3dzKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocm93cy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZWcuZGlzcGxheUluZm8oYWRfYXBwcmlzZV8xLkFkQXBwcmlzZS5OT19SRVNVTFRTX0ZPVU5ELCBcInthZGNvbW1vbn0oRXJyQ29kZS0wMDAwMDgpXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgcm93IG9mIHJvd3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3JlZy50YWJsZS5hZGRMaW5lKHJvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQWRSZWdMb2FkZXIgPSBBZFJlZ0xvYWRlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWQtcmVnLWxvYWRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuQWRSZWdNb2RlbCA9IHZvaWQgMDtcclxuY29uc3QgYWRfZmlsdGVyXzEgPSByZXF1aXJlKFwiLi9hZC1maWx0ZXJcIik7XHJcbmNsYXNzIEFkUmVnTW9kZWwge1xyXG4gICAgY29uc3RydWN0b3IocmVnaXN0ZXIpIHtcclxuICAgICAgICB0aGlzLl9maWVsZHMgPSBbXTtcclxuICAgICAgICB0aGlzLl90eXBlZHMgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX3JlZyA9IHJlZ2lzdGVyO1xyXG4gICAgfVxyXG4gICAgZ2V0IGZpZWxkcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZmllbGRzO1xyXG4gICAgfVxyXG4gICAgZ2V0IHR5cGVkcygpIHtcclxuICAgICAgICBpZiAodGhpcy5fdHlwZWRzID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5fdHlwZWRzID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGZpZWxkIG9mIHRoaXMuX2ZpZWxkcykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdHlwZWRzLnB1c2goZmllbGQudHlwZWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl90eXBlZHM7XHJcbiAgICB9XHJcbiAgICBhZGRGaWVsZChmaWVsZCkge1xyXG4gICAgICAgIHRoaXMuX2ZpZWxkcy5wdXNoKGZpZWxkKTtcclxuICAgIH1cclxuICAgIGdldEZpZWxkQnlOYW1lKG5hbWUpIHtcclxuICAgICAgICBmb3IgKGxldCBmaWVsZCBvZiB0aGlzLl9maWVsZHMpIHtcclxuICAgICAgICAgICAgaWYgKGZpZWxkLm5hbWUgPT09IG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmaWVsZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIHNldFZhbHVlKGluZGV4LCB2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX2ZpZWxkc1tpbmRleF0udmFsdWUgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIGNsZWFuKCkge1xyXG4gICAgICAgIGZvciAobGV0IGZpZWxkIG9mIHRoaXMuX2ZpZWxkcykge1xyXG4gICAgICAgICAgICBmaWVsZC5jbGVhbigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHR1cm5SZWFkT25seSgpIHtcclxuICAgICAgICBmb3IgKGxldCBmaWVsZCBvZiB0aGlzLl9maWVsZHMpIHtcclxuICAgICAgICAgICAgZmllbGQudHVyblJlYWRPbmx5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdHVybkVkaXRhYmxlKCkge1xyXG4gICAgICAgIGZvciAobGV0IGZpZWxkIG9mIHRoaXMuX2ZpZWxkcykge1xyXG4gICAgICAgICAgICBmaWVsZC50dXJuRWRpdGFibGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBoYXNNdXRhdGlvbnMoKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IG51bGw7XHJcbiAgICAgICAgZm9yIChsZXQgZmllbGQgb2YgdGhpcy5fZmllbGRzKSB7XHJcbiAgICAgICAgICAgIGlmIChmaWVsZC5oYXNNdXRhdGlvbnMoKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gW107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChmaWVsZC50aXRsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIHVuZG9NdXRhdGlvbnMoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgZmllbGQgb2YgdGhpcy5fZmllbGRzKSB7XHJcbiAgICAgICAgICAgIGZpZWxkLnVuZG9NdXRhdGlvbnMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpbnNlcnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCB2YWx1ZWRzID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBmaWVsZCBvZiB0aGlzLl9maWVsZHMpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZWRzLnB1c2goZmllbGQudmFsdWVkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxldCBpbnNlcnRpbmcgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVnaXN0cnk6IHRoaXMuX3JlZy5yZWdpc3RyeSxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZWRzOiB2YWx1ZWRzLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JlZy5xaW5wZWwuY2hpZWYudGFsa1xyXG4gICAgICAgICAgICAgICAgICAgIC5wb3N0KFwiL3JlZy9uZXdcIiwgaW5zZXJ0aW5nKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChfKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh2YWx1ZWRzKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlZHMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGZpZWxkIG9mIHRoaXMuX2ZpZWxkcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlZHMucHVzaChmaWVsZC52YWx1ZWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IHVwZGF0aW5nID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlZ2lzdHJ5OiB0aGlzLl9yZWcucmVnaXN0cnksXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVkczogdGhpcy5nZXRNdXRhdGlvblZhbHVlZHMoKSxcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJzOiB0aGlzLmdldEtleUZpZWxkc0ZpbHRlcigpLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbWl0OiAxLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JlZy5xaW5wZWwuY2hpZWYudGFsa1xyXG4gICAgICAgICAgICAgICAgICAgIC5wb3N0KFwiL3JlZy9zZXRcIiwgdXBkYXRpbmcpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKF8pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBmaWVsZCBvZiB0aGlzLl9maWVsZHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQuc2F2ZWQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh2YWx1ZWRzKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGRlbGV0ZSgpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRlbGV0aW5nID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlZ2lzdHJ5OiB0aGlzLl9yZWcucmVnaXN0cnksXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyczogdGhpcy5nZXRLZXlGaWVsZHNGaWx0ZXIoKSxcclxuICAgICAgICAgICAgICAgICAgICBsaW1pdDogMSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZWcucWlucGVsLmNoaWVmLnRhbGtcclxuICAgICAgICAgICAgICAgICAgICAucG9zdChcIi9yZWcvZGVsXCIsIGRlbGV0aW5nKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChfKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGdldE11dGF0aW9uVmFsdWVkcygpIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgZmllbGQgb2YgdGhpcy5fZmllbGRzKSB7XHJcbiAgICAgICAgICAgIGlmIChmaWVsZC5oYXNNdXRhdGlvbnMoKSAmJiAhZmllbGQua2V5KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBbXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGZpZWxkLnZhbHVlZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIGdldEtleUZpZWxkc0ZpbHRlcigpIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgZmllbGQgb2YgdGhpcy5fZmllbGRzKSB7XHJcbiAgICAgICAgICAgIGlmIChmaWVsZC5rZXkpIHtcclxuICAgICAgICAgICAgICAgIGxldCBmaWx0ZXIgPSBuZXcgYWRfZmlsdGVyXzEuQWRGaWx0ZXIoe1xyXG4gICAgICAgICAgICAgICAgICAgIHNlZW1zOiBhZF9maWx0ZXJfMS5BZEZpbHRlclNlZW1zLlNBTUUsXHJcbiAgICAgICAgICAgICAgICAgICAgbGlrZXM6IGFkX2ZpbHRlcl8xLkFkRmlsdGVyTGlrZXMuRVFVQUxTLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlZDogZmllbGQudmFsdWVkLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpZXM6IGFkX2ZpbHRlcl8xLkFkRmlsdGVyVGllcy5BTkQsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGZpbHRlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkFkUmVnTW9kZWwgPSBBZFJlZ01vZGVsO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hZC1yZWctbW9kZWwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5BZFJlZ1NlYXJjaCA9IHZvaWQgMDtcclxuY29uc3QgcWlucGVsX2Nwc18xID0gcmVxdWlyZShcInFpbnBlbC1jcHNcIik7XHJcbmNvbnN0IGFkX2ZpbHRlcl8xID0gcmVxdWlyZShcIi4vYWQtZmlsdGVyXCIpO1xyXG5jbGFzcyBBZFJlZ1NlYXJjaCBleHRlbmRzIHFpbnBlbF9jcHNfMS5RaW5TY3JvbGwge1xyXG4gICAgY29uc3RydWN0b3IocmVnaXN0ZXIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX2xpbmVzID0gbmV3IHFpbnBlbF9jcHNfMS5RaW5Db2x1bW4oKTtcclxuICAgICAgICB0aGlzLl9jbGF1c2VzID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgdGhpcy5fcmVnID0gcmVnaXN0ZXI7XHJcbiAgICAgICAgdGhpcy5fbGluZXMuaW5zdGFsbCh0aGlzKTtcclxuICAgICAgICBjb25zdCBmaXJzdCA9IG5ldyBTZWFyY2hDbGF1c2UodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fY2xhdXNlcy5wdXNoKGZpcnN0KTtcclxuICAgICAgICBmaXJzdC5pbnN0YWxsKHRoaXMuX2xpbmVzKTtcclxuICAgIH1cclxuICAgIGdldCByZWcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlZztcclxuICAgIH1cclxuICAgIGFkZEZpZWxkKGZpZWxkKSB7XHJcbiAgICAgICAgdGhpcy5fY2xhdXNlcy5mb3JFYWNoKChjbGF1c2UpID0+IHtcclxuICAgICAgICAgICAgY2xhdXNlLmFkZEZpZWxkKHsgdGl0bGU6IGZpZWxkLnRpdGxlLCB2YWx1ZTogZmllbGQubmFtZSB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGFkZENsYXVzZShhZnRlcikge1xyXG4gICAgICAgIGNvbnN0IGNsYXVzZSA9IG5ldyBTZWFyY2hDbGF1c2UodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fcmVnLm1vZGVsLmZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xyXG4gICAgICAgICAgICBjbGF1c2UuYWRkRmllbGQoeyB0aXRsZTogZmllbGQudGl0bGUsIHZhbHVlOiBmaWVsZC5uYW1lIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fY2xhdXNlcy5pbmRleE9mKGFmdGVyKTtcclxuICAgICAgICB0aGlzLl9jbGF1c2VzLnNwbGljZShpbmRleCArIDEsIDAsIGNsYXVzZSk7XHJcbiAgICAgICAgdGhpcy5yZWJ1aWxkKCk7XHJcbiAgICB9XHJcbiAgICBkZWxDbGF1c2UoY2xhdXNlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2NsYXVzZXMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuX2NsYXVzZXMuaW5kZXhPZihjbGF1c2UpO1xyXG4gICAgICAgICAgICB0aGlzLl9jbGF1c2VzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIHRoaXMucmVidWlsZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fY2xhdXNlc1swXS5jbGVhbigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlYnVpbGQoKSB7XHJcbiAgICAgICAgdGhpcy5fbGluZXMudW5JbnN0YWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICB0aGlzLl9jbGF1c2VzLmZvckVhY2goKGNsYXVzZSkgPT4ge1xyXG4gICAgICAgICAgICBjbGF1c2UuaW5zdGFsbCh0aGlzLl9saW5lcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBnZXRGaWx0ZXJzKCkge1xyXG4gICAgICAgIGxldCByZXN1bHRzID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9jbGF1c2VzLmZvckVhY2goKGNsYXVzZSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZmlsdGVyID0gY2xhdXNlLmdldEZpbHRlcigpO1xyXG4gICAgICAgICAgICBpZiAoZmlsdGVyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzID0gW107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goZmlsdGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXN1bHRzO1xyXG4gICAgfVxyXG4gICAgY2xlYW4oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2NsYXVzZXMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICB0aGlzLl9jbGF1c2VzLnNwbGljZSgxLCB0aGlzLl9jbGF1c2VzLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICB0aGlzLnJlYnVpbGQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fY2xhdXNlc1swXS5jbGVhbigpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQWRSZWdTZWFyY2ggPSBBZFJlZ1NlYXJjaDtcclxuY2xhc3MgU2VhcmNoQ2xhdXNlIGV4dGVuZHMgcWlucGVsX2Nwc18xLlFpbkxpbmUge1xyXG4gICAgY29uc3RydWN0b3IoZGFkKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl9xaW5TYW1lID0gbmV3IFNlYXJjaFNhbWUoKTtcclxuICAgICAgICB0aGlzLl9xaW5GaWVsZCA9IG5ldyBxaW5wZWxfY3BzXzEuUWluQ29tYm8oKTtcclxuICAgICAgICB0aGlzLl9xaW5MaWtlcyA9IG5ldyBTZWFyY2hDb25kaXRpb24oKTtcclxuICAgICAgICB0aGlzLl9xaW5WYWx1ZSA9IG5ldyBxaW5wZWxfY3BzXzEuUWluU3RyaW5nKCk7XHJcbiAgICAgICAgdGhpcy5fcWluVGllcyA9IG5ldyBTZWFyY2hUaWUoKTtcclxuICAgICAgICB0aGlzLl9xaW5BZGQgPSBuZXcgcWlucGVsX2Nwc18xLlFpbkJ1dHRvbih7IGljb246IG5ldyBxaW5wZWxfY3BzXzEuUWluSWNvbihxaW5wZWxfY3BzXzEuUWluQXNzZXQuRmFjZVBsdXMpIH0pO1xyXG4gICAgICAgIHRoaXMuX3FpbkRlbCA9IG5ldyBxaW5wZWxfY3BzXzEuUWluQnV0dG9uKHsgaWNvbjogbmV3IHFpbnBlbF9jcHNfMS5RaW5JY29uKHFpbnBlbF9jcHNfMS5RaW5Bc3NldC5GYWNlTWludXMpIH0pO1xyXG4gICAgICAgIHRoaXMuX2RhZCA9IGRhZDtcclxuICAgICAgICB0aGlzLl9xaW5TYW1lLmluc3RhbGwodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fcWluRmllbGQuYWRkSXRlbSh7IHRpdGxlOiBcIlwiLCB2YWx1ZTogXCJcIiB9KTtcclxuICAgICAgICB0aGlzLl9xaW5GaWVsZC5pbnN0YWxsKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX3Fpbkxpa2VzLmluc3RhbGwodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fcWluVmFsdWUuaW5zdGFsbCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9xaW5UaWVzLmluc3RhbGwodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fcWluQWRkLmluc3RhbGwodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fcWluRGVsLmluc3RhbGwodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fcWluQWRkLmFkZEFjdGlvbk1haW4oKF8pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fZGFkLmFkZENsYXVzZSh0aGlzKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9xaW5EZWwuYWRkQWN0aW9uTWFpbigoXykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9kYWQuZGVsQ2xhdXNlKHRoaXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc3R5bGUucHV0QXNQYWRkaW5nQm90dG9tKDQpO1xyXG4gICAgICAgIHRoaXMuc3R5bGUucHV0QXNCb3JkZXJCb3R0b20oMiwgXCIjYmJiXCIpO1xyXG4gICAgICAgIHRoaXMuc3R5bGUucHV0QXNNYXJnaW5Cb3R0b20oNCk7XHJcbiAgICB9XHJcbiAgICBhZGRGaWVsZChpdGVtKSB7XHJcbiAgICAgICAgdGhpcy5fcWluRmllbGQuYWRkSXRlbShpdGVtKTtcclxuICAgIH1cclxuICAgIGNsZWFuKCkge1xyXG4gICAgICAgIHRoaXMuX3FpblNhbWUudmFsdWUgPSBhZF9maWx0ZXJfMS5BZEZpbHRlclNlZW1zLlNBTUU7XHJcbiAgICAgICAgdGhpcy5fcWluTGlrZXMudmFsdWUgPSBhZF9maWx0ZXJfMS5BZEZpbHRlckxpa2VzLkVRVUFMUztcclxuICAgICAgICB0aGlzLl9xaW5WYWx1ZS52YWx1ZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fcWluVGllcy52YWx1ZSA9IGFkX2ZpbHRlcl8xLkFkRmlsdGVyVGllcy5BTkQ7XHJcbiAgICB9XHJcbiAgICBnZXRGaWx0ZXIoKSB7XHJcbiAgICAgICAgbGV0IGZpZWxkTmFtZSA9IHRoaXMuX3FpbkZpZWxkLnZhbHVlO1xyXG4gICAgICAgIGlmICghZmllbGROYW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBmaWVsZCA9IHRoaXMuX2RhZC5yZWcubW9kZWwuZ2V0RmllbGRCeU5hbWUoZmllbGROYW1lKTtcclxuICAgICAgICBpZiAoIWZpZWxkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IGFkX2ZpbHRlcl8xLkFkRmlsdGVyKHtcclxuICAgICAgICAgICAgc2VlbXM6IHRoaXMuX3FpblNhbWUudmFsdWUsXHJcbiAgICAgICAgICAgIGxpa2VzOiB0aGlzLl9xaW5MaWtlcy52YWx1ZSxcclxuICAgICAgICAgICAgdmFsdWVkOiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBmaWVsZC50eXBlZC5hbGlhcyB8fCBmaWVsZC50eXBlZC5uYW1lLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogZmllbGQudHlwZWQudHlwZSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHRoaXMuX3FpblZhbHVlLnZhbHVlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0aWVzOiB0aGlzLl9xaW5UaWVzLnZhbHVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmNsYXNzIFNlYXJjaFNhbWUgZXh0ZW5kcyBxaW5wZWxfY3BzXzEuUWluQ29tYm8ge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmFkZEl0ZW0oeyB0aXRsZTogXCI9PVwiLCB2YWx1ZTogYWRfZmlsdGVyXzEuQWRGaWx0ZXJTZWVtcy5TQU1FIH0pO1xyXG4gICAgICAgIHRoaXMuYWRkSXRlbSh7IHRpdGxlOiBcIiE9XCIsIHZhbHVlOiBhZF9maWx0ZXJfMS5BZEZpbHRlclNlZW1zLkRJVkVSU0UgfSk7XHJcbiAgICAgICAgdGhpcy5zdHlsZS5wdXRBc01heFdpZHRoKDY0KTtcclxuICAgIH1cclxufVxyXG5jbGFzcyBTZWFyY2hDb25kaXRpb24gZXh0ZW5kcyBxaW5wZWxfY3BzXzEuUWluQ29tYm8ge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmFkZEl0ZW0oeyB0aXRsZTogXCI9XCIsIHZhbHVlOiBhZF9maWx0ZXJfMS5BZEZpbHRlckxpa2VzLkVRVUFMUyB9KTtcclxuICAgICAgICB0aGlzLmFkZEl0ZW0oeyB0aXRsZTogXCI+XCIsIHZhbHVlOiBhZF9maWx0ZXJfMS5BZEZpbHRlckxpa2VzLkJJR0dFUiB9KTtcclxuICAgICAgICB0aGlzLmFkZEl0ZW0oeyB0aXRsZTogXCI8XCIsIHZhbHVlOiBhZF9maWx0ZXJfMS5BZEZpbHRlckxpa2VzLkxFU1NFUiB9KTtcclxuICAgICAgICB0aGlzLmFkZEl0ZW0oeyB0aXRsZTogXCI+PVwiLCB2YWx1ZTogYWRfZmlsdGVyXzEuQWRGaWx0ZXJMaWtlcy5CSUdHRVJfRVFVQUxTIH0pO1xyXG4gICAgICAgIHRoaXMuYWRkSXRlbSh7IHRpdGxlOiBcIjw9XCIsIHZhbHVlOiBhZF9maWx0ZXJfMS5BZEZpbHRlckxpa2VzLkxFU1NFUl9FUVVBTFMgfSk7XHJcbiAgICAgICAgdGhpcy5hZGRJdGVtKHsgdGl0bGU6IFwiJF9cIiwgdmFsdWU6IGFkX2ZpbHRlcl8xLkFkRmlsdGVyTGlrZXMuU1RBUlRTX1dJVEggfSk7XHJcbiAgICAgICAgdGhpcy5hZGRJdGVtKHsgdGl0bGU6IFwiXyRcIiwgdmFsdWU6IGFkX2ZpbHRlcl8xLkFkRmlsdGVyTGlrZXMuRU5EU19XSVRIIH0pO1xyXG4gICAgICAgIHRoaXMuYWRkSXRlbSh7IHRpdGxlOiBcIl8kX1wiLCB2YWx1ZTogYWRfZmlsdGVyXzEuQWRGaWx0ZXJMaWtlcy5DT05UQUlOUyB9KTtcclxuICAgICAgICB0aGlzLnN0eWxlLnB1dEFzTWF4V2lkdGgoNjQpO1xyXG4gICAgfVxyXG59XHJcbmNsYXNzIFNlYXJjaFRpZSBleHRlbmRzIHFpbnBlbF9jcHNfMS5RaW5Db21ibyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuYWRkSXRlbSh7IHRpdGxlOiBcIiYmXCIsIHZhbHVlOiBhZF9maWx0ZXJfMS5BZEZpbHRlclRpZXMuQU5EIH0pO1xyXG4gICAgICAgIHRoaXMuYWRkSXRlbSh7IHRpdGxlOiBcInx8XCIsIHZhbHVlOiBhZF9maWx0ZXJfMS5BZEZpbHRlclRpZXMuT1IgfSk7XHJcbiAgICAgICAgdGhpcy5zdHlsZS5wdXRBc01heFdpZHRoKDY0KTtcclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hZC1yZWctc2VhcmNoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuQWRSZWdUYWJsZSA9IHZvaWQgMDtcclxuY29uc3QgcWlucGVsX2Nwc18xID0gcmVxdWlyZShcInFpbnBlbC1jcHNcIik7XHJcbmNsYXNzIEFkUmVnVGFibGUgZXh0ZW5kcyBxaW5wZWxfY3BzXzEuUWluVGFibGUge1xyXG4gICAgY29uc3RydWN0b3IocmVnaXN0ZXIpIHtcclxuICAgICAgICBzdXBlcih7IHNpbmdsZVNlbGVjdGlvbjogdHJ1ZSB9KTtcclxuICAgICAgICB0aGlzLl9yZWcgPSByZWdpc3RlcjtcclxuICAgICAgICB0aGlzLmFkZE9uTGluZU1haW5BY3QoKHJvdywgdmFsdWVzKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlZy50cnlUdXJuTm90aWNlUm93KHJvdywgdmFsdWVzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkFkUmVnVGFibGUgPSBBZFJlZ1RhYmxlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hZC1yZWctdGFibGUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5BZFJlZ1R1cm4gPSBleHBvcnRzLkFkUmVnVmlldyA9IGV4cG9ydHMuQWRSZWdNb2RlID0gZXhwb3J0cy5BZFJlZ2lzdGVyID0gdm9pZCAwO1xyXG5jb25zdCBxaW5wZWxfY3BzXzEgPSByZXF1aXJlKFwicWlucGVsLWNwc1wiKTtcclxuY29uc3QgYWRfYXBwcmlzZV8xID0gcmVxdWlyZShcIi4vYWQtYXBwcmlzZVwiKTtcclxuY29uc3QgYWRfZmlsdGVyXzEgPSByZXF1aXJlKFwiLi9hZC1maWx0ZXJcIik7XHJcbmNvbnN0IGFkX3JlZ19iYXJfMSA9IHJlcXVpcmUoXCIuL2FkLXJlZy1iYXJcIik7XHJcbmNvbnN0IGFkX3JlZ19lZGl0b3JfMSA9IHJlcXVpcmUoXCIuL2FkLXJlZy1lZGl0b3JcIik7XHJcbmNvbnN0IGFkX3JlZ19sb2FkZXJfMSA9IHJlcXVpcmUoXCIuL2FkLXJlZy1sb2FkZXJcIik7XHJcbmNvbnN0IGFkX3JlZ19tb2RlbF8xID0gcmVxdWlyZShcIi4vYWQtcmVnLW1vZGVsXCIpO1xyXG5jb25zdCBhZF9yZWdfc2VhcmNoXzEgPSByZXF1aXJlKFwiLi9hZC1yZWctc2VhcmNoXCIpO1xyXG5jb25zdCBhZF9yZWdfdGFibGVfMSA9IHJlcXVpcmUoXCIuL2FkLXJlZy10YWJsZVwiKTtcclxuY29uc3QgYWRfdG9vbHNfMSA9IHJlcXVpcmUoXCIuL2FkLXRvb2xzXCIpO1xyXG5jbGFzcyBBZFJlZ2lzdGVyIGV4dGVuZHMgcWlucGVsX2Nwc18xLlFpbkNvbHVtbiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihtb2R1bGUsIGV4cGVjdCwgYmFzZSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5fc2VlUm93ID0gLTE7XHJcbiAgICAgICAgdGhpcy5fc2VlVmFsdWVzID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9saXN0ZW5lciA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIHRoaXMuX2JvZHkgPSBuZXcgcWlucGVsX2Nwc18xLlFpblN0YWNrKCk7XHJcbiAgICAgICAgdGhpcy5fdmlld1NpbmdsZSA9IG5ldyBxaW5wZWxfY3BzXzEuUWluU3RhY2soKTtcclxuICAgICAgICB0aGlzLl92aWV3VmVydGljYWwgPSBuZXcgcWlucGVsX2Nwc18xLlFpblNwbGl0dGVyKHsgaG9yaXpvbnRhbDogZmFsc2UgfSk7XHJcbiAgICAgICAgdGhpcy5fdmlld0hvcml6b250YWwgPSBuZXcgcWlucGVsX2Nwc18xLlFpblNwbGl0dGVyKHsgaG9yaXpvbnRhbDogdHJ1ZSB9KTtcclxuICAgICAgICB0aGlzLl9iYXIgPSBuZXcgYWRfcmVnX2Jhcl8xLkFkUmVnQmFyKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX2VkaXRvciA9IG5ldyBhZF9yZWdfZWRpdG9yXzEuQWRSZWdFZGl0b3IodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fc2VhcmNoID0gbmV3IGFkX3JlZ19zZWFyY2hfMS5BZFJlZ1NlYXJjaCh0aGlzKTtcclxuICAgICAgICB0aGlzLl90YWJsZSA9IG5ldyBhZF9yZWdfdGFibGVfMS5BZFJlZ1RhYmxlKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX2xvYWRlciA9IG5ldyBhZF9yZWdfbG9hZGVyXzEuQWRSZWdMb2FkZXIodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fbW9kdWxlID0gbW9kdWxlO1xyXG4gICAgICAgIHRoaXMuX2V4cGVjdCA9IGV4cGVjdDtcclxuICAgICAgICB0aGlzLl9iYXNlID0gYmFzZTtcclxuICAgICAgICB0aGlzLl9tb2RlbCA9IG5ldyBhZF9yZWdfbW9kZWxfMS5BZFJlZ01vZGVsKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX3ZpZXdTaW5nbGUuc3R5bGUucHV0QXNGbGV4TWF4KCk7XHJcbiAgICAgICAgdGhpcy5fdmlld1ZlcnRpY2FsLnN0eWxlLnB1dEFzRmxleE1heCgpO1xyXG4gICAgICAgIHRoaXMuX3ZpZXdIb3Jpem9udGFsLnN0eWxlLnB1dEFzRmxleE1heCgpO1xyXG4gICAgICAgIHRoaXMuX2Jhci5pbnN0YWxsKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX2JvZHkuc3RhY2sodGhpcy5fZWRpdG9yKTtcclxuICAgICAgICB0aGlzLl9ib2R5LnN0YWNrKHRoaXMuX3NlYXJjaCk7XHJcbiAgICAgICAgdGhpcy52aWV3VmVydGljYWwoKTtcclxuICAgICAgICB0aGlzLl9ib2R5LnN0eWxlLnB1dEFzRmxleE1heCgpO1xyXG4gICAgICAgIHRoaXMuX2VkaXRvci5zdHlsZS5wdXRBc0ZsZXhNYXgoKTtcclxuICAgICAgICB0aGlzLl9zZWFyY2guc3R5bGUucHV0QXNGbGV4TWF4KCk7XHJcbiAgICAgICAgdGhpcy5fdGFibGUuc3R5bGUucHV0QXNGbGV4TWF4KCk7XHJcbiAgICAgICAgdGhpcy5fYmFyLnRhYkluZGV4ID0gMDtcclxuICAgICAgICB0aGlzLl9ib2R5LnRhYkluZGV4ID0gMTtcclxuICAgICAgICB0aGlzLl90YWJsZS50YWJJbmRleCA9IDI7XHJcbiAgICB9XHJcbiAgICBnZXQgbW9kdWxlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tb2R1bGU7XHJcbiAgICB9XHJcbiAgICBnZXQgYmFzZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYmFzZTtcclxuICAgIH1cclxuICAgIGdldCByZWdpc3RyeSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYmFzZS5yZWdpc3RyeTtcclxuICAgIH1cclxuICAgIGdldCBleHBlY3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2V4cGVjdDtcclxuICAgIH1cclxuICAgIGdldCBtb2RlbCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbW9kZWw7XHJcbiAgICB9XHJcbiAgICBnZXQgcmVnTW9kZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcmVnTW9kZTtcclxuICAgIH1cclxuICAgIGdldCByZWdWaWV3KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yZWdWaWV3O1xyXG4gICAgfVxyXG4gICAgZ2V0IGJhcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYmFyO1xyXG4gICAgfVxyXG4gICAgZ2V0IGVkaXRvcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZWRpdG9yO1xyXG4gICAgfVxyXG4gICAgZ2V0IHNlYXJjaCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2VhcmNoO1xyXG4gICAgfVxyXG4gICAgZ2V0IHRhYmxlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90YWJsZTtcclxuICAgIH1cclxuICAgIGdldCBsb2FkZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRlcjtcclxuICAgIH1cclxuICAgIGFkZFRhYih0aXRsZSkge1xyXG4gICAgICAgIHRoaXMuX2VkaXRvci5hZGRUYWIodGl0bGUpO1xyXG4gICAgfVxyXG4gICAgYWRkTGluZSgpIHtcclxuICAgICAgICB0aGlzLl9lZGl0b3IuYWRkTGluZSgpO1xyXG4gICAgfVxyXG4gICAgYWRkRmllbGQoZmllbGQpIHtcclxuICAgICAgICB0aGlzLl9tb2RlbC5hZGRGaWVsZChmaWVsZCk7XHJcbiAgICAgICAgdGhpcy5fZWRpdG9yLmFkZEZpZWxkKGZpZWxkKTtcclxuICAgICAgICB0aGlzLl9zZWFyY2guYWRkRmllbGQoZmllbGQpO1xyXG4gICAgICAgIHRoaXMuX3RhYmxlLmFkZEhlYWQoZmllbGQudGl0bGUpO1xyXG4gICAgfVxyXG4gICAgcHJlcGFyZSgpIHtcclxuICAgICAgICB0aGlzLl9tb2RlbC5jbGVhbigpO1xyXG4gICAgICAgIGlmICh0aGlzLl9leHBlY3Quc2NvcGVzLmZpbmQoKHNjb3BlKSA9PiBzY29wZSA9PT0gYWRfdG9vbHNfMS5BZFNjb3BlLkFMTCB8fCBzY29wZSA9PT0gYWRfdG9vbHNfMS5BZFNjb3BlLklOU0VSVCkpIHtcclxuICAgICAgICAgICAgdGhpcy50cnlUdXJuTW9kZShBZFJlZ01vZGUuSU5TRVJUKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudHJ5VHVybk1vZGUoQWRSZWdNb2RlLlNFQVJDSCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9iYXNlLmpvaW5zKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Jhc2Uuam9pbnMuZm9yRWFjaCgoam9pbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGpvaW4uZmlsdGVycykge1xyXG4gICAgICAgICAgICAgICAgICAgIGpvaW4uZmlsdGVycy5mb3JFYWNoKChmaWx0ZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpbHRlci5saW5rZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsaW5rZWRGaWVsZCA9IHRoaXMuX21vZGVsLmdldEZpZWxkQnlOYW1lKGZpbHRlci5saW5rZWQubmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rZWRGaWVsZC5hZGRPbkNoYW5nZWQoKF8pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUpvaW5lZChqb2luKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHVwZGF0ZUpvaW5lZChqb2luZWQpIHtcclxuICAgICAgICB2YXIgX2EsIF9iO1xyXG4gICAgICAgIGxldCBzb3VyY2UgPSAoX2IgPSAoX2EgPSBqb2luZWQuYWxpYXMpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IGpvaW5lZC5yZWdpc3RyeS5hbGlhcykgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogam9pbmVkLnJlZ2lzdHJ5Lm5hbWU7XHJcbiAgICAgICAgbGV0IHRvVXBkYXRlID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgZmllbGQgb2YgdGhpcy5fbW9kZWwuZmllbGRzKSB7XHJcbiAgICAgICAgICAgIGlmIChmaWVsZC5zb3VyY2UgPT09IHNvdXJjZSkge1xyXG4gICAgICAgICAgICAgICAgdG9VcGRhdGUucHVzaChmaWVsZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRvVXBkYXRlLmxlbmd0aCA9PSAwKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgbGV0IHJlZ2lzdHJ5ID0gam9pbmVkLmFsaWFzID8gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBqb2luZWQucmVnaXN0cnkpLCB7IGFsaWFzOiBqb2luZWQuYWxpYXMgfSkgOiBqb2luZWQucmVnaXN0cnk7XHJcbiAgICAgICAgbGV0IGZpZWxkcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGZpZWxkIG9mIHRvVXBkYXRlKSB7XHJcbiAgICAgICAgICAgIGZpZWxkcy5wdXNoKGZpZWxkLnR5cGVkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGZpbHRlcnMgPSBbXTtcclxuICAgICAgICBpZiAoam9pbmVkLmZpbHRlcnMpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgZmlsdGVyIG9mIGpvaW5lZC5maWx0ZXJzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmlsdGVyLmxpbmtlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBmcm9tRmllbGQgPSB0aGlzLl9tb2RlbC5nZXRGaWVsZEJ5TmFtZShmaWx0ZXIubGlua2VkLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0aGlzRmlsdGVyID0gbmV3IGFkX2ZpbHRlcl8xLkFkRmlsdGVyKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VlbXM6IGFkX2ZpbHRlcl8xLkFkRmlsdGVyU2VlbXMuU0FNRSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlrZXM6IGFkX2ZpbHRlcl8xLkFkRmlsdGVyTGlrZXMuRVFVQUxTLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGZpbHRlci5saW5rZWQud2l0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGZyb21GaWVsZC50eXBlZC50eXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZnJvbUZpZWxkLnZhbHVlZC5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aWVzOiBhZF9maWx0ZXJfMS5BZEZpbHRlclRpZXMuQU5ELFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcnMucHVzaCh0aGlzRmlsdGVyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcnMucHVzaChmaWx0ZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBzZWxlY3QgPSB7IHJlZ2lzdHJ5LCBmaWVsZHMsIGpvaW5zOiBudWxsLCBmaWx0ZXJzLCBvcmRlcnM6IG51bGwsIGxpbWl0OiAxIH07XHJcbiAgICAgICAgdGhpcy5xaW5wZWwudGFsa1xyXG4gICAgICAgICAgICAucG9zdChcIi9yZWcvYXNrXCIsIHNlbGVjdClcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcm93cyA9IHRoaXMucWlucGVsLm91ci5zb3VsLmJvZHkuZ2V0Q1NWUm93cyhyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgIGlmIChyb3dzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGxldCByb3cgPSByb3dzWzBdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b1VwZGF0ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvVXBkYXRlW2ldLnZhbHVlID0gcm93W2ldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5kaXNwbGF5RXJyb3IoZXJyLCBcInthZGNvbW1vbn0oRXJyQ29kZS0wMDAwMTMpXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdHJ5VHVybkluc2VydCgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnRyeVR1cm5Nb2RlKEFkUmVnTW9kZS5JTlNFUlQpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tb2RlbC5jbGVhbigpO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh7fSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gcmVqZWN0KGVycikpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdHJ5VHVyblNlYXJjaCgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnRyeVR1cm5Nb2RlKEFkUmVnTW9kZS5TRUFSQ0gpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHt9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiByZWplY3QoZXJyKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB0cnlUdXJuTm90aWNlKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1NlZVJvd1ZhbGlkKCkpIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdCh7IHdoeTogXCJUaGVyZSdzIG5vIHZhbGlkIHJvdyBzZWxlY3RlZCB0byBub3RpY2UuXCIgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy50cnlUdXJuTW9kZShBZFJlZ01vZGUuTk9USUNFKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHR1cm5pbmdOb3RpY2UgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2xkUm93OiB0aGlzLl9zZWVSb3csXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3Um93OiB0aGlzLl9zZWVSb3csXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgbGV0IGNhbmNlbGVkTm90aWNlID0gdGhpcy5jYWxsVHJ5TGlzdGVuZXJzKEFkUmVnVHVybi5UVVJOX05PVElDRSwgdHVybmluZ05vdGljZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FuY2VsZWROb3RpY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoY2FuY2VsZWROb3RpY2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRSb3dBbmRWYWx1ZXModGhpcy5fc2VlUm93LCB0aGlzLl9zZWVWYWx1ZXMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxsRGlkTGlzdGVuZXJzKEFkUmVnVHVybi5UVVJOX05PVElDRSwgdHVybmluZ05vdGljZSk7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHR1cm5pbmdOb3RpY2UpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHRyeVR1cm5Ob3RpY2VSb3cocm93LCB2YWx1ZXMpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnRyeVR1cm5Nb2RlKEFkUmVnTW9kZS5OT1RJQ0UpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdHVybmluZ05vdGljZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBvbGRSb3c6IHRoaXMuX3NlZVJvdyxcclxuICAgICAgICAgICAgICAgICAgICBuZXdSb3c6IHJvdyxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBsZXQgY2FuY2VsZWROb3RpY2UgPSB0aGlzLmNhbGxUcnlMaXN0ZW5lcnMoQWRSZWdUdXJuLlRVUk5fTk9USUNFLCB0dXJuaW5nTm90aWNlKTtcclxuICAgICAgICAgICAgICAgIGlmIChjYW5jZWxlZE5vdGljZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChjYW5jZWxlZE5vdGljZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFJvd0FuZFZhbHVlcyhyb3csIHZhbHVlcyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGxEaWRMaXN0ZW5lcnMoQWRSZWdUdXJuLlRVUk5fTk9USUNFLCB0dXJuaW5nTm90aWNlKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUodHVybmluZ05vdGljZSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdHJ5VHVybk11dGF0ZSgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNTZWVSb3dWYWxpZCgpKSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoeyB3aHk6IFwiVGhlcmUncyBubyB2YWxpZCByb3cgc2VsZWN0ZWQgdG8gbXV0YXRlLlwiIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudHJ5VHVybk1vZGUoQWRSZWdNb2RlLk1VVEFURSlcclxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHsgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiByZWplY3QoZXJyKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB0cnlUdXJuTW9kZShtb2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jaGVja0Zvck11dGF0aW9ucygpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdHVybmluZyA9IHtcclxuICAgICAgICAgICAgICAgICAgICBvbGRNb2RlOiB0aGlzLl9yZWdNb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgIG5ld01vZGU6IG1vZGUsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgbGV0IGNhbmNlbGVkID0gdGhpcy5jYWxsVHJ5TGlzdGVuZXJzKEFkUmVnVHVybi5UVVJOX01PREUsIHR1cm5pbmcpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhbmNlbGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGNhbmNlbGVkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMudHVybk1vZGUobW9kZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGxEaWRMaXN0ZW5lcnMoQWRSZWdUdXJuLlRVUk5fTU9ERSwgdHVybmluZyk7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHR1cm5pbmcpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGlzU2VlUm93VmFsaWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlZVJvdyA+PSAwICYmIHRoaXMuX3NlZVJvdyA8IHRoaXMuX3RhYmxlLmdldExpbmVzU2l6ZSgpO1xyXG4gICAgfVxyXG4gICAgc2V0Um93QW5kVmFsdWVzKHJvdywgdmFsdWVzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5fbW9kZWwuc2V0VmFsdWUoaSwgdmFsdWVzW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fc2VlUm93ID0gcm93O1xyXG4gICAgICAgIHRoaXMuX3NlZVZhbHVlcyA9IHZhbHVlcztcclxuICAgICAgICB0aGlzLl90YWJsZS5zZWxlY3Qocm93KTtcclxuICAgICAgICB0aGlzLl90YWJsZS5zY3JvbGxUbyhyb3cpO1xyXG4gICAgfVxyXG4gICAgaXNUaGVyZUFueVJvd1NlbGVjdGVkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZWVSb3cgPiAtMTtcclxuICAgIH1cclxuICAgIHR1cm5Nb2RlKG1vZGUpIHtcclxuICAgICAgICBpZiAobW9kZSA9PT0gQWRSZWdNb2RlLlNFQVJDSCkge1xyXG4gICAgICAgICAgICB0aGlzLl9ib2R5LnNob3codGhpcy5fc2VhcmNoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2JvZHkuc2hvdyh0aGlzLl9lZGl0b3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobW9kZSA9PT0gQWRSZWdNb2RlLk5PVElDRSkge1xyXG4gICAgICAgICAgICB0aGlzLl9tb2RlbC50dXJuUmVhZE9ubHkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX21vZGVsLnR1cm5FZGl0YWJsZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9yZWdNb2RlID0gbW9kZTtcclxuICAgIH1cclxuICAgIHVuc2VsZWN0QWxsKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tGb3JNdXRhdGlvbnMoKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2VlUm93ID0gLTE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl90YWJsZS51bnNlbGVjdEFsbCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbW9kZWwuY2xlYW4oKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB0cnlHb0ZpcnN0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLl90YWJsZS5nZXRMaW5lc1NpemUoKSA+IDApIHtcclxuICAgICAgICAgICAgbGV0IHZhbHVlcyA9IHRoaXMuX3RhYmxlLmdldExpbmUoMCk7XHJcbiAgICAgICAgICAgIHRoaXMudHJ5VHVybk5vdGljZVJvdygwLCB2YWx1ZXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHRyeUdvUHJpb3IoKSB7XHJcbiAgICAgICAgbGV0IHNpemUgPSB0aGlzLl90YWJsZS5nZXRMaW5lc1NpemUoKTtcclxuICAgICAgICBsZXQgYXR0ZW1wdCA9IHRoaXMuX3NlZVJvdyAtIDE7XHJcbiAgICAgICAgaWYgKGF0dGVtcHQgPj0gMCAmJiBhdHRlbXB0IDwgc2l6ZSkge1xyXG4gICAgICAgICAgICBsZXQgdmFsdWVzID0gdGhpcy5fdGFibGUuZ2V0TGluZShhdHRlbXB0KTtcclxuICAgICAgICAgICAgdGhpcy50cnlUdXJuTm90aWNlUm93KGF0dGVtcHQsIHZhbHVlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdHJ5R29OZXh0KCkge1xyXG4gICAgICAgIGxldCBzaXplID0gdGhpcy5fdGFibGUuZ2V0TGluZXNTaXplKCk7XHJcbiAgICAgICAgbGV0IGF0dGVtcHQgPSB0aGlzLl9zZWVSb3cgKyAxO1xyXG4gICAgICAgIGlmIChhdHRlbXB0IDwgc2l6ZSkge1xyXG4gICAgICAgICAgICBsZXQgdmFsdWVzID0gdGhpcy5fdGFibGUuZ2V0TGluZShhdHRlbXB0KTtcclxuICAgICAgICAgICAgdGhpcy50cnlUdXJuTm90aWNlUm93KGF0dGVtcHQsIHZhbHVlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdHJ5R29MYXN0KCkge1xyXG4gICAgICAgIGxldCBzaXplID0gdGhpcy5fdGFibGUuZ2V0TGluZXNTaXplKCk7XHJcbiAgICAgICAgaWYgKHNpemUgPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZXMgPSB0aGlzLl90YWJsZS5nZXRMaW5lKHNpemUgLSAxKTtcclxuICAgICAgICAgICAgdGhpcy50cnlUdXJuTm90aWNlUm93KHNpemUgLSAxLCB2YWx1ZXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHRyeUNvbmZpcm0oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucmVnTW9kZSA9PT0gQWRSZWdNb2RlLlNFQVJDSCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50cnlTZWxlY3QoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5yZWdNb2RlID09PSBBZFJlZ01vZGUuSU5TRVJUKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRyeUluc2VydCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLnJlZ01vZGUgPT09IEFkUmVnTW9kZS5NVVRBVEUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJ5VXBkYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdHJ5U2VsZWN0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxvYWRlci5sb2FkKCk7XHJcbiAgICB9XHJcbiAgICB0cnlJbnNlcnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5tb2RlbFxyXG4gICAgICAgICAgICAgICAgLmluc2VydCgpXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tb2RlbC5jbGVhbigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mb2N1c0ZpcnN0RmllbGQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheUluZm8oYWRfYXBwcmlzZV8xLkFkQXBwcmlzZS5JTlNFUlRFRF9SRUdJU1RFUiwgXCJ7YWRjb21tb259KEVyckNvZGUtMDAwMDA5KVwiKTtcclxuICAgICAgICAgICAgICAgIGxldCB2YWx1ZXMgPSByZXMubWFwKCh2YWx1ZWQpID0+IHZhbHVlZC5kYXRhKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3RhYmxlLmFkZExpbmUodmFsdWVzKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB0cnlVcGRhdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5tb2RlbFxyXG4gICAgICAgICAgICAgICAgLnVwZGF0ZSgpXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZvY3VzRmlyc3RGaWVsZCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5SW5mbyhhZF9hcHByaXNlXzEuQWRBcHByaXNlLlVQREFURURfUkVHSVNURVIsIFwie2FkY29tbW9ufShFcnJDb2RlLTAwMDAxMClcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWVzID0gcmVzLm1hcCgodmFsdWVkKSA9PiB2YWx1ZWQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl90YWJsZS5zZXRMaW5lKHRoaXMuX3NlZVJvdywgdmFsdWVzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudHJ5VHVybk1vZGUoQWRSZWdNb2RlLk5PVElDRSk7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdHJ5Q2FuY2VsKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnJlZ01vZGUgPT09IEFkUmVnTW9kZS5JTlNFUlQpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGVja0Zvck11dGF0aW9ucygpLnRoZW4oKF8pID0+IHRoaXMuX21vZGVsLmNsZWFuKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLnJlZ01vZGUgPT09IEFkUmVnTW9kZS5TRUFSQ0gpIHtcclxuICAgICAgICAgICAgdGhpcy5fc2VhcmNoLmNsZWFuKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMucmVnTW9kZSA9PT0gQWRSZWdNb2RlLk1VVEFURSkge1xyXG4gICAgICAgICAgICB0aGlzLnRyeVR1cm5Nb2RlKEFkUmVnTW9kZS5OT1RJQ0UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHRyeURlbGV0ZSgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrRm9yTXV0YXRpb25zKClcclxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc1RoZXJlQW55Um93U2VsZWN0ZWQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCh7IHdoeTogXCJObyBzZWxlY3RlZCByb3cgdG8gZGVsZXRlXCIgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5xaW5wZWwuam9iYmVkXHJcbiAgICAgICAgICAgICAgICAgICAgLnNob3dEaWFsb2coXCJEbyB5b3UgcmVhbGx5IHdhbnQgdG8gZGVsZXRlP1wiKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCh3YW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdhbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHR1cm5pbmcgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWVSb3c6IHRoaXMuX3NlZVJvdyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNhbmNlbGVkID0gdGhpcy5jYWxsVHJ5TGlzdGVuZXJzKEFkUmVnVHVybi5UVVJOX0RFTEVURSwgdHVybmluZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYW5jZWxlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGNhbmNlbGVkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9tb2RlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRlbGV0ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl90YWJsZS5kZWxMaW5lKHRoaXMuX3NlZVJvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbGxEaWRMaXN0ZW5lcnMoQWRSZWdUdXJuLlRVUk5fREVMRVRFLCB0dXJuaW5nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHJ5VHVybk1vZGUoQWRSZWdNb2RlLklOU0VSVCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHR1cm5pbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjaGVja0Zvck11dGF0aW9ucygpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBtdXRhdGlvbnMgPSB0aGlzLl9tb2RlbC5oYXNNdXRhdGlvbnMoKTtcclxuICAgICAgICAgICAgaWYgKG11dGF0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBcIlRoZXJlIGFyZSBtdXRhdGlvbnMgb246XFxuXCIgKyBtdXRhdGlvbnMuam9pbihcIiwgXCIpICsgXCJcXG5TaG91bGQgd2UgY29udGludWU/XCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnFpbnBlbC5qb2JiZWQuc2hvd0RpYWxvZyhtZXNzYWdlKS50aGVuKChjb25maXJtZWQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlybWVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChhZF9hcHByaXNlXzEuQWRBcHByaXNlLkNBTkNFTEVEX0JZX01VVEFUSU9OUyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGRpc3BsYXlJbmZvKGluZm8sIG9yaWdpbikge1xyXG4gICAgICAgIGlmIChpbmZvIGluc3RhbmNlb2YgYWRfYXBwcmlzZV8xLkFkQXBwcmlzZWQpIHtcclxuICAgICAgICAgICAgaWYgKGluZm8ucG9wdXApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucWlucGVsLmpvYmJlZC5zaG93SW5mbyhpbmZvLCBvcmlnaW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucWlucGVsLmpvYmJlZC5zdGF0dXNJbmZvKGluZm8sIG9yaWdpbik7XHJcbiAgICB9XHJcbiAgICBkaXNwbGF5RXJyb3IoZXJyb3IsIG9yaWdpbikge1xyXG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIGFkX2FwcHJpc2VfMS5BZEFwcHJpc2VkKSB7XHJcbiAgICAgICAgICAgIGlmIChlcnJvci5wb3B1cCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5xaW5wZWwuam9iYmVkLnNob3dFcnJvcihlcnJvciwgb3JpZ2luKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5xaW5wZWwuam9iYmVkLnNob3dFcnJvcihlcnJvciwgb3JpZ2luKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5xaW5wZWwuam9iYmVkLnN0YXR1c0Vycm9yKGVycm9yLCBvcmlnaW4pO1xyXG4gICAgfVxyXG4gICAgdmlld1NpbmdsZSgpIHtcclxuICAgICAgICB0aGlzLl92aWV3VmVydGljYWwudW5JbnN0YWxsKCk7XHJcbiAgICAgICAgdGhpcy5fdmlld0hvcml6b250YWwudW5JbnN0YWxsKCk7XHJcbiAgICAgICAgdGhpcy5fdmlld1NpbmdsZS5pbnN0YWxsKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX2JvZHkuaW5zdGFsbCh0aGlzLl92aWV3U2luZ2xlKTtcclxuICAgICAgICB0aGlzLl90YWJsZS5pbnN0YWxsKHRoaXMuX3ZpZXdTaW5nbGUpO1xyXG4gICAgICAgIGlmICh0aGlzLl9yZWdNb2RlID09PSBBZFJlZ01vZGUuU0VBUkNIKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZpZXdTaW5nbGUuc2hvdyh0aGlzLl90YWJsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl92aWV3U2luZ2xlLnNob3codGhpcy5fYm9keSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3JlZ1ZpZXcgPSBBZFJlZ1ZpZXcuU0lOR0xFO1xyXG4gICAgICAgIHRoaXMuY2FsbERpZExpc3RlbmVycyhBZFJlZ1R1cm4uVFVSTl9WSUVXLCB7IG5ld1ZhbHVlOiB0aGlzLl9yZWdWaWV3IH0pO1xyXG4gICAgfVxyXG4gICAgdmlld1ZlcnRpY2FsKCkge1xyXG4gICAgICAgIHRoaXMuX3ZpZXdTaW5nbGUudW5JbnN0YWxsKCk7XHJcbiAgICAgICAgdGhpcy5fdmlld0hvcml6b250YWwudW5JbnN0YWxsKCk7XHJcbiAgICAgICAgdGhpcy5fdmlld1ZlcnRpY2FsLmluc3RhbGwodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fYm9keS5pbnN0YWxsKHRoaXMuX3ZpZXdWZXJ0aWNhbCk7XHJcbiAgICAgICAgdGhpcy5fdGFibGUuaW5zdGFsbCh0aGlzLl92aWV3VmVydGljYWwpO1xyXG4gICAgICAgIHRoaXMuX2JvZHkucmVEaXNwbGF5KCk7XHJcbiAgICAgICAgdGhpcy5fdGFibGUucmVEaXNwbGF5KCk7XHJcbiAgICAgICAgdGhpcy5fcmVnVmlldyA9IEFkUmVnVmlldy5WRVJUSUNBTDtcclxuICAgICAgICB0aGlzLmNhbGxEaWRMaXN0ZW5lcnMoQWRSZWdUdXJuLlRVUk5fVklFVywgeyBuZXdWYWx1ZTogdGhpcy5fcmVnVmlldyB9KTtcclxuICAgIH1cclxuICAgIHZpZXdIb3Jpem9udGFsKCkge1xyXG4gICAgICAgIHRoaXMuX3ZpZXdTaW5nbGUudW5JbnN0YWxsKCk7XHJcbiAgICAgICAgdGhpcy5fdmlld1ZlcnRpY2FsLnVuSW5zdGFsbCgpO1xyXG4gICAgICAgIHRoaXMuX3ZpZXdIb3Jpem9udGFsLmluc3RhbGwodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fYm9keS5pbnN0YWxsKHRoaXMuX3ZpZXdIb3Jpem9udGFsKTtcclxuICAgICAgICB0aGlzLl90YWJsZS5pbnN0YWxsKHRoaXMuX3ZpZXdIb3Jpem9udGFsKTtcclxuICAgICAgICB0aGlzLl9ib2R5LnJlRGlzcGxheSgpO1xyXG4gICAgICAgIHRoaXMuX3RhYmxlLnJlRGlzcGxheSgpO1xyXG4gICAgICAgIHRoaXMuX3JlZ1ZpZXcgPSBBZFJlZ1ZpZXcuSE9SSVpPTlRBTDtcclxuICAgICAgICB0aGlzLmNhbGxEaWRMaXN0ZW5lcnMoQWRSZWdUdXJuLlRVUk5fVklFVywgeyBuZXdWYWx1ZTogdGhpcy5fcmVnVmlldyB9KTtcclxuICAgIH1cclxuICAgIGFkZExpc3RlbmVyKGxpc3RlbmVyKSB7XHJcbiAgICAgICAgdGhpcy5fbGlzdGVuZXIucHVzaChsaXN0ZW5lcik7XHJcbiAgICB9XHJcbiAgICBkZWxMaXN0ZW5lcihsaXN0ZW5lcikge1xyXG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuX2xpc3RlbmVyLmluZGV4T2YobGlzdGVuZXIpO1xyXG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xpc3RlbmVyLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2FsbFRyeUxpc3RlbmVycyhldmVudCwgdmFsdWVkKSB7XHJcbiAgICAgICAgdGhpcy5fbGlzdGVuZXIuZm9yRWFjaCgobGlzdGVuKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChsaXN0ZW4uZXZlbnQgPT09IGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobGlzdGVuLm9uVHJ5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNhbmNlbCA9IGxpc3Rlbi5vblRyeSh2YWx1ZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYW5jZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbmNlbDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGNhbGxEaWRMaXN0ZW5lcnMoZXZlbnQsIG11dGF0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5fbGlzdGVuZXIuZm9yRWFjaCgobGlzdGVuKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChsaXN0ZW4uZXZlbnQgPT09IGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobGlzdGVuLm9uRGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuLm9uRGlkKG11dGF0aW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZm9jdXNGaXJzdEZpZWxkKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm1vZGVsLmZpZWxkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWwuZmllbGRzWzBdLmZvY3VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9jdXNCb2R5KCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9yZWdWaWV3ID09IEFkUmVnVmlldy5TSU5HTEUpIHtcclxuICAgICAgICAgICAgdGhpcy5fdmlld1NpbmdsZS5zaG93KHRoaXMuX2JvZHkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9ib2R5LmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgICBmb2N1c1RhYmxlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9yZWdWaWV3ID09IEFkUmVnVmlldy5TSU5HTEUpIHtcclxuICAgICAgICAgICAgdGhpcy5fdmlld1NpbmdsZS5zaG93KHRoaXMuX3RhYmxlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fdGFibGUuZm9jdXMoKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkFkUmVnaXN0ZXIgPSBBZFJlZ2lzdGVyO1xyXG52YXIgQWRSZWdNb2RlO1xyXG4oZnVuY3Rpb24gKEFkUmVnTW9kZSkge1xyXG4gICAgQWRSZWdNb2RlW1wiSU5TRVJUXCJdID0gXCJJTlNFUlRcIjtcclxuICAgIEFkUmVnTW9kZVtcIlNFQVJDSFwiXSA9IFwiU0VBUkNIXCI7XHJcbiAgICBBZFJlZ01vZGVbXCJNVVRBVEVcIl0gPSBcIk1VVEFURVwiO1xyXG4gICAgQWRSZWdNb2RlW1wiTk9USUNFXCJdID0gXCJOT1RJQ0VcIjtcclxufSkoQWRSZWdNb2RlID0gZXhwb3J0cy5BZFJlZ01vZGUgfHwgKGV4cG9ydHMuQWRSZWdNb2RlID0ge30pKTtcclxudmFyIEFkUmVnVmlldztcclxuKGZ1bmN0aW9uIChBZFJlZ1ZpZXcpIHtcclxuICAgIEFkUmVnVmlld1tcIlNJTkdMRVwiXSA9IFwiU0lOR0xFXCI7XHJcbiAgICBBZFJlZ1ZpZXdbXCJWRVJUSUNBTFwiXSA9IFwiVkVSVElDQUxcIjtcclxuICAgIEFkUmVnVmlld1tcIkhPUklaT05UQUxcIl0gPSBcIkhPUklaT05UQUxcIjtcclxufSkoQWRSZWdWaWV3ID0gZXhwb3J0cy5BZFJlZ1ZpZXcgfHwgKGV4cG9ydHMuQWRSZWdWaWV3ID0ge30pKTtcclxudmFyIEFkUmVnVHVybjtcclxuKGZ1bmN0aW9uIChBZFJlZ1R1cm4pIHtcclxuICAgIEFkUmVnVHVybltcIlRVUk5fVklFV1wiXSA9IFwiVFVSTl9WSUVXXCI7XHJcbiAgICBBZFJlZ1R1cm5bXCJUVVJOX01PREVcIl0gPSBcIlRVUk5fTU9ERVwiO1xyXG4gICAgQWRSZWdUdXJuW1wiVFVSTl9JTlNFUlRcIl0gPSBcIlRVUk5fSU5TRVJUXCI7XHJcbiAgICBBZFJlZ1R1cm5bXCJUVVJOX05PVElDRVwiXSA9IFwiVFVSTl9OT1RJQ0VcIjtcclxuICAgIEFkUmVnVHVybltcIlRVUk5fTVVUQVRFXCJdID0gXCJUVVJOX01VVEFURVwiO1xyXG4gICAgQWRSZWdUdXJuW1wiVFVSTl9ERUxFVEVcIl0gPSBcIlRVUk5fREVMRVRFXCI7XHJcbn0pKEFkUmVnVHVybiA9IGV4cG9ydHMuQWRSZWdUdXJuIHx8IChleHBvcnRzLkFkUmVnVHVybiA9IHt9KSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFkLXJlZ2lzdGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuQWRUb29scyA9IGV4cG9ydHMuQWRTY29wZSA9IHZvaWQgMDtcclxuY29uc3QgYWRfbmFtZXNfMSA9IHJlcXVpcmUoXCIuL2FkLW5hbWVzXCIpO1xyXG52YXIgQWRTY29wZTtcclxuKGZ1bmN0aW9uIChBZFNjb3BlKSB7XHJcbiAgICBBZFNjb3BlW1wiQUxMXCJdID0gXCJhbGxcIjtcclxuICAgIEFkU2NvcGVbXCJJTlNFUlRcIl0gPSBcImluc2VydFwiO1xyXG4gICAgQWRTY29wZVtcIlNFQVJDSFwiXSA9IFwic2VhcmNoXCI7XHJcbiAgICBBZFNjb3BlW1wiTVVUQVRFXCJdID0gXCJtdXRhdGVcIjtcclxuICAgIEFkU2NvcGVbXCJERUxFVEVcIl0gPSBcImRlbGV0ZVwiO1xyXG59KShBZFNjb3BlID0gZXhwb3J0cy5BZFNjb3BlIHx8IChleHBvcnRzLkFkU2NvcGUgPSB7fSkpO1xyXG5mdW5jdGlvbiBpc1NhbWVNb2R1bGUob25lLCB0d28pIHtcclxuICAgIHJldHVybiAob25lID09PSBudWxsIHx8IG9uZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogb25lLmFwcCkgPT0gKHR3byA9PT0gbnVsbCB8fCB0d28gPT09IHZvaWQgMCA/IHZvaWQgMCA6IHR3by5hcHApICYmIChvbmUgPT09IG51bGwgfHwgb25lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvbmUudGl0bGUpID09ICh0d28gPT09IG51bGwgfHwgdHdvID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0d28udGl0bGUpO1xyXG59XHJcbmZ1bmN0aW9uIG5ld0FkU2V0dXAobW9kdWxlLCBzY29wZXMsIGZpbHRlcnMpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbW9kdWxlLFxyXG4gICAgICAgIHNjb3BlcyxcclxuICAgICAgICBmaWx0ZXJzLFxyXG4gICAgfTtcclxufVxyXG5mdW5jdGlvbiBuZXdBZFNldHVwT3B0aW9uKG1vZHVsZSwgc2NvcGVzLCBmaWx0ZXJzKSB7XHJcbiAgICBsZXQgcmVzdWx0ID0ge307XHJcbiAgICByZXN1bHRbYWRfbmFtZXNfMS5BZE5hbWVzLkFkU2V0dXBdID0gbmV3QWRTZXR1cChtb2R1bGUsIHNjb3BlcywgZmlsdGVycyk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbmV4cG9ydHMuQWRUb29scyA9IHtcclxuICAgIGlzU2FtZU1vZHVsZSxcclxuICAgIG5ld0FkU2V0dXAsXHJcbiAgICBuZXdBZFNldHVwT3B0aW9uLFxyXG59O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hZC10b29scy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkFkVG9vbHMgPSBleHBvcnRzLkFkU2NvcGUgPSBleHBvcnRzLkFkUmVnVHVybiA9IGV4cG9ydHMuQWRSZWdWaWV3ID0gZXhwb3J0cy5BZFJlZ01vZGUgPSBleHBvcnRzLkFkUmVnaXN0ZXIgPSBleHBvcnRzLkFkUmVnVGFibGUgPSBleHBvcnRzLkFkUmVnU2VhcmNoID0gZXhwb3J0cy5BZFJlZ01vZGVsID0gZXhwb3J0cy5BZFJlZ0xvYWRlciA9IGV4cG9ydHMuQWRSZWdFZGl0b3IgPSBleHBvcnRzLkFkUmVnQmFzZSA9IGV4cG9ydHMuQWRSZWdCYXIgPSBleHBvcnRzLkFkTmFtZXMgPSBleHBvcnRzLkFkTW9kdWxlcyA9IGV4cG9ydHMubWVudVN0YXJ0VXAgPSBleHBvcnRzLkFkTWVudSA9IGV4cG9ydHMuQWRKb2luZWRUaWVzID0gZXhwb3J0cy5BZEZpbHRlclRpZXMgPSBleHBvcnRzLkFkRmlsdGVyTGlrZXMgPSBleHBvcnRzLkFkRmlsdGVyU2VlbXMgPSBleHBvcnRzLkFkRmlsdGVyID0gZXhwb3J0cy5BZEZpZWxkID0gZXhwb3J0cy5BZEV4cGVjdCA9IGV4cG9ydHMuQWRBcHByaXNlID0gZXhwb3J0cy5BZEFwcHJpc2VkID0gdm9pZCAwO1xyXG52YXIgYWRfYXBwcmlzZV8xID0gcmVxdWlyZShcIi4vYWQtYXBwcmlzZVwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQWRBcHByaXNlZFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gYWRfYXBwcmlzZV8xLkFkQXBwcmlzZWQ7IH0gfSk7XHJcbnZhciBhZF9hcHByaXNlXzIgPSByZXF1aXJlKFwiLi9hZC1hcHByaXNlXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJBZEFwcHJpc2VcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFkX2FwcHJpc2VfMi5BZEFwcHJpc2U7IH0gfSk7XHJcbnZhciBhZF9leHBlY3RfMSA9IHJlcXVpcmUoXCIuL2FkLWV4cGVjdFwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQWRFeHBlY3RcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFkX2V4cGVjdF8xLkFkRXhwZWN0OyB9IH0pO1xyXG52YXIgYWRfZmllbGRfMSA9IHJlcXVpcmUoXCIuL2FkLWZpZWxkXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJBZEZpZWxkXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBhZF9maWVsZF8xLkFkRmllbGQ7IH0gfSk7XHJcbnZhciBhZF9maWx0ZXJfMSA9IHJlcXVpcmUoXCIuL2FkLWZpbHRlclwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQWRGaWx0ZXJcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFkX2ZpbHRlcl8xLkFkRmlsdGVyOyB9IH0pO1xyXG52YXIgYWRfZmlsdGVyXzIgPSByZXF1aXJlKFwiLi9hZC1maWx0ZXJcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkFkRmlsdGVyU2VlbXNcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFkX2ZpbHRlcl8yLkFkRmlsdGVyU2VlbXM7IH0gfSk7XHJcbnZhciBhZF9maWx0ZXJfMyA9IHJlcXVpcmUoXCIuL2FkLWZpbHRlclwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQWRGaWx0ZXJMaWtlc1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gYWRfZmlsdGVyXzMuQWRGaWx0ZXJMaWtlczsgfSB9KTtcclxudmFyIGFkX2ZpbHRlcl80ID0gcmVxdWlyZShcIi4vYWQtZmlsdGVyXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJBZEZpbHRlclRpZXNcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFkX2ZpbHRlcl80LkFkRmlsdGVyVGllczsgfSB9KTtcclxudmFyIGFkX2pvaW5lZF8xID0gcmVxdWlyZShcIi4vYWQtam9pbmVkXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJBZEpvaW5lZFRpZXNcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFkX2pvaW5lZF8xLkFkSm9pbmVkVGllczsgfSB9KTtcclxudmFyIGFkX21lbnVfMSA9IHJlcXVpcmUoXCIuL2FkLW1lbnVcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkFkTWVudVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gYWRfbWVudV8xLkFkTWVudTsgfSB9KTtcclxudmFyIGFkX21lbnVfMiA9IHJlcXVpcmUoXCIuL2FkLW1lbnVcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIm1lbnVTdGFydFVwXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBhZF9tZW51XzIubWVudVN0YXJ0VXA7IH0gfSk7XHJcbnZhciBhZF9tb2R1bGVzXzEgPSByZXF1aXJlKFwiLi9hZC1tb2R1bGVzXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJBZE1vZHVsZXNcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFkX21vZHVsZXNfMS5BZE1vZHVsZXM7IH0gfSk7XHJcbnZhciBhZF9uYW1lc18xID0gcmVxdWlyZShcIi4vYWQtbmFtZXNcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkFkTmFtZXNcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFkX25hbWVzXzEuQWROYW1lczsgfSB9KTtcclxudmFyIGFkX3JlZ19iYXJfMSA9IHJlcXVpcmUoXCIuL2FkLXJlZy1iYXJcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkFkUmVnQmFyXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBhZF9yZWdfYmFyXzEuQWRSZWdCYXI7IH0gfSk7XHJcbnZhciBhZF9yZWdfYmFzZV8xID0gcmVxdWlyZShcIi4vYWQtcmVnLWJhc2VcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkFkUmVnQmFzZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gYWRfcmVnX2Jhc2VfMS5BZFJlZ0Jhc2U7IH0gfSk7XHJcbnZhciBhZF9yZWdfZWRpdG9yXzEgPSByZXF1aXJlKFwiLi9hZC1yZWctZWRpdG9yXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJBZFJlZ0VkaXRvclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gYWRfcmVnX2VkaXRvcl8xLkFkUmVnRWRpdG9yOyB9IH0pO1xyXG52YXIgYWRfcmVnX2xvYWRlcl8xID0gcmVxdWlyZShcIi4vYWQtcmVnLWxvYWRlclwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQWRSZWdMb2FkZXJcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFkX3JlZ19sb2FkZXJfMS5BZFJlZ0xvYWRlcjsgfSB9KTtcclxudmFyIGFkX3JlZ19tb2RlbF8xID0gcmVxdWlyZShcIi4vYWQtcmVnLW1vZGVsXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJBZFJlZ01vZGVsXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBhZF9yZWdfbW9kZWxfMS5BZFJlZ01vZGVsOyB9IH0pO1xyXG52YXIgYWRfcmVnX3NlYXJjaF8xID0gcmVxdWlyZShcIi4vYWQtcmVnLXNlYXJjaFwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQWRSZWdTZWFyY2hcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFkX3JlZ19zZWFyY2hfMS5BZFJlZ1NlYXJjaDsgfSB9KTtcclxudmFyIGFkX3JlZ190YWJsZV8xID0gcmVxdWlyZShcIi4vYWQtcmVnLXRhYmxlXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJBZFJlZ1RhYmxlXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBhZF9yZWdfdGFibGVfMS5BZFJlZ1RhYmxlOyB9IH0pO1xyXG52YXIgYWRfcmVnaXN0ZXJfMSA9IHJlcXVpcmUoXCIuL2FkLXJlZ2lzdGVyXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJBZFJlZ2lzdGVyXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBhZF9yZWdpc3Rlcl8xLkFkUmVnaXN0ZXI7IH0gfSk7XHJcbnZhciBhZF9yZWdpc3Rlcl8yID0gcmVxdWlyZShcIi4vYWQtcmVnaXN0ZXJcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkFkUmVnTW9kZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gYWRfcmVnaXN0ZXJfMi5BZFJlZ01vZGU7IH0gfSk7XHJcbnZhciBhZF9yZWdpc3Rlcl8zID0gcmVxdWlyZShcIi4vYWQtcmVnaXN0ZXJcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkFkUmVnVmlld1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gYWRfcmVnaXN0ZXJfMy5BZFJlZ1ZpZXc7IH0gfSk7XHJcbnZhciBhZF9yZWdpc3Rlcl80ID0gcmVxdWlyZShcIi4vYWQtcmVnaXN0ZXJcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkFkUmVnVHVyblwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gYWRfcmVnaXN0ZXJfNC5BZFJlZ1R1cm47IH0gfSk7XHJcbnZhciBhZF90b29sc18xID0gcmVxdWlyZShcIi4vYWQtdG9vbHNcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkFkU2NvcGVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFkX3Rvb2xzXzEuQWRTY29wZTsgfSB9KTtcclxudmFyIGFkX3Rvb2xzXzIgPSByZXF1aXJlKFwiLi9hZC10b29sc1wiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQWRUb29sc1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gYWRfdG9vbHNfMi5BZFRvb2xzOyB9IH0pO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hbGwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5BZE5hdGlvbiA9IGV4cG9ydHMucmVnaXN0ZXIgPSBleHBvcnRzLnJlZ2lzdHJ5ID0gdm9pZCAwO1xyXG5jb25zdCBhZGNvbW1vbl8xID0gcmVxdWlyZShcImFkY29tbW9uXCIpO1xyXG5jb25zdCBxaW5wZWxfY3BzXzEgPSByZXF1aXJlKFwicWlucGVsLWNwc1wiKTtcclxuY29uc3QgYmFzZSA9IHFpbnBlbF9jcHNfMS5RaW5Ub29sLnFpbnBlbC5jaGllZi5sb2FkQ29uZmlnKHFpbnBlbF9jcHNfMS5RaW5Ub29sLnFpbnBlbC5vdXIubmFtZXMuUWluQmFzZVNlbGVjdGVkKTtcclxuZXhwb3J0cy5yZWdpc3RyeSA9IHsgYmFzZSwgbmFtZTogXCJwYWlzZXNcIiB9O1xyXG5leHBvcnRzLnJlZ2lzdGVyID0ge1xyXG4gICAgcmVnaXN0cnk6IGV4cG9ydHMucmVnaXN0cnksXHJcbn07XHJcbmNsYXNzIEFkTmF0aW9uIGV4dGVuZHMgYWRjb21tb25fMS5BZFJlZ2lzdGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKG1vZHVsZSwgZXhwZWN0KSB7XHJcbiAgICAgICAgc3VwZXIobW9kdWxlLCBleHBlY3QsIGV4cG9ydHMucmVnaXN0ZXIpO1xyXG4gICAgICAgIHRoaXMuYWRkRmllbGQobmV3IGFkY29tbW9uXzEuQWRGaWVsZCh7XHJcbiAgICAgICAgICAgIGtleTogdHJ1ZSxcclxuICAgICAgICAgICAgbmFtZTogXCJjb2RpZ29cIixcclxuICAgICAgICAgICAgdGl0bGU6IFwiQ8OzZGlnb1wiLFxyXG4gICAgICAgICAgICBraW5kOiBxaW5wZWxfY3BzXzEuUWluTXV0YW50cy5TVFJJTkcsXHJcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIG1heExlbmd0aDogNCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgdGhpcy5hZGRGaWVsZChuZXcgYWRjb21tb25fMS5BZEZpZWxkKHtcclxuICAgICAgICAgICAgbmFtZTogXCJhdGl2b1wiLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJBdGl2b1wiLFxyXG4gICAgICAgICAgICBraW5kOiBxaW5wZWxfY3BzXzEuUWluTXV0YW50cy5DT01CTyxcclxuICAgICAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiU2ltXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIlNcIixcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiTsOjb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJOXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIHRoaXMuYWRkRmllbGQobmV3IGFkY29tbW9uXzEuQWRGaWVsZCh7XHJcbiAgICAgICAgICAgIG5hbWU6IFwibm9tZVwiLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJOb21lXCIsXHJcbiAgICAgICAgICAgIGtpbmQ6IHFpbnBlbF9jcHNfMS5RaW5NdXRhbnRzLlNUUklORyxcclxuICAgICAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiA2MCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgdGhpcy5wcmVwYXJlKCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5BZE5hdGlvbiA9IEFkTmF0aW9uO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hZC1uYXRpb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5BZFBlb3BsZUdyb3VwID0gZXhwb3J0cy5yZWdpc3RlciA9IGV4cG9ydHMucmVnaXN0cnkgPSB2b2lkIDA7XHJcbmNvbnN0IGFkY29tbW9uXzEgPSByZXF1aXJlKFwiYWRjb21tb25cIik7XHJcbmNvbnN0IHFpbnBlbF9jcHNfMSA9IHJlcXVpcmUoXCJxaW5wZWwtY3BzXCIpO1xyXG5jb25zdCBiYXNlID0gcWlucGVsX2Nwc18xLlFpblRvb2wucWlucGVsLmNoaWVmLmxvYWRDb25maWcocWlucGVsX2Nwc18xLlFpblRvb2wucWlucGVsLm91ci5uYW1lcy5RaW5CYXNlU2VsZWN0ZWQpO1xyXG5leHBvcnRzLnJlZ2lzdHJ5ID0geyBiYXNlLCBuYW1lOiBcImdydXBvc19wZXNzb2FzXCIgfTtcclxuZXhwb3J0cy5yZWdpc3RlciA9IHtcclxuICAgIHJlZ2lzdHJ5OiBleHBvcnRzLnJlZ2lzdHJ5LFxyXG59O1xyXG5jbGFzcyBBZFBlb3BsZUdyb3VwIGV4dGVuZHMgYWRjb21tb25fMS5BZFJlZ2lzdGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKG1vZHVsZSwgZXhwZWN0KSB7XHJcbiAgICAgICAgc3VwZXIobW9kdWxlLCBleHBlY3QsIGV4cG9ydHMucmVnaXN0ZXIpO1xyXG4gICAgICAgIHRoaXMuYWRkRmllbGQobmV3IGFkY29tbW9uXzEuQWRGaWVsZCh7XHJcbiAgICAgICAgICAgIGtleTogdHJ1ZSxcclxuICAgICAgICAgICAgbmFtZTogXCJjb2RpZ29cIixcclxuICAgICAgICAgICAgdGl0bGU6IFwiQ8OzZGlnb1wiLFxyXG4gICAgICAgICAgICBraW5kOiBxaW5wZWxfY3BzXzEuUWluTXV0YW50cy5TVFJJTkcsXHJcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIG1heExlbmd0aDogNCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgdGhpcy5hZGRGaWVsZChuZXcgYWRjb21tb25fMS5BZEZpZWxkKHtcclxuICAgICAgICAgICAgbmFtZTogXCJhdGl2b1wiLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJBdGl2b1wiLFxyXG4gICAgICAgICAgICBraW5kOiBxaW5wZWxfY3BzXzEuUWluTXV0YW50cy5DT01CTyxcclxuICAgICAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiU2ltXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIlNcIixcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiTsOjb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJOXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIHRoaXMuYWRkRmllbGQobmV3IGFkY29tbW9uXzEuQWRGaWVsZCh7XHJcbiAgICAgICAgICAgIG5hbWU6IFwibm9tZVwiLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJOb21lXCIsXHJcbiAgICAgICAgICAgIGtpbmQ6IHFpbnBlbF9jcHNfMS5RaW5NdXRhbnRzLlNUUklORyxcclxuICAgICAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiA2MCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgdGhpcy5wcmVwYXJlKCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5BZFBlb3BsZUdyb3VwID0gQWRQZW9wbGVHcm91cDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWQtcGVvcGxlLWdyb3VwLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuQWRQZW9wbGVTdWJHcm91cCA9IHZvaWQgMDtcclxuY29uc3QgYWRjb21tb25fMSA9IHJlcXVpcmUoXCJhZGNvbW1vblwiKTtcclxuY29uc3QgcWlucGVsX2Nwc18xID0gcmVxdWlyZShcInFpbnBlbC1jcHNcIik7XHJcbmNvbnN0IGFkX3Blb3BsZV9ncm91cF8xID0gcmVxdWlyZShcIi4vYWQtcGVvcGxlLWdyb3VwXCIpO1xyXG5jb25zdCBiYXNlID0gcWlucGVsX2Nwc18xLlFpblRvb2wucWlucGVsLmNoaWVmLmxvYWRDb25maWcocWlucGVsX2Nwc18xLlFpblRvb2wucWlucGVsLm91ci5uYW1lcy5RaW5CYXNlU2VsZWN0ZWQpO1xyXG5jb25zdCByZWdpc3RyeSA9IHtcclxuICAgIGJhc2UsXHJcbiAgICBuYW1lOiBcInN1YmdydXBvc19wZXNzb2FzXCIsXHJcbn07XHJcbmNvbnN0IHJlZ2lzdGVyID0ge1xyXG4gICAgcmVnaXN0cnksXHJcbiAgICBqb2luczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmVnaXN0cnk6IGFkX3Blb3BsZV9ncm91cF8xLnJlZ2lzdHJ5LFxyXG4gICAgICAgICAgICBhbGlhczogXCJwZW9wbGVfZ3JvdXBcIixcclxuICAgICAgICAgICAgZmlsdGVyczogW1xyXG4gICAgICAgICAgICAgICAgbmV3IGFkY29tbW9uXzEuQWRGaWx0ZXIoe1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmtlZDogeyBuYW1lOiBcImdydXBvXCIsIHdpdGg6IFwiY29kaWdvXCIgfSxcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICBdLFxyXG59O1xyXG5jbGFzcyBBZFBlb3BsZVN1Ykdyb3VwIGV4dGVuZHMgYWRjb21tb25fMS5BZFJlZ2lzdGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKG1vZHVsZSwgZXhwZWN0KSB7XHJcbiAgICAgICAgc3VwZXIobW9kdWxlLCBleHBlY3QsIHJlZ2lzdGVyKTtcclxuICAgICAgICB0aGlzLmFkZEZpZWxkKG5ldyBhZGNvbW1vbl8xLkFkRmllbGQoe1xyXG4gICAgICAgICAgICBrZXk6IHRydWUsXHJcbiAgICAgICAgICAgIG5hbWU6IFwiZ3J1cG9cIixcclxuICAgICAgICAgICAgdGl0bGU6IFwiR3J1cG8gLSBDw7NkLlwiLFxyXG4gICAgICAgICAgICBraW5kOiBxaW5wZWxfY3BzXzEuUWluTXV0YW50cy5TVFJJTkcsXHJcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIG1heExlbmd0aDogNCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgdGhpcy5hZGRGaWVsZChuZXcgYWRjb21tb25fMS5BZEZpZWxkKHtcclxuICAgICAgICAgICAga2V5OiB0cnVlLFxyXG4gICAgICAgICAgICBuYW1lOiBcInBlb3BsZV9ncm91cC5ub21lXCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkdydXBvIC0gTm9tZVwiLFxyXG4gICAgICAgICAgICBraW5kOiBxaW5wZWxfY3BzXzEuUWluTXV0YW50cy5TVFJJTkcsXHJcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIG1heExlbmd0aDogNjAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIHRoaXMuYWRkRmllbGQobmV3IGFkY29tbW9uXzEuQWRGaWVsZCh7XHJcbiAgICAgICAgICAgIGtleTogdHJ1ZSxcclxuICAgICAgICAgICAgbmFtZTogXCJjb2RpZ29cIixcclxuICAgICAgICAgICAgdGl0bGU6IFwiQ8OzZGlnb1wiLFxyXG4gICAgICAgICAgICBraW5kOiBxaW5wZWxfY3BzXzEuUWluTXV0YW50cy5TVFJJTkcsXHJcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIG1heExlbmd0aDogNCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgdGhpcy5hZGRGaWVsZChuZXcgYWRjb21tb25fMS5BZEZpZWxkKHtcclxuICAgICAgICAgICAgbmFtZTogXCJhdGl2b1wiLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJBdGl2b1wiLFxyXG4gICAgICAgICAgICBraW5kOiBxaW5wZWxfY3BzXzEuUWluTXV0YW50cy5DT01CTyxcclxuICAgICAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiU2ltXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIlNcIixcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiTsOjb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJOXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIHRoaXMuYWRkRmllbGQobmV3IGFkY29tbW9uXzEuQWRGaWVsZCh7XHJcbiAgICAgICAgICAgIG5hbWU6IFwibm9tZVwiLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJOb21lXCIsXHJcbiAgICAgICAgICAgIGtpbmQ6IHFpbnBlbF9jcHNfMS5RaW5NdXRhbnRzLlNUUklORyxcclxuICAgICAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiA2MCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgdGhpcy5wcmVwYXJlKCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5BZFBlb3BsZVN1Ykdyb3VwID0gQWRQZW9wbGVTdWJHcm91cDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWQtcGVvcGxlLXN1Ymdyb3VwLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuQWRSZWdpb24gPSBleHBvcnRzLnJlZ2lzdGVyID0gZXhwb3J0cy5yZWdpc3RyeSA9IHZvaWQgMDtcclxuY29uc3QgYWRjb21tb25fMSA9IHJlcXVpcmUoXCJhZGNvbW1vblwiKTtcclxuY29uc3QgcWlucGVsX2Nwc18xID0gcmVxdWlyZShcInFpbnBlbC1jcHNcIik7XHJcbmNvbnN0IGJhc2UgPSBxaW5wZWxfY3BzXzEuUWluVG9vbC5xaW5wZWwuY2hpZWYubG9hZENvbmZpZyhxaW5wZWxfY3BzXzEuUWluVG9vbC5xaW5wZWwub3VyLm5hbWVzLlFpbkJhc2VTZWxlY3RlZCk7XHJcbmV4cG9ydHMucmVnaXN0cnkgPSB7IGJhc2UsIG5hbWU6IFwicmVnaW9lc1wiIH07XHJcbmV4cG9ydHMucmVnaXN0ZXIgPSB7XHJcbiAgICByZWdpc3RyeTogZXhwb3J0cy5yZWdpc3RyeSxcclxufTtcclxuY2xhc3MgQWRSZWdpb24gZXh0ZW5kcyBhZGNvbW1vbl8xLkFkUmVnaXN0ZXIge1xyXG4gICAgY29uc3RydWN0b3IobW9kdWxlLCBleHBlY3QpIHtcclxuICAgICAgICBzdXBlcihtb2R1bGUsIGV4cGVjdCwgZXhwb3J0cy5yZWdpc3Rlcik7XHJcbiAgICAgICAgdGhpcy5hZGRGaWVsZChuZXcgYWRjb21tb25fMS5BZEZpZWxkKHtcclxuICAgICAgICAgICAga2V5OiB0cnVlLFxyXG4gICAgICAgICAgICBuYW1lOiBcImNvZGlnb1wiLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJDw7NkaWdvXCIsXHJcbiAgICAgICAgICAgIGtpbmQ6IHFpbnBlbF9jcHNfMS5RaW5NdXRhbnRzLlNUUklORyxcclxuICAgICAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiA0LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pKTtcclxuICAgICAgICB0aGlzLmFkZEZpZWxkKG5ldyBhZGNvbW1vbl8xLkFkRmllbGQoe1xyXG4gICAgICAgICAgICBuYW1lOiBcImF0aXZvXCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkF0aXZvXCIsXHJcbiAgICAgICAgICAgIGtpbmQ6IHFpbnBlbF9jcHNfMS5RaW5NdXRhbnRzLkNPTUJPLFxyXG4gICAgICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJTaW1cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJOw6NvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIk5cIixcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgdGhpcy5hZGRGaWVsZChuZXcgYWRjb21tb25fMS5BZEZpZWxkKHtcclxuICAgICAgICAgICAgbmFtZTogXCJub21lXCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIk5vbWVcIixcclxuICAgICAgICAgICAga2luZDogcWlucGVsX2Nwc18xLlFpbk11dGFudHMuU1RSSU5HLFxyXG4gICAgICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICBtYXhMZW5ndGg6IDYwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pKTtcclxuICAgICAgICB0aGlzLnByZXBhcmUoKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkFkUmVnaW9uID0gQWRSZWdpb247XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFkLXJlZ2lvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBhZGNvbW1vbl8xID0gcmVxdWlyZShcImFkY29tbW9uXCIpO1xyXG5jb25zdCBhZF9uYXRpb25fMSA9IHJlcXVpcmUoXCIuL2FkLW5hdGlvblwiKTtcclxuY29uc3QgYWRfcGVvcGxlX2dyb3VwXzEgPSByZXF1aXJlKFwiLi9hZC1wZW9wbGUtZ3JvdXBcIik7XHJcbmNvbnN0IGFkX3Blb3BsZV9zdWJncm91cF8xID0gcmVxdWlyZShcIi4vYWQtcGVvcGxlLXN1Ymdyb3VwXCIpO1xyXG5jb25zdCBhZF9yZWdpb25fMSA9IHJlcXVpcmUoXCIuL2FkLXJlZ2lvblwiKTtcclxuY29uc3QgaXRlbXMgPSBbXHJcbiAgICB7IG1vZHVsZTogYWRjb21tb25fMS5BZE1vZHVsZXMuUkVHSU9OLCByZWdpc3RlcjogYWRfcmVnaW9uXzEuQWRSZWdpb24gfSxcclxuICAgIHsgbW9kdWxlOiBhZGNvbW1vbl8xLkFkTW9kdWxlcy5OQVRJT04sIHJlZ2lzdGVyOiBhZF9uYXRpb25fMS5BZE5hdGlvbiB9LFxyXG4gICAgeyBtb2R1bGU6IGFkY29tbW9uXzEuQWRNb2R1bGVzLlBFT1BMRV9HUk9VUCwgcmVnaXN0ZXI6IGFkX3Blb3BsZV9ncm91cF8xLkFkUGVvcGxlR3JvdXAgfSxcclxuICAgIHsgbW9kdWxlOiBhZGNvbW1vbl8xLkFkTW9kdWxlcy5QRU9QTEVfU1VCR1JPVVAsIHJlZ2lzdGVyOiBhZF9wZW9wbGVfc3ViZ3JvdXBfMS5BZFBlb3BsZVN1Ykdyb3VwIH0sXHJcbl07XHJcbigwLCBhZGNvbW1vbl8xLm1lbnVTdGFydFVwKShpdGVtcykuc3R5bGUucHV0QXNCb2R5KCk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluVG9vbCA9IGV4cG9ydHMuUWluVGl0bGVkID0gZXhwb3J0cy5RaW5UYWJzID0gZXhwb3J0cy5RaW5UYWJsZSA9IGV4cG9ydHMuUWluU3RyaW5nID0gZXhwb3J0cy5RaW5TdGFjayA9IGV4cG9ydHMuUWluU3BsaXR0ZXIgPSBleHBvcnRzLlFpblNwYWNlciA9IGV4cG9ydHMuUWluU2Nyb2xsID0gZXhwb3J0cy5RaW5Sb3cgPSBleHBvcnRzLlFpblBvcHVwID0gZXhwb3J0cy5RaW5QYW5lbCA9IGV4cG9ydHMuUWluTXV0YW50c0FybSA9IGV4cG9ydHMuUWluTXV0YW50cyA9IGV4cG9ydHMuUWluTGluZSA9IGV4cG9ydHMuUWluTGFiZWwgPSBleHBvcnRzLlFpbkludGVnZXIgPSBleHBvcnRzLlFpbkljb24gPSBleHBvcnRzLlFpbkljb25QaWNrID0gZXhwb3J0cy5RaW5JY29uQ2VsbCA9IGV4cG9ydHMuUWluRmlsZVZpZXcgPSBleHBvcnRzLlFpbkZpbGVQaWNrID0gZXhwb3J0cy5RaW5GaWxlUGF0aCA9IGV4cG9ydHMuUWluRmllbGQgPSBleHBvcnRzLlFpbkVkaXQgPSBleHBvcnRzLlFpbkRpdmlkZXIgPSBleHBvcnRzLlFpbkNvbWJvID0gZXhwb3J0cy5RaW5Db2x1bW4gPSBleHBvcnRzLlFpbkJ1dHRvbiA9IGV4cG9ydHMuUWluQm9vbGVhbiA9IGV4cG9ydHMuUWluQmFzZSA9IGV4cG9ydHMuUWluQmFzZVN0eWxlID0gZXhwb3J0cy5xaW5VcmxBc3NldCA9IGV4cG9ydHMucWluQXNzZXRVcmwgPSBleHBvcnRzLlFpbkFzc2V0ID0gdm9pZCAwO1xyXG52YXIgcWluX2Fzc2V0c18xID0gcmVxdWlyZShcIi4vcWluLWFzc2V0c1wiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluQXNzZXRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9hc3NldHNfMS5RaW5Bc3NldDsgfSB9KTtcclxudmFyIHFpbl9hc3NldHNfMiA9IHJlcXVpcmUoXCIuL3Fpbi1hc3NldHNcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInFpbkFzc2V0VXJsXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fYXNzZXRzXzIucWluQXNzZXRVcmw7IH0gfSk7XHJcbnZhciBxaW5fYXNzZXRzXzMgPSByZXF1aXJlKFwiLi9xaW4tYXNzZXRzXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJxaW5VcmxBc3NldFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2Fzc2V0c18zLnFpblVybEFzc2V0OyB9IH0pO1xyXG52YXIgcWluX2Jhc2Vfc3R5bGVfMSA9IHJlcXVpcmUoXCIuL3Fpbi1iYXNlLXN0eWxlXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5CYXNlU3R5bGVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9iYXNlX3N0eWxlXzEuUWluQmFzZVN0eWxlOyB9IH0pO1xyXG52YXIgcWluX2Jhc2VfMSA9IHJlcXVpcmUoXCIuL3Fpbi1iYXNlXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5CYXNlXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fYmFzZV8xLlFpbkJhc2U7IH0gfSk7XHJcbnZhciBxaW5fYm9vbGVhbl8xID0gcmVxdWlyZShcIi4vcWluLWJvb2xlYW5cIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkJvb2xlYW5cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9ib29sZWFuXzEuUWluQm9vbGVhbjsgfSB9KTtcclxudmFyIHFpbl9idXR0b25fMSA9IHJlcXVpcmUoXCIuL3Fpbi1idXR0b25cIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkJ1dHRvblwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2J1dHRvbl8xLlFpbkJ1dHRvbjsgfSB9KTtcclxudmFyIHFpbl9jb2x1bW5fMSA9IHJlcXVpcmUoXCIuL3Fpbi1jb2x1bW5cIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkNvbHVtblwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2NvbHVtbl8xLlFpbkNvbHVtbjsgfSB9KTtcclxudmFyIHFpbl9jb21ib18xID0gcmVxdWlyZShcIi4vcWluLWNvbWJvXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5Db21ib1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2NvbWJvXzEuUWluQ29tYm87IH0gfSk7XHJcbnZhciBxaW5fZGl2aWRlcl8xID0gcmVxdWlyZShcIi4vcWluLWRpdmlkZXJcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkRpdmlkZXJcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9kaXZpZGVyXzEuUWluRGl2aWRlcjsgfSB9KTtcclxudmFyIHFpbl9lZGl0XzEgPSByZXF1aXJlKFwiLi9xaW4tZWRpdFwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluRWRpdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2VkaXRfMS5RaW5FZGl0OyB9IH0pO1xyXG52YXIgcWluX2ZpZWxkXzEgPSByZXF1aXJlKFwiLi9xaW4tZmllbGRcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkZpZWxkXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fZmllbGRfMS5RaW5GaWVsZDsgfSB9KTtcclxudmFyIHFpbl9maWxlX3BhdGhfMSA9IHJlcXVpcmUoXCIuL3Fpbi1maWxlLXBhdGhcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkZpbGVQYXRoXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fZmlsZV9wYXRoXzEuUWluRmlsZVBhdGg7IH0gfSk7XHJcbnZhciBxaW5fZmlsZV9waWNrXzEgPSByZXF1aXJlKFwiLi9xaW4tZmlsZS1waWNrXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5GaWxlUGlja1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2ZpbGVfcGlja18xLlFpbkZpbGVQaWNrOyB9IH0pO1xyXG52YXIgcWluX2ZpbGVfdmlld18xID0gcmVxdWlyZShcIi4vcWluLWZpbGUtdmlld1wiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluRmlsZVZpZXdcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9maWxlX3ZpZXdfMS5RaW5GaWxlVmlldzsgfSB9KTtcclxudmFyIHFpbl9pY29uX2NlbGxfMSA9IHJlcXVpcmUoXCIuL3Fpbi1pY29uLWNlbGxcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkljb25DZWxsXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5faWNvbl9jZWxsXzEuUWluSWNvbkNlbGw7IH0gfSk7XHJcbnZhciBxaW5faWNvbl9waWNrXzEgPSByZXF1aXJlKFwiLi9xaW4taWNvbi1waWNrXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5JY29uUGlja1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2ljb25fcGlja18xLlFpbkljb25QaWNrOyB9IH0pO1xyXG52YXIgcWluX2ljb25fMSA9IHJlcXVpcmUoXCIuL3Fpbi1pY29uXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5JY29uXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5faWNvbl8xLlFpbkljb247IH0gfSk7XHJcbnZhciBxaW5faW50ZWdlcl8xID0gcmVxdWlyZShcIi4vcWluLWludGVnZXJcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkludGVnZXJcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9pbnRlZ2VyXzEuUWluSW50ZWdlcjsgfSB9KTtcclxudmFyIHFpbl9sYWJlbF8xID0gcmVxdWlyZShcIi4vcWluLWxhYmVsXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5MYWJlbFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2xhYmVsXzEuUWluTGFiZWw7IH0gfSk7XHJcbnZhciBxaW5fbGluZV8xID0gcmVxdWlyZShcIi4vcWluLWxpbmVcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkxpbmVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9saW5lXzEuUWluTGluZTsgfSB9KTtcclxudmFyIHFpbl9tdXRhbnRzXzEgPSByZXF1aXJlKFwiLi9xaW4tbXV0YW50c1wiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluTXV0YW50c1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX211dGFudHNfMS5RaW5NdXRhbnRzOyB9IH0pO1xyXG52YXIgcWluX211dGFudHNfMiA9IHJlcXVpcmUoXCIuL3Fpbi1tdXRhbnRzXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5NdXRhbnRzQXJtXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fbXV0YW50c18yLlFpbk11dGFudHNBcm07IH0gfSk7XHJcbnZhciBxaW5fcGFuZWxfMSA9IHJlcXVpcmUoXCIuL3Fpbi1wYW5lbFwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluUGFuZWxcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9wYW5lbF8xLlFpblBhbmVsOyB9IH0pO1xyXG52YXIgcWluX3BvcHVwXzEgPSByZXF1aXJlKFwiLi9xaW4tcG9wdXBcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpblBvcHVwXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fcG9wdXBfMS5RaW5Qb3B1cDsgfSB9KTtcclxudmFyIHFpbl9yb3dfMSA9IHJlcXVpcmUoXCIuL3Fpbi1yb3dcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpblJvd1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX3Jvd18xLlFpblJvdzsgfSB9KTtcclxudmFyIHFpbl9zY3JvbGxfMSA9IHJlcXVpcmUoXCIuL3Fpbi1zY3JvbGxcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpblNjcm9sbFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX3Njcm9sbF8xLlFpblNjcm9sbDsgfSB9KTtcclxudmFyIHFpbl9zcGFjZXJfMSA9IHJlcXVpcmUoXCIuL3Fpbi1zcGFjZXJcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpblNwYWNlclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX3NwYWNlcl8xLlFpblNwYWNlcjsgfSB9KTtcclxudmFyIHFpbl9zcGxpdHRlcl8xID0gcmVxdWlyZShcIi4vcWluLXNwbGl0dGVyXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5TcGxpdHRlclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX3NwbGl0dGVyXzEuUWluU3BsaXR0ZXI7IH0gfSk7XHJcbnZhciBxaW5fc3RhY2tfMSA9IHJlcXVpcmUoXCIuL3Fpbi1zdGFja1wiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluU3RhY2tcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9zdGFja18xLlFpblN0YWNrOyB9IH0pO1xyXG52YXIgcWluX3N0cmluZ18xID0gcmVxdWlyZShcIi4vcWluLXN0cmluZ1wiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluU3RyaW5nXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fc3RyaW5nXzEuUWluU3RyaW5nOyB9IH0pO1xyXG52YXIgcWluX3RhYmxlXzEgPSByZXF1aXJlKFwiLi9xaW4tdGFibGVcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpblRhYmxlXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fdGFibGVfMS5RaW5UYWJsZTsgfSB9KTtcclxudmFyIHFpbl90YWJzXzEgPSByZXF1aXJlKFwiLi9xaW4tdGFic1wiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluVGFic1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX3RhYnNfMS5RaW5UYWJzOyB9IH0pO1xyXG52YXIgcWluX3RpdGxlZF8xID0gcmVxdWlyZShcIi4vcWluLXRpdGxlZFwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluVGl0bGVkXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fdGl0bGVkXzEuUWluVGl0bGVkOyB9IH0pO1xyXG52YXIgcWluX3Rvb2xfMSA9IHJlcXVpcmUoXCIuL3Fpbi10b29sXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5Ub29sXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fdG9vbF8xLlFpblRvb2w7IH0gfSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFsbC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLnFpblVybEFzc2V0ID0gZXhwb3J0cy5xaW5Bc3NldFVybCA9IGV4cG9ydHMuUWluQXNzZXQgPSB2b2lkIDA7XHJcbnZhciBRaW5Bc3NldDtcclxuKGZ1bmN0aW9uIChRaW5Bc3NldCkge1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazBcIl0gPSBcImJhY2tncm91bmQtZGFyay0wLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazFcIl0gPSBcImJhY2tncm91bmQtZGFyay0xLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazEwXCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMTAucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMTFcIl0gPSBcImJhY2tncm91bmQtZGFyay0xMS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsxMlwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTEyLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazEzXCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMTMucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMTRcIl0gPSBcImJhY2tncm91bmQtZGFyay0xNC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsxNVwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTE1LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazE2XCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMTYucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMTdcIl0gPSBcImJhY2tncm91bmQtZGFyay0xNy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsxOFwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTE4LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazE5XCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMTkucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMlwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTIucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMjBcIl0gPSBcImJhY2tncm91bmQtZGFyay0yMC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsyMVwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTIxLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazIyXCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMjIucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMjNcIl0gPSBcImJhY2tncm91bmQtZGFyay0yMy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsyNFwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTI0LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazI1XCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMjUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMjZcIl0gPSBcImJhY2tncm91bmQtZGFyay0yNi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsyN1wiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTI3LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazI4XCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMjgucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMjlcIl0gPSBcImJhY2tncm91bmQtZGFyay0yOS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmszXCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcms0XCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstNC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcms1XCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstNS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcms2XCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstNi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcms3XCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstNy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcms4XCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstOC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcms5XCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstOS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmtcIl0gPSBcImJhY2tncm91bmQtZGFyay5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MFwiXSA9IFwiYmFja2dyb3VuZC1saWdodC0wLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQxXCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTEucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDEwXCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTEwLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQxMVwiXSA9IFwiYmFja2dyb3VuZC1saWdodC0xMS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MTJcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMTIucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDEzXCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTEzLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQxNFwiXSA9IFwiYmFja2dyb3VuZC1saWdodC0xNC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MTVcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMTUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDE2XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTE2LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQxN1wiXSA9IFwiYmFja2dyb3VuZC1saWdodC0xNy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MThcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMTgucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDE5XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTE5LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQyXCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTIucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDIwXCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTIwLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQyMVwiXSA9IFwiYmFja2dyb3VuZC1saWdodC0yMS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MjJcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMjIucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDIzXCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTIzLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQyNFwiXSA9IFwiYmFja2dyb3VuZC1saWdodC0yNC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MjVcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMjUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDI2XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTI2LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQyN1wiXSA9IFwiYmFja2dyb3VuZC1saWdodC0yNy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MjhcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMjgucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDI5XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTI5LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQzXCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTMucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDRcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtNC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0NVwiXSA9IFwiYmFja2dyb3VuZC1saWdodC01LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQ2XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTYucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDdcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtNy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0OFwiXSA9IFwiYmFja2dyb3VuZC1saWdodC04LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQ5XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTkucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodFwiXSA9IFwiYmFja2dyb3VuZC1saWdodC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDBcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTAucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwxXCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC0xLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMTBcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTEwLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMTFcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTExLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMTJcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTEyLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMTNcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTEzLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMTRcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTE0LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMTVcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTE1LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMTZcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTE2LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMTdcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTE3LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMThcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTE4LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMTlcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTE5LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMlwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDIwXCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC0yMC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDIxXCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC0yMS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDIyXCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC0yMi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDIzXCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC0yMy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDI0XCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC0yNC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDI1XCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC0yNS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDI2XCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC0yNi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDI3XCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC0yNy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDI4XCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC0yOC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDI5XCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC0yOS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDNcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTMucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWw0XCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC00LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsNVwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtNS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDZcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTYucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWw3XCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC03LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsOFwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtOC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDlcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTkucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWxcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJFeHBsb3JlckFwcHNcIl0gPSBcImV4cGxvcmVyLWFwcHMucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkV4cGxvcmVyQ21kc1wiXSA9IFwiZXhwbG9yZXItY21kcy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRXhwbG9yZXJEaXJcIl0gPSBcImV4cGxvcmVyLWRpci5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRXhwbG9yZXJFeGVjXCJdID0gXCJleHBsb3Jlci1leGVjLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJFeHBsb3JlckZpbGVcIl0gPSBcImV4cGxvcmVyLWZpbGUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkV4cGxvcmVySW1hZ2VcIl0gPSBcImV4cGxvcmVyLWltYWdlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJFeHBsb3Jlck1vdmllXCJdID0gXCJleHBsb3Jlci1tb3ZpZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRXhwbG9yZXJNdXNpY1wiXSA9IFwiZXhwbG9yZXItbXVzaWMucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkV4cGxvcmVyWmlwcGVkXCJdID0gXCJleHBsb3Jlci16aXBwZWQucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VBZGRcIl0gPSBcImZhY2UtYWRkLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQWx0V29ya1wiXSA9IFwiZmFjZS1hbHQtd29yay5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUFycm93RG93blwiXSA9IFwiZmFjZS1hcnJvdy1kb3duLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQXJyb3dMZWZ0XCJdID0gXCJmYWNlLWFycm93LWxlZnQucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VBcnJvd1JpZ2h0XCJdID0gXCJmYWNlLWFycm93LXJpZ2h0LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQXJyb3dVcFwiXSA9IFwiZmFjZS1hcnJvdy11cC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUF0dGFjaFwiXSA9IFwiZmFjZS1hdHRhY2gucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VBelNvcnRcIl0gPSBcImZhY2UtYXotc29ydC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUJhZ1Nob3BwaW5nXCJdID0gXCJmYWNlLWJhZy1zaG9wcGluZy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUJhZ1wiXSA9IFwiZmFjZS1iYWcucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VCZWxsRGlzYWJsZVwiXSA9IFwiZmFjZS1iZWxsLWRpc2FibGUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VCZWxsXCJdID0gXCJmYWNlLWJlbGwucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VCZXR3ZWVuU3BhY2VcIl0gPSBcImZhY2UtYmV0d2Vlbi1zcGFjZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUJvaWxlckhvbWVTbWFydFwiXSA9IFwiZmFjZS1ib2lsZXItaG9tZS1zbWFydC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUJvdHRvbVRvb2xiYXJcIl0gPSBcImZhY2UtYm90dG9tLXRvb2xiYXIucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VDVXNiXCJdID0gXCJmYWNlLWMtdXNiLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQ2FsZW5kYXJcIl0gPSBcImZhY2UtY2FsZW5kYXIucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VDYW1lcmFEaXNhYmxlXCJdID0gXCJmYWNlLWNhbWVyYS1kaXNhYmxlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQ2FtZXJhXCJdID0gXCJmYWNlLWNhbWVyYS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUNhbmNlbFwiXSA9IFwiZmFjZS1jYW5jZWwucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VDYXJ0U2hvcHBpbmdcIl0gPSBcImZhY2UtY2FydC1zaG9wcGluZy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUNhcnRcIl0gPSBcImZhY2UtY2FydC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUNoZWNrUmFkaW9cIl0gPSBcImZhY2UtY2hlY2stcmFkaW8ucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VDaGVja1wiXSA9IFwiZmFjZS1jaGVjay5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUNoZWNrZWRSYWRpb1wiXSA9IFwiZmFjZS1jaGVja2VkLXJhZGlvLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQ2hpcFNtYXJ0cGhvbmVcIl0gPSBcImZhY2UtY2hpcC1zbWFydHBob25lLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQ2lyY2xlSGFsZlNoYXBlXCJdID0gXCJmYWNlLWNpcmNsZS1oYWxmLXNoYXBlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQ2lyY2xlU2hhcGVcIl0gPSBcImZhY2UtY2lyY2xlLXNoYXBlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQ2lyY2xlXCJdID0gXCJmYWNlLWNpcmNsZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUNsZWFyUHVsbFwiXSA9IFwiZmFjZS1jbGVhci1wdWxsLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQ2xvY2tTYW5kXCJdID0gXCJmYWNlLWNsb2NrLXNhbmQucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VDbG9ja1wiXSA9IFwiZmFjZS1jbG9jay5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUNsb3NlXCJdID0gXCJmYWNlLWNsb3NlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQ29nXCJdID0gXCJmYWNlLWNvZy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUNvbHNWaWV3XCJdID0gXCJmYWNlLWNvbHMtdmlldy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUNvbWZvcnRhYmxlVmlld1wiXSA9IFwiZmFjZS1jb21mb3J0YWJsZS12aWV3LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQ29tcGFzc1wiXSA9IFwiZmFjZS1jb21wYXNzLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQ29uZmlybVwiXSA9IFwiZmFjZS1jb25maXJtLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQ29udGFjdFwiXSA9IFwiZmFjZS1jb250YWN0LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQ29udHJvbFwiXSA9IFwiZmFjZS1jb250cm9sLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQ29va2VySG9tZVNtYXJ0XCJdID0gXCJmYWNlLWNvb2tlci1ob21lLXNtYXJ0LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQ29weVwiXSA9IFwiZmFjZS1jb3B5LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlRGF5Vmlld1wiXSA9IFwiZmFjZS1kYXktdmlldy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZURlbFwiXSA9IFwiZmFjZS1kZWwucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VEb3VibGVUYXBcIl0gPSBcImZhY2UtZG91YmxlLXRhcC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZURvd25DaGV2cm9uUHVzaFwiXSA9IFwiZmFjZS1kb3duLWNoZXZyb24tcHVzaC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZURvd25QdXNoXCJdID0gXCJmYWNlLWRvd24tcHVzaC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZURvd25UcmVuZGluZ1wiXSA9IFwiZmFjZS1kb3duLXRyZW5kaW5nLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlRG93bmxvYWRTb2Z0d2FyZVwiXSA9IFwiZmFjZS1kb3dubG9hZC1zb2Z0d2FyZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZURvd25sb2FkXCJdID0gXCJmYWNlLWRvd25sb2FkLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlRW1wdHlUcmFzaFwiXSA9IFwiZmFjZS1lbXB0eS10cmFzaC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUVubGFyZ2VcIl0gPSBcImZhY2UtZW5sYXJnZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUVudGVyXCJdID0gXCJmYWNlLWVudGVyLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlRXJhc2VcIl0gPSBcImZhY2UtZXJhc2UucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VFeGl0XCJdID0gXCJmYWNlLWV4aXQucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VFeWVEaXNhYmxlXCJdID0gXCJmYWNlLWV5ZS1kaXNhYmxlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlRXllXCJdID0gXCJmYWNlLWV5ZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUZpbGVcIl0gPSBcImZhY2UtZmlsZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUZpbHRlclwiXSA9IFwiZmFjZS1maWx0ZXIucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VGaXJzdFJvd1wiXSA9IFwiZmFjZS1maXJzdC1yb3cucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VGb2xkZXJcIl0gPSBcImZhY2UtZm9sZGVyLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlRm91bmRTZWFyY2hcIl0gPSBcImZhY2UtZm91bmQtc2VhcmNoLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlR2VhclwiXSA9IFwiZmFjZS1nZWFyLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlR2xvYmVcIl0gPSBcImZhY2UtZ2xvYmUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VHcmlkVmlld1wiXSA9IFwiZmFjZS1ncmlkLXZpZXcucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VIU2Nyb2xsXCJdID0gXCJmYWNlLWgtc2Nyb2xsLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlSGVhcnRcIl0gPSBcImZhY2UtaGVhcnQucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VIZWF0SG9tZVNtYXJ0XCJdID0gXCJmYWNlLWhlYXQtaG9tZS1zbWFydC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUhleGFnb25TaGFwZVwiXSA9IFwiZmFjZS1oZXhhZ29uLXNoYXBlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlSG9tZVwiXSA9IFwiZmFjZS1ob21lLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlSHVudFByb2R1Y3RcIl0gPSBcImZhY2UtaHVudC1wcm9kdWN0LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlSW1hZ2VcIl0gPSBcImZhY2UtaW1hZ2UucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VJblpvb21cIl0gPSBcImZhY2UtaW4tem9vbS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUtpdFVpXCJdID0gXCJmYWNlLWtpdC11aS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUxhYmVsXCJdID0gXCJmYWNlLWxhYmVsLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlTGFzdFJvd1wiXSA9IFwiZmFjZS1sYXN0LXJvdy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUxlZnRDaGV2cm9uUHVzaFwiXSA9IFwiZmFjZS1sZWZ0LWNoZXZyb24tcHVzaC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUxlZnRQdXNoXCJdID0gXCJmYWNlLWxlZnQtcHVzaC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUxlZnRUb29sYmFyXCJdID0gXCJmYWNlLWxlZnQtdG9vbGJhci5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUxpZ2h0SG9tZVNtYXJ0XCJdID0gXCJmYWNlLWxpZ2h0LWhvbWUtc21hcnQucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VMaW5rXCJdID0gXCJmYWNlLWxpbmsucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VMaXN0VXNlclwiXSA9IFwiZmFjZS1saXN0LXVzZXIucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VMaXN0Vmlld1wiXSA9IFwiZmFjZS1saXN0LXZpZXcucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VMb2FkaW5nU2VhcmNoXCJdID0gXCJmYWNlLWxvYWRpbmctc2VhcmNoLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlTG9ja1wiXSA9IFwiZmFjZS1sb2NrLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlTWFjaGluZVdhc2hIb21lU21hcnRcIl0gPSBcImZhY2UtbWFjaGluZS13YXNoLWhvbWUtc21hcnQucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VNYWlsXCJdID0gXCJmYWNlLW1haWwucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VNYXBEaXNhYmxlXCJdID0gXCJmYWNlLW1hcC1kaXNhYmxlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlTWFwXCJdID0gXCJmYWNlLW1hcC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZU1lbnVMaW5lc1wiXSA9IFwiZmFjZS1tZW51LWxpbmVzLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlTWVzc2FnZVwiXSA9IFwiZmFjZS1tZXNzYWdlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlTWljRGlzYWJsZVwiXSA9IFwiZmFjZS1taWMtZGlzYWJsZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZU1pY1wiXSA9IFwiZmFjZS1taWMucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VNaW51c1wiXSA9IFwiZmFjZS1taW51cy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZU1pcnJvclNjcmVlblwiXSA9IFwiZmFjZS1taXJyb3Itc2NyZWVuLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlTW9udGhWaWV3XCJdID0gXCJmYWNlLW1vbnRoLXZpZXcucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VNb3V0aE5vU21pbGVcIl0gPSBcImZhY2UtbW91dGgtbm8tc21pbGUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VNb3ZpZVwiXSA9IFwiZmFjZS1tb3ZpZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZU5ldXRyYWxTbWlsZVwiXSA9IFwiZmFjZS1uZXV0cmFsLXNtaWxlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlTmV3c1wiXSA9IFwiZmFjZS1uZXdzLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlTm9uZVNtaWxlXCJdID0gXCJmYWNlLW5vbmUtc21pbGUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VPRG93bkNoZXZyb25QdXNoXCJdID0gXCJmYWNlLW8tZG93bi1jaGV2cm9uLXB1c2gucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VPTGVmdENoZXZyb25QdXNoXCJdID0gXCJmYWNlLW8tbGVmdC1jaGV2cm9uLXB1c2gucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VPTmV4dFRyYWNrUGxheVwiXSA9IFwiZmFjZS1vLW5leHQtdHJhY2stcGxheS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZU9QcmV2VHJhY2tQbGF5XCJdID0gXCJmYWNlLW8tcHJldi10cmFjay1wbGF5LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlT1F1b3RlXCJdID0gXCJmYWNlLW8tcXVvdGUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VPUmlnaHRDaGV2cm9uUHVzaFwiXSA9IFwiZmFjZS1vLXJpZ2h0LWNoZXZyb24tcHVzaC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZU9TZWxlY3RcIl0gPSBcImZhY2Utby1zZWxlY3QucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VPVXBDaGV2cm9uUHVzaFwiXSA9IFwiZmFjZS1vLXVwLWNoZXZyb24tcHVzaC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZU9Wb2ljZW1haWxcIl0gPSBcImZhY2Utby12b2ljZW1haWwucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VPZmZTcXVhcmVUb2dnbGVcIl0gPSBcImZhY2Utb2ZmLXNxdWFyZS10b2dnbGUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VPZmZUb2dnbGVcIl0gPSBcImZhY2Utb2ZmLXRvZ2dsZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZU9uVG9nZ2xlXCJdID0gXCJmYWNlLW9uLXRvZ2dsZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZU9wZW5Nb3V0aFNtaWxlXCJdID0gXCJmYWNlLW9wZW4tbW91dGgtc21pbGUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VPcGVuU2lkZWJhclwiXSA9IFwiZmFjZS1vcGVuLXNpZGViYXIucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VPdXRab29tXCJdID0gXCJmYWNlLW91dC16b29tLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlUGFzdGVcIl0gPSBcImZhY2UtcGFzdGUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VQZW5jaWxcIl0gPSBcImZhY2UtcGVuY2lsLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlUGVyc29uXCJdID0gXCJmYWNlLXBlcnNvbi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVBob25lRGlzYWJsZVwiXSA9IFwiZmFjZS1waG9uZS1kaXNhYmxlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlUGhvbmVcIl0gPSBcImZhY2UtcGhvbmUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VQaW5cIl0gPSBcImZhY2UtcGluLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlUGx1Z1wiXSA9IFwiZmFjZS1wbHVnLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlUGx1c1wiXSA9IFwiZmFjZS1wbHVzLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlUG9ja2V0XCJdID0gXCJmYWNlLXBvY2tldC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVBva2Vtb25cIl0gPSBcImZhY2UtcG9rZW1vbi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVBvbGFyb2lkXCJdID0gXCJmYWNlLXBvbGFyb2lkLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlUG9sbFwiXSA9IFwiZmFjZS1wb2xsLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlUHJlc2VudGF0aW9uXCJdID0gXCJmYWNlLXByZXNlbnRhdGlvbi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVByZXZUcmFja1BsYXlcIl0gPSBcImZhY2UtcHJldi10cmFjay1wbGF5LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlUHJpbnRlclwiXSA9IFwiZmFjZS1wcmludGVyLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlUHJvZmlsZVwiXSA9IFwiZmFjZS1wcm9maWxlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlUXJcIl0gPSBcImZhY2UtcXIucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VRdW90ZVwiXSA9IFwiZmFjZS1xdW90ZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVJEb3duQ2hldnJvblB1c2hcIl0gPSBcImZhY2Utci1kb3duLWNoZXZyb24tcHVzaC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVJMZWZ0Q2hldnJvblB1c2hcIl0gPSBcImZhY2Utci1sZWZ0LWNoZXZyb24tcHVzaC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVJOZXh0VHJhY2tQbGF5XCJdID0gXCJmYWNlLXItbmV4dC10cmFjay1wbGF5LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlUlByZXZUcmFja1BsYXlcIl0gPSBcImZhY2Utci1wcmV2LXRyYWNrLXBsYXkucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VSUmVtb3ZlXCJdID0gXCJmYWNlLXItcmVtb3ZlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlUlJpZ2h0Q2hldnJvblB1c2hcIl0gPSBcImZhY2Utci1yaWdodC1jaGV2cm9uLXB1c2gucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VSU2VsZWN0XCJdID0gXCJmYWNlLXItc2VsZWN0LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlUlVwQ2hldnJvblB1c2hcIl0gPSBcImZhY2Utci11cC1jaGV2cm9uLXB1c2gucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VSVm9pY2VtYWlsXCJdID0gXCJmYWNlLXItdm9pY2VtYWlsLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlUmFtU21hcnRwaG9uZVwiXSA9IFwiZmFjZS1yYW0tc21hcnRwaG9uZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVJhdGlvXCJdID0gXCJmYWNlLXJhdGlvLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlUmVhZFwiXSA9IFwiZmFjZS1yZWFkLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlUmVhZG1lXCJdID0gXCJmYWNlLXJlYWRtZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVJlY29yZFwiXSA9IFwiZmFjZS1yZWNvcmQucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VSZWRvMlwiXSA9IFwiZmFjZS1yZWRvLTIucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VSZWRvXCJdID0gXCJmYWNlLXJlZG8ucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VSZWZyaWdlcmF0b3JIb21lU21hcnRcIl0gPSBcImZhY2UtcmVmcmlnZXJhdG9yLWhvbWUtc21hcnQucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VSZWdpb25cIl0gPSBcImZhY2UtcmVnaW9uLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlUmVtb3RlXCJdID0gXCJmYWNlLXJlbW90ZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVJlbW92ZVVzZXJcIl0gPSBcImZhY2UtcmVtb3ZlLXVzZXIucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VSZW1vdmVcIl0gPSBcImZhY2UtcmVtb3ZlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlUmVuYW1lXCJdID0gXCJmYWNlLXJlbmFtZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVJlb3JkZXJcIl0gPSBcImZhY2UtcmVvcmRlci5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVJlcGVhdFwiXSA9IFwiZmFjZS1yZXBlYXQucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VSaG9tYnVzU2hhcGVcIl0gPSBcImZhY2UtcmhvbWJ1cy1zaGFwZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVJpZ2h0Q2hldnJvblB1c2hcIl0gPSBcImZhY2UtcmlnaHQtY2hldnJvbi1wdXNoLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlUmlnaHRQdXNoXCJdID0gXCJmYWNlLXJpZ2h0LXB1c2gucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VSaWdodFNpZGViYXJcIl0gPSBcImZhY2UtcmlnaHQtc2lkZWJhci5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVJpZ2h0VG9vbGJhclwiXSA9IFwiZmFjZS1yaWdodC10b29sYmFyLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlUmluZ1wiXSA9IFwiZmFjZS1yaW5nLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlUnVsZXJcIl0gPSBcImZhY2UtcnVsZXIucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTYWRTbWlsZVwiXSA9IFwiZmFjZS1zYWQtc21pbGUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTYXZlXCJdID0gXCJmYWNlLXNhdmUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTY2FuXCJdID0gXCJmYWNlLXNjYW4ucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTY3JlZW5cIl0gPSBcImZhY2Utc2NyZWVuLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU2VhcmNoMlwiXSA9IFwiZmFjZS1zZWFyY2gtMi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVNlYXJjaFwiXSA9IFwiZmFjZS1zZWFyY2gucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTZWxlY3RcIl0gPSBcImZhY2Utc2VsZWN0LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU2VuZFwiXSA9IFwiZmFjZS1zZW5kLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU2VydmVyXCJdID0gXCJmYWNlLXNlcnZlci5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVNlcnZlcmxlc3NcIl0gPSBcImZhY2Utc2VydmVybGVzcy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVNldHRpbmdzXCJdID0gXCJmYWNlLXNldHRpbmdzLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU2hha2VTbWFydHBob25lXCJdID0gXCJmYWNlLXNoYWtlLXNtYXJ0cGhvbmUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTaGFyZTJcIl0gPSBcImZhY2Utc2hhcmUtMi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVNoYXJlXCJdID0gXCJmYWNlLXNoYXJlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU2hpZWxkMlwiXSA9IFwiZmFjZS1zaGllbGQtMi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVNoaWVsZFwiXSA9IFwiZmFjZS1zaGllbGQucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTaG9ydGN1dFwiXSA9IFwiZmFjZS1zaG9ydGN1dC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVNob3RTY3JlZW5cIl0gPSBcImZhY2Utc2hvdC1zY3JlZW4ucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTaHJpbmtcIl0gPSBcImZhY2Utc2hyaW5rLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU2h1dHRlcnN0b2NrXCJdID0gXCJmYWNlLXNodXR0ZXJzdG9jay5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVNpZGViYXJcIl0gPSBcImZhY2Utc2lkZWJhci5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVNpZ25hbFwiXSA9IFwiZmFjZS1zaWduYWwucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTaW5nbGVUYXBcIl0gPSBcImZhY2Utc2luZ2xlLXRhcC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVNpemVcIl0gPSBcImZhY2Utc2l6ZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVNrZXRjaFwiXSA9IFwiZmFjZS1za2V0Y2gucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTbGFja1wiXSA9IFwiZmFjZS1zbGFjay5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVNsZWVwXCJdID0gXCJmYWNlLXNsZWVwLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU21hcnRwaG9uZVwiXSA9IFwiZmFjZS1zbWFydHBob25lLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU21pbGVcIl0gPSBcImZhY2Utc21pbGUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTcGVha2VyRGlzYWJsZVwiXSA9IFwiZmFjZS1zcGVha2VyLWRpc2FibGUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTcGVha2VyXCJdID0gXCJmYWNlLXNwZWFrZXIucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTcGVjdHJ1bVwiXSA9IFwiZmFjZS1zcGVjdHJ1bS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVNwaW5uZXJBbHRUd29cIl0gPSBcImZhY2Utc3Bpbm5lci1hbHQtdHdvLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU3Bpbm5lckFsdFwiXSA9IFwiZmFjZS1zcGlubmVyLWFsdC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVNwaW5uZXJUd29cIl0gPSBcImZhY2Utc3Bpbm5lci10d28ucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTcGlubmVyXCJdID0gXCJmYWNlLXNwaW5uZXIucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTcGxpdE5vdFZpZXdcIl0gPSBcImZhY2Utc3BsaXQtbm90LXZpZXcucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTcGxpdFZpZXdIb3Jpem9udGFsXCJdID0gXCJmYWNlLXNwbGl0LXZpZXctaG9yaXpvbnRhbC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVNwbGl0Vmlld1ZlcnRpY2FsXCJdID0gXCJmYWNlLXNwbGl0LXZpZXctdmVydGljYWwucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTcGxpdFZpZXdcIl0gPSBcImZhY2Utc3BsaXQtdmlldy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVNxdWFyZVNoYXBlXCJdID0gXCJmYWNlLXNxdWFyZS1zaGFwZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVNxdWFyZVRvZ2dsZVwiXSA9IFwiZmFjZS1zcXVhcmUtdG9nZ2xlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU3F1YXJlXCJdID0gXCJmYWNlLXNxdWFyZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVN0YWNrXCJdID0gXCJmYWNlLXN0YWNrLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU3RhclwiXSA9IFwiZmFjZS1zdGFyLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU3RhcmtcIl0gPSBcImZhY2Utc3RhcmsucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTdG9wd2F0Y2hcIl0gPSBcImZhY2Utc3RvcHdhdGNoLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU3Rvcmllc1wiXSA9IFwiZmFjZS1zdG9yaWVzLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU3R1ZGlvXCJdID0gXCJmYWNlLXN0dWRpby5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVN0eWxlXCJdID0gXCJmYWNlLXN0eWxlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU3VuXCJdID0gXCJmYWNlLXN1bi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVN1cHBvcnRcIl0gPSBcImZhY2Utc3VwcG9ydC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVN3YXBcIl0gPSBcImZhY2Utc3dhcC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVN3ZWRlblwiXSA9IFwiZmFjZS1zd2VkZW4ucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTd2lzc1wiXSA9IFwiZmFjZS1zd2lzcy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVN5bmNcIl0gPSBcImZhY2Utc3luYy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVRhYlwiXSA9IFwiZmFjZS10YWIucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VUYWdcIl0gPSBcImZhY2UtdGFnLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVGFsbHlcIl0gPSBcImZhY2UtdGFsbHkucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VUZW1wbGF0ZVwiXSA9IFwiZmFjZS10ZW1wbGF0ZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVRlbm5pc1wiXSA9IFwiZmFjZS10ZW5uaXMucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VUZXJtaW5hbFwiXSA9IFwiZmFjZS10ZXJtaW5hbC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVRlcnJhaW5cIl0gPSBcImZhY2UtdGVycmFpbi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVRoZXJtb21ldGVyXCJdID0gXCJmYWNlLXRoZXJtb21ldGVyLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVGhlcm1vc3RhdFwiXSA9IFwiZmFjZS10aGVybW9zdGF0LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVGlrY29kZVwiXSA9IFwiZmFjZS10aWtjb2RlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVGltZVwiXSA9IFwiZmFjZS10aW1lLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVGltZWxhcHNlXCJdID0gXCJmYWNlLXRpbWVsYXBzZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVRpbWVyXCJdID0gXCJmYWNlLXRpbWVyLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVG9kYXlcIl0gPSBcImZhY2UtdG9kYXkucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VUb29sYm94XCJdID0gXCJmYWNlLXRvb2xib3gucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VUb3BUb29sYmFyXCJdID0gXCJmYWNlLXRvcC10b29sYmFyLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVG91Y2hwYWRcIl0gPSBcImZhY2UtdG91Y2hwYWQucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VUcmFja1wiXSA9IFwiZmFjZS10cmFjay5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVRyYW5zY3JpcHRcIl0gPSBcImZhY2UtdHJhbnNjcmlwdC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVRyYXNoMlwiXSA9IFwiZmFjZS10cmFzaC0yLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVHJhc2hcIl0gPSBcImZhY2UtdHJhc2gucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VUcmVlXCJdID0gXCJmYWNlLXRyZWUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VUcmVlc1wiXSA9IFwiZmFjZS10cmVlcy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVRyZWxsb1wiXSA9IFwiZmFjZS10cmVsbG8ucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VUcmVuZGluZ1wiXSA9IFwiZmFjZS10cmVuZGluZy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVRyaWFuZ2xlU2hhcGVcIl0gPSBcImZhY2UtdHJpYW5nbGUtc2hhcGUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VUcm9waHlcIl0gPSBcImZhY2UtdHJvcGh5LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVHZcIl0gPSBcImZhY2UtdHYucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VUd2lsaW9cIl0gPSBcImZhY2UtdHdpbGlvLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVHdpdHRlclwiXSA9IFwiZmFjZS10d2l0dGVyLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVW1icmVsbGFcIl0gPSBcImZhY2UtdW1icmVsbGEucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VVbmF2YWlsYWJsZVwiXSA9IFwiZmFjZS11bmF2YWlsYWJsZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVVuYmxvY2tcIl0gPSBcImZhY2UtdW5ibG9jay5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVVuZG8yXCJdID0gXCJmYWNlLXVuZG8tMi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVVuZG9cIl0gPSBcImZhY2UtdW5kby5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVVuZm9sZFwiXSA9IFwiZmFjZS11bmZvbGQucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VVbmxpbmtcIl0gPSBcImZhY2UtdW5saW5rLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVW5sb2NrXCJdID0gXCJmYWNlLXVubG9jay5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVVuc3BsYXNoXCJdID0gXCJmYWNlLXVuc3BsYXNoLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVXBDaGV2cm9uUHVzaFwiXSA9IFwiZmFjZS11cC1jaGV2cm9uLXB1c2gucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VVcFB1c2hcIl0gPSBcImZhY2UtdXAtcHVzaC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVVwbG9hZFNvZnR3YXJlXCJdID0gXCJmYWNlLXVwbG9hZC1zb2Z0d2FyZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVVwbG9hZFwiXSA9IFwiZmFjZS11cGxvYWQucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VVcHNpZGVTbWlsZVwiXSA9IFwiZmFjZS11cHNpZGUtc21pbGUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VVc2JcIl0gPSBcImZhY2UtdXNiLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVXNlckFkZFwiXSA9IFwiZmFjZS11c2VyLWFkZC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVVzZXJcIl0gPSBcImZhY2UtdXNlci5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVVzZXJsYW5lXCJdID0gXCJmYWNlLXVzZXJsYW5lLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVkJldHdlZW5TcGFjZVwiXSA9IFwiZmFjZS12LWJldHdlZW4tc3BhY2UucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VWU2Nyb2xsXCJdID0gXCJmYWNlLXYtc2Nyb2xsLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVmVydGljYWxTd2FwXCJdID0gXCJmYWNlLXZlcnRpY2FsLXN3YXAucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VWaW55bFwiXSA9IFwiZmFjZS12aW55bC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVZvaWNlbWFpbFwiXSA9IFwiZmFjZS12b2ljZW1haWwucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VWb2x1bWVcIl0gPSBcImZhY2Utdm9sdW1lLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlV2ViY2FtXCJdID0gXCJmYWNlLXdlYmNhbS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVdlYnNpdGVcIl0gPSBcImZhY2Utd2Vic2l0ZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVdpZGVTY3JlZW5cIl0gPSBcImZhY2Utd2lkZS1zY3JlZW4ucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VXaWZpRGlzYWJsZVwiXSA9IFwiZmFjZS13aWZpLWRpc2FibGUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VXaWZpXCJdID0gXCJmYWNlLXdpZmkucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VXaW5kb3dzXCJdID0gXCJmYWNlLXdpbmRvd3MucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VZaW55YW5nXCJdID0gXCJmYWNlLXlpbnlhbmcucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VZb3V0dWJlXCJdID0gXCJmYWNlLXlvdXR1YmUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VaYVNvcnRcIl0gPSBcImZhY2UtemEtc29ydC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVplaXRcIl0gPSBcImZhY2UtemVpdC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVppZ3phZ1NoYXBlXCJdID0gXCJmYWNlLXppZ3phZy1zaGFwZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmF2aWNvblwiXSA9IFwiZmF2aWNvbi5pY29cIjtcclxuICAgIFFpbkFzc2V0W1wiSm9iYmVyQ2xvc2VcIl0gPSBcImpvYmJlci1jbG9zZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiSm9iYmVyTWF4aW1pemVcIl0gPSBcImpvYmJlci1tYXhpbWl6ZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiSm9iYmVyTWVudVwiXSA9IFwiam9iYmVyLW1lbnUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkpvYmJlck1pbmltaXplXCJdID0gXCJqb2JiZXItbWluaW1pemUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkpvYmJlclJlc2l6ZVwiXSA9IFwiam9iYmVyLXJlc2l6ZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiSm9iYmVyU3RhdHVzRXJyb3JcIl0gPSBcImpvYmJlci1zdGF0dXMtZXJyb3IucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkpvYmJlclN0YXR1c0luZm9cIl0gPSBcImpvYmJlci1zdGF0dXMtaW5mby5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiTG9naW5LZXlcIl0gPSBcImxvZ2luLWtleS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiTWVudURldnRvb2xzXCJdID0gXCJtZW51LWRldnRvb2xzLmljb1wiO1xyXG4gICAgUWluQXNzZXRbXCJRaW5wZWxcIl0gPSBcInFpbnBlbC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiU291cmNlU2Fuc1Byb1wiXSA9IFwic291cmNlLXNhbnMtcHJvLnR0ZlwiO1xyXG4gICAgUWluQXNzZXRbXCJTb3VyY2VTZXJpZlByb1wiXSA9IFwic291cmNlLXNlcmlmLXByby50dGZcIjtcclxufSkoUWluQXNzZXQgPSBleHBvcnRzLlFpbkFzc2V0IHx8IChleHBvcnRzLlFpbkFzc2V0ID0ge30pKTtcclxuZnVuY3Rpb24gcWluQXNzZXRVcmwoYXNzZXQpIHtcclxuICAgIHJldHVybiBcIi9hcHAvcWlucGVsLWFwcC9hc3NldHMvXCIgKyBhc3NldDtcclxufVxyXG5leHBvcnRzLnFpbkFzc2V0VXJsID0gcWluQXNzZXRVcmw7XHJcbmZ1bmN0aW9uIHFpblVybEFzc2V0KHVybCkge1xyXG4gICAgY29uc3QgYXNzZXQgPSB1cmwuc3Vic3RyaW5nKHVybC5sYXN0SW5kZXhPZihcIi9cIikgKyAxKTtcclxuICAgIHJldHVybiBhc3NldDtcclxufVxyXG5leHBvcnRzLnFpblVybEFzc2V0ID0gcWluVXJsQXNzZXQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1hc3NldHMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5CYXNlU3R5bGUgPSB2b2lkIDA7XHJcbmNvbnN0IHFpbnBlbF9yZXNfMSA9IHJlcXVpcmUoXCJxaW5wZWwtcmVzXCIpO1xyXG5jbGFzcyBRaW5CYXNlU3R5bGUge1xyXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMuX3N0eWxlZEFzRWRpdGFibGVGb2N1c0V2ZW50ID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9zdHlsZWRBc0VkaXRhYmxlRm9jdXNvdXRFdmVudCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fc3R5bGVkQXNSZWFkT25seUZvY3VzRXZlbnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX3N0eWxlZEFzUmVhZE9ubHlGb2N1c291dEV2ZW50ID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9lbCA9IGVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBwdXRBc0JvZHkoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLl9lbCk7XHJcbiAgICAgICAgcWlucGVsX3Jlc18xLlFpblNraW4uc3R5bGVBc0JvZHkodGhpcy5fZWwpO1xyXG4gICAgfVxyXG4gICAgZGVsQXNCb2R5KCkge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5fZWwpO1xyXG4gICAgfVxyXG4gICAgcHV0QXNXaG9sZSgpIHtcclxuICAgICAgICB0aGlzLnB1dEFzUG9zaXRpb25BYnNvbHV0ZSgpO1xyXG4gICAgICAgIHRoaXMucHV0QXNCb3VuZHMoMCwgMCwgMCwgMCk7XHJcbiAgICB9XHJcbiAgICBwdXRBc0Jhc2UoKSB7XHJcbiAgICAgICAgcWlucGVsX3Jlc18xLlFpblNraW4uc3R5bGVBc0Jhc2UodGhpcy5fZWwpO1xyXG4gICAgfVxyXG4gICAgcHV0QXNFZGl0YWJsZSgpIHtcclxuICAgICAgICB0aGlzLnB1dEFzQmFzZSgpO1xyXG4gICAgICAgIHRoaXMuX2VsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHFpbnBlbF9yZXNfMS5RaW5Ta2luLnN0eWxlcy5Db2xvckluYWN0aXZlO1xyXG4gICAgICAgIHRoaXMuX2VsLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkIFwiICsgcWlucGVsX3Jlc18xLlFpblNraW4uc3R5bGVzLkNvbG9yRm9yZWdyb3VuZDtcclxuICAgICAgICB0aGlzLl9lbC5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjNweFwiO1xyXG4gICAgICAgIHRoaXMuX2VsLnN0eWxlLm91dGxpbmUgPSBcIm5vbmVcIjtcclxuICAgICAgICBpZiAoIXRoaXMuX3N0eWxlZEFzRWRpdGFibGVGb2N1c0V2ZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0eWxlZEFzRWRpdGFibGVGb2N1c0V2ZW50ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcWlucGVsX3Jlc18xLlFpblNraW4uc3R5bGVzLkNvbG9yQWN0aXZlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZWwuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgXCIgKyBxaW5wZWxfcmVzXzEuUWluU2tpbi5zdHlsZXMuQ29sb3JBY2NlbnQ7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5fc3R5bGVkQXNFZGl0YWJsZUZvY3Vzb3V0RXZlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5fc3R5bGVkQXNFZGl0YWJsZUZvY3Vzb3V0RXZlbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9lbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBxaW5wZWxfcmVzXzEuUWluU2tpbi5zdHlsZXMuQ29sb3JJbmFjdGl2ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2VsLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkIFwiICsgcWlucGVsX3Jlc18xLlFpblNraW4uc3R5bGVzLkNvbG9yRm9yZWdyb3VuZDtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX3N0eWxlZEFzUmVhZE9ubHlGb2N1c0V2ZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2VsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCB0aGlzLl9zdHlsZWRBc1JlYWRPbmx5Rm9jdXNFdmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9zdHlsZWRBc1JlYWRPbmx5Rm9jdXNvdXRFdmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLl9lbC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgdGhpcy5fc3R5bGVkQXNSZWFkT25seUZvY3Vzb3V0RXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9lbC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgdGhpcy5fc3R5bGVkQXNFZGl0YWJsZUZvY3VzRXZlbnQpO1xyXG4gICAgICAgIHRoaXMuX2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCB0aGlzLl9zdHlsZWRBc0VkaXRhYmxlRm9jdXNvdXRFdmVudCk7XHJcbiAgICB9XHJcbiAgICBwdXRBc1JlYWRPbmx5KCkge1xyXG4gICAgICAgIHRoaXMucHV0QXNCYXNlKCk7XHJcbiAgICAgICAgdGhpcy5fZWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcWlucGVsX3Jlc18xLlFpblNraW4uc3R5bGVzLkNvbG9yQmxvY2tlZDtcclxuICAgICAgICB0aGlzLl9lbC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCBcIiArIHFpbnBlbF9yZXNfMS5RaW5Ta2luLnN0eWxlcy5Db2xvckZvcmVncm91bmQ7XHJcbiAgICAgICAgdGhpcy5fZWwuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIzcHhcIjtcclxuICAgICAgICB0aGlzLl9lbC5zdHlsZS5vdXRsaW5lID0gXCJub25lXCI7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9zdHlsZWRBc1JlYWRPbmx5Rm9jdXNFdmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLl9zdHlsZWRBc1JlYWRPbmx5Rm9jdXNFdmVudCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2VsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHFpbnBlbF9yZXNfMS5RaW5Ta2luLnN0eWxlcy5Db2xvckVudGVyZWQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9lbC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCBcIiArIHFpbnBlbF9yZXNfMS5RaW5Ta2luLnN0eWxlcy5Db2xvckF0dGVuZDtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLl9zdHlsZWRBc1JlYWRPbmx5Rm9jdXNvdXRFdmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLl9zdHlsZWRBc1JlYWRPbmx5Rm9jdXNvdXRFdmVudCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2VsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHFpbnBlbF9yZXNfMS5RaW5Ta2luLnN0eWxlcy5Db2xvckJsb2NrZWQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9lbC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCBcIiArIHFpbnBlbF9yZXNfMS5RaW5Ta2luLnN0eWxlcy5Db2xvckZvcmVncm91bmQ7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9zdHlsZWRBc0VkaXRhYmxlRm9jdXNFdmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLl9lbC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgdGhpcy5fc3R5bGVkQXNFZGl0YWJsZUZvY3VzRXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fc3R5bGVkQXNFZGl0YWJsZUZvY3Vzb3V0RXZlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5fZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIHRoaXMuX3N0eWxlZEFzRWRpdGFibGVGb2N1c291dEV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fZWwuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIHRoaXMuX3N0eWxlZEFzUmVhZE9ubHlGb2N1c0V2ZW50KTtcclxuICAgICAgICB0aGlzLl9lbC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgdGhpcy5fc3R5bGVkQXNSZWFkT25seUZvY3Vzb3V0RXZlbnQpO1xyXG4gICAgfVxyXG4gICAgcHV0QXNTY3JvbGwoKSB7XHJcbiAgICAgICAgdGhpcy5fZWwuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIjtcclxuICAgIH1cclxuICAgIHB1dEFzTWFyZ2luKG1hcmdpbikge1xyXG4gICAgICAgIHRoaXMuX2VsLnN0eWxlLm1hcmdpbiA9IHRoaXMuZ2V0UGl4ZWxzT3JJbml0aWFsKG1hcmdpbik7XHJcbiAgICB9XHJcbiAgICBwdXRBc01hcmdpblRvcChtYXJnaW4pIHtcclxuICAgICAgICB0aGlzLl9lbC5zdHlsZS5tYXJnaW5Ub3AgPSB0aGlzLmdldFBpeGVsc09ySW5pdGlhbChtYXJnaW4pO1xyXG4gICAgfVxyXG4gICAgcHV0QXNNYXJnaW5Cb3R0b20obWFyZ2luKSB7XHJcbiAgICAgICAgdGhpcy5fZWwuc3R5bGUubWFyZ2luQm90dG9tID0gdGhpcy5nZXRQaXhlbHNPckluaXRpYWwobWFyZ2luKTtcclxuICAgIH1cclxuICAgIHB1dEFzTWFyZ2luTGVmdChtYXJnaW4pIHtcclxuICAgICAgICB0aGlzLl9lbC5zdHlsZS5tYXJnaW5MZWZ0ID0gdGhpcy5nZXRQaXhlbHNPckluaXRpYWwobWFyZ2luKTtcclxuICAgIH1cclxuICAgIHB1dEFzTWFyZ2luUmlnaHQobWFyZ2luKSB7XHJcbiAgICAgICAgdGhpcy5fZWwuc3R5bGUubWFyZ2luUmlnaHQgPSB0aGlzLmdldFBpeGVsc09ySW5pdGlhbChtYXJnaW4pO1xyXG4gICAgfVxyXG4gICAgcHV0QXNQYWRkaW5nKHBhZGRpbmcpIHtcclxuICAgICAgICB0aGlzLl9lbC5zdHlsZS5wYWRkaW5nID0gdGhpcy5nZXRQaXhlbHNPckluaXRpYWwocGFkZGluZyk7XHJcbiAgICB9XHJcbiAgICBwdXRBc1BhZGRpbmdUb3AocGFkZGluZykge1xyXG4gICAgICAgIHRoaXMuX2VsLnN0eWxlLnBhZGRpbmdUb3AgPSB0aGlzLmdldFBpeGVsc09ySW5pdGlhbChwYWRkaW5nKTtcclxuICAgIH1cclxuICAgIHB1dEFzUGFkZGluZ0JvdHRvbShwYWRkaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fZWwuc3R5bGUucGFkZGluZ0JvdHRvbSA9IHRoaXMuZ2V0UGl4ZWxzT3JJbml0aWFsKHBhZGRpbmcpO1xyXG4gICAgfVxyXG4gICAgcHV0QXNQYWRkaW5nTGVmdChwYWRkaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fZWwuc3R5bGUucGFkZGluZ0xlZnQgPSB0aGlzLmdldFBpeGVsc09ySW5pdGlhbChwYWRkaW5nKTtcclxuICAgIH1cclxuICAgIHB1dEFzUGFkZGluZ1JpZ2h0KHBhZGRpbmcpIHtcclxuICAgICAgICB0aGlzLl9lbC5zdHlsZS5wYWRkaW5nUmlnaHQgPSB0aGlzLmdldFBpeGVsc09ySW5pdGlhbChwYWRkaW5nKTtcclxuICAgIH1cclxuICAgIHB1dEFzQm9yZGVyKHRoaWNrLCBjb2xvciA9IHFpbnBlbF9yZXNfMS5RaW5Ta2luLnN0eWxlcy5Db2xvckZvcmVncm91bmQsIHN0eWxlID0gXCJzb2xpZFwiKSB7XHJcbiAgICAgICAgaWYgKHRoaWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2VsLnN0eWxlLmJvcmRlciA9IHRoaWNrICsgXCJweCBcIiArIHN0eWxlICsgXCIgXCIgKyBjb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2VsLnN0eWxlLmJvcmRlciA9IFwibm9uZVwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1dEFzQm9yZGVyVG9wKHRoaWNrLCBjb2xvciA9IHFpbnBlbF9yZXNfMS5RaW5Ta2luLnN0eWxlcy5Db2xvckZvcmVncm91bmQsIHN0eWxlID0gXCJzb2xpZFwiKSB7XHJcbiAgICAgICAgaWYgKHRoaWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2VsLnN0eWxlLmJvcmRlclRvcCA9IHRoaWNrICsgXCJweCBcIiArIHN0eWxlICsgXCIgXCIgKyBjb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2VsLnN0eWxlLmJvcmRlclRvcCA9IFwibm9uZVwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1dEFzQm9yZGVyQm90dG9tKHRoaWNrLCBjb2xvciA9IHFpbnBlbF9yZXNfMS5RaW5Ta2luLnN0eWxlcy5Db2xvckZvcmVncm91bmQsIHN0eWxlID0gXCJzb2xpZFwiKSB7XHJcbiAgICAgICAgaWYgKHRoaWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2VsLnN0eWxlLmJvcmRlckJvdHRvbSA9IHRoaWNrICsgXCJweCBcIiArIHN0eWxlICsgXCIgXCIgKyBjb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2VsLnN0eWxlLmJvcmRlckJvdHRvbSA9IFwibm9uZVwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1dEFzQm9yZGVyTGVmdCh0aGljaywgY29sb3IgPSBxaW5wZWxfcmVzXzEuUWluU2tpbi5zdHlsZXMuQ29sb3JGb3JlZ3JvdW5kLCBzdHlsZSA9IFwic29saWRcIikge1xyXG4gICAgICAgIGlmICh0aGljaykge1xyXG4gICAgICAgICAgICB0aGlzLl9lbC5zdHlsZS5ib3JkZXJMZWZ0ID0gdGhpY2sgKyBcInB4IFwiICsgc3R5bGUgKyBcIiBcIiArIGNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fZWwuc3R5bGUuYm9yZGVyTGVmdCA9IFwibm9uZVwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1dEFzQm9yZGVyUmlnaHQodGhpY2ssIGNvbG9yID0gcWlucGVsX3Jlc18xLlFpblNraW4uc3R5bGVzLkNvbG9yRm9yZWdyb3VuZCwgc3R5bGUgPSBcInNvbGlkXCIpIHtcclxuICAgICAgICBpZiAodGhpY2spIHtcclxuICAgICAgICAgICAgdGhpcy5fZWwuc3R5bGUuYm9yZGVyUmlnaHQgPSB0aGljayArIFwicHggXCIgKyBzdHlsZSArIFwiIFwiICsgY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9lbC5zdHlsZS5ib3JkZXJSaWdodCA9IFwibm9uZVwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1dEFzQm9yZGVyUmFkaXVzKHJhZGl1cykge1xyXG4gICAgICAgIHRoaXMuX2VsLnN0eWxlLmJvcmRlclJhZGl1cyA9IHJhZGl1cyArIFwicHhcIjtcclxuICAgIH1cclxuICAgIHB1dEFzRGlzcGxheUZsZXgoKSB7XHJcbiAgICAgICAgdGhpcy5fZWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgfVxyXG4gICAgcHV0QXNEaXNwbGF5SW5saW5lKCkge1xyXG4gICAgICAgIHRoaXMuX2VsLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZVwiO1xyXG4gICAgfVxyXG4gICAgcHV0QXNEaXNwbGF5SW5saW5lQmxvY2soKSB7XHJcbiAgICAgICAgdGhpcy5fZWwuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgICB9XHJcbiAgICBwdXRBc1Bvc2l0aW9uU3RhdGljKCkge1xyXG4gICAgICAgIHRoaXMuX2VsLnN0eWxlLnBvc2l0aW9uID0gXCJzdGF0aWNcIjtcclxuICAgIH1cclxuICAgIHB1dEFzUG9zaXRpb25BYnNvbHV0ZSgpIHtcclxuICAgICAgICB0aGlzLl9lbC5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgIH1cclxuICAgIHB1dEFzUG9zaXRpb25GaXhlZCgpIHtcclxuICAgICAgICB0aGlzLl9lbC5zdHlsZS5wb3NpdGlvbiA9IFwiZml4ZWRcIjtcclxuICAgIH1cclxuICAgIHB1dEFzUG9zaXRpb25SZWxhdGl2ZSgpIHtcclxuICAgICAgICB0aGlzLl9lbC5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcclxuICAgIH1cclxuICAgIHB1dEFzUG9zaXRpb25TdGhpY2t5KCkge1xyXG4gICAgICAgIHRoaXMuX2VsLnN0eWxlLnBvc2l0aW9uID0gXCJzdGhpY2t5XCI7XHJcbiAgICB9XHJcbiAgICBwdXRBc1Bvc2l0aW9uSW5pdGlhbCgpIHtcclxuICAgICAgICB0aGlzLl9lbC5zdHlsZS5wb3NpdGlvbiA9IFwiaW5pdGlhbFwiO1xyXG4gICAgfVxyXG4gICAgcHV0QXNGbGV4RGlyZWN0aW9uUm93KCkge1xyXG4gICAgICAgIHRoaXMuX2VsLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcInJvd1wiO1xyXG4gICAgfVxyXG4gICAgcHV0QXNGbGV4RGlyZWN0aW9uUm93UmV2ZXJzZSgpIHtcclxuICAgICAgICB0aGlzLl9lbC5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJyb3ctcmV2ZXJzZVwiO1xyXG4gICAgfVxyXG4gICAgcHV0QXNGbGV4RGlyZWN0aW9uQ29sdW1uKCkge1xyXG4gICAgICAgIHRoaXMuX2VsLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcImNvbHVtblwiO1xyXG4gICAgfVxyXG4gICAgcHV0QXNGbGV4RGlyZWN0aW9uQ29sdW1uUmV2ZXJzZSgpIHtcclxuICAgICAgICB0aGlzLl9lbC5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJjb2x1bW4tcmV2ZXJzZVwiO1xyXG4gICAgfVxyXG4gICAgcHV0QXNGbGV4V3JhcCgpIHtcclxuICAgICAgICB0aGlzLl9lbC5zdHlsZS5mbGV4V3JhcCA9IFwid3JhcFwiO1xyXG4gICAgfVxyXG4gICAgcHV0QXNGbGV4V3JhcE5vdCgpIHtcclxuICAgICAgICB0aGlzLl9lbC5zdHlsZS5mbGV4V3JhcCA9IFwibm93cmFwXCI7XHJcbiAgICB9XHJcbiAgICBwdXRBc0ZsZXhXcmFwUmV2ZXJzZSgpIHtcclxuICAgICAgICB0aGlzLl9lbC5zdHlsZS5mbGV4V3JhcCA9IFwid3JhcC1yZXZlcnNlXCI7XHJcbiAgICB9XHJcbiAgICBwdXRBc0ZsZXhNaW4oKSB7XHJcbiAgICAgICAgdGhpcy5fZWwuc3R5bGUuZmxleCA9IFwibm9uZVwiO1xyXG4gICAgfVxyXG4gICAgcHV0QXNGbGV4TWF4KCkge1xyXG4gICAgICAgIHRoaXMuX2VsLnN0eWxlLmZsZXggPSBcImF1dG9cIjtcclxuICAgIH1cclxuICAgIHB1dEFzQWxsQ2VudGVyZWQoKSB7XHJcbiAgICAgICAgdGhpcy5fZWwuc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICAgICAgICB0aGlzLl9lbC5zdHlsZS5hbGlnbkl0ZW1zID0gXCJjZW50ZXJcIjtcclxuICAgICAgICB0aGlzLl9lbC5zdHlsZS5hbGlnbkNvbnRlbnQgPSBcImNlbnRlclwiO1xyXG4gICAgICAgIHRoaXMuX2VsLnN0eWxlLnZlcnRpY2FsQWxpZ24gPSBcIm1pZGRsZVwiO1xyXG4gICAgfVxyXG4gICAgcHV0QXNCb3VuZHModG9wLCByaWdodCwgYm90dG9tLCBsZWZ0KSB7XHJcbiAgICAgICAgdGhpcy5fZWwuc3R5bGUudG9wID0gdGhpcy5nZXRQaXhlbHNPckluaXRpYWwodG9wKTtcclxuICAgICAgICB0aGlzLl9lbC5zdHlsZS5yaWdodCA9IHRoaXMuZ2V0UGl4ZWxzT3JJbml0aWFsKHJpZ2h0KTtcclxuICAgICAgICB0aGlzLl9lbC5zdHlsZS5ib3R0b20gPSB0aGlzLmdldFBpeGVsc09ySW5pdGlhbChib3R0b20pO1xyXG4gICAgICAgIHRoaXMuX2VsLnN0eWxlLmxlZnQgPSB0aGlzLmdldFBpeGVsc09ySW5pdGlhbChsZWZ0KTtcclxuICAgIH1cclxuICAgIHB1dEFzV2lkdGgod2lkdGgpIHtcclxuICAgICAgICB0aGlzLl9lbC5zdHlsZS53aWR0aCA9IHRoaXMuZ2V0UGl4ZWxzT3JJbml0aWFsKHdpZHRoKTtcclxuICAgIH1cclxuICAgIHB1dEFzSGVpZ2h0KGhlaWdodCkge1xyXG4gICAgICAgIHRoaXMuX2VsLnN0eWxlLmhlaWdodCA9IHRoaXMuZ2V0UGl4ZWxzT3JJbml0aWFsKGhlaWdodCk7XHJcbiAgICB9XHJcbiAgICBwdXRBc1NpemUod2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIHRoaXMuX2VsLnN0eWxlLndpZHRoID0gdGhpcy5nZXRQaXhlbHNPckluaXRpYWwod2lkdGgpO1xyXG4gICAgICAgIHRoaXMuX2VsLnN0eWxlLmhlaWdodCA9IHRoaXMuZ2V0UGl4ZWxzT3JJbml0aWFsKGhlaWdodCk7XHJcbiAgICB9XHJcbiAgICBwdXRBc01pbldpZHRoKHdpZHRoKSB7XHJcbiAgICAgICAgdGhpcy5fZWwuc3R5bGUubWluV2lkdGggPSB0aGlzLmdldFBpeGVsc09ySW5pdGlhbCh3aWR0aCk7XHJcbiAgICB9XHJcbiAgICBwdXRBc01pbkhlaWdodChoZWlnaHQpIHtcclxuICAgICAgICB0aGlzLl9lbC5zdHlsZS5taW5IZWlnaHQgPSB0aGlzLmdldFBpeGVsc09ySW5pdGlhbChoZWlnaHQpO1xyXG4gICAgfVxyXG4gICAgcHV0QXNNaW5TaXplKHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICB0aGlzLl9lbC5zdHlsZS5taW5XaWR0aCA9IHRoaXMuZ2V0UGl4ZWxzT3JJbml0aWFsKHdpZHRoKTtcclxuICAgICAgICB0aGlzLl9lbC5zdHlsZS5taW5IZWlnaHQgPSB0aGlzLmdldFBpeGVsc09ySW5pdGlhbChoZWlnaHQpO1xyXG4gICAgfVxyXG4gICAgcHV0QXNNYXhXaWR0aCh3aWR0aCkge1xyXG4gICAgICAgIHRoaXMuX2VsLnN0eWxlLm1heFdpZHRoID0gdGhpcy5nZXRQaXhlbHNPckluaXRpYWwod2lkdGgpO1xyXG4gICAgfVxyXG4gICAgcHV0QXNNYXhIZWlnaHQoaGVpZ2h0KSB7XHJcbiAgICAgICAgdGhpcy5fZWwuc3R5bGUubWF4SGVpZ2h0ID0gdGhpcy5nZXRQaXhlbHNPckluaXRpYWwoaGVpZ2h0KTtcclxuICAgIH1cclxuICAgIHB1dEFzTWF4U2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgdGhpcy5fZWwuc3R5bGUubWF4V2lkdGggPSB0aGlzLmdldFBpeGVsc09ySW5pdGlhbCh3aWR0aCk7XHJcbiAgICAgICAgdGhpcy5fZWwuc3R5bGUubWF4SGVpZ2h0ID0gdGhpcy5nZXRQaXhlbHNPckluaXRpYWwoaGVpZ2h0KTtcclxuICAgIH1cclxuICAgIHB1dEFzRm9yZWdyb3VuZChmb3JlZ3JvdW5kKSB7XHJcbiAgICAgICAgdGhpcy5fZWwuc3R5bGUuY29sb3IgPSBmb3JlZ3JvdW5kO1xyXG4gICAgfVxyXG4gICAgcHV0QXNCYWNrZ3JvdW5kKGJhY2tncm91bmQpIHtcclxuICAgICAgICB0aGlzLl9lbC5zdHlsZS5iYWNrZ3JvdW5kID0gYmFja2dyb3VuZDtcclxuICAgIH1cclxuICAgIHB1dEFzQmFja0Fzc2V0KGFzc2V0KSB7XHJcbiAgICAgICAgdGhpcy5fZWwuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJy9hcHAvcWlucGVsLWFwcC9hc3NldHMvXCIgKyBhc3NldCArIFwiJylcIjtcclxuICAgIH1cclxuICAgIHB1dEFzQmFja0luaXRpYWwoKSB7XHJcbiAgICAgICAgdGhpcy5fZWwuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJpbml0aWFsXCI7XHJcbiAgICB9XHJcbiAgICBwdXRBc1pJbmRleChpbmRleCkge1xyXG4gICAgICAgIGlmIChpbmRleCA9PSBudWxsIHx8IGluZGV4ID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9lbC5zdHlsZS56SW5kZXggPSBcImluaXRpYWxcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2VsLnN0eWxlLnpJbmRleCA9IGluZGV4LnRvU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHV0QXNEaXNhYmxlZFNlbGVjdGlvbigpIHtcclxuICAgICAgICBxaW5wZWxfcmVzXzEuUWluU2tpbi5kaXNhYmxlU2VsZWN0aW9uKHRoaXMuX2VsKTtcclxuICAgIH1cclxuICAgIGdldFBpeGVsc09ySW5pdGlhbCh2YWx1ZSkge1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PSBudWxsIHx8IHZhbHVlID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJpbml0aWFsXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWx1ZSArIFwicHhcIjtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlFpbkJhc2VTdHlsZSA9IFFpbkJhc2VTdHlsZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWJhc2Utc3R5bGUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5CYXNlID0gdm9pZCAwO1xyXG5jb25zdCBxaW5wZWxfcmVzXzEgPSByZXF1aXJlKFwicWlucGVsLXJlc1wiKTtcclxuY29uc3QgcWluX2Jhc2Vfc3R5bGVfMSA9IHJlcXVpcmUoXCIuL3Fpbi1iYXNlLXN0eWxlXCIpO1xyXG5jb25zdCBxaW5fdG9vbF8xID0gcmVxdWlyZShcIi4vcWluLXRvb2xcIik7XHJcbmNsYXNzIFFpbkJhc2Uge1xyXG4gICAgY29uc3RydWN0b3IocWluZHJlZCwgcWluZWQpIHtcclxuICAgICAgICB0aGlzLl9iYXNlUGFyZW50ID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9wYXN0UGFyZW50ID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9iYXNlQ2hpbGRyZW4gPSBbXTtcclxuICAgICAgICB0aGlzLl9iYXNlRGlzcGxheSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fYmFzZVZpc2liaWxpdHkgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX3N0eWxlID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9xaW5kcmVkID0gcWluZHJlZDtcclxuICAgICAgICBpZiAocWluZWQgaW5zdGFuY2VvZiBRaW5CYXNlKSB7XHJcbiAgICAgICAgICAgIHFpbmVkLnFpbmVkSFRNTC5pZCA9IHFpbmRyZWQgKyBxaW5lZC5xaW5lZEhUTUwuaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBxaW5lZC5pZCA9IHFpbl90b29sXzEuUWluVG9vbC5xaW5wZWwub3VyLnNvdWwuYm9keS5tYWtlUWluZHJlZFVJRChxaW5kcmVkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fcWluZWQgPSBxaW5lZDtcclxuICAgIH1cclxuICAgIGdldCBxaW5lZEhUTUwoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3FpbmVkIGluc3RhbmNlb2YgUWluQmFzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcWluZWQucWluZWRIVE1MO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3FpbmVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldCBxaW5lZEJhc2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3FpbmVkIGluc3RhbmNlb2YgUWluQmFzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcWluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzdHlsZWQoc3R5bGVzKSB7XHJcbiAgICAgICAgcWlucGVsX3Jlc18xLlFpblNraW4uYXBwbHlTdHlsZXModGhpcy5xaW5lZEhUTUwsIHN0eWxlcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBnZXQgcWluZHJlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcWluZHJlZDtcclxuICAgIH1cclxuICAgIGdldCBxaW5wZWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHFpbl90b29sXzEuUWluVG9vbC5xaW5wZWw7XHJcbiAgICB9XHJcbiAgICBnZXQgc3R5bGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3N0eWxlID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5fc3R5bGUgPSBuZXcgcWluX2Jhc2Vfc3R5bGVfMS5RaW5CYXNlU3R5bGUodGhpcy5xaW5lZEhUTUwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5fc3R5bGU7XHJcbiAgICB9XHJcbiAgICBwdXQoaXRlbSkge1xyXG4gICAgICAgIGl0ZW0uaW5zdGFsbCh0aGlzKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGluc3RhbGwob25CYXNlKSB7XHJcbiAgICAgICAgdGhpcy51bkluc3RhbGwoKTtcclxuICAgICAgICB0aGlzLl9iYXNlUGFyZW50ID0gb25CYXNlO1xyXG4gICAgICAgIHRoaXMuX2Jhc2VQYXJlbnQuYWRkQ2hpbGQodGhpcyk7XHJcbiAgICB9XHJcbiAgICB1bkluc3RhbGwoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2Jhc2VQYXJlbnQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9iYXNlUGFyZW50LmRlbENoaWxkKHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLl9wYXN0UGFyZW50ID0gdGhpcy5fYmFzZVBhcmVudDtcclxuICAgICAgICAgICAgdGhpcy5fYmFzZVBhcmVudCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVJbnN0YWxsKCkge1xyXG4gICAgICAgIHRoaXMudW5JbnN0YWxsKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuX3Bhc3RQYXJlbnQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9wYXN0UGFyZW50LmFkZENoaWxkKHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLl9iYXNlUGFyZW50ID0gdGhpcy5fcGFzdFBhcmVudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB1bkluc3RhbGxDaGlsZHJlbigpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5fYmFzZUNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Jhc2VDaGlsZHJlbltpXS51bkluc3RhbGwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB1bkRpc3BsYXkoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucWluZWRIVE1MLnN0eWxlLmRpc3BsYXkgIT09IFwibm9uZVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Jhc2VEaXNwbGF5ID0gdGhpcy5xaW5lZEhUTUwuc3R5bGUuZGlzcGxheTtcclxuICAgICAgICAgICAgdGhpcy5xaW5lZEhUTUwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlRGlzcGxheSgpIHtcclxuICAgICAgICBpZiAodGhpcy5fYmFzZURpc3BsYXkgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnFpbmVkSFRNTC5zdHlsZS5kaXNwbGF5ID0gdGhpcy5fYmFzZURpc3BsYXk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdW5WaXNpYmxlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnFpbmVkSFRNTC5zdHlsZS5kaXNwbGF5ICE9PSBcImhpZGRlblwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Jhc2VWaXNpYmlsaXR5ID0gdGhpcy5xaW5lZEhUTUwuc3R5bGUudmlzaWJpbGl0eTtcclxuICAgICAgICAgICAgdGhpcy5xaW5lZEhUTUwuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVWaXNpYmxlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9iYXNlVmlzaWJpbGl0eSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMucWluZWRIVE1MLnN0eWxlLnZpc2liaWxpdHkgPSB0aGlzLl9iYXNlVmlzaWJpbGl0eTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhZGRDaGlsZChjaGlsZCkge1xyXG4gICAgICAgIHRoaXMuX2Jhc2VDaGlsZHJlbi5wdXNoKGNoaWxkKTtcclxuICAgICAgICB0aGlzLnFpbmVkSFRNTC5hcHBlbmRDaGlsZChjaGlsZC5xaW5lZEhUTUwpO1xyXG4gICAgfVxyXG4gICAgZGVsQ2hpbGQoY2hpbGQpIHtcclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLl9iYXNlQ2hpbGRyZW4uaW5kZXhPZihjaGlsZCk7XHJcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5fYmFzZUNoaWxkcmVuLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucWluZWRIVE1MLnJlbW92ZUNoaWxkKGNoaWxkLnFpbmVkSFRNTCk7XHJcbiAgICB9XHJcbiAgICBjaGlsZHJlbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYmFzZUNoaWxkcmVuO1xyXG4gICAgfVxyXG4gICAgbXVzdElkKCkge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzLmlkO1xyXG4gICAgICAgIGlmICghcmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHFpbnBlbF9yZXNfMS5RaW5Cb2R5Lm1ha2VRaW5VSUQoKTtcclxuICAgICAgICAgICAgdGhpcy5pZCA9IHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIGdldCBpZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5xaW5lZEhUTUwuaWQ7XHJcbiAgICB9XHJcbiAgICBzZXQgaWQoaWQpIHtcclxuICAgICAgICB0aGlzLnFpbmVkSFRNTC5pZCA9IGlkO1xyXG4gICAgfVxyXG4gICAgZ2V0IHRhYkluZGV4KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnFpbmVkSFRNTC50YWJJbmRleDtcclxuICAgIH1cclxuICAgIHNldCB0YWJJbmRleChpbmRleCkge1xyXG4gICAgICAgIHRoaXMucWluZWRIVE1MLnRhYkluZGV4ID0gaW5kZXg7XHJcbiAgICB9XHJcbiAgICBmb2N1cygpIHtcclxuICAgICAgICB0aGlzLnFpbmVkSFRNTC5mb2N1cygpO1xyXG4gICAgfVxyXG4gICAgYWRkQWN0aW9uKGFjdGlvbikge1xyXG4gICAgICAgIHFpbnBlbF9yZXNfMS5RaW5Bcm1zLmFkZEFjdGlvbih0aGlzLnFpbmVkSFRNTCwgYWN0aW9uKTtcclxuICAgIH1cclxuICAgIGFkZEFjdGlvbk1haW4oYWN0aW9uKSB7XHJcbiAgICAgICAgcWlucGVsX3Jlc18xLlFpbkFybXMuYWRkQWN0aW9uTWFpbih0aGlzLnFpbmVkSFRNTCwgYWN0aW9uKTtcclxuICAgIH1cclxuICAgIGFkZEFjdGlvbk1haW5LZXkoYWN0aW9uKSB7XHJcbiAgICAgICAgcWlucGVsX3Jlc18xLlFpbkFybXMuYWRkQWN0aW9uTWFpbktleSh0aGlzLnFpbmVkSFRNTCwgYWN0aW9uKTtcclxuICAgIH1cclxuICAgIGFkZEFjdGlvbk1haW5Nb3VzZShhY3Rpb24pIHtcclxuICAgICAgICBxaW5wZWxfcmVzXzEuUWluQXJtcy5hZGRBY3Rpb25NYWluTW91c2UodGhpcy5xaW5lZEhUTUwsIGFjdGlvbik7XHJcbiAgICB9XHJcbiAgICBhZGRBY3Rpb25NYWluVG91Y2goYWN0aW9uKSB7XHJcbiAgICAgICAgcWlucGVsX3Jlc18xLlFpbkFybXMuYWRkQWN0aW9uTWFpblRvdWNoKHRoaXMucWluZWRIVE1MLCBhY3Rpb24pO1xyXG4gICAgfVxyXG4gICAgYWRkQWN0aW9uTWFpblBvaW50KGFjdGlvbikge1xyXG4gICAgICAgIHFpbnBlbF9yZXNfMS5RaW5Bcm1zLmFkZEFjdGlvbk1haW5Qb2ludCh0aGlzLnFpbmVkSFRNTCwgYWN0aW9uKTtcclxuICAgIH1cclxuICAgIGFkZEFjdGlvbk1pZGkoYWN0aW9uKSB7XHJcbiAgICAgICAgcWlucGVsX3Jlc18xLlFpbkFybXMuYWRkQWN0aW9uTWlkaSh0aGlzLnFpbmVkSFRNTCwgYWN0aW9uKTtcclxuICAgIH1cclxuICAgIGFkZEFjdGlvbk1pZGlLZXkoYWN0aW9uKSB7XHJcbiAgICAgICAgcWlucGVsX3Jlc18xLlFpbkFybXMuYWRkQWN0aW9uTWlkaUtleSh0aGlzLnFpbmVkSFRNTCwgYWN0aW9uKTtcclxuICAgIH1cclxuICAgIGFkZEFjdGlvbk1pZGlNb3VzZShhY3Rpb24pIHtcclxuICAgICAgICBxaW5wZWxfcmVzXzEuUWluQXJtcy5hZGRBY3Rpb25NaWRpTW91c2UodGhpcy5xaW5lZEhUTUwsIGFjdGlvbik7XHJcbiAgICB9XHJcbiAgICBhZGRBY3Rpb25NaWRpVG91Y2goYWN0aW9uKSB7XHJcbiAgICAgICAgcWlucGVsX3Jlc18xLlFpbkFybXMuYWRkQWN0aW9uTWlkaVRvdWNoKHRoaXMucWluZWRIVE1MLCBhY3Rpb24pO1xyXG4gICAgfVxyXG4gICAgYWRkQWN0aW9uTWlkaVBvaW50KGFjdGlvbikge1xyXG4gICAgICAgIHFpbnBlbF9yZXNfMS5RaW5Bcm1zLmFkZEFjdGlvbk1pZGlQb2ludCh0aGlzLnFpbmVkSFRNTCwgYWN0aW9uKTtcclxuICAgIH1cclxuICAgIGFkZEFjdGlvbk1lbnUoYWN0aW9uKSB7XHJcbiAgICAgICAgcWlucGVsX3Jlc18xLlFpbkFybXMuYWRkQWN0aW9uTWVudSh0aGlzLnFpbmVkSFRNTCwgYWN0aW9uKTtcclxuICAgIH1cclxuICAgIGFkZEFjdGlvbk1lbnVLZXkoYWN0aW9uKSB7XHJcbiAgICAgICAgcWlucGVsX3Jlc18xLlFpbkFybXMuYWRkQWN0aW9uTWVudUtleSh0aGlzLnFpbmVkSFRNTCwgYWN0aW9uKTtcclxuICAgIH1cclxuICAgIGFkZEFjdGlvbk1lbnVNb3VzZShhY3Rpb24pIHtcclxuICAgICAgICBxaW5wZWxfcmVzXzEuUWluQXJtcy5hZGRBY3Rpb25NZW51TW91c2UodGhpcy5xaW5lZEhUTUwsIGFjdGlvbik7XHJcbiAgICB9XHJcbiAgICBhZGRBY3Rpb25NZW51VG91Y2goYWN0aW9uKSB7XHJcbiAgICAgICAgcWlucGVsX3Jlc18xLlFpbkFybXMuYWRkQWN0aW9uTWVudVRvdWNoKHRoaXMucWluZWRIVE1MLCBhY3Rpb24pO1xyXG4gICAgfVxyXG4gICAgYWRkQWN0aW9uTWVudVBvaW50KGFjdGlvbikge1xyXG4gICAgICAgIHFpbnBlbF9yZXNfMS5RaW5Bcm1zLmFkZEFjdGlvbk1lbnVQb2ludCh0aGlzLnFpbmVkSFRNTCwgYWN0aW9uKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlFpbkJhc2UgPSBRaW5CYXNlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tYmFzZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlFpbkJvb2xlYW4gPSB2b2lkIDA7XHJcbmNvbnN0IHFpbnBlbF9yZXNfMSA9IHJlcXVpcmUoXCJxaW5wZWwtcmVzXCIpO1xyXG5jb25zdCBxaW5fYXNzZXRzXzEgPSByZXF1aXJlKFwiLi9xaW4tYXNzZXRzXCIpO1xyXG5jb25zdCBxaW5fZWRpdF8xID0gcmVxdWlyZShcIi4vcWluLWVkaXRcIik7XHJcbmNvbnN0IHFpbl9pY29uXzEgPSByZXF1aXJlKFwiLi9xaW4taWNvblwiKTtcclxuY29uc3QgcWluX2xhYmVsXzEgPSByZXF1aXJlKFwiLi9xaW4tbGFiZWxcIik7XHJcbmNvbnN0IHFpbl9saW5lXzEgPSByZXF1aXJlKFwiLi9xaW4tbGluZVwiKTtcclxuY2xhc3MgUWluQm9vbGVhbiBleHRlbmRzIHFpbl9lZGl0XzEuUWluRWRpdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zLCBpc1FpbmRyZWQpIHtcclxuICAgICAgICBzdXBlcigoaXNRaW5kcmVkID8gaXNRaW5kcmVkICsgXCJfXCIgOiBcIlwiKSArIFwiYm9vbGVhblwiLCBuZXcgcWluX2xpbmVfMS5RaW5MaW5lKCkpO1xyXG4gICAgICAgIHRoaXMuX3FpblNwYW4gPSBuZXcgcWluX2xhYmVsXzEuUWluTGFiZWwoKTtcclxuICAgICAgICB0aGlzLl9xaW5JY29uID0gbmV3IHFpbl9pY29uXzEuUWluSWNvbihxaW5fYXNzZXRzXzEuUWluQXNzZXQuRmFjZUNoZWNrUmFkaW8pO1xyXG4gICAgICAgIHRoaXMuX3ZhbHVlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fcmVhZE9ubHkgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9xaW5TcGFuLmluc3RhbGwodGhpcy5xaW5lZEJhc2UpO1xyXG4gICAgICAgIHRoaXMuX3Fpbkljb24uaW5zdGFsbCh0aGlzLl9xaW5TcGFuKTtcclxuICAgICAgICB0aGlzLl9xaW5TcGFuLnN0eWxlLnB1dEFzRWRpdGFibGUoKTtcclxuICAgICAgICB0aGlzLl9xaW5TcGFuLnN0eWxlLnB1dEFzRGlzcGxheUZsZXgoKTtcclxuICAgICAgICB0aGlzLl9xaW5TcGFuLnN0eWxlLnB1dEFzQWxsQ2VudGVyZWQoKTtcclxuICAgICAgICB0aGlzLl9xaW5TcGFuLmFkZEFjdGlvbigocWluRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHFpbkV2ZW50LmlzTWFpbiAmJiAhdGhpcy5fcmVhZE9ubHkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmluaXRpYWwpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKG9wdGlvbnMuaW5pdGlhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMucmVhZE9ubHkpIHtcclxuICAgICAgICAgICAgdGhpcy50dXJuUmVhZE9ubHkoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXN0ZWRRaW5lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnFpbmVkQmFzZTtcclxuICAgIH1cclxuICAgIHN0eWxlZChzdHlsZXMpIHtcclxuICAgICAgICBzdXBlci5zdHlsZWQoc3R5bGVzKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGdldE5hdHVyZSgpIHtcclxuICAgICAgICByZXR1cm4gcWlucGVsX3Jlc18xLlFpbk5hdHVyZS5CT09MO1xyXG4gICAgfVxyXG4gICAgZ2V0RGF0YSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XHJcbiAgICB9XHJcbiAgICBzZXREYXRhKGRhdGEpIHtcclxuICAgICAgICB0aGlzLl92YWx1ZSA9IGRhdGE7XHJcbiAgICAgICAgdGhpcy51cGRhdGVJY29uKCk7XHJcbiAgICB9XHJcbiAgICBtYXlDaGFuZ2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG4gICAgdHVyblJlYWRPbmx5KCkge1xyXG4gICAgICAgIHRoaXMuX3JlYWRPbmx5ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9xaW5TcGFuLnN0eWxlLnB1dEFzUmVhZE9ubHkoKTtcclxuICAgIH1cclxuICAgIHR1cm5FZGl0YWJsZSgpIHtcclxuICAgICAgICB0aGlzLl9yZWFkT25seSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX3FpblNwYW4uc3R5bGUucHV0QXNFZGl0YWJsZSgpO1xyXG4gICAgfVxyXG4gICAgaXNFZGl0YWJsZSgpIHtcclxuICAgICAgICByZXR1cm4gIXRoaXMuX3JlYWRPbmx5O1xyXG4gICAgfVxyXG4gICAgdXBkYXRlSWNvbigpIHtcclxuICAgICAgICBpZiAodGhpcy5fdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5fcWluSWNvbi5hc3NldCA9IHFpbl9hc3NldHNfMS5RaW5Bc3NldC5GYWNlQ2hlY2tlZFJhZGlvO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fcWluSWNvbi5hc3NldCA9IHFpbl9hc3NldHNfMS5RaW5Bc3NldC5GYWNlQ2hlY2tSYWRpbztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB0b2dnbGUoKSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9ICF0aGlzLnZhbHVlO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUWluQm9vbGVhbiA9IFFpbkJvb2xlYW47XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1ib29sZWFuLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluQnV0dG9uID0gdm9pZCAwO1xyXG5jb25zdCBxaW5wZWxfcmVzXzEgPSByZXF1aXJlKFwicWlucGVsLXJlc1wiKTtcclxuY29uc3QgcWluX2Jhc2VfMSA9IHJlcXVpcmUoXCIuL3Fpbi1iYXNlXCIpO1xyXG5jbGFzcyBRaW5CdXR0b24gZXh0ZW5kcyBxaW5fYmFzZV8xLlFpbkJhc2Uge1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucywgaXNRaW5kcmVkKSB7XHJcbiAgICAgICAgc3VwZXIoKGlzUWluZHJlZCA/IGlzUWluZHJlZCArIFwiX1wiIDogXCJcIikgKyBcImJ1dHRvblwiLCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpKTtcclxuICAgICAgICB0aGlzLl9xaW5JY29uID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9xaW5MYWJlbCA9IG51bGw7XHJcbiAgICAgICAgc3R5bGVzLmFwcGx5T25CdXR0b24odGhpcy5xaW5lZEhUTUwpO1xyXG4gICAgICAgIGlmIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuaWNvbikge1xyXG4gICAgICAgICAgICB0aGlzLl9xaW5JY29uID0gb3B0aW9ucy5pY29uO1xyXG4gICAgICAgICAgICB0aGlzLl9xaW5JY29uLmluc3RhbGwodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMubGFiZWwpIHtcclxuICAgICAgICAgICAgdGhpcy5fcWluTGFiZWwgPSBvcHRpb25zLmxhYmVsO1xyXG4gICAgICAgICAgICB0aGlzLl9xaW5MYWJlbC5pbnN0YWxsKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhc3RlZFFpbmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucWluZWRIVE1MO1xyXG4gICAgfVxyXG4gICAgc3R5bGVkKHN0eWxlcykge1xyXG4gICAgICAgIHN1cGVyLnN0eWxlZChzdHlsZXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgZ2V0IHFpbkljb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Fpbkljb247XHJcbiAgICB9XHJcbiAgICBnZXQgcWluTGFiZWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpbkxhYmVsO1xyXG4gICAgfVxyXG4gICAgcHV0QXNSb3coKSB7XHJcbiAgICAgICAgdGhpcy5zdHlsZS5wdXRBc0ZsZXhEaXJlY3Rpb25Sb3coKTtcclxuICAgIH1cclxuICAgIHB1dEFzUm93UmV2ZXJzZSgpIHtcclxuICAgICAgICB0aGlzLnN0eWxlLnB1dEFzRmxleERpcmVjdGlvblJvd1JldmVyc2UoKTtcclxuICAgIH1cclxuICAgIHB1dEFzQ29sdW1uKCkge1xyXG4gICAgICAgIHRoaXMuc3R5bGUucHV0QXNGbGV4RGlyZWN0aW9uQ29sdW1uKCk7XHJcbiAgICB9XHJcbiAgICBwdXRBc0NvbHVtblJldmVyc2UoKSB7XHJcbiAgICAgICAgdGhpcy5zdHlsZS5wdXRBc0ZsZXhEaXJlY3Rpb25Db2x1bW5SZXZlcnNlKCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5RaW5CdXR0b24gPSBRaW5CdXR0b247XHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICAgIGFwcGx5T25CdXR0b246IChlbCkgPT4ge1xyXG4gICAgICAgIHFpbnBlbF9yZXNfMS5RaW5Ta2luLnN0eWxlQXNBY3Rpb25hYmxlKGVsKTtcclxuICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgZWwuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwicm93XCI7XHJcbiAgICAgICAgZWwuc3R5bGUuYWxpZ25JdGVtcyA9IFwiY2VudGVyXCI7XHJcbiAgICAgICAgZWwuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSBcImNlbnRlclwiO1xyXG4gICAgfSxcclxufTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWJ1dHRvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlFpbkNvbHVtbiA9IHZvaWQgMDtcclxuY29uc3QgcWluX3BhbmVsXzEgPSByZXF1aXJlKFwiLi9xaW4tcGFuZWxcIik7XHJcbmNsYXNzIFFpbkNvbHVtbiBleHRlbmRzIHFpbl9wYW5lbF8xLlFpblBhbmVsIHtcclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMsIGlzUWluZHJlZCkge1xyXG4gICAgICAgIHN1cGVyKG9wdGlvbnMsIChpc1FpbmRyZWQgPyBpc1FpbmRyZWQgKyBcIl9cIiA6IFwiXCIpICsgXCJjb2x1bW5cIik7XHJcbiAgICAgICAgdGhpcy5zdHlsZS5wdXRBc0ZsZXhEaXJlY3Rpb25Db2x1bW4oKTtcclxuICAgICAgICB0aGlzLnN0eWxlLnB1dEFzRmxleFdyYXBOb3QoKTtcclxuICAgIH1cclxuICAgIHN0eWxlZChzdHlsZXMpIHtcclxuICAgICAgICBzdXBlci5zdHlsZWQoc3R5bGVzKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHB1dChpdGVtKSB7XHJcbiAgICAgICAgaXRlbS5pbnN0YWxsKHRoaXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUWluQ29sdW1uID0gUWluQ29sdW1uO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tY29sdW1uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluQ29tYm8gPSB2b2lkIDA7XHJcbmNvbnN0IHFpbnBlbF9yZXNfMSA9IHJlcXVpcmUoXCJxaW5wZWwtcmVzXCIpO1xyXG5jb25zdCBxaW5fZWRpdF8xID0gcmVxdWlyZShcIi4vcWluLWVkaXRcIik7XHJcbmNsYXNzIFFpbkNvbWJvIGV4dGVuZHMgcWluX2VkaXRfMS5RaW5FZGl0IHtcclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMsIGlzUWluZHJlZCkge1xyXG4gICAgICAgIHN1cGVyKChpc1FpbmRyZWQgPyBpc1FpbmRyZWQgKyBcIl9cIiA6IFwiXCIpICsgXCJjb21ib1wiLCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpKTtcclxuICAgICAgICB0aGlzLl9lbEdyb3VwcyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIHRoaXMuc3R5bGUucHV0QXNFZGl0YWJsZSgpO1xyXG4gICAgICAgIGlmIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuaXRlbXMpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBvcHRpb25zLml0ZW1zKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEl0ZW0oaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5zZWxlY3RlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEob3B0aW9ucy5zZWxlY3RlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMucmVhZE9ubHkpIHtcclxuICAgICAgICAgICAgdGhpcy50dXJuUmVhZE9ubHkoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXN0ZWRRaW5lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnFpbmVkSFRNTDtcclxuICAgIH1cclxuICAgIHN0eWxlZChzdHlsZXMpIHtcclxuICAgICAgICBzdXBlci5zdHlsZWQoc3R5bGVzKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGdldE5hdHVyZSgpIHtcclxuICAgICAgICByZXR1cm4gcWlucGVsX3Jlc18xLlFpbk5hdHVyZS5DSEFSUztcclxuICAgIH1cclxuICAgIGdldERhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FzdGVkUWluZSgpLnZhbHVlO1xyXG4gICAgfVxyXG4gICAgc2V0RGF0YShkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5jYXN0ZWRRaW5lKCkudmFsdWUgPSBkYXRhO1xyXG4gICAgfVxyXG4gICAgbWF5Q2hhbmdlKCkge1xyXG4gICAgICAgIHJldHVybiBbdGhpcy5jYXN0ZWRRaW5lKCldO1xyXG4gICAgfVxyXG4gICAgdHVyblJlYWRPbmx5KCkge1xyXG4gICAgICAgIHRoaXMuY2FzdGVkUWluZSgpLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnN0eWxlLnB1dEFzUmVhZE9ubHkoKTtcclxuICAgIH1cclxuICAgIHR1cm5FZGl0YWJsZSgpIHtcclxuICAgICAgICB0aGlzLmNhc3RlZFFpbmUoKS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc3R5bGUucHV0QXNFZGl0YWJsZSgpO1xyXG4gICAgfVxyXG4gICAgaXNFZGl0YWJsZSgpIHtcclxuICAgICAgICByZXR1cm4gIXRoaXMuY2FzdGVkUWluZSgpLmRpc2FibGVkO1xyXG4gICAgfVxyXG4gICAgYWRkSXRlbShpdGVtKSB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgICAgICBvcHRpb24udGV4dCA9IGl0ZW0udGl0bGU7XHJcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gaXRlbS52YWx1ZTtcclxuICAgICAgICBpZiAoaXRlbS5zZWxlY3RlZCAhPSB1bmRlZmluZWQgJiYgaXRlbS5zZWxlY3RlZCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IGl0ZW0uc2VsZWN0ZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBncm91cCA9IHRoaXMuZ2V0R3JvdXAoaXRlbS5ncm91cCk7XHJcbiAgICAgICAgaWYgKGdyb3VwKSB7XHJcbiAgICAgICAgICAgIGdyb3VwLmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBxaW5wZWxfcmVzXzEuUWluU2tpbi5zdHlsZUFzQmFzZShvcHRpb24pO1xyXG4gICAgICAgICAgICB0aGlzLnFpbmVkSFRNTC5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGdldEdyb3VwKGxhYmVsKSB7XHJcbiAgICAgICAgaWYgKCFsYWJlbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgZ3JvdXAgb2YgdGhpcy5fZWxHcm91cHMpIHtcclxuICAgICAgICAgICAgaWYgKGdyb3VwLmxhYmVsID09IGxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZ3JvdXA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG5ld0dyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGdyb3VwXCIpO1xyXG4gICAgICAgIG5ld0dyb3VwLmxhYmVsID0gbGFiZWw7XHJcbiAgICAgICAgcWlucGVsX3Jlc18xLlFpblNraW4uc3R5bGVBc0Jhc2UobmV3R3JvdXApO1xyXG4gICAgICAgIHRoaXMuX2VsR3JvdXBzLnB1c2gobmV3R3JvdXApO1xyXG4gICAgICAgIHRoaXMucWluZWRIVE1MLmFwcGVuZENoaWxkKG5ld0dyb3VwKTtcclxuICAgICAgICByZXR1cm4gbmV3R3JvdXA7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5RaW5Db21ibyA9IFFpbkNvbWJvO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tY29tYm8uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5EaXZpZGVyID0gdm9pZCAwO1xyXG5jb25zdCBxaW5fYmFzZV8xID0gcmVxdWlyZShcIi4vcWluLWJhc2VcIik7XHJcbmNsYXNzIFFpbkRpdmlkZXIgZXh0ZW5kcyBxaW5fYmFzZV8xLlFpbkJhc2Uge1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucywgaXNRaW5kcmVkKSB7XHJcbiAgICAgICAgc3VwZXIoKGlzUWluZHJlZCA/IGlzUWluZHJlZCArIFwiX1wiIDogXCJcIikgKyBcImRpdmlkZXJcIiwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSk7XHJcbiAgICAgICAgdGhpcy5faXNIb3Jpem9udGFsID0gdHJ1ZTtcclxuICAgICAgICBpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmhvcml6b250YWwpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRIb3Jpem9udGFsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFZlcnRpY2FsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2FzdGVkUWluZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5xaW5lZEhUTUw7XHJcbiAgICB9XHJcbiAgICBzdHlsZWQoc3R5bGVzKSB7XHJcbiAgICAgICAgc3VwZXIuc3R5bGVkKHN0eWxlcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBzZXRIb3Jpem9udGFsKCkge1xyXG4gICAgICAgIHRoaXMucWluZWRIVE1MLnN0eWxlLm1pbldpZHRoID0gXCJpbml0aWFsXCI7XHJcbiAgICAgICAgdGhpcy5xaW5lZEhUTUwuc3R5bGUubWF4V2lkdGggPSBcImluaXRpYWxcIjtcclxuICAgICAgICB0aGlzLnFpbmVkSFRNTC5zdHlsZS5taW5IZWlnaHQgPSBcIjZweFwiO1xyXG4gICAgICAgIHRoaXMucWluZWRIVE1MLnN0eWxlLm1heEhlaWdodCA9IFwiNnB4XCI7XHJcbiAgICAgICAgdGhpcy5xaW5lZEhUTUwuc3R5bGUuaGVpZ2h0ID0gXCI2cHhcIjtcclxuICAgICAgICB0aGlzLnFpbmVkSFRNTC5zdHlsZS5iYWNrZ3JvdW5kID1cclxuICAgICAgICAgICAgXCJsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDI1NSwyNTAsMjM5LDAuMSkgMCUsIHJnYmEoMjU1LDI1MCwyMzksMC4xKSAyNiUsIHJnYmEoMjQsMCwzOSwwLjgpIDQyJSwgcmdiYSgyNCwwLDM5LDAuOCkgNTglLCByZ2JhKDI1NSwyNTAsMjM5LDAuMSkgNzQlLCByZ2JhKDI1NSwyNTAsMjM5LDAuMSkgMTAwJSlcIjtcclxuICAgICAgICB0aGlzLl9pc0hvcml6b250YWwgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgc2V0VmVydGljYWwoKSB7XHJcbiAgICAgICAgdGhpcy5xaW5lZEhUTUwuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwicm93XCI7XHJcbiAgICAgICAgdGhpcy5xaW5lZEhUTUwuc3R5bGUubWluV2lkdGggPSBcIjZweFwiO1xyXG4gICAgICAgIHRoaXMucWluZWRIVE1MLnN0eWxlLm1heFdpZHRoID0gXCI2cHhcIjtcclxuICAgICAgICB0aGlzLnFpbmVkSFRNTC5zdHlsZS5taW5IZWlnaHQgPSBcImluaXRpYWxcIjtcclxuICAgICAgICB0aGlzLnFpbmVkSFRNTC5zdHlsZS5tYXhIZWlnaHQgPSBcImluaXRpYWxcIjtcclxuICAgICAgICB0aGlzLnFpbmVkSFRNTC5zdHlsZS53aWR0aCA9IFwiNnB4XCI7XHJcbiAgICAgICAgdGhpcy5xaW5lZEhUTUwuc3R5bGUuYmFja2dyb3VuZCA9XHJcbiAgICAgICAgICAgIFwibGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDI1NSwyNTAsMjM5LDAuMSkgMCUsIHJnYmEoMjU1LDI1MCwyMzksMC4xKSAyNiUsIHJnYmEoMjQsMCwzOSwwLjgpIDQyJSwgcmdiYSgyNCwwLDM5LDAuOCkgNTglLCByZ2JhKDI1NSwyNTAsMjM5LDAuMSkgNzQlLCByZ2JhKDI1NSwyNTAsMjM5LDAuMSkgMTAwJSlcIjtcclxuICAgICAgICB0aGlzLl9pc0hvcml6b250YWwgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGdldCBpc0hvcml6b250YWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzSG9yaXpvbnRhbDtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlFpbkRpdmlkZXIgPSBRaW5EaXZpZGVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tZGl2aWRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlFpbkVkaXQgPSB2b2lkIDA7XHJcbmNvbnN0IHFpbnBlbF9yZXNfMSA9IHJlcXVpcmUoXCJxaW5wZWwtcmVzXCIpO1xyXG5jb25zdCBxaW5fYmFzZV8xID0gcmVxdWlyZShcIi4vcWluLWJhc2VcIik7XHJcbmNsYXNzIFFpbkVkaXQgZXh0ZW5kcyBxaW5fYmFzZV8xLlFpbkJhc2Uge1xyXG4gICAgY29uc3RydWN0b3IocWluZHJlZCwgcWluZWQpIHtcclxuICAgICAgICBzdXBlcihxaW5kcmVkICsgXCJfXCIgKyBcImVkaXRcIiwgcWluZWQpO1xyXG4gICAgICAgIHRoaXMuX2NoYW5nZWRXYWl0ZXJzID0gbmV3IHFpbnBlbF9yZXNfMS5RaW5XYWl0ZXJzKCk7XHJcbiAgICAgICAgZm9yIChsZXQgbWF5Q2hhbmdlIG9mIHRoaXMubWF5Q2hhbmdlKCkpIHtcclxuICAgICAgICAgICAgbWF5Q2hhbmdlLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZW5kQ2hhbmdlZCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQgdmFsdWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGF0YSgpO1xyXG4gICAgfVxyXG4gICAgc2V0IHZhbHVlKGRhdGEpIHtcclxuICAgICAgICB0aGlzLnNldERhdGEoZGF0YSk7XHJcbiAgICAgICAgdGhpcy5zZW5kQ2hhbmdlZCgpO1xyXG4gICAgfVxyXG4gICAgc2VuZENoYW5nZWQoKSB7XHJcbiAgICAgICAgdGhpcy5fY2hhbmdlZFdhaXRlcnMuc2VuZFdhaXRlcnModGhpcy5nZXREYXRhKCkpO1xyXG4gICAgfVxyXG4gICAgYWRkT25DaGFuZ2VkKHdhaXRlcikge1xyXG4gICAgICAgIHRoaXMuX2NoYW5nZWRXYWl0ZXJzLmFkZFdhaXRlcih3YWl0ZXIpO1xyXG4gICAgfVxyXG4gICAgZ2V0Q2hhbmdlYWJsZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXlDaGFuZ2UoKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlFpbkVkaXQgPSBRaW5FZGl0O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tZWRpdC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlFpbkZpZWxkID0gdm9pZCAwO1xyXG5jb25zdCBxaW5fY29sdW1uXzEgPSByZXF1aXJlKFwiLi9xaW4tY29sdW1uXCIpO1xyXG5jb25zdCBxaW5fbGFiZWxfMSA9IHJlcXVpcmUoXCIuL3Fpbi1sYWJlbFwiKTtcclxuY2xhc3MgUWluRmllbGQgZXh0ZW5kcyBxaW5fY29sdW1uXzEuUWluQ29sdW1uIHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBlZGl0LCBpc1FpbmRyZWQpIHtcclxuICAgICAgICBzdXBlcihudWxsLCAoaXNRaW5kcmVkID8gaXNRaW5kcmVkICsgXCJfXCIgOiBcIlwiKSArIGVkaXQucWluZHJlZCArIFwiX2ZpZWxkXCIpO1xyXG4gICAgICAgIHRoaXMuX3FpbkxhYmVsID0gbmV3IHFpbl9sYWJlbF8xLlFpbkxhYmVsKCk7XHJcbiAgICAgICAgdGhpcy5fcWluTGFiZWwudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICB0aGlzLl9xaW5MYWJlbC5pbnN0YWxsKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX3FpbkVkaXQgPSBlZGl0O1xyXG4gICAgICAgIHRoaXMuX3FpbkVkaXQuaW5zdGFsbCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9xaW5MYWJlbC5xaW5MaW5rKHRoaXMuX3FpbkVkaXQpO1xyXG4gICAgICAgIHRoaXMuc3R5bGUucHV0QXNNYXJnaW4oMyk7XHJcbiAgICB9XHJcbiAgICBzdHlsZWQoc3R5bGVzKSB7XHJcbiAgICAgICAgc3VwZXIuc3R5bGVkKHN0eWxlcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBnZXQgbGFiZWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpbkxhYmVsO1xyXG4gICAgfVxyXG4gICAgZ2V0IGVkaXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpbkVkaXQ7XHJcbiAgICB9XHJcbiAgICBnZXROYXR1cmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpbkVkaXQuZ2V0TmF0dXJlKCk7XHJcbiAgICB9XHJcbiAgICBnZXQgdmFsdWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpbkVkaXQudmFsdWU7XHJcbiAgICB9XHJcbiAgICBzZXQgdmFsdWUoZGF0YSkge1xyXG4gICAgICAgIHRoaXMuX3FpbkVkaXQudmFsdWUgPSBkYXRhO1xyXG4gICAgfVxyXG4gICAgdHVyblJlYWRPbmx5KCkge1xyXG4gICAgICAgIHRoaXMuX3FpbkVkaXQudHVyblJlYWRPbmx5KCk7XHJcbiAgICB9XHJcbiAgICB0dXJuRWRpdGFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5fcWluRWRpdC50dXJuRWRpdGFibGUoKTtcclxuICAgIH1cclxuICAgIGlzRWRpdGFibGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpbkVkaXQuaXNFZGl0YWJsZSgpO1xyXG4gICAgfVxyXG4gICAgYWRkT25DaGFuZ2VkKHdhaXRlcikge1xyXG4gICAgICAgIHRoaXMuX3FpbkVkaXQuYWRkT25DaGFuZ2VkKHdhaXRlcik7XHJcbiAgICB9XHJcbiAgICBmb2N1cygpIHtcclxuICAgICAgICB0aGlzLl9xaW5FZGl0LmZvY3VzKCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5RaW5GaWVsZCA9IFFpbkZpZWxkO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tZmllbGQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5GaWxlUGF0aCA9IHZvaWQgMDtcclxuY29uc3QgcWlucGVsX3Jlc18xID0gcmVxdWlyZShcInFpbnBlbC1yZXNcIik7XHJcbmNvbnN0IHFpbl9hc3NldHNfMSA9IHJlcXVpcmUoXCIuL3Fpbi1hc3NldHNcIik7XHJcbmNvbnN0IHFpbl9idXR0b25fMSA9IHJlcXVpcmUoXCIuL3Fpbi1idXR0b25cIik7XHJcbmNvbnN0IHFpbl9lZGl0XzEgPSByZXF1aXJlKFwiLi9xaW4tZWRpdFwiKTtcclxuY29uc3QgcWluX2ZpbGVfcGlja18xID0gcmVxdWlyZShcIi4vcWluLWZpbGUtcGlja1wiKTtcclxuY29uc3QgcWluX2ljb25fMSA9IHJlcXVpcmUoXCIuL3Fpbi1pY29uXCIpO1xyXG5jb25zdCBxaW5fbGluZV8xID0gcmVxdWlyZShcIi4vcWluLWxpbmVcIik7XHJcbmNvbnN0IHFpbl9zdHJpbmdfMSA9IHJlcXVpcmUoXCIuL3Fpbi1zdHJpbmdcIik7XHJcbmNsYXNzIFFpbkZpbGVQYXRoIGV4dGVuZHMgcWluX2VkaXRfMS5RaW5FZGl0IHtcclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMsIGlzUWluZHJlZCkge1xyXG4gICAgICAgIHN1cGVyKChpc1FpbmRyZWQgPyBpc1FpbmRyZWQgKyBcIl9cIiA6IFwiXCIpICsgXCJmaWxlLXBhdGhcIiwgbmV3IHFpbl9saW5lXzEuUWluTGluZSgpKTtcclxuICAgICAgICB0aGlzLl9xaW5QYXRoID0gbmV3IHFpbl9zdHJpbmdfMS5RaW5TdHJpbmcoKTtcclxuICAgICAgICB0aGlzLl9xaW5TZWFyY2ggPSBuZXcgcWluX2J1dHRvbl8xLlFpbkJ1dHRvbih7XHJcbiAgICAgICAgICAgIGljb246IG5ldyBxaW5faWNvbl8xLlFpbkljb24ocWluX2Fzc2V0c18xLlFpbkFzc2V0LkZhY2VGb2xkZXIpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX3JlYWRPbmx5ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fcWluUGlja2VyID0gbmV3IHFpbl9maWxlX3BpY2tfMS5RaW5GaWxlUGljayh7XHJcbiAgICAgICAgICAgIG5hdHVyZTogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLm5hdHVyZSxcclxuICAgICAgICAgICAgb3BlcmF0aW9uOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMub3BlcmF0aW9uLFxyXG4gICAgICAgICAgICBkZXNjcmlwdG9yczogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmRlc2NyaXB0b3JzLFxyXG4gICAgICAgICAgICBzaW5nbGVTZWxlY3Rpb246IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fcWluUG9wdXAgPSB0aGlzLnFpbnBlbC5qb2JiZWQubmV3UG9wdXAodGhpcy5fcWluUGlja2VyLmNhc3RlZFFpbmUoKS5jYXN0ZWRRaW5lKCkpO1xyXG4gICAgICAgIHRoaXMuX3FpblBhdGguaW5zdGFsbCh0aGlzLnFpbmVkQmFzZSk7XHJcbiAgICAgICAgdGhpcy5fcWluU2VhcmNoLmluc3RhbGwodGhpcy5xaW5lZEJhc2UpO1xyXG4gICAgICAgIHRoaXMuX3FpblNlYXJjaC5hZGRBY3Rpb24oKHFpbkV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChxaW5FdmVudC5pc01haW4pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3FpblBvcHVwLnNob3coKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVwcGVySGVpZ2h0ID0gdGhpcy5fcWluUGlja2VyLnFpblVwcGVyLnFpbmVkSFRNTC5jbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBleHBsb3Jlck1heEhlaWdodCA9IHRoaXMuX3FpblBvcHVwLm1heEhlaWdodCAtICh1cHBlckhlaWdodCArIDEyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3FpblBpY2tlci5xaW5FeHBsb3Jlci5zdHlsZS5wdXRBc01heEhlaWdodChleHBsb3Jlck1heEhlaWdodCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9xaW5QaWNrZXIuYWRkQ2hvc2VuKChjaG9zZW4pID0+IHtcclxuICAgICAgICAgICAgaWYgKGNob3NlbiAmJiBjaG9zZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcWluUGF0aC52YWx1ZSA9IGNob3NlblswXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9xaW5Qb3B1cC5jbG9zZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuaW5pdGlhbCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEob3B0aW9ucy5pbml0aWFsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5yZWFkT25seSkge1xyXG4gICAgICAgICAgICB0aGlzLnR1cm5SZWFkT25seSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhc3RlZFFpbmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucWluZWRCYXNlO1xyXG4gICAgfVxyXG4gICAgc3R5bGVkKHN0eWxlcykge1xyXG4gICAgICAgIHN1cGVyLnN0eWxlZChzdHlsZXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgZ2V0TmF0dXJlKCkge1xyXG4gICAgICAgIHJldHVybiBxaW5wZWxfcmVzXzEuUWluTmF0dXJlLkNIQVJTO1xyXG4gICAgfVxyXG4gICAgZ2V0RGF0YSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcWluUGF0aC52YWx1ZTtcclxuICAgIH1cclxuICAgIHNldERhdGEoZGF0YSkge1xyXG4gICAgICAgIHRoaXMuX3FpblBhdGgudmFsdWUgPSBkYXRhO1xyXG4gICAgfVxyXG4gICAgbWF5Q2hhbmdlKCkge1xyXG4gICAgICAgIHJldHVybiBbLi4udGhpcy5fcWluUGF0aC5nZXRDaGFuZ2VhYmxlKCksIC4uLnRoaXMuX3FpblBpY2tlci5nZXRDaGFuZ2VhYmxlKCldO1xyXG4gICAgfVxyXG4gICAgdHVyblJlYWRPbmx5KCkge1xyXG4gICAgICAgIHRoaXMuX3JlYWRPbmx5ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9xaW5QYXRoLnR1cm5SZWFkT25seSgpO1xyXG4gICAgfVxyXG4gICAgdHVybkVkaXRhYmxlKCkge1xyXG4gICAgICAgIHRoaXMuX3JlYWRPbmx5ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fcWluUGF0aC50dXJuRWRpdGFibGUoKTtcclxuICAgIH1cclxuICAgIGlzRWRpdGFibGUoKSB7XHJcbiAgICAgICAgcmV0dXJuICF0aGlzLl9yZWFkT25seTtcclxuICAgIH1cclxuICAgIGdldCBxaW5QYXRoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5QYXRoO1xyXG4gICAgfVxyXG4gICAgZ2V0IHFpblNlYXJjaCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcWluU2VhcmNoO1xyXG4gICAgfVxyXG4gICAgZ2V0IHFpbkNob29zZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpblBpY2tlcjtcclxuICAgIH1cclxuICAgIGdldCBxaW5Qb3B1cCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcWluUG9wdXA7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5RaW5GaWxlUGF0aCA9IFFpbkZpbGVQYXRoO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tZmlsZS1wYXRoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluRmlsZVBpY2sgPSB2b2lkIDA7XHJcbmNvbnN0IHFpbnBlbF9yZXNfMSA9IHJlcXVpcmUoXCJxaW5wZWwtcmVzXCIpO1xyXG5jb25zdCBxaW5fYXNzZXRzXzEgPSByZXF1aXJlKFwiLi9xaW4tYXNzZXRzXCIpO1xyXG5jb25zdCBxaW5fYnV0dG9uXzEgPSByZXF1aXJlKFwiLi9xaW4tYnV0dG9uXCIpO1xyXG5jb25zdCBxaW5fY29sdW1uXzEgPSByZXF1aXJlKFwiLi9xaW4tY29sdW1uXCIpO1xyXG5jb25zdCBxaW5fY29tYm9fMSA9IHJlcXVpcmUoXCIuL3Fpbi1jb21ib1wiKTtcclxuY29uc3QgcWluX2VkaXRfMSA9IHJlcXVpcmUoXCIuL3Fpbi1lZGl0XCIpO1xyXG5jb25zdCBxaW5fZmlsZV92aWV3XzEgPSByZXF1aXJlKFwiLi9xaW4tZmlsZS12aWV3XCIpO1xyXG5jb25zdCBxaW5faWNvbl8xID0gcmVxdWlyZShcIi4vcWluLWljb25cIik7XHJcbmNvbnN0IHFpbl9saW5lXzEgPSByZXF1aXJlKFwiLi9xaW4tbGluZVwiKTtcclxuY29uc3QgcWluX3BhbmVsXzEgPSByZXF1aXJlKFwiLi9xaW4tcGFuZWxcIik7XHJcbmNvbnN0IHFpbl9zdHJpbmdfMSA9IHJlcXVpcmUoXCIuL3Fpbi1zdHJpbmdcIik7XHJcbmNsYXNzIFFpbkZpbGVQaWNrIGV4dGVuZHMgcWluX2VkaXRfMS5RaW5FZGl0IHtcclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMsIGlzUWluZHJlZCkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICBzdXBlcigoaXNRaW5kcmVkID8gaXNRaW5kcmVkICsgXCJfXCIgOiBcIlwiKSArIFwiZmlsZS1waWNrXCIsIG5ldyBxaW5fY29sdW1uXzEuUWluQ29sdW1uKCkpO1xyXG4gICAgICAgIHRoaXMuX3FpblVwcGVyID0gbmV3IHFpbl9saW5lXzEuUWluTGluZSgpO1xyXG4gICAgICAgIHRoaXMuX3FpbkNvbmZpcm0gPSBuZXcgcWluX2J1dHRvbl8xLlFpbkJ1dHRvbih7XHJcbiAgICAgICAgICAgIGljb246IG5ldyBxaW5faWNvbl8xLlFpbkljb24ocWluX2Fzc2V0c18xLlFpbkFzc2V0LkZhY2VDb25maXJtKSxcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9xaW5Gb2xkZXIgPSBuZXcgcWluX3N0cmluZ18xLlFpblN0cmluZygpO1xyXG4gICAgICAgIHRoaXMuX3FpbkV4dGVuc2lvbnMgPSBuZXcgcWluX2NvbWJvXzEuUWluQ29tYm8oKTtcclxuICAgICAgICB0aGlzLl9xaW5TZWFyY2ggPSBuZXcgcWluX2J1dHRvbl8xLlFpbkJ1dHRvbih7XHJcbiAgICAgICAgICAgIGljb246IG5ldyBxaW5faWNvbl8xLlFpbkljb24ocWluX2Fzc2V0c18xLlFpbkFzc2V0LkZhY2VTZWFyY2gpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX3FpblVuZGVyID0gbmV3IHFpbl9wYW5lbF8xLlFpblBhbmVsKCk7XHJcbiAgICAgICAgdGhpcy5fcWluRXhwbG9yZXIgPSBuZXcgcWluX2ZpbGVfdmlld18xLlFpbkZpbGVWaWV3KCk7XHJcbiAgICAgICAgdGhpcy5fbGlzdGVuZXJzID0gW107XHJcbiAgICAgICAgdGhpcy5fcmVhZE9ubHkgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9uYXR1cmUgPSAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLm5hdHVyZSkgPyBvcHRpb25zLm5hdHVyZSA6IHFpbnBlbF9yZXNfMS5RaW5GaWxlc05hdHVyZS5CT1RIO1xyXG4gICAgICAgIHRoaXMuX29wZXJhdGlvbiA9IChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMub3BlcmF0aW9uKSA/IG9wdGlvbnMub3BlcmF0aW9uIDogcWlucGVsX3Jlc18xLlFpbkZpbGVzT3BlcmF0aW9uLk9QRU47XHJcbiAgICAgICAgdGhpcy5fZGVzY3JpcHRvcnMgPSAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmRlc2NyaXB0b3JzKSA/IG9wdGlvbnMuZGVzY3JpcHRvcnMgOiBbXTtcclxuICAgICAgICB0aGlzLl9zaW5nbGVTZWxlY3Rpb24gPSAoX2EgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuc2luZ2xlU2VsZWN0aW9uKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBmYWxzZTtcclxuICAgICAgICB0aGlzLmluaXRNYWluKCk7XHJcbiAgICAgICAgdGhpcy5pbml0VXBwZXIoKTtcclxuICAgICAgICB0aGlzLmluaXRVbmRlcigpO1xyXG4gICAgICAgIGlmIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMucmVhZE9ubHkpIHtcclxuICAgICAgICAgICAgdGhpcy50dXJuUmVhZE9ubHkoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpbml0TWFpbigpIHtcclxuICAgICAgICB0aGlzLl9xaW5VcHBlci5pbnN0YWxsKHRoaXMucWluZWRCYXNlKTtcclxuICAgICAgICB0aGlzLl9xaW5VbmRlci5pbnN0YWxsKHRoaXMucWluZWRCYXNlKTtcclxuICAgIH1cclxuICAgIGluaXRVcHBlcigpIHtcclxuICAgICAgICB0aGlzLl9xaW5VcHBlci5zdHlsZS5wdXRBc0ZsZXhNaW4oKTtcclxuICAgICAgICB0aGlzLl9xaW5Db25maXJtLmluc3RhbGwodGhpcy5fcWluVXBwZXIpO1xyXG4gICAgICAgIHRoaXMuX3FpbkNvbmZpcm0uYWRkQWN0aW9uTWFpbigoXykgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHRoaXMuZ2V0RGF0YSgpO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNob3NlbiBvZiB0aGlzLl9saXN0ZW5lcnMpIHtcclxuICAgICAgICAgICAgICAgIGNob3NlbihkYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX3FpbkZvbGRlci5pbnN0YWxsKHRoaXMuX3FpblVwcGVyKTtcclxuICAgICAgICB0aGlzLl9xaW5Gb2xkZXIuc3R5bGUucHV0QXNNaW5XaWR0aCgxMDApO1xyXG4gICAgICAgIHRoaXMuX3FpbkZvbGRlci5zdHlsZS5wdXRBc0ZsZXhNYXgoKTtcclxuICAgICAgICB0aGlzLl9xaW5Gb2xkZXIuYWRkQWN0aW9uTWFpbigoXykgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0VkaXRhYmxlKCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZEZvbGRlcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fcWluRXh0ZW5zaW9ucy5pbnN0YWxsKHRoaXMuX3FpblVwcGVyKTtcclxuICAgICAgICB0aGlzLl9xaW5FeHRlbnNpb25zLnN0eWxlLnB1dEFzTWluV2lkdGgoMTAwKTtcclxuICAgICAgICB0aGlzLmluaXRFeHRlbnNpb25zKCk7XHJcbiAgICAgICAgdGhpcy5fcWluU2VhcmNoLmluc3RhbGwodGhpcy5fcWluVXBwZXIpO1xyXG4gICAgICAgIHRoaXMuX3FpblNlYXJjaC5hZGRBY3Rpb24oKF8pID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNFZGl0YWJsZSgpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRGb2xkZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaW5pdFVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuX3FpblVuZGVyLnN0eWxlLnB1dEFzU2Nyb2xsKCk7XHJcbiAgICAgICAgdGhpcy5fcWluVW5kZXIuc3R5bGUucHV0QXNGbGV4TWF4KCk7XHJcbiAgICAgICAgdGhpcy5fcWluRXhwbG9yZXIuaW5zdGFsbCh0aGlzLl9xaW5VbmRlcik7XHJcbiAgICAgICAgdGhpcy5fcWluRXhwbG9yZXIubmF0dXJlID0gdGhpcy5fbmF0dXJlO1xyXG4gICAgICAgIHRoaXMuX3FpbkV4cGxvcmVyLnNpbmdsZVNlbGVjdGlvbiA9IHRoaXMuX3NpbmdsZVNlbGVjdGlvbjtcclxuICAgIH1cclxuICAgIGluaXRFeHRlbnNpb25zKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9kZXNjcmlwdG9ycy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLl9xaW5FeHRlbnNpb25zLmFkZEl0ZW0oe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMucWlucGVsLnRyKFwiQWxsIGZpbGVzXCIpICsgXCIgKCouKilcIixcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBcIipcIixcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiB0cnVlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5fcWluRXhwbG9yZXIuZXh0ZW5zaW9ucyA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuX2Rlc2NyaXB0b3JzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRvciA9IHRoaXMuX2Rlc2NyaXB0b3JzW2luZGV4XTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3FpbkV4dGVuc2lvbnMuYWRkSXRlbSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGRlc2NyaXB0b3IuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGRlc2NyaXB0b3IuZXh0ZW5zaW9ucy5qb2luKFwiO1wiKSxcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZDogaW5kZXggPT0gMCxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX3FpbkV4cGxvcmVyLmV4dGVuc2lvbnMgPSB0aGlzLl9kZXNjcmlwdG9yc1swXS5leHRlbnNpb25zO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhc3RlZFFpbmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucWluZWRCYXNlO1xyXG4gICAgfVxyXG4gICAgc3R5bGVkKHN0eWxlcykge1xyXG4gICAgICAgIHN1cGVyLnN0eWxlZChzdHlsZXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgZ2V0TmF0dXJlKCkge1xyXG4gICAgICAgIHJldHVybiBxaW5wZWxfcmVzXzEuUWluTmF0dXJlLkNIQVJTO1xyXG4gICAgfVxyXG4gICAgZ2V0RGF0YSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcWluRXhwbG9yZXIudmFsdWU7XHJcbiAgICB9XHJcbiAgICBzZXREYXRhKGRhdGEpIHtcclxuICAgICAgICB0aGlzLl9xaW5FeHBsb3Jlci52YWx1ZSA9IGRhdGE7XHJcbiAgICB9XHJcbiAgICBtYXlDaGFuZ2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIFsuLi50aGlzLl9xaW5FeHBsb3Jlci5nZXRDaGFuZ2VhYmxlKCldO1xyXG4gICAgfVxyXG4gICAgdHVyblJlYWRPbmx5KCkge1xyXG4gICAgICAgIHRoaXMuX3JlYWRPbmx5ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9xaW5Gb2xkZXIudHVyblJlYWRPbmx5KCk7XHJcbiAgICAgICAgdGhpcy5fcWluRXh0ZW5zaW9ucy50dXJuUmVhZE9ubHkoKTtcclxuICAgICAgICB0aGlzLl9xaW5FeHBsb3Jlci50dXJuUmVhZE9ubHkoKTtcclxuICAgIH1cclxuICAgIHR1cm5FZGl0YWJsZSgpIHtcclxuICAgICAgICB0aGlzLl9yZWFkT25seSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX3FpbkZvbGRlci50dXJuRWRpdGFibGUoKTtcclxuICAgICAgICB0aGlzLl9xaW5FeHRlbnNpb25zLnR1cm5FZGl0YWJsZSgpO1xyXG4gICAgICAgIHRoaXMuX3FpbkV4cGxvcmVyLnR1cm5FZGl0YWJsZSgpO1xyXG4gICAgfVxyXG4gICAgaXNFZGl0YWJsZSgpIHtcclxuICAgICAgICByZXR1cm4gIXRoaXMuX3JlYWRPbmx5O1xyXG4gICAgfVxyXG4gICAgZ2V0IHFpblVwcGVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5VcHBlcjtcclxuICAgIH1cclxuICAgIGdldCBxaW5Db25maXJtKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5Db25maXJtO1xyXG4gICAgfVxyXG4gICAgZ2V0IHFpbkZvbGRlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcWluRm9sZGVyO1xyXG4gICAgfVxyXG4gICAgZ2V0IHFpbkV4dGVuc2lvbnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpbkV4dGVuc2lvbnM7XHJcbiAgICB9XHJcbiAgICBnZXQgcWluU2VhcmNoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5TZWFyY2g7XHJcbiAgICB9XHJcbiAgICBnZXQgcWluVW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpblVuZGVyO1xyXG4gICAgfVxyXG4gICAgZ2V0IHFpbkV4cGxvcmVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5FeHBsb3JlcjtcclxuICAgIH1cclxuICAgIGdldCBuYXR1cmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX25hdHVyZTtcclxuICAgIH1cclxuICAgIHNldCBuYXR1cmUodmFsdWUpIHtcclxuICAgICAgICB0aGlzLl9uYXR1cmUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLl9xaW5FeHBsb3Jlci5uYXR1cmUgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIGdldCBvcGVyYXRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX29wZXJhdGlvbjtcclxuICAgIH1cclxuICAgIHNldCBvcGVyYXRpb24odmFsdWUpIHtcclxuICAgICAgICB0aGlzLl9vcGVyYXRpb24gPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIGdldCBkZXNjcmlwdG9ycygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRvcnM7XHJcbiAgICB9XHJcbiAgICBzZXQgZGVzY3JpcHRvcnModmFsdWUpIHtcclxuICAgICAgICB0aGlzLl9kZXNjcmlwdG9ycyA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgZ2V0IHNpbmdsZVNlbGVjdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2luZ2xlU2VsZWN0aW9uO1xyXG4gICAgfVxyXG4gICAgc2V0IHNpbmdsZVNlbGVjdGlvbih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX3NpbmdsZVNlbGVjdGlvbiA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuX3FpbkV4cGxvcmVyLnNpbmdsZVNlbGVjdGlvbiA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgbG9hZEZvbGRlcigpIHtcclxuICAgICAgICB0aGlzLl9xaW5FeHBsb3Jlci5sb2FkKHRoaXMuX3FpbkZvbGRlci52YWx1ZSwgKGxvYWRlZCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9xaW5Gb2xkZXIudmFsdWUgPSBsb2FkZWQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBhZGRDaG9zZW4oY2hvc2VuKSB7XHJcbiAgICAgICAgdGhpcy5fbGlzdGVuZXJzLnB1c2goY2hvc2VuKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlFpbkZpbGVQaWNrID0gUWluRmlsZVBpY2s7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1maWxlLXBpY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5GaWxlVmlldyA9IHZvaWQgMDtcclxuY29uc3QgcWlucGVsX3Jlc18xID0gcmVxdWlyZShcInFpbnBlbC1yZXNcIik7XHJcbmNvbnN0IHFpbl9lZGl0XzEgPSByZXF1aXJlKFwiLi9xaW4tZWRpdFwiKTtcclxuY29uc3QgcWluX3BhbmVsXzEgPSByZXF1aXJlKFwiLi9xaW4tcGFuZWxcIik7XHJcbmNsYXNzIFFpbkZpbGVWaWV3IGV4dGVuZHMgcWluX2VkaXRfMS5RaW5FZGl0IHtcclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMsIGlzUWluZHJlZCkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICBzdXBlcigoaXNRaW5kcmVkID8gaXNRaW5kcmVkICsgXCJfXCIgOiBcIlwiKSArIFwiZmlsZS12aWV3XCIsIG5ldyBxaW5fcGFuZWxfMS5RaW5QYW5lbCgpKTtcclxuICAgICAgICB0aGlzLl9mb2xkZXJBY3R1YWwgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuX2ZvbGRlclNlcnZlciA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5faXRlbXMgPSBbXTtcclxuICAgICAgICB0aGlzLl9yZWFkT25seSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX25hdHVyZSA9IChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMubmF0dXJlKSA/IG9wdGlvbnMubmF0dXJlIDogcWlucGVsX3Jlc18xLlFpbkZpbGVzTmF0dXJlLkJPVEg7XHJcbiAgICAgICAgdGhpcy5fZXh0ZW5zaW9ucyA9IChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZXh0ZW5zaW9ucykgPyBvcHRpb25zLmV4dGVuc2lvbnMgOiBbXTtcclxuICAgICAgICB0aGlzLl9zaW5nbGVTZWxlY3Rpb24gPSAoX2EgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuc2luZ2xlU2VsZWN0aW9uKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBmYWxzZTtcclxuICAgICAgICB0aGlzLmluaXRNYWluKCk7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5yZWFkT25seSkge1xyXG4gICAgICAgICAgICB0aGlzLnR1cm5SZWFkT25seSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGluaXRNYWluKCkge1xyXG4gICAgICAgIHRoaXMuc3R5bGUucHV0QXNFZGl0YWJsZSgpO1xyXG4gICAgICAgIHN0eWxlcy5hcHBseU9uTWFpbih0aGlzLnFpbmVkSFRNTCk7XHJcbiAgICAgICAgdGhpcy5xaW5lZEJhc2UuYWRkQWN0aW9uTWFpbigoXykgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX3JlYWRPbmx5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFuU2VsZWN0aW9uKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnFpbmVkQmFzZS5zdHlsZS5wdXRBc0Rpc2FibGVkU2VsZWN0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBjYXN0ZWRRaW5lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnFpbmVkQmFzZTtcclxuICAgIH1cclxuICAgIHN0eWxlZChzdHlsZXMpIHtcclxuICAgICAgICBzdXBlci5zdHlsZWQoc3R5bGVzKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGdldE5hdHVyZSgpIHtcclxuICAgICAgICByZXR1cm4gcWlucGVsX3Jlc18xLlFpbk5hdHVyZS5DSEFSUztcclxuICAgIH1cclxuICAgIGdldERhdGEoKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIHRoaXMuX2l0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaWYgKGl0ZW0uaXNTZWxlY3RlZCgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChxaW5wZWxfcmVzXzEuUWluU291bC5mb290LmdldFBhdGhKb2luKHRoaXMuX2ZvbGRlclNlcnZlciwgaXRlbS5nZXROYW1lKCkpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBzZXREYXRhKGRhdGEpIHtcclxuICAgICAgICB0aGlzLmNsZWFuKCk7XHJcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCBmb2xkZXJSb290ID0gcWlucGVsX3Jlc18xLlFpblNvdWwuZm9vdC5nZXRQYXJlbnQoZGF0YVswXSk7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZChmb2xkZXJSb290LCAoXykgPT4ge1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBpdGVtUGF0aCBvZiBkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW1Sb290ID0gcWlucGVsX3Jlc18xLlFpblNvdWwuZm9vdC5nZXRQYXJlbnQoaXRlbVBhdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtTmFtZSA9IHFpbnBlbF9yZXNfMS5RaW5Tb3VsLmZvb3QuZ2V0U3RlbShpdGVtUGF0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW1Sb290ICE9PSBmb2xkZXJSb290KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucWlucGVsLmpvYmJlZC5zdGF0dXNFcnJvcihgVGhlIGl0ZW0gJyR7aXRlbVBhdGh9JyBpcyBub3Qgb24gdGhlIHJvb3QgJyR7Zm9sZGVyUm9vdH0nLmAsIFwie3FpbnBlbC1jcHN9KEVyckNvZGUtMDAwMDAxKVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5zZWxlY3QoaXRlbU5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnFpbnBlbC5qb2JiZWQuc3RhdHVzRXJyb3IoYERvZXMgbm90IGhhdmUgdGhlIGl0ZW0gJyR7aXRlbU5hbWV9JyBvbiB0aGUgZm9sZGVyICcke2ZvbGRlclJvb3R9J2AsIFwie3FpbnBlbC1jcHN9KEVyckNvZGUtMDAwMDAyKVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbWF5Q2hhbmdlKCkge1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuICAgIHR1cm5SZWFkT25seSgpIHtcclxuICAgICAgICB0aGlzLl9yZWFkT25seSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zdHlsZS5wdXRBc1JlYWRPbmx5KCk7XHJcbiAgICB9XHJcbiAgICB0dXJuRWRpdGFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5fcmVhZE9ubHkgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnN0eWxlLnB1dEFzRWRpdGFibGUoKTtcclxuICAgIH1cclxuICAgIGlzRWRpdGFibGUoKSB7XHJcbiAgICAgICAgcmV0dXJuICF0aGlzLl9yZWFkT25seTtcclxuICAgIH1cclxuICAgIGdldCBuYXR1cmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX25hdHVyZTtcclxuICAgIH1cclxuICAgIHNldCBuYXR1cmUodmFsdWUpIHtcclxuICAgICAgICB0aGlzLl9uYXR1cmUgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIGdldCBleHRlbnNpb25zKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9leHRlbnNpb25zO1xyXG4gICAgfVxyXG4gICAgc2V0IGV4dGVuc2lvbnModmFsdWUpIHtcclxuICAgICAgICB0aGlzLl9leHRlbnNpb25zID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBnZXQgc2luZ2xlU2VsZWN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zaW5nbGVTZWxlY3Rpb247XHJcbiAgICB9XHJcbiAgICBzZXQgc2luZ2xlU2VsZWN0aW9uKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5fc2luZ2xlU2VsZWN0aW9uID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTaW5nbGVTZWxlY3Rpb24oKTtcclxuICAgIH1cclxuICAgIGdldCBmb2xkZXJBY3R1YWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZvbGRlckFjdHVhbDtcclxuICAgIH1cclxuICAgIGdldCBmb2xkZXJTZXJ2ZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZvbGRlclNlcnZlcjtcclxuICAgIH1cclxuICAgIHVwZGF0ZVNpbmdsZVNlbGVjdGlvbigpIHtcclxuICAgICAgICBpZiAodGhpcy5fc2luZ2xlU2VsZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGxldCBhbHJlYWR5SGFzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLl9pdGVtcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uaXNTZWxlY3RlZCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFscmVhZHlIYXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS51bnNlbGVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxyZWFkeUhhcyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbG9hZChmb2xkZXIsIG9uTG9hZCkge1xyXG4gICAgICAgIHRoaXMuY2xlYW4oKTtcclxuICAgICAgICB0aGlzLnFpbnBlbC50YWxrXHJcbiAgICAgICAgICAgIC5wb3N0KFwiL2Rpci9saXN0XCIsIHsgcGF0aDogZm9sZGVyIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fZm9sZGVyQWN0dWFsID0gZm9sZGVyO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBsaW5lIG9mIHFpbnBlbF9yZXNfMS5RaW5Tb3VsLmJvZHkuZ2V0VGV4dExpbmVzKHJlcy5kYXRhKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGxpbmVWYWx1ZSA9IGxpbmUuc3Vic3RyaW5nKDMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFsaW5lVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChsaW5lLnN0YXJ0c1dpdGgoXCJQOiBcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9mb2xkZXJTZXJ2ZXIgPSBsaW5lVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9uTG9hZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkxvYWQobGluZVZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChsaW5lLnN0YXJ0c1dpdGgoXCJEOiBcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fbmF0dXJlID09IHFpbnBlbF9yZXNfMS5RaW5GaWxlc05hdHVyZS5CT1RIIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX25hdHVyZSA9PSBxaW5wZWxfcmVzXzEuUWluRmlsZXNOYXR1cmUuRElSRUNUT1JJRVMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXdEaXIobGluZVZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChsaW5lLnN0YXJ0c1dpdGgoXCJGOiBcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fbmF0dXJlID09IHFpbnBlbF9yZXNfMS5RaW5GaWxlc05hdHVyZS5CT1RIIHx8IHRoaXMuX25hdHVyZSA9PSBxaW5wZWxfcmVzXzEuUWluRmlsZXNOYXR1cmUuRklMRVMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGV4dGVuc2lvbiA9IHFpbnBlbF9yZXNfMS5RaW5Tb3VsLmZvb3QuZ2V0RmlsZUV4dGVuc2lvbihsaW5lVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGFzc2VkRXh0ZW5zaW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2V4dGVuc2lvbnMgJiYgdGhpcy5fZXh0ZW5zaW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXNzZWRFeHRlbnNpb24gPSB0aGlzLl9leHRlbnNpb25zLmluZGV4T2YoZXh0ZW5zaW9uKSA+IC0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXNzZWRFeHRlbnNpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmV3RmlsZShsaW5lVmFsdWUsIGV4dGVuc2lvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnFpbnBlbC5qb2JiZWQuc3RhdHVzRXJyb3IoZXJyLCBcIntxaW5wZWwtY3BzfShFcnJDb2RlLTAwMDAwMylcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZWxvYWQob25Mb2FkKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkKHRoaXMuX2ZvbGRlclNlcnZlciwgb25Mb2FkKTtcclxuICAgIH1cclxuICAgIGdvRm9sZGVyVXAob25Mb2FkKSB7XHJcbiAgICAgICAgbGV0IHBhcmVudCA9IHFpbnBlbF9yZXNfMS5RaW5Gb290LmdldFBhcmVudCh0aGlzLl9mb2xkZXJTZXJ2ZXIpO1xyXG4gICAgICAgIGlmIChwYXJlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkKHBhcmVudCwgb25Mb2FkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjbGVhbigpIHtcclxuICAgICAgICB0aGlzLnFpbmVkSFRNTC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuX2l0ZW1zID0gW107XHJcbiAgICAgICAgdGhpcy5fZm9sZGVyQWN0dWFsID0gXCJcIjtcclxuICAgICAgICB0aGlzLl9mb2xkZXJTZXJ2ZXIgPSBcIlwiO1xyXG4gICAgfVxyXG4gICAgY2xlYW5TZWxlY3Rpb24oKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMuX2l0ZW1zKSB7XHJcbiAgICAgICAgICAgIGl0ZW0udW5zZWxlY3QoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZWxlY3QoaXRlbU5hbWUpIHtcclxuICAgICAgICBsZXQgaXRlbSA9IHRoaXMuX2l0ZW1zLmZpbmQoKGluc2lkZSkgPT4gaW5zaWRlLmdldE5hbWUoKSA9PSBpdGVtTmFtZSk7XHJcbiAgICAgICAgaWYgKGl0ZW0pIHtcclxuICAgICAgICAgICAgaXRlbS5zZWxlY3QoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdW5zZWxlY3QoaXRlbU5hbWUpIHtcclxuICAgICAgICBsZXQgaXRlbSA9IHRoaXMuX2l0ZW1zLmZpbmQoKGluc2lkZSkgPT4gaW5zaWRlLmdldE5hbWUoKSA9PSBpdGVtTmFtZSk7XHJcbiAgICAgICAgaWYgKGl0ZW0pIHtcclxuICAgICAgICAgICAgaXRlbS51bnNlbGVjdCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBuZXdEaXIobmFtZSkge1xyXG4gICAgICAgIHRoaXMubmV3SXRlbShuYW1lLCBcImV4cGxvcmVyLWRpci5wbmdcIik7XHJcbiAgICB9XHJcbiAgICBuZXdGaWxlKG5hbWUsIGV4dGVuc2lvbikge1xyXG4gICAgICAgIHRoaXMubmV3SXRlbShuYW1lLCBnZXRJY29uTmFtZShleHRlbnNpb24pKTtcclxuICAgIH1cclxuICAgIG5ld0l0ZW0obmFtZSwgaWNvbikge1xyXG4gICAgICAgIGNvbnN0IGl0ZW0gPSBuZXcgSXRlbSh0aGlzLCBuYW1lLCBpY29uKTtcclxuICAgICAgICBpdGVtLmluc3RhbGwodGhpcy5xaW5lZEhUTUwpO1xyXG4gICAgICAgIHRoaXMuX2l0ZW1zLnB1c2goaXRlbSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5RaW5GaWxlVmlldyA9IFFpbkZpbGVWaWV3O1xyXG5jbGFzcyBJdGVtIHtcclxuICAgIGNvbnN0cnVjdG9yKGRhZCwgZmlsZU5hbWUsIGljb25OYW1lKSB7XHJcbiAgICAgICAgdGhpcy5fZGl2SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGhpcy5fZGl2Qm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGhpcy5fc3Bhbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICB0aGlzLl9pbWdJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICB0aGlzLl9zcGFuVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIHRoaXMuX3NlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fZGFkID0gZGFkO1xyXG4gICAgICAgIHRoaXMuX2ZpbGVOYW1lID0gZmlsZU5hbWU7XHJcbiAgICAgICAgdGhpcy5faWNvbk5hbWUgPSBpY29uTmFtZTtcclxuICAgICAgICB0aGlzLmluaXRJdGVtKCk7XHJcbiAgICB9XHJcbiAgICBpbml0SXRlbSgpIHtcclxuICAgICAgICBzdHlsZXMuYXBwbHlPbkRpdkl0ZW0odGhpcy5fZGl2SXRlbSk7XHJcbiAgICAgICAgdGhpcy5fZGl2SXRlbS50YWJJbmRleCA9IDA7XHJcbiAgICAgICAgc3R5bGVzLmFwcGx5T25EaXZCb2R5KHRoaXMuX2RpdkJvZHkpO1xyXG4gICAgICAgIHRoaXMuX2Rpdkl0ZW0uYXBwZW5kQ2hpbGQodGhpcy5fZGl2Qm9keSk7XHJcbiAgICAgICAgc3R5bGVzLmFwcGx5T25TcGFuSWNvbih0aGlzLl9zcGFuSWNvbik7XHJcbiAgICAgICAgdGhpcy5fZGl2Qm9keS5hcHBlbmRDaGlsZCh0aGlzLl9zcGFuSWNvbik7XHJcbiAgICAgICAgdGhpcy5faW1nSWNvbi5zcmMgPSBcIi9hcHAvcWlucGVsLWFwcC9hc3NldHMvXCIgKyB0aGlzLl9pY29uTmFtZTtcclxuICAgICAgICB0aGlzLl9zcGFuSWNvbi5hcHBlbmRDaGlsZCh0aGlzLl9pbWdJY29uKTtcclxuICAgICAgICB0aGlzLl9zcGFuVGV4dC5pbm5lclRleHQgPSB0aGlzLl9maWxlTmFtZTtcclxuICAgICAgICBzdHlsZXMuYXBwbHlPblNwYW5UZXh0KHRoaXMuX3NwYW5UZXh0KTtcclxuICAgICAgICB0aGlzLl9kaXZCb2R5LmFwcGVuZENoaWxkKHRoaXMuX3NwYW5UZXh0KTtcclxuICAgICAgICBxaW5wZWxfcmVzXzEuUWluU291bC5hcm1zLmFkZEFjdGlvbk1haW4odGhpcy5fZGl2SXRlbSwgKHFpbkV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9kYWQuaXNFZGl0YWJsZSgpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kaXZJdGVtLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpbnN0YWxsKG9uKSB7XHJcbiAgICAgICAgb24uYXBwZW5kQ2hpbGQodGhpcy5fZGl2SXRlbSk7XHJcbiAgICB9XHJcbiAgICBzZWxlY3QoKSB7XHJcbiAgICAgICAgc3R5bGVzLmFwcGx5T25EaXZTZWxlY3QodGhpcy5fZGl2SXRlbSk7XHJcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgdW5zZWxlY3QoKSB7XHJcbiAgICAgICAgc3R5bGVzLmFwcGx5T25EaXZVblNlbGVjdCh0aGlzLl9kaXZJdGVtKTtcclxuICAgICAgICB0aGlzLl9zZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgdG9nZ2xlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zZWxlY3RlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnVuc2VsZWN0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fZGFkLnNpbmdsZVNlbGVjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZGFkLmNsZWFuU2VsZWN0aW9uKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zZWxlY3QoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXROYW1lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9maWxlTmFtZTtcclxuICAgIH1cclxuICAgIGlzU2VsZWN0ZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGdldEljb25OYW1lKGZyb21FeHRlbnNpb24pIHtcclxuICAgIGxldCByZXN1bHQgPSBcImV4cGxvcmVyLWZpbGUucG5nXCI7XHJcbiAgICBpZiAocWlucGVsX3Jlc18xLlFpblNvdWwuZm9vdC5pc0ZpbGVBcHAoZnJvbUV4dGVuc2lvbikpIHtcclxuICAgICAgICByZXN1bHQgPSBcImV4cGxvcmVyLWFwcHMucG5nXCI7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChxaW5wZWxfcmVzXzEuUWluU291bC5mb290LmlzRmlsZUNtZChmcm9tRXh0ZW5zaW9uKSkge1xyXG4gICAgICAgIHJlc3VsdCA9IFwiZXhwbG9yZXItY21kcy5wbmdcIjtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHFpbnBlbF9yZXNfMS5RaW5Tb3VsLmZvb3QuaXNGaWxlRXhlYyhmcm9tRXh0ZW5zaW9uKSkge1xyXG4gICAgICAgIHJlc3VsdCA9IFwiZXhwbG9yZXItZXhlYy5wbmdcIjtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHFpbnBlbF9yZXNfMS5RaW5Tb3VsLmZvb3QuaXNGaWxlSW1hZ2UoZnJvbUV4dGVuc2lvbikpIHtcclxuICAgICAgICByZXN1bHQgPSBcImV4cGxvcmVyLWltYWdlLnBuZ1wiO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocWlucGVsX3Jlc18xLlFpblNvdWwuZm9vdC5pc0ZpbGVWZWN0b3IoZnJvbUV4dGVuc2lvbikpIHtcclxuICAgICAgICByZXN1bHQgPSBcImV4cGxvcmVyLWltYWdlLnBuZ1wiO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocWlucGVsX3Jlc18xLlFpblNvdWwuZm9vdC5pc0ZpbGVNdXNpYyhmcm9tRXh0ZW5zaW9uKSkge1xyXG4gICAgICAgIHJlc3VsdCA9IFwiZXhwbG9yZXItbXVzaWMucG5nXCI7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChxaW5wZWxfcmVzXzEuUWluU291bC5mb290LmlzRmlsZU1vdmllKGZyb21FeHRlbnNpb24pKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gXCJleHBsb3Jlci1tb3ZpZS5wbmdcIjtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHFpbnBlbF9yZXNfMS5RaW5Tb3VsLmZvb3QuaXNGaWxlWmlwcGVkKGZyb21FeHRlbnNpb24pKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gXCJleHBsb3Jlci16aXBwZWQucG5nXCI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICAgIGFwcGx5T25NYWluOiAoZWwpID0+IHtcclxuICAgICAgICBlbC5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiO1xyXG4gICAgICAgIGVsLnN0eWxlLm1pbldpZHRoID0gXCIxNjBweFwiO1xyXG4gICAgICAgIGVsLnN0eWxlLm1pbkhlaWdodCA9IFwiMTYwcHhcIjtcclxuICAgICAgICBlbC50YWJJbmRleCA9IDA7XHJcbiAgICB9LFxyXG4gICAgYXBwbHlPbkRpdkl0ZW06IChlbCkgPT4ge1xyXG4gICAgICAgIGVsLnN0eWxlLm1hcmdpbiA9IFwiMnB4XCI7XHJcbiAgICAgICAgZWwuc3R5bGUucGFkZGluZyA9IFwiOXB4XCI7XHJcbiAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgICAgICAgZWwuc3R5bGUub3V0bGluZSA9IFwibm9uZVwiO1xyXG4gICAgICAgIGVsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2ZmZmZmZlwiO1xyXG4gICAgICAgIGVsLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICMzNjAwNDVcIjtcclxuICAgICAgICBlbC5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjNweFwiO1xyXG4gICAgICAgIGVsLnN0eWxlLmNvbG9yID0gXCIjMjcwMDM2XCI7XHJcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsICgpID0+IHtcclxuICAgICAgICAgICAgZWwuc3R5bGUub3V0bGluZSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICBlbC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjYWUwMDAwXCI7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsICgpID0+IHtcclxuICAgICAgICAgICAgZWwuc3R5bGUub3V0bGluZSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICBlbC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjMzYwMDQ1XCI7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgYXBwbHlPbkRpdkJvZHk6IChlbCkgPT4ge1xyXG4gICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICBlbC5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJjb2x1bW5cIjtcclxuICAgICAgICBlbC5zdHlsZS53aWR0aCA9IFwiOTZweFwiO1xyXG4gICAgfSxcclxuICAgIGFwcGx5T25TcGFuSWNvbjogKGVsKSA9PiB7XHJcbiAgICAgICAgZWwuc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICAgIH0sXHJcbiAgICBhcHBseU9uU3BhblRleHQ6IChlbCkgPT4ge1xyXG4gICAgICAgIGVsLnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgICAgICAgZWwuc3R5bGUud29yZFdyYXAgPSBcImJyZWFrLXdvcmRcIjtcclxuICAgIH0sXHJcbiAgICBhcHBseU9uRGl2U2VsZWN0OiAoZWwpID0+IHtcclxuICAgICAgICBlbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNmYWVmZmZcIjtcclxuICAgIH0sXHJcbiAgICBhcHBseU9uRGl2VW5TZWxlY3Q6IChlbCkgPT4ge1xyXG4gICAgICAgIGVsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2ZmZmZmZlwiO1xyXG4gICAgfSxcclxufTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWZpbGUtdmlldy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlFpbkljb25DZWxsID0gdm9pZCAwO1xyXG5jb25zdCBxaW5wZWxfcmVzXzEgPSByZXF1aXJlKFwicWlucGVsLXJlc1wiKTtcclxuY29uc3QgcWluX3BhbmVsXzEgPSByZXF1aXJlKFwiLi9xaW4tcGFuZWxcIik7XHJcbmNsYXNzIFFpbkljb25DZWxsIGV4dGVuZHMgcWluX3BhbmVsXzEuUWluUGFuZWwge1xyXG4gICAgY29uc3RydWN0b3IoaWNvbiwgaXNRaW5kcmVkKSB7XHJcbiAgICAgICAgc3VwZXIobnVsbCwgKGlzUWluZHJlZCA/IGlzUWluZHJlZCArIFwiX1wiIDogXCJcIikgKyBcImljb24tY2VsbFwiKTtcclxuICAgICAgICB0aGlzLl9zZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBib3JkZXIgPSBNYXRoLnJvdW5kKGljb24uc2l6ZS53aWR0aCAvIDEwKTtcclxuICAgICAgICBsZXQgcGFkZGluZyA9IGJvcmRlciAqIDI7XHJcbiAgICAgICAgdGhpcy5zdHlsZS5wdXRBc0JvcmRlclJhZGl1cyhib3JkZXIpO1xyXG4gICAgICAgIHRoaXMuc3R5bGUucHV0QXNQYWRkaW5nKHBhZGRpbmcpO1xyXG4gICAgICAgIHRoaXMuX3Fpbkljb24gPSBpY29uO1xyXG4gICAgICAgIHRoaXMuX3Fpbkljb24uaW5zdGFsbCh0aGlzKTtcclxuICAgIH1cclxuICAgIHN0eWxlZChzdHlsZXMpIHtcclxuICAgICAgICBzdXBlci5zdHlsZWQoc3R5bGVzKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGdldCBxaW5JY29uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5JY29uO1xyXG4gICAgfVxyXG4gICAgZ2V0IHNlbGVjdGVkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZDtcclxuICAgIH1cclxuICAgIHNldCBzZWxlY3RlZCh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX3NlbGVjdGVkID0gdmFsdWU7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMucWluZWRIVE1MLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHFpbnBlbF9yZXNfMS5RaW5Ta2luLnN0eWxlcy5Db2xvclNlbGVjdGVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5xaW5lZEhUTUwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJpbml0aWFsXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0IGFzc2V0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5JY29uLmFzc2V0O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUWluSWNvbkNlbGwgPSBRaW5JY29uQ2VsbDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWljb24tY2VsbC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlFpbkljb25QaWNrID0gdm9pZCAwO1xyXG5jb25zdCBxaW5wZWxfcmVzXzEgPSByZXF1aXJlKFwicWlucGVsLXJlc1wiKTtcclxuY29uc3QgcWluX2VkaXRfMSA9IHJlcXVpcmUoXCIuL3Fpbi1lZGl0XCIpO1xyXG5jb25zdCBxaW5faWNvbl9jZWxsXzEgPSByZXF1aXJlKFwiLi9xaW4taWNvbi1jZWxsXCIpO1xyXG5jb25zdCBxaW5fbGluZV8xID0gcmVxdWlyZShcIi4vcWluLWxpbmVcIik7XHJcbmNsYXNzIFFpbkljb25QaWNrIGV4dGVuZHMgcWluX2VkaXRfMS5RaW5FZGl0IHtcclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMsIGlzUWluZHJlZCkge1xyXG4gICAgICAgIHN1cGVyKChpc1FpbmRyZWQgPyBpc1FpbmRyZWQgKyBcIl9cIiA6IFwiXCIpICsgXCJpY29uLXBpY2tcIiwgbmV3IHFpbl9saW5lXzEuUWluTGluZSgpKTtcclxuICAgICAgICB0aGlzLl9yZWFkT25seSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc3R5bGUucHV0QXNFZGl0YWJsZSgpO1xyXG4gICAgICAgIGlmIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuaW5pdGlhbCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmluaXRpYWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmljb25zKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgaWNvbiBvZiBvcHRpb25zLmljb25zKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEljb24oaWNvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5jZWxscykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNlbGwgb2Ygb3B0aW9ucy5jZWxscykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRDZWxsKGNlbGwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMucmVhZE9ubHkpIHtcclxuICAgICAgICAgICAgdGhpcy50dXJuUmVhZE9ubHkoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXN0ZWRRaW5lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnFpbmVkQmFzZTtcclxuICAgIH1cclxuICAgIHN0eWxlZChzdHlsZXMpIHtcclxuICAgICAgICBzdXBlci5zdHlsZWQoc3R5bGVzKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGdldE5hdHVyZSgpIHtcclxuICAgICAgICByZXR1cm4gcWlucGVsX3Jlc18xLlFpbk5hdHVyZS5DSEFSUztcclxuICAgIH1cclxuICAgIGdldERhdGEoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgdGhpcy5jaGlsZHJlbigpKSB7XHJcbiAgICAgICAgICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIHFpbl9pY29uX2NlbGxfMS5RaW5JY29uQ2VsbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLnNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkLnFpbkljb24uYXNzZXQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBzZXREYXRhKGFzc2V0KSB7XHJcbiAgICAgICAgbGV0IGZvdW5kID0gZmFsc2U7XHJcbiAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgdGhpcy5xaW5lZEJhc2UuY2hpbGRyZW4oKSkge1xyXG4gICAgICAgICAgICBpZiAoY2hpbGQgaW5zdGFuY2VvZiBxaW5faWNvbl9jZWxsXzEuUWluSWNvbkNlbGwpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjaGlsZC5xaW5JY29uLmFzc2V0ID09IGFzc2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBtYXlDaGFuZ2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG4gICAgdHVyblJlYWRPbmx5KCkge1xyXG4gICAgICAgIHRoaXMuX3JlYWRPbmx5ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnN0eWxlLnB1dEFzUmVhZE9ubHkoKTtcclxuICAgIH1cclxuICAgIHR1cm5FZGl0YWJsZSgpIHtcclxuICAgICAgICB0aGlzLl9yZWFkT25seSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc3R5bGUucHV0QXNFZGl0YWJsZSgpO1xyXG4gICAgfVxyXG4gICAgaXNFZGl0YWJsZSgpIHtcclxuICAgICAgICByZXR1cm4gIXRoaXMuX3JlYWRPbmx5O1xyXG4gICAgfVxyXG4gICAgYWRkSWNvbihpY29uKSB7XHJcbiAgICAgICAgdGhpcy5hZGRDZWxsKG5ldyBxaW5faWNvbl9jZWxsXzEuUWluSWNvbkNlbGwoaWNvbikpO1xyXG4gICAgfVxyXG4gICAgYWRkQ2VsbChjZWxsKSB7XHJcbiAgICAgICAgY2VsbC5hZGRBY3Rpb25NYWluKChfKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzRWRpdGFibGUoKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKGNlbGwuYXNzZXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY2VsbC5pbnN0YWxsKHRoaXMucWluZWRCYXNlKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlFpbkljb25QaWNrID0gUWluSWNvblBpY2s7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1pY29uLXBpY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5JY29uID0gdm9pZCAwO1xyXG5jb25zdCBxaW5wZWxfcmVzXzEgPSByZXF1aXJlKFwicWlucGVsLXJlc1wiKTtcclxuY29uc3QgcWluX2Fzc2V0c18xID0gcmVxdWlyZShcIi4vcWluLWFzc2V0c1wiKTtcclxuY29uc3QgcWluX2Jhc2VfMSA9IHJlcXVpcmUoXCIuL3Fpbi1iYXNlXCIpO1xyXG5jbGFzcyBRaW5JY29uIGV4dGVuZHMgcWluX2Jhc2VfMS5RaW5CYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKGFzc2V0LCBzaXplID0gcWlucGVsX3Jlc18xLlFpbkdyYW5kZXVyLlNNQUxMLCBpc1FpbmRyZWQpIHtcclxuICAgICAgICBzdXBlcigoaXNRaW5kcmVkID8gaXNRaW5kcmVkICsgXCJfXCIgOiBcIlwiKSArIFwiaWNvblwiLCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpKTtcclxuICAgICAgICB0aGlzLmNhc3RlZFFpbmUoKS5zcmMgPSAoMCwgcWluX2Fzc2V0c18xLnFpbkFzc2V0VXJsKShhc3NldCk7XHJcbiAgICAgICAgcWlucGVsX3Jlc18xLlFpblNraW4uc3R5bGVTaXplKHRoaXMucWluZWRIVE1MLCBzaXplKTtcclxuICAgIH1cclxuICAgIGNhc3RlZFFpbmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucWluZWRIVE1MO1xyXG4gICAgfVxyXG4gICAgc3R5bGVkKHN0eWxlcykge1xyXG4gICAgICAgIHN1cGVyLnN0eWxlZChzdHlsZXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgZ2V0IGFzc2V0KCkge1xyXG4gICAgICAgIHJldHVybiAoMCwgcWluX2Fzc2V0c18xLnFpblVybEFzc2V0KSh0aGlzLmNhc3RlZFFpbmUoKS5zcmMpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFzc2V0KGFzc2V0KSB7XHJcbiAgICAgICAgdGhpcy5jYXN0ZWRRaW5lKCkuc3JjID0gKDAsIHFpbl9hc3NldHNfMS5xaW5Bc3NldFVybCkoYXNzZXQpO1xyXG4gICAgfVxyXG4gICAgZ2V0IHNpemUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHFpbnBlbF9yZXNfMS5RaW5Ta2luLmdldERpbWVuc2lvbih0aGlzLnFpbmVkSFRNTCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5RaW5JY29uID0gUWluSWNvbjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWljb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5JbnRlZ2VyID0gdm9pZCAwO1xyXG5jb25zdCBxaW5wZWxfcmVzXzEgPSByZXF1aXJlKFwicWlucGVsLXJlc1wiKTtcclxuY29uc3QgcWluX2VkaXRfMSA9IHJlcXVpcmUoXCIuL3Fpbi1lZGl0XCIpO1xyXG5jbGFzcyBRaW5JbnRlZ2VyIGV4dGVuZHMgcWluX2VkaXRfMS5RaW5FZGl0IHtcclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMsIGlzUWluZHJlZCkge1xyXG4gICAgICAgIHN1cGVyKChpc1FpbmRyZWQgPyBpc1FpbmRyZWQgKyBcIl9cIiA6IFwiXCIpICsgXCJpbnRlZ2VyXCIsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSk7XHJcbiAgICAgICAgdGhpcy5jYXN0ZWRRaW5lKCkudHlwZSA9IFwibnVtYmVyXCI7XHJcbiAgICAgICAgcWlucGVsX3Jlc18xLlFpblNraW4uc3R5bGVBc0VkaXRhYmxlKHRoaXMucWluZWRIVE1MKTtcclxuICAgICAgICB0aGlzLnFpbmVkSFRNTC5zdHlsZS53aWR0aCA9IFwiMTIwcHhcIjtcclxuICAgICAgICB0aGlzLnFpbmVkSFRNTC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEodGhpcy5nZXREYXRhKCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuaW5pdGlhbCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEob3B0aW9ucy5pbml0aWFsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5yZWFkT25seSkge1xyXG4gICAgICAgICAgICB0aGlzLnR1cm5SZWFkT25seSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhc3RlZFFpbmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucWluZWRIVE1MO1xyXG4gICAgfVxyXG4gICAgc3R5bGVkKHN0eWxlcykge1xyXG4gICAgICAgIHN1cGVyLnN0eWxlZChzdHlsZXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgZ2V0TmF0dXJlKCkge1xyXG4gICAgICAgIHJldHVybiBxaW5wZWxfcmVzXzEuUWluTmF0dXJlLklOVDtcclxuICAgIH1cclxuICAgIGdldERhdGEoKSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmNhc3RlZFFpbmUoKS52YWx1ZTtcclxuICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCB8fCB2YWx1ZSA9PSB1bmRlZmluZWQgfHwgdmFsdWUubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZXREYXRhKGRhdGEpIHtcclxuICAgICAgICBpZiAoZGF0YSA9PSBudWxsIHx8IGRhdGEgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FzdGVkUWluZSgpLnZhbHVlID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FzdGVkUWluZSgpLnZhbHVlID0gZGF0YS50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG1heUNoYW5nZSgpIHtcclxuICAgICAgICByZXR1cm4gW3RoaXMuY2FzdGVkUWluZSgpXTtcclxuICAgIH1cclxuICAgIHR1cm5SZWFkT25seSgpIHtcclxuICAgICAgICB0aGlzLmNhc3RlZFFpbmUoKS5yZWFkT25seSA9IHRydWU7XHJcbiAgICAgICAgcWlucGVsX3Jlc18xLlFpblNraW4uc3R5bGVBc1JlYWRPbmx5KHRoaXMucWluZWRIVE1MKTtcclxuICAgIH1cclxuICAgIHR1cm5FZGl0YWJsZSgpIHtcclxuICAgICAgICB0aGlzLmNhc3RlZFFpbmUoKS5yZWFkT25seSA9IGZhbHNlO1xyXG4gICAgICAgIHFpbnBlbF9yZXNfMS5RaW5Ta2luLnN0eWxlQXNFZGl0YWJsZSh0aGlzLnFpbmVkSFRNTCk7XHJcbiAgICB9XHJcbiAgICBpc0VkaXRhYmxlKCkge1xyXG4gICAgICAgIHJldHVybiAhdGhpcy5jYXN0ZWRRaW5lKCkucmVhZE9ubHk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5RaW5JbnRlZ2VyID0gUWluSW50ZWdlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWludGVnZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5MYWJlbCA9IHZvaWQgMDtcclxuY29uc3QgcWluX2Jhc2VfMSA9IHJlcXVpcmUoXCIuL3Fpbi1iYXNlXCIpO1xyXG5jbGFzcyBRaW5MYWJlbCBleHRlbmRzIHFpbl9iYXNlXzEuUWluQmFzZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgaXNRaW5kcmVkKSB7XHJcbiAgICAgICAgc3VwZXIoKGlzUWluZHJlZCA/IGlzUWluZHJlZCArIFwiX1wiIDogXCJcIikgKyBcImxhYmVsXCIsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKSk7XHJcbiAgICAgICAgaWYgKHRpdGxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucWluZWRIVE1MLnRleHRDb250ZW50ID0gdGl0bGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2FzdGVkUWluZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5xaW5lZEhUTUw7XHJcbiAgICB9XHJcbiAgICBzdHlsZWQoc3R5bGVzKSB7XHJcbiAgICAgICAgc3VwZXIuc3R5bGVkKHN0eWxlcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBnZXQgdGl0bGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucWluZWRIVE1MLnRleHRDb250ZW50O1xyXG4gICAgfVxyXG4gICAgc2V0IHRpdGxlKHRpdGxlKSB7XHJcbiAgICAgICAgdGhpcy5xaW5lZEhUTUwudGV4dENvbnRlbnQgPSB0aXRsZTtcclxuICAgIH1cclxuICAgIGdldCBsaW5rKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnFpbmVkSFRNTC5nZXRBdHRyaWJ1dGUoXCJmb3JcIik7XHJcbiAgICB9XHJcbiAgICBzZXQgbGluayhuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5xaW5lZEhUTUwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIG5hbWUpO1xyXG4gICAgfVxyXG4gICAgcWluTGluayhxaW5Db21wKSB7XHJcbiAgICAgICAgdGhpcy5saW5rID0gcWluQ29tcC5tdXN0SWQoKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlFpbkxhYmVsID0gUWluTGFiZWw7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1sYWJlbC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlFpbkxpbmUgPSB2b2lkIDA7XHJcbmNvbnN0IHFpbl9wYW5lbF8xID0gcmVxdWlyZShcIi4vcWluLXBhbmVsXCIpO1xyXG5jbGFzcyBRaW5MaW5lIGV4dGVuZHMgcWluX3BhbmVsXzEuUWluUGFuZWwge1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucywgaXNRaW5kcmVkKSB7XHJcbiAgICAgICAgc3VwZXIob3B0aW9ucywgKGlzUWluZHJlZCA/IGlzUWluZHJlZCArIFwiX1wiIDogXCJcIikgKyBcImxpbmVcIik7XHJcbiAgICAgICAgdGhpcy5zdHlsZS5wdXRBc0ZsZXhEaXJlY3Rpb25Sb3coKTtcclxuICAgICAgICB0aGlzLnN0eWxlLnB1dEFzRmxleFdyYXAoKTtcclxuICAgICAgICB0aGlzLnFpbmVkSFRNTC5zdHlsZS5taW5XaWR0aCA9IFwibWluLWNvbnRlbnRcIjtcclxuICAgICAgICB0aGlzLnFpbmVkSFRNTC5zdHlsZS5taW5IZWlnaHQgPSBcIm1pbi1jb250ZW50XCI7XHJcbiAgICB9XHJcbiAgICBzdHlsZWQoc3R5bGVzKSB7XHJcbiAgICAgICAgc3VwZXIuc3R5bGVkKHN0eWxlcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBwdXQoaXRlbSkge1xyXG4gICAgICAgIGl0ZW0uaW5zdGFsbCh0aGlzKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlFpbkxpbmUgPSBRaW5MaW5lO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tbGluZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlFpbk11dGFudHNBcm0gPSBleHBvcnRzLlFpbk11dGFudHMgPSB2b2lkIDA7XHJcbmNvbnN0IHFpbl9ib29sZWFuXzEgPSByZXF1aXJlKFwiLi9xaW4tYm9vbGVhblwiKTtcclxuY29uc3QgcWluX2NvbWJvXzEgPSByZXF1aXJlKFwiLi9xaW4tY29tYm9cIik7XHJcbmNvbnN0IHFpbl9maWxlX3BhdGhfMSA9IHJlcXVpcmUoXCIuL3Fpbi1maWxlLXBhdGhcIik7XHJcbmNvbnN0IHFpbl9maWxlX3BpY2tfMSA9IHJlcXVpcmUoXCIuL3Fpbi1maWxlLXBpY2tcIik7XHJcbmNvbnN0IHFpbl9maWxlX3ZpZXdfMSA9IHJlcXVpcmUoXCIuL3Fpbi1maWxlLXZpZXdcIik7XHJcbmNvbnN0IHFpbl9pY29uX3BpY2tfMSA9IHJlcXVpcmUoXCIuL3Fpbi1pY29uLXBpY2tcIik7XHJcbmNvbnN0IHFpbl9pbnRlZ2VyXzEgPSByZXF1aXJlKFwiLi9xaW4taW50ZWdlclwiKTtcclxuY29uc3QgcWluX3N0cmluZ18xID0gcmVxdWlyZShcIi4vcWluLXN0cmluZ1wiKTtcclxuY29uc3QgcWluX3Rvb2xfMSA9IHJlcXVpcmUoXCIuL3Fpbi10b29sXCIpO1xyXG52YXIgUWluTXV0YW50cztcclxuKGZ1bmN0aW9uIChRaW5NdXRhbnRzKSB7XHJcbiAgICBRaW5NdXRhbnRzW1wiQk9PTEVBTlwiXSA9IFwiYm9vbGVhblwiO1xyXG4gICAgUWluTXV0YW50c1tcIklOVEVHRVJcIl0gPSBcImludGVnZXJcIjtcclxuICAgIFFpbk11dGFudHNbXCJTVFJJTkdcIl0gPSBcInN0cmluZ1wiO1xyXG4gICAgUWluTXV0YW50c1tcIkNPTUJPXCJdID0gXCJjb21ib1wiO1xyXG4gICAgUWluTXV0YW50c1tcIklDT05fUElDS1wiXSA9IFwiaWNvbi1waWNrXCI7XHJcbiAgICBRaW5NdXRhbnRzW1wiRklMRV9QQVRIXCJdID0gXCJmaWxlX3BhdGhcIjtcclxuICAgIFFpbk11dGFudHNbXCJGSUxFX1BJQ0tcIl0gPSBcImZpbGVfcGlja1wiO1xyXG4gICAgUWluTXV0YW50c1tcIkZJTEVfVklFV1wiXSA9IFwiZmlsZV92aWV3XCI7XHJcbn0pKFFpbk11dGFudHMgPSBleHBvcnRzLlFpbk11dGFudHMgfHwgKGV4cG9ydHMuUWluTXV0YW50cyA9IHt9KSk7XHJcbmZ1bmN0aW9uIG5ld0VkaXQoa2luZCwgb3B0aW9ucykge1xyXG4gICAgc3dpdGNoIChraW5kKSB7XHJcbiAgICAgICAgY2FzZSBRaW5NdXRhbnRzLkJPT0xFQU46XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgcWluX2Jvb2xlYW5fMS5RaW5Cb29sZWFuKG9wdGlvbnMpO1xyXG4gICAgICAgIGNhc2UgUWluTXV0YW50cy5JTlRFR0VSOlxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IHFpbl9pbnRlZ2VyXzEuUWluSW50ZWdlcihvcHRpb25zKTtcclxuICAgICAgICBjYXNlIFFpbk11dGFudHMuU1RSSU5HOlxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IHFpbl9zdHJpbmdfMS5RaW5TdHJpbmcob3B0aW9ucyk7XHJcbiAgICAgICAgY2FzZSBRaW5NdXRhbnRzLkNPTUJPOlxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IHFpbl9jb21ib18xLlFpbkNvbWJvKG9wdGlvbnMpO1xyXG4gICAgICAgIGNhc2UgUWluTXV0YW50cy5JQ09OX1BJQ0s6XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgcWluX2ljb25fcGlja18xLlFpbkljb25QaWNrKG9wdGlvbnMpO1xyXG4gICAgICAgIGNhc2UgUWluTXV0YW50cy5GSUxFX1BBVEg6XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgcWluX2ZpbGVfcGF0aF8xLlFpbkZpbGVQYXRoKG9wdGlvbnMpO1xyXG4gICAgICAgIGNhc2UgUWluTXV0YW50cy5GSUxFX1BJQ0s6XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgcWluX2ZpbGVfcGlja18xLlFpbkZpbGVQaWNrKG9wdGlvbnMpO1xyXG4gICAgICAgIGNhc2UgUWluTXV0YW50cy5GSUxFX1ZJRVc6XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgcWluX2ZpbGVfdmlld18xLlFpbkZpbGVWaWV3KG9wdGlvbnMpO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihxaW5fdG9vbF8xLlFpblRvb2wucWlucGVsLnRyKFwiVW5rbm93biBraW5kIG9mIG11dGFudCB0byBjcmVhdGU6IFwiKSArIGtpbmQpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUWluTXV0YW50c0FybSA9IHtcclxuICAgIG5ld0VkaXQsXHJcbn07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1tdXRhbnRzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluUGFuZWwgPSB2b2lkIDA7XHJcbmNvbnN0IHFpbl9iYXNlXzEgPSByZXF1aXJlKFwiLi9xaW4tYmFzZVwiKTtcclxuY2xhc3MgUWluUGFuZWwgZXh0ZW5kcyBxaW5fYmFzZV8xLlFpbkJhc2Uge1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucywgaXNRaW5kcmVkKSB7XHJcbiAgICAgICAgc3VwZXIoKGlzUWluZHJlZCA/IGlzUWluZHJlZCArIFwiX1wiIDogXCJcIikgKyBcInBhbmVsXCIsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpO1xyXG4gICAgICAgIHRoaXMuc3R5bGUucHV0QXNEaXNwbGF5RmxleCgpO1xyXG4gICAgICAgIGlmIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuaXRlbXMpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIG9wdGlvbnMuaXRlbXMpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uaW5zdGFsbCh0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhc3RlZFFpbmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucWluZWRIVE1MO1xyXG4gICAgfVxyXG4gICAgc3R5bGVkKHN0eWxlcykge1xyXG4gICAgICAgIHN1cGVyLnN0eWxlZChzdHlsZXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgcHV0KGl0ZW0pIHtcclxuICAgICAgICBpdGVtLmluc3RhbGwodGhpcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5RaW5QYW5lbCA9IFFpblBhbmVsO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tcGFuZWwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5Qb3B1cCA9IHZvaWQgMDtcclxuY29uc3QgcWluX3Rvb2xfMSA9IHJlcXVpcmUoXCIuL3Fpbi10b29sXCIpO1xyXG5jbGFzcyBRaW5Qb3B1cCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZW50cykge1xyXG4gICAgICAgIHRoaXMuX3Fpbk1haW4gPSBxaW5fdG9vbF8xLlFpblRvb2wucWlucGVsLmpvYmJlZC5uZXdQb3B1cChjb250ZW50cy5jYXN0ZWRRaW5lKCkpO1xyXG4gICAgfVxyXG4gICAgc2hvdygpIHtcclxuICAgICAgICB0aGlzLl9xaW5NYWluLnNob3coKTtcclxuICAgIH1cclxuICAgIHNob3dPblBhcmVudChwYXJlbnQpIHtcclxuICAgICAgICB0aGlzLl9xaW5NYWluLnNob3dPblBhcmVudChwYXJlbnQucWluZWRIVE1MKTtcclxuICAgIH1cclxuICAgIHNob3dPbkJvdW5kcyhib3VuZHMpIHtcclxuICAgICAgICB0aGlzLl9xaW5NYWluLnNob3dPbkJvdW5kcyhib3VuZHMpO1xyXG4gICAgfVxyXG4gICAgY2xvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5fcWluTWFpbi5jbG9zZSgpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUWluUG9wdXAgPSBRaW5Qb3B1cDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLXBvcHVwLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluUm93ID0gdm9pZCAwO1xyXG5jb25zdCBxaW5fcGFuZWxfMSA9IHJlcXVpcmUoXCIuL3Fpbi1wYW5lbFwiKTtcclxuY2xhc3MgUWluUm93IGV4dGVuZHMgcWluX3BhbmVsXzEuUWluUGFuZWwge1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucywgaXNRaW5kcmVkKSB7XHJcbiAgICAgICAgc3VwZXIob3B0aW9ucywgKGlzUWluZHJlZCA/IGlzUWluZHJlZCArIFwiX1wiIDogXCJcIikgKyBcInJvd1wiKTtcclxuICAgICAgICB0aGlzLnN0eWxlLnB1dEFzRmxleERpcmVjdGlvblJvdygpO1xyXG4gICAgICAgIHRoaXMuc3R5bGUucHV0QXNGbGV4V3JhcE5vdCgpO1xyXG4gICAgICAgIHRoaXMucWluZWRIVE1MLnN0eWxlLm1pbldpZHRoID0gXCJtaW4tY29udGVudFwiO1xyXG4gICAgICAgIHRoaXMucWluZWRIVE1MLnN0eWxlLm1pbkhlaWdodCA9IFwibWluLWNvbnRlbnRcIjtcclxuICAgIH1cclxuICAgIHN0eWxlZChzdHlsZXMpIHtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHB1dChpdGVtKSB7XHJcbiAgICAgICAgaXRlbS5pbnN0YWxsKHRoaXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUWluUm93ID0gUWluUm93O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tcm93LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluU2Nyb2xsID0gdm9pZCAwO1xyXG5jb25zdCBxaW5fcGFuZWxfMSA9IHJlcXVpcmUoXCIuL3Fpbi1wYW5lbFwiKTtcclxuY2xhc3MgUWluU2Nyb2xsIGV4dGVuZHMgcWluX3BhbmVsXzEuUWluUGFuZWwge1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucywgaXNRaW5kcmVkKSB7XHJcbiAgICAgICAgc3VwZXIob3B0aW9ucywgKGlzUWluZHJlZCA/IGlzUWluZHJlZCArIFwiX1wiIDogXCJcIikgKyBcInNjcm9sbFwiKTtcclxuICAgICAgICB0aGlzLnN0eWxlLnB1dEFzU2Nyb2xsKCk7XHJcbiAgICB9XHJcbiAgICBzdHlsZWQoc3R5bGVzKSB7XHJcbiAgICAgICAgc3VwZXIuc3R5bGVkKHN0eWxlcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBwdXQoaXRlbSkge1xyXG4gICAgICAgIGl0ZW0uaW5zdGFsbCh0aGlzKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlFpblNjcm9sbCA9IFFpblNjcm9sbDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLXNjcm9sbC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlFpblNwYWNlciA9IHZvaWQgMDtcclxuY29uc3QgcWluX3BhbmVsXzEgPSByZXF1aXJlKFwiLi9xaW4tcGFuZWxcIik7XHJcbmNsYXNzIFFpblNwYWNlciBleHRlbmRzIHFpbl9wYW5lbF8xLlFpblBhbmVsIHtcclxuICAgIGNvbnN0cnVjdG9yKGRpc3RhbmNlLCBpc1FpbmRyZWQpIHtcclxuICAgICAgICBzdXBlcihudWxsLCAoaXNRaW5kcmVkID8gaXNRaW5kcmVkICsgXCJfXCIgOiBcIlwiKSArIFwic3BhY2VyXCIpO1xyXG4gICAgICAgIHRoaXMuc3R5bGUucHV0QXNNaW5TaXplKGRpc3RhbmNlICE9PSBudWxsICYmIGRpc3RhbmNlICE9PSB2b2lkIDAgPyBkaXN0YW5jZSA6IDQsIGRpc3RhbmNlICE9PSBudWxsICYmIGRpc3RhbmNlICE9PSB2b2lkIDAgPyBkaXN0YW5jZSA6IDQpO1xyXG4gICAgfVxyXG4gICAgc3R5bGVkKHN0eWxlcykge1xyXG4gICAgICAgIHN1cGVyLnN0eWxlZChzdHlsZXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUWluU3BhY2VyID0gUWluU3BhY2VyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tc3BhY2VyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluU3BsaXR0ZXIgPSB2b2lkIDA7XHJcbmNvbnN0IHFpbl9iYXNlXzEgPSByZXF1aXJlKFwiLi9xaW4tYmFzZVwiKTtcclxuY2xhc3MgUWluU3BsaXR0ZXIgZXh0ZW5kcyBxaW5fYmFzZV8xLlFpbkJhc2Uge1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucywgaXNRaW5kcmVkKSB7XHJcbiAgICAgICAgc3VwZXIoKGlzUWluZHJlZCA/IGlzUWluZHJlZCArIFwiX1wiIDogXCJcIikgKyBcInNwbGl0dGVyXCIsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpO1xyXG4gICAgICAgIHRoaXMuX2VsU2lkZUEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRoaXMuX2VsTW92ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRoaXMuX2VsR3Jvd0EgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRoaXMuX2VsR3Jvd0IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRoaXMuX2VsU2lkZUIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRoaXMuX2lzSG9yaXpvbnRhbCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fcWluU2lkZUEgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX3FpblNpZGVCID0gbnVsbDtcclxuICAgICAgICB0aGlzLnFpbmVkSFRNTC5hcHBlbmRDaGlsZCh0aGlzLl9lbFNpZGVBKTtcclxuICAgICAgICB0aGlzLnFpbmVkSFRNTC5hcHBlbmRDaGlsZCh0aGlzLl9lbE1vdmVyKTtcclxuICAgICAgICB0aGlzLl9lbE1vdmVyLmFwcGVuZENoaWxkKHRoaXMuX2VsR3Jvd0EpO1xyXG4gICAgICAgIHRoaXMuX2VsTW92ZXIuYXBwZW5kQ2hpbGQodGhpcy5fZWxHcm93Qik7XHJcbiAgICAgICAgdGhpcy5xaW5lZEhUTUwuYXBwZW5kQ2hpbGQodGhpcy5fZWxTaWRlQik7XHJcbiAgICAgICAgdGhpcy5xaW5lZEhUTUwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgIHRoaXMucWluZWRIVE1MLnN0eWxlLmZsZXhXcmFwID0gXCJub3dyYXBcIjtcclxuICAgICAgICB0aGlzLl9lbFNpZGVBLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICB0aGlzLl9lbFNpZGVBLnN0eWxlLmZsZXhXcmFwID0gXCJub3dyYXBcIjtcclxuICAgICAgICB0aGlzLl9lbFNpZGVBLnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCI7XHJcbiAgICAgICAgdGhpcy5fZWxNb3Zlci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgdGhpcy5fZWxNb3Zlci5zdHlsZS5mbGV4V3JhcCA9IFwibm93cmFwXCI7XHJcbiAgICAgICAgdGhpcy5fZWxNb3Zlci5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjEycHhcIjtcclxuICAgICAgICB0aGlzLl9lbE1vdmVyLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkIHJnYmEoMjU1LDI1MCwyMzksMC4xKVwiO1xyXG4gICAgICAgIHRoaXMuX2VsTW92ZXIuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG4gICAgICAgIHRoaXMuX2VsTW92ZXIuc3R5bGUuZmxleCA9IFwiMFwiO1xyXG4gICAgICAgIHRoaXMuX2VsR3Jvd0Euc3R5bGUuZmxleCA9IFwiMVwiO1xyXG4gICAgICAgIHRoaXMuX2VsR3Jvd0Iuc3R5bGUuZmxleCA9IFwiMVwiO1xyXG4gICAgICAgIHRoaXMuX2VsU2lkZUIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgIHRoaXMuX2VsU2lkZUIuc3R5bGUuZmxleFdyYXAgPSBcIm5vd3JhcFwiO1xyXG4gICAgICAgIHRoaXMuX2VsU2lkZUIuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIjtcclxuICAgICAgICBsZXQgYmFsYW5jZSA9IChncm93LCBmYWxsKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCByZWxhdGVkID0gdGhpcy5faXNIb3Jpem9udGFsID8gXCJ3aWR0aFwiIDogXCJoZWlnaHRcIjtcclxuICAgICAgICAgICAgbGV0IGdyb3dBdCA9IHBhcnNlSW50KGdyb3cuc3R5bGVbcmVsYXRlZF0pO1xyXG4gICAgICAgICAgICBsZXQgZmFsbEF0ID0gcGFyc2VJbnQoZmFsbC5zdHlsZVtyZWxhdGVkXSk7XHJcbiAgICAgICAgICAgIGlmIChmYWxsQXQgPD0gMTApXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIGdyb3cuc3R5bGVbcmVsYXRlZF0gPSBncm93QXQgKyAxMCArIFwiJVwiO1xyXG4gICAgICAgICAgICBmYWxsLnN0eWxlW3JlbGF0ZWRdID0gZmFsbEF0IC0gMTAgKyBcIiVcIjtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX2VsR3Jvd0EuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoXykgPT4gYmFsYW5jZSh0aGlzLl9lbFNpZGVBLCB0aGlzLl9lbFNpZGVCKSk7XHJcbiAgICAgICAgdGhpcy5fZWxHcm93QS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCAoXykgPT4gYmFsYW5jZSh0aGlzLl9lbFNpZGVBLCB0aGlzLl9lbFNpZGVCKSk7XHJcbiAgICAgICAgdGhpcy5fZWxHcm93Qi5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChfKSA9PiBiYWxhbmNlKHRoaXMuX2VsU2lkZUIsIHRoaXMuX2VsU2lkZUEpKTtcclxuICAgICAgICB0aGlzLl9lbEdyb3dCLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIChfKSA9PiBiYWxhbmNlKHRoaXMuX2VsU2lkZUIsIHRoaXMuX2VsU2lkZUEpKTtcclxuICAgICAgICBpZiAob3B0aW9ucykge1xyXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5zaWRlQSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTaWRlQShvcHRpb25zLnNpZGVBKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5zaWRlQikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTaWRlQihvcHRpb25zLnNpZGVCKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmhvcml6b250YWwpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRIb3Jpem9udGFsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFZlcnRpY2FsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2FzdGVkUWluZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5xaW5lZEhUTUw7XHJcbiAgICB9XHJcbiAgICBzdHlsZWQoc3R5bGVzKSB7XHJcbiAgICAgICAgc3VwZXIuc3R5bGVkKHN0eWxlcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBhZGRDaGlsZChjaGlsZCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9xaW5TaWRlQSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9xaW5TaWRlQSA9IGNoaWxkO1xyXG4gICAgICAgICAgICB0aGlzLl9lbFNpZGVBLmFwcGVuZENoaWxkKGNoaWxkLnFpbmVkSFRNTCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fcWluU2lkZUIgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3FpblNpZGVCLnVuSW5zdGFsbCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcWluU2lkZUIgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX3FpblNpZGVCID0gY2hpbGQ7XHJcbiAgICAgICAgICAgIHRoaXMuX2VsU2lkZUIuYXBwZW5kQ2hpbGQoY2hpbGQucWluZWRIVE1MKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fYmFzZUNoaWxkcmVuLnB1c2goY2hpbGQpO1xyXG4gICAgfVxyXG4gICAgZGVsQ2hpbGQoY2hpbGQpIHtcclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLl9iYXNlQ2hpbGRyZW4uaW5kZXhPZihjaGlsZCk7XHJcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5fYmFzZUNoaWxkcmVuLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9xaW5TaWRlQSA9PT0gY2hpbGQpIHtcclxuICAgICAgICAgICAgdGhpcy5fZWxTaWRlQS5yZW1vdmVDaGlsZChjaGlsZC5xaW5lZEhUTUwpO1xyXG4gICAgICAgICAgICB0aGlzLl9xaW5TaWRlQSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX3FpblNpZGVCID09PSBjaGlsZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9lbFNpZGVCLnJlbW92ZUNoaWxkKGNoaWxkLnFpbmVkSFRNTCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3FpblNpZGVCID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZXRIb3Jpem9udGFsKCkge1xyXG4gICAgICAgIHRoaXMucWluZWRIVE1MLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcInJvd1wiO1xyXG4gICAgICAgIHRoaXMuX2VsTW92ZXIuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwicm93XCI7XHJcbiAgICAgICAgdGhpcy5fZWxTaWRlQS5zdHlsZS53aWR0aCA9IFwiNTAlXCI7XHJcbiAgICAgICAgdGhpcy5fZWxTaWRlQS5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcclxuICAgICAgICB0aGlzLl9lbFNpZGVCLnN0eWxlLndpZHRoID0gXCI1MCVcIjtcclxuICAgICAgICB0aGlzLl9lbFNpZGVCLnN0eWxlLmhlaWdodCA9IFwiMTAwJVwiO1xyXG4gICAgICAgIHRoaXMuX2VsTW92ZXIuc3R5bGUubWluV2lkdGggPSBcIjI0cHhcIjtcclxuICAgICAgICB0aGlzLl9lbE1vdmVyLnN0eWxlLm1heFdpZHRoID0gXCIyNHB4XCI7XHJcbiAgICAgICAgdGhpcy5fZWxNb3Zlci5zdHlsZS5taW5IZWlnaHQgPSBcImluaXRpYWxcIjtcclxuICAgICAgICB0aGlzLl9lbE1vdmVyLnN0eWxlLm1heEhlaWdodCA9IFwiaW5pdGlhbFwiO1xyXG4gICAgICAgIHRoaXMuX2VsTW92ZXIuc3R5bGUud2lkdGggPSBcIjI0cHhcIjtcclxuICAgICAgICB0aGlzLl9lbE1vdmVyLnN0eWxlLmhlaWdodCA9IFwiMTAwJVwiO1xyXG4gICAgICAgIHRoaXMuX2VsR3Jvd0Euc3R5bGUuYmFja2dyb3VuZCA9XHJcbiAgICAgICAgICAgIFwibGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDI1NSwyNTAsMjM5LDAuMSkgMCUsIHJnYmEoMjU1LDI1MCwyMzksMC4xKSA4NCUsIHJnYmEoMjQsMCwzOSwwLjgpIDk4JSwgcmdiYSgyNCwwLDM5LDAuOCkgMTAwJSlcIjtcclxuICAgICAgICB0aGlzLl9lbEdyb3dCLnN0eWxlLmJhY2tncm91bmQgPVxyXG4gICAgICAgICAgICBcImxpbmVhci1ncmFkaWVudCgyNzBkZWcsIHJnYmEoMjU1LDI1MCwyMzksMC4xKSAwJSwgcmdiYSgyNTUsMjUwLDIzOSwwLjEpIDg0JSwgcmdiYSgyNCwwLDM5LDAuOCkgOTglLCByZ2JhKDI0LDAsMzksMC44KSAxMDAlKVwiO1xyXG4gICAgICAgIHRoaXMuX2lzSG9yaXpvbnRhbCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBzZXRWZXJ0aWNhbCgpIHtcclxuICAgICAgICB0aGlzLnFpbmVkSFRNTC5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJjb2x1bW5cIjtcclxuICAgICAgICB0aGlzLl9lbE1vdmVyLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcImNvbHVtblwiO1xyXG4gICAgICAgIHRoaXMuX2VsU2lkZUEuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcclxuICAgICAgICB0aGlzLl9lbFNpZGVBLnN0eWxlLmhlaWdodCA9IFwiNTAlXCI7XHJcbiAgICAgICAgdGhpcy5fZWxTaWRlQi5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgICAgIHRoaXMuX2VsU2lkZUIuc3R5bGUuaGVpZ2h0ID0gXCI1MCVcIjtcclxuICAgICAgICB0aGlzLl9lbE1vdmVyLnN0eWxlLm1pbldpZHRoID0gXCJpbml0aWFsXCI7XHJcbiAgICAgICAgdGhpcy5fZWxNb3Zlci5zdHlsZS5tYXhXaWR0aCA9IFwiaW5pdGlhbFwiO1xyXG4gICAgICAgIHRoaXMuX2VsTW92ZXIuc3R5bGUubWluSGVpZ2h0ID0gXCIyNHB4XCI7XHJcbiAgICAgICAgdGhpcy5fZWxNb3Zlci5zdHlsZS5tYXhIZWlnaHQgPSBcIjI0cHhcIjtcclxuICAgICAgICB0aGlzLl9lbE1vdmVyLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICAgICAgdGhpcy5fZWxNb3Zlci5zdHlsZS5oZWlnaHQgPSBcIjI0cHhcIjtcclxuICAgICAgICB0aGlzLl9lbEdyb3dBLnN0eWxlLmJhY2tncm91bmQgPVxyXG4gICAgICAgICAgICBcImxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMjU1LDI1MCwyMzksMC4xKSAwJSwgcmdiYSgyNTUsMjUwLDIzOSwwLjEpIDg0JSwgcmdiYSgyNCwwLDM5LDAuOCkgOTglLCByZ2JhKDI0LDAsMzksMC44KSAxMDAlKVwiO1xyXG4gICAgICAgIHRoaXMuX2VsR3Jvd0Iuc3R5bGUuYmFja2dyb3VuZCA9XHJcbiAgICAgICAgICAgIFwibGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMjU1LDI1MCwyMzksMC4xKSAwJSwgcmdiYSgyNTUsMjUwLDIzOSwwLjEpIDg0JSwgcmdiYSgyNCwwLDM5LDAuOCkgOTglLCByZ2JhKDI0LDAsMzksMC44KSAxMDAlKVwiO1xyXG4gICAgICAgIHRoaXMuX2lzSG9yaXpvbnRhbCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgc2V0U2lkZUEoc2lkZSkge1xyXG4gICAgICAgIGlmICh0aGlzLl9xaW5TaWRlQSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9xaW5TaWRlQS51bkluc3RhbGwoKTtcclxuICAgICAgICAgICAgdGhpcy5fcWluU2lkZUEgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9xaW5TaWRlQSA9IHNpZGU7XHJcbiAgICAgICAgdGhpcy5fZWxTaWRlQS5hcHBlbmRDaGlsZChzaWRlLnFpbmVkSFRNTCk7XHJcbiAgICB9XHJcbiAgICBzZXRTaWRlQihzaWRlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3FpblNpZGVCICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3FpblNpZGVCLnVuSW5zdGFsbCgpO1xyXG4gICAgICAgICAgICB0aGlzLl9xaW5TaWRlQiA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3FpblNpZGVCID0gc2lkZTtcclxuICAgICAgICB0aGlzLl9lbFNpZGVCLmFwcGVuZENoaWxkKHNpZGUucWluZWRIVE1MKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlFpblNwbGl0dGVyID0gUWluU3BsaXR0ZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1zcGxpdHRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlFpblN0YWNrID0gdm9pZCAwO1xyXG5jb25zdCBxaW5fcGFuZWxfMSA9IHJlcXVpcmUoXCIuL3Fpbi1wYW5lbFwiKTtcclxuY2xhc3MgUWluU3RhY2sgZXh0ZW5kcyBxaW5fcGFuZWxfMS5RaW5QYW5lbCB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zLCBpc1FpbmRyZWQpIHtcclxuICAgICAgICBzdXBlcihvcHRpb25zLCAoaXNRaW5kcmVkID8gaXNRaW5kcmVkICsgXCJfXCIgOiBcIlwiKSArIFwic3RhY2tcIik7XHJcbiAgICAgICAgdGhpcy5zdHlsZS5wdXRBc0ZsZXhEaXJlY3Rpb25Sb3coKTtcclxuICAgICAgICB0aGlzLnN0eWxlLnB1dEFzRmxleFdyYXBOb3QoKTtcclxuICAgIH1cclxuICAgIHN0eWxlZChzdHlsZXMpIHtcclxuICAgICAgICBzdXBlci5zdHlsZWQoc3R5bGVzKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHB1dChpdGVtKSB7XHJcbiAgICAgICAgaXRlbS5pbnN0YWxsKHRoaXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgYWRkQ2hpbGQoY2hpbGQpIHtcclxuICAgICAgICB0aGlzLmNoaWxkcmVuKCkuZm9yRWFjaCgoaW5DaGlsZCkgPT4ge1xyXG4gICAgICAgICAgICBpbkNoaWxkLnVuRGlzcGxheSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHN1cGVyLmFkZENoaWxkKGNoaWxkKTtcclxuICAgIH1cclxuICAgIHN0YWNrKGNoaWxkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHV0KGNoaWxkKTtcclxuICAgIH1cclxuICAgIHNob3coY2hpbGQpIHtcclxuICAgICAgICB0aGlzLmNoaWxkcmVuKCkuZm9yRWFjaCgoaW5DaGlsZCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaW5DaGlsZCA9PT0gY2hpbGQpIHtcclxuICAgICAgICAgICAgICAgIGluQ2hpbGQucmVEaXNwbGF5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpbkNoaWxkLnVuRGlzcGxheSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5RaW5TdGFjayA9IFFpblN0YWNrO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tc3RhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5TdHJpbmcgPSB2b2lkIDA7XHJcbmNvbnN0IHFpbnBlbF9yZXNfMSA9IHJlcXVpcmUoXCJxaW5wZWwtcmVzXCIpO1xyXG5jb25zdCBxaW5fZWRpdF8xID0gcmVxdWlyZShcIi4vcWluLWVkaXRcIik7XHJcbmNsYXNzIFFpblN0cmluZyBleHRlbmRzIHFpbl9lZGl0XzEuUWluRWRpdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zLCBpc1FpbmRyZWQpIHtcclxuICAgICAgICBzdXBlcigoaXNRaW5kcmVkID8gaXNRaW5kcmVkICsgXCJfXCIgOiBcIlwiKSArIFwic3RyaW5nXCIsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSk7XHJcbiAgICAgICAgdGhpcy5jYXN0ZWRRaW5lKCkudHlwZSA9IFwidGV4dFwiO1xyXG4gICAgICAgIHRoaXMuc3R5bGUucHV0QXNFZGl0YWJsZSgpO1xyXG4gICAgICAgIGlmIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMubWF4TGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FzdGVkUWluZSgpLm1heExlbmd0aCA9IG9wdGlvbnMubWF4TGVuZ3RoO1xyXG4gICAgICAgICAgICBsZXQgcG9zaXRpb24gPSBNYXRoLm1pbihNYXRoLm1heChvcHRpb25zLm1heExlbmd0aCAtIDEwLCAwKSwgOTApO1xyXG4gICAgICAgICAgICBsZXQgd2lkdGggPSBNYXRoLmZsb29yKDkwICsgKHBvc2l0aW9uICogNykgLyAzKTtcclxuICAgICAgICAgICAgdGhpcy5xaW5lZEhUTUwuc3R5bGUud2lkdGggPSB3aWR0aCArIFwicHhcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5pbml0aWFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YShvcHRpb25zLmluaXRpYWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnJlYWRPbmx5KSB7XHJcbiAgICAgICAgICAgIHRoaXMudHVyblJlYWRPbmx5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2FzdGVkUWluZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5xaW5lZEhUTUw7XHJcbiAgICB9XHJcbiAgICBzdHlsZWQoc3R5bGVzKSB7XHJcbiAgICAgICAgc3VwZXIuc3R5bGVkKHN0eWxlcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBnZXROYXR1cmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHFpbnBlbF9yZXNfMS5RaW5OYXR1cmUuQ0hBUlM7XHJcbiAgICB9XHJcbiAgICBnZXREYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhc3RlZFFpbmUoKS52YWx1ZTtcclxuICAgIH1cclxuICAgIHNldERhdGEoZGF0YSkge1xyXG4gICAgICAgIHRoaXMuY2FzdGVkUWluZSgpLnZhbHVlID0gZGF0YTtcclxuICAgIH1cclxuICAgIG1heUNoYW5nZSgpIHtcclxuICAgICAgICByZXR1cm4gW3RoaXMuY2FzdGVkUWluZSgpXTtcclxuICAgIH1cclxuICAgIHR1cm5SZWFkT25seSgpIHtcclxuICAgICAgICB0aGlzLmNhc3RlZFFpbmUoKS5yZWFkT25seSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zdHlsZS5wdXRBc1JlYWRPbmx5KCk7XHJcbiAgICB9XHJcbiAgICB0dXJuRWRpdGFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5jYXN0ZWRRaW5lKCkucmVhZE9ubHkgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnN0eWxlLnB1dEFzRWRpdGFibGUoKTtcclxuICAgIH1cclxuICAgIGlzRWRpdGFibGUoKSB7XHJcbiAgICAgICAgcmV0dXJuICF0aGlzLmNhc3RlZFFpbmUoKS5yZWFkT25seTtcclxuICAgIH1cclxuICAgIGluc2VydEF0Q3Vyc29yKGRhdGEpIHtcclxuICAgICAgICBpZiAoIWRhdGEpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBsZXQgc3RhcnRQb3MgPSB0aGlzLmNhc3RlZFFpbmUoKS5zZWxlY3Rpb25TdGFydDtcclxuICAgICAgICBsZXQgZW5kUG9zID0gdGhpcy5jYXN0ZWRRaW5lKCkuc2VsZWN0aW9uRW5kO1xyXG4gICAgICAgIGxldCBvbGRWYWwgPSB0aGlzLmNhc3RlZFFpbmUoKS52YWx1ZTtcclxuICAgICAgICBsZXQgbmV3VmFsID0gKHN0YXJ0UG9zID4gMCA/IG9sZFZhbC5zdWJzdHJpbmcoMCwgc3RhcnRQb3MpIDogXCJcIikgK1xyXG4gICAgICAgICAgICBkYXRhICtcclxuICAgICAgICAgICAgKGVuZFBvcyA8IG9sZFZhbC5sZW5ndGggPyBvbGRWYWwuc3Vic3RyaW5nKGVuZFBvcykgOiBcIlwiKTtcclxuICAgICAgICB0aGlzLnZhbHVlID0gbmV3VmFsO1xyXG4gICAgICAgIHRoaXMuY2FzdGVkUWluZSgpLnNlbGVjdGlvblN0YXJ0ID0gc3RhcnRQb3M7XHJcbiAgICAgICAgdGhpcy5jYXN0ZWRRaW5lKCkuc2VsZWN0aW9uRW5kID0gc3RhcnRQb3MgKyBkYXRhLmxlbmd0aDtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlFpblN0cmluZyA9IFFpblN0cmluZztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLXN0cmluZy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlFpblRhYmxlID0gdm9pZCAwO1xyXG5jb25zdCBxaW5fYmFzZV8xID0gcmVxdWlyZShcIi4vcWluLWJhc2VcIik7XHJcbmNvbnN0IHFpbl90b29sXzEgPSByZXF1aXJlKFwiLi9xaW4tdG9vbFwiKTtcclxuY2xhc3MgUWluVGFibGUgZXh0ZW5kcyBxaW5fYmFzZV8xLlFpbkJhc2Uge1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucywgaXNRaW5kcmVkKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIHN1cGVyKChpc1FpbmRyZWQgPyBpc1FpbmRyZWQgKyBcIl9cIiA6IFwiXCIpICsgXCJ0YWJsZVwiLCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtcclxuICAgICAgICB0aGlzLl9lbFRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xyXG4gICAgICAgIHRoaXMuX2VsVEhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhlYWRcIik7XHJcbiAgICAgICAgdGhpcy5fZWxUSGVhZFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgICAgICB0aGlzLl9lbFRCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpO1xyXG4gICAgICAgIHRoaXMuX2xpbmVzU2l6ZSA9IDA7XHJcbiAgICAgICAgdGhpcy5fb25MaW5lTWFpbkFjdCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fb25MaW5lTWlkaUFjdCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fb25MaW5lTWVudUFjdCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fb25Db2x1bW5NYWluQWN0ID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9vbkNvbHVtbk1pZGlBY3QgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX29uQ29sdW1uTWVudUFjdCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5xaW5lZEhUTUwuYXBwZW5kQ2hpbGQodGhpcy5fZWxUYWJsZSk7XHJcbiAgICAgICAgdGhpcy5fZWxUYWJsZS5hcHBlbmRDaGlsZCh0aGlzLl9lbFRIZWFkKTtcclxuICAgICAgICB0aGlzLl9lbFRIZWFkLmFwcGVuZENoaWxkKHRoaXMuX2VsVEhlYWRSb3cpO1xyXG4gICAgICAgIHRoaXMuX2VsVGFibGUuYXBwZW5kQ2hpbGQodGhpcy5fZWxUQm9keSk7XHJcbiAgICAgICAgc3R5bGVzLmFwcGx5T25UYWJsZSh0aGlzLl9lbFRhYmxlKTtcclxuICAgICAgICBzdHlsZXMuYXBwbHlPbkhlYWQodGhpcy5fZWxUSGVhZCk7XHJcbiAgICAgICAgc3R5bGVzLmFwcGx5T25IZWFkUm93KHRoaXMuX2VsVEhlYWRSb3cpO1xyXG4gICAgICAgIHN0eWxlcy5hcHBseU9uQm9keSh0aGlzLl9lbFRCb2R5KTtcclxuICAgICAgICBpZiAob3B0aW9ucykge1xyXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5oZWFkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEhlYWQob3B0aW9ucy5oZWFkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5saW5lcykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRMaW5lcyhvcHRpb25zLmxpbmVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9zaW5nbGVTZWxlY3Rpb24gPSAoX2EgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuc2luZ2xlU2VsZWN0aW9uKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBmYWxzZTtcclxuICAgIH1cclxuICAgIGNhc3RlZFFpbmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucWluZWRIVE1MO1xyXG4gICAgfVxyXG4gICAgc3R5bGVkKHN0eWxlcykge1xyXG4gICAgICAgIHN1cGVyLnN0eWxlZChzdHlsZXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgZ2V0TGluZXMoKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIHRoaXMuX2VsVEJvZHkucXVlcnlTZWxlY3RvckFsbChcInRyXCIpLmZvckVhY2goKHRyKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRoaXMuZ2V0Q29sdW1uc1ZhbHVlcyh0cikpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBnZXRMaW5lc1NpemUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsVEJvZHkucXVlcnlTZWxlY3RvckFsbChcInRyXCIpLmxlbmd0aDtcclxuICAgIH1cclxuICAgIGdldExpbmUocm93KSB7XHJcbiAgICAgICAgbGV0IGxpbmVzID0gdGhpcy5fZWxUQm9keS5xdWVyeVNlbGVjdG9yQWxsKFwidHJcIik7XHJcbiAgICAgICAgaWYgKHJvdyA8IGxpbmVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRDb2x1bW5zVmFsdWVzKGxpbmVzW3Jvd10pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGdldENvbHVtbnNWYWx1ZXModHIpIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gW107XHJcbiAgICAgICAgdHIucXVlcnlTZWxlY3RvckFsbChcInRkXCIpLmZvckVhY2goKHRkKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRkLmlubmVyVGV4dCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIHNldEhlYWQoaGVhZCkge1xyXG4gICAgICAgIHRoaXMuX2VsVEhlYWRSb3cuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICBmb3IgKGNvbnN0IGNlbGwgb2YgaGVhZCkge1xyXG4gICAgICAgICAgICBsZXQgdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XHJcbiAgICAgICAgICAgIHRoLmlubmVyVGV4dCA9IGNlbGw7XHJcbiAgICAgICAgICAgIHN0eWxlcy5hcHBseU9uSGVhZENvbCh0aCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2VsVEhlYWRSb3cuYXBwZW5kQ2hpbGQodGgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldEhlYWQoKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIHRoaXMuX2VsVEhlYWRSb3cucXVlcnlTZWxlY3RvckFsbChcInRoXCIpLmZvckVhY2goKHRoKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRoLmlubmVyVGV4dCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIGFkZEhlYWQoaGVhZCkge1xyXG4gICAgICAgIGxldCB0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcclxuICAgICAgICB0aC5pbm5lclRleHQgPSBoZWFkO1xyXG4gICAgICAgIHN0eWxlcy5hcHBseU9uSGVhZENvbCh0aCk7XHJcbiAgICAgICAgdGhpcy5fZWxUSGVhZFJvdy5hcHBlbmRDaGlsZCh0aCk7XHJcbiAgICB9XHJcbiAgICBzZXRMaW5lcyhsaW5lcykge1xyXG4gICAgICAgIHRoaXMuZGVsTGluZXMoKTtcclxuICAgICAgICBmb3IgKGNvbnN0IGxpbmUgb2YgbGluZXMpIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRMaW5lKGxpbmUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNldExpbmUocm93LCB2YWx1ZXMpIHtcclxuICAgICAgICBsZXQgbGluZXMgPSB0aGlzLl9lbFRCb2R5LnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0clwiKTtcclxuICAgICAgICBsZXQgcm93RWxlbWVudCA9IGxpbmVzW3Jvd107XHJcbiAgICAgICAgbGV0IGNvbHVtbnMgPSByb3dFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0ZFwiKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb2x1bW5zW2ldLmlubmVyVGV4dCA9IHZhbHVlc1tpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhZGRMaW5lKGxpbmUpIHtcclxuICAgICAgICBjb25zdCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgICAgICBpZiAodGhpcy5fbGluZXNTaXplICUgMiA9PT0gMCkge1xyXG4gICAgICAgICAgICBzdHlsZXMuYXBwbHlPbkJvZHlSb3codHIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc3R5bGVzLmFwcGx5T25Cb2R5Um93T2RkKHRyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgcm93ID0gdGhpcy5fZWxUQm9keS5jaGlsZHJlbi5sZW5ndGg7XHJcbiAgICAgICAgaWYgKHRoaXMuX29uTGluZU1haW5BY3QpIHtcclxuICAgICAgICAgICAgdHIuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcbiAgICAgICAgICAgIHFpbl90b29sXzEuUWluVG9vbC5xaW5wZWwub3VyLnNvdWwuYXJtcy5hZGRBY3Rpb25NYWluKHRyLCAoXykgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fb25MaW5lTWFpbkFjdC5mb3JFYWNoKChhY3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBhY3Qocm93LCB0aGlzLmdldENvbHVtbnNWYWx1ZXModHIpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX29uTGluZU1pZGlBY3QpIHtcclxuICAgICAgICAgICAgdHIuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcbiAgICAgICAgICAgIHFpbl90b29sXzEuUWluVG9vbC5xaW5wZWwub3VyLnNvdWwuYXJtcy5hZGRBY3Rpb25NaWRpKHRyLCAoXykgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fb25MaW5lTWlkaUFjdC5mb3JFYWNoKChhY3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBhY3Qocm93LCB0aGlzLmdldENvbHVtbnNWYWx1ZXModHIpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX29uTGluZU1lbnVBY3QpIHtcclxuICAgICAgICAgICAgdHIuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcbiAgICAgICAgICAgIHFpbl90b29sXzEuUWluVG9vbC5xaW5wZWwub3VyLnNvdWwuYXJtcy5hZGRBY3Rpb25NZW51KHRyLCAoXykgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fb25MaW5lTWVudUFjdC5mb3JFYWNoKChhY3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBhY3Qocm93LCB0aGlzLmdldENvbHVtbnNWYWx1ZXModHIpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGNvbHVtbiA9IDA7XHJcbiAgICAgICAgZm9yIChjb25zdCBjZWxsIG9mIGxpbmUpIHtcclxuICAgICAgICAgICAgY29uc3QgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgICAgIHRkLmlubmVyVGV4dCA9IGNlbGwudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgc3R5bGVzLmFwcGx5T25Cb2R5Q29sKHRkKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX29uQ29sdW1uTWFpbkFjdCkge1xyXG4gICAgICAgICAgICAgICAgdGQuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcbiAgICAgICAgICAgICAgICBxaW5fdG9vbF8xLlFpblRvb2wucWlucGVsLm91ci5zb3VsLmFybXMuYWRkQWN0aW9uTWFpbih0ZCwgKF8pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9vbkNvbHVtbk1haW5BY3QuZm9yRWFjaCgoYWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdChyb3csIGNvbHVtbiwgdGQuaW5uZXJUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9vbkNvbHVtbk1pZGlBY3QpIHtcclxuICAgICAgICAgICAgICAgIHRkLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xyXG4gICAgICAgICAgICAgICAgcWluX3Rvb2xfMS5RaW5Ub29sLnFpbnBlbC5vdXIuc291bC5hcm1zLmFkZEFjdGlvbk1pZGkodGQsIChfKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fb25Db2x1bW5NaWRpQWN0LmZvckVhY2goKGFjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Qocm93LCBjb2x1bW4sIHRkLmlubmVyVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5fb25Db2x1bW5NZW51QWN0KSB7XHJcbiAgICAgICAgICAgICAgICB0ZC5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcclxuICAgICAgICAgICAgICAgIHFpbl90b29sXzEuUWluVG9vbC5xaW5wZWwub3VyLnNvdWwuYXJtcy5hZGRBY3Rpb25NZW51KHRkLCAoXykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX29uQ29sdW1uTWVudUFjdC5mb3JFYWNoKChhY3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0KHJvdywgY29sdW1uLCB0ZC5pbm5lclRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdHIuYXBwZW5kQ2hpbGQodGQpO1xyXG4gICAgICAgICAgICBjb2x1bW4rKztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fZWxUQm9keS5hcHBlbmRDaGlsZCh0cik7XHJcbiAgICAgICAgdGhpcy5fbGluZXNTaXplKys7XHJcbiAgICB9XHJcbiAgICBkZWxMaW5lcygpIHtcclxuICAgICAgICB0aGlzLl9lbFRCb2R5LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5fbGluZXNTaXplID0gMDtcclxuICAgIH1cclxuICAgIGRlbExpbmUocm93KSB7XHJcbiAgICAgICAgbGV0IGxpbmVzID0gdGhpcy5fZWxUQm9keS5xdWVyeVNlbGVjdG9yQWxsKFwidHJcIik7XHJcbiAgICAgICAgdGhpcy5fZWxUQm9keS5yZW1vdmVDaGlsZChsaW5lc1tyb3ddKTtcclxuICAgIH1cclxuICAgIHNlbGVjdChyb3cpIHtcclxuICAgICAgICBpZiAodGhpcy5fc2luZ2xlU2VsZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMudW5zZWxlY3RBbGwoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGxpbmVzID0gdGhpcy5fZWxUQm9keS5xdWVyeVNlbGVjdG9yQWxsKFwidHJcIik7XHJcbiAgICAgICAgaWYgKHJvdyA8IGxpbmVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBsaW5lc1tyb3ddLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0ZFwiKS5mb3JFYWNoKCh0ZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjMzMzM2ZmMzNcIjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdW5zZWxlY3Qocm93KSB7XHJcbiAgICAgICAgbGV0IGxpbmVzID0gdGhpcy5fZWxUQm9keS5xdWVyeVNlbGVjdG9yQWxsKFwidHJcIik7XHJcbiAgICAgICAgaWYgKHJvdyA8IGxpbmVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBsaW5lc1tyb3ddLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0ZFwiKS5mb3JFYWNoKCh0ZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZmZmZmZmMDBcIjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdW5zZWxlY3RBbGwoKSB7XHJcbiAgICAgICAgbGV0IGxpbmVzID0gdGhpcy5fZWxUQm9keS5xdWVyeVNlbGVjdG9yQWxsKFwidHJcIik7XHJcbiAgICAgICAgbGluZXMuZm9yRWFjaCgodHIpID0+IHtcclxuICAgICAgICAgICAgdHIucXVlcnlTZWxlY3RvckFsbChcInRkXCIpLmZvckVhY2goKHRkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0ZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNmZmZmZmYwMFwiO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHNjcm9sbFRvKHJvdykge1xyXG4gICAgICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICAgICAgdGhpcy5fZWxUQm9keS5xdWVyeVNlbGVjdG9yQWxsKFwidHJcIikuZm9yRWFjaCgodHIpID0+IHtcclxuICAgICAgICAgICAgaWYgKGluZGV4ID09PSByb3cpIHtcclxuICAgICAgICAgICAgICAgIHRyLnNjcm9sbEludG9WaWV3KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW5kZXgrKztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGFkZE9uTGluZU1haW5BY3QoYWN0KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9vbkxpbmVNYWluQWN0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX29uTGluZU1haW5BY3QgPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fb25MaW5lTWFpbkFjdC5wdXNoKGFjdCk7XHJcbiAgICB9XHJcbiAgICBkZWxPbkxpbmVNYWluQWN0KGFjdCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9vbkxpbmVNYWluQWN0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fb25MaW5lTWFpbkFjdC5pbmRleE9mKGFjdCk7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9vbkxpbmVNYWluQWN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhZGRPbkxpbmVNaWRpQWN0KGFjdCkge1xyXG4gICAgICAgIGlmICghdGhpcy5fb25MaW5lTWlkaUFjdCkge1xyXG4gICAgICAgICAgICB0aGlzLl9vbkxpbmVNaWRpQWN0ID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX29uTGluZU1pZGlBY3QucHVzaChhY3QpO1xyXG4gICAgfVxyXG4gICAgZGVsT25MaW5lTWlkaUFjdChhY3QpIHtcclxuICAgICAgICBpZiAodGhpcy5fb25MaW5lTWlkaUFjdCkge1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuX29uTGluZU1pZGlBY3QuaW5kZXhPZihhY3QpO1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fb25MaW5lTWlkaUFjdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYWRkT25MaW5lTWVudUFjdChhY3QpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX29uTGluZU1lbnVBY3QpIHtcclxuICAgICAgICAgICAgdGhpcy5fb25MaW5lTWVudUFjdCA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9vbkxpbmVNZW51QWN0LnB1c2goYWN0KTtcclxuICAgIH1cclxuICAgIGRlbE9uTGluZU1lbnVBY3QoYWN0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX29uTGluZU1lbnVBY3QpIHtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLl9vbkxpbmVNZW51QWN0LmluZGV4T2YoYWN0KTtcclxuICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX29uTGluZU1lbnVBY3Quc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFkZE9uQ29sdW1uTWFpbkFjdChhY3QpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX29uQ29sdW1uTWFpbkFjdCkge1xyXG4gICAgICAgICAgICB0aGlzLl9vbkNvbHVtbk1haW5BY3QgPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fb25Db2x1bW5NYWluQWN0LnB1c2goYWN0KTtcclxuICAgIH1cclxuICAgIGRlbE9uQ29sdW1uTWFpbkFjdChhY3QpIHtcclxuICAgICAgICBpZiAodGhpcy5fb25Db2x1bW5NYWluQWN0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fb25Db2x1bW5NYWluQWN0LmluZGV4T2YoYWN0KTtcclxuICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX29uQ29sdW1uTWFpbkFjdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYWRkT25Db2x1bW5NaWRpQWN0KGFjdCkge1xyXG4gICAgICAgIGlmICghdGhpcy5fb25Db2x1bW5NaWRpQWN0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX29uQ29sdW1uTWlkaUFjdCA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9vbkNvbHVtbk1pZGlBY3QucHVzaChhY3QpO1xyXG4gICAgfVxyXG4gICAgZGVsT25Db2x1bW5NaWRpQWN0KGFjdCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9vbkNvbHVtbk1pZGlBY3QpIHtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLl9vbkNvbHVtbk1pZGlBY3QuaW5kZXhPZihhY3QpO1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fb25Db2x1bW5NaWRpQWN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhZGRPbkNvbHVtbk1lbnVBY3QoYWN0KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9vbkNvbHVtbk1lbnVBY3QpIHtcclxuICAgICAgICAgICAgdGhpcy5fb25Db2x1bW5NZW51QWN0ID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX29uQ29sdW1uTWVudUFjdC5wdXNoKGFjdCk7XHJcbiAgICB9XHJcbiAgICBkZWxPbkNvbHVtbk1lbnVBY3QoYWN0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX29uQ29sdW1uTWVudUFjdCkge1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuX29uQ29sdW1uTWVudUFjdC5pbmRleE9mKGFjdCk7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9vbkNvbHVtbk1lbnVBY3Quc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLlFpblRhYmxlID0gUWluVGFibGU7XHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICAgIGFwcGx5T25UYWJsZTogKGVsKSA9PiB7XHJcbiAgICAgICAgZWwuc3R5bGUubWFyZ2luID0gXCIwcHhcIjtcclxuICAgICAgICBlbC5zdHlsZS5wYWRkaW5nID0gXCIwcHhcIjtcclxuICAgICAgICBlbC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjOWU5ZTllXCI7XHJcbiAgICB9LFxyXG4gICAgYXBwbHlPbkhlYWQ6IChlbCkgPT4ge1xyXG4gICAgICAgIGVsLnN0eWxlLm1hcmdpbiA9IFwiMHB4XCI7XHJcbiAgICAgICAgZWwuc3R5bGUucGFkZGluZyA9IFwiMHB4XCI7XHJcbiAgICB9LFxyXG4gICAgYXBwbHlPbkhlYWRSb3c6IChlbCkgPT4ge1xyXG4gICAgICAgIGVsLnN0eWxlLm1hcmdpbiA9IFwiMHB4XCI7XHJcbiAgICAgICAgZWwuc3R5bGUucGFkZGluZyA9IFwiMHB4XCI7XHJcbiAgICAgICAgZWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjNTZjZDY0MzZcIjtcclxuICAgIH0sXHJcbiAgICBhcHBseU9uSGVhZENvbDogKGVsKSA9PiB7XHJcbiAgICAgICAgZWwuc3R5bGUubWFyZ2luID0gXCIwcHhcIjtcclxuICAgICAgICBlbC5zdHlsZS5wYWRkaW5nID0gXCI1cHhcIjtcclxuICAgICAgICBlbC5zdHlsZS5ib3JkZXJSaWdodCA9IFwiMXB4IHNvbGlkICM1ZTVlNWVcIjtcclxuICAgICAgICBlbC5zdHlsZS5ib3JkZXJCb3R0b20gPSBcIjJweCBzb2xpZCAjNWU1ZTVlXCI7XHJcbiAgICB9LFxyXG4gICAgYXBwbHlPbkJvZHk6IChlbCkgPT4ge1xyXG4gICAgICAgIGVsLnN0eWxlLm1hcmdpbiA9IFwiMHB4XCI7XHJcbiAgICAgICAgZWwuc3R5bGUucGFkZGluZyA9IFwiMHB4XCI7XHJcbiAgICB9LFxyXG4gICAgYXBwbHlPbkJvZHlSb3c6IChlbCkgPT4ge1xyXG4gICAgICAgIGVsLnN0eWxlLm1hcmdpbiA9IFwiMHB4XCI7XHJcbiAgICAgICAgZWwuc3R5bGUucGFkZGluZyA9IFwiMHB4XCI7XHJcbiAgICAgICAgZWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjYmE1NmNkMWZcIjtcclxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGVsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2NkNTY2NDM2XCI7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBlbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNiYTU2Y2QxZlwiO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGFwcGx5T25Cb2R5Um93T2RkOiAoZWwpID0+IHtcclxuICAgICAgICBlbC5zdHlsZS5tYXJnaW4gPSBcIjBweFwiO1xyXG4gICAgICAgIGVsLnN0eWxlLnBhZGRpbmcgPSBcIjBweFwiO1xyXG4gICAgICAgIGVsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2NkYTk1NjFmXCI7XHJcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBlbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNjZDU2NjQzNlwiO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsICgpID0+IHtcclxuICAgICAgICAgICAgZWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjY2RhOTU2MWZcIjtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBhcHBseU9uQm9keUNvbDogKGVsKSA9PiB7XHJcbiAgICAgICAgZWwuc3R5bGUubWFyZ2luID0gXCIwcHhcIjtcclxuICAgICAgICBlbC5zdHlsZS5wYWRkaW5nID0gXCI1cHhcIjtcclxuICAgICAgICBlbC5zdHlsZS5ib3JkZXJSaWdodCA9IFwiMXB4IHNvbGlkICM1ZTVlNWVcIjtcclxuICAgICAgICBlbC5zdHlsZS5ib3JkZXJCb3R0b20gPSBcIjJweCBzb2xpZCAjNWU1ZTVlXCI7XHJcbiAgICAgICAgZWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZmZmZmZmMDBcIjtcclxuICAgIH0sXHJcbn07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi10YWJsZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlFpblRhYnMgPSB2b2lkIDA7XHJcbmNvbnN0IHFpbnBlbF9yZXNfMSA9IHJlcXVpcmUoXCJxaW5wZWwtcmVzXCIpO1xyXG5jb25zdCBxaW5fYnV0dG9uXzEgPSByZXF1aXJlKFwiLi9xaW4tYnV0dG9uXCIpO1xyXG5jb25zdCBxaW5fY29sdW1uXzEgPSByZXF1aXJlKFwiLi9xaW4tY29sdW1uXCIpO1xyXG5jb25zdCBxaW5fbGFiZWxfMSA9IHJlcXVpcmUoXCIuL3Fpbi1sYWJlbFwiKTtcclxuY29uc3QgcWluX2xpbmVfMSA9IHJlcXVpcmUoXCIuL3Fpbi1saW5lXCIpO1xyXG5jb25zdCBxaW5fcGFuZWxfMSA9IHJlcXVpcmUoXCIuL3Fpbi1wYW5lbFwiKTtcclxuY2xhc3MgUWluVGFicyBleHRlbmRzIHFpbl9jb2x1bW5fMS5RaW5Db2x1bW4ge1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucywgaXNRaW5kcmVkKSB7XHJcbiAgICAgICAgc3VwZXIobnVsbCwgKGlzUWluZHJlZCA/IGlzUWluZHJlZCArIFwiX1wiIDogXCJcIikgKyBcInRhYnNcIik7XHJcbiAgICAgICAgdGhpcy5fcWluVGFicyA9IG5ldyBxaW5fbGluZV8xLlFpbkxpbmUoKTtcclxuICAgICAgICB0aGlzLl9xaW5QYW5lbCA9IG5ldyBxaW5fcGFuZWxfMS5RaW5QYW5lbCgpO1xyXG4gICAgICAgIHRoaXMuX3RhYnMgPSBbXTtcclxuICAgICAgICB0aGlzLl9xaW5UYWJzLmluc3RhbGwodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fcWluUGFuZWwuaW5zdGFsbCh0aGlzKTtcclxuICAgICAgICBpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmluaXRpYWwpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCB0YWIgb2Ygb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmluaXRpYWwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkVGFiKHRhYik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzdHlsZWQoc3R5bGVzKSB7XHJcbiAgICAgICAgc3VwZXIuc3R5bGVkKHN0eWxlcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBnZXQgcWluVGFicygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcWluVGFicztcclxuICAgIH1cclxuICAgIGdldCBxaW5QYW5lbCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcWluUGFuZWw7XHJcbiAgICB9XHJcbiAgICBhZGRUYWIodGFiKSB7XHJcbiAgICAgICAgY29uc3QgYnV0dG9uID0gbmV3IHFpbl9idXR0b25fMS5RaW5CdXR0b24oeyBsYWJlbDogbmV3IHFpbl9sYWJlbF8xLlFpbkxhYmVsKHRhYi50aXRsZSkgfSk7XHJcbiAgICAgICAgYnV0dG9uLnN0eWxlLnB1dEFzQmFja2dyb3VuZChxaW5wZWxfcmVzXzEuUWluU2tpbi5zdHlsZXMuQ29sb3JJbmFjdGl2ZSk7XHJcbiAgICAgICAgYnV0dG9uLmFkZEFjdGlvbigocWluRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHFpbkV2ZW50LmlzTWFpbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Vmlld2VyKHRhYi52aWV3ZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYnV0dG9uLmluc3RhbGwodGhpcy5fcWluVGFicyk7XHJcbiAgICAgICAgbGV0IGZpcnN0ID0gdGhpcy5fdGFicy5sZW5ndGggPT0gMDtcclxuICAgICAgICBsZXQgdGFiUmVmID0ge1xyXG4gICAgICAgICAgICB0aXRsZTogdGFiLnRpdGxlLFxyXG4gICAgICAgICAgICB2aWV3ZXI6IHRhYi52aWV3ZXIsXHJcbiAgICAgICAgICAgIGJ1dHRvbixcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX3RhYnMucHVzaCh0YWJSZWYpO1xyXG4gICAgICAgIGlmIChmaXJzdCkge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dWaWV3ZXIodGFiLnZpZXdlcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2hvd1RhYih0aXRsZSkge1xyXG4gICAgICAgIGZvciAoY29uc3QgdGFiIG9mIHRoaXMuX3RhYnMpIHtcclxuICAgICAgICAgICAgaWYgKHRhYi50aXRsZSA9PSB0aXRsZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Vmlld2VyKHRhYi52aWV3ZXIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzaG93Vmlld2VyKHZpZXdlcikge1xyXG4gICAgICAgIHRoaXMuX3FpblBhbmVsLnVuSW5zdGFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgdmlld2VyLmluc3RhbGwodGhpcy5fcWluUGFuZWwpO1xyXG4gICAgICAgIGZvciAoY29uc3QgdGFiIG9mIHRoaXMuX3RhYnMpIHtcclxuICAgICAgICAgICAgaWYgKHRhYi52aWV3ZXIgPT0gdmlld2VyKSB7XHJcbiAgICAgICAgICAgICAgICB0YWIuYnV0dG9uLnN0eWxlLnB1dEFzQmFja2dyb3VuZChxaW5wZWxfcmVzXzEuUWluU2tpbi5zdHlsZXMuQ29sb3JBY3RpdmUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGFiLmJ1dHRvbi5zdHlsZS5wdXRBc0JhY2tncm91bmQocWlucGVsX3Jlc18xLlFpblNraW4uc3R5bGVzLkNvbG9ySW5hY3RpdmUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUWluVGFicyA9IFFpblRhYnM7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi10YWJzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluVGl0bGVkID0gdm9pZCAwO1xyXG5jb25zdCBxaW5fY29sdW1uXzEgPSByZXF1aXJlKFwiLi9xaW4tY29sdW1uXCIpO1xyXG5jb25zdCBxaW5fbGFiZWxfMSA9IHJlcXVpcmUoXCIuL3Fpbi1sYWJlbFwiKTtcclxuY29uc3QgcWluX2xpbmVfMSA9IHJlcXVpcmUoXCIuL3Fpbi1saW5lXCIpO1xyXG5jbGFzcyBRaW5UaXRsZWQgZXh0ZW5kcyBxaW5fY29sdW1uXzEuUWluQ29sdW1uIHtcclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMsIGlzUWluZHJlZCkge1xyXG4gICAgICAgIHN1cGVyKG51bGwsIChpc1FpbmRyZWQgPyBpc1FpbmRyZWQgKyBcIl9cIiA6IFwiXCIpICsgXCJ0aXRsZWRcIik7XHJcbiAgICAgICAgdGhpcy5fcWluVGl0bGUgPSBuZXcgcWluX2xhYmVsXzEuUWluTGFiZWwoKTtcclxuICAgICAgICB0aGlzLl9xaW5IZWFkID0gbmV3IHFpbl9saW5lXzEuUWluTGluZSh7IGl0ZW1zOiBbdGhpcy5fcWluVGl0bGVdIH0pO1xyXG4gICAgICAgIHRoaXMuX3FpbkJvZHkgPSBuZXcgcWluX2xpbmVfMS5RaW5MaW5lKCk7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy50aXRsZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9xaW5UaXRsZS50aXRsZSA9IG9wdGlvbnMudGl0bGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3FpbkhlYWQuaW5zdGFsbCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9xaW5Cb2R5Lmluc3RhbGwodGhpcyk7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5pdGVtcykge1xyXG4gICAgICAgICAgICBvcHRpb25zLml0ZW1zLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uaW5zdGFsbCh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3R5bGVkKHN0eWxlcykge1xyXG4gICAgICAgIHN1cGVyLnN0eWxlZChzdHlsZXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgcHV0KGl0ZW0pIHtcclxuICAgICAgICBpdGVtLmluc3RhbGwodGhpcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBhZGRDaGlsZChjaGlsZCkge1xyXG4gICAgICAgIGlmIChjaGlsZCA9PT0gdGhpcy5fcWluQm9keSB8fCBjaGlsZCA9PT0gdGhpcy5fcWluSGVhZCkge1xyXG4gICAgICAgICAgICBzdXBlci5hZGRDaGlsZChjaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9xaW5Cb2R5LmFkZENoaWxkKGNoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBkZWxDaGlsZChjaGlsZCkge1xyXG4gICAgICAgIGlmIChjaGlsZCA9PT0gdGhpcy5fcWluQm9keSB8fCBjaGlsZCA9PT0gdGhpcy5fcWluSGVhZCkge1xyXG4gICAgICAgICAgICBzdXBlci5kZWxDaGlsZChjaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9xaW5Cb2R5LmRlbENoaWxkKGNoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQgdGl0bGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpblRpdGxlLnRpdGxlO1xyXG4gICAgfVxyXG4gICAgc2V0IHRpdGxlKHRpdGxlKSB7XHJcbiAgICAgICAgdGhpcy5fcWluVGl0bGUudGl0bGUgPSB0aXRsZTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlFpblRpdGxlZCA9IFFpblRpdGxlZDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLXRpdGxlZC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlFpblRvb2wgPSB2b2lkIDA7XHJcbmNvbnN0IHJlZlFpbnBlbCA9IHdpbmRvdy5mcmFtZUVsZW1lbnQucWlucGVsO1xyXG5leHBvcnRzLlFpblRvb2wgPSB7XHJcbiAgICBxaW5wZWw6IHJlZlFpbnBlbCxcclxufTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLXRvb2wuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5Tb3VsID0gZXhwb3J0cy5RaW5Ta2luID0gZXhwb3J0cy5RaW5TdHlsZXMgPSBleHBvcnRzLlFpbkdyYW5kZXVyID0gZXhwb3J0cy5RaW5Cb3VuZHMgPSBleHBvcnRzLlFpbkRpbWVuc2lvbiA9IGV4cG9ydHMuUWluUG9pbnQgPSBleHBvcnRzLlFpbkxlZ3MgPSBleHBvcnRzLlFpbkhlYWQgPSBleHBvcnRzLnRyID0gZXhwb3J0cy5RaW5Gb290ID0gZXhwb3J0cy5RaW5GaWxlc0Rlc2NyaXB0b3IgPSBleHBvcnRzLlFpbkZpbGVzT3BlcmF0aW9uID0gZXhwb3J0cy5RaW5GaWxlc05hdHVyZSA9IGV4cG9ydHMuUWluQm9keSA9IGV4cG9ydHMuUWluTmF0dXJlID0gZXhwb3J0cy5RaW5Bcm1zID0gZXhwb3J0cy5RaW5Qb2ludGVyQ2FsbHMgPSBleHBvcnRzLlFpbldhaXRlcnMgPSBleHBvcnRzLlFpbkV2ZW50ID0gZXhwb3J0cy5RaW5BY3Rpb25LaW5kID0gdm9pZCAwO1xyXG52YXIgcWluX2FybXNfMSA9IHJlcXVpcmUoXCIuL3Fpbi1hcm1zXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5BY3Rpb25LaW5kXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fYXJtc18xLlFpbkFjdGlvbktpbmQ7IH0gfSk7XHJcbnZhciBxaW5fYXJtc18yID0gcmVxdWlyZShcIi4vcWluLWFybXNcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkV2ZW50XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fYXJtc18yLlFpbkV2ZW50OyB9IH0pO1xyXG52YXIgcWluX2FybXNfMyA9IHJlcXVpcmUoXCIuL3Fpbi1hcm1zXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5XYWl0ZXJzXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fYXJtc18zLlFpbldhaXRlcnM7IH0gfSk7XHJcbnZhciBxaW5fYXJtc180ID0gcmVxdWlyZShcIi4vcWluLWFybXNcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpblBvaW50ZXJDYWxsc1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2FybXNfNC5RaW5Qb2ludGVyQ2FsbHM7IH0gfSk7XHJcbnZhciBxaW5fYXJtc181ID0gcmVxdWlyZShcIi4vcWluLWFybXNcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkFybXNcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9hcm1zXzUuUWluQXJtczsgfSB9KTtcclxudmFyIHFpbl9ib2R5XzEgPSByZXF1aXJlKFwiLi9xaW4tYm9keVwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluTmF0dXJlXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fYm9keV8xLlFpbk5hdHVyZTsgfSB9KTtcclxudmFyIHFpbl9ib2R5XzIgPSByZXF1aXJlKFwiLi9xaW4tYm9keVwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluQm9keVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2JvZHlfMi5RaW5Cb2R5OyB9IH0pO1xyXG52YXIgcWluX2Zvb3RfMSA9IHJlcXVpcmUoXCIuL3Fpbi1mb290XCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5GaWxlc05hdHVyZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2Zvb3RfMS5RaW5GaWxlc05hdHVyZTsgfSB9KTtcclxudmFyIHFpbl9mb290XzIgPSByZXF1aXJlKFwiLi9xaW4tZm9vdFwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluRmlsZXNPcGVyYXRpb25cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9mb290XzIuUWluRmlsZXNPcGVyYXRpb247IH0gfSk7XHJcbnZhciBxaW5fZm9vdF8zID0gcmVxdWlyZShcIi4vcWluLWZvb3RcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkZpbGVzRGVzY3JpcHRvclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2Zvb3RfMy5RaW5GaWxlc0Rlc2NyaXB0b3I7IH0gfSk7XHJcbnZhciBxaW5fZm9vdF80ID0gcmVxdWlyZShcIi4vcWluLWZvb3RcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkZvb3RcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9mb290XzQuUWluRm9vdDsgfSB9KTtcclxudmFyIHFpbl9oZWFkXzEgPSByZXF1aXJlKFwiLi9xaW4taGVhZFwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidHJcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9oZWFkXzEudHI7IH0gfSk7XHJcbnZhciBxaW5faGVhZF8yID0gcmVxdWlyZShcIi4vcWluLWhlYWRcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkhlYWRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9oZWFkXzIuUWluSGVhZDsgfSB9KTtcclxudmFyIHFpbl9sZWdzXzEgPSByZXF1aXJlKFwiLi9xaW4tbGVnc1wiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluTGVnc1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2xlZ3NfMS5RaW5MZWdzOyB9IH0pO1xyXG52YXIgcWluX3NraW5fMSA9IHJlcXVpcmUoXCIuL3Fpbi1za2luXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5Qb2ludFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX3NraW5fMS5RaW5Qb2ludDsgfSB9KTtcclxudmFyIHFpbl9za2luXzIgPSByZXF1aXJlKFwiLi9xaW4tc2tpblwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluRGltZW5zaW9uXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fc2tpbl8yLlFpbkRpbWVuc2lvbjsgfSB9KTtcclxudmFyIHFpbl9za2luXzMgPSByZXF1aXJlKFwiLi9xaW4tc2tpblwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluQm91bmRzXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fc2tpbl8zLlFpbkJvdW5kczsgfSB9KTtcclxudmFyIHFpbl9za2luXzQgPSByZXF1aXJlKFwiLi9xaW4tc2tpblwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluR3JhbmRldXJcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9za2luXzQuUWluR3JhbmRldXI7IH0gfSk7XHJcbnZhciBxaW5fc2tpbl81ID0gcmVxdWlyZShcIi4vcWluLXNraW5cIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpblN0eWxlc1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX3NraW5fNS5RaW5TdHlsZXM7IH0gfSk7XHJcbnZhciBxaW5fc2tpbl82ID0gcmVxdWlyZShcIi4vcWluLXNraW5cIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpblNraW5cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9za2luXzYuUWluU2tpbjsgfSB9KTtcclxudmFyIHFpbl9zb3VsXzEgPSByZXF1aXJlKFwiLi9xaW4tc291bFwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluU291bFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX3NvdWxfMS5RaW5Tb3VsOyB9IH0pO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hbGwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5Bcm1zID0gZXhwb3J0cy5RaW5Qb2ludGVyQ2FsbHMgPSBleHBvcnRzLlFpbldhaXRlcnMgPSBleHBvcnRzLlFpbkV2ZW50ID0gZXhwb3J0cy5RaW5BY3Rpb25LaW5kID0gdm9pZCAwO1xyXG5jb25zdCBxaW5fc2tpbl8xID0gcmVxdWlyZShcIi4vcWluLXNraW5cIik7XHJcbnZhciBRaW5BY3Rpb25LaW5kO1xyXG4oZnVuY3Rpb24gKFFpbkFjdGlvbktpbmQpIHtcclxuICAgIFFpbkFjdGlvbktpbmRbXCJNQUlOXCJdID0gXCJNQUlOXCI7XHJcbiAgICBRaW5BY3Rpb25LaW5kW1wiTUlESVwiXSA9IFwiTUlESVwiO1xyXG4gICAgUWluQWN0aW9uS2luZFtcIk1FTlVcIl0gPSBcIk1FTlVcIjtcclxufSkoUWluQWN0aW9uS2luZCA9IGV4cG9ydHMuUWluQWN0aW9uS2luZCB8fCAoZXhwb3J0cy5RaW5BY3Rpb25LaW5kID0ge30pKTtcclxuY2xhc3MgUWluRXZlbnQge1xyXG4gICAgY29uc3RydWN0b3Iob3JpZ2luLCBpc1N0YXJ0LCBraW5kKSB7XHJcbiAgICAgICAgdmFyIF9hLCBfYiwgX2M7XHJcbiAgICAgICAgdGhpcy5fZXZlbnRLZXkgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX2V2ZW50TW91c2UgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX2V2ZW50VG91Y2ggPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX3BvaW50ID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9zdG9wID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fb3JpZ2luID0gb3JpZ2luO1xyXG4gICAgICAgIHRoaXMuX3N0YXJ0ID0gaXNTdGFydDtcclxuICAgICAgICB0aGlzLl9ldmVudEtleSA9IChfYSA9IGtpbmQgPT09IG51bGwgfHwga2luZCA9PT0gdm9pZCAwID8gdm9pZCAwIDoga2luZC5ldmVudEtleSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogbnVsbDtcclxuICAgICAgICB0aGlzLl9ldmVudE1vdXNlID0gKF9iID0ga2luZCA9PT0gbnVsbCB8fCBraW5kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBraW5kLmV2ZW50TW91c2UpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IG51bGw7XHJcbiAgICAgICAgdGhpcy5fZXZlbnRUb3VjaCA9IChfYyA9IGtpbmQgPT09IG51bGwgfHwga2luZCA9PT0gdm9pZCAwID8gdm9pZCAwIDoga2luZC5ldmVudFRvdWNoKSAhPT0gbnVsbCAmJiBfYyAhPT0gdm9pZCAwID8gX2MgOiBudWxsO1xyXG4gICAgICAgIGlmICh0aGlzLl9ldmVudE1vdXNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3BvaW50ID0gbWFrZUV2ZW50TW91c2VQb2ludChpc1N0YXJ0LCB0aGlzLl9ldmVudE1vdXNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5fZXZlbnRUb3VjaCkge1xyXG4gICAgICAgICAgICB0aGlzLl9wb2ludCA9IG1ha2VFdmVudFRvdWNoKGlzU3RhcnQsIHRoaXMuX2V2ZW50VG91Y2gpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldCBpc1N0YXJ0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdGFydDtcclxuICAgIH1cclxuICAgIGdldCBmcm9tT3JpZ2luKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9vcmlnaW47XHJcbiAgICB9XHJcbiAgICBnZXQgZnJvbVRhcmdldCgpIHtcclxuICAgICAgICBpZiAodGhpcy5fZXZlbnRLZXkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2V2ZW50S2V5LnRhcmdldDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5fZXZlbnRNb3VzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZXZlbnRNb3VzZS50YXJnZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX2V2ZW50VG91Y2gpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2V2ZW50VG91Y2gudGFyZ2V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGdldCBmcm9tVHlwaW5nKCkge1xyXG4gICAgICAgIHJldHVybiAhIXRoaXMuX2V2ZW50S2V5O1xyXG4gICAgfVxyXG4gICAgZ2V0IGZyb21Qb2ludGluZygpIHtcclxuICAgICAgICByZXR1cm4gISF0aGlzLl9wb2ludDtcclxuICAgIH1cclxuICAgIGdldCBoYXNBbHQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2V2ZW50S2V5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9ldmVudEtleS5hbHRLZXk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX2V2ZW50TW91c2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2V2ZW50TW91c2UuYWx0S2V5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLl9ldmVudFRvdWNoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9ldmVudFRvdWNoLmFsdEtleTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZ2V0IGhhc0N0cmwoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2V2ZW50S2V5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9ldmVudEtleS5jdHJsS2V5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLl9ldmVudE1vdXNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9ldmVudE1vdXNlLmN0cmxLZXk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX2V2ZW50VG91Y2gpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2V2ZW50VG91Y2guY3RybEtleTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZ2V0IGhhc1NoaWZ0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9ldmVudEtleSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZXZlbnRLZXkuc2hpZnRLZXk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX2V2ZW50TW91c2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2V2ZW50TW91c2Uuc2hpZnRLZXk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX2V2ZW50VG91Y2gpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2V2ZW50VG91Y2guc2hpZnRLZXk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGdldCBoYXNNZXRhKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9ldmVudEtleSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZXZlbnRLZXkubWV0YUtleTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5fZXZlbnRNb3VzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZXZlbnRNb3VzZS5tZXRhS2V5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLl9ldmVudFRvdWNoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9ldmVudFRvdWNoLm1ldGFLZXk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGdldCBrZXlUeXBlZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5fZXZlbnRLZXkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2V2ZW50S2V5LmtleTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBnZXQgaXNFbnRlcigpIHtcclxuICAgICAgICByZXR1cm4gaXNLZXlFbnRlcih0aGlzLl9ldmVudEtleSk7XHJcbiAgICB9XHJcbiAgICBnZXQgaXNFc2NhcGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIGlzS2V5RXNjYXBlKHRoaXMuX2V2ZW50S2V5KTtcclxuICAgIH1cclxuICAgIGdldCBpc1NwYWNlKCkge1xyXG4gICAgICAgIHJldHVybiBpc0tleVNwYWNlKHRoaXMuX2V2ZW50S2V5KTtcclxuICAgIH1cclxuICAgIGdldCBpc0RvdWJsZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5fZXZlbnRNb3VzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXNFdmVudE1vdXNlRG91YmxlKHRoaXMuX3N0YXJ0LCB0aGlzLl9ldmVudE1vdXNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5fZXZlbnRUb3VjaCkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXNFdmVudFRvdWNoRG91YmxlKHRoaXMuX3N0YXJ0LCB0aGlzLl9ldmVudFRvdWNoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZ2V0IGlzTG9uZygpIHtcclxuICAgICAgICBpZiAodGhpcy5fZXZlbnRNb3VzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXNFdmVudE1vdXNlTG9uZyh0aGlzLl9zdGFydCwgdGhpcy5fZXZlbnRNb3VzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX2V2ZW50VG91Y2gpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlzRXZlbnRUb3VjaExvbmcodGhpcy5fc3RhcnQsIHRoaXMuX2V2ZW50VG91Y2gpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBnZXQgcG9pbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BvaW50O1xyXG4gICAgfVxyXG4gICAgZ2V0IHBvaW50WCgpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgcmV0dXJuIChfYSA9IHRoaXMuX3BvaW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucG9zWDtcclxuICAgIH1cclxuICAgIGdldCBwb2ludFkoKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIHJldHVybiAoX2EgPSB0aGlzLl9wb2ludCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnBvc1k7XHJcbiAgICB9XHJcbiAgICBnZXQgaXNGaXJzdEJ1dHRvbigpIHtcclxuICAgICAgICByZXR1cm4gaXNGaXJzdEJ1dHRvbih0aGlzLl9ldmVudE1vdXNlKTtcclxuICAgIH1cclxuICAgIGdldCBpc01pZGRsZUJ1dHRvbigpIHtcclxuICAgICAgICByZXR1cm4gaXNNaWRkbGVCdXR0b24odGhpcy5fZXZlbnRNb3VzZSk7XHJcbiAgICB9XHJcbiAgICBnZXQgaXNTZWNvbmRCdXR0b24oKSB7XHJcbiAgICAgICAgcmV0dXJuIGlzU2Vjb25kQnV0dG9uKHRoaXMuX2V2ZW50TW91c2UpO1xyXG4gICAgfVxyXG4gICAgZ2V0IGlzT25lRmluZ2VyKCkge1xyXG4gICAgICAgIHJldHVybiBpc09uZUZpbmdlcih0aGlzLl9ldmVudFRvdWNoKTtcclxuICAgIH1cclxuICAgIGdldCBpc1R3b0ZpbmdlcnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIGlzVHdvRmluZ2Vycyh0aGlzLl9ldmVudFRvdWNoKTtcclxuICAgIH1cclxuICAgIGdldCBpc1RocmVlRmluZ2VycygpIHtcclxuICAgICAgICByZXR1cm4gaXNUaHJlZUZpbmdlcnModGhpcy5fZXZlbnRUb3VjaCk7XHJcbiAgICB9XHJcbiAgICBnZXQgaXNGb3VyRmluZ2VycygpIHtcclxuICAgICAgICByZXR1cm4gaXNGb3VyRmluZ2Vycyh0aGlzLl9ldmVudFRvdWNoKTtcclxuICAgIH1cclxuICAgIGdldCBpc01haW4oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3N0YXJ0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX2V2ZW50S2V5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpc01haW5LZXkodGhpcy5fZXZlbnRLZXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLl9ldmVudE1vdXNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpc01haW5Nb3VzZSh0aGlzLl9ldmVudE1vdXNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5fZXZlbnRUb3VjaCkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXNNYWluVG91Y2godGhpcy5fZXZlbnRUb3VjaCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGdldCBpc01haW5LZXkoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3N0YXJ0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGlzTWFpbktleSh0aGlzLl9ldmVudEtleSk7XHJcbiAgICB9XHJcbiAgICBnZXQgaXNNYWluTW91c2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3N0YXJ0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGlzTWFpbk1vdXNlKHRoaXMuX2V2ZW50TW91c2UpO1xyXG4gICAgfVxyXG4gICAgZ2V0IGlzTWFpblRvdWNoKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zdGFydCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpc01haW5Ub3VjaCh0aGlzLl9ldmVudFRvdWNoKTtcclxuICAgIH1cclxuICAgIGdldCBpc01haW5Qb2ludCgpIHtcclxuICAgICAgICBpZiAodGhpcy5fc3RhcnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaXNNYWluTW91c2UodGhpcy5fZXZlbnRNb3VzZSkgfHwgaXNNYWluVG91Y2godGhpcy5fZXZlbnRUb3VjaCk7XHJcbiAgICB9XHJcbiAgICBnZXQgaXNNaWRpKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zdGFydCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9ldmVudEtleSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXNNaWRpS2V5KHRoaXMuX2V2ZW50S2V5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5fZXZlbnRNb3VzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXNNaWRpTW91c2UodGhpcy5fZXZlbnRNb3VzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX2V2ZW50VG91Y2gpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlzTWlkaVRvdWNoKHRoaXMuX2V2ZW50VG91Y2gpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBnZXQgaXNNaWRpS2V5KCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zdGFydCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpc01pZGlLZXkodGhpcy5fZXZlbnRLZXkpO1xyXG4gICAgfVxyXG4gICAgZ2V0IGlzTWlkaU1vdXNlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zdGFydCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpc01pZGlNb3VzZSh0aGlzLl9ldmVudE1vdXNlKTtcclxuICAgIH1cclxuICAgIGdldCBpc01pZGlUb3VjaCgpIHtcclxuICAgICAgICBpZiAodGhpcy5fc3RhcnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaXNNaWRpVG91Y2godGhpcy5fZXZlbnRUb3VjaCk7XHJcbiAgICB9XHJcbiAgICBnZXQgaXNNaWRpUG9pbnQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3N0YXJ0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX2V2ZW50TW91c2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlzTWlkaU1vdXNlKHRoaXMuX2V2ZW50TW91c2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLl9ldmVudFRvdWNoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpc01pZGlUb3VjaCh0aGlzLl9ldmVudFRvdWNoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZ2V0IGlzTWVudSgpIHtcclxuICAgICAgICBpZiAodGhpcy5fc3RhcnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fZXZlbnRLZXkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlzTWVudUtleSh0aGlzLl9ldmVudEtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX2V2ZW50S2V5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpc01lbnVNb3VzZSh0aGlzLl9ldmVudE1vdXNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5fZXZlbnRLZXkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlzTWVudVRvdWNoKHRoaXMuX2V2ZW50VG91Y2gpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBnZXQgaXNNZW51S2V5KCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zdGFydCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpc01lbnVLZXkodGhpcy5fZXZlbnRLZXkpO1xyXG4gICAgfVxyXG4gICAgZ2V0IGlzTWVudU1vdXNlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zdGFydCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpc01lbnVNb3VzZSh0aGlzLl9ldmVudE1vdXNlKTtcclxuICAgIH1cclxuICAgIGdldCBpc01lbnVUb3VjaCgpIHtcclxuICAgICAgICBpZiAodGhpcy5fc3RhcnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaXNNZW51VG91Y2godGhpcy5fZXZlbnRUb3VjaCk7XHJcbiAgICB9XHJcbiAgICBnZXQgaXNNZW51UG9pbnQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3N0YXJ0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX2V2ZW50TW91c2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlzTWVudU1vdXNlKHRoaXMuX2V2ZW50TW91c2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLl9ldmVudFRvdWNoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpc01lbnVUb3VjaCh0aGlzLl9ldmVudFRvdWNoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZ2V0IHN0b3AoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0b3A7XHJcbiAgICB9XHJcbiAgICBjb25zdW1lZCgpIHtcclxuICAgICAgICB0aGlzLl9zdG9wID0gdHJ1ZTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlFpbkV2ZW50ID0gUWluRXZlbnQ7XHJcbmNsYXNzIFFpbldhaXRlcnMge1xyXG4gICAgY29uc3RydWN0b3IoaW5pdGlhbCkge1xyXG4gICAgICAgIHRoaXMud2FpdGVycyA9IGluaXRpYWwgPyBpbml0aWFsIDogW107XHJcbiAgICB9XHJcbiAgICBhZGRXYWl0ZXIod2FpdGVyKSB7XHJcbiAgICAgICAgdGhpcy53YWl0ZXJzLnB1c2god2FpdGVyKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGhhc1dhaXRlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy53YWl0ZXJzLmxlbmd0aCA+IDA7XHJcbiAgICB9XHJcbiAgICBzZW5kV2FpdGVycyhyZXN1bHQpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IHdhaXRlciBvZiB0aGlzLndhaXRlcnMpIHtcclxuICAgICAgICAgICAgd2FpdGVyKHJlc3VsdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUWluV2FpdGVycyA9IFFpbldhaXRlcnM7XHJcbmNsYXNzIFFpblBvaW50ZXJDYWxscyB7XHJcbn1cclxuZXhwb3J0cy5RaW5Qb2ludGVyQ2FsbHMgPSBRaW5Qb2ludGVyQ2FsbHM7XHJcbmZ1bmN0aW9uIHN0b3BFdmVudChldmVudCkge1xyXG4gICAgaWYgKGV2ZW50LnByZXZlbnREZWZhdWx0KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuICAgIHJldHVybiBzdG9wUHJvcGFnYXRpb24oZXZlbnQpO1xyXG59XHJcbmZ1bmN0aW9uIHN0b3BQcm9wYWdhdGlvbihldmVudCkge1xyXG4gICAgaWYgKGV2ZW50LnN0b3BQcm9wYWdhdGlvbikge1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG4gICAgZXZlbnQuY2FuY2VsQnViYmxlID0gdHJ1ZTtcclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG52YXIgbGFzdEV2ZW50TW91c2UgPSBudWxsO1xyXG52YXIgbGFzdEV2ZW50VG91Y2ggPSBudWxsO1xyXG5mdW5jdGlvbiBtYWtlRXZlbnRNb3VzZVBvaW50KGlzU3RhcnQsIGV2KSB7XHJcbiAgICBpZiAoIWV2KSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZXN1bHQgPSB7XHJcbiAgICAgICAgcG9zWDogMCxcclxuICAgICAgICBwb3NZOiAwLFxyXG4gICAgfTtcclxuICAgIGlmIChldi5jbGllbnRYIHx8IGV2LmNsaWVudFkpIHtcclxuICAgICAgICByZXN1bHQucG9zWCA9IGV2LmNsaWVudFg7XHJcbiAgICAgICAgcmVzdWx0LnBvc1kgPSBldi5jbGllbnRZO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzU3RhcnQpIHtcclxuICAgICAgICBsYXN0RXZlbnRNb3VzZSA9IGV2O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5mdW5jdGlvbiBtYWtlRXZlbnRUb3VjaChpc1N0YXJ0LCBldikge1xyXG4gICAgaWYgKCFldikge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmVzdWx0ID0ge1xyXG4gICAgICAgIHBvc1g6IDAsXHJcbiAgICAgICAgcG9zWTogMCxcclxuICAgIH07XHJcbiAgICBpZiAoZXYudG91Y2hlcyAmJiB0aGlzLl9ldmVudC50b3VjaGVzLmxlbmd0aCA+PSAxKSB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gTWF0aC5mbG9vcih0aGlzLl9ldmVudC50b3VjaGVzLmxlbmd0aCAvIDIpO1xyXG4gICAgICAgIHJlc3VsdC5wb3NYID0gZXYudG91Y2hlc1tpbmRleF0uY2xpZW50WDtcclxuICAgICAgICByZXN1bHQucG9zWSA9IGV2LnRvdWNoZXNbaW5kZXhdLmNsaWVudFk7XHJcbiAgICB9XHJcbiAgICBpZiAoaXNTdGFydCkge1xyXG4gICAgICAgIGxhc3RFdmVudFRvdWNoID0gZXY7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbmZ1bmN0aW9uIGlzRXZlbnRNb3VzZURvdWJsZShpc1N0YXJ0LCBldikge1xyXG4gICAgaWYgKCFpc1N0YXJ0IHx8IGxhc3RFdmVudE1vdXNlID09IG51bGwgfHwgZXYgPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGNvbnN0IHRpbWVEaWYgPSBldi50aW1lU3RhbXAgLSBsYXN0RXZlbnRNb3VzZS50aW1lU3RhbXA7XHJcbiAgICByZXR1cm4gdGltZURpZiA8IDQ1MDtcclxufVxyXG5mdW5jdGlvbiBpc0V2ZW50VG91Y2hEb3VibGUoaXNTdGFydCwgZXYpIHtcclxuICAgIGlmICghaXNTdGFydCB8fCBsYXN0RXZlbnRUb3VjaCA9PSBudWxsIHx8IGV2ID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBjb25zdCB0aW1lRGlmID0gZXYudGltZVN0YW1wIC0gbGFzdEV2ZW50VG91Y2gudGltZVN0YW1wO1xyXG4gICAgcmV0dXJuIHRpbWVEaWYgPCA0NTA7XHJcbn1cclxuZnVuY3Rpb24gaXNFdmVudE1vdXNlTG9uZyhpc1N0YXJ0LCBldikge1xyXG4gICAgaWYgKCFpc1N0YXJ0IHx8IGxhc3RFdmVudE1vdXNlID09IG51bGwgfHwgZXYgPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGNvbnN0IHRpbWVEaWYgPSBldi50aW1lU3RhbXAgLSBsYXN0RXZlbnRNb3VzZS50aW1lU3RhbXA7XHJcbiAgICByZXR1cm4gdGltZURpZiA+IDg0MDtcclxufVxyXG5mdW5jdGlvbiBpc0V2ZW50VG91Y2hMb25nKGlzU3RhcnQsIGV2KSB7XHJcbiAgICBpZiAoIWlzU3RhcnQgfHwgbGFzdEV2ZW50VG91Y2ggPT0gbnVsbCB8fCBldiA9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdGltZURpZiA9IGV2LnRpbWVTdGFtcCAtIGxhc3RFdmVudFRvdWNoLnRpbWVTdGFtcDtcclxuICAgIHJldHVybiB0aW1lRGlmID4gODQwO1xyXG59XHJcbmZ1bmN0aW9uIGlzS2V5SW5MaXN0KGV2LCBsaXN0KSB7XHJcbiAgICBpZiAoIWV2KSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgbGV0IGtleUxvd2VyID0gZXYua2V5LnRvTG93ZXJDYXNlKCk7XHJcbiAgICByZXR1cm4gbGlzdC5pbmRleE9mKGtleUxvd2VyKSA+IC0xO1xyXG59XHJcbmZ1bmN0aW9uIGlzS2V5RW50ZXIoZXYpIHtcclxuICAgIGlmICghZXYpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXNLZXlJbkxpc3QoZXYsIFtcImVudGVyXCIsIFwicmV0dXJuXCJdKSB8fCBldi5rZXlDb2RlID09PSAxMztcclxufVxyXG5mdW5jdGlvbiBpc0tleUVzY2FwZShldikge1xyXG4gICAgaWYgKCFldikge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiBpc0tleUluTGlzdChldiwgW1wiZXNjXCIsIFwiZXNjYXBlXCJdKSB8fCBldi5rZXlDb2RlID09PSAyNztcclxufVxyXG5mdW5jdGlvbiBpc0tleVNwYWNlKGV2KSB7XHJcbiAgICBpZiAoIWV2KSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlzS2V5SW5MaXN0KGV2LCBbXCIgXCIsIFwic3BhY2VcIiwgXCJzcGFjZWJhclwiXSkgfHwgZXYua2V5Q29kZSA9PT0gMzI7XHJcbn1cclxuZnVuY3Rpb24gaXNGaXJzdEJ1dHRvbihldikge1xyXG4gICAgaWYgKCFldikge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiAoZXYgPT09IG51bGwgfHwgZXYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGV2LmJ1dHRvbikgPT0gMDtcclxufVxyXG5mdW5jdGlvbiBpc01pZGRsZUJ1dHRvbihldikge1xyXG4gICAgaWYgKCFldikge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiAoZXYgPT09IG51bGwgfHwgZXYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGV2LmJ1dHRvbikgPT0gMTtcclxufVxyXG5mdW5jdGlvbiBpc1NlY29uZEJ1dHRvbihldikge1xyXG4gICAgaWYgKCFldikge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiAoZXYgPT09IG51bGwgfHwgZXYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGV2LmJ1dHRvbikgPT0gMjtcclxufVxyXG5mdW5jdGlvbiBpc09uZUZpbmdlcihldikge1xyXG4gICAgaWYgKCFldikge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiAoZXYgPT09IG51bGwgfHwgZXYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGV2LnRvdWNoZXMubGVuZ3RoKSA9PSAxO1xyXG59XHJcbmZ1bmN0aW9uIGlzVHdvRmluZ2Vycyhldikge1xyXG4gICAgaWYgKCFldikge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiAoZXYgPT09IG51bGwgfHwgZXYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGV2LnRvdWNoZXMubGVuZ3RoKSA9PSAyO1xyXG59XHJcbmZ1bmN0aW9uIGlzVGhyZWVGaW5nZXJzKGV2KSB7XHJcbiAgICBpZiAoIWV2KSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChldiA9PT0gbnVsbCB8fCBldiA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXYudG91Y2hlcy5sZW5ndGgpID09IDM7XHJcbn1cclxuZnVuY3Rpb24gaXNGb3VyRmluZ2Vycyhldikge1xyXG4gICAgaWYgKCFldikge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiAoZXYgPT09IG51bGwgfHwgZXYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGV2LnRvdWNoZXMubGVuZ3RoKSA9PSA0O1xyXG59XHJcbmZ1bmN0aW9uIGlzTWFpbktleShldikge1xyXG4gICAgaWYgKCFldikge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiBpc0tleUVudGVyKGV2KTtcclxufVxyXG5mdW5jdGlvbiBpc01pZGlLZXkoZXYpIHtcclxuICAgIGlmICghZXYpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZXYuY3RybEtleSAmJiBldi5hbHRLZXkgJiYgaXNLZXlTcGFjZShldik7XHJcbn1cclxuZnVuY3Rpb24gaXNNZW51S2V5KGV2KSB7XHJcbiAgICBpZiAoIWV2KSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGV2LmN0cmxLZXkgJiYgIWV2LmFsdEtleSAmJiBpc0tleVNwYWNlKGV2KTtcclxufVxyXG5mdW5jdGlvbiBpc01haW5Nb3VzZShldikge1xyXG4gICAgaWYgKCFldikge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiBpc0ZpcnN0QnV0dG9uKGV2KTtcclxufVxyXG5mdW5jdGlvbiBpc01haW5Ub3VjaChldikge1xyXG4gICAgaWYgKCFldikge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiBpc09uZUZpbmdlcihldik7XHJcbn1cclxuZnVuY3Rpb24gaXNNaWRpTW91c2UoZXYpIHtcclxuICAgIGlmICghZXYpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXNNaWRkbGVCdXR0b24oZXYpO1xyXG59XHJcbmZ1bmN0aW9uIGlzTWlkaVRvdWNoKGV2KSB7XHJcbiAgICBpZiAoIWV2KSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlzVGhyZWVGaW5nZXJzKGV2KTtcclxufVxyXG5mdW5jdGlvbiBpc01lbnVNb3VzZShldikge1xyXG4gICAgaWYgKCFldikge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiBpc1NlY29uZEJ1dHRvbihldik7XHJcbn1cclxuZnVuY3Rpb24gaXNNZW51VG91Y2goZXYpIHtcclxuICAgIGlmICghZXYpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXNUd29GaW5nZXJzKGV2KTtcclxufVxyXG5mdW5jdGlvbiBhZGRBY3Rpb24ob3JpZ2luLCBhY3Rpb24pIHtcclxuICAgIG9yaWdpbi5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBhY3RLZXlEb3duKTtcclxuICAgIG9yaWdpbi5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgYWN0S2V5VXApO1xyXG4gICAgb3JpZ2luLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgYWN0TW91c2VEb3duKTtcclxuICAgIG9yaWdpbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBhY3RNb3VzZVVwKTtcclxuICAgIG9yaWdpbi5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBhY3RUb3VjaFN0YXJ0KTtcclxuICAgIG9yaWdpbi5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgYWN0VG91Y2hFbmQpO1xyXG4gICAgZnVuY3Rpb24gYWN0S2V5RG93bihldikge1xyXG4gICAgICAgIGxldCBxaW5FdmVudCA9IG5ldyBRaW5FdmVudChvcmlnaW4sIHRydWUsIHsgZXZlbnRLZXk6IGV2IH0pO1xyXG4gICAgICAgIGFjdGlvbihxaW5FdmVudCk7XHJcbiAgICAgICAgaWYgKHFpbkV2ZW50LnN0b3ApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN0b3BFdmVudChldik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gc3RvcFByb3BhZ2F0aW9uKGV2KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhY3RLZXlVcChldikge1xyXG4gICAgICAgIGxldCBxaW5FdmVudCA9IG5ldyBRaW5FdmVudChvcmlnaW4sIGZhbHNlLCB7IGV2ZW50S2V5OiBldiB9KTtcclxuICAgICAgICBhY3Rpb24ocWluRXZlbnQpO1xyXG4gICAgICAgIGlmIChxaW5FdmVudC5zdG9wKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdG9wRXZlbnQoZXYpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN0b3BQcm9wYWdhdGlvbihldik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYWN0TW91c2VEb3duKGV2KSB7XHJcbiAgICAgICAgbGV0IHFpbkV2ZW50ID0gbmV3IFFpbkV2ZW50KG9yaWdpbiwgdHJ1ZSwgeyBldmVudE1vdXNlOiBldiB9KTtcclxuICAgICAgICBhY3Rpb24ocWluRXZlbnQpO1xyXG4gICAgICAgIGlmIChxaW5FdmVudC5zdG9wKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdG9wRXZlbnQoZXYpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN0b3BQcm9wYWdhdGlvbihldik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYWN0TW91c2VVcChldikge1xyXG4gICAgICAgIGxldCBxaW5FdmVudCA9IG5ldyBRaW5FdmVudChvcmlnaW4sIGZhbHNlLCB7IGV2ZW50TW91c2U6IGV2IH0pO1xyXG4gICAgICAgIGFjdGlvbihxaW5FdmVudCk7XHJcbiAgICAgICAgaWYgKHFpbkV2ZW50LnN0b3ApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN0b3BFdmVudChldik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gc3RvcFByb3BhZ2F0aW9uKGV2KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhY3RUb3VjaFN0YXJ0KGV2KSB7XHJcbiAgICAgICAgbGV0IHFpbkV2ZW50ID0gbmV3IFFpbkV2ZW50KG9yaWdpbiwgdHJ1ZSwgeyBldmVudFRvdWNoOiBldiB9KTtcclxuICAgICAgICBhY3Rpb24ocWluRXZlbnQpO1xyXG4gICAgICAgIGlmIChxaW5FdmVudC5zdG9wKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdG9wRXZlbnQoZXYpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN0b3BQcm9wYWdhdGlvbihldik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYWN0VG91Y2hFbmQoZXYpIHtcclxuICAgICAgICBsZXQgcWluRXZlbnQgPSBuZXcgUWluRXZlbnQob3JpZ2luLCBmYWxzZSwgeyBldmVudFRvdWNoOiBldiB9KTtcclxuICAgICAgICBhY3Rpb24ocWluRXZlbnQpO1xyXG4gICAgICAgIGlmIChxaW5FdmVudC5zdG9wKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdG9wRXZlbnQoZXYpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN0b3BQcm9wYWdhdGlvbihldik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGFkZEFjdGlvbk1haW4ob3JpZ2luLCBhY3Rpb24pIHtcclxuICAgIGFkZEFjdGlvbihvcmlnaW4sIChxaW5FdmVudCkgPT4ge1xyXG4gICAgICAgIGlmIChxaW5FdmVudC5pc01haW4pIHtcclxuICAgICAgICAgICAgYWN0aW9uKHFpbkV2ZW50KTtcclxuICAgICAgICAgICAgcWluRXZlbnQuY29uc3VtZWQoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBhZGRBY3Rpb25NYWluS2V5KG9yaWdpbiwgYWN0aW9uKSB7XHJcbiAgICBhZGRBY3Rpb24ob3JpZ2luLCAocWluRXZlbnQpID0+IHtcclxuICAgICAgICBpZiAocWluRXZlbnQuaXNNYWluS2V5KSB7XHJcbiAgICAgICAgICAgIGFjdGlvbihxaW5FdmVudCk7XHJcbiAgICAgICAgICAgIHFpbkV2ZW50LmNvbnN1bWVkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gYWRkQWN0aW9uTWFpbk1vdXNlKG9yaWdpbiwgYWN0aW9uKSB7XHJcbiAgICBhZGRBY3Rpb24ob3JpZ2luLCAocWluRXZlbnQpID0+IHtcclxuICAgICAgICBpZiAocWluRXZlbnQuaXNNYWluTW91c2UpIHtcclxuICAgICAgICAgICAgYWN0aW9uKHFpbkV2ZW50KTtcclxuICAgICAgICAgICAgcWluRXZlbnQuY29uc3VtZWQoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBhZGRBY3Rpb25NYWluVG91Y2gob3JpZ2luLCBhY3Rpb24pIHtcclxuICAgIGFkZEFjdGlvbihvcmlnaW4sIChxaW5FdmVudCkgPT4ge1xyXG4gICAgICAgIGlmIChxaW5FdmVudC5pc01haW5Nb3VzZSkge1xyXG4gICAgICAgICAgICBhY3Rpb24ocWluRXZlbnQpO1xyXG4gICAgICAgICAgICBxaW5FdmVudC5jb25zdW1lZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGFkZEFjdGlvbk1haW5Qb2ludChvcmlnaW4sIGFjdGlvbikge1xyXG4gICAgYWRkQWN0aW9uKG9yaWdpbiwgKHFpbkV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKHFpbkV2ZW50LmlzTWFpblBvaW50KSB7XHJcbiAgICAgICAgICAgIGFjdGlvbihxaW5FdmVudCk7XHJcbiAgICAgICAgICAgIHFpbkV2ZW50LmNvbnN1bWVkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gYWRkQWN0aW9uTWlkaShvcmlnaW4sIGFjdGlvbikge1xyXG4gICAgYWRkQWN0aW9uKG9yaWdpbiwgKHFpbkV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKHFpbkV2ZW50LmlzTWlkaSkge1xyXG4gICAgICAgICAgICBhY3Rpb24ocWluRXZlbnQpO1xyXG4gICAgICAgICAgICBxaW5FdmVudC5jb25zdW1lZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGFkZEFjdGlvbk1pZGlLZXkob3JpZ2luLCBhY3Rpb24pIHtcclxuICAgIGFkZEFjdGlvbihvcmlnaW4sIChxaW5FdmVudCkgPT4ge1xyXG4gICAgICAgIGlmIChxaW5FdmVudC5pc01pZGlLZXkpIHtcclxuICAgICAgICAgICAgYWN0aW9uKHFpbkV2ZW50KTtcclxuICAgICAgICAgICAgcWluRXZlbnQuY29uc3VtZWQoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBhZGRBY3Rpb25NaWRpTW91c2Uob3JpZ2luLCBhY3Rpb24pIHtcclxuICAgIGFkZEFjdGlvbihvcmlnaW4sIChxaW5FdmVudCkgPT4ge1xyXG4gICAgICAgIGlmIChxaW5FdmVudC5pc01pZGlNb3VzZSkge1xyXG4gICAgICAgICAgICBhY3Rpb24ocWluRXZlbnQpO1xyXG4gICAgICAgICAgICBxaW5FdmVudC5jb25zdW1lZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGFkZEFjdGlvbk1pZGlUb3VjaChvcmlnaW4sIGFjdGlvbikge1xyXG4gICAgYWRkQWN0aW9uKG9yaWdpbiwgKHFpbkV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKHFpbkV2ZW50LmlzTWlkaU1vdXNlKSB7XHJcbiAgICAgICAgICAgIGFjdGlvbihxaW5FdmVudCk7XHJcbiAgICAgICAgICAgIHFpbkV2ZW50LmNvbnN1bWVkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gYWRkQWN0aW9uTWlkaVBvaW50KG9yaWdpbiwgYWN0aW9uKSB7XHJcbiAgICBhZGRBY3Rpb24ob3JpZ2luLCAocWluRXZlbnQpID0+IHtcclxuICAgICAgICBpZiAocWluRXZlbnQuaXNNaWRpUG9pbnQpIHtcclxuICAgICAgICAgICAgYWN0aW9uKHFpbkV2ZW50KTtcclxuICAgICAgICAgICAgcWluRXZlbnQuY29uc3VtZWQoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBhZGRBY3Rpb25NZW51KG9yaWdpbiwgYWN0aW9uKSB7XHJcbiAgICBhZGRBY3Rpb24ob3JpZ2luLCAocWluRXZlbnQpID0+IHtcclxuICAgICAgICBpZiAocWluRXZlbnQuaXNNZW51KSB7XHJcbiAgICAgICAgICAgIGFjdGlvbihxaW5FdmVudCk7XHJcbiAgICAgICAgICAgIHFpbkV2ZW50LmNvbnN1bWVkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gYWRkQWN0aW9uTWVudUtleShvcmlnaW4sIGFjdGlvbikge1xyXG4gICAgYWRkQWN0aW9uKG9yaWdpbiwgKHFpbkV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKHFpbkV2ZW50LmlzTWVudUtleSkge1xyXG4gICAgICAgICAgICBhY3Rpb24ocWluRXZlbnQpO1xyXG4gICAgICAgICAgICBxaW5FdmVudC5jb25zdW1lZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGFkZEFjdGlvbk1lbnVNb3VzZShvcmlnaW4sIGFjdGlvbikge1xyXG4gICAgYWRkQWN0aW9uKG9yaWdpbiwgKHFpbkV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKHFpbkV2ZW50LmlzTWVudU1vdXNlKSB7XHJcbiAgICAgICAgICAgIGFjdGlvbihxaW5FdmVudCk7XHJcbiAgICAgICAgICAgIHFpbkV2ZW50LmNvbnN1bWVkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gYWRkQWN0aW9uTWVudVRvdWNoKG9yaWdpbiwgYWN0aW9uKSB7XHJcbiAgICBhZGRBY3Rpb24ob3JpZ2luLCAocWluRXZlbnQpID0+IHtcclxuICAgICAgICBpZiAocWluRXZlbnQuaXNNZW51TW91c2UpIHtcclxuICAgICAgICAgICAgYWN0aW9uKHFpbkV2ZW50KTtcclxuICAgICAgICAgICAgcWluRXZlbnQuY29uc3VtZWQoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBhZGRBY3Rpb25NZW51UG9pbnQob3JpZ2luLCBhY3Rpb24pIHtcclxuICAgIGFkZEFjdGlvbihvcmlnaW4sIChxaW5FdmVudCkgPT4ge1xyXG4gICAgICAgIGlmIChxaW5FdmVudC5pc01lbnVQb2ludCkge1xyXG4gICAgICAgICAgICBhY3Rpb24ocWluRXZlbnQpO1xyXG4gICAgICAgICAgICBxaW5FdmVudC5jb25zdW1lZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGFkZEFjdGlvbnMob3JpZ2lucywgYWN0aW9uKSB7XHJcbiAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2Ygb3JpZ2lucykge1xyXG4gICAgICAgIGFkZEFjdGlvbihlbGVtZW50LCBhY3Rpb24pO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGFkZEFjdGlvbnNNYWluKG9yaWdpbnMsIGFjdGlvbikge1xyXG4gICAgZm9yIChjb25zdCBlbGVtZW50IG9mIG9yaWdpbnMpIHtcclxuICAgICAgICBhZGRBY3Rpb25NYWluKGVsZW1lbnQsIGFjdGlvbik7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gYWRkQWN0aW9uc01haW5LZXkob3JpZ2lucywgYWN0aW9uKSB7XHJcbiAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2Ygb3JpZ2lucykge1xyXG4gICAgICAgIGFkZEFjdGlvbk1haW5LZXkoZWxlbWVudCwgYWN0aW9uKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBhZGRBY3Rpb25zTWFpbk1vdXNlKG9yaWdpbnMsIGFjdGlvbikge1xyXG4gICAgZm9yIChjb25zdCBlbGVtZW50IG9mIG9yaWdpbnMpIHtcclxuICAgICAgICBhZGRBY3Rpb25NYWluTW91c2UoZWxlbWVudCwgYWN0aW9uKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBhZGRBY3Rpb25zTWFpblRvdWNoKG9yaWdpbnMsIGFjdGlvbikge1xyXG4gICAgZm9yIChjb25zdCBlbGVtZW50IG9mIG9yaWdpbnMpIHtcclxuICAgICAgICBhZGRBY3Rpb25NYWluUG9pbnQoZWxlbWVudCwgYWN0aW9uKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBhZGRBY3Rpb25zTWFpblBvaW50KG9yaWdpbnMsIGFjdGlvbikge1xyXG4gICAgZm9yIChjb25zdCBlbGVtZW50IG9mIG9yaWdpbnMpIHtcclxuICAgICAgICBhZGRBY3Rpb25NYWluUG9pbnQoZWxlbWVudCwgYWN0aW9uKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBhZGRBY3Rpb25zTWlkaShvcmlnaW5zLCBhY3Rpb24pIHtcclxuICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBvcmlnaW5zKSB7XHJcbiAgICAgICAgYWRkQWN0aW9uTWlkaShlbGVtZW50LCBhY3Rpb24pO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGFkZEFjdGlvbnNNaWRpS2V5KG9yaWdpbnMsIGFjdGlvbikge1xyXG4gICAgZm9yIChjb25zdCBlbGVtZW50IG9mIG9yaWdpbnMpIHtcclxuICAgICAgICBhZGRBY3Rpb25NaWRpS2V5KGVsZW1lbnQsIGFjdGlvbik7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gYWRkQWN0aW9uc01pZGlNb3VzZShvcmlnaW5zLCBhY3Rpb24pIHtcclxuICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBvcmlnaW5zKSB7XHJcbiAgICAgICAgYWRkQWN0aW9uTWlkaU1vdXNlKGVsZW1lbnQsIGFjdGlvbik7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gYWRkQWN0aW9uc01pZGlUb3VjaChvcmlnaW5zLCBhY3Rpb24pIHtcclxuICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBvcmlnaW5zKSB7XHJcbiAgICAgICAgYWRkQWN0aW9uTWlkaVBvaW50KGVsZW1lbnQsIGFjdGlvbik7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gYWRkQWN0aW9uc01pZGlQb2ludChvcmlnaW5zLCBhY3Rpb24pIHtcclxuICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBvcmlnaW5zKSB7XHJcbiAgICAgICAgYWRkQWN0aW9uTWlkaVBvaW50KGVsZW1lbnQsIGFjdGlvbik7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gYWRkQWN0aW9uc01lbnUob3JpZ2lucywgYWN0aW9uKSB7XHJcbiAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2Ygb3JpZ2lucykge1xyXG4gICAgICAgIGFkZEFjdGlvbk1lbnUoZWxlbWVudCwgYWN0aW9uKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBhZGRBY3Rpb25zTWVudUtleShvcmlnaW5zLCBhY3Rpb24pIHtcclxuICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBvcmlnaW5zKSB7XHJcbiAgICAgICAgYWRkQWN0aW9uTWVudUtleShlbGVtZW50LCBhY3Rpb24pO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGFkZEFjdGlvbnNNZW51TW91c2Uob3JpZ2lucywgYWN0aW9uKSB7XHJcbiAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2Ygb3JpZ2lucykge1xyXG4gICAgICAgIGFkZEFjdGlvbk1lbnVNb3VzZShlbGVtZW50LCBhY3Rpb24pO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGFkZEFjdGlvbnNNZW51VG91Y2gob3JpZ2lucywgYWN0aW9uKSB7XHJcbiAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2Ygb3JpZ2lucykge1xyXG4gICAgICAgIGFkZEFjdGlvbk1lbnVQb2ludChlbGVtZW50LCBhY3Rpb24pO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGFkZEFjdGlvbnNNZW51UG9pbnQob3JpZ2lucywgYWN0aW9uKSB7XHJcbiAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2Ygb3JpZ2lucykge1xyXG4gICAgICAgIGFkZEFjdGlvbk1lbnVQb2ludChlbGVtZW50LCBhY3Rpb24pO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGFkZE1vdmVyKHNvdXJjZXMsIHRhcmdldCwgZHJhZ0NhbGxzKSB7XHJcbiAgICB2YXIgZHJhZ0luaXRFdmVudFggPSAwO1xyXG4gICAgdmFyIGRyYWdJbml0RXZlbnRZID0gMDtcclxuICAgIHZhciBkcmFnSW5pdFBvc1ggPSAwO1xyXG4gICAgdmFyIGRyYWdJbml0UG9zWSA9IDA7XHJcbiAgICBmb3IgKGxldCBzb3VyY2Ugb2Ygc291cmNlcykge1xyXG4gICAgICAgIHNvdXJjZS5vbm1vdXNlZG93biA9IG9uTW92ZXJNb3VzZUluaXQ7XHJcbiAgICAgICAgc291cmNlLm9udG91Y2hzdGFydCA9IG9uTW92ZXJUb3VjaEluaXQ7XHJcbiAgICAgICAgc291cmNlLm9uZHJhZ3N0YXJ0ID0gc3RvcEV2ZW50O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gb25Nb3Zlck1vdXNlSW5pdChldikge1xyXG4gICAgICAgIGlmIChkb2N1bWVudC5vbm1vdXNlbW92ZSB8fCBkb2N1bWVudC5vbnRvdWNobW92ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uRG91YmxlICYmIGlzRXZlbnRNb3VzZURvdWJsZSh0cnVlLCBldikpIHtcclxuICAgICAgICAgICAgZHJhZ0NhbGxzLm9uRG91YmxlKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRyYWdDYWxscyAmJiBkcmFnQ2FsbHMub25Mb25nICYmIGlzRXZlbnRNb3VzZUxvbmcodHJ1ZSwgZXYpKSB7XHJcbiAgICAgICAgICAgIGRyYWdDYWxscy5vbkxvbmcoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwb2ludGVyID0gbWFrZUV2ZW50TW91c2VQb2ludCh0cnVlLCBldik7XHJcbiAgICAgICAgZHJhZ0luaXRFdmVudFggPSBwb2ludGVyLnBvc1g7XHJcbiAgICAgICAgZHJhZ0luaXRFdmVudFkgPSBwb2ludGVyLnBvc1k7XHJcbiAgICAgICAgZHJhZ0luaXRQb3NYID0gcGFyc2VJbnQodGFyZ2V0LnN0eWxlLmxlZnQsIDEwKTtcclxuICAgICAgICBkcmFnSW5pdFBvc1kgPSBwYXJzZUludCh0YXJnZXQuc3R5bGUudG9wLCAxMCk7XHJcbiAgICAgICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSBvbk1vdmVyTW91c2VNb3ZlO1xyXG4gICAgICAgIGRvY3VtZW50Lm9udG91Y2htb3ZlID0gb25Nb3ZlclRvdWNoTW92ZTtcclxuICAgICAgICBkb2N1bWVudC5vbm1vdXNldXAgPSBvbk1vdmVyQ2xvc2U7XHJcbiAgICAgICAgZG9jdW1lbnQub250b3VjaGVuZCA9IG9uTW92ZXJDbG9zZTtcclxuICAgICAgICBxaW5fc2tpbl8xLlFpblNraW4uaGlkZUFsbElGcmFtZXMoKTtcclxuICAgICAgICBpZiAoZHJhZ0NhbGxzICYmIGRyYWdDYWxscy5vblN0YXJ0KSB7XHJcbiAgICAgICAgICAgIGRyYWdDYWxscy5vblN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdG9wRXZlbnQoZXYpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gb25Nb3ZlclRvdWNoSW5pdChldikge1xyXG4gICAgICAgIGlmIChkb2N1bWVudC5vbm1vdXNlbW92ZSB8fCBkb2N1bWVudC5vbnRvdWNobW92ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uRG91YmxlICYmIGlzRXZlbnRUb3VjaERvdWJsZSh0cnVlLCBldikpIHtcclxuICAgICAgICAgICAgZHJhZ0NhbGxzLm9uRG91YmxlKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRyYWdDYWxscyAmJiBkcmFnQ2FsbHMub25Mb25nICYmIGlzRXZlbnRUb3VjaExvbmcodHJ1ZSwgZXYpKSB7XHJcbiAgICAgICAgICAgIGRyYWdDYWxscy5vbkxvbmcoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwb2ludGVyID0gbWFrZUV2ZW50VG91Y2godHJ1ZSwgZXYpO1xyXG4gICAgICAgIGRyYWdJbml0RXZlbnRYID0gcG9pbnRlci5wb3NYO1xyXG4gICAgICAgIGRyYWdJbml0RXZlbnRZID0gcG9pbnRlci5wb3NZO1xyXG4gICAgICAgIGRyYWdJbml0UG9zWCA9IHBhcnNlSW50KHRhcmdldC5zdHlsZS5sZWZ0LCAxMCk7XHJcbiAgICAgICAgZHJhZ0luaXRQb3NZID0gcGFyc2VJbnQodGFyZ2V0LnN0eWxlLnRvcCwgMTApO1xyXG4gICAgICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gb25Nb3Zlck1vdXNlTW92ZTtcclxuICAgICAgICBkb2N1bWVudC5vbnRvdWNobW92ZSA9IG9uTW92ZXJUb3VjaE1vdmU7XHJcbiAgICAgICAgZG9jdW1lbnQub25tb3VzZXVwID0gb25Nb3ZlckNsb3NlO1xyXG4gICAgICAgIGRvY3VtZW50Lm9udG91Y2hlbmQgPSBvbk1vdmVyQ2xvc2U7XHJcbiAgICAgICAgcWluX3NraW5fMS5RaW5Ta2luLmhpZGVBbGxJRnJhbWVzKCk7XHJcbiAgICAgICAgaWYgKGRyYWdDYWxscyAmJiBkcmFnQ2FsbHMub25TdGFydCkge1xyXG4gICAgICAgICAgICBkcmFnQ2FsbHMub25TdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG9uTW92ZXJNb3VzZU1vdmUoZXYpIHtcclxuICAgICAgICBjb25zdCBwb2ludGVyID0gbWFrZUV2ZW50TW91c2VQb2ludChmYWxzZSwgZXYpO1xyXG4gICAgICAgIHZhciBkcmFnRGlmWCA9IHBvaW50ZXIucG9zWCAtIGRyYWdJbml0RXZlbnRYO1xyXG4gICAgICAgIHZhciBkcmFnRGlmWSA9IHBvaW50ZXIucG9zWSAtIGRyYWdJbml0RXZlbnRZO1xyXG4gICAgICAgIHZhciBkcmFnRmluYWxYID0gZHJhZ0luaXRQb3NYICsgZHJhZ0RpZlg7XHJcbiAgICAgICAgdmFyIGRyYWdGaW5hbFkgPSBkcmFnSW5pdFBvc1kgKyBkcmFnRGlmWTtcclxuICAgICAgICB0YXJnZXQuc3R5bGUubGVmdCA9IChkcmFnRmluYWxYID4gMCA/IGRyYWdGaW5hbFggOiAwKSArIFwicHhcIjtcclxuICAgICAgICB0YXJnZXQuc3R5bGUudG9wID0gKGRyYWdGaW5hbFkgPiAwID8gZHJhZ0ZpbmFsWSA6IDApICsgXCJweFwiO1xyXG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uTW92ZSkge1xyXG4gICAgICAgICAgICBkcmFnQ2FsbHMub25Nb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdG9wRXZlbnQoZXYpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gb25Nb3ZlclRvdWNoTW92ZShldikge1xyXG4gICAgICAgIGNvbnN0IHBvaW50ZXIgPSBtYWtlRXZlbnRUb3VjaChmYWxzZSwgZXYpO1xyXG4gICAgICAgIHZhciBkcmFnRGlmWCA9IHBvaW50ZXIucG9zWCAtIGRyYWdJbml0RXZlbnRYO1xyXG4gICAgICAgIHZhciBkcmFnRGlmWSA9IHBvaW50ZXIucG9zWSAtIGRyYWdJbml0RXZlbnRZO1xyXG4gICAgICAgIHZhciBkcmFnRmluYWxYID0gZHJhZ0luaXRQb3NYICsgZHJhZ0RpZlg7XHJcbiAgICAgICAgdmFyIGRyYWdGaW5hbFkgPSBkcmFnSW5pdFBvc1kgKyBkcmFnRGlmWTtcclxuICAgICAgICB0YXJnZXQuc3R5bGUubGVmdCA9IChkcmFnRmluYWxYID4gMCA/IGRyYWdGaW5hbFggOiAwKSArIFwicHhcIjtcclxuICAgICAgICB0YXJnZXQuc3R5bGUudG9wID0gKGRyYWdGaW5hbFkgPiAwID8gZHJhZ0ZpbmFsWSA6IDApICsgXCJweFwiO1xyXG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uTW92ZSkge1xyXG4gICAgICAgICAgICBkcmFnQ2FsbHMub25Nb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdG9wRXZlbnQoZXYpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gb25Nb3ZlckNsb3NlKGV2KSB7XHJcbiAgICAgICAgZG9jdW1lbnQub250b3VjaG1vdmUgPSBudWxsO1xyXG4gICAgICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gbnVsbDtcclxuICAgICAgICBkb2N1bWVudC5vbnRvdWNoZW5kID0gbnVsbDtcclxuICAgICAgICBkb2N1bWVudC5vbm1vdXNldXAgPSBudWxsO1xyXG4gICAgICAgIHFpbl9za2luXzEuUWluU2tpbi5zaG93QWxsSUZyYW1lcygpO1xyXG4gICAgICAgIHFpbl9za2luXzEuUWluU2tpbi5jbGVhclNlbGVjdGlvbigpO1xyXG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uRW5kKSB7XHJcbiAgICAgICAgICAgIGRyYWdDYWxscy5vbkVuZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBhZGRSZXNpemVyKHNvdXJjZXMsIHRhcmdldCwgZHJhZ0NhbGxzKSB7XHJcbiAgICB2YXIgZHJhZ0luaXRFdmVudFggPSAwO1xyXG4gICAgdmFyIGRyYWdJbml0RXZlbnRZID0gMDtcclxuICAgIHZhciBkcmFnSW5pdFdpZHRoID0gMDtcclxuICAgIHZhciBkcmFnSW5pdEhlaWdodCA9IDA7XHJcbiAgICBmb3IgKGxldCBzb3VyY2Ugb2Ygc291cmNlcykge1xyXG4gICAgICAgIHNvdXJjZS5vbm1vdXNlZG93biA9IG9uUmVzaXplck1vdXNlSW5pdDtcclxuICAgICAgICBzb3VyY2Uub250b3VjaHN0YXJ0ID0gb25SZXNpemVyVG91Y2hJbml0O1xyXG4gICAgICAgIHNvdXJjZS5vbmRyYWdzdGFydCA9IHN0b3BFdmVudDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG9uUmVzaXplck1vdXNlSW5pdChldikge1xyXG4gICAgICAgIGlmIChkb2N1bWVudC5vbm1vdXNlbW92ZSB8fCBkb2N1bWVudC5vbnRvdWNobW92ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uRG91YmxlICYmIGlzRXZlbnRNb3VzZURvdWJsZSh0cnVlLCBldikpIHtcclxuICAgICAgICAgICAgZHJhZ0NhbGxzLm9uRG91YmxlKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRyYWdDYWxscyAmJiBkcmFnQ2FsbHMub25Mb25nICYmIGlzRXZlbnRNb3VzZUxvbmcodHJ1ZSwgZXYpKSB7XHJcbiAgICAgICAgICAgIGRyYWdDYWxscy5vbkxvbmcoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwb2ludGVyID0gbWFrZUV2ZW50TW91c2VQb2ludCh0cnVlLCBldik7XHJcbiAgICAgICAgZHJhZ0luaXRFdmVudFggPSBwb2ludGVyLnBvc1g7XHJcbiAgICAgICAgZHJhZ0luaXRFdmVudFkgPSBwb2ludGVyLnBvc1k7XHJcbiAgICAgICAgZHJhZ0luaXRXaWR0aCA9IHBhcnNlSW50KHRhcmdldC5zdHlsZS53aWR0aCwgMTApO1xyXG4gICAgICAgIGRyYWdJbml0SGVpZ2h0ID0gcGFyc2VJbnQodGFyZ2V0LnN0eWxlLmhlaWdodCwgMTApO1xyXG4gICAgICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gb25SZXNpemVyTW91c2VNb3ZlO1xyXG4gICAgICAgIGRvY3VtZW50Lm9udG91Y2htb3ZlID0gb25SZXNpemVyVG91Y2hNb3ZlO1xyXG4gICAgICAgIGRvY3VtZW50Lm9ubW91c2V1cCA9IG9uUmVzaXplckNsb3NlO1xyXG4gICAgICAgIGRvY3VtZW50Lm9udG91Y2hlbmQgPSBvblJlc2l6ZXJDbG9zZTtcclxuICAgICAgICBxaW5fc2tpbl8xLlFpblNraW4uaGlkZUFsbElGcmFtZXMoKTtcclxuICAgICAgICBpZiAoZHJhZ0NhbGxzICYmIGRyYWdDYWxscy5vblN0YXJ0KSB7XHJcbiAgICAgICAgICAgIGRyYWdDYWxscy5vblN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdG9wRXZlbnQoZXYpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gb25SZXNpemVyVG91Y2hJbml0KGV2KSB7XHJcbiAgICAgICAgaWYgKGRvY3VtZW50Lm9ubW91c2Vtb3ZlIHx8IGRvY3VtZW50Lm9udG91Y2htb3ZlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRyYWdDYWxscyAmJiBkcmFnQ2FsbHMub25Eb3VibGUgJiYgaXNFdmVudFRvdWNoRG91YmxlKHRydWUsIGV2KSkge1xyXG4gICAgICAgICAgICBkcmFnQ2FsbHMub25Eb3VibGUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZHJhZ0NhbGxzICYmIGRyYWdDYWxscy5vbkxvbmcgJiYgaXNFdmVudFRvdWNoTG9uZyh0cnVlLCBldikpIHtcclxuICAgICAgICAgICAgZHJhZ0NhbGxzLm9uTG9uZygpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHBvaW50ZXIgPSBtYWtlRXZlbnRUb3VjaCh0cnVlLCBldik7XHJcbiAgICAgICAgZHJhZ0luaXRFdmVudFggPSBwb2ludGVyLnBvc1g7XHJcbiAgICAgICAgZHJhZ0luaXRFdmVudFkgPSBwb2ludGVyLnBvc1k7XHJcbiAgICAgICAgZHJhZ0luaXRXaWR0aCA9IHBhcnNlSW50KHRhcmdldC5zdHlsZS53aWR0aCwgMTApO1xyXG4gICAgICAgIGRyYWdJbml0SGVpZ2h0ID0gcGFyc2VJbnQodGFyZ2V0LnN0eWxlLmhlaWdodCwgMTApO1xyXG4gICAgICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gb25SZXNpemVyTW91c2VNb3ZlO1xyXG4gICAgICAgIGRvY3VtZW50Lm9udG91Y2htb3ZlID0gb25SZXNpemVyVG91Y2hNb3ZlO1xyXG4gICAgICAgIGRvY3VtZW50Lm9ubW91c2V1cCA9IG9uUmVzaXplckNsb3NlO1xyXG4gICAgICAgIGRvY3VtZW50Lm9udG91Y2hlbmQgPSBvblJlc2l6ZXJDbG9zZTtcclxuICAgICAgICBxaW5fc2tpbl8xLlFpblNraW4uaGlkZUFsbElGcmFtZXMoKTtcclxuICAgICAgICBpZiAoZHJhZ0NhbGxzICYmIGRyYWdDYWxscy5vblN0YXJ0KSB7XHJcbiAgICAgICAgICAgIGRyYWdDYWxscy5vblN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdG9wRXZlbnQoZXYpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gb25SZXNpemVyTW91c2VNb3ZlKGV2KSB7XHJcbiAgICAgICAgY29uc3QgcG9pbnRlciA9IG1ha2VFdmVudE1vdXNlUG9pbnQoZmFsc2UsIGV2KTtcclxuICAgICAgICB2YXIgZnJhbWVEcmFnRGlmWCA9IHBvaW50ZXIucG9zWCAtIGRyYWdJbml0RXZlbnRYO1xyXG4gICAgICAgIHZhciBmcmFtZURyYWdEaWZZID0gcG9pbnRlci5wb3NZIC0gZHJhZ0luaXRFdmVudFk7XHJcbiAgICAgICAgdmFyIGZyYW1lRHJhZ0ZpbmFsV2lkdGggPSBkcmFnSW5pdFdpZHRoICsgZnJhbWVEcmFnRGlmWDtcclxuICAgICAgICB2YXIgZnJhbWVEcmFnRmluYWxIZWlnaHQgPSBkcmFnSW5pdEhlaWdodCArIGZyYW1lRHJhZ0RpZlk7XHJcbiAgICAgICAgdGFyZ2V0LnN0eWxlLndpZHRoID0gKGZyYW1lRHJhZ0ZpbmFsV2lkdGggPiAwID8gZnJhbWVEcmFnRmluYWxXaWR0aCA6IDApICsgXCJweFwiO1xyXG4gICAgICAgIHRhcmdldC5zdHlsZS5oZWlnaHQgPSAoZnJhbWVEcmFnRmluYWxIZWlnaHQgPiAwID8gZnJhbWVEcmFnRmluYWxIZWlnaHQgOiAwKSArIFwicHhcIjtcclxuICAgICAgICBpZiAoZHJhZ0NhbGxzICYmIGRyYWdDYWxscy5vbk1vdmUpIHtcclxuICAgICAgICAgICAgZHJhZ0NhbGxzLm9uTW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG9uUmVzaXplclRvdWNoTW92ZShldikge1xyXG4gICAgICAgIGNvbnN0IHBvaW50ZXIgPSBtYWtlRXZlbnRUb3VjaChmYWxzZSwgZXYpO1xyXG4gICAgICAgIHZhciBmcmFtZURyYWdEaWZYID0gcG9pbnRlci5wb3NYIC0gZHJhZ0luaXRFdmVudFg7XHJcbiAgICAgICAgdmFyIGZyYW1lRHJhZ0RpZlkgPSBwb2ludGVyLnBvc1kgLSBkcmFnSW5pdEV2ZW50WTtcclxuICAgICAgICB2YXIgZnJhbWVEcmFnRmluYWxXaWR0aCA9IGRyYWdJbml0V2lkdGggKyBmcmFtZURyYWdEaWZYO1xyXG4gICAgICAgIHZhciBmcmFtZURyYWdGaW5hbEhlaWdodCA9IGRyYWdJbml0SGVpZ2h0ICsgZnJhbWVEcmFnRGlmWTtcclxuICAgICAgICB0YXJnZXQuc3R5bGUud2lkdGggPSAoZnJhbWVEcmFnRmluYWxXaWR0aCA+IDAgPyBmcmFtZURyYWdGaW5hbFdpZHRoIDogMCkgKyBcInB4XCI7XHJcbiAgICAgICAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IChmcmFtZURyYWdGaW5hbEhlaWdodCA+IDAgPyBmcmFtZURyYWdGaW5hbEhlaWdodCA6IDApICsgXCJweFwiO1xyXG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uTW92ZSkge1xyXG4gICAgICAgICAgICBkcmFnQ2FsbHMub25Nb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdG9wRXZlbnQoZXYpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gb25SZXNpemVyQ2xvc2UoZXYpIHtcclxuICAgICAgICBkb2N1bWVudC5vbnRvdWNobW92ZSA9IG51bGw7XHJcbiAgICAgICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSBudWxsO1xyXG4gICAgICAgIGRvY3VtZW50Lm9udG91Y2hlbmQgPSBudWxsO1xyXG4gICAgICAgIGRvY3VtZW50Lm9ubW91c2V1cCA9IG51bGw7XHJcbiAgICAgICAgcWluX3NraW5fMS5RaW5Ta2luLnNob3dBbGxJRnJhbWVzKCk7XHJcbiAgICAgICAgcWluX3NraW5fMS5RaW5Ta2luLmNsZWFyU2VsZWN0aW9uKCk7XHJcbiAgICAgICAgaWYgKGRyYWdDYWxscyAmJiBkcmFnQ2FsbHMub25FbmQpIHtcclxuICAgICAgICAgICAgZHJhZ0NhbGxzLm9uRW5kKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdG9wRXZlbnQoZXYpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGFkZFNjcm9sbGVyKHRhcmdldCwgZHJhZ0NhbGxzKSB7XHJcbiAgICB2YXIgZHJhZ0luaXRYID0gMDtcclxuICAgIHZhciBkcmFnSW5pdFkgPSAwO1xyXG4gICAgdmFyIGRyYWdTY3JvbGxYID0gMDtcclxuICAgIHZhciBkcmFnU2Nyb2xsWSA9IDA7XHJcbiAgICB0YXJnZXQub25kcmFnc3RhcnQgPSBzdG9wRXZlbnQ7XHJcbiAgICB0YXJnZXQub25tb3VzZWRvd24gPSBvblNjcm9sbGVyTW91c2VJbml0O1xyXG4gICAgdGFyZ2V0Lm9udG91Y2hzdGFydCA9IG9uU2Nyb2xsZXJUb3VjaEluaXQ7XHJcbiAgICBmdW5jdGlvbiBvblNjcm9sbGVyTW91c2VJbml0KGV2KSB7XHJcbiAgICAgICAgaWYgKGRvY3VtZW50Lm9ubW91c2Vtb3ZlIHx8IGRvY3VtZW50Lm9udG91Y2htb3ZlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3RvcFByb3BhZ2F0aW9uKGV2KTtcclxuICAgICAgICBpZiAoZHJhZ0NhbGxzICYmIGRyYWdDYWxscy5vbkRvdWJsZSAmJiBpc0V2ZW50TW91c2VEb3VibGUodHJ1ZSwgZXYpKSB7XHJcbiAgICAgICAgICAgIGRyYWdDYWxscy5vbkRvdWJsZSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uTG9uZyAmJiBpc0V2ZW50TW91c2VMb25nKHRydWUsIGV2KSkge1xyXG4gICAgICAgICAgICBkcmFnQ2FsbHMub25Mb25nKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcG9pbnRlciA9IG1ha2VFdmVudE1vdXNlUG9pbnQodHJ1ZSwgZXYpO1xyXG4gICAgICAgIGRyYWdJbml0WCA9IHBvaW50ZXIucG9zWDtcclxuICAgICAgICBkcmFnSW5pdFkgPSBwb2ludGVyLnBvc1k7XHJcbiAgICAgICAgZHJhZ1Njcm9sbFggPSB0YXJnZXQuc2Nyb2xsTGVmdDtcclxuICAgICAgICBkcmFnU2Nyb2xsWSA9IHRhcmdldC5zY3JvbGxUb3A7XHJcbiAgICAgICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSBvblNjcm9sbGVyTW91c2VNb3ZlO1xyXG4gICAgICAgIGRvY3VtZW50Lm9udG91Y2htb3ZlID0gb25TY3JvbGxlclRvdWNoTW92ZTtcclxuICAgICAgICBkb2N1bWVudC5vbnRvdWNoZW5kID0gb25TY3JvbGxlckNsb3NlO1xyXG4gICAgICAgIGRvY3VtZW50Lm9ubW91c2V1cCA9IG9uU2Nyb2xsZXJDbG9zZTtcclxuICAgICAgICBxaW5fc2tpbl8xLlFpblNraW4uaGlkZUFsbElGcmFtZXMoKTtcclxuICAgICAgICBpZiAoZHJhZ0NhbGxzICYmIGRyYWdDYWxscy5vblN0YXJ0KSB7XHJcbiAgICAgICAgICAgIGRyYWdDYWxscy5vblN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdG9wRXZlbnQoZXYpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gb25TY3JvbGxlclRvdWNoSW5pdChldikge1xyXG4gICAgICAgIGlmIChkb2N1bWVudC5vbm1vdXNlbW92ZSB8fCBkb2N1bWVudC5vbnRvdWNobW92ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uRG91YmxlICYmIGlzRXZlbnRUb3VjaERvdWJsZSh0cnVlLCBldikpIHtcclxuICAgICAgICAgICAgZHJhZ0NhbGxzLm9uRG91YmxlKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRyYWdDYWxscyAmJiBkcmFnQ2FsbHMub25Mb25nICYmIGlzRXZlbnRUb3VjaExvbmcodHJ1ZSwgZXYpKSB7XHJcbiAgICAgICAgICAgIGRyYWdDYWxscy5vbkxvbmcoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwb2ludGVyID0gbWFrZUV2ZW50VG91Y2godHJ1ZSwgZXYpO1xyXG4gICAgICAgIGRyYWdJbml0WCA9IHBvaW50ZXIucG9zWDtcclxuICAgICAgICBkcmFnSW5pdFkgPSBwb2ludGVyLnBvc1k7XHJcbiAgICAgICAgZHJhZ1Njcm9sbFggPSB0YXJnZXQuc2Nyb2xsTGVmdDtcclxuICAgICAgICBkcmFnU2Nyb2xsWSA9IHRhcmdldC5zY3JvbGxUb3A7XHJcbiAgICAgICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSBvblNjcm9sbGVyTW91c2VNb3ZlO1xyXG4gICAgICAgIGRvY3VtZW50Lm9udG91Y2htb3ZlID0gb25TY3JvbGxlclRvdWNoTW92ZTtcclxuICAgICAgICBkb2N1bWVudC5vbm1vdXNldXAgPSBvblNjcm9sbGVyQ2xvc2U7XHJcbiAgICAgICAgZG9jdW1lbnQub250b3VjaGVuZCA9IG9uU2Nyb2xsZXJDbG9zZTtcclxuICAgICAgICBxaW5fc2tpbl8xLlFpblNraW4uaGlkZUFsbElGcmFtZXMoKTtcclxuICAgICAgICBpZiAoZHJhZ0NhbGxzICYmIGRyYWdDYWxscy5vblN0YXJ0KSB7XHJcbiAgICAgICAgICAgIGRyYWdDYWxscy5vblN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdG9wRXZlbnQoZXYpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gb25TY3JvbGxlck1vdXNlTW92ZShldikge1xyXG4gICAgICAgIGNvbnN0IHBvaW50ZXIgPSBtYWtlRXZlbnRNb3VzZVBvaW50KGZhbHNlLCBldik7XHJcbiAgICAgICAgdmFyIGRyYWdEaWZYID0gcG9pbnRlci5wb3NYIC0gZHJhZ0luaXRYO1xyXG4gICAgICAgIHZhciBkcmFnRGlmWSA9IHBvaW50ZXIucG9zWSAtIGRyYWdJbml0WTtcclxuICAgICAgICB2YXIgZHJhZ05ld1ggPSBkcmFnU2Nyb2xsWCAtIGRyYWdEaWZYO1xyXG4gICAgICAgIHZhciBkcmFnTmV3WSA9IGRyYWdTY3JvbGxZIC0gZHJhZ0RpZlk7XHJcbiAgICAgICAgdGFyZ2V0LnNjcm9sbFRvKGRyYWdOZXdYLCBkcmFnTmV3WSk7XHJcbiAgICAgICAgaWYgKGRyYWdDYWxscyAmJiBkcmFnQ2FsbHMub25Nb3ZlKSB7XHJcbiAgICAgICAgICAgIGRyYWdDYWxscy5vbk1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0b3BFdmVudChldik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBvblNjcm9sbGVyVG91Y2hNb3ZlKGV2KSB7XHJcbiAgICAgICAgY29uc3QgcG9pbnRlciA9IG1ha2VFdmVudFRvdWNoKGZhbHNlLCBldik7XHJcbiAgICAgICAgdmFyIGRyYWdEaWZYID0gcG9pbnRlci5wb3NYIC0gZHJhZ0luaXRYO1xyXG4gICAgICAgIHZhciBkcmFnRGlmWSA9IHBvaW50ZXIucG9zWSAtIGRyYWdJbml0WTtcclxuICAgICAgICB2YXIgZHJhZ05ld1ggPSBkcmFnU2Nyb2xsWCAtIGRyYWdEaWZYO1xyXG4gICAgICAgIHZhciBkcmFnTmV3WSA9IGRyYWdTY3JvbGxZIC0gZHJhZ0RpZlk7XHJcbiAgICAgICAgdGFyZ2V0LnNjcm9sbFRvKGRyYWdOZXdYLCBkcmFnTmV3WSk7XHJcbiAgICAgICAgaWYgKGRyYWdDYWxscyAmJiBkcmFnQ2FsbHMub25Nb3ZlKSB7XHJcbiAgICAgICAgICAgIGRyYWdDYWxscy5vbk1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0b3BFdmVudChldik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBvblNjcm9sbGVyQ2xvc2UoZXYpIHtcclxuICAgICAgICBkb2N1bWVudC5vbnRvdWNobW92ZSA9IG51bGw7XHJcbiAgICAgICAgZG9jdW1lbnQub250b3VjaGVuZCA9IG51bGw7XHJcbiAgICAgICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSBudWxsO1xyXG4gICAgICAgIGRvY3VtZW50Lm9ubW91c2V1cCA9IG51bGw7XHJcbiAgICAgICAgcWluX3NraW5fMS5RaW5Ta2luLnNob3dBbGxJRnJhbWVzKCk7XHJcbiAgICAgICAgcWluX3NraW5fMS5RaW5Ta2luLmNsZWFyU2VsZWN0aW9uKCk7XHJcbiAgICAgICAgaWYgKGRyYWdDYWxscyAmJiBkcmFnQ2FsbHMub25FbmQpIHtcclxuICAgICAgICAgICAgZHJhZ0NhbGxzLm9uRW5kKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdG9wRXZlbnQoZXYpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUWluQXJtcyA9IHtcclxuICAgIHN0b3BFdmVudCxcclxuICAgIG1ha2VFdmVudE1vdXNlUG9pbnQsXHJcbiAgICBtYWtlRXZlbnRUb3VjaCxcclxuICAgIGlzRXZlbnRNb3VzZURvdWJsZSxcclxuICAgIGlzRXZlbnRUb3VjaERvdWJsZSxcclxuICAgIGlzRXZlbnRNb3VzZUxvbmcsXHJcbiAgICBpc0V2ZW50VG91Y2hMb25nLFxyXG4gICAgaXNLZXlJbkxpc3QsXHJcbiAgICBpc0tleUVudGVyLFxyXG4gICAgaXNLZXlTcGFjZSxcclxuICAgIGlzRmlyc3RCdXR0b24sXHJcbiAgICBpc01pZGRsZUJ1dHRvbixcclxuICAgIGlzU2Vjb25kQnV0dG9uLFxyXG4gICAgaXNPbmVGaW5nZXIsXHJcbiAgICBpc1R3b0ZpbmdlcnMsXHJcbiAgICBpc1RocmVlRmluZ2VycyxcclxuICAgIGlzRm91ckZpbmdlcnMsXHJcbiAgICBpc01haW5Nb3VzZSxcclxuICAgIGlzTWFpblRvdWNoLFxyXG4gICAgaXNNaWRpTW91c2UsXHJcbiAgICBpc01pZGlUb3VjaCxcclxuICAgIGlzTWVudU1vdXNlLFxyXG4gICAgaXNNZW51VG91Y2gsXHJcbiAgICBhZGRBY3Rpb24sXHJcbiAgICBhZGRBY3Rpb25NYWluLFxyXG4gICAgYWRkQWN0aW9uTWFpbktleSxcclxuICAgIGFkZEFjdGlvbk1haW5Nb3VzZSxcclxuICAgIGFkZEFjdGlvbk1haW5Ub3VjaCxcclxuICAgIGFkZEFjdGlvbk1haW5Qb2ludCxcclxuICAgIGFkZEFjdGlvbk1pZGksXHJcbiAgICBhZGRBY3Rpb25NaWRpS2V5LFxyXG4gICAgYWRkQWN0aW9uTWlkaU1vdXNlLFxyXG4gICAgYWRkQWN0aW9uTWlkaVRvdWNoLFxyXG4gICAgYWRkQWN0aW9uTWlkaVBvaW50LFxyXG4gICAgYWRkQWN0aW9uTWVudSxcclxuICAgIGFkZEFjdGlvbk1lbnVLZXksXHJcbiAgICBhZGRBY3Rpb25NZW51TW91c2UsXHJcbiAgICBhZGRBY3Rpb25NZW51VG91Y2gsXHJcbiAgICBhZGRBY3Rpb25NZW51UG9pbnQsXHJcbiAgICBhZGRBY3Rpb25zLFxyXG4gICAgYWRkQWN0aW9uc01haW4sXHJcbiAgICBhZGRBY3Rpb25zTWFpbktleSxcclxuICAgIGFkZEFjdGlvbnNNYWluTW91c2UsXHJcbiAgICBhZGRBY3Rpb25zTWFpblRvdWNoLFxyXG4gICAgYWRkQWN0aW9uc01haW5Qb2ludCxcclxuICAgIGFkZEFjdGlvbnNNaWRpLFxyXG4gICAgYWRkQWN0aW9uc01pZGlLZXksXHJcbiAgICBhZGRBY3Rpb25zTWlkaU1vdXNlLFxyXG4gICAgYWRkQWN0aW9uc01pZGlUb3VjaCxcclxuICAgIGFkZEFjdGlvbnNNaWRpUG9pbnQsXHJcbiAgICBhZGRBY3Rpb25zTWVudSxcclxuICAgIGFkZEFjdGlvbnNNZW51S2V5LFxyXG4gICAgYWRkQWN0aW9uc01lbnVNb3VzZSxcclxuICAgIGFkZEFjdGlvbnNNZW51VG91Y2gsXHJcbiAgICBhZGRBY3Rpb25zTWVudVBvaW50LFxyXG4gICAgYWRkTW92ZXIsXHJcbiAgICBhZGRSZXNpemVyLFxyXG4gICAgYWRkU2Nyb2xsZXIsXHJcbn07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1hcm1zLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluQm9keSA9IGV4cG9ydHMuUWluTmF0dXJlID0gdm9pZCAwO1xyXG52YXIgUWluTmF0dXJlO1xyXG4oZnVuY3Rpb24gKFFpbk5hdHVyZSkge1xyXG4gICAgUWluTmF0dXJlW1wiQklUXCJdID0gXCJCSVRcIjtcclxuICAgIFFpbk5hdHVyZVtcIkJPT0xcIl0gPSBcIkJPT0xcIjtcclxuICAgIFFpbk5hdHVyZVtcIkJZVEVcIl0gPSBcIkJZVEVcIjtcclxuICAgIFFpbk5hdHVyZVtcIlRJTllcIl0gPSBcIlRJTllcIjtcclxuICAgIFFpbk5hdHVyZVtcIlNNQUxMXCJdID0gXCJTTUFMTFwiO1xyXG4gICAgUWluTmF0dXJlW1wiSU5UXCJdID0gXCJJTlRcIjtcclxuICAgIFFpbk5hdHVyZVtcIkxPTkdcIl0gPSBcIkxPTkdcIjtcclxuICAgIFFpbk5hdHVyZVtcIlNFUklBTFwiXSA9IFwiU0VSSUFMXCI7XHJcbiAgICBRaW5OYXR1cmVbXCJCSUdfU0VSSUFMXCJdID0gXCJCSUdfU0VSSUFMXCI7XHJcbiAgICBRaW5OYXR1cmVbXCJGTE9BVFwiXSA9IFwiRkxPQVRcIjtcclxuICAgIFFpbk5hdHVyZVtcIlJFQUxcIl0gPSBcIlJFQUxcIjtcclxuICAgIFFpbk5hdHVyZVtcIkRPVUJMRVwiXSA9IFwiRE9VQkxFXCI7XHJcbiAgICBRaW5OYXR1cmVbXCJOVU1FUklDXCJdID0gXCJOVU1FUklDXCI7XHJcbiAgICBRaW5OYXR1cmVbXCJCSUdfTlVNRVJJQ1wiXSA9IFwiQklHX05VTUVSSUNcIjtcclxuICAgIFFpbk5hdHVyZVtcIkNIQVJcIl0gPSBcIkNIQVJcIjtcclxuICAgIFFpbk5hdHVyZVtcIkNIQVJTXCJdID0gXCJDSEFSU1wiO1xyXG4gICAgUWluTmF0dXJlW1wiREFURVwiXSA9IFwiREFURVwiO1xyXG4gICAgUWluTmF0dXJlW1wiVElNRVwiXSA9IFwiVElNRVwiO1xyXG4gICAgUWluTmF0dXJlW1wiREFURV9USU1FXCJdID0gXCJEQVRFX1RJTUVcIjtcclxuICAgIFFpbk5hdHVyZVtcIlRJTUVTVEFNUFwiXSA9IFwiVElNRVNUQU1QXCI7XHJcbiAgICBRaW5OYXR1cmVbXCJCWVRFU1wiXSA9IFwiQllURVNcIjtcclxuICAgIFFpbk5hdHVyZVtcIkJMT0JcIl0gPSBcIkJMT0JcIjtcclxuICAgIFFpbk5hdHVyZVtcIlRFWFRcIl0gPSBcIlRFWFRcIjtcclxufSkoUWluTmF0dXJlID0gZXhwb3J0cy5RaW5OYXR1cmUgfHwgKGV4cG9ydHMuUWluTmF0dXJlID0ge30pKTtcclxuZnVuY3Rpb24gbWFrZVFpblVJRCgpIHtcclxuICAgIHJldHVybiAoXCJxaW5fdWlkX1wiICtcclxuICAgICAgICBnZXRMYXN0Q2hhcnMoRGF0ZS5ub3coKSArIFwiXCIsIDQsIFwiMFwiLCBmYWxzZSkgK1xyXG4gICAgICAgIFwiX1wiICtcclxuICAgICAgICBmaWxsVG9TdHJpbmcoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDApLCA1LCBcIjBcIiwgZmFsc2UpKTtcclxufVxyXG5mdW5jdGlvbiBtYWtlUWluZHJlZFVJRChxaW5kcmVkKSB7XHJcbiAgICByZXR1cm4gKHFpbmRyZWQgK1xyXG4gICAgICAgIFwiX3FpbmRyZWRfXCIgK1xyXG4gICAgICAgIGdldExhc3RDaGFycyhEYXRlLm5vdygpICsgXCJcIiwgNCwgXCIwXCIsIGZhbHNlKSArXHJcbiAgICAgICAgXCJfXCIgK1xyXG4gICAgICAgIGZpbGxUb1N0cmluZyhNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMCksIDUsIFwiMFwiLCBmYWxzZSkpO1xyXG59XHJcbmZ1bmN0aW9uIGdldExhc3RDaGFycyhzb3VyY2UsIGNvdW50LCBmaWxsV2l0aCA9IFwiIFwiLCBhdEVuZCA9IHRydWUpIHtcclxuICAgIGlmIChzb3VyY2UubGVuZ3RoIDwgY291bnQpIHtcclxuICAgICAgICByZXR1cm4gZmlsbFRvU3RyaW5nKHNvdXJjZSwgY291bnQsIGZpbGxXaXRoLCBhdEVuZCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc291cmNlLnN1YnN0cmluZyhzb3VyY2UubGVuZ3RoIC0gY291bnQpO1xyXG59XHJcbmZ1bmN0aW9uIGZpbGxUb1N0cmluZyh2YWx1ZSwgdGlsU2l6ZSwgd2l0aFN0ciA9IFwiIFwiLCBhdEVuZCA9IHRydWUpIHtcclxuICAgIGxldCByZXN1bHQgPSB2YWx1ZS50b1N0cmluZygpO1xyXG4gICAgd2hpbGUgKHJlc3VsdC5sZW5ndGggPCB0aWxTaXplKSB7XHJcbiAgICAgICAgaWYgKGF0RW5kKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCArPSB3aXRoU3RyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gd2l0aFN0ciArIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbmZ1bmN0aW9uIGdldFRleHRMaW5lcyhmcm9tVGV4dCkge1xyXG4gICAgaWYgKGZyb21UZXh0KSB7XHJcbiAgICAgICAgcmV0dXJuIGZyb21UZXh0Lm1hdGNoKC9bXlxcclxcbl0rL2cpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGdldENTVlJvd3MoZnJvbVRleHQpIHtcclxuICAgIHZhciBsaW5lcyA9IGdldFRleHRMaW5lcyhmcm9tVGV4dCk7XHJcbiAgICB2YXIgcmVzdWx0ID0gW107XHJcbiAgICBmb3IgKGxldCBsaW5lIG9mIGxpbmVzKSB7XHJcbiAgICAgICAgbGV0IHJvdyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIGxldCBpbnNpZGVfcXVvdGVzID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGNvbHVtbl92YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgbGV0IGNvbHVtbl9pbmRleCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgY2hhcl9pbmRleCA9IDA7IGNoYXJfaW5kZXggPCBsaW5lLmxlbmd0aDsgY2hhcl9pbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBhY3R1YWwgPSBsaW5lLmNoYXJBdChjaGFyX2luZGV4KTtcclxuICAgICAgICAgICAgaWYgKGluc2lkZV9xdW90ZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChhY3R1YWwgPT0gJ1wiJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXh0ID0gY2hhcl9pbmRleCA8IGxpbmUubGVuZ3RoIC0gMSA/IGxpbmUuY2hhckF0KGNoYXJfaW5kZXggKyAxKSA6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5leHQgPT0gJ1wiJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5fdmFsdWUgKz0gYWN0dWFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFyX2luZGV4Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnNpZGVfcXVvdGVzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uX3ZhbHVlICs9IGFjdHVhbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChhY3R1YWwgPT0gJ1wiJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGluc2lkZV9xdW90ZXMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoYWN0dWFsID09IFwiLFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uX3ZhbHVlID0gdW5tYXNrU3BlY2lhbENoYXJzKGNvbHVtbl92YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcm93LnB1c2goY29sdW1uX3ZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5fdmFsdWUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbl9pbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uX3ZhbHVlICs9IGFjdHVhbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb2x1bW5fdmFsdWUgPSB1bm1hc2tTcGVjaWFsQ2hhcnMoY29sdW1uX3ZhbHVlKTtcclxuICAgICAgICByb3cucHVzaChjb2x1bW5fdmFsdWUpO1xyXG4gICAgICAgIHJlc3VsdC5wdXNoKHJvdyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbmZ1bmN0aW9uIG1hc2tTcGVjaWFsQ2hhcnMoZnJvbVRleHQpIHtcclxuICAgIHJldHVybiBmcm9tVGV4dFxyXG4gICAgICAgIC5yZXBsYWNlKFwiXFxcXFwiLCBcIlxcXFxcXFxcXCIpXHJcbiAgICAgICAgLnJlcGxhY2UoXCJcXHJcIiwgXCJcXFxcclwiKVxyXG4gICAgICAgIC5yZXBsYWNlKFwiXFxuXCIsIFwiXFxcXG5cIilcclxuICAgICAgICAucmVwbGFjZShcIlxcdFwiLCBcIlxcXFx0XCIpO1xyXG59XHJcbmZ1bmN0aW9uIHVubWFza1NwZWNpYWxDaGFycyhmcm9tVGV4dCkge1xyXG4gICAgcmV0dXJuIGZyb21UZXh0XHJcbiAgICAgICAgLnJlcGxhY2UoXCJcXFxcXFxcXFwiLCBcIlxcXFxcIilcclxuICAgICAgICAucmVwbGFjZShcIlxcXFxyXCIsIFwiXFxyXCIpXHJcbiAgICAgICAgLnJlcGxhY2UoXCJcXFxcblwiLCBcIlxcblwiKVxyXG4gICAgICAgIC5yZXBsYWNlKFwiXFxcXHRcIiwgXCJcXHRcIik7XHJcbn1cclxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXJzKHNvdXJjZSkge1xyXG4gICAgbGV0IHJlc3VsdCA9IFtdO1xyXG4gICAgbGV0IG9wZW4gPSBmYWxzZTtcclxuICAgIGxldCBhY3R1YWwgPSBcIlwiO1xyXG4gICAgZm9yIChjb25zdCBsZXR0ZXIgb2YgQXJyYXkuZnJvbShzb3VyY2UpKSB7XHJcbiAgICAgICAgaWYgKG9wZW4pIHtcclxuICAgICAgICAgICAgaWYgKGxldHRlciA9PSAnXCInKSB7XHJcbiAgICAgICAgICAgICAgICBvcGVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWN0dWFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goYWN0dWFsKTtcclxuICAgICAgICAgICAgICAgICAgICBhY3R1YWwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWN0dWFsICs9IGxldHRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGxldHRlciA9PSAnXCInKSB7XHJcbiAgICAgICAgICAgICAgICBvcGVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGlmIChhY3R1YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChhY3R1YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdHVhbCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAobGV0dGVyID09IFwiIFwiKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWN0dWFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goYWN0dWFsKTtcclxuICAgICAgICAgICAgICAgICAgICBhY3R1YWwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWN0dWFsICs9IGxldHRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuZXhwb3J0cy5RaW5Cb2R5ID0ge1xyXG4gICAgbWFrZVFpblVJRCxcclxuICAgIG1ha2VRaW5kcmVkVUlELFxyXG4gICAgZ2V0TGFzdENoYXJzLFxyXG4gICAgZmlsbFRvU3RyaW5nLFxyXG4gICAgZ2V0VGV4dExpbmVzLFxyXG4gICAgZ2V0Q1NWUm93cyxcclxuICAgIG1hc2tTcGVjaWFsQ2hhcnMsXHJcbiAgICB1bm1hc2tTcGVjaWFsQ2hhcnMsXHJcbiAgICBwYXJzZVBhcmFtZXRlcnMsXHJcbn07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1ib2R5LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluRm9vdCA9IGV4cG9ydHMuUWluRmlsZXNEZXNjcmlwdG9yID0gZXhwb3J0cy5RaW5GaWxlc09wZXJhdGlvbiA9IGV4cG9ydHMuUWluRmlsZXNOYXR1cmUgPSB2b2lkIDA7XHJcbnZhciBRaW5GaWxlc05hdHVyZTtcclxuKGZ1bmN0aW9uIChRaW5GaWxlc05hdHVyZSkge1xyXG4gICAgUWluRmlsZXNOYXR1cmVbXCJCT1RIXCJdID0gXCJib3RoXCI7XHJcbiAgICBRaW5GaWxlc05hdHVyZVtcIkRJUkVDVE9SSUVTXCJdID0gXCJkaXJlY3Rvcmllc1wiO1xyXG4gICAgUWluRmlsZXNOYXR1cmVbXCJGSUxFU1wiXSA9IFwiZmlsZXNcIjtcclxufSkoUWluRmlsZXNOYXR1cmUgPSBleHBvcnRzLlFpbkZpbGVzTmF0dXJlIHx8IChleHBvcnRzLlFpbkZpbGVzTmF0dXJlID0ge30pKTtcclxudmFyIFFpbkZpbGVzT3BlcmF0aW9uO1xyXG4oZnVuY3Rpb24gKFFpbkZpbGVzT3BlcmF0aW9uKSB7XHJcbiAgICBRaW5GaWxlc09wZXJhdGlvbltcIk9QRU5cIl0gPSBcIm9wZW5cIjtcclxuICAgIFFpbkZpbGVzT3BlcmF0aW9uW1wiU0FWRVwiXSA9IFwic2F2ZVwiO1xyXG59KShRaW5GaWxlc09wZXJhdGlvbiA9IGV4cG9ydHMuUWluRmlsZXNPcGVyYXRpb24gfHwgKGV4cG9ydHMuUWluRmlsZXNPcGVyYXRpb24gPSB7fSkpO1xyXG5jbGFzcyBRaW5GaWxlc0Rlc2NyaXB0b3Ige1xyXG59XHJcbmV4cG9ydHMuUWluRmlsZXNEZXNjcmlwdG9yID0gUWluRmlsZXNEZXNjcmlwdG9yO1xyXG5mdW5jdGlvbiBnZXRMb2NhdGlvbigpIHtcclxuICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxufVxyXG5mdW5jdGlvbiBpc0xvY2FsSG9zdCgpIHtcclxuICAgIHZhciBsb2NhdGlvbiA9IGdldExvY2F0aW9uKCk7XHJcbiAgICB2YXIgc3RhcnQgPSBsb2NhdGlvbi5pbmRleE9mKFwiOi8vXCIpO1xyXG4gICAgaWYgKHN0YXJ0ID09IC0xKSB7XHJcbiAgICAgICAgc3RhcnQgPSAwO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgc3RhcnQgKz0gMztcclxuICAgIH1cclxuICAgIGxvY2F0aW9uID0gbG9jYXRpb24uc3Vic3RyaW5nKHN0YXJ0KTtcclxuICAgIHJldHVybiBsb2NhdGlvbi5pbmRleE9mKFwibG9jYWxob3N0XCIpID09PSAwIHx8IGxvY2F0aW9uLmluZGV4T2YoXCIxMjcuMC4wLjFcIikgPT09IDA7XHJcbn1cclxuZnVuY3Rpb24gZ2V0U2VwYXJhdG9yKG9mUGF0aCkge1xyXG4gICAgbGV0IHJlc3VsdCA9IFwiL1wiO1xyXG4gICAgaWYgKG9mUGF0aCAmJiBvZlBhdGguaW5kZXhPZihcIlxcXFxcIikgPiAtMSkge1xyXG4gICAgICAgIHJlc3VsdCA9IFwiXFxcXFwiO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5mdW5jdGlvbiBnZXRQYXRoSm9pbihwYXRoQSwgcGF0aEIpIHtcclxuICAgIGlmIChwYXRoQSA9PSBudWxsIHx8IHBhdGhBID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHBhdGhBID0gXCJcIjtcclxuICAgIH1cclxuICAgIGlmIChwYXRoQiA9PSBudWxsIHx8IHBhdGhCID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHBhdGhCID0gXCJcIjtcclxuICAgIH1cclxuICAgIGlmIChwYXRoQS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgIHJldHVybiBwYXRoQjtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHBhdGhCLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHBhdGhBO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgbGV0IHVuaW9uID0gXCIvXCI7XHJcbiAgICAgICAgaWYgKHBhdGhBLmluZGV4T2YoXCJcXFxcXCIpID4gLTEgfHwgcGF0aEIuaW5kZXhPZihcIlxcXFxcIikgPiAtMSkge1xyXG4gICAgICAgICAgICB1bmlvbiA9IFwiXFxcXFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcGF0aEFFbmQgPSBwYXRoQS5zdWJzdHJpbmcocGF0aEEubGVuZ3RoIC0gMSwgcGF0aEEubGVuZ3RoKTtcclxuICAgICAgICBsZXQgcGF0aEJTdGFydCA9IHBhdGhCLnN1YnN0cmluZygwLCAxKTtcclxuICAgICAgICBpZiAocGF0aEFFbmQgPT0gdW5pb24gfHwgcGF0aEJTdGFydCA9PSB1bmlvbikge1xyXG4gICAgICAgICAgICB1bmlvbiA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwYXRoQSArIHVuaW9uICsgcGF0aEI7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gZ2V0UGFyZW50KHBhdGgpIHtcclxuICAgIGlmIChwYXRoKSB7XHJcbiAgICAgICAgbGV0IHNlcGFyYXRvciA9IGdldFNlcGFyYXRvcihwYXRoKTtcclxuICAgICAgICBsZXQgbGFzdCA9IHBhdGgubGFzdEluZGV4T2Yoc2VwYXJhdG9yKTtcclxuICAgICAgICBpZiAobGFzdCA+IC0xKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXRoLnN1YnN0cmluZygwLCBsYXN0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gXCJcIjtcclxufVxyXG5mdW5jdGlvbiBnZXRTdGVtKHBhdGgpIHtcclxuICAgIGlmIChwYXRoKSB7XHJcbiAgICAgICAgbGV0IHNlcGFyYXRvciA9IGdldFNlcGFyYXRvcihwYXRoKTtcclxuICAgICAgICBsZXQgbGFzdCA9IHBhdGgubGFzdEluZGV4T2Yoc2VwYXJhdG9yKTtcclxuICAgICAgICBpZiAobGFzdCA+IC0xKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXRoLnN1YnN0cmluZyhsYXN0ICsgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFwiXCI7XHJcbn1cclxuZnVuY3Rpb24gZ2V0RmlsZUV4dGVuc2lvbihuYW1lKSB7XHJcbiAgICBsZXQgcG9zaXRpb24gPSBuYW1lLmxhc3RJbmRleE9mKFwiLlwiKTtcclxuICAgIGlmIChwb3NpdGlvbiA+IC0xKSB7XHJcbiAgICAgICAgcmV0dXJuIG5hbWUuc3Vic3RyaW5nKHBvc2l0aW9uICsgMSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgIH1cclxufVxyXG5jb25zdCBhcHBzRXh0ZW5zaW9ucyA9IFtcclxuICAgIFwiaHRtXCIsIFwiaHRtbFwiLCBcImNzc1wiLCBcImpzXCIsIFwianN4XCIsIFwidHNcIiwgXCJ0c3hcIiwgXCJwaHRtbFwiXHJcbl07XHJcbmZ1bmN0aW9uIGlzRmlsZUFwcChleHRlbnNpb24pIHtcclxuICAgIHJldHVybiBhcHBzRXh0ZW5zaW9ucy5pbmRleE9mKGV4dGVuc2lvbikgPiAtMTtcclxufVxyXG5jb25zdCBjbWRzRXh0ZW5zaW9ucyA9IFtcclxuICAgIFwiaFwiLCBcImNcIiwgXCJocHBcIiwgXCJjcHBcIiwgXCJyc1wiLCBcImpsXCIsXHJcbiAgICBcImNzXCIsIFwiY3Nwcm9qXCIsIFwiZnNcIiwgXCJtbFwiLCBcImZzaVwiLCBcIm1saVwiLCBcImZzeFwiLCBcImZzc2NyaXB0XCIsXHJcbiAgICBcImphdmFcIiwgXCJneVwiLCBcImd2eVwiLCBcImdyb292eVwiLCBcInNjXCIsIFwic2NhbGFcIiwgXCJjbGpcIixcclxuICAgIFwicHlcIiwgXCJydWJ5XCIsIFwicGhwXCIsIFwicGh0bWxcIixcclxuXTtcclxuZnVuY3Rpb24gaXNGaWxlQ21kKGV4dGVuc2lvbikge1xyXG4gICAgcmV0dXJuIGNtZHNFeHRlbnNpb25zLmluZGV4T2YoZXh0ZW5zaW9uKSA+IC0xO1xyXG59XHJcbmNvbnN0IGV4ZWNFeHRlbnNpb25zID0gW1xyXG4gICAgXCJleGVcIiwgXCJqYXJcIiwgXCJjb21cIiwgXCJiYXRcIiwgXCJzaFwiXHJcbl07XHJcbmZ1bmN0aW9uIGlzRmlsZUV4ZWMoZXh0ZW5zaW9uKSB7XHJcbiAgICByZXR1cm4gZXhlY0V4dGVuc2lvbnMuaW5kZXhPZihleHRlbnNpb24pID4gLTE7XHJcbn1cclxuY29uc3QgaW1hZ2VFeHRlbnNpb25zID0gW1xyXG4gICAgXCJqcGdcIiwgXCJqcGVnXCIsIFwicG5nXCIsIFwiZ2lmXCIsIFwiYm1wXCJcclxuXTtcclxuZnVuY3Rpb24gaXNGaWxlSW1hZ2UoZXh0ZW5zaW9uKSB7XHJcbiAgICByZXR1cm4gaW1hZ2VFeHRlbnNpb25zLmluZGV4T2YoZXh0ZW5zaW9uKSA+IC0xO1xyXG59XHJcbmNvbnN0IHZlY3RvckV4dGVuc2lvbnMgPSBbXHJcbiAgICBcInN2Z1wiXHJcbl07XHJcbmZ1bmN0aW9uIGlzRmlsZVZlY3RvcihleHRlbnNpb24pIHtcclxuICAgIHJldHVybiB2ZWN0b3JFeHRlbnNpb25zLmluZGV4T2YoZXh0ZW5zaW9uKSA+IC0xO1xyXG59XHJcbmNvbnN0IG1vdmllRXh0ZW5zaW9ucyA9IFtcclxuICAgIFwiYXZpXCIsIFwibXA0XCJcclxuXTtcclxuZnVuY3Rpb24gaXNGaWxlTW92aWUoZXh0ZW5zaW9uKSB7XHJcbiAgICByZXR1cm4gbW92aWVFeHRlbnNpb25zLmluZGV4T2YoZXh0ZW5zaW9uKSA+IC0xO1xyXG59XHJcbmNvbnN0IG11c2ljRXh0ZW5zaW9ucyA9IFtcclxuICAgIFwid2F2XCIsIFwibXAzXCJcclxuXTtcclxuZnVuY3Rpb24gaXNGaWxlTXVzaWMoZXh0ZW5zaW9uKSB7XHJcbiAgICByZXR1cm4gbXVzaWNFeHRlbnNpb25zLmluZGV4T2YoZXh0ZW5zaW9uKSA+IC0xO1xyXG59XHJcbmNvbnN0IHppcHBlZEV4dGVuc2lvbnMgPSBbXHJcbiAgICBcInppcFwiLCBcInJhclwiLCBcIjd6XCIsIFwidGFyXCIsIFwiZ3pcIlxyXG5dO1xyXG5mdW5jdGlvbiBpc0ZpbGVaaXBwZWQoZXh0ZW5zaW9uKSB7XHJcbiAgICByZXR1cm4gemlwcGVkRXh0ZW5zaW9ucy5pbmRleE9mKGV4dGVuc2lvbikgPiAtMTtcclxufVxyXG5leHBvcnRzLlFpbkZvb3QgPSB7XHJcbiAgICBnZXRMb2NhdGlvbixcclxuICAgIGlzTG9jYWxIb3N0LFxyXG4gICAgZ2V0U2VwYXJhdG9yLFxyXG4gICAgZ2V0UGF0aEpvaW4sXHJcbiAgICBnZXRQYXJlbnQsXHJcbiAgICBnZXRTdGVtLFxyXG4gICAgZ2V0RmlsZUV4dGVuc2lvbixcclxuICAgIGlzRmlsZUFwcCxcclxuICAgIGlzRmlsZUNtZCxcclxuICAgIGlzRmlsZUV4ZWMsXHJcbiAgICBpc0ZpbGVJbWFnZSxcclxuICAgIGlzRmlsZVZlY3RvcixcclxuICAgIGlzRmlsZU1vdmllLFxyXG4gICAgaXNGaWxlTXVzaWMsXHJcbiAgICBpc0ZpbGVaaXBwZWQsXHJcbn07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1mb290LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluSGVhZCA9IGV4cG9ydHMudHIgPSB2b2lkIDA7XHJcbmNvbnN0IHFpbl9ib2R5XzEgPSByZXF1aXJlKFwiLi9xaW4tYm9keVwiKTtcclxuY29uc3QgZGljdGlvbmFyeSA9IG5ldyBNYXAoKTtcclxuZnVuY3Rpb24gdHIob2YpIHtcclxuICAgIGNvbnNvbGUubG9nKFwidHI6IFwiICsgb2YpO1xyXG4gICAgcmV0dXJuIGRpY3Rpb25hcnkuZ2V0KG9mKSB8fCBvZjtcclxufVxyXG5leHBvcnRzLnRyID0gdHI7XHJcbmZ1bmN0aW9uIHRyYW5zbGF0ZShvZiwgdG8pIHtcclxuICAgIGRpY3Rpb25hcnkuc2V0KG9mLCB0byk7XHJcbn1cclxuZnVuY3Rpb24gdHJhbnNsYXRpb25zKGRpY3Rpb25hcnkpIHtcclxuICAgIGxldCBsaW5lcyA9IHFpbl9ib2R5XzEuUWluQm9keS5nZXRUZXh0TGluZXMoZGljdGlvbmFyeSk7XHJcbiAgICBmb3IgKGxldCBsaW5lIG9mIGxpbmVzKSB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gbGluZS5pbmRleE9mKFwiPVwiKTtcclxuICAgICAgICBpZiAoaW5kZXggPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCBvZiA9IGxpbmUuc3Vic3RyaW5nKDAsIGluZGV4KTtcclxuICAgICAgICAgICAgbGV0IHRvID0gbGluZS5zdWJzdHJpbmcoaW5kZXggKyAxKTtcclxuICAgICAgICAgICAgdHJhbnNsYXRlKG9mLCB0byk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGZvcmdldEFsbCgpIHtcclxuICAgIGRpY3Rpb25hcnkuY2xlYXIoKTtcclxufVxyXG5mdW5jdGlvbiBnZXRDb29raWUobmFtZSwgb3JEZWZhdWx0KSB7XHJcbiAgICBsZXQgY29va2llcyA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjtcIik7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvb2tpZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgY29va2llUGFpciA9IGNvb2tpZXNbaV0uc3BsaXQoXCI9XCIpO1xyXG4gICAgICAgIGlmIChuYW1lID09IGRlY29kZVVSSUNvbXBvbmVudChjb29raWVQYWlyWzBdKS50cmltKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChjb29raWVQYWlyWzFdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3JEZWZhdWx0O1xyXG59XHJcbmZ1bmN0aW9uIHNldENvb2tpZShuYW1lLCB2YWx1ZSwgb3B0aW9ucyA9IHt9KSB7XHJcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7IHBhdGg6IFwiL1wiIH0sIG9wdGlvbnMpO1xyXG4gICAgaWYgKCFvcHRpb25zLmV4cGlyZXMpIHtcclxuICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgMSAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xyXG4gICAgICAgIG9wdGlvbnMuZXhwaXJlcyA9IGRhdGU7XHJcbiAgICB9XHJcbiAgICBpZiAob3B0aW9ucy5leHBpcmVzIGluc3RhbmNlb2YgRGF0ZSkge1xyXG4gICAgICAgIG9wdGlvbnMuZXhwaXJlcyA9IG9wdGlvbnMuZXhwaXJlcy50b1VUQ1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgb3B0aW9uc1tcIlNhbWVTaXRlXCJdID0gXCJTdHJpY3RcIjtcclxuICAgIGxldCB1cGRhdGVkQ29va2llID0gZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpICsgXCI9XCIgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpO1xyXG4gICAgZm9yIChsZXQgb3B0aW9uS2V5IGluIG9wdGlvbnMpIHtcclxuICAgICAgICB1cGRhdGVkQ29va2llICs9IFwiOyBcIiArIG9wdGlvbktleTtcclxuICAgICAgICBsZXQgb3B0aW9uVmFsdWUgPSBvcHRpb25zW29wdGlvbktleV07XHJcbiAgICAgICAgaWYgKG9wdGlvblZhbHVlICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZWRDb29raWUgKz0gXCI9XCIgKyBvcHRpb25WYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB1cGRhdGVkQ29va2llICs9IFwiOyBTZWN1cmVcIjtcclxuICAgIGRvY3VtZW50LmNvb2tpZSA9IHVwZGF0ZWRDb29raWU7XHJcbn1cclxuZnVuY3Rpb24gZGVsQ29va2llKG5hbWUsIG9wdGlvbnMgPSB7fSkge1xyXG4gICAgbGV0IHVwZGF0ZWRDb29raWUgPSBlbmNvZGVVUklDb21wb25lbnQobmFtZSkgKyBcIj07ICBleHBpcmVzPVRodSwgMDEgSmFuIDE5NzAgMDA6MDA6MDAgR01UXCI7XHJcbiAgICBpZiAob3B0aW9ucy5leHBpcmVzKSB7XHJcbiAgICAgICAgZGVsZXRlIG9wdGlvbnMuZXhwaXJlcztcclxuICAgIH1cclxuICAgIGZvciAobGV0IG9wdGlvbktleSBpbiBvcHRpb25zKSB7XHJcbiAgICAgICAgdXBkYXRlZENvb2tpZSArPSBcIjsgXCIgKyBvcHRpb25LZXk7XHJcbiAgICAgICAgbGV0IG9wdGlvblZhbHVlID0gb3B0aW9uc1tvcHRpb25LZXldO1xyXG4gICAgICAgIGlmIChvcHRpb25WYWx1ZSAhPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB1cGRhdGVkQ29va2llICs9IFwiPVwiICsgb3B0aW9uVmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZG9jdW1lbnQuY29va2llID0gdXBkYXRlZENvb2tpZTtcclxufVxyXG5mdW5jdGlvbiBnZXREZXNrQVBJKCkge1xyXG4gICAgdmFyIHdpbiA9IHdpbmRvdztcclxuICAgIGlmICh3aW4uZGVza0FQSSkge1xyXG4gICAgICAgIHJldHVybiB3aW4uZGVza0FQSTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHdpbiA9IHdpbmRvdy5wYXJlbnQ7XHJcbiAgICB9XHJcbiAgICBpZiAod2luLmRlc2tBUEkpIHtcclxuICAgICAgICByZXR1cm4gd2luLmRlc2tBUEk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB3aW4gPSB3aW5kb3cudG9wO1xyXG4gICAgfVxyXG4gICAgaWYgKHdpbi5kZXNrQVBJKSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbi5kZXNrQVBJO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxufVxyXG5jb25zdCBsb2dnZWQgPSBbXTtcclxuZnVuY3Rpb24gZ2V0TG9nZ2VkKCkge1xyXG4gICAgcmV0dXJuIGxvZ2dlZDtcclxufVxyXG5mdW5jdGlvbiBsb2cobWVzc2FnZSkge1xyXG4gICAgbG9nZ2VkLnB1c2gobWVzc2FnZSk7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKF8pIHsgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBnZXREZXNrQVBJKCkuc2VuZChcImxvZ09uTWFpblwiLCBtZXNzYWdlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChfKSB7IH1cclxufVxyXG5mdW5jdGlvbiBsb2dJbmZvKGVycm9yLCBvcmlnaW4pIHtcclxuICAgIGxvZyhnZXRJbmZvTWVzc2FnZShlcnJvciwgb3JpZ2luKSk7XHJcbn1cclxuZnVuY3Rpb24gZ2V0SW5mb01lc3NhZ2UoaW5mbywgb3JpZ2luKSB7XHJcbiAgICByZXR1cm4gZ2V0VHJlYXRNZXNzYWdlKHRyKFwiTG9va1wiKSwgaW5mbywgb3JpZ2luKTtcclxufVxyXG5mdW5jdGlvbiBsb2dFcnJvcihlcnJvciwgb3JpZ2luKSB7XHJcbiAgICBsb2coZ2V0RXJyb3JNZXNzYWdlKGVycm9yLCBvcmlnaW4pKTtcclxufVxyXG5mdW5jdGlvbiBnZXRFcnJvck1lc3NhZ2UoZXJyb3IsIG9yaWdpbikge1xyXG4gICAgcmV0dXJuIGdldFRyZWF0TWVzc2FnZSh0cihcIlByb2JsZW1cIiksIGVycm9yLCBvcmlnaW4pO1xyXG59XHJcbmZ1bmN0aW9uIGxvZ1dhcm5pbmcoZXJyb3IsIG9yaWdpbikge1xyXG4gICAgbG9nKGdldFdhcm5pbmdNZXNzYWdlKGVycm9yLCBvcmlnaW4pKTtcclxufVxyXG5mdW5jdGlvbiBnZXRXYXJuaW5nTWVzc2FnZShlcnJvciwgb3JpZ2luKSB7XHJcbiAgICByZXR1cm4gZ2V0VHJlYXRNZXNzYWdlKHRyKFwiQXR0ZW50aW9uXCIpLCBlcnJvciwgb3JpZ2luKTtcclxufVxyXG5mdW5jdGlvbiBnZXRUcmVhdE1lc3NhZ2UocHJlZml4LCB2YWx1ZSwgb3JpZ2luKSB7XHJcbiAgICB2YXIgcmVzdWx0ID0gdHIoXCIgb246IFwiKTtcclxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT0gXCJzdHJpbmdcIiB8fCB2YWx1ZSBpbnN0YW5jZW9mIFN0cmluZykge1xyXG4gICAgICAgIHJlc3VsdCArPSB2YWx1ZS50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgaWYgKHZhbHVlICYmIHZhbHVlLndoeSkge1xyXG4gICAgICAgICAgICByZXN1bHQgKz0gZ2V0TWVzc2FnZU9yRGF0YSh2YWx1ZS53aHkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodmFsdWUgJiYgdmFsdWUubWVzc2FnZSkge1xyXG4gICAgICAgICAgICByZXN1bHQgKz0gZ2V0TWVzc2FnZU9yRGF0YSh2YWx1ZS5tZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHZhbHVlICYmIHZhbHVlLnJlc3BvbnNlICYmIHZhbHVlLnJlc3BvbnNlLmRhdGEpIHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9IFwiXFxuXCIgKyB0cihcIkFuZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXN1bHQgKz0gdHIoXCIgd2FzIHJldHVybmVkXCIpICsgZ2V0TWVzc2FnZU9yRGF0YSh2YWx1ZS5yZXNwb25zZS5kYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAob3JpZ2luKSB7XHJcbiAgICAgICAgcmVzdWx0ICs9IFwiXFxuXCIgKyB0cihcIkJ5IG9yaWdpbjogXCIpICsgb3JpZ2luO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByZWZpeCArIHJlc3VsdDtcclxufVxyXG5mdW5jdGlvbiBnZXRNZXNzYWdlT3JEYXRhKG9mKSB7XHJcbiAgICBpZiAodHlwZW9mIG9mID09IFwic3RyaW5nXCIgfHwgb2YgaW5zdGFuY2VvZiBTdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gb2YudG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB0cihcIiB3aXRoIGRhdGE6XCIpICsgXCJcXG5cIiArIEpTT04uc3RyaW5naWZ5KG9mKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiB0b2dnbGVEZXZUb29scygpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgZ2V0RGVza0FQSSgpLnNlbmQoXCJ0b2dnbGVEZXZUb29sc1wiKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgbG9nRXJyb3IoZSwgXCJ7cWlucGVsLXJlc30oRXJyQ29kZS0wMDAwMDEpXCIpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUWluSGVhZCA9IHtcclxuICAgIHRyYW5zbGF0ZSxcclxuICAgIHRyYW5zbGF0aW9ucyxcclxuICAgIGZvcmdldEFsbCxcclxuICAgIGdldENvb2tpZSxcclxuICAgIHNldENvb2tpZSxcclxuICAgIGRlbENvb2tpZSxcclxuICAgIGdldERlc2tBUEksXHJcbiAgICBnZXRMb2dnZWQsXHJcbiAgICBsb2csXHJcbiAgICBsb2dJbmZvLFxyXG4gICAgZ2V0SW5mb01lc3NhZ2UsXHJcbiAgICBsb2dFcnJvcixcclxuICAgIGdldEVycm9yTWVzc2FnZSxcclxuICAgIGxvZ1dhcm5pbmcsXHJcbiAgICBnZXRXYXJuaW5nTWVzc2FnZSxcclxuICAgIGdldFRyZWF0TWVzc2FnZSxcclxuICAgIHRvZ2dsZURldlRvb2xzLFxyXG59O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4taGVhZC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlFpbkxlZ3MgPSB2b2lkIDA7XHJcbmNvbnN0IHFpbl9za2luXzEgPSByZXF1aXJlKFwiLi9xaW4tc2tpblwiKTtcclxuZnVuY3Rpb24gbmV3Um93KGl0ZW1zLCBzdHlsZXMpIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICByZXN1bHQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgcmVzdWx0LnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcInJvd1wiO1xyXG4gICAgaWYgKGl0ZW1zKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5hcHBlbmRDaGlsZChpdGVtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBxaW5fc2tpbl8xLlFpblNraW4uYXBwbHlTdHlsZXMocmVzdWx0LCBzdHlsZXMpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5mdW5jdGlvbiBuZXdMaW5lKGl0ZW1zLCBzdHlsZXMpIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICByZXN1bHQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgcmVzdWx0LnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcInJvd1wiO1xyXG4gICAgcmVzdWx0LnN0eWxlLmZsZXhXcmFwID0gXCJ3cmFwXCI7XHJcbiAgICBpZiAoaXRlbXMpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcclxuICAgICAgICAgICAgcmVzdWx0LmFwcGVuZENoaWxkKGl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHFpbl9za2luXzEuUWluU2tpbi5hcHBseVN0eWxlcyhyZXN1bHQsIHN0eWxlcyk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbmZ1bmN0aW9uIG5ld0NvbHVtbihpdGVtcywgc3R5bGVzKSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcmVzdWx0LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgIHJlc3VsdC5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJjb2x1bW5cIjtcclxuICAgIGlmIChpdGVtcykge1xyXG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xyXG4gICAgICAgICAgICByZXN1bHQuYXBwZW5kQ2hpbGQoaXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcWluX3NraW5fMS5RaW5Ta2luLmFwcGx5U3R5bGVzKHJlc3VsdCwgc3R5bGVzKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuZnVuY3Rpb24gbmV3U3Bhbih0ZXh0LCBzdHlsZXMpIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICByZXN1bHQuaW5uZXJUZXh0ID0gdGV4dDtcclxuICAgIHFpbl9za2luXzEuUWluU2tpbi5hcHBseVN0eWxlcyhyZXN1bHQsIHN0eWxlcyk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbmZ1bmN0aW9uIG5ld0ltZyhzcmMsIHN0eWxlcykge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIHJlc3VsdC5zcmMgPSBzcmM7XHJcbiAgICBxaW5fc2tpbl8xLlFpblNraW4uYXBwbHlTdHlsZXMocmVzdWx0LCBzdHlsZXMpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5leHBvcnRzLlFpbkxlZ3MgPSB7XHJcbiAgICBuZXdSb3csXHJcbiAgICBuZXdMaW5lLFxyXG4gICAgbmV3Q29sdW1uLFxyXG4gICAgbmV3U3BhbixcclxuICAgIG5ld0ltZyxcclxufTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWxlZ3MuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5Ta2luID0gZXhwb3J0cy5RaW5TdHlsZXMgPSBleHBvcnRzLlFpbkdyYW5kZXVyID0gZXhwb3J0cy5RaW5Cb3VuZHMgPSBleHBvcnRzLlFpbkRpbWVuc2lvbiA9IGV4cG9ydHMuUWluUG9pbnQgPSB2b2lkIDA7XHJcbmNvbnN0IHFpbl9hcm1zXzEgPSByZXF1aXJlKFwiLi9xaW4tYXJtc1wiKTtcclxuY2xhc3MgUWluUG9pbnQge1xyXG59XHJcbmV4cG9ydHMuUWluUG9pbnQgPSBRaW5Qb2ludDtcclxuY2xhc3MgUWluRGltZW5zaW9uIHtcclxufVxyXG5leHBvcnRzLlFpbkRpbWVuc2lvbiA9IFFpbkRpbWVuc2lvbjtcclxuY2xhc3MgUWluQm91bmRzIHtcclxufVxyXG5leHBvcnRzLlFpbkJvdW5kcyA9IFFpbkJvdW5kcztcclxudmFyIFFpbkdyYW5kZXVyO1xyXG4oZnVuY3Rpb24gKFFpbkdyYW5kZXVyKSB7XHJcbiAgICBRaW5HcmFuZGV1cltcIlNNQUxMXCJdID0gXCJzbWFsbFwiO1xyXG4gICAgUWluR3JhbmRldXJbXCJNRURJVU1cIl0gPSBcIm1lZGl1bVwiO1xyXG4gICAgUWluR3JhbmRldXJbXCJMQVJHRVwiXSA9IFwibGFyZ2VcIjtcclxufSkoUWluR3JhbmRldXIgPSBleHBvcnRzLlFpbkdyYW5kZXVyIHx8IChleHBvcnRzLlFpbkdyYW5kZXVyID0ge30pKTtcclxuZXhwb3J0cy5RaW5TdHlsZXMgPSB7XHJcbiAgICBDb2xvckZvcmVncm91bmQ6IFwiIzE4MDAyN2ZmXCIsXHJcbiAgICBDb2xvckJhY2tncm91bmQ6IFwiI2ZmZmNmOWZmXCIsXHJcbiAgICBDb2xvckluYWN0aXZlOiBcIiNmZmYwZmZmZlwiLFxyXG4gICAgQ29sb3JBY3RpdmU6IFwiI2ZmZjBmMGZmXCIsXHJcbiAgICBDb2xvckFjY2VudDogXCIjYWUwMDAwZmZcIixcclxuICAgIENvbG9ySW5hY3RpdmVBY3Q6IFwiI2YwZjdmZmZmXCIsXHJcbiAgICBDb2xvckFjdGl2ZUFjdDogXCIjZGRkZGZmZmZcIixcclxuICAgIENvbG9yQWNjZW50QWN0OiBcIiMwMDAwYWVmZlwiLFxyXG4gICAgQ29sb3JCbG9ja2VkOiBcIiNmMGYwZjBmZlwiLFxyXG4gICAgQ29sb3JFbnRlcmVkOiBcIiNlN2YwZTdmZlwiLFxyXG4gICAgQ29sb3JBdHRlbmQ6IFwiIzQ5NmI0OWZmXCIsXHJcbiAgICBDb2xvclNlbGVjdGVkOiBcIiM1ZDcyZGU4ZlwiLFxyXG4gICAgRm9udE5hbWU6IFwiU291cmNlU2Fuc1Byb1wiLFxyXG4gICAgRm9udFNpemU6IFwiMTZweFwiLFxyXG59O1xyXG5mdW5jdGlvbiBzdHlsZUFzQm9keShlbCkge1xyXG4gICAgZWwuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICBlbC5zdHlsZS50b3AgPSBcIjBweFwiO1xyXG4gICAgZWwuc3R5bGUucmlnaHQgPSBcIjBweFwiO1xyXG4gICAgZWwuc3R5bGUuYm90dG9tID0gXCIwcHhcIjtcclxuICAgIGVsLnN0eWxlLmxlZnQgPSBcIjBweFwiO1xyXG4gICAgZWwuc3R5bGUucGFkZGluZyA9IFwiOXB4XCI7XHJcbiAgICBlbC5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiO1xyXG59XHJcbmZ1bmN0aW9uIHN0eWxlQXNCYXNlKGVsKSB7XHJcbiAgICBlbC5zdHlsZS5tYXJnaW4gPSBcIjFweFwiO1xyXG4gICAgZWwuc3R5bGUucGFkZGluZyA9IFwiM3B4XCI7XHJcbiAgICBlbC5zdHlsZS5vdXRsaW5lID0gXCJub25lXCI7XHJcbiAgICBlbC5zdHlsZS5jb2xvciA9IGV4cG9ydHMuUWluU3R5bGVzLkNvbG9yRm9yZWdyb3VuZDtcclxuICAgIGVsLnN0eWxlLmZvbnRGYW1pbHkgPSBcIlNvdXJjZVNhbnNQcm9cIjtcclxuICAgIGVsLnN0eWxlLmZvbnRTaXplID0gXCIxNnB4XCI7XHJcbn1cclxuZnVuY3Rpb24gc3R5bGVBc0VkaXRhYmxlKGVsKSB7XHJcbiAgICBzdHlsZUFzQmFzZShlbCk7XHJcbiAgICBlbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBleHBvcnRzLlFpblN0eWxlcy5Db2xvckluYWN0aXZlO1xyXG4gICAgZWwuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgXCIgKyBleHBvcnRzLlFpblN0eWxlcy5Db2xvckZvcmVncm91bmQ7XHJcbiAgICBlbC5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjNweFwiO1xyXG4gICAgZWwuc3R5bGUub3V0bGluZSA9IFwibm9uZVwiO1xyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsICgpID0+IHtcclxuICAgICAgICBlbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBleHBvcnRzLlFpblN0eWxlcy5Db2xvckFjdGl2ZTtcclxuICAgICAgICBlbC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCBcIiArIGV4cG9ydHMuUWluU3R5bGVzLkNvbG9yQWNjZW50O1xyXG4gICAgfSk7XHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgKCkgPT4ge1xyXG4gICAgICAgIGVsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGV4cG9ydHMuUWluU3R5bGVzLkNvbG9ySW5hY3RpdmU7XHJcbiAgICAgICAgZWwuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgXCIgKyBleHBvcnRzLlFpblN0eWxlcy5Db2xvckZvcmVncm91bmQ7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBzdHlsZUFzQWN0aW9uYWJsZShlbCkge1xyXG4gICAgc3R5bGVBc0Jhc2UoZWwpO1xyXG4gICAgZWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gZXhwb3J0cy5RaW5TdHlsZXMuQ29sb3JJbmFjdGl2ZUFjdDtcclxuICAgIGVsLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkIFwiICsgZXhwb3J0cy5RaW5TdHlsZXMuQ29sb3JGb3JlZ3JvdW5kO1xyXG4gICAgZWwuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIzcHhcIjtcclxuICAgIGVsLnN0eWxlLm91dGxpbmUgPSBcIm5vbmVcIjtcclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCAoKSA9PiB7XHJcbiAgICAgICAgZWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gZXhwb3J0cy5RaW5TdHlsZXMuQ29sb3JBY3RpdmVBY3Q7XHJcbiAgICAgICAgZWwuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgXCIgKyBleHBvcnRzLlFpblN0eWxlcy5Db2xvckFjY2VudEFjdDtcclxuICAgIH0pO1xyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsICgpID0+IHtcclxuICAgICAgICBlbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBleHBvcnRzLlFpblN0eWxlcy5Db2xvckluYWN0aXZlQWN0O1xyXG4gICAgICAgIGVsLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkIFwiICsgZXhwb3J0cy5RaW5TdHlsZXMuQ29sb3JGb3JlZ3JvdW5kO1xyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gc3R5bGVBc1JlYWRPbmx5KGVsKSB7XHJcbiAgICBzdHlsZUFzQmFzZShlbCk7XHJcbiAgICBlbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBleHBvcnRzLlFpblN0eWxlcy5Db2xvckJsb2NrZWQ7XHJcbiAgICBlbC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCBcIiArIGV4cG9ydHMuUWluU3R5bGVzLkNvbG9yRm9yZWdyb3VuZDtcclxuICAgIGVsLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiM3B4XCI7XHJcbiAgICBlbC5zdHlsZS5vdXRsaW5lID0gXCJub25lXCI7XHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgKCkgPT4ge1xyXG4gICAgICAgIGVsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGV4cG9ydHMuUWluU3R5bGVzLkNvbG9yRW50ZXJlZDtcclxuICAgICAgICBlbC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCBcIiArIGV4cG9ydHMuUWluU3R5bGVzLkNvbG9yQXR0ZW5kO1xyXG4gICAgfSk7XHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgKCkgPT4ge1xyXG4gICAgICAgIGVsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGV4cG9ydHMuUWluU3R5bGVzLkNvbG9yQmxvY2tlZDtcclxuICAgICAgICBlbC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCBcIiArIGV4cG9ydHMuUWluU3R5bGVzLkNvbG9yRm9yZWdyb3VuZDtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIHN0eWxlTWF4U2l6ZUZvck5vdE92ZXJGbG93KGVsLCBwYXJlbnQpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiRDFcIik7XHJcbiAgICBpZiAoIXBhcmVudCkge1xyXG4gICAgICAgIHBhcmVudCA9IGVsLnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJEMjogXCIgKyBwYXJlbnQpO1xyXG4gICAgfVxyXG4gICAgaWYgKHBhcmVudCkge1xyXG4gICAgICAgIGxldCBtYXhXaWR0aCA9IDA7XHJcbiAgICAgICAgbGV0IG1heEhlaWdodCA9IDA7XHJcbiAgICAgICAgbGV0IGltZWRpYXRlID0gZWw7XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICBtYXhXaWR0aCA9IG1heFdpZHRoICsgaW1lZGlhdGUuY2xpZW50TGVmdDtcclxuICAgICAgICAgICAgbWF4SGVpZ2h0ID0gbWF4SGVpZ2h0ICsgaW1lZGlhdGUuY2xpZW50VG9wO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkQzOiBcIiArIG1heFdpZHRoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJENDogXCIgKyBtYXhIZWlnaHQpO1xyXG4gICAgICAgICAgICBpbWVkaWF0ZSA9IGltZWRpYXRlLnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgfSB3aGlsZSAoaW1lZGlhdGUgIT0gbnVsbCAmJiBpbWVkaWF0ZSAhPSBwYXJlbnQpO1xyXG4gICAgICAgIG1heFdpZHRoID0gcGFyZW50LmNsaWVudFdpZHRoIC0gbWF4V2lkdGg7XHJcbiAgICAgICAgbWF4SGVpZ2h0ID0gcGFyZW50LmNsaWVudEhlaWdodCAtIG1heEhlaWdodDtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkQ1OiBcIiArIG1heFdpZHRoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkQ2OiBcIiArIG1heEhlaWdodCk7XHJcbiAgICAgICAgZWwuc3R5bGUubWF4V2lkdGggPSBtYXhXaWR0aCArIFwicHhcIjtcclxuICAgICAgICBlbC5zdHlsZS5tYXhIZWlnaHQgPSBtYXhIZWlnaHQgKyBcInB4XCI7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gc3R5bGVTaXplKGVsLCBzaXplKSB7XHJcbiAgICBpZiAoc2l6ZSkge1xyXG4gICAgICAgIGlmIChzaXplIGluc3RhbmNlb2YgUWluRGltZW5zaW9uKSB7XHJcbiAgICAgICAgICAgIGVsLnN0eWxlLndpZHRoID0gc2l6ZS53aWR0aCArIFwicHhcIjtcclxuICAgICAgICAgICAgZWwuc3R5bGUuaGVpZ2h0ID0gc2l6ZS5oZWlnaHQgKyBcInB4XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgZGltID0gZ2V0RGltZW5zaW9uU2l6ZShzaXplKTtcclxuICAgICAgICAgICAgZWwuc3R5bGUud2lkdGggPSBkaW0ud2lkdGggKyBcInB4XCI7XHJcbiAgICAgICAgICAgIGVsLnN0eWxlLmhlaWdodCA9IGRpbS5oZWlnaHQgKyBcInB4XCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHN0eWxlRmxleE1heChlbCkge1xyXG4gICAgZWwuc3R5bGUuZmxleCA9IFwiMVwiO1xyXG59XHJcbmZ1bmN0aW9uIHN0eWxlRmxleE1pbihlbCkge1xyXG4gICAgZWwuc3R5bGUuZmxleCA9IFwiMFwiO1xyXG59XHJcbmZ1bmN0aW9uIGdldFdpbmRvd1NpemUoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHdpZHRoOiBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoLFxyXG4gICAgICAgIGhlaWdodDogZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQsXHJcbiAgICB9O1xyXG59XHJcbmZ1bmN0aW9uIGdldFdpbmRvd1NpemVTdHlsZSgpIHtcclxuICAgIGNvbnN0IHdpZHRoID0gZ2V0V2luZG93U2l6ZSgpLndpZHRoO1xyXG4gICAgaWYgKHdpZHRoIDwgNjAwKSB7XHJcbiAgICAgICAgcmV0dXJuIFFpbkdyYW5kZXVyLlNNQUxMO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAod2lkdGggPCAxMDAwKSB7XHJcbiAgICAgICAgcmV0dXJuIFFpbkdyYW5kZXVyLk1FRElVTTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBRaW5HcmFuZGV1ci5MQVJHRTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBoaWRlQWxsSUZyYW1lcygpIHtcclxuICAgIHZhciBkb2NfaWZyYW1lcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaWZyYW1lXCIpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkb2NfaWZyYW1lcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBkb2NfaWZyYW1lID0gZG9jX2lmcmFtZXNbaV07XHJcbiAgICAgICAgZG9jX2lmcmFtZS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBzaG93QWxsSUZyYW1lcygpIHtcclxuICAgIHZhciBkb2NfaWZyYW1lcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaWZyYW1lXCIpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkb2NfaWZyYW1lcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBkb2NfaWZyYW1lID0gZG9jX2lmcmFtZXNbaV07XHJcbiAgICAgICAgZG9jX2lmcmFtZS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gZGlzYWJsZVNlbGVjdGlvbihlbGVtZW50KSB7XHJcbiAgICBlbGVtZW50LnN0eWxlLnVzZXJTZWxlY3QgPSBcIm5vbmVcIjtcclxuICAgIGVsZW1lbnQuc3R5bGUud2Via2l0VXNlclNlbGVjdCA9IFwibm9uZVwiO1xyXG4gICAgZWxlbWVudC5vbnNlbGVjdHN0YXJ0ID0gcWluX2FybXNfMS5RaW5Bcm1zLnN0b3BFdmVudDtcclxufVxyXG5mdW5jdGlvbiBjbGVhclNlbGVjdGlvbigpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGlmICh3aW5kb3cuZ2V0U2VsZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9LCAzNjApO1xyXG59XHJcbmZ1bmN0aW9uIGlzRWxlbWVudFZpc2libGVJblNjcm9sbChlbGVtZW50KSB7XHJcbiAgICBpZiAoZWxlbWVudC5wYXJlbnRFbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQub2Zmc2V0VG9wIDwgZWxlbWVudC5wYXJlbnRFbGVtZW50LnNjcm9sbFRvcCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlbGVtZW50Lm9mZnNldExlZnQgPCBlbGVtZW50LnBhcmVudEVsZW1lbnQuc2Nyb2xsTGVmdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlbGVtZW50LmNsaWVudFdpZHRoID5cclxuICAgICAgICAgICAgZWxlbWVudC5wYXJlbnRFbGVtZW50LmNsaWVudFdpZHRoIC1cclxuICAgICAgICAgICAgICAgIChlbGVtZW50Lm9mZnNldExlZnQgLSBlbGVtZW50LnBhcmVudEVsZW1lbnQuc2Nyb2xsTGVmdCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZWxlbWVudC5jbGllbnRIZWlnaHQgPlxyXG4gICAgICAgICAgICBlbGVtZW50LnBhcmVudEVsZW1lbnQuY2xpZW50SGVpZ2h0IC0gKGVsZW1lbnQub2Zmc2V0VG9wIC0gZWxlbWVudC5wYXJlbnRFbGVtZW50LnNjcm9sbFRvcCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcbmZ1bmN0aW9uIGdldERpbWVuc2lvbihlbCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB3aWR0aDogcGFyc2VJbnQoZWwuc3R5bGUud2lkdGgpLFxyXG4gICAgICAgIGhlaWdodDogcGFyc2VJbnQoZWwuc3R5bGUuaGVpZ2h0KSxcclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gZ2V0RGltZW5zaW9uU2l6ZShzaXplKSB7XHJcbiAgICBpZiAoc2l6ZSA9PSBRaW5HcmFuZGV1ci5MQVJHRSkge1xyXG4gICAgICAgIHJldHVybiBnZXREaW1lbnNpb25MYXJnZSgpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoc2l6ZSA9PSBRaW5HcmFuZGV1ci5NRURJVU0pIHtcclxuICAgICAgICByZXR1cm4gZ2V0RGltZW5zaW9uTWVkaXVtKCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZ2V0RGltZW5zaW9uU21hbGwoKTtcclxuICAgIH1cclxufVxyXG5jb25zdCBkaW1lbnNpb25TbWFsbCA9IHtcclxuICAgIHdpZHRoOiAyMSxcclxuICAgIGhlaWdodDogMjEsXHJcbn07XHJcbmZ1bmN0aW9uIGdldERpbWVuc2lvblNtYWxsKCkge1xyXG4gICAgcmV0dXJuIGRpbWVuc2lvblNtYWxsO1xyXG59XHJcbmNvbnN0IGRpbWVuc2lvbk1lZGl1bSA9IHtcclxuICAgIHdpZHRoOiAzMixcclxuICAgIGhlaWdodDogMzIsXHJcbn07XHJcbmZ1bmN0aW9uIGdldERpbWVuc2lvbk1lZGl1bSgpIHtcclxuICAgIHJldHVybiBkaW1lbnNpb25NZWRpdW07XHJcbn1cclxuY29uc3QgZGltZW5zaW9uTGFyZ2UgPSB7XHJcbiAgICB3aWR0aDogNjQsXHJcbiAgICBoZWlnaHQ6IDY0LFxyXG59O1xyXG5mdW5jdGlvbiBnZXREaW1lbnNpb25MYXJnZSgpIHtcclxuICAgIHJldHVybiBkaW1lbnNpb25MYXJnZTtcclxufVxyXG5mdW5jdGlvbiBhcHBseVN0eWxlcyhlbGVtZW50LCBzdHlsZXMpIHtcclxuICAgIGlmIChlbGVtZW50ICYmIHN0eWxlcykge1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHN0eWxlcykge1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlW2tleV0gPSBzdHlsZXNba2V5XTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5RaW5Ta2luID0ge1xyXG4gICAgc3R5bGVzOiBleHBvcnRzLlFpblN0eWxlcyxcclxuICAgIHN0eWxlQXNCb2R5LFxyXG4gICAgc3R5bGVBc0Jhc2UsXHJcbiAgICBzdHlsZUFzRWRpdGFibGUsXHJcbiAgICBzdHlsZUFzQWN0aW9uYWJsZSxcclxuICAgIHN0eWxlQXNSZWFkT25seSxcclxuICAgIHN0eWxlTWF4U2l6ZUZvck5vdE92ZXJGbG93LFxyXG4gICAgc3R5bGVTaXplLFxyXG4gICAgc3R5bGVGbGV4TWF4LFxyXG4gICAgc3R5bGVGbGV4TWluLFxyXG4gICAgZ2V0V2luZG93U2l6ZSxcclxuICAgIGdldFdpbmRvd1NpemVTdHlsZSxcclxuICAgIGhpZGVBbGxJRnJhbWVzLFxyXG4gICAgc2hvd0FsbElGcmFtZXMsXHJcbiAgICBkaXNhYmxlU2VsZWN0aW9uLFxyXG4gICAgY2xlYXJTZWxlY3Rpb24sXHJcbiAgICBpc0VsZW1lbnRWaXNpYmxlSW5TY3JvbGwsXHJcbiAgICBnZXREaW1lbnNpb24sXHJcbiAgICBnZXREaW1lbnNpb25TaXplLFxyXG4gICAgZ2V0RGltZW5zaW9uU21hbGwsXHJcbiAgICBnZXREaW1lbnNpb25NZWRpdW0sXHJcbiAgICBnZXREaW1lbnNpb25MYXJnZSxcclxuICAgIGFwcGx5U3R5bGVzLFxyXG59O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tc2tpbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlFpblNvdWwgPSB2b2lkIDA7XHJcbmNvbnN0IHFpbl9hcm1zXzEgPSByZXF1aXJlKFwiLi9xaW4tYXJtc1wiKTtcclxuY29uc3QgcWluX2JvZHlfMSA9IHJlcXVpcmUoXCIuL3Fpbi1ib2R5XCIpO1xyXG5jb25zdCBxaW5fZm9vdF8xID0gcmVxdWlyZShcIi4vcWluLWZvb3RcIik7XHJcbmNvbnN0IHFpbl9oZWFkXzEgPSByZXF1aXJlKFwiLi9xaW4taGVhZFwiKTtcclxuY29uc3QgcWluX2xlZ3NfMSA9IHJlcXVpcmUoXCIuL3Fpbi1sZWdzXCIpO1xyXG5jb25zdCBxaW5fc2tpbl8xID0gcmVxdWlyZShcIi4vcWluLXNraW5cIik7XHJcbmV4cG9ydHMuUWluU291bCA9IHtcclxuICAgIHNraW46IHFpbl9za2luXzEuUWluU2tpbixcclxuICAgIGhlYWQ6IHFpbl9oZWFkXzEuUWluSGVhZCxcclxuICAgIGFybXM6IHFpbl9hcm1zXzEuUWluQXJtcyxcclxuICAgIGJvZHk6IHFpbl9ib2R5XzEuUWluQm9keSxcclxuICAgIGxlZ3M6IHFpbl9sZWdzXzEuUWluTGVncyxcclxuICAgIGZvb3Q6IHFpbl9mb290XzEuUWluRm9vdCxcclxufTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLXNvdWwuanMubWFwIl19
