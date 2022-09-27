(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-viewer-viewer-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/comments/pages/viewer/viewer.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/comments/pages/viewer/viewer.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <h1>\n            <core-format-text [text]=\"title\" [contextLevel]=\"contextLevel\" [contextInstanceId]=\"instanceId\" [courseId]=\"courseId\">\n            </core-format-text>\n        </h1>\n        <ion-buttons slot=\"end\">\n            <ion-button *ngIf=\"canDeleteComments\" slot=\"end\" fill=\"clear\" (click)=\"toggleDelete()\"\n                [attr.aria-label]=\"'core.toggledelete' | translate\">\n                <ion-icon name=\"fas-pen\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\n            </ion-button>\n            <core-context-menu>\n                <core-context-menu-item [hidden]=\"!(commentsLoaded && !hasOffline)\" [priority]=\"100\"\n                    [content]=\"'core.refresh' | translate\" (action)=\"refreshComments(false)\" [iconAction]=\"refreshIcon\"\n                    [closeOnClick]=\"true\">\n                </core-context-menu-item>\n                <core-context-menu-item [hidden]=\"!(commentsLoaded && hasOffline)\" [priority]=\"100\"\n                    [content]=\"'core.settings.synchronizenow' | translate\" (action)=\"refreshComments(true)\" [iconAction]=\"syncIcon\"\n                    [closeOnClick]=\"false\">\n                </core-context-menu-item>\n            </core-context-menu>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-refresher slot=\"fixed\" [disabled]=\"!commentsLoaded\" (ionRefresh)=\"refreshComments(false, $event.target)\">\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\n    </ion-refresher>\n    <core-loading [hideUntil]=\"commentsLoaded\">\n        <core-empty-box *ngIf=\"!comments || !comments.length\" icon=\"fas-comments\"\n            [message]=\"'core.comments.nocomments' | translate\">\n        </core-empty-box>\n\n        <!-- Load previous messages. -->\n        <core-infinite-loading [enabled]=\"canLoadMore\" position=\"top\" (action)=\"loadPrevious($event)\" [error]=\"loadMoreError\">\n        </core-infinite-loading>\n\n        <ion-list class=\"addon-messages-discussion-container\">\n            <ng-container *ngFor=\"let comment of comments; index as index; last as last\">\n\n                <p class=\"ion-text-center addon-messages-date\" *ngIf=\"comment.showDate\">\n                    {{ comment.timecreated * 1000 | coreFormatDate: \"strftimedayshort\" }}\n                </p>\n\n                <ion-item class=\"ion-text-wrap addon-message\"\n                    [class.addon-message-mine]=\"comment.userid == currentUserId\"\n                    [class.addon-message-not-mine]=\"comment.userid != currentUserId\"\n                    [class.addon-message-no-user]=\"!comment.showUserData\"\n                    [@coreSlideInOut]=\"comment.userid == currentUserId ? '' : 'fromLeft'\">\n                    <ion-label>\n                        <!-- User data. -->\n                        <h2 class=\"addon-message-user\" *ngIf=\"comment.showUserData\">\n                            <core-user-avatar slot=\"start\" [user]=\"comment\" [linkProfile]=\"false\">\n                            </core-user-avatar>\n                            <div>{{ comment.fullname }}</div>\n                        </h2>\n\n                        <p class=\"addon-message-text\">\n                            <core-format-text [text]=\"comment.content\" [contextLevel]=\"contextLevel\" [contextInstanceId]=\"instanceId\"\n                                [courseId]=\"courseId\">\n                            </core-format-text>\n                        </p>\n                    </ion-label>\n                    <ion-note>\n                        <ng-container *ngIf=\"!comment.deleted\">\n                            {{ comment.timecreated * 1000 | coreFormatDate: 'strftimetime' }}\n                        </ng-container>\n                        <ng-container *ngIf=\"comment.deleted\">\n                            <ion-icon name=\"fas-trash\" aria-hidden=\"true\"></ion-icon> <span class=\"ion-text-wrap\">\n                                {{ 'core.deletedoffline' | translate }}\n                            </span>\n                        </ng-container>\n                    </ion-note>\n                    <div class=\"tail\" *ngIf=\"comment.showTail\"></div>\n                    <ion-button *ngIf=\"showDelete && !comment.deleted && comment.delete\" slot=\"end\" fill=\"clear\"\n                        [@coreSlideInOut]=\"'fromRight'\" color=\"danger\" (click)=\"deleteComment($event, comment)\"\n                        [attr.aria-label]=\"'core.delete' | translate\" class=\"addon-messages-delete-button\">\n                        <ion-icon name=\"fas-trash\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\n                    </ion-button>\n                    <ion-button *ngIf=\"showDelete && comment.deleted\" slot=\"end\" fill=\"clear\" color=\"danger\"\n                        (click)=\"undoDeleteComment($event, comment)\" [attr.aria-label]=\"'core.restore' | translate\"\n                        class=\"addon-messages-delete-button\">\n                        <ion-icon name=\"fas-undo-alt\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\n                    </ion-button>\n                </ion-item>\n            </ng-container>\n\n            <ion-item\n                *ngIf=\"offlineComment\"\n                class=\"ion-text-wrap addon-message addon-message-mine\"\n            >\n                <ion-label>\n                    <!-- User data. -->\n                    <p class=\"ion-text-center\">\n                        <ion-icon name=\"fas-exclamation-triangle\" aria-hidden=\"true\"></ion-icon>\n                        {{ 'core.thereisdatatosync' | translate:{$a: 'core.comments.comments' | translate | lowercase } }}\n                    </p>\n\n                    <p class=\"addon-message-text\">\n                        <core-format-text [text]=\"offlineComment.content\" [contextLevel]=\"contextLevel\" [contextInstanceId]=\"instanceId\"\n                            [courseId]=\"courseId\">\n                        </core-format-text>\n                    </p>\n                </ion-label>\n                <ion-note>\n                    <ion-icon name=\"fas-clock\" aria-hidden=\"true\"></ion-icon> {{ 'core.notsent' | translate }}\n                </ion-note>\n                <div class=\"tail\"></div>\n                <ion-button *ngIf=\"showDelete\" slot=\"end\" fill=\"clear\"\n                    [@coreSlideInOut]=\"'fromRight'\" color=\"danger\" (click)=\"deleteComment($event, offlineComment)\"\n                    [attr.aria-label]=\"'core.delete' | translate\" class=\"addon-messages-delete-button\">\n                    <ion-icon name=\"fas-trash\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\n                </ion-button>\n            </ion-item>\n        </ion-list>\n\n    </core-loading>\n</ion-content>\n<ion-footer color=\"light\" class=\"footer-adjustable\" *ngIf=\"commentsLoaded && canAddComments\">\n    <ion-toolbar color=\"light\">\n        <core-send-message-form [sendDisabled]=\"sending\" [message]=\"newComment\"\n            (onSubmit)=\"addComment($event)\" [placeholder]=\"'core.comments.addcomment' | translate\">\n        </core-send-message-form>\n    </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "./src/core/features/comments/pages/viewer/viewer.module.ts":
/*!******************************************************************!*\
  !*** ./src/core/features/comments/pages/viewer/viewer.module.ts ***!
  \******************************************************************/
/*! exports provided: CoreCommentsViewerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommentsViewerPageModule", function() { return CoreCommentsViewerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _viewer_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./viewer.page */ "./src/core/features/comments/pages/viewer/viewer.page.ts");
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





const routes = [
    {
        path: '',
        component: _viewer_page__WEBPACK_IMPORTED_MODULE_4__["CoreCommentsViewerPage"],
    },
];
let CoreCommentsViewerPageModule = class CoreCommentsViewerPageModule {
};
CoreCommentsViewerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
        ],
        declarations: [
            _viewer_page__WEBPACK_IMPORTED_MODULE_4__["CoreCommentsViewerPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoreCommentsViewerPageModule);



/***/ }),

/***/ "./src/core/features/comments/pages/viewer/viewer.page.ts":
/*!****************************************************************!*\
  !*** ./src/core/features/comments/pages/viewer/viewer.page.ts ***!
  \****************************************************************/
/*! exports provided: CoreCommentsViewerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCommentsViewerPage", function() { return CoreCommentsViewerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _components_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/animations */ "./src/core/components/animations.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _features_comments_services_comments__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @features/comments/services/comments */ "./src/core/features/comments/services/comments.ts");
/* harmony import */ var _features_comments_services_comments_sync__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @features/comments/services/comments-sync */ "./src/core/features/comments/services/comments-sync.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/core/constants */ "./src/core/constants.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _features_user_services_user__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @features/user/services/user */ "./src/core/features/user/services/user.ts");
/* harmony import */ var _services_utils_text__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @services/utils/text */ "./src/core/services/utils/text.ts");
/* harmony import */ var _classes_errors_error__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @classes/errors/error */ "./src/core/classes/errors/error.ts");
/* harmony import */ var _features_comments_services_comments_offline__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @features/comments/services/comments-offline */ "./src/core/features/comments/services/comments-offline.ts");
/* harmony import */ var _services_utils_time__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @services/utils/time */ "./src/core/services/utils/time.ts");
/* harmony import */ var _services_app__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @services/app */ "./src/core/services/app.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_20__);
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
 * Page that displays comments.
 */
let CoreCommentsViewerPage = class CoreCommentsViewerPage {
    constructor(route) {
        this.route = route;
        this.comments = [];
        this.commentsLoaded = false;
        this.itemId = 0;
        this.area = '';
        this.page = 0;
        this.title = '';
        this.canLoadMore = false;
        this.loadMoreError = false;
        this.canAddComments = false;
        this.canDeleteComments = false;
        this.showDelete = false;
        this.hasOffline = false;
        this.refreshIcon = _core_constants__WEBPACK_IMPORTED_MODULE_9__["CoreConstants"].ICON_LOADING;
        this.syncIcon = _core_constants__WEBPACK_IMPORTED_MODULE_9__["CoreConstants"].ICON_LOADING;
        this.sending = false;
        this.newComment = '';
        this.addDeleteCommentsAvailable = false;
        this.viewDestroyed = false;
        this.currentUserId = _services_sites__WEBPACK_IMPORTED_MODULE_5__["CoreSites"].getCurrentSiteUserId();
        // Refresh data if comments are synchronized automatically.
        this.syncObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_2__["CoreEvents"].on(_features_comments_services_comments_sync__WEBPACK_IMPORTED_MODULE_7__["CoreCommentsSyncProvider"].AUTO_SYNCED, (data) => {
            if (data.contextLevel == this.contextLevel && data.instanceId == this.instanceId &&
                data.componentName == this.componentName && data.itemId == this.itemId && data.area == this.area) {
                // Show the sync warnings.
                this.showSyncWarnings(data.warnings);
                // Refresh the data.
                this.commentsLoaded = false;
                this.refreshIcon = _core_constants__WEBPACK_IMPORTED_MODULE_9__["CoreConstants"].ICON_LOADING;
                this.syncIcon = _core_constants__WEBPACK_IMPORTED_MODULE_9__["CoreConstants"].ICON_LOADING;
                this.page = 0;
                this.comments = [];
                this.fetchComments(false);
            }
        }, _services_sites__WEBPACK_IMPORTED_MODULE_5__["CoreSites"].getCurrentSiteId());
    }
    /**
     * View loaded.
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Is implicit the user can delete if he can add.
            this.addDeleteCommentsAvailable = yield _features_comments_services_comments__WEBPACK_IMPORTED_MODULE_6__["CoreComments"].isAddCommentsAvailable();
            this.currentUserId = _services_sites__WEBPACK_IMPORTED_MODULE_5__["CoreSites"].getCurrentSiteUserId();
            this.commentsLoaded = false;
            this.contextLevel = _services_navigator__WEBPACK_IMPORTED_MODULE_10__["CoreNavigator"].getRouteParam('contextLevel');
            this.instanceId = _services_navigator__WEBPACK_IMPORTED_MODULE_10__["CoreNavigator"].getRouteNumberParam('instanceId');
            this.componentName = _services_navigator__WEBPACK_IMPORTED_MODULE_10__["CoreNavigator"].getRouteParam('componentName');
            this.itemId = _services_navigator__WEBPACK_IMPORTED_MODULE_10__["CoreNavigator"].getRouteNumberParam('itemId');
            this.area = _services_navigator__WEBPACK_IMPORTED_MODULE_10__["CoreNavigator"].getRouteParam('area') || '';
            this.title = _services_navigator__WEBPACK_IMPORTED_MODULE_10__["CoreNavigator"].getRouteNumberParam('title') ||
                _singletons__WEBPACK_IMPORTED_MODULE_11__["Translate"].instant('core.comments.comments');
            this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_10__["CoreNavigator"].getRouteNumberParam('courseId');
            yield this.fetchComments(true);
        });
    }
    /**
     * Fetches the comments.
     *
     * @param sync When to resync comments.
     * @param showErrors When to display errors or not.
     * @return Resolved when done.
     */
    fetchComments(sync, showErrors = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loadMoreError = false;
            if (sync) {
                yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_12__["CoreUtils"].ignoreErrors(this.syncComments(showErrors));
            }
            try {
                // Get comments data.
                const commentsResponse = yield _features_comments_services_comments__WEBPACK_IMPORTED_MODULE_6__["CoreComments"].getComments(this.contextLevel, this.instanceId, this.componentName, this.itemId, this.area, this.page);
                this.canAddComments = this.addDeleteCommentsAvailable && !!commentsResponse.canpost;
                let comments = commentsResponse.comments.sort((a, b) => a.timecreated - b.timecreated);
                if (typeof commentsResponse.count != 'undefined') {
                    this.canLoadMore = (this.comments.length + comments.length) < commentsResponse.count;
                }
                else {
                    // Old style.
                    this.canLoadMore = commentsResponse.comments.length > 0 &&
                        commentsResponse.comments.length >= _features_comments_services_comments__WEBPACK_IMPORTED_MODULE_6__["CoreCommentsProvider"].pageSize;
                }
                comments = yield Promise.all(comments.map((comment) => this.loadCommentProfile(comment)));
                this.comments = comments.concat(this.comments);
                this.comments.forEach((comment, index) => {
                    comment.showDate = this.showDate(comment, this.comments[index - 1]);
                    comment.showUserData = this.showUserData(comment, this.comments[index - 1]);
                    comment.showTail = this.showTail(comment, this.comments[index + 1]);
                });
                this.canDeleteComments = this.addDeleteCommentsAvailable &&
                    (this.hasOffline || this.comments.some((comment) => !!comment.delete));
                yield this.loadOfflineData();
            }
            catch (error) {
                this.loadMoreError = true; // Set to prevent infinite calls with infinite-loading.
                if (error && this.componentName == 'assignsubmission_comments') {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_13__["CoreDomUtils"].showAlertTranslated('core.notice', 'core.comments.commentsnotworking');
                }
                else {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_13__["CoreDomUtils"].showErrorModalDefault(error, _singletons__WEBPACK_IMPORTED_MODULE_11__["Translate"].instant('core.error') + ': get_comments');
                }
            }
            finally {
                this.commentsLoaded = true;
                this.refreshIcon = _core_constants__WEBPACK_IMPORTED_MODULE_9__["CoreConstants"].ICON_REFRESH;
                this.syncIcon = _core_constants__WEBPACK_IMPORTED_MODULE_9__["CoreConstants"].ICON_SYNC;
                if (this.page == 0) {
                    this.scrollToBottom();
                }
            }
        });
    }
    /**
     * Function to load more commemts.
     *
     * @param infiniteComplete Infinite scroll complete function. Only used from core-infinite-loading.
     * @return Resolved when done.
     */
    loadPrevious(infiniteComplete) {
        this.page++;
        this.canLoadMore = false;
        return this.fetchComments(true).finally(() => {
            infiniteComplete && infiniteComplete();
        });
    }
    /**
     * Refresh the comments.
     *
     * @param showErrors Whether to display errors or not.
     * @param refresher Refresher.
     * @return Resolved when done.
     */
    refreshComments(showErrors, refresher) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.commentsLoaded = false;
            this.refreshIcon = _core_constants__WEBPACK_IMPORTED_MODULE_9__["CoreConstants"].ICON_LOADING;
            this.syncIcon = _core_constants__WEBPACK_IMPORTED_MODULE_9__["CoreConstants"].ICON_LOADING;
            try {
                yield this.invalidateComments();
            }
            finally {
                this.page = 0;
                this.comments = [];
                try {
                    yield this.fetchComments(true, showErrors);
                }
                finally {
                    refresher === null || refresher === void 0 ? void 0 : refresher.complete();
                }
            }
        });
    }
    /**
     * Show sync warnings if any.
     *
     * @param warnings the warnings
     */
    showSyncWarnings(warnings) {
        const message = _services_utils_text__WEBPACK_IMPORTED_MODULE_15__["CoreTextUtils"].buildMessage(warnings);
        if (message) {
            _services_utils_dom__WEBPACK_IMPORTED_MODULE_13__["CoreDomUtils"].showErrorModal(message);
        }
    }
    /**
     * Tries to synchronize comments.
     *
     * @param showErrors Whether to display errors or not.
     * @return Promise resolved if sync is successful, rejected otherwise.
     */
    syncComments(showErrors) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const result = yield _features_comments_services_comments_sync__WEBPACK_IMPORTED_MODULE_7__["CoreCommentsSync"].syncComments(this.contextLevel, this.instanceId, this.componentName, this.itemId, this.area);
                this.showSyncWarnings((result === null || result === void 0 ? void 0 : result.warnings) || []);
            }
            catch (error) {
                if (showErrors) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_13__["CoreDomUtils"].showErrorModalDefault(error, 'core.errorsync', true);
                }
                throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_16__["CoreError"](error);
            }
        });
    }
    /**
     * Send the comment or store it offline.
     *
     * @param text Comment text to add.
     */
    addComment(text) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            _services_app__WEBPACK_IMPORTED_MODULE_19__["CoreApp"].closeKeyboard();
            const loadingModal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_13__["CoreDomUtils"].showModalLoading('core.sending', true);
            // Freeze the add comment button.
            this.sending = true;
            try {
                const commentsResponse = yield _features_comments_services_comments__WEBPACK_IMPORTED_MODULE_6__["CoreComments"].addComment(text, this.contextLevel, this.instanceId, this.componentName, this.itemId, this.area);
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_13__["CoreDomUtils"].showToast(commentsResponse ? 'core.comments.eventcommentcreated' : 'core.datastoredoffline', true, 3000);
                if (commentsResponse) {
                    this.invalidateComments();
                    const addedComments = yield this.loadCommentProfile(commentsResponse);
                    addedComments.showDate = this.showDate(addedComments, this.comments[this.comments.length - 1]);
                    addedComments.showUserData = this.showUserData(addedComments, this.comments[this.comments.length - 1]);
                    addedComments.showTail = this.showTail(addedComments, this.comments[this.comments.length + 1]);
                    // Add the comment to the top.
                    this.comments = this.comments.concat([addedComments]);
                    this.canDeleteComments = this.addDeleteCommentsAvailable;
                    _singletons_events__WEBPACK_IMPORTED_MODULE_2__["CoreEvents"].trigger(_features_comments_services_comments__WEBPACK_IMPORTED_MODULE_6__["CoreCommentsProvider"].COMMENTS_COUNT_CHANGED_EVENT, {
                        contextLevel: this.contextLevel,
                        instanceId: this.instanceId,
                        component: this.componentName,
                        itemId: this.itemId,
                        area: this.area,
                        countChange: 1,
                    }, _services_sites__WEBPACK_IMPORTED_MODULE_5__["CoreSites"].getCurrentSiteId());
                }
                else if (commentsResponse === false) {
                    // Comments added in offline mode.
                    yield this.loadOfflineData();
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_13__["CoreDomUtils"].showErrorModal(error);
            }
            finally {
                loadingModal.dismiss();
                this.sending = false;
                // New comments.
                this.scrollToBottom();
            }
        });
    }
    /**
     * Delete a comment.
     *
     * @param e Click event.
     * @param comment Comment to delete.
     */
    deleteComment(e, comment) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            e.preventDefault();
            e.stopPropagation();
            const modified = 'lastmodified' in comment
                ? comment.lastmodified
                : comment.timecreated;
            const time = _services_utils_time__WEBPACK_IMPORTED_MODULE_18__["CoreTimeUtils"].userDate(modified * 1000, 'core.strftimerecentfull');
            const deleteComment = {
                contextlevel: this.contextLevel,
                instanceid: this.instanceId,
                component: this.componentName,
                itemid: this.itemId,
                area: this.area,
                content: comment.content,
                id: 'id' in comment ? comment.id : undefined,
            };
            try {
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_13__["CoreDomUtils"].showDeleteConfirm('core.comments.deletecommentbyon', {
                    $a: { user: comment.fullname || '', time: time },
                });
            }
            catch (_a) {
                // User cancelled, nothing to do.
                return;
            }
            try {
                const deletedOnline = yield _features_comments_services_comments__WEBPACK_IMPORTED_MODULE_6__["CoreComments"].deleteComment(deleteComment);
                this.showDelete = false;
                if (deletedOnline && 'id' in comment) {
                    const index = this.comments.findIndex((commentinList) => commentinList.id == comment.id);
                    if (index >= 0) {
                        this.comments.splice(index, 1);
                        _singletons_events__WEBPACK_IMPORTED_MODULE_2__["CoreEvents"].trigger(_features_comments_services_comments__WEBPACK_IMPORTED_MODULE_6__["CoreCommentsProvider"].COMMENTS_COUNT_CHANGED_EVENT, {
                            contextLevel: this.contextLevel,
                            instanceId: this.instanceId,
                            component: this.componentName,
                            itemId: this.itemId,
                            area: this.area,
                            countChange: -1,
                        }, _services_sites__WEBPACK_IMPORTED_MODULE_5__["CoreSites"].getCurrentSiteId());
                    }
                }
                else {
                    this.loadOfflineData();
                }
                this.invalidateComments();
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_13__["CoreDomUtils"].showToast('core.comments.eventcommentdeleted', true, 3000);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_13__["CoreDomUtils"].showErrorModalDefault(error, 'Delete comment failed.');
            }
        });
    }
    /**
     * Invalidate comments.
     *
     * @return Resolved when done.
     */
    invalidateComments() {
        return _features_comments_services_comments__WEBPACK_IMPORTED_MODULE_6__["CoreComments"].invalidateCommentsData(this.contextLevel, this.instanceId, this.componentName, this.itemId, this.area);
    }
    /**
     * Loads the profile info onto the comment object.
     *
     * @param comment Comment object.
     * @return Promise resolved with modified comment when done.
     */
    loadCommentProfile(comment) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Get the user profile image.
            try {
                const user = yield _features_user_services_user__WEBPACK_IMPORTED_MODULE_14__["CoreUser"].getProfile(comment.userid, undefined, true);
                comment.profileimageurl = user.profileimageurl;
                comment.fullname = user.fullname;
            }
            catch (_a) {
                // Ignore errors.
            }
            return comment;
        });
    }
    /**
     * Check if the user info should be displayed for the current message.
     * User data is only displayed if the previous message was from another user.
     *
     * @param comment Comment object.
     * @param prevComment Previous comment object.
     * @return Whether user data should be shown.
     */
    showUserData(comment, prevComment) {
        return comment.userid != this.currentUserId && (!prevComment || prevComment.userid != comment.userid || !!comment.showDate);
    }
    /**
     * Check if a css tail should be shown.
     *
     * @param comment Comment object.
     * @param nextComment Previous comment object.
     * @return Whether user data should be shown.
     */
    showTail(comment, nextComment) {
        return !nextComment || nextComment.userid != comment.userid || !!nextComment.showDate;
    }
    /**
     * Check if the date should be displayed between messages (when the day changes at midnight for example).
     *
     * @param comment Comment object.
     * @param prevComment Previous comment object.
     * @return True if messages are from diferent days, false othetwise.
     */
    showDate(comment, prevComment) {
        if (!prevComment) {
            return true;
        }
        // Check if day has changed.
        return !moment__WEBPACK_IMPORTED_MODULE_20___default()(comment.timecreated * 1000).isSame(prevComment.timecreated * 1000, 'day');
    }
    /**
     * Load offline comments.
     *
     * @return Promise resolved when done.
     */
    loadOfflineData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const promises = [];
            let hasDeletedComments = false;
            // Load the only offline comment allowed if any.
            promises.push(_features_comments_services_comments_offline__WEBPACK_IMPORTED_MODULE_17__["CoreCommentsOffline"].getComment(this.contextLevel, this.instanceId, this.componentName, this.itemId, this.area).then((offlineComment) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.offlineComment = offlineComment;
                if (!offlineComment) {
                    return;
                }
                if (this.newComment == '') {
                    this.newComment = this.offlineComment.content;
                }
                this.offlineComment.userid = this.currentUserId;
                return;
            })));
            // Load deleted comments offline.
            promises.push(_features_comments_services_comments_offline__WEBPACK_IMPORTED_MODULE_17__["CoreCommentsOffline"].getDeletedComments(this.contextLevel, this.instanceId, this.componentName, this.itemId, this.area).then((deletedComments) => {
                hasDeletedComments = deletedComments && deletedComments.length > 0;
                if (hasDeletedComments) {
                    deletedComments.forEach((deletedComment) => {
                        const comment = this.comments.find((comment) => comment.id == deletedComment.commentid);
                        if (comment) {
                            comment.deleted = !!deletedComment.deleted;
                        }
                    });
                }
                return;
            }));
            yield Promise.all(promises);
            this.hasOffline = !!this.offlineComment || hasDeletedComments;
        });
    }
    /**
     * Restore a comment.
     *
     * @param e Click event.
     * @param comment Comment to delete.
     */
    undoDeleteComment(e, comment) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            e.preventDefault();
            e.stopPropagation();
            yield _features_comments_services_comments_offline__WEBPACK_IMPORTED_MODULE_17__["CoreCommentsOffline"].undoDeleteComment(comment.id);
            comment.deleted = false;
            this.showDelete = false;
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
        }, 100);
    }
    /**
     * Toggle delete.
     */
    toggleDelete() {
        this.showDelete = !this.showDelete;
    }
    /**
     * Page destroyed.
     */
    ngOnDestroy() {
        var _a;
        (_a = this.syncObserver) === null || _a === void 0 ? void 0 : _a.off();
        this.viewDestroyed = true;
    }
};
CoreCommentsViewerPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
CoreCommentsViewerPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonContent"],] }]
};
CoreCommentsViewerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-comments-viewer',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./viewer.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/comments/pages/viewer/viewer.html")).default,
        animations: [_components_animations__WEBPACK_IMPORTED_MODULE_3__["CoreAnimations"].SLIDE_IN_OUT],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./viewer.scss */ "./src/core/features/comments/pages/viewer/viewer.scss")).default]
    })
], CoreCommentsViewerPage);



/***/ }),

/***/ "./src/core/features/comments/pages/viewer/viewer.scss":
/*!*************************************************************!*\
  !*** ./src/core/features/comments/pages/viewer/viewer.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n * App Global variables SCSS\n * ----------------------------------------------------------------------------\n * Place here the different files you should import to use global variables.\n */\n/*\n * App custom mixins for SCSS\n * ----------------------------------------------------------------------------\n * Place here our custom mixins.\n */\n/*\n * Imported ionic mixins for SCSS\n * ----------------------------------------------------------------------------\n * Place here our custom mixins.\n * Extracted from ionic.mixins.scss\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.mixins.scss\n */\n/*\n * App Custom App variables SCSS\n * ----------------------------------------------------------------------------\n * Place here all custom app variables.\n */\n/*\n * App Global variables SCSS\n * ----------------------------------------------------------------------------\n * Place here all global variables.\n */\n/**\n * Layout Breakpoints\n *\n * https://ionicframework.com/docs/layout/grid#default-breakpoints\n */\n:host ion-content {\n  --background: var(--background-alternative);\n}\n:host ion-content::part(scroll) {\n  padding-bottom: 0 !important;\n}\n:host .addon-messages-discussion-container {\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 15px;\n  background: var(--background-alternative);\n}\n:host .addon-messages-date {\n  font-weight: normal;\n  font-size: 0.9rem;\n}\n:host ion-item.addon-message {\n  border: 0;\n  border-radius: 4px;\n  padding: 0 8px 0 8px;\n  margin: 10px 8px 0 8px;\n  --background: var(--addon-messages-message-bg);\n  background: var(--background);\n  align-self: flex-start;\n  width: 90%;\n  max-width: 90%;\n  --min-height: var(--a11y-min-target-size);\n  position: relative;\n  transition: width 500ms ease-in-out;\n  overflow: visible;\n}\n:host ion-item.addon-message::part(native) {\n  --inner-border-width: 0;\n  --inner-padding-end: 0;\n  padding: 0;\n  margin: 0;\n}\n:host ion-item.addon-message core-format-text > p:only-child {\n  display: inline;\n}\n:host ion-item.addon-message .addon-message-user {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.5rem;\n  margin-top: 0;\n  color: var(--ion-text-color);\n}\n:host ion-item.addon-message .addon-message-user core-user-avatar {\n  display: block;\n  --core-avatar-size: var(--addon-messages-avatar-size);\n  margin: 0;\n}\n:host ion-item.addon-message .addon-message-user div {\n  font-weight: 500;\n  flex-grow: 1;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host ion-item.addon-message .addon-message-user div {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: 0.5rem;\n    padding-inline-start: 0.5rem;\n    -webkit-padding-end: 0.5rem;\n    padding-inline-end: 0.5rem;\n  }\n}\n:host ion-item.addon-message ion-note {\n  color: var(--addon-messages-message-note-text);\n  font-size: var(--addon-messages-message-note-font-size);\n  margin: 0;\n  padding: 0 0 8px 0;\n  align-self: flex-end;\n}\n:host ion-item.addon-message[tappable]:active {\n  --background: var(--addon-messages-message-activated-bg);\n}\n:host ion-item.addon-message ion-label {\n  margin: 0;\n  padding: 8px 0;\n}\n:host ion-item.addon-message .addon-message-text {\n  display: inline-flex;\n}\n:host ion-item.addon-message .addon-message-text * {\n  color: var(--ion-text-color);\n}\n:host ion-item.addon-message .tail {\n  content: \"\";\n  width: 0;\n  height: 0;\n  border: 0.5rem solid transparent;\n  position: absolute;\n  touch-action: none;\n  bottom: 0;\n}\n:host ion-item.addon-message.addon-message-mine {\n  --background: var(--addon-messages-message-mine-bg);\n  align-self: flex-end;\n}\n:host ion-item.addon-message.addon-message-mine[tappable]:active {\n  --background: var(--addon-messages-message-mine-activated-bg);\n}\n:host ion-item.addon-message.addon-message-mine .spinner {\n  float: right;\n  margin-left: 5px;\n  margin-right: -3px;\n  margin-top: 2px;\n  margin-bottom: -2px;\n}\n[dir=rtl] :host ion-item.addon-message.addon-message-mine .spinner {\n  float: left;\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host ion-item.addon-message.addon-message-mine .spinner {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: 5px;\n    margin-inline-start: 5px;\n    -webkit-margin-end: -3px;\n    margin-inline-end: -3px;\n  }\n}\n:host ion-item.addon-message.addon-message-mine .spinner svg {\n  width: 16px;\n  height: 16px;\n}\n:host ion-item.addon-message.addon-message-mine .tail {\n  right: -8px;\n  margin-right: -0.5rem;\n  border-bottom-color: var(--addon-messages-message-mine-bg);\n}\n[dir=rtl] :host ion-item.addon-message.addon-message-mine .tail {\n  left: unset;\n  right: unset;\n  left: -8px;\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host ion-item.addon-message.addon-message-mine .tail {\n    margin-right: unset;\n    -webkit-margin-end: -0.5rem;\n    margin-inline-end: -0.5rem;\n  }\n}\n:host ion-item.addon-message.addon-message-mine[tappable]:active .tail {\n  border-bottom-color: var(--addon-messages-message-mine-activated-bg);\n}\n:host ion-item.addon-message.addon-message-not-mine .tail {\n  border-bottom-color: var(--addon-messages-message-bg);\n  left: -8px;\n  margin-left: -0.5rem;\n}\n[dir=rtl] :host ion-item.addon-message.addon-message-not-mine .tail {\n  left: unset;\n  right: unset;\n  right: -8px;\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host ion-item.addon-message.addon-message-not-mine .tail {\n    margin-left: unset;\n    -webkit-margin-start: -0.5rem;\n    margin-inline-start: -0.5rem;\n  }\n}\n:host ion-item.addon-message[tappable].addon-message-not-mine.activated .tail {\n  border-bottom-color: var(--addon-messages-message-activated-bg);\n}\n:host ion-item.addon-message .addon-messages-delete-button {\n  min-height: initial;\n  line-height: initial;\n  margin-top: 0;\n  margin-bottom: 0;\n  height: var(--a11y-min-target-size) !important;\n  align-self: flex-end;\n}\n:host ion-item.addon-message .addon-messages-delete-button ion-icon {\n  font-size: 1.4em;\n  line-height: initial;\n  color: var(--ion-color-danger);\n}\n:host ion-item.addon-message.addon-message-no-user {\n  margin-top: 8px;\n}\n:host ion-item.addon-message.addon-message-mine + ion-item.addon-message.addon-message-no-user.addon-message-mine,\n:host ion-item.addon-message.addon-message-not-mine + ion-item.addon-message.addon-message-no-user.addon-message-not-mine {\n  padding-top: 0;\n}\n:host ion-item.addon-message.addon-message-mine + ion-item.addon-message.addon-message-no-user.addon-message-mine .item-heading,\n:host ion-item.addon-message.addon-message-not-mine + ion-item.addon-message.addon-message-no-user.addon-message-not-mine .item-heading {\n  margin-bottom: 0;\n}\n:host-context(.ios) ion-footer .toolbar:last-child {\n  padding-bottom: 4px;\n  min-height: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9nbG9iYWxzLnNjc3MiLCJzcmMvdGhlbWUvZ2xvYmFscy5taXhpbnMuc2NzcyIsInNyYy90aGVtZS9nbG9iYWxzLm1peGlucy5pb25pYy5zY3NzIiwic3JjL3RoZW1lL2dsb2JhbHMuY3VzdG9tLnNjc3MiLCJzcmMvdGhlbWUvZ2xvYmFscy52YXJpYWJsZXMuc2NzcyIsInNyYy90aGVtZS9jb21wb25lbnRzL2Rpc2N1c3Npb24uc2NzcyIsInNyYy9jb3JlL2ZlYXR1cmVzL2NvbW1lbnRzL3BhZ2VzL3ZpZXdlci92aWV3ZXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztFQUFBO0FDQUE7Ozs7RUFBQTtBQ0FBOzs7Ozs7RUFBQTtBQ0FBOzs7O0VBQUE7QUNBQTs7OztFQUFBO0FBdUZBOzs7O0VBQUE7QUNwRkk7RUFDSSwyQ0FBQTtBQzhCUjtBRDVCUTtFQUNJLDRCQUFBO0FDOEJaO0FEMUJJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5Q0FBQTtBQzRCUjtBRHpCSTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7QUMyQlI7QUR2Qkk7RUFDSSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsOENBQUE7RUFDQSw2QkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSx5Q0FBQTtFQUNBLGtCQUFBO0VKTEosbUNBQUE7RUlRSSxpQkFBQTtBQzRCUjtBRDFCUTtFQUNJLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQzRCWjtBRHpCUTtFQUNJLGVBQUE7QUMyQlo7QUR4QlE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7QUMwQlo7QUR4Qlk7RUFDSSxjQUFBO0VBQ0EscURBQUE7RUFDQSxTQUFBO0FDMEJoQjtBRHZCWTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFSDJQUixvQkcxUG9DO0VIMlBwQyxxQkczUG9DO0VBQzVCLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQzBCaEI7QUppT1k7RUFDSTtJQUVRLG1CQUFBO0lBR0Esb0JBQUE7SUFHSiw2Qkd2UXdCO0lId1F4Qiw0Qkd4UXdCO0lIeVF4QiwyQkd6UXdCO0lIMFF4QiwwQkcxUXdCO0VDc0MxQztBQUNGO0FEaENRO0VBQ0ksOENBQUE7RUFDQSx1REFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FDa0NaO0FEL0JRO0VBQ0ksd0RBQUE7QUNpQ1o7QUQ5QlE7RUFDSSxTQUFBO0VBQ0EsY0FBQTtBQ2dDWjtBRDdCUTtFQUNJLG9CQUFBO0FDK0JaO0FEOUJZO0VBQ0ksNEJBQUE7QUNnQ2hCO0FENUJRO0VBQ0ksV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQzhCWjtBRDFCUTtFQUNJLG1EQUFBO0VBQ0Esb0JBQUE7QUM0Qlo7QUQxQlk7RUFDSSw2REFBQTtBQzRCaEI7QUR6Qlk7RUg0WEEsWUFBQTtFQXBMSixnQkd0TXlDO0VIdU16QyxrQkd2TTZCO0VIdU9qQyxlR3ZPNEI7RUh3TzVCLG1CR3hPdUM7QUM4QjNDO0FKdUhRO0VBd09JLFdBQUE7QUk1Vlo7QUp5S1k7RUFDSTtJQUVRLGtCQUFBO0lBR0EsbUJBQUE7SUFHSix5QkduTjZCO0lIb043Qix3QkdwTjZCO0lIcU43Qix3QkdyTmlCO0lIc05qQix1Qkd0TmlCO0VDMkNuQztBQUNGO0FEMUNnQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDNENwQjtBRHhDWTtFSG9SQSxXR25SNEI7RUg4TGhDLHFCRzdMeUM7RUFDakMsMERBQUE7QUMwQ2hCO0FKZ0dRO0VBMElJLFdBQUE7RUFDQSxZQUFBO0VBRUEsVUd6UjRCO0FDaUR4QztBSmdKWTtFQUNJO0lBS1EsbUJBQUE7SUFLSiwyQkczTTZCO0lINE03QiwwQkc1TTZCO0VDdUQvQztBQUNGO0FEcERZO0VBQ0ksb0VBQUE7QUNzRGhCO0FEbERRO0VBQ0kscURBQUE7RUh1UUEsVUd0UW9DO0VIaUx4QyxvQkdoTCtCO0FDb0R2QztBSjJFUTtFQTBJSSxXQUFBO0VBQ0EsWUFBQTtFQUdBLFdHOVFvQztBQzBEaEQ7QUoySFk7RUFDSTtJQUVRLGtCQUFBO0lBTUosNkJHN0xtQjtJSDhMbkIsNEJHOUxtQjtFQ2dFckM7QUFDRjtBRDlEUTtFQUNJLCtEQUFBO0FDZ0VaO0FEN0RRO0VBQ0ksbUJBQUE7RUFDQSxvQkFBQTtFSHdNUixhR3ZNd0I7RUh3TXhCLGdCR3hNaUM7RUFDekIsOENBQUE7RUFDQSxvQkFBQTtBQ2dFWjtBRDlEWTtFQUNJLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSw4QkFBQTtBQ2dFaEI7QUQ1RFE7RUFDSSxlQUFBO0FDOERaO0FEMURJOztFQUtJLGNBQUE7QUN5RFI7QUQ1RFE7O0VBQ0ksZ0JBQUE7QUMrRFo7QUR2REk7RUFDSSxtQkFBQTtFQUNBLGFBQUE7QUMwRFIiLCJmaWxlIjoic3JjL2NvcmUvZmVhdHVyZXMvY29tbWVudHMvcGFnZXMvdmlld2VyL3ZpZXdlci5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIEFwcCBHbG9iYWwgdmFyaWFibGVzIFNDU1NcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFBsYWNlIGhlcmUgdGhlIGRpZmZlcmVudCBmaWxlcyB5b3Ugc2hvdWxkIGltcG9ydCB0byB1c2UgZ2xvYmFsIHZhcmlhYmxlcy5cbiAqL1xuXG4kZm9udC1wYXRoOiBcIi4uL2Fzc2V0cy9mb250c1wiO1xuJGFzc2V0cy1wYXRoOiBcIi4uL2Fzc2V0c1wiO1xuQGltcG9ydCBcIi4vZ2xvYmFscy5taXhpbnMuc2Nzc1wiO1xuQGltcG9ydCBcIi4vZ2xvYmFscy5taXhpbnMuaW9uaWMuc2Nzc1wiO1xuQGltcG9ydCBcIi4vZ2xvYmFscy5jdXN0b20uc2Nzc1wiO1xuQGltcG9ydCBcIi4vZ2xvYmFscy52YXJpYWJsZXMuc2Nzc1wiO1xuIiwiLypcbiAqIEFwcCBjdXN0b20gbWl4aW5zIGZvciBTQ1NTXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBQbGFjZSBoZXJlIG91ciBjdXN0b20gbWl4aW5zLlxuICovXG5cbiBAbWl4aW4gY29yZS1mb2N1cygpIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAmOjphZnRlciB7XG4gICAgICAgIEBpbmNsdWRlIHBvc2l0aW9uKDAsIDAsIDAsIDApO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIEBpbmNsdWRlIGNvcmUtZm9jdXMtc3R5bGUoKTtcbiAgICB9XG4gfVxuXG4gQG1peGluIGNvcmUtZm9jdXMtc3R5bGUoKSB7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIHZhcigtLWExMXktZm9jdXMtd2lkdGgpIDFweCB2YXIoLS1hMTF5LWZvY3VzLWNvbG9yKTtcbiAgICAvLyBUaGlja2VyIG9wdGlvbjpcbiAgICAvLyBib3JkZXI6IHZhcigtLWExMXktZm9jdXMtd2lkdGgpIHNvbGlkIHZhcigtLWExMXktZm9jdXMtY29sb3IpO1xufVxuXG5AbWl4aW4gY29yZS10cmFuc2l0aW9uKCR3aGVyZTogYWxsLCAkdGltZTogNTAwbXMpIHtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246ICR3aGVyZSAkdGltZSBlYXNlLWluLW91dDtcbiAgICAtbW96LXRyYW5zaXRpb246ICR3aGVyZSAkdGltZSBlYXNlLWluLW91dDtcbiAgICAtbXMtdHJhbnNpdGlvbjogJHdoZXJlICR0aW1lIGVhc2UtaW4tb3V0O1xuICAgIC1vLXRyYW5zaXRpb246ICR3aGVyZSAkdGltZSBlYXNlLWluLW91dDtcbiAgICB0cmFuc2l0aW9uOiAkd2hlcmUgJHRpbWUgZWFzZS1pbi1vdXQ7XG59XG5cbkBtaXhpbiBwdXNoLWFycm93LWNvbG9yKCRjb2xvcjogZGVkZWRlLCAkZmxpcC1ydGw6IGZhbHNlKSB7XG4gICAgJHN2ZzogXCI8c3ZnJTIweG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUyMHZpZXdCb3g9JzAlMjAwJTIwMTIlMjAyMCc+PHBhdGglMjBkPSdNMiwyMGwtMi0ybDgtOEwwLDJsMi0ybDEwLDEwTDIsMjB6JyUyMGZpbGw9JyUyMyN7JGNvbG9yfScvPjwvc3ZnPlwiO1xuICAgIEBpZiAkZmxpcC1ydGwgIT0gdHJ1ZSB7XG4gICAgICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCN7JHN2Z31cIik7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIHtcbiAgICAgICAgJGZsaXBwZWQtc3ZnOiBcIjxzdmclMjB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTIwdmlld0JveD0nMCUyMDAlMjAxMiUyMDIwJz48cGF0aCUyMHRyYW5zZm9ybT0ndHJhbnNsYXRlKDIwLCUyMDApJTIwc2NhbGUoLTEsJTIwMSknJTIwZD0nTTIsMjBsLTItMmw4LThMMCwybDItMmwxMCwxMEwyLDIweiclMjBmaWxsPSclMjMjeyRjb2xvcn0nLz48L3N2Zz5cIjtcblxuICAgICAgICBAaW5jbHVkZSBsdHIgKCkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsI3skc3ZnfVwiKTtcbiAgICAgICAgfVxuICAgICAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwjeyRmbGlwcGVkLXN2Z31cIik7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtaXhpbiBib3JkZXItc3RhcnQoJHB4LCAkdHlwZTogbnVsbCwgJGNvbG9yOiBudWxsKSB7XG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgICBib3JkZXItbGVmdDogJHB4ICR0eXBlICRjb2xvcjtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICAgIGJvcmRlci1yaWdodDogJHB4ICR0eXBlICRjb2xvcjtcbiAgICB9XG59XG5cblxuQG1peGluIGJvcmRlci1lbmQoJHB4LCAkdHlwZTogbnVsbCwgJGNvbG9yOiBudWxsKSB7XG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgICBib3JkZXItcmlnaHQ6ICRweCAkdHlwZSAkY29sb3I7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgICBib3JkZXItbGVmdDogJHB4ICR0eXBlICRjb2xvcjtcbiAgICB9XG59XG5cbkBtaXhpbiBzYWZlLWFyZWEtYm9yZGVyLXN0YXJ0KCRweCwgJHR5cGUsICRjb2xvcikge1xuICAgICRzYWZlLWFyZWEtcG9zaXRpb246IGNhbGMoY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LWxlZnQpICsgI3skcHh9KTtcbiAgICAkc2FmZS1hcmVhLXBvc2l0aW9uLWVudjogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LWxlZnQpICsgI3skcHh9KTtcblxuICAgIEBpbmNsdWRlIGJvcmRlci1zdGFydCgkcHgsICR0eXBlLCAkY29sb3IpO1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgIEBpbmNsdWRlIGJvcmRlci1zdGFydCgkc2FmZS1hcmVhLXBvc2l0aW9uLCAkdHlwZSwgJGNvbG9yKTtcbiAgICAgICAgQGluY2x1ZGUgYm9yZGVyLXN0YXJ0KCRzYWZlLWFyZWEtcG9zaXRpb24tZW52LCAkdHlwZSwgJGNvbG9yKTtcbiAgICB9XG59XG5cbkBtaXhpbiBzYWZlLWFyZWEtYm9yZGVyLWVuZCgkcHgsICR0eXBlLCAkY29sb3IpIHtcbiAgICAkc2FmZS1hcmVhLXBvc2l0aW9uOiBjYWxjKGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC1yaWdodCkgKyAjeyRweH0pO1xuICAgICRzYWZlLWFyZWEtcG9zaXRpb24tZW52OiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtcmlnaHQpICsgI3skcHh9KTtcblxuICAgIEBpbmNsdWRlIGJvcmRlci1lbmQoJHB4LCAkdHlwZSwgJGNvbG9yKTtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICBAaW5jbHVkZSBib3JkZXItZW5kKCRzYWZlLWFyZWEtcG9zaXRpb24sICR0eXBlLCAkY29sb3IpO1xuICAgICAgICBAaW5jbHVkZSBib3JkZXItZW5kKCRzYWZlLWFyZWEtcG9zaXRpb24tZW52LCAkdHlwZSwgJGNvbG9yKTtcbiAgICB9XG59XG5cbkBtaXhpbiBzYWZlLWFyZWEtbWFyZ2luLWhvcml6b250YWwoJHN0YXJ0LCAkZW5kOiAkc3RhcnQpIHtcbiAgICAkc2FmZS1hcmVhLWVuZDogbnVsbDtcbiAgICAkc2FmZS1hcmVhLXN0YXJ0OiBudWxsO1xuICAgICRzYWZlLWFyZWEtc3RhcnQtZW52OiBudWxsO1xuICAgICRzYWZlLWFyZWEtZW5kLWVudjogbnVsbDtcblxuICAgIEBpZiAoJGVuZCkge1xuICAgICAgICAkc2FmZS1hcmVhLWVuZDogY2FsYyhjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtcmlnaHQpICsgI3skZW5kfSk7XG4gICAgICAgICRzYWZlLWFyZWEtZW5kLWVudjogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LXJpZ2h0KSArICN7JGVuZH0pO1xuICAgIH1cbiAgICBAaWYgKCRzdGFydCkge1xuICAgICAgICAkc2FmZS1hcmVhLXN0YXJ0OiBjYWxjKGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC1sZWZ0KSArICN7JHN0YXJ0fSk7XG4gICAgICAgICRzYWZlLWFyZWEtc3RhcnQtZW52OiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtbGVmdCkgKyAjeyRzdGFydH0pO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG1hcmdpbi1ob3Jpem9udGFsKCRzdGFydCwgJGVuZCk7XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICBAaW5jbHVkZSBtYXJnaW4taG9yaXpvbnRhbCgkc2FmZS1hcmVhLXN0YXJ0LCAkc2FmZS1hcmVhLWVuZCk7XG4gICAgICAgIEBpbmNsdWRlIG1hcmdpbi1ob3Jpem9udGFsKCRzYWZlLWFyZWEtc3RhcnQtZW52LCAkc2FmZS1hcmVhLWVuZC1lbnYpO1xuICAgIH1cbn1cblxuQG1peGluIHNhZmUtYXJlYS1wYWRkaW5nLXN0YXJ0KCRzdGFydCwgJGVuZCkge1xuICAgICRzYWZlLWFyZWEtc3RhcnQ6IGNhbGMoY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LWxlZnQpICsgI3skc3RhcnR9KTtcbiAgICAkc2FmZS1hcmVhLXN0YXJ0LWVudjogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LWxlZnQpICsgI3skc3RhcnR9KTtcblxuICAgIEBpbmNsdWRlIHBhZGRpbmctaG9yaXpvbnRhbCgkc3RhcnQsICRlbmQpO1xuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAgICAgQGluY2x1ZGUgcGFkZGluZy1ob3Jpem9udGFsKCRzYWZlLWFyZWEtc3RhcnQsICRlbmQpO1xuICAgICAgICBAaW5jbHVkZSBwYWRkaW5nLWhvcml6b250YWwoJHNhZmUtYXJlYS1zdGFydC1lbnYsICRlbmQpO1xuICAgIH1cbn1cblxuQG1peGluIHNhZmUtYXJlYS1wYWRkaW5nLWVuZCgkc3RhcnQsICRlbmQpIHtcbiAgICAkc2FmZS1hcmVhLWVuZDogY2FsYyhjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtcmlnaHQpICsgI3skZW5kfSk7XG4gICAgJHNhZmUtYXJlYS1lbmQtZW52OiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtcmlnaHQpICsgI3skZW5kfSk7XG5cbiAgICBAaW5jbHVkZSBwYWRkaW5nLWhvcml6b250YWwoJHN0YXJ0LCAkZW5kKTtcblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgIEBpbmNsdWRlIHBhZGRpbmctaG9yaXpvbnRhbCgkc3RhcnQsICRzYWZlLWFyZWEtZW5kKTtcbiAgICAgICAgQGluY2x1ZGUgcGFkZGluZy1ob3Jpem9udGFsKCRzdGFydCwgJHNhZmUtYXJlYS1lbmQtZW52KTtcbiAgICB9XG59XG5cbkBtaXhpbiBzYWZlLWFyZWEtcG9zaXRpb24oJHRvcDogbnVsbCwgJGVuZDogbnVsbCwgJGJvdHRvbTogbnVsbCwgJHN0YXJ0OiBudWxsKSB7XG4gICAgQGluY2x1ZGUgcG9zaXRpb24taG9yaXpvbnRhbCgkc3RhcnQsICRlbmQpO1xuICAgIEBpbmNsdWRlIHNhZmUtcG9zaXRpb24taG9yaXpvbnRhbCgkc3RhcnQsICRlbmQpO1xuICAgIHRvcDogJHRvcDtcbiAgICBib3R0b206ICRib3R0b207XG59XG5cbkBtaXhpbiBjb3JlLWhlYWRpbmdzKCkge1xuICAgIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgIH1cbiAgICBoMiwgLml0ZW0taGVhZGluZyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB9XG4gICAgaDMge1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgfVxuICAgIGg0IHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbiAgICBoNSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB9XG4gICAgaDYge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxufVxuXG5AbWl4aW4gY29yZS1hcy1pdGVtcygpIHtcbiAgICAuaXRlbS1tZC5pdGVtLWJsb2NrID4gLml0ZW0taW5uZXIge1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGxpc3QtbWQtYm9yZGVyLWNvbG9yO1xuICAgIH1cblxuICAgIC5pdGVtLWlvcy5pdGVtLWJsb2NrID4gLml0ZW0taW5uZXIge1xuICAgICAgICBib3JkZXItYm90dG9tOiAkaGFpcmxpbmVzLXdpZHRoIHNvbGlkICRsaXN0LWlvcy1ib3JkZXItY29sb3I7XG4gICAgfVxuXG4gICAgJjpsYXN0LWNoaWxkIC5pdGVtID4gLml0ZW0taW5uZXIge1xuICAgICAgICBib3JkZXItYm90dG9tOiAwO1xuICAgIH1cbn1cblxuQG1peGluIGNvcmUtaXRlbXMoKSB7XG4gICAgJi5pdGVtLW1kLml0ZW0tYmxvY2sgPiAuaXRlbS1pbm5lciB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkbGlzdC1tZC1ib3JkZXItY29sb3I7XG4gICAgfVxuXG4gICAgJi5pdGVtLWlvcy5pdGVtLWJsb2NrID4gLml0ZW0taW5uZXIge1xuICAgICAgICBib3JkZXItYm90dG9tOiAkaGFpcmxpbmVzLXdpZHRoIHNvbGlkICRsaXN0LWlvcy1ib3JkZXItY29sb3I7XG4gICAgfVxuXG4gICAgJi5pdGVtLWJsb2NrOmxhc3QtY2hpbGQgPiAuaXRlbS1pbm5lciB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgfVxufVxuXG5AbWl4aW4gZGFya21vZGUoKSB7XG4gICAgJHJvb3Q6ICN7Jn07XG5cbiAgICBAYXQtcm9vdCBib2R5LmRhcmsge1xuICAgICAgICAjeyRyb290fSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1peGluIGhvcml6b250YWxfc2Nyb2xsX2l0ZW0oJHdpZHRoLCAkbWluLXdpZHRoLCAkbWF4LXdpZHRoKSB7XG4gICAgZmxleDogMCAwICR3aWR0aDtcbiAgICBtaW4td2lkdGg6ICRtaW4td2lkdGg7XG4gICAgbWF4LXdpZHRoOiAkbWF4LXdpZHRoO1xuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICBpb24tY2FyZCB7XG4gICAgICAgIC0tdmVydGljYWwtbWFyZ2luOiAxMHB4O1xuICAgICAgICAtLWhvcml6b250YWwtbWFyZ2luOiAxMHB4O1xuXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSB2YXIoLS12ZXJ0aWNhbC1tYXJnaW4pIC0gdmFyKC0tdmVydGljYWwtbWFyZ2luKSk7XG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gdmFyKC0tdmVydGljYWwtbWFyZ2luKSAtIHZhcigtLXZlcnRpY2FsLW1hcmdpbikpO1xuICAgICAgICBtYXJnaW46IHZhcigtLXZlcnRpY2FsLW1hcmdpbikgdmFyKC0taG9yaXpvbnRhbC1tYXJnaW4pO1xuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNjBweCkge1xuICAgICAgICAgICAgLS1ob3Jpem9udGFsLW1hcmdpbjogNnB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmlvbi10ZXh0LXdyYXAgaW9uLWxhYmVsIHtcbiAgICAgICAgLml0ZW0taGVhZGluZywgaDIsIHAge1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vLyBDb2xvciBtaXhpbnMuXG5AZnVuY3Rpb24gZ2V0X2JyaWdodG5lc3MoJGNvbG9yKSB7XG4gICAgQHJldHVybiAocmVkKCRjb2xvcikgKyBncmVlbigkY29sb3IpICsgYmx1ZSgkY29sb3IpKSAvIDM7XG59XG5cbkBmdW5jdGlvbiBnZXRfY29udHJhc3RfY29sb3IoJGNvbG9yKSB7XG4gICAgJGJyaWdodG5lc3M6IGdldF9icmlnaHRuZXNzKCRjb2xvcik7XG5cbiAgICBAcmV0dXJuIGlmKCRicmlnaHRuZXNzIDwgMTI3LCB3aGl0ZSwgYmxhY2spO1xufVxuIiwiLypcbiAqIEltcG9ydGVkIGlvbmljIG1peGlucyBmb3IgU0NTU1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogUGxhY2UgaGVyZSBvdXIgY3VzdG9tIG1peGlucy5cbiAqIEV4dHJhY3RlZCBmcm9tIGlvbmljLm1peGlucy5zY3NzXG4gKiBodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9pb25pYy1mcmFtZXdvcmsvYmxvYi9tYXN0ZXIvY29yZS9zcmMvdGhlbWVzL2lvbmljLm1peGlucy5zY3NzXG4gKi9cblxuLy8gUmVzcG9uc2l2ZSBNaXhpbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBDcmVhdGVzIGEgZml4ZWQgd2lkdGggZm9yIHRoZSBncmlkIGJhc2VkIG9uIHRoZSBzY3JlZW4gc2l6ZVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gbWFrZS1ncmlkLXdpZHRocygkd2lkdGhzOiAkZ3JpZC13aWR0aHMsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xuICBAZWFjaCAkYnJlYWtwb2ludCwgJHdpZHRoIGluICR3aWR0aHMge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGJyZWFrcG9pbnQsICRicmVha3BvaW50cykge1xuICAgICAgd2lkdGg6ICR3aWR0aDtcbiAgICB9XG4gIH1cblxuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi8vIEFkZHMgcGFkZGluZyB0byB0aGUgZWxlbWVudCBiYXNlZCBvbiBicmVha3BvaW50c1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gbWFrZS1icmVha3BvaW50LXBhZGRpbmcoJHBhZGRpbmdzKSB7XG4gIEBlYWNoICRicmVha3BvaW50IGluIG1hcC1rZXlzKCRwYWRkaW5ncykge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGJyZWFrcG9pbnQpIHtcbiAgICAgICRwYWRkaW5nOiBtYXAtZ2V0KCRwYWRkaW5ncywgJGJyZWFrcG9pbnQpO1xuXG4gICAgICBAaW5jbHVkZSBwYWRkaW5nKCRwYWRkaW5nKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gR2V0cyB0aGUgYWN0aXZlIGNvbG9yJ3MgY3NzIHZhcmlhYmxlIGZyb20gYSB2YXJpYXRpb24uIEFscGhhIGlzIG9wdGlvbmFsLlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEV4YW1wbGUgdXNhZ2U6XG4vLyBjdXJyZW50LWNvbG9yKGJhc2UpID0+IHZhcigtLWlvbi1jb2xvci1iYXNlKVxuLy8gY3VycmVudC1jb2xvcihjb250cmFzdCwgMC4xKSA9PiByZ2JhKHZhcigtLWlvbi1jb2xvci1jb250cmFzdC1yZ2IpLCAwLjEpXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQGZ1bmN0aW9uIGN1cnJlbnQtY29sb3IoJHZhcmlhdGlvbiwgJGFscGhhOiBudWxsKSB7XG4gIEBpZiAkYWxwaGEgPT0gbnVsbCB7XG4gICAgQHJldHVybiB2YXIoLS1pb24tY29sb3ItI3skdmFyaWF0aW9ufSk7XG4gIH0gQGVsc2Uge1xuICAgIEByZXR1cm4gcmdiYSh2YXIoLS1pb24tY29sb3ItI3skdmFyaWF0aW9ufS1yZ2IpLCAjeyRhbHBoYX0pO1xuICB9XG59XG5cbi8vIE1peGVzIGEgY29sb3Igd2l0aCBibGFjayB0byBjcmVhdGUgaXRzIHNoYWRlLlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBmdW5jdGlvbiBnZXQtY29sb3Itc2hhZGUoJGNvbG9yKSB7XG4gIEByZXR1cm4gbWl4KCMwMDAsICRjb2xvciwgMTIlKTtcbn1cblxuLy8gTWl4ZXMgYSBjb2xvciB3aXRoIHdoaXRlIHRvIGNyZWF0ZSBpdHMgdGludC5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AZnVuY3Rpb24gZ2V0LWNvbG9yLXRpbnQoJGNvbG9yKSB7XG4gIEByZXR1cm4gbWl4KCNmZmYsICRjb2xvciwgMTAlKTtcbn1cblxuLy8gQ29udmVydHMgYSBjb2xvciB0byBhIGNvbW1hIHNlcGFyYXRlZCByZ2IuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQGZ1bmN0aW9uIGNvbG9yLXRvLXJnYi1saXN0KCRjb2xvcikge1xuICBAcmV0dXJuICN7cmVkKCRjb2xvcil9LCN7Z3JlZW4oJGNvbG9yKX0sI3tibHVlKCRjb2xvcil9O1xufVxuXG5cbiAvLyBJb25pYyBDb2xvcnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBHZW5lcmF0ZXMgdGhlIGNvbG9yIGNsYXNzZXMgYW5kIHZhcmlhYmxlcyBiYXNlZCBvbiB0aGVcbi8vIGNvbG9ycyBtYXBcblxuQG1peGluIGdlbmVyYXRlLWNvbG9yKCRjb2xvci1uYW1lLCAkY29sb3JzKSB7XG4gICAgJGJhc2U6IG1hcC1nZXQoJGNvbG9ycywgJGNvbG9yLW5hbWUpO1xuXG4gICAgJGNvbnRyYXN0OiBnZXRfY29udHJhc3RfY29sb3IoJGJhc2UpO1xuICAgICRzaGFkZTogZ2V0LWNvbG9yLXNoYWRlKCRiYXNlKTtcbiAgICAkdGludDogZ2V0LWNvbG9yLXRpbnQoJGJhc2UpO1xuXG4gICAgLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX06IHZhcigtLSN7JGNvbG9yLW5hbWV9LCAjeyRiYXNlfSk7XG4gICAgLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tYmFzZTogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9KTtcbiAgICAtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1yZ2I6ICN7Y29sb3ItdG8tcmdiLWxpc3QoJGJhc2UpfTtcbiAgICAtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1jb250cmFzdDogI3skY29udHJhc3R9O1xuICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LWNvbnRyYXN0LXJnYjogI3tjb2xvci10by1yZ2ItbGlzdCgkY29udHJhc3QpfTtcbiAgICAtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1zaGFkZTogI3skc2hhZGV9O1xuICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LXRpbnQ6ICN7JHRpbnR9O1xuXG4gICAgLmlvbi1jb2xvci0jeyRjb2xvci1uYW1lfSB7XG4gICAgICAgIC0taW9uLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0pO1xuICAgICAgICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tYmFzZSk7XG4gICAgICAgIC0taW9uLWNvbG9yLXJnYjogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LXJnYik7XG4gICAgICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tY29udHJhc3QpO1xuICAgICAgICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1jb250cmFzdC1yZ2IpO1xuICAgICAgICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LXNoYWRlKTtcbiAgICAgICAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LXRpbnQpO1xuICAgIH1cbn1cblxuQG1peGluIGlucHV0LWNvdmVyKCkge1xuICAgIEBpbmNsdWRlIHBvc2l0aW9uKDAsIG51bGwsIG51bGwsIDApO1xuICAgIEBpbmNsdWRlIG1hcmdpbigwKTtcblxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcblxuICAgIGJvcmRlcjogMDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG5cbiAgICAmOjotbW96LWZvY3VzLWlubmVyIHtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgIH1cbn1cblxuQG1peGluIHRleHQtaW5oZXJpdCgpIHtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgZm9udC1zdHlsZTogaW5oZXJpdDtcbiAgICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgICBsZXR0ZXItc3BhY2luZzogaW5oZXJpdDtcbiAgICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XG4gICAgdGV4dC1pbmRlbnQ6IGluaGVyaXQ7XG4gICAgdGV4dC1vdmVyZmxvdzogaW5oZXJpdDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcbiAgICB0ZXh0LWFsaWduOiBpbmhlcml0O1xuICAgIHdoaXRlLXNwYWNlOiBpbmhlcml0O1xuICAgIGNvbG9yOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gYnV0dG9uLXN0YXRlKCkge1xuICAgIEBpbmNsdWRlIHBvc2l0aW9uKDAsIDAsIDAsIDApO1xuXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gICAgY29udGVudDogXCJcIjtcblxuICAgIG9wYWNpdHk6IDA7XG59XG5cbi8vIEZvbnQgc21vb3RoaW5nXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5AbWl4aW4gZm9udC1zbW9vdGhpbmcoKSB7XG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuLy8gR2V0IHRoZSBrZXkgZnJvbSBhIG1hcCBiYXNlZCBvbiB0aGUgaW5kZXhcbkBmdW5jdGlvbiBpbmRleC10by1rZXkoJG1hcCwgJGluZGV4KSB7XG4gICAgJGtleXM6IG1hcC1rZXlzKCRtYXApO1xuXG4gICAgQHJldHVybiBudGgoJGtleXMsICRpbmRleCk7XG59XG5cblxuLy8gQnJlYWtwb2ludCBNaXhpbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBCcmVha3BvaW50IHZpZXdwb3J0IHNpemVzIGFuZCBtZWRpYSBxdWVyaWVzLlxuLy9cbi8vIEJyZWFrcG9pbnRzIGFyZSBkZWZpbmVkIGFzIGEgbWFwIG9mIChuYW1lOiBtaW5pbXVtIHdpZHRoKSwgb3JkZXIgZnJvbSBzbWFsbCB0byBsYXJnZTpcbi8vXG4vLyAgICAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpXG4vL1xuLy8gVGhlIG1hcCBkZWZpbmVkIGluIHRoZSBgJHNjcmVlbi1icmVha3BvaW50c2AgZ2xvYmFsIHZhcmlhYmxlIGlzIHVzZWQgYXMgdGhlIGAkYnJlYWtwb2ludHNgIGFyZ3VtZW50IGJ5IGRlZmF1bHQuXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBNaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1taW4oc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA1NzZweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcbiAgICAkbWluOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xuXG4gICAgQHJldHVybiBpZigkbmFtZSAhPSBpbmRleC10by1rZXkoJGJyZWFrcG9pbnRzLCAxKSwgJG1pbiwgbnVsbCk7XG59XG5cbi8vIFJldHVybnMgYSBibGFuayBzdHJpbmcgaWYgc21hbGxlc3QgYnJlYWtwb2ludCwgb3RoZXJ3aXNlIHJldHVybnMgdGhlIG5hbWUgd2l0aCBhIGRhc2ggaW5mcm9udC5cbi8vIFVzZWZ1bCBmb3IgbWFraW5nIHJlc3BvbnNpdmUgdXRpbGl0aWVzLlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoeHMsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIlwiICAoUmV0dXJucyBhIGJsYW5rIHN0cmluZylcbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIi1zbVwiXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1pbmZpeCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XG4gICAgQHJldHVybiBpZihicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKSA9PSBudWxsLCBcIlwiLCBcIi0jeyRuYW1lfVwiKTtcbn1cblxuLy8gTWVkaWEgb2YgYXQgbGVhc3QgdGhlIG1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCB3aWRlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcbiAgICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgICBAaWYgJG1pbiB7XG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2Uge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbi8vIE5hbWUgb2YgdGhlIG5leHQgYnJlYWtwb2ludCwgb3IgbnVsbCBmb3IgdGhlIGxhc3QgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20pXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgJGJyZWFrcG9pbnQtbmFtZXM6ICh4cyBzbSBtZCBsZyB4bCkpXG4vLyAgICBtZFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xuICAgICRuOiBpbmRleCgkYnJlYWtwb2ludC1uYW1lcywgJG5hbWUpO1xuICAgIEByZXR1cm4gaWYoJG4gPCBsZW5ndGgoJGJyZWFrcG9pbnQtbmFtZXMpLCBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksIG51bGwpO1xufVxuXG4vLyBNYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vLyBUaGUgbWF4aW11bSB2YWx1ZSBpcyByZWR1Y2VkIGJ5IDAuMDJweCB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2Zcbi8vIGBtaW4tYCBhbmQgYG1heC1gIHByZWZpeGVzIGFuZCB2aWV3cG9ydHMgd2l0aCBmcmFjdGlvbmFsIHdpZHRocy5cbi8vXG4vLyBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL21lZGlhcXVlcmllcy00LyNtcS1taW4tbWF4XG4vLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXHQvLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXG4vLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVx0Ly8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1heChtZCwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDc2Ny45OHB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xuICAgICRtYXg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gICAgQHJldHVybiBpZigkbWF4IGFuZCAkbWF4ID4gMCwgJG1heCAtIC4wMiwgbnVsbCk7XG59XG5cbi8vIE1lZGlhIG9mIGF0IG1vc3QgdGhlIG1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBsYXJnZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XG4gICAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG4gICAgQGlmICRtYXgge1xuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5cbi8vIFRleHQgRGlyZWN0aW9uIC0gbHRyIC8gcnRsXG4vL1xuLy8gQ1NTIGRlZmF1bHRzIHRvIHVzZSB0aGUgbHRyIGNzcywgYW5kIGFkZHMgW2Rpcj1ydGxdIHNlbGVjdG9yc1xuLy8gdG8gb3ZlcnJpZGUgbHRyIGRlZmF1bHRzLlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5AbWl4aW4gbXVsdGktZGlyKCkge1xuICAgIEBjb250ZW50O1xuXG4gICAgLy8gJHJvb3Q6ICN7Jn07XG4gICAgLy8gQGF0LXJvb3QgW2Rpcl0ge1xuICAgIC8vICAgI3skcm9vdH0ge1xuICAgIC8vICAgICBAY29udGVudDtcbiAgICAvLyAgIH1cbiAgICAvLyB9XG59XG5cbkBtaXhpbiBydGwoKSB7XG4gICAgJHJvb3Q6ICN7Jn07XG5cbiAgICBAYXQtcm9vdCBbZGlyPXJ0bF0ge1xuICAgICAgICAjeyRyb290fSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1peGluIGx0cigpIHtcbiAgICBAY29udGVudDtcbn1cblxuXG4vLyBTVkcgQmFja2dyb3VuZCBJbWFnZSBNaXhpblxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdmdcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBzdmctYmFja2dyb3VuZC1pbWFnZSgkc3ZnLCAkZmxpcC1ydGw6IGZhbHNlKSB7XG4gICAgJHVybDogdXJsLWVuY29kZSgkc3ZnKTtcbiAgICAkdmlld0JveDogc3RyLXNwbGl0KHN0ci1leHRyYWN0KCRzdmcsIFwidmlld0JveD0nXCIsIFwiJ1wiKSwgXCIgXCIpO1xuXG4gICAgQGlmICRmbGlwLXJ0bCAhPSB0cnVlIG9yICR2aWV3Qm94ID09IG51bGwge1xuICAgICAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwjeyR1cmx9XCIpO1xuICAgICAgICB9XG4gICAgfSBAZWxzZSB7XG4gICAgICAgICR0cmFuc2Zvcm06IFwidHJhbnNmb3JtPSd0cmFuc2xhdGUoI3tudGgoJHZpZXdCb3gsIDMpfSwgMCkgc2NhbGUoLTEsIDEpJ1wiO1xuICAgICAgICAkZmxpcHBlZC11cmw6ICRzdmc7XG4gICAgICAgICRmbGlwcGVkLXVybDogc3RyLXJlcGxhY2UoJGZsaXBwZWQtdXJsLCBcIjxwYXRoXCIsIFwiPHBhdGggI3skdHJhbnNmb3JtfVwiKTtcbiAgICAgICAgJGZsaXBwZWQtdXJsOiBzdHItcmVwbGFjZSgkZmxpcHBlZC11cmwsIFwiPGxpbmVcIiwgXCI8bGluZSAjeyR0cmFuc2Zvcm19XCIpO1xuICAgICAgICAkZmxpcHBlZC11cmw6IHN0ci1yZXBsYWNlKCRmbGlwcGVkLXVybCwgXCI8cG9seWdvblwiLCBcIjxwb2x5Z29uICN7JHRyYW5zZm9ybX1cIik7XG4gICAgICAgICRmbGlwcGVkLXVybDogdXJsLWVuY29kZSgkZmxpcHBlZC11cmwpO1xuXG4gICAgICAgIEBpbmNsdWRlIGx0ciAoKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwjeyR1cmx9XCIpO1xuICAgICAgICB9XG4gICAgICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCN7JGZsaXBwZWQtdXJsfVwiKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gQWRkIHByb3BlcnR5IGhvcml6b250YWxcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gcHJvcGVydHktaG9yaXpvbnRhbCgkcHJvcCwgJHN0YXJ0LCAkZW5kOiAkc3RhcnQpIHtcbiAgICBAaWYgJHN0YXJ0ID09IDAgYW5kICRlbmQgPT0gMCB7XG4gICAgICAgICN7JHByb3B9LWxlZnQ6ICRzdGFydDtcbiAgICAgICAgI3skcHJvcH0tcmlnaHQ6ICRlbmQ7XG5cbiAgICB9IEBlbHNlIHtcbiAgICAgICAgI3skcHJvcH0tbGVmdDogJHN0YXJ0O1xuICAgICAgICAjeyRwcm9wfS1yaWdodDogJGVuZDtcblxuICAgICAgICBAYXQtcm9vdCB7XG4gICAgICAgICAgICBAc3VwcG9ydHMgKChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApKSB7XG4gICAgICAgICAgICAgICAgJiB7XG4gICAgICAgICAgICAgICAgICAgIEBpZiAkc3RhcnQgIT0gbnVsbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAjeyRwcm9wfS1sZWZ0OiB1bnNldDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBAaWYgJGVuZCAhPSBudWxsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICN7JHByb3B9LXJpZ2h0OiB1bnNldDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtI3skcHJvcH0tc3RhcnQ6ICRzdGFydDtcbiAgICAgICAgICAgICAgICAgICAgI3skcHJvcH0taW5saW5lLXN0YXJ0OiAkc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtI3skcHJvcH0tZW5kOiAkZW5kO1xuICAgICAgICAgICAgICAgICAgICAjeyRwcm9wfS1pbmxpbmUtZW5kOiAkZW5kO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gQWRkIHByb3BlcnR5IGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICRwcm9wXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyBAcGFyYW0ge2Jvb2xlYW59ICRjb250ZW50IGluY2x1ZGUgY29udGVudCBvciB1c2UgZGVmYXVsdFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIHByb3BlcnR5KCRwcm9wLCAkdG9wLCAkZW5kOiAkdG9wLCAkYm90dG9tOiAkdG9wLCAkc3RhcnQ6ICRlbmQpIHtcbiAgICBAaW5jbHVkZSBwcm9wZXJ0eS1ob3Jpem9udGFsKCRwcm9wLCAkc3RhcnQsICRlbmQpO1xuICAgICN7JHByb3B9LXRvcDogJHRvcDtcbiAgICAjeyRwcm9wfS1ib3R0b206ICRib3R0b207XG59XG5cbi8vIEFkZCBwYWRkaW5nIGhvcml6b250YWxcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gcGFkZGluZy1ob3Jpem9udGFsKCRzdGFydCwgJGVuZDogJHN0YXJ0KSB7XG4gICAgQGluY2x1ZGUgcHJvcGVydHktaG9yaXpvbnRhbChwYWRkaW5nLCAkc3RhcnQsICRlbmQpO1xufVxuXG4vLyBBZGQgcGFkZGluZyBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b21cbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBwYWRkaW5nKCR0b3AsICRlbmQ6ICR0b3AsICRib3R0b206ICR0b3AsICRzdGFydDogJGVuZCkge1xuICAgIEBpbmNsdWRlIHByb3BlcnR5KHBhZGRpbmcsICR0b3AsICRlbmQsICRib3R0b20sICRzdGFydCk7XG59XG5cbi8vIEFkZCBtYXJnaW4gaG9yaXpvbnRhbFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBtYXJnaW4taG9yaXpvbnRhbCgkc3RhcnQsICRlbmQ6ICRzdGFydCkge1xuICAgIEBpbmNsdWRlIHByb3BlcnR5LWhvcml6b250YWwobWFyZ2luLCAkc3RhcnQsICRlbmQpO1xufVxuXG4vLyBBZGQgbWFyZ2luIGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3Bcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbVxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIG1hcmdpbigkdG9wLCAkZW5kOiAkdG9wLCAkYm90dG9tOiAkdG9wLCAkc3RhcnQ6ICRlbmQpIHtcbiAgICBAaW5jbHVkZSBwcm9wZXJ0eShtYXJnaW4sICR0b3AsICRlbmQsICRib3R0b20sICRzdGFydCk7XG59XG5cbi8vIEFkZCBwb3NpdGlvbiBob3Jpem9udGFsXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0IC0gYW1vdW50IHRvIHBvc2l0aW9uIHN0YXJ0XG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZCAtIGFtb3VudCB0byBsZWZ0OiAwOyBlbmRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBwb3NpdGlvbi1ob3Jpem9udGFsKCRzdGFydDogbnVsbCwgJGVuZDogbnVsbCkge1xuICAgIEBpZiAkc3RhcnQgPT0gJGVuZCB7XG4gICAgICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgICAgICAgIGxlZnQ6ICRzdGFydDtcbiAgICAgICAgICAgIHJpZ2h0OiAkZW5kO1xuICAgICAgICB9XG4gICAgfSBAZWxzZSB7XG4gICAgICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgICAgICAgIGxlZnQ6ICRzdGFydDtcbiAgICAgICAgICAgIHJpZ2h0OiAkZW5kO1xuICAgICAgICB9XG4gICAgICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgICAgICAgIGxlZnQ6IHVuc2V0O1xuICAgICAgICAgICAgcmlnaHQ6IHVuc2V0O1xuXG4gICAgICAgICAgICBsZWZ0OiAkZW5kO1xuICAgICAgICAgICAgcmlnaHQ6ICRzdGFydDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gQWRkIHBvc2l0aW9uIGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3Bcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbVxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIHBvc2l0aW9uKCR0b3A6IG51bGwsICRlbmQ6IG51bGwsICRib3R0b206IG51bGwsICRzdGFydDogbnVsbCkge1xuICAgIEBpbmNsdWRlIHBvc2l0aW9uLWhvcml6b250YWwoJHN0YXJ0LCAkZW5kKTtcbiAgICB0b3A6ICR0b3A7XG4gICAgYm90dG9tOiAkYm90dG9tO1xufVxuXG4vLyBBZGQgYm9yZGVyIGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3Bcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbVxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIGJvcmRlcigkdG9wLCAkZW5kOiAkdG9wLCAkYm90dG9tOiAkdG9wLCAkc3RhcnQ6ICRlbmQpIHtcbiAgICBAaW5jbHVkZSBwcm9wZXJ0eShib3JkZXIsICR0b3AsICRlbmQsICRib3R0b20sICRzdGFydCk7XG59XG5cbi8vIEFkZCBib3JkZXIgcmFkaXVzIGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3Atc3RhcnRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wLWVuZFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b20tZW5kXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbS1zdGFydFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIGJvcmRlci1yYWRpdXMoJHRvcC1zdGFydCwgJHRvcC1lbmQ6ICR0b3Atc3RhcnQsICRib3R0b20tZW5kOiAkdG9wLXN0YXJ0LCAkYm90dG9tLXN0YXJ0OiAkdG9wLWVuZCkge1xuICAgIEBpZiAkdG9wLXN0YXJ0ID09ICR0b3AtZW5kIGFuZCAkdG9wLXN0YXJ0ID09ICRib3R0b20tZW5kIGFuZCAkdG9wLXN0YXJ0ID09ICRib3R0b20tc3RhcnQge1xuICAgICAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAkdG9wLXN0YXJ0O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSB7XG4gICAgICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICR0b3Atc3RhcnQ7XG4gICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJHRvcC1lbmQ7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJGJvdHRvbS1lbmQ7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkYm90dG9tLXN0YXJ0O1xuICAgICAgICB9XG5cbiAgICAgICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJHRvcC1lbmQ7XG4gICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJHRvcC1zdGFydDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkYm90dG9tLXN0YXJ0O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJGJvdHRvbS1lbmQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIEFkZCBkaXJlY3Rpb24gZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJGRpciAtIERpcmVjdGlvbiBvbiBMVFJcbkBtaXhpbiBkaXJlY3Rpb24oJGRpcikge1xuICAgICRvdGhlci1kaXI6IG51bGw7XG5cbiAgICBAaWYgJGRpciA9PSBsdHIge1xuICAgICAgICAkb3RoZXItZGlyOiBydGw7XG4gICAgfSBAZWxzZSB7XG4gICAgICAgICRvdGhlci1kaXI6IGx0cjtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICAgIGRpcmVjdGlvbjogJGRpcjtcbiAgICB9XG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgICBkaXJlY3Rpb246ICRvdGhlci1kaXI7XG4gICAgfVxufVxuXG4vLyBBZGQgZmxvYXQgZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHNpZGVcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZGVjb3JhdG9yIC0gIWltcG9ydGFudFxuQG1peGluIGZsb2F0KCRzaWRlLCAkZGVjb3JhdG9yOiBudWxsKSB7XG4gICAgQGlmICRzaWRlID09IHN0YXJ0IHtcbiAgICAgICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQgJGRlY29yYXRvcjtcbiAgICAgICAgfVxuICAgICAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQgJGRlY29yYXRvcjtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJHNpZGUgPT0gZW5kIHtcbiAgICAgICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0ICRkZWNvcmF0b3I7XG4gICAgICAgIH1cbiAgICAgICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQgJGRlY29yYXRvcjtcbiAgICAgICAgfVxuICAgIH0gQGVsc2Uge1xuICAgICAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XG4gICAgICAgICAgICBmbG9hdDogJHNpZGUgJGRlY29yYXRvcjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1peGluIGJhY2tncm91bmQtcG9zaXRpb24oJGhvcml6b250YWwsICRob3Jpem9udGFsLWFtb3VudDogbnVsbCwgJHZlcnRpY2FsOiBudWxsLCAkdmVydGljYWwtYW1vdW50OiBudWxsKSB7XG4gICAgQGlmICRob3Jpem9udGFsID09IHN0YXJ0IG9yICRob3Jpem9udGFsID09IGVuZCB7XG4gICAgICAgICRob3Jpem9udGFsLWx0cjogbnVsbDtcbiAgICAgICAgJGhvcml6b250YWwtcnRsOiBudWxsO1xuICAgICAgICBAaWYgJGhvcml6b250YWwgPT0gc3RhcnQge1xuICAgICAgICAgICAgJGhvcml6b250YWwtbHRyOiBsZWZ0O1xuICAgICAgICAgICAgJGhvcml6b250YWwtcnRsOiByaWdodDtcbiAgICAgICAgfSBAZWxzZSB7XG4gICAgICAgICAgICAkaG9yaXpvbnRhbC1sdHI6IHJpZ2h0O1xuICAgICAgICAgICAgJGhvcml6b250YWwtcnRsOiBsZWZ0O1xuICAgICAgICB9XG5cbiAgICAgICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogJGhvcml6b250YWwtbHRyICRob3Jpem9udGFsLWFtb3VudCAkdmVydGljYWwgJHZlcnRpY2FsLWFtb3VudDtcbiAgICAgICAgfVxuICAgICAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAkaG9yaXpvbnRhbC1ydGwgJGhvcml6b250YWwtYW1vdW50ICR2ZXJ0aWNhbCAkdmVydGljYWwtYW1vdW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSB7XG4gICAgICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246ICRob3Jpem9udGFsICRob3Jpem9udGFsLWFtb3VudCAkdmVydGljYWwgJHZlcnRpY2FsLWFtb3VudDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1peGluIHRyYW5zZm9ybS1vcmlnaW4oJHgtYXhpcywgJHktYXhpczogbnVsbCkge1xuICAgIEBpZiAkeC1heGlzID09IHN0YXJ0IHtcbiAgICAgICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCAkeS1heGlzO1xuICAgICAgICB9XG4gICAgICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0ICR5LWF4aXM7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICR4LWF4aXMgPT0gZW5kIHtcbiAgICAgICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgJHktYXhpcztcbiAgICAgICAgfVxuICAgICAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0ICR5LWF4aXM7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICR4LWF4aXMgPT0gbGVmdCBvciAkeC1heGlzID09IHJpZ2h0IHtcbiAgICAgICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogJHgtYXhpcyAkeS1heGlzO1xuICAgICAgICB9XG4gICAgfSBAZWxzZSB7XG4gICAgICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46ICR4LWF4aXMgJHktYXhpcztcbiAgICAgICAgfVxuICAgICAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjYWxjKDEwMCUgLSAjeyR4LWF4aXN9KSAkeS1heGlzO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBBZGQgdHJhbnNmb3JtIGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICR0cmFuc2Zvcm1zIC0gY29tbWEgc2VwYXJhdGVkIGxpc3Qgb2YgdHJhbnNmb3Jtc1xuQG1peGluIHRyYW5zZm9ybSgkdHJhbnNmb3Jtcy4uLikge1xuICAgICRleHRyYTogbnVsbDtcblxuICAgICR4OiBudWxsO1xuICAgICRsdHItdHJhbnNsYXRlOiBudWxsO1xuICAgICRydGwtdHJhbnNsYXRlOiBudWxsO1xuXG4gICAgQGVhY2ggJHRyYW5zZm9ybSBpbiAkdHJhbnNmb3JtcyB7XG4gICAgICAgIEBpZiAoc3RyLWluZGV4KCR0cmFuc2Zvcm0sIHRyYW5zbGF0ZTNkKSkge1xuICAgICAgICAgICAgJHRyYW5zZm9ybTogc3RyLXJlcGxhY2UoJHRyYW5zZm9ybSwgJ3RyYW5zbGF0ZTNkKCcpO1xuICAgICAgICAgICAgJHRyYW5zZm9ybTogc3RyLXJlcGxhY2UoJHRyYW5zZm9ybSwgJyknKTtcblxuICAgICAgICAgICAgJGNvb3JkaW5hdGVzOiBzdHItc3BsaXQoJHRyYW5zZm9ybSwgJywnKTtcblxuICAgICAgICAgICAgJHg6IG50aCgkY29vcmRpbmF0ZXMsIDEpO1xuICAgICAgICAgICAgJHk6IG50aCgkY29vcmRpbmF0ZXMsIDIpO1xuICAgICAgICAgICAgJHo6IG50aCgkY29vcmRpbmF0ZXMsIDMpO1xuXG4gICAgICAgICAgICAkbHRyLXRyYW5zbGF0ZTogdHJhbnNsYXRlM2QoJHgsICR5LCAkeik7XG4gICAgICAgICAgICAkcnRsLXRyYW5zbGF0ZTogdHJhbnNsYXRlM2QoY2FsYygtMSAqICN7JHh9KSwgJHksICR6KTtcbiAgICAgICAgfSBAZWxzZSB7XG4gICAgICAgICAgICBAaWYgJGV4dHJhID09IG51bGwge1xuICAgICAgICAgICAgICAgICRleHRyYTogJHRyYW5zZm9ybTtcbiAgICAgICAgICAgIH0gQGVsc2Uge1xuICAgICAgICAgICAgICAgICRleHRyYTogJGV4dHJhICR0cmFuc2Zvcm07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAaWYgJHggPT0gJzAnIG9yICR4ID09IG51bGwge1xuICAgICAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06ICRsdHItdHJhbnNsYXRlICRleHRyYTtcbiAgICAgICAgfVxuICAgIH0gQGVsc2Uge1xuICAgICAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06ICRsdHItdHJhbnNsYXRlICRleHRyYTtcbiAgICAgICAgfVxuXG4gICAgICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogJHJ0bC10cmFuc2xhdGUgJGV4dHJhO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLypcbiAqIEFwcCBDdXN0b20gQXBwIHZhcmlhYmxlcyBTQ1NTXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBQbGFjZSBoZXJlIGFsbCBjdXN0b20gYXBwIHZhcmlhYmxlcy5cbiAqL1xuICRicmFuZC1jb2xvcjogIzFBOURENyAhZGVmYXVsdDtcbiIsIi8qXG4gKiBBcHAgR2xvYmFsIHZhcmlhYmxlcyBTQ1NTXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBQbGFjZSBoZXJlIGFsbCBnbG9iYWwgdmFyaWFibGVzLlxuICovXG5cbiRibGFjazogICAgICAgICAgICMyODI4MjggIWRlZmF1bHQ7IC8vIEhlYWRpbmdzLCBzdGFuZGFyZCB0ZXh0LlxuJGdyYXktZGFya2VyOiAgICAgIzY4NjU2NiAhZGVmYXVsdDtcbiRncmF5LWRhcms6ICAgICAgICM5ZTllOWUgIWRlZmF1bHQ7XG4kZ3JheTogICAgICAgICAgICAjZGRkZGRkICFkZWZhdWx0O1xuJGdyYXktbGlnaHQ6ICAgICAgI2U5ZTllOSAhZGVmYXVsdDsgLy8gQmFja2dyb3VuZC5cbiRncmF5LWxpZ2h0ZXI6ICAgICNmNWY1ZjUgIWRlZmF1bHQ7XG4kd2hpdGU6ICAgICAgICAgICAjZmZmZmZmICFkZWZhdWx0OyAvLyBCYWNrZ3JvdW5kLCByZXZlcnNlZCB0ZXh0LlxuXG4kYmx1ZTogICAgICAgICAgICAjMDA2NGQyICFkZWZhdWx0OyAvLyBMaW5rLCBiYWNrZ3JvdW5kLlxuJGJsdWUtbGlnaHQ6ICAgICAgbWl4KCRibHVlLCB3aGl0ZSwgMjAlKSAhZGVmYXVsdDsgLy8gQmFja2dyb3VuZC5cbiRibHVlLWRhcms6ICAgICAgIGRhcmtlbigkYmx1ZSwgMTAlKSAhZGVmYXVsdDtcblxuJGdyZWVuOiAgICAgICAgICAgIzVlODEwMCAhZGVmYXVsdDsgLy8gQWNjZW50LlxuJGdyZWVuLWxpZ2h0OiAgICAgbWl4KCRncmVlbiwgd2hpdGUsIDIwJSkgIWRlZmF1bHQ7XG4kZ3JlZW4tZGFyazogICAgICBkYXJrZW4oJGdyZWVuLCAxMCUpICFkZWZhdWx0O1xuXG4kcmVkOiAgICAgICAgICAgICAjY2IzZDRkICFkZWZhdWx0O1xuJHJlZC1saWdodDogICAgICAgbWl4KCRyZWQsIHdoaXRlLCAyMCUpICFkZWZhdWx0O1xuJHJlZC1kYXJrOiAgICAgICAgZGFya2VuKCRyZWQsIDEwJSkgIWRlZmF1bHQ7XG5cbiR5ZWxsb3c6ICAgICAgICAgICNmYmFkMWEgIWRlZmF1bHQ7IC8vIEFjY2VudCAobmV2ZXIgdGV4dCkuXG4keWVsbG93LWxpZ2h0OiAgICBtaXgoJHllbGxvdywgd2hpdGUsIDIwJSkgIWRlZmF1bHQ7XG4keWVsbG93LWRhcms6ICAgICBtaXgoJHllbGxvdywgYmxhY2ssIDQwJSkgIWRlZmF1bHQ7XG5cbiRicmFuZC1jb2xvcjogICAgI2Y5ODAxMiAhZGVmYXVsdDtcblxuJHRleHQtY29sb3I6ICAgICAgICAgICAgICAgJGJsYWNrICFkZWZhdWx0O1xuJHRleHQtY29sb3ItcmdiOiAgICAgICAgICAgY29sb3ItdG8tcmdiLWxpc3QoJHRleHQtY29sb3IpICFkZWZhdWx0O1xuJHRleHQtY29sb3ItZGFyazogICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHRleHQtY29sb3ItZGFyay1yZ2I6ICAgICAgY29sb3ItdG8tcmdiLWxpc3QoJHRleHQtY29sb3ItZGFyaykgIWRlZmF1bHQ7XG5cbiRiYWNrZ3JvdW5kLWNvbG9yOiAgICAgICAgICAkZ3JheS1saWdodCAhZGVmYXVsdDtcbiRiYWNrZ3JvdW5kLWNvbG9yLXJnYjogICAgICBjb2xvci10by1yZ2ItbGlzdCgkYmFja2dyb3VuZC1jb2xvcikgIWRlZmF1bHQ7XG4kYmFja2dyb3VuZC1jb2xvci1kYXJrOiAgICAgbWl4KCNmZmZmZmYsICMwMDAwMDAsIDEwJSkgIWRlZmF1bHQ7IC8vICMxYTFhMWFcbiRiYWNrZ3JvdW5kLWNvbG9yLWRhcmstcmdiOiBjb2xvci10by1yZ2ItbGlzdCgkYmFja2dyb3VuZC1jb2xvci1kYXJrKSAhZGVmYXVsdDtcblxuJGlvbi1pdGVtLWJhY2tncm91bmQ6ICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGlvbi1pdGVtLWJhY2tncm91bmQtcmdiOiAgY29sb3ItdG8tcmdiLWxpc3QoJGlvbi1pdGVtLWJhY2tncm91bmQpICFkZWZhdWx0O1xuJGlvbi1pdGVtLWJhY2tncm91bmQtZGFyazogbWl4KCNmZmZmZmYsICMwMDAwMDAsIDIwJSkgIWRlZmF1bHQ7IC8vICMzMzMzMzNcbiRpb24taXRlbS1iYWNrZ3JvdW5kLWRhcmstcmdiOiBjb2xvci10by1yZ2ItbGlzdCgkaW9uLWl0ZW0tYmFja2dyb3VuZC1kYXJrKSAhZGVmYXVsdDtcblxuJHByaW1hcnk6ICAgICRicmFuZC1jb2xvciAhZGVmYXVsdDtcbiRkYW5nZXI6ICAgICAkcmVkICFkZWZhdWx0O1xuJHdhcm5pbmc6ICAgICR5ZWxsb3cgIWRlZmF1bHQ7XG4kc3VjY2VzczogICAgJGdyZWVuICFkZWZhdWx0O1xuJGluZm86ICAgICAgICRibHVlICFkZWZhdWx0O1xuJGxpZ2h0OiAgICAgICRncmF5LWxpZ2h0ZXIgIWRlZmF1bHQ7XG4kbWVkaXVtOiAgICAgJGdyYXktbGlnaHQgIWRlZmF1bHQ7XG4kZGFyazogICAgICAgJGJsYWNrICFkZWZhdWx0O1xuXG4kY29sb3JzOiAgKFxuICAgIHByaW1hcnk6ICRwcmltYXJ5LFxuICAgIHN1Y2Nlc3M6ICRzdWNjZXNzLFxuICAgIHdhcm5pbmc6ICR3YXJuaW5nLFxuICAgIGRhbmdlcjogICRkYW5nZXIsXG4gICAgaW5mbzogJGluZm8sXG4gICAgbGlnaHQ6ICRsaWdodCxcbiAgICBtZWRpdW06ICRtZWRpdW0sXG4gICAgZGFyazogJGRhcmtcbikgIWRlZmF1bHQ7XG5cbiRwcmltYXJ5LWRhcms6ICAgICRicmFuZC1jb2xvciAhZGVmYXVsdDtcbiRkYW5nZXItZGFyazogICAgIG1peCgkcmVkLCB3aGl0ZSwgNDAlKSAhZGVmYXVsdDtcbiR3YXJuaW5nLWRhcms6ICAgIG1peCgkeWVsbG93LCB3aGl0ZSwgNDAlKSAhZGVmYXVsdDtcbiRzdWNjZXNzLWRhcms6ICAgIG1peCgkZ3JlZW4sIHdoaXRlLCA0MCUpICFkZWZhdWx0O1xuJGluZm8tZGFyazogICAgICAgbWl4KCRibHVlLCB3aGl0ZSwgNDAlKSAhZGVmYXVsdDtcbiRsaWdodC1kYXJrOiAgICAgICRkYXJrICFkZWZhdWx0O1xuJG1lZGl1bS1kYXJrOiAgICAgJGdyYXktbGlnaHQgIWRlZmF1bHQ7XG4kZGFyay1kYXJrOiAgICAgICAkbGlnaHQgIWRlZmF1bHQ7XG5cbiRjb2xvcnMtZGFyazogIChcbiAgICBwcmltYXJ5OiAkcHJpbWFyeS1kYXJrLFxuICAgIHN1Y2Nlc3M6ICRzdWNjZXNzLWRhcmssXG4gICAgd2FybmluZzogJHdhcm5pbmctZGFyayxcbiAgICBkYW5nZXI6ICRkYW5nZXItZGFyayxcbiAgICBpbmZvOiAkaW5mby1kYXJrLFxuICAgIGxpZ2h0OiAkbGlnaHQtZGFyayxcbiAgICBtZWRpdW06ICRtZWRpdW0tZGFyayxcbiAgICBkYXJrOiAkZGFyay1kYXJrLFxuKSAhZGVmYXVsdDtcblxuLyoqXG4gKiBMYXlvdXQgQnJlYWtwb2ludHNcbiAqXG4gKiBodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2xheW91dC9ncmlkI2RlZmF1bHQtYnJlYWtwb2ludHNcbiAqL1xuXG4vLyBUaGUgbWluaW11bSBkaW1lbnNpb25zIGF0IHdoaWNoIHlvdXIgbGF5b3V0IHdpbGwgY2hhbmdlLFxuLy8gYWRhcHRpbmcgdG8gZGlmZmVyZW50IHNjcmVlbiBzaXplcywgZm9yIHVzZSBpbiBtZWRpYSBxdWVyaWVzXG4kc2NyZWVuLWJyZWFrcG9pbnRzOiAoXG4gICAgeHM6IDAsXG4gICAgc206IDU3NnB4LFxuICAgIG1kOiA3NjhweCxcbiAgICBsZzogOTkycHgsXG4gICAgdGFibGV0OiA5OTJweCxcbiAgICB4bDogMTIwMHB4XG4pICFkZWZhdWx0O1xuXG4kY29yZS1jb3Vyc2UtaW1hZ2UtYmFja2dyb3VuZDogIzgxZWNlYywgIzc0YjlmZiwgI2EyOWJmZSwgI2RmZTZlOSwgIzAwYjg5NCwgIzA5ODRlMywgI2IyYmVjMywgI2ZkY2I2ZSwgI2ZkNzlhOCwgIzZjNWNlNyAhZGVmYXVsdDtcbiRjb3JlLWRkLXF1ZXN0aW9uLWNvbG9yczogI0ZGRkZGRiwgI0IwQzRERSwgI0RDRENEQywgI0Q4QkZEOCwgIzg3Q0VGQSwgI0RBQTUyMCwgI0ZGRDcwMCwgI0YwRTY4QyAhZGVmYXVsdDtcbiRjb3JlLXRleHQtaGlnaHRsaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRibHVlLCA0MCUpICFkZWZhdWx0O1xuXG4kY29yZS1maXhlZC11cmw6IGZhbHNlICFkZWZhdWx0O1xuJGNvcmUtZGFzaGJvYXJkLWxvZ286IGZhbHNlICFkZWZhdWx0O1xuJGNvcmUtYWx3YXlzLXNob3ctbWFpbi1tZW51OiBmYWxzZSAhZGVmYXVsdDtcbiRjb3JlLWZvcm1hdC10ZXh0LW5ldmVyLXNob3J0ZW46IGZhbHNlICFkZWZhdWx0O1xuXG4kY29yZS1zaG93LWNvdXJzZWltYWdlLW9uLWNvdXJzZTogZmFsc2UgIWRlZmF1bHQ7XG4kY29yZS1oaWRlLXByb2dyZXNzLW9uLWNvdXJzZTogZmFsc2UgIWRlZmF1bHQ7XG4kY29yZS1oaWRlLXByb2dyZXNzLW9uLXNlY3Rpb24tc2VsZWN0b3I6IGZhbHNlICFkZWZhdWx0O1xuXG4kY29yZS1jb3Vyc2UtaGlkZS10aHVtYi1vbi1jYXJkczogZmFsc2UgIWRlZmF1bHQ7XG4kY29yZS1jb3Vyc2UtdGh1bWItb24tY2FyZHMtYmFja2dyb3VuZDogbnVsbCAhZGVmYXVsdDtcbiRjb3JlLWNvdXJzZS1oaWRlLXByb2dyZXNzLW9uLWNhcmRzOiBmYWxzZSAhZGVmYXVsdDtcblxuLy8gQ29uZmlndXJhdGlvbiBvcHRpb25zIGZvciBsb2dpbiBwYWdlLlxuJGNvcmUtbG9naW4tYnV0dG9uLW91dGxpbmU6IGZhbHNlICFkZWZhdWx0O1xuJGNvcmUtbG9naW4tYnV0dG9uLW91dGxpbmUtZGFyazogJGNvcmUtbG9naW4tYnV0dG9uLW91dGxpbmUgIWRlZmF1bHQ7XG4kY29yZS1sb2dpbi1sb2FkaW5nLWNvbG9yOiBmYWxzZSAhZGVmYXVsdDtcbiRjb3JlLWxvZ2luLWxvYWRpbmctY29sb3ItZGFyazogJHRleHQtY29sb3ItZGFyayAhZGVmYXVsdDtcbiRjb3JlLWxvZ2luLWhpZGUtZm9yZ290LXBhc3N3b3JkOiBmYWxzZSAhZGVmYXVsdDtcbiRjb3JlLWxvZ2luLWhpZGUtbmVlZC1oZWxwOiBmYWxzZSAhZGVmYXVsdDtcblxuLy8gQ29uZmlndXJhdGlvbiBvcHRpb25zIGZvciBtb3JlIHBhZ2UuXG4kY29yZS1tb3JlLWhpZGUtc2l0ZWluZm86IGZhbHNlICFkZWZhdWx0O1xuJGNvcmUtbW9yZS1oaWRlLXNpdGVuYW1lOiBmYWxzZSAhZGVmYXVsdDtcbiRjb3JlLW1vcmUtaGlkZS1zaXRldXJsOiBmYWxzZSAhZGVmYXVsdDtcbiIsIkBpbXBvcnQgXCJ+dGhlbWUvZ2xvYmFscy5zY3NzXCI7XG5cbjpob3N0IHtcbiAgICBpb24tY29udGVudCB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1hbHRlcm5hdGl2ZSk7XG5cbiAgICAgICAgJjo6cGFydChzY3JvbGwpIHtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYWRkb24tbWVzc2FnZXMtZGlzY3Vzc2lvbi1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1hbHRlcm5hdGl2ZSk7XG4gICAgfVxuXG4gICAgLmFkZG9uLW1lc3NhZ2VzLWRhdGUge1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICB9XG5cbiAgICAvLyBNZXNzYWdlIGl0ZW0uXG4gICAgaW9uLWl0ZW0uYWRkb24tbWVzc2FnZSB7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBwYWRkaW5nOiAwIDhweCAwIDhweDtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDhweCAwIDhweDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hZGRvbi1tZXNzYWdlcy1tZXNzYWdlLWJnKTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7XG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIG1heC13aWR0aDogOTAlO1xuICAgICAgICAtLW1pbi1oZWlnaHQ6IHZhcigtLWExMXktbWluLXRhcmdldC1zaXplKTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBAaW5jbHVkZSBjb3JlLXRyYW5zaXRpb24od2lkdGgpO1xuICAgICAgICAvLyBUaGlzIGlzIG5lZWRlZCB0byBkaXNwbGF5IGJ1YmJsZSB0YWlscy5cbiAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG5cbiAgICAgICAgJjo6cGFydChuYXRpdmUpIHtcbiAgICAgICAgICAgIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwO1xuICAgICAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cblxuICAgICAgICBjb3JlLWZvcm1hdC10ZXh0ID4gcDpvbmx5LWNoaWxkIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hZGRvbi1tZXNzYWdlLXVzZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcblxuICAgICAgICAgICAgY29yZS11c2VyLWF2YXRhciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgLS1jb3JlLWF2YXRhci1zaXplOiB2YXIoLS1hZGRvbi1tZXNzYWdlcy1hdmF0YXItc2l6ZSk7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHBhZGRpbmctaG9yaXpvbnRhbCguNXJlbSk7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaW9uLW5vdGUge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWFkZG9uLW1lc3NhZ2VzLW1lc3NhZ2Utbm90ZS10ZXh0KTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tYWRkb24tbWVzc2FnZXMtbWVzc2FnZS1ub3RlLWZvbnQtc2l6ZSk7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDAgOHB4IDA7XG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICAgICAgfVxuXG4gICAgICAgICZbdGFwcGFibGVdOmFjdGl2ZSB7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWFkZG9uLW1lc3NhZ2VzLW1lc3NhZ2UtYWN0aXZhdGVkLWJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiA4cHggMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hZGRvbi1tZXNzYWdlLXRleHQge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgICAqIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnRhaWwge1xuICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgIGJvcmRlcjogMC41cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG91Y2gtYWN0aW9uOiBub25lO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRGVmaW5lcyB3aGVuIGFuIGl0ZW0tbWVzc2FnZSBpcyB0aGUgdXNlcidzLlxuICAgICAgICAmLmFkZG9uLW1lc3NhZ2UtbWluZSB7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWFkZG9uLW1lc3NhZ2VzLW1lc3NhZ2UtbWluZS1iZyk7XG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcblxuICAgICAgICAgICAgJlt0YXBwYWJsZV06YWN0aXZlIHtcbiAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWFkZG9uLW1lc3NhZ2VzLW1lc3NhZ2UtbWluZS1hY3RpdmF0ZWQtYmcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc3Bpbm5lciB7XG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgZmxvYXQoZW5kKTtcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBtYXJnaW4oMnB4LCAtM3B4LCAtMnB4LCA1cHgpO1xuXG4gICAgICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC50YWlsIHtcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBwb3NpdGlvbihudWxsLCAtOHB4LCBudWxsLCBudWxsKTtcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBtYXJnaW4taG9yaXpvbnRhbChudWxsLCAtMC41cmVtKTtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS1hZGRvbi1tZXNzYWdlcy1tZXNzYWdlLW1pbmUtYmcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmW3RhcHBhYmxlXTphY3RpdmUgLnRhaWwge1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLWFkZG9uLW1lc3NhZ2VzLW1lc3NhZ2UtbWluZS1hY3RpdmF0ZWQtYmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5hZGRvbi1tZXNzYWdlLW5vdC1taW5lIC50YWlsIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLWFkZG9uLW1lc3NhZ2VzLW1lc3NhZ2UtYmcpO1xuICAgICAgICAgICAgQGluY2x1ZGUgcG9zaXRpb24obnVsbCwgbnVsbCwgbnVsbCwgLThweCk7XG4gICAgICAgICAgICBAaW5jbHVkZSBtYXJnaW4taG9yaXpvbnRhbCgtMC41cmVtLCBudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgICZbdGFwcGFibGVdLmFkZG9uLW1lc3NhZ2Utbm90LW1pbmUuYWN0aXZhdGVkIC50YWlsIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLWFkZG9uLW1lc3NhZ2VzLW1lc3NhZ2UtYWN0aXZhdGVkLWJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hZGRvbi1tZXNzYWdlcy1kZWxldGUtYnV0dG9uIHtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IGluaXRpYWw7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogaW5pdGlhbDtcbiAgICAgICAgICAgIEBpbmNsdWRlIG1hcmdpbigwLCBudWxsLCAwLCBudWxsKTtcbiAgICAgICAgICAgIGhlaWdodDogdmFyKC0tYTExeS1taW4tdGFyZ2V0LXNpemUpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcblxuICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40ZW07XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IGluaXRpYWw7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5hZGRvbi1tZXNzYWdlLW5vLXVzZXIge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW9uLWl0ZW0uYWRkb24tbWVzc2FnZS5hZGRvbi1tZXNzYWdlLW1pbmUgKyBpb24taXRlbS5hZGRvbi1tZXNzYWdlLmFkZG9uLW1lc3NhZ2Utbm8tdXNlci5hZGRvbi1tZXNzYWdlLW1pbmUsXG4gICAgaW9uLWl0ZW0uYWRkb24tbWVzc2FnZS5hZGRvbi1tZXNzYWdlLW5vdC1taW5lICsgaW9uLWl0ZW0uYWRkb24tbWVzc2FnZS5hZGRvbi1tZXNzYWdlLW5vLXVzZXIuYWRkb24tbWVzc2FnZS1ub3QtbWluZSB7XG4gICAgICAgIC5pdGVtLWhlYWRpbmcge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgfVxuICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICB9XG5cbn1cblxuOmhvc3QtY29udGV4dCguaW9zKSB7XG4gICAgaW9uLWZvb3RlciAudG9vbGJhcjpsYXN0LWNoaWxkIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDRweDtcbiAgICAgICAgbWluLWhlaWdodDogMDtcbiAgICB9XG59XG4iLCIvKlxuICogQXBwIEdsb2JhbCB2YXJpYWJsZXMgU0NTU1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogUGxhY2UgaGVyZSB0aGUgZGlmZmVyZW50IGZpbGVzIHlvdSBzaG91bGQgaW1wb3J0IHRvIHVzZSBnbG9iYWwgdmFyaWFibGVzLlxuICovXG4vKlxuICogQXBwIGN1c3RvbSBtaXhpbnMgZm9yIFNDU1NcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFBsYWNlIGhlcmUgb3VyIGN1c3RvbSBtaXhpbnMuXG4gKi9cbi8qXG4gKiBJbXBvcnRlZCBpb25pYyBtaXhpbnMgZm9yIFNDU1NcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFBsYWNlIGhlcmUgb3VyIGN1c3RvbSBtaXhpbnMuXG4gKiBFeHRyYWN0ZWQgZnJvbSBpb25pYy5taXhpbnMuc2Nzc1xuICogaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vaW9uaWMtZnJhbWV3b3JrL2Jsb2IvbWFzdGVyL2NvcmUvc3JjL3RoZW1lcy9pb25pYy5taXhpbnMuc2Nzc1xuICovXG4vKlxuICogQXBwIEN1c3RvbSBBcHAgdmFyaWFibGVzIFNDU1NcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFBsYWNlIGhlcmUgYWxsIGN1c3RvbSBhcHAgdmFyaWFibGVzLlxuICovXG4vKlxuICogQXBwIEdsb2JhbCB2YXJpYWJsZXMgU0NTU1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogUGxhY2UgaGVyZSBhbGwgZ2xvYmFsIHZhcmlhYmxlcy5cbiAqL1xuLyoqXG4gKiBMYXlvdXQgQnJlYWtwb2ludHNcbiAqXG4gKiBodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2xheW91dC9ncmlkI2RlZmF1bHQtYnJlYWtwb2ludHNcbiAqL1xuOmhvc3QgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtYWx0ZXJuYXRpdmUpO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQ6OnBhcnQoc2Nyb2xsKSB7XG4gIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XG59XG46aG9zdCAuYWRkb24tbWVzc2FnZXMtZGlzY3Vzc2lvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1hbHRlcm5hdGl2ZSk7XG59XG46aG9zdCAuYWRkb24tbWVzc2FnZXMtZGF0ZSB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuOmhvc3QgaW9uLWl0ZW0uYWRkb24tbWVzc2FnZSB7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiAwIDhweCAwIDhweDtcbiAgbWFyZ2luOiAxMHB4IDhweCAwIDhweDtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hZGRvbi1tZXNzYWdlcy1tZXNzYWdlLWJnKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gIHdpZHRoOiA5MCU7XG4gIG1heC13aWR0aDogOTAlO1xuICAtLW1pbi1oZWlnaHQ6IHZhcigtLWExMXktbWluLXRhcmdldC1zaXplKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IHdpZHRoIDUwMG1zIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IHdpZHRoIDUwMG1zIGVhc2UtaW4tb3V0O1xuICAtbXMtdHJhbnNpdGlvbjogd2lkdGggNTAwbXMgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IHdpZHRoIDUwMG1zIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiB3aWR0aCA1MDBtcyBlYXNlLWluLW91dDtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG46aG9zdCBpb24taXRlbS5hZGRvbi1tZXNzYWdlOjpwYXJ0KG5hdGl2ZSkge1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuOmhvc3QgaW9uLWl0ZW0uYWRkb24tbWVzc2FnZSBjb3JlLWZvcm1hdC10ZXh0ID4gcDpvbmx5LWNoaWxkIHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuOmhvc3QgaW9uLWl0ZW0uYWRkb24tbWVzc2FnZSAuYWRkb24tbWVzc2FnZS11c2VyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gIG1hcmdpbi10b3A6IDA7XG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG59XG46aG9zdCBpb24taXRlbS5hZGRvbi1tZXNzYWdlIC5hZGRvbi1tZXNzYWdlLXVzZXIgY29yZS11c2VyLWF2YXRhciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAtLWNvcmUtYXZhdGFyLXNpemU6IHZhcigtLWFkZG9uLW1lc3NhZ2VzLWF2YXRhci1zaXplKTtcbiAgbWFyZ2luOiAwO1xufVxuOmhvc3QgaW9uLWl0ZW0uYWRkb24tbWVzc2FnZSAuYWRkb24tbWVzc2FnZS11c2VyIGRpdiB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZsZXgtZ3JvdzogMTtcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5Ac3VwcG9ydHMgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCkge1xuICA6aG9zdCBpb24taXRlbS5hZGRvbi1tZXNzYWdlIC5hZGRvbi1tZXNzYWdlLXVzZXIgZGl2IHtcbiAgICBwYWRkaW5nLWxlZnQ6IHVuc2V0O1xuICAgIHBhZGRpbmctcmlnaHQ6IHVuc2V0O1xuICAgIC13ZWJraXQtcGFkZGluZy1zdGFydDogMC41cmVtO1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwLjVyZW07XG4gICAgLXdlYmtpdC1wYWRkaW5nLWVuZDogMC41cmVtO1xuICAgIHBhZGRpbmctaW5saW5lLWVuZDogMC41cmVtO1xuICB9XG59XG46aG9zdCBpb24taXRlbS5hZGRvbi1tZXNzYWdlIGlvbi1ub3RlIHtcbiAgY29sb3I6IHZhcigtLWFkZG9uLW1lc3NhZ2VzLW1lc3NhZ2Utbm90ZS10ZXh0KTtcbiAgZm9udC1zaXplOiB2YXIoLS1hZGRvbi1tZXNzYWdlcy1tZXNzYWdlLW5vdGUtZm9udC1zaXplKTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwIDAgOHB4IDA7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xufVxuOmhvc3QgaW9uLWl0ZW0uYWRkb24tbWVzc2FnZVt0YXBwYWJsZV06YWN0aXZlIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hZGRvbi1tZXNzYWdlcy1tZXNzYWdlLWFjdGl2YXRlZC1iZyk7XG59XG46aG9zdCBpb24taXRlbS5hZGRvbi1tZXNzYWdlIGlvbi1sYWJlbCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogOHB4IDA7XG59XG46aG9zdCBpb24taXRlbS5hZGRvbi1tZXNzYWdlIC5hZGRvbi1tZXNzYWdlLXRleHQge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cbjpob3N0IGlvbi1pdGVtLmFkZG9uLW1lc3NhZ2UgLmFkZG9uLW1lc3NhZ2UtdGV4dCAqIHtcbiAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcbn1cbjpob3N0IGlvbi1pdGVtLmFkZG9uLW1lc3NhZ2UgLnRhaWwge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXI6IDAuNXJlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3VjaC1hY3Rpb246IG5vbmU7XG4gIGJvdHRvbTogMDtcbn1cbjpob3N0IGlvbi1pdGVtLmFkZG9uLW1lc3NhZ2UuYWRkb24tbWVzc2FnZS1taW5lIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hZGRvbi1tZXNzYWdlcy1tZXNzYWdlLW1pbmUtYmcpO1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbn1cbjpob3N0IGlvbi1pdGVtLmFkZG9uLW1lc3NhZ2UuYWRkb24tbWVzc2FnZS1taW5lW3RhcHBhYmxlXTphY3RpdmUge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWFkZG9uLW1lc3NhZ2VzLW1lc3NhZ2UtbWluZS1hY3RpdmF0ZWQtYmcpO1xufVxuOmhvc3QgaW9uLWl0ZW0uYWRkb24tbWVzc2FnZS5hZGRvbi1tZXNzYWdlLW1pbmUgLnNwaW5uZXIge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIG1hcmdpbi1yaWdodDogLTNweDtcbiAgbWFyZ2luLXRvcDogMnB4O1xuICBtYXJnaW4tYm90dG9tOiAtMnB4O1xufVxuW2Rpcj1ydGxdIDpob3N0IGlvbi1pdGVtLmFkZG9uLW1lc3NhZ2UuYWRkb24tbWVzc2FnZS1taW5lIC5zcGlubmVyIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbkBzdXBwb3J0cyAobWFyZ2luLWlubGluZS1zdGFydDogMCkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwKSB7XG4gIDpob3N0IGlvbi1pdGVtLmFkZG9uLW1lc3NhZ2UuYWRkb24tbWVzc2FnZS1taW5lIC5zcGlubmVyIHtcbiAgICBtYXJnaW4tbGVmdDogdW5zZXQ7XG4gICAgbWFyZ2luLXJpZ2h0OiB1bnNldDtcbiAgICAtd2Via2l0LW1hcmdpbi1zdGFydDogNXB4O1xuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDVweDtcbiAgICAtd2Via2l0LW1hcmdpbi1lbmQ6IC0zcHg7XG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IC0zcHg7XG4gIH1cbn1cbjpob3N0IGlvbi1pdGVtLmFkZG9uLW1lc3NhZ2UuYWRkb24tbWVzc2FnZS1taW5lIC5zcGlubmVyIHN2ZyB7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG59XG46aG9zdCBpb24taXRlbS5hZGRvbi1tZXNzYWdlLmFkZG9uLW1lc3NhZ2UtbWluZSAudGFpbCB7XG4gIHJpZ2h0OiAtOHB4O1xuICBtYXJnaW4tcmlnaHQ6IC0wLjVyZW07XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLWFkZG9uLW1lc3NhZ2VzLW1lc3NhZ2UtbWluZS1iZyk7XG59XG5bZGlyPXJ0bF0gOmhvc3QgaW9uLWl0ZW0uYWRkb24tbWVzc2FnZS5hZGRvbi1tZXNzYWdlLW1pbmUgLnRhaWwge1xuICBsZWZ0OiB1bnNldDtcbiAgcmlnaHQ6IHVuc2V0O1xuICBsZWZ0OiAtOHB4O1xufVxuXG5Ac3VwcG9ydHMgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCkge1xuICA6aG9zdCBpb24taXRlbS5hZGRvbi1tZXNzYWdlLmFkZG9uLW1lc3NhZ2UtbWluZSAudGFpbCB7XG4gICAgbWFyZ2luLXJpZ2h0OiB1bnNldDtcbiAgICAtd2Via2l0LW1hcmdpbi1lbmQ6IC0wLjVyZW07XG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IC0wLjVyZW07XG4gIH1cbn1cbjpob3N0IGlvbi1pdGVtLmFkZG9uLW1lc3NhZ2UuYWRkb24tbWVzc2FnZS1taW5lW3RhcHBhYmxlXTphY3RpdmUgLnRhaWwge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS1hZGRvbi1tZXNzYWdlcy1tZXNzYWdlLW1pbmUtYWN0aXZhdGVkLWJnKTtcbn1cbjpob3N0IGlvbi1pdGVtLmFkZG9uLW1lc3NhZ2UuYWRkb24tbWVzc2FnZS1ub3QtbWluZSAudGFpbCB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLWFkZG9uLW1lc3NhZ2VzLW1lc3NhZ2UtYmcpO1xuICBsZWZ0OiAtOHB4O1xuICBtYXJnaW4tbGVmdDogLTAuNXJlbTtcbn1cbltkaXI9cnRsXSA6aG9zdCBpb24taXRlbS5hZGRvbi1tZXNzYWdlLmFkZG9uLW1lc3NhZ2Utbm90LW1pbmUgLnRhaWwge1xuICBsZWZ0OiB1bnNldDtcbiAgcmlnaHQ6IHVuc2V0O1xuICByaWdodDogLThweDtcbn1cblxuQHN1cHBvcnRzIChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApIHtcbiAgOmhvc3QgaW9uLWl0ZW0uYWRkb24tbWVzc2FnZS5hZGRvbi1tZXNzYWdlLW5vdC1taW5lIC50YWlsIHtcbiAgICBtYXJnaW4tbGVmdDogdW5zZXQ7XG4gICAgLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IC0wLjVyZW07XG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogLTAuNXJlbTtcbiAgfVxufVxuOmhvc3QgaW9uLWl0ZW0uYWRkb24tbWVzc2FnZVt0YXBwYWJsZV0uYWRkb24tbWVzc2FnZS1ub3QtbWluZS5hY3RpdmF0ZWQgLnRhaWwge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS1hZGRvbi1tZXNzYWdlcy1tZXNzYWdlLWFjdGl2YXRlZC1iZyk7XG59XG46aG9zdCBpb24taXRlbS5hZGRvbi1tZXNzYWdlIC5hZGRvbi1tZXNzYWdlcy1kZWxldGUtYnV0dG9uIHtcbiAgbWluLWhlaWdodDogaW5pdGlhbDtcbiAgbGluZS1oZWlnaHQ6IGluaXRpYWw7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGhlaWdodDogdmFyKC0tYTExeS1taW4tdGFyZ2V0LXNpemUpICFpbXBvcnRhbnQ7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xufVxuOmhvc3QgaW9uLWl0ZW0uYWRkb24tbWVzc2FnZSAuYWRkb24tbWVzc2FnZXMtZGVsZXRlLWJ1dHRvbiBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMS40ZW07XG4gIGxpbmUtaGVpZ2h0OiBpbml0aWFsO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG59XG46aG9zdCBpb24taXRlbS5hZGRvbi1tZXNzYWdlLmFkZG9uLW1lc3NhZ2Utbm8tdXNlciB7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cbjpob3N0IGlvbi1pdGVtLmFkZG9uLW1lc3NhZ2UuYWRkb24tbWVzc2FnZS1taW5lICsgaW9uLWl0ZW0uYWRkb24tbWVzc2FnZS5hZGRvbi1tZXNzYWdlLW5vLXVzZXIuYWRkb24tbWVzc2FnZS1taW5lLFxuOmhvc3QgaW9uLWl0ZW0uYWRkb24tbWVzc2FnZS5hZGRvbi1tZXNzYWdlLW5vdC1taW5lICsgaW9uLWl0ZW0uYWRkb24tbWVzc2FnZS5hZGRvbi1tZXNzYWdlLW5vLXVzZXIuYWRkb24tbWVzc2FnZS1ub3QtbWluZSB7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuOmhvc3QgaW9uLWl0ZW0uYWRkb24tbWVzc2FnZS5hZGRvbi1tZXNzYWdlLW1pbmUgKyBpb24taXRlbS5hZGRvbi1tZXNzYWdlLmFkZG9uLW1lc3NhZ2Utbm8tdXNlci5hZGRvbi1tZXNzYWdlLW1pbmUgLml0ZW0taGVhZGluZyxcbjpob3N0IGlvbi1pdGVtLmFkZG9uLW1lc3NhZ2UuYWRkb24tbWVzc2FnZS1ub3QtbWluZSArIGlvbi1pdGVtLmFkZG9uLW1lc3NhZ2UuYWRkb24tbWVzc2FnZS1uby11c2VyLmFkZG9uLW1lc3NhZ2Utbm90LW1pbmUgLml0ZW0taGVhZGluZyB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbjpob3N0LWNvbnRleHQoLmlvcykgaW9uLWZvb3RlciAudG9vbGJhcjpsYXN0LWNoaWxkIHtcbiAgcGFkZGluZy1ib3R0b206IDRweDtcbiAgbWluLWhlaWdodDogMDtcbn0iXX0= */");

/***/ })

}]);
//# sourceMappingURL=pages-viewer-viewer-module.js.map