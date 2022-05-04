(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdModules = exports.isSameModule = exports.AdScope = exports.AdOptions = void 0;
const qinpel_cps_1 = require("qinpel-cps");
var AdOptions;
(function (AdOptions) {
    AdOptions["MODULE"] = "module";
    AdOptions["SCOPES"] = "scopes";
    AdOptions["FILTERS"] = "filters";
})(AdOptions = exports.AdOptions || (exports.AdOptions = {}));
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
exports.isSameModule = isSameModule;
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

},{"qinpel-cps":17}],2:[function(require,module,exports){
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
        this._title = newer.title;
        this._name = newer.name;
        this._kind = newer.kind;
        this._options = newer.options;
        this._key = newer.key ? true : false;
    }
    newEdit() {
        return qinpel_cps_1.QinMutantsArm.newEdit(this._kind, this._options);
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
    get options() {
        return this._options;
    }
    get key() {
        return this._key;
    }
    get edit() {
        return this._edit;
    }
    set edit(editor) {
        this._edit = editor;
    }
}
exports.AdField = AdField;

},{"qinpel-cps":17}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdFilterTie = exports.AdFilterLikes = exports.AdFilterItem = exports.AdFilters = void 0;
class AdFilters {
    constructor(items) {
        this._items = items;
    }
    get items() {
        return this._items;
    }
}
exports.AdFilters = AdFilters;
class AdFilterItem {
    constructor(name, mode, value, union) {
        this._name = name;
        this._mode = mode;
        this._value = value;
        this._union = union;
    }
    get name() {
        return this._name;
    }
    get mode() {
        return this._mode;
    }
    get value() {
        return this._value;
    }
    get union() {
        return this._union;
    }
}
exports.AdFilterItem = AdFilterItem;
var AdFilterLikes;
(function (AdFilterLikes) {
    AdFilterLikes["EQUALS"] = "equals";
    AdFilterLikes["DIFFERENT"] = "different";
    AdFilterLikes["BIGGER"] = "bigger";
    AdFilterLikes["LESSER"] = "lesser";
    AdFilterLikes["BIGGER_OR_EQUALS"] = "bigger_or_equals";
    AdFilterLikes["LESSER_OR_EQUALS"] = "lesser_or_equals";
})(AdFilterLikes = exports.AdFilterLikes || (exports.AdFilterLikes = {}));
var AdFilterTie;
(function (AdFilterTie) {
    AdFilterTie["AND"] = "and";
    AdFilterTie["OR"] = "or";
})(AdFilterTie = exports.AdFilterTie || (exports.AdFilterTie = {}));

},{}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuStartUp = exports.AdMenu = void 0;
const qinpel_cps_1 = require("qinpel-cps");
const qinpel_res_1 = require("qinpel-res");
const ad_consts_1 = require("./ad-consts");
const ad_expect_1 = require("./ad-expect");
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
                this.qinpel.chief.newJobber(item.module.title, item.module.app, ad_tools_1.AdTools.newAdOption(item.module, [ad_consts_1.AdScope.ALL]));
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
    const module = qinpel_cps_1.QinTools.qinpel().jobbed.getOption(ad_consts_1.AdOptions.MODULE);
    const scopes = qinpel_cps_1.QinTools.qinpel().jobbed.getOption(ad_consts_1.AdOptions.SCOPES);
    const filters = qinpel_cps_1.QinTools.qinpel().jobbed.getOption(ad_consts_1.AdOptions.FILTERS);
    if (module) {
        for (const menu of menus) {
            if ((0, ad_consts_1.isSameModule)(menu.module, module)) {
                let expect = new ad_expect_1.AdExpect({
                    scopes,
                    filters,
                    waiters: new qinpel_res_1.QinWaiters().addWaiter((result) => {
                        qinpel_cps_1.QinTools.qinpel().jobbed.sendWaiters(result);
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

},{"./ad-consts":1,"./ad-expect":2,"./ad-tools":12,"qinpel-cps":17,"qinpel-res":50}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdModel = void 0;
const qinpel_cps_1 = require("qinpel-cps");
class AdModel {
    constructor(registry) {
        this._registry = registry;
        this._fields = [];
    }
    get registry() {
        return this._registry;
    }
    get fields() {
        return this._fields;
    }
    addField(field) {
        this._fields.push(field);
    }
    insert() {
        qinpel_cps_1.QinTools.qinpel();
    }
    search(filters) {
        qinpel_cps_1.QinTools.qinpel();
    }
    update(filters) {
        qinpel_cps_1.QinTools.qinpel();
    }
    delete(filters) {
        qinpel_cps_1.QinTools.qinpel();
    }
}
exports.AdModel = AdModel;

},{"qinpel-cps":17}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdRegBar = void 0;
const qinpel_cps_1 = require("qinpel-cps");
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
        this._qinMutate = new qinpel_cps_1.QinIcon(qinpel_cps_1.QinAsset.FacePencil);
        this._qinMode = new qinpel_cps_1.QinIconPick({
            icons: [this._qinInsert, this._qinSearch, this._qinMutate],
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
        this._qinDelete = new qinpel_cps_1.QinButton({ icon: new qinpel_cps_1.QinIcon(qinpel_cps_1.QinAsset.FaceTrash) });
        this._qinConfirm = new qinpel_cps_1.QinButton({ icon: new qinpel_cps_1.QinIcon(qinpel_cps_1.QinAsset.FaceConfirm) });
        this._qinCancel = new qinpel_cps_1.QinButton({ icon: new qinpel_cps_1.QinIcon(qinpel_cps_1.QinAsset.FaceCancel) });
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
        this._qinInsert.addActionMain((_) => this._reg.tryChangeMode(ad_register_1.AdRegMode.INSERT));
        this._qinSearch.addActionMain((_) => this._reg.tryChangeMode(ad_register_1.AdRegMode.SEARCH));
        this._qinMutate.addActionMain((_) => this._reg.tryChangeMode(ad_register_1.AdRegMode.MUTATE));
        this._reg.addListener({
            event: ad_register_1.AdRegEvent.CHANGE_MODE,
            onDid: (values) => this.setMode(values.newValue),
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
        this._qinDelete.install(this);
        this._qinDelete.addActionMain((_) => this._reg.tryDelete());
        this._qinConfirm.install(this);
        this._qinConfirm.addActionMain((_) => this._reg.tryConfirm());
        this._qinCancel.install(this);
        this._qinCancel.addActionMain((_) => this._reg.tryCancel());
    }
    setMode(mode) {
        this._qinMode.setData(null);
        if (mode) {
            switch (mode) {
                case ad_register_1.AdRegMode.INSERT:
                    this._qinMode.setData(this._qinInsert.asset);
                    this._qinGoFirst.unDisplay();
                    this._qinGoPrior.unDisplay();
                    this._qinGoNext.unDisplay();
                    this._qinGoLast.unDisplay();
                    this._qinDelete.unDisplay();
                    this._qinConfirm.reDisplay();
                    this._qinCancel.reDisplay();
                    break;
                case ad_register_1.AdRegMode.SEARCH:
                    this._qinMode.setData(this._qinSearch.asset);
                    this._qinGoFirst.reDisplay();
                    this._qinGoPrior.reDisplay();
                    this._qinGoNext.reDisplay();
                    this._qinGoLast.reDisplay();
                    this._qinDelete.unDisplay();
                    this._qinConfirm.unDisplay();
                    this._qinCancel.unDisplay();
                    break;
                case ad_register_1.AdRegMode.MUTATE:
                    this._qinMode.setData(this._qinMutate.asset);
                    this._qinGoFirst.unDisplay();
                    this._qinGoPrior.unDisplay();
                    this._qinGoNext.unDisplay();
                    this._qinGoLast.unDisplay();
                    this._qinDelete.reDisplay();
                    this._qinConfirm.reDisplay();
                    this._qinCancel.reDisplay();
                    break;
            }
        }
    }
}
exports.AdRegBar = AdRegBar;

},{"./ad-register":11,"qinpel-cps":17}],8:[function(require,module,exports){
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
        const editor = qinpel_cps_1.QinMutantsArm.newEdit(field.kind, field.options);
        field.edit = editor;
        if (field.title) {
            const titled = new qinpel_cps_1.QinField(field.title, editor);
            titled.install(this._line);
        }
        else {
            editor.install(this._line);
        }
    }
}
exports.AdRegEditor = AdRegEditor;

},{"qinpel-cps":17}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdRegSearch = void 0;
const qinpel_cps_1 = require("qinpel-cps");
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
            this._clauses[0].clear();
        }
    }
    rebuild() {
        this._lines.unInstallChildren();
        this._clauses.forEach((clause) => {
            clause.install(this._lines);
        });
    }
}
exports.AdRegSearch = AdRegSearch;
class SearchClause extends qinpel_cps_1.QinLine {
    constructor(dad) {
        super();
        this._same = new SearchSame();
        this._field = new qinpel_cps_1.QinCombo();
        this._likes = new SearchCondition();
        this._value = new qinpel_cps_1.QinString();
        this._tie = new SearchTie();
        this._add = new qinpel_cps_1.QinButton({ icon: new qinpel_cps_1.QinIcon(qinpel_cps_1.QinAsset.FacePlus) });
        this._del = new qinpel_cps_1.QinButton({ icon: new qinpel_cps_1.QinIcon(qinpel_cps_1.QinAsset.FaceMinus) });
        this._dad = dad;
        this._same.install(this);
        this._field.install(this);
        this._likes.install(this);
        this._value.install(this);
        this._tie.install(this);
        this._add.install(this);
        this._del.install(this);
        this._add.addActionMain((_) => {
            this._dad.addClause(this);
        });
        this._del.addActionMain((_) => {
            this._dad.delClause(this);
        });
        this.style.putAsPaddingBottom(4);
        this.style.putAsBorderBottom(2, "#bbb");
        this.style.putAsMarginBottom(4);
    }
    addField(item) {
        this._field.addItem(item);
    }
    clear() {
        this._same.setData("EQUALS");
        this._likes.setData("EQUALS");
        this._value.setData(null);
        this._tie.setData("AND");
    }
}
class SearchSame extends qinpel_cps_1.QinCombo {
    constructor() {
        super();
        this.addItem({ title: "==", value: "EQUALS" });
        this.addItem({ title: "!=", value: "DIVERS" });
        this.style.putAsMaxWidth(64);
    }
}
class SearchCondition extends qinpel_cps_1.QinCombo {
    constructor() {
        super();
        this.addItem({ title: "=", value: "EQUALS" });
        this.addItem({ title: ">", value: "BIGGER" });
        this.addItem({ title: "<", value: "LESSER" });
        this.addItem({ title: ">=", value: "BIGGER_EQUALS" });
        this.addItem({ title: "<=", value: "LESSER_EQUALS" });
        this.addItem({ title: "$_", value: "STARTS_WITH" });
        this.addItem({ title: "_$", value: "ENDS_WITH" });
        this.addItem({ title: "_$_", value: "CONTAINS" });
        this.style.putAsMaxWidth(64);
    }
}
class SearchTie extends qinpel_cps_1.QinCombo {
    constructor() {
        super();
        this.addItem({ title: "&&", value: "AND" });
        this.addItem({ title: "||", value: "OR" });
        this.style.putAsMaxWidth(64);
    }
}

},{"qinpel-cps":17}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdRegTable = void 0;
const qinpel_cps_1 = require("qinpel-cps");
class AdRegTable extends qinpel_cps_1.QinTable {
    constructor(register) {
        super();
        this._reg = register;
    }
}
exports.AdRegTable = AdRegTable;

},{"qinpel-cps":17}],11:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdRegEvent = exports.AdRegView = exports.AdRegMode = exports.AdRegister = void 0;
const qinpel_cps_1 = require("qinpel-cps");
const ad_consts_1 = require("./ad-consts");
const ad_model_1 = require("./ad-model");
const ad_reg_bar_1 = require("./ad-reg-bar");
const ad_reg_editor_1 = require("./ad-reg-editor");
const ad_reg_search_1 = require("./ad-reg-search");
const ad_reg_table_1 = require("./ad-reg-table");
class AdRegister extends qinpel_cps_1.QinColumn {
    constructor(module, registry, expect) {
        super();
        this._listener = new Array();
        this._regBar = new ad_reg_bar_1.AdRegBar(this);
        this._viewSingle = new qinpel_cps_1.QinStack();
        this._viewVertical = new qinpel_cps_1.QinSplitter({ horizontal: false });
        this._viewHorizontal = new qinpel_cps_1.QinSplitter({ horizontal: true });
        this._body = new qinpel_cps_1.QinStack();
        this._bodyEditor = new ad_reg_editor_1.AdRegEditor(this);
        this._bodySearch = new ad_reg_search_1.AdRegSearch(this);
        this._table = new ad_reg_table_1.AdRegTable(this);
        this._module = module;
        this._registry = registry;
        this._expect = expect;
        this._model = new ad_model_1.AdModel(registry);
        this._viewSingle.style.putAsFlexMax();
        this._viewVertical.style.putAsFlexMax();
        this._viewHorizontal.style.putAsFlexMax();
        this._regBar.install(this);
        this._body.stack(this._bodyEditor);
        this._body.stack(this._bodySearch);
        if (expect.scopes.find((scope) => scope === ad_consts_1.AdScope.ALL) ||
            expect.scopes.find((scope) => scope === ad_consts_1.AdScope.INSERT)) {
            this.changeMode(AdRegMode.INSERT);
        }
        else {
            this.changeMode(AdRegMode.SEARCH);
        }
        this.viewVertical();
        this._regBar.tabIndex = 0;
        this._body.tabIndex = 1;
        this._table.tabIndex = 2;
    }
    get module() {
        return this._module;
    }
    get registry() {
        return this._registry;
    }
    get expect() {
        return this._expect;
    }
    get model() {
        return this._model;
    }
    addTab(title) {
        this._bodyEditor.addTab(title);
    }
    addLine() {
        this._bodyEditor.addLine();
    }
    addField(field) {
        this._model.addField(field);
        this._bodyEditor.addField(field);
        this._bodySearch.addField(field);
        this._table.addHead(field.title);
    }
    changeMode(mode) {
        if (mode === AdRegMode.SEARCH) {
            this._body.show(this._bodySearch);
        }
        else {
            this._body.show(this._bodyEditor);
        }
        this._regMode = mode;
        this.callDidListeners(AdRegEvent.CHANGE_MODE, { newValue: this._regMode });
    }
    tryChangeMode(mode) {
        let cancel = this.callTryListeners(AdRegEvent.CHANGE_MODE, {
            oldValue: this._regMode,
            setValue: mode,
        });
        if (cancel) {
            return cancel;
        }
        this.changeMode(mode);
        return null;
    }
    get mode() {
        return this._regMode;
    }
    tryGoFirst() {
        throw new Error("Method not implemented.");
    }
    tryGoPrior() {
        throw new Error("Method not implemented.");
    }
    tryGoNext() {
        throw new Error("Method not implemented.");
    }
    tryGoLast() {
        throw new Error("Method not implemented.");
    }
    tryDelete() {
        throw new Error("Method not implemented.");
    }
    tryConfirm() {
        throw new Error("Method not implemented.");
    }
    tryCancel() {
        throw new Error("Method not implemented.");
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
        this.callDidListeners(AdRegEvent.CHANGE_VIEW, { newValue: this._regView });
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
        this.callDidListeners(AdRegEvent.CHANGE_VIEW, { newValue: this._regView });
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
        this.callDidListeners(AdRegEvent.CHANGE_VIEW, { newValue: this._regView });
    }
    get view() {
        return this._regView;
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
    callTryListeners(event, value) {
        this._listener.forEach((listen) => {
            if (listen.event === event) {
                if (listen.onTry) {
                    let cancel = listen.onTry(value);
                    if (cancel) {
                        return cancel;
                    }
                }
            }
        });
        return null;
    }
    callDidListeners(event, value) {
        this._listener.forEach((listen) => {
            if (listen.event === event) {
                if (listen.onDid) {
                    listen.onDid(value);
                }
            }
        });
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
    AdRegMode["INSERT"] = "insert";
    AdRegMode["SEARCH"] = "search";
    AdRegMode["MUTATE"] = "mutate";
})(AdRegMode = exports.AdRegMode || (exports.AdRegMode = {}));
var AdRegView;
(function (AdRegView) {
    AdRegView["SINGLE"] = "insert";
    AdRegView["VERTICAL"] = "search";
    AdRegView["HORIZONTAL"] = "mutate";
})(AdRegView = exports.AdRegView || (exports.AdRegView = {}));
var AdRegEvent;
(function (AdRegEvent) {
    AdRegEvent["CHANGE_MODE"] = "CHANGE_MODE";
    AdRegEvent["CHANGE_VIEW"] = "CHANGE_VIEW";
})(AdRegEvent = exports.AdRegEvent || (exports.AdRegEvent = {}));

},{"./ad-consts":1,"./ad-model":6,"./ad-reg-bar":7,"./ad-reg-editor":8,"./ad-reg-search":9,"./ad-reg-table":10,"qinpel-cps":17}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdTools = void 0;
const ad_consts_1 = require("./ad-consts");
function newAdOption(module, scopes, filters) {
    var result = {};
    result[ad_consts_1.AdOptions.MODULE] = module;
    result[ad_consts_1.AdOptions.SCOPES] = scopes;
    result[ad_consts_1.AdOptions.FILTERS] = filters;
    return result;
}
exports.AdTools = {
    newAdOption
};

},{"./ad-consts":1}],13:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdTools = exports.AdRegEvent = exports.AdRegView = exports.AdRegMode = exports.AdRegister = exports.AdRegTable = exports.AdRegSearch = exports.AdRegEditor = exports.AdRegBar = exports.AdModel = exports.menuStartUp = exports.AdMenu = exports.AdFilterTie = exports.AdFilterLikes = exports.AdFilterItem = exports.AdFilters = exports.AdField = exports.AdExpect = exports.AdModules = exports.isSameModule = exports.AdScope = exports.AdOptions = void 0;
var ad_consts_1 = require("./ad-consts");
Object.defineProperty(exports, "AdOptions", { enumerable: true, get: function () { return ad_consts_1.AdOptions; } });
var ad_consts_2 = require("./ad-consts");
Object.defineProperty(exports, "AdScope", { enumerable: true, get: function () { return ad_consts_2.AdScope; } });
var ad_consts_3 = require("./ad-consts");
Object.defineProperty(exports, "isSameModule", { enumerable: true, get: function () { return ad_consts_3.isSameModule; } });
var ad_consts_4 = require("./ad-consts");
Object.defineProperty(exports, "AdModules", { enumerable: true, get: function () { return ad_consts_4.AdModules; } });
var ad_expect_1 = require("./ad-expect");
Object.defineProperty(exports, "AdExpect", { enumerable: true, get: function () { return ad_expect_1.AdExpect; } });
var ad_field_1 = require("./ad-field");
Object.defineProperty(exports, "AdField", { enumerable: true, get: function () { return ad_field_1.AdField; } });
var ad_filters_1 = require("./ad-filters");
Object.defineProperty(exports, "AdFilters", { enumerable: true, get: function () { return ad_filters_1.AdFilters; } });
var ad_filters_2 = require("./ad-filters");
Object.defineProperty(exports, "AdFilterItem", { enumerable: true, get: function () { return ad_filters_2.AdFilterItem; } });
var ad_filters_3 = require("./ad-filters");
Object.defineProperty(exports, "AdFilterLikes", { enumerable: true, get: function () { return ad_filters_3.AdFilterLikes; } });
var ad_filters_4 = require("./ad-filters");
Object.defineProperty(exports, "AdFilterTie", { enumerable: true, get: function () { return ad_filters_4.AdFilterTie; } });
var ad_menu_1 = require("./ad-menu");
Object.defineProperty(exports, "AdMenu", { enumerable: true, get: function () { return ad_menu_1.AdMenu; } });
var ad_menu_2 = require("./ad-menu");
Object.defineProperty(exports, "menuStartUp", { enumerable: true, get: function () { return ad_menu_2.menuStartUp; } });
var ad_model_1 = require("./ad-model");
Object.defineProperty(exports, "AdModel", { enumerable: true, get: function () { return ad_model_1.AdModel; } });
var ad_reg_bar_1 = require("./ad-reg-bar");
Object.defineProperty(exports, "AdRegBar", { enumerable: true, get: function () { return ad_reg_bar_1.AdRegBar; } });
var ad_reg_editor_1 = require("./ad-reg-editor");
Object.defineProperty(exports, "AdRegEditor", { enumerable: true, get: function () { return ad_reg_editor_1.AdRegEditor; } });
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
Object.defineProperty(exports, "AdRegEvent", { enumerable: true, get: function () { return ad_register_4.AdRegEvent; } });
var ad_tools_1 = require("./ad-tools");
Object.defineProperty(exports, "AdTools", { enumerable: true, get: function () { return ad_tools_1.AdTools; } });

},{"./ad-consts":1,"./ad-expect":2,"./ad-field":3,"./ad-filters":4,"./ad-menu":5,"./ad-model":6,"./ad-reg-bar":7,"./ad-reg-editor":8,"./ad-reg-search":9,"./ad-reg-table":10,"./ad-register":11,"./ad-tools":12}],14:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdNation = void 0;
const adcommon_1 = require("adcommon");
const qinpel_cps_1 = require("qinpel-cps");
class AdNation extends adcommon_1.AdRegister {
    constructor(module, expect) {
        super(module, { base: "[ TODO ]", name: "paises" }, expect);
        this.addField(new adcommon_1.AdField({
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
    }
}
exports.AdNation = AdNation;

},{"adcommon":13,"qinpel-cps":17}],15:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdRegion = void 0;
const adcommon_1 = require("adcommon");
const qinpel_cps_1 = require("qinpel-cps");
class AdRegion extends adcommon_1.AdRegister {
    constructor(module, expect) {
        super(module, { base: "[ TODO ]", name: "regioes" }, expect);
        this.addField(new adcommon_1.AdField({
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
    }
}
exports.AdRegion = AdRegion;

},{"adcommon":13,"qinpel-cps":17}],16:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const adcommon_1 = require("adcommon");
const ad_nation_1 = require("./ad-nation");
const ad_region_1 = require("./ad-region");
const items = [
    { module: adcommon_1.AdModules.REGION, register: ad_region_1.AdRegion },
    { module: adcommon_1.AdModules.NATION, register: ad_nation_1.AdNation },
];
(0, adcommon_1.menuStartUp)(items).style.putAsBody();

},{"./ad-nation":14,"./ad-region":15,"adcommon":13}],17:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinTools = exports.QinTitled = exports.QinTabs = exports.QinTable = exports.QinString = exports.QinStack = exports.QinSplitter = exports.QinSpacer = exports.QinScroll = exports.QinRow = exports.QinPopup = exports.QinPanel = exports.QinMutantsArm = exports.QinMutants = exports.QinLine = exports.QinLabel = exports.QinInteger = exports.QinIcon = exports.QinIconPick = exports.QinIconCell = exports.QinFileView = exports.QinFilePick = exports.QinFilePath = exports.QinField = exports.QinEdit = exports.QinDivider = exports.QinCombo = exports.QinColumn = exports.QinButton = exports.QinBoolean = exports.QinBase = exports.QinBaseStyle = exports.qinUrlAsset = exports.qinAssetUrl = exports.QinAsset = void 0;
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
var qin_tools_1 = require("./qin-tools");
Object.defineProperty(exports, "QinTools", { enumerable: true, get: function () { return qin_tools_1.QinTools; } });

},{"./qin-assets":18,"./qin-base":20,"./qin-base-style":19,"./qin-boolean":21,"./qin-button":22,"./qin-column":23,"./qin-combo":24,"./qin-divider":25,"./qin-edit":26,"./qin-field":27,"./qin-file-path":28,"./qin-file-pick":29,"./qin-file-view":30,"./qin-icon":33,"./qin-icon-cell":31,"./qin-icon-pick":32,"./qin-integer":34,"./qin-label":35,"./qin-line":36,"./qin-mutants":37,"./qin-panel":38,"./qin-popup":39,"./qin-row":40,"./qin-scroll":41,"./qin-spacer":42,"./qin-splitter":43,"./qin-stack":44,"./qin-string":45,"./qin-table":46,"./qin-tabs":47,"./qin-titled":48,"./qin-tools":49}],18:[function(require,module,exports){
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
    QinAsset["Qinpel48"] = "qinpel-48.png";
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

},{}],19:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinBaseStyle = void 0;
const qinpel_res_1 = require("qinpel-res");
class QinBaseStyle {
    constructor(element) {
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
    putAsEdit() {
        qinpel_res_1.QinSkin.styleAsEdit(this._el);
        this._el.tabIndex = 0;
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

},{"qinpel-res":50}],20:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinBase = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_base_style_1 = require("./qin-base-style");
const qin_tools_1 = require("./qin-tools");
class QinBase {
    constructor() {
        this._baseParent = null;
        this._pastParent = null;
        this._baseChildren = [];
        this._baseDisplay = null;
        this._baseVisibility = null;
        this._style = null;
    }
    get qinpel() {
        return qin_tools_1.QinTools.qinpel();
    }
    get style() {
        if (this._style == null) {
            this._style = new qin_base_style_1.QinBaseStyle(this.getMain());
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
        if (this.getMain().style.display !== "none") {
            this._baseDisplay = this.getMain().style.display;
            this.getMain().style.display = "none";
        }
    }
    reDisplay() {
        if (this._baseDisplay != null) {
            this.getMain().style.display = this._baseDisplay;
        }
    }
    unVisible() {
        if (this.getMain().style.display !== "hidden") {
            this._baseVisibility = this.getMain().style.visibility;
            this.getMain().style.visibility = "hidden";
        }
    }
    reVisible() {
        if (this._baseVisibility != null) {
            this.getMain().style.visibility = this._baseVisibility;
        }
    }
    addChild(child) {
        this._baseChildren.push(child);
        this.getMain().appendChild(child.getMain());
    }
    delChild(child) {
        let index = this._baseChildren.indexOf(child);
        if (index > -1) {
            this._baseChildren.splice(index, 1);
        }
        this.getMain().removeChild(child.getMain());
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
        return this.getMain().id;
    }
    set id(id) {
        this.getMain().id = id;
    }
    get tabIndex() {
        return this.getMain().tabIndex;
    }
    set tabIndex(index) {
        this.getMain().tabIndex = index;
    }
    focus() {
        this.getMain().focus();
    }
    addAction(action) {
        qinpel_res_1.QinArm.addAction(this.getMain(), action);
    }
    addActionMain(action) {
        qinpel_res_1.QinArm.addActionMain(this.getMain(), action);
    }
    addActionMainKey(action) {
        qinpel_res_1.QinArm.addActionMainKey(this.getMain(), action);
    }
    addActionMainMouse(action) {
        qinpel_res_1.QinArm.addActionMainMouse(this.getMain(), action);
    }
    addActionMainTouch(action) {
        qinpel_res_1.QinArm.addActionMainTouch(this.getMain(), action);
    }
    addActionMainPoint(action) {
        qinpel_res_1.QinArm.addActionMainPoint(this.getMain(), action);
    }
    addActionMidi(action) {
        qinpel_res_1.QinArm.addActionMidi(this.getMain(), action);
    }
    addActionMidiKey(action) {
        qinpel_res_1.QinArm.addActionMidiKey(this.getMain(), action);
    }
    addActionMidiMouse(action) {
        qinpel_res_1.QinArm.addActionMidiMouse(this.getMain(), action);
    }
    addActionMidiTouch(action) {
        qinpel_res_1.QinArm.addActionMidiTouch(this.getMain(), action);
    }
    addActionMidiPoint(action) {
        qinpel_res_1.QinArm.addActionMidiPoint(this.getMain(), action);
    }
    addActionMenu(action) {
        qinpel_res_1.QinArm.addActionMenu(this.getMain(), action);
    }
    addActionMenuKey(action) {
        qinpel_res_1.QinArm.addActionMenuKey(this.getMain(), action);
    }
    addActionMenuMouse(action) {
        qinpel_res_1.QinArm.addActionMenuMouse(this.getMain(), action);
    }
    addActionMenuTouch(action) {
        qinpel_res_1.QinArm.addActionMenuTouch(this.getMain(), action);
    }
    addActionMenuPoint(action) {
        qinpel_res_1.QinArm.addActionMenuPoint(this.getMain(), action);
    }
}
exports.QinBase = QinBase;

},{"./qin-base-style":19,"./qin-tools":49,"qinpel-res":50}],21:[function(require,module,exports){
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
    constructor(options) {
        super();
        this._qinMain = new qin_line_1.QinLine();
        this._qinSpan = new qin_label_1.QinLabel();
        this._qinIcon = new qin_icon_1.QinIcon(qin_assets_1.QinAsset.FaceCheckRadio);
        this._value = false;
        this._qinSpan.install(this._qinMain);
        this._qinIcon.install(this._qinSpan);
        this._qinSpan.style.putAsEdit();
        this._qinSpan.style.putAsDisplayFlex();
        this._qinSpan.style.putAsAllCentered();
        this._qinSpan.addAction((qinEvent) => {
            if (qinEvent.isMain) {
                this.toggle();
            }
        });
        if (options === null || options === void 0 ? void 0 : options.initial) {
            this.setData(options.initial);
        }
    }
    getNature() {
        return qinpel_res_1.QinNature.BOOL;
    }
    getMain() {
        return this._qinMain.getMain();
    }
    getData() {
        return this._value;
    }
    setData(data) {
        this._value = data;
        this.updateIcon();
    }
    get qinMain() {
        return this._qinMain;
    }
    get qinSpan() {
        return this._qinSpan;
    }
    get qinIcon() {
        return this._qinIcon;
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
        this.updateIcon();
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
        this._value = !this._value;
        this.updateIcon();
    }
}
exports.QinBoolean = QinBoolean;

},{"./qin-assets":18,"./qin-edit":26,"./qin-icon":33,"./qin-label":35,"./qin-line":36,"qinpel-res":50}],22:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinButton = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_base_1 = require("./qin-base");
class QinButton extends qin_base_1.QinBase {
    constructor(options) {
        super();
        this._elMain = document.createElement("button");
        this._qinIcon = null;
        this._qinLabel = null;
        styles.applyOnButton(this._elMain);
        if (options === null || options === void 0 ? void 0 : options.icon) {
            this._qinIcon = options.icon;
            this._qinIcon.install(this);
        }
        if (options === null || options === void 0 ? void 0 : options.label) {
            this._qinLabel = options.label;
            this._qinLabel.install(this);
        }
    }
    getMain() {
        return this._elMain;
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
        qinpel_res_1.QinSkin.styleAsEdit(el);
        el.style.display = "flex";
        el.style.flexDirection = "row";
        el.style.alignItems = "center";
        el.style.justifyContent = "center";
    },
};

},{"./qin-base":20,"qinpel-res":50}],23:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinColumn = void 0;
const qin_panel_1 = require("./qin-panel");
class QinColumn extends qin_panel_1.QinPanel {
    constructor(options) {
        super(options);
        this.style.putAsFlexDirectionColumn();
        this.style.putAsFlexWrapNot();
        this.getMain().style.minWidth = "min-content";
        this.getMain().style.minHeight = "min-content";
    }
    put(item) {
        item.install(this);
        return this;
    }
}
exports.QinColumn = QinColumn;

},{"./qin-panel":38}],24:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinCombo = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_edit_1 = require("./qin-edit");
class QinCombo extends qin_edit_1.QinEdit {
    constructor(options) {
        super();
        this._elMain = document.createElement("select");
        this._elGroups = new Array();
        this.style.putAsEdit();
        if (options === null || options === void 0 ? void 0 : options.items) {
            for (let item of options.items) {
                this.addItem(item);
            }
        }
        if (options === null || options === void 0 ? void 0 : options.selected) {
            this.setData(options.selected);
        }
    }
    getMain() {
        return this._elMain;
    }
    getNature() {
        return qinpel_res_1.QinNature.CHARS;
    }
    getData() {
        return this._elMain.value;
    }
    setData(data) {
        this._elMain.value = data;
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
            this._elMain.appendChild(option);
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
        this._elMain.appendChild(newGroup);
        return newGroup;
    }
}
exports.QinCombo = QinCombo;

},{"./qin-edit":26,"qinpel-res":50}],25:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinDivider = void 0;
const qin_base_1 = require("./qin-base");
class QinDivider extends qin_base_1.QinBase {
    constructor(options) {
        super();
        this._elMain = document.createElement("div");
        this._isHorizontal = true;
        if (options === null || options === void 0 ? void 0 : options.horizontal) {
            this.setHorizontal();
        }
        else {
            this.setVertical();
        }
    }
    getMain() {
        return this._elMain;
    }
    setHorizontal() {
        this._elMain.style.minWidth = "initial";
        this._elMain.style.maxWidth = "initial";
        this._elMain.style.minHeight = "6px";
        this._elMain.style.maxHeight = "6px";
        this._elMain.style.height = "6px";
        this._elMain.style.background =
            "linear-gradient(180deg, rgba(255,250,239,0.1) 0%, rgba(255,250,239,0.1) 26%, rgba(24,0,39,0.8) 42%, rgba(24,0,39,0.8) 58%, rgba(255,250,239,0.1) 74%, rgba(255,250,239,0.1) 100%)";
        this._isHorizontal = true;
    }
    setVertical() {
        this._elMain.style.flexDirection = "row";
        this._elMain.style.minWidth = "6px";
        this._elMain.style.maxWidth = "6px";
        this._elMain.style.minHeight = "initial";
        this._elMain.style.maxHeight = "initial";
        this._elMain.style.width = "6px";
        this._elMain.style.background =
            "linear-gradient(90deg, rgba(255,250,239,0.1) 0%, rgba(255,250,239,0.1) 26%, rgba(24,0,39,0.8) 42%, rgba(24,0,39,0.8) 58%, rgba(255,250,239,0.1) 74%, rgba(255,250,239,0.1) 100%)";
        this._isHorizontal = false;
    }
    get isHorizontal() {
        return this._isHorizontal;
    }
}
exports.QinDivider = QinDivider;

},{"./qin-base":20}],26:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinEdit = void 0;
const qin_base_1 = require("./qin-base");
class QinEdit extends qin_base_1.QinBase {
}
exports.QinEdit = QinEdit;

},{"./qin-base":20}],27:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinField = void 0;
const qin_column_1 = require("./qin-column");
const qin_edit_1 = require("./qin-edit");
const qin_label_1 = require("./qin-label");
class QinField extends qin_edit_1.QinEdit {
    constructor(title, edit) {
        super();
        this._qinMain = new qin_column_1.QinColumn();
        this._qinLabel = new qin_label_1.QinLabel();
        this._qinEdit = null;
        this._qinLabel.title = title;
        this._qinLabel.install(this._qinMain);
        this._qinEdit = edit;
        this._qinEdit.install(this._qinMain);
        this._qinLabel.qinLink(this._qinEdit);
        this._qinMain.style.putAsMargin(3);
    }
    getMain() {
        return this._qinMain.getMain();
    }
    getNature() {
        return this._qinEdit.getNature();
    }
    getData() {
        return this._qinEdit.getData();
    }
    setData(data) {
        this._qinEdit.setData(data);
    }
    get qinMain() {
        return this._qinMain;
    }
    get qinLabel() {
        return this._qinLabel;
    }
    get qinEdit() {
        return this._qinEdit;
    }
}
exports.QinField = QinField;

},{"./qin-column":23,"./qin-edit":26,"./qin-label":35}],28:[function(require,module,exports){
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
    constructor(options) {
        super();
        this._qinMain = new qin_line_1.QinLine();
        this._qinPath = new qin_string_1.QinString();
        this._qinSearch = new qin_button_1.QinButton({
            icon: new qin_icon_1.QinIcon(qin_assets_1.QinAsset.FaceFolder),
        });
        this._qinChooser = new qin_file_pick_1.QinFilePick({
            nature: options === null || options === void 0 ? void 0 : options.nature,
            operation: options === null || options === void 0 ? void 0 : options.operation,
            descriptors: options === null || options === void 0 ? void 0 : options.descriptors,
            singleSelection: true,
        });
        this._qinPopup = this.qinpel.jobbed.newPopup(this._qinChooser.getMain());
        this._qinPath.install(this._qinMain);
        this._qinSearch.install(this._qinMain);
        this._qinSearch.addAction((qinEvent) => {
            if (qinEvent.isMain) {
                this._qinPopup.show();
                const upperHeight = this._qinChooser.qinUpper.getMain().clientHeight;
                const explorerMaxHeight = this._qinPopup.maxHeight - (upperHeight + 12);
                this._qinChooser.qinExplorer.style.putAsMaxHeight(explorerMaxHeight);
            }
        });
        this._qinChooser.addChosen((chosen) => {
            if (chosen && chosen.length > 0) {
                this._qinPath.setData(chosen[0]);
            }
            this._qinPopup.close();
        });
        if (options === null || options === void 0 ? void 0 : options.initial) {
            this.setData(options.initial);
        }
    }
    getMain() {
        return this._qinMain.getMain();
    }
    getNature() {
        return qinpel_res_1.QinNature.CHARS;
    }
    getData() {
        return this._qinPath.getData();
    }
    setData(data) {
        this._qinPath.setData(data);
    }
    get qinMain() {
        return this._qinMain;
    }
    get qinPath() {
        return this._qinPath;
    }
    get qinSearch() {
        return this._qinSearch;
    }
    get qinChooser() {
        return this._qinChooser;
    }
    get qinPopup() {
        return this._qinPopup;
    }
}
exports.QinFilePath = QinFilePath;

},{"./qin-assets":18,"./qin-button":22,"./qin-edit":26,"./qin-file-pick":29,"./qin-icon":33,"./qin-line":36,"./qin-string":45,"qinpel-res":50}],29:[function(require,module,exports){
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
    constructor(options) {
        super();
        this._qinMain = new qin_column_1.QinColumn();
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
        this._nature = (options === null || options === void 0 ? void 0 : options.nature) ? options.nature : qinpel_res_1.QinFilesNature.BOTH;
        this._operation = (options === null || options === void 0 ? void 0 : options.operation) ? options.operation : qinpel_res_1.QinFilesOperation.OPEN;
        this._descriptors = (options === null || options === void 0 ? void 0 : options.descriptors) ? options.descriptors : [];
        this._singleSelection = (options === null || options === void 0 ? void 0 : options.singleSelection) ? options === null || options === void 0 ? void 0 : options.singleSelection : false;
        this.initMain();
        this.initUpper();
        this.initUnder();
    }
    initMain() {
        this._qinUpper.install(this._qinMain);
        this._qinUnder.install(this._qinMain);
    }
    initUpper() {
        this._qinUpper.style.putAsFlexMin();
        this._qinConfirm.install(this._qinUpper);
        this._qinConfirm.addAction((qinEvent) => {
            if (qinEvent.isMain) {
                let data = this.getData();
                for (const chosen of this._listeners) {
                    chosen(data);
                }
                qinEvent.consumed();
            }
        });
        this._qinFolder.install(this._qinUpper);
        this._qinFolder.style.putAsMinWidth(100);
        this._qinFolder.style.putAsFlexMax();
        this._qinFolder.addAction((qinEvent) => {
            if (qinEvent.isEnter) {
                this.loadFolder();
                qinEvent.consumed();
            }
        });
        this._qinExtensions.install(this._qinUpper);
        this._qinExtensions.style.putAsMinWidth(100);
        this.initExtensions();
        this._qinSearch.install(this._qinUpper);
        this._qinSearch.addAction((qinEvent) => {
            if (qinEvent.isMain) {
                this.loadFolder();
                qinEvent.consumed();
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
                title: "All Files (*.*)",
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
    getMain() {
        return this._qinMain.getMain();
    }
    getNature() {
        return qinpel_res_1.QinNature.CHARS;
    }
    getData() {
        return this._qinExplorer.getData();
    }
    setData(data) {
        this._qinExplorer.setData(data);
    }
    get qinMain() {
        return this._qinMain;
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
        this._qinExplorer.load(this._qinFolder.getData(), (loaded) => {
            this._qinFolder.setData(loaded);
        });
    }
    addChosen(chosen) {
        this._listeners.push(chosen);
        return this;
    }
}
exports.QinFilePick = QinFilePick;

},{"./qin-assets":18,"./qin-button":22,"./qin-column":23,"./qin-combo":24,"./qin-edit":26,"./qin-file-view":30,"./qin-icon":33,"./qin-line":36,"./qin-panel":38,"./qin-string":45,"qinpel-res":50}],30:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinFileView = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_edit_1 = require("./qin-edit");
const qin_panel_1 = require("./qin-panel");
class QinFileView extends qin_edit_1.QinEdit {
    constructor(options) {
        super();
        this._qinMain = new qin_panel_1.QinPanel();
        this._folderActual = "";
        this._folderServer = "";
        this._items = [];
        this._nature = (options === null || options === void 0 ? void 0 : options.nature) ? options.nature : qinpel_res_1.QinFilesNature.BOTH;
        this._extensions = (options === null || options === void 0 ? void 0 : options.extensions) ? options.extensions : [];
        this._singleSelection = (options === null || options === void 0 ? void 0 : options.singleSelection) ? options.singleSelection : false;
        this.initMain();
    }
    initMain() {
        styles.applyOnMain(this._qinMain.getMain());
        this._qinMain.addAction((qinEvent) => {
            if (qinEvent.isMain) {
                this.cleanSelection();
            }
        });
        this._qinMain.style.putAsDisabledSelection();
    }
    getMain() {
        return this._qinMain.getMain();
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
    get qinMain() {
        return this._qinMain;
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
                    if (this._nature == qinpel_res_1.QinFilesNature.BOTH ||
                        this._nature == qinpel_res_1.QinFilesNature.FILES) {
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
        this._qinMain.getMain().innerHTML = "";
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
        item.install(this._qinMain.getMain());
        this._items.push(item);
    }
}
exports.QinFileView = QinFileView;
class Item {
    constructor(explorer, fileName, iconName) {
        this.divItem = document.createElement("div");
        this.divItemBody = document.createElement("div");
        this.spanIcon = document.createElement("span");
        this.imgIcon = document.createElement("img");
        this.spanText = document.createElement("span");
        this.selected = false;
        this.explorer = explorer;
        this.fileName = fileName;
        this.iconName = iconName;
        this.initItem();
    }
    initItem() {
        styles.applyOnDivItem(this.divItem);
        this.divItem.tabIndex = 0;
        styles.applyOnDivItemBody(this.divItemBody);
        this.divItem.appendChild(this.divItemBody);
        styles.applyOnSpanIcon(this.spanIcon);
        this.divItemBody.appendChild(this.spanIcon);
        this.imgIcon.src = "/app/qinpel-app/assets/" + this.iconName;
        this.spanIcon.appendChild(this.imgIcon);
        this.spanText.innerText = this.fileName;
        styles.applyOnSpanText(this.spanText);
        this.divItemBody.appendChild(this.spanText);
        qinpel_res_1.QinSoul.arm.addAction(this.divItem, (qinEvent) => {
            if (qinEvent.isMain) {
                this.divItem.focus();
                this.toggle();
                qinEvent.consumed();
            }
        });
    }
    install(on) {
        on.appendChild(this.divItem);
    }
    select() {
        styles.applyOnDivSelect(this.divItem);
        this.selected = true;
    }
    unselect() {
        styles.applyOnDivUnSelect(this.divItem);
        this.selected = false;
    }
    toggle() {
        if (this.selected) {
            this.unselect();
        }
        else {
            if (this.explorer.singleSelection) {
                this.explorer.cleanSelection();
            }
            this.select();
        }
    }
    getName() {
        return this.fileName;
    }
    isSelected() {
        return this.selected;
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
        qinpel_res_1.QinSoul.skin.styleAsEdit(el);
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
    applyOnDivItemBody: (el) => {
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

},{"./qin-edit":26,"./qin-panel":38,"qinpel-res":50}],31:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinIconCell = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_base_1 = require("./qin-base");
class QinIconCell extends qin_base_1.QinBase {
    constructor(icon) {
        super();
        this._elMain = document.createElement("div");
        this._selected = false;
        let border = Math.round(icon.size.width / 10);
        let padding = border * 2;
        this._elMain.style.borderRadius = border + "px";
        this._elMain.style.padding = padding + "px";
        this._elMain.style.display = "flex";
        this._qinIcon = icon;
        this._qinIcon.install(this);
    }
    getMain() {
        return this._elMain;
    }
    get qinIcon() {
        return this._qinIcon;
    }
    get selected() {
        return this._selected;
    }
    set selected(selected) {
        this._selected = selected;
        if (this._selected) {
            this._elMain.style.backgroundColor = qinpel_res_1.QinSkin.styles.ColorSelected;
        }
        else {
            this._elMain.style.backgroundColor = "initial";
        }
    }
}
exports.QinIconCell = QinIconCell;

},{"./qin-base":20,"qinpel-res":50}],32:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinIconPick = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_edit_1 = require("./qin-edit");
const qin_icon_cell_1 = require("./qin-icon-cell");
const qin_line_1 = require("./qin-line");
class QinIconPick extends qin_edit_1.QinEdit {
    constructor(options) {
        super();
        this._qinMain = new qin_line_1.QinLine();
        this._qinMain.style.putAsEdit();
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
    }
    getMain() {
        return this._qinMain.getMain();
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
        for (let child of this._qinMain.children()) {
            if (child instanceof qin_icon_cell_1.QinIconCell) {
                if (child.qinIcon.asset == asset) {
                    child.selected = true;
                }
                else {
                    child.selected = false;
                }
            }
        }
    }
    get qinMain() {
        return this._qinMain;
    }
    addIcon(icon) {
        let option = new qin_icon_cell_1.QinIconCell(icon);
        option.install(this._qinMain);
    }
    addCell(option) {
        option.install(this._qinMain);
    }
}
exports.QinIconPick = QinIconPick;

},{"./qin-edit":26,"./qin-icon-cell":31,"./qin-line":36,"qinpel-res":50}],33:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinIcon = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_assets_1 = require("./qin-assets");
const qin_base_1 = require("./qin-base");
class QinIcon extends qin_base_1.QinBase {
    constructor(asset, size = qinpel_res_1.QinGrandeur.SMALL) {
        super();
        this._elMain = document.createElement("img");
        this._elMain.src = (0, qin_assets_1.qinAssetUrl)(asset);
        qinpel_res_1.QinSkin.styleSize(this._elMain, size);
    }
    getMain() {
        return this._elMain;
    }
    get asset() {
        return (0, qin_assets_1.qinUrlAsset)(this._elMain.src);
    }
    set asset(asset) {
        this._elMain.src = (0, qin_assets_1.qinAssetUrl)(asset);
    }
    get size() {
        return qinpel_res_1.QinSkin.getDimension(this._elMain);
    }
}
exports.QinIcon = QinIcon;

},{"./qin-assets":18,"./qin-base":20,"qinpel-res":50}],34:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinInteger = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_edit_1 = require("./qin-edit");
class QinInteger extends qin_edit_1.QinEdit {
    constructor(options) {
        super();
        this._elMain = document.createElement("input");
        this._elMain.type = "number";
        qinpel_res_1.QinSoul.skin.styleAsEdit(this._elMain);
        this._elMain.style.width = "120px";
        this._elMain.addEventListener("focusout", () => {
            this.setData(this.getData());
        });
        if (options === null || options === void 0 ? void 0 : options.initial) {
            this.setData(options.initial);
        }
    }
    getNature() {
        return qinpel_res_1.QinNature.INT;
    }
    getMain() {
        return this._elMain;
    }
    getData() {
        const value = this._elMain.value;
        if (value == null || value == undefined || value.length == 0) {
            return null;
        }
        else {
            return parseInt(this._elMain.value, 10);
        }
    }
    setData(data) {
        if (data == null || data == undefined) {
            this._elMain.value = "";
        }
        else {
            this._elMain.value = (data | 0).toString();
        }
    }
}
exports.QinInteger = QinInteger;

},{"./qin-edit":26,"qinpel-res":50}],35:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinLabel = void 0;
const qin_base_1 = require("./qin-base");
class QinLabel extends qin_base_1.QinBase {
    constructor(title) {
        super();
        this._elMain = document.createElement("label");
        if (title) {
            this._elMain.textContent = title;
        }
    }
    getMain() {
        return this._elMain;
    }
    get title() {
        return this._elMain.textContent;
    }
    set title(title) {
        this._elMain.textContent = title;
    }
    get link() {
        return this._elMain.getAttribute("for");
    }
    set link(name) {
        this._elMain.setAttribute("for", name);
    }
    qinLink(qinComp) {
        this.link = qinComp.mustId();
    }
}
exports.QinLabel = QinLabel;

},{"./qin-base":20}],36:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinLine = void 0;
const qin_panel_1 = require("./qin-panel");
class QinLine extends qin_panel_1.QinPanel {
    constructor(options) {
        super(options);
        this.style.putAsFlexDirectionRow();
        this.style.putAsFlexWrap();
        this.getMain().style.minWidth = "min-content";
        this.getMain().style.minHeight = "min-content";
    }
    put(item) {
        item.install(this);
        return this;
    }
}
exports.QinLine = QinLine;

},{"./qin-panel":38}],37:[function(require,module,exports){
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
            throw new Error("Unknown kind of mutant to create: " + kind);
    }
}
exports.QinMutantsArm = {
    newEdit,
};

},{"./qin-boolean":21,"./qin-combo":24,"./qin-file-path":28,"./qin-file-pick":29,"./qin-file-view":30,"./qin-icon-pick":32,"./qin-integer":34,"./qin-string":45}],38:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinPanel = void 0;
const qin_base_1 = require("./qin-base");
class QinPanel extends qin_base_1.QinBase {
    constructor(options) {
        super();
        this._elMain = document.createElement("div");
        this.style.putAsDisplayFlex();
        if (options === null || options === void 0 ? void 0 : options.items) {
            for (const item of options.items) {
                item.install(this);
            }
        }
    }
    getMain() {
        return this._elMain;
    }
    put(item) {
        item.install(this);
        return this;
    }
}
exports.QinPanel = QinPanel;

},{"./qin-base":20}],39:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinPopup = void 0;
const qin_tools_1 = require("./qin-tools");
class QinPopup {
    constructor(contents) {
        this._qinMain = qin_tools_1.QinTools.qinpel().jobbed.newPopup(contents.getMain());
    }
    show() {
        this._qinMain.show();
    }
    showOnParent(parent) {
        this._qinMain.showOnParent(parent.getMain());
    }
    showOnBounds(bounds) {
        this._qinMain.showOnBounds(bounds);
    }
    close() {
        this._qinMain.close();
    }
}
exports.QinPopup = QinPopup;

},{"./qin-tools":49}],40:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinRow = void 0;
const qin_panel_1 = require("./qin-panel");
class QinRow extends qin_panel_1.QinPanel {
    constructor(options) {
        super(options);
        this.style.putAsFlexDirectionRow();
        this.style.putAsFlexWrapNot();
        this.getMain().style.minWidth = "min-content";
        this.getMain().style.minHeight = "min-content";
    }
    put(item) {
        item.install(this);
        return this;
    }
}
exports.QinRow = QinRow;

},{"./qin-panel":38}],41:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinScroll = void 0;
const qin_panel_1 = require("./qin-panel");
class QinScroll extends qin_panel_1.QinPanel {
    constructor(options) {
        super(options);
        this.style.putAsScroll();
    }
    put(item) {
        item.install(this);
        return this;
    }
}
exports.QinScroll = QinScroll;

},{"./qin-panel":38}],42:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinSpacer = void 0;
const qin_panel_1 = require("./qin-panel");
class QinSpacer extends qin_panel_1.QinPanel {
    constructor(distance) {
        super();
        this.style.putAsMinSize(distance !== null && distance !== void 0 ? distance : 4, distance !== null && distance !== void 0 ? distance : 4);
    }
}
exports.QinSpacer = QinSpacer;

},{"./qin-panel":38}],43:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinSplitter = void 0;
const qin_base_1 = require("./qin-base");
class QinSplitter extends qin_base_1.QinBase {
    constructor(options) {
        super();
        this._elMain = document.createElement("div");
        this._elSideA = document.createElement("div");
        this._elMover = document.createElement("div");
        this._elGrowA = document.createElement("div");
        this._elGrowB = document.createElement("div");
        this._elSideB = document.createElement("div");
        this._isHorizontal = true;
        this._qinSideA = null;
        this._qinSideB = null;
        this._elMain.appendChild(this._elSideA);
        this._elMain.appendChild(this._elMover);
        this._elMover.appendChild(this._elGrowA);
        this._elMover.appendChild(this._elGrowB);
        this._elMain.appendChild(this._elSideB);
        this._elMain.style.display = "flex";
        this._elMain.style.flexWrap = "nowrap";
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
    getMain() {
        return this._elMain;
    }
    addChild(child) {
        if (this._qinSideA === null) {
            this._qinSideA = child;
            this._elSideA.appendChild(child.getMain());
        }
        else {
            if (this._qinSideB !== null) {
                this._qinSideB.unInstall();
                this._qinSideB = null;
            }
            this._qinSideB = child;
            this._elSideB.appendChild(child.getMain());
        }
        this._baseChildren.push(child);
    }
    delChild(child) {
        let index = this._baseChildren.indexOf(child);
        if (index > -1) {
            this._baseChildren.splice(index, 1);
        }
        if (this._qinSideA === child) {
            this._elSideA.removeChild(child.getMain());
            this._qinSideA = null;
        }
        else if (this._qinSideB === child) {
            this._elSideB.removeChild(child.getMain());
            this._qinSideB = null;
        }
    }
    setHorizontal() {
        this._elMain.style.flexDirection = "row";
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
        this._elMain.style.flexDirection = "column";
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
        this._elSideA.appendChild(side.getMain());
    }
    setSideB(side) {
        if (this._qinSideB !== null) {
            this._qinSideB.unInstall();
            this._qinSideB = null;
        }
        this._qinSideB = side;
        this._elSideB.appendChild(side.getMain());
    }
}
exports.QinSplitter = QinSplitter;

},{"./qin-base":20}],44:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinStack = void 0;
const qin_panel_1 = require("./qin-panel");
class QinStack extends qin_panel_1.QinPanel {
    constructor(options) {
        super(options);
        this.style.putAsFlexDirectionRow();
        this.style.putAsFlexWrapNot();
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

},{"./qin-panel":38}],45:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinString = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_edit_1 = require("./qin-edit");
class QinString extends qin_edit_1.QinEdit {
    constructor(options) {
        super();
        this._elMain = document.createElement("input");
        this._elMain.type = "text";
        if (options === null || options === void 0 ? void 0 : options.maxLength) {
            this._elMain.maxLength = options.maxLength;
            let position = Math.min(Math.max(options.maxLength - 10, 0), 90);
            let width = Math.floor(90 + (position * 7) / 3);
            this._elMain.style.width = width + "px";
        }
        qinpel_res_1.QinSkin.styleAsEdit(this._elMain);
        if (options === null || options === void 0 ? void 0 : options.initial) {
            this.setData(options.initial);
        }
    }
    getMain() {
        return this._elMain;
    }
    getNature() {
        return qinpel_res_1.QinNature.CHARS;
    }
    getData() {
        return this._elMain.value;
    }
    setData(data) {
        this._elMain.value = data;
    }
    insertAtCursor(data) {
        if (!data)
            return;
        let startPos = this._elMain.selectionStart;
        let endPos = this._elMain.selectionEnd;
        let oldVal = this._elMain.value;
        let newVal = (startPos > 0 ? oldVal.substring(0, startPos) : "") +
            data +
            (endPos < oldVal.length ? oldVal.substring(endPos) : "");
        this._elMain.value = newVal;
        this._elMain.selectionStart = startPos;
        this._elMain.selectionEnd = startPos + data.length;
    }
}
exports.QinString = QinString;

},{"./qin-edit":26,"qinpel-res":50}],46:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinTable = void 0;
const qin_base_1 = require("./qin-base");
class QinTable extends qin_base_1.QinBase {
    constructor() {
        super();
        this._elMain = document.createElement("div");
        this._elTable = document.createElement("table");
        this._elTHead = document.createElement("thead");
        this._elTHeadRow = document.createElement("tr");
        this._elTBody = document.createElement("tbody");
        this._linesSize = 0;
        this._elMain.appendChild(this._elTable);
        this._elTable.appendChild(this._elTHead);
        this._elTHead.appendChild(this._elTHeadRow);
        this._elTable.appendChild(this._elTBody);
        styles.applyOnTable(this._elTable);
        styles.applyOnHead(this._elTHead);
        styles.applyOnHeadRow(this._elTHeadRow);
        styles.applyOnBody(this._elTBody);
    }
    getMain() {
        return this._elMain;
    }
    getLines() {
        let result = [];
        this._elTBody.querySelectorAll("tr").forEach((tr) => {
            let line = [];
            tr.querySelectorAll("td").forEach((td) => {
                line.push(td.innerText);
            });
            result.push(line);
        });
        return result;
    }
    addLines(lines) {
        this.delLines();
        for (const line of lines) {
            this.addLine(line);
        }
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
    addLine(line) {
        let tr = document.createElement("tr");
        if (this._linesSize % 2 === 0) {
            styles.applyOnBodyRow(tr);
        }
        else {
            styles.applyOnBodyRowOdd(tr);
        }
        for (const cell of line) {
            let td = document.createElement("td");
            td.innerText = cell.toString();
            styles.applyOnBodyCol(td);
            tr.appendChild(td);
        }
        this._elTBody.appendChild(tr);
        this._linesSize++;
    }
    delLines() {
        this._elTBody.innerHTML = "";
        this._linesSize = 0;
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
        el.style.backgroundColor = "#5664cd36";
    },
    applyOnBodyRowOdd: (el) => {
        el.style.margin = "0px";
        el.style.padding = "0px";
        el.style.backgroundColor = "#cda95636";
    },
    applyOnBodyCol: (el) => {
        el.style.margin = "0px";
        el.style.padding = "5px";
        el.style.borderRight = "1px solid #5e5e5e";
        el.style.borderBottom = "2px solid #5e5e5e";
    },
};

},{"./qin-base":20}],47:[function(require,module,exports){
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
    constructor(options) {
        super();
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

},{"./qin-button":22,"./qin-column":23,"./qin-label":35,"./qin-line":36,"./qin-panel":38,"qinpel-res":50}],48:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinTitled = void 0;
const qin_column_1 = require("./qin-column");
const qin_label_1 = require("./qin-label");
const qin_line_1 = require("./qin-line");
class QinTitled extends qin_column_1.QinColumn {
    constructor(options) {
        super();
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

},{"./qin-column":23,"./qin-label":35,"./qin-line":36}],49:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinTools = void 0;
const refQinpel = window.frameElement.qinpel;
function qinpel() {
    return refQinpel;
}
exports.QinTools = {
    qinpel,
};

},{}],50:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinSoul = exports.QinSkin = exports.QinStyles = exports.QinGrandeur = exports.QinBounds = exports.QinDimension = exports.QinPoint = exports.QinHead = exports.QinFoot = exports.QinFilesDescriptor = exports.QinFilesOperation = exports.QinFilesNature = exports.QinBody = exports.QinNature = exports.QinArm = exports.QinPointerCalls = exports.QinWaiters = exports.QinEvent = void 0;
var qin_arm_1 = require("./qin-arm");
Object.defineProperty(exports, "QinEvent", { enumerable: true, get: function () { return qin_arm_1.QinEvent; } });
var qin_arm_2 = require("./qin-arm");
Object.defineProperty(exports, "QinWaiters", { enumerable: true, get: function () { return qin_arm_2.QinWaiters; } });
var qin_arm_3 = require("./qin-arm");
Object.defineProperty(exports, "QinPointerCalls", { enumerable: true, get: function () { return qin_arm_3.QinPointerCalls; } });
var qin_arm_4 = require("./qin-arm");
Object.defineProperty(exports, "QinArm", { enumerable: true, get: function () { return qin_arm_4.QinArm; } });
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
Object.defineProperty(exports, "QinHead", { enumerable: true, get: function () { return qin_head_1.QinHead; } });
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

},{"./qin-arm":51,"./qin-body":52,"./qin-foot":53,"./qin-head":54,"./qin-skin":55,"./qin-soul":56}],51:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinArm = exports.QinPointerCalls = exports.QinWaiters = exports.QinEvent = void 0;
const qin_skin_1 = require("./qin-skin");
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
            return true;
        }
    }
    function actKeyUp(ev) {
        let qinEvent = new QinEvent(origin, false, { eventKey: ev });
        action(qinEvent);
        if (qinEvent.stop) {
            return stopEvent(ev);
        }
        else {
            return true;
        }
    }
    function actMouseDown(ev) {
        let qinEvent = new QinEvent(origin, true, { eventMouse: ev });
        action(qinEvent);
        if (qinEvent.stop) {
            return stopEvent(ev);
        }
        else {
            return true;
        }
    }
    function actMouseUp(ev) {
        let qinEvent = new QinEvent(origin, false, { eventMouse: ev });
        action(qinEvent);
        if (qinEvent.stop) {
            return stopEvent(ev);
        }
        else {
            return true;
        }
    }
    function actTouchStart(ev) {
        let qinEvent = new QinEvent(origin, true, { eventTouch: ev });
        action(qinEvent);
        if (qinEvent.stop) {
            return stopEvent(ev);
        }
        else {
            return true;
        }
    }
    function actTouchEnd(ev) {
        let qinEvent = new QinEvent(origin, false, { eventTouch: ev });
        action(qinEvent);
        if (qinEvent.stop) {
            return stopEvent(ev);
        }
        else {
            return true;
        }
    }
}
function addActionMain(origin, action) {
    addAction(origin, (qinEvent) => {
        if (qinEvent.isMain) {
            action(qinEvent);
        }
    });
}
function addActionMainKey(origin, action) {
    addAction(origin, (qinEvent) => {
        if (qinEvent.isMainKey) {
            action(qinEvent);
        }
    });
}
function addActionMainMouse(origin, action) {
    addAction(origin, (qinEvent) => {
        if (qinEvent.isMainMouse) {
            action(qinEvent);
        }
    });
}
function addActionMainTouch(origin, action) {
    addAction(origin, (qinEvent) => {
        if (qinEvent.isMainMouse) {
            action(qinEvent);
        }
    });
}
function addActionMainPoint(origin, action) {
    addAction(origin, (qinEvent) => {
        if (qinEvent.isMainPoint) {
            action(qinEvent);
        }
    });
}
function addActionMidi(origin, action) {
    addAction(origin, (qinEvent) => {
        if (qinEvent.isMidi) {
            action(qinEvent);
        }
    });
}
function addActionMidiKey(origin, action) {
    addAction(origin, (qinEvent) => {
        if (qinEvent.isMidiKey) {
            action(qinEvent);
        }
    });
}
function addActionMidiMouse(origin, action) {
    addAction(origin, (qinEvent) => {
        if (qinEvent.isMidiMouse) {
            action(qinEvent);
        }
    });
}
function addActionMidiTouch(origin, action) {
    addAction(origin, (qinEvent) => {
        if (qinEvent.isMidiMouse) {
            action(qinEvent);
        }
    });
}
function addActionMidiPoint(origin, action) {
    addAction(origin, (qinEvent) => {
        if (qinEvent.isMidiPoint) {
            action(qinEvent);
        }
    });
}
function addActionMenu(origin, action) {
    addAction(origin, (qinEvent) => {
        if (qinEvent.isMenu) {
            action(qinEvent);
        }
    });
}
function addActionMenuKey(origin, action) {
    addAction(origin, (qinEvent) => {
        if (qinEvent.isMenuKey) {
            action(qinEvent);
        }
    });
}
function addActionMenuMouse(origin, action) {
    addAction(origin, (qinEvent) => {
        if (qinEvent.isMenuMouse) {
            action(qinEvent);
        }
    });
}
function addActionMenuTouch(origin, action) {
    addAction(origin, (qinEvent) => {
        if (qinEvent.isMenuMouse) {
            action(qinEvent);
        }
    });
}
function addActionMenuPoint(origin, action) {
    addAction(origin, (qinEvent) => {
        if (qinEvent.isMenuPoint) {
            action(qinEvent);
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
        addActionMain(element, action);
    }
}
function addActionsMainPoint(origins, action) {
    for (const element of origins) {
        addActionMain(element, action);
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
exports.QinArm = {
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
    addActionsMainPoint,
    addMover,
    addResizer,
    addScroller,
};

},{"./qin-skin":55}],52:[function(require,module,exports){
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
function getTextLines(fromText) {
    return fromText.match(/[^\r\n]+/g);
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
function makeQinUID() {
    return ("qin_uid_" +
        Date.now() +
        "_" +
        fillToString(Math.floor(Math.random() * 10000), 5, "0", false));
}
function getCSVRows(fromText, names) {
    var lines = getTextLines(fromText);
    var result = [];
    for (let line of lines) {
        let row = !names ? [] : {};
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
                    if (!names) {
                        row.push(column_value);
                    }
                    else {
                        let column_name = "col_" + column_index;
                        if (column_index < names.length) {
                            column_name = names[column_index];
                        }
                        row[column_name] = column_value;
                    }
                    column_value = "";
                    column_index++;
                }
                else {
                    column_value += actual;
                }
            }
        }
        column_value = unmaskSpecialChars(column_value);
        if (!names) {
            row.push(column_value);
            result.push(row);
        }
        else {
            let column_name = "col_" + column_index;
            if (column_index < names.length) {
                column_name = names[column_index];
            }
            row[column_name] = column_value;
            result.push(row);
        }
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
    getTextLines,
    fillToString,
    makeQinUID,
    getCSVRows,
    maskSpecialChars,
    unmaskSpecialChars,
    parseParameters,
};

},{}],53:[function(require,module,exports){
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

},{}],54:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinHead = void 0;
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
function logError(error, origin) {
    log(getErrorMessage(error, origin));
}
function getErrorMessage(error, origin) {
    return getTreatMessage("Problem with:", error, origin);
}
function logWarning(error, origin) {
    log(getWarningMessage(error, origin));
}
function getWarningMessage(error, origin) {
    return getTreatMessage("Checkout this:", error, origin);
}
function logSupport(error, origin) {
    log(getSupportMessage(error, origin));
}
function getSupportMessage(error, origin) {
    return getTreatMessage("Need Support on:", error, origin);
}
function getTreatMessage(prefix, error, origin) {
    var result = prefix + (error ? " " + error.toString() : "");
    if (error.response && error.response.data) {
        var errorData = error.response.data;
        if (!(typeof errorData == "string" || errorData instanceof String)) {
            errorData = JSON.stringify(errorData);
        }
        result += " - Data: " + errorData;
    }
    else {
        if (!(typeof error == "string" || error instanceof String)) {
            result += " - Data: " + JSON.stringify(error);
        }
    }
    if (origin) {
        result += " - Origin: " + origin;
    }
    const stack = (new Error("")).stack;
    if (stack) {
        result += " - Stack: " + stack;
    }
    return result;
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
    getCookie,
    setCookie,
    delCookie,
    getDeskAPI,
    getLogged,
    log,
    logError,
    getErrorMessage,
    logWarning,
    getWarningMessage,
    logSupport,
    getSupportMessage,
    getTreatMessage,
    toggleDevTools,
};

},{}],55:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinSkin = exports.QinStyles = exports.QinGrandeur = exports.QinBounds = exports.QinDimension = exports.QinPoint = void 0;
const qin_arm_1 = require("./qin-arm");
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
    ColorInactive: "#fcf9ffff",
    ColorActive: "#fdededff",
    ColorAccent: "#ae0000ff",
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
function styleAsEdit(el) {
    styleAsBase(el);
    el.style.border = "1px solid " + exports.QinStyles.ColorForeground;
    el.style.borderRadius = "3px";
    el.style.backgroundColor = exports.QinStyles.ColorInactive;
    el.addEventListener("focus", () => {
        el.style.outline = "none";
        el.style.backgroundColor = exports.QinStyles.ColorActive;
        el.style.border = "1px solid " + exports.QinStyles.ColorAccent;
    });
    el.addEventListener("focusout", () => {
        el.style.outline = "none";
        el.style.backgroundColor = exports.QinStyles.ColorInactive;
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
    element.onselectstart = qin_arm_1.QinArm.stopEvent;
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
            element.parentElement.clientHeight -
                (element.offsetTop - element.parentElement.scrollTop)) {
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
exports.QinSkin = {
    styles: exports.QinStyles,
    styleAsBody,
    styleAsBase,
    styleAsEdit,
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
};

},{"./qin-arm":51}],56:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinSoul = void 0;
const qin_arm_1 = require("./qin-arm");
const qin_body_1 = require("./qin-body");
const qin_foot_1 = require("./qin-foot");
const qin_head_1 = require("./qin-head");
const qin_skin_1 = require("./qin-skin");
exports.QinSoul = {
    arm: qin_arm_1.QinArm,
    body: qin_body_1.QinBody,
    foot: qin_foot_1.QinFoot,
    head: qin_head_1.QinHead,
    skin: qin_skin_1.QinSkin,
};

},{"./qin-arm":51,"./qin-body":52,"./qin-foot":53,"./qin-head":54,"./qin-skin":55}]},{},[16])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL0FwcERhdGEvUm9hbWluZy9ucG0vbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi4uL2FkY29tbW9uL2J1aWxkL2FkLWNvbnN0cy5qcyIsIi4uL2FkY29tbW9uL2J1aWxkL2FkLWV4cGVjdC5qcyIsIi4uL2FkY29tbW9uL2J1aWxkL2FkLWZpZWxkLmpzIiwiLi4vYWRjb21tb24vYnVpbGQvYWQtZmlsdGVycy5qcyIsIi4uL2FkY29tbW9uL2J1aWxkL2FkLW1lbnUuanMiLCIuLi9hZGNvbW1vbi9idWlsZC9hZC1tb2RlbC5qcyIsIi4uL2FkY29tbW9uL2J1aWxkL2FkLXJlZy1iYXIuanMiLCIuLi9hZGNvbW1vbi9idWlsZC9hZC1yZWctZWRpdG9yLmpzIiwiLi4vYWRjb21tb24vYnVpbGQvYWQtcmVnLXNlYXJjaC5qcyIsIi4uL2FkY29tbW9uL2J1aWxkL2FkLXJlZy10YWJsZS5qcyIsIi4uL2FkY29tbW9uL2J1aWxkL2FkLXJlZ2lzdGVyLmpzIiwiLi4vYWRjb21tb24vYnVpbGQvYWQtdG9vbHMuanMiLCIuLi9hZGNvbW1vbi9idWlsZC9hbGwuanMiLCJidWlsZC9hZC1uYXRpb24uanMiLCJidWlsZC9hZC1yZWdpb24uanMiLCJidWlsZC9pbmRleC5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvYWxsLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tYXNzZXRzLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tYmFzZS1zdHlsZS5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLWJhc2UuanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1ib29sZWFuLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tYnV0dG9uLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tY29sdW1uLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tY29tYm8uanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1kaXZpZGVyLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tZWRpdC5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLWZpZWxkLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tZmlsZS1wYXRoLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tZmlsZS1waWNrLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tZmlsZS12aWV3LmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4taWNvbi1jZWxsLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4taWNvbi1waWNrLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4taWNvbi5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLWludGVnZXIuanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1sYWJlbC5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLWxpbmUuanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1tdXRhbnRzLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tcGFuZWwuanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1wb3B1cC5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLXJvdy5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLXNjcm9sbC5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLXNwYWNlci5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLXNwbGl0dGVyLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tc3RhY2suanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1zdHJpbmcuanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi10YWJsZS5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLXRhYnMuanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi10aXRsZWQuanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi10b29scy5qcyIsIi4uL3FpbnBlbC1yZXMvYnVpbGQvYWxsLmpzIiwiLi4vcWlucGVsLXJlcy9idWlsZC9xaW4tYXJtLmpzIiwiLi4vcWlucGVsLXJlcy9idWlsZC9xaW4tYm9keS5qcyIsIi4uL3FpbnBlbC1yZXMvYnVpbGQvcWluLWZvb3QuanMiLCIuLi9xaW5wZWwtcmVzL2J1aWxkL3Fpbi1oZWFkLmpzIiwiLi4vcWlucGVsLXJlcy9idWlsZC9xaW4tc2tpbi5qcyIsIi4uL3FpbnBlbC1yZXMvYnVpbGQvcWluLXNvdWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdk5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2phQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9OQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaktBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9VQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcmlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2T0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkFkTW9kdWxlcyA9IGV4cG9ydHMuaXNTYW1lTW9kdWxlID0gZXhwb3J0cy5BZFNjb3BlID0gZXhwb3J0cy5BZE9wdGlvbnMgPSB2b2lkIDA7XHJcbmNvbnN0IHFpbnBlbF9jcHNfMSA9IHJlcXVpcmUoXCJxaW5wZWwtY3BzXCIpO1xyXG52YXIgQWRPcHRpb25zO1xyXG4oZnVuY3Rpb24gKEFkT3B0aW9ucykge1xyXG4gICAgQWRPcHRpb25zW1wiTU9EVUxFXCJdID0gXCJtb2R1bGVcIjtcclxuICAgIEFkT3B0aW9uc1tcIlNDT1BFU1wiXSA9IFwic2NvcGVzXCI7XHJcbiAgICBBZE9wdGlvbnNbXCJGSUxURVJTXCJdID0gXCJmaWx0ZXJzXCI7XHJcbn0pKEFkT3B0aW9ucyA9IGV4cG9ydHMuQWRPcHRpb25zIHx8IChleHBvcnRzLkFkT3B0aW9ucyA9IHt9KSk7XHJcbnZhciBBZFNjb3BlO1xyXG4oZnVuY3Rpb24gKEFkU2NvcGUpIHtcclxuICAgIEFkU2NvcGVbXCJBTExcIl0gPSBcImFsbFwiO1xyXG4gICAgQWRTY29wZVtcIklOU0VSVFwiXSA9IFwiaW5zZXJ0XCI7XHJcbiAgICBBZFNjb3BlW1wiU0VBUkNIXCJdID0gXCJzZWFyY2hcIjtcclxuICAgIEFkU2NvcGVbXCJNVVRBVEVcIl0gPSBcIm11dGF0ZVwiO1xyXG4gICAgQWRTY29wZVtcIkRFTEVURVwiXSA9IFwiZGVsZXRlXCI7XHJcbn0pKEFkU2NvcGUgPSBleHBvcnRzLkFkU2NvcGUgfHwgKGV4cG9ydHMuQWRTY29wZSA9IHt9KSk7XHJcbmZ1bmN0aW9uIGlzU2FtZU1vZHVsZShvbmUsIHR3bykge1xyXG4gICAgcmV0dXJuIChvbmUgPT09IG51bGwgfHwgb25lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvbmUuYXBwKSA9PSAodHdvID09PSBudWxsIHx8IHR3byA9PT0gdm9pZCAwID8gdm9pZCAwIDogdHdvLmFwcCkgJiYgKG9uZSA9PT0gbnVsbCB8fCBvbmUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uZS50aXRsZSkgPT0gKHR3byA9PT0gbnVsbCB8fCB0d28gPT09IHZvaWQgMCA/IHZvaWQgMCA6IHR3by50aXRsZSk7XHJcbn1cclxuZXhwb3J0cy5pc1NhbWVNb2R1bGUgPSBpc1NhbWVNb2R1bGU7XHJcbmNsYXNzIEFkTW9kdWxlcyB7XHJcbn1cclxuZXhwb3J0cy5BZE1vZHVsZXMgPSBBZE1vZHVsZXM7XHJcbkFkTW9kdWxlcy5CVVNJTkVTUyA9IHtcclxuICAgIGFwcDogXCJhZHBlb3BsZVwiLFxyXG4gICAgdGl0bGU6IFwiTmVnw7NjaW9zXCIsXHJcbiAgICBpY29uOiBxaW5wZWxfY3BzXzEuUWluQXNzZXQuRmFjZUdsb2JlLFxyXG59O1xyXG5BZE1vZHVsZXMuUkVHSU9OID0ge1xyXG4gICAgYXBwOiBcImFkcGVvcGxlXCIsXHJcbiAgICB0aXRsZTogXCJSZWdpw6NvXCIsXHJcbiAgICBpY29uOiBxaW5wZWxfY3BzXzEuUWluQXNzZXQuRmFjZVJlZ2lvbixcclxufTtcclxuQWRNb2R1bGVzLk5BVElPTiA9IHtcclxuICAgIGFwcDogXCJhZHBlb3BsZVwiLFxyXG4gICAgdGl0bGU6IFwiUGHDrXNlc1wiLFxyXG4gICAgaWNvbjogcWlucGVsX2Nwc18xLlFpbkFzc2V0LkZhY2VHbG9iZSxcclxufTtcclxuQWRNb2R1bGVzLlNUQVRFID0ge1xyXG4gICAgYXBwOiBcImFkcGVvcGxlXCIsXHJcbiAgICB0aXRsZTogXCJFc3RhZG9zXCIsXHJcbiAgICBpY29uOiBxaW5wZWxfY3BzXzEuUWluQXNzZXQuRmFjZUdsb2JlLFxyXG59O1xyXG5BZE1vZHVsZXMuQ0lUWSA9IHtcclxuICAgIGFwcDogXCJhZHBlb3BsZVwiLFxyXG4gICAgdGl0bGU6IFwiQ2lkYWRlc1wiLFxyXG4gICAgaWNvbjogcWlucGVsX2Nwc18xLlFpbkFzc2V0LkZhY2VHbG9iZSxcclxufTtcclxuQWRNb2R1bGVzLkRJU1RSSUNUID0ge1xyXG4gICAgYXBwOiBcImFkcGVvcGxlXCIsXHJcbiAgICB0aXRsZTogXCJCYWlycm9zXCIsXHJcbiAgICBpY29uOiBxaW5wZWxfY3BzXzEuUWluQXNzZXQuRmFjZUdsb2JlLFxyXG59O1xyXG5BZE1vZHVsZXMuUEVPUExFID0ge1xyXG4gICAgYXBwOiBcImFkcGVvcGxlXCIsXHJcbiAgICB0aXRsZTogXCJQZXNzb2FzXCIsXHJcbiAgICBpY29uOiBxaW5wZWxfY3BzXzEuUWluQXNzZXQuRmFjZUdsb2JlLFxyXG59O1xyXG5BZE1vZHVsZXMuUEVPUExFX0dST1VQID0ge1xyXG4gICAgYXBwOiBcImFkcGVvcGxlXCIsXHJcbiAgICB0aXRsZTogXCJHcnVwb3MgZGUgUGVzc29hc1wiLFxyXG4gICAgaWNvbjogcWlucGVsX2Nwc18xLlFpbkFzc2V0LkZhY2VHbG9iZSxcclxufTtcclxuQWRNb2R1bGVzLlBFT1BMRV9TVUJHUk9VUCA9IHtcclxuICAgIGFwcDogXCJhZHBlb3BsZVwiLFxyXG4gICAgdGl0bGU6IFwiU3ViR3J1cG9zIGRlIFBlc3NvYXNcIixcclxuICAgIGljb246IHFpbnBlbF9jcHNfMS5RaW5Bc3NldC5GYWNlR2xvYmUsXHJcbn07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFkLWNvbnN0cy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkFkRXhwZWN0ID0gdm9pZCAwO1xyXG5jbGFzcyBBZEV4cGVjdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5fc2NvcGVzID0gb3B0aW9ucy5zY29wZXM7XHJcbiAgICAgICAgdGhpcy5fZmlsdGVycyA9IG9wdGlvbnMuZmlsdGVycztcclxuICAgICAgICB0aGlzLl93YWl0ZXJzID0gb3B0aW9ucy53YWl0ZXJzO1xyXG4gICAgfVxyXG4gICAgZ2V0IHNjb3BlcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2NvcGVzO1xyXG4gICAgfVxyXG4gICAgZ2V0IGZpbHRlcnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZpbHRlcnM7XHJcbiAgICB9XHJcbiAgICBnZXQgd2FpdGVycygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fd2FpdGVycztcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkFkRXhwZWN0ID0gQWRFeHBlY3Q7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFkLWV4cGVjdC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkFkRmllbGQgPSB2b2lkIDA7XHJcbmNvbnN0IHFpbnBlbF9jcHNfMSA9IHJlcXVpcmUoXCJxaW5wZWwtY3BzXCIpO1xyXG5jbGFzcyBBZEZpZWxkIHtcclxuICAgIGNvbnN0cnVjdG9yKG5ld2VyKSB7XHJcbiAgICAgICAgdGhpcy5fdGl0bGUgPSBuZXdlci50aXRsZTtcclxuICAgICAgICB0aGlzLl9uYW1lID0gbmV3ZXIubmFtZTtcclxuICAgICAgICB0aGlzLl9raW5kID0gbmV3ZXIua2luZDtcclxuICAgICAgICB0aGlzLl9vcHRpb25zID0gbmV3ZXIub3B0aW9ucztcclxuICAgICAgICB0aGlzLl9rZXkgPSBuZXdlci5rZXkgPyB0cnVlIDogZmFsc2U7XHJcbiAgICB9XHJcbiAgICBuZXdFZGl0KCkge1xyXG4gICAgICAgIHJldHVybiBxaW5wZWxfY3BzXzEuUWluTXV0YW50c0FybS5uZXdFZGl0KHRoaXMuX2tpbmQsIHRoaXMuX29wdGlvbnMpO1xyXG4gICAgfVxyXG4gICAgZ2V0IHRpdGxlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90aXRsZTtcclxuICAgIH1cclxuICAgIGdldCBuYW1lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xyXG4gICAgfVxyXG4gICAgZ2V0IGtpbmQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2tpbmQ7XHJcbiAgICB9XHJcbiAgICBnZXQgb3B0aW9ucygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fb3B0aW9ucztcclxuICAgIH1cclxuICAgIGdldCBrZXkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2tleTtcclxuICAgIH1cclxuICAgIGdldCBlZGl0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9lZGl0O1xyXG4gICAgfVxyXG4gICAgc2V0IGVkaXQoZWRpdG9yKSB7XHJcbiAgICAgICAgdGhpcy5fZWRpdCA9IGVkaXRvcjtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkFkRmllbGQgPSBBZEZpZWxkO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hZC1maWVsZC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkFkRmlsdGVyVGllID0gZXhwb3J0cy5BZEZpbHRlckxpa2VzID0gZXhwb3J0cy5BZEZpbHRlckl0ZW0gPSBleHBvcnRzLkFkRmlsdGVycyA9IHZvaWQgMDtcclxuY2xhc3MgQWRGaWx0ZXJzIHtcclxuICAgIGNvbnN0cnVjdG9yKGl0ZW1zKSB7XHJcbiAgICAgICAgdGhpcy5faXRlbXMgPSBpdGVtcztcclxuICAgIH1cclxuICAgIGdldCBpdGVtcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXM7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5BZEZpbHRlcnMgPSBBZEZpbHRlcnM7XHJcbmNsYXNzIEFkRmlsdGVySXRlbSB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBtb2RlLCB2YWx1ZSwgdW5pb24pIHtcclxuICAgICAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLl9tb2RlID0gbW9kZTtcclxuICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuX3VuaW9uID0gdW5pb247XHJcbiAgICB9XHJcbiAgICBnZXQgbmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcclxuICAgIH1cclxuICAgIGdldCBtb2RlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tb2RlO1xyXG4gICAgfVxyXG4gICAgZ2V0IHZhbHVlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcclxuICAgIH1cclxuICAgIGdldCB1bmlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdW5pb247XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5BZEZpbHRlckl0ZW0gPSBBZEZpbHRlckl0ZW07XHJcbnZhciBBZEZpbHRlckxpa2VzO1xyXG4oZnVuY3Rpb24gKEFkRmlsdGVyTGlrZXMpIHtcclxuICAgIEFkRmlsdGVyTGlrZXNbXCJFUVVBTFNcIl0gPSBcImVxdWFsc1wiO1xyXG4gICAgQWRGaWx0ZXJMaWtlc1tcIkRJRkZFUkVOVFwiXSA9IFwiZGlmZmVyZW50XCI7XHJcbiAgICBBZEZpbHRlckxpa2VzW1wiQklHR0VSXCJdID0gXCJiaWdnZXJcIjtcclxuICAgIEFkRmlsdGVyTGlrZXNbXCJMRVNTRVJcIl0gPSBcImxlc3NlclwiO1xyXG4gICAgQWRGaWx0ZXJMaWtlc1tcIkJJR0dFUl9PUl9FUVVBTFNcIl0gPSBcImJpZ2dlcl9vcl9lcXVhbHNcIjtcclxuICAgIEFkRmlsdGVyTGlrZXNbXCJMRVNTRVJfT1JfRVFVQUxTXCJdID0gXCJsZXNzZXJfb3JfZXF1YWxzXCI7XHJcbn0pKEFkRmlsdGVyTGlrZXMgPSBleHBvcnRzLkFkRmlsdGVyTGlrZXMgfHwgKGV4cG9ydHMuQWRGaWx0ZXJMaWtlcyA9IHt9KSk7XHJcbnZhciBBZEZpbHRlclRpZTtcclxuKGZ1bmN0aW9uIChBZEZpbHRlclRpZSkge1xyXG4gICAgQWRGaWx0ZXJUaWVbXCJBTkRcIl0gPSBcImFuZFwiO1xyXG4gICAgQWRGaWx0ZXJUaWVbXCJPUlwiXSA9IFwib3JcIjtcclxufSkoQWRGaWx0ZXJUaWUgPSBleHBvcnRzLkFkRmlsdGVyVGllIHx8IChleHBvcnRzLkFkRmlsdGVyVGllID0ge30pKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWQtZmlsdGVycy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLm1lbnVTdGFydFVwID0gZXhwb3J0cy5BZE1lbnUgPSB2b2lkIDA7XHJcbmNvbnN0IHFpbnBlbF9jcHNfMSA9IHJlcXVpcmUoXCJxaW5wZWwtY3BzXCIpO1xyXG5jb25zdCBxaW5wZWxfcmVzXzEgPSByZXF1aXJlKFwicWlucGVsLXJlc1wiKTtcclxuY29uc3QgYWRfY29uc3RzXzEgPSByZXF1aXJlKFwiLi9hZC1jb25zdHNcIik7XHJcbmNvbnN0IGFkX2V4cGVjdF8xID0gcmVxdWlyZShcIi4vYWQtZXhwZWN0XCIpO1xyXG5jb25zdCBhZF90b29sc18xID0gcmVxdWlyZShcIi4vYWQtdG9vbHNcIik7XHJcbmNsYXNzIEFkTWVudSBleHRlbmRzIHFpbnBlbF9jcHNfMS5RaW5Db2x1bW4ge1xyXG4gICAgY29uc3RydWN0b3IoaXRlbXMpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX2xpbmVzID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbmUgPSB0aGlzLmdldExpbmUoaXRlbS5ncm91cCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IG5ldyBxaW5wZWxfY3BzXzEuUWluQnV0dG9uKHtcclxuICAgICAgICAgICAgICAgIGljb246IG5ldyBxaW5wZWxfY3BzXzEuUWluSWNvbihpdGVtLm1vZHVsZS5pY29uLCBxaW5wZWxfcmVzXzEuUWluR3JhbmRldXIuTUVESVVNKSxcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBuZXcgcWlucGVsX2Nwc18xLlFpbkxhYmVsKGl0ZW0ubW9kdWxlLnRpdGxlKSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5wdXRBc0NvbHVtbigpO1xyXG4gICAgICAgICAgICBidXR0b24uYWRkQWN0aW9uTWFpbigoXykgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5xaW5wZWwuY2hpZWYubmV3Sm9iYmVyKGl0ZW0ubW9kdWxlLnRpdGxlLCBpdGVtLm1vZHVsZS5hcHAsIGFkX3Rvb2xzXzEuQWRUb29scy5uZXdBZE9wdGlvbihpdGVtLm1vZHVsZSwgW2FkX2NvbnN0c18xLkFkU2NvcGUuQUxMXSkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5xaW5wZWwuam9iYmVkLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBsaW5lLnB1dChidXR0b24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldExpbmUodGl0bGUpIHtcclxuICAgICAgICBpZiAoIXRpdGxlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9saW5lcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0xpbmUgPSBuZXcgcWlucGVsX2Nwc18xLlFpblRpdGxlZCgpO1xyXG4gICAgICAgICAgICAgICAgbmV3TGluZS5pbnN0YWxsKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbGluZXMucHVzaChuZXdMaW5lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbGluZXNbdGhpcy5fbGluZXMubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3QgbGluZSBvZiB0aGlzLl9saW5lcykge1xyXG4gICAgICAgICAgICBpZiAobGluZS50aXRsZSA9PSB0aXRsZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxpbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbmV3TGluZSA9IG5ldyBxaW5wZWxfY3BzXzEuUWluVGl0bGVkKHsgdGl0bGUgfSk7XHJcbiAgICAgICAgbmV3TGluZS5pbnN0YWxsKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX2xpbmVzLnB1c2gobmV3TGluZSk7XHJcbiAgICAgICAgcmV0dXJuIG5ld0xpbmU7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5BZE1lbnUgPSBBZE1lbnU7XHJcbmZ1bmN0aW9uIG1lbnVTdGFydFVwKG1lbnVzKSB7XHJcbiAgICBjb25zdCBtb2R1bGUgPSBxaW5wZWxfY3BzXzEuUWluVG9vbHMucWlucGVsKCkuam9iYmVkLmdldE9wdGlvbihhZF9jb25zdHNfMS5BZE9wdGlvbnMuTU9EVUxFKTtcclxuICAgIGNvbnN0IHNjb3BlcyA9IHFpbnBlbF9jcHNfMS5RaW5Ub29scy5xaW5wZWwoKS5qb2JiZWQuZ2V0T3B0aW9uKGFkX2NvbnN0c18xLkFkT3B0aW9ucy5TQ09QRVMpO1xyXG4gICAgY29uc3QgZmlsdGVycyA9IHFpbnBlbF9jcHNfMS5RaW5Ub29scy5xaW5wZWwoKS5qb2JiZWQuZ2V0T3B0aW9uKGFkX2NvbnN0c18xLkFkT3B0aW9ucy5GSUxURVJTKTtcclxuICAgIGlmIChtb2R1bGUpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IG1lbnUgb2YgbWVudXMpIHtcclxuICAgICAgICAgICAgaWYgKCgwLCBhZF9jb25zdHNfMS5pc1NhbWVNb2R1bGUpKG1lbnUubW9kdWxlLCBtb2R1bGUpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZXhwZWN0ID0gbmV3IGFkX2V4cGVjdF8xLkFkRXhwZWN0KHtcclxuICAgICAgICAgICAgICAgICAgICBzY29wZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVycyxcclxuICAgICAgICAgICAgICAgICAgICB3YWl0ZXJzOiBuZXcgcWlucGVsX3Jlc18xLlFpbldhaXRlcnMoKS5hZGRXYWl0ZXIoKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBxaW5wZWxfY3BzXzEuUWluVG9vbHMucWlucGVsKCkuam9iYmVkLnNlbmRXYWl0ZXJzKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmIChtZW51LnJlZ2lzdGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBtZW51LnJlZ2lzdGVyKG1lbnUubW9kdWxlLCBleHBlY3QpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gbWVudSBhY3Rpb24gZGVmaW5lZFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBuZXcgQWRNZW51KG1lbnVzKTtcclxufVxyXG5leHBvcnRzLm1lbnVTdGFydFVwID0gbWVudVN0YXJ0VXA7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFkLW1lbnUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5BZE1vZGVsID0gdm9pZCAwO1xyXG5jb25zdCBxaW5wZWxfY3BzXzEgPSByZXF1aXJlKFwicWlucGVsLWNwc1wiKTtcclxuY2xhc3MgQWRNb2RlbCB7XHJcbiAgICBjb25zdHJ1Y3RvcihyZWdpc3RyeSkge1xyXG4gICAgICAgIHRoaXMuX3JlZ2lzdHJ5ID0gcmVnaXN0cnk7XHJcbiAgICAgICAgdGhpcy5fZmllbGRzID0gW107XHJcbiAgICB9XHJcbiAgICBnZXQgcmVnaXN0cnkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlZ2lzdHJ5O1xyXG4gICAgfVxyXG4gICAgZ2V0IGZpZWxkcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZmllbGRzO1xyXG4gICAgfVxyXG4gICAgYWRkRmllbGQoZmllbGQpIHtcclxuICAgICAgICB0aGlzLl9maWVsZHMucHVzaChmaWVsZCk7XHJcbiAgICB9XHJcbiAgICBpbnNlcnQoKSB7XHJcbiAgICAgICAgcWlucGVsX2Nwc18xLlFpblRvb2xzLnFpbnBlbCgpO1xyXG4gICAgfVxyXG4gICAgc2VhcmNoKGZpbHRlcnMpIHtcclxuICAgICAgICBxaW5wZWxfY3BzXzEuUWluVG9vbHMucWlucGVsKCk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGUoZmlsdGVycykge1xyXG4gICAgICAgIHFpbnBlbF9jcHNfMS5RaW5Ub29scy5xaW5wZWwoKTtcclxuICAgIH1cclxuICAgIGRlbGV0ZShmaWx0ZXJzKSB7XHJcbiAgICAgICAgcWlucGVsX2Nwc18xLlFpblRvb2xzLnFpbnBlbCgpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQWRNb2RlbCA9IEFkTW9kZWw7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFkLW1vZGVsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuQWRSZWdCYXIgPSB2b2lkIDA7XHJcbmNvbnN0IHFpbnBlbF9jcHNfMSA9IHJlcXVpcmUoXCJxaW5wZWwtY3BzXCIpO1xyXG5jb25zdCBhZF9yZWdpc3Rlcl8xID0gcmVxdWlyZShcIi4vYWQtcmVnaXN0ZXJcIik7XHJcbmNsYXNzIEFkUmVnQmFyIGV4dGVuZHMgcWlucGVsX2Nwc18xLlFpbkxpbmUge1xyXG4gICAgY29uc3RydWN0b3IocmVnaXN0ZXIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX3Fpbk1lbnUgPSBuZXcgcWlucGVsX2Nwc18xLlFpbkJ1dHRvbih7IGljb246IG5ldyBxaW5wZWxfY3BzXzEuUWluSWNvbihxaW5wZWxfY3BzXzEuUWluQXNzZXQuRmFjZU1lbnVMaW5lcykgfSk7XHJcbiAgICAgICAgdGhpcy5fcWluTWVudVZpZXdTaW5nbGUgPSBuZXcgcWlucGVsX2Nwc18xLlFpbkJ1dHRvbih7XHJcbiAgICAgICAgICAgIGljb246IG5ldyBxaW5wZWxfY3BzXzEuUWluSWNvbihxaW5wZWxfY3BzXzEuUWluQXNzZXQuRmFjZVNwbGl0Tm90VmlldyksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fcWluTWVudVZpZXdWZXJ0aWNhbCA9IG5ldyBxaW5wZWxfY3BzXzEuUWluQnV0dG9uKHtcclxuICAgICAgICAgICAgaWNvbjogbmV3IHFpbnBlbF9jcHNfMS5RaW5JY29uKHFpbnBlbF9jcHNfMS5RaW5Bc3NldC5GYWNlU3BsaXRWaWV3VmVydGljYWwpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX3Fpbk1lbnVWaWV3SG9yaXpvbnRhbCA9IG5ldyBxaW5wZWxfY3BzXzEuUWluQnV0dG9uKHtcclxuICAgICAgICAgICAgaWNvbjogbmV3IHFpbnBlbF9jcHNfMS5RaW5JY29uKHFpbnBlbF9jcHNfMS5RaW5Bc3NldC5GYWNlU3BsaXRWaWV3SG9yaXpvbnRhbCksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fcWluTWVudUZvY3VzQm9keSA9IG5ldyBxaW5wZWxfY3BzXzEuUWluQnV0dG9uKHtcclxuICAgICAgICAgICAgaWNvbjogbmV3IHFpbnBlbF9jcHNfMS5RaW5JY29uKHFpbnBlbF9jcHNfMS5RaW5Bc3NldC5GYWNlTGlzdFZpZXcpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX3Fpbk1lbnVGb2N1c1RhYmxlID0gbmV3IHFpbnBlbF9jcHNfMS5RaW5CdXR0b24oe1xyXG4gICAgICAgICAgICBpY29uOiBuZXcgcWlucGVsX2Nwc18xLlFpbkljb24ocWlucGVsX2Nwc18xLlFpbkFzc2V0LkZhY2VHcmlkVmlldyksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fcWluTWVudUJvZHkgPSBuZXcgcWlucGVsX2Nwc18xLlFpbkxpbmUoe1xyXG4gICAgICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcWluTWVudVZpZXdTaW5nbGUsXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9xaW5NZW51Vmlld1ZlcnRpY2FsLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcWluTWVudVZpZXdIb3Jpem9udGFsLFxyXG4gICAgICAgICAgICAgICAgbmV3IHFpbnBlbF9jcHNfMS5RaW5EaXZpZGVyKCksXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9xaW5NZW51Rm9jdXNCb2R5LFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcWluTWVudUZvY3VzVGFibGUsXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fcWluUG9wdXAgPSBuZXcgcWlucGVsX2Nwc18xLlFpblBvcHVwKHRoaXMuX3Fpbk1lbnVCb2R5KTtcclxuICAgICAgICB0aGlzLl9xaW5JbnNlcnQgPSBuZXcgcWlucGVsX2Nwc18xLlFpbkljb24ocWlucGVsX2Nwc18xLlFpbkFzc2V0LkZhY2VBZGQpO1xyXG4gICAgICAgIHRoaXMuX3FpblNlYXJjaCA9IG5ldyBxaW5wZWxfY3BzXzEuUWluSWNvbihxaW5wZWxfY3BzXzEuUWluQXNzZXQuRmFjZVNlYXJjaCk7XHJcbiAgICAgICAgdGhpcy5fcWluTXV0YXRlID0gbmV3IHFpbnBlbF9jcHNfMS5RaW5JY29uKHFpbnBlbF9jcHNfMS5RaW5Bc3NldC5GYWNlUGVuY2lsKTtcclxuICAgICAgICB0aGlzLl9xaW5Nb2RlID0gbmV3IHFpbnBlbF9jcHNfMS5RaW5JY29uUGljayh7XHJcbiAgICAgICAgICAgIGljb25zOiBbdGhpcy5fcWluSW5zZXJ0LCB0aGlzLl9xaW5TZWFyY2gsIHRoaXMuX3Fpbk11dGF0ZV0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fcWluR29GaXJzdCA9IG5ldyBxaW5wZWxfY3BzXzEuUWluQnV0dG9uKHsgaWNvbjogbmV3IHFpbnBlbF9jcHNfMS5RaW5JY29uKHFpbnBlbF9jcHNfMS5RaW5Bc3NldC5GYWNlUlVwQ2hldnJvblB1c2gpIH0pO1xyXG4gICAgICAgIHRoaXMuX3FpbkdvUHJpb3IgPSBuZXcgcWlucGVsX2Nwc18xLlFpbkJ1dHRvbih7XHJcbiAgICAgICAgICAgIGljb246IG5ldyBxaW5wZWxfY3BzXzEuUWluSWNvbihxaW5wZWxfY3BzXzEuUWluQXNzZXQuRmFjZVJMZWZ0Q2hldnJvblB1c2gpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX3FpbkdvTmV4dCA9IG5ldyBxaW5wZWxfY3BzXzEuUWluQnV0dG9uKHtcclxuICAgICAgICAgICAgaWNvbjogbmV3IHFpbnBlbF9jcHNfMS5RaW5JY29uKHFpbnBlbF9jcHNfMS5RaW5Bc3NldC5GYWNlUlJpZ2h0Q2hldnJvblB1c2gpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX3FpbkdvTGFzdCA9IG5ldyBxaW5wZWxfY3BzXzEuUWluQnV0dG9uKHtcclxuICAgICAgICAgICAgaWNvbjogbmV3IHFpbnBlbF9jcHNfMS5RaW5JY29uKHFpbnBlbF9jcHNfMS5RaW5Bc3NldC5GYWNlUkRvd25DaGV2cm9uUHVzaCksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fcWluRGVsZXRlID0gbmV3IHFpbnBlbF9jcHNfMS5RaW5CdXR0b24oeyBpY29uOiBuZXcgcWlucGVsX2Nwc18xLlFpbkljb24ocWlucGVsX2Nwc18xLlFpbkFzc2V0LkZhY2VUcmFzaCkgfSk7XHJcbiAgICAgICAgdGhpcy5fcWluQ29uZmlybSA9IG5ldyBxaW5wZWxfY3BzXzEuUWluQnV0dG9uKHsgaWNvbjogbmV3IHFpbnBlbF9jcHNfMS5RaW5JY29uKHFpbnBlbF9jcHNfMS5RaW5Bc3NldC5GYWNlQ29uZmlybSkgfSk7XHJcbiAgICAgICAgdGhpcy5fcWluQ2FuY2VsID0gbmV3IHFpbnBlbF9jcHNfMS5RaW5CdXR0b24oeyBpY29uOiBuZXcgcWlucGVsX2Nwc18xLlFpbkljb24ocWlucGVsX2Nwc18xLlFpbkFzc2V0LkZhY2VDYW5jZWwpIH0pO1xyXG4gICAgICAgIHRoaXMuX3JlZyA9IHJlZ2lzdGVyO1xyXG4gICAgICAgIHRoaXMuaW5pdE1lbnUoKTtcclxuICAgICAgICB0aGlzLmluaXRNb2RlKCk7XHJcbiAgICAgICAgdGhpcy5pbml0TW92ZSgpO1xyXG4gICAgICAgIHRoaXMuaW5pdE1ha2UoKTtcclxuICAgICAgICB0aGlzLnN0eWxlLnB1dEFzUGFkZGluZ0JvdHRvbSgyKTtcclxuICAgICAgICB0aGlzLnN0eWxlLnB1dEFzQm9yZGVyQm90dG9tKDIsIFwiIzk5OVwiKTtcclxuICAgICAgICB0aGlzLnN0eWxlLnB1dEFzTWFyZ2luQm90dG9tKDIpO1xyXG4gICAgfVxyXG4gICAgaW5pdE1lbnUoKSB7XHJcbiAgICAgICAgdGhpcy5fcWluTWVudS5pbnN0YWxsKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX3Fpbk1lbnUuYWRkQWN0aW9uTWFpbigoXykgPT4gdGhpcy5fcWluUG9wdXAuc2hvd09uUGFyZW50KHRoaXMuX3Fpbk1lbnUpKTtcclxuICAgICAgICB0aGlzLl9xaW5NZW51Vmlld1NpbmdsZS5hZGRBY3Rpb25NYWluKChfKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3FpblBvcHVwLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlZy52aWV3U2luZ2xlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fcWluTWVudVZpZXdWZXJ0aWNhbC5hZGRBY3Rpb25NYWluKChfKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3FpblBvcHVwLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlZy52aWV3VmVydGljYWwoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9xaW5NZW51Vmlld0hvcml6b250YWwuYWRkQWN0aW9uTWFpbigoXykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9xaW5Qb3B1cC5jbG9zZSgpO1xyXG4gICAgICAgICAgICB0aGlzLl9yZWcudmlld0hvcml6b250YWwoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9xaW5NZW51Rm9jdXNCb2R5LmFkZEFjdGlvbk1haW4oKF8pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fcWluUG9wdXAuY2xvc2UoKTtcclxuICAgICAgICAgICAgdGhpcy5fcmVnLmZvY3VzQm9keSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX3Fpbk1lbnVGb2N1c1RhYmxlLmFkZEFjdGlvbk1haW4oKF8pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fcWluUG9wdXAuY2xvc2UoKTtcclxuICAgICAgICAgICAgdGhpcy5fcmVnLmZvY3VzVGFibGUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGluaXRNb2RlKCkge1xyXG4gICAgICAgIHRoaXMuX3Fpbk1vZGUuaW5zdGFsbCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9xaW5JbnNlcnQuYWRkQWN0aW9uTWFpbigoXykgPT4gdGhpcy5fcmVnLnRyeUNoYW5nZU1vZGUoYWRfcmVnaXN0ZXJfMS5BZFJlZ01vZGUuSU5TRVJUKSk7XHJcbiAgICAgICAgdGhpcy5fcWluU2VhcmNoLmFkZEFjdGlvbk1haW4oKF8pID0+IHRoaXMuX3JlZy50cnlDaGFuZ2VNb2RlKGFkX3JlZ2lzdGVyXzEuQWRSZWdNb2RlLlNFQVJDSCkpO1xyXG4gICAgICAgIHRoaXMuX3Fpbk11dGF0ZS5hZGRBY3Rpb25NYWluKChfKSA9PiB0aGlzLl9yZWcudHJ5Q2hhbmdlTW9kZShhZF9yZWdpc3Rlcl8xLkFkUmVnTW9kZS5NVVRBVEUpKTtcclxuICAgICAgICB0aGlzLl9yZWcuYWRkTGlzdGVuZXIoe1xyXG4gICAgICAgICAgICBldmVudDogYWRfcmVnaXN0ZXJfMS5BZFJlZ0V2ZW50LkNIQU5HRV9NT0RFLFxyXG4gICAgICAgICAgICBvbkRpZDogKHZhbHVlcykgPT4gdGhpcy5zZXRNb2RlKHZhbHVlcy5uZXdWYWx1ZSksXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpbml0TW92ZSgpIHtcclxuICAgICAgICB0aGlzLl9xaW5Hb0ZpcnN0Lmluc3RhbGwodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fcWluR29GaXJzdC5hZGRBY3Rpb25NYWluKChfKSA9PiB0aGlzLl9yZWcudHJ5R29GaXJzdCgpKTtcclxuICAgICAgICB0aGlzLl9xaW5Hb1ByaW9yLmluc3RhbGwodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fcWluR29Qcmlvci5hZGRBY3Rpb25NYWluKChfKSA9PiB0aGlzLl9yZWcudHJ5R29QcmlvcigpKTtcclxuICAgICAgICB0aGlzLl9xaW5Hb05leHQuaW5zdGFsbCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9xaW5Hb05leHQuYWRkQWN0aW9uTWFpbigoXykgPT4gdGhpcy5fcmVnLnRyeUdvTmV4dCgpKTtcclxuICAgICAgICB0aGlzLl9xaW5Hb0xhc3QuaW5zdGFsbCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9xaW5Hb0xhc3QuYWRkQWN0aW9uTWFpbigoXykgPT4gdGhpcy5fcmVnLnRyeUdvTGFzdCgpKTtcclxuICAgIH1cclxuICAgIGluaXRNYWtlKCkge1xyXG4gICAgICAgIHRoaXMuX3FpbkRlbGV0ZS5pbnN0YWxsKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX3FpbkRlbGV0ZS5hZGRBY3Rpb25NYWluKChfKSA9PiB0aGlzLl9yZWcudHJ5RGVsZXRlKCkpO1xyXG4gICAgICAgIHRoaXMuX3FpbkNvbmZpcm0uaW5zdGFsbCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9xaW5Db25maXJtLmFkZEFjdGlvbk1haW4oKF8pID0+IHRoaXMuX3JlZy50cnlDb25maXJtKCkpO1xyXG4gICAgICAgIHRoaXMuX3FpbkNhbmNlbC5pbnN0YWxsKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX3FpbkNhbmNlbC5hZGRBY3Rpb25NYWluKChfKSA9PiB0aGlzLl9yZWcudHJ5Q2FuY2VsKCkpO1xyXG4gICAgfVxyXG4gICAgc2V0TW9kZShtb2RlKSB7XHJcbiAgICAgICAgdGhpcy5fcWluTW9kZS5zZXREYXRhKG51bGwpO1xyXG4gICAgICAgIGlmIChtb2RlKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAobW9kZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBhZF9yZWdpc3Rlcl8xLkFkUmVnTW9kZS5JTlNFUlQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcWluTW9kZS5zZXREYXRhKHRoaXMuX3Fpbkluc2VydC5hc3NldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcWluR29GaXJzdC51bkRpc3BsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9xaW5Hb1ByaW9yLnVuRGlzcGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3FpbkdvTmV4dC51bkRpc3BsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9xaW5Hb0xhc3QudW5EaXNwbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcWluRGVsZXRlLnVuRGlzcGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3FpbkNvbmZpcm0ucmVEaXNwbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcWluQ2FuY2VsLnJlRGlzcGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBhZF9yZWdpc3Rlcl8xLkFkUmVnTW9kZS5TRUFSQ0g6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcWluTW9kZS5zZXREYXRhKHRoaXMuX3FpblNlYXJjaC5hc3NldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcWluR29GaXJzdC5yZURpc3BsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9xaW5Hb1ByaW9yLnJlRGlzcGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3FpbkdvTmV4dC5yZURpc3BsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9xaW5Hb0xhc3QucmVEaXNwbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcWluRGVsZXRlLnVuRGlzcGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3FpbkNvbmZpcm0udW5EaXNwbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcWluQ2FuY2VsLnVuRGlzcGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBhZF9yZWdpc3Rlcl8xLkFkUmVnTW9kZS5NVVRBVEU6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcWluTW9kZS5zZXREYXRhKHRoaXMuX3Fpbk11dGF0ZS5hc3NldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcWluR29GaXJzdC51bkRpc3BsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9xaW5Hb1ByaW9yLnVuRGlzcGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3FpbkdvTmV4dC51bkRpc3BsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9xaW5Hb0xhc3QudW5EaXNwbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcWluRGVsZXRlLnJlRGlzcGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3FpbkNvbmZpcm0ucmVEaXNwbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcWluQ2FuY2VsLnJlRGlzcGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQWRSZWdCYXIgPSBBZFJlZ0JhcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWQtcmVnLWJhci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkFkUmVnRWRpdG9yID0gdm9pZCAwO1xyXG5jb25zdCBxaW5wZWxfY3BzXzEgPSByZXF1aXJlKFwicWlucGVsLWNwc1wiKTtcclxuY2xhc3MgQWRSZWdFZGl0b3IgZXh0ZW5kcyBxaW5wZWxfY3BzXzEuUWluUGFuZWwge1xyXG4gICAgY29uc3RydWN0b3IocmVnaXN0ZXIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX3RhYnMgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX2NvbHVtbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fbGluZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fcmVnID0gcmVnaXN0ZXI7XHJcbiAgICB9XHJcbiAgICBhZGRUYWIodGl0bGUpIHtcclxuICAgICAgICBpZiAodGhpcy5fdGFicyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RhYnMgPSBuZXcgcWlucGVsX2Nwc18xLlFpblRhYnMoKTtcclxuICAgICAgICAgICAgdGhpcy5fdGFicy5pbnN0YWxsKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9jb2x1bW4gPSBuZXcgcWlucGVsX2Nwc18xLlFpbkNvbHVtbigpO1xyXG4gICAgICAgIHRoaXMuX3RhYnMuYWRkVGFiKHsgdGl0bGUsIHZpZXdlcjogdGhpcy5fY29sdW1uIH0pO1xyXG4gICAgICAgIHRoaXMuX2xpbmUgPSBuZXcgcWlucGVsX2Nwc18xLlFpbkxpbmUoKTtcclxuICAgICAgICB0aGlzLl9saW5lLmluc3RhbGwodGhpcy5fY29sdW1uKTtcclxuICAgIH1cclxuICAgIGFkZExpbmUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2NvbHVtbiA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbHVtbiA9IG5ldyBxaW5wZWxfY3BzXzEuUWluQ29sdW1uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbHVtbi5pbnN0YWxsKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9saW5lID0gbmV3IHFpbnBlbF9jcHNfMS5RaW5MaW5lKCk7XHJcbiAgICAgICAgdGhpcy5fbGluZS5pbnN0YWxsKHRoaXMuX2NvbHVtbik7XHJcbiAgICB9XHJcbiAgICBhZGRGaWVsZChmaWVsZCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9saW5lID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRMaW5lKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGVkaXRvciA9IHFpbnBlbF9jcHNfMS5RaW5NdXRhbnRzQXJtLm5ld0VkaXQoZmllbGQua2luZCwgZmllbGQub3B0aW9ucyk7XHJcbiAgICAgICAgZmllbGQuZWRpdCA9IGVkaXRvcjtcclxuICAgICAgICBpZiAoZmllbGQudGl0bGUpIHtcclxuICAgICAgICAgICAgY29uc3QgdGl0bGVkID0gbmV3IHFpbnBlbF9jcHNfMS5RaW5GaWVsZChmaWVsZC50aXRsZSwgZWRpdG9yKTtcclxuICAgICAgICAgICAgdGl0bGVkLmluc3RhbGwodGhpcy5fbGluZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBlZGl0b3IuaW5zdGFsbCh0aGlzLl9saW5lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5BZFJlZ0VkaXRvciA9IEFkUmVnRWRpdG9yO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hZC1yZWctZWRpdG9yLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuQWRSZWdTZWFyY2ggPSB2b2lkIDA7XHJcbmNvbnN0IHFpbnBlbF9jcHNfMSA9IHJlcXVpcmUoXCJxaW5wZWwtY3BzXCIpO1xyXG5jbGFzcyBBZFJlZ1NlYXJjaCBleHRlbmRzIHFpbnBlbF9jcHNfMS5RaW5TY3JvbGwge1xyXG4gICAgY29uc3RydWN0b3IocmVnaXN0ZXIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX2xpbmVzID0gbmV3IHFpbnBlbF9jcHNfMS5RaW5Db2x1bW4oKTtcclxuICAgICAgICB0aGlzLl9jbGF1c2VzID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgdGhpcy5fcmVnID0gcmVnaXN0ZXI7XHJcbiAgICAgICAgdGhpcy5fbGluZXMuaW5zdGFsbCh0aGlzKTtcclxuICAgICAgICBjb25zdCBmaXJzdCA9IG5ldyBTZWFyY2hDbGF1c2UodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fY2xhdXNlcy5wdXNoKGZpcnN0KTtcclxuICAgICAgICBmaXJzdC5pbnN0YWxsKHRoaXMuX2xpbmVzKTtcclxuICAgIH1cclxuICAgIGFkZEZpZWxkKGZpZWxkKSB7XHJcbiAgICAgICAgdGhpcy5fY2xhdXNlcy5mb3JFYWNoKChjbGF1c2UpID0+IHtcclxuICAgICAgICAgICAgY2xhdXNlLmFkZEZpZWxkKHsgdGl0bGU6IGZpZWxkLnRpdGxlLCB2YWx1ZTogZmllbGQubmFtZSB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGFkZENsYXVzZShhZnRlcikge1xyXG4gICAgICAgIGNvbnN0IGNsYXVzZSA9IG5ldyBTZWFyY2hDbGF1c2UodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fcmVnLm1vZGVsLmZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xyXG4gICAgICAgICAgICBjbGF1c2UuYWRkRmllbGQoeyB0aXRsZTogZmllbGQudGl0bGUsIHZhbHVlOiBmaWVsZC5uYW1lIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fY2xhdXNlcy5pbmRleE9mKGFmdGVyKTtcclxuICAgICAgICB0aGlzLl9jbGF1c2VzLnNwbGljZShpbmRleCArIDEsIDAsIGNsYXVzZSk7XHJcbiAgICAgICAgdGhpcy5yZWJ1aWxkKCk7XHJcbiAgICB9XHJcbiAgICBkZWxDbGF1c2UoY2xhdXNlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2NsYXVzZXMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuX2NsYXVzZXMuaW5kZXhPZihjbGF1c2UpO1xyXG4gICAgICAgICAgICB0aGlzLl9jbGF1c2VzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIHRoaXMucmVidWlsZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fY2xhdXNlc1swXS5jbGVhcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlYnVpbGQoKSB7XHJcbiAgICAgICAgdGhpcy5fbGluZXMudW5JbnN0YWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICB0aGlzLl9jbGF1c2VzLmZvckVhY2goKGNsYXVzZSkgPT4ge1xyXG4gICAgICAgICAgICBjbGF1c2UuaW5zdGFsbCh0aGlzLl9saW5lcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5BZFJlZ1NlYXJjaCA9IEFkUmVnU2VhcmNoO1xyXG5jbGFzcyBTZWFyY2hDbGF1c2UgZXh0ZW5kcyBxaW5wZWxfY3BzXzEuUWluTGluZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihkYWQpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX3NhbWUgPSBuZXcgU2VhcmNoU2FtZSgpO1xyXG4gICAgICAgIHRoaXMuX2ZpZWxkID0gbmV3IHFpbnBlbF9jcHNfMS5RaW5Db21ibygpO1xyXG4gICAgICAgIHRoaXMuX2xpa2VzID0gbmV3IFNlYXJjaENvbmRpdGlvbigpO1xyXG4gICAgICAgIHRoaXMuX3ZhbHVlID0gbmV3IHFpbnBlbF9jcHNfMS5RaW5TdHJpbmcoKTtcclxuICAgICAgICB0aGlzLl90aWUgPSBuZXcgU2VhcmNoVGllKCk7XHJcbiAgICAgICAgdGhpcy5fYWRkID0gbmV3IHFpbnBlbF9jcHNfMS5RaW5CdXR0b24oeyBpY29uOiBuZXcgcWlucGVsX2Nwc18xLlFpbkljb24ocWlucGVsX2Nwc18xLlFpbkFzc2V0LkZhY2VQbHVzKSB9KTtcclxuICAgICAgICB0aGlzLl9kZWwgPSBuZXcgcWlucGVsX2Nwc18xLlFpbkJ1dHRvbih7IGljb246IG5ldyBxaW5wZWxfY3BzXzEuUWluSWNvbihxaW5wZWxfY3BzXzEuUWluQXNzZXQuRmFjZU1pbnVzKSB9KTtcclxuICAgICAgICB0aGlzLl9kYWQgPSBkYWQ7XHJcbiAgICAgICAgdGhpcy5fc2FtZS5pbnN0YWxsKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX2ZpZWxkLmluc3RhbGwodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fbGlrZXMuaW5zdGFsbCh0aGlzKTtcclxuICAgICAgICB0aGlzLl92YWx1ZS5pbnN0YWxsKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX3RpZS5pbnN0YWxsKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX2FkZC5pbnN0YWxsKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX2RlbC5pbnN0YWxsKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX2FkZC5hZGRBY3Rpb25NYWluKChfKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2RhZC5hZGRDbGF1c2UodGhpcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fZGVsLmFkZEFjdGlvbk1haW4oKF8pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fZGFkLmRlbENsYXVzZSh0aGlzKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnN0eWxlLnB1dEFzUGFkZGluZ0JvdHRvbSg0KTtcclxuICAgICAgICB0aGlzLnN0eWxlLnB1dEFzQm9yZGVyQm90dG9tKDIsIFwiI2JiYlwiKTtcclxuICAgICAgICB0aGlzLnN0eWxlLnB1dEFzTWFyZ2luQm90dG9tKDQpO1xyXG4gICAgfVxyXG4gICAgYWRkRmllbGQoaXRlbSkge1xyXG4gICAgICAgIHRoaXMuX2ZpZWxkLmFkZEl0ZW0oaXRlbSk7XHJcbiAgICB9XHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICB0aGlzLl9zYW1lLnNldERhdGEoXCJFUVVBTFNcIik7XHJcbiAgICAgICAgdGhpcy5fbGlrZXMuc2V0RGF0YShcIkVRVUFMU1wiKTtcclxuICAgICAgICB0aGlzLl92YWx1ZS5zZXREYXRhKG51bGwpO1xyXG4gICAgICAgIHRoaXMuX3RpZS5zZXREYXRhKFwiQU5EXCIpO1xyXG4gICAgfVxyXG59XHJcbmNsYXNzIFNlYXJjaFNhbWUgZXh0ZW5kcyBxaW5wZWxfY3BzXzEuUWluQ29tYm8ge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmFkZEl0ZW0oeyB0aXRsZTogXCI9PVwiLCB2YWx1ZTogXCJFUVVBTFNcIiB9KTtcclxuICAgICAgICB0aGlzLmFkZEl0ZW0oeyB0aXRsZTogXCIhPVwiLCB2YWx1ZTogXCJESVZFUlNcIiB9KTtcclxuICAgICAgICB0aGlzLnN0eWxlLnB1dEFzTWF4V2lkdGgoNjQpO1xyXG4gICAgfVxyXG59XHJcbmNsYXNzIFNlYXJjaENvbmRpdGlvbiBleHRlbmRzIHFpbnBlbF9jcHNfMS5RaW5Db21ibyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuYWRkSXRlbSh7IHRpdGxlOiBcIj1cIiwgdmFsdWU6IFwiRVFVQUxTXCIgfSk7XHJcbiAgICAgICAgdGhpcy5hZGRJdGVtKHsgdGl0bGU6IFwiPlwiLCB2YWx1ZTogXCJCSUdHRVJcIiB9KTtcclxuICAgICAgICB0aGlzLmFkZEl0ZW0oeyB0aXRsZTogXCI8XCIsIHZhbHVlOiBcIkxFU1NFUlwiIH0pO1xyXG4gICAgICAgIHRoaXMuYWRkSXRlbSh7IHRpdGxlOiBcIj49XCIsIHZhbHVlOiBcIkJJR0dFUl9FUVVBTFNcIiB9KTtcclxuICAgICAgICB0aGlzLmFkZEl0ZW0oeyB0aXRsZTogXCI8PVwiLCB2YWx1ZTogXCJMRVNTRVJfRVFVQUxTXCIgfSk7XHJcbiAgICAgICAgdGhpcy5hZGRJdGVtKHsgdGl0bGU6IFwiJF9cIiwgdmFsdWU6IFwiU1RBUlRTX1dJVEhcIiB9KTtcclxuICAgICAgICB0aGlzLmFkZEl0ZW0oeyB0aXRsZTogXCJfJFwiLCB2YWx1ZTogXCJFTkRTX1dJVEhcIiB9KTtcclxuICAgICAgICB0aGlzLmFkZEl0ZW0oeyB0aXRsZTogXCJfJF9cIiwgdmFsdWU6IFwiQ09OVEFJTlNcIiB9KTtcclxuICAgICAgICB0aGlzLnN0eWxlLnB1dEFzTWF4V2lkdGgoNjQpO1xyXG4gICAgfVxyXG59XHJcbmNsYXNzIFNlYXJjaFRpZSBleHRlbmRzIHFpbnBlbF9jcHNfMS5RaW5Db21ibyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuYWRkSXRlbSh7IHRpdGxlOiBcIiYmXCIsIHZhbHVlOiBcIkFORFwiIH0pO1xyXG4gICAgICAgIHRoaXMuYWRkSXRlbSh7IHRpdGxlOiBcInx8XCIsIHZhbHVlOiBcIk9SXCIgfSk7XHJcbiAgICAgICAgdGhpcy5zdHlsZS5wdXRBc01heFdpZHRoKDY0KTtcclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hZC1yZWctc2VhcmNoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuQWRSZWdUYWJsZSA9IHZvaWQgMDtcclxuY29uc3QgcWlucGVsX2Nwc18xID0gcmVxdWlyZShcInFpbnBlbC1jcHNcIik7XHJcbmNsYXNzIEFkUmVnVGFibGUgZXh0ZW5kcyBxaW5wZWxfY3BzXzEuUWluVGFibGUge1xyXG4gICAgY29uc3RydWN0b3IocmVnaXN0ZXIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX3JlZyA9IHJlZ2lzdGVyO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQWRSZWdUYWJsZSA9IEFkUmVnVGFibGU7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFkLXJlZy10YWJsZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkFkUmVnRXZlbnQgPSBleHBvcnRzLkFkUmVnVmlldyA9IGV4cG9ydHMuQWRSZWdNb2RlID0gZXhwb3J0cy5BZFJlZ2lzdGVyID0gdm9pZCAwO1xyXG5jb25zdCBxaW5wZWxfY3BzXzEgPSByZXF1aXJlKFwicWlucGVsLWNwc1wiKTtcclxuY29uc3QgYWRfY29uc3RzXzEgPSByZXF1aXJlKFwiLi9hZC1jb25zdHNcIik7XHJcbmNvbnN0IGFkX21vZGVsXzEgPSByZXF1aXJlKFwiLi9hZC1tb2RlbFwiKTtcclxuY29uc3QgYWRfcmVnX2Jhcl8xID0gcmVxdWlyZShcIi4vYWQtcmVnLWJhclwiKTtcclxuY29uc3QgYWRfcmVnX2VkaXRvcl8xID0gcmVxdWlyZShcIi4vYWQtcmVnLWVkaXRvclwiKTtcclxuY29uc3QgYWRfcmVnX3NlYXJjaF8xID0gcmVxdWlyZShcIi4vYWQtcmVnLXNlYXJjaFwiKTtcclxuY29uc3QgYWRfcmVnX3RhYmxlXzEgPSByZXF1aXJlKFwiLi9hZC1yZWctdGFibGVcIik7XHJcbmNsYXNzIEFkUmVnaXN0ZXIgZXh0ZW5kcyBxaW5wZWxfY3BzXzEuUWluQ29sdW1uIHtcclxuICAgIGNvbnN0cnVjdG9yKG1vZHVsZSwgcmVnaXN0cnksIGV4cGVjdCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5fbGlzdGVuZXIgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICB0aGlzLl9yZWdCYXIgPSBuZXcgYWRfcmVnX2Jhcl8xLkFkUmVnQmFyKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX3ZpZXdTaW5nbGUgPSBuZXcgcWlucGVsX2Nwc18xLlFpblN0YWNrKCk7XHJcbiAgICAgICAgdGhpcy5fdmlld1ZlcnRpY2FsID0gbmV3IHFpbnBlbF9jcHNfMS5RaW5TcGxpdHRlcih7IGhvcml6b250YWw6IGZhbHNlIH0pO1xyXG4gICAgICAgIHRoaXMuX3ZpZXdIb3Jpem9udGFsID0gbmV3IHFpbnBlbF9jcHNfMS5RaW5TcGxpdHRlcih7IGhvcml6b250YWw6IHRydWUgfSk7XHJcbiAgICAgICAgdGhpcy5fYm9keSA9IG5ldyBxaW5wZWxfY3BzXzEuUWluU3RhY2soKTtcclxuICAgICAgICB0aGlzLl9ib2R5RWRpdG9yID0gbmV3IGFkX3JlZ19lZGl0b3JfMS5BZFJlZ0VkaXRvcih0aGlzKTtcclxuICAgICAgICB0aGlzLl9ib2R5U2VhcmNoID0gbmV3IGFkX3JlZ19zZWFyY2hfMS5BZFJlZ1NlYXJjaCh0aGlzKTtcclxuICAgICAgICB0aGlzLl90YWJsZSA9IG5ldyBhZF9yZWdfdGFibGVfMS5BZFJlZ1RhYmxlKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX21vZHVsZSA9IG1vZHVsZTtcclxuICAgICAgICB0aGlzLl9yZWdpc3RyeSA9IHJlZ2lzdHJ5O1xyXG4gICAgICAgIHRoaXMuX2V4cGVjdCA9IGV4cGVjdDtcclxuICAgICAgICB0aGlzLl9tb2RlbCA9IG5ldyBhZF9tb2RlbF8xLkFkTW9kZWwocmVnaXN0cnkpO1xyXG4gICAgICAgIHRoaXMuX3ZpZXdTaW5nbGUuc3R5bGUucHV0QXNGbGV4TWF4KCk7XHJcbiAgICAgICAgdGhpcy5fdmlld1ZlcnRpY2FsLnN0eWxlLnB1dEFzRmxleE1heCgpO1xyXG4gICAgICAgIHRoaXMuX3ZpZXdIb3Jpem9udGFsLnN0eWxlLnB1dEFzRmxleE1heCgpO1xyXG4gICAgICAgIHRoaXMuX3JlZ0Jhci5pbnN0YWxsKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX2JvZHkuc3RhY2sodGhpcy5fYm9keUVkaXRvcik7XHJcbiAgICAgICAgdGhpcy5fYm9keS5zdGFjayh0aGlzLl9ib2R5U2VhcmNoKTtcclxuICAgICAgICBpZiAoZXhwZWN0LnNjb3Blcy5maW5kKChzY29wZSkgPT4gc2NvcGUgPT09IGFkX2NvbnN0c18xLkFkU2NvcGUuQUxMKSB8fFxyXG4gICAgICAgICAgICBleHBlY3Quc2NvcGVzLmZpbmQoKHNjb3BlKSA9PiBzY29wZSA9PT0gYWRfY29uc3RzXzEuQWRTY29wZS5JTlNFUlQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlTW9kZShBZFJlZ01vZGUuSU5TRVJUKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlTW9kZShBZFJlZ01vZGUuU0VBUkNIKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy52aWV3VmVydGljYWwoKTtcclxuICAgICAgICB0aGlzLl9yZWdCYXIudGFiSW5kZXggPSAwO1xyXG4gICAgICAgIHRoaXMuX2JvZHkudGFiSW5kZXggPSAxO1xyXG4gICAgICAgIHRoaXMuX3RhYmxlLnRhYkluZGV4ID0gMjtcclxuICAgIH1cclxuICAgIGdldCBtb2R1bGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vZHVsZTtcclxuICAgIH1cclxuICAgIGdldCByZWdpc3RyeSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcmVnaXN0cnk7XHJcbiAgICB9XHJcbiAgICBnZXQgZXhwZWN0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9leHBlY3Q7XHJcbiAgICB9XHJcbiAgICBnZXQgbW9kZWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vZGVsO1xyXG4gICAgfVxyXG4gICAgYWRkVGFiKHRpdGxlKSB7XHJcbiAgICAgICAgdGhpcy5fYm9keUVkaXRvci5hZGRUYWIodGl0bGUpO1xyXG4gICAgfVxyXG4gICAgYWRkTGluZSgpIHtcclxuICAgICAgICB0aGlzLl9ib2R5RWRpdG9yLmFkZExpbmUoKTtcclxuICAgIH1cclxuICAgIGFkZEZpZWxkKGZpZWxkKSB7XHJcbiAgICAgICAgdGhpcy5fbW9kZWwuYWRkRmllbGQoZmllbGQpO1xyXG4gICAgICAgIHRoaXMuX2JvZHlFZGl0b3IuYWRkRmllbGQoZmllbGQpO1xyXG4gICAgICAgIHRoaXMuX2JvZHlTZWFyY2guYWRkRmllbGQoZmllbGQpO1xyXG4gICAgICAgIHRoaXMuX3RhYmxlLmFkZEhlYWQoZmllbGQudGl0bGUpO1xyXG4gICAgfVxyXG4gICAgY2hhbmdlTW9kZShtb2RlKSB7XHJcbiAgICAgICAgaWYgKG1vZGUgPT09IEFkUmVnTW9kZS5TRUFSQ0gpIHtcclxuICAgICAgICAgICAgdGhpcy5fYm9keS5zaG93KHRoaXMuX2JvZHlTZWFyY2gpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fYm9keS5zaG93KHRoaXMuX2JvZHlFZGl0b3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9yZWdNb2RlID0gbW9kZTtcclxuICAgICAgICB0aGlzLmNhbGxEaWRMaXN0ZW5lcnMoQWRSZWdFdmVudC5DSEFOR0VfTU9ERSwgeyBuZXdWYWx1ZTogdGhpcy5fcmVnTW9kZSB9KTtcclxuICAgIH1cclxuICAgIHRyeUNoYW5nZU1vZGUobW9kZSkge1xyXG4gICAgICAgIGxldCBjYW5jZWwgPSB0aGlzLmNhbGxUcnlMaXN0ZW5lcnMoQWRSZWdFdmVudC5DSEFOR0VfTU9ERSwge1xyXG4gICAgICAgICAgICBvbGRWYWx1ZTogdGhpcy5fcmVnTW9kZSxcclxuICAgICAgICAgICAgc2V0VmFsdWU6IG1vZGUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKGNhbmNlbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gY2FuY2VsO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNoYW5nZU1vZGUobW9kZSk7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBnZXQgbW9kZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcmVnTW9kZTtcclxuICAgIH1cclxuICAgIHRyeUdvRmlyc3QoKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcbiAgICB0cnlHb1ByaW9yKCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG4gICAgdHJ5R29OZXh0KCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG4gICAgdHJ5R29MYXN0KCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG4gICAgdHJ5RGVsZXRlKCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG4gICAgdHJ5Q29uZmlybSgpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxuICAgIHRyeUNhbmNlbCgpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxuICAgIHZpZXdTaW5nbGUoKSB7XHJcbiAgICAgICAgdGhpcy5fdmlld1ZlcnRpY2FsLnVuSW5zdGFsbCgpO1xyXG4gICAgICAgIHRoaXMuX3ZpZXdIb3Jpem9udGFsLnVuSW5zdGFsbCgpO1xyXG4gICAgICAgIHRoaXMuX3ZpZXdTaW5nbGUuaW5zdGFsbCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9ib2R5Lmluc3RhbGwodGhpcy5fdmlld1NpbmdsZSk7XHJcbiAgICAgICAgdGhpcy5fdGFibGUuaW5zdGFsbCh0aGlzLl92aWV3U2luZ2xlKTtcclxuICAgICAgICBpZiAodGhpcy5fcmVnTW9kZSA9PT0gQWRSZWdNb2RlLlNFQVJDSCkge1xyXG4gICAgICAgICAgICB0aGlzLl92aWV3U2luZ2xlLnNob3codGhpcy5fdGFibGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fdmlld1NpbmdsZS5zaG93KHRoaXMuX2JvZHkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9yZWdWaWV3ID0gQWRSZWdWaWV3LlNJTkdMRTtcclxuICAgICAgICB0aGlzLmNhbGxEaWRMaXN0ZW5lcnMoQWRSZWdFdmVudC5DSEFOR0VfVklFVywgeyBuZXdWYWx1ZTogdGhpcy5fcmVnVmlldyB9KTtcclxuICAgIH1cclxuICAgIHZpZXdWZXJ0aWNhbCgpIHtcclxuICAgICAgICB0aGlzLl92aWV3U2luZ2xlLnVuSW5zdGFsbCgpO1xyXG4gICAgICAgIHRoaXMuX3ZpZXdIb3Jpem9udGFsLnVuSW5zdGFsbCgpO1xyXG4gICAgICAgIHRoaXMuX3ZpZXdWZXJ0aWNhbC5pbnN0YWxsKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX2JvZHkuaW5zdGFsbCh0aGlzLl92aWV3VmVydGljYWwpO1xyXG4gICAgICAgIHRoaXMuX3RhYmxlLmluc3RhbGwodGhpcy5fdmlld1ZlcnRpY2FsKTtcclxuICAgICAgICB0aGlzLl9ib2R5LnJlRGlzcGxheSgpO1xyXG4gICAgICAgIHRoaXMuX3RhYmxlLnJlRGlzcGxheSgpO1xyXG4gICAgICAgIHRoaXMuX3JlZ1ZpZXcgPSBBZFJlZ1ZpZXcuVkVSVElDQUw7XHJcbiAgICAgICAgdGhpcy5jYWxsRGlkTGlzdGVuZXJzKEFkUmVnRXZlbnQuQ0hBTkdFX1ZJRVcsIHsgbmV3VmFsdWU6IHRoaXMuX3JlZ1ZpZXcgfSk7XHJcbiAgICB9XHJcbiAgICB2aWV3SG9yaXpvbnRhbCgpIHtcclxuICAgICAgICB0aGlzLl92aWV3U2luZ2xlLnVuSW5zdGFsbCgpO1xyXG4gICAgICAgIHRoaXMuX3ZpZXdWZXJ0aWNhbC51bkluc3RhbGwoKTtcclxuICAgICAgICB0aGlzLl92aWV3SG9yaXpvbnRhbC5pbnN0YWxsKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX2JvZHkuaW5zdGFsbCh0aGlzLl92aWV3SG9yaXpvbnRhbCk7XHJcbiAgICAgICAgdGhpcy5fdGFibGUuaW5zdGFsbCh0aGlzLl92aWV3SG9yaXpvbnRhbCk7XHJcbiAgICAgICAgdGhpcy5fYm9keS5yZURpc3BsYXkoKTtcclxuICAgICAgICB0aGlzLl90YWJsZS5yZURpc3BsYXkoKTtcclxuICAgICAgICB0aGlzLl9yZWdWaWV3ID0gQWRSZWdWaWV3LkhPUklaT05UQUw7XHJcbiAgICAgICAgdGhpcy5jYWxsRGlkTGlzdGVuZXJzKEFkUmVnRXZlbnQuQ0hBTkdFX1ZJRVcsIHsgbmV3VmFsdWU6IHRoaXMuX3JlZ1ZpZXcgfSk7XHJcbiAgICB9XHJcbiAgICBnZXQgdmlldygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcmVnVmlldztcclxuICAgIH1cclxuICAgIGFkZExpc3RlbmVyKGxpc3RlbmVyKSB7XHJcbiAgICAgICAgdGhpcy5fbGlzdGVuZXIucHVzaChsaXN0ZW5lcik7XHJcbiAgICB9XHJcbiAgICBkZWxMaXN0ZW5lcihsaXN0ZW5lcikge1xyXG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuX2xpc3RlbmVyLmluZGV4T2YobGlzdGVuZXIpO1xyXG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xpc3RlbmVyLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2FsbFRyeUxpc3RlbmVycyhldmVudCwgdmFsdWUpIHtcclxuICAgICAgICB0aGlzLl9saXN0ZW5lci5mb3JFYWNoKChsaXN0ZW4pID0+IHtcclxuICAgICAgICAgICAgaWYgKGxpc3Rlbi5ldmVudCA9PT0gZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChsaXN0ZW4ub25UcnkpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2FuY2VsID0gbGlzdGVuLm9uVHJ5KHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2FuY2VsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYW5jZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBjYWxsRGlkTGlzdGVuZXJzKGV2ZW50LCB2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX2xpc3RlbmVyLmZvckVhY2goKGxpc3RlbikgPT4ge1xyXG4gICAgICAgICAgICBpZiAobGlzdGVuLmV2ZW50ID09PSBldmVudCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGxpc3Rlbi5vbkRpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3Rlbi5vbkRpZCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZvY3VzQm9keSgpIHtcclxuICAgICAgICBpZiAodGhpcy5fcmVnVmlldyA9PSBBZFJlZ1ZpZXcuU0lOR0xFKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZpZXdTaW5nbGUuc2hvdyh0aGlzLl9ib2R5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fYm9keS5mb2N1cygpO1xyXG4gICAgfVxyXG4gICAgZm9jdXNUYWJsZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5fcmVnVmlldyA9PSBBZFJlZ1ZpZXcuU0lOR0xFKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZpZXdTaW5nbGUuc2hvdyh0aGlzLl90YWJsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3RhYmxlLmZvY3VzKCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5BZFJlZ2lzdGVyID0gQWRSZWdpc3RlcjtcclxudmFyIEFkUmVnTW9kZTtcclxuKGZ1bmN0aW9uIChBZFJlZ01vZGUpIHtcclxuICAgIEFkUmVnTW9kZVtcIklOU0VSVFwiXSA9IFwiaW5zZXJ0XCI7XHJcbiAgICBBZFJlZ01vZGVbXCJTRUFSQ0hcIl0gPSBcInNlYXJjaFwiO1xyXG4gICAgQWRSZWdNb2RlW1wiTVVUQVRFXCJdID0gXCJtdXRhdGVcIjtcclxufSkoQWRSZWdNb2RlID0gZXhwb3J0cy5BZFJlZ01vZGUgfHwgKGV4cG9ydHMuQWRSZWdNb2RlID0ge30pKTtcclxudmFyIEFkUmVnVmlldztcclxuKGZ1bmN0aW9uIChBZFJlZ1ZpZXcpIHtcclxuICAgIEFkUmVnVmlld1tcIlNJTkdMRVwiXSA9IFwiaW5zZXJ0XCI7XHJcbiAgICBBZFJlZ1ZpZXdbXCJWRVJUSUNBTFwiXSA9IFwic2VhcmNoXCI7XHJcbiAgICBBZFJlZ1ZpZXdbXCJIT1JJWk9OVEFMXCJdID0gXCJtdXRhdGVcIjtcclxufSkoQWRSZWdWaWV3ID0gZXhwb3J0cy5BZFJlZ1ZpZXcgfHwgKGV4cG9ydHMuQWRSZWdWaWV3ID0ge30pKTtcclxudmFyIEFkUmVnRXZlbnQ7XHJcbihmdW5jdGlvbiAoQWRSZWdFdmVudCkge1xyXG4gICAgQWRSZWdFdmVudFtcIkNIQU5HRV9NT0RFXCJdID0gXCJDSEFOR0VfTU9ERVwiO1xyXG4gICAgQWRSZWdFdmVudFtcIkNIQU5HRV9WSUVXXCJdID0gXCJDSEFOR0VfVklFV1wiO1xyXG59KShBZFJlZ0V2ZW50ID0gZXhwb3J0cy5BZFJlZ0V2ZW50IHx8IChleHBvcnRzLkFkUmVnRXZlbnQgPSB7fSkpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hZC1yZWdpc3Rlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkFkVG9vbHMgPSB2b2lkIDA7XHJcbmNvbnN0IGFkX2NvbnN0c18xID0gcmVxdWlyZShcIi4vYWQtY29uc3RzXCIpO1xyXG5mdW5jdGlvbiBuZXdBZE9wdGlvbihtb2R1bGUsIHNjb3BlcywgZmlsdGVycykge1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgcmVzdWx0W2FkX2NvbnN0c18xLkFkT3B0aW9ucy5NT0RVTEVdID0gbW9kdWxlO1xyXG4gICAgcmVzdWx0W2FkX2NvbnN0c18xLkFkT3B0aW9ucy5TQ09QRVNdID0gc2NvcGVzO1xyXG4gICAgcmVzdWx0W2FkX2NvbnN0c18xLkFkT3B0aW9ucy5GSUxURVJTXSA9IGZpbHRlcnM7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbmV4cG9ydHMuQWRUb29scyA9IHtcclxuICAgIG5ld0FkT3B0aW9uXHJcbn07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFkLXRvb2xzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuQWRUb29scyA9IGV4cG9ydHMuQWRSZWdFdmVudCA9IGV4cG9ydHMuQWRSZWdWaWV3ID0gZXhwb3J0cy5BZFJlZ01vZGUgPSBleHBvcnRzLkFkUmVnaXN0ZXIgPSBleHBvcnRzLkFkUmVnVGFibGUgPSBleHBvcnRzLkFkUmVnU2VhcmNoID0gZXhwb3J0cy5BZFJlZ0VkaXRvciA9IGV4cG9ydHMuQWRSZWdCYXIgPSBleHBvcnRzLkFkTW9kZWwgPSBleHBvcnRzLm1lbnVTdGFydFVwID0gZXhwb3J0cy5BZE1lbnUgPSBleHBvcnRzLkFkRmlsdGVyVGllID0gZXhwb3J0cy5BZEZpbHRlckxpa2VzID0gZXhwb3J0cy5BZEZpbHRlckl0ZW0gPSBleHBvcnRzLkFkRmlsdGVycyA9IGV4cG9ydHMuQWRGaWVsZCA9IGV4cG9ydHMuQWRFeHBlY3QgPSBleHBvcnRzLkFkTW9kdWxlcyA9IGV4cG9ydHMuaXNTYW1lTW9kdWxlID0gZXhwb3J0cy5BZFNjb3BlID0gZXhwb3J0cy5BZE9wdGlvbnMgPSB2b2lkIDA7XHJcbnZhciBhZF9jb25zdHNfMSA9IHJlcXVpcmUoXCIuL2FkLWNvbnN0c1wiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQWRPcHRpb25zXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBhZF9jb25zdHNfMS5BZE9wdGlvbnM7IH0gfSk7XHJcbnZhciBhZF9jb25zdHNfMiA9IHJlcXVpcmUoXCIuL2FkLWNvbnN0c1wiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQWRTY29wZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gYWRfY29uc3RzXzIuQWRTY29wZTsgfSB9KTtcclxudmFyIGFkX2NvbnN0c18zID0gcmVxdWlyZShcIi4vYWQtY29uc3RzXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJpc1NhbWVNb2R1bGVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFkX2NvbnN0c18zLmlzU2FtZU1vZHVsZTsgfSB9KTtcclxudmFyIGFkX2NvbnN0c180ID0gcmVxdWlyZShcIi4vYWQtY29uc3RzXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJBZE1vZHVsZXNcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFkX2NvbnN0c180LkFkTW9kdWxlczsgfSB9KTtcclxudmFyIGFkX2V4cGVjdF8xID0gcmVxdWlyZShcIi4vYWQtZXhwZWN0XCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJBZEV4cGVjdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gYWRfZXhwZWN0XzEuQWRFeHBlY3Q7IH0gfSk7XHJcbnZhciBhZF9maWVsZF8xID0gcmVxdWlyZShcIi4vYWQtZmllbGRcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkFkRmllbGRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFkX2ZpZWxkXzEuQWRGaWVsZDsgfSB9KTtcclxudmFyIGFkX2ZpbHRlcnNfMSA9IHJlcXVpcmUoXCIuL2FkLWZpbHRlcnNcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkFkRmlsdGVyc1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gYWRfZmlsdGVyc18xLkFkRmlsdGVyczsgfSB9KTtcclxudmFyIGFkX2ZpbHRlcnNfMiA9IHJlcXVpcmUoXCIuL2FkLWZpbHRlcnNcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkFkRmlsdGVySXRlbVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gYWRfZmlsdGVyc18yLkFkRmlsdGVySXRlbTsgfSB9KTtcclxudmFyIGFkX2ZpbHRlcnNfMyA9IHJlcXVpcmUoXCIuL2FkLWZpbHRlcnNcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkFkRmlsdGVyTGlrZXNcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFkX2ZpbHRlcnNfMy5BZEZpbHRlckxpa2VzOyB9IH0pO1xyXG52YXIgYWRfZmlsdGVyc180ID0gcmVxdWlyZShcIi4vYWQtZmlsdGVyc1wiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQWRGaWx0ZXJUaWVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFkX2ZpbHRlcnNfNC5BZEZpbHRlclRpZTsgfSB9KTtcclxudmFyIGFkX21lbnVfMSA9IHJlcXVpcmUoXCIuL2FkLW1lbnVcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkFkTWVudVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gYWRfbWVudV8xLkFkTWVudTsgfSB9KTtcclxudmFyIGFkX21lbnVfMiA9IHJlcXVpcmUoXCIuL2FkLW1lbnVcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIm1lbnVTdGFydFVwXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBhZF9tZW51XzIubWVudVN0YXJ0VXA7IH0gfSk7XHJcbnZhciBhZF9tb2RlbF8xID0gcmVxdWlyZShcIi4vYWQtbW9kZWxcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkFkTW9kZWxcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFkX21vZGVsXzEuQWRNb2RlbDsgfSB9KTtcclxudmFyIGFkX3JlZ19iYXJfMSA9IHJlcXVpcmUoXCIuL2FkLXJlZy1iYXJcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkFkUmVnQmFyXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBhZF9yZWdfYmFyXzEuQWRSZWdCYXI7IH0gfSk7XHJcbnZhciBhZF9yZWdfZWRpdG9yXzEgPSByZXF1aXJlKFwiLi9hZC1yZWctZWRpdG9yXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJBZFJlZ0VkaXRvclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gYWRfcmVnX2VkaXRvcl8xLkFkUmVnRWRpdG9yOyB9IH0pO1xyXG52YXIgYWRfcmVnX3NlYXJjaF8xID0gcmVxdWlyZShcIi4vYWQtcmVnLXNlYXJjaFwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQWRSZWdTZWFyY2hcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFkX3JlZ19zZWFyY2hfMS5BZFJlZ1NlYXJjaDsgfSB9KTtcclxudmFyIGFkX3JlZ190YWJsZV8xID0gcmVxdWlyZShcIi4vYWQtcmVnLXRhYmxlXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJBZFJlZ1RhYmxlXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBhZF9yZWdfdGFibGVfMS5BZFJlZ1RhYmxlOyB9IH0pO1xyXG52YXIgYWRfcmVnaXN0ZXJfMSA9IHJlcXVpcmUoXCIuL2FkLXJlZ2lzdGVyXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJBZFJlZ2lzdGVyXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBhZF9yZWdpc3Rlcl8xLkFkUmVnaXN0ZXI7IH0gfSk7XHJcbnZhciBhZF9yZWdpc3Rlcl8yID0gcmVxdWlyZShcIi4vYWQtcmVnaXN0ZXJcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkFkUmVnTW9kZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gYWRfcmVnaXN0ZXJfMi5BZFJlZ01vZGU7IH0gfSk7XHJcbnZhciBhZF9yZWdpc3Rlcl8zID0gcmVxdWlyZShcIi4vYWQtcmVnaXN0ZXJcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkFkUmVnVmlld1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gYWRfcmVnaXN0ZXJfMy5BZFJlZ1ZpZXc7IH0gfSk7XHJcbnZhciBhZF9yZWdpc3Rlcl80ID0gcmVxdWlyZShcIi4vYWQtcmVnaXN0ZXJcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkFkUmVnRXZlbnRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFkX3JlZ2lzdGVyXzQuQWRSZWdFdmVudDsgfSB9KTtcclxudmFyIGFkX3Rvb2xzXzEgPSByZXF1aXJlKFwiLi9hZC10b29sc1wiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQWRUb29sc1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gYWRfdG9vbHNfMS5BZFRvb2xzOyB9IH0pO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hbGwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5BZE5hdGlvbiA9IHZvaWQgMDtcclxuY29uc3QgYWRjb21tb25fMSA9IHJlcXVpcmUoXCJhZGNvbW1vblwiKTtcclxuY29uc3QgcWlucGVsX2Nwc18xID0gcmVxdWlyZShcInFpbnBlbC1jcHNcIik7XHJcbmNsYXNzIEFkTmF0aW9uIGV4dGVuZHMgYWRjb21tb25fMS5BZFJlZ2lzdGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKG1vZHVsZSwgZXhwZWN0KSB7XHJcbiAgICAgICAgc3VwZXIobW9kdWxlLCB7IGJhc2U6IFwiWyBUT0RPIF1cIiwgbmFtZTogXCJwYWlzZXNcIiB9LCBleHBlY3QpO1xyXG4gICAgICAgIHRoaXMuYWRkRmllbGQobmV3IGFkY29tbW9uXzEuQWRGaWVsZCh7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiY29kaWdvXCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkPDs2RpZ29cIixcclxuICAgICAgICAgICAga2luZDogcWlucGVsX2Nwc18xLlFpbk11dGFudHMuU1RSSU5HLFxyXG4gICAgICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICBtYXhMZW5ndGg6IDQsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIHRoaXMuYWRkRmllbGQobmV3IGFkY29tbW9uXzEuQWRGaWVsZCh7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiYXRpdm9cIixcclxuICAgICAgICAgICAgdGl0bGU6IFwiQXRpdm9cIixcclxuICAgICAgICAgICAga2luZDogcWlucGVsX2Nwc18xLlFpbk11dGFudHMuQ09NQk8sXHJcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJTaW1cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJOw6NvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIk5cIixcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgdGhpcy5hZGRGaWVsZChuZXcgYWRjb21tb25fMS5BZEZpZWxkKHtcclxuICAgICAgICAgICAgbmFtZTogXCJub21lXCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIk5vbWVcIixcclxuICAgICAgICAgICAga2luZDogcWlucGVsX2Nwc18xLlFpbk11dGFudHMuU1RSSU5HLFxyXG4gICAgICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICBtYXhMZW5ndGg6IDYwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkFkTmF0aW9uID0gQWROYXRpb247XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFkLW5hdGlvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkFkUmVnaW9uID0gdm9pZCAwO1xyXG5jb25zdCBhZGNvbW1vbl8xID0gcmVxdWlyZShcImFkY29tbW9uXCIpO1xyXG5jb25zdCBxaW5wZWxfY3BzXzEgPSByZXF1aXJlKFwicWlucGVsLWNwc1wiKTtcclxuY2xhc3MgQWRSZWdpb24gZXh0ZW5kcyBhZGNvbW1vbl8xLkFkUmVnaXN0ZXIge1xyXG4gICAgY29uc3RydWN0b3IobW9kdWxlLCBleHBlY3QpIHtcclxuICAgICAgICBzdXBlcihtb2R1bGUsIHsgYmFzZTogXCJbIFRPRE8gXVwiLCBuYW1lOiBcInJlZ2lvZXNcIiB9LCBleHBlY3QpO1xyXG4gICAgICAgIHRoaXMuYWRkRmllbGQobmV3IGFkY29tbW9uXzEuQWRGaWVsZCh7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiY29kaWdvXCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkPDs2RpZ29cIixcclxuICAgICAgICAgICAga2luZDogcWlucGVsX2Nwc18xLlFpbk11dGFudHMuU1RSSU5HLFxyXG4gICAgICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICBtYXhMZW5ndGg6IDQsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIHRoaXMuYWRkRmllbGQobmV3IGFkY29tbW9uXzEuQWRGaWVsZCh7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiYXRpdm9cIixcclxuICAgICAgICAgICAgdGl0bGU6IFwiQXRpdm9cIixcclxuICAgICAgICAgICAga2luZDogcWlucGVsX2Nwc18xLlFpbk11dGFudHMuQ09NQk8sXHJcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJTaW1cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJOw6NvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIk5cIixcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgdGhpcy5hZGRGaWVsZChuZXcgYWRjb21tb25fMS5BZEZpZWxkKHtcclxuICAgICAgICAgICAgbmFtZTogXCJub21lXCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIk5vbWVcIixcclxuICAgICAgICAgICAga2luZDogcWlucGVsX2Nwc18xLlFpbk11dGFudHMuU1RSSU5HLFxyXG4gICAgICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICBtYXhMZW5ndGg6IDYwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkFkUmVnaW9uID0gQWRSZWdpb247XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFkLXJlZ2lvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBhZGNvbW1vbl8xID0gcmVxdWlyZShcImFkY29tbW9uXCIpO1xyXG5jb25zdCBhZF9uYXRpb25fMSA9IHJlcXVpcmUoXCIuL2FkLW5hdGlvblwiKTtcclxuY29uc3QgYWRfcmVnaW9uXzEgPSByZXF1aXJlKFwiLi9hZC1yZWdpb25cIik7XHJcbmNvbnN0IGl0ZW1zID0gW1xyXG4gICAgeyBtb2R1bGU6IGFkY29tbW9uXzEuQWRNb2R1bGVzLlJFR0lPTiwgcmVnaXN0ZXI6IGFkX3JlZ2lvbl8xLkFkUmVnaW9uIH0sXHJcbiAgICB7IG1vZHVsZTogYWRjb21tb25fMS5BZE1vZHVsZXMuTkFUSU9OLCByZWdpc3RlcjogYWRfbmF0aW9uXzEuQWROYXRpb24gfSxcclxuXTtcclxuKDAsIGFkY29tbW9uXzEubWVudVN0YXJ0VXApKGl0ZW1zKS5zdHlsZS5wdXRBc0JvZHkoKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5Ub29scyA9IGV4cG9ydHMuUWluVGl0bGVkID0gZXhwb3J0cy5RaW5UYWJzID0gZXhwb3J0cy5RaW5UYWJsZSA9IGV4cG9ydHMuUWluU3RyaW5nID0gZXhwb3J0cy5RaW5TdGFjayA9IGV4cG9ydHMuUWluU3BsaXR0ZXIgPSBleHBvcnRzLlFpblNwYWNlciA9IGV4cG9ydHMuUWluU2Nyb2xsID0gZXhwb3J0cy5RaW5Sb3cgPSBleHBvcnRzLlFpblBvcHVwID0gZXhwb3J0cy5RaW5QYW5lbCA9IGV4cG9ydHMuUWluTXV0YW50c0FybSA9IGV4cG9ydHMuUWluTXV0YW50cyA9IGV4cG9ydHMuUWluTGluZSA9IGV4cG9ydHMuUWluTGFiZWwgPSBleHBvcnRzLlFpbkludGVnZXIgPSBleHBvcnRzLlFpbkljb24gPSBleHBvcnRzLlFpbkljb25QaWNrID0gZXhwb3J0cy5RaW5JY29uQ2VsbCA9IGV4cG9ydHMuUWluRmlsZVZpZXcgPSBleHBvcnRzLlFpbkZpbGVQaWNrID0gZXhwb3J0cy5RaW5GaWxlUGF0aCA9IGV4cG9ydHMuUWluRmllbGQgPSBleHBvcnRzLlFpbkVkaXQgPSBleHBvcnRzLlFpbkRpdmlkZXIgPSBleHBvcnRzLlFpbkNvbWJvID0gZXhwb3J0cy5RaW5Db2x1bW4gPSBleHBvcnRzLlFpbkJ1dHRvbiA9IGV4cG9ydHMuUWluQm9vbGVhbiA9IGV4cG9ydHMuUWluQmFzZSA9IGV4cG9ydHMuUWluQmFzZVN0eWxlID0gZXhwb3J0cy5xaW5VcmxBc3NldCA9IGV4cG9ydHMucWluQXNzZXRVcmwgPSBleHBvcnRzLlFpbkFzc2V0ID0gdm9pZCAwO1xyXG52YXIgcWluX2Fzc2V0c18xID0gcmVxdWlyZShcIi4vcWluLWFzc2V0c1wiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluQXNzZXRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9hc3NldHNfMS5RaW5Bc3NldDsgfSB9KTtcclxudmFyIHFpbl9hc3NldHNfMiA9IHJlcXVpcmUoXCIuL3Fpbi1hc3NldHNcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInFpbkFzc2V0VXJsXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fYXNzZXRzXzIucWluQXNzZXRVcmw7IH0gfSk7XHJcbnZhciBxaW5fYXNzZXRzXzMgPSByZXF1aXJlKFwiLi9xaW4tYXNzZXRzXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJxaW5VcmxBc3NldFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2Fzc2V0c18zLnFpblVybEFzc2V0OyB9IH0pO1xyXG52YXIgcWluX2Jhc2Vfc3R5bGVfMSA9IHJlcXVpcmUoXCIuL3Fpbi1iYXNlLXN0eWxlXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5CYXNlU3R5bGVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9iYXNlX3N0eWxlXzEuUWluQmFzZVN0eWxlOyB9IH0pO1xyXG52YXIgcWluX2Jhc2VfMSA9IHJlcXVpcmUoXCIuL3Fpbi1iYXNlXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5CYXNlXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fYmFzZV8xLlFpbkJhc2U7IH0gfSk7XHJcbnZhciBxaW5fYm9vbGVhbl8xID0gcmVxdWlyZShcIi4vcWluLWJvb2xlYW5cIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkJvb2xlYW5cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9ib29sZWFuXzEuUWluQm9vbGVhbjsgfSB9KTtcclxudmFyIHFpbl9idXR0b25fMSA9IHJlcXVpcmUoXCIuL3Fpbi1idXR0b25cIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkJ1dHRvblwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2J1dHRvbl8xLlFpbkJ1dHRvbjsgfSB9KTtcclxudmFyIHFpbl9jb2x1bW5fMSA9IHJlcXVpcmUoXCIuL3Fpbi1jb2x1bW5cIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkNvbHVtblwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2NvbHVtbl8xLlFpbkNvbHVtbjsgfSB9KTtcclxudmFyIHFpbl9jb21ib18xID0gcmVxdWlyZShcIi4vcWluLWNvbWJvXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5Db21ib1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2NvbWJvXzEuUWluQ29tYm87IH0gfSk7XHJcbnZhciBxaW5fZGl2aWRlcl8xID0gcmVxdWlyZShcIi4vcWluLWRpdmlkZXJcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkRpdmlkZXJcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9kaXZpZGVyXzEuUWluRGl2aWRlcjsgfSB9KTtcclxudmFyIHFpbl9lZGl0XzEgPSByZXF1aXJlKFwiLi9xaW4tZWRpdFwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluRWRpdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2VkaXRfMS5RaW5FZGl0OyB9IH0pO1xyXG52YXIgcWluX2ZpZWxkXzEgPSByZXF1aXJlKFwiLi9xaW4tZmllbGRcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkZpZWxkXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fZmllbGRfMS5RaW5GaWVsZDsgfSB9KTtcclxudmFyIHFpbl9maWxlX3BhdGhfMSA9IHJlcXVpcmUoXCIuL3Fpbi1maWxlLXBhdGhcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkZpbGVQYXRoXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fZmlsZV9wYXRoXzEuUWluRmlsZVBhdGg7IH0gfSk7XHJcbnZhciBxaW5fZmlsZV9waWNrXzEgPSByZXF1aXJlKFwiLi9xaW4tZmlsZS1waWNrXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5GaWxlUGlja1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2ZpbGVfcGlja18xLlFpbkZpbGVQaWNrOyB9IH0pO1xyXG52YXIgcWluX2ZpbGVfdmlld18xID0gcmVxdWlyZShcIi4vcWluLWZpbGUtdmlld1wiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluRmlsZVZpZXdcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9maWxlX3ZpZXdfMS5RaW5GaWxlVmlldzsgfSB9KTtcclxudmFyIHFpbl9pY29uX2NlbGxfMSA9IHJlcXVpcmUoXCIuL3Fpbi1pY29uLWNlbGxcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkljb25DZWxsXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5faWNvbl9jZWxsXzEuUWluSWNvbkNlbGw7IH0gfSk7XHJcbnZhciBxaW5faWNvbl9waWNrXzEgPSByZXF1aXJlKFwiLi9xaW4taWNvbi1waWNrXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5JY29uUGlja1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2ljb25fcGlja18xLlFpbkljb25QaWNrOyB9IH0pO1xyXG52YXIgcWluX2ljb25fMSA9IHJlcXVpcmUoXCIuL3Fpbi1pY29uXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5JY29uXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5faWNvbl8xLlFpbkljb247IH0gfSk7XHJcbnZhciBxaW5faW50ZWdlcl8xID0gcmVxdWlyZShcIi4vcWluLWludGVnZXJcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkludGVnZXJcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9pbnRlZ2VyXzEuUWluSW50ZWdlcjsgfSB9KTtcclxudmFyIHFpbl9sYWJlbF8xID0gcmVxdWlyZShcIi4vcWluLWxhYmVsXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5MYWJlbFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2xhYmVsXzEuUWluTGFiZWw7IH0gfSk7XHJcbnZhciBxaW5fbGluZV8xID0gcmVxdWlyZShcIi4vcWluLWxpbmVcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkxpbmVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9saW5lXzEuUWluTGluZTsgfSB9KTtcclxudmFyIHFpbl9tdXRhbnRzXzEgPSByZXF1aXJlKFwiLi9xaW4tbXV0YW50c1wiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluTXV0YW50c1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX211dGFudHNfMS5RaW5NdXRhbnRzOyB9IH0pO1xyXG52YXIgcWluX211dGFudHNfMiA9IHJlcXVpcmUoXCIuL3Fpbi1tdXRhbnRzXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5NdXRhbnRzQXJtXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fbXV0YW50c18yLlFpbk11dGFudHNBcm07IH0gfSk7XHJcbnZhciBxaW5fcGFuZWxfMSA9IHJlcXVpcmUoXCIuL3Fpbi1wYW5lbFwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluUGFuZWxcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9wYW5lbF8xLlFpblBhbmVsOyB9IH0pO1xyXG52YXIgcWluX3BvcHVwXzEgPSByZXF1aXJlKFwiLi9xaW4tcG9wdXBcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpblBvcHVwXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fcG9wdXBfMS5RaW5Qb3B1cDsgfSB9KTtcclxudmFyIHFpbl9yb3dfMSA9IHJlcXVpcmUoXCIuL3Fpbi1yb3dcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpblJvd1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX3Jvd18xLlFpblJvdzsgfSB9KTtcclxudmFyIHFpbl9zY3JvbGxfMSA9IHJlcXVpcmUoXCIuL3Fpbi1zY3JvbGxcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpblNjcm9sbFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX3Njcm9sbF8xLlFpblNjcm9sbDsgfSB9KTtcclxudmFyIHFpbl9zcGFjZXJfMSA9IHJlcXVpcmUoXCIuL3Fpbi1zcGFjZXJcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpblNwYWNlclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX3NwYWNlcl8xLlFpblNwYWNlcjsgfSB9KTtcclxudmFyIHFpbl9zcGxpdHRlcl8xID0gcmVxdWlyZShcIi4vcWluLXNwbGl0dGVyXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5TcGxpdHRlclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX3NwbGl0dGVyXzEuUWluU3BsaXR0ZXI7IH0gfSk7XHJcbnZhciBxaW5fc3RhY2tfMSA9IHJlcXVpcmUoXCIuL3Fpbi1zdGFja1wiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluU3RhY2tcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9zdGFja18xLlFpblN0YWNrOyB9IH0pO1xyXG52YXIgcWluX3N0cmluZ18xID0gcmVxdWlyZShcIi4vcWluLXN0cmluZ1wiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluU3RyaW5nXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fc3RyaW5nXzEuUWluU3RyaW5nOyB9IH0pO1xyXG52YXIgcWluX3RhYmxlXzEgPSByZXF1aXJlKFwiLi9xaW4tdGFibGVcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpblRhYmxlXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fdGFibGVfMS5RaW5UYWJsZTsgfSB9KTtcclxudmFyIHFpbl90YWJzXzEgPSByZXF1aXJlKFwiLi9xaW4tdGFic1wiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluVGFic1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX3RhYnNfMS5RaW5UYWJzOyB9IH0pO1xyXG52YXIgcWluX3RpdGxlZF8xID0gcmVxdWlyZShcIi4vcWluLXRpdGxlZFwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluVGl0bGVkXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fdGl0bGVkXzEuUWluVGl0bGVkOyB9IH0pO1xyXG52YXIgcWluX3Rvb2xzXzEgPSByZXF1aXJlKFwiLi9xaW4tdG9vbHNcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpblRvb2xzXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fdG9vbHNfMS5RaW5Ub29sczsgfSB9KTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWxsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMucWluVXJsQXNzZXQgPSBleHBvcnRzLnFpbkFzc2V0VXJsID0gZXhwb3J0cy5RaW5Bc3NldCA9IHZvaWQgMDtcclxudmFyIFFpbkFzc2V0O1xyXG4oZnVuY3Rpb24gKFFpbkFzc2V0KSB7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMFwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTAucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMVwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTEucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMTBcIl0gPSBcImJhY2tncm91bmQtZGFyay0xMC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsxMVwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTExLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazEyXCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMTIucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMTNcIl0gPSBcImJhY2tncm91bmQtZGFyay0xMy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsxNFwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTE0LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazE1XCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMTUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMTZcIl0gPSBcImJhY2tncm91bmQtZGFyay0xNi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsxN1wiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTE3LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazE4XCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMTgucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMTlcIl0gPSBcImJhY2tncm91bmQtZGFyay0xOS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsyXCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsyMFwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTIwLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazIxXCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMjEucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMjJcIl0gPSBcImJhY2tncm91bmQtZGFyay0yMi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsyM1wiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTIzLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazI0XCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMjQucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMjVcIl0gPSBcImJhY2tncm91bmQtZGFyay0yNS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsyNlwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTI2LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazI3XCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMjcucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMjhcIl0gPSBcImJhY2tncm91bmQtZGFyay0yOC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsyOVwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTI5LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazNcIl0gPSBcImJhY2tncm91bmQtZGFyay0zLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazRcIl0gPSBcImJhY2tncm91bmQtZGFyay00LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazVcIl0gPSBcImJhY2tncm91bmQtZGFyay01LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazZcIl0gPSBcImJhY2tncm91bmQtZGFyay02LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazdcIl0gPSBcImJhY2tncm91bmQtZGFyay03LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazhcIl0gPSBcImJhY2tncm91bmQtZGFyay04LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazlcIl0gPSBcImJhY2tncm91bmQtZGFyay05LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFya1wiXSA9IFwiYmFja2dyb3VuZC1kYXJrLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQwXCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTAucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDFcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MTBcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMTAucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDExXCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTExLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQxMlwiXSA9IFwiYmFja2dyb3VuZC1saWdodC0xMi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MTNcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMTMucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDE0XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTE0LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQxNVwiXSA9IFwiYmFja2dyb3VuZC1saWdodC0xNS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MTZcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMTYucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDE3XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTE3LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQxOFwiXSA9IFwiYmFja2dyb3VuZC1saWdodC0xOC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MTlcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMTkucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDJcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MjBcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMjAucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDIxXCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTIxLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQyMlwiXSA9IFwiYmFja2dyb3VuZC1saWdodC0yMi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MjNcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMjMucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDI0XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTI0LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQyNVwiXSA9IFwiYmFja2dyb3VuZC1saWdodC0yNS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MjZcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMjYucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDI3XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTI3LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQyOFwiXSA9IFwiYmFja2dyb3VuZC1saWdodC0yOC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MjlcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMjkucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDNcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0NFwiXSA9IFwiYmFja2dyb3VuZC1saWdodC00LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQ1XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDZcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtNi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0N1wiXSA9IFwiYmFja2dyb3VuZC1saWdodC03LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQ4XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTgucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDlcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtOS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMFwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDFcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTEucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwxMFwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMTAucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwxMVwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMTEucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwxMlwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMTIucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwxM1wiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMTMucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwxNFwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMTQucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwxNVwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMTUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwxNlwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMTYucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwxN1wiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMTcucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwxOFwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMTgucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwxOVwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMTkucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwyXCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC0yLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMjBcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTIwLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMjFcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTIxLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMjJcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTIyLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMjNcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTIzLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMjRcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTI0LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMjVcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTI1LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMjZcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTI2LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMjdcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTI3LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMjhcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTI4LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMjlcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTI5LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsM1wiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDRcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTQucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWw1XCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC01LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsNlwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtNi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDdcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTcucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWw4XCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC04LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsOVwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtOS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbFwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkV4cGxvcmVyQXBwc1wiXSA9IFwiZXhwbG9yZXItYXBwcy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRXhwbG9yZXJDbWRzXCJdID0gXCJleHBsb3Jlci1jbWRzLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJFeHBsb3JlckRpclwiXSA9IFwiZXhwbG9yZXItZGlyLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJFeHBsb3JlckV4ZWNcIl0gPSBcImV4cGxvcmVyLWV4ZWMucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkV4cGxvcmVyRmlsZVwiXSA9IFwiZXhwbG9yZXItZmlsZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRXhwbG9yZXJJbWFnZVwiXSA9IFwiZXhwbG9yZXItaW1hZ2UucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkV4cGxvcmVyTW92aWVcIl0gPSBcImV4cGxvcmVyLW1vdmllLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJFeHBsb3Jlck11c2ljXCJdID0gXCJleHBsb3Jlci1tdXNpYy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRXhwbG9yZXJaaXBwZWRcIl0gPSBcImV4cGxvcmVyLXppcHBlZC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUFkZFwiXSA9IFwiZmFjZS1hZGQucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VBbHRXb3JrXCJdID0gXCJmYWNlLWFsdC13b3JrLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQXJyb3dEb3duXCJdID0gXCJmYWNlLWFycm93LWRvd24ucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VBcnJvd0xlZnRcIl0gPSBcImZhY2UtYXJyb3ctbGVmdC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUFycm93UmlnaHRcIl0gPSBcImZhY2UtYXJyb3ctcmlnaHQucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VBcnJvd1VwXCJdID0gXCJmYWNlLWFycm93LXVwLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQXR0YWNoXCJdID0gXCJmYWNlLWF0dGFjaC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUF6U29ydFwiXSA9IFwiZmFjZS1hei1zb3J0LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQmFnU2hvcHBpbmdcIl0gPSBcImZhY2UtYmFnLXNob3BwaW5nLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQmFnXCJdID0gXCJmYWNlLWJhZy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUJlbGxEaXNhYmxlXCJdID0gXCJmYWNlLWJlbGwtZGlzYWJsZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUJlbGxcIl0gPSBcImZhY2UtYmVsbC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUJldHdlZW5TcGFjZVwiXSA9IFwiZmFjZS1iZXR3ZWVuLXNwYWNlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQm9pbGVySG9tZVNtYXJ0XCJdID0gXCJmYWNlLWJvaWxlci1ob21lLXNtYXJ0LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQm90dG9tVG9vbGJhclwiXSA9IFwiZmFjZS1ib3R0b20tdG9vbGJhci5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUNVc2JcIl0gPSBcImZhY2UtYy11c2IucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VDYWxlbmRhclwiXSA9IFwiZmFjZS1jYWxlbmRhci5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUNhbWVyYURpc2FibGVcIl0gPSBcImZhY2UtY2FtZXJhLWRpc2FibGUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VDYW1lcmFcIl0gPSBcImZhY2UtY2FtZXJhLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQ2FuY2VsXCJdID0gXCJmYWNlLWNhbmNlbC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUNhcnRTaG9wcGluZ1wiXSA9IFwiZmFjZS1jYXJ0LXNob3BwaW5nLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQ2FydFwiXSA9IFwiZmFjZS1jYXJ0LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQ2hlY2tSYWRpb1wiXSA9IFwiZmFjZS1jaGVjay1yYWRpby5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUNoZWNrXCJdID0gXCJmYWNlLWNoZWNrLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQ2hlY2tlZFJhZGlvXCJdID0gXCJmYWNlLWNoZWNrZWQtcmFkaW8ucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VDaGlwU21hcnRwaG9uZVwiXSA9IFwiZmFjZS1jaGlwLXNtYXJ0cGhvbmUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VDaXJjbGVIYWxmU2hhcGVcIl0gPSBcImZhY2UtY2lyY2xlLWhhbGYtc2hhcGUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VDaXJjbGVTaGFwZVwiXSA9IFwiZmFjZS1jaXJjbGUtc2hhcGUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VDaXJjbGVcIl0gPSBcImZhY2UtY2lyY2xlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQ2xlYXJQdWxsXCJdID0gXCJmYWNlLWNsZWFyLXB1bGwucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VDbG9ja1NhbmRcIl0gPSBcImZhY2UtY2xvY2stc2FuZC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUNsb2NrXCJdID0gXCJmYWNlLWNsb2NrLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQ2xvc2VcIl0gPSBcImZhY2UtY2xvc2UucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VDb2dcIl0gPSBcImZhY2UtY29nLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQ29sc1ZpZXdcIl0gPSBcImZhY2UtY29scy12aWV3LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQ29tZm9ydGFibGVWaWV3XCJdID0gXCJmYWNlLWNvbWZvcnRhYmxlLXZpZXcucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VDb21wYXNzXCJdID0gXCJmYWNlLWNvbXBhc3MucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VDb25maXJtXCJdID0gXCJmYWNlLWNvbmZpcm0ucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VDb250YWN0XCJdID0gXCJmYWNlLWNvbnRhY3QucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VDb250cm9sXCJdID0gXCJmYWNlLWNvbnRyb2wucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VDb29rZXJIb21lU21hcnRcIl0gPSBcImZhY2UtY29va2VyLWhvbWUtc21hcnQucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VDb3B5XCJdID0gXCJmYWNlLWNvcHkucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VEYXlWaWV3XCJdID0gXCJmYWNlLWRheS12aWV3LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlRGVsXCJdID0gXCJmYWNlLWRlbC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZURvdWJsZVRhcFwiXSA9IFwiZmFjZS1kb3VibGUtdGFwLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlRG93bkNoZXZyb25QdXNoXCJdID0gXCJmYWNlLWRvd24tY2hldnJvbi1wdXNoLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlRG93blB1c2hcIl0gPSBcImZhY2UtZG93bi1wdXNoLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlRG93blRyZW5kaW5nXCJdID0gXCJmYWNlLWRvd24tdHJlbmRpbmcucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VEb3dubG9hZFNvZnR3YXJlXCJdID0gXCJmYWNlLWRvd25sb2FkLXNvZnR3YXJlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlRG93bmxvYWRcIl0gPSBcImZhY2UtZG93bmxvYWQucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VFbXB0eVRyYXNoXCJdID0gXCJmYWNlLWVtcHR5LXRyYXNoLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlRW5sYXJnZVwiXSA9IFwiZmFjZS1lbmxhcmdlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlRW50ZXJcIl0gPSBcImZhY2UtZW50ZXIucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VFcmFzZVwiXSA9IFwiZmFjZS1lcmFzZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUV4aXRcIl0gPSBcImZhY2UtZXhpdC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUV5ZURpc2FibGVcIl0gPSBcImZhY2UtZXllLWRpc2FibGUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VFeWVcIl0gPSBcImZhY2UtZXllLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlRmlsZVwiXSA9IFwiZmFjZS1maWxlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlRmlsdGVyXCJdID0gXCJmYWNlLWZpbHRlci5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUZpcnN0Um93XCJdID0gXCJmYWNlLWZpcnN0LXJvdy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUZvbGRlclwiXSA9IFwiZmFjZS1mb2xkZXIucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VGb3VuZFNlYXJjaFwiXSA9IFwiZmFjZS1mb3VuZC1zZWFyY2gucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VHZWFyXCJdID0gXCJmYWNlLWdlYXIucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VHbG9iZVwiXSA9IFwiZmFjZS1nbG9iZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUdyaWRWaWV3XCJdID0gXCJmYWNlLWdyaWQtdmlldy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUhTY3JvbGxcIl0gPSBcImZhY2UtaC1zY3JvbGwucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VIZWFydFwiXSA9IFwiZmFjZS1oZWFydC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUhlYXRIb21lU21hcnRcIl0gPSBcImZhY2UtaGVhdC1ob21lLXNtYXJ0LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlSGV4YWdvblNoYXBlXCJdID0gXCJmYWNlLWhleGFnb24tc2hhcGUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VIb21lXCJdID0gXCJmYWNlLWhvbWUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VIdW50UHJvZHVjdFwiXSA9IFwiZmFjZS1odW50LXByb2R1Y3QucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VJbWFnZVwiXSA9IFwiZmFjZS1pbWFnZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUluWm9vbVwiXSA9IFwiZmFjZS1pbi16b29tLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlS2l0VWlcIl0gPSBcImZhY2Uta2l0LXVpLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlTGFiZWxcIl0gPSBcImZhY2UtbGFiZWwucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VMYXN0Um93XCJdID0gXCJmYWNlLWxhc3Qtcm93LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlTGVmdENoZXZyb25QdXNoXCJdID0gXCJmYWNlLWxlZnQtY2hldnJvbi1wdXNoLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlTGVmdFB1c2hcIl0gPSBcImZhY2UtbGVmdC1wdXNoLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlTGVmdFRvb2xiYXJcIl0gPSBcImZhY2UtbGVmdC10b29sYmFyLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlTGlnaHRIb21lU21hcnRcIl0gPSBcImZhY2UtbGlnaHQtaG9tZS1zbWFydC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUxpbmtcIl0gPSBcImZhY2UtbGluay5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUxpc3RVc2VyXCJdID0gXCJmYWNlLWxpc3QtdXNlci5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUxpc3RWaWV3XCJdID0gXCJmYWNlLWxpc3Qtdmlldy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUxvYWRpbmdTZWFyY2hcIl0gPSBcImZhY2UtbG9hZGluZy1zZWFyY2gucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VMb2NrXCJdID0gXCJmYWNlLWxvY2sucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VNYWNoaW5lV2FzaEhvbWVTbWFydFwiXSA9IFwiZmFjZS1tYWNoaW5lLXdhc2gtaG9tZS1zbWFydC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZU1haWxcIl0gPSBcImZhY2UtbWFpbC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZU1hcERpc2FibGVcIl0gPSBcImZhY2UtbWFwLWRpc2FibGUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VNYXBcIl0gPSBcImZhY2UtbWFwLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlTWVudUxpbmVzXCJdID0gXCJmYWNlLW1lbnUtbGluZXMucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VNZXNzYWdlXCJdID0gXCJmYWNlLW1lc3NhZ2UucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VNaWNEaXNhYmxlXCJdID0gXCJmYWNlLW1pYy1kaXNhYmxlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlTWljXCJdID0gXCJmYWNlLW1pYy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZU1pbnVzXCJdID0gXCJmYWNlLW1pbnVzLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlTWlycm9yU2NyZWVuXCJdID0gXCJmYWNlLW1pcnJvci1zY3JlZW4ucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VNb250aFZpZXdcIl0gPSBcImZhY2UtbW9udGgtdmlldy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZU1vdXRoTm9TbWlsZVwiXSA9IFwiZmFjZS1tb3V0aC1uby1zbWlsZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZU1vdmllXCJdID0gXCJmYWNlLW1vdmllLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlTmV1dHJhbFNtaWxlXCJdID0gXCJmYWNlLW5ldXRyYWwtc21pbGUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VOZXdzXCJdID0gXCJmYWNlLW5ld3MucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VOb25lU21pbGVcIl0gPSBcImZhY2Utbm9uZS1zbWlsZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZU9Eb3duQ2hldnJvblB1c2hcIl0gPSBcImZhY2Utby1kb3duLWNoZXZyb24tcHVzaC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZU9MZWZ0Q2hldnJvblB1c2hcIl0gPSBcImZhY2Utby1sZWZ0LWNoZXZyb24tcHVzaC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZU9OZXh0VHJhY2tQbGF5XCJdID0gXCJmYWNlLW8tbmV4dC10cmFjay1wbGF5LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlT1ByZXZUcmFja1BsYXlcIl0gPSBcImZhY2Utby1wcmV2LXRyYWNrLXBsYXkucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VPUXVvdGVcIl0gPSBcImZhY2Utby1xdW90ZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZU9SaWdodENoZXZyb25QdXNoXCJdID0gXCJmYWNlLW8tcmlnaHQtY2hldnJvbi1wdXNoLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlT1NlbGVjdFwiXSA9IFwiZmFjZS1vLXNlbGVjdC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZU9VcENoZXZyb25QdXNoXCJdID0gXCJmYWNlLW8tdXAtY2hldnJvbi1wdXNoLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlT1ZvaWNlbWFpbFwiXSA9IFwiZmFjZS1vLXZvaWNlbWFpbC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZU9mZlNxdWFyZVRvZ2dsZVwiXSA9IFwiZmFjZS1vZmYtc3F1YXJlLXRvZ2dsZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZU9mZlRvZ2dsZVwiXSA9IFwiZmFjZS1vZmYtdG9nZ2xlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlT25Ub2dnbGVcIl0gPSBcImZhY2Utb24tdG9nZ2xlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlT3Blbk1vdXRoU21pbGVcIl0gPSBcImZhY2Utb3Blbi1tb3V0aC1zbWlsZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZU9wZW5TaWRlYmFyXCJdID0gXCJmYWNlLW9wZW4tc2lkZWJhci5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZU91dFpvb21cIl0gPSBcImZhY2Utb3V0LXpvb20ucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VQYXN0ZVwiXSA9IFwiZmFjZS1wYXN0ZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVBlbmNpbFwiXSA9IFwiZmFjZS1wZW5jaWwucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VQZXJzb25cIl0gPSBcImZhY2UtcGVyc29uLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlUGhvbmVEaXNhYmxlXCJdID0gXCJmYWNlLXBob25lLWRpc2FibGUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VQaG9uZVwiXSA9IFwiZmFjZS1waG9uZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVBpblwiXSA9IFwiZmFjZS1waW4ucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VQbHVnXCJdID0gXCJmYWNlLXBsdWcucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VQbHVzXCJdID0gXCJmYWNlLXBsdXMucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VQb2NrZXRcIl0gPSBcImZhY2UtcG9ja2V0LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlUG9rZW1vblwiXSA9IFwiZmFjZS1wb2tlbW9uLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlUG9sYXJvaWRcIl0gPSBcImZhY2UtcG9sYXJvaWQucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VQb2xsXCJdID0gXCJmYWNlLXBvbGwucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VQcmVzZW50YXRpb25cIl0gPSBcImZhY2UtcHJlc2VudGF0aW9uLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlUHJldlRyYWNrUGxheVwiXSA9IFwiZmFjZS1wcmV2LXRyYWNrLXBsYXkucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VQcmludGVyXCJdID0gXCJmYWNlLXByaW50ZXIucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VQcm9maWxlXCJdID0gXCJmYWNlLXByb2ZpbGUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VRclwiXSA9IFwiZmFjZS1xci5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVF1b3RlXCJdID0gXCJmYWNlLXF1b3RlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlUkRvd25DaGV2cm9uUHVzaFwiXSA9IFwiZmFjZS1yLWRvd24tY2hldnJvbi1wdXNoLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlUkxlZnRDaGV2cm9uUHVzaFwiXSA9IFwiZmFjZS1yLWxlZnQtY2hldnJvbi1wdXNoLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlUk5leHRUcmFja1BsYXlcIl0gPSBcImZhY2Utci1uZXh0LXRyYWNrLXBsYXkucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VSUHJldlRyYWNrUGxheVwiXSA9IFwiZmFjZS1yLXByZXYtdHJhY2stcGxheS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVJSZW1vdmVcIl0gPSBcImZhY2Utci1yZW1vdmUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VSUmlnaHRDaGV2cm9uUHVzaFwiXSA9IFwiZmFjZS1yLXJpZ2h0LWNoZXZyb24tcHVzaC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVJTZWxlY3RcIl0gPSBcImZhY2Utci1zZWxlY3QucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VSVXBDaGV2cm9uUHVzaFwiXSA9IFwiZmFjZS1yLXVwLWNoZXZyb24tcHVzaC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVJWb2ljZW1haWxcIl0gPSBcImZhY2Utci12b2ljZW1haWwucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VSYW1TbWFydHBob25lXCJdID0gXCJmYWNlLXJhbS1zbWFydHBob25lLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlUmF0aW9cIl0gPSBcImZhY2UtcmF0aW8ucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VSZWFkXCJdID0gXCJmYWNlLXJlYWQucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VSZWFkbWVcIl0gPSBcImZhY2UtcmVhZG1lLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlUmVjb3JkXCJdID0gXCJmYWNlLXJlY29yZC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVJlZG8yXCJdID0gXCJmYWNlLXJlZG8tMi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVJlZG9cIl0gPSBcImZhY2UtcmVkby5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVJlZnJpZ2VyYXRvckhvbWVTbWFydFwiXSA9IFwiZmFjZS1yZWZyaWdlcmF0b3ItaG9tZS1zbWFydC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVJlZ2lvblwiXSA9IFwiZmFjZS1yZWdpb24ucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VSZW1vdGVcIl0gPSBcImZhY2UtcmVtb3RlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlUmVtb3ZlVXNlclwiXSA9IFwiZmFjZS1yZW1vdmUtdXNlci5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVJlbW92ZVwiXSA9IFwiZmFjZS1yZW1vdmUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VSZW5hbWVcIl0gPSBcImZhY2UtcmVuYW1lLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlUmVvcmRlclwiXSA9IFwiZmFjZS1yZW9yZGVyLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlUmVwZWF0XCJdID0gXCJmYWNlLXJlcGVhdC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVJob21idXNTaGFwZVwiXSA9IFwiZmFjZS1yaG9tYnVzLXNoYXBlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlUmlnaHRDaGV2cm9uUHVzaFwiXSA9IFwiZmFjZS1yaWdodC1jaGV2cm9uLXB1c2gucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VSaWdodFB1c2hcIl0gPSBcImZhY2UtcmlnaHQtcHVzaC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVJpZ2h0U2lkZWJhclwiXSA9IFwiZmFjZS1yaWdodC1zaWRlYmFyLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlUmlnaHRUb29sYmFyXCJdID0gXCJmYWNlLXJpZ2h0LXRvb2xiYXIucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VSaW5nXCJdID0gXCJmYWNlLXJpbmcucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VSdWxlclwiXSA9IFwiZmFjZS1ydWxlci5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVNhZFNtaWxlXCJdID0gXCJmYWNlLXNhZC1zbWlsZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVNhdmVcIl0gPSBcImZhY2Utc2F2ZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVNjYW5cIl0gPSBcImZhY2Utc2Nhbi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVNjcmVlblwiXSA9IFwiZmFjZS1zY3JlZW4ucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTZWFyY2gyXCJdID0gXCJmYWNlLXNlYXJjaC0yLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU2VhcmNoXCJdID0gXCJmYWNlLXNlYXJjaC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVNlbGVjdFwiXSA9IFwiZmFjZS1zZWxlY3QucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTZW5kXCJdID0gXCJmYWNlLXNlbmQucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTZXJ2ZXJcIl0gPSBcImZhY2Utc2VydmVyLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU2VydmVybGVzc1wiXSA9IFwiZmFjZS1zZXJ2ZXJsZXNzLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU2V0dGluZ3NcIl0gPSBcImZhY2Utc2V0dGluZ3MucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTaGFrZVNtYXJ0cGhvbmVcIl0gPSBcImZhY2Utc2hha2Utc21hcnRwaG9uZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVNoYXJlMlwiXSA9IFwiZmFjZS1zaGFyZS0yLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU2hhcmVcIl0gPSBcImZhY2Utc2hhcmUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTaGllbGQyXCJdID0gXCJmYWNlLXNoaWVsZC0yLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU2hpZWxkXCJdID0gXCJmYWNlLXNoaWVsZC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVNob3J0Y3V0XCJdID0gXCJmYWNlLXNob3J0Y3V0LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU2hvdFNjcmVlblwiXSA9IFwiZmFjZS1zaG90LXNjcmVlbi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVNocmlua1wiXSA9IFwiZmFjZS1zaHJpbmsucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTaHV0dGVyc3RvY2tcIl0gPSBcImZhY2Utc2h1dHRlcnN0b2NrLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU2lkZWJhclwiXSA9IFwiZmFjZS1zaWRlYmFyLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU2lnbmFsXCJdID0gXCJmYWNlLXNpZ25hbC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVNpbmdsZVRhcFwiXSA9IFwiZmFjZS1zaW5nbGUtdGFwLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU2l6ZVwiXSA9IFwiZmFjZS1zaXplLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU2tldGNoXCJdID0gXCJmYWNlLXNrZXRjaC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVNsYWNrXCJdID0gXCJmYWNlLXNsYWNrLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU2xlZXBcIl0gPSBcImZhY2Utc2xlZXAucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTbWFydHBob25lXCJdID0gXCJmYWNlLXNtYXJ0cGhvbmUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTbWlsZVwiXSA9IFwiZmFjZS1zbWlsZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVNwZWFrZXJEaXNhYmxlXCJdID0gXCJmYWNlLXNwZWFrZXItZGlzYWJsZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVNwZWFrZXJcIl0gPSBcImZhY2Utc3BlYWtlci5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVNwZWN0cnVtXCJdID0gXCJmYWNlLXNwZWN0cnVtLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU3Bpbm5lckFsdFR3b1wiXSA9IFwiZmFjZS1zcGlubmVyLWFsdC10d28ucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTcGlubmVyQWx0XCJdID0gXCJmYWNlLXNwaW5uZXItYWx0LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU3Bpbm5lclR3b1wiXSA9IFwiZmFjZS1zcGlubmVyLXR3by5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVNwaW5uZXJcIl0gPSBcImZhY2Utc3Bpbm5lci5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVNwbGl0Tm90Vmlld1wiXSA9IFwiZmFjZS1zcGxpdC1ub3Qtdmlldy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVNwbGl0Vmlld0hvcml6b250YWxcIl0gPSBcImZhY2Utc3BsaXQtdmlldy1ob3Jpem9udGFsLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU3BsaXRWaWV3VmVydGljYWxcIl0gPSBcImZhY2Utc3BsaXQtdmlldy12ZXJ0aWNhbC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVNwbGl0Vmlld1wiXSA9IFwiZmFjZS1zcGxpdC12aWV3LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU3F1YXJlU2hhcGVcIl0gPSBcImZhY2Utc3F1YXJlLXNoYXBlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU3F1YXJlVG9nZ2xlXCJdID0gXCJmYWNlLXNxdWFyZS10b2dnbGUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTcXVhcmVcIl0gPSBcImZhY2Utc3F1YXJlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU3RhY2tcIl0gPSBcImZhY2Utc3RhY2sucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTdGFyXCJdID0gXCJmYWNlLXN0YXIucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTdGFya1wiXSA9IFwiZmFjZS1zdGFyay5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVN0b3B3YXRjaFwiXSA9IFwiZmFjZS1zdG9wd2F0Y2gucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTdG9yaWVzXCJdID0gXCJmYWNlLXN0b3JpZXMucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTdHVkaW9cIl0gPSBcImZhY2Utc3R1ZGlvLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU3R5bGVcIl0gPSBcImZhY2Utc3R5bGUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTdW5cIl0gPSBcImZhY2Utc3VuLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU3VwcG9ydFwiXSA9IFwiZmFjZS1zdXBwb3J0LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU3dhcFwiXSA9IFwiZmFjZS1zd2FwLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU3dlZGVuXCJdID0gXCJmYWNlLXN3ZWRlbi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVN3aXNzXCJdID0gXCJmYWNlLXN3aXNzLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU3luY1wiXSA9IFwiZmFjZS1zeW5jLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVGFiXCJdID0gXCJmYWNlLXRhYi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVRhZ1wiXSA9IFwiZmFjZS10YWcucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VUYWxseVwiXSA9IFwiZmFjZS10YWxseS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVRlbXBsYXRlXCJdID0gXCJmYWNlLXRlbXBsYXRlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVGVubmlzXCJdID0gXCJmYWNlLXRlbm5pcy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVRlcm1pbmFsXCJdID0gXCJmYWNlLXRlcm1pbmFsLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVGVycmFpblwiXSA9IFwiZmFjZS10ZXJyYWluLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVGhlcm1vbWV0ZXJcIl0gPSBcImZhY2UtdGhlcm1vbWV0ZXIucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VUaGVybW9zdGF0XCJdID0gXCJmYWNlLXRoZXJtb3N0YXQucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VUaWtjb2RlXCJdID0gXCJmYWNlLXRpa2NvZGUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VUaW1lXCJdID0gXCJmYWNlLXRpbWUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VUaW1lbGFwc2VcIl0gPSBcImZhY2UtdGltZWxhcHNlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVGltZXJcIl0gPSBcImZhY2UtdGltZXIucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VUb2RheVwiXSA9IFwiZmFjZS10b2RheS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVRvb2xib3hcIl0gPSBcImZhY2UtdG9vbGJveC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVRvcFRvb2xiYXJcIl0gPSBcImZhY2UtdG9wLXRvb2xiYXIucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VUb3VjaHBhZFwiXSA9IFwiZmFjZS10b3VjaHBhZC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVRyYWNrXCJdID0gXCJmYWNlLXRyYWNrLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVHJhbnNjcmlwdFwiXSA9IFwiZmFjZS10cmFuc2NyaXB0LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVHJhc2gyXCJdID0gXCJmYWNlLXRyYXNoLTIucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VUcmFzaFwiXSA9IFwiZmFjZS10cmFzaC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVRyZWVcIl0gPSBcImZhY2UtdHJlZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVRyZWVzXCJdID0gXCJmYWNlLXRyZWVzLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVHJlbGxvXCJdID0gXCJmYWNlLXRyZWxsby5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVRyZW5kaW5nXCJdID0gXCJmYWNlLXRyZW5kaW5nLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVHJpYW5nbGVTaGFwZVwiXSA9IFwiZmFjZS10cmlhbmdsZS1zaGFwZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVRyb3BoeVwiXSA9IFwiZmFjZS10cm9waHkucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VUdlwiXSA9IFwiZmFjZS10di5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVR3aWxpb1wiXSA9IFwiZmFjZS10d2lsaW8ucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VUd2l0dGVyXCJdID0gXCJmYWNlLXR3aXR0ZXIucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VVbWJyZWxsYVwiXSA9IFwiZmFjZS11bWJyZWxsYS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVVuYXZhaWxhYmxlXCJdID0gXCJmYWNlLXVuYXZhaWxhYmxlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVW5ibG9ja1wiXSA9IFwiZmFjZS11bmJsb2NrLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVW5kbzJcIl0gPSBcImZhY2UtdW5kby0yLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVW5kb1wiXSA9IFwiZmFjZS11bmRvLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVW5mb2xkXCJdID0gXCJmYWNlLXVuZm9sZC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVVubGlua1wiXSA9IFwiZmFjZS11bmxpbmsucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VVbmxvY2tcIl0gPSBcImZhY2UtdW5sb2NrLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVW5zcGxhc2hcIl0gPSBcImZhY2UtdW5zcGxhc2gucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VVcENoZXZyb25QdXNoXCJdID0gXCJmYWNlLXVwLWNoZXZyb24tcHVzaC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVVwUHVzaFwiXSA9IFwiZmFjZS11cC1wdXNoLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVXBsb2FkU29mdHdhcmVcIl0gPSBcImZhY2UtdXBsb2FkLXNvZnR3YXJlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVXBsb2FkXCJdID0gXCJmYWNlLXVwbG9hZC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVVwc2lkZVNtaWxlXCJdID0gXCJmYWNlLXVwc2lkZS1zbWlsZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVVzYlwiXSA9IFwiZmFjZS11c2IucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VVc2VyQWRkXCJdID0gXCJmYWNlLXVzZXItYWRkLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVXNlclwiXSA9IFwiZmFjZS11c2VyLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVXNlcmxhbmVcIl0gPSBcImZhY2UtdXNlcmxhbmUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VWQmV0d2VlblNwYWNlXCJdID0gXCJmYWNlLXYtYmV0d2Vlbi1zcGFjZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVZTY3JvbGxcIl0gPSBcImZhY2Utdi1zY3JvbGwucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VWZXJ0aWNhbFN3YXBcIl0gPSBcImZhY2UtdmVydGljYWwtc3dhcC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVZpbnlsXCJdID0gXCJmYWNlLXZpbnlsLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVm9pY2VtYWlsXCJdID0gXCJmYWNlLXZvaWNlbWFpbC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVZvbHVtZVwiXSA9IFwiZmFjZS12b2x1bWUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VXZWJjYW1cIl0gPSBcImZhY2Utd2ViY2FtLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlV2Vic2l0ZVwiXSA9IFwiZmFjZS13ZWJzaXRlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlV2lkZVNjcmVlblwiXSA9IFwiZmFjZS13aWRlLXNjcmVlbi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVdpZmlEaXNhYmxlXCJdID0gXCJmYWNlLXdpZmktZGlzYWJsZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVdpZmlcIl0gPSBcImZhY2Utd2lmaS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVdpbmRvd3NcIl0gPSBcImZhY2Utd2luZG93cy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVlpbnlhbmdcIl0gPSBcImZhY2UteWlueWFuZy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVlvdXR1YmVcIl0gPSBcImZhY2UteW91dHViZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVphU29ydFwiXSA9IFwiZmFjZS16YS1zb3J0LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlWmVpdFwiXSA9IFwiZmFjZS16ZWl0LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlWmlnemFnU2hhcGVcIl0gPSBcImZhY2UtemlnemFnLXNoYXBlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYXZpY29uXCJdID0gXCJmYXZpY29uLmljb1wiO1xyXG4gICAgUWluQXNzZXRbXCJKb2JiZXJDbG9zZVwiXSA9IFwiam9iYmVyLWNsb3NlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJKb2JiZXJNYXhpbWl6ZVwiXSA9IFwiam9iYmVyLW1heGltaXplLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJKb2JiZXJNZW51XCJdID0gXCJqb2JiZXItbWVudS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiSm9iYmVyTWluaW1pemVcIl0gPSBcImpvYmJlci1taW5pbWl6ZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiSm9iYmVyUmVzaXplXCJdID0gXCJqb2JiZXItcmVzaXplLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJKb2JiZXJTdGF0dXNFcnJvclwiXSA9IFwiam9iYmVyLXN0YXR1cy1lcnJvci5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiSm9iYmVyU3RhdHVzSW5mb1wiXSA9IFwiam9iYmVyLXN0YXR1cy1pbmZvLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJMb2dpbktleVwiXSA9IFwibG9naW4ta2V5LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJNZW51RGV2dG9vbHNcIl0gPSBcIm1lbnUtZGV2dG9vbHMuaWNvXCI7XHJcbiAgICBRaW5Bc3NldFtcIlFpbnBlbDQ4XCJdID0gXCJxaW5wZWwtNDgucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIlFpbnBlbFwiXSA9IFwicWlucGVsLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJTb3VyY2VTYW5zUHJvXCJdID0gXCJzb3VyY2Utc2Fucy1wcm8udHRmXCI7XHJcbiAgICBRaW5Bc3NldFtcIlNvdXJjZVNlcmlmUHJvXCJdID0gXCJzb3VyY2Utc2VyaWYtcHJvLnR0ZlwiO1xyXG59KShRaW5Bc3NldCA9IGV4cG9ydHMuUWluQXNzZXQgfHwgKGV4cG9ydHMuUWluQXNzZXQgPSB7fSkpO1xyXG5mdW5jdGlvbiBxaW5Bc3NldFVybChhc3NldCkge1xyXG4gICAgcmV0dXJuIFwiL2FwcC9xaW5wZWwtYXBwL2Fzc2V0cy9cIiArIGFzc2V0O1xyXG59XHJcbmV4cG9ydHMucWluQXNzZXRVcmwgPSBxaW5Bc3NldFVybDtcclxuZnVuY3Rpb24gcWluVXJsQXNzZXQodXJsKSB7XHJcbiAgICBjb25zdCBhc3NldCA9IHVybC5zdWJzdHJpbmcodXJsLmxhc3RJbmRleE9mKFwiL1wiKSArIDEpO1xyXG4gICAgcmV0dXJuIGFzc2V0O1xyXG59XHJcbmV4cG9ydHMucWluVXJsQXNzZXQgPSBxaW5VcmxBc3NldDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWFzc2V0cy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlFpbkJhc2VTdHlsZSA9IHZvaWQgMDtcclxuY29uc3QgcWlucGVsX3Jlc18xID0gcmVxdWlyZShcInFpbnBlbC1yZXNcIik7XHJcbmNsYXNzIFFpbkJhc2VTdHlsZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5fZWwgPSBlbGVtZW50O1xyXG4gICAgfVxyXG4gICAgcHV0QXNCb2R5KCkge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5fZWwpO1xyXG4gICAgICAgIHFpbnBlbF9yZXNfMS5RaW5Ta2luLnN0eWxlQXNCb2R5KHRoaXMuX2VsKTtcclxuICAgIH1cclxuICAgIGRlbEFzQm9keSgpIHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuX2VsKTtcclxuICAgIH1cclxuICAgIHB1dEFzV2hvbGUoKSB7XHJcbiAgICAgICAgdGhpcy5wdXRBc1Bvc2l0aW9uQWJzb2x1dGUoKTtcclxuICAgICAgICB0aGlzLnB1dEFzQm91bmRzKDAsIDAsIDAsIDApO1xyXG4gICAgfVxyXG4gICAgcHV0QXNFZGl0KCkge1xyXG4gICAgICAgIHFpbnBlbF9yZXNfMS5RaW5Ta2luLnN0eWxlQXNFZGl0KHRoaXMuX2VsKTtcclxuICAgICAgICB0aGlzLl9lbC50YWJJbmRleCA9IDA7XHJcbiAgICB9XHJcbiAgICBwdXRBc1Njcm9sbCgpIHtcclxuICAgICAgICB0aGlzLl9lbC5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiO1xyXG4gICAgfVxyXG4gICAgcHV0QXNNYXJnaW4obWFyZ2luKSB7XHJcbiAgICAgICAgdGhpcy5fZWwuc3R5bGUubWFyZ2luID0gdGhpcy5nZXRQaXhlbHNPckluaXRpYWwobWFyZ2luKTtcclxuICAgIH1cclxuICAgIHB1dEFzTWFyZ2luVG9wKG1hcmdpbikge1xyXG4gICAgICAgIHRoaXMuX2VsLnN0eWxlLm1hcmdpblRvcCA9IHRoaXMuZ2V0UGl4ZWxzT3JJbml0aWFsKG1hcmdpbik7XHJcbiAgICB9XHJcbiAgICBwdXRBc01hcmdpbkJvdHRvbShtYXJnaW4pIHtcclxuICAgICAgICB0aGlzLl9lbC5zdHlsZS5tYXJnaW5Cb3R0b20gPSB0aGlzLmdldFBpeGVsc09ySW5pdGlhbChtYXJnaW4pO1xyXG4gICAgfVxyXG4gICAgcHV0QXNNYXJnaW5MZWZ0KG1hcmdpbikge1xyXG4gICAgICAgIHRoaXMuX2VsLnN0eWxlLm1hcmdpbkxlZnQgPSB0aGlzLmdldFBpeGVsc09ySW5pdGlhbChtYXJnaW4pO1xyXG4gICAgfVxyXG4gICAgcHV0QXNNYXJnaW5SaWdodChtYXJnaW4pIHtcclxuICAgICAgICB0aGlzLl9lbC5zdHlsZS5tYXJnaW5SaWdodCA9IHRoaXMuZ2V0UGl4ZWxzT3JJbml0aWFsKG1hcmdpbik7XHJcbiAgICB9XHJcbiAgICBwdXRBc1BhZGRpbmcocGFkZGluZykge1xyXG4gICAgICAgIHRoaXMuX2VsLnN0eWxlLnBhZGRpbmcgPSB0aGlzLmdldFBpeGVsc09ySW5pdGlhbChwYWRkaW5nKTtcclxuICAgIH1cclxuICAgIHB1dEFzUGFkZGluZ1RvcChwYWRkaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fZWwuc3R5bGUucGFkZGluZ1RvcCA9IHRoaXMuZ2V0UGl4ZWxzT3JJbml0aWFsKHBhZGRpbmcpO1xyXG4gICAgfVxyXG4gICAgcHV0QXNQYWRkaW5nQm90dG9tKHBhZGRpbmcpIHtcclxuICAgICAgICB0aGlzLl9lbC5zdHlsZS5wYWRkaW5nQm90dG9tID0gdGhpcy5nZXRQaXhlbHNPckluaXRpYWwocGFkZGluZyk7XHJcbiAgICB9XHJcbiAgICBwdXRBc1BhZGRpbmdMZWZ0KHBhZGRpbmcpIHtcclxuICAgICAgICB0aGlzLl9lbC5zdHlsZS5wYWRkaW5nTGVmdCA9IHRoaXMuZ2V0UGl4ZWxzT3JJbml0aWFsKHBhZGRpbmcpO1xyXG4gICAgfVxyXG4gICAgcHV0QXNQYWRkaW5nUmlnaHQocGFkZGluZykge1xyXG4gICAgICAgIHRoaXMuX2VsLnN0eWxlLnBhZGRpbmdSaWdodCA9IHRoaXMuZ2V0UGl4ZWxzT3JJbml0aWFsKHBhZGRpbmcpO1xyXG4gICAgfVxyXG4gICAgcHV0QXNCb3JkZXIodGhpY2ssIGNvbG9yID0gcWlucGVsX3Jlc18xLlFpblNraW4uc3R5bGVzLkNvbG9yRm9yZWdyb3VuZCwgc3R5bGUgPSBcInNvbGlkXCIpIHtcclxuICAgICAgICBpZiAodGhpY2spIHtcclxuICAgICAgICAgICAgdGhpcy5fZWwuc3R5bGUuYm9yZGVyID0gdGhpY2sgKyBcInB4IFwiICsgc3R5bGUgKyBcIiBcIiArIGNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fZWwuc3R5bGUuYm9yZGVyID0gXCJub25lXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHV0QXNCb3JkZXJUb3AodGhpY2ssIGNvbG9yID0gcWlucGVsX3Jlc18xLlFpblNraW4uc3R5bGVzLkNvbG9yRm9yZWdyb3VuZCwgc3R5bGUgPSBcInNvbGlkXCIpIHtcclxuICAgICAgICBpZiAodGhpY2spIHtcclxuICAgICAgICAgICAgdGhpcy5fZWwuc3R5bGUuYm9yZGVyVG9wID0gdGhpY2sgKyBcInB4IFwiICsgc3R5bGUgKyBcIiBcIiArIGNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fZWwuc3R5bGUuYm9yZGVyVG9wID0gXCJub25lXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHV0QXNCb3JkZXJCb3R0b20odGhpY2ssIGNvbG9yID0gcWlucGVsX3Jlc18xLlFpblNraW4uc3R5bGVzLkNvbG9yRm9yZWdyb3VuZCwgc3R5bGUgPSBcInNvbGlkXCIpIHtcclxuICAgICAgICBpZiAodGhpY2spIHtcclxuICAgICAgICAgICAgdGhpcy5fZWwuc3R5bGUuYm9yZGVyQm90dG9tID0gdGhpY2sgKyBcInB4IFwiICsgc3R5bGUgKyBcIiBcIiArIGNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fZWwuc3R5bGUuYm9yZGVyQm90dG9tID0gXCJub25lXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHV0QXNCb3JkZXJMZWZ0KHRoaWNrLCBjb2xvciA9IHFpbnBlbF9yZXNfMS5RaW5Ta2luLnN0eWxlcy5Db2xvckZvcmVncm91bmQsIHN0eWxlID0gXCJzb2xpZFwiKSB7XHJcbiAgICAgICAgaWYgKHRoaWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2VsLnN0eWxlLmJvcmRlckxlZnQgPSB0aGljayArIFwicHggXCIgKyBzdHlsZSArIFwiIFwiICsgY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9lbC5zdHlsZS5ib3JkZXJMZWZ0ID0gXCJub25lXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHV0QXNCb3JkZXJSaWdodCh0aGljaywgY29sb3IgPSBxaW5wZWxfcmVzXzEuUWluU2tpbi5zdHlsZXMuQ29sb3JGb3JlZ3JvdW5kLCBzdHlsZSA9IFwic29saWRcIikge1xyXG4gICAgICAgIGlmICh0aGljaykge1xyXG4gICAgICAgICAgICB0aGlzLl9lbC5zdHlsZS5ib3JkZXJSaWdodCA9IHRoaWNrICsgXCJweCBcIiArIHN0eWxlICsgXCIgXCIgKyBjb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2VsLnN0eWxlLmJvcmRlclJpZ2h0ID0gXCJub25lXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHV0QXNEaXNwbGF5RmxleCgpIHtcclxuICAgICAgICB0aGlzLl9lbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICB9XHJcbiAgICBwdXRBc0Rpc3BsYXlJbmxpbmUoKSB7XHJcbiAgICAgICAgdGhpcy5fZWwuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCI7XHJcbiAgICB9XHJcbiAgICBwdXRBc0Rpc3BsYXlJbmxpbmVCbG9jaygpIHtcclxuICAgICAgICB0aGlzLl9lbC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuICAgIH1cclxuICAgIHB1dEFzUG9zaXRpb25TdGF0aWMoKSB7XHJcbiAgICAgICAgdGhpcy5fZWwuc3R5bGUucG9zaXRpb24gPSBcInN0YXRpY1wiO1xyXG4gICAgfVxyXG4gICAgcHV0QXNQb3NpdGlvbkFic29sdXRlKCkge1xyXG4gICAgICAgIHRoaXMuX2VsLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgfVxyXG4gICAgcHV0QXNQb3NpdGlvbkZpeGVkKCkge1xyXG4gICAgICAgIHRoaXMuX2VsLnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xyXG4gICAgfVxyXG4gICAgcHV0QXNQb3NpdGlvblJlbGF0aXZlKCkge1xyXG4gICAgICAgIHRoaXMuX2VsLnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xyXG4gICAgfVxyXG4gICAgcHV0QXNQb3NpdGlvblN0aGlja3koKSB7XHJcbiAgICAgICAgdGhpcy5fZWwuc3R5bGUucG9zaXRpb24gPSBcInN0aGlja3lcIjtcclxuICAgIH1cclxuICAgIHB1dEFzUG9zaXRpb25Jbml0aWFsKCkge1xyXG4gICAgICAgIHRoaXMuX2VsLnN0eWxlLnBvc2l0aW9uID0gXCJpbml0aWFsXCI7XHJcbiAgICB9XHJcbiAgICBwdXRBc0ZsZXhEaXJlY3Rpb25Sb3coKSB7XHJcbiAgICAgICAgdGhpcy5fZWwuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwicm93XCI7XHJcbiAgICB9XHJcbiAgICBwdXRBc0ZsZXhEaXJlY3Rpb25Sb3dSZXZlcnNlKCkge1xyXG4gICAgICAgIHRoaXMuX2VsLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcInJvdy1yZXZlcnNlXCI7XHJcbiAgICB9XHJcbiAgICBwdXRBc0ZsZXhEaXJlY3Rpb25Db2x1bW4oKSB7XHJcbiAgICAgICAgdGhpcy5fZWwuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwiY29sdW1uXCI7XHJcbiAgICB9XHJcbiAgICBwdXRBc0ZsZXhEaXJlY3Rpb25Db2x1bW5SZXZlcnNlKCkge1xyXG4gICAgICAgIHRoaXMuX2VsLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcImNvbHVtbi1yZXZlcnNlXCI7XHJcbiAgICB9XHJcbiAgICBwdXRBc0ZsZXhXcmFwKCkge1xyXG4gICAgICAgIHRoaXMuX2VsLnN0eWxlLmZsZXhXcmFwID0gXCJ3cmFwXCI7XHJcbiAgICB9XHJcbiAgICBwdXRBc0ZsZXhXcmFwTm90KCkge1xyXG4gICAgICAgIHRoaXMuX2VsLnN0eWxlLmZsZXhXcmFwID0gXCJub3dyYXBcIjtcclxuICAgIH1cclxuICAgIHB1dEFzRmxleFdyYXBSZXZlcnNlKCkge1xyXG4gICAgICAgIHRoaXMuX2VsLnN0eWxlLmZsZXhXcmFwID0gXCJ3cmFwLXJldmVyc2VcIjtcclxuICAgIH1cclxuICAgIHB1dEFzRmxleE1pbigpIHtcclxuICAgICAgICB0aGlzLl9lbC5zdHlsZS5mbGV4ID0gXCJub25lXCI7XHJcbiAgICB9XHJcbiAgICBwdXRBc0ZsZXhNYXgoKSB7XHJcbiAgICAgICAgdGhpcy5fZWwuc3R5bGUuZmxleCA9IFwiYXV0b1wiO1xyXG4gICAgfVxyXG4gICAgcHV0QXNBbGxDZW50ZXJlZCgpIHtcclxuICAgICAgICB0aGlzLl9lbC5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xyXG4gICAgICAgIHRoaXMuX2VsLnN0eWxlLmFsaWduSXRlbXMgPSBcImNlbnRlclwiO1xyXG4gICAgICAgIHRoaXMuX2VsLnN0eWxlLmFsaWduQ29udGVudCA9IFwiY2VudGVyXCI7XHJcbiAgICAgICAgdGhpcy5fZWwuc3R5bGUudmVydGljYWxBbGlnbiA9IFwibWlkZGxlXCI7XHJcbiAgICB9XHJcbiAgICBwdXRBc0JvdW5kcyh0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnQpIHtcclxuICAgICAgICB0aGlzLl9lbC5zdHlsZS50b3AgPSB0aGlzLmdldFBpeGVsc09ySW5pdGlhbCh0b3ApO1xyXG4gICAgICAgIHRoaXMuX2VsLnN0eWxlLnJpZ2h0ID0gdGhpcy5nZXRQaXhlbHNPckluaXRpYWwocmlnaHQpO1xyXG4gICAgICAgIHRoaXMuX2VsLnN0eWxlLmJvdHRvbSA9IHRoaXMuZ2V0UGl4ZWxzT3JJbml0aWFsKGJvdHRvbSk7XHJcbiAgICAgICAgdGhpcy5fZWwuc3R5bGUubGVmdCA9IHRoaXMuZ2V0UGl4ZWxzT3JJbml0aWFsKGxlZnQpO1xyXG4gICAgfVxyXG4gICAgcHV0QXNXaWR0aCh3aWR0aCkge1xyXG4gICAgICAgIHRoaXMuX2VsLnN0eWxlLndpZHRoID0gdGhpcy5nZXRQaXhlbHNPckluaXRpYWwod2lkdGgpO1xyXG4gICAgfVxyXG4gICAgcHV0QXNIZWlnaHQoaGVpZ2h0KSB7XHJcbiAgICAgICAgdGhpcy5fZWwuc3R5bGUuaGVpZ2h0ID0gdGhpcy5nZXRQaXhlbHNPckluaXRpYWwoaGVpZ2h0KTtcclxuICAgIH1cclxuICAgIHB1dEFzU2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgdGhpcy5fZWwuc3R5bGUud2lkdGggPSB0aGlzLmdldFBpeGVsc09ySW5pdGlhbCh3aWR0aCk7XHJcbiAgICAgICAgdGhpcy5fZWwuc3R5bGUuaGVpZ2h0ID0gdGhpcy5nZXRQaXhlbHNPckluaXRpYWwoaGVpZ2h0KTtcclxuICAgIH1cclxuICAgIHB1dEFzTWluV2lkdGgod2lkdGgpIHtcclxuICAgICAgICB0aGlzLl9lbC5zdHlsZS5taW5XaWR0aCA9IHRoaXMuZ2V0UGl4ZWxzT3JJbml0aWFsKHdpZHRoKTtcclxuICAgIH1cclxuICAgIHB1dEFzTWluSGVpZ2h0KGhlaWdodCkge1xyXG4gICAgICAgIHRoaXMuX2VsLnN0eWxlLm1pbkhlaWdodCA9IHRoaXMuZ2V0UGl4ZWxzT3JJbml0aWFsKGhlaWdodCk7XHJcbiAgICB9XHJcbiAgICBwdXRBc01pblNpemUod2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIHRoaXMuX2VsLnN0eWxlLm1pbldpZHRoID0gdGhpcy5nZXRQaXhlbHNPckluaXRpYWwod2lkdGgpO1xyXG4gICAgICAgIHRoaXMuX2VsLnN0eWxlLm1pbkhlaWdodCA9IHRoaXMuZ2V0UGl4ZWxzT3JJbml0aWFsKGhlaWdodCk7XHJcbiAgICB9XHJcbiAgICBwdXRBc01heFdpZHRoKHdpZHRoKSB7XHJcbiAgICAgICAgdGhpcy5fZWwuc3R5bGUubWF4V2lkdGggPSB0aGlzLmdldFBpeGVsc09ySW5pdGlhbCh3aWR0aCk7XHJcbiAgICB9XHJcbiAgICBwdXRBc01heEhlaWdodChoZWlnaHQpIHtcclxuICAgICAgICB0aGlzLl9lbC5zdHlsZS5tYXhIZWlnaHQgPSB0aGlzLmdldFBpeGVsc09ySW5pdGlhbChoZWlnaHQpO1xyXG4gICAgfVxyXG4gICAgcHV0QXNNYXhTaXplKHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICB0aGlzLl9lbC5zdHlsZS5tYXhXaWR0aCA9IHRoaXMuZ2V0UGl4ZWxzT3JJbml0aWFsKHdpZHRoKTtcclxuICAgICAgICB0aGlzLl9lbC5zdHlsZS5tYXhIZWlnaHQgPSB0aGlzLmdldFBpeGVsc09ySW5pdGlhbChoZWlnaHQpO1xyXG4gICAgfVxyXG4gICAgcHV0QXNGb3JlZ3JvdW5kKGZvcmVncm91bmQpIHtcclxuICAgICAgICB0aGlzLl9lbC5zdHlsZS5jb2xvciA9IGZvcmVncm91bmQ7XHJcbiAgICB9XHJcbiAgICBwdXRBc0JhY2tncm91bmQoYmFja2dyb3VuZCkge1xyXG4gICAgICAgIHRoaXMuX2VsLnN0eWxlLmJhY2tncm91bmQgPSBiYWNrZ3JvdW5kO1xyXG4gICAgfVxyXG4gICAgcHV0QXNCYWNrQXNzZXQoYXNzZXQpIHtcclxuICAgICAgICB0aGlzLl9lbC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnL2FwcC9xaW5wZWwtYXBwL2Fzc2V0cy9cIiArIGFzc2V0ICsgXCInKVwiO1xyXG4gICAgfVxyXG4gICAgcHV0QXNCYWNrSW5pdGlhbCgpIHtcclxuICAgICAgICB0aGlzLl9lbC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcImluaXRpYWxcIjtcclxuICAgIH1cclxuICAgIHB1dEFzWkluZGV4KGluZGV4KSB7XHJcbiAgICAgICAgaWYgKGluZGV4ID09IG51bGwgfHwgaW5kZXggPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2VsLnN0eWxlLnpJbmRleCA9IFwiaW5pdGlhbFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fZWwuc3R5bGUuekluZGV4ID0gaW5kZXgudG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdXRBc0Rpc2FibGVkU2VsZWN0aW9uKCkge1xyXG4gICAgICAgIHFpbnBlbF9yZXNfMS5RaW5Ta2luLmRpc2FibGVTZWxlY3Rpb24odGhpcy5fZWwpO1xyXG4gICAgfVxyXG4gICAgZ2V0UGl4ZWxzT3JJbml0aWFsKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlID09IG51bGwgfHwgdmFsdWUgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcImluaXRpYWxcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlICsgXCJweFwiO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUWluQmFzZVN0eWxlID0gUWluQmFzZVN0eWxlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tYmFzZS1zdHlsZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlFpbkJhc2UgPSB2b2lkIDA7XHJcbmNvbnN0IHFpbnBlbF9yZXNfMSA9IHJlcXVpcmUoXCJxaW5wZWwtcmVzXCIpO1xyXG5jb25zdCBxaW5fYmFzZV9zdHlsZV8xID0gcmVxdWlyZShcIi4vcWluLWJhc2Utc3R5bGVcIik7XHJcbmNvbnN0IHFpbl90b29sc18xID0gcmVxdWlyZShcIi4vcWluLXRvb2xzXCIpO1xyXG5jbGFzcyBRaW5CYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX2Jhc2VQYXJlbnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX3Bhc3RQYXJlbnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX2Jhc2VDaGlsZHJlbiA9IFtdO1xyXG4gICAgICAgIHRoaXMuX2Jhc2VEaXNwbGF5ID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9iYXNlVmlzaWJpbGl0eSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fc3R5bGUgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgZ2V0IHFpbnBlbCgpIHtcclxuICAgICAgICByZXR1cm4gcWluX3Rvb2xzXzEuUWluVG9vbHMucWlucGVsKCk7XHJcbiAgICB9XHJcbiAgICBnZXQgc3R5bGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3N0eWxlID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5fc3R5bGUgPSBuZXcgcWluX2Jhc2Vfc3R5bGVfMS5RaW5CYXNlU3R5bGUodGhpcy5nZXRNYWluKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5fc3R5bGU7XHJcbiAgICB9XHJcbiAgICBwdXQoaXRlbSkge1xyXG4gICAgICAgIGl0ZW0uaW5zdGFsbCh0aGlzKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGluc3RhbGwob25CYXNlKSB7XHJcbiAgICAgICAgdGhpcy51bkluc3RhbGwoKTtcclxuICAgICAgICB0aGlzLl9iYXNlUGFyZW50ID0gb25CYXNlO1xyXG4gICAgICAgIHRoaXMuX2Jhc2VQYXJlbnQuYWRkQ2hpbGQodGhpcyk7XHJcbiAgICB9XHJcbiAgICB1bkluc3RhbGwoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2Jhc2VQYXJlbnQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9iYXNlUGFyZW50LmRlbENoaWxkKHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLl9wYXN0UGFyZW50ID0gdGhpcy5fYmFzZVBhcmVudDtcclxuICAgICAgICAgICAgdGhpcy5fYmFzZVBhcmVudCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVJbnN0YWxsKCkge1xyXG4gICAgICAgIHRoaXMudW5JbnN0YWxsKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuX3Bhc3RQYXJlbnQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9wYXN0UGFyZW50LmFkZENoaWxkKHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLl9iYXNlUGFyZW50ID0gdGhpcy5fcGFzdFBhcmVudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB1bkluc3RhbGxDaGlsZHJlbigpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5fYmFzZUNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Jhc2VDaGlsZHJlbltpXS51bkluc3RhbGwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB1bkRpc3BsYXkoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0TWFpbigpLnN0eWxlLmRpc3BsYXkgIT09IFwibm9uZVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Jhc2VEaXNwbGF5ID0gdGhpcy5nZXRNYWluKCkuc3R5bGUuZGlzcGxheTtcclxuICAgICAgICAgICAgdGhpcy5nZXRNYWluKCkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlRGlzcGxheSgpIHtcclxuICAgICAgICBpZiAodGhpcy5fYmFzZURpc3BsYXkgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmdldE1haW4oKS5zdHlsZS5kaXNwbGF5ID0gdGhpcy5fYmFzZURpc3BsYXk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdW5WaXNpYmxlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmdldE1haW4oKS5zdHlsZS5kaXNwbGF5ICE9PSBcImhpZGRlblwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Jhc2VWaXNpYmlsaXR5ID0gdGhpcy5nZXRNYWluKCkuc3R5bGUudmlzaWJpbGl0eTtcclxuICAgICAgICAgICAgdGhpcy5nZXRNYWluKCkuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVWaXNpYmxlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9iYXNlVmlzaWJpbGl0eSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0TWFpbigpLnN0eWxlLnZpc2liaWxpdHkgPSB0aGlzLl9iYXNlVmlzaWJpbGl0eTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhZGRDaGlsZChjaGlsZCkge1xyXG4gICAgICAgIHRoaXMuX2Jhc2VDaGlsZHJlbi5wdXNoKGNoaWxkKTtcclxuICAgICAgICB0aGlzLmdldE1haW4oKS5hcHBlbmRDaGlsZChjaGlsZC5nZXRNYWluKCkpO1xyXG4gICAgfVxyXG4gICAgZGVsQ2hpbGQoY2hpbGQpIHtcclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLl9iYXNlQ2hpbGRyZW4uaW5kZXhPZihjaGlsZCk7XHJcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5fYmFzZUNoaWxkcmVuLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2V0TWFpbigpLnJlbW92ZUNoaWxkKGNoaWxkLmdldE1haW4oKSk7XHJcbiAgICB9XHJcbiAgICBjaGlsZHJlbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYmFzZUNoaWxkcmVuO1xyXG4gICAgfVxyXG4gICAgbXVzdElkKCkge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzLmlkO1xyXG4gICAgICAgIGlmICghcmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHFpbnBlbF9yZXNfMS5RaW5Cb2R5Lm1ha2VRaW5VSUQoKTtcclxuICAgICAgICAgICAgdGhpcy5pZCA9IHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIGdldCBpZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRNYWluKCkuaWQ7XHJcbiAgICB9XHJcbiAgICBzZXQgaWQoaWQpIHtcclxuICAgICAgICB0aGlzLmdldE1haW4oKS5pZCA9IGlkO1xyXG4gICAgfVxyXG4gICAgZ2V0IHRhYkluZGV4KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldE1haW4oKS50YWJJbmRleDtcclxuICAgIH1cclxuICAgIHNldCB0YWJJbmRleChpbmRleCkge1xyXG4gICAgICAgIHRoaXMuZ2V0TWFpbigpLnRhYkluZGV4ID0gaW5kZXg7XHJcbiAgICB9XHJcbiAgICBmb2N1cygpIHtcclxuICAgICAgICB0aGlzLmdldE1haW4oKS5mb2N1cygpO1xyXG4gICAgfVxyXG4gICAgYWRkQWN0aW9uKGFjdGlvbikge1xyXG4gICAgICAgIHFpbnBlbF9yZXNfMS5RaW5Bcm0uYWRkQWN0aW9uKHRoaXMuZ2V0TWFpbigpLCBhY3Rpb24pO1xyXG4gICAgfVxyXG4gICAgYWRkQWN0aW9uTWFpbihhY3Rpb24pIHtcclxuICAgICAgICBxaW5wZWxfcmVzXzEuUWluQXJtLmFkZEFjdGlvbk1haW4odGhpcy5nZXRNYWluKCksIGFjdGlvbik7XHJcbiAgICB9XHJcbiAgICBhZGRBY3Rpb25NYWluS2V5KGFjdGlvbikge1xyXG4gICAgICAgIHFpbnBlbF9yZXNfMS5RaW5Bcm0uYWRkQWN0aW9uTWFpbktleSh0aGlzLmdldE1haW4oKSwgYWN0aW9uKTtcclxuICAgIH1cclxuICAgIGFkZEFjdGlvbk1haW5Nb3VzZShhY3Rpb24pIHtcclxuICAgICAgICBxaW5wZWxfcmVzXzEuUWluQXJtLmFkZEFjdGlvbk1haW5Nb3VzZSh0aGlzLmdldE1haW4oKSwgYWN0aW9uKTtcclxuICAgIH1cclxuICAgIGFkZEFjdGlvbk1haW5Ub3VjaChhY3Rpb24pIHtcclxuICAgICAgICBxaW5wZWxfcmVzXzEuUWluQXJtLmFkZEFjdGlvbk1haW5Ub3VjaCh0aGlzLmdldE1haW4oKSwgYWN0aW9uKTtcclxuICAgIH1cclxuICAgIGFkZEFjdGlvbk1haW5Qb2ludChhY3Rpb24pIHtcclxuICAgICAgICBxaW5wZWxfcmVzXzEuUWluQXJtLmFkZEFjdGlvbk1haW5Qb2ludCh0aGlzLmdldE1haW4oKSwgYWN0aW9uKTtcclxuICAgIH1cclxuICAgIGFkZEFjdGlvbk1pZGkoYWN0aW9uKSB7XHJcbiAgICAgICAgcWlucGVsX3Jlc18xLlFpbkFybS5hZGRBY3Rpb25NaWRpKHRoaXMuZ2V0TWFpbigpLCBhY3Rpb24pO1xyXG4gICAgfVxyXG4gICAgYWRkQWN0aW9uTWlkaUtleShhY3Rpb24pIHtcclxuICAgICAgICBxaW5wZWxfcmVzXzEuUWluQXJtLmFkZEFjdGlvbk1pZGlLZXkodGhpcy5nZXRNYWluKCksIGFjdGlvbik7XHJcbiAgICB9XHJcbiAgICBhZGRBY3Rpb25NaWRpTW91c2UoYWN0aW9uKSB7XHJcbiAgICAgICAgcWlucGVsX3Jlc18xLlFpbkFybS5hZGRBY3Rpb25NaWRpTW91c2UodGhpcy5nZXRNYWluKCksIGFjdGlvbik7XHJcbiAgICB9XHJcbiAgICBhZGRBY3Rpb25NaWRpVG91Y2goYWN0aW9uKSB7XHJcbiAgICAgICAgcWlucGVsX3Jlc18xLlFpbkFybS5hZGRBY3Rpb25NaWRpVG91Y2godGhpcy5nZXRNYWluKCksIGFjdGlvbik7XHJcbiAgICB9XHJcbiAgICBhZGRBY3Rpb25NaWRpUG9pbnQoYWN0aW9uKSB7XHJcbiAgICAgICAgcWlucGVsX3Jlc18xLlFpbkFybS5hZGRBY3Rpb25NaWRpUG9pbnQodGhpcy5nZXRNYWluKCksIGFjdGlvbik7XHJcbiAgICB9XHJcbiAgICBhZGRBY3Rpb25NZW51KGFjdGlvbikge1xyXG4gICAgICAgIHFpbnBlbF9yZXNfMS5RaW5Bcm0uYWRkQWN0aW9uTWVudSh0aGlzLmdldE1haW4oKSwgYWN0aW9uKTtcclxuICAgIH1cclxuICAgIGFkZEFjdGlvbk1lbnVLZXkoYWN0aW9uKSB7XHJcbiAgICAgICAgcWlucGVsX3Jlc18xLlFpbkFybS5hZGRBY3Rpb25NZW51S2V5KHRoaXMuZ2V0TWFpbigpLCBhY3Rpb24pO1xyXG4gICAgfVxyXG4gICAgYWRkQWN0aW9uTWVudU1vdXNlKGFjdGlvbikge1xyXG4gICAgICAgIHFpbnBlbF9yZXNfMS5RaW5Bcm0uYWRkQWN0aW9uTWVudU1vdXNlKHRoaXMuZ2V0TWFpbigpLCBhY3Rpb24pO1xyXG4gICAgfVxyXG4gICAgYWRkQWN0aW9uTWVudVRvdWNoKGFjdGlvbikge1xyXG4gICAgICAgIHFpbnBlbF9yZXNfMS5RaW5Bcm0uYWRkQWN0aW9uTWVudVRvdWNoKHRoaXMuZ2V0TWFpbigpLCBhY3Rpb24pO1xyXG4gICAgfVxyXG4gICAgYWRkQWN0aW9uTWVudVBvaW50KGFjdGlvbikge1xyXG4gICAgICAgIHFpbnBlbF9yZXNfMS5RaW5Bcm0uYWRkQWN0aW9uTWVudVBvaW50KHRoaXMuZ2V0TWFpbigpLCBhY3Rpb24pO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUWluQmFzZSA9IFFpbkJhc2U7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1iYXNlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluQm9vbGVhbiA9IHZvaWQgMDtcclxuY29uc3QgcWlucGVsX3Jlc18xID0gcmVxdWlyZShcInFpbnBlbC1yZXNcIik7XHJcbmNvbnN0IHFpbl9hc3NldHNfMSA9IHJlcXVpcmUoXCIuL3Fpbi1hc3NldHNcIik7XHJcbmNvbnN0IHFpbl9lZGl0XzEgPSByZXF1aXJlKFwiLi9xaW4tZWRpdFwiKTtcclxuY29uc3QgcWluX2ljb25fMSA9IHJlcXVpcmUoXCIuL3Fpbi1pY29uXCIpO1xyXG5jb25zdCBxaW5fbGFiZWxfMSA9IHJlcXVpcmUoXCIuL3Fpbi1sYWJlbFwiKTtcclxuY29uc3QgcWluX2xpbmVfMSA9IHJlcXVpcmUoXCIuL3Fpbi1saW5lXCIpO1xyXG5jbGFzcyBRaW5Cb29sZWFuIGV4dGVuZHMgcWluX2VkaXRfMS5RaW5FZGl0IHtcclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX3Fpbk1haW4gPSBuZXcgcWluX2xpbmVfMS5RaW5MaW5lKCk7XHJcbiAgICAgICAgdGhpcy5fcWluU3BhbiA9IG5ldyBxaW5fbGFiZWxfMS5RaW5MYWJlbCgpO1xyXG4gICAgICAgIHRoaXMuX3Fpbkljb24gPSBuZXcgcWluX2ljb25fMS5RaW5JY29uKHFpbl9hc3NldHNfMS5RaW5Bc3NldC5GYWNlQ2hlY2tSYWRpbyk7XHJcbiAgICAgICAgdGhpcy5fdmFsdWUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9xaW5TcGFuLmluc3RhbGwodGhpcy5fcWluTWFpbik7XHJcbiAgICAgICAgdGhpcy5fcWluSWNvbi5pbnN0YWxsKHRoaXMuX3FpblNwYW4pO1xyXG4gICAgICAgIHRoaXMuX3FpblNwYW4uc3R5bGUucHV0QXNFZGl0KCk7XHJcbiAgICAgICAgdGhpcy5fcWluU3Bhbi5zdHlsZS5wdXRBc0Rpc3BsYXlGbGV4KCk7XHJcbiAgICAgICAgdGhpcy5fcWluU3Bhbi5zdHlsZS5wdXRBc0FsbENlbnRlcmVkKCk7XHJcbiAgICAgICAgdGhpcy5fcWluU3Bhbi5hZGRBY3Rpb24oKHFpbkV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChxaW5FdmVudC5pc01haW4pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmluaXRpYWwpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKG9wdGlvbnMuaW5pdGlhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0TmF0dXJlKCkge1xyXG4gICAgICAgIHJldHVybiBxaW5wZWxfcmVzXzEuUWluTmF0dXJlLkJPT0w7XHJcbiAgICB9XHJcbiAgICBnZXRNYWluKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5NYWluLmdldE1haW4oKTtcclxuICAgIH1cclxuICAgIGdldERhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xyXG4gICAgfVxyXG4gICAgc2V0RGF0YShkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5fdmFsdWUgPSBkYXRhO1xyXG4gICAgICAgIHRoaXMudXBkYXRlSWNvbigpO1xyXG4gICAgfVxyXG4gICAgZ2V0IHFpbk1haW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Fpbk1haW47XHJcbiAgICB9XHJcbiAgICBnZXQgcWluU3BhbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcWluU3BhbjtcclxuICAgIH1cclxuICAgIGdldCBxaW5JY29uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5JY29uO1xyXG4gICAgfVxyXG4gICAgZ2V0IHZhbHVlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcclxuICAgIH1cclxuICAgIHNldCB2YWx1ZSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy51cGRhdGVJY29uKCk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVJY29uKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl92YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9xaW5JY29uLmFzc2V0ID0gcWluX2Fzc2V0c18xLlFpbkFzc2V0LkZhY2VDaGVja2VkUmFkaW87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9xaW5JY29uLmFzc2V0ID0gcWluX2Fzc2V0c18xLlFpbkFzc2V0LkZhY2VDaGVja1JhZGlvO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHRvZ2dsZSgpIHtcclxuICAgICAgICB0aGlzLl92YWx1ZSA9ICF0aGlzLl92YWx1ZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUljb24oKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlFpbkJvb2xlYW4gPSBRaW5Cb29sZWFuO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tYm9vbGVhbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlFpbkJ1dHRvbiA9IHZvaWQgMDtcclxuY29uc3QgcWlucGVsX3Jlc18xID0gcmVxdWlyZShcInFpbnBlbC1yZXNcIik7XHJcbmNvbnN0IHFpbl9iYXNlXzEgPSByZXF1aXJlKFwiLi9xaW4tYmFzZVwiKTtcclxuY2xhc3MgUWluQnV0dG9uIGV4dGVuZHMgcWluX2Jhc2VfMS5RaW5CYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX2VsTWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgdGhpcy5fcWluSWNvbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fcWluTGFiZWwgPSBudWxsO1xyXG4gICAgICAgIHN0eWxlcy5hcHBseU9uQnV0dG9uKHRoaXMuX2VsTWFpbik7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5pY29uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Fpbkljb24gPSBvcHRpb25zLmljb247XHJcbiAgICAgICAgICAgIHRoaXMuX3Fpbkljb24uaW5zdGFsbCh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5sYWJlbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9xaW5MYWJlbCA9IG9wdGlvbnMubGFiZWw7XHJcbiAgICAgICAgICAgIHRoaXMuX3FpbkxhYmVsLmluc3RhbGwodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0TWFpbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZWxNYWluO1xyXG4gICAgfVxyXG4gICAgZ2V0IHFpbkljb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Fpbkljb247XHJcbiAgICB9XHJcbiAgICBnZXQgcWluTGFiZWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpbkxhYmVsO1xyXG4gICAgfVxyXG4gICAgcHV0QXNSb3coKSB7XHJcbiAgICAgICAgdGhpcy5zdHlsZS5wdXRBc0ZsZXhEaXJlY3Rpb25Sb3coKTtcclxuICAgIH1cclxuICAgIHB1dEFzUm93UmV2ZXJzZSgpIHtcclxuICAgICAgICB0aGlzLnN0eWxlLnB1dEFzRmxleERpcmVjdGlvblJvd1JldmVyc2UoKTtcclxuICAgIH1cclxuICAgIHB1dEFzQ29sdW1uKCkge1xyXG4gICAgICAgIHRoaXMuc3R5bGUucHV0QXNGbGV4RGlyZWN0aW9uQ29sdW1uKCk7XHJcbiAgICB9XHJcbiAgICBwdXRBc0NvbHVtblJldmVyc2UoKSB7XHJcbiAgICAgICAgdGhpcy5zdHlsZS5wdXRBc0ZsZXhEaXJlY3Rpb25Db2x1bW5SZXZlcnNlKCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5RaW5CdXR0b24gPSBRaW5CdXR0b247XHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICAgIGFwcGx5T25CdXR0b246IChlbCkgPT4ge1xyXG4gICAgICAgIHFpbnBlbF9yZXNfMS5RaW5Ta2luLnN0eWxlQXNFZGl0KGVsKTtcclxuICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgZWwuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwicm93XCI7XHJcbiAgICAgICAgZWwuc3R5bGUuYWxpZ25JdGVtcyA9IFwiY2VudGVyXCI7XHJcbiAgICAgICAgZWwuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSBcImNlbnRlclwiO1xyXG4gICAgfSxcclxufTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWJ1dHRvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlFpbkNvbHVtbiA9IHZvaWQgMDtcclxuY29uc3QgcWluX3BhbmVsXzEgPSByZXF1aXJlKFwiLi9xaW4tcGFuZWxcIik7XHJcbmNsYXNzIFFpbkNvbHVtbiBleHRlbmRzIHFpbl9wYW5lbF8xLlFpblBhbmVsIHtcclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgICAgICBzdXBlcihvcHRpb25zKTtcclxuICAgICAgICB0aGlzLnN0eWxlLnB1dEFzRmxleERpcmVjdGlvbkNvbHVtbigpO1xyXG4gICAgICAgIHRoaXMuc3R5bGUucHV0QXNGbGV4V3JhcE5vdCgpO1xyXG4gICAgICAgIHRoaXMuZ2V0TWFpbigpLnN0eWxlLm1pbldpZHRoID0gXCJtaW4tY29udGVudFwiO1xyXG4gICAgICAgIHRoaXMuZ2V0TWFpbigpLnN0eWxlLm1pbkhlaWdodCA9IFwibWluLWNvbnRlbnRcIjtcclxuICAgIH1cclxuICAgIHB1dChpdGVtKSB7XHJcbiAgICAgICAgaXRlbS5pbnN0YWxsKHRoaXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUWluQ29sdW1uID0gUWluQ29sdW1uO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tY29sdW1uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluQ29tYm8gPSB2b2lkIDA7XHJcbmNvbnN0IHFpbnBlbF9yZXNfMSA9IHJlcXVpcmUoXCJxaW5wZWwtcmVzXCIpO1xyXG5jb25zdCBxaW5fZWRpdF8xID0gcmVxdWlyZShcIi4vcWluLWVkaXRcIik7XHJcbmNsYXNzIFFpbkNvbWJvIGV4dGVuZHMgcWluX2VkaXRfMS5RaW5FZGl0IHtcclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX2VsTWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XHJcbiAgICAgICAgdGhpcy5fZWxHcm91cHMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICB0aGlzLnN0eWxlLnB1dEFzRWRpdCgpO1xyXG4gICAgICAgIGlmIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuaXRlbXMpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBvcHRpb25zLml0ZW1zKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEl0ZW0oaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5zZWxlY3RlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEob3B0aW9ucy5zZWxlY3RlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0TWFpbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZWxNYWluO1xyXG4gICAgfVxyXG4gICAgZ2V0TmF0dXJlKCkge1xyXG4gICAgICAgIHJldHVybiBxaW5wZWxfcmVzXzEuUWluTmF0dXJlLkNIQVJTO1xyXG4gICAgfVxyXG4gICAgZ2V0RGF0YSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZWxNYWluLnZhbHVlO1xyXG4gICAgfVxyXG4gICAgc2V0RGF0YShkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5fZWxNYWluLnZhbHVlID0gZGF0YTtcclxuICAgIH1cclxuICAgIGFkZEl0ZW0oaXRlbSkge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICAgICAgb3B0aW9uLnRleHQgPSBpdGVtLnRpdGxlO1xyXG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IGl0ZW0udmFsdWU7XHJcbiAgICAgICAgaWYgKGl0ZW0uc2VsZWN0ZWQgIT0gdW5kZWZpbmVkICYmIGl0ZW0uc2VsZWN0ZWQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSBpdGVtLnNlbGVjdGVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZ3JvdXAgPSB0aGlzLmdldEdyb3VwKGl0ZW0uZ3JvdXApO1xyXG4gICAgICAgIGlmIChncm91cCkge1xyXG4gICAgICAgICAgICBncm91cC5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcWlucGVsX3Jlc18xLlFpblNraW4uc3R5bGVBc0Jhc2Uob3B0aW9uKTtcclxuICAgICAgICAgICAgdGhpcy5fZWxNYWluLmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgZ2V0R3JvdXAobGFiZWwpIHtcclxuICAgICAgICBpZiAoIWxhYmVsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBncm91cCBvZiB0aGlzLl9lbEdyb3Vwcykge1xyXG4gICAgICAgICAgICBpZiAoZ3JvdXAubGFiZWwgPT0gbGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBncm91cDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbmV3R3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0Z3JvdXBcIik7XHJcbiAgICAgICAgbmV3R3JvdXAubGFiZWwgPSBsYWJlbDtcclxuICAgICAgICBxaW5wZWxfcmVzXzEuUWluU2tpbi5zdHlsZUFzQmFzZShuZXdHcm91cCk7XHJcbiAgICAgICAgdGhpcy5fZWxHcm91cHMucHVzaChuZXdHcm91cCk7XHJcbiAgICAgICAgdGhpcy5fZWxNYWluLmFwcGVuZENoaWxkKG5ld0dyb3VwKTtcclxuICAgICAgICByZXR1cm4gbmV3R3JvdXA7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5RaW5Db21ibyA9IFFpbkNvbWJvO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tY29tYm8uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5EaXZpZGVyID0gdm9pZCAwO1xyXG5jb25zdCBxaW5fYmFzZV8xID0gcmVxdWlyZShcIi4vcWluLWJhc2VcIik7XHJcbmNsYXNzIFFpbkRpdmlkZXIgZXh0ZW5kcyBxaW5fYmFzZV8xLlFpbkJhc2Uge1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5fZWxNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aGlzLl9pc0hvcml6b250YWwgPSB0cnVlO1xyXG4gICAgICAgIGlmIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuaG9yaXpvbnRhbCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEhvcml6b250YWwoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VmVydGljYWwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRNYWluKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9lbE1haW47XHJcbiAgICB9XHJcbiAgICBzZXRIb3Jpem9udGFsKCkge1xyXG4gICAgICAgIHRoaXMuX2VsTWFpbi5zdHlsZS5taW5XaWR0aCA9IFwiaW5pdGlhbFwiO1xyXG4gICAgICAgIHRoaXMuX2VsTWFpbi5zdHlsZS5tYXhXaWR0aCA9IFwiaW5pdGlhbFwiO1xyXG4gICAgICAgIHRoaXMuX2VsTWFpbi5zdHlsZS5taW5IZWlnaHQgPSBcIjZweFwiO1xyXG4gICAgICAgIHRoaXMuX2VsTWFpbi5zdHlsZS5tYXhIZWlnaHQgPSBcIjZweFwiO1xyXG4gICAgICAgIHRoaXMuX2VsTWFpbi5zdHlsZS5oZWlnaHQgPSBcIjZweFwiO1xyXG4gICAgICAgIHRoaXMuX2VsTWFpbi5zdHlsZS5iYWNrZ3JvdW5kID1cclxuICAgICAgICAgICAgXCJsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDI1NSwyNTAsMjM5LDAuMSkgMCUsIHJnYmEoMjU1LDI1MCwyMzksMC4xKSAyNiUsIHJnYmEoMjQsMCwzOSwwLjgpIDQyJSwgcmdiYSgyNCwwLDM5LDAuOCkgNTglLCByZ2JhKDI1NSwyNTAsMjM5LDAuMSkgNzQlLCByZ2JhKDI1NSwyNTAsMjM5LDAuMSkgMTAwJSlcIjtcclxuICAgICAgICB0aGlzLl9pc0hvcml6b250YWwgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgc2V0VmVydGljYWwoKSB7XHJcbiAgICAgICAgdGhpcy5fZWxNYWluLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcInJvd1wiO1xyXG4gICAgICAgIHRoaXMuX2VsTWFpbi5zdHlsZS5taW5XaWR0aCA9IFwiNnB4XCI7XHJcbiAgICAgICAgdGhpcy5fZWxNYWluLnN0eWxlLm1heFdpZHRoID0gXCI2cHhcIjtcclxuICAgICAgICB0aGlzLl9lbE1haW4uc3R5bGUubWluSGVpZ2h0ID0gXCJpbml0aWFsXCI7XHJcbiAgICAgICAgdGhpcy5fZWxNYWluLnN0eWxlLm1heEhlaWdodCA9IFwiaW5pdGlhbFwiO1xyXG4gICAgICAgIHRoaXMuX2VsTWFpbi5zdHlsZS53aWR0aCA9IFwiNnB4XCI7XHJcbiAgICAgICAgdGhpcy5fZWxNYWluLnN0eWxlLmJhY2tncm91bmQgPVxyXG4gICAgICAgICAgICBcImxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyNTUsMjUwLDIzOSwwLjEpIDAlLCByZ2JhKDI1NSwyNTAsMjM5LDAuMSkgMjYlLCByZ2JhKDI0LDAsMzksMC44KSA0MiUsIHJnYmEoMjQsMCwzOSwwLjgpIDU4JSwgcmdiYSgyNTUsMjUwLDIzOSwwLjEpIDc0JSwgcmdiYSgyNTUsMjUwLDIzOSwwLjEpIDEwMCUpXCI7XHJcbiAgICAgICAgdGhpcy5faXNIb3Jpem9udGFsID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBnZXQgaXNIb3Jpem9udGFsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pc0hvcml6b250YWw7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5RaW5EaXZpZGVyID0gUWluRGl2aWRlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWRpdmlkZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5FZGl0ID0gdm9pZCAwO1xyXG5jb25zdCBxaW5fYmFzZV8xID0gcmVxdWlyZShcIi4vcWluLWJhc2VcIik7XHJcbmNsYXNzIFFpbkVkaXQgZXh0ZW5kcyBxaW5fYmFzZV8xLlFpbkJhc2Uge1xyXG59XHJcbmV4cG9ydHMuUWluRWRpdCA9IFFpbkVkaXQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1lZGl0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluRmllbGQgPSB2b2lkIDA7XHJcbmNvbnN0IHFpbl9jb2x1bW5fMSA9IHJlcXVpcmUoXCIuL3Fpbi1jb2x1bW5cIik7XHJcbmNvbnN0IHFpbl9lZGl0XzEgPSByZXF1aXJlKFwiLi9xaW4tZWRpdFwiKTtcclxuY29uc3QgcWluX2xhYmVsXzEgPSByZXF1aXJlKFwiLi9xaW4tbGFiZWxcIik7XHJcbmNsYXNzIFFpbkZpZWxkIGV4dGVuZHMgcWluX2VkaXRfMS5RaW5FZGl0IHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBlZGl0KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl9xaW5NYWluID0gbmV3IHFpbl9jb2x1bW5fMS5RaW5Db2x1bW4oKTtcclxuICAgICAgICB0aGlzLl9xaW5MYWJlbCA9IG5ldyBxaW5fbGFiZWxfMS5RaW5MYWJlbCgpO1xyXG4gICAgICAgIHRoaXMuX3FpbkVkaXQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX3FpbkxhYmVsLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5fcWluTGFiZWwuaW5zdGFsbCh0aGlzLl9xaW5NYWluKTtcclxuICAgICAgICB0aGlzLl9xaW5FZGl0ID0gZWRpdDtcclxuICAgICAgICB0aGlzLl9xaW5FZGl0Lmluc3RhbGwodGhpcy5fcWluTWFpbik7XHJcbiAgICAgICAgdGhpcy5fcWluTGFiZWwucWluTGluayh0aGlzLl9xaW5FZGl0KTtcclxuICAgICAgICB0aGlzLl9xaW5NYWluLnN0eWxlLnB1dEFzTWFyZ2luKDMpO1xyXG4gICAgfVxyXG4gICAgZ2V0TWFpbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcWluTWFpbi5nZXRNYWluKCk7XHJcbiAgICB9XHJcbiAgICBnZXROYXR1cmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpbkVkaXQuZ2V0TmF0dXJlKCk7XHJcbiAgICB9XHJcbiAgICBnZXREYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5FZGl0LmdldERhdGEoKTtcclxuICAgIH1cclxuICAgIHNldERhdGEoZGF0YSkge1xyXG4gICAgICAgIHRoaXMuX3FpbkVkaXQuc2V0RGF0YShkYXRhKTtcclxuICAgIH1cclxuICAgIGdldCBxaW5NYWluKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5NYWluO1xyXG4gICAgfVxyXG4gICAgZ2V0IHFpbkxhYmVsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5MYWJlbDtcclxuICAgIH1cclxuICAgIGdldCBxaW5FZGl0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5FZGl0O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUWluRmllbGQgPSBRaW5GaWVsZDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWZpZWxkLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluRmlsZVBhdGggPSB2b2lkIDA7XHJcbmNvbnN0IHFpbnBlbF9yZXNfMSA9IHJlcXVpcmUoXCJxaW5wZWwtcmVzXCIpO1xyXG5jb25zdCBxaW5fYXNzZXRzXzEgPSByZXF1aXJlKFwiLi9xaW4tYXNzZXRzXCIpO1xyXG5jb25zdCBxaW5fYnV0dG9uXzEgPSByZXF1aXJlKFwiLi9xaW4tYnV0dG9uXCIpO1xyXG5jb25zdCBxaW5fZWRpdF8xID0gcmVxdWlyZShcIi4vcWluLWVkaXRcIik7XHJcbmNvbnN0IHFpbl9maWxlX3BpY2tfMSA9IHJlcXVpcmUoXCIuL3Fpbi1maWxlLXBpY2tcIik7XHJcbmNvbnN0IHFpbl9pY29uXzEgPSByZXF1aXJlKFwiLi9xaW4taWNvblwiKTtcclxuY29uc3QgcWluX2xpbmVfMSA9IHJlcXVpcmUoXCIuL3Fpbi1saW5lXCIpO1xyXG5jb25zdCBxaW5fc3RyaW5nXzEgPSByZXF1aXJlKFwiLi9xaW4tc3RyaW5nXCIpO1xyXG5jbGFzcyBRaW5GaWxlUGF0aCBleHRlbmRzIHFpbl9lZGl0XzEuUWluRWRpdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl9xaW5NYWluID0gbmV3IHFpbl9saW5lXzEuUWluTGluZSgpO1xyXG4gICAgICAgIHRoaXMuX3FpblBhdGggPSBuZXcgcWluX3N0cmluZ18xLlFpblN0cmluZygpO1xyXG4gICAgICAgIHRoaXMuX3FpblNlYXJjaCA9IG5ldyBxaW5fYnV0dG9uXzEuUWluQnV0dG9uKHtcclxuICAgICAgICAgICAgaWNvbjogbmV3IHFpbl9pY29uXzEuUWluSWNvbihxaW5fYXNzZXRzXzEuUWluQXNzZXQuRmFjZUZvbGRlciksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fcWluQ2hvb3NlciA9IG5ldyBxaW5fZmlsZV9waWNrXzEuUWluRmlsZVBpY2soe1xyXG4gICAgICAgICAgICBuYXR1cmU6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5uYXR1cmUsXHJcbiAgICAgICAgICAgIG9wZXJhdGlvbjogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLm9wZXJhdGlvbixcclxuICAgICAgICAgICAgZGVzY3JpcHRvcnM6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5kZXNjcmlwdG9ycyxcclxuICAgICAgICAgICAgc2luZ2xlU2VsZWN0aW9uOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX3FpblBvcHVwID0gdGhpcy5xaW5wZWwuam9iYmVkLm5ld1BvcHVwKHRoaXMuX3FpbkNob29zZXIuZ2V0TWFpbigpKTtcclxuICAgICAgICB0aGlzLl9xaW5QYXRoLmluc3RhbGwodGhpcy5fcWluTWFpbik7XHJcbiAgICAgICAgdGhpcy5fcWluU2VhcmNoLmluc3RhbGwodGhpcy5fcWluTWFpbik7XHJcbiAgICAgICAgdGhpcy5fcWluU2VhcmNoLmFkZEFjdGlvbigocWluRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHFpbkV2ZW50LmlzTWFpbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcWluUG9wdXAuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXBwZXJIZWlnaHQgPSB0aGlzLl9xaW5DaG9vc2VyLnFpblVwcGVyLmdldE1haW4oKS5jbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBleHBsb3Jlck1heEhlaWdodCA9IHRoaXMuX3FpblBvcHVwLm1heEhlaWdodCAtICh1cHBlckhlaWdodCArIDEyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3FpbkNob29zZXIucWluRXhwbG9yZXIuc3R5bGUucHV0QXNNYXhIZWlnaHQoZXhwbG9yZXJNYXhIZWlnaHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fcWluQ2hvb3Nlci5hZGRDaG9zZW4oKGNob3NlbikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY2hvc2VuICYmIGNob3Nlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9xaW5QYXRoLnNldERhdGEoY2hvc2VuWzBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9xaW5Qb3B1cC5jbG9zZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuaW5pdGlhbCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEob3B0aW9ucy5pbml0aWFsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRNYWluKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5NYWluLmdldE1haW4oKTtcclxuICAgIH1cclxuICAgIGdldE5hdHVyZSgpIHtcclxuICAgICAgICByZXR1cm4gcWlucGVsX3Jlc18xLlFpbk5hdHVyZS5DSEFSUztcclxuICAgIH1cclxuICAgIGdldERhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpblBhdGguZ2V0RGF0YSgpO1xyXG4gICAgfVxyXG4gICAgc2V0RGF0YShkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5fcWluUGF0aC5zZXREYXRhKGRhdGEpO1xyXG4gICAgfVxyXG4gICAgZ2V0IHFpbk1haW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Fpbk1haW47XHJcbiAgICB9XHJcbiAgICBnZXQgcWluUGF0aCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcWluUGF0aDtcclxuICAgIH1cclxuICAgIGdldCBxaW5TZWFyY2goKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpblNlYXJjaDtcclxuICAgIH1cclxuICAgIGdldCBxaW5DaG9vc2VyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5DaG9vc2VyO1xyXG4gICAgfVxyXG4gICAgZ2V0IHFpblBvcHVwKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5Qb3B1cDtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlFpbkZpbGVQYXRoID0gUWluRmlsZVBhdGg7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1maWxlLXBhdGguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5GaWxlUGljayA9IHZvaWQgMDtcclxuY29uc3QgcWlucGVsX3Jlc18xID0gcmVxdWlyZShcInFpbnBlbC1yZXNcIik7XHJcbmNvbnN0IHFpbl9hc3NldHNfMSA9IHJlcXVpcmUoXCIuL3Fpbi1hc3NldHNcIik7XHJcbmNvbnN0IHFpbl9idXR0b25fMSA9IHJlcXVpcmUoXCIuL3Fpbi1idXR0b25cIik7XHJcbmNvbnN0IHFpbl9jb2x1bW5fMSA9IHJlcXVpcmUoXCIuL3Fpbi1jb2x1bW5cIik7XHJcbmNvbnN0IHFpbl9jb21ib18xID0gcmVxdWlyZShcIi4vcWluLWNvbWJvXCIpO1xyXG5jb25zdCBxaW5fZWRpdF8xID0gcmVxdWlyZShcIi4vcWluLWVkaXRcIik7XHJcbmNvbnN0IHFpbl9maWxlX3ZpZXdfMSA9IHJlcXVpcmUoXCIuL3Fpbi1maWxlLXZpZXdcIik7XHJcbmNvbnN0IHFpbl9pY29uXzEgPSByZXF1aXJlKFwiLi9xaW4taWNvblwiKTtcclxuY29uc3QgcWluX2xpbmVfMSA9IHJlcXVpcmUoXCIuL3Fpbi1saW5lXCIpO1xyXG5jb25zdCBxaW5fcGFuZWxfMSA9IHJlcXVpcmUoXCIuL3Fpbi1wYW5lbFwiKTtcclxuY29uc3QgcWluX3N0cmluZ18xID0gcmVxdWlyZShcIi4vcWluLXN0cmluZ1wiKTtcclxuY2xhc3MgUWluRmlsZVBpY2sgZXh0ZW5kcyBxaW5fZWRpdF8xLlFpbkVkaXQge1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5fcWluTWFpbiA9IG5ldyBxaW5fY29sdW1uXzEuUWluQ29sdW1uKCk7XHJcbiAgICAgICAgdGhpcy5fcWluVXBwZXIgPSBuZXcgcWluX2xpbmVfMS5RaW5MaW5lKCk7XHJcbiAgICAgICAgdGhpcy5fcWluQ29uZmlybSA9IG5ldyBxaW5fYnV0dG9uXzEuUWluQnV0dG9uKHtcclxuICAgICAgICAgICAgaWNvbjogbmV3IHFpbl9pY29uXzEuUWluSWNvbihxaW5fYXNzZXRzXzEuUWluQXNzZXQuRmFjZUNvbmZpcm0pLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX3FpbkZvbGRlciA9IG5ldyBxaW5fc3RyaW5nXzEuUWluU3RyaW5nKCk7XHJcbiAgICAgICAgdGhpcy5fcWluRXh0ZW5zaW9ucyA9IG5ldyBxaW5fY29tYm9fMS5RaW5Db21ibygpO1xyXG4gICAgICAgIHRoaXMuX3FpblNlYXJjaCA9IG5ldyBxaW5fYnV0dG9uXzEuUWluQnV0dG9uKHtcclxuICAgICAgICAgICAgaWNvbjogbmV3IHFpbl9pY29uXzEuUWluSWNvbihxaW5fYXNzZXRzXzEuUWluQXNzZXQuRmFjZVNlYXJjaCksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fcWluVW5kZXIgPSBuZXcgcWluX3BhbmVsXzEuUWluUGFuZWwoKTtcclxuICAgICAgICB0aGlzLl9xaW5FeHBsb3JlciA9IG5ldyBxaW5fZmlsZV92aWV3XzEuUWluRmlsZVZpZXcoKTtcclxuICAgICAgICB0aGlzLl9saXN0ZW5lcnMgPSBbXTtcclxuICAgICAgICB0aGlzLl9uYXR1cmUgPSAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLm5hdHVyZSkgPyBvcHRpb25zLm5hdHVyZSA6IHFpbnBlbF9yZXNfMS5RaW5GaWxlc05hdHVyZS5CT1RIO1xyXG4gICAgICAgIHRoaXMuX29wZXJhdGlvbiA9IChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMub3BlcmF0aW9uKSA/IG9wdGlvbnMub3BlcmF0aW9uIDogcWlucGVsX3Jlc18xLlFpbkZpbGVzT3BlcmF0aW9uLk9QRU47XHJcbiAgICAgICAgdGhpcy5fZGVzY3JpcHRvcnMgPSAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmRlc2NyaXB0b3JzKSA/IG9wdGlvbnMuZGVzY3JpcHRvcnMgOiBbXTtcclxuICAgICAgICB0aGlzLl9zaW5nbGVTZWxlY3Rpb24gPSAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnNpbmdsZVNlbGVjdGlvbikgPyBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuc2luZ2xlU2VsZWN0aW9uIDogZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pbml0TWFpbigpO1xyXG4gICAgICAgIHRoaXMuaW5pdFVwcGVyKCk7XHJcbiAgICAgICAgdGhpcy5pbml0VW5kZXIoKTtcclxuICAgIH1cclxuICAgIGluaXRNYWluKCkge1xyXG4gICAgICAgIHRoaXMuX3FpblVwcGVyLmluc3RhbGwodGhpcy5fcWluTWFpbik7XHJcbiAgICAgICAgdGhpcy5fcWluVW5kZXIuaW5zdGFsbCh0aGlzLl9xaW5NYWluKTtcclxuICAgIH1cclxuICAgIGluaXRVcHBlcigpIHtcclxuICAgICAgICB0aGlzLl9xaW5VcHBlci5zdHlsZS5wdXRBc0ZsZXhNaW4oKTtcclxuICAgICAgICB0aGlzLl9xaW5Db25maXJtLmluc3RhbGwodGhpcy5fcWluVXBwZXIpO1xyXG4gICAgICAgIHRoaXMuX3FpbkNvbmZpcm0uYWRkQWN0aW9uKChxaW5FdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocWluRXZlbnQuaXNNYWluKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHRoaXMuZ2V0RGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBjaG9zZW4gb2YgdGhpcy5fbGlzdGVuZXJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hvc2VuKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcWluRXZlbnQuY29uc3VtZWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX3FpbkZvbGRlci5pbnN0YWxsKHRoaXMuX3FpblVwcGVyKTtcclxuICAgICAgICB0aGlzLl9xaW5Gb2xkZXIuc3R5bGUucHV0QXNNaW5XaWR0aCgxMDApO1xyXG4gICAgICAgIHRoaXMuX3FpbkZvbGRlci5zdHlsZS5wdXRBc0ZsZXhNYXgoKTtcclxuICAgICAgICB0aGlzLl9xaW5Gb2xkZXIuYWRkQWN0aW9uKChxaW5FdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocWluRXZlbnQuaXNFbnRlcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkRm9sZGVyKCk7XHJcbiAgICAgICAgICAgICAgICBxaW5FdmVudC5jb25zdW1lZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fcWluRXh0ZW5zaW9ucy5pbnN0YWxsKHRoaXMuX3FpblVwcGVyKTtcclxuICAgICAgICB0aGlzLl9xaW5FeHRlbnNpb25zLnN0eWxlLnB1dEFzTWluV2lkdGgoMTAwKTtcclxuICAgICAgICB0aGlzLmluaXRFeHRlbnNpb25zKCk7XHJcbiAgICAgICAgdGhpcy5fcWluU2VhcmNoLmluc3RhbGwodGhpcy5fcWluVXBwZXIpO1xyXG4gICAgICAgIHRoaXMuX3FpblNlYXJjaC5hZGRBY3Rpb24oKHFpbkV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChxaW5FdmVudC5pc01haW4pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZEZvbGRlcigpO1xyXG4gICAgICAgICAgICAgICAgcWluRXZlbnQuY29uc3VtZWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaW5pdFVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuX3FpblVuZGVyLnN0eWxlLnB1dEFzU2Nyb2xsKCk7XHJcbiAgICAgICAgdGhpcy5fcWluVW5kZXIuc3R5bGUucHV0QXNGbGV4TWF4KCk7XHJcbiAgICAgICAgdGhpcy5fcWluRXhwbG9yZXIuaW5zdGFsbCh0aGlzLl9xaW5VbmRlcik7XHJcbiAgICAgICAgdGhpcy5fcWluRXhwbG9yZXIubmF0dXJlID0gdGhpcy5fbmF0dXJlO1xyXG4gICAgICAgIHRoaXMuX3FpbkV4cGxvcmVyLnNpbmdsZVNlbGVjdGlvbiA9IHRoaXMuX3NpbmdsZVNlbGVjdGlvbjtcclxuICAgIH1cclxuICAgIGluaXRFeHRlbnNpb25zKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9kZXNjcmlwdG9ycy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLl9xaW5FeHRlbnNpb25zLmFkZEl0ZW0oe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiQWxsIEZpbGVzICgqLiopXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCIqXCIsXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogdHJ1ZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3FpbkV4cGxvcmVyLmV4dGVuc2lvbnMgPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLl9kZXNjcmlwdG9ycy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0b3IgPSB0aGlzLl9kZXNjcmlwdG9yc1tpbmRleF07XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9xaW5FeHRlbnNpb25zLmFkZEl0ZW0oe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBkZXNjcmlwdG9yLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBkZXNjcmlwdG9yLmV4dGVuc2lvbnMuam9pbihcIjtcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IGluZGV4ID09IDAsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9xaW5FeHBsb3Jlci5leHRlbnNpb25zID0gdGhpcy5fZGVzY3JpcHRvcnNbMF0uZXh0ZW5zaW9ucztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRNYWluKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5NYWluLmdldE1haW4oKTtcclxuICAgIH1cclxuICAgIGdldE5hdHVyZSgpIHtcclxuICAgICAgICByZXR1cm4gcWlucGVsX3Jlc18xLlFpbk5hdHVyZS5DSEFSUztcclxuICAgIH1cclxuICAgIGdldERhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpbkV4cGxvcmVyLmdldERhdGEoKTtcclxuICAgIH1cclxuICAgIHNldERhdGEoZGF0YSkge1xyXG4gICAgICAgIHRoaXMuX3FpbkV4cGxvcmVyLnNldERhdGEoZGF0YSk7XHJcbiAgICB9XHJcbiAgICBnZXQgcWluTWFpbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcWluTWFpbjtcclxuICAgIH1cclxuICAgIGdldCBxaW5VcHBlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcWluVXBwZXI7XHJcbiAgICB9XHJcbiAgICBnZXQgcWluQ29uZmlybSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcWluQ29uZmlybTtcclxuICAgIH1cclxuICAgIGdldCBxaW5Gb2xkZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpbkZvbGRlcjtcclxuICAgIH1cclxuICAgIGdldCBxaW5FeHRlbnNpb25zKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5FeHRlbnNpb25zO1xyXG4gICAgfVxyXG4gICAgZ2V0IHFpblNlYXJjaCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcWluU2VhcmNoO1xyXG4gICAgfVxyXG4gICAgZ2V0IHFpblVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5VbmRlcjtcclxuICAgIH1cclxuICAgIGdldCBxaW5FeHBsb3JlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcWluRXhwbG9yZXI7XHJcbiAgICB9XHJcbiAgICBnZXQgbmF0dXJlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9uYXR1cmU7XHJcbiAgICB9XHJcbiAgICBzZXQgbmF0dXJlKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5fbmF0dXJlID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5fcWluRXhwbG9yZXIubmF0dXJlID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBnZXQgb3BlcmF0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9vcGVyYXRpb247XHJcbiAgICB9XHJcbiAgICBzZXQgb3BlcmF0aW9uKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5fb3BlcmF0aW9uID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBnZXQgZGVzY3JpcHRvcnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0b3JzO1xyXG4gICAgfVxyXG4gICAgc2V0IGRlc2NyaXB0b3JzKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5fZGVzY3JpcHRvcnMgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIGdldCBzaW5nbGVTZWxlY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpbmdsZVNlbGVjdGlvbjtcclxuICAgIH1cclxuICAgIHNldCBzaW5nbGVTZWxlY3Rpb24odmFsdWUpIHtcclxuICAgICAgICB0aGlzLl9zaW5nbGVTZWxlY3Rpb24gPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLl9xaW5FeHBsb3Jlci5zaW5nbGVTZWxlY3Rpb24gPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIGxvYWRGb2xkZXIoKSB7XHJcbiAgICAgICAgdGhpcy5fcWluRXhwbG9yZXIubG9hZCh0aGlzLl9xaW5Gb2xkZXIuZ2V0RGF0YSgpLCAobG9hZGVkKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3FpbkZvbGRlci5zZXREYXRhKGxvYWRlZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBhZGRDaG9zZW4oY2hvc2VuKSB7XHJcbiAgICAgICAgdGhpcy5fbGlzdGVuZXJzLnB1c2goY2hvc2VuKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlFpbkZpbGVQaWNrID0gUWluRmlsZVBpY2s7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1maWxlLXBpY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5GaWxlVmlldyA9IHZvaWQgMDtcclxuY29uc3QgcWlucGVsX3Jlc18xID0gcmVxdWlyZShcInFpbnBlbC1yZXNcIik7XHJcbmNvbnN0IHFpbl9lZGl0XzEgPSByZXF1aXJlKFwiLi9xaW4tZWRpdFwiKTtcclxuY29uc3QgcWluX3BhbmVsXzEgPSByZXF1aXJlKFwiLi9xaW4tcGFuZWxcIik7XHJcbmNsYXNzIFFpbkZpbGVWaWV3IGV4dGVuZHMgcWluX2VkaXRfMS5RaW5FZGl0IHtcclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX3Fpbk1haW4gPSBuZXcgcWluX3BhbmVsXzEuUWluUGFuZWwoKTtcclxuICAgICAgICB0aGlzLl9mb2xkZXJBY3R1YWwgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuX2ZvbGRlclNlcnZlciA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5faXRlbXMgPSBbXTtcclxuICAgICAgICB0aGlzLl9uYXR1cmUgPSAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLm5hdHVyZSkgPyBvcHRpb25zLm5hdHVyZSA6IHFpbnBlbF9yZXNfMS5RaW5GaWxlc05hdHVyZS5CT1RIO1xyXG4gICAgICAgIHRoaXMuX2V4dGVuc2lvbnMgPSAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmV4dGVuc2lvbnMpID8gb3B0aW9ucy5leHRlbnNpb25zIDogW107XHJcbiAgICAgICAgdGhpcy5fc2luZ2xlU2VsZWN0aW9uID0gKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5zaW5nbGVTZWxlY3Rpb24pID8gb3B0aW9ucy5zaW5nbGVTZWxlY3Rpb24gOiBmYWxzZTtcclxuICAgICAgICB0aGlzLmluaXRNYWluKCk7XHJcbiAgICB9XHJcbiAgICBpbml0TWFpbigpIHtcclxuICAgICAgICBzdHlsZXMuYXBwbHlPbk1haW4odGhpcy5fcWluTWFpbi5nZXRNYWluKCkpO1xyXG4gICAgICAgIHRoaXMuX3Fpbk1haW4uYWRkQWN0aW9uKChxaW5FdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocWluRXZlbnQuaXNNYWluKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFuU2VsZWN0aW9uKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9xaW5NYWluLnN0eWxlLnB1dEFzRGlzYWJsZWRTZWxlY3Rpb24oKTtcclxuICAgIH1cclxuICAgIGdldE1haW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Fpbk1haW4uZ2V0TWFpbigpO1xyXG4gICAgfVxyXG4gICAgZ2V0TmF0dXJlKCkge1xyXG4gICAgICAgIHJldHVybiBxaW5wZWxfcmVzXzEuUWluTmF0dXJlLkNIQVJTO1xyXG4gICAgfVxyXG4gICAgZ2V0RGF0YSgpIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gW107XHJcbiAgICAgICAgdGhpcy5faXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXRlbS5pc1NlbGVjdGVkKCkpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHFpbnBlbF9yZXNfMS5RaW5Tb3VsLmZvb3QuZ2V0UGF0aEpvaW4odGhpcy5fZm9sZGVyU2VydmVyLCBpdGVtLmdldE5hbWUoKSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIHNldERhdGEoZGF0YSkge1xyXG4gICAgICAgIHRoaXMuY2xlYW4oKTtcclxuICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgbGV0IGZvbGRlclJvb3QgPSBxaW5wZWxfcmVzXzEuUWluU291bC5mb290LmdldFBhcmVudChkYXRhWzBdKTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkKGZvbGRlclJvb3QsIChfKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGl0ZW1QYXRoIG9mIGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbVJvb3QgPSBxaW5wZWxfcmVzXzEuUWluU291bC5mb290LmdldFBhcmVudChpdGVtUGF0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW1OYW1lID0gcWlucGVsX3Jlc18xLlFpblNvdWwuZm9vdC5nZXRTdGVtKGl0ZW1QYXRoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbVJvb3QgIT09IGZvbGRlclJvb3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5xaW5wZWwuam9iYmVkLnN0YXR1c0Vycm9yKGBUaGUgaXRlbSAnJHtpdGVtUGF0aH0nIGlzIG5vdCBvbiB0aGUgcm9vdCAnJHtmb2xkZXJSb290fScuYCwgXCJ7cWlucGVsLWNwc30oRXJyQ29kZS0wMDAwMDEpXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnNlbGVjdChpdGVtTmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucWlucGVsLmpvYmJlZC5zdGF0dXNFcnJvcihgRG9lcyBub3QgaGF2ZSB0aGUgaXRlbSAnJHtpdGVtTmFtZX0nIG9uIHRoZSBmb2xkZXIgJyR7Zm9sZGVyUm9vdH0nYCwgXCJ7cWlucGVsLWNwc30oRXJyQ29kZS0wMDAwMDIpXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQgcWluTWFpbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcWluTWFpbjtcclxuICAgIH1cclxuICAgIGdldCBuYXR1cmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX25hdHVyZTtcclxuICAgIH1cclxuICAgIHNldCBuYXR1cmUodmFsdWUpIHtcclxuICAgICAgICB0aGlzLl9uYXR1cmUgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIGdldCBleHRlbnNpb25zKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9leHRlbnNpb25zO1xyXG4gICAgfVxyXG4gICAgc2V0IGV4dGVuc2lvbnModmFsdWUpIHtcclxuICAgICAgICB0aGlzLl9leHRlbnNpb25zID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBnZXQgc2luZ2xlU2VsZWN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zaW5nbGVTZWxlY3Rpb247XHJcbiAgICB9XHJcbiAgICBzZXQgc2luZ2xlU2VsZWN0aW9uKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5fc2luZ2xlU2VsZWN0aW9uID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTaW5nbGVTZWxlY3Rpb24oKTtcclxuICAgIH1cclxuICAgIGdldCBmb2xkZXJBY3R1YWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZvbGRlckFjdHVhbDtcclxuICAgIH1cclxuICAgIGdldCBmb2xkZXJTZXJ2ZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZvbGRlclNlcnZlcjtcclxuICAgIH1cclxuICAgIHVwZGF0ZVNpbmdsZVNlbGVjdGlvbigpIHtcclxuICAgICAgICBpZiAodGhpcy5fc2luZ2xlU2VsZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGxldCBhbHJlYWR5SGFzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLl9pdGVtcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uaXNTZWxlY3RlZCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFscmVhZHlIYXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS51bnNlbGVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxyZWFkeUhhcyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbG9hZChmb2xkZXIsIG9uTG9hZCkge1xyXG4gICAgICAgIHRoaXMuY2xlYW4oKTtcclxuICAgICAgICB0aGlzLnFpbnBlbC50YWxrXHJcbiAgICAgICAgICAgIC5wb3N0KFwiL2Rpci9saXN0XCIsIHsgcGF0aDogZm9sZGVyIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fZm9sZGVyQWN0dWFsID0gZm9sZGVyO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBsaW5lIG9mIHFpbnBlbF9yZXNfMS5RaW5Tb3VsLmJvZHkuZ2V0VGV4dExpbmVzKHJlcy5kYXRhKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGxpbmVWYWx1ZSA9IGxpbmUuc3Vic3RyaW5nKDMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFsaW5lVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChsaW5lLnN0YXJ0c1dpdGgoXCJQOiBcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9mb2xkZXJTZXJ2ZXIgPSBsaW5lVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9uTG9hZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkxvYWQobGluZVZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChsaW5lLnN0YXJ0c1dpdGgoXCJEOiBcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fbmF0dXJlID09IHFpbnBlbF9yZXNfMS5RaW5GaWxlc05hdHVyZS5CT1RIIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX25hdHVyZSA9PSBxaW5wZWxfcmVzXzEuUWluRmlsZXNOYXR1cmUuRElSRUNUT1JJRVMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXdEaXIobGluZVZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChsaW5lLnN0YXJ0c1dpdGgoXCJGOiBcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fbmF0dXJlID09IHFpbnBlbF9yZXNfMS5RaW5GaWxlc05hdHVyZS5CT1RIIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX25hdHVyZSA9PSBxaW5wZWxfcmVzXzEuUWluRmlsZXNOYXR1cmUuRklMRVMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGV4dGVuc2lvbiA9IHFpbnBlbF9yZXNfMS5RaW5Tb3VsLmZvb3QuZ2V0RmlsZUV4dGVuc2lvbihsaW5lVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGFzc2VkRXh0ZW5zaW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2V4dGVuc2lvbnMgJiYgdGhpcy5fZXh0ZW5zaW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXNzZWRFeHRlbnNpb24gPSB0aGlzLl9leHRlbnNpb25zLmluZGV4T2YoZXh0ZW5zaW9uKSA+IC0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXNzZWRFeHRlbnNpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmV3RmlsZShsaW5lVmFsdWUsIGV4dGVuc2lvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnFpbnBlbC5qb2JiZWQuc3RhdHVzRXJyb3IoZXJyLCBcIntxaW5wZWwtY3BzfShFcnJDb2RlLTAwMDAwMylcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZWxvYWQob25Mb2FkKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkKHRoaXMuX2ZvbGRlclNlcnZlciwgb25Mb2FkKTtcclxuICAgIH1cclxuICAgIGdvRm9sZGVyVXAob25Mb2FkKSB7XHJcbiAgICAgICAgbGV0IHBhcmVudCA9IHFpbnBlbF9yZXNfMS5RaW5Gb290LmdldFBhcmVudCh0aGlzLl9mb2xkZXJTZXJ2ZXIpO1xyXG4gICAgICAgIGlmIChwYXJlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkKHBhcmVudCwgb25Mb2FkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjbGVhbigpIHtcclxuICAgICAgICB0aGlzLl9xaW5NYWluLmdldE1haW4oKS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuX2l0ZW1zID0gW107XHJcbiAgICAgICAgdGhpcy5fZm9sZGVyQWN0dWFsID0gXCJcIjtcclxuICAgICAgICB0aGlzLl9mb2xkZXJTZXJ2ZXIgPSBcIlwiO1xyXG4gICAgfVxyXG4gICAgY2xlYW5TZWxlY3Rpb24oKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMuX2l0ZW1zKSB7XHJcbiAgICAgICAgICAgIGl0ZW0udW5zZWxlY3QoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZWxlY3QoaXRlbU5hbWUpIHtcclxuICAgICAgICBsZXQgaXRlbSA9IHRoaXMuX2l0ZW1zLmZpbmQoKGluc2lkZSkgPT4gaW5zaWRlLmdldE5hbWUoKSA9PSBpdGVtTmFtZSk7XHJcbiAgICAgICAgaWYgKGl0ZW0pIHtcclxuICAgICAgICAgICAgaXRlbS5zZWxlY3QoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdW5zZWxlY3QoaXRlbU5hbWUpIHtcclxuICAgICAgICBsZXQgaXRlbSA9IHRoaXMuX2l0ZW1zLmZpbmQoKGluc2lkZSkgPT4gaW5zaWRlLmdldE5hbWUoKSA9PSBpdGVtTmFtZSk7XHJcbiAgICAgICAgaWYgKGl0ZW0pIHtcclxuICAgICAgICAgICAgaXRlbS51bnNlbGVjdCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBuZXdEaXIobmFtZSkge1xyXG4gICAgICAgIHRoaXMubmV3SXRlbShuYW1lLCBcImV4cGxvcmVyLWRpci5wbmdcIik7XHJcbiAgICB9XHJcbiAgICBuZXdGaWxlKG5hbWUsIGV4dGVuc2lvbikge1xyXG4gICAgICAgIHRoaXMubmV3SXRlbShuYW1lLCBnZXRJY29uTmFtZShleHRlbnNpb24pKTtcclxuICAgIH1cclxuICAgIG5ld0l0ZW0obmFtZSwgaWNvbikge1xyXG4gICAgICAgIGNvbnN0IGl0ZW0gPSBuZXcgSXRlbSh0aGlzLCBuYW1lLCBpY29uKTtcclxuICAgICAgICBpdGVtLmluc3RhbGwodGhpcy5fcWluTWFpbi5nZXRNYWluKCkpO1xyXG4gICAgICAgIHRoaXMuX2l0ZW1zLnB1c2goaXRlbSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5RaW5GaWxlVmlldyA9IFFpbkZpbGVWaWV3O1xyXG5jbGFzcyBJdGVtIHtcclxuICAgIGNvbnN0cnVjdG9yKGV4cGxvcmVyLCBmaWxlTmFtZSwgaWNvbk5hbWUpIHtcclxuICAgICAgICB0aGlzLmRpdkl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRoaXMuZGl2SXRlbUJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRoaXMuc3Bhbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICB0aGlzLmltZ0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgIHRoaXMuc3BhblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5leHBsb3JlciA9IGV4cGxvcmVyO1xyXG4gICAgICAgIHRoaXMuZmlsZU5hbWUgPSBmaWxlTmFtZTtcclxuICAgICAgICB0aGlzLmljb25OYW1lID0gaWNvbk5hbWU7XHJcbiAgICAgICAgdGhpcy5pbml0SXRlbSgpO1xyXG4gICAgfVxyXG4gICAgaW5pdEl0ZW0oKSB7XHJcbiAgICAgICAgc3R5bGVzLmFwcGx5T25EaXZJdGVtKHRoaXMuZGl2SXRlbSk7XHJcbiAgICAgICAgdGhpcy5kaXZJdGVtLnRhYkluZGV4ID0gMDtcclxuICAgICAgICBzdHlsZXMuYXBwbHlPbkRpdkl0ZW1Cb2R5KHRoaXMuZGl2SXRlbUJvZHkpO1xyXG4gICAgICAgIHRoaXMuZGl2SXRlbS5hcHBlbmRDaGlsZCh0aGlzLmRpdkl0ZW1Cb2R5KTtcclxuICAgICAgICBzdHlsZXMuYXBwbHlPblNwYW5JY29uKHRoaXMuc3Bhbkljb24pO1xyXG4gICAgICAgIHRoaXMuZGl2SXRlbUJvZHkuYXBwZW5kQ2hpbGQodGhpcy5zcGFuSWNvbik7XHJcbiAgICAgICAgdGhpcy5pbWdJY29uLnNyYyA9IFwiL2FwcC9xaW5wZWwtYXBwL2Fzc2V0cy9cIiArIHRoaXMuaWNvbk5hbWU7XHJcbiAgICAgICAgdGhpcy5zcGFuSWNvbi5hcHBlbmRDaGlsZCh0aGlzLmltZ0ljb24pO1xyXG4gICAgICAgIHRoaXMuc3BhblRleHQuaW5uZXJUZXh0ID0gdGhpcy5maWxlTmFtZTtcclxuICAgICAgICBzdHlsZXMuYXBwbHlPblNwYW5UZXh0KHRoaXMuc3BhblRleHQpO1xyXG4gICAgICAgIHRoaXMuZGl2SXRlbUJvZHkuYXBwZW5kQ2hpbGQodGhpcy5zcGFuVGV4dCk7XHJcbiAgICAgICAgcWlucGVsX3Jlc18xLlFpblNvdWwuYXJtLmFkZEFjdGlvbih0aGlzLmRpdkl0ZW0sIChxaW5FdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocWluRXZlbnQuaXNNYWluKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpdkl0ZW0uZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlKCk7XHJcbiAgICAgICAgICAgICAgICBxaW5FdmVudC5jb25zdW1lZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpbnN0YWxsKG9uKSB7XHJcbiAgICAgICAgb24uYXBwZW5kQ2hpbGQodGhpcy5kaXZJdGVtKTtcclxuICAgIH1cclxuICAgIHNlbGVjdCgpIHtcclxuICAgICAgICBzdHlsZXMuYXBwbHlPbkRpdlNlbGVjdCh0aGlzLmRpdkl0ZW0pO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgdW5zZWxlY3QoKSB7XHJcbiAgICAgICAgc3R5bGVzLmFwcGx5T25EaXZVblNlbGVjdCh0aGlzLmRpdkl0ZW0pO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHRvZ2dsZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnVuc2VsZWN0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5leHBsb3Jlci5zaW5nbGVTZWxlY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXhwbG9yZXIuY2xlYW5TZWxlY3Rpb24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldE5hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsZU5hbWU7XHJcbiAgICB9XHJcbiAgICBpc1NlbGVjdGVkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGdldEljb25OYW1lKGZyb21FeHRlbnNpb24pIHtcclxuICAgIGxldCByZXN1bHQgPSBcImV4cGxvcmVyLWZpbGUucG5nXCI7XHJcbiAgICBpZiAocWlucGVsX3Jlc18xLlFpblNvdWwuZm9vdC5pc0ZpbGVBcHAoZnJvbUV4dGVuc2lvbikpIHtcclxuICAgICAgICByZXN1bHQgPSBcImV4cGxvcmVyLWFwcHMucG5nXCI7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChxaW5wZWxfcmVzXzEuUWluU291bC5mb290LmlzRmlsZUNtZChmcm9tRXh0ZW5zaW9uKSkge1xyXG4gICAgICAgIHJlc3VsdCA9IFwiZXhwbG9yZXItY21kcy5wbmdcIjtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHFpbnBlbF9yZXNfMS5RaW5Tb3VsLmZvb3QuaXNGaWxlRXhlYyhmcm9tRXh0ZW5zaW9uKSkge1xyXG4gICAgICAgIHJlc3VsdCA9IFwiZXhwbG9yZXItZXhlYy5wbmdcIjtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHFpbnBlbF9yZXNfMS5RaW5Tb3VsLmZvb3QuaXNGaWxlSW1hZ2UoZnJvbUV4dGVuc2lvbikpIHtcclxuICAgICAgICByZXN1bHQgPSBcImV4cGxvcmVyLWltYWdlLnBuZ1wiO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocWlucGVsX3Jlc18xLlFpblNvdWwuZm9vdC5pc0ZpbGVWZWN0b3IoZnJvbUV4dGVuc2lvbikpIHtcclxuICAgICAgICByZXN1bHQgPSBcImV4cGxvcmVyLWltYWdlLnBuZ1wiO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocWlucGVsX3Jlc18xLlFpblNvdWwuZm9vdC5pc0ZpbGVNdXNpYyhmcm9tRXh0ZW5zaW9uKSkge1xyXG4gICAgICAgIHJlc3VsdCA9IFwiZXhwbG9yZXItbXVzaWMucG5nXCI7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChxaW5wZWxfcmVzXzEuUWluU291bC5mb290LmlzRmlsZU1vdmllKGZyb21FeHRlbnNpb24pKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gXCJleHBsb3Jlci1tb3ZpZS5wbmdcIjtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHFpbnBlbF9yZXNfMS5RaW5Tb3VsLmZvb3QuaXNGaWxlWmlwcGVkKGZyb21FeHRlbnNpb24pKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gXCJleHBsb3Jlci16aXBwZWQucG5nXCI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICAgIGFwcGx5T25NYWluOiAoZWwpID0+IHtcclxuICAgICAgICBxaW5wZWxfcmVzXzEuUWluU291bC5za2luLnN0eWxlQXNFZGl0KGVsKTtcclxuICAgICAgICBlbC5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiO1xyXG4gICAgICAgIGVsLnN0eWxlLm1pbldpZHRoID0gXCIxNjBweFwiO1xyXG4gICAgICAgIGVsLnN0eWxlLm1pbkhlaWdodCA9IFwiMTYwcHhcIjtcclxuICAgICAgICBlbC50YWJJbmRleCA9IDA7XHJcbiAgICB9LFxyXG4gICAgYXBwbHlPbkRpdkl0ZW06IChlbCkgPT4ge1xyXG4gICAgICAgIGVsLnN0eWxlLm1hcmdpbiA9IFwiMnB4XCI7XHJcbiAgICAgICAgZWwuc3R5bGUucGFkZGluZyA9IFwiOXB4XCI7XHJcbiAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgICAgICAgZWwuc3R5bGUub3V0bGluZSA9IFwibm9uZVwiO1xyXG4gICAgICAgIGVsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2ZmZmZmZlwiO1xyXG4gICAgICAgIGVsLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICMzNjAwNDVcIjtcclxuICAgICAgICBlbC5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjNweFwiO1xyXG4gICAgICAgIGVsLnN0eWxlLmNvbG9yID0gXCIjMjcwMDM2XCI7XHJcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsICgpID0+IHtcclxuICAgICAgICAgICAgZWwuc3R5bGUub3V0bGluZSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICBlbC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjYWUwMDAwXCI7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsICgpID0+IHtcclxuICAgICAgICAgICAgZWwuc3R5bGUub3V0bGluZSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICBlbC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjMzYwMDQ1XCI7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgYXBwbHlPbkRpdkl0ZW1Cb2R5OiAoZWwpID0+IHtcclxuICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgZWwuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwiY29sdW1uXCI7XHJcbiAgICAgICAgZWwuc3R5bGUud2lkdGggPSBcIjk2cHhcIjtcclxuICAgIH0sXHJcbiAgICBhcHBseU9uU3Bhbkljb246IChlbCkgPT4ge1xyXG4gICAgICAgIGVsLnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgICB9LFxyXG4gICAgYXBwbHlPblNwYW5UZXh0OiAoZWwpID0+IHtcclxuICAgICAgICBlbC5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xyXG4gICAgICAgIGVsLnN0eWxlLndvcmRXcmFwID0gXCJicmVhay13b3JkXCI7XHJcbiAgICB9LFxyXG4gICAgYXBwbHlPbkRpdlNlbGVjdDogKGVsKSA9PiB7XHJcbiAgICAgICAgZWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZmFlZmZmXCI7XHJcbiAgICB9LFxyXG4gICAgYXBwbHlPbkRpdlVuU2VsZWN0OiAoZWwpID0+IHtcclxuICAgICAgICBlbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNmZmZmZmZcIjtcclxuICAgIH0sXHJcbn07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1maWxlLXZpZXcuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5JY29uQ2VsbCA9IHZvaWQgMDtcclxuY29uc3QgcWlucGVsX3Jlc18xID0gcmVxdWlyZShcInFpbnBlbC1yZXNcIik7XHJcbmNvbnN0IHFpbl9iYXNlXzEgPSByZXF1aXJlKFwiLi9xaW4tYmFzZVwiKTtcclxuY2xhc3MgUWluSWNvbkNlbGwgZXh0ZW5kcyBxaW5fYmFzZV8xLlFpbkJhc2Uge1xyXG4gICAgY29uc3RydWN0b3IoaWNvbikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5fZWxNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aGlzLl9zZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBib3JkZXIgPSBNYXRoLnJvdW5kKGljb24uc2l6ZS53aWR0aCAvIDEwKTtcclxuICAgICAgICBsZXQgcGFkZGluZyA9IGJvcmRlciAqIDI7XHJcbiAgICAgICAgdGhpcy5fZWxNYWluLnN0eWxlLmJvcmRlclJhZGl1cyA9IGJvcmRlciArIFwicHhcIjtcclxuICAgICAgICB0aGlzLl9lbE1haW4uc3R5bGUucGFkZGluZyA9IHBhZGRpbmcgKyBcInB4XCI7XHJcbiAgICAgICAgdGhpcy5fZWxNYWluLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICB0aGlzLl9xaW5JY29uID0gaWNvbjtcclxuICAgICAgICB0aGlzLl9xaW5JY29uLmluc3RhbGwodGhpcyk7XHJcbiAgICB9XHJcbiAgICBnZXRNYWluKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9lbE1haW47XHJcbiAgICB9XHJcbiAgICBnZXQgcWluSWNvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcWluSWNvbjtcclxuICAgIH1cclxuICAgIGdldCBzZWxlY3RlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWQ7XHJcbiAgICB9XHJcbiAgICBzZXQgc2VsZWN0ZWQoc2VsZWN0ZWQpIHtcclxuICAgICAgICB0aGlzLl9zZWxlY3RlZCA9IHNlbGVjdGVkO1xyXG4gICAgICAgIGlmICh0aGlzLl9zZWxlY3RlZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9lbE1haW4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcWlucGVsX3Jlc18xLlFpblNraW4uc3R5bGVzLkNvbG9yU2VsZWN0ZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9lbE1haW4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJpbml0aWFsXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUWluSWNvbkNlbGwgPSBRaW5JY29uQ2VsbDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWljb24tY2VsbC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlFpbkljb25QaWNrID0gdm9pZCAwO1xyXG5jb25zdCBxaW5wZWxfcmVzXzEgPSByZXF1aXJlKFwicWlucGVsLXJlc1wiKTtcclxuY29uc3QgcWluX2VkaXRfMSA9IHJlcXVpcmUoXCIuL3Fpbi1lZGl0XCIpO1xyXG5jb25zdCBxaW5faWNvbl9jZWxsXzEgPSByZXF1aXJlKFwiLi9xaW4taWNvbi1jZWxsXCIpO1xyXG5jb25zdCBxaW5fbGluZV8xID0gcmVxdWlyZShcIi4vcWluLWxpbmVcIik7XHJcbmNsYXNzIFFpbkljb25QaWNrIGV4dGVuZHMgcWluX2VkaXRfMS5RaW5FZGl0IHtcclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX3Fpbk1haW4gPSBuZXcgcWluX2xpbmVfMS5RaW5MaW5lKCk7XHJcbiAgICAgICAgdGhpcy5fcWluTWFpbi5zdHlsZS5wdXRBc0VkaXQoKTtcclxuICAgICAgICBpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmluaXRpYWwpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5pbml0aWFsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5pY29ucykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGljb24gb2Ygb3B0aW9ucy5pY29ucykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRJY29uKGljb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuY2VsbHMpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBjZWxsIG9mIG9wdGlvbnMuY2VsbHMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkQ2VsbChjZWxsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldE1haW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Fpbk1haW4uZ2V0TWFpbigpO1xyXG4gICAgfVxyXG4gICAgZ2V0TmF0dXJlKCkge1xyXG4gICAgICAgIHJldHVybiBxaW5wZWxfcmVzXzEuUWluTmF0dXJlLkNIQVJTO1xyXG4gICAgfVxyXG4gICAgZ2V0RGF0YSgpIHtcclxuICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLmNoaWxkcmVuKCkpIHtcclxuICAgICAgICAgICAgaWYgKGNoaWxkIGluc3RhbmNlb2YgcWluX2ljb25fY2VsbF8xLlFpbkljb25DZWxsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQuc2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGQucWluSWNvbi5hc3NldDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIHNldERhdGEoYXNzZXQpIHtcclxuICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLl9xaW5NYWluLmNoaWxkcmVuKCkpIHtcclxuICAgICAgICAgICAgaWYgKGNoaWxkIGluc3RhbmNlb2YgcWluX2ljb25fY2VsbF8xLlFpbkljb25DZWxsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQucWluSWNvbi5hc3NldCA9PSBhc3NldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQgcWluTWFpbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcWluTWFpbjtcclxuICAgIH1cclxuICAgIGFkZEljb24oaWNvbikge1xyXG4gICAgICAgIGxldCBvcHRpb24gPSBuZXcgcWluX2ljb25fY2VsbF8xLlFpbkljb25DZWxsKGljb24pO1xyXG4gICAgICAgIG9wdGlvbi5pbnN0YWxsKHRoaXMuX3Fpbk1haW4pO1xyXG4gICAgfVxyXG4gICAgYWRkQ2VsbChvcHRpb24pIHtcclxuICAgICAgICBvcHRpb24uaW5zdGFsbCh0aGlzLl9xaW5NYWluKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlFpbkljb25QaWNrID0gUWluSWNvblBpY2s7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1pY29uLXBpY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5JY29uID0gdm9pZCAwO1xyXG5jb25zdCBxaW5wZWxfcmVzXzEgPSByZXF1aXJlKFwicWlucGVsLXJlc1wiKTtcclxuY29uc3QgcWluX2Fzc2V0c18xID0gcmVxdWlyZShcIi4vcWluLWFzc2V0c1wiKTtcclxuY29uc3QgcWluX2Jhc2VfMSA9IHJlcXVpcmUoXCIuL3Fpbi1iYXNlXCIpO1xyXG5jbGFzcyBRaW5JY29uIGV4dGVuZHMgcWluX2Jhc2VfMS5RaW5CYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKGFzc2V0LCBzaXplID0gcWlucGVsX3Jlc18xLlFpbkdyYW5kZXVyLlNNQUxMKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl9lbE1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgIHRoaXMuX2VsTWFpbi5zcmMgPSAoMCwgcWluX2Fzc2V0c18xLnFpbkFzc2V0VXJsKShhc3NldCk7XHJcbiAgICAgICAgcWlucGVsX3Jlc18xLlFpblNraW4uc3R5bGVTaXplKHRoaXMuX2VsTWFpbiwgc2l6ZSk7XHJcbiAgICB9XHJcbiAgICBnZXRNYWluKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9lbE1haW47XHJcbiAgICB9XHJcbiAgICBnZXQgYXNzZXQoKSB7XHJcbiAgICAgICAgcmV0dXJuICgwLCBxaW5fYXNzZXRzXzEucWluVXJsQXNzZXQpKHRoaXMuX2VsTWFpbi5zcmMpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFzc2V0KGFzc2V0KSB7XHJcbiAgICAgICAgdGhpcy5fZWxNYWluLnNyYyA9ICgwLCBxaW5fYXNzZXRzXzEucWluQXNzZXRVcmwpKGFzc2V0KTtcclxuICAgIH1cclxuICAgIGdldCBzaXplKCkge1xyXG4gICAgICAgIHJldHVybiBxaW5wZWxfcmVzXzEuUWluU2tpbi5nZXREaW1lbnNpb24odGhpcy5fZWxNYWluKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlFpbkljb24gPSBRaW5JY29uO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4taWNvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlFpbkludGVnZXIgPSB2b2lkIDA7XHJcbmNvbnN0IHFpbnBlbF9yZXNfMSA9IHJlcXVpcmUoXCJxaW5wZWwtcmVzXCIpO1xyXG5jb25zdCBxaW5fZWRpdF8xID0gcmVxdWlyZShcIi4vcWluLWVkaXRcIik7XHJcbmNsYXNzIFFpbkludGVnZXIgZXh0ZW5kcyBxaW5fZWRpdF8xLlFpbkVkaXQge1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5fZWxNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgIHRoaXMuX2VsTWFpbi50eXBlID0gXCJudW1iZXJcIjtcclxuICAgICAgICBxaW5wZWxfcmVzXzEuUWluU291bC5za2luLnN0eWxlQXNFZGl0KHRoaXMuX2VsTWFpbik7XHJcbiAgICAgICAgdGhpcy5fZWxNYWluLnN0eWxlLndpZHRoID0gXCIxMjBweFwiO1xyXG4gICAgICAgIHRoaXMuX2VsTWFpbi5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEodGhpcy5nZXREYXRhKCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuaW5pdGlhbCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEob3B0aW9ucy5pbml0aWFsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXROYXR1cmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHFpbnBlbF9yZXNfMS5RaW5OYXR1cmUuSU5UO1xyXG4gICAgfVxyXG4gICAgZ2V0TWFpbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZWxNYWluO1xyXG4gICAgfVxyXG4gICAgZ2V0RGF0YSgpIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuX2VsTWFpbi52YWx1ZTtcclxuICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCB8fCB2YWx1ZSA9PSB1bmRlZmluZWQgfHwgdmFsdWUubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQodGhpcy5fZWxNYWluLnZhbHVlLCAxMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2V0RGF0YShkYXRhKSB7XHJcbiAgICAgICAgaWYgKGRhdGEgPT0gbnVsbCB8fCBkYXRhID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9lbE1haW4udmFsdWUgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fZWxNYWluLnZhbHVlID0gKGRhdGEgfCAwKS50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLlFpbkludGVnZXIgPSBRaW5JbnRlZ2VyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4taW50ZWdlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlFpbkxhYmVsID0gdm9pZCAwO1xyXG5jb25zdCBxaW5fYmFzZV8xID0gcmVxdWlyZShcIi4vcWluLWJhc2VcIik7XHJcbmNsYXNzIFFpbkxhYmVsIGV4dGVuZHMgcWluX2Jhc2VfMS5RaW5CYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl9lbE1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICAgICAgaWYgKHRpdGxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2VsTWFpbi50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldE1haW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsTWFpbjtcclxuICAgIH1cclxuICAgIGdldCB0aXRsZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZWxNYWluLnRleHRDb250ZW50O1xyXG4gICAgfVxyXG4gICAgc2V0IHRpdGxlKHRpdGxlKSB7XHJcbiAgICAgICAgdGhpcy5fZWxNYWluLnRleHRDb250ZW50ID0gdGl0bGU7XHJcbiAgICB9XHJcbiAgICBnZXQgbGluaygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZWxNYWluLmdldEF0dHJpYnV0ZShcImZvclwiKTtcclxuICAgIH1cclxuICAgIHNldCBsaW5rKG5hbWUpIHtcclxuICAgICAgICB0aGlzLl9lbE1haW4uc2V0QXR0cmlidXRlKFwiZm9yXCIsIG5hbWUpO1xyXG4gICAgfVxyXG4gICAgcWluTGluayhxaW5Db21wKSB7XHJcbiAgICAgICAgdGhpcy5saW5rID0gcWluQ29tcC5tdXN0SWQoKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlFpbkxhYmVsID0gUWluTGFiZWw7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1sYWJlbC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlFpbkxpbmUgPSB2b2lkIDA7XHJcbmNvbnN0IHFpbl9wYW5lbF8xID0gcmVxdWlyZShcIi4vcWluLXBhbmVsXCIpO1xyXG5jbGFzcyBRaW5MaW5lIGV4dGVuZHMgcWluX3BhbmVsXzEuUWluUGFuZWwge1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgICAgIHN1cGVyKG9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuc3R5bGUucHV0QXNGbGV4RGlyZWN0aW9uUm93KCk7XHJcbiAgICAgICAgdGhpcy5zdHlsZS5wdXRBc0ZsZXhXcmFwKCk7XHJcbiAgICAgICAgdGhpcy5nZXRNYWluKCkuc3R5bGUubWluV2lkdGggPSBcIm1pbi1jb250ZW50XCI7XHJcbiAgICAgICAgdGhpcy5nZXRNYWluKCkuc3R5bGUubWluSGVpZ2h0ID0gXCJtaW4tY29udGVudFwiO1xyXG4gICAgfVxyXG4gICAgcHV0KGl0ZW0pIHtcclxuICAgICAgICBpdGVtLmluc3RhbGwodGhpcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5RaW5MaW5lID0gUWluTGluZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWxpbmUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5NdXRhbnRzQXJtID0gZXhwb3J0cy5RaW5NdXRhbnRzID0gdm9pZCAwO1xyXG5jb25zdCBxaW5fYm9vbGVhbl8xID0gcmVxdWlyZShcIi4vcWluLWJvb2xlYW5cIik7XHJcbmNvbnN0IHFpbl9jb21ib18xID0gcmVxdWlyZShcIi4vcWluLWNvbWJvXCIpO1xyXG5jb25zdCBxaW5fZmlsZV9wYXRoXzEgPSByZXF1aXJlKFwiLi9xaW4tZmlsZS1wYXRoXCIpO1xyXG5jb25zdCBxaW5fZmlsZV9waWNrXzEgPSByZXF1aXJlKFwiLi9xaW4tZmlsZS1waWNrXCIpO1xyXG5jb25zdCBxaW5fZmlsZV92aWV3XzEgPSByZXF1aXJlKFwiLi9xaW4tZmlsZS12aWV3XCIpO1xyXG5jb25zdCBxaW5faWNvbl9waWNrXzEgPSByZXF1aXJlKFwiLi9xaW4taWNvbi1waWNrXCIpO1xyXG5jb25zdCBxaW5faW50ZWdlcl8xID0gcmVxdWlyZShcIi4vcWluLWludGVnZXJcIik7XHJcbmNvbnN0IHFpbl9zdHJpbmdfMSA9IHJlcXVpcmUoXCIuL3Fpbi1zdHJpbmdcIik7XHJcbnZhciBRaW5NdXRhbnRzO1xyXG4oZnVuY3Rpb24gKFFpbk11dGFudHMpIHtcclxuICAgIFFpbk11dGFudHNbXCJCT09MRUFOXCJdID0gXCJib29sZWFuXCI7XHJcbiAgICBRaW5NdXRhbnRzW1wiSU5URUdFUlwiXSA9IFwiaW50ZWdlclwiO1xyXG4gICAgUWluTXV0YW50c1tcIlNUUklOR1wiXSA9IFwic3RyaW5nXCI7XHJcbiAgICBRaW5NdXRhbnRzW1wiQ09NQk9cIl0gPSBcImNvbWJvXCI7XHJcbiAgICBRaW5NdXRhbnRzW1wiSUNPTl9QSUNLXCJdID0gXCJpY29uLXBpY2tcIjtcclxuICAgIFFpbk11dGFudHNbXCJGSUxFX1BBVEhcIl0gPSBcImZpbGVfcGF0aFwiO1xyXG4gICAgUWluTXV0YW50c1tcIkZJTEVfUElDS1wiXSA9IFwiZmlsZV9waWNrXCI7XHJcbiAgICBRaW5NdXRhbnRzW1wiRklMRV9WSUVXXCJdID0gXCJmaWxlX3ZpZXdcIjtcclxufSkoUWluTXV0YW50cyA9IGV4cG9ydHMuUWluTXV0YW50cyB8fCAoZXhwb3J0cy5RaW5NdXRhbnRzID0ge30pKTtcclxuZnVuY3Rpb24gbmV3RWRpdChraW5kLCBvcHRpb25zKSB7XHJcbiAgICBzd2l0Y2ggKGtpbmQpIHtcclxuICAgICAgICBjYXNlIFFpbk11dGFudHMuQk9PTEVBTjpcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBxaW5fYm9vbGVhbl8xLlFpbkJvb2xlYW4ob3B0aW9ucyk7XHJcbiAgICAgICAgY2FzZSBRaW5NdXRhbnRzLklOVEVHRVI6XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgcWluX2ludGVnZXJfMS5RaW5JbnRlZ2VyKG9wdGlvbnMpO1xyXG4gICAgICAgIGNhc2UgUWluTXV0YW50cy5TVFJJTkc6XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgcWluX3N0cmluZ18xLlFpblN0cmluZyhvcHRpb25zKTtcclxuICAgICAgICBjYXNlIFFpbk11dGFudHMuQ09NQk86XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgcWluX2NvbWJvXzEuUWluQ29tYm8ob3B0aW9ucyk7XHJcbiAgICAgICAgY2FzZSBRaW5NdXRhbnRzLklDT05fUElDSzpcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBxaW5faWNvbl9waWNrXzEuUWluSWNvblBpY2sob3B0aW9ucyk7XHJcbiAgICAgICAgY2FzZSBRaW5NdXRhbnRzLkZJTEVfUEFUSDpcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBxaW5fZmlsZV9wYXRoXzEuUWluRmlsZVBhdGgob3B0aW9ucyk7XHJcbiAgICAgICAgY2FzZSBRaW5NdXRhbnRzLkZJTEVfUElDSzpcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBxaW5fZmlsZV9waWNrXzEuUWluRmlsZVBpY2sob3B0aW9ucyk7XHJcbiAgICAgICAgY2FzZSBRaW5NdXRhbnRzLkZJTEVfVklFVzpcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBxaW5fZmlsZV92aWV3XzEuUWluRmlsZVZpZXcob3B0aW9ucyk7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5rbm93biBraW5kIG9mIG11dGFudCB0byBjcmVhdGU6IFwiICsga2luZCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5RaW5NdXRhbnRzQXJtID0ge1xyXG4gICAgbmV3RWRpdCxcclxufTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLW11dGFudHMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5QYW5lbCA9IHZvaWQgMDtcclxuY29uc3QgcWluX2Jhc2VfMSA9IHJlcXVpcmUoXCIuL3Fpbi1iYXNlXCIpO1xyXG5jbGFzcyBRaW5QYW5lbCBleHRlbmRzIHFpbl9iYXNlXzEuUWluQmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl9lbE1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRoaXMuc3R5bGUucHV0QXNEaXNwbGF5RmxleCgpO1xyXG4gICAgICAgIGlmIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuaXRlbXMpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIG9wdGlvbnMuaXRlbXMpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uaW5zdGFsbCh0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldE1haW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsTWFpbjtcclxuICAgIH1cclxuICAgIHB1dChpdGVtKSB7XHJcbiAgICAgICAgaXRlbS5pbnN0YWxsKHRoaXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUWluUGFuZWwgPSBRaW5QYW5lbDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLXBhbmVsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluUG9wdXAgPSB2b2lkIDA7XHJcbmNvbnN0IHFpbl90b29sc18xID0gcmVxdWlyZShcIi4vcWluLXRvb2xzXCIpO1xyXG5jbGFzcyBRaW5Qb3B1cCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZW50cykge1xyXG4gICAgICAgIHRoaXMuX3Fpbk1haW4gPSBxaW5fdG9vbHNfMS5RaW5Ub29scy5xaW5wZWwoKS5qb2JiZWQubmV3UG9wdXAoY29udGVudHMuZ2V0TWFpbigpKTtcclxuICAgIH1cclxuICAgIHNob3coKSB7XHJcbiAgICAgICAgdGhpcy5fcWluTWFpbi5zaG93KCk7XHJcbiAgICB9XHJcbiAgICBzaG93T25QYXJlbnQocGFyZW50KSB7XHJcbiAgICAgICAgdGhpcy5fcWluTWFpbi5zaG93T25QYXJlbnQocGFyZW50LmdldE1haW4oKSk7XHJcbiAgICB9XHJcbiAgICBzaG93T25Cb3VuZHMoYm91bmRzKSB7XHJcbiAgICAgICAgdGhpcy5fcWluTWFpbi5zaG93T25Cb3VuZHMoYm91bmRzKTtcclxuICAgIH1cclxuICAgIGNsb3NlKCkge1xyXG4gICAgICAgIHRoaXMuX3Fpbk1haW4uY2xvc2UoKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlFpblBvcHVwID0gUWluUG9wdXA7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1wb3B1cC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlFpblJvdyA9IHZvaWQgMDtcclxuY29uc3QgcWluX3BhbmVsXzEgPSByZXF1aXJlKFwiLi9xaW4tcGFuZWxcIik7XHJcbmNsYXNzIFFpblJvdyBleHRlbmRzIHFpbl9wYW5lbF8xLlFpblBhbmVsIHtcclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgICAgICBzdXBlcihvcHRpb25zKTtcclxuICAgICAgICB0aGlzLnN0eWxlLnB1dEFzRmxleERpcmVjdGlvblJvdygpO1xyXG4gICAgICAgIHRoaXMuc3R5bGUucHV0QXNGbGV4V3JhcE5vdCgpO1xyXG4gICAgICAgIHRoaXMuZ2V0TWFpbigpLnN0eWxlLm1pbldpZHRoID0gXCJtaW4tY29udGVudFwiO1xyXG4gICAgICAgIHRoaXMuZ2V0TWFpbigpLnN0eWxlLm1pbkhlaWdodCA9IFwibWluLWNvbnRlbnRcIjtcclxuICAgIH1cclxuICAgIHB1dChpdGVtKSB7XHJcbiAgICAgICAgaXRlbS5pbnN0YWxsKHRoaXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUWluUm93ID0gUWluUm93O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tcm93LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluU2Nyb2xsID0gdm9pZCAwO1xyXG5jb25zdCBxaW5fcGFuZWxfMSA9IHJlcXVpcmUoXCIuL3Fpbi1wYW5lbFwiKTtcclxuY2xhc3MgUWluU2Nyb2xsIGV4dGVuZHMgcWluX3BhbmVsXzEuUWluUGFuZWwge1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgICAgIHN1cGVyKG9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuc3R5bGUucHV0QXNTY3JvbGwoKTtcclxuICAgIH1cclxuICAgIHB1dChpdGVtKSB7XHJcbiAgICAgICAgaXRlbS5pbnN0YWxsKHRoaXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUWluU2Nyb2xsID0gUWluU2Nyb2xsO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tc2Nyb2xsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluU3BhY2VyID0gdm9pZCAwO1xyXG5jb25zdCBxaW5fcGFuZWxfMSA9IHJlcXVpcmUoXCIuL3Fpbi1wYW5lbFwiKTtcclxuY2xhc3MgUWluU3BhY2VyIGV4dGVuZHMgcWluX3BhbmVsXzEuUWluUGFuZWwge1xyXG4gICAgY29uc3RydWN0b3IoZGlzdGFuY2UpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc3R5bGUucHV0QXNNaW5TaXplKGRpc3RhbmNlICE9PSBudWxsICYmIGRpc3RhbmNlICE9PSB2b2lkIDAgPyBkaXN0YW5jZSA6IDQsIGRpc3RhbmNlICE9PSBudWxsICYmIGRpc3RhbmNlICE9PSB2b2lkIDAgPyBkaXN0YW5jZSA6IDQpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUWluU3BhY2VyID0gUWluU3BhY2VyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tc3BhY2VyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluU3BsaXR0ZXIgPSB2b2lkIDA7XHJcbmNvbnN0IHFpbl9iYXNlXzEgPSByZXF1aXJlKFwiLi9xaW4tYmFzZVwiKTtcclxuY2xhc3MgUWluU3BsaXR0ZXIgZXh0ZW5kcyBxaW5fYmFzZV8xLlFpbkJhc2Uge1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5fZWxNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aGlzLl9lbFNpZGVBID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aGlzLl9lbE1vdmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aGlzLl9lbEdyb3dBID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aGlzLl9lbEdyb3dCID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aGlzLl9lbFNpZGVCID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aGlzLl9pc0hvcml6b250YWwgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX3FpblNpZGVBID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9xaW5TaWRlQiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fZWxNYWluLmFwcGVuZENoaWxkKHRoaXMuX2VsU2lkZUEpO1xyXG4gICAgICAgIHRoaXMuX2VsTWFpbi5hcHBlbmRDaGlsZCh0aGlzLl9lbE1vdmVyKTtcclxuICAgICAgICB0aGlzLl9lbE1vdmVyLmFwcGVuZENoaWxkKHRoaXMuX2VsR3Jvd0EpO1xyXG4gICAgICAgIHRoaXMuX2VsTW92ZXIuYXBwZW5kQ2hpbGQodGhpcy5fZWxHcm93Qik7XHJcbiAgICAgICAgdGhpcy5fZWxNYWluLmFwcGVuZENoaWxkKHRoaXMuX2VsU2lkZUIpO1xyXG4gICAgICAgIHRoaXMuX2VsTWFpbi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgdGhpcy5fZWxNYWluLnN0eWxlLmZsZXhXcmFwID0gXCJub3dyYXBcIjtcclxuICAgICAgICB0aGlzLl9lbFNpZGVBLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICB0aGlzLl9lbFNpZGVBLnN0eWxlLmZsZXhXcmFwID0gXCJub3dyYXBcIjtcclxuICAgICAgICB0aGlzLl9lbFNpZGVBLnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCI7XHJcbiAgICAgICAgdGhpcy5fZWxNb3Zlci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgdGhpcy5fZWxNb3Zlci5zdHlsZS5mbGV4V3JhcCA9IFwibm93cmFwXCI7XHJcbiAgICAgICAgdGhpcy5fZWxNb3Zlci5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjEycHhcIjtcclxuICAgICAgICB0aGlzLl9lbE1vdmVyLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkIHJnYmEoMjU1LDI1MCwyMzksMC4xKVwiO1xyXG4gICAgICAgIHRoaXMuX2VsTW92ZXIuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG4gICAgICAgIHRoaXMuX2VsTW92ZXIuc3R5bGUuZmxleCA9IFwiMFwiO1xyXG4gICAgICAgIHRoaXMuX2VsR3Jvd0Euc3R5bGUuZmxleCA9IFwiMVwiO1xyXG4gICAgICAgIHRoaXMuX2VsR3Jvd0Iuc3R5bGUuZmxleCA9IFwiMVwiO1xyXG4gICAgICAgIHRoaXMuX2VsU2lkZUIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgIHRoaXMuX2VsU2lkZUIuc3R5bGUuZmxleFdyYXAgPSBcIm5vd3JhcFwiO1xyXG4gICAgICAgIHRoaXMuX2VsU2lkZUIuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIjtcclxuICAgICAgICBsZXQgYmFsYW5jZSA9IChncm93LCBmYWxsKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCByZWxhdGVkID0gdGhpcy5faXNIb3Jpem9udGFsID8gXCJ3aWR0aFwiIDogXCJoZWlnaHRcIjtcclxuICAgICAgICAgICAgbGV0IGdyb3dBdCA9IHBhcnNlSW50KGdyb3cuc3R5bGVbcmVsYXRlZF0pO1xyXG4gICAgICAgICAgICBsZXQgZmFsbEF0ID0gcGFyc2VJbnQoZmFsbC5zdHlsZVtyZWxhdGVkXSk7XHJcbiAgICAgICAgICAgIGlmIChmYWxsQXQgPD0gMTApXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIGdyb3cuc3R5bGVbcmVsYXRlZF0gPSBncm93QXQgKyAxMCArIFwiJVwiO1xyXG4gICAgICAgICAgICBmYWxsLnN0eWxlW3JlbGF0ZWRdID0gZmFsbEF0IC0gMTAgKyBcIiVcIjtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX2VsR3Jvd0EuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoXykgPT4gYmFsYW5jZSh0aGlzLl9lbFNpZGVBLCB0aGlzLl9lbFNpZGVCKSk7XHJcbiAgICAgICAgdGhpcy5fZWxHcm93QS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCAoXykgPT4gYmFsYW5jZSh0aGlzLl9lbFNpZGVBLCB0aGlzLl9lbFNpZGVCKSk7XHJcbiAgICAgICAgdGhpcy5fZWxHcm93Qi5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChfKSA9PiBiYWxhbmNlKHRoaXMuX2VsU2lkZUIsIHRoaXMuX2VsU2lkZUEpKTtcclxuICAgICAgICB0aGlzLl9lbEdyb3dCLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIChfKSA9PiBiYWxhbmNlKHRoaXMuX2VsU2lkZUIsIHRoaXMuX2VsU2lkZUEpKTtcclxuICAgICAgICBpZiAob3B0aW9ucykge1xyXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5zaWRlQSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTaWRlQShvcHRpb25zLnNpZGVBKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5zaWRlQikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTaWRlQihvcHRpb25zLnNpZGVCKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmhvcml6b250YWwpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRIb3Jpem9udGFsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFZlcnRpY2FsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0TWFpbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZWxNYWluO1xyXG4gICAgfVxyXG4gICAgYWRkQ2hpbGQoY2hpbGQpIHtcclxuICAgICAgICBpZiAodGhpcy5fcWluU2lkZUEgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5fcWluU2lkZUEgPSBjaGlsZDtcclxuICAgICAgICAgICAgdGhpcy5fZWxTaWRlQS5hcHBlbmRDaGlsZChjaGlsZC5nZXRNYWluKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3FpblNpZGVCICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9xaW5TaWRlQi51bkluc3RhbGwoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3FpblNpZGVCID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9xaW5TaWRlQiA9IGNoaWxkO1xyXG4gICAgICAgICAgICB0aGlzLl9lbFNpZGVCLmFwcGVuZENoaWxkKGNoaWxkLmdldE1haW4oKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2Jhc2VDaGlsZHJlbi5wdXNoKGNoaWxkKTtcclxuICAgIH1cclxuICAgIGRlbENoaWxkKGNoaWxkKSB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5fYmFzZUNoaWxkcmVuLmluZGV4T2YoY2hpbGQpO1xyXG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Jhc2VDaGlsZHJlbi5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fcWluU2lkZUEgPT09IGNoaWxkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2VsU2lkZUEucmVtb3ZlQ2hpbGQoY2hpbGQuZ2V0TWFpbigpKTtcclxuICAgICAgICAgICAgdGhpcy5fcWluU2lkZUEgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLl9xaW5TaWRlQiA9PT0gY2hpbGQpIHtcclxuICAgICAgICAgICAgdGhpcy5fZWxTaWRlQi5yZW1vdmVDaGlsZChjaGlsZC5nZXRNYWluKCkpO1xyXG4gICAgICAgICAgICB0aGlzLl9xaW5TaWRlQiA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2V0SG9yaXpvbnRhbCgpIHtcclxuICAgICAgICB0aGlzLl9lbE1haW4uc3R5bGUuZmxleERpcmVjdGlvbiA9IFwicm93XCI7XHJcbiAgICAgICAgdGhpcy5fZWxNb3Zlci5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJyb3dcIjtcclxuICAgICAgICB0aGlzLl9lbFNpZGVBLnN0eWxlLndpZHRoID0gXCI1MCVcIjtcclxuICAgICAgICB0aGlzLl9lbFNpZGVBLnN0eWxlLmhlaWdodCA9IFwiMTAwJVwiO1xyXG4gICAgICAgIHRoaXMuX2VsU2lkZUIuc3R5bGUud2lkdGggPSBcIjUwJVwiO1xyXG4gICAgICAgIHRoaXMuX2VsU2lkZUIuc3R5bGUuaGVpZ2h0ID0gXCIxMDAlXCI7XHJcbiAgICAgICAgdGhpcy5fZWxNb3Zlci5zdHlsZS5taW5XaWR0aCA9IFwiMjRweFwiO1xyXG4gICAgICAgIHRoaXMuX2VsTW92ZXIuc3R5bGUubWF4V2lkdGggPSBcIjI0cHhcIjtcclxuICAgICAgICB0aGlzLl9lbE1vdmVyLnN0eWxlLm1pbkhlaWdodCA9IFwiaW5pdGlhbFwiO1xyXG4gICAgICAgIHRoaXMuX2VsTW92ZXIuc3R5bGUubWF4SGVpZ2h0ID0gXCJpbml0aWFsXCI7XHJcbiAgICAgICAgdGhpcy5fZWxNb3Zlci5zdHlsZS53aWR0aCA9IFwiMjRweFwiO1xyXG4gICAgICAgIHRoaXMuX2VsTW92ZXIuc3R5bGUuaGVpZ2h0ID0gXCIxMDAlXCI7XHJcbiAgICAgICAgdGhpcy5fZWxHcm93QS5zdHlsZS5iYWNrZ3JvdW5kID1cclxuICAgICAgICAgICAgXCJsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMjU1LDI1MCwyMzksMC4xKSAwJSwgcmdiYSgyNTUsMjUwLDIzOSwwLjEpIDg0JSwgcmdiYSgyNCwwLDM5LDAuOCkgOTglLCByZ2JhKDI0LDAsMzksMC44KSAxMDAlKVwiO1xyXG4gICAgICAgIHRoaXMuX2VsR3Jvd0Iuc3R5bGUuYmFja2dyb3VuZCA9XHJcbiAgICAgICAgICAgIFwibGluZWFyLWdyYWRpZW50KDI3MGRlZywgcmdiYSgyNTUsMjUwLDIzOSwwLjEpIDAlLCByZ2JhKDI1NSwyNTAsMjM5LDAuMSkgODQlLCByZ2JhKDI0LDAsMzksMC44KSA5OCUsIHJnYmEoMjQsMCwzOSwwLjgpIDEwMCUpXCI7XHJcbiAgICAgICAgdGhpcy5faXNIb3Jpem9udGFsID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHNldFZlcnRpY2FsKCkge1xyXG4gICAgICAgIHRoaXMuX2VsTWFpbi5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJjb2x1bW5cIjtcclxuICAgICAgICB0aGlzLl9lbE1vdmVyLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcImNvbHVtblwiO1xyXG4gICAgICAgIHRoaXMuX2VsU2lkZUEuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcclxuICAgICAgICB0aGlzLl9lbFNpZGVBLnN0eWxlLmhlaWdodCA9IFwiNTAlXCI7XHJcbiAgICAgICAgdGhpcy5fZWxTaWRlQi5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgICAgIHRoaXMuX2VsU2lkZUIuc3R5bGUuaGVpZ2h0ID0gXCI1MCVcIjtcclxuICAgICAgICB0aGlzLl9lbE1vdmVyLnN0eWxlLm1pbldpZHRoID0gXCJpbml0aWFsXCI7XHJcbiAgICAgICAgdGhpcy5fZWxNb3Zlci5zdHlsZS5tYXhXaWR0aCA9IFwiaW5pdGlhbFwiO1xyXG4gICAgICAgIHRoaXMuX2VsTW92ZXIuc3R5bGUubWluSGVpZ2h0ID0gXCIyNHB4XCI7XHJcbiAgICAgICAgdGhpcy5fZWxNb3Zlci5zdHlsZS5tYXhIZWlnaHQgPSBcIjI0cHhcIjtcclxuICAgICAgICB0aGlzLl9lbE1vdmVyLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICAgICAgdGhpcy5fZWxNb3Zlci5zdHlsZS5oZWlnaHQgPSBcIjI0cHhcIjtcclxuICAgICAgICB0aGlzLl9lbEdyb3dBLnN0eWxlLmJhY2tncm91bmQgPVxyXG4gICAgICAgICAgICBcImxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMjU1LDI1MCwyMzksMC4xKSAwJSwgcmdiYSgyNTUsMjUwLDIzOSwwLjEpIDg0JSwgcmdiYSgyNCwwLDM5LDAuOCkgOTglLCByZ2JhKDI0LDAsMzksMC44KSAxMDAlKVwiO1xyXG4gICAgICAgIHRoaXMuX2VsR3Jvd0Iuc3R5bGUuYmFja2dyb3VuZCA9XHJcbiAgICAgICAgICAgIFwibGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMjU1LDI1MCwyMzksMC4xKSAwJSwgcmdiYSgyNTUsMjUwLDIzOSwwLjEpIDg0JSwgcmdiYSgyNCwwLDM5LDAuOCkgOTglLCByZ2JhKDI0LDAsMzksMC44KSAxMDAlKVwiO1xyXG4gICAgICAgIHRoaXMuX2lzSG9yaXpvbnRhbCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgc2V0U2lkZUEoc2lkZSkge1xyXG4gICAgICAgIGlmICh0aGlzLl9xaW5TaWRlQSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9xaW5TaWRlQS51bkluc3RhbGwoKTtcclxuICAgICAgICAgICAgdGhpcy5fcWluU2lkZUEgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9xaW5TaWRlQSA9IHNpZGU7XHJcbiAgICAgICAgdGhpcy5fZWxTaWRlQS5hcHBlbmRDaGlsZChzaWRlLmdldE1haW4oKSk7XHJcbiAgICB9XHJcbiAgICBzZXRTaWRlQihzaWRlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3FpblNpZGVCICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3FpblNpZGVCLnVuSW5zdGFsbCgpO1xyXG4gICAgICAgICAgICB0aGlzLl9xaW5TaWRlQiA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3FpblNpZGVCID0gc2lkZTtcclxuICAgICAgICB0aGlzLl9lbFNpZGVCLmFwcGVuZENoaWxkKHNpZGUuZ2V0TWFpbigpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlFpblNwbGl0dGVyID0gUWluU3BsaXR0ZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1zcGxpdHRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlFpblN0YWNrID0gdm9pZCAwO1xyXG5jb25zdCBxaW5fcGFuZWxfMSA9IHJlcXVpcmUoXCIuL3Fpbi1wYW5lbFwiKTtcclxuY2xhc3MgUWluU3RhY2sgZXh0ZW5kcyBxaW5fcGFuZWxfMS5RaW5QYW5lbCB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5zdHlsZS5wdXRBc0ZsZXhEaXJlY3Rpb25Sb3coKTtcclxuICAgICAgICB0aGlzLnN0eWxlLnB1dEFzRmxleFdyYXBOb3QoKTtcclxuICAgIH1cclxuICAgIHB1dChpdGVtKSB7XHJcbiAgICAgICAgaXRlbS5pbnN0YWxsKHRoaXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgYWRkQ2hpbGQoY2hpbGQpIHtcclxuICAgICAgICB0aGlzLmNoaWxkcmVuKCkuZm9yRWFjaCgoaW5DaGlsZCkgPT4ge1xyXG4gICAgICAgICAgICBpbkNoaWxkLnVuRGlzcGxheSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHN1cGVyLmFkZENoaWxkKGNoaWxkKTtcclxuICAgIH1cclxuICAgIHN0YWNrKGNoaWxkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHV0KGNoaWxkKTtcclxuICAgIH1cclxuICAgIHNob3coY2hpbGQpIHtcclxuICAgICAgICB0aGlzLmNoaWxkcmVuKCkuZm9yRWFjaCgoaW5DaGlsZCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaW5DaGlsZCA9PT0gY2hpbGQpIHtcclxuICAgICAgICAgICAgICAgIGluQ2hpbGQucmVEaXNwbGF5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpbkNoaWxkLnVuRGlzcGxheSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5RaW5TdGFjayA9IFFpblN0YWNrO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tc3RhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5TdHJpbmcgPSB2b2lkIDA7XHJcbmNvbnN0IHFpbnBlbF9yZXNfMSA9IHJlcXVpcmUoXCJxaW5wZWwtcmVzXCIpO1xyXG5jb25zdCBxaW5fZWRpdF8xID0gcmVxdWlyZShcIi4vcWluLWVkaXRcIik7XHJcbmNsYXNzIFFpblN0cmluZyBleHRlbmRzIHFpbl9lZGl0XzEuUWluRWRpdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl9lbE1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgdGhpcy5fZWxNYWluLnR5cGUgPSBcInRleHRcIjtcclxuICAgICAgICBpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLm1heExlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLl9lbE1haW4ubWF4TGVuZ3RoID0gb3B0aW9ucy5tYXhMZW5ndGg7XHJcbiAgICAgICAgICAgIGxldCBwb3NpdGlvbiA9IE1hdGgubWluKE1hdGgubWF4KG9wdGlvbnMubWF4TGVuZ3RoIC0gMTAsIDApLCA5MCk7XHJcbiAgICAgICAgICAgIGxldCB3aWR0aCA9IE1hdGguZmxvb3IoOTAgKyAocG9zaXRpb24gKiA3KSAvIDMpO1xyXG4gICAgICAgICAgICB0aGlzLl9lbE1haW4uc3R5bGUud2lkdGggPSB3aWR0aCArIFwicHhcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcWlucGVsX3Jlc18xLlFpblNraW4uc3R5bGVBc0VkaXQodGhpcy5fZWxNYWluKTtcclxuICAgICAgICBpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmluaXRpYWwpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKG9wdGlvbnMuaW5pdGlhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0TWFpbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZWxNYWluO1xyXG4gICAgfVxyXG4gICAgZ2V0TmF0dXJlKCkge1xyXG4gICAgICAgIHJldHVybiBxaW5wZWxfcmVzXzEuUWluTmF0dXJlLkNIQVJTO1xyXG4gICAgfVxyXG4gICAgZ2V0RGF0YSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZWxNYWluLnZhbHVlO1xyXG4gICAgfVxyXG4gICAgc2V0RGF0YShkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5fZWxNYWluLnZhbHVlID0gZGF0YTtcclxuICAgIH1cclxuICAgIGluc2VydEF0Q3Vyc29yKGRhdGEpIHtcclxuICAgICAgICBpZiAoIWRhdGEpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBsZXQgc3RhcnRQb3MgPSB0aGlzLl9lbE1haW4uc2VsZWN0aW9uU3RhcnQ7XHJcbiAgICAgICAgbGV0IGVuZFBvcyA9IHRoaXMuX2VsTWFpbi5zZWxlY3Rpb25FbmQ7XHJcbiAgICAgICAgbGV0IG9sZFZhbCA9IHRoaXMuX2VsTWFpbi52YWx1ZTtcclxuICAgICAgICBsZXQgbmV3VmFsID0gKHN0YXJ0UG9zID4gMCA/IG9sZFZhbC5zdWJzdHJpbmcoMCwgc3RhcnRQb3MpIDogXCJcIikgK1xyXG4gICAgICAgICAgICBkYXRhICtcclxuICAgICAgICAgICAgKGVuZFBvcyA8IG9sZFZhbC5sZW5ndGggPyBvbGRWYWwuc3Vic3RyaW5nKGVuZFBvcykgOiBcIlwiKTtcclxuICAgICAgICB0aGlzLl9lbE1haW4udmFsdWUgPSBuZXdWYWw7XHJcbiAgICAgICAgdGhpcy5fZWxNYWluLnNlbGVjdGlvblN0YXJ0ID0gc3RhcnRQb3M7XHJcbiAgICAgICAgdGhpcy5fZWxNYWluLnNlbGVjdGlvbkVuZCA9IHN0YXJ0UG9zICsgZGF0YS5sZW5ndGg7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5RaW5TdHJpbmcgPSBRaW5TdHJpbmc7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1zdHJpbmcuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5UYWJsZSA9IHZvaWQgMDtcclxuY29uc3QgcWluX2Jhc2VfMSA9IHJlcXVpcmUoXCIuL3Fpbi1iYXNlXCIpO1xyXG5jbGFzcyBRaW5UYWJsZSBleHRlbmRzIHFpbl9iYXNlXzEuUWluQmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX2VsTWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGhpcy5fZWxUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcclxuICAgICAgICB0aGlzLl9lbFRIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoZWFkXCIpO1xyXG4gICAgICAgIHRoaXMuX2VsVEhlYWRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICAgICAgdGhpcy5fZWxUQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKTtcclxuICAgICAgICB0aGlzLl9saW5lc1NpemUgPSAwO1xyXG4gICAgICAgIHRoaXMuX2VsTWFpbi5hcHBlbmRDaGlsZCh0aGlzLl9lbFRhYmxlKTtcclxuICAgICAgICB0aGlzLl9lbFRhYmxlLmFwcGVuZENoaWxkKHRoaXMuX2VsVEhlYWQpO1xyXG4gICAgICAgIHRoaXMuX2VsVEhlYWQuYXBwZW5kQ2hpbGQodGhpcy5fZWxUSGVhZFJvdyk7XHJcbiAgICAgICAgdGhpcy5fZWxUYWJsZS5hcHBlbmRDaGlsZCh0aGlzLl9lbFRCb2R5KTtcclxuICAgICAgICBzdHlsZXMuYXBwbHlPblRhYmxlKHRoaXMuX2VsVGFibGUpO1xyXG4gICAgICAgIHN0eWxlcy5hcHBseU9uSGVhZCh0aGlzLl9lbFRIZWFkKTtcclxuICAgICAgICBzdHlsZXMuYXBwbHlPbkhlYWRSb3codGhpcy5fZWxUSGVhZFJvdyk7XHJcbiAgICAgICAgc3R5bGVzLmFwcGx5T25Cb2R5KHRoaXMuX2VsVEJvZHkpO1xyXG4gICAgfVxyXG4gICAgZ2V0TWFpbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZWxNYWluO1xyXG4gICAgfVxyXG4gICAgZ2V0TGluZXMoKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIHRoaXMuX2VsVEJvZHkucXVlcnlTZWxlY3RvckFsbChcInRyXCIpLmZvckVhY2goKHRyKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBsaW5lID0gW107XHJcbiAgICAgICAgICAgIHRyLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0ZFwiKS5mb3JFYWNoKCh0ZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGluZS5wdXNoKHRkLmlubmVyVGV4dCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaChsaW5lKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgYWRkTGluZXMobGluZXMpIHtcclxuICAgICAgICB0aGlzLmRlbExpbmVzKCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBsaW5lIG9mIGxpbmVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkTGluZShsaW5lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZXRIZWFkKGhlYWQpIHtcclxuICAgICAgICB0aGlzLl9lbFRIZWFkUm93LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgZm9yIChjb25zdCBjZWxsIG9mIGhlYWQpIHtcclxuICAgICAgICAgICAgbGV0IHRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xyXG4gICAgICAgICAgICB0aC5pbm5lclRleHQgPSBjZWxsO1xyXG4gICAgICAgICAgICBzdHlsZXMuYXBwbHlPbkhlYWRDb2wodGgpO1xyXG4gICAgICAgICAgICB0aGlzLl9lbFRIZWFkUm93LmFwcGVuZENoaWxkKHRoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRIZWFkKCkge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBbXTtcclxuICAgICAgICB0aGlzLl9lbFRIZWFkUm93LnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0aFwiKS5mb3JFYWNoKCh0aCkgPT4ge1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaCh0aC5pbm5lclRleHQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBhZGRIZWFkKGhlYWQpIHtcclxuICAgICAgICBsZXQgdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XHJcbiAgICAgICAgdGguaW5uZXJUZXh0ID0gaGVhZDtcclxuICAgICAgICBzdHlsZXMuYXBwbHlPbkhlYWRDb2wodGgpO1xyXG4gICAgICAgIHRoaXMuX2VsVEhlYWRSb3cuYXBwZW5kQ2hpbGQodGgpO1xyXG4gICAgfVxyXG4gICAgYWRkTGluZShsaW5lKSB7XHJcbiAgICAgICAgbGV0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgICAgIGlmICh0aGlzLl9saW5lc1NpemUgJSAyID09PSAwKSB7XHJcbiAgICAgICAgICAgIHN0eWxlcy5hcHBseU9uQm9keVJvdyh0cik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzdHlsZXMuYXBwbHlPbkJvZHlSb3dPZGQodHIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IGNlbGwgb2YgbGluZSkge1xyXG4gICAgICAgICAgICBsZXQgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgICAgIHRkLmlubmVyVGV4dCA9IGNlbGwudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgc3R5bGVzLmFwcGx5T25Cb2R5Q29sKHRkKTtcclxuICAgICAgICAgICAgdHIuYXBwZW5kQ2hpbGQodGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9lbFRCb2R5LmFwcGVuZENoaWxkKHRyKTtcclxuICAgICAgICB0aGlzLl9saW5lc1NpemUrKztcclxuICAgIH1cclxuICAgIGRlbExpbmVzKCkge1xyXG4gICAgICAgIHRoaXMuX2VsVEJvZHkuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICB0aGlzLl9saW5lc1NpemUgPSAwO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUWluVGFibGUgPSBRaW5UYWJsZTtcclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgYXBwbHlPblRhYmxlOiAoZWwpID0+IHtcclxuICAgICAgICBlbC5zdHlsZS5tYXJnaW4gPSBcIjBweFwiO1xyXG4gICAgICAgIGVsLnN0eWxlLnBhZGRpbmcgPSBcIjBweFwiO1xyXG4gICAgICAgIGVsLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICM5ZTllOWVcIjtcclxuICAgIH0sXHJcbiAgICBhcHBseU9uSGVhZDogKGVsKSA9PiB7XHJcbiAgICAgICAgZWwuc3R5bGUubWFyZ2luID0gXCIwcHhcIjtcclxuICAgICAgICBlbC5zdHlsZS5wYWRkaW5nID0gXCIwcHhcIjtcclxuICAgIH0sXHJcbiAgICBhcHBseU9uSGVhZFJvdzogKGVsKSA9PiB7XHJcbiAgICAgICAgZWwuc3R5bGUubWFyZ2luID0gXCIwcHhcIjtcclxuICAgICAgICBlbC5zdHlsZS5wYWRkaW5nID0gXCIwcHhcIjtcclxuICAgICAgICBlbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiM1NmNkNjQzNlwiO1xyXG4gICAgfSxcclxuICAgIGFwcGx5T25IZWFkQ29sOiAoZWwpID0+IHtcclxuICAgICAgICBlbC5zdHlsZS5tYXJnaW4gPSBcIjBweFwiO1xyXG4gICAgICAgIGVsLnN0eWxlLnBhZGRpbmcgPSBcIjVweFwiO1xyXG4gICAgICAgIGVsLnN0eWxlLmJvcmRlclJpZ2h0ID0gXCIxcHggc29saWQgIzVlNWU1ZVwiO1xyXG4gICAgICAgIGVsLnN0eWxlLmJvcmRlckJvdHRvbSA9IFwiMnB4IHNvbGlkICM1ZTVlNWVcIjtcclxuICAgIH0sXHJcbiAgICBhcHBseU9uQm9keTogKGVsKSA9PiB7XHJcbiAgICAgICAgZWwuc3R5bGUubWFyZ2luID0gXCIwcHhcIjtcclxuICAgICAgICBlbC5zdHlsZS5wYWRkaW5nID0gXCIwcHhcIjtcclxuICAgIH0sXHJcbiAgICBhcHBseU9uQm9keVJvdzogKGVsKSA9PiB7XHJcbiAgICAgICAgZWwuc3R5bGUubWFyZ2luID0gXCIwcHhcIjtcclxuICAgICAgICBlbC5zdHlsZS5wYWRkaW5nID0gXCIwcHhcIjtcclxuICAgICAgICBlbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiM1NjY0Y2QzNlwiO1xyXG4gICAgfSxcclxuICAgIGFwcGx5T25Cb2R5Um93T2RkOiAoZWwpID0+IHtcclxuICAgICAgICBlbC5zdHlsZS5tYXJnaW4gPSBcIjBweFwiO1xyXG4gICAgICAgIGVsLnN0eWxlLnBhZGRpbmcgPSBcIjBweFwiO1xyXG4gICAgICAgIGVsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2NkYTk1NjM2XCI7XHJcbiAgICB9LFxyXG4gICAgYXBwbHlPbkJvZHlDb2w6IChlbCkgPT4ge1xyXG4gICAgICAgIGVsLnN0eWxlLm1hcmdpbiA9IFwiMHB4XCI7XHJcbiAgICAgICAgZWwuc3R5bGUucGFkZGluZyA9IFwiNXB4XCI7XHJcbiAgICAgICAgZWwuc3R5bGUuYm9yZGVyUmlnaHQgPSBcIjFweCBzb2xpZCAjNWU1ZTVlXCI7XHJcbiAgICAgICAgZWwuc3R5bGUuYm9yZGVyQm90dG9tID0gXCIycHggc29saWQgIzVlNWU1ZVwiO1xyXG4gICAgfSxcclxufTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLXRhYmxlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluVGFicyA9IHZvaWQgMDtcclxuY29uc3QgcWlucGVsX3Jlc18xID0gcmVxdWlyZShcInFpbnBlbC1yZXNcIik7XHJcbmNvbnN0IHFpbl9idXR0b25fMSA9IHJlcXVpcmUoXCIuL3Fpbi1idXR0b25cIik7XHJcbmNvbnN0IHFpbl9jb2x1bW5fMSA9IHJlcXVpcmUoXCIuL3Fpbi1jb2x1bW5cIik7XHJcbmNvbnN0IHFpbl9sYWJlbF8xID0gcmVxdWlyZShcIi4vcWluLWxhYmVsXCIpO1xyXG5jb25zdCBxaW5fbGluZV8xID0gcmVxdWlyZShcIi4vcWluLWxpbmVcIik7XHJcbmNvbnN0IHFpbl9wYW5lbF8xID0gcmVxdWlyZShcIi4vcWluLXBhbmVsXCIpO1xyXG5jbGFzcyBRaW5UYWJzIGV4dGVuZHMgcWluX2NvbHVtbl8xLlFpbkNvbHVtbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl9xaW5UYWJzID0gbmV3IHFpbl9saW5lXzEuUWluTGluZSgpO1xyXG4gICAgICAgIHRoaXMuX3FpblBhbmVsID0gbmV3IHFpbl9wYW5lbF8xLlFpblBhbmVsKCk7XHJcbiAgICAgICAgdGhpcy5fdGFicyA9IFtdO1xyXG4gICAgICAgIHRoaXMuX3FpblRhYnMuaW5zdGFsbCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9xaW5QYW5lbC5pbnN0YWxsKHRoaXMpO1xyXG4gICAgICAgIGlmIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuaW5pdGlhbCkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHRhYiBvZiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuaW5pdGlhbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRUYWIodGFiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldCBxaW5UYWJzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5UYWJzO1xyXG4gICAgfVxyXG4gICAgZ2V0IHFpblBhbmVsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5QYW5lbDtcclxuICAgIH1cclxuICAgIGFkZFRhYih0YWIpIHtcclxuICAgICAgICBjb25zdCBidXR0b24gPSBuZXcgcWluX2J1dHRvbl8xLlFpbkJ1dHRvbih7IGxhYmVsOiBuZXcgcWluX2xhYmVsXzEuUWluTGFiZWwodGFiLnRpdGxlKSB9KTtcclxuICAgICAgICBidXR0b24uc3R5bGUucHV0QXNCYWNrZ3JvdW5kKHFpbnBlbF9yZXNfMS5RaW5Ta2luLnN0eWxlcy5Db2xvckluYWN0aXZlKTtcclxuICAgICAgICBidXR0b24uYWRkQWN0aW9uKChxaW5FdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocWluRXZlbnQuaXNNYWluKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dWaWV3ZXIodGFiLnZpZXdlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBidXR0b24uaW5zdGFsbCh0aGlzLl9xaW5UYWJzKTtcclxuICAgICAgICBsZXQgZmlyc3QgPSB0aGlzLl90YWJzLmxlbmd0aCA9PSAwO1xyXG4gICAgICAgIGxldCB0YWJSZWYgPSB7XHJcbiAgICAgICAgICAgIHRpdGxlOiB0YWIudGl0bGUsXHJcbiAgICAgICAgICAgIHZpZXdlcjogdGFiLnZpZXdlcixcclxuICAgICAgICAgICAgYnV0dG9uLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5fdGFicy5wdXNoKHRhYlJlZik7XHJcbiAgICAgICAgaWYgKGZpcnN0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1ZpZXdlcih0YWIudmlld2VyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzaG93VGFiKHRpdGxlKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCB0YWIgb2YgdGhpcy5fdGFicykge1xyXG4gICAgICAgICAgICBpZiAodGFiLnRpdGxlID09IHRpdGxlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dWaWV3ZXIodGFiLnZpZXdlcik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNob3dWaWV3ZXIodmlld2VyKSB7XHJcbiAgICAgICAgdGhpcy5fcWluUGFuZWwudW5JbnN0YWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICB2aWV3ZXIuaW5zdGFsbCh0aGlzLl9xaW5QYW5lbCk7XHJcbiAgICAgICAgZm9yIChjb25zdCB0YWIgb2YgdGhpcy5fdGFicykge1xyXG4gICAgICAgICAgICBpZiAodGFiLnZpZXdlciA9PSB2aWV3ZXIpIHtcclxuICAgICAgICAgICAgICAgIHRhYi5idXR0b24uc3R5bGUucHV0QXNCYWNrZ3JvdW5kKHFpbnBlbF9yZXNfMS5RaW5Ta2luLnN0eWxlcy5Db2xvckFjdGl2ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0YWIuYnV0dG9uLnN0eWxlLnB1dEFzQmFja2dyb3VuZChxaW5wZWxfcmVzXzEuUWluU2tpbi5zdHlsZXMuQ29sb3JJbmFjdGl2ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5RaW5UYWJzID0gUWluVGFicztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLXRhYnMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5UaXRsZWQgPSB2b2lkIDA7XHJcbmNvbnN0IHFpbl9jb2x1bW5fMSA9IHJlcXVpcmUoXCIuL3Fpbi1jb2x1bW5cIik7XHJcbmNvbnN0IHFpbl9sYWJlbF8xID0gcmVxdWlyZShcIi4vcWluLWxhYmVsXCIpO1xyXG5jb25zdCBxaW5fbGluZV8xID0gcmVxdWlyZShcIi4vcWluLWxpbmVcIik7XHJcbmNsYXNzIFFpblRpdGxlZCBleHRlbmRzIHFpbl9jb2x1bW5fMS5RaW5Db2x1bW4ge1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5fcWluVGl0bGUgPSBuZXcgcWluX2xhYmVsXzEuUWluTGFiZWwoKTtcclxuICAgICAgICB0aGlzLl9xaW5IZWFkID0gbmV3IHFpbl9saW5lXzEuUWluTGluZSh7IGl0ZW1zOiBbdGhpcy5fcWluVGl0bGVdIH0pO1xyXG4gICAgICAgIHRoaXMuX3FpbkJvZHkgPSBuZXcgcWluX2xpbmVfMS5RaW5MaW5lKCk7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy50aXRsZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9xaW5UaXRsZS50aXRsZSA9IG9wdGlvbnMudGl0bGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3FpbkhlYWQuaW5zdGFsbCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9xaW5Cb2R5Lmluc3RhbGwodGhpcyk7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5pdGVtcykge1xyXG4gICAgICAgICAgICBvcHRpb25zLml0ZW1zLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uaW5zdGFsbCh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHV0KGl0ZW0pIHtcclxuICAgICAgICBpdGVtLmluc3RhbGwodGhpcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBhZGRDaGlsZChjaGlsZCkge1xyXG4gICAgICAgIGlmIChjaGlsZCA9PT0gdGhpcy5fcWluQm9keSB8fCBjaGlsZCA9PT0gdGhpcy5fcWluSGVhZCkge1xyXG4gICAgICAgICAgICBzdXBlci5hZGRDaGlsZChjaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9xaW5Cb2R5LmFkZENoaWxkKGNoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBkZWxDaGlsZChjaGlsZCkge1xyXG4gICAgICAgIGlmIChjaGlsZCA9PT0gdGhpcy5fcWluQm9keSB8fCBjaGlsZCA9PT0gdGhpcy5fcWluSGVhZCkge1xyXG4gICAgICAgICAgICBzdXBlci5kZWxDaGlsZChjaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9xaW5Cb2R5LmRlbENoaWxkKGNoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQgdGl0bGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpblRpdGxlLnRpdGxlO1xyXG4gICAgfVxyXG4gICAgc2V0IHRpdGxlKHRpdGxlKSB7XHJcbiAgICAgICAgdGhpcy5fcWluVGl0bGUudGl0bGUgPSB0aXRsZTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlFpblRpdGxlZCA9IFFpblRpdGxlZDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLXRpdGxlZC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlFpblRvb2xzID0gdm9pZCAwO1xyXG5jb25zdCByZWZRaW5wZWwgPSB3aW5kb3cuZnJhbWVFbGVtZW50LnFpbnBlbDtcclxuZnVuY3Rpb24gcWlucGVsKCkge1xyXG4gICAgcmV0dXJuIHJlZlFpbnBlbDtcclxufVxyXG5leHBvcnRzLlFpblRvb2xzID0ge1xyXG4gICAgcWlucGVsLFxyXG59O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tdG9vbHMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5Tb3VsID0gZXhwb3J0cy5RaW5Ta2luID0gZXhwb3J0cy5RaW5TdHlsZXMgPSBleHBvcnRzLlFpbkdyYW5kZXVyID0gZXhwb3J0cy5RaW5Cb3VuZHMgPSBleHBvcnRzLlFpbkRpbWVuc2lvbiA9IGV4cG9ydHMuUWluUG9pbnQgPSBleHBvcnRzLlFpbkhlYWQgPSBleHBvcnRzLlFpbkZvb3QgPSBleHBvcnRzLlFpbkZpbGVzRGVzY3JpcHRvciA9IGV4cG9ydHMuUWluRmlsZXNPcGVyYXRpb24gPSBleHBvcnRzLlFpbkZpbGVzTmF0dXJlID0gZXhwb3J0cy5RaW5Cb2R5ID0gZXhwb3J0cy5RaW5OYXR1cmUgPSBleHBvcnRzLlFpbkFybSA9IGV4cG9ydHMuUWluUG9pbnRlckNhbGxzID0gZXhwb3J0cy5RaW5XYWl0ZXJzID0gZXhwb3J0cy5RaW5FdmVudCA9IHZvaWQgMDtcclxudmFyIHFpbl9hcm1fMSA9IHJlcXVpcmUoXCIuL3Fpbi1hcm1cIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkV2ZW50XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fYXJtXzEuUWluRXZlbnQ7IH0gfSk7XHJcbnZhciBxaW5fYXJtXzIgPSByZXF1aXJlKFwiLi9xaW4tYXJtXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5XYWl0ZXJzXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fYXJtXzIuUWluV2FpdGVyczsgfSB9KTtcclxudmFyIHFpbl9hcm1fMyA9IHJlcXVpcmUoXCIuL3Fpbi1hcm1cIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpblBvaW50ZXJDYWxsc1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2FybV8zLlFpblBvaW50ZXJDYWxsczsgfSB9KTtcclxudmFyIHFpbl9hcm1fNCA9IHJlcXVpcmUoXCIuL3Fpbi1hcm1cIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkFybVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2FybV80LlFpbkFybTsgfSB9KTtcclxudmFyIHFpbl9ib2R5XzEgPSByZXF1aXJlKFwiLi9xaW4tYm9keVwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluTmF0dXJlXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fYm9keV8xLlFpbk5hdHVyZTsgfSB9KTtcclxudmFyIHFpbl9ib2R5XzIgPSByZXF1aXJlKFwiLi9xaW4tYm9keVwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluQm9keVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2JvZHlfMi5RaW5Cb2R5OyB9IH0pO1xyXG52YXIgcWluX2Zvb3RfMSA9IHJlcXVpcmUoXCIuL3Fpbi1mb290XCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5GaWxlc05hdHVyZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2Zvb3RfMS5RaW5GaWxlc05hdHVyZTsgfSB9KTtcclxudmFyIHFpbl9mb290XzIgPSByZXF1aXJlKFwiLi9xaW4tZm9vdFwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluRmlsZXNPcGVyYXRpb25cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9mb290XzIuUWluRmlsZXNPcGVyYXRpb247IH0gfSk7XHJcbnZhciBxaW5fZm9vdF8zID0gcmVxdWlyZShcIi4vcWluLWZvb3RcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkZpbGVzRGVzY3JpcHRvclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2Zvb3RfMy5RaW5GaWxlc0Rlc2NyaXB0b3I7IH0gfSk7XHJcbnZhciBxaW5fZm9vdF80ID0gcmVxdWlyZShcIi4vcWluLWZvb3RcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkZvb3RcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9mb290XzQuUWluRm9vdDsgfSB9KTtcclxudmFyIHFpbl9oZWFkXzEgPSByZXF1aXJlKFwiLi9xaW4taGVhZFwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluSGVhZFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2hlYWRfMS5RaW5IZWFkOyB9IH0pO1xyXG52YXIgcWluX3NraW5fMSA9IHJlcXVpcmUoXCIuL3Fpbi1za2luXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5Qb2ludFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX3NraW5fMS5RaW5Qb2ludDsgfSB9KTtcclxudmFyIHFpbl9za2luXzIgPSByZXF1aXJlKFwiLi9xaW4tc2tpblwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluRGltZW5zaW9uXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fc2tpbl8yLlFpbkRpbWVuc2lvbjsgfSB9KTtcclxudmFyIHFpbl9za2luXzMgPSByZXF1aXJlKFwiLi9xaW4tc2tpblwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluQm91bmRzXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fc2tpbl8zLlFpbkJvdW5kczsgfSB9KTtcclxudmFyIHFpbl9za2luXzQgPSByZXF1aXJlKFwiLi9xaW4tc2tpblwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluR3JhbmRldXJcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9za2luXzQuUWluR3JhbmRldXI7IH0gfSk7XHJcbnZhciBxaW5fc2tpbl81ID0gcmVxdWlyZShcIi4vcWluLXNraW5cIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpblN0eWxlc1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX3NraW5fNS5RaW5TdHlsZXM7IH0gfSk7XHJcbnZhciBxaW5fc2tpbl82ID0gcmVxdWlyZShcIi4vcWluLXNraW5cIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpblNraW5cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9za2luXzYuUWluU2tpbjsgfSB9KTtcclxudmFyIHFpbl9zb3VsXzEgPSByZXF1aXJlKFwiLi9xaW4tc291bFwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluU291bFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX3NvdWxfMS5RaW5Tb3VsOyB9IH0pO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hbGwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5Bcm0gPSBleHBvcnRzLlFpblBvaW50ZXJDYWxscyA9IGV4cG9ydHMuUWluV2FpdGVycyA9IGV4cG9ydHMuUWluRXZlbnQgPSB2b2lkIDA7XHJcbmNvbnN0IHFpbl9za2luXzEgPSByZXF1aXJlKFwiLi9xaW4tc2tpblwiKTtcclxuY2xhc3MgUWluRXZlbnQge1xyXG4gICAgY29uc3RydWN0b3Iob3JpZ2luLCBpc1N0YXJ0LCBraW5kKSB7XHJcbiAgICAgICAgdmFyIF9hLCBfYiwgX2M7XHJcbiAgICAgICAgdGhpcy5fZXZlbnRLZXkgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX2V2ZW50TW91c2UgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX2V2ZW50VG91Y2ggPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX3BvaW50ID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9zdG9wID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fb3JpZ2luID0gb3JpZ2luO1xyXG4gICAgICAgIHRoaXMuX3N0YXJ0ID0gaXNTdGFydDtcclxuICAgICAgICB0aGlzLl9ldmVudEtleSA9IChfYSA9IGtpbmQgPT09IG51bGwgfHwga2luZCA9PT0gdm9pZCAwID8gdm9pZCAwIDoga2luZC5ldmVudEtleSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogbnVsbDtcclxuICAgICAgICB0aGlzLl9ldmVudE1vdXNlID0gKF9iID0ga2luZCA9PT0gbnVsbCB8fCBraW5kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBraW5kLmV2ZW50TW91c2UpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IG51bGw7XHJcbiAgICAgICAgdGhpcy5fZXZlbnRUb3VjaCA9IChfYyA9IGtpbmQgPT09IG51bGwgfHwga2luZCA9PT0gdm9pZCAwID8gdm9pZCAwIDoga2luZC5ldmVudFRvdWNoKSAhPT0gbnVsbCAmJiBfYyAhPT0gdm9pZCAwID8gX2MgOiBudWxsO1xyXG4gICAgICAgIGlmICh0aGlzLl9ldmVudE1vdXNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3BvaW50ID0gbWFrZUV2ZW50TW91c2VQb2ludChpc1N0YXJ0LCB0aGlzLl9ldmVudE1vdXNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5fZXZlbnRUb3VjaCkge1xyXG4gICAgICAgICAgICB0aGlzLl9wb2ludCA9IG1ha2VFdmVudFRvdWNoKGlzU3RhcnQsIHRoaXMuX2V2ZW50VG91Y2gpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldCBpc1N0YXJ0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdGFydDtcclxuICAgIH1cclxuICAgIGdldCBmcm9tT3JpZ2luKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9vcmlnaW47XHJcbiAgICB9XHJcbiAgICBnZXQgZnJvbVRhcmdldCgpIHtcclxuICAgICAgICBpZiAodGhpcy5fZXZlbnRLZXkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2V2ZW50S2V5LnRhcmdldDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5fZXZlbnRNb3VzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZXZlbnRNb3VzZS50YXJnZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX2V2ZW50VG91Y2gpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2V2ZW50VG91Y2gudGFyZ2V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGdldCBmcm9tVHlwaW5nKCkge1xyXG4gICAgICAgIHJldHVybiAhIXRoaXMuX2V2ZW50S2V5O1xyXG4gICAgfVxyXG4gICAgZ2V0IGZyb21Qb2ludGluZygpIHtcclxuICAgICAgICByZXR1cm4gISF0aGlzLl9wb2ludDtcclxuICAgIH1cclxuICAgIGdldCBoYXNBbHQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2V2ZW50S2V5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9ldmVudEtleS5hbHRLZXk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX2V2ZW50TW91c2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2V2ZW50TW91c2UuYWx0S2V5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLl9ldmVudFRvdWNoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9ldmVudFRvdWNoLmFsdEtleTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZ2V0IGhhc0N0cmwoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2V2ZW50S2V5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9ldmVudEtleS5jdHJsS2V5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLl9ldmVudE1vdXNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9ldmVudE1vdXNlLmN0cmxLZXk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX2V2ZW50VG91Y2gpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2V2ZW50VG91Y2guY3RybEtleTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZ2V0IGhhc1NoaWZ0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9ldmVudEtleSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZXZlbnRLZXkuc2hpZnRLZXk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX2V2ZW50TW91c2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2V2ZW50TW91c2Uuc2hpZnRLZXk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX2V2ZW50VG91Y2gpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2V2ZW50VG91Y2guc2hpZnRLZXk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGdldCBoYXNNZXRhKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9ldmVudEtleSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZXZlbnRLZXkubWV0YUtleTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5fZXZlbnRNb3VzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZXZlbnRNb3VzZS5tZXRhS2V5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLl9ldmVudFRvdWNoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9ldmVudFRvdWNoLm1ldGFLZXk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGdldCBrZXlUeXBlZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5fZXZlbnRLZXkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2V2ZW50S2V5LmtleTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBnZXQgaXNFbnRlcigpIHtcclxuICAgICAgICByZXR1cm4gaXNLZXlFbnRlcih0aGlzLl9ldmVudEtleSk7XHJcbiAgICB9XHJcbiAgICBnZXQgaXNFc2NhcGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIGlzS2V5RXNjYXBlKHRoaXMuX2V2ZW50S2V5KTtcclxuICAgIH1cclxuICAgIGdldCBpc1NwYWNlKCkge1xyXG4gICAgICAgIHJldHVybiBpc0tleVNwYWNlKHRoaXMuX2V2ZW50S2V5KTtcclxuICAgIH1cclxuICAgIGdldCBpc0RvdWJsZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5fZXZlbnRNb3VzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXNFdmVudE1vdXNlRG91YmxlKHRoaXMuX3N0YXJ0LCB0aGlzLl9ldmVudE1vdXNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5fZXZlbnRUb3VjaCkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXNFdmVudFRvdWNoRG91YmxlKHRoaXMuX3N0YXJ0LCB0aGlzLl9ldmVudFRvdWNoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZ2V0IGlzTG9uZygpIHtcclxuICAgICAgICBpZiAodGhpcy5fZXZlbnRNb3VzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXNFdmVudE1vdXNlTG9uZyh0aGlzLl9zdGFydCwgdGhpcy5fZXZlbnRNb3VzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX2V2ZW50VG91Y2gpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlzRXZlbnRUb3VjaExvbmcodGhpcy5fc3RhcnQsIHRoaXMuX2V2ZW50VG91Y2gpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBnZXQgcG9pbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BvaW50O1xyXG4gICAgfVxyXG4gICAgZ2V0IHBvaW50WCgpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgcmV0dXJuIChfYSA9IHRoaXMuX3BvaW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucG9zWDtcclxuICAgIH1cclxuICAgIGdldCBwb2ludFkoKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIHJldHVybiAoX2EgPSB0aGlzLl9wb2ludCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnBvc1k7XHJcbiAgICB9XHJcbiAgICBnZXQgaXNGaXJzdEJ1dHRvbigpIHtcclxuICAgICAgICByZXR1cm4gaXNGaXJzdEJ1dHRvbih0aGlzLl9ldmVudE1vdXNlKTtcclxuICAgIH1cclxuICAgIGdldCBpc01pZGRsZUJ1dHRvbigpIHtcclxuICAgICAgICByZXR1cm4gaXNNaWRkbGVCdXR0b24odGhpcy5fZXZlbnRNb3VzZSk7XHJcbiAgICB9XHJcbiAgICBnZXQgaXNTZWNvbmRCdXR0b24oKSB7XHJcbiAgICAgICAgcmV0dXJuIGlzU2Vjb25kQnV0dG9uKHRoaXMuX2V2ZW50TW91c2UpO1xyXG4gICAgfVxyXG4gICAgZ2V0IGlzT25lRmluZ2VyKCkge1xyXG4gICAgICAgIHJldHVybiBpc09uZUZpbmdlcih0aGlzLl9ldmVudFRvdWNoKTtcclxuICAgIH1cclxuICAgIGdldCBpc1R3b0ZpbmdlcnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIGlzVHdvRmluZ2Vycyh0aGlzLl9ldmVudFRvdWNoKTtcclxuICAgIH1cclxuICAgIGdldCBpc1RocmVlRmluZ2VycygpIHtcclxuICAgICAgICByZXR1cm4gaXNUaHJlZUZpbmdlcnModGhpcy5fZXZlbnRUb3VjaCk7XHJcbiAgICB9XHJcbiAgICBnZXQgaXNGb3VyRmluZ2VycygpIHtcclxuICAgICAgICByZXR1cm4gaXNGb3VyRmluZ2Vycyh0aGlzLl9ldmVudFRvdWNoKTtcclxuICAgIH1cclxuICAgIGdldCBpc01haW4oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3N0YXJ0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX2V2ZW50S2V5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpc01haW5LZXkodGhpcy5fZXZlbnRLZXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLl9ldmVudE1vdXNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpc01haW5Nb3VzZSh0aGlzLl9ldmVudE1vdXNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5fZXZlbnRUb3VjaCkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXNNYWluVG91Y2godGhpcy5fZXZlbnRUb3VjaCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGdldCBpc01haW5LZXkoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3N0YXJ0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGlzTWFpbktleSh0aGlzLl9ldmVudEtleSk7XHJcbiAgICB9XHJcbiAgICBnZXQgaXNNYWluTW91c2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3N0YXJ0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGlzTWFpbk1vdXNlKHRoaXMuX2V2ZW50TW91c2UpO1xyXG4gICAgfVxyXG4gICAgZ2V0IGlzTWFpblRvdWNoKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zdGFydCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpc01haW5Ub3VjaCh0aGlzLl9ldmVudFRvdWNoKTtcclxuICAgIH1cclxuICAgIGdldCBpc01haW5Qb2ludCgpIHtcclxuICAgICAgICBpZiAodGhpcy5fc3RhcnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaXNNYWluTW91c2UodGhpcy5fZXZlbnRNb3VzZSkgfHwgaXNNYWluVG91Y2godGhpcy5fZXZlbnRUb3VjaCk7XHJcbiAgICB9XHJcbiAgICBnZXQgaXNNaWRpKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zdGFydCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9ldmVudEtleSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXNNaWRpS2V5KHRoaXMuX2V2ZW50S2V5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5fZXZlbnRNb3VzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXNNaWRpTW91c2UodGhpcy5fZXZlbnRNb3VzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX2V2ZW50VG91Y2gpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlzTWlkaVRvdWNoKHRoaXMuX2V2ZW50VG91Y2gpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBnZXQgaXNNaWRpS2V5KCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zdGFydCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpc01pZGlLZXkodGhpcy5fZXZlbnRLZXkpO1xyXG4gICAgfVxyXG4gICAgZ2V0IGlzTWlkaU1vdXNlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zdGFydCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpc01pZGlNb3VzZSh0aGlzLl9ldmVudE1vdXNlKTtcclxuICAgIH1cclxuICAgIGdldCBpc01pZGlUb3VjaCgpIHtcclxuICAgICAgICBpZiAodGhpcy5fc3RhcnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaXNNaWRpVG91Y2godGhpcy5fZXZlbnRUb3VjaCk7XHJcbiAgICB9XHJcbiAgICBnZXQgaXNNaWRpUG9pbnQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3N0YXJ0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX2V2ZW50TW91c2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlzTWlkaU1vdXNlKHRoaXMuX2V2ZW50TW91c2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLl9ldmVudFRvdWNoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpc01pZGlUb3VjaCh0aGlzLl9ldmVudFRvdWNoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZ2V0IGlzTWVudSgpIHtcclxuICAgICAgICBpZiAodGhpcy5fc3RhcnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fZXZlbnRLZXkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlzTWVudUtleSh0aGlzLl9ldmVudEtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX2V2ZW50S2V5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpc01lbnVNb3VzZSh0aGlzLl9ldmVudE1vdXNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5fZXZlbnRLZXkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlzTWVudVRvdWNoKHRoaXMuX2V2ZW50VG91Y2gpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBnZXQgaXNNZW51S2V5KCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zdGFydCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpc01lbnVLZXkodGhpcy5fZXZlbnRLZXkpO1xyXG4gICAgfVxyXG4gICAgZ2V0IGlzTWVudU1vdXNlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zdGFydCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpc01lbnVNb3VzZSh0aGlzLl9ldmVudE1vdXNlKTtcclxuICAgIH1cclxuICAgIGdldCBpc01lbnVUb3VjaCgpIHtcclxuICAgICAgICBpZiAodGhpcy5fc3RhcnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaXNNZW51VG91Y2godGhpcy5fZXZlbnRUb3VjaCk7XHJcbiAgICB9XHJcbiAgICBnZXQgaXNNZW51UG9pbnQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3N0YXJ0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX2V2ZW50TW91c2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlzTWVudU1vdXNlKHRoaXMuX2V2ZW50TW91c2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLl9ldmVudFRvdWNoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpc01lbnVUb3VjaCh0aGlzLl9ldmVudFRvdWNoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZ2V0IHN0b3AoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0b3A7XHJcbiAgICB9XHJcbiAgICBjb25zdW1lZCgpIHtcclxuICAgICAgICB0aGlzLl9zdG9wID0gdHJ1ZTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlFpbkV2ZW50ID0gUWluRXZlbnQ7XHJcbmNsYXNzIFFpbldhaXRlcnMge1xyXG4gICAgY29uc3RydWN0b3IoaW5pdGlhbCkge1xyXG4gICAgICAgIHRoaXMud2FpdGVycyA9IGluaXRpYWwgPyBpbml0aWFsIDogW107XHJcbiAgICB9XHJcbiAgICBhZGRXYWl0ZXIod2FpdGVyKSB7XHJcbiAgICAgICAgdGhpcy53YWl0ZXJzLnB1c2god2FpdGVyKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGhhc1dhaXRlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy53YWl0ZXJzLmxlbmd0aCA+IDA7XHJcbiAgICB9XHJcbiAgICBzZW5kV2FpdGVycyhyZXN1bHQpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IHdhaXRlciBvZiB0aGlzLndhaXRlcnMpIHtcclxuICAgICAgICAgICAgd2FpdGVyKHJlc3VsdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUWluV2FpdGVycyA9IFFpbldhaXRlcnM7XHJcbmNsYXNzIFFpblBvaW50ZXJDYWxscyB7XHJcbn1cclxuZXhwb3J0cy5RaW5Qb2ludGVyQ2FsbHMgPSBRaW5Qb2ludGVyQ2FsbHM7XHJcbmZ1bmN0aW9uIHN0b3BFdmVudChldmVudCkge1xyXG4gICAgaWYgKGV2ZW50LnByZXZlbnREZWZhdWx0KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuICAgIGlmIChldmVudC5zdG9wUHJvcGFnYXRpb24pIHtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuICAgIGV2ZW50LmNhbmNlbEJ1YmJsZSA9IHRydWU7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxudmFyIGxhc3RFdmVudE1vdXNlID0gbnVsbDtcclxudmFyIGxhc3RFdmVudFRvdWNoID0gbnVsbDtcclxuZnVuY3Rpb24gbWFrZUV2ZW50TW91c2VQb2ludChpc1N0YXJ0LCBldikge1xyXG4gICAgaWYgKCFldikge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmVzdWx0ID0ge1xyXG4gICAgICAgIHBvc1g6IDAsXHJcbiAgICAgICAgcG9zWTogMCxcclxuICAgIH07XHJcbiAgICBpZiAoZXYuY2xpZW50WCB8fCBldi5jbGllbnRZKSB7XHJcbiAgICAgICAgcmVzdWx0LnBvc1ggPSBldi5jbGllbnRYO1xyXG4gICAgICAgIHJlc3VsdC5wb3NZID0gZXYuY2xpZW50WTtcclxuICAgIH1cclxuICAgIGlmIChpc1N0YXJ0KSB7XHJcbiAgICAgICAgbGFzdEV2ZW50TW91c2UgPSBldjtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuZnVuY3Rpb24gbWFrZUV2ZW50VG91Y2goaXNTdGFydCwgZXYpIHtcclxuICAgIGlmICghZXYpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGNvbnN0IHJlc3VsdCA9IHtcclxuICAgICAgICBwb3NYOiAwLFxyXG4gICAgICAgIHBvc1k6IDAsXHJcbiAgICB9O1xyXG4gICAgaWYgKGV2LnRvdWNoZXMgJiYgdGhpcy5fZXZlbnQudG91Y2hlcy5sZW5ndGggPj0gMSkge1xyXG4gICAgICAgIGxldCBpbmRleCA9IE1hdGguZmxvb3IodGhpcy5fZXZlbnQudG91Y2hlcy5sZW5ndGggLyAyKTtcclxuICAgICAgICByZXN1bHQucG9zWCA9IGV2LnRvdWNoZXNbaW5kZXhdLmNsaWVudFg7XHJcbiAgICAgICAgcmVzdWx0LnBvc1kgPSBldi50b3VjaGVzW2luZGV4XS5jbGllbnRZO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzU3RhcnQpIHtcclxuICAgICAgICBsYXN0RXZlbnRUb3VjaCA9IGV2O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5mdW5jdGlvbiBpc0V2ZW50TW91c2VEb3VibGUoaXNTdGFydCwgZXYpIHtcclxuICAgIGlmICghaXNTdGFydCB8fCBsYXN0RXZlbnRNb3VzZSA9PSBudWxsIHx8IGV2ID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBjb25zdCB0aW1lRGlmID0gZXYudGltZVN0YW1wIC0gbGFzdEV2ZW50TW91c2UudGltZVN0YW1wO1xyXG4gICAgcmV0dXJuIHRpbWVEaWYgPCA0NTA7XHJcbn1cclxuZnVuY3Rpb24gaXNFdmVudFRvdWNoRG91YmxlKGlzU3RhcnQsIGV2KSB7XHJcbiAgICBpZiAoIWlzU3RhcnQgfHwgbGFzdEV2ZW50VG91Y2ggPT0gbnVsbCB8fCBldiA9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdGltZURpZiA9IGV2LnRpbWVTdGFtcCAtIGxhc3RFdmVudFRvdWNoLnRpbWVTdGFtcDtcclxuICAgIHJldHVybiB0aW1lRGlmIDwgNDUwO1xyXG59XHJcbmZ1bmN0aW9uIGlzRXZlbnRNb3VzZUxvbmcoaXNTdGFydCwgZXYpIHtcclxuICAgIGlmICghaXNTdGFydCB8fCBsYXN0RXZlbnRNb3VzZSA9PSBudWxsIHx8IGV2ID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBjb25zdCB0aW1lRGlmID0gZXYudGltZVN0YW1wIC0gbGFzdEV2ZW50TW91c2UudGltZVN0YW1wO1xyXG4gICAgcmV0dXJuIHRpbWVEaWYgPiA4NDA7XHJcbn1cclxuZnVuY3Rpb24gaXNFdmVudFRvdWNoTG9uZyhpc1N0YXJ0LCBldikge1xyXG4gICAgaWYgKCFpc1N0YXJ0IHx8IGxhc3RFdmVudFRvdWNoID09IG51bGwgfHwgZXYgPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGNvbnN0IHRpbWVEaWYgPSBldi50aW1lU3RhbXAgLSBsYXN0RXZlbnRUb3VjaC50aW1lU3RhbXA7XHJcbiAgICByZXR1cm4gdGltZURpZiA+IDg0MDtcclxufVxyXG5mdW5jdGlvbiBpc0tleUluTGlzdChldiwgbGlzdCkge1xyXG4gICAgaWYgKCFldikge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGxldCBrZXlMb3dlciA9IGV2LmtleS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgcmV0dXJuIGxpc3QuaW5kZXhPZihrZXlMb3dlcikgPiAtMTtcclxufVxyXG5mdW5jdGlvbiBpc0tleUVudGVyKGV2KSB7XHJcbiAgICBpZiAoIWV2KSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlzS2V5SW5MaXN0KGV2LCBbXCJlbnRlclwiLCBcInJldHVyblwiXSkgfHwgZXYua2V5Q29kZSA9PT0gMTM7XHJcbn1cclxuZnVuY3Rpb24gaXNLZXlFc2NhcGUoZXYpIHtcclxuICAgIGlmICghZXYpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXNLZXlJbkxpc3QoZXYsIFtcImVzY1wiLCBcImVzY2FwZVwiXSkgfHwgZXYua2V5Q29kZSA9PT0gMjc7XHJcbn1cclxuZnVuY3Rpb24gaXNLZXlTcGFjZShldikge1xyXG4gICAgaWYgKCFldikge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiBpc0tleUluTGlzdChldiwgW1wiIFwiLCBcInNwYWNlXCIsIFwic3BhY2ViYXJcIl0pIHx8IGV2LmtleUNvZGUgPT09IDMyO1xyXG59XHJcbmZ1bmN0aW9uIGlzRmlyc3RCdXR0b24oZXYpIHtcclxuICAgIGlmICghZXYpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKGV2ID09PSBudWxsIHx8IGV2ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBldi5idXR0b24pID09IDA7XHJcbn1cclxuZnVuY3Rpb24gaXNNaWRkbGVCdXR0b24oZXYpIHtcclxuICAgIGlmICghZXYpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKGV2ID09PSBudWxsIHx8IGV2ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBldi5idXR0b24pID09IDE7XHJcbn1cclxuZnVuY3Rpb24gaXNTZWNvbmRCdXR0b24oZXYpIHtcclxuICAgIGlmICghZXYpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKGV2ID09PSBudWxsIHx8IGV2ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBldi5idXR0b24pID09IDI7XHJcbn1cclxuZnVuY3Rpb24gaXNPbmVGaW5nZXIoZXYpIHtcclxuICAgIGlmICghZXYpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKGV2ID09PSBudWxsIHx8IGV2ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBldi50b3VjaGVzLmxlbmd0aCkgPT0gMTtcclxufVxyXG5mdW5jdGlvbiBpc1R3b0ZpbmdlcnMoZXYpIHtcclxuICAgIGlmICghZXYpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKGV2ID09PSBudWxsIHx8IGV2ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBldi50b3VjaGVzLmxlbmd0aCkgPT0gMjtcclxufVxyXG5mdW5jdGlvbiBpc1RocmVlRmluZ2Vycyhldikge1xyXG4gICAgaWYgKCFldikge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiAoZXYgPT09IG51bGwgfHwgZXYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGV2LnRvdWNoZXMubGVuZ3RoKSA9PSAzO1xyXG59XHJcbmZ1bmN0aW9uIGlzRm91ckZpbmdlcnMoZXYpIHtcclxuICAgIGlmICghZXYpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKGV2ID09PSBudWxsIHx8IGV2ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBldi50b3VjaGVzLmxlbmd0aCkgPT0gNDtcclxufVxyXG5mdW5jdGlvbiBpc01haW5LZXkoZXYpIHtcclxuICAgIGlmICghZXYpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXNLZXlFbnRlcihldik7XHJcbn1cclxuZnVuY3Rpb24gaXNNaWRpS2V5KGV2KSB7XHJcbiAgICBpZiAoIWV2KSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGV2LmN0cmxLZXkgJiYgZXYuYWx0S2V5ICYmIGlzS2V5U3BhY2UoZXYpO1xyXG59XHJcbmZ1bmN0aW9uIGlzTWVudUtleShldikge1xyXG4gICAgaWYgKCFldikge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiBldi5jdHJsS2V5ICYmICFldi5hbHRLZXkgJiYgaXNLZXlTcGFjZShldik7XHJcbn1cclxuZnVuY3Rpb24gaXNNYWluTW91c2UoZXYpIHtcclxuICAgIGlmICghZXYpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXNGaXJzdEJ1dHRvbihldik7XHJcbn1cclxuZnVuY3Rpb24gaXNNYWluVG91Y2goZXYpIHtcclxuICAgIGlmICghZXYpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXNPbmVGaW5nZXIoZXYpO1xyXG59XHJcbmZ1bmN0aW9uIGlzTWlkaU1vdXNlKGV2KSB7XHJcbiAgICBpZiAoIWV2KSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlzTWlkZGxlQnV0dG9uKGV2KTtcclxufVxyXG5mdW5jdGlvbiBpc01pZGlUb3VjaChldikge1xyXG4gICAgaWYgKCFldikge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiBpc1RocmVlRmluZ2Vycyhldik7XHJcbn1cclxuZnVuY3Rpb24gaXNNZW51TW91c2UoZXYpIHtcclxuICAgIGlmICghZXYpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXNTZWNvbmRCdXR0b24oZXYpO1xyXG59XHJcbmZ1bmN0aW9uIGlzTWVudVRvdWNoKGV2KSB7XHJcbiAgICBpZiAoIWV2KSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlzVHdvRmluZ2Vycyhldik7XHJcbn1cclxuZnVuY3Rpb24gYWRkQWN0aW9uKG9yaWdpbiwgYWN0aW9uKSB7XHJcbiAgICBvcmlnaW4uYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgYWN0S2V5RG93bik7XHJcbiAgICBvcmlnaW4uYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGFjdEtleVVwKTtcclxuICAgIG9yaWdpbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGFjdE1vdXNlRG93bik7XHJcbiAgICBvcmlnaW4uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgYWN0TW91c2VVcCk7XHJcbiAgICBvcmlnaW4uYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgYWN0VG91Y2hTdGFydCk7XHJcbiAgICBvcmlnaW4uYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIGFjdFRvdWNoRW5kKTtcclxuICAgIGZ1bmN0aW9uIGFjdEtleURvd24oZXYpIHtcclxuICAgICAgICBsZXQgcWluRXZlbnQgPSBuZXcgUWluRXZlbnQob3JpZ2luLCB0cnVlLCB7IGV2ZW50S2V5OiBldiB9KTtcclxuICAgICAgICBhY3Rpb24ocWluRXZlbnQpO1xyXG4gICAgICAgIGlmIChxaW5FdmVudC5zdG9wKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdG9wRXZlbnQoZXYpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYWN0S2V5VXAoZXYpIHtcclxuICAgICAgICBsZXQgcWluRXZlbnQgPSBuZXcgUWluRXZlbnQob3JpZ2luLCBmYWxzZSwgeyBldmVudEtleTogZXYgfSk7XHJcbiAgICAgICAgYWN0aW9uKHFpbkV2ZW50KTtcclxuICAgICAgICBpZiAocWluRXZlbnQuc3RvcCkge1xyXG4gICAgICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGFjdE1vdXNlRG93bihldikge1xyXG4gICAgICAgIGxldCBxaW5FdmVudCA9IG5ldyBRaW5FdmVudChvcmlnaW4sIHRydWUsIHsgZXZlbnRNb3VzZTogZXYgfSk7XHJcbiAgICAgICAgYWN0aW9uKHFpbkV2ZW50KTtcclxuICAgICAgICBpZiAocWluRXZlbnQuc3RvcCkge1xyXG4gICAgICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGFjdE1vdXNlVXAoZXYpIHtcclxuICAgICAgICBsZXQgcWluRXZlbnQgPSBuZXcgUWluRXZlbnQob3JpZ2luLCBmYWxzZSwgeyBldmVudE1vdXNlOiBldiB9KTtcclxuICAgICAgICBhY3Rpb24ocWluRXZlbnQpO1xyXG4gICAgICAgIGlmIChxaW5FdmVudC5zdG9wKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdG9wRXZlbnQoZXYpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYWN0VG91Y2hTdGFydChldikge1xyXG4gICAgICAgIGxldCBxaW5FdmVudCA9IG5ldyBRaW5FdmVudChvcmlnaW4sIHRydWUsIHsgZXZlbnRUb3VjaDogZXYgfSk7XHJcbiAgICAgICAgYWN0aW9uKHFpbkV2ZW50KTtcclxuICAgICAgICBpZiAocWluRXZlbnQuc3RvcCkge1xyXG4gICAgICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGFjdFRvdWNoRW5kKGV2KSB7XHJcbiAgICAgICAgbGV0IHFpbkV2ZW50ID0gbmV3IFFpbkV2ZW50KG9yaWdpbiwgZmFsc2UsIHsgZXZlbnRUb3VjaDogZXYgfSk7XHJcbiAgICAgICAgYWN0aW9uKHFpbkV2ZW50KTtcclxuICAgICAgICBpZiAocWluRXZlbnQuc3RvcCkge1xyXG4gICAgICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBhZGRBY3Rpb25NYWluKG9yaWdpbiwgYWN0aW9uKSB7XHJcbiAgICBhZGRBY3Rpb24ob3JpZ2luLCAocWluRXZlbnQpID0+IHtcclxuICAgICAgICBpZiAocWluRXZlbnQuaXNNYWluKSB7XHJcbiAgICAgICAgICAgIGFjdGlvbihxaW5FdmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gYWRkQWN0aW9uTWFpbktleShvcmlnaW4sIGFjdGlvbikge1xyXG4gICAgYWRkQWN0aW9uKG9yaWdpbiwgKHFpbkV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKHFpbkV2ZW50LmlzTWFpbktleSkge1xyXG4gICAgICAgICAgICBhY3Rpb24ocWluRXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGFkZEFjdGlvbk1haW5Nb3VzZShvcmlnaW4sIGFjdGlvbikge1xyXG4gICAgYWRkQWN0aW9uKG9yaWdpbiwgKHFpbkV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKHFpbkV2ZW50LmlzTWFpbk1vdXNlKSB7XHJcbiAgICAgICAgICAgIGFjdGlvbihxaW5FdmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gYWRkQWN0aW9uTWFpblRvdWNoKG9yaWdpbiwgYWN0aW9uKSB7XHJcbiAgICBhZGRBY3Rpb24ob3JpZ2luLCAocWluRXZlbnQpID0+IHtcclxuICAgICAgICBpZiAocWluRXZlbnQuaXNNYWluTW91c2UpIHtcclxuICAgICAgICAgICAgYWN0aW9uKHFpbkV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBhZGRBY3Rpb25NYWluUG9pbnQob3JpZ2luLCBhY3Rpb24pIHtcclxuICAgIGFkZEFjdGlvbihvcmlnaW4sIChxaW5FdmVudCkgPT4ge1xyXG4gICAgICAgIGlmIChxaW5FdmVudC5pc01haW5Qb2ludCkge1xyXG4gICAgICAgICAgICBhY3Rpb24ocWluRXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGFkZEFjdGlvbk1pZGkob3JpZ2luLCBhY3Rpb24pIHtcclxuICAgIGFkZEFjdGlvbihvcmlnaW4sIChxaW5FdmVudCkgPT4ge1xyXG4gICAgICAgIGlmIChxaW5FdmVudC5pc01pZGkpIHtcclxuICAgICAgICAgICAgYWN0aW9uKHFpbkV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBhZGRBY3Rpb25NaWRpS2V5KG9yaWdpbiwgYWN0aW9uKSB7XHJcbiAgICBhZGRBY3Rpb24ob3JpZ2luLCAocWluRXZlbnQpID0+IHtcclxuICAgICAgICBpZiAocWluRXZlbnQuaXNNaWRpS2V5KSB7XHJcbiAgICAgICAgICAgIGFjdGlvbihxaW5FdmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gYWRkQWN0aW9uTWlkaU1vdXNlKG9yaWdpbiwgYWN0aW9uKSB7XHJcbiAgICBhZGRBY3Rpb24ob3JpZ2luLCAocWluRXZlbnQpID0+IHtcclxuICAgICAgICBpZiAocWluRXZlbnQuaXNNaWRpTW91c2UpIHtcclxuICAgICAgICAgICAgYWN0aW9uKHFpbkV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBhZGRBY3Rpb25NaWRpVG91Y2gob3JpZ2luLCBhY3Rpb24pIHtcclxuICAgIGFkZEFjdGlvbihvcmlnaW4sIChxaW5FdmVudCkgPT4ge1xyXG4gICAgICAgIGlmIChxaW5FdmVudC5pc01pZGlNb3VzZSkge1xyXG4gICAgICAgICAgICBhY3Rpb24ocWluRXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGFkZEFjdGlvbk1pZGlQb2ludChvcmlnaW4sIGFjdGlvbikge1xyXG4gICAgYWRkQWN0aW9uKG9yaWdpbiwgKHFpbkV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKHFpbkV2ZW50LmlzTWlkaVBvaW50KSB7XHJcbiAgICAgICAgICAgIGFjdGlvbihxaW5FdmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gYWRkQWN0aW9uTWVudShvcmlnaW4sIGFjdGlvbikge1xyXG4gICAgYWRkQWN0aW9uKG9yaWdpbiwgKHFpbkV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKHFpbkV2ZW50LmlzTWVudSkge1xyXG4gICAgICAgICAgICBhY3Rpb24ocWluRXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGFkZEFjdGlvbk1lbnVLZXkob3JpZ2luLCBhY3Rpb24pIHtcclxuICAgIGFkZEFjdGlvbihvcmlnaW4sIChxaW5FdmVudCkgPT4ge1xyXG4gICAgICAgIGlmIChxaW5FdmVudC5pc01lbnVLZXkpIHtcclxuICAgICAgICAgICAgYWN0aW9uKHFpbkV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBhZGRBY3Rpb25NZW51TW91c2Uob3JpZ2luLCBhY3Rpb24pIHtcclxuICAgIGFkZEFjdGlvbihvcmlnaW4sIChxaW5FdmVudCkgPT4ge1xyXG4gICAgICAgIGlmIChxaW5FdmVudC5pc01lbnVNb3VzZSkge1xyXG4gICAgICAgICAgICBhY3Rpb24ocWluRXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGFkZEFjdGlvbk1lbnVUb3VjaChvcmlnaW4sIGFjdGlvbikge1xyXG4gICAgYWRkQWN0aW9uKG9yaWdpbiwgKHFpbkV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKHFpbkV2ZW50LmlzTWVudU1vdXNlKSB7XHJcbiAgICAgICAgICAgIGFjdGlvbihxaW5FdmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gYWRkQWN0aW9uTWVudVBvaW50KG9yaWdpbiwgYWN0aW9uKSB7XHJcbiAgICBhZGRBY3Rpb24ob3JpZ2luLCAocWluRXZlbnQpID0+IHtcclxuICAgICAgICBpZiAocWluRXZlbnQuaXNNZW51UG9pbnQpIHtcclxuICAgICAgICAgICAgYWN0aW9uKHFpbkV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBhZGRBY3Rpb25zKG9yaWdpbnMsIGFjdGlvbikge1xyXG4gICAgZm9yIChjb25zdCBlbGVtZW50IG9mIG9yaWdpbnMpIHtcclxuICAgICAgICBhZGRBY3Rpb24oZWxlbWVudCwgYWN0aW9uKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBhZGRBY3Rpb25zTWFpbihvcmlnaW5zLCBhY3Rpb24pIHtcclxuICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBvcmlnaW5zKSB7XHJcbiAgICAgICAgYWRkQWN0aW9uTWFpbihlbGVtZW50LCBhY3Rpb24pO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGFkZEFjdGlvbnNNYWluS2V5KG9yaWdpbnMsIGFjdGlvbikge1xyXG4gICAgZm9yIChjb25zdCBlbGVtZW50IG9mIG9yaWdpbnMpIHtcclxuICAgICAgICBhZGRBY3Rpb25NYWluKGVsZW1lbnQsIGFjdGlvbik7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gYWRkQWN0aW9uc01haW5Qb2ludChvcmlnaW5zLCBhY3Rpb24pIHtcclxuICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBvcmlnaW5zKSB7XHJcbiAgICAgICAgYWRkQWN0aW9uTWFpbihlbGVtZW50LCBhY3Rpb24pO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGFkZE1vdmVyKHNvdXJjZXMsIHRhcmdldCwgZHJhZ0NhbGxzKSB7XHJcbiAgICB2YXIgZHJhZ0luaXRFdmVudFggPSAwO1xyXG4gICAgdmFyIGRyYWdJbml0RXZlbnRZID0gMDtcclxuICAgIHZhciBkcmFnSW5pdFBvc1ggPSAwO1xyXG4gICAgdmFyIGRyYWdJbml0UG9zWSA9IDA7XHJcbiAgICBmb3IgKGxldCBzb3VyY2Ugb2Ygc291cmNlcykge1xyXG4gICAgICAgIHNvdXJjZS5vbm1vdXNlZG93biA9IG9uTW92ZXJNb3VzZUluaXQ7XHJcbiAgICAgICAgc291cmNlLm9udG91Y2hzdGFydCA9IG9uTW92ZXJUb3VjaEluaXQ7XHJcbiAgICAgICAgc291cmNlLm9uZHJhZ3N0YXJ0ID0gc3RvcEV2ZW50O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gb25Nb3Zlck1vdXNlSW5pdChldikge1xyXG4gICAgICAgIGlmIChkb2N1bWVudC5vbm1vdXNlbW92ZSB8fCBkb2N1bWVudC5vbnRvdWNobW92ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uRG91YmxlICYmIGlzRXZlbnRNb3VzZURvdWJsZSh0cnVlLCBldikpIHtcclxuICAgICAgICAgICAgZHJhZ0NhbGxzLm9uRG91YmxlKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRyYWdDYWxscyAmJiBkcmFnQ2FsbHMub25Mb25nICYmIGlzRXZlbnRNb3VzZUxvbmcodHJ1ZSwgZXYpKSB7XHJcbiAgICAgICAgICAgIGRyYWdDYWxscy5vbkxvbmcoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwb2ludGVyID0gbWFrZUV2ZW50TW91c2VQb2ludCh0cnVlLCBldik7XHJcbiAgICAgICAgZHJhZ0luaXRFdmVudFggPSBwb2ludGVyLnBvc1g7XHJcbiAgICAgICAgZHJhZ0luaXRFdmVudFkgPSBwb2ludGVyLnBvc1k7XHJcbiAgICAgICAgZHJhZ0luaXRQb3NYID0gcGFyc2VJbnQodGFyZ2V0LnN0eWxlLmxlZnQsIDEwKTtcclxuICAgICAgICBkcmFnSW5pdFBvc1kgPSBwYXJzZUludCh0YXJnZXQuc3R5bGUudG9wLCAxMCk7XHJcbiAgICAgICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSBvbk1vdmVyTW91c2VNb3ZlO1xyXG4gICAgICAgIGRvY3VtZW50Lm9udG91Y2htb3ZlID0gb25Nb3ZlclRvdWNoTW92ZTtcclxuICAgICAgICBkb2N1bWVudC5vbm1vdXNldXAgPSBvbk1vdmVyQ2xvc2U7XHJcbiAgICAgICAgZG9jdW1lbnQub250b3VjaGVuZCA9IG9uTW92ZXJDbG9zZTtcclxuICAgICAgICBxaW5fc2tpbl8xLlFpblNraW4uaGlkZUFsbElGcmFtZXMoKTtcclxuICAgICAgICBpZiAoZHJhZ0NhbGxzICYmIGRyYWdDYWxscy5vblN0YXJ0KSB7XHJcbiAgICAgICAgICAgIGRyYWdDYWxscy5vblN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdG9wRXZlbnQoZXYpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gb25Nb3ZlclRvdWNoSW5pdChldikge1xyXG4gICAgICAgIGlmIChkb2N1bWVudC5vbm1vdXNlbW92ZSB8fCBkb2N1bWVudC5vbnRvdWNobW92ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uRG91YmxlICYmIGlzRXZlbnRUb3VjaERvdWJsZSh0cnVlLCBldikpIHtcclxuICAgICAgICAgICAgZHJhZ0NhbGxzLm9uRG91YmxlKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRyYWdDYWxscyAmJiBkcmFnQ2FsbHMub25Mb25nICYmIGlzRXZlbnRUb3VjaExvbmcodHJ1ZSwgZXYpKSB7XHJcbiAgICAgICAgICAgIGRyYWdDYWxscy5vbkxvbmcoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwb2ludGVyID0gbWFrZUV2ZW50VG91Y2godHJ1ZSwgZXYpO1xyXG4gICAgICAgIGRyYWdJbml0RXZlbnRYID0gcG9pbnRlci5wb3NYO1xyXG4gICAgICAgIGRyYWdJbml0RXZlbnRZID0gcG9pbnRlci5wb3NZO1xyXG4gICAgICAgIGRyYWdJbml0UG9zWCA9IHBhcnNlSW50KHRhcmdldC5zdHlsZS5sZWZ0LCAxMCk7XHJcbiAgICAgICAgZHJhZ0luaXRQb3NZID0gcGFyc2VJbnQodGFyZ2V0LnN0eWxlLnRvcCwgMTApO1xyXG4gICAgICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gb25Nb3Zlck1vdXNlTW92ZTtcclxuICAgICAgICBkb2N1bWVudC5vbnRvdWNobW92ZSA9IG9uTW92ZXJUb3VjaE1vdmU7XHJcbiAgICAgICAgZG9jdW1lbnQub25tb3VzZXVwID0gb25Nb3ZlckNsb3NlO1xyXG4gICAgICAgIGRvY3VtZW50Lm9udG91Y2hlbmQgPSBvbk1vdmVyQ2xvc2U7XHJcbiAgICAgICAgcWluX3NraW5fMS5RaW5Ta2luLmhpZGVBbGxJRnJhbWVzKCk7XHJcbiAgICAgICAgaWYgKGRyYWdDYWxscyAmJiBkcmFnQ2FsbHMub25TdGFydCkge1xyXG4gICAgICAgICAgICBkcmFnQ2FsbHMub25TdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG9uTW92ZXJNb3VzZU1vdmUoZXYpIHtcclxuICAgICAgICBjb25zdCBwb2ludGVyID0gbWFrZUV2ZW50TW91c2VQb2ludChmYWxzZSwgZXYpO1xyXG4gICAgICAgIHZhciBkcmFnRGlmWCA9IHBvaW50ZXIucG9zWCAtIGRyYWdJbml0RXZlbnRYO1xyXG4gICAgICAgIHZhciBkcmFnRGlmWSA9IHBvaW50ZXIucG9zWSAtIGRyYWdJbml0RXZlbnRZO1xyXG4gICAgICAgIHZhciBkcmFnRmluYWxYID0gZHJhZ0luaXRQb3NYICsgZHJhZ0RpZlg7XHJcbiAgICAgICAgdmFyIGRyYWdGaW5hbFkgPSBkcmFnSW5pdFBvc1kgKyBkcmFnRGlmWTtcclxuICAgICAgICB0YXJnZXQuc3R5bGUubGVmdCA9IChkcmFnRmluYWxYID4gMCA/IGRyYWdGaW5hbFggOiAwKSArIFwicHhcIjtcclxuICAgICAgICB0YXJnZXQuc3R5bGUudG9wID0gKGRyYWdGaW5hbFkgPiAwID8gZHJhZ0ZpbmFsWSA6IDApICsgXCJweFwiO1xyXG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uTW92ZSkge1xyXG4gICAgICAgICAgICBkcmFnQ2FsbHMub25Nb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdG9wRXZlbnQoZXYpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gb25Nb3ZlclRvdWNoTW92ZShldikge1xyXG4gICAgICAgIGNvbnN0IHBvaW50ZXIgPSBtYWtlRXZlbnRUb3VjaChmYWxzZSwgZXYpO1xyXG4gICAgICAgIHZhciBkcmFnRGlmWCA9IHBvaW50ZXIucG9zWCAtIGRyYWdJbml0RXZlbnRYO1xyXG4gICAgICAgIHZhciBkcmFnRGlmWSA9IHBvaW50ZXIucG9zWSAtIGRyYWdJbml0RXZlbnRZO1xyXG4gICAgICAgIHZhciBkcmFnRmluYWxYID0gZHJhZ0luaXRQb3NYICsgZHJhZ0RpZlg7XHJcbiAgICAgICAgdmFyIGRyYWdGaW5hbFkgPSBkcmFnSW5pdFBvc1kgKyBkcmFnRGlmWTtcclxuICAgICAgICB0YXJnZXQuc3R5bGUubGVmdCA9IChkcmFnRmluYWxYID4gMCA/IGRyYWdGaW5hbFggOiAwKSArIFwicHhcIjtcclxuICAgICAgICB0YXJnZXQuc3R5bGUudG9wID0gKGRyYWdGaW5hbFkgPiAwID8gZHJhZ0ZpbmFsWSA6IDApICsgXCJweFwiO1xyXG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uTW92ZSkge1xyXG4gICAgICAgICAgICBkcmFnQ2FsbHMub25Nb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdG9wRXZlbnQoZXYpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gb25Nb3ZlckNsb3NlKGV2KSB7XHJcbiAgICAgICAgZG9jdW1lbnQub250b3VjaG1vdmUgPSBudWxsO1xyXG4gICAgICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gbnVsbDtcclxuICAgICAgICBkb2N1bWVudC5vbnRvdWNoZW5kID0gbnVsbDtcclxuICAgICAgICBkb2N1bWVudC5vbm1vdXNldXAgPSBudWxsO1xyXG4gICAgICAgIHFpbl9za2luXzEuUWluU2tpbi5zaG93QWxsSUZyYW1lcygpO1xyXG4gICAgICAgIHFpbl9za2luXzEuUWluU2tpbi5jbGVhclNlbGVjdGlvbigpO1xyXG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uRW5kKSB7XHJcbiAgICAgICAgICAgIGRyYWdDYWxscy5vbkVuZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBhZGRSZXNpemVyKHNvdXJjZXMsIHRhcmdldCwgZHJhZ0NhbGxzKSB7XHJcbiAgICB2YXIgZHJhZ0luaXRFdmVudFggPSAwO1xyXG4gICAgdmFyIGRyYWdJbml0RXZlbnRZID0gMDtcclxuICAgIHZhciBkcmFnSW5pdFdpZHRoID0gMDtcclxuICAgIHZhciBkcmFnSW5pdEhlaWdodCA9IDA7XHJcbiAgICBmb3IgKGxldCBzb3VyY2Ugb2Ygc291cmNlcykge1xyXG4gICAgICAgIHNvdXJjZS5vbm1vdXNlZG93biA9IG9uUmVzaXplck1vdXNlSW5pdDtcclxuICAgICAgICBzb3VyY2Uub250b3VjaHN0YXJ0ID0gb25SZXNpemVyVG91Y2hJbml0O1xyXG4gICAgICAgIHNvdXJjZS5vbmRyYWdzdGFydCA9IHN0b3BFdmVudDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG9uUmVzaXplck1vdXNlSW5pdChldikge1xyXG4gICAgICAgIGlmIChkb2N1bWVudC5vbm1vdXNlbW92ZSB8fCBkb2N1bWVudC5vbnRvdWNobW92ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uRG91YmxlICYmIGlzRXZlbnRNb3VzZURvdWJsZSh0cnVlLCBldikpIHtcclxuICAgICAgICAgICAgZHJhZ0NhbGxzLm9uRG91YmxlKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRyYWdDYWxscyAmJiBkcmFnQ2FsbHMub25Mb25nICYmIGlzRXZlbnRNb3VzZUxvbmcodHJ1ZSwgZXYpKSB7XHJcbiAgICAgICAgICAgIGRyYWdDYWxscy5vbkxvbmcoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwb2ludGVyID0gbWFrZUV2ZW50TW91c2VQb2ludCh0cnVlLCBldik7XHJcbiAgICAgICAgZHJhZ0luaXRFdmVudFggPSBwb2ludGVyLnBvc1g7XHJcbiAgICAgICAgZHJhZ0luaXRFdmVudFkgPSBwb2ludGVyLnBvc1k7XHJcbiAgICAgICAgZHJhZ0luaXRXaWR0aCA9IHBhcnNlSW50KHRhcmdldC5zdHlsZS53aWR0aCwgMTApO1xyXG4gICAgICAgIGRyYWdJbml0SGVpZ2h0ID0gcGFyc2VJbnQodGFyZ2V0LnN0eWxlLmhlaWdodCwgMTApO1xyXG4gICAgICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gb25SZXNpemVyTW91c2VNb3ZlO1xyXG4gICAgICAgIGRvY3VtZW50Lm9udG91Y2htb3ZlID0gb25SZXNpemVyVG91Y2hNb3ZlO1xyXG4gICAgICAgIGRvY3VtZW50Lm9ubW91c2V1cCA9IG9uUmVzaXplckNsb3NlO1xyXG4gICAgICAgIGRvY3VtZW50Lm9udG91Y2hlbmQgPSBvblJlc2l6ZXJDbG9zZTtcclxuICAgICAgICBxaW5fc2tpbl8xLlFpblNraW4uaGlkZUFsbElGcmFtZXMoKTtcclxuICAgICAgICBpZiAoZHJhZ0NhbGxzICYmIGRyYWdDYWxscy5vblN0YXJ0KSB7XHJcbiAgICAgICAgICAgIGRyYWdDYWxscy5vblN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdG9wRXZlbnQoZXYpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gb25SZXNpemVyVG91Y2hJbml0KGV2KSB7XHJcbiAgICAgICAgaWYgKGRvY3VtZW50Lm9ubW91c2Vtb3ZlIHx8IGRvY3VtZW50Lm9udG91Y2htb3ZlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRyYWdDYWxscyAmJiBkcmFnQ2FsbHMub25Eb3VibGUgJiYgaXNFdmVudFRvdWNoRG91YmxlKHRydWUsIGV2KSkge1xyXG4gICAgICAgICAgICBkcmFnQ2FsbHMub25Eb3VibGUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZHJhZ0NhbGxzICYmIGRyYWdDYWxscy5vbkxvbmcgJiYgaXNFdmVudFRvdWNoTG9uZyh0cnVlLCBldikpIHtcclxuICAgICAgICAgICAgZHJhZ0NhbGxzLm9uTG9uZygpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHBvaW50ZXIgPSBtYWtlRXZlbnRUb3VjaCh0cnVlLCBldik7XHJcbiAgICAgICAgZHJhZ0luaXRFdmVudFggPSBwb2ludGVyLnBvc1g7XHJcbiAgICAgICAgZHJhZ0luaXRFdmVudFkgPSBwb2ludGVyLnBvc1k7XHJcbiAgICAgICAgZHJhZ0luaXRXaWR0aCA9IHBhcnNlSW50KHRhcmdldC5zdHlsZS53aWR0aCwgMTApO1xyXG4gICAgICAgIGRyYWdJbml0SGVpZ2h0ID0gcGFyc2VJbnQodGFyZ2V0LnN0eWxlLmhlaWdodCwgMTApO1xyXG4gICAgICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gb25SZXNpemVyTW91c2VNb3ZlO1xyXG4gICAgICAgIGRvY3VtZW50Lm9udG91Y2htb3ZlID0gb25SZXNpemVyVG91Y2hNb3ZlO1xyXG4gICAgICAgIGRvY3VtZW50Lm9ubW91c2V1cCA9IG9uUmVzaXplckNsb3NlO1xyXG4gICAgICAgIGRvY3VtZW50Lm9udG91Y2hlbmQgPSBvblJlc2l6ZXJDbG9zZTtcclxuICAgICAgICBxaW5fc2tpbl8xLlFpblNraW4uaGlkZUFsbElGcmFtZXMoKTtcclxuICAgICAgICBpZiAoZHJhZ0NhbGxzICYmIGRyYWdDYWxscy5vblN0YXJ0KSB7XHJcbiAgICAgICAgICAgIGRyYWdDYWxscy5vblN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdG9wRXZlbnQoZXYpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gb25SZXNpemVyTW91c2VNb3ZlKGV2KSB7XHJcbiAgICAgICAgY29uc3QgcG9pbnRlciA9IG1ha2VFdmVudE1vdXNlUG9pbnQoZmFsc2UsIGV2KTtcclxuICAgICAgICB2YXIgZnJhbWVEcmFnRGlmWCA9IHBvaW50ZXIucG9zWCAtIGRyYWdJbml0RXZlbnRYO1xyXG4gICAgICAgIHZhciBmcmFtZURyYWdEaWZZID0gcG9pbnRlci5wb3NZIC0gZHJhZ0luaXRFdmVudFk7XHJcbiAgICAgICAgdmFyIGZyYW1lRHJhZ0ZpbmFsV2lkdGggPSBkcmFnSW5pdFdpZHRoICsgZnJhbWVEcmFnRGlmWDtcclxuICAgICAgICB2YXIgZnJhbWVEcmFnRmluYWxIZWlnaHQgPSBkcmFnSW5pdEhlaWdodCArIGZyYW1lRHJhZ0RpZlk7XHJcbiAgICAgICAgdGFyZ2V0LnN0eWxlLndpZHRoID0gKGZyYW1lRHJhZ0ZpbmFsV2lkdGggPiAwID8gZnJhbWVEcmFnRmluYWxXaWR0aCA6IDApICsgXCJweFwiO1xyXG4gICAgICAgIHRhcmdldC5zdHlsZS5oZWlnaHQgPSAoZnJhbWVEcmFnRmluYWxIZWlnaHQgPiAwID8gZnJhbWVEcmFnRmluYWxIZWlnaHQgOiAwKSArIFwicHhcIjtcclxuICAgICAgICBpZiAoZHJhZ0NhbGxzICYmIGRyYWdDYWxscy5vbk1vdmUpIHtcclxuICAgICAgICAgICAgZHJhZ0NhbGxzLm9uTW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG9uUmVzaXplclRvdWNoTW92ZShldikge1xyXG4gICAgICAgIGNvbnN0IHBvaW50ZXIgPSBtYWtlRXZlbnRUb3VjaChmYWxzZSwgZXYpO1xyXG4gICAgICAgIHZhciBmcmFtZURyYWdEaWZYID0gcG9pbnRlci5wb3NYIC0gZHJhZ0luaXRFdmVudFg7XHJcbiAgICAgICAgdmFyIGZyYW1lRHJhZ0RpZlkgPSBwb2ludGVyLnBvc1kgLSBkcmFnSW5pdEV2ZW50WTtcclxuICAgICAgICB2YXIgZnJhbWVEcmFnRmluYWxXaWR0aCA9IGRyYWdJbml0V2lkdGggKyBmcmFtZURyYWdEaWZYO1xyXG4gICAgICAgIHZhciBmcmFtZURyYWdGaW5hbEhlaWdodCA9IGRyYWdJbml0SGVpZ2h0ICsgZnJhbWVEcmFnRGlmWTtcclxuICAgICAgICB0YXJnZXQuc3R5bGUud2lkdGggPSAoZnJhbWVEcmFnRmluYWxXaWR0aCA+IDAgPyBmcmFtZURyYWdGaW5hbFdpZHRoIDogMCkgKyBcInB4XCI7XHJcbiAgICAgICAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IChmcmFtZURyYWdGaW5hbEhlaWdodCA+IDAgPyBmcmFtZURyYWdGaW5hbEhlaWdodCA6IDApICsgXCJweFwiO1xyXG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uTW92ZSkge1xyXG4gICAgICAgICAgICBkcmFnQ2FsbHMub25Nb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdG9wRXZlbnQoZXYpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gb25SZXNpemVyQ2xvc2UoZXYpIHtcclxuICAgICAgICBkb2N1bWVudC5vbnRvdWNobW92ZSA9IG51bGw7XHJcbiAgICAgICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSBudWxsO1xyXG4gICAgICAgIGRvY3VtZW50Lm9udG91Y2hlbmQgPSBudWxsO1xyXG4gICAgICAgIGRvY3VtZW50Lm9ubW91c2V1cCA9IG51bGw7XHJcbiAgICAgICAgcWluX3NraW5fMS5RaW5Ta2luLnNob3dBbGxJRnJhbWVzKCk7XHJcbiAgICAgICAgcWluX3NraW5fMS5RaW5Ta2luLmNsZWFyU2VsZWN0aW9uKCk7XHJcbiAgICAgICAgaWYgKGRyYWdDYWxscyAmJiBkcmFnQ2FsbHMub25FbmQpIHtcclxuICAgICAgICAgICAgZHJhZ0NhbGxzLm9uRW5kKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdG9wRXZlbnQoZXYpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGFkZFNjcm9sbGVyKHRhcmdldCwgZHJhZ0NhbGxzKSB7XHJcbiAgICB2YXIgZHJhZ0luaXRYID0gMDtcclxuICAgIHZhciBkcmFnSW5pdFkgPSAwO1xyXG4gICAgdmFyIGRyYWdTY3JvbGxYID0gMDtcclxuICAgIHZhciBkcmFnU2Nyb2xsWSA9IDA7XHJcbiAgICB0YXJnZXQub25kcmFnc3RhcnQgPSBzdG9wRXZlbnQ7XHJcbiAgICB0YXJnZXQub25tb3VzZWRvd24gPSBvblNjcm9sbGVyTW91c2VJbml0O1xyXG4gICAgdGFyZ2V0Lm9udG91Y2hzdGFydCA9IG9uU2Nyb2xsZXJUb3VjaEluaXQ7XHJcbiAgICBmdW5jdGlvbiBvblNjcm9sbGVyTW91c2VJbml0KGV2KSB7XHJcbiAgICAgICAgaWYgKGRvY3VtZW50Lm9ubW91c2Vtb3ZlIHx8IGRvY3VtZW50Lm9udG91Y2htb3ZlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRyYWdDYWxscyAmJiBkcmFnQ2FsbHMub25Eb3VibGUgJiYgaXNFdmVudE1vdXNlRG91YmxlKHRydWUsIGV2KSkge1xyXG4gICAgICAgICAgICBkcmFnQ2FsbHMub25Eb3VibGUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZHJhZ0NhbGxzICYmIGRyYWdDYWxscy5vbkxvbmcgJiYgaXNFdmVudE1vdXNlTG9uZyh0cnVlLCBldikpIHtcclxuICAgICAgICAgICAgZHJhZ0NhbGxzLm9uTG9uZygpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHBvaW50ZXIgPSBtYWtlRXZlbnRNb3VzZVBvaW50KHRydWUsIGV2KTtcclxuICAgICAgICBkcmFnSW5pdFggPSBwb2ludGVyLnBvc1g7XHJcbiAgICAgICAgZHJhZ0luaXRZID0gcG9pbnRlci5wb3NZO1xyXG4gICAgICAgIGRyYWdTY3JvbGxYID0gdGFyZ2V0LnNjcm9sbExlZnQ7XHJcbiAgICAgICAgZHJhZ1Njcm9sbFkgPSB0YXJnZXQuc2Nyb2xsVG9wO1xyXG4gICAgICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gb25TY3JvbGxlck1vdXNlTW92ZTtcclxuICAgICAgICBkb2N1bWVudC5vbnRvdWNobW92ZSA9IG9uU2Nyb2xsZXJUb3VjaE1vdmU7XHJcbiAgICAgICAgZG9jdW1lbnQub250b3VjaGVuZCA9IG9uU2Nyb2xsZXJDbG9zZTtcclxuICAgICAgICBkb2N1bWVudC5vbm1vdXNldXAgPSBvblNjcm9sbGVyQ2xvc2U7XHJcbiAgICAgICAgcWluX3NraW5fMS5RaW5Ta2luLmhpZGVBbGxJRnJhbWVzKCk7XHJcbiAgICAgICAgaWYgKGRyYWdDYWxscyAmJiBkcmFnQ2FsbHMub25TdGFydCkge1xyXG4gICAgICAgICAgICBkcmFnQ2FsbHMub25TdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG9uU2Nyb2xsZXJUb3VjaEluaXQoZXYpIHtcclxuICAgICAgICBpZiAoZG9jdW1lbnQub25tb3VzZW1vdmUgfHwgZG9jdW1lbnQub250b3VjaG1vdmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZHJhZ0NhbGxzICYmIGRyYWdDYWxscy5vbkRvdWJsZSAmJiBpc0V2ZW50VG91Y2hEb3VibGUodHJ1ZSwgZXYpKSB7XHJcbiAgICAgICAgICAgIGRyYWdDYWxscy5vbkRvdWJsZSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uTG9uZyAmJiBpc0V2ZW50VG91Y2hMb25nKHRydWUsIGV2KSkge1xyXG4gICAgICAgICAgICBkcmFnQ2FsbHMub25Mb25nKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcG9pbnRlciA9IG1ha2VFdmVudFRvdWNoKHRydWUsIGV2KTtcclxuICAgICAgICBkcmFnSW5pdFggPSBwb2ludGVyLnBvc1g7XHJcbiAgICAgICAgZHJhZ0luaXRZID0gcG9pbnRlci5wb3NZO1xyXG4gICAgICAgIGRyYWdTY3JvbGxYID0gdGFyZ2V0LnNjcm9sbExlZnQ7XHJcbiAgICAgICAgZHJhZ1Njcm9sbFkgPSB0YXJnZXQuc2Nyb2xsVG9wO1xyXG4gICAgICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gb25TY3JvbGxlck1vdXNlTW92ZTtcclxuICAgICAgICBkb2N1bWVudC5vbnRvdWNobW92ZSA9IG9uU2Nyb2xsZXJUb3VjaE1vdmU7XHJcbiAgICAgICAgZG9jdW1lbnQub25tb3VzZXVwID0gb25TY3JvbGxlckNsb3NlO1xyXG4gICAgICAgIGRvY3VtZW50Lm9udG91Y2hlbmQgPSBvblNjcm9sbGVyQ2xvc2U7XHJcbiAgICAgICAgcWluX3NraW5fMS5RaW5Ta2luLmhpZGVBbGxJRnJhbWVzKCk7XHJcbiAgICAgICAgaWYgKGRyYWdDYWxscyAmJiBkcmFnQ2FsbHMub25TdGFydCkge1xyXG4gICAgICAgICAgICBkcmFnQ2FsbHMub25TdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG9uU2Nyb2xsZXJNb3VzZU1vdmUoZXYpIHtcclxuICAgICAgICBjb25zdCBwb2ludGVyID0gbWFrZUV2ZW50TW91c2VQb2ludChmYWxzZSwgZXYpO1xyXG4gICAgICAgIHZhciBkcmFnRGlmWCA9IHBvaW50ZXIucG9zWCAtIGRyYWdJbml0WDtcclxuICAgICAgICB2YXIgZHJhZ0RpZlkgPSBwb2ludGVyLnBvc1kgLSBkcmFnSW5pdFk7XHJcbiAgICAgICAgdmFyIGRyYWdOZXdYID0gZHJhZ1Njcm9sbFggLSBkcmFnRGlmWDtcclxuICAgICAgICB2YXIgZHJhZ05ld1kgPSBkcmFnU2Nyb2xsWSAtIGRyYWdEaWZZO1xyXG4gICAgICAgIHRhcmdldC5zY3JvbGxUbyhkcmFnTmV3WCwgZHJhZ05ld1kpO1xyXG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uTW92ZSkge1xyXG4gICAgICAgICAgICBkcmFnQ2FsbHMub25Nb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdG9wRXZlbnQoZXYpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gb25TY3JvbGxlclRvdWNoTW92ZShldikge1xyXG4gICAgICAgIGNvbnN0IHBvaW50ZXIgPSBtYWtlRXZlbnRUb3VjaChmYWxzZSwgZXYpO1xyXG4gICAgICAgIHZhciBkcmFnRGlmWCA9IHBvaW50ZXIucG9zWCAtIGRyYWdJbml0WDtcclxuICAgICAgICB2YXIgZHJhZ0RpZlkgPSBwb2ludGVyLnBvc1kgLSBkcmFnSW5pdFk7XHJcbiAgICAgICAgdmFyIGRyYWdOZXdYID0gZHJhZ1Njcm9sbFggLSBkcmFnRGlmWDtcclxuICAgICAgICB2YXIgZHJhZ05ld1kgPSBkcmFnU2Nyb2xsWSAtIGRyYWdEaWZZO1xyXG4gICAgICAgIHRhcmdldC5zY3JvbGxUbyhkcmFnTmV3WCwgZHJhZ05ld1kpO1xyXG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uTW92ZSkge1xyXG4gICAgICAgICAgICBkcmFnQ2FsbHMub25Nb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdG9wRXZlbnQoZXYpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gb25TY3JvbGxlckNsb3NlKGV2KSB7XHJcbiAgICAgICAgZG9jdW1lbnQub250b3VjaG1vdmUgPSBudWxsO1xyXG4gICAgICAgIGRvY3VtZW50Lm9udG91Y2hlbmQgPSBudWxsO1xyXG4gICAgICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gbnVsbDtcclxuICAgICAgICBkb2N1bWVudC5vbm1vdXNldXAgPSBudWxsO1xyXG4gICAgICAgIHFpbl9za2luXzEuUWluU2tpbi5zaG93QWxsSUZyYW1lcygpO1xyXG4gICAgICAgIHFpbl9za2luXzEuUWluU2tpbi5jbGVhclNlbGVjdGlvbigpO1xyXG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uRW5kKSB7XHJcbiAgICAgICAgICAgIGRyYWdDYWxscy5vbkVuZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlFpbkFybSA9IHtcclxuICAgIHN0b3BFdmVudCxcclxuICAgIG1ha2VFdmVudE1vdXNlUG9pbnQsXHJcbiAgICBtYWtlRXZlbnRUb3VjaCxcclxuICAgIGlzRXZlbnRNb3VzZURvdWJsZSxcclxuICAgIGlzRXZlbnRUb3VjaERvdWJsZSxcclxuICAgIGlzRXZlbnRNb3VzZUxvbmcsXHJcbiAgICBpc0V2ZW50VG91Y2hMb25nLFxyXG4gICAgaXNLZXlJbkxpc3QsXHJcbiAgICBpc0tleUVudGVyLFxyXG4gICAgaXNLZXlTcGFjZSxcclxuICAgIGlzRmlyc3RCdXR0b24sXHJcbiAgICBpc01pZGRsZUJ1dHRvbixcclxuICAgIGlzU2Vjb25kQnV0dG9uLFxyXG4gICAgaXNPbmVGaW5nZXIsXHJcbiAgICBpc1R3b0ZpbmdlcnMsXHJcbiAgICBpc1RocmVlRmluZ2VycyxcclxuICAgIGlzRm91ckZpbmdlcnMsXHJcbiAgICBpc01haW5Nb3VzZSxcclxuICAgIGlzTWFpblRvdWNoLFxyXG4gICAgaXNNaWRpTW91c2UsXHJcbiAgICBpc01pZGlUb3VjaCxcclxuICAgIGlzTWVudU1vdXNlLFxyXG4gICAgaXNNZW51VG91Y2gsXHJcbiAgICBhZGRBY3Rpb24sXHJcbiAgICBhZGRBY3Rpb25NYWluLFxyXG4gICAgYWRkQWN0aW9uTWFpbktleSxcclxuICAgIGFkZEFjdGlvbk1haW5Nb3VzZSxcclxuICAgIGFkZEFjdGlvbk1haW5Ub3VjaCxcclxuICAgIGFkZEFjdGlvbk1haW5Qb2ludCxcclxuICAgIGFkZEFjdGlvbk1pZGksXHJcbiAgICBhZGRBY3Rpb25NaWRpS2V5LFxyXG4gICAgYWRkQWN0aW9uTWlkaU1vdXNlLFxyXG4gICAgYWRkQWN0aW9uTWlkaVRvdWNoLFxyXG4gICAgYWRkQWN0aW9uTWlkaVBvaW50LFxyXG4gICAgYWRkQWN0aW9uTWVudSxcclxuICAgIGFkZEFjdGlvbk1lbnVLZXksXHJcbiAgICBhZGRBY3Rpb25NZW51TW91c2UsXHJcbiAgICBhZGRBY3Rpb25NZW51VG91Y2gsXHJcbiAgICBhZGRBY3Rpb25NZW51UG9pbnQsXHJcbiAgICBhZGRBY3Rpb25zLFxyXG4gICAgYWRkQWN0aW9uc01haW4sXHJcbiAgICBhZGRBY3Rpb25zTWFpbktleSxcclxuICAgIGFkZEFjdGlvbnNNYWluUG9pbnQsXHJcbiAgICBhZGRNb3ZlcixcclxuICAgIGFkZFJlc2l6ZXIsXHJcbiAgICBhZGRTY3JvbGxlcixcclxufTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWFybS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlFpbkJvZHkgPSBleHBvcnRzLlFpbk5hdHVyZSA9IHZvaWQgMDtcclxudmFyIFFpbk5hdHVyZTtcclxuKGZ1bmN0aW9uIChRaW5OYXR1cmUpIHtcclxuICAgIFFpbk5hdHVyZVtcIkJJVFwiXSA9IFwiQklUXCI7XHJcbiAgICBRaW5OYXR1cmVbXCJCT09MXCJdID0gXCJCT09MXCI7XHJcbiAgICBRaW5OYXR1cmVbXCJCWVRFXCJdID0gXCJCWVRFXCI7XHJcbiAgICBRaW5OYXR1cmVbXCJUSU5ZXCJdID0gXCJUSU5ZXCI7XHJcbiAgICBRaW5OYXR1cmVbXCJTTUFMTFwiXSA9IFwiU01BTExcIjtcclxuICAgIFFpbk5hdHVyZVtcIklOVFwiXSA9IFwiSU5UXCI7XHJcbiAgICBRaW5OYXR1cmVbXCJMT05HXCJdID0gXCJMT05HXCI7XHJcbiAgICBRaW5OYXR1cmVbXCJTRVJJQUxcIl0gPSBcIlNFUklBTFwiO1xyXG4gICAgUWluTmF0dXJlW1wiQklHX1NFUklBTFwiXSA9IFwiQklHX1NFUklBTFwiO1xyXG4gICAgUWluTmF0dXJlW1wiRkxPQVRcIl0gPSBcIkZMT0FUXCI7XHJcbiAgICBRaW5OYXR1cmVbXCJSRUFMXCJdID0gXCJSRUFMXCI7XHJcbiAgICBRaW5OYXR1cmVbXCJET1VCTEVcIl0gPSBcIkRPVUJMRVwiO1xyXG4gICAgUWluTmF0dXJlW1wiTlVNRVJJQ1wiXSA9IFwiTlVNRVJJQ1wiO1xyXG4gICAgUWluTmF0dXJlW1wiQklHX05VTUVSSUNcIl0gPSBcIkJJR19OVU1FUklDXCI7XHJcbiAgICBRaW5OYXR1cmVbXCJDSEFSXCJdID0gXCJDSEFSXCI7XHJcbiAgICBRaW5OYXR1cmVbXCJDSEFSU1wiXSA9IFwiQ0hBUlNcIjtcclxuICAgIFFpbk5hdHVyZVtcIkRBVEVcIl0gPSBcIkRBVEVcIjtcclxuICAgIFFpbk5hdHVyZVtcIlRJTUVcIl0gPSBcIlRJTUVcIjtcclxuICAgIFFpbk5hdHVyZVtcIkRBVEVfVElNRVwiXSA9IFwiREFURV9USU1FXCI7XHJcbiAgICBRaW5OYXR1cmVbXCJUSU1FU1RBTVBcIl0gPSBcIlRJTUVTVEFNUFwiO1xyXG4gICAgUWluTmF0dXJlW1wiQllURVNcIl0gPSBcIkJZVEVTXCI7XHJcbiAgICBRaW5OYXR1cmVbXCJCTE9CXCJdID0gXCJCTE9CXCI7XHJcbiAgICBRaW5OYXR1cmVbXCJURVhUXCJdID0gXCJURVhUXCI7XHJcbn0pKFFpbk5hdHVyZSA9IGV4cG9ydHMuUWluTmF0dXJlIHx8IChleHBvcnRzLlFpbk5hdHVyZSA9IHt9KSk7XHJcbmZ1bmN0aW9uIGdldFRleHRMaW5lcyhmcm9tVGV4dCkge1xyXG4gICAgcmV0dXJuIGZyb21UZXh0Lm1hdGNoKC9bXlxcclxcbl0rL2cpO1xyXG59XHJcbmZ1bmN0aW9uIGZpbGxUb1N0cmluZyh2YWx1ZSwgdGlsU2l6ZSwgd2l0aFN0ciA9IFwiIFwiLCBhdEVuZCA9IHRydWUpIHtcclxuICAgIGxldCByZXN1bHQgPSB2YWx1ZS50b1N0cmluZygpO1xyXG4gICAgd2hpbGUgKHJlc3VsdC5sZW5ndGggPCB0aWxTaXplKSB7XHJcbiAgICAgICAgaWYgKGF0RW5kKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCArPSB3aXRoU3RyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gd2l0aFN0ciArIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbmZ1bmN0aW9uIG1ha2VRaW5VSUQoKSB7XHJcbiAgICByZXR1cm4gKFwicWluX3VpZF9cIiArXHJcbiAgICAgICAgRGF0ZS5ub3coKSArXHJcbiAgICAgICAgXCJfXCIgK1xyXG4gICAgICAgIGZpbGxUb1N0cmluZyhNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMCksIDUsIFwiMFwiLCBmYWxzZSkpO1xyXG59XHJcbmZ1bmN0aW9uIGdldENTVlJvd3MoZnJvbVRleHQsIG5hbWVzKSB7XHJcbiAgICB2YXIgbGluZXMgPSBnZXRUZXh0TGluZXMoZnJvbVRleHQpO1xyXG4gICAgdmFyIHJlc3VsdCA9IFtdO1xyXG4gICAgZm9yIChsZXQgbGluZSBvZiBsaW5lcykge1xyXG4gICAgICAgIGxldCByb3cgPSAhbmFtZXMgPyBbXSA6IHt9O1xyXG4gICAgICAgIGxldCBpbnNpZGVfcXVvdGVzID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGNvbHVtbl92YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgbGV0IGNvbHVtbl9pbmRleCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgY2hhcl9pbmRleCA9IDA7IGNoYXJfaW5kZXggPCBsaW5lLmxlbmd0aDsgY2hhcl9pbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBhY3R1YWwgPSBsaW5lLmNoYXJBdChjaGFyX2luZGV4KTtcclxuICAgICAgICAgICAgaWYgKGluc2lkZV9xdW90ZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChhY3R1YWwgPT0gJ1wiJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXh0ID0gY2hhcl9pbmRleCA8IGxpbmUubGVuZ3RoIC0gMSA/IGxpbmUuY2hhckF0KGNoYXJfaW5kZXggKyAxKSA6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5leHQgPT0gJ1wiJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5fdmFsdWUgKz0gYWN0dWFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFyX2luZGV4Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnNpZGVfcXVvdGVzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uX3ZhbHVlICs9IGFjdHVhbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChhY3R1YWwgPT0gJ1wiJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGluc2lkZV9xdW90ZXMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoYWN0dWFsID09IFwiLFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uX3ZhbHVlID0gdW5tYXNrU3BlY2lhbENoYXJzKGNvbHVtbl92YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFuYW1lcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3cucHVzaChjb2x1bW5fdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbHVtbl9uYW1lID0gXCJjb2xfXCIgKyBjb2x1bW5faW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2x1bW5faW5kZXggPCBuYW1lcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbl9uYW1lID0gbmFtZXNbY29sdW1uX2luZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dbY29sdW1uX25hbWVdID0gY29sdW1uX3ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5fdmFsdWUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbl9pbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uX3ZhbHVlICs9IGFjdHVhbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb2x1bW5fdmFsdWUgPSB1bm1hc2tTcGVjaWFsQ2hhcnMoY29sdW1uX3ZhbHVlKTtcclxuICAgICAgICBpZiAoIW5hbWVzKSB7XHJcbiAgICAgICAgICAgIHJvdy5wdXNoKGNvbHVtbl92YWx1ZSk7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHJvdyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgY29sdW1uX25hbWUgPSBcImNvbF9cIiArIGNvbHVtbl9pbmRleDtcclxuICAgICAgICAgICAgaWYgKGNvbHVtbl9pbmRleCA8IG5hbWVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgY29sdW1uX25hbWUgPSBuYW1lc1tjb2x1bW5faW5kZXhdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJvd1tjb2x1bW5fbmFtZV0gPSBjb2x1bW5fdmFsdWU7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHJvdyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5mdW5jdGlvbiBtYXNrU3BlY2lhbENoYXJzKGZyb21UZXh0KSB7XHJcbiAgICByZXR1cm4gZnJvbVRleHRcclxuICAgICAgICAucmVwbGFjZShcIlxcXFxcIiwgXCJcXFxcXFxcXFwiKVxyXG4gICAgICAgIC5yZXBsYWNlKFwiXFxyXCIsIFwiXFxcXHJcIilcclxuICAgICAgICAucmVwbGFjZShcIlxcblwiLCBcIlxcXFxuXCIpXHJcbiAgICAgICAgLnJlcGxhY2UoXCJcXHRcIiwgXCJcXFxcdFwiKTtcclxufVxyXG5mdW5jdGlvbiB1bm1hc2tTcGVjaWFsQ2hhcnMoZnJvbVRleHQpIHtcclxuICAgIHJldHVybiBmcm9tVGV4dFxyXG4gICAgICAgIC5yZXBsYWNlKFwiXFxcXFxcXFxcIiwgXCJcXFxcXCIpXHJcbiAgICAgICAgLnJlcGxhY2UoXCJcXFxcclwiLCBcIlxcclwiKVxyXG4gICAgICAgIC5yZXBsYWNlKFwiXFxcXG5cIiwgXCJcXG5cIilcclxuICAgICAgICAucmVwbGFjZShcIlxcXFx0XCIsIFwiXFx0XCIpO1xyXG59XHJcbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVycyhzb3VyY2UpIHtcclxuICAgIGxldCByZXN1bHQgPSBbXTtcclxuICAgIGxldCBvcGVuID0gZmFsc2U7XHJcbiAgICBsZXQgYWN0dWFsID0gXCJcIjtcclxuICAgIGZvciAoY29uc3QgbGV0dGVyIG9mIEFycmF5LmZyb20oc291cmNlKSkge1xyXG4gICAgICAgIGlmIChvcGVuKSB7XHJcbiAgICAgICAgICAgIGlmIChsZXR0ZXIgPT0gJ1wiJykge1xyXG4gICAgICAgICAgICAgICAgb3BlbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFjdHVhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGFjdHVhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0dWFsID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFjdHVhbCArPSBsZXR0ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChsZXR0ZXIgPT0gJ1wiJykge1xyXG4gICAgICAgICAgICAgICAgb3BlbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWN0dWFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goYWN0dWFsKTtcclxuICAgICAgICAgICAgICAgICAgICBhY3R1YWwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGxldHRlciA9PSBcIiBcIikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFjdHVhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGFjdHVhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0dWFsID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFjdHVhbCArPSBsZXR0ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbmV4cG9ydHMuUWluQm9keSA9IHtcclxuICAgIGdldFRleHRMaW5lcyxcclxuICAgIGZpbGxUb1N0cmluZyxcclxuICAgIG1ha2VRaW5VSUQsXHJcbiAgICBnZXRDU1ZSb3dzLFxyXG4gICAgbWFza1NwZWNpYWxDaGFycyxcclxuICAgIHVubWFza1NwZWNpYWxDaGFycyxcclxuICAgIHBhcnNlUGFyYW1ldGVycyxcclxufTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWJvZHkuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5Gb290ID0gZXhwb3J0cy5RaW5GaWxlc0Rlc2NyaXB0b3IgPSBleHBvcnRzLlFpbkZpbGVzT3BlcmF0aW9uID0gZXhwb3J0cy5RaW5GaWxlc05hdHVyZSA9IHZvaWQgMDtcclxudmFyIFFpbkZpbGVzTmF0dXJlO1xyXG4oZnVuY3Rpb24gKFFpbkZpbGVzTmF0dXJlKSB7XHJcbiAgICBRaW5GaWxlc05hdHVyZVtcIkJPVEhcIl0gPSBcImJvdGhcIjtcclxuICAgIFFpbkZpbGVzTmF0dXJlW1wiRElSRUNUT1JJRVNcIl0gPSBcImRpcmVjdG9yaWVzXCI7XHJcbiAgICBRaW5GaWxlc05hdHVyZVtcIkZJTEVTXCJdID0gXCJmaWxlc1wiO1xyXG59KShRaW5GaWxlc05hdHVyZSA9IGV4cG9ydHMuUWluRmlsZXNOYXR1cmUgfHwgKGV4cG9ydHMuUWluRmlsZXNOYXR1cmUgPSB7fSkpO1xyXG52YXIgUWluRmlsZXNPcGVyYXRpb247XHJcbihmdW5jdGlvbiAoUWluRmlsZXNPcGVyYXRpb24pIHtcclxuICAgIFFpbkZpbGVzT3BlcmF0aW9uW1wiT1BFTlwiXSA9IFwib3BlblwiO1xyXG4gICAgUWluRmlsZXNPcGVyYXRpb25bXCJTQVZFXCJdID0gXCJzYXZlXCI7XHJcbn0pKFFpbkZpbGVzT3BlcmF0aW9uID0gZXhwb3J0cy5RaW5GaWxlc09wZXJhdGlvbiB8fCAoZXhwb3J0cy5RaW5GaWxlc09wZXJhdGlvbiA9IHt9KSk7XHJcbmNsYXNzIFFpbkZpbGVzRGVzY3JpcHRvciB7XHJcbn1cclxuZXhwb3J0cy5RaW5GaWxlc0Rlc2NyaXB0b3IgPSBRaW5GaWxlc0Rlc2NyaXB0b3I7XHJcbmZ1bmN0aW9uIGdldExvY2F0aW9uKCkge1xyXG4gICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG59XHJcbmZ1bmN0aW9uIGlzTG9jYWxIb3N0KCkge1xyXG4gICAgdmFyIGxvY2F0aW9uID0gZ2V0TG9jYXRpb24oKTtcclxuICAgIHZhciBzdGFydCA9IGxvY2F0aW9uLmluZGV4T2YoXCI6Ly9cIik7XHJcbiAgICBpZiAoc3RhcnQgPT0gLTEpIHtcclxuICAgICAgICBzdGFydCA9IDA7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBzdGFydCArPSAzO1xyXG4gICAgfVxyXG4gICAgbG9jYXRpb24gPSBsb2NhdGlvbi5zdWJzdHJpbmcoc3RhcnQpO1xyXG4gICAgcmV0dXJuIGxvY2F0aW9uLmluZGV4T2YoXCJsb2NhbGhvc3RcIikgPT09IDAgfHwgbG9jYXRpb24uaW5kZXhPZihcIjEyNy4wLjAuMVwiKSA9PT0gMDtcclxufVxyXG5mdW5jdGlvbiBnZXRTZXBhcmF0b3Iob2ZQYXRoKSB7XHJcbiAgICBsZXQgcmVzdWx0ID0gXCIvXCI7XHJcbiAgICBpZiAob2ZQYXRoICYmIG9mUGF0aC5pbmRleE9mKFwiXFxcXFwiKSA+IC0xKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gXCJcXFxcXCI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbmZ1bmN0aW9uIGdldFBhdGhKb2luKHBhdGhBLCBwYXRoQikge1xyXG4gICAgaWYgKHBhdGhBID09IG51bGwgfHwgcGF0aEEgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcGF0aEEgPSBcIlwiO1xyXG4gICAgfVxyXG4gICAgaWYgKHBhdGhCID09IG51bGwgfHwgcGF0aEIgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcGF0aEIgPSBcIlwiO1xyXG4gICAgfVxyXG4gICAgaWYgKHBhdGhBLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHBhdGhCO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocGF0aEIubGVuZ3RoID09IDApIHtcclxuICAgICAgICByZXR1cm4gcGF0aEE7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBsZXQgdW5pb24gPSBcIi9cIjtcclxuICAgICAgICBpZiAocGF0aEEuaW5kZXhPZihcIlxcXFxcIikgPiAtMSB8fCBwYXRoQi5pbmRleE9mKFwiXFxcXFwiKSA+IC0xKSB7XHJcbiAgICAgICAgICAgIHVuaW9uID0gXCJcXFxcXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBwYXRoQUVuZCA9IHBhdGhBLnN1YnN0cmluZyhwYXRoQS5sZW5ndGggLSAxLCBwYXRoQS5sZW5ndGgpO1xyXG4gICAgICAgIGxldCBwYXRoQlN0YXJ0ID0gcGF0aEIuc3Vic3RyaW5nKDAsIDEpO1xyXG4gICAgICAgIGlmIChwYXRoQUVuZCA9PSB1bmlvbiB8fCBwYXRoQlN0YXJ0ID09IHVuaW9uKSB7XHJcbiAgICAgICAgICAgIHVuaW9uID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBhdGhBICsgdW5pb24gKyBwYXRoQjtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBnZXRQYXJlbnQocGF0aCkge1xyXG4gICAgaWYgKHBhdGgpIHtcclxuICAgICAgICBsZXQgc2VwYXJhdG9yID0gZ2V0U2VwYXJhdG9yKHBhdGgpO1xyXG4gICAgICAgIGxldCBsYXN0ID0gcGF0aC5sYXN0SW5kZXhPZihzZXBhcmF0b3IpO1xyXG4gICAgICAgIGlmIChsYXN0ID4gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBhdGguc3Vic3RyaW5nKDAsIGxhc3QpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBcIlwiO1xyXG59XHJcbmZ1bmN0aW9uIGdldFN0ZW0ocGF0aCkge1xyXG4gICAgaWYgKHBhdGgpIHtcclxuICAgICAgICBsZXQgc2VwYXJhdG9yID0gZ2V0U2VwYXJhdG9yKHBhdGgpO1xyXG4gICAgICAgIGxldCBsYXN0ID0gcGF0aC5sYXN0SW5kZXhPZihzZXBhcmF0b3IpO1xyXG4gICAgICAgIGlmIChsYXN0ID4gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBhdGguc3Vic3RyaW5nKGxhc3QgKyAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gXCJcIjtcclxufVxyXG5mdW5jdGlvbiBnZXRGaWxlRXh0ZW5zaW9uKG5hbWUpIHtcclxuICAgIGxldCBwb3NpdGlvbiA9IG5hbWUubGFzdEluZGV4T2YoXCIuXCIpO1xyXG4gICAgaWYgKHBvc2l0aW9uID4gLTEpIHtcclxuICAgICAgICByZXR1cm4gbmFtZS5zdWJzdHJpbmcocG9zaXRpb24gKyAxKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG59XHJcbmNvbnN0IGFwcHNFeHRlbnNpb25zID0gW1xyXG4gICAgXCJodG1cIiwgXCJodG1sXCIsIFwiY3NzXCIsIFwianNcIiwgXCJqc3hcIiwgXCJ0c1wiLCBcInRzeFwiLCBcInBodG1sXCJcclxuXTtcclxuZnVuY3Rpb24gaXNGaWxlQXBwKGV4dGVuc2lvbikge1xyXG4gICAgcmV0dXJuIGFwcHNFeHRlbnNpb25zLmluZGV4T2YoZXh0ZW5zaW9uKSA+IC0xO1xyXG59XHJcbmNvbnN0IGNtZHNFeHRlbnNpb25zID0gW1xyXG4gICAgXCJoXCIsIFwiY1wiLCBcImhwcFwiLCBcImNwcFwiLCBcInJzXCIsIFwiamxcIixcclxuICAgIFwiY3NcIiwgXCJjc3Byb2pcIiwgXCJmc1wiLCBcIm1sXCIsIFwiZnNpXCIsIFwibWxpXCIsIFwiZnN4XCIsIFwiZnNzY3JpcHRcIixcclxuICAgIFwiamF2YVwiLCBcImd5XCIsIFwiZ3Z5XCIsIFwiZ3Jvb3Z5XCIsIFwic2NcIiwgXCJzY2FsYVwiLCBcImNsalwiLFxyXG4gICAgXCJweVwiLCBcInJ1YnlcIiwgXCJwaHBcIiwgXCJwaHRtbFwiLFxyXG5dO1xyXG5mdW5jdGlvbiBpc0ZpbGVDbWQoZXh0ZW5zaW9uKSB7XHJcbiAgICByZXR1cm4gY21kc0V4dGVuc2lvbnMuaW5kZXhPZihleHRlbnNpb24pID4gLTE7XHJcbn1cclxuY29uc3QgZXhlY0V4dGVuc2lvbnMgPSBbXHJcbiAgICBcImV4ZVwiLCBcImphclwiLCBcImNvbVwiLCBcImJhdFwiLCBcInNoXCJcclxuXTtcclxuZnVuY3Rpb24gaXNGaWxlRXhlYyhleHRlbnNpb24pIHtcclxuICAgIHJldHVybiBleGVjRXh0ZW5zaW9ucy5pbmRleE9mKGV4dGVuc2lvbikgPiAtMTtcclxufVxyXG5jb25zdCBpbWFnZUV4dGVuc2lvbnMgPSBbXHJcbiAgICBcImpwZ1wiLCBcImpwZWdcIiwgXCJwbmdcIiwgXCJnaWZcIiwgXCJibXBcIlxyXG5dO1xyXG5mdW5jdGlvbiBpc0ZpbGVJbWFnZShleHRlbnNpb24pIHtcclxuICAgIHJldHVybiBpbWFnZUV4dGVuc2lvbnMuaW5kZXhPZihleHRlbnNpb24pID4gLTE7XHJcbn1cclxuY29uc3QgdmVjdG9yRXh0ZW5zaW9ucyA9IFtcclxuICAgIFwic3ZnXCJcclxuXTtcclxuZnVuY3Rpb24gaXNGaWxlVmVjdG9yKGV4dGVuc2lvbikge1xyXG4gICAgcmV0dXJuIHZlY3RvckV4dGVuc2lvbnMuaW5kZXhPZihleHRlbnNpb24pID4gLTE7XHJcbn1cclxuY29uc3QgbW92aWVFeHRlbnNpb25zID0gW1xyXG4gICAgXCJhdmlcIiwgXCJtcDRcIlxyXG5dO1xyXG5mdW5jdGlvbiBpc0ZpbGVNb3ZpZShleHRlbnNpb24pIHtcclxuICAgIHJldHVybiBtb3ZpZUV4dGVuc2lvbnMuaW5kZXhPZihleHRlbnNpb24pID4gLTE7XHJcbn1cclxuY29uc3QgbXVzaWNFeHRlbnNpb25zID0gW1xyXG4gICAgXCJ3YXZcIiwgXCJtcDNcIlxyXG5dO1xyXG5mdW5jdGlvbiBpc0ZpbGVNdXNpYyhleHRlbnNpb24pIHtcclxuICAgIHJldHVybiBtdXNpY0V4dGVuc2lvbnMuaW5kZXhPZihleHRlbnNpb24pID4gLTE7XHJcbn1cclxuY29uc3QgemlwcGVkRXh0ZW5zaW9ucyA9IFtcclxuICAgIFwiemlwXCIsIFwicmFyXCIsIFwiN3pcIiwgXCJ0YXJcIiwgXCJnelwiXHJcbl07XHJcbmZ1bmN0aW9uIGlzRmlsZVppcHBlZChleHRlbnNpb24pIHtcclxuICAgIHJldHVybiB6aXBwZWRFeHRlbnNpb25zLmluZGV4T2YoZXh0ZW5zaW9uKSA+IC0xO1xyXG59XHJcbmV4cG9ydHMuUWluRm9vdCA9IHtcclxuICAgIGdldExvY2F0aW9uLFxyXG4gICAgaXNMb2NhbEhvc3QsXHJcbiAgICBnZXRTZXBhcmF0b3IsXHJcbiAgICBnZXRQYXRoSm9pbixcclxuICAgIGdldFBhcmVudCxcclxuICAgIGdldFN0ZW0sXHJcbiAgICBnZXRGaWxlRXh0ZW5zaW9uLFxyXG4gICAgaXNGaWxlQXBwLFxyXG4gICAgaXNGaWxlQ21kLFxyXG4gICAgaXNGaWxlRXhlYyxcclxuICAgIGlzRmlsZUltYWdlLFxyXG4gICAgaXNGaWxlVmVjdG9yLFxyXG4gICAgaXNGaWxlTW92aWUsXHJcbiAgICBpc0ZpbGVNdXNpYyxcclxuICAgIGlzRmlsZVppcHBlZCxcclxufTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWZvb3QuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5IZWFkID0gdm9pZCAwO1xyXG5mdW5jdGlvbiBnZXRDb29raWUobmFtZSwgb3JEZWZhdWx0KSB7XHJcbiAgICBsZXQgY29va2llcyA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjtcIik7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvb2tpZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgY29va2llUGFpciA9IGNvb2tpZXNbaV0uc3BsaXQoXCI9XCIpO1xyXG4gICAgICAgIGlmIChuYW1lID09IGRlY29kZVVSSUNvbXBvbmVudChjb29raWVQYWlyWzBdKS50cmltKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChjb29raWVQYWlyWzFdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3JEZWZhdWx0O1xyXG59XHJcbmZ1bmN0aW9uIHNldENvb2tpZShuYW1lLCB2YWx1ZSwgb3B0aW9ucyA9IHt9KSB7XHJcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7IHBhdGg6IFwiL1wiIH0sIG9wdGlvbnMpO1xyXG4gICAgaWYgKCFvcHRpb25zLmV4cGlyZXMpIHtcclxuICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgMSAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xyXG4gICAgICAgIG9wdGlvbnMuZXhwaXJlcyA9IGRhdGU7XHJcbiAgICB9XHJcbiAgICBpZiAob3B0aW9ucy5leHBpcmVzIGluc3RhbmNlb2YgRGF0ZSkge1xyXG4gICAgICAgIG9wdGlvbnMuZXhwaXJlcyA9IG9wdGlvbnMuZXhwaXJlcy50b1VUQ1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgb3B0aW9uc1tcIlNhbWVTaXRlXCJdID0gXCJTdHJpY3RcIjtcclxuICAgIGxldCB1cGRhdGVkQ29va2llID0gZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpICsgXCI9XCIgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpO1xyXG4gICAgZm9yIChsZXQgb3B0aW9uS2V5IGluIG9wdGlvbnMpIHtcclxuICAgICAgICB1cGRhdGVkQ29va2llICs9IFwiOyBcIiArIG9wdGlvbktleTtcclxuICAgICAgICBsZXQgb3B0aW9uVmFsdWUgPSBvcHRpb25zW29wdGlvbktleV07XHJcbiAgICAgICAgaWYgKG9wdGlvblZhbHVlICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZWRDb29raWUgKz0gXCI9XCIgKyBvcHRpb25WYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB1cGRhdGVkQ29va2llICs9IFwiOyBTZWN1cmVcIjtcclxuICAgIGRvY3VtZW50LmNvb2tpZSA9IHVwZGF0ZWRDb29raWU7XHJcbn1cclxuZnVuY3Rpb24gZGVsQ29va2llKG5hbWUsIG9wdGlvbnMgPSB7fSkge1xyXG4gICAgbGV0IHVwZGF0ZWRDb29raWUgPSBlbmNvZGVVUklDb21wb25lbnQobmFtZSkgKyBcIj07ICBleHBpcmVzPVRodSwgMDEgSmFuIDE5NzAgMDA6MDA6MDAgR01UXCI7XHJcbiAgICBpZiAob3B0aW9ucy5leHBpcmVzKSB7XHJcbiAgICAgICAgZGVsZXRlIG9wdGlvbnMuZXhwaXJlcztcclxuICAgIH1cclxuICAgIGZvciAobGV0IG9wdGlvbktleSBpbiBvcHRpb25zKSB7XHJcbiAgICAgICAgdXBkYXRlZENvb2tpZSArPSBcIjsgXCIgKyBvcHRpb25LZXk7XHJcbiAgICAgICAgbGV0IG9wdGlvblZhbHVlID0gb3B0aW9uc1tvcHRpb25LZXldO1xyXG4gICAgICAgIGlmIChvcHRpb25WYWx1ZSAhPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB1cGRhdGVkQ29va2llICs9IFwiPVwiICsgb3B0aW9uVmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZG9jdW1lbnQuY29va2llID0gdXBkYXRlZENvb2tpZTtcclxufVxyXG5mdW5jdGlvbiBnZXREZXNrQVBJKCkge1xyXG4gICAgdmFyIHdpbiA9IHdpbmRvdztcclxuICAgIGlmICh3aW4uZGVza0FQSSkge1xyXG4gICAgICAgIHJldHVybiB3aW4uZGVza0FQSTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHdpbiA9IHdpbmRvdy5wYXJlbnQ7XHJcbiAgICB9XHJcbiAgICBpZiAod2luLmRlc2tBUEkpIHtcclxuICAgICAgICByZXR1cm4gd2luLmRlc2tBUEk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB3aW4gPSB3aW5kb3cudG9wO1xyXG4gICAgfVxyXG4gICAgaWYgKHdpbi5kZXNrQVBJKSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbi5kZXNrQVBJO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxufVxyXG5jb25zdCBsb2dnZWQgPSBbXTtcclxuZnVuY3Rpb24gZ2V0TG9nZ2VkKCkge1xyXG4gICAgcmV0dXJuIGxvZ2dlZDtcclxufVxyXG5mdW5jdGlvbiBsb2cobWVzc2FnZSkge1xyXG4gICAgbG9nZ2VkLnB1c2gobWVzc2FnZSk7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKF8pIHsgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBnZXREZXNrQVBJKCkuc2VuZChcImxvZ09uTWFpblwiLCBtZXNzYWdlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChfKSB7IH1cclxufVxyXG5mdW5jdGlvbiBsb2dFcnJvcihlcnJvciwgb3JpZ2luKSB7XHJcbiAgICBsb2coZ2V0RXJyb3JNZXNzYWdlKGVycm9yLCBvcmlnaW4pKTtcclxufVxyXG5mdW5jdGlvbiBnZXRFcnJvck1lc3NhZ2UoZXJyb3IsIG9yaWdpbikge1xyXG4gICAgcmV0dXJuIGdldFRyZWF0TWVzc2FnZShcIlByb2JsZW0gd2l0aDpcIiwgZXJyb3IsIG9yaWdpbik7XHJcbn1cclxuZnVuY3Rpb24gbG9nV2FybmluZyhlcnJvciwgb3JpZ2luKSB7XHJcbiAgICBsb2coZ2V0V2FybmluZ01lc3NhZ2UoZXJyb3IsIG9yaWdpbikpO1xyXG59XHJcbmZ1bmN0aW9uIGdldFdhcm5pbmdNZXNzYWdlKGVycm9yLCBvcmlnaW4pIHtcclxuICAgIHJldHVybiBnZXRUcmVhdE1lc3NhZ2UoXCJDaGVja291dCB0aGlzOlwiLCBlcnJvciwgb3JpZ2luKTtcclxufVxyXG5mdW5jdGlvbiBsb2dTdXBwb3J0KGVycm9yLCBvcmlnaW4pIHtcclxuICAgIGxvZyhnZXRTdXBwb3J0TWVzc2FnZShlcnJvciwgb3JpZ2luKSk7XHJcbn1cclxuZnVuY3Rpb24gZ2V0U3VwcG9ydE1lc3NhZ2UoZXJyb3IsIG9yaWdpbikge1xyXG4gICAgcmV0dXJuIGdldFRyZWF0TWVzc2FnZShcIk5lZWQgU3VwcG9ydCBvbjpcIiwgZXJyb3IsIG9yaWdpbik7XHJcbn1cclxuZnVuY3Rpb24gZ2V0VHJlYXRNZXNzYWdlKHByZWZpeCwgZXJyb3IsIG9yaWdpbikge1xyXG4gICAgdmFyIHJlc3VsdCA9IHByZWZpeCArIChlcnJvciA/IFwiIFwiICsgZXJyb3IudG9TdHJpbmcoKSA6IFwiXCIpO1xyXG4gICAgaWYgKGVycm9yLnJlc3BvbnNlICYmIGVycm9yLnJlc3BvbnNlLmRhdGEpIHtcclxuICAgICAgICB2YXIgZXJyb3JEYXRhID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICBpZiAoISh0eXBlb2YgZXJyb3JEYXRhID09IFwic3RyaW5nXCIgfHwgZXJyb3JEYXRhIGluc3RhbmNlb2YgU3RyaW5nKSkge1xyXG4gICAgICAgICAgICBlcnJvckRhdGEgPSBKU09OLnN0cmluZ2lmeShlcnJvckRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXN1bHQgKz0gXCIgLSBEYXRhOiBcIiArIGVycm9yRGF0YTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGlmICghKHR5cGVvZiBlcnJvciA9PSBcInN0cmluZ1wiIHx8IGVycm9yIGluc3RhbmNlb2YgU3RyaW5nKSkge1xyXG4gICAgICAgICAgICByZXN1bHQgKz0gXCIgLSBEYXRhOiBcIiArIEpTT04uc3RyaW5naWZ5KGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAob3JpZ2luKSB7XHJcbiAgICAgICAgcmVzdWx0ICs9IFwiIC0gT3JpZ2luOiBcIiArIG9yaWdpbjtcclxuICAgIH1cclxuICAgIGNvbnN0IHN0YWNrID0gKG5ldyBFcnJvcihcIlwiKSkuc3RhY2s7XHJcbiAgICBpZiAoc3RhY2spIHtcclxuICAgICAgICByZXN1bHQgKz0gXCIgLSBTdGFjazogXCIgKyBzdGFjaztcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuZnVuY3Rpb24gdG9nZ2xlRGV2VG9vbHMoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGdldERlc2tBUEkoKS5zZW5kKFwidG9nZ2xlRGV2VG9vbHNcIik7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgIGxvZ0Vycm9yKGUsIFwie3FpbnBlbC1yZXN9KEVyckNvZGUtMDAwMDAxKVwiKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlFpbkhlYWQgPSB7XHJcbiAgICBnZXRDb29raWUsXHJcbiAgICBzZXRDb29raWUsXHJcbiAgICBkZWxDb29raWUsXHJcbiAgICBnZXREZXNrQVBJLFxyXG4gICAgZ2V0TG9nZ2VkLFxyXG4gICAgbG9nLFxyXG4gICAgbG9nRXJyb3IsXHJcbiAgICBnZXRFcnJvck1lc3NhZ2UsXHJcbiAgICBsb2dXYXJuaW5nLFxyXG4gICAgZ2V0V2FybmluZ01lc3NhZ2UsXHJcbiAgICBsb2dTdXBwb3J0LFxyXG4gICAgZ2V0U3VwcG9ydE1lc3NhZ2UsXHJcbiAgICBnZXRUcmVhdE1lc3NhZ2UsXHJcbiAgICB0b2dnbGVEZXZUb29scyxcclxufTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWhlYWQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5Ta2luID0gZXhwb3J0cy5RaW5TdHlsZXMgPSBleHBvcnRzLlFpbkdyYW5kZXVyID0gZXhwb3J0cy5RaW5Cb3VuZHMgPSBleHBvcnRzLlFpbkRpbWVuc2lvbiA9IGV4cG9ydHMuUWluUG9pbnQgPSB2b2lkIDA7XHJcbmNvbnN0IHFpbl9hcm1fMSA9IHJlcXVpcmUoXCIuL3Fpbi1hcm1cIik7XHJcbmNsYXNzIFFpblBvaW50IHtcclxufVxyXG5leHBvcnRzLlFpblBvaW50ID0gUWluUG9pbnQ7XHJcbmNsYXNzIFFpbkRpbWVuc2lvbiB7XHJcbn1cclxuZXhwb3J0cy5RaW5EaW1lbnNpb24gPSBRaW5EaW1lbnNpb247XHJcbmNsYXNzIFFpbkJvdW5kcyB7XHJcbn1cclxuZXhwb3J0cy5RaW5Cb3VuZHMgPSBRaW5Cb3VuZHM7XHJcbnZhciBRaW5HcmFuZGV1cjtcclxuKGZ1bmN0aW9uIChRaW5HcmFuZGV1cikge1xyXG4gICAgUWluR3JhbmRldXJbXCJTTUFMTFwiXSA9IFwic21hbGxcIjtcclxuICAgIFFpbkdyYW5kZXVyW1wiTUVESVVNXCJdID0gXCJtZWRpdW1cIjtcclxuICAgIFFpbkdyYW5kZXVyW1wiTEFSR0VcIl0gPSBcImxhcmdlXCI7XHJcbn0pKFFpbkdyYW5kZXVyID0gZXhwb3J0cy5RaW5HcmFuZGV1ciB8fCAoZXhwb3J0cy5RaW5HcmFuZGV1ciA9IHt9KSk7XHJcbmV4cG9ydHMuUWluU3R5bGVzID0ge1xyXG4gICAgQ29sb3JGb3JlZ3JvdW5kOiBcIiMxODAwMjdmZlwiLFxyXG4gICAgQ29sb3JCYWNrZ3JvdW5kOiBcIiNmZmZjZjlmZlwiLFxyXG4gICAgQ29sb3JJbmFjdGl2ZTogXCIjZmNmOWZmZmZcIixcclxuICAgIENvbG9yQWN0aXZlOiBcIiNmZGVkZWRmZlwiLFxyXG4gICAgQ29sb3JBY2NlbnQ6IFwiI2FlMDAwMGZmXCIsXHJcbiAgICBDb2xvclNlbGVjdGVkOiBcIiM1ZDcyZGU4ZlwiLFxyXG4gICAgRm9udE5hbWU6IFwiU291cmNlU2Fuc1Byb1wiLFxyXG4gICAgRm9udFNpemU6IFwiMTZweFwiLFxyXG59O1xyXG5mdW5jdGlvbiBzdHlsZUFzQm9keShlbCkge1xyXG4gICAgZWwuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICBlbC5zdHlsZS50b3AgPSBcIjBweFwiO1xyXG4gICAgZWwuc3R5bGUucmlnaHQgPSBcIjBweFwiO1xyXG4gICAgZWwuc3R5bGUuYm90dG9tID0gXCIwcHhcIjtcclxuICAgIGVsLnN0eWxlLmxlZnQgPSBcIjBweFwiO1xyXG4gICAgZWwuc3R5bGUucGFkZGluZyA9IFwiOXB4XCI7XHJcbiAgICBlbC5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiO1xyXG59XHJcbmZ1bmN0aW9uIHN0eWxlQXNCYXNlKGVsKSB7XHJcbiAgICBlbC5zdHlsZS5tYXJnaW4gPSBcIjFweFwiO1xyXG4gICAgZWwuc3R5bGUucGFkZGluZyA9IFwiM3B4XCI7XHJcbiAgICBlbC5zdHlsZS5vdXRsaW5lID0gXCJub25lXCI7XHJcbiAgICBlbC5zdHlsZS5jb2xvciA9IGV4cG9ydHMuUWluU3R5bGVzLkNvbG9yRm9yZWdyb3VuZDtcclxuICAgIGVsLnN0eWxlLmZvbnRGYW1pbHkgPSBcIlNvdXJjZVNhbnNQcm9cIjtcclxuICAgIGVsLnN0eWxlLmZvbnRTaXplID0gXCIxNnB4XCI7XHJcbn1cclxuZnVuY3Rpb24gc3R5bGVBc0VkaXQoZWwpIHtcclxuICAgIHN0eWxlQXNCYXNlKGVsKTtcclxuICAgIGVsLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkIFwiICsgZXhwb3J0cy5RaW5TdHlsZXMuQ29sb3JGb3JlZ3JvdW5kO1xyXG4gICAgZWwuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIzcHhcIjtcclxuICAgIGVsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGV4cG9ydHMuUWluU3R5bGVzLkNvbG9ySW5hY3RpdmU7XHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgKCkgPT4ge1xyXG4gICAgICAgIGVsLnN0eWxlLm91dGxpbmUgPSBcIm5vbmVcIjtcclxuICAgICAgICBlbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBleHBvcnRzLlFpblN0eWxlcy5Db2xvckFjdGl2ZTtcclxuICAgICAgICBlbC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCBcIiArIGV4cG9ydHMuUWluU3R5bGVzLkNvbG9yQWNjZW50O1xyXG4gICAgfSk7XHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgKCkgPT4ge1xyXG4gICAgICAgIGVsLnN0eWxlLm91dGxpbmUgPSBcIm5vbmVcIjtcclxuICAgICAgICBlbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBleHBvcnRzLlFpblN0eWxlcy5Db2xvckluYWN0aXZlO1xyXG4gICAgICAgIGVsLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkIFwiICsgZXhwb3J0cy5RaW5TdHlsZXMuQ29sb3JGb3JlZ3JvdW5kO1xyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gc3R5bGVNYXhTaXplRm9yTm90T3ZlckZsb3coZWwsIHBhcmVudCkge1xyXG4gICAgY29uc29sZS5sb2coXCJEMVwiKTtcclxuICAgIGlmICghcGFyZW50KSB7XHJcbiAgICAgICAgcGFyZW50ID0gZWwucGFyZW50RWxlbWVudDtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkQyOiBcIiArIHBhcmVudCk7XHJcbiAgICB9XHJcbiAgICBpZiAocGFyZW50KSB7XHJcbiAgICAgICAgbGV0IG1heFdpZHRoID0gMDtcclxuICAgICAgICBsZXQgbWF4SGVpZ2h0ID0gMDtcclxuICAgICAgICBsZXQgaW1lZGlhdGUgPSBlbDtcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIG1heFdpZHRoID0gbWF4V2lkdGggKyBpbWVkaWF0ZS5jbGllbnRMZWZ0O1xyXG4gICAgICAgICAgICBtYXhIZWlnaHQgPSBtYXhIZWlnaHQgKyBpbWVkaWF0ZS5jbGllbnRUb3A7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRDM6IFwiICsgbWF4V2lkdGgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkQ0OiBcIiArIG1heEhlaWdodCk7XHJcbiAgICAgICAgICAgIGltZWRpYXRlID0gaW1lZGlhdGUucGFyZW50RWxlbWVudDtcclxuICAgICAgICB9IHdoaWxlIChpbWVkaWF0ZSAhPSBudWxsICYmIGltZWRpYXRlICE9IHBhcmVudCk7XHJcbiAgICAgICAgbWF4V2lkdGggPSBwYXJlbnQuY2xpZW50V2lkdGggLSBtYXhXaWR0aDtcclxuICAgICAgICBtYXhIZWlnaHQgPSBwYXJlbnQuY2xpZW50SGVpZ2h0IC0gbWF4SGVpZ2h0O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRDU6IFwiICsgbWF4V2lkdGgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRDY6IFwiICsgbWF4SGVpZ2h0KTtcclxuICAgICAgICBlbC5zdHlsZS5tYXhXaWR0aCA9IG1heFdpZHRoICsgXCJweFwiO1xyXG4gICAgICAgIGVsLnN0eWxlLm1heEhlaWdodCA9IG1heEhlaWdodCArIFwicHhcIjtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBzdHlsZVNpemUoZWwsIHNpemUpIHtcclxuICAgIGlmIChzaXplKSB7XHJcbiAgICAgICAgaWYgKHNpemUgaW5zdGFuY2VvZiBRaW5EaW1lbnNpb24pIHtcclxuICAgICAgICAgICAgZWwuc3R5bGUud2lkdGggPSBzaXplLndpZHRoICsgXCJweFwiO1xyXG4gICAgICAgICAgICBlbC5zdHlsZS5oZWlnaHQgPSBzaXplLmhlaWdodCArIFwicHhcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBkaW0gPSBnZXREaW1lbnNpb25TaXplKHNpemUpO1xyXG4gICAgICAgICAgICBlbC5zdHlsZS53aWR0aCA9IGRpbS53aWR0aCArIFwicHhcIjtcclxuICAgICAgICAgICAgZWwuc3R5bGUuaGVpZ2h0ID0gZGltLmhlaWdodCArIFwicHhcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gc3R5bGVGbGV4TWF4KGVsKSB7XHJcbiAgICBlbC5zdHlsZS5mbGV4ID0gXCIxXCI7XHJcbn1cclxuZnVuY3Rpb24gc3R5bGVGbGV4TWluKGVsKSB7XHJcbiAgICBlbC5zdHlsZS5mbGV4ID0gXCIwXCI7XHJcbn1cclxuZnVuY3Rpb24gZ2V0V2luZG93U2l6ZSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgd2lkdGg6IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0OiBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCxcclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gZ2V0V2luZG93U2l6ZVN0eWxlKCkge1xyXG4gICAgY29uc3Qgd2lkdGggPSBnZXRXaW5kb3dTaXplKCkud2lkdGg7XHJcbiAgICBpZiAod2lkdGggPCA2MDApIHtcclxuICAgICAgICByZXR1cm4gUWluR3JhbmRldXIuU01BTEw7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh3aWR0aCA8IDEwMDApIHtcclxuICAgICAgICByZXR1cm4gUWluR3JhbmRldXIuTUVESVVNO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIFFpbkdyYW5kZXVyLkxBUkdFO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGhpZGVBbGxJRnJhbWVzKCkge1xyXG4gICAgdmFyIGRvY19pZnJhbWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpZnJhbWVcIik7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRvY19pZnJhbWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGRvY19pZnJhbWUgPSBkb2NfaWZyYW1lc1tpXTtcclxuICAgICAgICBkb2NfaWZyYW1lLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHNob3dBbGxJRnJhbWVzKCkge1xyXG4gICAgdmFyIGRvY19pZnJhbWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpZnJhbWVcIik7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRvY19pZnJhbWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGRvY19pZnJhbWUgPSBkb2NfaWZyYW1lc1tpXTtcclxuICAgICAgICBkb2NfaWZyYW1lLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBkaXNhYmxlU2VsZWN0aW9uKGVsZW1lbnQpIHtcclxuICAgIGVsZW1lbnQuc3R5bGUudXNlclNlbGVjdCA9IFwibm9uZVwiO1xyXG4gICAgZWxlbWVudC5zdHlsZS53ZWJraXRVc2VyU2VsZWN0ID0gXCJub25lXCI7XHJcbiAgICBlbGVtZW50Lm9uc2VsZWN0c3RhcnQgPSBxaW5fYXJtXzEuUWluQXJtLnN0b3BFdmVudDtcclxufVxyXG5mdW5jdGlvbiBjbGVhclNlbGVjdGlvbigpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGlmICh3aW5kb3cuZ2V0U2VsZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9LCAzNjApO1xyXG59XHJcbmZ1bmN0aW9uIGlzRWxlbWVudFZpc2libGVJblNjcm9sbChlbGVtZW50KSB7XHJcbiAgICBpZiAoZWxlbWVudC5wYXJlbnRFbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQub2Zmc2V0VG9wIDwgZWxlbWVudC5wYXJlbnRFbGVtZW50LnNjcm9sbFRvcCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlbGVtZW50Lm9mZnNldExlZnQgPCBlbGVtZW50LnBhcmVudEVsZW1lbnQuc2Nyb2xsTGVmdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlbGVtZW50LmNsaWVudFdpZHRoID5cclxuICAgICAgICAgICAgZWxlbWVudC5wYXJlbnRFbGVtZW50LmNsaWVudFdpZHRoIC1cclxuICAgICAgICAgICAgICAgIChlbGVtZW50Lm9mZnNldExlZnQgLSBlbGVtZW50LnBhcmVudEVsZW1lbnQuc2Nyb2xsTGVmdCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZWxlbWVudC5jbGllbnRIZWlnaHQgPlxyXG4gICAgICAgICAgICBlbGVtZW50LnBhcmVudEVsZW1lbnQuY2xpZW50SGVpZ2h0IC1cclxuICAgICAgICAgICAgICAgIChlbGVtZW50Lm9mZnNldFRvcCAtIGVsZW1lbnQucGFyZW50RWxlbWVudC5zY3JvbGxUb3ApKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG5mdW5jdGlvbiBnZXREaW1lbnNpb24oZWwpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgd2lkdGg6IHBhcnNlSW50KGVsLnN0eWxlLndpZHRoKSxcclxuICAgICAgICBoZWlnaHQ6IHBhcnNlSW50KGVsLnN0eWxlLmhlaWdodCksXHJcbiAgICB9O1xyXG59XHJcbmZ1bmN0aW9uIGdldERpbWVuc2lvblNpemUoc2l6ZSkge1xyXG4gICAgaWYgKHNpemUgPT0gUWluR3JhbmRldXIuTEFSR0UpIHtcclxuICAgICAgICByZXR1cm4gZ2V0RGltZW5zaW9uTGFyZ2UoKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHNpemUgPT0gUWluR3JhbmRldXIuTUVESVVNKSB7XHJcbiAgICAgICAgcmV0dXJuIGdldERpbWVuc2lvbk1lZGl1bSgpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGdldERpbWVuc2lvblNtYWxsKCk7XHJcbiAgICB9XHJcbn1cclxuY29uc3QgZGltZW5zaW9uU21hbGwgPSB7XHJcbiAgICB3aWR0aDogMjEsXHJcbiAgICBoZWlnaHQ6IDIxLFxyXG59O1xyXG5mdW5jdGlvbiBnZXREaW1lbnNpb25TbWFsbCgpIHtcclxuICAgIHJldHVybiBkaW1lbnNpb25TbWFsbDtcclxufVxyXG5jb25zdCBkaW1lbnNpb25NZWRpdW0gPSB7XHJcbiAgICB3aWR0aDogMzIsXHJcbiAgICBoZWlnaHQ6IDMyLFxyXG59O1xyXG5mdW5jdGlvbiBnZXREaW1lbnNpb25NZWRpdW0oKSB7XHJcbiAgICByZXR1cm4gZGltZW5zaW9uTWVkaXVtO1xyXG59XHJcbmNvbnN0IGRpbWVuc2lvbkxhcmdlID0ge1xyXG4gICAgd2lkdGg6IDY0LFxyXG4gICAgaGVpZ2h0OiA2NCxcclxufTtcclxuZnVuY3Rpb24gZ2V0RGltZW5zaW9uTGFyZ2UoKSB7XHJcbiAgICByZXR1cm4gZGltZW5zaW9uTGFyZ2U7XHJcbn1cclxuZXhwb3J0cy5RaW5Ta2luID0ge1xyXG4gICAgc3R5bGVzOiBleHBvcnRzLlFpblN0eWxlcyxcclxuICAgIHN0eWxlQXNCb2R5LFxyXG4gICAgc3R5bGVBc0Jhc2UsXHJcbiAgICBzdHlsZUFzRWRpdCxcclxuICAgIHN0eWxlTWF4U2l6ZUZvck5vdE92ZXJGbG93LFxyXG4gICAgc3R5bGVTaXplLFxyXG4gICAgc3R5bGVGbGV4TWF4LFxyXG4gICAgc3R5bGVGbGV4TWluLFxyXG4gICAgZ2V0V2luZG93U2l6ZSxcclxuICAgIGdldFdpbmRvd1NpemVTdHlsZSxcclxuICAgIGhpZGVBbGxJRnJhbWVzLFxyXG4gICAgc2hvd0FsbElGcmFtZXMsXHJcbiAgICBkaXNhYmxlU2VsZWN0aW9uLFxyXG4gICAgY2xlYXJTZWxlY3Rpb24sXHJcbiAgICBpc0VsZW1lbnRWaXNpYmxlSW5TY3JvbGwsXHJcbiAgICBnZXREaW1lbnNpb24sXHJcbiAgICBnZXREaW1lbnNpb25TaXplLFxyXG4gICAgZ2V0RGltZW5zaW9uU21hbGwsXHJcbiAgICBnZXREaW1lbnNpb25NZWRpdW0sXHJcbiAgICBnZXREaW1lbnNpb25MYXJnZSxcclxufTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLXNraW4uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5Tb3VsID0gdm9pZCAwO1xyXG5jb25zdCBxaW5fYXJtXzEgPSByZXF1aXJlKFwiLi9xaW4tYXJtXCIpO1xyXG5jb25zdCBxaW5fYm9keV8xID0gcmVxdWlyZShcIi4vcWluLWJvZHlcIik7XHJcbmNvbnN0IHFpbl9mb290XzEgPSByZXF1aXJlKFwiLi9xaW4tZm9vdFwiKTtcclxuY29uc3QgcWluX2hlYWRfMSA9IHJlcXVpcmUoXCIuL3Fpbi1oZWFkXCIpO1xyXG5jb25zdCBxaW5fc2tpbl8xID0gcmVxdWlyZShcIi4vcWluLXNraW5cIik7XHJcbmV4cG9ydHMuUWluU291bCA9IHtcclxuICAgIGFybTogcWluX2FybV8xLlFpbkFybSxcclxuICAgIGJvZHk6IHFpbl9ib2R5XzEuUWluQm9keSxcclxuICAgIGZvb3Q6IHFpbl9mb290XzEuUWluRm9vdCxcclxuICAgIGhlYWQ6IHFpbl9oZWFkXzEuUWluSGVhZCxcclxuICAgIHNraW46IHFpbl9za2luXzEuUWluU2tpbixcclxufTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLXNvdWwuanMubWFwIl19
