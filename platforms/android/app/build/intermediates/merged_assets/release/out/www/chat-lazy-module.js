(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-lazy-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/chat/pages/chat/chat.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/chat/pages/chat/chat.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <h1>\n            <core-format-text [text]=\"title\" contextLevel=\"module\" [contextInstanceId]=\"cmId\" [courseId]=\"courseId\">\n            </core-format-text>\n        </h1>\n        <ion-buttons slot=\"end\">\n            <ion-button fill=\"clear\" *ngIf=\"loaded\" (click)=\"showChatUsers()\" [attr.aria-label]=\"'core.users' | translate\">\n                <ion-icon name=\"fas-users\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content class=\"has-footer\">\n    <core-loading [hideUntil]=\"loaded\" class=\"safe-area-page\">\n        <ion-list class=\"addon-messages-discussion-container\" aria-live=\"polite\">\n            <ng-container *ngFor=\"let message of messages; index as index; last as last\">\n\n                <p class=\"ion-text-center addon-messages-date\" *ngIf=\"message.showDate\">\n                    {{ message.timestamp * 1000 | coreFormatDate: \"strftimedayshort\" }}\n                </p>\n\n                <div class=\"ion-text-center addon-mod_chat-notice\" *ngIf=\"message.special\">\n                    <ion-badge class=\"ion-text-wrap\" color=\"success\" *ngIf=\"message.system && message.message == 'enter'\">\n                        <span>\n                            <ion-icon name=\"fas-sign-in-alt\" aria-hidden=\"true\"></ion-icon>\n                            {{ message.timestamp * 1000 | coreFormatDate:\"strftimetime\" }}\n                            {{ 'addon.mod_chat.messageenter' | translate:{$a: message.userfullname} }}\n                        </span>\n                    </ion-badge>\n\n                    <ion-badge class=\"ion-text-wrap\" color=\"danger\" *ngIf=\"message.system && message.message == 'exit'\">\n                        <span>\n                            <ion-icon name=\"fas-sign-out-alt\" aria-hidden=\"true\"></ion-icon>\n                            {{ message.timestamp * 1000 | coreFormatDate:\"strftimetime\" }}\n                            {{ 'addon.mod_chat.messageexit' | translate:{$a: message.userfullname} }}\n                        </span>\n                    </ion-badge>\n\n                    <ion-badge class=\"ion-text-wrap\" color=\"primary\" *ngIf=\"message.beep == 'all'\">\n                        <span>\n                            <ion-icon name=\"fas-bell\" aria-hidden=\"true\"></ion-icon>\n                            {{ message.timestamp * 1000 | coreFormatDate:\"strftimetime\" }}\n                            {{ 'addon.mod_chat.messagebeepseveryone' | translate:{$a: message.userfullname} }}\n                        </span>\n                    </ion-badge>\n\n                    <ion-badge class=\"ion-text-wrap\" color=\"primary\"\n                        *ngIf=\"message.userid != currentUserId && message.beep == currentUserId\">\n                        <span>\n                            <ion-icon name=\"fas-bell\" aria-hidden=\"true\"></ion-icon>\n                            {{ message.timestamp * 1000 | coreFormatDate:\"strftimetime\" }}\n                            {{ 'addon.mod_chat.messagebeepsyou' | translate:{$a: message.userfullname} }}\n                        </span>\n                    </ion-badge>\n\n                    <ion-badge class=\"ion-text-wrap\" color=\"light\"\n                        *ngIf=\"message.userid == currentUserId && message.beep && message.beep != 'all'\">\n                        <span>\n                            <ion-icon name=\"fas-bell\" aria-hidden=\"true\"></ion-icon>\n                            {{ message.timestamp * 1000 | coreFormatDate:\"strftimetime\" }}\n                            {{ 'addon.mod_chat.messageyoubeep' | translate:{$a: message.beepWho} }}\n                        </span>\n                    </ion-badge>\n\n                    <ion-badge class=\"ion-text-wrap\" color=\"info\" *ngIf=\"!message.system && !message.beep\">\n                        <span>\n                            <ion-icon name=\"fas-asterisk\" aria-hidden=\"true\"></ion-icon>\n                            {{ message.timestamp * 1000 | coreFormatDate:\"strftimetime\" }}\n                            <strong>\n                                {{ message.userfullname }} <core-format-text [text]=\"message.message\" contextLevel=\"module\"\n                                [contextInstanceId]=\"cmId\" [courseId]=\"courseId\" (afterRender)=\"last && scrollToBottom()\">\n                                </core-format-text>\n                            </strong>\n                        </span>\n                    </ion-badge>\n                </div>\n\n                <ion-item *ngIf=\"!message.special\" class=\"ion-text-wrap addon-message\"\n                    [class.addon-message-mine]=\"message.userid == currentUserId\"\n                    [class.addon-message-not-mine]=\"message.userid != currentUserId\"\n                    [class.addon-message-no-user]=\"!message.showUserData\"\n                    [@coreSlideInOut]=\"message.userid == currentUserId ? '' : 'fromLeft'\">\n                    <ion-label>\n                        <!-- User data. -->\n                        <h2 class=\"addon-message-user\" *ngIf=\"message.showUserData\">\n                            <core-user-avatar slot=\"start\" [user]=\"message\" [linkProfile]=\"false\">\n                            </core-user-avatar>\n                            <div>{{ message.userfullname }}</div>\n                        </h2>\n\n                        <p class=\"addon-message-text\">\n                            <core-format-text [text]=\"message.message\" contextLevel=\"module\" [contextInstanceId]=\"cmId\"\n                                [courseId]=\"courseId\" (afterRender)=\"last && scrollToBottom()\">\n                            </core-format-text>\n                        </p>\n                    </ion-label>\n                    <ion-note>{{ message.timestamp * 1000 | coreFormatDate: \"strftimetime\" }}</ion-note>\n                    <div class=\"tail\" *ngIf=\"message.showTail\"></div>\n                </ion-item>\n            </ng-container>\n        </ion-list>\n\n        <core-empty-box *ngIf=\"!messages || messages.length <= 0\" icon=\"far-comments\"\n            [message]=\"'addon.mod_chat.nomessages' | translate\">\n        </core-empty-box>\n    </core-loading>\n</ion-content>\n<ion-footer color=\"light\" class=\"footer-adjustable\">\n    <ion-toolbar color=\"light\">\n        <p class=\"ion-text-center\" *ngIf=\"!isOnline\">\n            {{ 'addon.mod_chat.mustbeonlinetosendmessages' | translate }}\n        </p>\n\n        <core-send-message-form [sendDisabled]=\"sending\" *ngIf=\"isOnline && polling && loaded\" [message]=\"newMessage\"\n            (onSubmit)=\"sendMessage($event)\" [placeholder]=\"'addon.messages.newmessage' | translate\" (onResize)=\"resizeContent()\">\n        </core-send-message-form>\n\n        <ion-button *ngIf=\"isOnline && !polling && loaded\" (click)=\"reconnect()\" expand=\"block\" color=\"light\">\n            {{ 'core.login.reconnect' | translate }}\n        </ion-button>\n    </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/chat/pages/index/index.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/chat/pages/index/index.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <h1>\n            <core-format-text [text]=\"title\" contextLevel=\"module\" [contextInstanceId]=\"module?.id\" [courseId]=\"courseId\">\n            </core-format-text>\n        </h1>\n        <ion-buttons slot=\"end\">\n            <!-- The buttons defined by the component will be added in here. -->\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-refresher slot=\"fixed\" [disabled]=\"!activityComponent?.loaded\" (ionRefresh)=\"activityComponent?.doRefresh($event.target)\">\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\n    </ion-refresher>\n\n    <addon-mod-chat-index [module]=\"module\" [courseId]=\"courseId\" (dataRetrieved)=\"updateData($event)\"></addon-mod-chat-index>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/chat/pages/session-messages/session-messages.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/chat/pages/session-messages/session-messages.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <h1>{{ 'addon.mod_chat.messages' | translate }}</h1>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-refresher slot=\"fixed\" [disabled]=\"!loaded\" (ionRefresh)=\"refreshMessages($event.target)\">\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\n    </ion-refresher>\n    <core-loading [hideUntil]=\"loaded\" class=\"safe-area-page\">\n        <ion-list class=\"addon-messages-discussion-container\">\n            <ng-container *ngFor=\"let message of messages; index as index;\">\n\n                <div class=\"ion-text-center addon-messages-date\" *ngIf=\"message.showDate\">\n                    {{ message.timestamp * 1000 | coreFormatDate:\"strftimedayshort\" }}\n                </div>\n\n                <div class=\"ion-text-center addon-mod_chat-notice\" *ngIf=\"message.special\">\n                    <ion-badge class=\"ion-text-wrap\" color=\"success\" *ngIf=\"message.issystem && message.message == 'enter'\">\n                        <span>\n                            <ion-icon name=\"fas-sign-in-alt\" aria-hidden=\"true\"></ion-icon>\n                            {{ message.timestamp * 1000 | coreFormatDate:\"strftimetime\" }}\n                            {{ 'addon.mod_chat.messageenter' | translate:{$a: message.userfullname} }}\n                        </span>\n                    </ion-badge>\n\n                    <ion-badge class=\"ion-text-wrap\" color=\"danger\" *ngIf=\"message.issystem && message.message == 'exit'\">\n                        <span>\n                            <ion-icon name=\"fas-sign-out-alt\" aria-hidden=\"true\"></ion-icon>\n                            {{ message.timestamp * 1000 | coreFormatDate:\"strftimetime\" }}\n                            {{ 'addon.mod_chat.messageexit' | translate:{$a: message.userfullname} }}\n                        </span>\n                    </ion-badge>\n\n                    <ion-badge class=\"ion-text-wrap\" color=\"primary\" *ngIf=\"message.beep == 'all'\">\n                        <span>\n                            <ion-icon name=\"fas-bell\" aria-hidden=\"true\"></ion-icon>\n                            {{ message.timestamp * 1000 | coreFormatDate:\"strftimetime\" }}\n                            {{ 'addon.mod_chat.messagebeepseveryone' | translate:{$a: message.userfullname} }}\n                        </span>\n                    </ion-badge>\n\n                    <ion-badge class=\"ion-text-wrap\" color=\"primary\"\n                        *ngIf=\"message.userid != currentUserId && message.beep == currentUserId\">\n                        <span>\n                            <ion-icon name=\"fas-bell\" aria-hidden=\"true\"></ion-icon>\n                            {{ message.timestamp * 1000 | coreFormatDate:\"strftimetime\" }}\n                            {{ 'addon.mod_chat.messagebeepsyou' | translate:{$a: message.userfullname} }}\n                        </span>\n                    </ion-badge>\n\n                    <ion-badge class=\"ion-text-wrap\" color=\"light\"\n                        *ngIf=\"message.userid == currentUserId && message.beep && message.beep != 'all'\">\n                        <span>\n                            <ion-icon name=\"fas-bell\" aria-hidden=\"true\"></ion-icon>\n                            {{ message.timestamp * 1000 | coreFormatDate:\"strftimetime\" }}\n                            {{ 'addon.mod_chat.messageyoubeep' | translate:{$a: message.beepWho} }}\n                        </span>\n                    </ion-badge>\n\n                    <ion-badge class=\"ion-text-wrap\" color=\"info\" *ngIf=\"!message.issystem && !message.beep\">\n                        <span>\n                            <ion-icon name=\"fas-asterisk\" aria-hidden=\"true\"></ion-icon>\n                            {{ message.timestamp * 1000 | coreFormatDate:\"strftimetime\" }}\n                            <strong>\n                                {{ message.userfullname }} <core-format-text [text]=\"message.message\" contextLevel=\"module\"\n                                [contextInstanceId]=\"cmId\" [courseId]=\"courseId\"></core-format-text>\n                            </strong>\n                        </span>\n                    </ion-badge>\n                </div>\n\n                <ion-item *ngIf=\"!message.special\" class=\"ion-text-wrap addon-message\"\n                    [class.addon-message-mine]=\"message.userid == currentUserId\"\n                    [class.addon-message-not-mine]=\"message.userid != currentUserId\"\n                    [class.addon-message-no-user]=\"!message.showUserData\">\n                    <ion-label>\n                        <!-- User data. -->\n                        <h2 class=\"addon-message-user\">\n                            <core-user-avatar slot=\"start\" [user]=\"message\" [linkProfile]=\"false\" *ngIf=\"message.showUserData\">\n                            </core-user-avatar>\n                            <div *ngIf=\"message.showUserData\">{{ message.userfullname }}</div>\n                        </h2>\n\n                        <p class=\"addon-message-text\">\n                            <core-format-text [text]=\"message.message\" contextLevel=\"module\" [contextInstanceId]=\"cmId\"\n                                [courseId]=\"courseId\">\n                            </core-format-text>\n                        </p>\n                        <ion-note>{{ message.timestamp * 1000 | coreFormatDate: \"strftimetime\" }}</ion-note>\n                    </ion-label>\n                    <div class=\"tail\" *ngIf=\"message.showTail\"></div>\n                </ion-item>\n            </ng-container>\n        </ion-list>\n    </core-loading>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/chat/pages/sessions/sessions.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/chat/pages/sessions/sessions.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <h1>{{ 'addon.mod_chat.chatreport' | translate }}</h1>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <core-split-view>\n        <ion-refresher slot=\"fixed\" [disabled]=\"!sessions.loaded\" (ionRefresh)=\"refreshSessions($event.target)\">\n            <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\n        </ion-refresher>\n        <core-loading [hideUntil]=\"sessions.loaded\">\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"groupInfo && (groupInfo.separateGroups || groupInfo.visibleGroups)\">\n                <ion-label id=\"addon-chat-groupslabel\">\n                    <ng-container *ngIf=\"groupInfo.separateGroups\">{{'core.groupsseparate' | translate }}</ng-container>\n                    <ng-container *ngIf=\"groupInfo.visibleGroups\">{{'core.groupsvisible' | translate }}</ng-container>\n                </ion-label>\n                <ion-select [(ngModel)]=\"groupId\" (ionChange)=\"fetchSessions(true)\" aria-labelledby=\"addon-chat-groupslabel\"\n                    interface=\"action-sheet\" [interfaceOptions]=\"{header: 'core.group' | translate}\">\n                    <ion-select-option *ngFor=\"let groupOpt of groupInfo.groups\" [value]=\"groupOpt.id\">\n                        {{groupOpt.name}}\n                    </ion-select-option>\n                </ion-select>\n            </ion-item>\n\n            <ion-item>\n                <ion-label>{{ 'addon.mod_chat.showincompletesessions' | translate }}</ion-label>\n                <ion-toggle [(ngModel)]=\"showAll\" (ionChange)=\"fetchSessions(true)\"></ion-toggle>\n            </ion-item>\n\n            <ion-card *ngFor=\"let session of sessions.items\" (click)=\"sessions.select(session)\" button\n                [attr.aria-current]=\"sessions.getItemAriaCurrent(session)\"\n                [class.addon-mod-chat-session-show-more]=\"session.sessionusers.length < session.allsessionusers.length\">\n\n                <ion-item class=\"ion-text-wrap\">\n                    <ion-label>\n                        <p class=\"item-heading\">{{ session.sessionstart * 1000 | coreFormatDate }}</p>\n                        <p *ngIf=\"session.duration\">{{ session.duration | coreDuration }}</p>\n                    </ion-label>\n                </ion-item>\n                <ion-card-content>\n                    <ion-item *ngFor=\"let user of session.sessionusers\">\n                        <ion-label>\n                            {{ user.userfullname }} <span *ngIf=\"user.messagecount\">({{ user.messagecount }})</span>\n                        </ion-label>\n                    </ion-item>\n                </ion-card-content>\n                <ion-button *ngIf=\"session.sessionusers.length < session.allsessionusers.length\" fill=\"clear\" expand=\"block\"\n                    (click)=\"showMoreUsers(session, $event)\">\n                    {{ 'core.showmore' | translate }}\n                </ion-button>\n            </ion-card>\n\n            <core-empty-box *ngIf=\"sessions.empty\" icon=\"far-comments\" [message]=\"'addon.mod_chat.nosessionsfound' | translate\">\n            </core-empty-box>\n        </core-loading>\n    </core-split-view>\n</ion-content>\n");

/***/ }),

/***/ "./src/addons/mod/chat/chat-lazy.module.ts":
/*!*************************************************!*\
  !*** ./src/addons/mod/chat/chat-lazy.module.ts ***!
  \*************************************************/
/*! exports provided: AddonModChatLazyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModChatLazyModule", function() { return AddonModChatLazyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/components.module */ "./src/addons/mod/chat/components/components.module.ts");
/* harmony import */ var _pages_index_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/index/index */ "./src/addons/mod/chat/pages/index/index.ts");
/* harmony import */ var _pages_chat_chat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/chat/chat */ "./src/addons/mod/chat/pages/chat/chat.ts");
/* harmony import */ var _pages_session_messages_session_messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/session-messages/session-messages */ "./src/addons/mod/chat/pages/session-messages/session-messages.ts");
/* harmony import */ var _services_screen__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/screen */ "./src/core/services/screen.ts");
/* harmony import */ var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/app/app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _pages_sessions_sessions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/sessions/sessions */ "./src/addons/mod/chat/pages/sessions/sessions.ts");
/* harmony import */ var _guards_can_leave__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @guards/can-leave */ "./src/core/guards/can-leave.ts");
// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.












const commonRoutes = [
    {
        path: ':courseId/:cmId',
        component: _pages_index_index__WEBPACK_IMPORTED_MODULE_5__["AddonModChatIndexPage"],
    },
    {
        path: ':courseId/:cmId/chat',
        component: _pages_chat_chat__WEBPACK_IMPORTED_MODULE_6__["AddonModChatChatPage"],
        canDeactivate: [_guards_can_leave__WEBPACK_IMPORTED_MODULE_11__["CanLeaveGuard"]],
    },
];
const mobileRoutes = [
    ...commonRoutes,
    {
        path: ':courseId/:cmId/sessions',
        component: _pages_sessions_sessions__WEBPACK_IMPORTED_MODULE_10__["AddonModChatSessionsPage"],
    },
    {
        path: ':courseId/:cmId/sessions/:sessionStart/:sessionEnd',
        component: _pages_session_messages_session_messages__WEBPACK_IMPORTED_MODULE_7__["AddonModChatSessionMessagesPage"],
    },
];
const tabletRoutes = [
    ...commonRoutes,
    {
        path: ':courseId/:cmId/sessions',
        component: _pages_sessions_sessions__WEBPACK_IMPORTED_MODULE_10__["AddonModChatSessionsPage"],
        children: [
            {
                path: ':sessionStart/:sessionEnd',
                component: _pages_session_messages_session_messages__WEBPACK_IMPORTED_MODULE_7__["AddonModChatSessionMessagesPage"],
            },
        ],
    },
];
const routes = [
    ...Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_9__["conditionalRoutes"])(mobileRoutes, () => _services_screen__WEBPACK_IMPORTED_MODULE_8__["CoreScreen"].isMobile),
    ...Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_9__["conditionalRoutes"])(tabletRoutes, () => _services_screen__WEBPACK_IMPORTED_MODULE_8__["CoreScreen"].isTablet),
];
let AddonModChatLazyModule = class AddonModChatLazyModule {
};
AddonModChatLazyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_4__["AddonModChatComponentsModule"],
        ],
        declarations: [
            _pages_index_index__WEBPACK_IMPORTED_MODULE_5__["AddonModChatIndexPage"],
            _pages_chat_chat__WEBPACK_IMPORTED_MODULE_6__["AddonModChatChatPage"],
            _pages_sessions_sessions__WEBPACK_IMPORTED_MODULE_10__["AddonModChatSessionsPage"],
            _pages_session_messages_session_messages__WEBPACK_IMPORTED_MODULE_7__["AddonModChatSessionMessagesPage"],
        ],
    })
], AddonModChatLazyModule);



/***/ }),

/***/ "./src/addons/mod/chat/pages/chat/chat.scss":
/*!**************************************************!*\
  !*** ./src/addons/mod/chat/pages/chat/chat.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n * App Global variables SCSS\n * ----------------------------------------------------------------------------\n * Place here the different files you should import to use global variables.\n */\n/*\n * App custom mixins for SCSS\n * ----------------------------------------------------------------------------\n * Place here our custom mixins.\n */\n/*\n * Imported ionic mixins for SCSS\n * ----------------------------------------------------------------------------\n * Place here our custom mixins.\n * Extracted from ionic.mixins.scss\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.mixins.scss\n */\n/*\n * App Custom App variables SCSS\n * ----------------------------------------------------------------------------\n * Place here all custom app variables.\n */\n/*\n * App Global variables SCSS\n * ----------------------------------------------------------------------------\n * Place here all global variables.\n */\n/**\n * Layout Breakpoints\n *\n * https://ionicframework.com/docs/layout/grid#default-breakpoints\n */\n:host ion-content {\n  --background: var(--background-alternative);\n}\n:host ion-content::part(scroll) {\n  padding-bottom: 0 !important;\n}\n:host .addon-messages-discussion-container {\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 15px;\n  background: var(--background-alternative);\n}\n:host .addon-messages-date {\n  font-weight: normal;\n  font-size: 0.9rem;\n}\n:host ion-item.addon-message {\n  border: 0;\n  border-radius: 4px;\n  padding: 0 8px 0 8px;\n  margin: 10px 8px 0 8px;\n  --background: var(--addon-messages-message-bg);\n  background: var(--background);\n  align-self: flex-start;\n  width: 90%;\n  max-width: 90%;\n  --min-height: var(--a11y-min-target-size);\n  position: relative;\n  transition: width 500ms ease-in-out;\n  overflow: visible;\n}\n:host ion-item.addon-message::part(native) {\n  --inner-border-width: 0;\n  --inner-padding-end: 0;\n  padding: 0;\n  margin: 0;\n}\n:host ion-item.addon-message core-format-text > p:only-child {\n  display: inline;\n}\n:host ion-item.addon-message .addon-message-user {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.5rem;\n  margin-top: 0;\n  color: var(--ion-text-color);\n}\n:host ion-item.addon-message .addon-message-user core-user-avatar {\n  display: block;\n  --core-avatar-size: var(--addon-messages-avatar-size);\n  margin: 0;\n}\n:host ion-item.addon-message .addon-message-user div {\n  font-weight: 500;\n  flex-grow: 1;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host ion-item.addon-message .addon-message-user div {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: 0.5rem;\n    padding-inline-start: 0.5rem;\n    -webkit-padding-end: 0.5rem;\n    padding-inline-end: 0.5rem;\n  }\n}\n:host ion-item.addon-message ion-note {\n  color: var(--addon-messages-message-note-text);\n  font-size: var(--addon-messages-message-note-font-size);\n  margin: 0;\n  padding: 0 0 8px 0;\n  align-self: flex-end;\n}\n:host ion-item.addon-message[tappable]:active {\n  --background: var(--addon-messages-message-activated-bg);\n}\n:host ion-item.addon-message ion-label {\n  margin: 0;\n  padding: 8px 0;\n}\n:host ion-item.addon-message .addon-message-text {\n  display: inline-flex;\n}\n:host ion-item.addon-message .addon-message-text * {\n  color: var(--ion-text-color);\n}\n:host ion-item.addon-message .tail {\n  content: \"\";\n  width: 0;\n  height: 0;\n  border: 0.5rem solid transparent;\n  position: absolute;\n  touch-action: none;\n  bottom: 0;\n}\n:host ion-item.addon-message.addon-message-mine {\n  --background: var(--addon-messages-message-mine-bg);\n  align-self: flex-end;\n}\n:host ion-item.addon-message.addon-message-mine[tappable]:active {\n  --background: var(--addon-messages-message-mine-activated-bg);\n}\n:host ion-item.addon-message.addon-message-mine .spinner {\n  float: right;\n  margin-left: 5px;\n  margin-right: -3px;\n  margin-top: 2px;\n  margin-bottom: -2px;\n}\n[dir=rtl] :host ion-item.addon-message.addon-message-mine .spinner {\n  float: left;\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host ion-item.addon-message.addon-message-mine .spinner {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: 5px;\n    margin-inline-start: 5px;\n    -webkit-margin-end: -3px;\n    margin-inline-end: -3px;\n  }\n}\n:host ion-item.addon-message.addon-message-mine .spinner svg {\n  width: 16px;\n  height: 16px;\n}\n:host ion-item.addon-message.addon-message-mine .tail {\n  right: -8px;\n  margin-right: -0.5rem;\n  border-bottom-color: var(--addon-messages-message-mine-bg);\n}\n[dir=rtl] :host ion-item.addon-message.addon-message-mine .tail {\n  left: unset;\n  right: unset;\n  left: -8px;\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host ion-item.addon-message.addon-message-mine .tail {\n    margin-right: unset;\n    -webkit-margin-end: -0.5rem;\n    margin-inline-end: -0.5rem;\n  }\n}\n:host ion-item.addon-message.addon-message-mine[tappable]:active .tail {\n  border-bottom-color: var(--addon-messages-message-mine-activated-bg);\n}\n:host ion-item.addon-message.addon-message-not-mine .tail {\n  border-bottom-color: var(--addon-messages-message-bg);\n  left: -8px;\n  margin-left: -0.5rem;\n}\n[dir=rtl] :host ion-item.addon-message.addon-message-not-mine .tail {\n  left: unset;\n  right: unset;\n  right: -8px;\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host ion-item.addon-message.addon-message-not-mine .tail {\n    margin-left: unset;\n    -webkit-margin-start: -0.5rem;\n    margin-inline-start: -0.5rem;\n  }\n}\n:host ion-item.addon-message[tappable].addon-message-not-mine.activated .tail {\n  border-bottom-color: var(--addon-messages-message-activated-bg);\n}\n:host ion-item.addon-message .addon-messages-delete-button {\n  min-height: initial;\n  line-height: initial;\n  margin-top: 0;\n  margin-bottom: 0;\n  height: var(--a11y-min-target-size) !important;\n  align-self: flex-end;\n}\n:host ion-item.addon-message .addon-messages-delete-button ion-icon {\n  font-size: 1.4em;\n  line-height: initial;\n  color: var(--ion-color-danger);\n}\n:host ion-item.addon-message.addon-message-no-user {\n  margin-top: 8px;\n}\n:host ion-item.addon-message.addon-message-mine + ion-item.addon-message.addon-message-no-user.addon-message-mine,\n:host ion-item.addon-message.addon-message-not-mine + ion-item.addon-message.addon-message-no-user.addon-message-not-mine {\n  padding-top: 0;\n}\n:host ion-item.addon-message.addon-message-mine + ion-item.addon-message.addon-message-no-user.addon-message-mine .item-heading,\n:host ion-item.addon-message.addon-message-not-mine + ion-item.addon-message.addon-message-no-user.addon-message-not-mine .item-heading {\n  margin-bottom: 0;\n}\n:host-context(.ios) ion-footer .toolbar:last-child {\n  padding-bottom: 4px;\n  min-height: 0;\n}\n:host .addon-mod_chat-notice {\n  margin-top: 8px;\n  margin-bottom: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9nbG9iYWxzLnNjc3MiLCJzcmMvdGhlbWUvZ2xvYmFscy5taXhpbnMuc2NzcyIsInNyYy90aGVtZS9nbG9iYWxzLm1peGlucy5pb25pYy5zY3NzIiwic3JjL3RoZW1lL2dsb2JhbHMuY3VzdG9tLnNjc3MiLCJzcmMvdGhlbWUvZ2xvYmFscy52YXJpYWJsZXMuc2NzcyIsInNyYy90aGVtZS9jb21wb25lbnRzL2Rpc2N1c3Npb24uc2NzcyIsInNyYy9hZGRvbnMvbW9kL2NoYXQvcGFnZXMvY2hhdC9jaGF0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7RUFBQTtBQ0FBOzs7O0VBQUE7QUNBQTs7Ozs7O0VBQUE7QUNBQTs7OztFQUFBO0FDQUE7Ozs7RUFBQTtBQXVGQTs7OztFQUFBO0FDcEZJO0VBQ0ksMkNBQUE7QUM4QlI7QUQ1QlE7RUFDSSw0QkFBQTtBQzhCWjtBRDFCSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EseUNBQUE7QUM0QlI7QUR6Qkk7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0FDMkJSO0FEdkJJO0VBQ0ksU0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLDhDQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EseUNBQUE7RUFDQSxrQkFBQTtFSkxKLG1DQUFBO0VJUUksaUJBQUE7QUM0QlI7QUQxQlE7RUFDSSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUM0Qlo7QUR6QlE7RUFDSSxlQUFBO0FDMkJaO0FEeEJRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0FDMEJaO0FEeEJZO0VBQ0ksY0FBQTtFQUNBLHFEQUFBO0VBQ0EsU0FBQTtBQzBCaEI7QUR2Qlk7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUgyUFIsb0JHMVBvQztFSDJQcEMscUJHM1BvQztFQUM1QixnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUMwQmhCO0FKaU9ZO0VBQ0k7SUFFUSxtQkFBQTtJQUdBLG9CQUFBO0lBR0osNkJHdlF3QjtJSHdReEIsNEJHeFF3QjtJSHlReEIsMkJHelF3QjtJSDBReEIsMEJHMVF3QjtFQ3NDMUM7QUFDRjtBRGhDUTtFQUNJLDhDQUFBO0VBQ0EsdURBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ2tDWjtBRC9CUTtFQUNJLHdEQUFBO0FDaUNaO0FEOUJRO0VBQ0ksU0FBQTtFQUNBLGNBQUE7QUNnQ1o7QUQ3QlE7RUFDSSxvQkFBQTtBQytCWjtBRDlCWTtFQUNJLDRCQUFBO0FDZ0NoQjtBRDVCUTtFQUNJLFdBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUM4Qlo7QUQxQlE7RUFDSSxtREFBQTtFQUNBLG9CQUFBO0FDNEJaO0FEMUJZO0VBQ0ksNkRBQUE7QUM0QmhCO0FEekJZO0VINFhBLFlBQUE7RUFwTEosZ0JHdE15QztFSHVNekMsa0JHdk02QjtFSHVPakMsZUd2TzRCO0VId081QixtQkd4T3VDO0FDOEIzQztBSnVIUTtFQXdPSSxXQUFBO0FJNVZaO0FKeUtZO0VBQ0k7SUFFUSxrQkFBQTtJQUdBLG1CQUFBO0lBR0oseUJHbk42QjtJSG9ON0Isd0JHcE42QjtJSHFON0Isd0JHck5pQjtJSHNOakIsdUJHdE5pQjtFQzJDbkM7QUFDRjtBRDFDZ0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQzRDcEI7QUR4Q1k7RUhvUkEsV0duUjRCO0VIOExoQyxxQkc3THlDO0VBQ2pDLDBEQUFBO0FDMENoQjtBSmdHUTtFQTBJSSxXQUFBO0VBQ0EsWUFBQTtFQUVBLFVHelI0QjtBQ2lEeEM7QUpnSlk7RUFDSTtJQUtRLG1CQUFBO0lBS0osMkJHM002QjtJSDRNN0IsMEJHNU02QjtFQ3VEL0M7QUFDRjtBRHBEWTtFQUNJLG9FQUFBO0FDc0RoQjtBRGxEUTtFQUNJLHFEQUFBO0VIdVFBLFVHdFFvQztFSGlMeEMsb0JHaEwrQjtBQ29EdkM7QUoyRVE7RUEwSUksV0FBQTtFQUNBLFlBQUE7RUFHQSxXRzlRb0M7QUMwRGhEO0FKMkhZO0VBQ0k7SUFFUSxrQkFBQTtJQU1KLDZCRzdMbUI7SUg4TG5CLDRCRzlMbUI7RUNnRXJDO0FBQ0Y7QUQ5RFE7RUFDSSwrREFBQTtBQ2dFWjtBRDdEUTtFQUNJLG1CQUFBO0VBQ0Esb0JBQUE7RUh3TVIsYUd2TXdCO0VId014QixnQkd4TWlDO0VBQ3pCLDhDQUFBO0VBQ0Esb0JBQUE7QUNnRVo7QUQ5RFk7RUFDSSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsOEJBQUE7QUNnRWhCO0FENURRO0VBQ0ksZUFBQTtBQzhEWjtBRDFESTs7RUFLSSxjQUFBO0FDeURSO0FENURROztFQUNJLGdCQUFBO0FDK0RaO0FEdkRJO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0FDMERSO0FBN09JO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FBZ1BSIiwiZmlsZSI6InNyYy9hZGRvbnMvbW9kL2NoYXQvcGFnZXMvY2hhdC9jaGF0LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQXBwIEdsb2JhbCB2YXJpYWJsZXMgU0NTU1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogUGxhY2UgaGVyZSB0aGUgZGlmZmVyZW50IGZpbGVzIHlvdSBzaG91bGQgaW1wb3J0IHRvIHVzZSBnbG9iYWwgdmFyaWFibGVzLlxuICovXG5cbiRmb250LXBhdGg6IFwiLi4vYXNzZXRzL2ZvbnRzXCI7XG4kYXNzZXRzLXBhdGg6IFwiLi4vYXNzZXRzXCI7XG5AaW1wb3J0IFwiLi9nbG9iYWxzLm1peGlucy5zY3NzXCI7XG5AaW1wb3J0IFwiLi9nbG9iYWxzLm1peGlucy5pb25pYy5zY3NzXCI7XG5AaW1wb3J0IFwiLi9nbG9iYWxzLmN1c3RvbS5zY3NzXCI7XG5AaW1wb3J0IFwiLi9nbG9iYWxzLnZhcmlhYmxlcy5zY3NzXCI7XG4iLCIvKlxuICogQXBwIGN1c3RvbSBtaXhpbnMgZm9yIFNDU1NcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFBsYWNlIGhlcmUgb3VyIGN1c3RvbSBtaXhpbnMuXG4gKi9cblxuIEBtaXhpbiBjb3JlLWZvY3VzKCkge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICY6OmFmdGVyIHtcbiAgICAgICAgQGluY2x1ZGUgcG9zaXRpb24oMCwgMCwgMCwgMCk7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgQGluY2x1ZGUgY29yZS1mb2N1cy1zdHlsZSgpO1xuICAgIH1cbiB9XG5cbiBAbWl4aW4gY29yZS1mb2N1cy1zdHlsZSgpIHtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgdmFyKC0tYTExeS1mb2N1cy13aWR0aCkgMXB4IHZhcigtLWExMXktZm9jdXMtY29sb3IpO1xuICAgIC8vIFRoaWNrZXIgb3B0aW9uOlxuICAgIC8vIGJvcmRlcjogdmFyKC0tYTExeS1mb2N1cy13aWR0aCkgc29saWQgdmFyKC0tYTExeS1mb2N1cy1jb2xvcik7XG59XG5cbkBtaXhpbiBjb3JlLXRyYW5zaXRpb24oJHdoZXJlOiBhbGwsICR0aW1lOiA1MDBtcykge1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogJHdoZXJlICR0aW1lIGVhc2UtaW4tb3V0O1xuICAgIC1tb3otdHJhbnNpdGlvbjogJHdoZXJlICR0aW1lIGVhc2UtaW4tb3V0O1xuICAgIC1tcy10cmFuc2l0aW9uOiAkd2hlcmUgJHRpbWUgZWFzZS1pbi1vdXQ7XG4gICAgLW8tdHJhbnNpdGlvbjogJHdoZXJlICR0aW1lIGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zaXRpb246ICR3aGVyZSAkdGltZSBlYXNlLWluLW91dDtcbn1cblxuQG1peGluIHB1c2gtYXJyb3ctY29sb3IoJGNvbG9yOiBkZWRlZGUsICRmbGlwLXJ0bDogZmFsc2UpIHtcbiAgICAkc3ZnOiBcIjxzdmclMjB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTIwdmlld0JveD0nMCUyMDAlMjAxMiUyMDIwJz48cGF0aCUyMGQ9J00yLDIwbC0yLTJsOC04TDAsMmwyLTJsMTAsMTBMMiwyMHonJTIwZmlsbD0nJTIzI3skY29sb3J9Jy8+PC9zdmc+XCI7XG4gICAgQGlmICRmbGlwLXJ0bCAhPSB0cnVlIHtcbiAgICAgICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsI3skc3ZnfVwiKTtcbiAgICAgICAgfVxuICAgIH0gQGVsc2Uge1xuICAgICAgICAkZmxpcHBlZC1zdmc6IFwiPHN2ZyUyMHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclMjB2aWV3Qm94PScwJTIwMCUyMDEyJTIwMjAnPjxwYXRoJTIwdHJhbnNmb3JtPSd0cmFuc2xhdGUoMjAsJTIwMCklMjBzY2FsZSgtMSwlMjAxKSclMjBkPSdNMiwyMGwtMi0ybDgtOEwwLDJsMi0ybDEwLDEwTDIsMjB6JyUyMGZpbGw9JyUyMyN7JGNvbG9yfScvPjwvc3ZnPlwiO1xuXG4gICAgICAgIEBpbmNsdWRlIGx0ciAoKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwjeyRzdmd9XCIpO1xuICAgICAgICB9XG4gICAgICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCN7JGZsaXBwZWQtc3ZnfVwiKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1peGluIGJvcmRlci1zdGFydCgkcHgsICR0eXBlOiBudWxsLCAkY29sb3I6IG51bGwpIHtcbiAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAkcHggJHR5cGUgJGNvbG9yO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAkcHggJHR5cGUgJGNvbG9yO1xuICAgIH1cbn1cblxuXG5AbWl4aW4gYm9yZGVyLWVuZCgkcHgsICR0eXBlOiBudWxsLCAkY29sb3I6IG51bGwpIHtcbiAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICAgIGJvcmRlci1yaWdodDogJHB4ICR0eXBlICRjb2xvcjtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAkcHggJHR5cGUgJGNvbG9yO1xuICAgIH1cbn1cblxuQG1peGluIHNhZmUtYXJlYS1ib3JkZXItc3RhcnQoJHB4LCAkdHlwZSwgJGNvbG9yKSB7XG4gICAgJHNhZmUtYXJlYS1wb3NpdGlvbjogY2FsYyhjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtbGVmdCkgKyAjeyRweH0pO1xuICAgICRzYWZlLWFyZWEtcG9zaXRpb24tZW52OiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtbGVmdCkgKyAjeyRweH0pO1xuXG4gICAgQGluY2x1ZGUgYm9yZGVyLXN0YXJ0KCRweCwgJHR5cGUsICRjb2xvcik7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAgICAgQGluY2x1ZGUgYm9yZGVyLXN0YXJ0KCRzYWZlLWFyZWEtcG9zaXRpb24sICR0eXBlLCAkY29sb3IpO1xuICAgICAgICBAaW5jbHVkZSBib3JkZXItc3RhcnQoJHNhZmUtYXJlYS1wb3NpdGlvbi1lbnYsICR0eXBlLCAkY29sb3IpO1xuICAgIH1cbn1cblxuQG1peGluIHNhZmUtYXJlYS1ib3JkZXItZW5kKCRweCwgJHR5cGUsICRjb2xvcikge1xuICAgICRzYWZlLWFyZWEtcG9zaXRpb246IGNhbGMoY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LXJpZ2h0KSArICN7JHB4fSk7XG4gICAgJHNhZmUtYXJlYS1wb3NpdGlvbi1lbnY6IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC1yaWdodCkgKyAjeyRweH0pO1xuXG4gICAgQGluY2x1ZGUgYm9yZGVyLWVuZCgkcHgsICR0eXBlLCAkY29sb3IpO1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgIEBpbmNsdWRlIGJvcmRlci1lbmQoJHNhZmUtYXJlYS1wb3NpdGlvbiwgJHR5cGUsICRjb2xvcik7XG4gICAgICAgIEBpbmNsdWRlIGJvcmRlci1lbmQoJHNhZmUtYXJlYS1wb3NpdGlvbi1lbnYsICR0eXBlLCAkY29sb3IpO1xuICAgIH1cbn1cblxuQG1peGluIHNhZmUtYXJlYS1tYXJnaW4taG9yaXpvbnRhbCgkc3RhcnQsICRlbmQ6ICRzdGFydCkge1xuICAgICRzYWZlLWFyZWEtZW5kOiBudWxsO1xuICAgICRzYWZlLWFyZWEtc3RhcnQ6IG51bGw7XG4gICAgJHNhZmUtYXJlYS1zdGFydC1lbnY6IG51bGw7XG4gICAgJHNhZmUtYXJlYS1lbmQtZW52OiBudWxsO1xuXG4gICAgQGlmICgkZW5kKSB7XG4gICAgICAgICRzYWZlLWFyZWEtZW5kOiBjYWxjKGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC1yaWdodCkgKyAjeyRlbmR9KTtcbiAgICAgICAgJHNhZmUtYXJlYS1lbmQtZW52OiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtcmlnaHQpICsgI3skZW5kfSk7XG4gICAgfVxuICAgIEBpZiAoJHN0YXJ0KSB7XG4gICAgICAgICRzYWZlLWFyZWEtc3RhcnQ6IGNhbGMoY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LWxlZnQpICsgI3skc3RhcnR9KTtcbiAgICAgICAgJHNhZmUtYXJlYS1zdGFydC1lbnY6IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC1sZWZ0KSArICN7JHN0YXJ0fSk7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgbWFyZ2luLWhvcml6b250YWwoJHN0YXJ0LCAkZW5kKTtcblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgIEBpbmNsdWRlIG1hcmdpbi1ob3Jpem9udGFsKCRzYWZlLWFyZWEtc3RhcnQsICRzYWZlLWFyZWEtZW5kKTtcbiAgICAgICAgQGluY2x1ZGUgbWFyZ2luLWhvcml6b250YWwoJHNhZmUtYXJlYS1zdGFydC1lbnYsICRzYWZlLWFyZWEtZW5kLWVudik7XG4gICAgfVxufVxuXG5AbWl4aW4gc2FmZS1hcmVhLXBhZGRpbmctc3RhcnQoJHN0YXJ0LCAkZW5kKSB7XG4gICAgJHNhZmUtYXJlYS1zdGFydDogY2FsYyhjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtbGVmdCkgKyAjeyRzdGFydH0pO1xuICAgICRzYWZlLWFyZWEtc3RhcnQtZW52OiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtbGVmdCkgKyAjeyRzdGFydH0pO1xuXG4gICAgQGluY2x1ZGUgcGFkZGluZy1ob3Jpem9udGFsKCRzdGFydCwgJGVuZCk7XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICBAaW5jbHVkZSBwYWRkaW5nLWhvcml6b250YWwoJHNhZmUtYXJlYS1zdGFydCwgJGVuZCk7XG4gICAgICAgIEBpbmNsdWRlIHBhZGRpbmctaG9yaXpvbnRhbCgkc2FmZS1hcmVhLXN0YXJ0LWVudiwgJGVuZCk7XG4gICAgfVxufVxuXG5AbWl4aW4gc2FmZS1hcmVhLXBhZGRpbmctZW5kKCRzdGFydCwgJGVuZCkge1xuICAgICRzYWZlLWFyZWEtZW5kOiBjYWxjKGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC1yaWdodCkgKyAjeyRlbmR9KTtcbiAgICAkc2FmZS1hcmVhLWVuZC1lbnY6IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC1yaWdodCkgKyAjeyRlbmR9KTtcblxuICAgIEBpbmNsdWRlIHBhZGRpbmctaG9yaXpvbnRhbCgkc3RhcnQsICRlbmQpO1xuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAgICAgQGluY2x1ZGUgcGFkZGluZy1ob3Jpem9udGFsKCRzdGFydCwgJHNhZmUtYXJlYS1lbmQpO1xuICAgICAgICBAaW5jbHVkZSBwYWRkaW5nLWhvcml6b250YWwoJHN0YXJ0LCAkc2FmZS1hcmVhLWVuZC1lbnYpO1xuICAgIH1cbn1cblxuQG1peGluIHNhZmUtYXJlYS1wb3NpdGlvbigkdG9wOiBudWxsLCAkZW5kOiBudWxsLCAkYm90dG9tOiBudWxsLCAkc3RhcnQ6IG51bGwpIHtcbiAgICBAaW5jbHVkZSBwb3NpdGlvbi1ob3Jpem9udGFsKCRzdGFydCwgJGVuZCk7XG4gICAgQGluY2x1ZGUgc2FmZS1wb3NpdGlvbi1ob3Jpem9udGFsKCRzdGFydCwgJGVuZCk7XG4gICAgdG9wOiAkdG9wO1xuICAgIGJvdHRvbTogJGJvdHRvbTtcbn1cblxuQG1peGluIGNvcmUtaGVhZGluZ3MoKSB7XG4gICAgaDEge1xuICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgfVxuICAgIGgyLCAuaXRlbS1oZWFkaW5nIHtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgIH1cbiAgICBoMyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICB9XG4gICAgaDQge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuICAgIGg1IHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgIH1cbiAgICBoNiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG59XG5cbkBtaXhpbiBjb3JlLWFzLWl0ZW1zKCkge1xuICAgIC5pdGVtLW1kLml0ZW0tYmxvY2sgPiAuaXRlbS1pbm5lciB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkbGlzdC1tZC1ib3JkZXItY29sb3I7XG4gICAgfVxuXG4gICAgLml0ZW0taW9zLml0ZW0tYmxvY2sgPiAuaXRlbS1pbm5lciB7XG4gICAgICAgIGJvcmRlci1ib3R0b206ICRoYWlybGluZXMtd2lkdGggc29saWQgJGxpc3QtaW9zLWJvcmRlci1jb2xvcjtcbiAgICB9XG5cbiAgICAmOmxhc3QtY2hpbGQgLml0ZW0gPiAuaXRlbS1pbm5lciB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgfVxufVxuXG5AbWl4aW4gY29yZS1pdGVtcygpIHtcbiAgICAmLml0ZW0tbWQuaXRlbS1ibG9jayA+IC5pdGVtLWlubmVyIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRsaXN0LW1kLWJvcmRlci1jb2xvcjtcbiAgICB9XG5cbiAgICAmLml0ZW0taW9zLml0ZW0tYmxvY2sgPiAuaXRlbS1pbm5lciB7XG4gICAgICAgIGJvcmRlci1ib3R0b206ICRoYWlybGluZXMtd2lkdGggc29saWQgJGxpc3QtaW9zLWJvcmRlci1jb2xvcjtcbiAgICB9XG5cbiAgICAmLml0ZW0tYmxvY2s6bGFzdC1jaGlsZCA+IC5pdGVtLWlubmVyIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgICB9XG59XG5cbkBtaXhpbiBkYXJrbW9kZSgpIHtcbiAgICAkcm9vdDogI3smfTtcblxuICAgIEBhdC1yb290IGJvZHkuZGFyayB7XG4gICAgICAgICN7JHJvb3R9IHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWl4aW4gaG9yaXpvbnRhbF9zY3JvbGxfaXRlbSgkd2lkdGgsICRtaW4td2lkdGgsICRtYXgtd2lkdGgpIHtcbiAgICBmbGV4OiAwIDAgJHdpZHRoO1xuICAgIG1pbi13aWR0aDogJG1pbi13aWR0aDtcbiAgICBtYXgtd2lkdGg6ICRtYXgtd2lkdGg7XG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbiAgICBkaXNwbGF5OiBibG9jaztcblxuICAgIGlvbi1jYXJkIHtcbiAgICAgICAgLS12ZXJ0aWNhbC1tYXJnaW46IDEwcHg7XG4gICAgICAgIC0taG9yaXpvbnRhbC1tYXJnaW46IDEwcHg7XG5cbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIHZhcigtLXZlcnRpY2FsLW1hcmdpbikgLSB2YXIoLS12ZXJ0aWNhbC1tYXJnaW4pKTtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSB2YXIoLS12ZXJ0aWNhbC1tYXJnaW4pIC0gdmFyKC0tdmVydGljYWwtbWFyZ2luKSk7XG4gICAgICAgIG1hcmdpbjogdmFyKC0tdmVydGljYWwtbWFyZ2luKSB2YXIoLS1ob3Jpem9udGFsLW1hcmdpbik7XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gICAgICAgICAgICAtLWhvcml6b250YWwtbWFyZ2luOiA2cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuaW9uLXRleHQtd3JhcCBpb24tbGFiZWwge1xuICAgICAgICAuaXRlbS1oZWFkaW5nLCBoMiwgcCB7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8vIENvbG9yIG1peGlucy5cbkBmdW5jdGlvbiBnZXRfYnJpZ2h0bmVzcygkY29sb3IpIHtcbiAgICBAcmV0dXJuIChyZWQoJGNvbG9yKSArIGdyZWVuKCRjb2xvcikgKyBibHVlKCRjb2xvcikpIC8gMztcbn1cblxuQGZ1bmN0aW9uIGdldF9jb250cmFzdF9jb2xvcigkY29sb3IpIHtcbiAgICAkYnJpZ2h0bmVzczogZ2V0X2JyaWdodG5lc3MoJGNvbG9yKTtcblxuICAgIEByZXR1cm4gaWYoJGJyaWdodG5lc3MgPCAxMjcsIHdoaXRlLCBibGFjayk7XG59XG4iLCIvKlxuICogSW1wb3J0ZWQgaW9uaWMgbWl4aW5zIGZvciBTQ1NTXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBQbGFjZSBoZXJlIG91ciBjdXN0b20gbWl4aW5zLlxuICogRXh0cmFjdGVkIGZyb20gaW9uaWMubWl4aW5zLnNjc3NcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2lvbmljLWZyYW1ld29yay9ibG9iL21hc3Rlci9jb3JlL3NyYy90aGVtZXMvaW9uaWMubWl4aW5zLnNjc3NcbiAqL1xuXG4vLyBSZXNwb25zaXZlIE1peGluc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIENyZWF0ZXMgYSBmaXhlZCB3aWR0aCBmb3IgdGhlIGdyaWQgYmFzZWQgb24gdGhlIHNjcmVlbiBzaXplXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBtYWtlLWdyaWQtd2lkdGhzKCR3aWR0aHM6ICRncmlkLXdpZHRocywgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XG4gIEBlYWNoICRicmVha3BvaW50LCAkd2lkdGggaW4gJHdpZHRocyB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkYnJlYWtwb2ludCwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICB3aWR0aDogJHdpZHRoO1xuICAgIH1cbiAgfVxuXG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLy8gQWRkcyBwYWRkaW5nIHRvIHRoZSBlbGVtZW50IGJhc2VkIG9uIGJyZWFrcG9pbnRzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBtYWtlLWJyZWFrcG9pbnQtcGFkZGluZygkcGFkZGluZ3MpIHtcbiAgQGVhY2ggJGJyZWFrcG9pbnQgaW4gbWFwLWtleXMoJHBhZGRpbmdzKSB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkYnJlYWtwb2ludCkge1xuICAgICAgJHBhZGRpbmc6IG1hcC1nZXQoJHBhZGRpbmdzLCAkYnJlYWtwb2ludCk7XG5cbiAgICAgIEBpbmNsdWRlIHBhZGRpbmcoJHBhZGRpbmcpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBHZXRzIHRoZSBhY3RpdmUgY29sb3IncyBjc3MgdmFyaWFibGUgZnJvbSBhIHZhcmlhdGlvbi4gQWxwaGEgaXMgb3B0aW9uYWwuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRXhhbXBsZSB1c2FnZTpcbi8vIGN1cnJlbnQtY29sb3IoYmFzZSkgPT4gdmFyKC0taW9uLWNvbG9yLWJhc2UpXG4vLyBjdXJyZW50LWNvbG9yKGNvbnRyYXN0LCAwLjEpID0+IHJnYmEodmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYiksIDAuMSlcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AZnVuY3Rpb24gY3VycmVudC1jb2xvcigkdmFyaWF0aW9uLCAkYWxwaGE6IG51bGwpIHtcbiAgQGlmICRhbHBoYSA9PSBudWxsIHtcbiAgICBAcmV0dXJuIHZhcigtLWlvbi1jb2xvci0jeyR2YXJpYXRpb259KTtcbiAgfSBAZWxzZSB7XG4gICAgQHJldHVybiByZ2JhKHZhcigtLWlvbi1jb2xvci0jeyR2YXJpYXRpb259LXJnYiksICN7JGFscGhhfSk7XG4gIH1cbn1cblxuLy8gTWl4ZXMgYSBjb2xvciB3aXRoIGJsYWNrIHRvIGNyZWF0ZSBpdHMgc2hhZGUuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQGZ1bmN0aW9uIGdldC1jb2xvci1zaGFkZSgkY29sb3IpIHtcbiAgQHJldHVybiBtaXgoIzAwMCwgJGNvbG9yLCAxMiUpO1xufVxuXG4vLyBNaXhlcyBhIGNvbG9yIHdpdGggd2hpdGUgdG8gY3JlYXRlIGl0cyB0aW50LlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBmdW5jdGlvbiBnZXQtY29sb3ItdGludCgkY29sb3IpIHtcbiAgQHJldHVybiBtaXgoI2ZmZiwgJGNvbG9yLCAxMCUpO1xufVxuXG4vLyBDb252ZXJ0cyBhIGNvbG9yIHRvIGEgY29tbWEgc2VwYXJhdGVkIHJnYi5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AZnVuY3Rpb24gY29sb3ItdG8tcmdiLWxpc3QoJGNvbG9yKSB7XG4gIEByZXR1cm4gI3tyZWQoJGNvbG9yKX0sI3tncmVlbigkY29sb3IpfSwje2JsdWUoJGNvbG9yKX07XG59XG5cblxuIC8vIElvbmljIENvbG9yc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEdlbmVyYXRlcyB0aGUgY29sb3IgY2xhc3NlcyBhbmQgdmFyaWFibGVzIGJhc2VkIG9uIHRoZVxuLy8gY29sb3JzIG1hcFxuXG5AbWl4aW4gZ2VuZXJhdGUtY29sb3IoJGNvbG9yLW5hbWUsICRjb2xvcnMpIHtcbiAgICAkYmFzZTogbWFwLWdldCgkY29sb3JzLCAkY29sb3ItbmFtZSk7XG5cbiAgICAkY29udHJhc3Q6IGdldF9jb250cmFzdF9jb2xvcigkYmFzZSk7XG4gICAgJHNoYWRlOiBnZXQtY29sb3Itc2hhZGUoJGJhc2UpO1xuICAgICR0aW50OiBnZXQtY29sb3ItdGludCgkYmFzZSk7XG5cbiAgICAtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfTogdmFyKC0tI3skY29sb3ItbmFtZX0sICN7JGJhc2V9KTtcbiAgICAtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1iYXNlOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0pO1xuICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LXJnYjogI3tjb2xvci10by1yZ2ItbGlzdCgkYmFzZSl9O1xuICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LWNvbnRyYXN0OiAjeyRjb250cmFzdH07XG4gICAgLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tY29udHJhc3QtcmdiOiAje2NvbG9yLXRvLXJnYi1saXN0KCRjb250cmFzdCl9O1xuICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LXNoYWRlOiAjeyRzaGFkZX07XG4gICAgLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tdGludDogI3skdGludH07XG5cbiAgICAuaW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9IHtcbiAgICAgICAgLS1pb24tY29sb3I6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfSk7XG4gICAgICAgIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1iYXNlKTtcbiAgICAgICAgLS1pb24tY29sb3ItcmdiOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tcmdiKTtcbiAgICAgICAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1jb250cmFzdCk7XG4gICAgICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LWNvbnRyYXN0LXJnYik7XG4gICAgICAgIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tc2hhZGUpO1xuICAgICAgICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tdGludCk7XG4gICAgfVxufVxuXG5AbWl4aW4gaW5wdXQtY292ZXIoKSB7XG4gICAgQGluY2x1ZGUgcG9zaXRpb24oMCwgbnVsbCwgbnVsbCwgMCk7XG4gICAgQGluY2x1ZGUgbWFyZ2luKDApO1xuXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgYm9yZGVyOiAwO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcblxuICAgICY6Oi1tb3otZm9jdXMtaW5uZXIge1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgfVxufVxuXG5AbWl4aW4gdGV4dC1pbmhlcml0KCkge1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICBmb250LXN0eWxlOiBpbmhlcml0O1xuICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICAgIGxldHRlci1zcGFjaW5nOiBpbmhlcml0O1xuICAgIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcbiAgICB0ZXh0LWluZGVudDogaW5oZXJpdDtcbiAgICB0ZXh0LW92ZXJmbG93OiBpbmhlcml0O1xuICAgIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xuICAgIHRleHQtYWxpZ246IGluaGVyaXQ7XG4gICAgd2hpdGUtc3BhY2U6IGluaGVyaXQ7XG4gICAgY29sb3I6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBidXR0b24tc3RhdGUoKSB7XG4gICAgQGluY2x1ZGUgcG9zaXRpb24oMCwgMCwgMCwgMCk7XG5cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICBjb250ZW50OiBcIlwiO1xuXG4gICAgb3BhY2l0eTogMDtcbn1cblxuLy8gRm9udCBzbW9vdGhpbmdcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbkBtaXhpbiBmb250LXNtb290aGluZygpIHtcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG4vLyBHZXQgdGhlIGtleSBmcm9tIGEgbWFwIGJhc2VkIG9uIHRoZSBpbmRleFxuQGZ1bmN0aW9uIGluZGV4LXRvLWtleSgkbWFwLCAkaW5kZXgpIHtcbiAgICAka2V5czogbWFwLWtleXMoJG1hcCk7XG5cbiAgICBAcmV0dXJuIG50aCgka2V5cywgJGluZGV4KTtcbn1cblxuXG4vLyBCcmVha3BvaW50IE1peGluc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIEJyZWFrcG9pbnQgdmlld3BvcnQgc2l6ZXMgYW5kIG1lZGlhIHF1ZXJpZXMuXG4vL1xuLy8gQnJlYWtwb2ludHMgYXJlIGRlZmluZWQgYXMgYSBtYXAgb2YgKG5hbWU6IG1pbmltdW0gd2lkdGgpLCBvcmRlciBmcm9tIHNtYWxsIHRvIGxhcmdlOlxuLy9cbi8vICAgICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweClcbi8vXG4vLyBUaGUgbWFwIGRlZmluZWQgaW4gdGhlIGAkc2NyZWVuLWJyZWFrcG9pbnRzYCBnbG9iYWwgdmFyaWFibGUgaXMgdXNlZCBhcyB0aGUgYCRicmVha3BvaW50c2AgYXJndW1lbnQgYnkgZGVmYXVsdC5cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIE1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1pbihzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDU3NnB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xuICAgICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG5cbiAgICBAcmV0dXJuIGlmKCRuYW1lICE9IGluZGV4LXRvLWtleSgkYnJlYWtwb2ludHMsIDEpLCAkbWluLCBudWxsKTtcbn1cblxuLy8gUmV0dXJucyBhIGJsYW5rIHN0cmluZyBpZiBzbWFsbGVzdCBicmVha3BvaW50LCBvdGhlcndpc2UgcmV0dXJucyB0aGUgbmFtZSB3aXRoIGEgZGFzaCBpbmZyb250LlxuLy8gVXNlZnVsIGZvciBtYWtpbmcgcmVzcG9uc2l2ZSB1dGlsaXRpZXMuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeCh4cywgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiXCIgIChSZXR1cm5zIGEgYmxhbmsgc3RyaW5nKVxuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiLXNtXCJcbkBmdW5jdGlvbiBicmVha3BvaW50LWluZml4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcbiAgICBAcmV0dXJuIGlmKGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpID09IG51bGwsIFwiXCIsIFwiLSN7JG5hbWV9XCIpO1xufVxuXG4vLyBNZWRpYSBvZiBhdCBsZWFzdCB0aGUgbWluaW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIHdpZGVyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xuICAgICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICAgIEBpZiAkbWluIHtcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuLy8gTmFtZSBvZiB0aGUgbmV4dCBicmVha3BvaW50LCBvciBudWxsIGZvciB0aGUgbGFzdCBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAkYnJlYWtwb2ludC1uYW1lczogKHhzIHNtIG1kIGxnIHhsKSlcbi8vICAgIG1kXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMsICRicmVha3BvaW50LW5hbWVzOiBtYXAta2V5cygkYnJlYWtwb2ludHMpKSB7XG4gICAgJG46IGluZGV4KCRicmVha3BvaW50LW5hbWVzLCAkbmFtZSk7XG4gICAgQHJldHVybiBpZigkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSwgbnVsbCk7XG59XG5cbi8vIE1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIHJlZHVjZWQgYnkgMC4wMnB4IHRvIHdvcmsgYXJvdW5kIHRoZSBsaW1pdGF0aW9ucyBvZlxuLy8gYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxuLy9cbi8vIFNlZSBodHRwczovL3d3dy53My5vcmcvVFIvbWVkaWFxdWVyaWVzLTQvI21xLW1pbi1tYXhcbi8vIFVzZXMgMC4wMnB4IHJhdGhlciB0aGFuIDAuMDFweCB0byB3b3JrIGFyb3VuZCBhIGN1cnJlbnQgcm91bmRpbmcgYnVnIGluIFNhZmFyaS5cdC8vIFVzZXMgMC4wMnB4IHJhdGhlciB0aGFuIDAuMDFweCB0byB3b3JrIGFyb3VuZCBhIGN1cnJlbnQgcm91bmRpbmcgYnVnIGluIFNhZmFyaS5cbi8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc4MjYxXHQvLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWF4KG1kLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNzY3Ljk4cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XG4gICAgJG1heDogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgICBAcmV0dXJuIGlmKCRtYXggYW5kICRtYXggPiAwLCAkbWF4IC0gLjAyLCBudWxsKTtcbn1cblxuLy8gTWVkaWEgb2YgYXQgbW9zdCB0aGUgbWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIGxhcmdlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcbiAgICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgICBAaWYgJG1heCB7XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2Uge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cblxuLy8gVGV4dCBEaXJlY3Rpb24gLSBsdHIgLyBydGxcbi8vXG4vLyBDU1MgZGVmYXVsdHMgdG8gdXNlIHRoZSBsdHIgY3NzLCBhbmQgYWRkcyBbZGlyPXJ0bF0gc2VsZWN0b3JzXG4vLyB0byBvdmVycmlkZSBsdHIgZGVmYXVsdHMuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbkBtaXhpbiBtdWx0aS1kaXIoKSB7XG4gICAgQGNvbnRlbnQ7XG5cbiAgICAvLyAkcm9vdDogI3smfTtcbiAgICAvLyBAYXQtcm9vdCBbZGlyXSB7XG4gICAgLy8gICAjeyRyb290fSB7XG4gICAgLy8gICAgIEBjb250ZW50O1xuICAgIC8vICAgfVxuICAgIC8vIH1cbn1cblxuQG1peGluIHJ0bCgpIHtcbiAgICAkcm9vdDogI3smfTtcblxuICAgIEBhdC1yb290IFtkaXI9cnRsXSB7XG4gICAgICAgICN7JHJvb3R9IHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWl4aW4gbHRyKCkge1xuICAgIEBjb250ZW50O1xufVxuXG5cbi8vIFNWRyBCYWNrZ3JvdW5kIEltYWdlIE1peGluXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN2Z1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIHN2Zy1iYWNrZ3JvdW5kLWltYWdlKCRzdmcsICRmbGlwLXJ0bDogZmFsc2UpIHtcbiAgICAkdXJsOiB1cmwtZW5jb2RlKCRzdmcpO1xuICAgICR2aWV3Qm94OiBzdHItc3BsaXQoc3RyLWV4dHJhY3QoJHN2ZywgXCJ2aWV3Qm94PSdcIiwgXCInXCIpLCBcIiBcIik7XG5cbiAgICBAaWYgJGZsaXAtcnRsICE9IHRydWUgb3IgJHZpZXdCb3ggPT0gbnVsbCB7XG4gICAgICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCN7JHVybH1cIik7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIHtcbiAgICAgICAgJHRyYW5zZm9ybTogXCJ0cmFuc2Zvcm09J3RyYW5zbGF0ZSgje250aCgkdmlld0JveCwgMyl9LCAwKSBzY2FsZSgtMSwgMSknXCI7XG4gICAgICAgICRmbGlwcGVkLXVybDogJHN2ZztcbiAgICAgICAgJGZsaXBwZWQtdXJsOiBzdHItcmVwbGFjZSgkZmxpcHBlZC11cmwsIFwiPHBhdGhcIiwgXCI8cGF0aCAjeyR0cmFuc2Zvcm19XCIpO1xuICAgICAgICAkZmxpcHBlZC11cmw6IHN0ci1yZXBsYWNlKCRmbGlwcGVkLXVybCwgXCI8bGluZVwiLCBcIjxsaW5lICN7JHRyYW5zZm9ybX1cIik7XG4gICAgICAgICRmbGlwcGVkLXVybDogc3RyLXJlcGxhY2UoJGZsaXBwZWQtdXJsLCBcIjxwb2x5Z29uXCIsIFwiPHBvbHlnb24gI3skdHJhbnNmb3JtfVwiKTtcbiAgICAgICAgJGZsaXBwZWQtdXJsOiB1cmwtZW5jb2RlKCRmbGlwcGVkLXVybCk7XG5cbiAgICAgICAgQGluY2x1ZGUgbHRyICgpIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCN7JHVybH1cIik7XG4gICAgICAgIH1cbiAgICAgICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsI3skZmxpcHBlZC11cmx9XCIpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBBZGQgcHJvcGVydHkgaG9yaXpvbnRhbFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBwcm9wZXJ0eS1ob3Jpem9udGFsKCRwcm9wLCAkc3RhcnQsICRlbmQ6ICRzdGFydCkge1xuICAgIEBpZiAkc3RhcnQgPT0gMCBhbmQgJGVuZCA9PSAwIHtcbiAgICAgICAgI3skcHJvcH0tbGVmdDogJHN0YXJ0O1xuICAgICAgICAjeyRwcm9wfS1yaWdodDogJGVuZDtcblxuICAgIH0gQGVsc2Uge1xuICAgICAgICAjeyRwcm9wfS1sZWZ0OiAkc3RhcnQ7XG4gICAgICAgICN7JHByb3B9LXJpZ2h0OiAkZW5kO1xuXG4gICAgICAgIEBhdC1yb290IHtcbiAgICAgICAgICAgIEBzdXBwb3J0cyAoKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCkpIHtcbiAgICAgICAgICAgICAgICAmIHtcbiAgICAgICAgICAgICAgICAgICAgQGlmICRzdGFydCAhPSBudWxsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICN7JHByb3B9LWxlZnQ6IHVuc2V0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIEBpZiAkZW5kICE9IG51bGwge1xuICAgICAgICAgICAgICAgICAgICAgICAgI3skcHJvcH0tcmlnaHQ6IHVuc2V0O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC0jeyRwcm9wfS1zdGFydDogJHN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICAjeyRwcm9wfS1pbmxpbmUtc3RhcnQ6ICRzdGFydDtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC0jeyRwcm9wfS1lbmQ6ICRlbmQ7XG4gICAgICAgICAgICAgICAgICAgICN7JHByb3B9LWlubGluZS1lbmQ6ICRlbmQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBBZGQgcHJvcGVydHkgZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHByb3Bcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b21cbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIEBwYXJhbSB7Ym9vbGVhbn0gJGNvbnRlbnQgaW5jbHVkZSBjb250ZW50IG9yIHVzZSBkZWZhdWx0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gcHJvcGVydHkoJHByb3AsICR0b3AsICRlbmQ6ICR0b3AsICRib3R0b206ICR0b3AsICRzdGFydDogJGVuZCkge1xuICAgIEBpbmNsdWRlIHByb3BlcnR5LWhvcml6b250YWwoJHByb3AsICRzdGFydCwgJGVuZCk7XG4gICAgI3skcHJvcH0tdG9wOiAkdG9wO1xuICAgICN7JHByb3B9LWJvdHRvbTogJGJvdHRvbTtcbn1cblxuLy8gQWRkIHBhZGRpbmcgaG9yaXpvbnRhbFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBwYWRkaW5nLWhvcml6b250YWwoJHN0YXJ0LCAkZW5kOiAkc3RhcnQpIHtcbiAgICBAaW5jbHVkZSBwcm9wZXJ0eS1ob3Jpem9udGFsKHBhZGRpbmcsICRzdGFydCwgJGVuZCk7XG59XG5cbi8vIEFkZCBwYWRkaW5nIGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3Bcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbVxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIHBhZGRpbmcoJHRvcCwgJGVuZDogJHRvcCwgJGJvdHRvbTogJHRvcCwgJHN0YXJ0OiAkZW5kKSB7XG4gICAgQGluY2x1ZGUgcHJvcGVydHkocGFkZGluZywgJHRvcCwgJGVuZCwgJGJvdHRvbSwgJHN0YXJ0KTtcbn1cblxuLy8gQWRkIG1hcmdpbiBob3Jpem9udGFsXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIG1hcmdpbi1ob3Jpem9udGFsKCRzdGFydCwgJGVuZDogJHN0YXJ0KSB7XG4gICAgQGluY2x1ZGUgcHJvcGVydHktaG9yaXpvbnRhbChtYXJnaW4sICRzdGFydCwgJGVuZCk7XG59XG5cbi8vIEFkZCBtYXJnaW4gZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gbWFyZ2luKCR0b3AsICRlbmQ6ICR0b3AsICRib3R0b206ICR0b3AsICRzdGFydDogJGVuZCkge1xuICAgIEBpbmNsdWRlIHByb3BlcnR5KG1hcmdpbiwgJHRvcCwgJGVuZCwgJGJvdHRvbSwgJHN0YXJ0KTtcbn1cblxuLy8gQWRkIHBvc2l0aW9uIGhvcml6b250YWxcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnQgLSBhbW91bnQgdG8gcG9zaXRpb24gc3RhcnRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kIC0gYW1vdW50IHRvIGxlZnQ6IDA7IGVuZFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIHBvc2l0aW9uLWhvcml6b250YWwoJHN0YXJ0OiBudWxsLCAkZW5kOiBudWxsKSB7XG4gICAgQGlmICRzdGFydCA9PSAkZW5kIHtcbiAgICAgICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xuICAgICAgICAgICAgbGVmdDogJHN0YXJ0O1xuICAgICAgICAgICAgcmlnaHQ6ICRlbmQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIHtcbiAgICAgICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgICAgICAgbGVmdDogJHN0YXJ0O1xuICAgICAgICAgICAgcmlnaHQ6ICRlbmQ7XG4gICAgICAgIH1cbiAgICAgICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgICAgICAgbGVmdDogdW5zZXQ7XG4gICAgICAgICAgICByaWdodDogdW5zZXQ7XG5cbiAgICAgICAgICAgIGxlZnQ6ICRlbmQ7XG4gICAgICAgICAgICByaWdodDogJHN0YXJ0O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBBZGQgcG9zaXRpb24gZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gcG9zaXRpb24oJHRvcDogbnVsbCwgJGVuZDogbnVsbCwgJGJvdHRvbTogbnVsbCwgJHN0YXJ0OiBudWxsKSB7XG4gICAgQGluY2x1ZGUgcG9zaXRpb24taG9yaXpvbnRhbCgkc3RhcnQsICRlbmQpO1xuICAgIHRvcDogJHRvcDtcbiAgICBib3R0b206ICRib3R0b207XG59XG5cbi8vIEFkZCBib3JkZXIgZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gYm9yZGVyKCR0b3AsICRlbmQ6ICR0b3AsICRib3R0b206ICR0b3AsICRzdGFydDogJGVuZCkge1xuICAgIEBpbmNsdWRlIHByb3BlcnR5KGJvcmRlciwgJHRvcCwgJGVuZCwgJGJvdHRvbSwgJHN0YXJ0KTtcbn1cblxuLy8gQWRkIGJvcmRlciByYWRpdXMgZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcC1zdGFydFxuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3AtZW5kXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbS1lbmRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tLXN0YXJ0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gYm9yZGVyLXJhZGl1cygkdG9wLXN0YXJ0LCAkdG9wLWVuZDogJHRvcC1zdGFydCwgJGJvdHRvbS1lbmQ6ICR0b3Atc3RhcnQsICRib3R0b20tc3RhcnQ6ICR0b3AtZW5kKSB7XG4gICAgQGlmICR0b3Atc3RhcnQgPT0gJHRvcC1lbmQgYW5kICR0b3Atc3RhcnQgPT0gJGJvdHRvbS1lbmQgYW5kICR0b3Atc3RhcnQgPT0gJGJvdHRvbS1zdGFydCB7XG4gICAgICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICR0b3Atc3RhcnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIHtcbiAgICAgICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJHRvcC1zdGFydDtcbiAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAkdG9wLWVuZDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkYm90dG9tLWVuZDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRib3R0b20tc3RhcnQ7XG4gICAgICAgIH1cblxuICAgICAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkdG9wLWVuZDtcbiAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAkdG9wLXN0YXJ0O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICRib3R0b20tc3RhcnQ7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkYm90dG9tLWVuZDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gQWRkIGRpcmVjdGlvbiBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZGlyIC0gRGlyZWN0aW9uIG9uIExUUlxuQG1peGluIGRpcmVjdGlvbigkZGlyKSB7XG4gICAgJG90aGVyLWRpcjogbnVsbDtcblxuICAgIEBpZiAkZGlyID09IGx0ciB7XG4gICAgICAgICRvdGhlci1kaXI6IHJ0bDtcbiAgICB9IEBlbHNlIHtcbiAgICAgICAgJG90aGVyLWRpcjogbHRyO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgICAgZGlyZWN0aW9uOiAkZGlyO1xuICAgIH1cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICAgIGRpcmVjdGlvbjogJG90aGVyLWRpcjtcbiAgICB9XG59XG5cbi8vIEFkZCBmbG9hdCBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc2lkZVxuLy8gQHBhcmFtIHtzdHJpbmd9ICRkZWNvcmF0b3IgLSAhaW1wb3J0YW50XG5AbWl4aW4gZmxvYXQoJHNpZGUsICRkZWNvcmF0b3I6IG51bGwpIHtcbiAgICBAaWYgJHNpZGUgPT0gc3RhcnQge1xuICAgICAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICAgICAgICBmbG9hdDogbGVmdCAkZGVjb3JhdG9yO1xuICAgICAgICB9XG4gICAgICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodCAkZGVjb3JhdG9yO1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkc2lkZSA9PSBlbmQge1xuICAgICAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQgJGRlY29yYXRvcjtcbiAgICAgICAgfVxuICAgICAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICAgICAgICBmbG9hdDogbGVmdCAkZGVjb3JhdG9yO1xuICAgICAgICB9XG4gICAgfSBAZWxzZSB7XG4gICAgICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgICAgICAgIGZsb2F0OiAkc2lkZSAkZGVjb3JhdG9yO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWl4aW4gYmFja2dyb3VuZC1wb3NpdGlvbigkaG9yaXpvbnRhbCwgJGhvcml6b250YWwtYW1vdW50OiBudWxsLCAkdmVydGljYWw6IG51bGwsICR2ZXJ0aWNhbC1hbW91bnQ6IG51bGwpIHtcbiAgICBAaWYgJGhvcml6b250YWwgPT0gc3RhcnQgb3IgJGhvcml6b250YWwgPT0gZW5kIHtcbiAgICAgICAgJGhvcml6b250YWwtbHRyOiBudWxsO1xuICAgICAgICAkaG9yaXpvbnRhbC1ydGw6IG51bGw7XG4gICAgICAgIEBpZiAkaG9yaXpvbnRhbCA9PSBzdGFydCB7XG4gICAgICAgICAgICAkaG9yaXpvbnRhbC1sdHI6IGxlZnQ7XG4gICAgICAgICAgICAkaG9yaXpvbnRhbC1ydGw6IHJpZ2h0O1xuICAgICAgICB9IEBlbHNlIHtcbiAgICAgICAgICAgICRob3Jpem9udGFsLWx0cjogcmlnaHQ7XG4gICAgICAgICAgICAkaG9yaXpvbnRhbC1ydGw6IGxlZnQ7XG4gICAgICAgIH1cblxuICAgICAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAkaG9yaXpvbnRhbC1sdHIgJGhvcml6b250YWwtYW1vdW50ICR2ZXJ0aWNhbCAkdmVydGljYWwtYW1vdW50O1xuICAgICAgICB9XG4gICAgICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246ICRob3Jpem9udGFsLXJ0bCAkaG9yaXpvbnRhbC1hbW91bnQgJHZlcnRpY2FsICR2ZXJ0aWNhbC1hbW91bnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIHtcbiAgICAgICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogJGhvcml6b250YWwgJGhvcml6b250YWwtYW1vdW50ICR2ZXJ0aWNhbCAkdmVydGljYWwtYW1vdW50O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWl4aW4gdHJhbnNmb3JtLW9yaWdpbigkeC1heGlzLCAkeS1heGlzOiBudWxsKSB7XG4gICAgQGlmICR4LWF4aXMgPT0gc3RhcnQge1xuICAgICAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0ICR5LWF4aXM7XG4gICAgICAgIH1cbiAgICAgICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgJHktYXhpcztcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJHgtYXhpcyA9PSBlbmQge1xuICAgICAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCAkeS1heGlzO1xuICAgICAgICB9XG4gICAgICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgJHktYXhpcztcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJHgtYXhpcyA9PSBsZWZ0IG9yICR4LWF4aXMgPT0gcmlnaHQge1xuICAgICAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAkeC1heGlzICR5LWF4aXM7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIHtcbiAgICAgICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogJHgtYXhpcyAkeS1heGlzO1xuICAgICAgICB9XG4gICAgICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNhbGMoMTAwJSAtICN7JHgtYXhpc30pICR5LWF4aXM7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIEFkZCB0cmFuc2Zvcm0gZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRyYW5zZm9ybXMgLSBjb21tYSBzZXBhcmF0ZWQgbGlzdCBvZiB0cmFuc2Zvcm1zXG5AbWl4aW4gdHJhbnNmb3JtKCR0cmFuc2Zvcm1zLi4uKSB7XG4gICAgJGV4dHJhOiBudWxsO1xuXG4gICAgJHg6IG51bGw7XG4gICAgJGx0ci10cmFuc2xhdGU6IG51bGw7XG4gICAgJHJ0bC10cmFuc2xhdGU6IG51bGw7XG5cbiAgICBAZWFjaCAkdHJhbnNmb3JtIGluICR0cmFuc2Zvcm1zIHtcbiAgICAgICAgQGlmIChzdHItaW5kZXgoJHRyYW5zZm9ybSwgdHJhbnNsYXRlM2QpKSB7XG4gICAgICAgICAgICAkdHJhbnNmb3JtOiBzdHItcmVwbGFjZSgkdHJhbnNmb3JtLCAndHJhbnNsYXRlM2QoJyk7XG4gICAgICAgICAgICAkdHJhbnNmb3JtOiBzdHItcmVwbGFjZSgkdHJhbnNmb3JtLCAnKScpO1xuXG4gICAgICAgICAgICAkY29vcmRpbmF0ZXM6IHN0ci1zcGxpdCgkdHJhbnNmb3JtLCAnLCcpO1xuXG4gICAgICAgICAgICAkeDogbnRoKCRjb29yZGluYXRlcywgMSk7XG4gICAgICAgICAgICAkeTogbnRoKCRjb29yZGluYXRlcywgMik7XG4gICAgICAgICAgICAkejogbnRoKCRjb29yZGluYXRlcywgMyk7XG5cbiAgICAgICAgICAgICRsdHItdHJhbnNsYXRlOiB0cmFuc2xhdGUzZCgkeCwgJHksICR6KTtcbiAgICAgICAgICAgICRydGwtdHJhbnNsYXRlOiB0cmFuc2xhdGUzZChjYWxjKC0xICogI3skeH0pLCAkeSwgJHopO1xuICAgICAgICB9IEBlbHNlIHtcbiAgICAgICAgICAgIEBpZiAkZXh0cmEgPT0gbnVsbCB7XG4gICAgICAgICAgICAgICAgJGV4dHJhOiAkdHJhbnNmb3JtO1xuICAgICAgICAgICAgfSBAZWxzZSB7XG4gICAgICAgICAgICAgICAgJGV4dHJhOiAkZXh0cmEgJHRyYW5zZm9ybTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBpZiAkeCA9PSAnMCcgb3IgJHggPT0gbnVsbCB7XG4gICAgICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogJGx0ci10cmFuc2xhdGUgJGV4dHJhO1xuICAgICAgICB9XG4gICAgfSBAZWxzZSB7XG4gICAgICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogJGx0ci10cmFuc2xhdGUgJGV4dHJhO1xuICAgICAgICB9XG5cbiAgICAgICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiAkcnRsLXRyYW5zbGF0ZSAkZXh0cmE7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvKlxuICogQXBwIEN1c3RvbSBBcHAgdmFyaWFibGVzIFNDU1NcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFBsYWNlIGhlcmUgYWxsIGN1c3RvbSBhcHAgdmFyaWFibGVzLlxuICovXG4gJGJyYW5kLWNvbG9yOiAjMUE5REQ3ICFkZWZhdWx0O1xuIiwiLypcbiAqIEFwcCBHbG9iYWwgdmFyaWFibGVzIFNDU1NcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFBsYWNlIGhlcmUgYWxsIGdsb2JhbCB2YXJpYWJsZXMuXG4gKi9cblxuJGJsYWNrOiAgICAgICAgICAgIzI4MjgyOCAhZGVmYXVsdDsgLy8gSGVhZGluZ3MsIHN0YW5kYXJkIHRleHQuXG4kZ3JheS1kYXJrZXI6ICAgICAjNjg2NTY2ICFkZWZhdWx0O1xuJGdyYXktZGFyazogICAgICAgIzllOWU5ZSAhZGVmYXVsdDtcbiRncmF5OiAgICAgICAgICAgICNkZGRkZGQgIWRlZmF1bHQ7XG4kZ3JheS1saWdodDogICAgICAjZTllOWU5ICFkZWZhdWx0OyAvLyBCYWNrZ3JvdW5kLlxuJGdyYXktbGlnaHRlcjogICAgI2Y1ZjVmNSAhZGVmYXVsdDtcbiR3aGl0ZTogICAgICAgICAgICNmZmZmZmYgIWRlZmF1bHQ7IC8vIEJhY2tncm91bmQsIHJldmVyc2VkIHRleHQuXG5cbiRibHVlOiAgICAgICAgICAgICMwMDY0ZDIgIWRlZmF1bHQ7IC8vIExpbmssIGJhY2tncm91bmQuXG4kYmx1ZS1saWdodDogICAgICBtaXgoJGJsdWUsIHdoaXRlLCAyMCUpICFkZWZhdWx0OyAvLyBCYWNrZ3JvdW5kLlxuJGJsdWUtZGFyazogICAgICAgZGFya2VuKCRibHVlLCAxMCUpICFkZWZhdWx0O1xuXG4kZ3JlZW46ICAgICAgICAgICAjNWU4MTAwICFkZWZhdWx0OyAvLyBBY2NlbnQuXG4kZ3JlZW4tbGlnaHQ6ICAgICBtaXgoJGdyZWVuLCB3aGl0ZSwgMjAlKSAhZGVmYXVsdDtcbiRncmVlbi1kYXJrOiAgICAgIGRhcmtlbigkZ3JlZW4sIDEwJSkgIWRlZmF1bHQ7XG5cbiRyZWQ6ICAgICAgICAgICAgICNjYjNkNGQgIWRlZmF1bHQ7XG4kcmVkLWxpZ2h0OiAgICAgICBtaXgoJHJlZCwgd2hpdGUsIDIwJSkgIWRlZmF1bHQ7XG4kcmVkLWRhcms6ICAgICAgICBkYXJrZW4oJHJlZCwgMTAlKSAhZGVmYXVsdDtcblxuJHllbGxvdzogICAgICAgICAgI2ZiYWQxYSAhZGVmYXVsdDsgLy8gQWNjZW50IChuZXZlciB0ZXh0KS5cbiR5ZWxsb3ctbGlnaHQ6ICAgIG1peCgkeWVsbG93LCB3aGl0ZSwgMjAlKSAhZGVmYXVsdDtcbiR5ZWxsb3ctZGFyazogICAgIG1peCgkeWVsbG93LCBibGFjaywgNDAlKSAhZGVmYXVsdDtcblxuJGJyYW5kLWNvbG9yOiAgICAjZjk4MDEyICFkZWZhdWx0O1xuXG4kdGV4dC1jb2xvcjogICAgICAgICAgICAgICAkYmxhY2sgIWRlZmF1bHQ7XG4kdGV4dC1jb2xvci1yZ2I6ICAgICAgICAgICBjb2xvci10by1yZ2ItbGlzdCgkdGV4dC1jb2xvcikgIWRlZmF1bHQ7XG4kdGV4dC1jb2xvci1kYXJrOiAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kdGV4dC1jb2xvci1kYXJrLXJnYjogICAgICBjb2xvci10by1yZ2ItbGlzdCgkdGV4dC1jb2xvci1kYXJrKSAhZGVmYXVsdDtcblxuJGJhY2tncm91bmQtY29sb3I6ICAgICAgICAgICRncmF5LWxpZ2h0ICFkZWZhdWx0O1xuJGJhY2tncm91bmQtY29sb3ItcmdiOiAgICAgIGNvbG9yLXRvLXJnYi1saXN0KCRiYWNrZ3JvdW5kLWNvbG9yKSAhZGVmYXVsdDtcbiRiYWNrZ3JvdW5kLWNvbG9yLWRhcms6ICAgICBtaXgoI2ZmZmZmZiwgIzAwMDAwMCwgMTAlKSAhZGVmYXVsdDsgLy8gIzFhMWExYVxuJGJhY2tncm91bmQtY29sb3ItZGFyay1yZ2I6IGNvbG9yLXRvLXJnYi1saXN0KCRiYWNrZ3JvdW5kLWNvbG9yLWRhcmspICFkZWZhdWx0O1xuXG4kaW9uLWl0ZW0tYmFja2dyb3VuZDogICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kaW9uLWl0ZW0tYmFja2dyb3VuZC1yZ2I6ICBjb2xvci10by1yZ2ItbGlzdCgkaW9uLWl0ZW0tYmFja2dyb3VuZCkgIWRlZmF1bHQ7XG4kaW9uLWl0ZW0tYmFja2dyb3VuZC1kYXJrOiBtaXgoI2ZmZmZmZiwgIzAwMDAwMCwgMjAlKSAhZGVmYXVsdDsgLy8gIzMzMzMzM1xuJGlvbi1pdGVtLWJhY2tncm91bmQtZGFyay1yZ2I6IGNvbG9yLXRvLXJnYi1saXN0KCRpb24taXRlbS1iYWNrZ3JvdW5kLWRhcmspICFkZWZhdWx0O1xuXG4kcHJpbWFyeTogICAgJGJyYW5kLWNvbG9yICFkZWZhdWx0O1xuJGRhbmdlcjogICAgICRyZWQgIWRlZmF1bHQ7XG4kd2FybmluZzogICAgJHllbGxvdyAhZGVmYXVsdDtcbiRzdWNjZXNzOiAgICAkZ3JlZW4gIWRlZmF1bHQ7XG4kaW5mbzogICAgICAgJGJsdWUgIWRlZmF1bHQ7XG4kbGlnaHQ6ICAgICAgJGdyYXktbGlnaHRlciAhZGVmYXVsdDtcbiRtZWRpdW06ICAgICAkZ3JheS1saWdodCAhZGVmYXVsdDtcbiRkYXJrOiAgICAgICAkYmxhY2sgIWRlZmF1bHQ7XG5cbiRjb2xvcnM6ICAoXG4gICAgcHJpbWFyeTogJHByaW1hcnksXG4gICAgc3VjY2VzczogJHN1Y2Nlc3MsXG4gICAgd2FybmluZzogJHdhcm5pbmcsXG4gICAgZGFuZ2VyOiAgJGRhbmdlcixcbiAgICBpbmZvOiAkaW5mbyxcbiAgICBsaWdodDogJGxpZ2h0LFxuICAgIG1lZGl1bTogJG1lZGl1bSxcbiAgICBkYXJrOiAkZGFya1xuKSAhZGVmYXVsdDtcblxuJHByaW1hcnktZGFyazogICAgJGJyYW5kLWNvbG9yICFkZWZhdWx0O1xuJGRhbmdlci1kYXJrOiAgICAgbWl4KCRyZWQsIHdoaXRlLCA0MCUpICFkZWZhdWx0O1xuJHdhcm5pbmctZGFyazogICAgbWl4KCR5ZWxsb3csIHdoaXRlLCA0MCUpICFkZWZhdWx0O1xuJHN1Y2Nlc3MtZGFyazogICAgbWl4KCRncmVlbiwgd2hpdGUsIDQwJSkgIWRlZmF1bHQ7XG4kaW5mby1kYXJrOiAgICAgICBtaXgoJGJsdWUsIHdoaXRlLCA0MCUpICFkZWZhdWx0O1xuJGxpZ2h0LWRhcms6ICAgICAgJGRhcmsgIWRlZmF1bHQ7XG4kbWVkaXVtLWRhcms6ICAgICAkZ3JheS1saWdodCAhZGVmYXVsdDtcbiRkYXJrLWRhcms6ICAgICAgICRsaWdodCAhZGVmYXVsdDtcblxuJGNvbG9ycy1kYXJrOiAgKFxuICAgIHByaW1hcnk6ICRwcmltYXJ5LWRhcmssXG4gICAgc3VjY2VzczogJHN1Y2Nlc3MtZGFyayxcbiAgICB3YXJuaW5nOiAkd2FybmluZy1kYXJrLFxuICAgIGRhbmdlcjogJGRhbmdlci1kYXJrLFxuICAgIGluZm86ICRpbmZvLWRhcmssXG4gICAgbGlnaHQ6ICRsaWdodC1kYXJrLFxuICAgIG1lZGl1bTogJG1lZGl1bS1kYXJrLFxuICAgIGRhcms6ICRkYXJrLWRhcmssXG4pICFkZWZhdWx0O1xuXG4vKipcbiAqIExheW91dCBCcmVha3BvaW50c1xuICpcbiAqIGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvbGF5b3V0L2dyaWQjZGVmYXVsdC1icmVha3BvaW50c1xuICovXG5cbi8vIFRoZSBtaW5pbXVtIGRpbWVuc2lvbnMgYXQgd2hpY2ggeW91ciBsYXlvdXQgd2lsbCBjaGFuZ2UsXG4vLyBhZGFwdGluZyB0byBkaWZmZXJlbnQgc2NyZWVuIHNpemVzLCBmb3IgdXNlIGluIG1lZGlhIHF1ZXJpZXNcbiRzY3JlZW4tYnJlYWtwb2ludHM6IChcbiAgICB4czogMCxcbiAgICBzbTogNTc2cHgsXG4gICAgbWQ6IDc2OHB4LFxuICAgIGxnOiA5OTJweCxcbiAgICB0YWJsZXQ6IDk5MnB4LFxuICAgIHhsOiAxMjAwcHhcbikgIWRlZmF1bHQ7XG5cbiRjb3JlLWNvdXJzZS1pbWFnZS1iYWNrZ3JvdW5kOiAjODFlY2VjLCAjNzRiOWZmLCAjYTI5YmZlLCAjZGZlNmU5LCAjMDBiODk0LCAjMDk4NGUzLCAjYjJiZWMzLCAjZmRjYjZlLCAjZmQ3OWE4LCAjNmM1Y2U3ICFkZWZhdWx0O1xuJGNvcmUtZGQtcXVlc3Rpb24tY29sb3JzOiAjRkZGRkZGLCAjQjBDNERFLCAjRENEQ0RDLCAjRDhCRkQ4LCAjODdDRUZBLCAjREFBNTIwLCAjRkZENzAwLCAjRjBFNjhDICFkZWZhdWx0O1xuJGNvcmUtdGV4dC1oaWdodGxpZ2h0LWJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJGJsdWUsIDQwJSkgIWRlZmF1bHQ7XG5cbiRjb3JlLWZpeGVkLXVybDogZmFsc2UgIWRlZmF1bHQ7XG4kY29yZS1kYXNoYm9hcmQtbG9nbzogZmFsc2UgIWRlZmF1bHQ7XG4kY29yZS1hbHdheXMtc2hvdy1tYWluLW1lbnU6IGZhbHNlICFkZWZhdWx0O1xuJGNvcmUtZm9ybWF0LXRleHQtbmV2ZXItc2hvcnRlbjogZmFsc2UgIWRlZmF1bHQ7XG5cbiRjb3JlLXNob3ctY291cnNlaW1hZ2Utb24tY291cnNlOiBmYWxzZSAhZGVmYXVsdDtcbiRjb3JlLWhpZGUtcHJvZ3Jlc3Mtb24tY291cnNlOiBmYWxzZSAhZGVmYXVsdDtcbiRjb3JlLWhpZGUtcHJvZ3Jlc3Mtb24tc2VjdGlvbi1zZWxlY3RvcjogZmFsc2UgIWRlZmF1bHQ7XG5cbiRjb3JlLWNvdXJzZS1oaWRlLXRodW1iLW9uLWNhcmRzOiBmYWxzZSAhZGVmYXVsdDtcbiRjb3JlLWNvdXJzZS10aHVtYi1vbi1jYXJkcy1iYWNrZ3JvdW5kOiBudWxsICFkZWZhdWx0O1xuJGNvcmUtY291cnNlLWhpZGUtcHJvZ3Jlc3Mtb24tY2FyZHM6IGZhbHNlICFkZWZhdWx0O1xuXG4vLyBDb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIGxvZ2luIHBhZ2UuXG4kY29yZS1sb2dpbi1idXR0b24tb3V0bGluZTogZmFsc2UgIWRlZmF1bHQ7XG4kY29yZS1sb2dpbi1idXR0b24tb3V0bGluZS1kYXJrOiAkY29yZS1sb2dpbi1idXR0b24tb3V0bGluZSAhZGVmYXVsdDtcbiRjb3JlLWxvZ2luLWxvYWRpbmctY29sb3I6IGZhbHNlICFkZWZhdWx0O1xuJGNvcmUtbG9naW4tbG9hZGluZy1jb2xvci1kYXJrOiAkdGV4dC1jb2xvci1kYXJrICFkZWZhdWx0O1xuJGNvcmUtbG9naW4taGlkZS1mb3Jnb3QtcGFzc3dvcmQ6IGZhbHNlICFkZWZhdWx0O1xuJGNvcmUtbG9naW4taGlkZS1uZWVkLWhlbHA6IGZhbHNlICFkZWZhdWx0O1xuXG4vLyBDb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIG1vcmUgcGFnZS5cbiRjb3JlLW1vcmUtaGlkZS1zaXRlaW5mbzogZmFsc2UgIWRlZmF1bHQ7XG4kY29yZS1tb3JlLWhpZGUtc2l0ZW5hbWU6IGZhbHNlICFkZWZhdWx0O1xuJGNvcmUtbW9yZS1oaWRlLXNpdGV1cmw6IGZhbHNlICFkZWZhdWx0O1xuIiwiQGltcG9ydCBcIn50aGVtZS9nbG9iYWxzLnNjc3NcIjtcblxuOmhvc3Qge1xuICAgIGlvbi1jb250ZW50IHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWFsdGVybmF0aXZlKTtcblxuICAgICAgICAmOjpwYXJ0KHNjcm9sbCkge1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5hZGRvbi1tZXNzYWdlcy1kaXNjdXNzaW9uLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWFsdGVybmF0aXZlKTtcbiAgICB9XG5cbiAgICAuYWRkb24tbWVzc2FnZXMtZGF0ZSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgIH1cblxuICAgIC8vIE1lc3NhZ2UgaXRlbS5cbiAgICBpb24taXRlbS5hZGRvbi1tZXNzYWdlIHtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIHBhZGRpbmc6IDAgOHB4IDAgOHB4O1xuICAgICAgICBtYXJnaW46IDEwcHggOHB4IDAgOHB4O1xuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWFkZG9uLW1lc3NhZ2VzLW1lc3NhZ2UtYmcpO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTtcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgICAgIC0tbWluLWhlaWdodDogdmFyKC0tYTExeS1taW4tdGFyZ2V0LXNpemUpO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIEBpbmNsdWRlIGNvcmUtdHJhbnNpdGlvbih3aWR0aCk7XG4gICAgICAgIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGRpc3BsYXkgYnViYmxlIHRhaWxzLlxuICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcblxuICAgICAgICAmOjpwYXJ0KG5hdGl2ZSkge1xuICAgICAgICAgICAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDA7XG4gICAgICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvcmUtZm9ybWF0LXRleHQgPiBwOm9ubHktY2hpbGQge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICB9XG5cbiAgICAgICAgLmFkZG9uLW1lc3NhZ2UtdXNlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xuXG4gICAgICAgICAgICBjb3JlLXVzZXItYXZhdGFyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAtLWNvcmUtYXZhdGFyLXNpemU6IHZhcigtLWFkZG9uLW1lc3NhZ2VzLWF2YXRhci1zaXplKTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgcGFkZGluZy1ob3Jpem9udGFsKC41cmVtKTtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpb24tbm90ZSB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYWRkb24tbWVzc2FnZXMtbWVzc2FnZS1ub3RlLXRleHQpO1xuICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1hZGRvbi1tZXNzYWdlcy1tZXNzYWdlLW5vdGUtZm9udC1zaXplKTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMCA4cHggMDtcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgICAgICB9XG5cbiAgICAgICAgJlt0YXBwYWJsZV06YWN0aXZlIHtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tYWRkb24tbWVzc2FnZXMtbWVzc2FnZS1hY3RpdmF0ZWQtYmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmFkZG9uLW1lc3NhZ2UtdGV4dCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgICoge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAudGFpbCB7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgICAgYm9yZGVyOiAwLjVyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3VjaC1hY3Rpb246IG5vbmU7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEZWZpbmVzIHdoZW4gYW4gaXRlbS1tZXNzYWdlIGlzIHRoZSB1c2VyJ3MuXG4gICAgICAgICYuYWRkb24tbWVzc2FnZS1taW5lIHtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tYWRkb24tbWVzc2FnZXMtbWVzc2FnZS1taW5lLWJnKTtcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuXG4gICAgICAgICAgICAmW3RhcHBhYmxlXTphY3RpdmUge1xuICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tYWRkb24tbWVzc2FnZXMtbWVzc2FnZS1taW5lLWFjdGl2YXRlZC1iZyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zcGlubmVyIHtcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBmbG9hdChlbmQpO1xuICAgICAgICAgICAgICAgIEBpbmNsdWRlIG1hcmdpbigycHgsIC0zcHgsIC0ycHgsIDVweCk7XG5cbiAgICAgICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnRhaWwge1xuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHBvc2l0aW9uKG51bGwsIC04cHgsIG51bGwsIG51bGwpO1xuICAgICAgICAgICAgICAgIEBpbmNsdWRlIG1hcmdpbi1ob3Jpem9udGFsKG51bGwsIC0wLjVyZW0pO1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLWFkZG9uLW1lc3NhZ2VzLW1lc3NhZ2UtbWluZS1iZyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICZbdGFwcGFibGVdOmFjdGl2ZSAudGFpbCB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tYWRkb24tbWVzc2FnZXMtbWVzc2FnZS1taW5lLWFjdGl2YXRlZC1iZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLmFkZG9uLW1lc3NhZ2Utbm90LW1pbmUgLnRhaWwge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tYWRkb24tbWVzc2FnZXMtbWVzc2FnZS1iZyk7XG4gICAgICAgICAgICBAaW5jbHVkZSBwb3NpdGlvbihudWxsLCBudWxsLCBudWxsLCAtOHB4KTtcbiAgICAgICAgICAgIEBpbmNsdWRlIG1hcmdpbi1ob3Jpem9udGFsKC0wLjVyZW0sIG51bGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgJlt0YXBwYWJsZV0uYWRkb24tbWVzc2FnZS1ub3QtbWluZS5hY3RpdmF0ZWQgLnRhaWwge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tYWRkb24tbWVzc2FnZXMtbWVzc2FnZS1hY3RpdmF0ZWQtYmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmFkZG9uLW1lc3NhZ2VzLWRlbGV0ZS1idXR0b24ge1xuICAgICAgICAgICAgbWluLWhlaWdodDogaW5pdGlhbDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBpbml0aWFsO1xuICAgICAgICAgICAgQGluY2x1ZGUgbWFyZ2luKDAsIG51bGwsIDAsIG51bGwpO1xuICAgICAgICAgICAgaGVpZ2h0OiB2YXIoLS1hMTF5LW1pbi10YXJnZXQtc2l6ZSkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuXG4gICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjRlbTtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogaW5pdGlhbDtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLmFkZG9uLW1lc3NhZ2Utbm8tdXNlciB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpb24taXRlbS5hZGRvbi1tZXNzYWdlLmFkZG9uLW1lc3NhZ2UtbWluZSArIGlvbi1pdGVtLmFkZG9uLW1lc3NhZ2UuYWRkb24tbWVzc2FnZS1uby11c2VyLmFkZG9uLW1lc3NhZ2UtbWluZSxcbiAgICBpb24taXRlbS5hZGRvbi1tZXNzYWdlLmFkZG9uLW1lc3NhZ2Utbm90LW1pbmUgKyBpb24taXRlbS5hZGRvbi1tZXNzYWdlLmFkZG9uLW1lc3NhZ2Utbm8tdXNlci5hZGRvbi1tZXNzYWdlLW5vdC1taW5lIHtcbiAgICAgICAgLml0ZW0taGVhZGluZyB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICB9XG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIH1cblxufVxuXG46aG9zdC1jb250ZXh0KC5pb3MpIHtcbiAgICBpb24tZm9vdGVyIC50b29sYmFyOmxhc3QtY2hpbGQge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuICAgICAgICBtaW4taGVpZ2h0OiAwO1xuICAgIH1cbn1cbiIsIkBpbXBvcnQgXCJ+dGhlbWUvY29tcG9uZW50cy9kaXNjdXNzaW9uLnNjc3NcIjtcblxuOmhvc3Qge1xuICAgIC5hZGRvbi1tb2RfY2hhdC1ub3RpY2Uge1xuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICB9XG59XG4iXX0= */");

/***/ }),

/***/ "./src/addons/mod/chat/pages/chat/chat.ts":
/*!************************************************!*\
  !*** ./src/addons/mod/chat/pages/chat/chat.ts ***!
  \************************************************/
/*! exports provided: AddonModChatChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModChatChatPage", function() { return AddonModChatChatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/animations */ "./src/core/components/animations.ts");
/* harmony import */ var _components_send_message_form_send_message_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/send-message-form/send-message-form */ "./src/core/components/send-message-form/send-message-form.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/app */ "./src/core/services/app.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _components_users_modal_users_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/users-modal/users-modal */ "./src/addons/mod/chat/components/users-modal/users-modal.ts");
/* harmony import */ var _services_chat__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/chat */ "./src/addons/mod/chat/services/chat.ts");
/* harmony import */ var _services_chat_helper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/chat-helper */ "./src/addons/mod/chat/services/chat-helper.ts");
// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.















/**
 * Page that displays a chat session.
 */
let AddonModChatChatPage = class AddonModChatChatPage {
    constructor() {
        this.loaded = false;
        this.title = '';
        this.messages = [];
        this.sending = false;
        this.lastTime = 0;
        this.oldContentHeight = 0;
        this.viewDestroyed = false;
        this.pollingRunning = false;
        this.users = [];
        this.currentUserId = _services_sites__WEBPACK_IMPORTED_MODULE_7__["CoreSites"].getCurrentSiteUserId();
        this.isOnline = _services_app__WEBPACK_IMPORTED_MODULE_5__["CoreApp"].isOnline();
        this.onlineSubscription = _singletons__WEBPACK_IMPORTED_MODULE_10__["Network"].onChange().subscribe(() => {
            // Execute the callback in the Angular zone, so change detection doesn't stop working.
            _singletons__WEBPACK_IMPORTED_MODULE_10__["NgZone"].run(() => {
                this.isOnline = _services_app__WEBPACK_IMPORTED_MODULE_5__["CoreApp"].isOnline();
            });
        });
        // Recalculate footer position when keyboard is shown or hidden.
        this.keyboardObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_11__["CoreEvents"].on(_singletons_events__WEBPACK_IMPORTED_MODULE_11__["CoreEvents"].KEYBOARD_CHANGE, () => {
            // @todo probably not needed.
            // this.content.resize();
        });
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteNumberParam('courseId');
            this.cmId = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteNumberParam('cmId');
            this.chatId = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteNumberParam('chatId');
            this.title = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteParam('title') || '';
            try {
                yield this.loginUser();
                yield this.fetchMessages();
                this.startPolling();
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModalDefault(error, 'addon.mod_chat.errorwhileconnecting', true);
                _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].back();
            }
            finally {
                this.loaded = true;
            }
        });
    }
    /**
     * Runs when the page has fully entered and is now the active page.
     * This event will fire, whether it was the first load or a cached page.
     */
    ionViewDidEnter() {
        this.startPolling();
    }
    /**
     * Runs when the page is about to leave and no longer be the active page.
     */
    ionViewWillLeave() {
        _singletons_events__WEBPACK_IMPORTED_MODULE_11__["CoreEvents"].trigger(_singletons_events__WEBPACK_IMPORTED_MODULE_11__["CoreEvents"].ACTIVITY_DATA_SENT, { module: 'chat' });
        this.stopPolling();
    }
    /**
     * Convenience function to login the user.
     *
     * @return Promise resolved when done.
     */
    loginUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.sessionId = yield _services_chat__WEBPACK_IMPORTED_MODULE_13__["AddonModChat"].loginUser(this.chatId);
        });
    }
    /**
     * Convenience function to fetch chat messages.
     *
     * @return Promise resolved when done.
     */
    fetchMessages() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const messagesInfo = yield _services_chat__WEBPACK_IMPORTED_MODULE_13__["AddonModChat"].getLatestMessages(this.sessionId, this.lastTime);
            this.lastTime = messagesInfo.chatnewlasttime || 0;
            const messages = yield _services_chat__WEBPACK_IMPORTED_MODULE_13__["AddonModChat"].getMessagesUserData(messagesInfo.messages, this.courseId);
            if (!messages.length) {
                // No messages yet, nothing else to do.
                return;
            }
            const previousLength = this.messages.length;
            this.messages = this.messages.concat(messages);
            // Calculate which messages need to display the date or user data.
            for (let index = previousLength; index < this.messages.length; index++) {
                const prevMessage = index > 0 ? this.messages[index - 1] : undefined;
                this.messages[index] = _services_chat_helper__WEBPACK_IMPORTED_MODULE_14__["AddonModChatHelper"].formatMessage(this.currentUserId, this.messages[index], prevMessage);
                const message = this.messages[index];
                if (message.beep && message.beep != String(this.currentUserId)) {
                    this.loadMessageBeepWho(message);
                }
            }
            this.messages[this.messages.length - 1].showTail = true;
            // New messages or beeps, scroll to bottom.
            setTimeout(() => this.scrollToBottom());
        });
    }
    loadMessageBeepWho(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            message.beepWho = yield this.getUserFullname(message.beep);
        });
    }
    /**
     * Display the chat users modal.
     */
    showChatUsers() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Create the toc modal.
            const modalData = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].openSideModal({
                component: _components_users_modal_users_modal__WEBPACK_IMPORTED_MODULE_12__["AddonModChatUsersModalComponent"],
                componentProps: {
                    sessionId: this.sessionId,
                    cmId: this.cmId,
                },
            });
            if (modalData) {
                if (modalData.talkTo) {
                    this.newMessage = `To ${modalData.talkTo}: ` + (((_a = this.sendMessageForm) === null || _a === void 0 ? void 0 : _a.message) || '');
                }
                if (modalData.beepTo) {
                    this.sendMessage('', modalData.beepTo);
                }
                this.users = modalData.users;
            }
        });
    }
    /**
     * Get the user fullname for a beep.
     *
     * @param id User Id before parsing.
     * @return User fullname.
     */
    getUserFullname(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const idNumber = parseInt(id, 10);
            if (isNaN(idNumber)) {
                return id;
            }
            const user = this.users.find((user) => user.id == idNumber);
            if (user) {
                return user.fullname;
            }
            try {
                const data = yield _services_chat__WEBPACK_IMPORTED_MODULE_13__["AddonModChat"].getChatUsers(this.sessionId, { cmId: this.cmId });
                this.users = data.users;
                const user = this.users.find((user) => user.id == idNumber);
                if (user) {
                    return user.fullname;
                }
                return id;
            }
            catch (error) {
                // Ignore errors.
                return id;
            }
        });
    }
    /**
     * Start the polling to get chat messages periodically.
     */
    startPolling() {
        // We already have the polling in place.
        if (this.polling) {
            return;
        }
        // Start polling.
        this.polling = window.setInterval(() => {
            _services_utils_utils__WEBPACK_IMPORTED_MODULE_9__["CoreUtils"].ignoreErrors(this.fetchMessagesInterval());
        }, _services_chat__WEBPACK_IMPORTED_MODULE_13__["AddonModChatProvider"].POLL_INTERVAL);
    }
    /**
     * Stop polling for messages.
     */
    stopPolling() {
        clearInterval(this.polling);
        this.polling = undefined;
    }
    /**
     * Convenience function to be called every certain time to fetch chat messages.
     *
     * @return Promise resolved when done.
     */
    fetchMessagesInterval() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.isOnline || this.pollingRunning) {
                // Obviously we cannot check for new messages when the app is offline.
                return;
            }
            this.pollingRunning = true;
            try {
                yield this.fetchMessages();
            }
            catch (_a) {
                try {
                    // Try to login, it might have failed because the session expired.
                    yield this.loginUser();
                    yield this.fetchMessages();
                }
                catch (error) {
                    // Fail again. Stop polling if needed.
                    this.stopPolling();
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModalDefault(error, 'addon.mod_chat.errorwhileretrievingmessages', true);
                    throw error;
                }
            }
            finally {
                this.pollingRunning = false;
            }
        });
    }
    /**
     * Send a message to the chat.
     *
     * @param text Text of the nessage.
     * @param beep ID of the user to beep.
     */
    sendMessage(text, beep = 0) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.isOnline) {
                // Silent error, the view should prevent this.
                return;
            }
            else if (beep === 0 && !text.trim()) {
                // Silent error.
                return;
            }
            this.sending = true;
            try {
                yield _services_chat__WEBPACK_IMPORTED_MODULE_13__["AddonModChat"].sendMessage(this.sessionId, text, beep);
                // Update messages to show the sent message.
                _services_utils_utils__WEBPACK_IMPORTED_MODULE_9__["CoreUtils"].ignoreErrors(this.fetchMessagesInterval());
            }
            catch (error) {
                // Only close the keyboard if an error happens, we want the user to be able to send multiple
                // messages without the keyboard being closed.
                _services_app__WEBPACK_IMPORTED_MODULE_5__["CoreApp"].closeKeyboard();
                this.newMessage = text;
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModalDefault(error, 'addon.mod_chat.errorwhilesendingmessage', true);
            }
            finally {
                this.sending = false;
            }
        });
    }
    /**
     * Try to reconnect.
     *
     * @return Promise resolved when done.
     */
    reconnect() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showModalLoading();
            try {
                // Call startPolling would take a while for the first execution, so we'll execute it manually to check if it works now.
                yield this.fetchMessagesInterval();
                // It works, start the polling again.
                this.startPolling();
            }
            catch (_a) {
                // Ignore errors.
            }
            finally {
                modal.dismiss();
            }
        });
    }
    /**
     * Scroll bottom when render has finished.
     */
    scrollToBottom() {
        // Need a timeout to leave time to the view to be rendered.
        setTimeout(() => {
            var _a;
            if (!this.viewDestroyed) {
                (_a = this.content) === null || _a === void 0 ? void 0 : _a.scrollToBottom();
            }
        });
    }
    /**
     * Content or scroll has been resized. For content, only call it if it's been added on top.
     */
    resizeContent() {
        // @todo probably not needed.
        // let top = this.content.getContentDimensions().scrollTop;
        // this.content.resize();
        // // Wait for new content height to be calculated.
        // setTimeout(() => {
        //     // Visible content size changed, maintain the bottom position.
        //     if (!this.viewDestroyed && this.content && this.domUtils.getContentHeight(this.content) != this.oldContentHeight) {
        //         if (!top) {
        //             top = this.content.getContentDimensions().scrollTop;
        //         }
        //         top += this.oldContentHeight - this.domUtils.getContentHeight(this.content);
        //         this.oldContentHeight = this.domUtils.getContentHeight(this.content);
        //         this.content.scrollTo(0, top, 0);
        //     }
        // });
    }
    /**
     * Check if we can leave the page or not.
     *
     * @return Resolved with true if we can leave it, rejected if not.
     */
    canLeave() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.messages.some((message) => !message.special)) {
                return true;
            }
            // Modified, confirm user wants to go back.
            yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showConfirm(_singletons__WEBPACK_IMPORTED_MODULE_10__["Translate"].instant('addon.mod_chat.confirmloss'));
            return true;
        });
    }
    /**
     * @inheritdoc
     */
    ngOnDestroy() {
        this.onlineSubscription && this.onlineSubscription.unsubscribe();
        this.keyboardObserver && this.keyboardObserver.off();
        this.stopPolling();
        this.viewDestroyed = true;
    }
};
AddonModChatChatPage.ctorParameters = () => [];
AddonModChatChatPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"],] }],
    sendMessageForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_components_send_message_form_send_message_form__WEBPACK_IMPORTED_MODULE_3__["CoreSendMessageFormComponent"],] }]
};
AddonModChatChatPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-mod-chat-chat',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./chat.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/chat/pages/chat/chat.html")).default,
        animations: [_components_animations__WEBPACK_IMPORTED_MODULE_2__["CoreAnimations"].SLIDE_IN_OUT],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./chat.scss */ "./src/addons/mod/chat/pages/chat/chat.scss")).default]
    })
], AddonModChatChatPage);



/***/ }),

/***/ "./src/addons/mod/chat/pages/index/index.ts":
/*!**************************************************!*\
  !*** ./src/addons/mod/chat/pages/index/index.ts ***!
  \**************************************************/
/*! exports provided: AddonModChatIndexPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModChatIndexPage", function() { return AddonModChatIndexPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _features_course_classes_main_activity_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @features/course/classes/main-activity-page */ "./src/core/features/course/classes/main-activity-page.ts");
/* harmony import */ var _components_index_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/index/index */ "./src/addons/mod/chat/components/index/index.ts");
// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.




/**
 * Page that displays a chat.
 */
let AddonModChatIndexPage = class AddonModChatIndexPage extends _features_course_classes_main_activity_page__WEBPACK_IMPORTED_MODULE_2__["CoreCourseModuleMainActivityPage"] {
};
AddonModChatIndexPage.propDecorators = {
    activityComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_components_index_index__WEBPACK_IMPORTED_MODULE_3__["AddonModChatIndexComponent"],] }]
};
AddonModChatIndexPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-mod-chat-index',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./index.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/chat/pages/index/index.html")).default,
    })
], AddonModChatIndexPage);



/***/ }),

/***/ "./src/addons/mod/chat/pages/session-messages/session-messages.scss":
/*!**************************************************************************!*\
  !*** ./src/addons/mod/chat/pages/session-messages/session-messages.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n * App Global variables SCSS\n * ----------------------------------------------------------------------------\n * Place here the different files you should import to use global variables.\n */\n/*\n * App custom mixins for SCSS\n * ----------------------------------------------------------------------------\n * Place here our custom mixins.\n */\n/*\n * Imported ionic mixins for SCSS\n * ----------------------------------------------------------------------------\n * Place here our custom mixins.\n * Extracted from ionic.mixins.scss\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.mixins.scss\n */\n/*\n * App Custom App variables SCSS\n * ----------------------------------------------------------------------------\n * Place here all custom app variables.\n */\n/*\n * App Global variables SCSS\n * ----------------------------------------------------------------------------\n * Place here all global variables.\n */\n/**\n * Layout Breakpoints\n *\n * https://ionicframework.com/docs/layout/grid#default-breakpoints\n */\n:host ion-content {\n  --background: var(--background-alternative);\n}\n:host ion-content::part(scroll) {\n  padding-bottom: 0 !important;\n}\n:host .addon-messages-discussion-container {\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 15px;\n  background: var(--background-alternative);\n}\n:host .addon-messages-date {\n  font-weight: normal;\n  font-size: 0.9rem;\n}\n:host ion-item.addon-message {\n  border: 0;\n  border-radius: 4px;\n  padding: 0 8px 0 8px;\n  margin: 10px 8px 0 8px;\n  --background: var(--addon-messages-message-bg);\n  background: var(--background);\n  align-self: flex-start;\n  width: 90%;\n  max-width: 90%;\n  --min-height: var(--a11y-min-target-size);\n  position: relative;\n  transition: width 500ms ease-in-out;\n  overflow: visible;\n}\n:host ion-item.addon-message::part(native) {\n  --inner-border-width: 0;\n  --inner-padding-end: 0;\n  padding: 0;\n  margin: 0;\n}\n:host ion-item.addon-message core-format-text > p:only-child {\n  display: inline;\n}\n:host ion-item.addon-message .addon-message-user {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.5rem;\n  margin-top: 0;\n  color: var(--ion-text-color);\n}\n:host ion-item.addon-message .addon-message-user core-user-avatar {\n  display: block;\n  --core-avatar-size: var(--addon-messages-avatar-size);\n  margin: 0;\n}\n:host ion-item.addon-message .addon-message-user div {\n  font-weight: 500;\n  flex-grow: 1;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host ion-item.addon-message .addon-message-user div {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: 0.5rem;\n    padding-inline-start: 0.5rem;\n    -webkit-padding-end: 0.5rem;\n    padding-inline-end: 0.5rem;\n  }\n}\n:host ion-item.addon-message ion-note {\n  color: var(--addon-messages-message-note-text);\n  font-size: var(--addon-messages-message-note-font-size);\n  margin: 0;\n  padding: 0 0 8px 0;\n  align-self: flex-end;\n}\n:host ion-item.addon-message[tappable]:active {\n  --background: var(--addon-messages-message-activated-bg);\n}\n:host ion-item.addon-message ion-label {\n  margin: 0;\n  padding: 8px 0;\n}\n:host ion-item.addon-message .addon-message-text {\n  display: inline-flex;\n}\n:host ion-item.addon-message .addon-message-text * {\n  color: var(--ion-text-color);\n}\n:host ion-item.addon-message .tail {\n  content: \"\";\n  width: 0;\n  height: 0;\n  border: 0.5rem solid transparent;\n  position: absolute;\n  touch-action: none;\n  bottom: 0;\n}\n:host ion-item.addon-message.addon-message-mine {\n  --background: var(--addon-messages-message-mine-bg);\n  align-self: flex-end;\n}\n:host ion-item.addon-message.addon-message-mine[tappable]:active {\n  --background: var(--addon-messages-message-mine-activated-bg);\n}\n:host ion-item.addon-message.addon-message-mine .spinner {\n  float: right;\n  margin-left: 5px;\n  margin-right: -3px;\n  margin-top: 2px;\n  margin-bottom: -2px;\n}\n[dir=rtl] :host ion-item.addon-message.addon-message-mine .spinner {\n  float: left;\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host ion-item.addon-message.addon-message-mine .spinner {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: 5px;\n    margin-inline-start: 5px;\n    -webkit-margin-end: -3px;\n    margin-inline-end: -3px;\n  }\n}\n:host ion-item.addon-message.addon-message-mine .spinner svg {\n  width: 16px;\n  height: 16px;\n}\n:host ion-item.addon-message.addon-message-mine .tail {\n  right: -8px;\n  margin-right: -0.5rem;\n  border-bottom-color: var(--addon-messages-message-mine-bg);\n}\n[dir=rtl] :host ion-item.addon-message.addon-message-mine .tail {\n  left: unset;\n  right: unset;\n  left: -8px;\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host ion-item.addon-message.addon-message-mine .tail {\n    margin-right: unset;\n    -webkit-margin-end: -0.5rem;\n    margin-inline-end: -0.5rem;\n  }\n}\n:host ion-item.addon-message.addon-message-mine[tappable]:active .tail {\n  border-bottom-color: var(--addon-messages-message-mine-activated-bg);\n}\n:host ion-item.addon-message.addon-message-not-mine .tail {\n  border-bottom-color: var(--addon-messages-message-bg);\n  left: -8px;\n  margin-left: -0.5rem;\n}\n[dir=rtl] :host ion-item.addon-message.addon-message-not-mine .tail {\n  left: unset;\n  right: unset;\n  right: -8px;\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host ion-item.addon-message.addon-message-not-mine .tail {\n    margin-left: unset;\n    -webkit-margin-start: -0.5rem;\n    margin-inline-start: -0.5rem;\n  }\n}\n:host ion-item.addon-message[tappable].addon-message-not-mine.activated .tail {\n  border-bottom-color: var(--addon-messages-message-activated-bg);\n}\n:host ion-item.addon-message .addon-messages-delete-button {\n  min-height: initial;\n  line-height: initial;\n  margin-top: 0;\n  margin-bottom: 0;\n  height: var(--a11y-min-target-size) !important;\n  align-self: flex-end;\n}\n:host ion-item.addon-message .addon-messages-delete-button ion-icon {\n  font-size: 1.4em;\n  line-height: initial;\n  color: var(--ion-color-danger);\n}\n:host ion-item.addon-message.addon-message-no-user {\n  margin-top: 8px;\n}\n:host ion-item.addon-message.addon-message-mine + ion-item.addon-message.addon-message-no-user.addon-message-mine,\n:host ion-item.addon-message.addon-message-not-mine + ion-item.addon-message.addon-message-no-user.addon-message-not-mine {\n  padding-top: 0;\n}\n:host ion-item.addon-message.addon-message-mine + ion-item.addon-message.addon-message-no-user.addon-message-mine .item-heading,\n:host ion-item.addon-message.addon-message-not-mine + ion-item.addon-message.addon-message-no-user.addon-message-not-mine .item-heading {\n  margin-bottom: 0;\n}\n:host-context(.ios) ion-footer .toolbar:last-child {\n  padding-bottom: 4px;\n  min-height: 0;\n}\n:host .addon-mod_chat-notice {\n  margin-top: 8px;\n  margin-bottom: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9nbG9iYWxzLnNjc3MiLCJzcmMvdGhlbWUvZ2xvYmFscy5taXhpbnMuc2NzcyIsInNyYy90aGVtZS9nbG9iYWxzLm1peGlucy5pb25pYy5zY3NzIiwic3JjL3RoZW1lL2dsb2JhbHMuY3VzdG9tLnNjc3MiLCJzcmMvdGhlbWUvZ2xvYmFscy52YXJpYWJsZXMuc2NzcyIsInNyYy90aGVtZS9jb21wb25lbnRzL2Rpc2N1c3Npb24uc2NzcyIsInNyYy9hZGRvbnMvbW9kL2NoYXQvcGFnZXMvc2Vzc2lvbi1tZXNzYWdlcy9zZXNzaW9uLW1lc3NhZ2VzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7RUFBQTtBQ0FBOzs7O0VBQUE7QUNBQTs7Ozs7O0VBQUE7QUNBQTs7OztFQUFBO0FDQUE7Ozs7RUFBQTtBQXVGQTs7OztFQUFBO0FDcEZJO0VBQ0ksMkNBQUE7QUM4QlI7QUQ1QlE7RUFDSSw0QkFBQTtBQzhCWjtBRDFCSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EseUNBQUE7QUM0QlI7QUR6Qkk7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0FDMkJSO0FEdkJJO0VBQ0ksU0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLDhDQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EseUNBQUE7RUFDQSxrQkFBQTtFSkxKLG1DQUFBO0VJUUksaUJBQUE7QUM0QlI7QUQxQlE7RUFDSSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUM0Qlo7QUR6QlE7RUFDSSxlQUFBO0FDMkJaO0FEeEJRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0FDMEJaO0FEeEJZO0VBQ0ksY0FBQTtFQUNBLHFEQUFBO0VBQ0EsU0FBQTtBQzBCaEI7QUR2Qlk7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUgyUFIsb0JHMVBvQztFSDJQcEMscUJHM1BvQztFQUM1QixnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUMwQmhCO0FKaU9ZO0VBQ0k7SUFFUSxtQkFBQTtJQUdBLG9CQUFBO0lBR0osNkJHdlF3QjtJSHdReEIsNEJHeFF3QjtJSHlReEIsMkJHelF3QjtJSDBReEIsMEJHMVF3QjtFQ3NDMUM7QUFDRjtBRGhDUTtFQUNJLDhDQUFBO0VBQ0EsdURBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ2tDWjtBRC9CUTtFQUNJLHdEQUFBO0FDaUNaO0FEOUJRO0VBQ0ksU0FBQTtFQUNBLGNBQUE7QUNnQ1o7QUQ3QlE7RUFDSSxvQkFBQTtBQytCWjtBRDlCWTtFQUNJLDRCQUFBO0FDZ0NoQjtBRDVCUTtFQUNJLFdBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUM4Qlo7QUQxQlE7RUFDSSxtREFBQTtFQUNBLG9CQUFBO0FDNEJaO0FEMUJZO0VBQ0ksNkRBQUE7QUM0QmhCO0FEekJZO0VINFhBLFlBQUE7RUFwTEosZ0JHdE15QztFSHVNekMsa0JHdk02QjtFSHVPakMsZUd2TzRCO0VId081QixtQkd4T3VDO0FDOEIzQztBSnVIUTtFQXdPSSxXQUFBO0FJNVZaO0FKeUtZO0VBQ0k7SUFFUSxrQkFBQTtJQUdBLG1CQUFBO0lBR0oseUJHbk42QjtJSG9ON0Isd0JHcE42QjtJSHFON0Isd0JHck5pQjtJSHNOakIsdUJHdE5pQjtFQzJDbkM7QUFDRjtBRDFDZ0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQzRDcEI7QUR4Q1k7RUhvUkEsV0duUjRCO0VIOExoQyxxQkc3THlDO0VBQ2pDLDBEQUFBO0FDMENoQjtBSmdHUTtFQTBJSSxXQUFBO0VBQ0EsWUFBQTtFQUVBLFVHelI0QjtBQ2lEeEM7QUpnSlk7RUFDSTtJQUtRLG1CQUFBO0lBS0osMkJHM002QjtJSDRNN0IsMEJHNU02QjtFQ3VEL0M7QUFDRjtBRHBEWTtFQUNJLG9FQUFBO0FDc0RoQjtBRGxEUTtFQUNJLHFEQUFBO0VIdVFBLFVHdFFvQztFSGlMeEMsb0JHaEwrQjtBQ29EdkM7QUoyRVE7RUEwSUksV0FBQTtFQUNBLFlBQUE7RUFHQSxXRzlRb0M7QUMwRGhEO0FKMkhZO0VBQ0k7SUFFUSxrQkFBQTtJQU1KLDZCRzdMbUI7SUg4TG5CLDRCRzlMbUI7RUNnRXJDO0FBQ0Y7QUQ5RFE7RUFDSSwrREFBQTtBQ2dFWjtBRDdEUTtFQUNJLG1CQUFBO0VBQ0Esb0JBQUE7RUh3TVIsYUd2TXdCO0VId014QixnQkd4TWlDO0VBQ3pCLDhDQUFBO0VBQ0Esb0JBQUE7QUNnRVo7QUQ5RFk7RUFDSSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsOEJBQUE7QUNnRWhCO0FENURRO0VBQ0ksZUFBQTtBQzhEWjtBRDFESTs7RUFLSSxjQUFBO0FDeURSO0FENURROztFQUNJLGdCQUFBO0FDK0RaO0FEdkRJO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0FDMERSO0FBN09JO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FBZ1BSIiwiZmlsZSI6InNyYy9hZGRvbnMvbW9kL2NoYXQvcGFnZXMvc2Vzc2lvbi1tZXNzYWdlcy9zZXNzaW9uLW1lc3NhZ2VzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQXBwIEdsb2JhbCB2YXJpYWJsZXMgU0NTU1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogUGxhY2UgaGVyZSB0aGUgZGlmZmVyZW50IGZpbGVzIHlvdSBzaG91bGQgaW1wb3J0IHRvIHVzZSBnbG9iYWwgdmFyaWFibGVzLlxuICovXG5cbiRmb250LXBhdGg6IFwiLi4vYXNzZXRzL2ZvbnRzXCI7XG4kYXNzZXRzLXBhdGg6IFwiLi4vYXNzZXRzXCI7XG5AaW1wb3J0IFwiLi9nbG9iYWxzLm1peGlucy5zY3NzXCI7XG5AaW1wb3J0IFwiLi9nbG9iYWxzLm1peGlucy5pb25pYy5zY3NzXCI7XG5AaW1wb3J0IFwiLi9nbG9iYWxzLmN1c3RvbS5zY3NzXCI7XG5AaW1wb3J0IFwiLi9nbG9iYWxzLnZhcmlhYmxlcy5zY3NzXCI7XG4iLCIvKlxuICogQXBwIGN1c3RvbSBtaXhpbnMgZm9yIFNDU1NcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFBsYWNlIGhlcmUgb3VyIGN1c3RvbSBtaXhpbnMuXG4gKi9cblxuIEBtaXhpbiBjb3JlLWZvY3VzKCkge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICY6OmFmdGVyIHtcbiAgICAgICAgQGluY2x1ZGUgcG9zaXRpb24oMCwgMCwgMCwgMCk7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgQGluY2x1ZGUgY29yZS1mb2N1cy1zdHlsZSgpO1xuICAgIH1cbiB9XG5cbiBAbWl4aW4gY29yZS1mb2N1cy1zdHlsZSgpIHtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgdmFyKC0tYTExeS1mb2N1cy13aWR0aCkgMXB4IHZhcigtLWExMXktZm9jdXMtY29sb3IpO1xuICAgIC8vIFRoaWNrZXIgb3B0aW9uOlxuICAgIC8vIGJvcmRlcjogdmFyKC0tYTExeS1mb2N1cy13aWR0aCkgc29saWQgdmFyKC0tYTExeS1mb2N1cy1jb2xvcik7XG59XG5cbkBtaXhpbiBjb3JlLXRyYW5zaXRpb24oJHdoZXJlOiBhbGwsICR0aW1lOiA1MDBtcykge1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogJHdoZXJlICR0aW1lIGVhc2UtaW4tb3V0O1xuICAgIC1tb3otdHJhbnNpdGlvbjogJHdoZXJlICR0aW1lIGVhc2UtaW4tb3V0O1xuICAgIC1tcy10cmFuc2l0aW9uOiAkd2hlcmUgJHRpbWUgZWFzZS1pbi1vdXQ7XG4gICAgLW8tdHJhbnNpdGlvbjogJHdoZXJlICR0aW1lIGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zaXRpb246ICR3aGVyZSAkdGltZSBlYXNlLWluLW91dDtcbn1cblxuQG1peGluIHB1c2gtYXJyb3ctY29sb3IoJGNvbG9yOiBkZWRlZGUsICRmbGlwLXJ0bDogZmFsc2UpIHtcbiAgICAkc3ZnOiBcIjxzdmclMjB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTIwdmlld0JveD0nMCUyMDAlMjAxMiUyMDIwJz48cGF0aCUyMGQ9J00yLDIwbC0yLTJsOC04TDAsMmwyLTJsMTAsMTBMMiwyMHonJTIwZmlsbD0nJTIzI3skY29sb3J9Jy8+PC9zdmc+XCI7XG4gICAgQGlmICRmbGlwLXJ0bCAhPSB0cnVlIHtcbiAgICAgICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsI3skc3ZnfVwiKTtcbiAgICAgICAgfVxuICAgIH0gQGVsc2Uge1xuICAgICAgICAkZmxpcHBlZC1zdmc6IFwiPHN2ZyUyMHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclMjB2aWV3Qm94PScwJTIwMCUyMDEyJTIwMjAnPjxwYXRoJTIwdHJhbnNmb3JtPSd0cmFuc2xhdGUoMjAsJTIwMCklMjBzY2FsZSgtMSwlMjAxKSclMjBkPSdNMiwyMGwtMi0ybDgtOEwwLDJsMi0ybDEwLDEwTDIsMjB6JyUyMGZpbGw9JyUyMyN7JGNvbG9yfScvPjwvc3ZnPlwiO1xuXG4gICAgICAgIEBpbmNsdWRlIGx0ciAoKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwjeyRzdmd9XCIpO1xuICAgICAgICB9XG4gICAgICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCN7JGZsaXBwZWQtc3ZnfVwiKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1peGluIGJvcmRlci1zdGFydCgkcHgsICR0eXBlOiBudWxsLCAkY29sb3I6IG51bGwpIHtcbiAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAkcHggJHR5cGUgJGNvbG9yO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAkcHggJHR5cGUgJGNvbG9yO1xuICAgIH1cbn1cblxuXG5AbWl4aW4gYm9yZGVyLWVuZCgkcHgsICR0eXBlOiBudWxsLCAkY29sb3I6IG51bGwpIHtcbiAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICAgIGJvcmRlci1yaWdodDogJHB4ICR0eXBlICRjb2xvcjtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAkcHggJHR5cGUgJGNvbG9yO1xuICAgIH1cbn1cblxuQG1peGluIHNhZmUtYXJlYS1ib3JkZXItc3RhcnQoJHB4LCAkdHlwZSwgJGNvbG9yKSB7XG4gICAgJHNhZmUtYXJlYS1wb3NpdGlvbjogY2FsYyhjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtbGVmdCkgKyAjeyRweH0pO1xuICAgICRzYWZlLWFyZWEtcG9zaXRpb24tZW52OiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtbGVmdCkgKyAjeyRweH0pO1xuXG4gICAgQGluY2x1ZGUgYm9yZGVyLXN0YXJ0KCRweCwgJHR5cGUsICRjb2xvcik7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAgICAgQGluY2x1ZGUgYm9yZGVyLXN0YXJ0KCRzYWZlLWFyZWEtcG9zaXRpb24sICR0eXBlLCAkY29sb3IpO1xuICAgICAgICBAaW5jbHVkZSBib3JkZXItc3RhcnQoJHNhZmUtYXJlYS1wb3NpdGlvbi1lbnYsICR0eXBlLCAkY29sb3IpO1xuICAgIH1cbn1cblxuQG1peGluIHNhZmUtYXJlYS1ib3JkZXItZW5kKCRweCwgJHR5cGUsICRjb2xvcikge1xuICAgICRzYWZlLWFyZWEtcG9zaXRpb246IGNhbGMoY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LXJpZ2h0KSArICN7JHB4fSk7XG4gICAgJHNhZmUtYXJlYS1wb3NpdGlvbi1lbnY6IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC1yaWdodCkgKyAjeyRweH0pO1xuXG4gICAgQGluY2x1ZGUgYm9yZGVyLWVuZCgkcHgsICR0eXBlLCAkY29sb3IpO1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgIEBpbmNsdWRlIGJvcmRlci1lbmQoJHNhZmUtYXJlYS1wb3NpdGlvbiwgJHR5cGUsICRjb2xvcik7XG4gICAgICAgIEBpbmNsdWRlIGJvcmRlci1lbmQoJHNhZmUtYXJlYS1wb3NpdGlvbi1lbnYsICR0eXBlLCAkY29sb3IpO1xuICAgIH1cbn1cblxuQG1peGluIHNhZmUtYXJlYS1tYXJnaW4taG9yaXpvbnRhbCgkc3RhcnQsICRlbmQ6ICRzdGFydCkge1xuICAgICRzYWZlLWFyZWEtZW5kOiBudWxsO1xuICAgICRzYWZlLWFyZWEtc3RhcnQ6IG51bGw7XG4gICAgJHNhZmUtYXJlYS1zdGFydC1lbnY6IG51bGw7XG4gICAgJHNhZmUtYXJlYS1lbmQtZW52OiBudWxsO1xuXG4gICAgQGlmICgkZW5kKSB7XG4gICAgICAgICRzYWZlLWFyZWEtZW5kOiBjYWxjKGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC1yaWdodCkgKyAjeyRlbmR9KTtcbiAgICAgICAgJHNhZmUtYXJlYS1lbmQtZW52OiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtcmlnaHQpICsgI3skZW5kfSk7XG4gICAgfVxuICAgIEBpZiAoJHN0YXJ0KSB7XG4gICAgICAgICRzYWZlLWFyZWEtc3RhcnQ6IGNhbGMoY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LWxlZnQpICsgI3skc3RhcnR9KTtcbiAgICAgICAgJHNhZmUtYXJlYS1zdGFydC1lbnY6IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC1sZWZ0KSArICN7JHN0YXJ0fSk7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgbWFyZ2luLWhvcml6b250YWwoJHN0YXJ0LCAkZW5kKTtcblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgIEBpbmNsdWRlIG1hcmdpbi1ob3Jpem9udGFsKCRzYWZlLWFyZWEtc3RhcnQsICRzYWZlLWFyZWEtZW5kKTtcbiAgICAgICAgQGluY2x1ZGUgbWFyZ2luLWhvcml6b250YWwoJHNhZmUtYXJlYS1zdGFydC1lbnYsICRzYWZlLWFyZWEtZW5kLWVudik7XG4gICAgfVxufVxuXG5AbWl4aW4gc2FmZS1hcmVhLXBhZGRpbmctc3RhcnQoJHN0YXJ0LCAkZW5kKSB7XG4gICAgJHNhZmUtYXJlYS1zdGFydDogY2FsYyhjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtbGVmdCkgKyAjeyRzdGFydH0pO1xuICAgICRzYWZlLWFyZWEtc3RhcnQtZW52OiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtbGVmdCkgKyAjeyRzdGFydH0pO1xuXG4gICAgQGluY2x1ZGUgcGFkZGluZy1ob3Jpem9udGFsKCRzdGFydCwgJGVuZCk7XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICBAaW5jbHVkZSBwYWRkaW5nLWhvcml6b250YWwoJHNhZmUtYXJlYS1zdGFydCwgJGVuZCk7XG4gICAgICAgIEBpbmNsdWRlIHBhZGRpbmctaG9yaXpvbnRhbCgkc2FmZS1hcmVhLXN0YXJ0LWVudiwgJGVuZCk7XG4gICAgfVxufVxuXG5AbWl4aW4gc2FmZS1hcmVhLXBhZGRpbmctZW5kKCRzdGFydCwgJGVuZCkge1xuICAgICRzYWZlLWFyZWEtZW5kOiBjYWxjKGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC1yaWdodCkgKyAjeyRlbmR9KTtcbiAgICAkc2FmZS1hcmVhLWVuZC1lbnY6IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC1yaWdodCkgKyAjeyRlbmR9KTtcblxuICAgIEBpbmNsdWRlIHBhZGRpbmctaG9yaXpvbnRhbCgkc3RhcnQsICRlbmQpO1xuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAgICAgQGluY2x1ZGUgcGFkZGluZy1ob3Jpem9udGFsKCRzdGFydCwgJHNhZmUtYXJlYS1lbmQpO1xuICAgICAgICBAaW5jbHVkZSBwYWRkaW5nLWhvcml6b250YWwoJHN0YXJ0LCAkc2FmZS1hcmVhLWVuZC1lbnYpO1xuICAgIH1cbn1cblxuQG1peGluIHNhZmUtYXJlYS1wb3NpdGlvbigkdG9wOiBudWxsLCAkZW5kOiBudWxsLCAkYm90dG9tOiBudWxsLCAkc3RhcnQ6IG51bGwpIHtcbiAgICBAaW5jbHVkZSBwb3NpdGlvbi1ob3Jpem9udGFsKCRzdGFydCwgJGVuZCk7XG4gICAgQGluY2x1ZGUgc2FmZS1wb3NpdGlvbi1ob3Jpem9udGFsKCRzdGFydCwgJGVuZCk7XG4gICAgdG9wOiAkdG9wO1xuICAgIGJvdHRvbTogJGJvdHRvbTtcbn1cblxuQG1peGluIGNvcmUtaGVhZGluZ3MoKSB7XG4gICAgaDEge1xuICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgfVxuICAgIGgyLCAuaXRlbS1oZWFkaW5nIHtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgIH1cbiAgICBoMyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICB9XG4gICAgaDQge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuICAgIGg1IHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgIH1cbiAgICBoNiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG59XG5cbkBtaXhpbiBjb3JlLWFzLWl0ZW1zKCkge1xuICAgIC5pdGVtLW1kLml0ZW0tYmxvY2sgPiAuaXRlbS1pbm5lciB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkbGlzdC1tZC1ib3JkZXItY29sb3I7XG4gICAgfVxuXG4gICAgLml0ZW0taW9zLml0ZW0tYmxvY2sgPiAuaXRlbS1pbm5lciB7XG4gICAgICAgIGJvcmRlci1ib3R0b206ICRoYWlybGluZXMtd2lkdGggc29saWQgJGxpc3QtaW9zLWJvcmRlci1jb2xvcjtcbiAgICB9XG5cbiAgICAmOmxhc3QtY2hpbGQgLml0ZW0gPiAuaXRlbS1pbm5lciB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgfVxufVxuXG5AbWl4aW4gY29yZS1pdGVtcygpIHtcbiAgICAmLml0ZW0tbWQuaXRlbS1ibG9jayA+IC5pdGVtLWlubmVyIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRsaXN0LW1kLWJvcmRlci1jb2xvcjtcbiAgICB9XG5cbiAgICAmLml0ZW0taW9zLml0ZW0tYmxvY2sgPiAuaXRlbS1pbm5lciB7XG4gICAgICAgIGJvcmRlci1ib3R0b206ICRoYWlybGluZXMtd2lkdGggc29saWQgJGxpc3QtaW9zLWJvcmRlci1jb2xvcjtcbiAgICB9XG5cbiAgICAmLml0ZW0tYmxvY2s6bGFzdC1jaGlsZCA+IC5pdGVtLWlubmVyIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgICB9XG59XG5cbkBtaXhpbiBkYXJrbW9kZSgpIHtcbiAgICAkcm9vdDogI3smfTtcblxuICAgIEBhdC1yb290IGJvZHkuZGFyayB7XG4gICAgICAgICN7JHJvb3R9IHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWl4aW4gaG9yaXpvbnRhbF9zY3JvbGxfaXRlbSgkd2lkdGgsICRtaW4td2lkdGgsICRtYXgtd2lkdGgpIHtcbiAgICBmbGV4OiAwIDAgJHdpZHRoO1xuICAgIG1pbi13aWR0aDogJG1pbi13aWR0aDtcbiAgICBtYXgtd2lkdGg6ICRtYXgtd2lkdGg7XG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbiAgICBkaXNwbGF5OiBibG9jaztcblxuICAgIGlvbi1jYXJkIHtcbiAgICAgICAgLS12ZXJ0aWNhbC1tYXJnaW46IDEwcHg7XG4gICAgICAgIC0taG9yaXpvbnRhbC1tYXJnaW46IDEwcHg7XG5cbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIHZhcigtLXZlcnRpY2FsLW1hcmdpbikgLSB2YXIoLS12ZXJ0aWNhbC1tYXJnaW4pKTtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSB2YXIoLS12ZXJ0aWNhbC1tYXJnaW4pIC0gdmFyKC0tdmVydGljYWwtbWFyZ2luKSk7XG4gICAgICAgIG1hcmdpbjogdmFyKC0tdmVydGljYWwtbWFyZ2luKSB2YXIoLS1ob3Jpem9udGFsLW1hcmdpbik7XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gICAgICAgICAgICAtLWhvcml6b250YWwtbWFyZ2luOiA2cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuaW9uLXRleHQtd3JhcCBpb24tbGFiZWwge1xuICAgICAgICAuaXRlbS1oZWFkaW5nLCBoMiwgcCB7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8vIENvbG9yIG1peGlucy5cbkBmdW5jdGlvbiBnZXRfYnJpZ2h0bmVzcygkY29sb3IpIHtcbiAgICBAcmV0dXJuIChyZWQoJGNvbG9yKSArIGdyZWVuKCRjb2xvcikgKyBibHVlKCRjb2xvcikpIC8gMztcbn1cblxuQGZ1bmN0aW9uIGdldF9jb250cmFzdF9jb2xvcigkY29sb3IpIHtcbiAgICAkYnJpZ2h0bmVzczogZ2V0X2JyaWdodG5lc3MoJGNvbG9yKTtcblxuICAgIEByZXR1cm4gaWYoJGJyaWdodG5lc3MgPCAxMjcsIHdoaXRlLCBibGFjayk7XG59XG4iLCIvKlxuICogSW1wb3J0ZWQgaW9uaWMgbWl4aW5zIGZvciBTQ1NTXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBQbGFjZSBoZXJlIG91ciBjdXN0b20gbWl4aW5zLlxuICogRXh0cmFjdGVkIGZyb20gaW9uaWMubWl4aW5zLnNjc3NcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2lvbmljLWZyYW1ld29yay9ibG9iL21hc3Rlci9jb3JlL3NyYy90aGVtZXMvaW9uaWMubWl4aW5zLnNjc3NcbiAqL1xuXG4vLyBSZXNwb25zaXZlIE1peGluc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIENyZWF0ZXMgYSBmaXhlZCB3aWR0aCBmb3IgdGhlIGdyaWQgYmFzZWQgb24gdGhlIHNjcmVlbiBzaXplXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBtYWtlLWdyaWQtd2lkdGhzKCR3aWR0aHM6ICRncmlkLXdpZHRocywgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XG4gIEBlYWNoICRicmVha3BvaW50LCAkd2lkdGggaW4gJHdpZHRocyB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkYnJlYWtwb2ludCwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICB3aWR0aDogJHdpZHRoO1xuICAgIH1cbiAgfVxuXG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLy8gQWRkcyBwYWRkaW5nIHRvIHRoZSBlbGVtZW50IGJhc2VkIG9uIGJyZWFrcG9pbnRzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBtYWtlLWJyZWFrcG9pbnQtcGFkZGluZygkcGFkZGluZ3MpIHtcbiAgQGVhY2ggJGJyZWFrcG9pbnQgaW4gbWFwLWtleXMoJHBhZGRpbmdzKSB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkYnJlYWtwb2ludCkge1xuICAgICAgJHBhZGRpbmc6IG1hcC1nZXQoJHBhZGRpbmdzLCAkYnJlYWtwb2ludCk7XG5cbiAgICAgIEBpbmNsdWRlIHBhZGRpbmcoJHBhZGRpbmcpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBHZXRzIHRoZSBhY3RpdmUgY29sb3IncyBjc3MgdmFyaWFibGUgZnJvbSBhIHZhcmlhdGlvbi4gQWxwaGEgaXMgb3B0aW9uYWwuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRXhhbXBsZSB1c2FnZTpcbi8vIGN1cnJlbnQtY29sb3IoYmFzZSkgPT4gdmFyKC0taW9uLWNvbG9yLWJhc2UpXG4vLyBjdXJyZW50LWNvbG9yKGNvbnRyYXN0LCAwLjEpID0+IHJnYmEodmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYiksIDAuMSlcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AZnVuY3Rpb24gY3VycmVudC1jb2xvcigkdmFyaWF0aW9uLCAkYWxwaGE6IG51bGwpIHtcbiAgQGlmICRhbHBoYSA9PSBudWxsIHtcbiAgICBAcmV0dXJuIHZhcigtLWlvbi1jb2xvci0jeyR2YXJpYXRpb259KTtcbiAgfSBAZWxzZSB7XG4gICAgQHJldHVybiByZ2JhKHZhcigtLWlvbi1jb2xvci0jeyR2YXJpYXRpb259LXJnYiksICN7JGFscGhhfSk7XG4gIH1cbn1cblxuLy8gTWl4ZXMgYSBjb2xvciB3aXRoIGJsYWNrIHRvIGNyZWF0ZSBpdHMgc2hhZGUuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQGZ1bmN0aW9uIGdldC1jb2xvci1zaGFkZSgkY29sb3IpIHtcbiAgQHJldHVybiBtaXgoIzAwMCwgJGNvbG9yLCAxMiUpO1xufVxuXG4vLyBNaXhlcyBhIGNvbG9yIHdpdGggd2hpdGUgdG8gY3JlYXRlIGl0cyB0aW50LlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBmdW5jdGlvbiBnZXQtY29sb3ItdGludCgkY29sb3IpIHtcbiAgQHJldHVybiBtaXgoI2ZmZiwgJGNvbG9yLCAxMCUpO1xufVxuXG4vLyBDb252ZXJ0cyBhIGNvbG9yIHRvIGEgY29tbWEgc2VwYXJhdGVkIHJnYi5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AZnVuY3Rpb24gY29sb3ItdG8tcmdiLWxpc3QoJGNvbG9yKSB7XG4gIEByZXR1cm4gI3tyZWQoJGNvbG9yKX0sI3tncmVlbigkY29sb3IpfSwje2JsdWUoJGNvbG9yKX07XG59XG5cblxuIC8vIElvbmljIENvbG9yc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEdlbmVyYXRlcyB0aGUgY29sb3IgY2xhc3NlcyBhbmQgdmFyaWFibGVzIGJhc2VkIG9uIHRoZVxuLy8gY29sb3JzIG1hcFxuXG5AbWl4aW4gZ2VuZXJhdGUtY29sb3IoJGNvbG9yLW5hbWUsICRjb2xvcnMpIHtcbiAgICAkYmFzZTogbWFwLWdldCgkY29sb3JzLCAkY29sb3ItbmFtZSk7XG5cbiAgICAkY29udHJhc3Q6IGdldF9jb250cmFzdF9jb2xvcigkYmFzZSk7XG4gICAgJHNoYWRlOiBnZXQtY29sb3Itc2hhZGUoJGJhc2UpO1xuICAgICR0aW50OiBnZXQtY29sb3ItdGludCgkYmFzZSk7XG5cbiAgICAtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfTogdmFyKC0tI3skY29sb3ItbmFtZX0sICN7JGJhc2V9KTtcbiAgICAtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1iYXNlOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0pO1xuICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LXJnYjogI3tjb2xvci10by1yZ2ItbGlzdCgkYmFzZSl9O1xuICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LWNvbnRyYXN0OiAjeyRjb250cmFzdH07XG4gICAgLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tY29udHJhc3QtcmdiOiAje2NvbG9yLXRvLXJnYi1saXN0KCRjb250cmFzdCl9O1xuICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LXNoYWRlOiAjeyRzaGFkZX07XG4gICAgLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tdGludDogI3skdGludH07XG5cbiAgICAuaW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9IHtcbiAgICAgICAgLS1pb24tY29sb3I6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfSk7XG4gICAgICAgIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1iYXNlKTtcbiAgICAgICAgLS1pb24tY29sb3ItcmdiOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tcmdiKTtcbiAgICAgICAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1jb250cmFzdCk7XG4gICAgICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LWNvbnRyYXN0LXJnYik7XG4gICAgICAgIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tc2hhZGUpO1xuICAgICAgICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tdGludCk7XG4gICAgfVxufVxuXG5AbWl4aW4gaW5wdXQtY292ZXIoKSB7XG4gICAgQGluY2x1ZGUgcG9zaXRpb24oMCwgbnVsbCwgbnVsbCwgMCk7XG4gICAgQGluY2x1ZGUgbWFyZ2luKDApO1xuXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgYm9yZGVyOiAwO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcblxuICAgICY6Oi1tb3otZm9jdXMtaW5uZXIge1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgfVxufVxuXG5AbWl4aW4gdGV4dC1pbmhlcml0KCkge1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICBmb250LXN0eWxlOiBpbmhlcml0O1xuICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICAgIGxldHRlci1zcGFjaW5nOiBpbmhlcml0O1xuICAgIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcbiAgICB0ZXh0LWluZGVudDogaW5oZXJpdDtcbiAgICB0ZXh0LW92ZXJmbG93OiBpbmhlcml0O1xuICAgIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xuICAgIHRleHQtYWxpZ246IGluaGVyaXQ7XG4gICAgd2hpdGUtc3BhY2U6IGluaGVyaXQ7XG4gICAgY29sb3I6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBidXR0b24tc3RhdGUoKSB7XG4gICAgQGluY2x1ZGUgcG9zaXRpb24oMCwgMCwgMCwgMCk7XG5cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICBjb250ZW50OiBcIlwiO1xuXG4gICAgb3BhY2l0eTogMDtcbn1cblxuLy8gRm9udCBzbW9vdGhpbmdcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbkBtaXhpbiBmb250LXNtb290aGluZygpIHtcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG4vLyBHZXQgdGhlIGtleSBmcm9tIGEgbWFwIGJhc2VkIG9uIHRoZSBpbmRleFxuQGZ1bmN0aW9uIGluZGV4LXRvLWtleSgkbWFwLCAkaW5kZXgpIHtcbiAgICAka2V5czogbWFwLWtleXMoJG1hcCk7XG5cbiAgICBAcmV0dXJuIG50aCgka2V5cywgJGluZGV4KTtcbn1cblxuXG4vLyBCcmVha3BvaW50IE1peGluc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIEJyZWFrcG9pbnQgdmlld3BvcnQgc2l6ZXMgYW5kIG1lZGlhIHF1ZXJpZXMuXG4vL1xuLy8gQnJlYWtwb2ludHMgYXJlIGRlZmluZWQgYXMgYSBtYXAgb2YgKG5hbWU6IG1pbmltdW0gd2lkdGgpLCBvcmRlciBmcm9tIHNtYWxsIHRvIGxhcmdlOlxuLy9cbi8vICAgICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweClcbi8vXG4vLyBUaGUgbWFwIGRlZmluZWQgaW4gdGhlIGAkc2NyZWVuLWJyZWFrcG9pbnRzYCBnbG9iYWwgdmFyaWFibGUgaXMgdXNlZCBhcyB0aGUgYCRicmVha3BvaW50c2AgYXJndW1lbnQgYnkgZGVmYXVsdC5cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIE1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1pbihzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDU3NnB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xuICAgICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG5cbiAgICBAcmV0dXJuIGlmKCRuYW1lICE9IGluZGV4LXRvLWtleSgkYnJlYWtwb2ludHMsIDEpLCAkbWluLCBudWxsKTtcbn1cblxuLy8gUmV0dXJucyBhIGJsYW5rIHN0cmluZyBpZiBzbWFsbGVzdCBicmVha3BvaW50LCBvdGhlcndpc2UgcmV0dXJucyB0aGUgbmFtZSB3aXRoIGEgZGFzaCBpbmZyb250LlxuLy8gVXNlZnVsIGZvciBtYWtpbmcgcmVzcG9uc2l2ZSB1dGlsaXRpZXMuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeCh4cywgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiXCIgIChSZXR1cm5zIGEgYmxhbmsgc3RyaW5nKVxuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiLXNtXCJcbkBmdW5jdGlvbiBicmVha3BvaW50LWluZml4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcbiAgICBAcmV0dXJuIGlmKGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpID09IG51bGwsIFwiXCIsIFwiLSN7JG5hbWV9XCIpO1xufVxuXG4vLyBNZWRpYSBvZiBhdCBsZWFzdCB0aGUgbWluaW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIHdpZGVyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xuICAgICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICAgIEBpZiAkbWluIHtcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuLy8gTmFtZSBvZiB0aGUgbmV4dCBicmVha3BvaW50LCBvciBudWxsIGZvciB0aGUgbGFzdCBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAkYnJlYWtwb2ludC1uYW1lczogKHhzIHNtIG1kIGxnIHhsKSlcbi8vICAgIG1kXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMsICRicmVha3BvaW50LW5hbWVzOiBtYXAta2V5cygkYnJlYWtwb2ludHMpKSB7XG4gICAgJG46IGluZGV4KCRicmVha3BvaW50LW5hbWVzLCAkbmFtZSk7XG4gICAgQHJldHVybiBpZigkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSwgbnVsbCk7XG59XG5cbi8vIE1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIHJlZHVjZWQgYnkgMC4wMnB4IHRvIHdvcmsgYXJvdW5kIHRoZSBsaW1pdGF0aW9ucyBvZlxuLy8gYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxuLy9cbi8vIFNlZSBodHRwczovL3d3dy53My5vcmcvVFIvbWVkaWFxdWVyaWVzLTQvI21xLW1pbi1tYXhcbi8vIFVzZXMgMC4wMnB4IHJhdGhlciB0aGFuIDAuMDFweCB0byB3b3JrIGFyb3VuZCBhIGN1cnJlbnQgcm91bmRpbmcgYnVnIGluIFNhZmFyaS5cdC8vIFVzZXMgMC4wMnB4IHJhdGhlciB0aGFuIDAuMDFweCB0byB3b3JrIGFyb3VuZCBhIGN1cnJlbnQgcm91bmRpbmcgYnVnIGluIFNhZmFyaS5cbi8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc4MjYxXHQvLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWF4KG1kLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNzY3Ljk4cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XG4gICAgJG1heDogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgICBAcmV0dXJuIGlmKCRtYXggYW5kICRtYXggPiAwLCAkbWF4IC0gLjAyLCBudWxsKTtcbn1cblxuLy8gTWVkaWEgb2YgYXQgbW9zdCB0aGUgbWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIGxhcmdlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcbiAgICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgICBAaWYgJG1heCB7XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2Uge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cblxuLy8gVGV4dCBEaXJlY3Rpb24gLSBsdHIgLyBydGxcbi8vXG4vLyBDU1MgZGVmYXVsdHMgdG8gdXNlIHRoZSBsdHIgY3NzLCBhbmQgYWRkcyBbZGlyPXJ0bF0gc2VsZWN0b3JzXG4vLyB0byBvdmVycmlkZSBsdHIgZGVmYXVsdHMuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbkBtaXhpbiBtdWx0aS1kaXIoKSB7XG4gICAgQGNvbnRlbnQ7XG5cbiAgICAvLyAkcm9vdDogI3smfTtcbiAgICAvLyBAYXQtcm9vdCBbZGlyXSB7XG4gICAgLy8gICAjeyRyb290fSB7XG4gICAgLy8gICAgIEBjb250ZW50O1xuICAgIC8vICAgfVxuICAgIC8vIH1cbn1cblxuQG1peGluIHJ0bCgpIHtcbiAgICAkcm9vdDogI3smfTtcblxuICAgIEBhdC1yb290IFtkaXI9cnRsXSB7XG4gICAgICAgICN7JHJvb3R9IHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWl4aW4gbHRyKCkge1xuICAgIEBjb250ZW50O1xufVxuXG5cbi8vIFNWRyBCYWNrZ3JvdW5kIEltYWdlIE1peGluXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN2Z1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIHN2Zy1iYWNrZ3JvdW5kLWltYWdlKCRzdmcsICRmbGlwLXJ0bDogZmFsc2UpIHtcbiAgICAkdXJsOiB1cmwtZW5jb2RlKCRzdmcpO1xuICAgICR2aWV3Qm94OiBzdHItc3BsaXQoc3RyLWV4dHJhY3QoJHN2ZywgXCJ2aWV3Qm94PSdcIiwgXCInXCIpLCBcIiBcIik7XG5cbiAgICBAaWYgJGZsaXAtcnRsICE9IHRydWUgb3IgJHZpZXdCb3ggPT0gbnVsbCB7XG4gICAgICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCN7JHVybH1cIik7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIHtcbiAgICAgICAgJHRyYW5zZm9ybTogXCJ0cmFuc2Zvcm09J3RyYW5zbGF0ZSgje250aCgkdmlld0JveCwgMyl9LCAwKSBzY2FsZSgtMSwgMSknXCI7XG4gICAgICAgICRmbGlwcGVkLXVybDogJHN2ZztcbiAgICAgICAgJGZsaXBwZWQtdXJsOiBzdHItcmVwbGFjZSgkZmxpcHBlZC11cmwsIFwiPHBhdGhcIiwgXCI8cGF0aCAjeyR0cmFuc2Zvcm19XCIpO1xuICAgICAgICAkZmxpcHBlZC11cmw6IHN0ci1yZXBsYWNlKCRmbGlwcGVkLXVybCwgXCI8bGluZVwiLCBcIjxsaW5lICN7JHRyYW5zZm9ybX1cIik7XG4gICAgICAgICRmbGlwcGVkLXVybDogc3RyLXJlcGxhY2UoJGZsaXBwZWQtdXJsLCBcIjxwb2x5Z29uXCIsIFwiPHBvbHlnb24gI3skdHJhbnNmb3JtfVwiKTtcbiAgICAgICAgJGZsaXBwZWQtdXJsOiB1cmwtZW5jb2RlKCRmbGlwcGVkLXVybCk7XG5cbiAgICAgICAgQGluY2x1ZGUgbHRyICgpIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCN7JHVybH1cIik7XG4gICAgICAgIH1cbiAgICAgICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsI3skZmxpcHBlZC11cmx9XCIpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBBZGQgcHJvcGVydHkgaG9yaXpvbnRhbFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBwcm9wZXJ0eS1ob3Jpem9udGFsKCRwcm9wLCAkc3RhcnQsICRlbmQ6ICRzdGFydCkge1xuICAgIEBpZiAkc3RhcnQgPT0gMCBhbmQgJGVuZCA9PSAwIHtcbiAgICAgICAgI3skcHJvcH0tbGVmdDogJHN0YXJ0O1xuICAgICAgICAjeyRwcm9wfS1yaWdodDogJGVuZDtcblxuICAgIH0gQGVsc2Uge1xuICAgICAgICAjeyRwcm9wfS1sZWZ0OiAkc3RhcnQ7XG4gICAgICAgICN7JHByb3B9LXJpZ2h0OiAkZW5kO1xuXG4gICAgICAgIEBhdC1yb290IHtcbiAgICAgICAgICAgIEBzdXBwb3J0cyAoKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCkpIHtcbiAgICAgICAgICAgICAgICAmIHtcbiAgICAgICAgICAgICAgICAgICAgQGlmICRzdGFydCAhPSBudWxsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICN7JHByb3B9LWxlZnQ6IHVuc2V0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIEBpZiAkZW5kICE9IG51bGwge1xuICAgICAgICAgICAgICAgICAgICAgICAgI3skcHJvcH0tcmlnaHQ6IHVuc2V0O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC0jeyRwcm9wfS1zdGFydDogJHN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICAjeyRwcm9wfS1pbmxpbmUtc3RhcnQ6ICRzdGFydDtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC0jeyRwcm9wfS1lbmQ6ICRlbmQ7XG4gICAgICAgICAgICAgICAgICAgICN7JHByb3B9LWlubGluZS1lbmQ6ICRlbmQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBBZGQgcHJvcGVydHkgZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHByb3Bcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b21cbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIEBwYXJhbSB7Ym9vbGVhbn0gJGNvbnRlbnQgaW5jbHVkZSBjb250ZW50IG9yIHVzZSBkZWZhdWx0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gcHJvcGVydHkoJHByb3AsICR0b3AsICRlbmQ6ICR0b3AsICRib3R0b206ICR0b3AsICRzdGFydDogJGVuZCkge1xuICAgIEBpbmNsdWRlIHByb3BlcnR5LWhvcml6b250YWwoJHByb3AsICRzdGFydCwgJGVuZCk7XG4gICAgI3skcHJvcH0tdG9wOiAkdG9wO1xuICAgICN7JHByb3B9LWJvdHRvbTogJGJvdHRvbTtcbn1cblxuLy8gQWRkIHBhZGRpbmcgaG9yaXpvbnRhbFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBwYWRkaW5nLWhvcml6b250YWwoJHN0YXJ0LCAkZW5kOiAkc3RhcnQpIHtcbiAgICBAaW5jbHVkZSBwcm9wZXJ0eS1ob3Jpem9udGFsKHBhZGRpbmcsICRzdGFydCwgJGVuZCk7XG59XG5cbi8vIEFkZCBwYWRkaW5nIGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3Bcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbVxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIHBhZGRpbmcoJHRvcCwgJGVuZDogJHRvcCwgJGJvdHRvbTogJHRvcCwgJHN0YXJ0OiAkZW5kKSB7XG4gICAgQGluY2x1ZGUgcHJvcGVydHkocGFkZGluZywgJHRvcCwgJGVuZCwgJGJvdHRvbSwgJHN0YXJ0KTtcbn1cblxuLy8gQWRkIG1hcmdpbiBob3Jpem9udGFsXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIG1hcmdpbi1ob3Jpem9udGFsKCRzdGFydCwgJGVuZDogJHN0YXJ0KSB7XG4gICAgQGluY2x1ZGUgcHJvcGVydHktaG9yaXpvbnRhbChtYXJnaW4sICRzdGFydCwgJGVuZCk7XG59XG5cbi8vIEFkZCBtYXJnaW4gZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gbWFyZ2luKCR0b3AsICRlbmQ6ICR0b3AsICRib3R0b206ICR0b3AsICRzdGFydDogJGVuZCkge1xuICAgIEBpbmNsdWRlIHByb3BlcnR5KG1hcmdpbiwgJHRvcCwgJGVuZCwgJGJvdHRvbSwgJHN0YXJ0KTtcbn1cblxuLy8gQWRkIHBvc2l0aW9uIGhvcml6b250YWxcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnQgLSBhbW91bnQgdG8gcG9zaXRpb24gc3RhcnRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kIC0gYW1vdW50IHRvIGxlZnQ6IDA7IGVuZFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIHBvc2l0aW9uLWhvcml6b250YWwoJHN0YXJ0OiBudWxsLCAkZW5kOiBudWxsKSB7XG4gICAgQGlmICRzdGFydCA9PSAkZW5kIHtcbiAgICAgICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xuICAgICAgICAgICAgbGVmdDogJHN0YXJ0O1xuICAgICAgICAgICAgcmlnaHQ6ICRlbmQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIHtcbiAgICAgICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgICAgICAgbGVmdDogJHN0YXJ0O1xuICAgICAgICAgICAgcmlnaHQ6ICRlbmQ7XG4gICAgICAgIH1cbiAgICAgICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgICAgICAgbGVmdDogdW5zZXQ7XG4gICAgICAgICAgICByaWdodDogdW5zZXQ7XG5cbiAgICAgICAgICAgIGxlZnQ6ICRlbmQ7XG4gICAgICAgICAgICByaWdodDogJHN0YXJ0O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBBZGQgcG9zaXRpb24gZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gcG9zaXRpb24oJHRvcDogbnVsbCwgJGVuZDogbnVsbCwgJGJvdHRvbTogbnVsbCwgJHN0YXJ0OiBudWxsKSB7XG4gICAgQGluY2x1ZGUgcG9zaXRpb24taG9yaXpvbnRhbCgkc3RhcnQsICRlbmQpO1xuICAgIHRvcDogJHRvcDtcbiAgICBib3R0b206ICRib3R0b207XG59XG5cbi8vIEFkZCBib3JkZXIgZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gYm9yZGVyKCR0b3AsICRlbmQ6ICR0b3AsICRib3R0b206ICR0b3AsICRzdGFydDogJGVuZCkge1xuICAgIEBpbmNsdWRlIHByb3BlcnR5KGJvcmRlciwgJHRvcCwgJGVuZCwgJGJvdHRvbSwgJHN0YXJ0KTtcbn1cblxuLy8gQWRkIGJvcmRlciByYWRpdXMgZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcC1zdGFydFxuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3AtZW5kXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbS1lbmRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tLXN0YXJ0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gYm9yZGVyLXJhZGl1cygkdG9wLXN0YXJ0LCAkdG9wLWVuZDogJHRvcC1zdGFydCwgJGJvdHRvbS1lbmQ6ICR0b3Atc3RhcnQsICRib3R0b20tc3RhcnQ6ICR0b3AtZW5kKSB7XG4gICAgQGlmICR0b3Atc3RhcnQgPT0gJHRvcC1lbmQgYW5kICR0b3Atc3RhcnQgPT0gJGJvdHRvbS1lbmQgYW5kICR0b3Atc3RhcnQgPT0gJGJvdHRvbS1zdGFydCB7XG4gICAgICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICR0b3Atc3RhcnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIHtcbiAgICAgICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJHRvcC1zdGFydDtcbiAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAkdG9wLWVuZDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkYm90dG9tLWVuZDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRib3R0b20tc3RhcnQ7XG4gICAgICAgIH1cblxuICAgICAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkdG9wLWVuZDtcbiAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAkdG9wLXN0YXJ0O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICRib3R0b20tc3RhcnQ7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkYm90dG9tLWVuZDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gQWRkIGRpcmVjdGlvbiBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZGlyIC0gRGlyZWN0aW9uIG9uIExUUlxuQG1peGluIGRpcmVjdGlvbigkZGlyKSB7XG4gICAgJG90aGVyLWRpcjogbnVsbDtcblxuICAgIEBpZiAkZGlyID09IGx0ciB7XG4gICAgICAgICRvdGhlci1kaXI6IHJ0bDtcbiAgICB9IEBlbHNlIHtcbiAgICAgICAgJG90aGVyLWRpcjogbHRyO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgICAgZGlyZWN0aW9uOiAkZGlyO1xuICAgIH1cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICAgIGRpcmVjdGlvbjogJG90aGVyLWRpcjtcbiAgICB9XG59XG5cbi8vIEFkZCBmbG9hdCBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc2lkZVxuLy8gQHBhcmFtIHtzdHJpbmd9ICRkZWNvcmF0b3IgLSAhaW1wb3J0YW50XG5AbWl4aW4gZmxvYXQoJHNpZGUsICRkZWNvcmF0b3I6IG51bGwpIHtcbiAgICBAaWYgJHNpZGUgPT0gc3RhcnQge1xuICAgICAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICAgICAgICBmbG9hdDogbGVmdCAkZGVjb3JhdG9yO1xuICAgICAgICB9XG4gICAgICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodCAkZGVjb3JhdG9yO1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkc2lkZSA9PSBlbmQge1xuICAgICAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQgJGRlY29yYXRvcjtcbiAgICAgICAgfVxuICAgICAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICAgICAgICBmbG9hdDogbGVmdCAkZGVjb3JhdG9yO1xuICAgICAgICB9XG4gICAgfSBAZWxzZSB7XG4gICAgICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgICAgICAgIGZsb2F0OiAkc2lkZSAkZGVjb3JhdG9yO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWl4aW4gYmFja2dyb3VuZC1wb3NpdGlvbigkaG9yaXpvbnRhbCwgJGhvcml6b250YWwtYW1vdW50OiBudWxsLCAkdmVydGljYWw6IG51bGwsICR2ZXJ0aWNhbC1hbW91bnQ6IG51bGwpIHtcbiAgICBAaWYgJGhvcml6b250YWwgPT0gc3RhcnQgb3IgJGhvcml6b250YWwgPT0gZW5kIHtcbiAgICAgICAgJGhvcml6b250YWwtbHRyOiBudWxsO1xuICAgICAgICAkaG9yaXpvbnRhbC1ydGw6IG51bGw7XG4gICAgICAgIEBpZiAkaG9yaXpvbnRhbCA9PSBzdGFydCB7XG4gICAgICAgICAgICAkaG9yaXpvbnRhbC1sdHI6IGxlZnQ7XG4gICAgICAgICAgICAkaG9yaXpvbnRhbC1ydGw6IHJpZ2h0O1xuICAgICAgICB9IEBlbHNlIHtcbiAgICAgICAgICAgICRob3Jpem9udGFsLWx0cjogcmlnaHQ7XG4gICAgICAgICAgICAkaG9yaXpvbnRhbC1ydGw6IGxlZnQ7XG4gICAgICAgIH1cblxuICAgICAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAkaG9yaXpvbnRhbC1sdHIgJGhvcml6b250YWwtYW1vdW50ICR2ZXJ0aWNhbCAkdmVydGljYWwtYW1vdW50O1xuICAgICAgICB9XG4gICAgICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246ICRob3Jpem9udGFsLXJ0bCAkaG9yaXpvbnRhbC1hbW91bnQgJHZlcnRpY2FsICR2ZXJ0aWNhbC1hbW91bnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIHtcbiAgICAgICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogJGhvcml6b250YWwgJGhvcml6b250YWwtYW1vdW50ICR2ZXJ0aWNhbCAkdmVydGljYWwtYW1vdW50O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWl4aW4gdHJhbnNmb3JtLW9yaWdpbigkeC1heGlzLCAkeS1heGlzOiBudWxsKSB7XG4gICAgQGlmICR4LWF4aXMgPT0gc3RhcnQge1xuICAgICAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0ICR5LWF4aXM7XG4gICAgICAgIH1cbiAgICAgICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgJHktYXhpcztcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJHgtYXhpcyA9PSBlbmQge1xuICAgICAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCAkeS1heGlzO1xuICAgICAgICB9XG4gICAgICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgJHktYXhpcztcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJHgtYXhpcyA9PSBsZWZ0IG9yICR4LWF4aXMgPT0gcmlnaHQge1xuICAgICAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAkeC1heGlzICR5LWF4aXM7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIHtcbiAgICAgICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogJHgtYXhpcyAkeS1heGlzO1xuICAgICAgICB9XG4gICAgICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNhbGMoMTAwJSAtICN7JHgtYXhpc30pICR5LWF4aXM7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIEFkZCB0cmFuc2Zvcm0gZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRyYW5zZm9ybXMgLSBjb21tYSBzZXBhcmF0ZWQgbGlzdCBvZiB0cmFuc2Zvcm1zXG5AbWl4aW4gdHJhbnNmb3JtKCR0cmFuc2Zvcm1zLi4uKSB7XG4gICAgJGV4dHJhOiBudWxsO1xuXG4gICAgJHg6IG51bGw7XG4gICAgJGx0ci10cmFuc2xhdGU6IG51bGw7XG4gICAgJHJ0bC10cmFuc2xhdGU6IG51bGw7XG5cbiAgICBAZWFjaCAkdHJhbnNmb3JtIGluICR0cmFuc2Zvcm1zIHtcbiAgICAgICAgQGlmIChzdHItaW5kZXgoJHRyYW5zZm9ybSwgdHJhbnNsYXRlM2QpKSB7XG4gICAgICAgICAgICAkdHJhbnNmb3JtOiBzdHItcmVwbGFjZSgkdHJhbnNmb3JtLCAndHJhbnNsYXRlM2QoJyk7XG4gICAgICAgICAgICAkdHJhbnNmb3JtOiBzdHItcmVwbGFjZSgkdHJhbnNmb3JtLCAnKScpO1xuXG4gICAgICAgICAgICAkY29vcmRpbmF0ZXM6IHN0ci1zcGxpdCgkdHJhbnNmb3JtLCAnLCcpO1xuXG4gICAgICAgICAgICAkeDogbnRoKCRjb29yZGluYXRlcywgMSk7XG4gICAgICAgICAgICAkeTogbnRoKCRjb29yZGluYXRlcywgMik7XG4gICAgICAgICAgICAkejogbnRoKCRjb29yZGluYXRlcywgMyk7XG5cbiAgICAgICAgICAgICRsdHItdHJhbnNsYXRlOiB0cmFuc2xhdGUzZCgkeCwgJHksICR6KTtcbiAgICAgICAgICAgICRydGwtdHJhbnNsYXRlOiB0cmFuc2xhdGUzZChjYWxjKC0xICogI3skeH0pLCAkeSwgJHopO1xuICAgICAgICB9IEBlbHNlIHtcbiAgICAgICAgICAgIEBpZiAkZXh0cmEgPT0gbnVsbCB7XG4gICAgICAgICAgICAgICAgJGV4dHJhOiAkdHJhbnNmb3JtO1xuICAgICAgICAgICAgfSBAZWxzZSB7XG4gICAgICAgICAgICAgICAgJGV4dHJhOiAkZXh0cmEgJHRyYW5zZm9ybTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBpZiAkeCA9PSAnMCcgb3IgJHggPT0gbnVsbCB7XG4gICAgICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogJGx0ci10cmFuc2xhdGUgJGV4dHJhO1xuICAgICAgICB9XG4gICAgfSBAZWxzZSB7XG4gICAgICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogJGx0ci10cmFuc2xhdGUgJGV4dHJhO1xuICAgICAgICB9XG5cbiAgICAgICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiAkcnRsLXRyYW5zbGF0ZSAkZXh0cmE7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvKlxuICogQXBwIEN1c3RvbSBBcHAgdmFyaWFibGVzIFNDU1NcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFBsYWNlIGhlcmUgYWxsIGN1c3RvbSBhcHAgdmFyaWFibGVzLlxuICovXG4gJGJyYW5kLWNvbG9yOiAjMUE5REQ3ICFkZWZhdWx0O1xuIiwiLypcbiAqIEFwcCBHbG9iYWwgdmFyaWFibGVzIFNDU1NcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFBsYWNlIGhlcmUgYWxsIGdsb2JhbCB2YXJpYWJsZXMuXG4gKi9cblxuJGJsYWNrOiAgICAgICAgICAgIzI4MjgyOCAhZGVmYXVsdDsgLy8gSGVhZGluZ3MsIHN0YW5kYXJkIHRleHQuXG4kZ3JheS1kYXJrZXI6ICAgICAjNjg2NTY2ICFkZWZhdWx0O1xuJGdyYXktZGFyazogICAgICAgIzllOWU5ZSAhZGVmYXVsdDtcbiRncmF5OiAgICAgICAgICAgICNkZGRkZGQgIWRlZmF1bHQ7XG4kZ3JheS1saWdodDogICAgICAjZTllOWU5ICFkZWZhdWx0OyAvLyBCYWNrZ3JvdW5kLlxuJGdyYXktbGlnaHRlcjogICAgI2Y1ZjVmNSAhZGVmYXVsdDtcbiR3aGl0ZTogICAgICAgICAgICNmZmZmZmYgIWRlZmF1bHQ7IC8vIEJhY2tncm91bmQsIHJldmVyc2VkIHRleHQuXG5cbiRibHVlOiAgICAgICAgICAgICMwMDY0ZDIgIWRlZmF1bHQ7IC8vIExpbmssIGJhY2tncm91bmQuXG4kYmx1ZS1saWdodDogICAgICBtaXgoJGJsdWUsIHdoaXRlLCAyMCUpICFkZWZhdWx0OyAvLyBCYWNrZ3JvdW5kLlxuJGJsdWUtZGFyazogICAgICAgZGFya2VuKCRibHVlLCAxMCUpICFkZWZhdWx0O1xuXG4kZ3JlZW46ICAgICAgICAgICAjNWU4MTAwICFkZWZhdWx0OyAvLyBBY2NlbnQuXG4kZ3JlZW4tbGlnaHQ6ICAgICBtaXgoJGdyZWVuLCB3aGl0ZSwgMjAlKSAhZGVmYXVsdDtcbiRncmVlbi1kYXJrOiAgICAgIGRhcmtlbigkZ3JlZW4sIDEwJSkgIWRlZmF1bHQ7XG5cbiRyZWQ6ICAgICAgICAgICAgICNjYjNkNGQgIWRlZmF1bHQ7XG4kcmVkLWxpZ2h0OiAgICAgICBtaXgoJHJlZCwgd2hpdGUsIDIwJSkgIWRlZmF1bHQ7XG4kcmVkLWRhcms6ICAgICAgICBkYXJrZW4oJHJlZCwgMTAlKSAhZGVmYXVsdDtcblxuJHllbGxvdzogICAgICAgICAgI2ZiYWQxYSAhZGVmYXVsdDsgLy8gQWNjZW50IChuZXZlciB0ZXh0KS5cbiR5ZWxsb3ctbGlnaHQ6ICAgIG1peCgkeWVsbG93LCB3aGl0ZSwgMjAlKSAhZGVmYXVsdDtcbiR5ZWxsb3ctZGFyazogICAgIG1peCgkeWVsbG93LCBibGFjaywgNDAlKSAhZGVmYXVsdDtcblxuJGJyYW5kLWNvbG9yOiAgICAjZjk4MDEyICFkZWZhdWx0O1xuXG4kdGV4dC1jb2xvcjogICAgICAgICAgICAgICAkYmxhY2sgIWRlZmF1bHQ7XG4kdGV4dC1jb2xvci1yZ2I6ICAgICAgICAgICBjb2xvci10by1yZ2ItbGlzdCgkdGV4dC1jb2xvcikgIWRlZmF1bHQ7XG4kdGV4dC1jb2xvci1kYXJrOiAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kdGV4dC1jb2xvci1kYXJrLXJnYjogICAgICBjb2xvci10by1yZ2ItbGlzdCgkdGV4dC1jb2xvci1kYXJrKSAhZGVmYXVsdDtcblxuJGJhY2tncm91bmQtY29sb3I6ICAgICAgICAgICRncmF5LWxpZ2h0ICFkZWZhdWx0O1xuJGJhY2tncm91bmQtY29sb3ItcmdiOiAgICAgIGNvbG9yLXRvLXJnYi1saXN0KCRiYWNrZ3JvdW5kLWNvbG9yKSAhZGVmYXVsdDtcbiRiYWNrZ3JvdW5kLWNvbG9yLWRhcms6ICAgICBtaXgoI2ZmZmZmZiwgIzAwMDAwMCwgMTAlKSAhZGVmYXVsdDsgLy8gIzFhMWExYVxuJGJhY2tncm91bmQtY29sb3ItZGFyay1yZ2I6IGNvbG9yLXRvLXJnYi1saXN0KCRiYWNrZ3JvdW5kLWNvbG9yLWRhcmspICFkZWZhdWx0O1xuXG4kaW9uLWl0ZW0tYmFja2dyb3VuZDogICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kaW9uLWl0ZW0tYmFja2dyb3VuZC1yZ2I6ICBjb2xvci10by1yZ2ItbGlzdCgkaW9uLWl0ZW0tYmFja2dyb3VuZCkgIWRlZmF1bHQ7XG4kaW9uLWl0ZW0tYmFja2dyb3VuZC1kYXJrOiBtaXgoI2ZmZmZmZiwgIzAwMDAwMCwgMjAlKSAhZGVmYXVsdDsgLy8gIzMzMzMzM1xuJGlvbi1pdGVtLWJhY2tncm91bmQtZGFyay1yZ2I6IGNvbG9yLXRvLXJnYi1saXN0KCRpb24taXRlbS1iYWNrZ3JvdW5kLWRhcmspICFkZWZhdWx0O1xuXG4kcHJpbWFyeTogICAgJGJyYW5kLWNvbG9yICFkZWZhdWx0O1xuJGRhbmdlcjogICAgICRyZWQgIWRlZmF1bHQ7XG4kd2FybmluZzogICAgJHllbGxvdyAhZGVmYXVsdDtcbiRzdWNjZXNzOiAgICAkZ3JlZW4gIWRlZmF1bHQ7XG4kaW5mbzogICAgICAgJGJsdWUgIWRlZmF1bHQ7XG4kbGlnaHQ6ICAgICAgJGdyYXktbGlnaHRlciAhZGVmYXVsdDtcbiRtZWRpdW06ICAgICAkZ3JheS1saWdodCAhZGVmYXVsdDtcbiRkYXJrOiAgICAgICAkYmxhY2sgIWRlZmF1bHQ7XG5cbiRjb2xvcnM6ICAoXG4gICAgcHJpbWFyeTogJHByaW1hcnksXG4gICAgc3VjY2VzczogJHN1Y2Nlc3MsXG4gICAgd2FybmluZzogJHdhcm5pbmcsXG4gICAgZGFuZ2VyOiAgJGRhbmdlcixcbiAgICBpbmZvOiAkaW5mbyxcbiAgICBsaWdodDogJGxpZ2h0LFxuICAgIG1lZGl1bTogJG1lZGl1bSxcbiAgICBkYXJrOiAkZGFya1xuKSAhZGVmYXVsdDtcblxuJHByaW1hcnktZGFyazogICAgJGJyYW5kLWNvbG9yICFkZWZhdWx0O1xuJGRhbmdlci1kYXJrOiAgICAgbWl4KCRyZWQsIHdoaXRlLCA0MCUpICFkZWZhdWx0O1xuJHdhcm5pbmctZGFyazogICAgbWl4KCR5ZWxsb3csIHdoaXRlLCA0MCUpICFkZWZhdWx0O1xuJHN1Y2Nlc3MtZGFyazogICAgbWl4KCRncmVlbiwgd2hpdGUsIDQwJSkgIWRlZmF1bHQ7XG4kaW5mby1kYXJrOiAgICAgICBtaXgoJGJsdWUsIHdoaXRlLCA0MCUpICFkZWZhdWx0O1xuJGxpZ2h0LWRhcms6ICAgICAgJGRhcmsgIWRlZmF1bHQ7XG4kbWVkaXVtLWRhcms6ICAgICAkZ3JheS1saWdodCAhZGVmYXVsdDtcbiRkYXJrLWRhcms6ICAgICAgICRsaWdodCAhZGVmYXVsdDtcblxuJGNvbG9ycy1kYXJrOiAgKFxuICAgIHByaW1hcnk6ICRwcmltYXJ5LWRhcmssXG4gICAgc3VjY2VzczogJHN1Y2Nlc3MtZGFyayxcbiAgICB3YXJuaW5nOiAkd2FybmluZy1kYXJrLFxuICAgIGRhbmdlcjogJGRhbmdlci1kYXJrLFxuICAgIGluZm86ICRpbmZvLWRhcmssXG4gICAgbGlnaHQ6ICRsaWdodC1kYXJrLFxuICAgIG1lZGl1bTogJG1lZGl1bS1kYXJrLFxuICAgIGRhcms6ICRkYXJrLWRhcmssXG4pICFkZWZhdWx0O1xuXG4vKipcbiAqIExheW91dCBCcmVha3BvaW50c1xuICpcbiAqIGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvbGF5b3V0L2dyaWQjZGVmYXVsdC1icmVha3BvaW50c1xuICovXG5cbi8vIFRoZSBtaW5pbXVtIGRpbWVuc2lvbnMgYXQgd2hpY2ggeW91ciBsYXlvdXQgd2lsbCBjaGFuZ2UsXG4vLyBhZGFwdGluZyB0byBkaWZmZXJlbnQgc2NyZWVuIHNpemVzLCBmb3IgdXNlIGluIG1lZGlhIHF1ZXJpZXNcbiRzY3JlZW4tYnJlYWtwb2ludHM6IChcbiAgICB4czogMCxcbiAgICBzbTogNTc2cHgsXG4gICAgbWQ6IDc2OHB4LFxuICAgIGxnOiA5OTJweCxcbiAgICB0YWJsZXQ6IDk5MnB4LFxuICAgIHhsOiAxMjAwcHhcbikgIWRlZmF1bHQ7XG5cbiRjb3JlLWNvdXJzZS1pbWFnZS1iYWNrZ3JvdW5kOiAjODFlY2VjLCAjNzRiOWZmLCAjYTI5YmZlLCAjZGZlNmU5LCAjMDBiODk0LCAjMDk4NGUzLCAjYjJiZWMzLCAjZmRjYjZlLCAjZmQ3OWE4LCAjNmM1Y2U3ICFkZWZhdWx0O1xuJGNvcmUtZGQtcXVlc3Rpb24tY29sb3JzOiAjRkZGRkZGLCAjQjBDNERFLCAjRENEQ0RDLCAjRDhCRkQ4LCAjODdDRUZBLCAjREFBNTIwLCAjRkZENzAwLCAjRjBFNjhDICFkZWZhdWx0O1xuJGNvcmUtdGV4dC1oaWdodGxpZ2h0LWJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJGJsdWUsIDQwJSkgIWRlZmF1bHQ7XG5cbiRjb3JlLWZpeGVkLXVybDogZmFsc2UgIWRlZmF1bHQ7XG4kY29yZS1kYXNoYm9hcmQtbG9nbzogZmFsc2UgIWRlZmF1bHQ7XG4kY29yZS1hbHdheXMtc2hvdy1tYWluLW1lbnU6IGZhbHNlICFkZWZhdWx0O1xuJGNvcmUtZm9ybWF0LXRleHQtbmV2ZXItc2hvcnRlbjogZmFsc2UgIWRlZmF1bHQ7XG5cbiRjb3JlLXNob3ctY291cnNlaW1hZ2Utb24tY291cnNlOiBmYWxzZSAhZGVmYXVsdDtcbiRjb3JlLWhpZGUtcHJvZ3Jlc3Mtb24tY291cnNlOiBmYWxzZSAhZGVmYXVsdDtcbiRjb3JlLWhpZGUtcHJvZ3Jlc3Mtb24tc2VjdGlvbi1zZWxlY3RvcjogZmFsc2UgIWRlZmF1bHQ7XG5cbiRjb3JlLWNvdXJzZS1oaWRlLXRodW1iLW9uLWNhcmRzOiBmYWxzZSAhZGVmYXVsdDtcbiRjb3JlLWNvdXJzZS10aHVtYi1vbi1jYXJkcy1iYWNrZ3JvdW5kOiBudWxsICFkZWZhdWx0O1xuJGNvcmUtY291cnNlLWhpZGUtcHJvZ3Jlc3Mtb24tY2FyZHM6IGZhbHNlICFkZWZhdWx0O1xuXG4vLyBDb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIGxvZ2luIHBhZ2UuXG4kY29yZS1sb2dpbi1idXR0b24tb3V0bGluZTogZmFsc2UgIWRlZmF1bHQ7XG4kY29yZS1sb2dpbi1idXR0b24tb3V0bGluZS1kYXJrOiAkY29yZS1sb2dpbi1idXR0b24tb3V0bGluZSAhZGVmYXVsdDtcbiRjb3JlLWxvZ2luLWxvYWRpbmctY29sb3I6IGZhbHNlICFkZWZhdWx0O1xuJGNvcmUtbG9naW4tbG9hZGluZy1jb2xvci1kYXJrOiAkdGV4dC1jb2xvci1kYXJrICFkZWZhdWx0O1xuJGNvcmUtbG9naW4taGlkZS1mb3Jnb3QtcGFzc3dvcmQ6IGZhbHNlICFkZWZhdWx0O1xuJGNvcmUtbG9naW4taGlkZS1uZWVkLWhlbHA6IGZhbHNlICFkZWZhdWx0O1xuXG4vLyBDb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIG1vcmUgcGFnZS5cbiRjb3JlLW1vcmUtaGlkZS1zaXRlaW5mbzogZmFsc2UgIWRlZmF1bHQ7XG4kY29yZS1tb3JlLWhpZGUtc2l0ZW5hbWU6IGZhbHNlICFkZWZhdWx0O1xuJGNvcmUtbW9yZS1oaWRlLXNpdGV1cmw6IGZhbHNlICFkZWZhdWx0O1xuIiwiQGltcG9ydCBcIn50aGVtZS9nbG9iYWxzLnNjc3NcIjtcblxuOmhvc3Qge1xuICAgIGlvbi1jb250ZW50IHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWFsdGVybmF0aXZlKTtcblxuICAgICAgICAmOjpwYXJ0KHNjcm9sbCkge1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5hZGRvbi1tZXNzYWdlcy1kaXNjdXNzaW9uLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWFsdGVybmF0aXZlKTtcbiAgICB9XG5cbiAgICAuYWRkb24tbWVzc2FnZXMtZGF0ZSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgIH1cblxuICAgIC8vIE1lc3NhZ2UgaXRlbS5cbiAgICBpb24taXRlbS5hZGRvbi1tZXNzYWdlIHtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIHBhZGRpbmc6IDAgOHB4IDAgOHB4O1xuICAgICAgICBtYXJnaW46IDEwcHggOHB4IDAgOHB4O1xuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWFkZG9uLW1lc3NhZ2VzLW1lc3NhZ2UtYmcpO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTtcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgICAgIC0tbWluLWhlaWdodDogdmFyKC0tYTExeS1taW4tdGFyZ2V0LXNpemUpO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIEBpbmNsdWRlIGNvcmUtdHJhbnNpdGlvbih3aWR0aCk7XG4gICAgICAgIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGRpc3BsYXkgYnViYmxlIHRhaWxzLlxuICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcblxuICAgICAgICAmOjpwYXJ0KG5hdGl2ZSkge1xuICAgICAgICAgICAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDA7XG4gICAgICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvcmUtZm9ybWF0LXRleHQgPiBwOm9ubHktY2hpbGQge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICB9XG5cbiAgICAgICAgLmFkZG9uLW1lc3NhZ2UtdXNlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xuXG4gICAgICAgICAgICBjb3JlLXVzZXItYXZhdGFyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAtLWNvcmUtYXZhdGFyLXNpemU6IHZhcigtLWFkZG9uLW1lc3NhZ2VzLWF2YXRhci1zaXplKTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgcGFkZGluZy1ob3Jpem9udGFsKC41cmVtKTtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpb24tbm90ZSB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYWRkb24tbWVzc2FnZXMtbWVzc2FnZS1ub3RlLXRleHQpO1xuICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1hZGRvbi1tZXNzYWdlcy1tZXNzYWdlLW5vdGUtZm9udC1zaXplKTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMCA4cHggMDtcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgICAgICB9XG5cbiAgICAgICAgJlt0YXBwYWJsZV06YWN0aXZlIHtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tYWRkb24tbWVzc2FnZXMtbWVzc2FnZS1hY3RpdmF0ZWQtYmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmFkZG9uLW1lc3NhZ2UtdGV4dCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgICoge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAudGFpbCB7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgICAgYm9yZGVyOiAwLjVyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3VjaC1hY3Rpb246IG5vbmU7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEZWZpbmVzIHdoZW4gYW4gaXRlbS1tZXNzYWdlIGlzIHRoZSB1c2VyJ3MuXG4gICAgICAgICYuYWRkb24tbWVzc2FnZS1taW5lIHtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tYWRkb24tbWVzc2FnZXMtbWVzc2FnZS1taW5lLWJnKTtcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuXG4gICAgICAgICAgICAmW3RhcHBhYmxlXTphY3RpdmUge1xuICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tYWRkb24tbWVzc2FnZXMtbWVzc2FnZS1taW5lLWFjdGl2YXRlZC1iZyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zcGlubmVyIHtcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBmbG9hdChlbmQpO1xuICAgICAgICAgICAgICAgIEBpbmNsdWRlIG1hcmdpbigycHgsIC0zcHgsIC0ycHgsIDVweCk7XG5cbiAgICAgICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnRhaWwge1xuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHBvc2l0aW9uKG51bGwsIC04cHgsIG51bGwsIG51bGwpO1xuICAgICAgICAgICAgICAgIEBpbmNsdWRlIG1hcmdpbi1ob3Jpem9udGFsKG51bGwsIC0wLjVyZW0pO1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLWFkZG9uLW1lc3NhZ2VzLW1lc3NhZ2UtbWluZS1iZyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICZbdGFwcGFibGVdOmFjdGl2ZSAudGFpbCB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tYWRkb24tbWVzc2FnZXMtbWVzc2FnZS1taW5lLWFjdGl2YXRlZC1iZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLmFkZG9uLW1lc3NhZ2Utbm90LW1pbmUgLnRhaWwge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tYWRkb24tbWVzc2FnZXMtbWVzc2FnZS1iZyk7XG4gICAgICAgICAgICBAaW5jbHVkZSBwb3NpdGlvbihudWxsLCBudWxsLCBudWxsLCAtOHB4KTtcbiAgICAgICAgICAgIEBpbmNsdWRlIG1hcmdpbi1ob3Jpem9udGFsKC0wLjVyZW0sIG51bGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgJlt0YXBwYWJsZV0uYWRkb24tbWVzc2FnZS1ub3QtbWluZS5hY3RpdmF0ZWQgLnRhaWwge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tYWRkb24tbWVzc2FnZXMtbWVzc2FnZS1hY3RpdmF0ZWQtYmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmFkZG9uLW1lc3NhZ2VzLWRlbGV0ZS1idXR0b24ge1xuICAgICAgICAgICAgbWluLWhlaWdodDogaW5pdGlhbDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBpbml0aWFsO1xuICAgICAgICAgICAgQGluY2x1ZGUgbWFyZ2luKDAsIG51bGwsIDAsIG51bGwpO1xuICAgICAgICAgICAgaGVpZ2h0OiB2YXIoLS1hMTF5LW1pbi10YXJnZXQtc2l6ZSkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuXG4gICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjRlbTtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogaW5pdGlhbDtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLmFkZG9uLW1lc3NhZ2Utbm8tdXNlciB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpb24taXRlbS5hZGRvbi1tZXNzYWdlLmFkZG9uLW1lc3NhZ2UtbWluZSArIGlvbi1pdGVtLmFkZG9uLW1lc3NhZ2UuYWRkb24tbWVzc2FnZS1uby11c2VyLmFkZG9uLW1lc3NhZ2UtbWluZSxcbiAgICBpb24taXRlbS5hZGRvbi1tZXNzYWdlLmFkZG9uLW1lc3NhZ2Utbm90LW1pbmUgKyBpb24taXRlbS5hZGRvbi1tZXNzYWdlLmFkZG9uLW1lc3NhZ2Utbm8tdXNlci5hZGRvbi1tZXNzYWdlLW5vdC1taW5lIHtcbiAgICAgICAgLml0ZW0taGVhZGluZyB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICB9XG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIH1cblxufVxuXG46aG9zdC1jb250ZXh0KC5pb3MpIHtcbiAgICBpb24tZm9vdGVyIC50b29sYmFyOmxhc3QtY2hpbGQge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuICAgICAgICBtaW4taGVpZ2h0OiAwO1xuICAgIH1cbn1cbiIsIkBpbXBvcnQgXCJ+dGhlbWUvY29tcG9uZW50cy9kaXNjdXNzaW9uLnNjc3NcIjtcblxuOmhvc3Qge1xuICAgIC5hZGRvbi1tb2RfY2hhdC1ub3RpY2Uge1xuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICB9XG59XG4iXX0= */");

/***/ }),

/***/ "./src/addons/mod/chat/pages/session-messages/session-messages.ts":
/*!************************************************************************!*\
  !*** ./src/addons/mod/chat/pages/session-messages/session-messages.ts ***!
  \************************************************************************/
/*! exports provided: AddonModChatSessionMessagesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModChatSessionMessagesPage", function() { return AddonModChatSessionMessagesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _features_user_services_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @features/user/services/user */ "./src/core/features/user/services/user.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _services_chat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/chat */ "./src/addons/mod/chat/services/chat.ts");
/* harmony import */ var _services_chat_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/chat-helper */ "./src/addons/mod/chat/services/chat-helper.ts");
// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.









/**
 * Page that displays list of chat session messages.
 */
let AddonModChatSessionMessagesPage = class AddonModChatSessionMessagesPage {
    constructor() {
        this.messages = [];
        this.loaded = false;
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].getRouteNumberParam('courseId');
        this.cmId = _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].getRouteNumberParam('cmId');
        this.sessionStart = _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].getRouteNumberParam('sessionStart');
        this.sessionEnd = _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].getRouteNumberParam('sessionEnd');
        this.chatId = _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].getRouteNumberParam('chatId');
        this.groupId = _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].getRouteNumberParam('groupId') || 0;
        this.currentUserId = _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].getCurrentSiteUserId();
        this.fetchMessages();
    }
    /**
     * Fetch session messages.
     *
     * @return Promise resolved when done.
     */
    fetchMessages() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const messages = yield _services_chat__WEBPACK_IMPORTED_MODULE_7__["AddonModChat"].getSessionMessages(this.chatId, this.sessionStart, this.sessionEnd, this.groupId, { cmId: this.cmId });
                this.messages = yield _services_chat__WEBPACK_IMPORTED_MODULE_7__["AddonModChat"].getMessagesUserData(messages, this.courseId);
                // Calculate which messages need to display the date or user data.
                for (let index = 0; index < this.messages.length; index++) {
                    const prevMessage = index > 0 ? this.messages[index - 1] : undefined;
                    this.messages[index] = _services_chat_helper__WEBPACK_IMPORTED_MODULE_8__["AddonModChatHelper"].formatMessage(this.currentUserId, this.messages[index], prevMessage);
                    const message = this.messages[index];
                    if (message.beep && message.beep != String(this.currentUserId)) {
                        this.loadMessageBeepWho(message);
                    }
                }
                this.messages[this.messages.length - 1].showTail = true;
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModalDefault(error, 'core.errorloadingcontent', true);
            }
            finally {
                this.loaded = true;
            }
        });
    }
    loadMessageBeepWho(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            message.beepWho = yield this.getUserFullname(message.beep);
        });
    }
    /**
     * Get the user fullname for a beep.
     *
     * @param id User Id before parsing.
     * @return User fullname.
     */
    getUserFullname(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const idNumber = parseInt(id, 10);
            if (isNaN(idNumber)) {
                return id;
            }
            try {
                const user = yield _features_user_services_user__WEBPACK_IMPORTED_MODULE_2__["CoreUser"].getProfile(idNumber, this.courseId, true);
                return user.fullname;
            }
            catch (_a) {
                // Error getting profile.
                return id;
            }
        });
    }
    /**
     * Refresh session messages.
     *
     * @param refresher Refresher.
     */
    refreshMessages(refresher) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_6__["CoreUtils"].ignoreErrors(_services_chat__WEBPACK_IMPORTED_MODULE_7__["AddonModChat"].invalidateSessionMessages(this.chatId, this.sessionStart, this.groupId));
                yield this.fetchMessages();
            }
            finally {
                refresher.complete();
            }
        });
    }
};
AddonModChatSessionMessagesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-mod-chat-session-messages',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./session-messages.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/chat/pages/session-messages/session-messages.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./session-messages.scss */ "./src/addons/mod/chat/pages/session-messages/session-messages.scss")).default]
    })
], AddonModChatSessionMessagesPage);



/***/ }),

/***/ "./src/addons/mod/chat/pages/sessions/sessions.ts":
/*!********************************************************!*\
  !*** ./src/addons/mod/chat/pages/sessions/sessions.ts ***!
  \********************************************************/
/*! exports provided: AddonModChatSessionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModChatSessionsPage", function() { return AddonModChatSessionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _classes_page_items_list_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @classes/page-items-list-manager */ "./src/core/classes/page-items-list-manager.ts");
/* harmony import */ var _components_split_view_split_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/split-view/split-view */ "./src/core/components/split-view/split-view.ts");
/* harmony import */ var _features_user_services_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/user/services/user */ "./src/core/features/user/services/user.ts");
/* harmony import */ var _services_groups__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/groups */ "./src/core/services/groups.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _services_chat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/chat */ "./src/addons/mod/chat/services/chat.ts");
// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var AddonModChatSessionsPage_1;











/**
 * Page that displays list of chat sessions.
 */
let AddonModChatSessionsPage = AddonModChatSessionsPage_1 = class AddonModChatSessionsPage {
    constructor() {
        this.showAll = false;
        this.groupId = 0;
        this.sessions = new AddonChatSessionsManager(AddonModChatSessionsPage_1);
    }
    /**
     * @inheritdoc
     */
    ngAfterViewInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteNumberParam('courseId');
            this.cmId = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteNumberParam('cmId');
            this.chatId = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteNumberParam('chatId');
            this.sessions.setChatId(this.chatId);
            yield this.fetchSessions();
            this.sessions.start(this.splitView);
        });
    }
    /**
     * Fetch chat sessions.
     *
     * @param showLoading Display a loading modal.
     * @return Promise resolved when done.
     */
    fetchSessions(showLoading) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = showLoading ? yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__["CoreDomUtils"].showModalLoading() : null;
            try {
                this.groupInfo = yield _services_groups__WEBPACK_IMPORTED_MODULE_5__["CoreGroups"].getActivityGroupInfo(this.cmId, false);
                this.groupId = _services_groups__WEBPACK_IMPORTED_MODULE_5__["CoreGroups"].validateGroupId(this.groupId, this.groupInfo);
                this.sessions.setGroupId(this.groupId);
                const sessions = yield _services_chat__WEBPACK_IMPORTED_MODULE_10__["AddonModChat"].getSessions(this.chatId, this.groupId, this.showAll, { cmId: this.cmId });
                // Fetch user profiles.
                const promises = [];
                const formattedSessions = sessions.map((session) => {
                    session.duration = session.sessionend - session.sessionstart;
                    session.sessionusers.forEach((sessionUser) => {
                        // The WS does not return the user name, fetch user profile.
                        promises.push(this.loadUserFullname(sessionUser));
                    });
                    // If session has more than 4 users we display a "Show more" link.
                    session.allsessionusers = session.sessionusers;
                    if (session.sessionusers.length > 4) {
                        session.sessionusers = session.allsessionusers.slice(0, 3);
                    }
                    return session;
                });
                yield Promise.all(promises);
                this.sessions.setItems(formattedSessions);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__["CoreDomUtils"].showErrorModalDefault(error, 'core.errorloadingcontent', true);
            }
            finally {
                modal === null || modal === void 0 ? void 0 : modal.dismiss();
            }
        });
    }
    /**
     * Load the fullname of a user.
     *
     * @param id User ID.
     * @return Promise resolved when done.
     */
    loadUserFullname(sessionUser) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (sessionUser.userfullname) {
                return;
            }
            try {
                const user = yield _features_user_services_user__WEBPACK_IMPORTED_MODULE_4__["CoreUser"].getProfile(sessionUser.userid, this.courseId, true);
                sessionUser.userfullname = user.fullname;
            }
            catch (_a) {
                // Error getting profile, most probably the user is deleted.
                sessionUser.userfullname = _singletons__WEBPACK_IMPORTED_MODULE_9__["Translate"].instant('core.deleteduser') + ' ' + sessionUser.userid;
            }
        });
    }
    /**
     * Refresh chat sessions.
     *
     * @param refresher Refresher.
     */
    refreshSessions(refresher) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_8__["CoreUtils"].ignoreErrors(_services_utils_utils__WEBPACK_IMPORTED_MODULE_8__["CoreUtils"].allPromises([
                    _services_groups__WEBPACK_IMPORTED_MODULE_5__["CoreGroups"].invalidateActivityGroupInfo(this.cmId),
                    _services_chat__WEBPACK_IMPORTED_MODULE_10__["AddonModChat"].invalidateSessions(this.chatId, this.groupId, this.showAll),
                ]));
                yield this.fetchSessions();
            }
            finally {
                refresher.complete();
            }
        });
    }
    /**
     * Show more session users.
     *
     * @param session Chat session.
     * @param event The event.
     */
    showMoreUsers(session, event) {
        session.sessionusers = session.allsessionusers;
        event.stopPropagation();
    }
    /**
     * @inheritdoc
     */
    ngOnDestroy() {
        this.sessions.destroy();
    }
};
AddonModChatSessionsPage.ctorParameters = () => [];
AddonModChatSessionsPage.propDecorators = {
    splitView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_components_split_view_split_view__WEBPACK_IMPORTED_MODULE_3__["CoreSplitViewComponent"],] }]
};
AddonModChatSessionsPage = AddonModChatSessionsPage_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-mod-chat-sessions',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./sessions.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/chat/pages/sessions/sessions.html")).default,
    })
], AddonModChatSessionsPage);

/**
 * Helper class to manage sessions.
 */
class AddonChatSessionsManager extends _classes_page_items_list_manager__WEBPACK_IMPORTED_MODULE_2__["CorePageItemsListManager"] {
    constructor(pageComponent) {
        super(pageComponent);
        this.chatId = -1;
        this.groupId = 0;
    }
    /**
     * Set chat ID.
     *
     * @param chatId Chat ID.
     */
    setChatId(chatId) {
        this.chatId = chatId;
    }
    /**
     * Set group ID.
     *
     * @param groupId Group ID.
     */
    setGroupId(groupId) {
        this.groupId = groupId;
    }
    /**
     * @inheritdoc
     */
    getItemPath(session) {
        return `${session.sessionstart}/${session.sessionend}`;
    }
    /**
     * @inheritdoc
     */
    getItemQueryParams() {
        return {
            chatId: this.chatId,
            groupId: this.groupId,
        };
    }
}


/***/ })

}]);
//# sourceMappingURL=chat-lazy-module.js.map