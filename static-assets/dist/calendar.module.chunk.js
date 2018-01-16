webpackJsonp(["calendar.module"],{

/***/ "../../../../../src/app/main/content/apps/calendar/calendar.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"calendar\" class=\"page-layout simple fullwidth\" fusePerfectScrollbar>\n\n    <!-- HEADER -->\n    <div class=\"header p-16 p-sm-24\" [ngClass]=\"viewDate | date:'MMM'\">\n\n        <div class=\"header-content\" fxLayout=\"column\" fxLayoutAlign=\"space-between\">\n\n            <div class=\"header-top\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\" fxLayout.xs=\"column\">\n\n                <div class=\"logo mb-16 mb-sm-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                    <mat-icon class=\"logo-icon\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'50ms',scale:'0.2'}}\">today</mat-icon>\n\n                    <span class=\"logo-text\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'100ms',x:'-25px'}}\">Calendar</span>\n\n                </div>\n\n                <!-- TOOLBAR -->\n                <div class=\"toolbar\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                    <button mat-button class=\"mat-icon-button\" aria-label=\"Search\" matTooltip=\"Search\">\n                        <mat-icon>search</mat-icon>\n                    </button>\n\n                    <button mat-button class=\"mat-icon-button\"\n                            mwlCalendarToday\n                            [(viewDate)]=\"viewDate\"\n                            (viewDateChange)=\"selectedDay = {date:$event}\"\n                            aria-label=\"Today\" matTooltip=\"Today\">\n                        <!--(click)=\"selectedDay = viewDate\"-->\n                        <mat-icon>today</mat-icon>\n                    </button>\n\n                    <button mat-button class=\"mat-icon-button\" (click)=\"view='day'\"\n                            aria-label=\"Day\" matTooltip=\"Day\">\n                        <mat-icon>view_day</mat-icon>\n                    </button>\n\n                    <button mat-button class=\"mat-icon-button\" (click)=\"view='week'\"\n                            aria-label=\"Week\" matTooltip=\"Week\">\n                        <mat-icon>view_week</mat-icon>\n                    </button>\n\n                    <button mat-button class=\"mat-icon-button\" (click)=\"view='month'\"\n                            aria-label=\"Month\" matTooltip=\"Month\">\n                        <mat-icon>view_module</mat-icon>\n                    </button>\n                </div>\n            </div>\n            <!-- / TOOLBAR -->\n\n            <!-- HEADER BOTTOM -->\n            <div class=\"header-bottom\" fxLayout=\"row\" fxLayoutAlign=\"center center\"\n                 *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'150ms'}}\">\n\n                <button mat-button class=\"mat-icon-button arrow\"\n                        mwlCalendarPreviousView\n                        [view]=\"view\"\n                        [(viewDate)]=\"viewDate\"\n                        (viewDateChange)=\"selectedDay = {date:$event}\"\n                        aria-label=\"Previous\">\n                    <mat-icon>chevron_left</mat-icon>\n                </button>\n\n                <div class=\"title\">\n                    {{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}\n                </div>\n\n                <button mat-button class=\"mat-icon-button arrow\"\n                        mwlCalendarNextView\n                        [view]=\"view\"\n                        [(viewDate)]=\"viewDate\"\n                        (viewDateChange)=\"selectedDay = {date:$event}\"\n                        aria-label=\"Next\">\n                    <mat-icon>chevron_right</mat-icon>\n                </button>\n            </div>\n            <!-- / HEADER BOTTOM -->\n        </div>\n\n        <!-- ADD EVENT BUTTON -->\n        <button mat-fab class=\"add-event-button mat-warn\" (click)=\"addEvent()\" aria-label=\"Add event\"\n                *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'300ms',scale:'0.2'}}\">\n            <mat-icon>add</mat-icon>\n        </button>\n        <!-- / ADD EVENT BUTTON -->\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT -->\n    <div class=\"content\" fusePerfectScrollbar *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'200ms',y:'50px'}}\">\n        <div [ngSwitch]=\"view\">\n            <mwl-calendar-month-view\n                *ngSwitchCase=\"'month'\"\n                [viewDate]=\"viewDate\"\n                [events]=\"events\"\n                [refresh]=\"refresh\"\n                [activeDayIsOpen]=\"activeDayIsOpen\"\n                (dayClicked)=\"dayClicked($event.day)\"\n                (eventClicked)=\"editEvent('edit', $event.event)\"\n                (eventTimesChanged)=\"eventTimesChanged($event)\"\n                (beforeViewRender)=\"beforeMonthViewRender($event)\">\n            </mwl-calendar-month-view>\n            <mwl-calendar-week-view\n                *ngSwitchCase=\"'week'\"\n                [viewDate]=\"viewDate\"\n                (viewDateChange)=\"selectedDay = {date:$event}\"\n                [events]=\"events\"\n                [refresh]=\"refresh\"\n                (dayClicked)=\"dayClicked($event.day)\"\n                (eventClicked)=\"editEvent('edit', $event.event)\"\n                (eventTimesChanged)=\"eventTimesChanged($event)\">\n            </mwl-calendar-week-view>\n            <mwl-calendar-day-view\n                *ngSwitchCase=\"'day'\"\n                [viewDate]=\"viewDate\"\n                (viewDateChange)=\"selectedDay = {date:$event}\"\n                [events]=\"events\"\n                [refresh]=\"refresh\"\n                (dayClicked)=\"dayClicked($event.day)\"\n                (eventClicked)=\"editEvent('edit', $event.event)\"\n                (eventTimesChanged)=\"eventTimesChanged($event)\">\n            </mwl-calendar-day-view>\n        </div>\n    </div>\n    <!-- / CONTENT -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/content/apps/calendar/calendar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between mat-menu and mat-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n.cal-month-view .cal-header {\n  text-align: center;\n  font-weight: bolder; }\n\n.cal-month-view .cal-cell-row:hover {\n  background-color: #fafafa; }\n\n.cal-month-view .cal-header .cal-cell {\n  padding: 5px 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  white-space: nowrap; }\n\n.cal-month-view .cal-cell-row .cal-cell:hover,\n.cal-month-view .cal-cell.cal-has-events.cal-open {\n  background-color: #ededed; }\n\n.cal-month-view .cal-days {\n  border: 1px solid #e1e1e1;\n  border-bottom: 0; }\n\n.cal-month-view .cal-cell-top {\n  min-height: 78px;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n\n.cal-month-view .cal-cell-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.cal-month-view .cal-cell {\n  float: left;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch; }\n\n.cal-month-view .cal-day-cell {\n  min-height: 100px; }\n\n.cal-month-view .cal-day-cell:not(:last-child) {\n  border-right: 1px solid #e1e1e1; }\n\n.cal-month-view .cal-days .cal-cell-row {\n  border-bottom: 1px solid #e1e1e1; }\n\n.cal-month-view .cal-day-badge {\n  margin-top: 18px;\n  margin-left: 10px;\n  background-color: #b94a48;\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: 700;\n  line-height: 1;\n  color: white;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  border-radius: 10px; }\n\n.cal-month-view .cal-day-number {\n  font-size: 1.2em;\n  font-weight: 400;\n  opacity: 0.5;\n  margin-top: 15px;\n  margin-right: 15px;\n  float: right;\n  margin-bottom: 10px; }\n\n.cal-month-view .cal-events {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  margin: 3px;\n  line-height: 10px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n.cal-month-view .cal-event {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  display: inline-block;\n  margin: 2px; }\n\n.cal-month-view .cal-day-cell.cal-in-month.cal-has-events {\n  cursor: pointer; }\n\n.cal-month-view .cal-day-cell.cal-out-month .cal-day-number {\n  opacity: 0.1;\n  cursor: default; }\n\n.cal-month-view .cal-day-cell.cal-weekend .cal-day-number {\n  color: darkred; }\n\n.cal-month-view .cal-day-cell.cal-today {\n  background-color: #e8fde7; }\n\n.cal-month-view .cal-day-cell.cal-today .cal-day-number {\n  font-size: 1.9em; }\n\n.cal-month-view .cal-day-cell.cal-drag-over {\n  background-color: #e0e0e0 !important; }\n\n.cal-month-view .cal-open-day-events {\n  padding: 15px;\n  color: white;\n  background-color: #555;\n  box-shadow: inset 0 0 15px 0 rgba(0, 0, 0, 0.5); }\n\n.cal-month-view .cal-open-day-events .cal-event {\n  position: relative;\n  top: 2px; }\n\n.cal-month-view .cal-event-title {\n  color: white; }\n\n.cal-month-view .cal-out-month .cal-day-badge,\n.cal-month-view .cal-out-month .cal-event {\n  opacity: 0.3; }\n\n.cal-week-view .cal-day-headers {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-bottom: 3px;\n  border: 1px solid #e1e1e1;\n  margin-left: 2px;\n  margin-right: 2px; }\n\n.cal-week-view .cal-day-headers .cal-header {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  text-align: center;\n  padding: 5px; }\n\n.cal-week-view .cal-day-headers .cal-header:not(:last-child) {\n  border-right: 1px solid #e1e1e1; }\n\n.cal-week-view .cal-day-headers .cal-header:hover,\n.cal-week-view .cal-day-headers .cal-drag-over {\n  background-color: #ededed; }\n\n.cal-week-view .cal-day-headers span {\n  font-weight: 400;\n  opacity: 0.5; }\n\n.cal-week-view .cal-events-row {\n  position: relative;\n  height: 33px; }\n\n.cal-week-view .cal-event-container {\n  display: inline-block;\n  position: absolute; }\n\n.cal-week-view .cal-event {\n  padding: 0 10px;\n  font-size: 12px;\n  margin-left: 2px;\n  margin-right: 2px;\n  height: 30px;\n  line-height: 30px; }\n\n.cal-week-view .cal-draggable {\n  cursor: move; }\n\n.cal-week-view .cal-starts-within-week .cal-event {\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px; }\n\n.cal-week-view .cal-ends-within-week .cal-event {\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px; }\n\n.cal-week-view .cal-header.cal-today {\n  background-color: #e8fde7; }\n\n.cal-week-view .cal-header.cal-weekend span {\n  color: #8b0000; }\n\n.cal-week-view .cal-event,\n.cal-week-view .cal-header {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.cal-day-view {\n  /* stylelint-disable-next-line selector-type-no-unknown */\n  /* stylelint-disable-next-line selector-type-no-unknown */ }\n  .cal-day-view .cal-hour-rows {\n    width: 100%;\n    border: solid 1px #e1e1e1;\n    overflow-x: scroll;\n    position: relative; }\n  .cal-day-view .cal-hour:nth-child(odd) {\n    background-color: #fafafa; }\n  .cal-day-view mwl-calendar-day-view-hour-segment {\n    -ms-touch-action: initial !important;\n        touch-action: initial !important;\n    -webkit-user-select: initial !important;\n       -moz-user-select: initial !important;\n        -ms-user-select: initial !important;\n            user-select: initial !important;\n    -webkit-user-drag: initial !important; }\n  .cal-day-view mwl-calendar-day-view-hour-segment,\n  .cal-day-view .cal-hour-segment {\n    display: block; }\n  .cal-day-view .cal-hour-segment::after {\n    content: '\\A0'; }\n  .cal-day-view .cal-hour:not(:last-child) .cal-hour-segment,\n  .cal-day-view .cal-hour:last-child :not(:last-child) .cal-hour-segment {\n    border-bottom: thin dashed #e1e1e1; }\n  .cal-day-view .cal-time {\n    font-weight: bold;\n    padding-top: 5px;\n    width: 70px;\n    text-align: center; }\n  .cal-day-view .cal-hour-segment.cal-after-hour-start .cal-time {\n    display: none; }\n  .cal-day-view .cal-hour-segment:hover,\n  .cal-day-view .cal-drag-over .cal-hour-segment {\n    background-color: #ededed; }\n  .cal-day-view .cal-event-container {\n    position: absolute; }\n  .cal-day-view .cal-event {\n    border: solid 1px;\n    padding: 5px;\n    font-size: 12px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    height: 100%;\n    box-sizing: border-box; }\n  .cal-day-view .cal-draggable {\n    cursor: move; }\n  .cal-day-view .cal-starts-within-day .cal-event {\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px; }\n  .cal-day-view .cal-ends-within-day .cal-event {\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px; }\n  .cal-day-view .cal-all-day-event {\n    padding: 8px;\n    border: solid 1px; }\n\n.cal-tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.5;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  font-size: 11px;\n  word-wrap: break-word;\n  opacity: 0.9; }\n\n.cal-tooltip.cal-tooltip-top {\n  padding: 5px 0;\n  margin-top: -3px; }\n\n.cal-tooltip.cal-tooltip-top .cal-tooltip-arrow {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000; }\n\n.cal-tooltip.cal-tooltip-right {\n  padding: 0 5px;\n  margin-left: 3px; }\n\n.cal-tooltip.cal-tooltip-right .cal-tooltip-arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #000; }\n\n.cal-tooltip.cal-tooltip-bottom {\n  padding: 5px 0;\n  margin-top: 3px; }\n\n.cal-tooltip.cal-tooltip-bottom .cal-tooltip-arrow {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000; }\n\n.cal-tooltip.cal-tooltip-left {\n  padding: 0 5px;\n  margin-left: -3px; }\n\n.cal-tooltip.cal-tooltip-left .cal-tooltip-arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px;\n  border-left-color: #000; }\n\n.cal-tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 0.25rem; }\n\n.cal-tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid; }\n\n.cal-month-view .cal-header .cal-cell {\n  font-weight: 500; }\n\n@media screen and (min-width: 1280px) and (max-width: 1919px) {\n  .cal-month-view .cal-day-cell {\n    min-height: 150px; } }\n\n@media screen and (min-width: 1920px) {\n  .cal-month-view .cal-day-cell {\n    min-height: 200px; } }\n\n.cal-month-view .cal-day-cell.cal-open {\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12); }\n\n.cal-month-view .cal-open-day-events {\n  background: #455A64;\n  box-shadow: inset 0 0 12px 0 rgba(0, 0, 0, 0.54);\n  padding: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  .cal-month-view .cal-open-day-events > div {\n    padding: 0 16px;\n    margin: 8px 16px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: start;\n    background-color: white;\n    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n    transition: box-shadow 300ms ease; }\n    .cal-month-view .cal-open-day-events > div:first-of-type {\n      margin-top: 16px; }\n    .cal-month-view .cal-open-day-events > div:last-of-type {\n      margin-bottom: 16px; }\n    .cal-month-view .cal-open-day-events > div:hover {\n      box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12); }\n    .cal-month-view .cal-open-day-events > div .cal-event {\n      top: 0;\n      margin: 0; }\n    .cal-month-view .cal-open-day-events > div mwl-calendar-event-title {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1; }\n      .cal-month-view .cal-open-day-events > div mwl-calendar-event-title .cal-event-title {\n        display: block;\n        padding: 21px 24px;\n        line-height: 1;\n        text-decoration: none;\n        color: black; }\n    .cal-month-view .cal-open-day-events > div mwl-calendar-event-actions .cal-event-actions {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n      .cal-month-view .cal-open-day-events > div mwl-calendar-event-actions .cal-event-actions .cal-event-action {\n        display: block;\n        line-height: 1;\n        padding: 8px; }\n\n.cal-week-view .cal-header > b {\n  font-weight: 500; }\n\n.cal-week-view .cal-event {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .cal-week-view .cal-event mwl-calendar-event-title {\n    display: block;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0; }\n    .cal-week-view .cal-event mwl-calendar-event-title .cal-event-title {\n      display: block;\n      line-height: 1;\n      text-decoration: none;\n      color: black; }\n  .cal-week-view .cal-event mwl-calendar-event-actions {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1; }\n    .cal-week-view .cal-event mwl-calendar-event-actions .cal-event-actions {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n      .cal-week-view .cal-event mwl-calendar-event-actions .cal-event-actions .cal-event-action {\n        display: block;\n        line-height: 1;\n        padding: 8px; }\n\n.cal-day-view .cal-time {\n  font-weight: 500; }\n\n.cal-day-view .cal-event {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n  .cal-day-view .cal-event mwl-calendar-event-title {\n    display: block;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0; }\n    .cal-day-view .cal-event mwl-calendar-event-title .cal-event-title {\n      display: block;\n      height: 26px;\n      line-height: 26px;\n      text-decoration: none;\n      color: black; }\n  .cal-day-view .cal-event mwl-calendar-event-actions {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1; }\n    .cal-day-view .cal-event mwl-calendar-event-actions .cal-event-actions {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n      .cal-day-view .cal-event mwl-calendar-event-actions .cal-event-actions .cal-event-action {\n        display: block;\n        line-height: 1;\n        padding: 4px; }\n\n#calendar {\n  background: #FFFFFF;\n  overflow-x: hidden;\n  overflow-y: auto; }\n  #calendar .header {\n    height: 200px;\n    min-height: 200px;\n    max-height: 200px;\n    position: relative;\n    background-size: 100% auto;\n    background-position: 0 50%;\n    background-repeat: no-repeat;\n    background-color: #FAFAFA;\n    color: #FFFFFF; }\n    @media screen and (max-width: 599px) {\n      #calendar .header {\n        height: 164px;\n        min-height: 164px;\n        max-height: 164px; } }\n    #calendar .header:before {\n      content: '';\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      z-index: 1;\n      background: rgba(0, 0, 0, 0.45); }\n    #calendar .header.Jan {\n      background-image: url(\"/assets/images/backgrounds/winter.jpg\");\n      background-position: 0 85%; }\n    #calendar .header.Feb {\n      background-image: url(\"/assets/images/backgrounds/winter.jpg\");\n      background-position: 0 85%; }\n    #calendar .header.Mar {\n      background-image: url(\"/assets/images/backgrounds/spring.jpg\");\n      background-position: 0 40%; }\n    #calendar .header.Apr {\n      background-image: url(\"/assets/images/backgrounds/spring.jpg\");\n      background-position: 0 40%; }\n    #calendar .header.May {\n      background-image: url(\"/assets/images/backgrounds/spring.jpg\");\n      background-position: 0 40%; }\n    #calendar .header.Jun {\n      background-image: url(\"/assets/images/backgrounds/summer.jpg\");\n      background-position: 0 80%; }\n    #calendar .header.Jul {\n      background-image: url(\"/assets/images/backgrounds/summer.jpg\");\n      background-position: 0 80%; }\n    #calendar .header.Aug {\n      background-image: url(\"/assets/images/backgrounds/summer.jpg\");\n      background-position: 0 80%; }\n    #calendar .header.Sep {\n      background-image: url(\"/assets/images/backgrounds/autumn.jpg\");\n      background-position: 0 40%; }\n    #calendar .header.Oct {\n      background-image: url(\"/assets/images/backgrounds/autumn.jpg\");\n      background-position: 0 40%; }\n    #calendar .header.Nov {\n      background-image: url(\"/assets/images/backgrounds/autumn.jpg\");\n      background-position: 0 40%; }\n    #calendar .header.Dec {\n      background-image: url(\"/assets/images/backgrounds/winter.jpg\");\n      background-position: 0 85%; }\n    #calendar .header .header-content {\n      height: 100%; }\n      #calendar .header .header-content .header-top {\n        position: relative;\n        z-index: 2; }\n        #calendar .header .header-content .header-top .logo .logo-icon {\n          margin-right: 16px; }\n        #calendar .header .header-content .header-top .logo .logo-text {\n          font-size: 24px; }\n      #calendar .header .header-content .header-bottom {\n        position: relative;\n        z-index: 2; }\n        #calendar .header .header-content .header-bottom .title {\n          font-size: 20px;\n          min-width: 160px;\n          text-align: center;\n          font-weight: 500; }\n    #calendar .header .add-event-button {\n      position: absolute;\n      right: 18px;\n      bottom: -26px;\n      z-index: 10; }\n    #calendar .header mat-icon {\n      color: #FFFFFF; }\n  #calendar .content {\n    padding: 24px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/apps/calendar/calendar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var date_fns_1 = __webpack_require__("../../../../date-fns/index.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var Subject_1 = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var material_1 = __webpack_require__("../../../material/esm5/material.es5.js");
var event_form_component_1 = __webpack_require__("../../../../../src/app/main/content/apps/calendar/event-form/event-form.component.ts");
var event_model_1 = __webpack_require__("../../../../../src/app/main/content/apps/calendar/event.model.ts");
var calendar_service_1 = __webpack_require__("../../../../../src/app/main/content/apps/calendar/calendar.service.ts");
var confirm_dialog_component_1 = __webpack_require__("../../../../../src/app/core/components/confirm-dialog/confirm-dialog.component.ts");
var animations_1 = __webpack_require__("../../../../../src/app/core/animations.ts");
var FuseCalendarComponent = (function () {
    function FuseCalendarComponent(dialog, calendarService) {
        var _this = this;
        this.dialog = dialog;
        this.calendarService = calendarService;
        this.refresh = new Subject_1.Subject();
        this.view = 'month';
        this.viewDate = new Date();
        this.activeDayIsOpen = true;
        this.selectedDay = { date: date_fns_1.startOfDay(new Date()) };
        this.actions = [
            {
                label: '<i class="material-icons s-16">edit</i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.editEvent('edit', event);
                }
            },
            {
                label: '<i class="material-icons s-16">delete</i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.deleteEvent(event);
                }
            }
        ];
        /**
         * Get events from service/server
         */
        this.setEvents();
    }
    FuseCalendarComponent.prototype.ngOnInit = function () {
        var _this = this;
        /**
         * Watch re-render-refresh for updating db
         */
        this.refresh.subscribe(function (updateDB) {
            // console.warn('REFRESH');
            if (updateDB) {
                // console.warn('UPDATE DB');
                _this.calendarService.updateEvents(_this.events);
            }
        });
        this.calendarService.onEventsUpdated.subscribe(function (events) {
            _this.setEvents();
            _this.refresh.next();
        });
    };
    FuseCalendarComponent.prototype.setEvents = function () {
        var _this = this;
        this.events = this.calendarService.events.map(function (item) {
            item.actions = _this.actions;
            return new event_model_1.CalendarEventModel(item);
        });
    };
    /**
     * Before View Renderer
     * @param {any} header
     * @param {any} body
     */
    FuseCalendarComponent.prototype.beforeMonthViewRender = function (_a) {
        var _this = this;
        var header = _a.header, body = _a.body;
        // console.info('beforeMonthViewRender');
        /**
         * Get the selected day
         */
        var _selectedDay = body.find(function (_day) {
            return _day.date.getTime() === _this.selectedDay.date.getTime();
        });
        if (_selectedDay) {
            /**
             * Set selectedday style
             * @type {string}
             */
            _selectedDay.cssClass = 'mat-elevation-z3';
        }
    };
    /**
     * Day clicked
     * @param {MonthViewDay} day
     */
    FuseCalendarComponent.prototype.dayClicked = function (day) {
        var date = day.date;
        var events = day.events;
        if (date_fns_1.isSameMonth(date, this.viewDate)) {
            if ((date_fns_1.isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) || events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
                this.viewDate = date;
            }
        }
        this.selectedDay = day;
        this.refresh.next();
    };
    /**
     * Event times changed
     * Event dropped or resized
     * @param {CalendarEvent} event
     * @param {Date} newStart
     * @param {Date} newEnd
     */
    FuseCalendarComponent.prototype.eventTimesChanged = function (_a) {
        var event = _a.event, newStart = _a.newStart, newEnd = _a.newEnd;
        event.start = newStart;
        event.end = newEnd;
        // console.warn('Dropped or resized', event);
        this.refresh.next(true);
    };
    /**
     * Delete Event
     * @param event
     */
    FuseCalendarComponent.prototype.deleteEvent = function (event) {
        var _this = this;
        this.confirmDialogRef = this.dialog.open(confirm_dialog_component_1.FuseConfirmDialogComponent, {
            disableClose: false
        });
        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';
        this.confirmDialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                var eventIndex = _this.events.indexOf(event);
                _this.events.splice(eventIndex, 1);
                _this.refresh.next(true);
            }
            _this.confirmDialogRef = null;
        });
    };
    /**
     * Edit Event
     * @param {string} action
     * @param {CalendarEvent} event
     */
    FuseCalendarComponent.prototype.editEvent = function (action, event) {
        var _this = this;
        var eventIndex = this.events.indexOf(event);
        this.dialogRef = this.dialog.open(event_form_component_1.FuseCalendarEventFormDialogComponent, {
            panelClass: 'event-form-dialog',
            data: {
                event: event,
                action: action
            }
        });
        this.dialogRef.afterClosed()
            .subscribe(function (response) {
            if (!response) {
                return;
            }
            var actionType = response[0];
            var formData = response[1];
            switch (actionType) {
                /**
                 * Save
                 */
                case 'save':
                    _this.events[eventIndex] = Object.assign(_this.events[eventIndex], formData.getRawValue());
                    _this.refresh.next(true);
                    break;
                /**
                 * Delete
                 */
                case 'delete':
                    _this.deleteEvent(event);
                    break;
            }
        });
    };
    /**
     * Add Event
     */
    FuseCalendarComponent.prototype.addEvent = function () {
        var _this = this;
        this.dialogRef = this.dialog.open(event_form_component_1.FuseCalendarEventFormDialogComponent, {
            panelClass: 'event-form-dialog',
            data: {
                action: 'new',
                date: this.selectedDay.date
            }
        });
        this.dialogRef.afterClosed()
            .subscribe(function (response) {
            if (!response) {
                return;
            }
            var newEvent = response.getRawValue();
            newEvent.actions = _this.actions;
            _this.events.push(newEvent);
            _this.refresh.next(true);
        });
    };
    FuseCalendarComponent = __decorate([
        core_1.Component({
            selector: 'fuse-calendar',
            template: __webpack_require__("../../../../../src/app/main/content/apps/calendar/calendar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/apps/calendar/calendar.component.scss")],
            encapsulation: core_1.ViewEncapsulation.None,
            animations: animations_1.fuseAnimations
        }),
        __metadata("design:paramtypes", [material_1.MatDialog,
            calendar_service_1.CalendarService])
    ], FuseCalendarComponent);
    return FuseCalendarComponent;
}());
exports.FuseCalendarComponent = FuseCalendarComponent;


/***/ }),

/***/ "../../../../../src/app/main/content/apps/calendar/calendar.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var shared_module_1 = __webpack_require__("../../../../../src/app/core/modules/shared.module.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var calendar_component_1 = __webpack_require__("../../../../../src/app/main/content/apps/calendar/calendar.component.ts");
var calendar_service_1 = __webpack_require__("../../../../../src/app/main/content/apps/calendar/calendar.service.ts");
var angular_calendar_1 = __webpack_require__("../../../../angular-calendar/esm5/angular-calendar.js");
var event_form_component_1 = __webpack_require__("../../../../../src/app/main/content/apps/calendar/event-form/event-form.component.ts");
var routes = [
    {
        path: '**',
        component: calendar_component_1.FuseCalendarComponent,
        children: [],
        resolve: {
            chat: calendar_service_1.CalendarService
        }
    }
];
var FuseCalendarModule = (function () {
    function FuseCalendarModule() {
    }
    FuseCalendarModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                router_1.RouterModule.forChild(routes),
                angular_calendar_1.CalendarModule.forRoot()
            ],
            declarations: [
                calendar_component_1.FuseCalendarComponent,
                event_form_component_1.FuseCalendarEventFormDialogComponent
            ],
            providers: [
                calendar_service_1.CalendarService
            ],
            entryComponents: [event_form_component_1.FuseCalendarEventFormDialogComponent]
        })
    ], FuseCalendarModule);
    return FuseCalendarModule;
}());
exports.FuseCalendarModule = FuseCalendarModule;


/***/ }),

/***/ "../../../../../src/app/main/content/apps/calendar/calendar.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var Subject_1 = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var CalendarService = (function () {
    function CalendarService(http) {
        this.http = http;
        this.onEventsUpdated = new Subject_1.Subject();
    }
    CalendarService.prototype.resolve = function (route, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Promise.all([
                _this.getEvents()
            ]).then(function (_a) {
                var events = _a[0];
                resolve();
            }, reject);
        });
    };
    CalendarService.prototype.getEvents = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/calendar/events')
                .subscribe(function (response) {
                _this.events = response.data;
                _this.onEventsUpdated.next(_this.events);
                resolve(_this.events);
            }, reject);
        });
    };
    CalendarService.prototype.updateEvents = function (events) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('api/calendar/events', {
                id: 'events',
                data: events.slice()
            })
                .subscribe(function (response) {
                _this.getEvents();
            }, reject);
        });
    };
    CalendarService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], CalendarService);
    return CalendarService;
}());
exports.CalendarService = CalendarService;


/***/ }),

/***/ "../../../../../src/app/main/content/apps/calendar/event-form/event-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog-content-wrapper\">\n    <mat-toolbar matDialogTitle class=\"mat-accent m-0\">\n        <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n            <span class=\"title dialog-title\">{{dialogTitle}}</span>\n            <button mat-button class=\"mat-icon-button\"\n                    (click)=\"dialogRef.close()\"\n                    aria-label=\"Close dialog\">\n                <mat-icon>close</mat-icon>\n            </button>\n        </div>\n    </mat-toolbar>\n\n    <div mat-dialog-content class=\"p-24 m-0\" fusePerfectScrollbar>\n\n        <form name=\"eventForm\" [formGroup]=\"eventForm\" class=\"event-form w-100-p\" fxLayout=\"column\" fxFlex>\n\n            <mat-form-field class=\"w-100-p\">\n                <input matInput\n                       name=\"title\"\n                       formControlName=\"title\"\n                       placeholder=\"Title\"\n                       required>\n            </mat-form-field>\n\n            <div class=\"py-16\" fxFlex=\"1 0 auto\" fxLayout=\"row\">\n                <mat-slide-toggle\n                    name=\"allDay\"\n                    formControlName=\"allDay\"\n                    class=\"mr-24\"\n                    aria-label=\"All day\">\n                    All Day\n                </mat-slide-toggle>\n            </div>\n\n            <div class=\"py-16\" fxFlex=\"1 0 auto\" fxLayout=\"column\" fxLayout.gt-xs=\"row\" formGroupName=\"color\">\n\n                <mat-form-field class=\"mr-sm-24\" fxFlex>\n                    <input matInput\n                           class=\"primary-color-input\"\n                           name=\"primary color\"\n                           formControlName=\"primary\"\n                           placeholder=\"Primary color\"\n                           [(colorPicker)]=\"event.color.primary\"\n                           cpWidth=\"290px\"\n                           [cpPresetColors]=\"presetColors\"\n                           [style.background]=\"event.color.primary\"\n                           (colorPickerChange)=\"event.color.primary = $event; eventForm.patchValue({color:{primary:$event}})\"/>\n                </mat-form-field>\n\n                <mat-form-field fxFlex>\n                    <input matInput\n                           class=\"secondary-color-input\"\n                           name=\"secondary color\"\n                           formControlName=\"secondary\"\n                           placeholder=\"Secondary color\"\n                           [(colorPicker)]=\"event.color.secondary\"\n                           cpWidth=\"290px\"\n                           [cpPresetColors]=\"presetColors\"\n                           [style.background]=\"event.color.secondary\"\n                           (colorPickerChange)=\"event.color.secondary = $event; eventForm.patchValue({color:{secondary:$event}})\"/>\n                </mat-form-field>\n\n            </div>\n\n            <div fxFlex=\"1 0 auto\" fxLayout=\"column\" fxLayout.gt-xs=\"row\">\n\n                <mat-form-field class=\"mr-sm-24\" fxFlex>\n                    <input matInput [matDatepicker]=\"startDatePicker\" placeholder=\"Start Date\"\n                           name=\"start\"\n                           formControlName=\"start\">\n                    <mat-datepicker-toggle matSuffix [for]=\"startDatePicker\"></mat-datepicker-toggle>\n                    <mat-datepicker #startDatePicker></mat-datepicker>\n                </mat-form-field>\n\n                <mat-form-field class=\"no-errors-spacer\" fxFlex mat-no-float>\n                    <input matInput placeholder=\"Start Time\">\n                </mat-form-field>\n\n            </div>\n\n            <div fxFlex=\"1 0 auto\" fxLayout=\"column\" fxLayout.gt-xs=\"row\">\n\n                <mat-form-field class=\"mr-sm-24\" fxFlex>\n                    <input matInput [matDatepicker]=\"endDatePicker\" placeholder=\"End Date\"\n                           name=\"end\"\n                           formControlName=\"end\">\n                    <mat-datepicker-toggle matSuffix [for]=\"endDatePicker\"></mat-datepicker-toggle>\n                    <mat-datepicker #endDatePicker></mat-datepicker>\n                </mat-form-field>\n\n                <mat-form-field class=\"no-errors-spacer\" fxFlex mat-no-float>\n                    <input matInput placeholder=\"End Time\">\n                </mat-form-field>\n\n            </div>\n\n            <mat-form-field formGroupName=\"meta\" class=\"w-100-p\">\n                <input matInput\n                       name=\"location\"\n                       formControlName=\"location\"\n                       placeholder=\"Location\">\n            </mat-form-field>\n\n            <mat-form-field formGroupName=\"meta\" class=\"w-100-p\">\n\n                <textarea matInput\n                          formControlName=\"notes\"\n                          placeholder=\"Notes\"\n                          mat-maxlength=\"250\"\n                          max-rows=\"4\">\n                </textarea>\n            </mat-form-field>\n\n        </form>\n\n    </div>\n\n    <div mat-dialog-actions class=\"m-0 p-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n\n        <button *ngIf=\"action !=='edit'\"\n                mat-raised-button\n                (click)=\"dialogRef.close(eventForm)\"\n                class=\"save-button mat-accent\"\n                [disabled]=\"eventForm.invalid\"\n                aria-label=\"SAVE\">\n            SAVE\n        </button>\n\n        <button *ngIf=\"action ==='edit'\"\n                mat-raised-button\n                (click)=\"dialogRef.close(['save',eventForm])\"\n                class=\"save-button mat-accent\"\n                [disabled]=\"eventForm.invalid\"\n                aria-label=\"SAVE\">\n            SAVE\n        </button>\n\n        <button *ngIf=\"action ==='edit'\"\n                mat-button\n                class=\"mat-icon-button\"\n                (click)=\"dialogRef.close(['delete',eventForm])\"\n                aria-label=\"Delete\"\n                matTooltip=\"Delete\">\n            <mat-icon>delete</mat-icon>\n        </button>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/content/apps/calendar/event-form/event-form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between mat-menu and mat-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n.event-form-dialog {\n  width: 480px; }\n  @media screen and (max-width: 599px) {\n    .event-form-dialog {\n      width: 100%; } }\n  .event-form-dialog .mat-dialog-container {\n    padding: 0; }\n  .event-form-dialog .dialog-content-wrapper {\n    max-height: 85vh;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n  .event-form-dialog .primary-color-input,\n  .event-form-dialog .secondary-color-input {\n    padding: 6px 8px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/content/apps/calendar/event-form/event-form.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var material_1 = __webpack_require__("../../../material/esm5/material.es5.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var event_model_1 = __webpack_require__("../../../../../src/app/main/content/apps/calendar/event.model.ts");
var matColors_1 = __webpack_require__("../../../../../src/app/core/matColors.ts");
var FuseCalendarEventFormDialogComponent = (function () {
    function FuseCalendarEventFormDialogComponent(dialogRef, data, formBuilder) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.formBuilder = formBuilder;
        this.presetColors = matColors_1.MatColors.presets;
        this.event = data.event;
        this.action = data.action;
        if (this.action === 'edit') {
            this.dialogTitle = this.event.title;
        }
        else {
            this.dialogTitle = 'New Event';
            this.event = new event_model_1.CalendarEventModel({
                start: data.date,
                end: data.date
            });
        }
        this.eventForm = this.createEventForm();
    }
    FuseCalendarEventFormDialogComponent.prototype.ngOnInit = function () {
    };
    FuseCalendarEventFormDialogComponent.prototype.createEventForm = function () {
        return new forms_1.FormGroup({
            title: new forms_1.FormControl(this.event.title),
            start: new forms_1.FormControl(this.event.start),
            end: new forms_1.FormControl(this.event.end),
            allDay: new forms_1.FormControl(this.event.allDay),
            color: this.formBuilder.group({
                primary: new forms_1.FormControl(this.event.color.primary),
                secondary: new forms_1.FormControl(this.event.color.secondary)
            }),
            meta: this.formBuilder.group({
                location: new forms_1.FormControl(this.event.meta.location),
                notes: new forms_1.FormControl(this.event.meta.notes)
            })
        });
    };
    FuseCalendarEventFormDialogComponent = __decorate([
        core_1.Component({
            selector: 'fuse-calendar-event-form-dialog',
            template: __webpack_require__("../../../../../src/app/main/content/apps/calendar/event-form/event-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/content/apps/calendar/event-form/event-form.component.scss")],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __param(1, core_1.Inject(material_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [material_1.MatDialogRef, Object, forms_1.FormBuilder])
    ], FuseCalendarEventFormDialogComponent);
    return FuseCalendarEventFormDialogComponent;
}());
exports.FuseCalendarEventFormDialogComponent = FuseCalendarEventFormDialogComponent;


/***/ }),

/***/ "../../../../../src/app/main/content/apps/calendar/event.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var date_fns_1 = __webpack_require__("../../../../date-fns/index.js");
// import { CalendarEvent } from 'calendar-utils/dist/calendar-utils';
/*
export interface EventAction
{
    label: string;
    cssClass?: string;

    onClick({event}: {
        event: CalendarEvent;
    }): any;
}*/
var CalendarEventModel = (function () {
    function CalendarEventModel(data) {
        data = data || {};
        this.start = new Date(data.start) || date_fns_1.startOfDay(new Date());
        this.end = new Date(data.end) || date_fns_1.endOfDay(new Date());
        this.title = data.title || '';
        this.color = {
            primary: data.color && data.color.primary || '#1e90ff',
            secondary: data.color && data.color.secondary || '#D1E8FF'
        };
        this.draggable = data.draggable || true;
        this.resizable = {
            beforeStart: data.resizable && data.resizable.beforeStart || true,
            afterEnd: data.resizable && data.resizable.afterEnd || true
        };
        this.actions = data.actions || [];
        this.allDay = data.allDay || false;
        this.cssClass = data.cssClass || '';
        this.meta = {
            location: data.meta && data.meta.location || '',
            notes: data.meta && data.meta.notes || ''
        };
    }
    return CalendarEventModel;
}());
exports.CalendarEventModel = CalendarEventModel;


/***/ }),

/***/ "../../../../angular-calendar/esm5/angular-calendar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarModule", function() { return CalendarModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarCommonModule", function() { return CalendarCommonModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarEventTitleFormatter", function() { return CalendarEventTitleFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOMENT", function() { return MOMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarMomentDateFormatter", function() { return CalendarMomentDateFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarNativeDateFormatter", function() { return CalendarNativeDateFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarAngularDateFormatter", function() { return CalendarAngularDateFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarDateFormatter", function() { return CalendarDateFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarUtils", function() { return CalendarUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarMonthViewComponent", function() { return CalendarMonthViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarMonthModule", function() { return CalendarMonthModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarWeekViewComponent", function() { return CalendarWeekViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarWeekModule", function() { return CalendarWeekModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarDayViewComponent", function() { return CalendarDayViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarDayModule", function() { return CalendarDayModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return CalendarDatePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return CalendarEventActionsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return CalendarEventTitleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return CalendarEventTitlePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return CalendarNextViewDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return CalendarPreviousViewDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return CalendarTodayDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return CalendarTooltipDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return CalendarTooltipWindowComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return ClickDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵp", function() { return CalendarAllDayEventComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵr", function() { return CalendarDayViewEventComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵq", function() { return CalendarDayViewHourSegmentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return CalendarMonthCellComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return CalendarMonthViewHeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return CalendarOpenDayEventsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵo", function() { return CalendarWeekViewEventComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function() { return CalendarWeekViewHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_draggable_droppable__ = __webpack_require__("../../../../angular-draggable-droppable/esm5/angular-draggable-droppable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_positioning__ = __webpack_require__("../../../../positioning/dist/positioning.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_date_fns_sub_days_index__ = __webpack_require__("../../../../date-fns/sub_days/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_date_fns_sub_days_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_date_fns_sub_days_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_date_fns_sub_weeks_index__ = __webpack_require__("../../../../date-fns/sub_weeks/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_date_fns_sub_weeks_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_date_fns_sub_weeks_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_date_fns_sub_months_index__ = __webpack_require__("../../../../date-fns/sub_months/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_date_fns_sub_months_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_date_fns_sub_months_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_date_fns_add_days_index__ = __webpack_require__("../../../../date-fns/add_days/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_date_fns_add_days_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_date_fns_add_days_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_date_fns_add_weeks_index__ = __webpack_require__("../../../../date-fns/add_weeks/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_date_fns_add_weeks_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_date_fns_add_weeks_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_date_fns_add_months_index__ = __webpack_require__("../../../../date-fns/add_months/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_date_fns_add_months_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_date_fns_add_months_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_date_fns_start_of_today_index__ = __webpack_require__("../../../../date-fns/start_of_today/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_date_fns_start_of_today_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_date_fns_start_of_today_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_date_fns_get_iso_week_index__ = __webpack_require__("../../../../date-fns/get_iso_week/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_date_fns_get_iso_week_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_date_fns_get_iso_week_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_calendar_utils__ = __webpack_require__("../../../../calendar-utils/dist/calendar-utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_date_fns_is_same_day_index__ = __webpack_require__("../../../../date-fns/is_same_day/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_date_fns_is_same_day_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_date_fns_is_same_day_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_date_fns_set_date_index__ = __webpack_require__("../../../../date-fns/set_date/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_date_fns_set_date_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_date_fns_set_date_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_date_fns_set_month_index__ = __webpack_require__("../../../../date-fns/set_month/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_date_fns_set_month_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_date_fns_set_month_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_date_fns_set_year_index__ = __webpack_require__("../../../../date-fns/set_year/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_date_fns_set_year_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_date_fns_set_year_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_date_fns_get_date_index__ = __webpack_require__("../../../../date-fns/get_date/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_date_fns_get_date_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_date_fns_get_date_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_date_fns_get_month_index__ = __webpack_require__("../../../../date-fns/get_month/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_date_fns_get_month_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_date_fns_get_month_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_date_fns_get_year_index__ = __webpack_require__("../../../../date-fns/get_year/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_date_fns_get_year_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_date_fns_get_year_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_date_fns_difference_in_seconds_index__ = __webpack_require__("../../../../date-fns/difference_in_seconds/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_date_fns_difference_in_seconds_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_date_fns_difference_in_seconds_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_date_fns_add_seconds_index__ = __webpack_require__("../../../../date-fns/add_seconds/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_date_fns_add_seconds_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_date_fns_add_seconds_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angular_resizable_element__ = __webpack_require__("../../../../angular-resizable-element/esm5/angular-resizable-element.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_date_fns_add_minutes_index__ = __webpack_require__("../../../../date-fns/add_minutes/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_date_fns_add_minutes_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_date_fns_add_minutes_index__);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "DAYS_OF_WEEK", function() { return __WEBPACK_IMPORTED_MODULE_12_calendar_utils__["a"]; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


























/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CalendarEventActionsComponent = /** @class */ (function () {
    function CalendarEventActionsComponent() {
    }
    return CalendarEventActionsComponent;
}());
CalendarEventActionsComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'mwl-calendar-event-actions',
                template: "\n    <span *ngIf=\"event.actions\" class=\"cal-event-actions\">\n      <a\n        class=\"cal-event-action\"\n        href=\"javascript:;\"\n        *ngFor=\"let action of event.actions\"\n        (mwlClick)=\"action.onClick({event: event})\"\n        [ngClass]=\"action.cssClass\"\n        [innerHtml]=\"action.label\">\n      </a>\n    </span>\n  "
            },] },
];
/** @nocollapse */
CalendarEventActionsComponent.ctorParameters = function () { return []; };
CalendarEventActionsComponent.propDecorators = {
    "event": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CalendarEventTitleComponent = /** @class */ (function () {
    function CalendarEventTitleComponent() {
    }
    return CalendarEventTitleComponent;
}());
CalendarEventTitleComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'mwl-calendar-event-title',
                template: "\n    <ng-template\n      #defaultTemplate\n      let-event=\"event\"\n      let-view=\"view\">\n      <a\n        class=\"cal-event-title\"\n        href=\"javascript:;\"\n        [innerHTML]=\"event.title | calendarEventTitle:view:event\">\n      </a>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        event: event,\n        view: view\n      }\">\n    </ng-template>\n  "
            },] },
];
/** @nocollapse */
CalendarEventTitleComponent.ctorParameters = function () { return []; };
CalendarEventTitleComponent.propDecorators = {
    "event": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "customTemplate": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "view": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CalendarTooltipWindowComponent = /** @class */ (function () {
    function CalendarTooltipWindowComponent() {
    }
    return CalendarTooltipWindowComponent;
}());
CalendarTooltipWindowComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                template: "\n    <ng-template\n      #defaultTemplate\n      let-contents=\"contents\"\n      let-placement=\"placement\"\n      let-event=\"event\">\n      <div class=\"cal-tooltip\" [ngClass]=\"'cal-tooltip-' + placement\">\n        <div class=\"cal-tooltip-arrow\"></div>\n        <div class=\"cal-tooltip-inner\" [innerHtml]=\"contents\"></div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        contents: contents,\n        placement: placement,\n        event: event\n      }\">\n    </ng-template>\n  "
            },] },
];
/** @nocollapse */
CalendarTooltipWindowComponent.ctorParameters = function () { return []; };
CalendarTooltipWindowComponent.propDecorators = {
    "contents": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "placement": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "event": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "customTemplate": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
var CalendarTooltipDirective = /** @class */ (function () {
    /**
     * @param {?} elementRef
     * @param {?} injector
     * @param {?} renderer
     * @param {?} componentFactoryResolver
     * @param {?} viewContainerRef
     * @param {?} document
     */
    function CalendarTooltipDirective(elementRef, injector, renderer, componentFactoryResolver, viewContainerRef, document //tslint:disable-line
        //tslint:disable-line
    ) {
        this.elementRef = elementRef;
        this.injector = injector;
        this.renderer = renderer;
        this.viewContainerRef = viewContainerRef;
        this.document //tslint:disable-line
            = document;
        this.placement = 'top';
        this.positioning = new __WEBPACK_IMPORTED_MODULE_3_positioning__["a" /* Positioning */]();
        this.tooltipFactory = componentFactoryResolver.resolveComponentFactory(CalendarTooltipWindowComponent);
    }
    /**
     * @return {?}
     */
    CalendarTooltipDirective.prototype.ngOnDestroy = function () {
        this.hide();
    };
    /**
     * @return {?}
     */
    CalendarTooltipDirective.prototype.onMouseOver = function () {
        this.show();
    };
    /**
     * @return {?}
     */
    CalendarTooltipDirective.prototype.onMouseOut = function () {
        this.hide();
    };
    /**
     * @return {?}
     */
    CalendarTooltipDirective.prototype.show = function () {
        var _this = this;
        if (!this.tooltipRef && this.contents) {
            this.tooltipRef = this.viewContainerRef.createComponent(this.tooltipFactory, 0, this.injector, []);
            this.tooltipRef.instance.contents = this.contents;
            this.tooltipRef.instance.placement = this.placement;
            this.tooltipRef.instance.customTemplate = this.customTemplate;
            this.tooltipRef.instance.event = this.event;
            if (this.appendToBody) {
                this.document.body.appendChild(this.tooltipRef.location.nativeElement);
            }
            requestAnimationFrame(function () {
                _this.positionTooltip();
            });
        }
    };
    /**
     * @return {?}
     */
    CalendarTooltipDirective.prototype.hide = function () {
        if (this.tooltipRef) {
            this.viewContainerRef.remove(this.viewContainerRef.indexOf(this.tooltipRef.hostView));
            this.tooltipRef = null;
        }
    };
    /**
     * @return {?}
     */
    CalendarTooltipDirective.prototype.positionTooltip = function () {
        if (this.tooltipRef) {
            var /** @type {?} */ targetPosition = this.positioning.positionElements(this.elementRef.nativeElement, this.tooltipRef.location.nativeElement.children[0], this.placement, this.appendToBody);
            var /** @type {?} */ elm = this.tooltipRef.location.nativeElement
                .children[0];
            this.renderer.setStyle(elm, 'top', targetPosition.top + "px");
            this.renderer.setStyle(elm, 'left', targetPosition.left + "px");
        }
    };
    return CalendarTooltipDirective;
}());
CalendarTooltipDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[mwlCalendarTooltip]'
            },] },
];
/** @nocollapse */
CalendarTooltipDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["DOCUMENT"],] },] },
]; };
CalendarTooltipDirective.propDecorators = {
    "contents": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['mwlCalendarTooltip',] },],
    "placement": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['tooltipPlacement',] },],
    "customTemplate": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['tooltipTemplate',] },],
    "event": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['tooltipEvent',] },],
    "appendToBody": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['tooltipAppendToBody',] },],
    "onMouseOver": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['mouseenter',] },],
    "onMouseOut": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['mouseleave',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Change the view date to the previous view. For example:
 *
 * ```typescript
 * <button
 *  mwlCalendarPreviousView
 *  [(viewDate)]="viewDate"
 *  [view]="view">
 *  Previous
 * </button>
 * ```
 */
var CalendarPreviousViewDirective = /** @class */ (function () {
    function CalendarPreviousViewDirective() {
        /**
         * Called when the view date is changed
         */
        this.viewDateChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    /**
     * @hidden
     * @return {?}
     */
    CalendarPreviousViewDirective.prototype.onClick = function () {
        var /** @type {?} */ subFn = {
            day: __WEBPACK_IMPORTED_MODULE_4_date_fns_sub_days_index___default.a,
            week: __WEBPACK_IMPORTED_MODULE_5_date_fns_sub_weeks_index___default.a,
            month: __WEBPACK_IMPORTED_MODULE_6_date_fns_sub_months_index___default.a
        }[this.view];
        this.viewDateChange.emit(subFn(this.viewDate, 1));
    };
    return CalendarPreviousViewDirective;
}());
CalendarPreviousViewDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[mwlCalendarPreviousView]'
            },] },
];
/** @nocollapse */
CalendarPreviousViewDirective.ctorParameters = function () { return []; };
CalendarPreviousViewDirective.propDecorators = {
    "view": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "viewDate": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "viewDateChange": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    "onClick": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['click',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Change the view date to the next view. For example:
 *
 * ```typescript
 * <button
 *  mwlCalendarNextView
 *  [(viewDate)]="viewDate"
 *  [view]="view">
 *  Next
 * </button>
 * ```
 */
var CalendarNextViewDirective = /** @class */ (function () {
    function CalendarNextViewDirective() {
        /**
         * Called when the view date is changed
         */
        this.viewDateChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    /**
     * @hidden
     * @return {?}
     */
    CalendarNextViewDirective.prototype.onClick = function () {
        var /** @type {?} */ addFn = {
            day: __WEBPACK_IMPORTED_MODULE_7_date_fns_add_days_index___default.a,
            week: __WEBPACK_IMPORTED_MODULE_8_date_fns_add_weeks_index___default.a,
            month: __WEBPACK_IMPORTED_MODULE_9_date_fns_add_months_index___default.a
        }[this.view];
        this.viewDateChange.emit(addFn(this.viewDate, 1));
    };
    return CalendarNextViewDirective;
}());
CalendarNextViewDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[mwlCalendarNextView]'
            },] },
];
/** @nocollapse */
CalendarNextViewDirective.ctorParameters = function () { return []; };
CalendarNextViewDirective.propDecorators = {
    "view": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "viewDate": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "viewDateChange": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    "onClick": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['click',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Change the view date to the current day. For example:
 *
 * ```typescript
 * <button
 *  mwlCalendarToday
 *  [(viewDate)]="viewDate">
 *  Today
 * </button>
 * ```
 */
var CalendarTodayDirective = /** @class */ (function () {
    function CalendarTodayDirective() {
        /**
         * Called when the view date is changed
         */
        this.viewDateChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    /**
     * @hidden
     * @return {?}
     */
    CalendarTodayDirective.prototype.onClick = function () {
        this.viewDateChange.emit(__WEBPACK_IMPORTED_MODULE_10_date_fns_start_of_today_index___default()());
    };
    return CalendarTodayDirective;
}());
CalendarTodayDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[mwlCalendarToday]'
            },] },
];
/** @nocollapse */
CalendarTodayDirective.ctorParameters = function () { return []; };
CalendarTodayDirective.propDecorators = {
    "viewDate": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "viewDateChange": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    "onClick": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['click',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * This will use the angular date pipe to do all date formatting. It is the default date formatter used by the calendar.
 */
var CalendarAngularDateFormatter = /** @class */ (function () {
    function CalendarAngularDateFormatter() {
    }
    /**
     * The month view header week day labels
     * @param {?} __0
     * @return {?}
     */
    CalendarAngularDateFormatter.prototype.monthViewColumnHeader = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new __WEBPACK_IMPORTED_MODULE_2__angular_common__["DatePipe"](locale).transform(date, 'EEEE', locale);
    };
    /**
     * The month view cell day number
     * @param {?} __0
     * @return {?}
     */
    CalendarAngularDateFormatter.prototype.monthViewDayNumber = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new __WEBPACK_IMPORTED_MODULE_2__angular_common__["DatePipe"](locale).transform(date, 'd', locale);
    };
    /**
     * The month view title
     * @param {?} __0
     * @return {?}
     */
    CalendarAngularDateFormatter.prototype.monthViewTitle = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new __WEBPACK_IMPORTED_MODULE_2__angular_common__["DatePipe"](locale).transform(date, 'MMMM y', locale);
    };
    /**
     * The week view header week day labels
     * @param {?} __0
     * @return {?}
     */
    CalendarAngularDateFormatter.prototype.weekViewColumnHeader = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new __WEBPACK_IMPORTED_MODULE_2__angular_common__["DatePipe"](locale).transform(date, 'EEEE', locale);
    };
    /**
     * The week view sub header day and month labels
     * @param {?} __0
     * @return {?}
     */
    CalendarAngularDateFormatter.prototype.weekViewColumnSubHeader = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new __WEBPACK_IMPORTED_MODULE_2__angular_common__["DatePipe"](locale).transform(date, 'MMM d', locale);
    };
    /**
     * The week view title
     * @param {?} __0
     * @return {?}
     */
    CalendarAngularDateFormatter.prototype.weekViewTitle = function (_a) {
        var date = _a.date, locale = _a.locale;
        var /** @type {?} */ year = new __WEBPACK_IMPORTED_MODULE_2__angular_common__["DatePipe"](locale).transform(date, 'y', locale);
        var /** @type {?} */ weekNumber = __WEBPACK_IMPORTED_MODULE_11_date_fns_get_iso_week_index___default()(date);
        return "Week " + weekNumber + " of " + year;
    };
    /**
     * The time formatting down the left hand side of the day view
     * @param {?} __0
     * @return {?}
     */
    CalendarAngularDateFormatter.prototype.dayViewHour = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new __WEBPACK_IMPORTED_MODULE_2__angular_common__["DatePipe"](locale).transform(date, 'h a', locale);
    };
    /**
     * The day view title
     * @param {?} __0
     * @return {?}
     */
    CalendarAngularDateFormatter.prototype.dayViewTitle = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new __WEBPACK_IMPORTED_MODULE_2__angular_common__["DatePipe"](locale).transform(date, 'EEEE, MMMM d, y', locale);
    };
    return CalendarAngularDateFormatter;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * This class is responsible for all formatting of dates. There are 3 implementations available, the `CalendarAngularDateFormatter` (default) which uses the angular date pipe to format dates, the `CalendarNativeDateFormatter` which will use the <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Intl" target="_blank">Intl</a> API to format dates, or there is the `CalendarMomentDateFormatter` which uses <a href="http://momentjs.com/" target="_blank">moment</a>.
 *
 * If you wish, you may override any of the defaults via angulars DI. For example:
 *
 * ```typescript
 * import { CalendarDateFormatter, DateFormatterParams } from 'angular-calendar';
 * import { DatePipe } from '\@angular/common';
 *
 * class CustomDateFormatter extends CalendarDateFormatter {
 *
 *   public monthViewColumnHeader({date, locale}: DateFormatterParams): string {
 *     return new DatePipe(locale).transform(date, 'EEE', locale); // use short week days
 *   }
 *
 * }
 *
 * // in your component that uses the calendar
 * providers: [{
 *   provide: CalendarDateFormatter,
 *   useClass: CustomDateFormatter
 * }]
 * ```
 */
var CalendarDateFormatter = /** @class */ (function (_super) {
    __extends(CalendarDateFormatter, _super);
    function CalendarDateFormatter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CalendarDateFormatter;
}(CalendarAngularDateFormatter));
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * This pipe is primarily for rendering the current view title. Example usage:
 * ```typescript
 * // where `viewDate` is a `Date` and view is `'month' | 'week' | 'day'`
 * {{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}
 * ```
 */
var CalendarDatePipe = /** @class */ (function () {
    /**
     * @param {?} dateFormatter
     * @param {?} locale
     */
    function CalendarDatePipe(dateFormatter, locale) {
        this.dateFormatter = dateFormatter;
        this.locale = locale;
    }
    /**
     * @param {?} date
     * @param {?} method
     * @param {?=} locale
     * @return {?}
     */
    CalendarDatePipe.prototype.transform = function (date, method, locale) {
        if (locale === void 0) { locale = this.locale; }
        return this.dateFormatter[method]({ date: date, locale: locale });
    };
    return CalendarDatePipe;
}());
CalendarDatePipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'calendarDate'
            },] },
];
/** @nocollapse */
CalendarDatePipe.ctorParameters = function () { return [
    { type: CalendarDateFormatter, },
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"],] },] },
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * This class is responsible for displaying all event titles within the calendar. You may override any of its methods via angulars DI to suit your requirements. For example:
 *
 * ```typescript
 * import { CalendarEventTitleFormatter, CalendarEvent } from 'angular-calendar';
 *
 * class CustomEventTitleFormatter extends CalendarEventTitleFormatter {
 *
 *   month(event: CalendarEvent): string {
 *     return `Custom prefix: ${event.title}`;
 *   }
 *
 * }
 *
 * // in your component
 * providers: [{
 *  provide: CalendarEventTitleFormatter,
 *  useClass: CustomEventTitleFormatter
 * }]
 * ```
 */
var CalendarEventTitleFormatter = /** @class */ (function () {
    function CalendarEventTitleFormatter() {
    }
    /**
     * The month view event title.
     * @param {?} event
     * @return {?}
     */
    CalendarEventTitleFormatter.prototype.month = function (event) {
        return event.title;
    };
    /**
     * The month view event tooltip. Return a falsey value from this to disable the tooltip.
     * @param {?} event
     * @return {?}
     */
    CalendarEventTitleFormatter.prototype.monthTooltip = function (event) {
        return event.title;
    };
    /**
     * The week view event title.
     * @param {?} event
     * @return {?}
     */
    CalendarEventTitleFormatter.prototype.week = function (event) {
        return event.title;
    };
    /**
     * The week view event tooltip. Return a falsey value from this to disable the tooltip.
     * @param {?} event
     * @return {?}
     */
    CalendarEventTitleFormatter.prototype.weekTooltip = function (event) {
        return event.title;
    };
    /**
     * The day view event title.
     * @param {?} event
     * @return {?}
     */
    CalendarEventTitleFormatter.prototype.day = function (event) {
        return event.title;
    };
    /**
     * The day view event tooltip. Return a falsey value from this to disable the tooltip.
     * @param {?} event
     * @return {?}
     */
    CalendarEventTitleFormatter.prototype.dayTooltip = function (event) {
        return event.title;
    };
    return CalendarEventTitleFormatter;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CalendarEventTitlePipe = /** @class */ (function () {
    /**
     * @param {?} calendarEventTitle
     */
    function CalendarEventTitlePipe(calendarEventTitle) {
        this.calendarEventTitle = calendarEventTitle;
    }
    /**
     * @param {?} title
     * @param {?} titleType
     * @param {?} event
     * @return {?}
     */
    CalendarEventTitlePipe.prototype.transform = function (title, titleType, event) {
        return this.calendarEventTitle[titleType](event);
    };
    return CalendarEventTitlePipe;
}());
CalendarEventTitlePipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'calendarEventTitle'
            },] },
];
/** @nocollapse */
CalendarEventTitlePipe.ctorParameters = function () { return [
    { type: CalendarEventTitleFormatter, },
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ClickDirective = /** @class */ (function () {
    /**
     * @param {?} renderer
     * @param {?} elm
     */
    function ClickDirective(renderer, elm) {
        this.renderer = renderer;
        this.elm = elm;
        this.click = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    ClickDirective.prototype.ngOnInit = function () {
        var _this = this;
        var /** @type {?} */ eventName = typeof window !== 'undefined' && typeof window['Hammer'] !== 'undefined'
            ? 'tap'
            : 'click';
        this.removeListener = this.renderer.listen(this.elm.nativeElement, eventName, function (event) {
            _this.click.next(event);
        });
    };
    /**
     * @return {?}
     */
    ClickDirective.prototype.ngOnDestroy = function () {
        this.removeListener();
    };
    return ClickDirective;
}());
ClickDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[mwlClick]'
            },] },
];
/** @nocollapse */
ClickDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
]; };
ClickDirective.propDecorators = {
    "click": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"], args: ['mwlClick',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CalendarUtils = /** @class */ (function () {
    function CalendarUtils() {
    }
    /**
     * @param {?} args
     * @return {?}
     */
    CalendarUtils.prototype.getMonthView = function (args) {
        return Object(__WEBPACK_IMPORTED_MODULE_12_calendar_utils__["d" /* getMonthView */])(args);
    };
    /**
     * @param {?} args
     * @return {?}
     */
    CalendarUtils.prototype.getWeekViewHeader = function (args) {
        return Object(__WEBPACK_IMPORTED_MODULE_12_calendar_utils__["f" /* getWeekViewHeader */])(args);
    };
    /**
     * @param {?} args
     * @return {?}
     */
    CalendarUtils.prototype.getWeekView = function (args) {
        return Object(__WEBPACK_IMPORTED_MODULE_12_calendar_utils__["e" /* getWeekView */])(args);
    };
    /**
     * @param {?} args
     * @return {?}
     */
    CalendarUtils.prototype.getDayView = function (args) {
        return Object(__WEBPACK_IMPORTED_MODULE_12_calendar_utils__["b" /* getDayView */])(args);
    };
    /**
     * @param {?} args
     * @return {?}
     */
    CalendarUtils.prototype.getDayViewHourGrid = function (args) {
        return Object(__WEBPACK_IMPORTED_MODULE_12_calendar_utils__["c" /* getDayViewHourGrid */])(args);
    };
    return CalendarUtils;
}());
CalendarUtils.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
CalendarUtils.ctorParameters = function () { return []; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MOMENT = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('Moment');
/**
 * This will use <a href="http://momentjs.com/" target="_blank">moment</a> to do all date formatting. To use this class:
 *
 * ```typescript
 * import { CalendarDateFormatter, CalendarMomentDateFormatter, MOMENT } from 'angular-calendar';
 * import moment from 'moment';
 *
 * // in your component
 * provide: [{
 *   provide: MOMENT, useValue: moment
 * }, {
 *   provide: CalendarDateFormatter, useClass: CalendarMomentDateFormatter
 * }]
 *
 * ```
 */
var CalendarMomentDateFormatter = /** @class */ (function () {
    /**
     * @hidden
     * @param {?} moment
     */
    function CalendarMomentDateFormatter(moment) {
        this.moment = moment;
    }
    /**
     * The month view header week day labels
     * @param {?} __0
     * @return {?}
     */
    CalendarMomentDateFormatter.prototype.monthViewColumnHeader = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date)
            .locale(locale)
            .format('dddd');
    };
    /**
     * The month view cell day number
     * @param {?} __0
     * @return {?}
     */
    CalendarMomentDateFormatter.prototype.monthViewDayNumber = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date)
            .locale(locale)
            .format('D');
    };
    /**
     * The month view title
     * @param {?} __0
     * @return {?}
     */
    CalendarMomentDateFormatter.prototype.monthViewTitle = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date)
            .locale(locale)
            .format('MMMM YYYY');
    };
    /**
     * The week view header week day labels
     * @param {?} __0
     * @return {?}
     */
    CalendarMomentDateFormatter.prototype.weekViewColumnHeader = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date)
            .locale(locale)
            .format('dddd');
    };
    /**
     * The week view sub header day and month labels
     * @param {?} __0
     * @return {?}
     */
    CalendarMomentDateFormatter.prototype.weekViewColumnSubHeader = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date)
            .locale(locale)
            .format('D MMM');
    };
    /**
     * The week view title
     * @param {?} __0
     * @return {?}
     */
    CalendarMomentDateFormatter.prototype.weekViewTitle = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date)
            .locale(locale)
            .format('[Week] W [of] YYYY');
    };
    /**
     * The time formatting down the left hand side of the day view
     * @param {?} __0
     * @return {?}
     */
    CalendarMomentDateFormatter.prototype.dayViewHour = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date)
            .locale(locale)
            .format('ha');
    };
    /**
     * The day view title
     * @param {?} __0
     * @return {?}
     */
    CalendarMomentDateFormatter.prototype.dayViewTitle = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date)
            .locale(locale)
            .format('dddd, D MMMM, YYYY');
    };
    return CalendarMomentDateFormatter;
}());
/** @nocollapse */
CalendarMomentDateFormatter.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [MOMENT,] },] },
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * This will use <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Intl" target="_blank">Intl</a> API to do all date formatting.
 *
 * You will need to include a <a href="https://github.com/andyearnshaw/Intl.js/">polyfill</a> for older browsers.
 */
var CalendarNativeDateFormatter = /** @class */ (function () {
    function CalendarNativeDateFormatter() {
    }
    /**
     * The month view header week day labels
     * @param {?} __0
     * @return {?}
     */
    CalendarNativeDateFormatter.prototype.monthViewColumnHeader = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, { weekday: 'long' }).format(date);
    };
    /**
     * The month view cell day number
     * @param {?} __0
     * @return {?}
     */
    CalendarNativeDateFormatter.prototype.monthViewDayNumber = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, { day: 'numeric' }).format(date);
    };
    /**
     * The month view title
     * @param {?} __0
     * @return {?}
     */
    CalendarNativeDateFormatter.prototype.monthViewTitle = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, {
            year: 'numeric',
            month: 'long'
        }).format(date);
    };
    /**
     * The week view header week day labels
     * @param {?} __0
     * @return {?}
     */
    CalendarNativeDateFormatter.prototype.weekViewColumnHeader = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, { weekday: 'long' }).format(date);
    };
    /**
     * The week view sub header day and month labels
     * @param {?} __0
     * @return {?}
     */
    CalendarNativeDateFormatter.prototype.weekViewColumnSubHeader = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, {
            day: 'numeric',
            month: 'short'
        }).format(date);
    };
    /**
     * The week view title
     * @param {?} __0
     * @return {?}
     */
    CalendarNativeDateFormatter.prototype.weekViewTitle = function (_a) {
        var date = _a.date, locale = _a.locale;
        var /** @type {?} */ year = new Intl.DateTimeFormat(locale, {
            year: 'numeric'
        }).format(date);
        var /** @type {?} */ weekNumber = __WEBPACK_IMPORTED_MODULE_11_date_fns_get_iso_week_index___default()(date);
        return "Week " + weekNumber + " of " + year;
    };
    /**
     * The time formatting down the left hand side of the day view
     * @param {?} __0
     * @return {?}
     */
    CalendarNativeDateFormatter.prototype.dayViewHour = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, { hour: 'numeric' }).format(date);
    };
    /**
     * The day view title
     * @param {?} __0
     * @return {?}
     */
    CalendarNativeDateFormatter.prototype.dayViewTitle = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            weekday: 'long'
        }).format(date);
    };
    return CalendarNativeDateFormatter;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */
/**
 * Import this module to if you're just using a singular view and want to save on bundle size. Example usage:
 *
 * ```typescript
 * import { CalendarCommonModule } from 'angular-calendar/modules/common';
 * import { CalendarMonthModule } from 'angular-calendar/modules/month';
 *
 * \@NgModule({
 *   imports: [
 *     CalendarCommonModule.forRoot(),
 *     CalendarMonthModule
 *   ]
 * })
 * class MyModule {}
 * ```
 *
 */
var CalendarCommonModule = /** @class */ (function () {
    function CalendarCommonModule() {
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    CalendarCommonModule.forRoot = function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: CalendarCommonModule,
            providers: [
                __WEBPACK_IMPORTED_MODULE_1_angular_draggable_droppable__["b" /* DraggableHelper */],
                config.eventTitleFormatter || CalendarEventTitleFormatter,
                config.dateFormatter || CalendarDateFormatter,
                config.utils || CalendarUtils
            ]
        };
    };
    return CalendarCommonModule;
}());
CalendarCommonModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                declarations: [
                    CalendarEventActionsComponent,
                    CalendarEventTitleComponent,
                    CalendarTooltipWindowComponent,
                    CalendarTooltipDirective,
                    CalendarPreviousViewDirective,
                    CalendarNextViewDirective,
                    CalendarTodayDirective,
                    CalendarDatePipe,
                    CalendarEventTitlePipe,
                    ClickDirective
                ],
                imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"]],
                exports: [
                    CalendarEventActionsComponent,
                    CalendarEventTitleComponent,
                    CalendarTooltipWindowComponent,
                    CalendarTooltipDirective,
                    CalendarPreviousViewDirective,
                    CalendarNextViewDirective,
                    CalendarTodayDirective,
                    CalendarDatePipe,
                    CalendarEventTitlePipe,
                    ClickDirective
                ],
                entryComponents: [CalendarTooltipWindowComponent]
            },] },
];
/** @nocollapse */
CalendarCommonModule.ctorParameters = function () { return []; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var validateEvents$1 = function (events) {
    var /** @type {?} */ warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return console.warn.apply(console, ['angular-calendar'].concat(args));
    };
    return Object(__WEBPACK_IMPORTED_MODULE_12_calendar_utils__["g" /* validateEvents */])(events, warn);
};
/**
 * @param {?} outer
 * @param {?} inner
 * @return {?}
 */
function isInside(outer, inner) {
    return (outer.left <= inner.left &&
        inner.left <= outer.right &&
        outer.left <= inner.right &&
        inner.right <= outer.right &&
        outer.top <= inner.top &&
        inner.top <= outer.bottom &&
        outer.top <= inner.bottom &&
        inner.bottom <= outer.bottom);
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */
/**
 * Shows all events on a given month. Example usage:
 *
 * ```typescript
 * <mwl-calendar-month-view
 *  [viewDate]="viewDate"
 *  [events]="events">
 * </mwl-calendar-month-view>
 * ```
 */
var CalendarMonthViewComponent = /** @class */ (function () {
    /**
     * @hidden
     * @param {?} cdr
     * @param {?} utils
     * @param {?} locale
     */
    function CalendarMonthViewComponent(cdr, utils, locale) {
        this.cdr = cdr;
        this.utils = utils;
        /**
         * An array of events to display on view.
         * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
         */
        this.events = [];
        /**
         * An array of day indexes (0 = sunday, 1 = monday etc) that will be hidden on the view
         */
        this.excludeDays = [];
        /**
         * Whether the events list for the day of the `viewDate` option is visible or not
         */
        this.activeDayIsOpen = false;
        /**
         * The placement of the event tooltip
         */
        this.tooltipPlacement = 'top';
        /**
         * Whether to append tooltips to the body or next to the trigger element
         */
        this.tooltipAppendToBody = true;
        /**
         * An output that will be called before the view is rendered for the current month.
         * If you add the `cssClass` property to a day in the body it will add that class to the cell element in the template
         */
        this.beforeViewRender = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Called when the day cell is clicked
         */
        this.dayClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Called when the event title is clicked
         */
        this.eventClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Called when an event is dragged and dropped
         */
        this.eventTimesChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.locale = locale;
    }
    /**
     * @hidden
     * @return {?}
     */
    CalendarMonthViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.refresh) {
            this.refreshSubscription = this.refresh.subscribe(function () {
                _this.refreshAll();
                _this.cdr.markForCheck();
            });
        }
    };
    /**
     * @hidden
     * @param {?} changes
     * @return {?}
     */
    CalendarMonthViewComponent.prototype.ngOnChanges = function (changes) {
        if (changes.viewDate || changes.excludeDays || changes.weekendDays) {
            this.refreshHeader();
        }
        if (changes.events) {
            validateEvents$1(this.events);
        }
        if (changes.viewDate ||
            changes.events ||
            changes.excludeDays ||
            changes.weekendDays) {
            this.refreshBody();
        }
        if (changes.activeDayIsOpen ||
            changes.viewDate ||
            changes.events ||
            changes.excludeDays) {
            this.checkActiveDayIsOpen();
        }
    };
    /**
     * @hidden
     * @return {?}
     */
    CalendarMonthViewComponent.prototype.ngOnDestroy = function () {
        if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
        }
    };
    /**
     * @hidden
     * @param {?} event
     * @param {?} isHighlighted
     * @return {?}
     */
    CalendarMonthViewComponent.prototype.toggleDayHighlight = function (event, isHighlighted) {
        this.view.days.forEach(function (day) {
            if (isHighlighted && day.events.indexOf(event) > -1) {
                day.backgroundColor = event.color.secondary;
            }
            else {
                delete day.backgroundColor;
            }
        });
    };
    /**
     * @hidden
     * @param {?} day
     * @param {?} event
     * @return {?}
     */
    CalendarMonthViewComponent.prototype.eventDropped = function (day, event) {
        var /** @type {?} */ year = __WEBPACK_IMPORTED_MODULE_20_date_fns_get_year_index___default()(day.date);
        var /** @type {?} */ month = __WEBPACK_IMPORTED_MODULE_19_date_fns_get_month_index___default()(day.date);
        var /** @type {?} */ date = __WEBPACK_IMPORTED_MODULE_18_date_fns_get_date_index___default()(day.date);
        var /** @type {?} */ newStart = __WEBPACK_IMPORTED_MODULE_15_date_fns_set_date_index___default()(__WEBPACK_IMPORTED_MODULE_16_date_fns_set_month_index___default()(__WEBPACK_IMPORTED_MODULE_17_date_fns_set_year_index___default()(event.start, year), month), date);
        var /** @type {?} */ newEnd;
        if (event.end) {
            var /** @type {?} */ secondsDiff = __WEBPACK_IMPORTED_MODULE_21_date_fns_difference_in_seconds_index___default()(newStart, event.start);
            newEnd = __WEBPACK_IMPORTED_MODULE_22_date_fns_add_seconds_index___default()(event.end, secondsDiff);
        }
        this.eventTimesChanged.emit({ event: event, newStart: newStart, newEnd: newEnd });
    };
    /**
     * @hidden
     * @param {?} clickEvent
     * @param {?} day
     * @return {?}
     */
    CalendarMonthViewComponent.prototype.handleDayClick = function (clickEvent, day) {
        // when using hammerjs, stopPropagation doesn't work. See https://github.com/mattlewis92/angular-calendar/issues/318
        if (!clickEvent.target.classList.contains('cal-event')) {
            this.dayClicked.emit({ day: day });
        }
    };
    /**
     * @return {?}
     */
    CalendarMonthViewComponent.prototype.refreshHeader = function () {
        this.columnHeaders = this.utils.getWeekViewHeader({
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
            weekendDays: this.weekendDays
        });
        this.emitBeforeViewRender();
    };
    /**
     * @return {?}
     */
    CalendarMonthViewComponent.prototype.refreshBody = function () {
        this.view = this.utils.getMonthView({
            events: this.events,
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
            weekendDays: this.weekendDays
        });
        this.emitBeforeViewRender();
    };
    /**
     * @return {?}
     */
    CalendarMonthViewComponent.prototype.checkActiveDayIsOpen = function () {
        var _this = this;
        if (this.activeDayIsOpen === true) {
            this.openDay = this.view.days.find(function (day) { return __WEBPACK_IMPORTED_MODULE_14_date_fns_is_same_day_index___default()(day.date, _this.viewDate); });
            var /** @type {?} */ index = this.view.days.indexOf(this.openDay);
            this.openRowIndex =
                Math.floor(index / this.view.totalDaysVisibleInWeek) *
                    this.view.totalDaysVisibleInWeek;
        }
        else {
            this.openRowIndex = null;
            this.openDay = null;
        }
    };
    /**
     * @return {?}
     */
    CalendarMonthViewComponent.prototype.refreshAll = function () {
        this.columnHeaders = null;
        this.view = null;
        this.refreshHeader();
        this.refreshBody();
        this.checkActiveDayIsOpen();
    };
    /**
     * @return {?}
     */
    CalendarMonthViewComponent.prototype.emitBeforeViewRender = function () {
        if (this.columnHeaders && this.view) {
            this.beforeViewRender.emit({
                header: this.columnHeaders,
                body: this.view.days,
                period: this.view.period
            });
        }
    };
    return CalendarMonthViewComponent;
}());
CalendarMonthViewComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'mwl-calendar-month-view',
                template: "\n    <div class=\"cal-month-view\">\n      <mwl-calendar-month-view-header\n        [days]=\"columnHeaders\"\n        [locale]=\"locale\"\n        [customTemplate]=\"headerTemplate\">\n      </mwl-calendar-month-view-header>\n      <div class=\"cal-days\">\n        <div *ngFor=\"let rowIndex of view.rowOffsets\">\n          <div class=\"cal-cell-row\">\n            <mwl-calendar-month-cell\n              *ngFor=\"let day of view.days | slice : rowIndex : rowIndex + (view.totalDaysVisibleInWeek)\"\n              [class.cal-drag-over]=\"day.dragOver\"\n              [ngClass]=\"day?.cssClass\"\n              [day]=\"day\"\n              [openDay]=\"openDay\"\n              [locale]=\"locale\"\n              [tooltipPlacement]=\"tooltipPlacement\"\n              [tooltipAppendToBody]=\"tooltipAppendToBody\"\n              [tooltipTemplate]=\"tooltipTemplate\"\n              [customTemplate]=\"cellTemplate\"\n              (click)=\"handleDayClick($event, day)\"\n              (highlightDay)=\"toggleDayHighlight($event.event, true)\"\n              (unhighlightDay)=\"toggleDayHighlight($event.event, false)\"\n              mwlDroppable\n              (dragEnter)=\"day.dragOver = true\"\n              (dragLeave)=\"day.dragOver = false\"\n              (drop)=\"day.dragOver = false; eventDropped(day, $event.dropData.event)\"\n              (eventClicked)=\"eventClicked.emit({event: $event.event})\">\n            </mwl-calendar-month-cell>\n          </div>\n          <mwl-calendar-open-day-events\n            [isOpen]=\"openRowIndex === rowIndex\"\n            [events]=\"openDay?.events\"\n            [customTemplate]=\"openDayEventsTemplate\"\n            [eventTitleTemplate]=\"eventTitleTemplate\"\n            (eventClicked)=\"eventClicked.emit({event: $event.event})\">\n          </mwl-calendar-open-day-events>\n        </div>\n      </div>\n    </div>\n  "
            },] },
];
/** @nocollapse */
CalendarMonthViewComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
    { type: CalendarUtils, },
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"],] },] },
]; };
CalendarMonthViewComponent.propDecorators = {
    "viewDate": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "events": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "excludeDays": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "activeDayIsOpen": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "refresh": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "locale": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "tooltipPlacement": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "tooltipTemplate": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "tooltipAppendToBody": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "weekStartsOn": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "headerTemplate": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "cellTemplate": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "openDayEventsTemplate": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "eventTitleTemplate": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "weekendDays": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "beforeViewRender": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    "dayClicked": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    "eventClicked": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    "eventTimesChanged": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CalendarMonthViewHeaderComponent = /** @class */ (function () {
    function CalendarMonthViewHeaderComponent() {
    }
    return CalendarMonthViewHeaderComponent;
}());
CalendarMonthViewHeaderComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'mwl-calendar-month-view-header',
                template: "\n    <ng-template\n      #defaultTemplate\n      let-days=\"days\"\n      let-locale=\"locale\">\n      <div class=\"cal-cell-row cal-header\">\n        <div\n          class=\"cal-cell\"\n          *ngFor=\"let day of days\"\n          [class.cal-past]=\"day.isPast\"\n          [class.cal-today]=\"day.isToday\"\n          [class.cal-future]=\"day.isFuture\"\n          [class.cal-weekend]=\"day.isWeekend\"\n          [ngClass]=\"day.cssClass\">\n          {{ day.date | calendarDate:'monthViewColumnHeader':locale }}\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{days: days, locale: locale}\">\n    </ng-template>\n  "
            },] },
];
/** @nocollapse */
CalendarMonthViewHeaderComponent.ctorParameters = function () { return []; };
CalendarMonthViewHeaderComponent.propDecorators = {
    "days": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "locale": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "customTemplate": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CalendarMonthCellComponent = /** @class */ (function () {
    function CalendarMonthCellComponent() {
        this.highlightDay = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.unhighlightDay = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.eventClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    return CalendarMonthCellComponent;
}());
CalendarMonthCellComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'mwl-calendar-month-cell',
                template: "\n    <ng-template\n      #defaultTemplate\n      let-day=\"day\"\n      let-openDay=\"openDay\"\n      let-locale=\"locale\"\n      let-tooltipPlacement=\"tooltipPlacement\"\n      let-highlightDay=\"highlightDay\"\n      let-unhighlightDay=\"unhighlightDay\"\n      let-eventClicked=\"eventClicked\"\n      let-tooltipTemplate=\"tooltipTemplate\"\n      let-tooltipAppendToBody=\"tooltipAppendToBody\">\n      <div class=\"cal-cell-top\">\n        <span class=\"cal-day-badge\" *ngIf=\"day.badgeTotal > 0\">{{ day.badgeTotal }}</span>\n        <span class=\"cal-day-number\">{{ day.date | calendarDate:'monthViewDayNumber':locale }}</span>\n      </div>\n      <div class=\"cal-events\" *ngIf=\"day.events.length > 0\">\n        <div\n          class=\"cal-event\"\n          *ngFor=\"let event of day.events\"\n          [style.backgroundColor]=\"event.color.primary\"\n          [ngClass]=\"event?.cssClass\"\n          (mouseenter)=\"highlightDay.emit({event: event})\"\n          (mouseleave)=\"unhighlightDay.emit({event: event})\"\n          [mwlCalendarTooltip]=\"event.title | calendarEventTitle:'monthTooltip':event\"\n          [tooltipPlacement]=\"tooltipPlacement\"\n          [tooltipEvent]=\"event\"\n          [tooltipTemplate]=\"tooltipTemplate\"\n          [tooltipAppendToBody]=\"tooltipAppendToBody\"\n          mwlDraggable\n          [dropData]=\"{event: event}\"\n          [dragAxis]=\"{x: event.draggable, y: event.draggable}\"\n          (mwlClick)=\"eventClicked.emit({ event: event })\">\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        day: day,\n        openDay: openDay,\n        locale: locale,\n        tooltipPlacement: tooltipPlacement,\n        highlightDay: highlightDay,\n        unhighlightDay: unhighlightDay,\n        eventClicked: eventClicked,\n        tooltipTemplate: tooltipTemplate,\n        tooltipAppendToBody: tooltipAppendToBody\n      }\">\n    </ng-template>\n  ",
                host: {
                    class: 'cal-cell cal-day-cell',
                    '[class.cal-past]': 'day.isPast',
                    '[class.cal-today]': 'day.isToday',
                    '[class.cal-future]': 'day.isFuture',
                    '[class.cal-weekend]': 'day.isWeekend',
                    '[class.cal-in-month]': 'day.inMonth',
                    '[class.cal-out-month]': '!day.inMonth',
                    '[class.cal-has-events]': 'day.events.length > 0',
                    '[class.cal-open]': 'day === openDay',
                    '[style.backgroundColor]': 'day.backgroundColor'
                }
            },] },
];
/** @nocollapse */
CalendarMonthCellComponent.ctorParameters = function () { return []; };
CalendarMonthCellComponent.propDecorators = {
    "day": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "openDay": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "locale": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "tooltipPlacement": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "tooltipAppendToBody": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "customTemplate": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "tooltipTemplate": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "highlightDay": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    "unhighlightDay": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    "eventClicked": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CalendarOpenDayEventsComponent = /** @class */ (function () {
    function CalendarOpenDayEventsComponent() {
        this.isOpen = false;
        this.eventClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    return CalendarOpenDayEventsComponent;
}());
CalendarOpenDayEventsComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'mwl-calendar-open-day-events',
                template: "\n    <ng-template\n      #defaultTemplate\n      let-events=\"events\"\n      let-eventClicked=\"eventClicked\">\n      <div\n        *ngFor=\"let event of events\"\n        [ngClass]=\"event?.cssClass\"\n        mwlDraggable\n        [dropData]=\"{event: event}\"\n        [dragAxis]=\"{x: event.draggable, y: event.draggable}\">\n        <span\n          class=\"cal-event\"\n          [style.backgroundColor]=\"event.color.primary\">\n        </span>\n        <mwl-calendar-event-title\n          [event]=\"event\"\n          [customTemplate]=\"eventTitleTemplate\"\n          view=\"month\"\n          (mwlClick)=\"eventClicked.emit({event: event})\">\n        </mwl-calendar-event-title>\n        <mwl-calendar-event-actions [event]=\"event\"></mwl-calendar-event-actions>\n      </div>\n    </ng-template>\n    <div class=\"cal-open-day-events\" [@collapse] *ngIf=\"isOpen\">\n      <ng-template\n        [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n        [ngTemplateOutletContext]=\"{\n          events: events,\n          eventClicked: eventClicked\n        }\">\n      </ng-template>\n    </div>\n  ",
                animations: [
                    Object(__WEBPACK_IMPORTED_MODULE_23__angular_animations__["trigger"])('collapse', [
                        Object(__WEBPACK_IMPORTED_MODULE_23__angular_animations__["transition"])('void => *', [
                            Object(__WEBPACK_IMPORTED_MODULE_23__angular_animations__["style"])({ height: 0, overflow: 'hidden' }),
                            Object(__WEBPACK_IMPORTED_MODULE_23__angular_animations__["animate"])('150ms', Object(__WEBPACK_IMPORTED_MODULE_23__angular_animations__["style"])({ height: '*' }))
                        ]),
                        Object(__WEBPACK_IMPORTED_MODULE_23__angular_animations__["transition"])('* => void', [
                            Object(__WEBPACK_IMPORTED_MODULE_23__angular_animations__["style"])({ height: '*', overflow: 'hidden' }),
                            Object(__WEBPACK_IMPORTED_MODULE_23__angular_animations__["animate"])('150ms', Object(__WEBPACK_IMPORTED_MODULE_23__angular_animations__["style"])({ height: 0 }))
                        ])
                    ])
                ]
            },] },
];
/** @nocollapse */
CalendarOpenDayEventsComponent.ctorParameters = function () { return []; };
CalendarOpenDayEventsComponent.propDecorators = {
    "isOpen": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "events": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "customTemplate": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "eventTitleTemplate": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "eventClicked": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CalendarMonthModule = /** @class */ (function () {
    function CalendarMonthModule() {
    }
    return CalendarMonthModule;
}());
CalendarMonthModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_1_angular_draggable_droppable__["a" /* DragAndDropModule */], CalendarCommonModule],
                declarations: [
                    CalendarMonthViewComponent,
                    CalendarMonthCellComponent,
                    CalendarOpenDayEventsComponent,
                    CalendarMonthViewHeaderComponent
                ],
                exports: [
                    __WEBPACK_IMPORTED_MODULE_1_angular_draggable_droppable__["a" /* DragAndDropModule */],
                    CalendarMonthViewComponent,
                    CalendarMonthCellComponent,
                    CalendarOpenDayEventsComponent,
                    CalendarMonthViewHeaderComponent
                ]
            },] },
];
/** @nocollapse */
CalendarMonthModule.ctorParameters = function () { return []; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CalendarDragHelper = /** @class */ (function () {
    /**
     * @param {?} dragContainerElement
     * @param {?} draggableElement
     */
    function CalendarDragHelper(dragContainerElement, draggableElement) {
        this.dragContainerElement = dragContainerElement;
        this.startPosition = draggableElement.getBoundingClientRect();
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    CalendarDragHelper.prototype.validateDrag = function (_a) {
        var x = _a.x, y = _a.y;
        var /** @type {?} */ newRect = Object.assign({}, this.startPosition, {
            left: this.startPosition.left + x,
            right: this.startPosition.right + x,
            top: this.startPosition.top + y,
            bottom: this.startPosition.bottom + y
        });
        return isInside(this.dragContainerElement.getBoundingClientRect(), newRect);
    };
    return CalendarDragHelper;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CalendarResizeHelper = /** @class */ (function () {
    /**
     * @param {?} resizeContainerElement
     * @param {?=} minWidth
     */
    function CalendarResizeHelper(resizeContainerElement, minWidth) {
        this.resizeContainerElement = resizeContainerElement;
        this.minWidth = minWidth;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    CalendarResizeHelper.prototype.validateResize = function (_a) {
        var rectangle = _a.rectangle;
        if (this.minWidth && rectangle.width < this.minWidth) {
            return false;
        }
        return isInside(this.resizeContainerElement.getBoundingClientRect(), rectangle);
    };
    return CalendarResizeHelper;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */
/**
 * @record
 */
/**
 * Shows all events on a given week. Example usage:
 *
 * ```typescript
 * <mwl-calendar-week-view
 *  [viewDate]="viewDate"
 *  [events]="events">
 * </mwl-calendar-week-view>
 * ```
 */
var CalendarWeekViewComponent = /** @class */ (function () {
    /**
     * @hidden
     * @param {?} cdr
     * @param {?} utils
     * @param {?} locale
     */
    function CalendarWeekViewComponent(cdr, utils, locale) {
        this.cdr = cdr;
        this.utils = utils;
        /**
         * An array of events to display on view
         * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
         */
        this.events = [];
        /**
         * An array of day indexes (0 = sunday, 1 = monday etc) that will be hidden on the view
         */
        this.excludeDays = [];
        /**
         * The placement of the event tooltip
         */
        this.tooltipPlacement = 'bottom';
        /**
         * Whether to append tooltips to the body or next to the trigger element
         */
        this.tooltipAppendToBody = true;
        /**
         * The precision to display events.
         * `days` will round event start and end dates to the nearest day and `minutes` will not do this rounding
         */
        this.precision = 'days';
        /**
         * Called when a header week day is clicked. Adding a `cssClass` property on `$event.day` will add that class to the header element
         */
        this.dayHeaderClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Called when the event title is clicked
         */
        this.eventClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Called when an event is resized or dragged and dropped
         */
        this.eventTimesChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * An output that will be called before the view is rendered for the current week.
         * If you add the `cssClass` property to a day in the header it will add that class to the cell element in the template
         */
        this.beforeViewRender = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * @hidden
         */
        this.currentResizes = new Map();
        this.locale = locale;
    }
    /**
     * @hidden
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.refresh) {
            this.refreshSubscription = this.refresh.subscribe(function () {
                _this.refreshAll();
                _this.cdr.markForCheck();
            });
        }
    };
    /**
     * @hidden
     * @param {?} changes
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.ngOnChanges = function (changes) {
        if (changes.viewDate || changes.excludeDays || changes.weekendDays) {
            this.refreshHeader();
        }
        if (changes.events) {
            validateEvents$1(this.events);
        }
        if (changes.events || changes.viewDate || changes.excludeDays) {
            this.refreshBody();
        }
    };
    /**
     * @hidden
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.ngOnDestroy = function () {
        if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
        }
    };
    /**
     * @hidden
     * @param {?} weekViewContainer
     * @param {?} weekEvent
     * @param {?} resizeEvent
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.resizeStarted = function (weekViewContainer, weekEvent, resizeEvent) {
        this.currentResizes.set(weekEvent, {
            originalOffset: weekEvent.offset,
            originalSpan: weekEvent.span,
            edge: typeof resizeEvent.edges.left !== 'undefined' ? 'left' : 'right'
        });
        this.dayColumnWidth = this.getDayColumnWidth(weekViewContainer);
        var /** @type {?} */ resizeHelper = new CalendarResizeHelper(weekViewContainer, this.dayColumnWidth);
        this.validateResize = function (_a) {
            var rectangle = _a.rectangle;
            return resizeHelper.validateResize({ rectangle: rectangle });
        };
        this.cdr.markForCheck();
    };
    /**
     * @hidden
     * @param {?} weekEvent
     * @param {?} resizeEvent
     * @param {?} dayWidth
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.resizing = function (weekEvent, resizeEvent, dayWidth) {
        var /** @type {?} */ currentResize = this.currentResizes.get(weekEvent);
        if (resizeEvent.edges.left) {
            var /** @type {?} */ diff = Math.round(+resizeEvent.edges.left / dayWidth);
            weekEvent.offset = currentResize.originalOffset + diff;
            weekEvent.span = currentResize.originalSpan - diff;
        }
        else if (resizeEvent.edges.right) {
            var /** @type {?} */ diff = Math.round(+resizeEvent.edges.right / dayWidth);
            weekEvent.span = currentResize.originalSpan + diff;
        }
    };
    /**
     * @hidden
     * @param {?} weekEvent
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.resizeEnded = function (weekEvent) {
        var /** @type {?} */ currentResize = this.currentResizes.get(weekEvent);
        var /** @type {?} */ daysDiff;
        if (currentResize.edge === 'left') {
            daysDiff = weekEvent.offset - currentResize.originalOffset;
        }
        else {
            daysDiff = weekEvent.span - currentResize.originalSpan;
        }
        weekEvent.offset = currentResize.originalOffset;
        weekEvent.span = currentResize.originalSpan;
        var /** @type {?} */ newStart = weekEvent.event.start;
        var /** @type {?} */ newEnd = weekEvent.event.end;
        if (currentResize.edge === 'left') {
            newStart = __WEBPACK_IMPORTED_MODULE_7_date_fns_add_days_index___default()(newStart, daysDiff);
        }
        else if (newEnd) {
            newEnd = __WEBPACK_IMPORTED_MODULE_7_date_fns_add_days_index___default()(newEnd, daysDiff);
        }
        this.eventTimesChanged.emit({ newStart: newStart, newEnd: newEnd, event: weekEvent.event });
        this.currentResizes.delete(weekEvent);
    };
    /**
     * @hidden
     * @param {?} weekEvent
     * @param {?} draggedByPx
     * @param {?} dayWidth
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.eventDragged = function (weekEvent, draggedByPx, dayWidth) {
        var /** @type {?} */ daysDragged = draggedByPx / dayWidth;
        var /** @type {?} */ newStart = __WEBPACK_IMPORTED_MODULE_7_date_fns_add_days_index___default()(weekEvent.event.start, daysDragged);
        var /** @type {?} */ newEnd;
        if (weekEvent.event.end) {
            newEnd = __WEBPACK_IMPORTED_MODULE_7_date_fns_add_days_index___default()(weekEvent.event.end, daysDragged);
        }
        this.eventTimesChanged.emit({ newStart: newStart, newEnd: newEnd, event: weekEvent.event });
    };
    /**
     * @hidden
     * @param {?} eventRowContainer
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.getDayColumnWidth = function (eventRowContainer) {
        return Math.floor(eventRowContainer.offsetWidth / this.days.length);
    };
    /**
     * @hidden
     * @param {?} weekViewContainer
     * @param {?} event
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.dragStart = function (weekViewContainer, event) {
        var _this = this;
        this.dayColumnWidth = this.getDayColumnWidth(weekViewContainer);
        var /** @type {?} */ dragHelper = new CalendarDragHelper(weekViewContainer, event);
        this.validateDrag = function (_a) {
            var x = _a.x, y = _a.y;
            return _this.currentResizes.size === 0 && dragHelper.validateDrag({ x: x, y: y });
        };
        this.cdr.markForCheck();
    };
    /**
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.refreshHeader = function () {
        this.days = this.utils.getWeekViewHeader({
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
            weekendDays: this.weekendDays
        });
        this.emitBeforeViewRender();
    };
    /**
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.refreshBody = function () {
        this.view = this.utils.getWeekView({
            events: this.events,
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
            precision: this.precision,
            absolutePositionedEvents: true
        });
        this.emitBeforeViewRender();
    };
    /**
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.refreshAll = function () {
        this.refreshHeader();
        this.refreshBody();
    };
    /**
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.emitBeforeViewRender = function () {
        if (this.days && this.view) {
            this.beforeViewRender.emit({
                header: this.days,
                period: this.view.period
            });
        }
    };
    return CalendarWeekViewComponent;
}());
CalendarWeekViewComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'mwl-calendar-week-view',
                template: "\n    <div class=\"cal-week-view\" #weekViewContainer>\n      <mwl-calendar-week-view-header\n        [days]=\"days\"\n        [locale]=\"locale\"\n        [customTemplate]=\"headerTemplate\"\n        (dayHeaderClicked)=\"dayHeaderClicked.emit($event)\"\n        (eventDropped)=\"eventTimesChanged.emit($event)\">\n      </mwl-calendar-week-view-header>\n      <div *ngFor=\"let eventRow of view.eventRows\" #eventRowContainer class=\"cal-events-row\">\n        <div\n          *ngFor=\"let weekEvent of eventRow.row\"\n          #event\n          class=\"cal-event-container\"\n          [class.cal-draggable]=\"weekEvent.event.draggable\"\n          [class.cal-starts-within-week]=\"!weekEvent.startsBeforeWeek\"\n          [class.cal-ends-within-week]=\"!weekEvent.endsAfterWeek\"\n          [ngClass]=\"weekEvent.event?.cssClass\"\n          [style.width]=\"((100 / days.length) * weekEvent.span) + '%'\"\n          [style.marginLeft]=\"((100 / days.length) * weekEvent.offset) + '%'\"\n          mwlResizable\n          [resizeEdges]=\"{left: weekEvent.event?.resizable?.beforeStart, right: weekEvent.event?.resizable?.afterEnd}\"\n          [resizeSnapGrid]=\"{left: dayColumnWidth, right: dayColumnWidth}\"\n          [validateResize]=\"validateResize\"\n          (resizeStart)=\"resizeStarted(weekViewContainer, weekEvent, $event)\"\n          (resizing)=\"resizing(weekEvent, $event, dayColumnWidth)\"\n          (resizeEnd)=\"resizeEnded(weekEvent)\"\n          mwlDraggable\n          [dragAxis]=\"{x: weekEvent.event.draggable && currentResizes.size === 0, y: false}\"\n          [dragSnapGrid]=\"{x: dayColumnWidth}\"\n          [validateDrag]=\"validateDrag\"\n          (dragPointerDown)=\"dragStart(weekViewContainer, event)\"\n          (dragEnd)=\"eventDragged(weekEvent, $event.x, dayColumnWidth)\">\n          <mwl-calendar-week-view-event\n            [weekEvent]=\"weekEvent\"\n            [tooltipPlacement]=\"tooltipPlacement\"\n            [tooltipTemplate]=\"tooltipTemplate\"\n            [tooltipAppendToBody]=\"tooltipAppendToBody\"\n            [customTemplate]=\"eventTemplate\"\n            [eventTitleTemplate]=\"eventTitleTemplate\"\n            (eventClicked)=\"eventClicked.emit({event: weekEvent.event})\">\n          </mwl-calendar-week-view-event>\n        </div>\n      </div>\n    </div>\n  "
            },] },
];
/** @nocollapse */
CalendarWeekViewComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
    { type: CalendarUtils, },
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"],] },] },
]; };
CalendarWeekViewComponent.propDecorators = {
    "viewDate": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "events": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "excludeDays": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "refresh": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "locale": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "tooltipPlacement": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "tooltipTemplate": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "tooltipAppendToBody": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "weekStartsOn": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "headerTemplate": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "eventTemplate": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "eventTitleTemplate": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "precision": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "weekendDays": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "dayHeaderClicked": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    "eventClicked": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    "eventTimesChanged": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    "beforeViewRender": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CalendarWeekViewHeaderComponent = /** @class */ (function () {
    function CalendarWeekViewHeaderComponent() {
        this.dayHeaderClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.eventDropped = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    return CalendarWeekViewHeaderComponent;
}());
CalendarWeekViewHeaderComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'mwl-calendar-week-view-header',
                template: "\n    <ng-template\n      #defaultTemplate\n      let-days=\"days\"\n      let-locale=\"locale\"\n      let-dayHeaderClicked=\"dayHeaderClicked\"\n      let-eventDropped=\"eventDropped\">\n      <div class=\"cal-day-headers\">\n        <div\n          class=\"cal-header\"\n          *ngFor=\"let day of days\"\n          [class.cal-past]=\"day.isPast\"\n          [class.cal-today]=\"day.isToday\"\n          [class.cal-future]=\"day.isFuture\"\n          [class.cal-weekend]=\"day.isWeekend\"\n          [class.cal-drag-over]=\"day.dragOver\"\n          [ngClass]=\"day.cssClass\"\n          (mwlClick)=\"dayHeaderClicked.emit({day: day})\"\n          mwlDroppable\n          (dragEnter)=\"day.dragOver = true\"\n          (dragLeave)=\"day.dragOver = false\"\n          (drop)=\"day.dragOver = false; eventDropped.emit({event: $event.dropData.event, newStart: day.date})\">\n          <b>{{ day.date | calendarDate:'weekViewColumnHeader':locale }}</b><br>\n          <span>{{ day.date | calendarDate:'weekViewColumnSubHeader':locale }}</span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{days: days, locale: locale, dayHeaderClicked: dayHeaderClicked, eventDropped: eventDropped}\">\n    </ng-template>\n  "
            },] },
];
/** @nocollapse */
CalendarWeekViewHeaderComponent.ctorParameters = function () { return []; };
CalendarWeekViewHeaderComponent.propDecorators = {
    "days": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "locale": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "customTemplate": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "dayHeaderClicked": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    "eventDropped": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CalendarWeekViewEventComponent = /** @class */ (function () {
    function CalendarWeekViewEventComponent() {
        this.eventClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    return CalendarWeekViewEventComponent;
}());
CalendarWeekViewEventComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'mwl-calendar-week-view-event',
                template: "\n    <ng-template\n      #defaultTemplate\n      let-weekEvent=\"weekEvent\"\n      let-tooltipPlacement=\"tooltipPlacement\"\n      let-eventClicked=\"eventClicked\"\n      let-tooltipTemplate=\"tooltipTemplate\"\n      let-tooltipAppendToBody=\"tooltipAppendToBody\">\n      <div\n        class=\"cal-event\"\n        [style.backgroundColor]=\"weekEvent.event.color.secondary\"\n        [mwlCalendarTooltip]=\"weekEvent.event.title | calendarEventTitle:'weekTooltip':weekEvent.event\"\n        [tooltipPlacement]=\"tooltipPlacement\"\n        [tooltipEvent]=\"weekEvent.event\"\n        [tooltipTemplate]=\"tooltipTemplate\"\n        [tooltipAppendToBody]=\"tooltipAppendToBody\">\n        <mwl-calendar-event-actions [event]=\"weekEvent.event\"></mwl-calendar-event-actions>\n        <mwl-calendar-event-title\n          [event]=\"weekEvent.event\"\n          [customTemplate]=\"eventTitleTemplate\"\n          view=\"week\"\n          (mwlClick)=\"eventClicked.emit()\">\n        </mwl-calendar-event-title>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        weekEvent: weekEvent,\n        tooltipPlacement: tooltipPlacement,\n        eventClicked: eventClicked,\n        tooltipTemplate: tooltipTemplate,\n        tooltipAppendToBody: tooltipAppendToBody\n      }\">\n    </ng-template>\n  "
            },] },
];
/** @nocollapse */
CalendarWeekViewEventComponent.ctorParameters = function () { return []; };
CalendarWeekViewEventComponent.propDecorators = {
    "weekEvent": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "tooltipPlacement": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "tooltipAppendToBody": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "customTemplate": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "eventTitleTemplate": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "tooltipTemplate": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "eventClicked": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CalendarWeekModule = /** @class */ (function () {
    function CalendarWeekModule() {
    }
    return CalendarWeekModule;
}());
CalendarWeekModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                imports: [
                    __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                    __WEBPACK_IMPORTED_MODULE_24_angular_resizable_element__["a" /* ResizableModule */],
                    __WEBPACK_IMPORTED_MODULE_1_angular_draggable_droppable__["a" /* DragAndDropModule */],
                    CalendarCommonModule
                ],
                declarations: [
                    CalendarWeekViewComponent,
                    CalendarWeekViewHeaderComponent,
                    CalendarWeekViewEventComponent
                ],
                exports: [
                    __WEBPACK_IMPORTED_MODULE_24_angular_resizable_element__["a" /* ResizableModule */],
                    __WEBPACK_IMPORTED_MODULE_1_angular_draggable_droppable__["a" /* DragAndDropModule */],
                    CalendarWeekViewComponent,
                    CalendarWeekViewHeaderComponent,
                    CalendarWeekViewEventComponent
                ]
            },] },
];
/** @nocollapse */
CalendarWeekModule.ctorParameters = function () { return []; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */
/**
 * @hidden
 */
var MINUTES_IN_HOUR = 60;
/**
 * @hidden
 * @record
 */
/**
 * Shows all events on a given day. Example usage:
 *
 * ```typescript
 * <mwl-calendar-day-view
 *  [viewDate]="viewDate"
 *  [events]="events">
 * </mwl-calendar-day-view>
 * ```
 */
var CalendarDayViewComponent = /** @class */ (function () {
    /**
     * @hidden
     * @param {?} cdr
     * @param {?} utils
     * @param {?} locale
     */
    function CalendarDayViewComponent(cdr, utils, locale) {
        this.cdr = cdr;
        this.utils = utils;
        /**
         * An array of events to display on view
         * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
         */
        this.events = [];
        /**
         * The number of segments in an hour. Must be <= 6
         */
        this.hourSegments = 2;
        /**
         * The height in pixels of each hour segment
         */
        this.hourSegmentHeight = 30;
        /**
         * The day start hours in 24 hour time. Must be 0-23
         */
        this.dayStartHour = 0;
        /**
         * The day start minutes. Must be 0-59
         */
        this.dayStartMinute = 0;
        /**
         * The day end hours in 24 hour time. Must be 0-23
         */
        this.dayEndHour = 23;
        /**
         * The day end minutes. Must be 0-59
         */
        this.dayEndMinute = 59;
        /**
         * The width in pixels of each event on the view
         */
        this.eventWidth = 150;
        /**
         * The grid size to snap resizing and dragging of events to
         */
        this.eventSnapSize = this.hourSegmentHeight;
        /**
         * The placement of the event tooltip
         */
        this.tooltipPlacement = 'top';
        /**
         * Whether to append tooltips to the body or next to the trigger element
         */
        this.tooltipAppendToBody = true;
        /**
         * Called when an event title is clicked
         */
        this.eventClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Called when an hour segment is clicked
         */
        this.hourSegmentClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Called when an event is resized or dragged and dropped
         */
        this.eventTimesChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * An output that will be called before the view is rendered for the current day.
         * If you add the `cssClass` property to an hour grid segment it will add that class to the hour segment in the template
         */
        this.beforeViewRender = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * @hidden
         */
        this.hours = [];
        /**
         * @hidden
         */
        this.width = 0;
        /**
         * @hidden
         */
        this.currentResizes = new Map();
        this.locale = locale;
    }
    /**
     * @hidden
     * @return {?}
     */
    CalendarDayViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.refresh) {
            this.refreshSubscription = this.refresh.subscribe(function () {
                _this.refreshAll();
                _this.cdr.markForCheck();
            });
        }
    };
    /**
     * @hidden
     * @return {?}
     */
    CalendarDayViewComponent.prototype.ngOnDestroy = function () {
        if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
        }
    };
    /**
     * @hidden
     * @param {?} changes
     * @return {?}
     */
    CalendarDayViewComponent.prototype.ngOnChanges = function (changes) {
        if (changes.viewDate ||
            changes.dayStartHour ||
            changes.dayStartMinute ||
            changes.dayEndHour ||
            changes.dayEndMinute) {
            this.refreshHourGrid();
        }
        if (changes.events) {
            validateEvents$1(this.events);
        }
        if (changes.viewDate ||
            changes.events ||
            changes.dayStartHour ||
            changes.dayStartMinute ||
            changes.dayEndHour ||
            changes.dayEndMinute ||
            changes.eventWidth) {
            this.refreshView();
        }
    };
    /**
     * @param {?} dropEvent
     * @param {?} segment
     * @return {?}
     */
    CalendarDayViewComponent.prototype.eventDropped = function (dropEvent, segment) {
        if (dropEvent.dropData && dropEvent.dropData.event) {
            this.eventTimesChanged.emit({
                event: dropEvent.dropData.event,
                newStart: segment.date
            });
        }
    };
    /**
     * @param {?} event
     * @param {?} resizeEvent
     * @param {?} dayViewContainer
     * @return {?}
     */
    CalendarDayViewComponent.prototype.resizeStarted = function (event, resizeEvent, dayViewContainer) {
        this.currentResizes.set(event, {
            originalTop: event.top,
            originalHeight: event.height,
            edge: typeof resizeEvent.edges.top !== 'undefined' ? 'top' : 'bottom'
        });
        var /** @type {?} */ resizeHelper = new CalendarResizeHelper(dayViewContainer);
        this.validateResize = function (_a) {
            var rectangle = _a.rectangle;
            return resizeHelper.validateResize({ rectangle: rectangle });
        };
        this.cdr.markForCheck();
    };
    /**
     * @param {?} event
     * @param {?} resizeEvent
     * @return {?}
     */
    CalendarDayViewComponent.prototype.resizing = function (event, resizeEvent) {
        var /** @type {?} */ currentResize = this.currentResizes.get(event);
        if (resizeEvent.edges.top) {
            event.top = currentResize.originalTop + +resizeEvent.edges.top;
            event.height = currentResize.originalHeight - +resizeEvent.edges.top;
        }
        else if (resizeEvent.edges.bottom) {
            event.height = currentResize.originalHeight + +resizeEvent.edges.bottom;
        }
    };
    /**
     * @param {?} dayEvent
     * @return {?}
     */
    CalendarDayViewComponent.prototype.resizeEnded = function (dayEvent) {
        var /** @type {?} */ currentResize = this.currentResizes.get(dayEvent);
        var /** @type {?} */ pixelsMoved;
        if (currentResize.edge === 'top') {
            pixelsMoved = dayEvent.top - currentResize.originalTop;
        }
        else {
            pixelsMoved = dayEvent.height - currentResize.originalHeight;
        }
        dayEvent.top = currentResize.originalTop;
        dayEvent.height = currentResize.originalHeight;
        var /** @type {?} */ pixelAmountInMinutes = MINUTES_IN_HOUR / (this.hourSegments * this.hourSegmentHeight);
        var /** @type {?} */ minutesMoved = pixelsMoved * pixelAmountInMinutes;
        var /** @type {?} */ newStart = dayEvent.event.start;
        var /** @type {?} */ newEnd = dayEvent.event.end;
        if (currentResize.edge === 'top') {
            newStart = __WEBPACK_IMPORTED_MODULE_25_date_fns_add_minutes_index___default()(newStart, minutesMoved);
        }
        else if (newEnd) {
            newEnd = __WEBPACK_IMPORTED_MODULE_25_date_fns_add_minutes_index___default()(newEnd, minutesMoved);
        }
        this.eventTimesChanged.emit({ newStart: newStart, newEnd: newEnd, event: dayEvent.event });
        this.currentResizes.delete(dayEvent);
    };
    /**
     * @param {?} event
     * @param {?} dayViewContainer
     * @return {?}
     */
    CalendarDayViewComponent.prototype.dragStart = function (event, dayViewContainer) {
        var _this = this;
        var /** @type {?} */ dragHelper = new CalendarDragHelper(dayViewContainer, event);
        this.validateDrag = function (_a) {
            var x = _a.x, y = _a.y;
            return _this.currentResizes.size === 0 && dragHelper.validateDrag({ x: x, y: y });
        };
        this.cdr.markForCheck();
    };
    /**
     * @param {?} dayEvent
     * @param {?} draggedInPixels
     * @return {?}
     */
    CalendarDayViewComponent.prototype.eventDragged = function (dayEvent, draggedInPixels) {
        var /** @type {?} */ pixelAmountInMinutes = MINUTES_IN_HOUR / (this.hourSegments * this.hourSegmentHeight);
        var /** @type {?} */ minutesMoved = draggedInPixels * pixelAmountInMinutes;
        var /** @type {?} */ newStart = __WEBPACK_IMPORTED_MODULE_25_date_fns_add_minutes_index___default()(dayEvent.event.start, minutesMoved);
        var /** @type {?} */ newEnd;
        if (dayEvent.event.end) {
            newEnd = __WEBPACK_IMPORTED_MODULE_25_date_fns_add_minutes_index___default()(dayEvent.event.end, minutesMoved);
        }
        this.eventTimesChanged.emit({ newStart: newStart, newEnd: newEnd, event: dayEvent.event });
    };
    /**
     * @return {?}
     */
    CalendarDayViewComponent.prototype.refreshHourGrid = function () {
        this.hours = this.utils.getDayViewHourGrid({
            viewDate: this.viewDate,
            hourSegments: this.hourSegments,
            dayStart: {
                hour: this.dayStartHour,
                minute: this.dayStartMinute
            },
            dayEnd: {
                hour: this.dayEndHour,
                minute: this.dayEndMinute
            }
        });
        this.emitBeforeViewRender();
    };
    /**
     * @return {?}
     */
    CalendarDayViewComponent.prototype.refreshView = function () {
        this.view = this.utils.getDayView({
            events: this.events,
            viewDate: this.viewDate,
            hourSegments: this.hourSegments,
            dayStart: {
                hour: this.dayStartHour,
                minute: this.dayStartMinute
            },
            dayEnd: {
                hour: this.dayEndHour,
                minute: this.dayEndMinute
            },
            eventWidth: this.eventWidth,
            segmentHeight: this.hourSegmentHeight
        });
        this.emitBeforeViewRender();
    };
    /**
     * @return {?}
     */
    CalendarDayViewComponent.prototype.refreshAll = function () {
        this.refreshHourGrid();
        this.refreshView();
    };
    /**
     * @return {?}
     */
    CalendarDayViewComponent.prototype.emitBeforeViewRender = function () {
        if (this.hours && this.view) {
            this.beforeViewRender.emit({
                body: {
                    hourGrid: this.hours
                },
                period: this.view.period
            });
        }
    };
    return CalendarDayViewComponent;
}());
CalendarDayViewComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'mwl-calendar-day-view',
                template: "\n    <div class=\"cal-day-view\" #dayViewContainer>\n      <mwl-calendar-all-day-event\n        *ngFor=\"let event of view.allDayEvents\"\n        [event]=\"event\"\n        [customTemplate]=\"allDayEventTemplate\"\n        [eventTitleTemplate]=\"eventTitleTemplate\"\n        (eventClicked)=\"eventClicked.emit({event: event})\">\n      </mwl-calendar-all-day-event>\n      <div class=\"cal-hour-rows\">\n        <div class=\"cal-events\">\n          <div\n            #event\n            *ngFor=\"let dayEvent of view?.events\"\n            class=\"cal-event-container\"\n            [class.cal-draggable]=\"dayEvent.event.draggable\"\n            [class.cal-starts-within-day]=\"!dayEvent.startsBeforeDay\"\n            [class.cal-ends-within-day]=\"!dayEvent.endsAfterDay\"\n            [ngClass]=\"dayEvent.event.cssClass\"\n            mwlResizable\n            [resizeEdges]=\"{top: dayEvent.event?.resizable?.beforeStart, bottom: dayEvent.event?.resizable?.afterEnd}\"\n            [resizeSnapGrid]=\"{top: eventSnapSize, bottom: eventSnapSize}\"\n            [validateResize]=\"validateResize\"\n            (resizeStart)=\"resizeStarted(dayEvent, $event, dayViewContainer)\"\n            (resizing)=\"resizing(dayEvent, $event)\"\n            (resizeEnd)=\"resizeEnded(dayEvent)\"\n            mwlDraggable\n            [dragAxis]=\"{x: false, y: dayEvent.event.draggable && currentResizes.size === 0}\"\n            [dragSnapGrid]=\"{y: eventSnapSize}\"\n            [validateDrag]=\"validateDrag\"\n            (dragPointerDown)=\"dragStart(event, dayViewContainer)\"\n            (dragEnd)=\"eventDragged(dayEvent, $event.y)\"\n            [style.marginTop.px]=\"dayEvent.top\"\n            [style.height.px]=\"dayEvent.height\"\n            [style.marginLeft.px]=\"dayEvent.left + 70\"\n            [style.width.px]=\"dayEvent.width - 1\">\n            <mwl-calendar-day-view-event\n              [dayEvent]=\"dayEvent\"\n              [tooltipPlacement]=\"tooltipPlacement\"\n              [tooltipTemplate]=\"tooltipTemplate\"\n              [tooltipAppendToBody]=\"tooltipAppendToBody\"\n              [customTemplate]=\"eventTemplate\"\n              [eventTitleTemplate]=\"eventTitleTemplate\"\n              (eventClicked)=\"eventClicked.emit({event: dayEvent.event})\">\n            </mwl-calendar-day-view-event>\n          </div>\n        </div>\n        <div class=\"cal-hour\" *ngFor=\"let hour of hours\" [style.minWidth.px]=\"view?.width + 70\">\n          <mwl-calendar-day-view-hour-segment\n            *ngFor=\"let segment of hour.segments\"\n            [style.height.px]=\"hourSegmentHeight\"\n            [segment]=\"segment\"\n            [segmentHeight]=\"hourSegmentHeight\"\n            [locale]=\"locale\"\n            [customTemplate]=\"hourSegmentTemplate\"\n            (mwlClick)=\"hourSegmentClicked.emit({date: segment.date})\"\n            [class.cal-drag-over]=\"segment.dragOver\"\n            mwlDroppable\n            (dragEnter)=\"segment.dragOver = true\"\n            (dragLeave)=\"segment.dragOver = false\"\n            (drop)=\"segment.dragOver = false; eventDropped($event, segment)\">\n          </mwl-calendar-day-view-hour-segment>\n        </div>\n      </div>\n    </div>\n  "
            },] },
];
/** @nocollapse */
CalendarDayViewComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
    { type: CalendarUtils, },
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"],] },] },
]; };
CalendarDayViewComponent.propDecorators = {
    "viewDate": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "events": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "hourSegments": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "hourSegmentHeight": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "dayStartHour": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "dayStartMinute": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "dayEndHour": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "dayEndMinute": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "eventWidth": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "refresh": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "locale": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "eventSnapSize": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "tooltipPlacement": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "tooltipTemplate": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "tooltipAppendToBody": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "hourSegmentTemplate": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "allDayEventTemplate": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "eventTemplate": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "eventTitleTemplate": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "eventClicked": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    "hourSegmentClicked": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    "eventTimesChanged": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    "beforeViewRender": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CalendarAllDayEventComponent = /** @class */ (function () {
    function CalendarAllDayEventComponent() {
        this.eventClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    return CalendarAllDayEventComponent;
}());
CalendarAllDayEventComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'mwl-calendar-all-day-event',
                template: "\n    <ng-template\n      #defaultTemplate\n      let-event=\"event\"\n      let-eventClicked=\"eventClicked\">\n      <div\n        class=\"cal-all-day-event\"\n        [style.backgroundColor]=\"event.color.secondary\"\n        [style.borderColor]=\"event.color.primary\">\n        <mwl-calendar-event-actions [event]=\"event\"></mwl-calendar-event-actions>\n        <mwl-calendar-event-title\n          [event]=\"event\"\n          [customTemplate]=\"eventTitleTemplate\"\n          view=\"day\"\n          (mwlClick)=\"eventClicked.emit()\">\n        </mwl-calendar-event-title>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        event: event,\n        eventClicked: eventClicked\n      }\">\n    </ng-template>\n  "
            },] },
];
/** @nocollapse */
CalendarAllDayEventComponent.ctorParameters = function () { return []; };
CalendarAllDayEventComponent.propDecorators = {
    "event": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "customTemplate": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "eventTitleTemplate": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "eventClicked": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CalendarDayViewHourSegmentComponent = /** @class */ (function () {
    function CalendarDayViewHourSegmentComponent() {
    }
    return CalendarDayViewHourSegmentComponent;
}());
CalendarDayViewHourSegmentComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'mwl-calendar-day-view-hour-segment',
                template: "\n    <ng-template\n      #defaultTemplate\n      let-segment=\"segment\"\n      let-locale=\"locale\">\n      <div\n        class=\"cal-hour-segment\"\n        [style.height.px]=\"segmentHeight\"\n        [class.cal-hour-start]=\"segment.isStart\"\n        [class.cal-after-hour-start]=\"!segment.isStart\"\n        [ngClass]=\"segment.cssClass\">\n        <div class=\"cal-time\">\n          {{ segment.date | calendarDate:'dayViewHour':locale }}\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        segment: segment,\n        locale: locale\n      }\">\n    </ng-template>\n  "
            },] },
];
/** @nocollapse */
CalendarDayViewHourSegmentComponent.ctorParameters = function () { return []; };
CalendarDayViewHourSegmentComponent.propDecorators = {
    "segment": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "segmentHeight": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "locale": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "customTemplate": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CalendarDayViewEventComponent = /** @class */ (function () {
    function CalendarDayViewEventComponent() {
        this.eventClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    return CalendarDayViewEventComponent;
}());
CalendarDayViewEventComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'mwl-calendar-day-view-event',
                template: "\n    <ng-template\n      #defaultTemplate\n      let-dayEvent=\"dayEvent\"\n      let-tooltipPlacement=\"tooltipPlacement\"\n      let-eventClicked=\"eventClicked\"\n      let-tooltipTemplate=\"tooltipTemplate\"\n      let-tooltipAppendToBody=\"tooltipAppendToBody\">\n      <div\n        class=\"cal-event\"\n        [style.backgroundColor]=\"dayEvent.event.color.secondary\"\n        [style.borderColor]=\"dayEvent.event.color.primary\"\n        [mwlCalendarTooltip]=\"dayEvent.event.title | calendarEventTitle:'dayTooltip':dayEvent.event\"\n        [tooltipPlacement]=\"tooltipPlacement\"\n        [tooltipEvent]=\"dayEvent.event\"\n        [tooltipTemplate]=\"tooltipTemplate\"\n        [tooltipAppendToBody]=\"tooltipAppendToBody\">\n        <mwl-calendar-event-actions [event]=\"dayEvent.event\"></mwl-calendar-event-actions>\n        <mwl-calendar-event-title\n          [event]=\"dayEvent.event\"\n          [customTemplate]=\"eventTitleTemplate\"\n          view=\"day\"\n          (mwlClick)=\"eventClicked.emit()\">\n        </mwl-calendar-event-title>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        dayEvent: dayEvent,\n        tooltipPlacement: tooltipPlacement,\n        eventClicked: eventClicked,\n        tooltipTemplate: tooltipTemplate,\n        tooltipAppendToBody: tooltipAppendToBody\n      }\">\n    </ng-template>\n  "
            },] },
];
/** @nocollapse */
CalendarDayViewEventComponent.ctorParameters = function () { return []; };
CalendarDayViewEventComponent.propDecorators = {
    "dayEvent": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "tooltipPlacement": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "tooltipAppendToBody": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "customTemplate": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "eventTitleTemplate": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "tooltipTemplate": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "eventClicked": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CalendarDayModule = /** @class */ (function () {
    function CalendarDayModule() {
    }
    return CalendarDayModule;
}());
CalendarDayModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                imports: [
                    __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                    __WEBPACK_IMPORTED_MODULE_24_angular_resizable_element__["a" /* ResizableModule */],
                    __WEBPACK_IMPORTED_MODULE_1_angular_draggable_droppable__["a" /* DragAndDropModule */],
                    CalendarCommonModule
                ],
                declarations: [
                    CalendarDayViewComponent,
                    CalendarAllDayEventComponent,
                    CalendarDayViewHourSegmentComponent,
                    CalendarDayViewEventComponent
                ],
                exports: [
                    __WEBPACK_IMPORTED_MODULE_24_angular_resizable_element__["a" /* ResizableModule */],
                    __WEBPACK_IMPORTED_MODULE_1_angular_draggable_droppable__["a" /* DragAndDropModule */],
                    CalendarDayViewComponent,
                    CalendarAllDayEventComponent,
                    CalendarDayViewHourSegmentComponent,
                    CalendarDayViewEventComponent
                ]
            },] },
];
/** @nocollapse */
CalendarDayModule.ctorParameters = function () { return []; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * The main module of this library. Example usage:
 *
 * ```typescript
 * import { CalenderModule } from 'angular-calendar';
 *
 * \@NgModule({
 *   imports: [
 *     CalenderModule.forRoot()
 *   ]
 * })
 * class MyModule {}
 * ```
 *
 */
var CalendarModule = /** @class */ (function () {
    function CalendarModule() {
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    CalendarModule.forRoot = function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: CalendarModule,
            providers: [
                __WEBPACK_IMPORTED_MODULE_1_angular_draggable_droppable__["b" /* DraggableHelper */],
                config.eventTitleFormatter || CalendarEventTitleFormatter,
                config.dateFormatter || CalendarDateFormatter,
                config.utils || CalendarUtils
            ]
        };
    };
    return CalendarModule;
}());
CalendarModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                imports: [
                    CalendarCommonModule,
                    CalendarMonthModule,
                    CalendarWeekModule,
                    CalendarDayModule
                ],
                exports: [
                    CalendarCommonModule,
                    CalendarMonthModule,
                    CalendarWeekModule,
                    CalendarDayModule
                ]
            },] },
];
/** @nocollapse */
CalendarModule.ctorParameters = function () { return []; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=angular-calendar.js.map


/***/ }),

/***/ "../../../../angular-draggable-droppable/esm5/angular-draggable-droppable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragAndDropModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DraggableHelper; });
/* unused harmony export ɵa */
/* unused harmony export ɵb */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_merge__ = __webpack_require__("../../../../rxjs/_esm5/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators_map__ = __webpack_require__("../../../../rxjs/_esm5/operators/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/operators/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators_takeUntil__ = __webpack_require__("../../../../rxjs/_esm5/operators/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators_take__ = __webpack_require__("../../../../rxjs/_esm5/operators/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators_takeLast__ = __webpack_require__("../../../../rxjs/_esm5/operators/takeLast.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_operators_pairwise__ = __webpack_require__("../../../../rxjs/_esm5/operators/pairwise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_operators_share__ = __webpack_require__("../../../../rxjs/_esm5/operators/share.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_operators_filter__ = __webpack_require__("../../../../rxjs/_esm5/operators/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_operators_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/operators/distinctUntilChanged.js");












/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DraggableHelper = /** @class */ (function () {
    function DraggableHelper() {
        this.currentDrag = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    return DraggableHelper;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */
/**
 * @record
 */
/**
 * @record
 */
/**
 * @record
 */
var MOVE_CURSOR = 'move';
var DraggableDirective = /** @class */ (function () {
    /**
     * @hidden
     * @param {?} element
     * @param {?} renderer
     * @param {?} draggableHelper
     * @param {?} zone
     */
    function DraggableDirective(element, renderer, draggableHelper, zone) {
        this.element = element;
        this.renderer = renderer;
        this.draggableHelper = draggableHelper;
        this.zone = zone;
        /**
         * The axis along which the element is draggable
         */
        this.dragAxis = { x: true, y: true };
        /**
         * Snap all drags to an x / y grid
         */
        this.dragSnapGrid = {};
        /**
         * Show a ghost element that shows the drag when dragging
         */
        this.ghostDragEnabled = true;
        /**
         * The cursor to use when dragging the element
         */
        this.dragCursor = MOVE_CURSOR;
        /**
         * Called when the element can be dragged along one axis and has the mouse or pointer device pressed on it
         */
        this.dragPointerDown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Called when the element has started to be dragged.
         * Only called after at least one mouse or touch move event
         */
        this.dragStart = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Called when the element is being dragged
         */
        this.dragging = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Called after the element is dragged
         */
        this.dragEnd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * @hidden
         */
        this.pointerDown = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        /**
         * @hidden
         */
        this.pointerMove = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        /**
         * @hidden
         */
        this.pointerUp = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.eventListenerSubscriptions = {};
    }
    /**
     * @return {?}
     */
    DraggableDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.checkEventListeners();
        var /** @type {?} */ pointerDrag = this.pointerDown
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_10_rxjs_operators_filter__["a" /* filter */])(function () { return _this.canDrag(); }))
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_mergeMap__["a" /* mergeMap */])(function (pointerDownEvent) {
            var /** @type {?} */ currentDrag = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
            _this.zone.run(function () {
                _this.dragPointerDown.next({ x: 0, y: 0 });
            });
            var /** @type {?} */ pointerMove = _this.pointerMove
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_map__["a" /* map */])(function (pointerMoveEvent) {
                pointerMoveEvent.event.preventDefault();
                return {
                    currentDrag: currentDrag,
                    x: pointerMoveEvent.clientX - pointerDownEvent.clientX,
                    y: pointerMoveEvent.clientY - pointerDownEvent.clientY,
                    clientX: pointerMoveEvent.clientX,
                    clientY: pointerMoveEvent.clientY
                };
            }))
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_map__["a" /* map */])(function (moveData) {
                if (_this.dragSnapGrid.x) {
                    moveData.x =
                        Math.floor(moveData.x / _this.dragSnapGrid.x) *
                            _this.dragSnapGrid.x;
                }
                if (_this.dragSnapGrid.y) {
                    moveData.y =
                        Math.floor(moveData.y / _this.dragSnapGrid.y) *
                            _this.dragSnapGrid.y;
                }
                return moveData;
            }))
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_map__["a" /* map */])(function (moveData) {
                if (!_this.dragAxis.x) {
                    moveData.x = 0;
                }
                if (!_this.dragAxis.y) {
                    moveData.y = 0;
                }
                return moveData;
            }))
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_10_rxjs_operators_filter__["a" /* filter */])(function (_a) {
                var x = _a.x, y = _a.y;
                return !_this.validateDrag || _this.validateDrag({ x: x, y: y });
            }))
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_takeUntil__["a" /* takeUntil */])(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_merge__["a" /* merge */])(_this.pointerUp, _this.pointerDown)))
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_operators_share__["a" /* share */])());
            pointerMove.pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators_take__["a" /* take */])(1)).subscribe(function () {
                pointerDownEvent.event.preventDefault();
                _this.zone.run(function () {
                    _this.dragStart.next({ x: 0, y: 0 });
                });
                _this.setCursor(_this.dragCursor);
                _this.draggableHelper.currentDrag.next(currentDrag);
            });
            pointerMove.pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators_takeLast__["a" /* takeLast */])(1)).subscribe(function (_a) {
                var x = _a.x, y = _a.y;
                _this.zone.run(function () {
                    _this.dragEnd.next({ x: x, y: y });
                });
                currentDrag.complete();
                _this.setCssTransform(null);
                if (_this.ghostDragEnabled) {
                    _this.renderer.setStyle(_this.element.nativeElement, 'pointerEvents', null);
                }
            });
            return pointerMove;
        }))
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_operators_share__["a" /* share */])());
        Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_merge__["a" /* merge */])(pointerDrag.pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators_take__["a" /* take */])(1)).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_map__["a" /* map */])(function (value) { return [, value]; })), pointerDrag.pipe(Object(__WEBPACK_IMPORTED_MODULE_8_rxjs_operators_pairwise__["a" /* pairwise */])()))
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_10_rxjs_operators_filter__["a" /* filter */])(function (_a) {
            var previous = _a[0], next = _a[1];
            if (!previous) {
                return true;
            }
            return previous.x !== next.x || previous.y !== next.y;
        }))
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_map__["a" /* map */])(function (_a) {
            var previous = _a[0], next = _a[1];
            return next;
        }))
            .subscribe(function (_a) {
            var x = _a.x, y = _a.y, currentDrag = _a.currentDrag, clientX = _a.clientX, clientY = _a.clientY;
            _this.zone.run(function () {
                _this.dragging.next({ x: x, y: y });
            });
            if (_this.ghostDragEnabled) {
                _this.renderer.setStyle(_this.element.nativeElement, 'pointerEvents', 'none');
            }
            _this.setCssTransform("translate(" + x + "px, " + y + "px)");
            currentDrag.next({
                clientX: clientX,
                clientY: clientY,
                dropData: _this.dropData
            });
        });
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    DraggableDirective.prototype.ngOnChanges = function (changes) {
        if (changes['dragAxis']) {
            this.checkEventListeners();
        }
    };
    /**
     * @return {?}
     */
    DraggableDirective.prototype.ngOnDestroy = function () {
        this.unsubscribeEventListeners();
        this.pointerDown.complete();
        this.pointerMove.complete();
        this.pointerUp.complete();
    };
    /**
     * @return {?}
     */
    DraggableDirective.prototype.checkEventListeners = function () {
        var _this = this;
        var /** @type {?} */ canDrag = this.canDrag();
        var /** @type {?} */ hasEventListeners = Object.keys(this.eventListenerSubscriptions).length > 0;
        if (canDrag && !hasEventListeners) {
            this.zone.runOutsideAngular(function () {
                _this.eventListenerSubscriptions.mousedown = _this.renderer.listen(_this.element.nativeElement, 'mousedown', function (event) {
                    _this.onMouseDown(event);
                });
                _this.eventListenerSubscriptions.mouseup = _this.renderer.listen('document', 'mouseup', function (event) {
                    _this.onMouseUp(event);
                });
                _this.eventListenerSubscriptions.touchstart = _this.renderer.listen(_this.element.nativeElement, 'touchstart', function (event) {
                    _this.onTouchStart(event);
                });
                _this.eventListenerSubscriptions.touchend = _this.renderer.listen('document', 'touchend', function (event) {
                    _this.onTouchEnd(event);
                });
                _this.eventListenerSubscriptions.touchcancel = _this.renderer.listen('document', 'touchcancel', function (event) {
                    _this.onTouchEnd(event);
                });
                _this.eventListenerSubscriptions.mouseenter = _this.renderer.listen(_this.element.nativeElement, 'mouseenter', function () {
                    _this.onMouseEnter();
                });
                _this.eventListenerSubscriptions.mouseleave = _this.renderer.listen(_this.element.nativeElement, 'mouseleave', function () {
                    _this.onMouseLeave();
                });
            });
        }
        else if (!canDrag && hasEventListeners) {
            this.unsubscribeEventListeners();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DraggableDirective.prototype.onMouseDown = function (event) {
        var _this = this;
        if (!this.eventListenerSubscriptions.mousemove) {
            this.eventListenerSubscriptions.mousemove = this.renderer.listen('document', 'mousemove', function (mouseMoveEvent) {
                _this.pointerMove.next({
                    event: mouseMoveEvent,
                    clientX: mouseMoveEvent.clientX,
                    clientY: mouseMoveEvent.clientY
                });
            });
        }
        this.pointerDown.next({
            event: event,
            clientX: event.clientX,
            clientY: event.clientY
        });
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DraggableDirective.prototype.onMouseUp = function (event) {
        if (this.eventListenerSubscriptions.mousemove) {
            this.eventListenerSubscriptions.mousemove();
            delete this.eventListenerSubscriptions.mousemove;
        }
        this.pointerUp.next({
            event: event,
            clientX: event.clientX,
            clientY: event.clientY
        });
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DraggableDirective.prototype.onTouchStart = function (event) {
        var _this = this;
        if (!this.eventListenerSubscriptions.touchmove) {
            this.eventListenerSubscriptions.touchmove = this.renderer.listen('document', 'touchmove', function (touchMoveEvent) {
                _this.pointerMove.next({
                    event: touchMoveEvent,
                    clientX: touchMoveEvent.targetTouches[0].clientX,
                    clientY: touchMoveEvent.targetTouches[0].clientY
                });
            });
        }
        this.pointerDown.next({
            event: event,
            clientX: event.touches[0].clientX,
            clientY: event.touches[0].clientY
        });
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DraggableDirective.prototype.onTouchEnd = function (event) {
        if (this.eventListenerSubscriptions.touchmove) {
            this.eventListenerSubscriptions.touchmove();
            delete this.eventListenerSubscriptions.touchmove;
        }
        this.pointerUp.next({
            event: event,
            clientX: event.changedTouches[0].clientX,
            clientY: event.changedTouches[0].clientY
        });
    };
    /**
     * @return {?}
     */
    DraggableDirective.prototype.onMouseEnter = function () {
        this.setCursor(this.dragCursor);
    };
    /**
     * @return {?}
     */
    DraggableDirective.prototype.onMouseLeave = function () {
        this.setCursor(null);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DraggableDirective.prototype.setCssTransform = function (value) {
        var _this = this;
        if (this.ghostDragEnabled) {
            var /** @type {?} */ transformAttributes = [
                'transform',
                '-webkit-transform',
                '-ms-transform',
                '-moz-transform',
                '-o-transform'
            ];
            transformAttributes.forEach(function (transformAttribute) {
                _this.renderer.setStyle(_this.element.nativeElement, transformAttribute, value);
            });
        }
    };
    /**
     * @return {?}
     */
    DraggableDirective.prototype.canDrag = function () {
        return this.dragAxis.x || this.dragAxis.y;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DraggableDirective.prototype.setCursor = function (value) {
        this.renderer.setStyle(this.element.nativeElement, 'cursor', value);
    };
    /**
     * @return {?}
     */
    DraggableDirective.prototype.unsubscribeEventListeners = function () {
        var _this = this;
        Object.keys(this.eventListenerSubscriptions).forEach(function (type) {
            ((_this)).eventListenerSubscriptions[type]();
            delete ((_this)).eventListenerSubscriptions[type];
        });
    };
    return DraggableDirective;
}());
DraggableDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[mwlDraggable]'
            },] },
];
/** @nocollapse */
DraggableDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
    { type: DraggableHelper, },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
]; };
DraggableDirective.propDecorators = {
    "dropData": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "dragAxis": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "dragSnapGrid": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "ghostDragEnabled": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "validateDrag": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "dragCursor": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "dragPointerDown": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    "dragStart": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    "dragging": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    "dragEnd": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} clientX
 * @param {?} clientY
 * @param {?} rect
 * @return {?}
 */
function isCoordinateWithinRectangle(clientX, clientY, rect) {
    return (clientX >= rect.left &&
        clientX <= rect.right &&
        clientY >= rect.top &&
        clientY <= rect.bottom);
}
/**
 * @record
 */
var DroppableDirective = /** @class */ (function () {
    /**
     * @param {?} element
     * @param {?} draggableHelper
     * @param {?} zone
     */
    function DroppableDirective(element, draggableHelper, zone) {
        this.element = element;
        this.draggableHelper = draggableHelper;
        this.zone = zone;
        /**
         * Called when a draggable element starts overlapping the element
         */
        this.dragEnter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Called when a draggable element stops overlapping the element
         */
        this.dragLeave = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Called when a draggable element is moved over the element
         */
        this.dragOver = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Called when a draggable element is dropped on this element
         */
        this.drop = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    DroppableDirective.prototype.ngOnInit = function () {
        var _this = this;
        /**
         * @record
         */
        this.currentDragSubscription = this.draggableHelper.currentDrag.subscribe(function (drag) {
            var /** @type {?} */ droppableRectangle = _this.element.nativeElement.getBoundingClientRect();
            var /** @type {?} */ currentDragDropData;
            var /** @type {?} */ overlaps = drag.pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_map__["a" /* map */])(function (_a) {
                var clientX = _a.clientX, clientY = _a.clientY, dropData = _a.dropData;
                currentDragDropData = dropData;
                return isCoordinateWithinRectangle(clientX, clientY, droppableRectangle);
            }));
            var /** @type {?} */ overlapsChanged = overlaps.pipe(Object(__WEBPACK_IMPORTED_MODULE_11_rxjs_operators_distinctUntilChanged__["a" /* distinctUntilChanged */])());
            var /** @type {?} */ dragOverActive; // TODO - see if there's a way of doing this via rxjs
            overlapsChanged
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_10_rxjs_operators_filter__["a" /* filter */])(function (overlapsNow) { return overlapsNow; }))
                .subscribe(function () {
                dragOverActive = true;
                _this.zone.run(function () {
                    _this.dragEnter.next({
                        dropData: currentDragDropData
                    });
                });
            });
            overlaps.pipe(Object(__WEBPACK_IMPORTED_MODULE_10_rxjs_operators_filter__["a" /* filter */])(function (overlapsNow) { return overlapsNow; })).subscribe(function () {
                _this.zone.run(function () {
                    _this.dragOver.next({
                        dropData: currentDragDropData
                    });
                });
            });
            overlapsChanged
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_8_rxjs_operators_pairwise__["a" /* pairwise */])())
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_10_rxjs_operators_filter__["a" /* filter */])(function (_a) {
                var didOverlap = _a[0], overlapsNow = _a[1];
                return didOverlap && !overlapsNow;
            }))
                .subscribe(function () {
                dragOverActive = false;
                _this.zone.run(function () {
                    _this.dragLeave.next({
                        dropData: currentDragDropData
                    });
                });
            });
            drag.pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_mergeMap__["a" /* mergeMap */])(function () { return overlaps; })).subscribe({
                complete: function () {
                    if (dragOverActive) {
                        _this.zone.run(function () {
                            _this.drop.next({
                                dropData: currentDragDropData
                            });
                        });
                    }
                }
            });
        });
    };
    /**
     * @return {?}
     */
    DroppableDirective.prototype.ngOnDestroy = function () {
        this.currentDragSubscription.unsubscribe();
    };
    return DroppableDirective;
}());
DroppableDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[mwlDroppable]'
            },] },
];
/** @nocollapse */
DroppableDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: DraggableHelper, },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
]; };
DroppableDirective.propDecorators = {
    "dragEnter": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    "dragLeave": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    "dragOver": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    "drop": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DragAndDropModule = /** @class */ (function () {
    function DragAndDropModule() {
    }
    /**
     * @return {?}
     */
    DragAndDropModule.forRoot = function () {
        return {
            ngModule: DragAndDropModule,
            providers: [DraggableHelper]
        };
    };
    return DragAndDropModule;
}());
DragAndDropModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                declarations: [DraggableDirective, DroppableDirective],
                exports: [DraggableDirective, DroppableDirective]
            },] },
];
/** @nocollapse */
DragAndDropModule.ctorParameters = function () { return []; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=angular-draggable-droppable.js.map


/***/ }),

/***/ "../../../../angular-resizable-element/esm5/angular-resizable-element.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ResizableDirective */
/* unused harmony export ResizeHandleDirective */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResizableModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_merge__ = __webpack_require__("../../../../rxjs/_esm5/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_interval__ = __webpack_require__("../../../../rxjs/_esm5/observable/interval.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators_map__ = __webpack_require__("../../../../rxjs/_esm5/operators/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/operators/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators_takeUntil__ = __webpack_require__("../../../../rxjs/_esm5/operators/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_operators_filter__ = __webpack_require__("../../../../rxjs/_esm5/operators/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_operators_pairwise__ = __webpack_require__("../../../../rxjs/_esm5/operators/pairwise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_operators_take__ = __webpack_require__("../../../../rxjs/_esm5/operators/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_operators_throttle__ = __webpack_require__("../../../../rxjs/_esm5/operators/throttle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_operators_share__ = __webpack_require__("../../../../rxjs/_esm5/operators/share.js");













/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} value1
 * @param {?} value2
 * @param {?=} precision
 * @return {?}
 */
function isNumberCloseTo(value1, value2, precision) {
    if (precision === void 0) { precision = 3; }
    var /** @type {?} */ diff = Math.abs(value1 - value2);
    return diff < precision;
}
/**
 * @param {?} startingRect
 * @param {?} edges
 * @param {?} clientX
 * @param {?} clientY
 * @return {?}
 */
function getNewBoundingRectangle(startingRect, edges, clientX, clientY) {
    var /** @type {?} */ newBoundingRect = {
        top: startingRect.top,
        bottom: startingRect.bottom,
        left: startingRect.left,
        right: startingRect.right
    };
    if (edges.top) {
        newBoundingRect.top += clientY;
    }
    if (edges.bottom) {
        newBoundingRect.bottom += clientY;
    }
    if (edges.left) {
        newBoundingRect.left += clientX;
    }
    if (edges.right) {
        newBoundingRect.right += clientX;
    }
    newBoundingRect.height = newBoundingRect.bottom - newBoundingRect.top;
    newBoundingRect.width = newBoundingRect.right - newBoundingRect.left;
    return newBoundingRect;
}
/**
 * @param {?} element
 * @param {?} ghostElementPositioning
 * @return {?}
 */
function getElementRect(element, ghostElementPositioning) {
    var /** @type {?} */ translateX = 0;
    var /** @type {?} */ translateY = 0;
    var /** @type {?} */ style = element.nativeElement.style;
    var /** @type {?} */ transformProperties = [
        'transform',
        '-ms-transform',
        '-moz-transform',
        '-o-transform'
    ];
    var /** @type {?} */ transform = transformProperties
        .map(function (property) { return style[property]; })
        .find(function (value) { return !!value; });
    if (transform && transform.includes('translate')) {
        translateX = transform.replace(/.*translate\((.*)px, (.*)px\).*/, '$1');
        translateY = transform.replace(/.*translate\((.*)px, (.*)px\).*/, '$2');
    }
    if (ghostElementPositioning === 'absolute') {
        return {
            height: element.nativeElement.offsetHeight,
            width: element.nativeElement.offsetWidth,
            top: element.nativeElement.offsetTop - translateY,
            bottom: element.nativeElement.offsetHeight +
                element.nativeElement.offsetTop -
                translateY,
            left: element.nativeElement.offsetLeft - translateX,
            right: element.nativeElement.offsetWidth +
                element.nativeElement.offsetLeft -
                translateX
        };
    }
    else {
        var /** @type {?} */ boundingRect = element.nativeElement.getBoundingClientRect();
        return {
            height: boundingRect.height,
            width: boundingRect.width,
            top: boundingRect.top - translateY,
            bottom: boundingRect.bottom - translateY,
            left: boundingRect.left - translateX,
            right: boundingRect.right - translateX,
            scrollTop: element.nativeElement.scrollTop,
            scrollLeft: element.nativeElement.scrollLeft
        };
    }
}
/**
 * @param {?} __0
 * @return {?}
 */
function isWithinBoundingY(_a) {
    var clientY = _a.clientY, rect = _a.rect;
    return clientY >= rect.top && clientY <= rect.bottom;
}
/**
 * @param {?} __0
 * @return {?}
 */
function isWithinBoundingX(_a) {
    var clientX = _a.clientX, rect = _a.rect;
    return clientX >= rect.left && clientX <= rect.right;
}
/**
 * @param {?} __0
 * @return {?}
 */
function getResizeEdges(_a) {
    var clientX = _a.clientX, clientY = _a.clientY, elm = _a.elm, allowedEdges = _a.allowedEdges, cursorPrecision = _a.cursorPrecision;
    var /** @type {?} */ elmPosition = elm.nativeElement.getBoundingClientRect();
    var /** @type {?} */ edges = {};
    if (allowedEdges.left &&
        isNumberCloseTo(clientX, elmPosition.left, cursorPrecision) &&
        isWithinBoundingY({ clientY: clientY, rect: elmPosition })) {
        edges.left = true;
    }
    if (allowedEdges.right &&
        isNumberCloseTo(clientX, elmPosition.right, cursorPrecision) &&
        isWithinBoundingY({ clientY: clientY, rect: elmPosition })) {
        edges.right = true;
    }
    if (allowedEdges.top &&
        isNumberCloseTo(clientY, elmPosition.top, cursorPrecision) &&
        isWithinBoundingX({ clientX: clientX, rect: elmPosition })) {
        edges.top = true;
    }
    if (allowedEdges.bottom &&
        isNumberCloseTo(clientY, elmPosition.bottom, cursorPrecision) &&
        isWithinBoundingX({ clientX: clientX, rect: elmPosition })) {
        edges.bottom = true;
    }
    return edges;
}
/**
 * @record
 */
var DEFAULT_RESIZE_CURSORS = Object.freeze({
    topLeft: 'nw-resize',
    topRight: 'ne-resize',
    bottomLeft: 'sw-resize',
    bottomRight: 'se-resize',
    leftOrRight: 'ew-resize',
    topOrBottom: 'ns-resize'
});
/**
 * @param {?} edges
 * @param {?} cursors
 * @return {?}
 */
function getResizeCursor(edges, cursors) {
    if (edges.left && edges.top) {
        return cursors.topLeft;
    }
    else if (edges.right && edges.top) {
        return cursors.topRight;
    }
    else if (edges.left && edges.bottom) {
        return cursors.bottomLeft;
    }
    else if (edges.right && edges.bottom) {
        return cursors.bottomRight;
    }
    else if (edges.left || edges.right) {
        return cursors.leftOrRight;
    }
    else if (edges.top || edges.bottom) {
        return cursors.topOrBottom;
    }
    else {
        return '';
    }
}
/**
 * @param {?} __0
 * @return {?}
 */
function getEdgesDiff(_a) {
    var edges = _a.edges, initialRectangle = _a.initialRectangle, newRectangle = _a.newRectangle;
    var /** @type {?} */ edgesDiff = {};
    Object.keys(edges).forEach(function (edge) {
        edgesDiff[edge] = newRectangle[edge] - initialRectangle[edge];
    });
    return edgesDiff;
}
var RESIZE_ACTIVE_CLASS = 'resize-active';
var RESIZE_LEFT_HOVER_CLASS = 'resize-left-hover';
var RESIZE_RIGHT_HOVER_CLASS = 'resize-right-hover';
var RESIZE_TOP_HOVER_CLASS = 'resize-top-hover';
var RESIZE_BOTTOM_HOVER_CLASS = 'resize-bottom-hover';
var RESIZE_GHOST_ELEMENT_CLASS = 'resize-ghost-element';
var MOUSE_MOVE_THROTTLE_MS = 50;
/**
 * Place this on an element to make it resizable. For example:
 *
 * ```html
 * <div
 *   mwlResizable
 *   [resizeEdges]="{bottom: true, right: true, top: true, left: true}"
 *   [enableGhostResize]="true">
 * </div>
 * ```
 */
var ResizableDirective = /** @class */ (function () {
    /**
     * @hidden
     * @param {?} renderer
     * @param {?} elm
     * @param {?} zone
     */
    function ResizableDirective(renderer, elm, zone) {
        this.renderer = renderer;
        this.elm = elm;
        this.zone = zone;
        /**
         * The edges that an element can be resized from. Pass an object like `{top: true, bottom: false}`. By default no edges can be resized.
         */
        this.resizeEdges = {};
        /**
         * Set to `true` to enable a temporary resizing effect of the element in between the `resizeStart` and `resizeEnd` events.
         */
        this.enableGhostResize = false;
        /**
         * A snap grid that resize events will be locked to.
         *
         * e.g. to only allow the element to be resized every 10px set it to `{left: 10, right: 10}`
         */
        this.resizeSnapGrid = {};
        /**
         * The mouse cursors that will be set on the resize edges
         */
        this.resizeCursors = DEFAULT_RESIZE_CURSORS;
        /**
         * Mouse over thickness to active cursor.
         */
        this.resizeCursorPrecision = 3;
        /**
         * Define the positioning of the ghost element (can be fixed or absolute)
         */
        this.ghostElementPositioning = 'fixed';
        /**
         * Called when the mouse is pressed and a resize event is about to begin. `$event` is a `ResizeEvent` object.
         */
        this.resizeStart = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Called as the mouse is dragged after a resize event has begun. `$event` is a `ResizeEvent` object.
         */
        this.resizing = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Called after the mouse is released after a resize event. `$event` is a `ResizeEvent` object.
         */
        this.resizeEnd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * @hidden
         */
        this.mouseup = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        /**
         * @hidden
         */
        this.mousedown = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        /**
         * @hidden
         */
        this.mousemove = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.pointerEventListenerSubscriptions = {};
        this.pointerEventListeners = PointerEventListeners.getInstance(renderer, zone);
    }
    /**
     * @hidden
     * @return {?}
     */
    ResizableDirective.prototype.ngOnInit = function () {
        var _this = this;
        // TODO - use some fancy Observable.merge's for this
        this.pointerEventListenerSubscriptions.pointerDown = this.pointerEventListeners.pointerDown.subscribe(function (_a) {
            var clientX = _a.clientX, clientY = _a.clientY;
            _this.mousedown.next({ clientX: clientX, clientY: clientY });
        });
        this.pointerEventListenerSubscriptions.pointerMove = this.pointerEventListeners.pointerMove.subscribe(function (_a) {
            var clientX = _a.clientX, clientY = _a.clientY, event = _a.event;
            _this.mousemove.next({ clientX: clientX, clientY: clientY, event: event });
        });
        this.pointerEventListenerSubscriptions.pointerUp = this.pointerEventListeners.pointerUp.subscribe(function (_a) {
            var clientX = _a.clientX, clientY = _a.clientY;
            _this.mouseup.next({ clientX: clientX, clientY: clientY });
        });
        var /** @type {?} */ currentResize;
        var /** @type {?} */ removeGhostElement = function () {
            if (currentResize && currentResize.clonedNode) {
                _this.elm.nativeElement.parentElement.removeChild(currentResize.clonedNode);
                _this.renderer.setStyle(_this.elm.nativeElement, 'visibility', 'inherit');
            }
        };
        var /** @type {?} */ mouseMove = this.mousemove.pipe(Object(__WEBPACK_IMPORTED_MODULE_12_rxjs_operators_share__["a" /* share */])());
        mouseMove.pipe(Object(__WEBPACK_IMPORTED_MODULE_8_rxjs_operators_filter__["a" /* filter */])(function () { return !!currentResize; })).subscribe(function (_a) {
            var event = _a.event;
            event.preventDefault();
        });
        mouseMove
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_11_rxjs_operators_throttle__["b" /* throttle */])(function () { return Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_interval__["a" /* interval */])(MOUSE_MOVE_THROTTLE_MS); }))
            .subscribe(function (_a) {
            var clientX = _a.clientX, clientY = _a.clientY;
            var /** @type {?} */ resizeEdges = getResizeEdges({
                clientX: clientX,
                clientY: clientY,
                elm: _this.elm,
                allowedEdges: _this.resizeEdges,
                cursorPrecision: _this.resizeCursorPrecision
            });
            var /** @type {?} */ resizeCursors = Object.assign({}, DEFAULT_RESIZE_CURSORS, _this.resizeCursors);
            if (currentResize) {
                var /** @type {?} */ cursor = getResizeCursor(currentResize.edges, resizeCursors);
                _this.renderer.setStyle(document.body, 'cursor', cursor);
            }
            else {
                var /** @type {?} */ cursor = getResizeCursor(resizeEdges, resizeCursors);
                _this.renderer.setStyle(_this.elm.nativeElement, 'cursor', cursor);
            }
            _this.setElementClass(_this.elm, RESIZE_ACTIVE_CLASS, !!currentResize);
            _this.setElementClass(_this.elm, RESIZE_LEFT_HOVER_CLASS, resizeEdges.left === true);
            _this.setElementClass(_this.elm, RESIZE_RIGHT_HOVER_CLASS, resizeEdges.right === true);
            _this.setElementClass(_this.elm, RESIZE_TOP_HOVER_CLASS, resizeEdges.top === true);
            _this.setElementClass(_this.elm, RESIZE_BOTTOM_HOVER_CLASS, resizeEdges.bottom === true);
        });
        var /** @type {?} */ mousedrag = this.mousedown
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators_mergeMap__["a" /* mergeMap */])(function (startCoords) {
            /**
             * @param {?} moveCoords
             * @return {?}
             */
            function getDiff(moveCoords) {
                return {
                    clientX: moveCoords.clientX - startCoords.clientX,
                    clientY: moveCoords.clientY - startCoords.clientY
                };
            }
            var /** @type {?} */ getSnapGrid = function () {
                var /** @type {?} */ snapGrid = { x: 1, y: 1 };
                if (currentResize) {
                    if (_this.resizeSnapGrid.left && currentResize.edges.left) {
                        snapGrid.x = +_this.resizeSnapGrid.left;
                    }
                    else if (_this.resizeSnapGrid.right &&
                        currentResize.edges.right) {
                        snapGrid.x = +_this.resizeSnapGrid.right;
                    }
                    if (_this.resizeSnapGrid.top && currentResize.edges.top) {
                        snapGrid.y = +_this.resizeSnapGrid.top;
                    }
                    else if (_this.resizeSnapGrid.bottom &&
                        currentResize.edges.bottom) {
                        snapGrid.y = +_this.resizeSnapGrid.bottom;
                    }
                }
                return snapGrid;
            };
            /**
             * @param {?} coords
             * @param {?} snapGrid
             * @return {?}
             */
            function getGrid(coords, snapGrid) {
                return {
                    x: Math.ceil(coords.clientX / snapGrid.x),
                    y: Math.ceil(coords.clientY / snapGrid.y)
                };
            }
            return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_merge__["a" /* merge */])(mouseMove.pipe(Object(__WEBPACK_IMPORTED_MODULE_10_rxjs_operators_take__["a" /* take */])(1)).pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_map__["a" /* map */])(function (coords) { return [, coords]; })), mouseMove.pipe(Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_operators_pairwise__["a" /* pairwise */])()))
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_map__["a" /* map */])(function (_a) {
                var previousCoords = _a[0], newCoords = _a[1];
                return [
                    previousCoords ? getDiff(previousCoords) : previousCoords,
                    getDiff(newCoords)
                ];
            }))
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_8_rxjs_operators_filter__["a" /* filter */])(function (_a) {
                var previousCoords = _a[0], newCoords = _a[1];
                if (!previousCoords) {
                    return true;
                }
                var /** @type {?} */ snapGrid = getSnapGrid();
                var /** @type {?} */ previousGrid = getGrid(previousCoords, snapGrid);
                var /** @type {?} */ newGrid = getGrid(newCoords, snapGrid);
                return (previousGrid.x !== newGrid.x || previousGrid.y !== newGrid.y);
            }))
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_map__["a" /* map */])(function (_a) {
                var newCoords = _a[1];
                var /** @type {?} */ snapGrid = getSnapGrid();
                return {
                    clientX: Math.round(newCoords.clientX / snapGrid.x) * snapGrid.x,
                    clientY: Math.round(newCoords.clientY / snapGrid.y) * snapGrid.y
                };
            }))
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators_takeUntil__["a" /* takeUntil */])(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_merge__["a" /* merge */])(_this.mouseup, _this.mousedown)));
        }))
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_8_rxjs_operators_filter__["a" /* filter */])(function () { return !!currentResize; }));
        mousedrag
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_map__["a" /* map */])(function (_a) {
            var clientX = _a.clientX, clientY = _a.clientY;
            return getNewBoundingRectangle(/** @type {?} */ ((currentResize)).startingRect, /** @type {?} */ ((currentResize)).edges, clientX, clientY);
        }))
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_8_rxjs_operators_filter__["a" /* filter */])(function (newBoundingRect) {
            return !!(newBoundingRect.height &&
                newBoundingRect.width &&
                newBoundingRect.height > 0 &&
                newBoundingRect.width > 0);
        }))
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_8_rxjs_operators_filter__["a" /* filter */])(function (newBoundingRect) {
            return _this.validateResize
                ? _this.validateResize({
                    rectangle: newBoundingRect,
                    edges: getEdgesDiff({
                        edges: /** @type {?} */ ((currentResize)).edges,
                        initialRectangle: /** @type {?} */ ((currentResize)).startingRect,
                        newRectangle: newBoundingRect
                    })
                })
                : true;
        }))
            .subscribe(function (newBoundingRect) {
            if (currentResize && currentResize.clonedNode) {
                _this.renderer.setStyle(currentResize.clonedNode, 'height', newBoundingRect.height + "px");
                _this.renderer.setStyle(currentResize.clonedNode, 'width', newBoundingRect.width + "px");
                _this.renderer.setStyle(currentResize.clonedNode, 'top', newBoundingRect.top + "px");
                _this.renderer.setStyle(currentResize.clonedNode, 'left', newBoundingRect.left + "px");
            }
            _this.zone.run(function () {
                _this.resizing.emit({
                    edges: getEdgesDiff({
                        edges: /** @type {?} */ ((currentResize)).edges,
                        initialRectangle: /** @type {?} */ ((currentResize)).startingRect,
                        newRectangle: newBoundingRect
                    }),
                    rectangle: newBoundingRect
                });
            }); /** @type {?} */
            ((currentResize)).currentRect = newBoundingRect;
        });
        this.mousedown
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_map__["a" /* map */])(function (_a) {
            var clientX = _a.clientX, clientY = _a.clientY, edges = _a.edges;
            return (edges ||
                getResizeEdges({
                    clientX: clientX,
                    clientY: clientY,
                    elm: _this.elm,
                    allowedEdges: _this.resizeEdges,
                    cursorPrecision: _this.resizeCursorPrecision
                }));
        }))
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_8_rxjs_operators_filter__["a" /* filter */])(function (edges) {
            return Object.keys(edges).length > 0;
        }))
            .subscribe(function (edges) {
            if (currentResize) {
                removeGhostElement();
            }
            var /** @type {?} */ startingRect = getElementRect(_this.elm, _this.ghostElementPositioning);
            currentResize = {
                edges: edges,
                startingRect: startingRect,
                currentRect: startingRect
            };
            if (_this.enableGhostResize) {
                currentResize.clonedNode = _this.elm.nativeElement.cloneNode(true);
                var /** @type {?} */ resizeCursors = Object.assign({}, DEFAULT_RESIZE_CURSORS, _this.resizeCursors);
                _this.elm.nativeElement.parentElement.appendChild(currentResize.clonedNode);
                _this.renderer.setStyle(_this.elm.nativeElement, 'visibility', 'hidden');
                _this.renderer.setStyle(currentResize.clonedNode, 'position', _this.ghostElementPositioning);
                _this.renderer.setStyle(currentResize.clonedNode, 'left', currentResize.startingRect.left + "px");
                _this.renderer.setStyle(currentResize.clonedNode, 'top', currentResize.startingRect.top + "px");
                _this.renderer.setStyle(currentResize.clonedNode, 'height', currentResize.startingRect.height + "px");
                _this.renderer.setStyle(currentResize.clonedNode, 'width', currentResize.startingRect.width + "px");
                _this.renderer.setStyle(currentResize.clonedNode, 'cursor', getResizeCursor(currentResize.edges, resizeCursors));
                _this.renderer.addClass(currentResize.clonedNode, RESIZE_GHOST_ELEMENT_CLASS); /** @type {?} */
                ((currentResize.clonedNode)).scrollTop = /** @type {?} */ (currentResize.startingRect
                    .scrollTop); /** @type {?} */
                ((currentResize.clonedNode)).scrollLeft = /** @type {?} */ (currentResize.startingRect
                    .scrollLeft);
            }
            _this.zone.run(function () {
                _this.resizeStart.emit({
                    edges: getEdgesDiff({
                        edges: edges,
                        initialRectangle: startingRect,
                        newRectangle: startingRect
                    }),
                    rectangle: getNewBoundingRectangle(startingRect, {}, 0, 0)
                });
            });
        });
        this.mouseup.subscribe(function () {
            if (currentResize) {
                _this.renderer.removeClass(_this.elm.nativeElement, RESIZE_ACTIVE_CLASS);
                _this.renderer.setStyle(document.body, 'cursor', '');
                _this.renderer.setStyle(_this.elm.nativeElement, 'cursor', '');
                _this.zone.run(function () {
                    _this.resizeEnd.emit({
                        edges: getEdgesDiff({
                            edges: /** @type {?} */ ((currentResize)).edges,
                            initialRectangle: /** @type {?} */ ((currentResize)).startingRect,
                            newRectangle: /** @type {?} */ ((currentResize)).currentRect
                        }),
                        rectangle: /** @type {?} */ ((currentResize)).currentRect
                    });
                });
                removeGhostElement();
                currentResize = null;
            }
        });
    };
    /**
     * @hidden
     * @return {?}
     */
    ResizableDirective.prototype.ngOnDestroy = function () {
        this.mousedown.complete();
        this.mouseup.complete();
        this.mousemove.complete();
        this.pointerEventListenerSubscriptions.pointerDown.unsubscribe();
        this.pointerEventListenerSubscriptions.pointerMove.unsubscribe();
        this.pointerEventListenerSubscriptions.pointerUp.unsubscribe();
    };
    /**
     * @param {?} elm
     * @param {?} name
     * @param {?} add
     * @return {?}
     */
    ResizableDirective.prototype.setElementClass = function (elm, name, add) {
        if (add) {
            this.renderer.addClass(elm.nativeElement, name);
        }
        else {
            this.renderer.removeClass(elm.nativeElement, name);
        }
    };
    return ResizableDirective;
}());
ResizableDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[mwlResizable]'
            },] },
];
/** @nocollapse */
ResizableDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
]; };
ResizableDirective.propDecorators = {
    "validateResize": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "resizeEdges": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "enableGhostResize": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "resizeSnapGrid": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "resizeCursors": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "resizeCursorPrecision": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "ghostElementPositioning": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "resizeStart": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    "resizing": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    "resizeEnd": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
var PointerEventListeners = /** @class */ (function () {
    /**
     * @param {?} renderer
     * @param {?} zone
     */
    function PointerEventListeners(renderer, zone) {
        this.pointerDown = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            var /** @type {?} */ unsubscribeMouseDown;
            var /** @type {?} */ unsubscribeTouchStart;
            zone.runOutsideAngular(function () {
                unsubscribeMouseDown = renderer.listen('document', 'mousedown', function (event) {
                    observer.next({
                        clientX: event.clientX,
                        clientY: event.clientY,
                        event: event
                    });
                });
                unsubscribeTouchStart = renderer.listen('document', 'touchstart', function (event) {
                    observer.next({
                        clientX: event.touches[0].clientX,
                        clientY: event.touches[0].clientY,
                        event: event
                    });
                });
            });
            return function () {
                unsubscribeMouseDown();
                unsubscribeTouchStart();
            };
        }).pipe(Object(__WEBPACK_IMPORTED_MODULE_12_rxjs_operators_share__["a" /* share */])());
        this.pointerMove = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            var /** @type {?} */ unsubscribeMouseMove;
            var /** @type {?} */ unsubscribeTouchMove;
            zone.runOutsideAngular(function () {
                unsubscribeMouseMove = renderer.listen('document', 'mousemove', function (event) {
                    observer.next({
                        clientX: event.clientX,
                        clientY: event.clientY,
                        event: event
                    });
                });
                unsubscribeTouchMove = renderer.listen('document', 'touchmove', function (event) {
                    observer.next({
                        clientX: event.targetTouches[0].clientX,
                        clientY: event.targetTouches[0].clientY,
                        event: event
                    });
                });
            });
            return function () {
                unsubscribeMouseMove();
                unsubscribeTouchMove();
            };
        }).pipe(Object(__WEBPACK_IMPORTED_MODULE_12_rxjs_operators_share__["a" /* share */])());
        this.pointerUp = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            var /** @type {?} */ unsubscribeMouseUp;
            var /** @type {?} */ unsubscribeTouchEnd;
            var /** @type {?} */ unsubscribeTouchCancel;
            zone.runOutsideAngular(function () {
                unsubscribeMouseUp = renderer.listen('document', 'mouseup', function (event) {
                    observer.next({
                        clientX: event.clientX,
                        clientY: event.clientY,
                        event: event
                    });
                });
                unsubscribeTouchEnd = renderer.listen('document', 'touchend', function (event) {
                    observer.next({
                        clientX: event.changedTouches[0].clientX,
                        clientY: event.changedTouches[0].clientY,
                        event: event
                    });
                });
                unsubscribeTouchCancel = renderer.listen('document', 'touchcancel', function (event) {
                    observer.next({
                        clientX: event.changedTouches[0].clientX,
                        clientY: event.changedTouches[0].clientY,
                        event: event
                    });
                });
            });
            return function () {
                unsubscribeMouseUp();
                unsubscribeTouchEnd();
                unsubscribeTouchCancel();
            };
        }).pipe(Object(__WEBPACK_IMPORTED_MODULE_12_rxjs_operators_share__["a" /* share */])());
    }
    /**
     * @param {?} renderer
     * @param {?} zone
     * @return {?}
     */
    PointerEventListeners.getInstance = function (renderer, zone) {
        if (!PointerEventListeners.instance) {
            PointerEventListeners.instance = new PointerEventListeners(renderer, zone);
        }
        return PointerEventListeners.instance;
    };
    return PointerEventListeners;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * An element placed inside a `mwlResizable` directive to be used as a drag and resize handle
 *
 * For example
 *
 * ```html
 * <div mwlResizable>
 *   <div mwlResizeHandle [resizeEdges]="{bottom: true, right: true}"></div>
 * </div>
 * ```
 */
var ResizeHandleDirective = /** @class */ (function () {
    /**
     * @param {?} renderer
     * @param {?} element
     * @param {?} zone
     * @param {?} resizable
     */
    function ResizeHandleDirective(renderer, element, zone, resizable) {
        this.renderer = renderer;
        this.element = element;
        this.zone = zone;
        this.resizable = resizable;
        /**
         * The `Edges` object that contains the edges of the parent element that dragging the handle will trigger a resize on
         */
        this.resizeEdges = {};
        this.eventListeners = {};
    }
    /**
     * @return {?}
     */
    ResizeHandleDirective.prototype.ngOnDestroy = function () {
        this.unsubscribeEventListeners();
    };
    /**
     * @hidden
     * @param {?} event
     * @param {?} clientX
     * @param {?} clientY
     * @return {?}
     */
    ResizeHandleDirective.prototype.onMousedown = function (event, clientX, clientY) {
        var _this = this;
        event.preventDefault();
        this.zone.runOutsideAngular(function () {
            if (!_this.eventListeners.touchmove) {
                _this.eventListeners.touchmove = _this.renderer.listen(_this.element.nativeElement, 'touchmove', function (touchMoveEvent) {
                    _this.onMousemove(touchMoveEvent, touchMoveEvent.targetTouches[0].clientX, touchMoveEvent.targetTouches[0].clientY);
                });
            }
            if (!_this.eventListeners.mousemove) {
                _this.eventListeners.mousemove = _this.renderer.listen(_this.element.nativeElement, 'mousemove', function (mouseMoveEvent) {
                    _this.onMousemove(mouseMoveEvent, mouseMoveEvent.clientX, mouseMoveEvent.clientY);
                });
            }
            _this.resizable.mousedown.next({
                clientX: clientX,
                clientY: clientY,
                edges: _this.resizeEdges
            });
        });
    };
    /**
     * @hidden
     * @param {?} clientX
     * @param {?} clientY
     * @return {?}
     */
    ResizeHandleDirective.prototype.onMouseup = function (clientX, clientY) {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            _this.unsubscribeEventListeners();
            _this.resizable.mouseup.next({
                clientX: clientX,
                clientY: clientY,
                edges: _this.resizeEdges
            });
        });
    };
    /**
     * @param {?} event
     * @param {?} clientX
     * @param {?} clientY
     * @return {?}
     */
    ResizeHandleDirective.prototype.onMousemove = function (event, clientX, clientY) {
        this.resizable.mousemove.next({
            clientX: clientX,
            clientY: clientY,
            edges: this.resizeEdges,
            event: event
        });
    };
    /**
     * @return {?}
     */
    ResizeHandleDirective.prototype.unsubscribeEventListeners = function () {
        var _this = this;
        Object.keys(this.eventListeners).forEach(function (type) {
            ((_this)).eventListeners[type]();
            delete _this.eventListeners[type];
        });
    };
    return ResizeHandleDirective;
}());
ResizeHandleDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[mwlResizeHandle]'
            },] },
];
/** @nocollapse */
ResizeHandleDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
    { type: ResizableDirective, },
]; };
ResizeHandleDirective.propDecorators = {
    "resizeEdges": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    "onMousedown": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['touchstart', [
                    '$event',
                    '$event.touches[0].clientX',
                    '$event.touches[0].clientY'
                ],] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['mousedown', ['$event', '$event.clientX', '$event.clientY'],] },],
    "onMouseup": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['touchend', [
                    '$event.changedTouches[0].clientX',
                    '$event.changedTouches[0].clientY'
                ],] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['touchcancel', [
                    '$event.changedTouches[0].clientX',
                    '$event.changedTouches[0].clientY'
                ],] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['mouseup', ['$event.clientX', '$event.clientY'],] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ResizableModule = /** @class */ (function () {
    function ResizableModule() {
    }
    return ResizableModule;
}());
ResizableModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                declarations: [ResizableDirective, ResizeHandleDirective],
                exports: [ResizableDirective, ResizeHandleDirective]
            },] },
];
/** @nocollapse */
ResizableModule.ctorParameters = function () { return []; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=angular-resizable-element.js.map


/***/ }),

/***/ "../../../../calendar-utils/dist/calendar-utils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DAYS_OF_WEEK; });
/* unused harmony export SECONDS_IN_DAY */
/* unused harmony export SECONDS_IN_WEEK */
/* unused harmony export getWeekViewEventOffset */
/* unused harmony export getEventsInPeriod */
/* harmony export (immutable) */ __webpack_exports__["f"] = getWeekViewHeader;
/* harmony export (immutable) */ __webpack_exports__["e"] = getWeekView;
/* harmony export (immutable) */ __webpack_exports__["d"] = getMonthView;
/* harmony export (immutable) */ __webpack_exports__["b"] = getDayView;
/* harmony export (immutable) */ __webpack_exports__["c"] = getDayViewHourGrid;
/* unused harmony export EventValidationErrorMessage */
/* harmony export (immutable) */ __webpack_exports__["g"] = validateEvents;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_date_fns_add_days__ = __webpack_require__("../../../../date-fns/add_days/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_date_fns_add_days___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_date_fns_add_days__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_add_hours__ = __webpack_require__("../../../../date-fns/add_hours/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_add_hours___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns_add_hours__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns_add_minutes__ = __webpack_require__("../../../../date-fns/add_minutes/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns_add_minutes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_date_fns_add_minutes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns_add_seconds__ = __webpack_require__("../../../../date-fns/add_seconds/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns_add_seconds___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_date_fns_add_seconds__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_date_fns_difference_in_days__ = __webpack_require__("../../../../date-fns/difference_in_days/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_date_fns_difference_in_days___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_date_fns_difference_in_days__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_date_fns_difference_in_minutes__ = __webpack_require__("../../../../date-fns/difference_in_minutes/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_date_fns_difference_in_minutes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_date_fns_difference_in_minutes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_date_fns_difference_in_seconds__ = __webpack_require__("../../../../date-fns/difference_in_seconds/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_date_fns_difference_in_seconds___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_date_fns_difference_in_seconds__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_date_fns_end_of_day__ = __webpack_require__("../../../../date-fns/end_of_day/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_date_fns_end_of_day___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_date_fns_end_of_day__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_date_fns_end_of_month__ = __webpack_require__("../../../../date-fns/end_of_month/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_date_fns_end_of_month___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_date_fns_end_of_month__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_date_fns_end_of_week__ = __webpack_require__("../../../../date-fns/end_of_week/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_date_fns_end_of_week___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_date_fns_end_of_week__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_date_fns_get_day__ = __webpack_require__("../../../../date-fns/get_day/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_date_fns_get_day___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_date_fns_get_day__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_date_fns_is_date__ = __webpack_require__("../../../../date-fns/is_date/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_date_fns_is_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_date_fns_is_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_date_fns_is_same_day__ = __webpack_require__("../../../../date-fns/is_same_day/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_date_fns_is_same_day___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_date_fns_is_same_day__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_date_fns_is_same_month__ = __webpack_require__("../../../../date-fns/is_same_month/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_date_fns_is_same_month___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_date_fns_is_same_month__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_date_fns_is_same_second__ = __webpack_require__("../../../../date-fns/is_same_second/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_date_fns_is_same_second___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_date_fns_is_same_second__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_date_fns_max__ = __webpack_require__("../../../../date-fns/max/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_date_fns_max___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_date_fns_max__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_date_fns_set_hours__ = __webpack_require__("../../../../date-fns/set_hours/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_date_fns_set_hours___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_date_fns_set_hours__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_date_fns_set_minutes__ = __webpack_require__("../../../../date-fns/set_minutes/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_date_fns_set_minutes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_date_fns_set_minutes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_date_fns_start_of_day__ = __webpack_require__("../../../../date-fns/start_of_day/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_date_fns_start_of_day___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_date_fns_start_of_day__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_date_fns_start_of_minute__ = __webpack_require__("../../../../date-fns/start_of_minute/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_date_fns_start_of_minute___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_date_fns_start_of_minute__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_date_fns_start_of_month__ = __webpack_require__("../../../../date-fns/start_of_month/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_date_fns_start_of_month___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_date_fns_start_of_month__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_date_fns_start_of_week__ = __webpack_require__("../../../../date-fns/start_of_week/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_date_fns_start_of_week___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_date_fns_start_of_week__);






















var DAYS_OF_WEEK;
(function (DAYS_OF_WEEK) {
    DAYS_OF_WEEK[DAYS_OF_WEEK["SUNDAY"] = 0] = "SUNDAY";
    DAYS_OF_WEEK[DAYS_OF_WEEK["MONDAY"] = 1] = "MONDAY";
    DAYS_OF_WEEK[DAYS_OF_WEEK["TUESDAY"] = 2] = "TUESDAY";
    DAYS_OF_WEEK[DAYS_OF_WEEK["WEDNESDAY"] = 3] = "WEDNESDAY";
    DAYS_OF_WEEK[DAYS_OF_WEEK["THURSDAY"] = 4] = "THURSDAY";
    DAYS_OF_WEEK[DAYS_OF_WEEK["FRIDAY"] = 5] = "FRIDAY";
    DAYS_OF_WEEK[DAYS_OF_WEEK["SATURDAY"] = 6] = "SATURDAY";
})(DAYS_OF_WEEK || (DAYS_OF_WEEK = {}));
var DEFAULT_WEEKEND_DAYS = [
    DAYS_OF_WEEK.SUNDAY,
    DAYS_OF_WEEK.SATURDAY
];
var DAYS_IN_WEEK = 7;
var HOURS_IN_DAY = 24;
var MINUTES_IN_HOUR = 60;
var SECONDS_IN_DAY = 60 * 60 * 24;
var SECONDS_IN_WEEK = SECONDS_IN_DAY * DAYS_IN_WEEK;
function getExcludedSeconds(_a) {
    var startDate = _a.startDate, seconds = _a.seconds, excluded = _a.excluded, _b = _a.precision, precision = _b === void 0 ? 'days' : _b;
    if (excluded.length < 1) {
        return 0;
    }
    var endDate = __WEBPACK_IMPORTED_MODULE_3_date_fns_add_seconds___default()(startDate, seconds - 1);
    var dayStart = __WEBPACK_IMPORTED_MODULE_10_date_fns_get_day___default()(startDate);
    var dayEnd = __WEBPACK_IMPORTED_MODULE_10_date_fns_get_day___default()(__WEBPACK_IMPORTED_MODULE_3_date_fns_add_seconds___default()(endDate, 0));
    var result = 0; // Calculated in seconds
    var current = startDate;
    var _loop_1 = function () {
        var day = __WEBPACK_IMPORTED_MODULE_10_date_fns_get_day___default()(current);
        if (excluded.some(function (excludedDay) { return excludedDay === day; })) {
            result += calculateExcludedSeconds({
                dayStart: dayStart,
                dayEnd: dayEnd,
                day: day,
                precision: precision,
                startDate: startDate,
                endDate: endDate
            });
        }
        current = __WEBPACK_IMPORTED_MODULE_0_date_fns_add_days___default()(current, 1);
    };
    while (current < endDate) {
        _loop_1();
    }
    return result;
}
function calculateExcludedSeconds(_a) {
    var precision = _a.precision, day = _a.day, dayStart = _a.dayStart, dayEnd = _a.dayEnd, startDate = _a.startDate, endDate = _a.endDate;
    if (precision === 'minutes') {
        if (day === dayStart) {
            return __WEBPACK_IMPORTED_MODULE_6_date_fns_difference_in_seconds___default()(__WEBPACK_IMPORTED_MODULE_7_date_fns_end_of_day___default()(startDate), startDate) + 1;
        }
        else if (day === dayEnd) {
            return __WEBPACK_IMPORTED_MODULE_6_date_fns_difference_in_seconds___default()(endDate, __WEBPACK_IMPORTED_MODULE_18_date_fns_start_of_day___default()(endDate)) + 1;
        }
    }
    return SECONDS_IN_DAY;
}
function getWeekViewEventSpan(_a) {
    var event = _a.event, offset = _a.offset, startOfWeekDate = _a.startOfWeekDate, excluded = _a.excluded, _b = _a.precision, precision = _b === void 0 ? 'days' : _b;
    var span = SECONDS_IN_DAY;
    var begin = __WEBPACK_IMPORTED_MODULE_15_date_fns_max___default()(event.start, startOfWeekDate);
    if (event.end) {
        switch (precision) {
            case 'minutes':
                span = __WEBPACK_IMPORTED_MODULE_6_date_fns_difference_in_seconds___default()(event.end, begin);
                break;
            default:
                span =
                    __WEBPACK_IMPORTED_MODULE_4_date_fns_difference_in_days___default()(__WEBPACK_IMPORTED_MODULE_0_date_fns_add_days___default()(__WEBPACK_IMPORTED_MODULE_7_date_fns_end_of_day___default()(event.end), 1), begin) *
                        SECONDS_IN_DAY;
                break;
        }
    }
    var offsetSeconds = offset * SECONDS_IN_DAY;
    var totalLength = offsetSeconds + span;
    // the best way to detect if an event is outside the week-view
    // is to check if the total span beginning (from startOfWeekDay or event start) exceeds 7days
    if (totalLength > SECONDS_IN_WEEK) {
        span = SECONDS_IN_WEEK - offsetSeconds;
    }
    span -= getExcludedSeconds({
        startDate: begin,
        seconds: span,
        excluded: excluded,
        precision: precision
    });
    return span / SECONDS_IN_DAY;
}
function getWeekViewEventOffset(_a) {
    var event = _a.event, startOfWeekDate = _a.startOfWeek, _b = _a.excluded, excluded = _b === void 0 ? [] : _b, _c = _a.precision, precision = _c === void 0 ? 'days' : _c;
    if (event.start < startOfWeekDate) {
        return 0;
    }
    var offset = 0;
    switch (precision) {
        case 'days':
            offset =
                __WEBPACK_IMPORTED_MODULE_4_date_fns_difference_in_days___default()(__WEBPACK_IMPORTED_MODULE_18_date_fns_start_of_day___default()(event.start), startOfWeekDate) *
                    SECONDS_IN_DAY;
            break;
        case 'minutes':
            offset = __WEBPACK_IMPORTED_MODULE_6_date_fns_difference_in_seconds___default()(event.start, startOfWeekDate);
            break;
    }
    offset -= getExcludedSeconds({
        startDate: startOfWeekDate,
        seconds: offset,
        excluded: excluded,
        precision: precision
    });
    return offset / SECONDS_IN_DAY;
}
function isEventIsPeriod(_a) {
    var event = _a.event, periodStart = _a.periodStart, periodEnd = _a.periodEnd;
    var eventStart = event.start;
    var eventEnd = event.end || event.start;
    if (eventStart > periodStart && eventStart < periodEnd) {
        return true;
    }
    if (eventEnd > periodStart && eventEnd < periodEnd) {
        return true;
    }
    if (eventStart < periodStart && eventEnd > periodEnd) {
        return true;
    }
    if (__WEBPACK_IMPORTED_MODULE_14_date_fns_is_same_second___default()(eventStart, periodStart) ||
        __WEBPACK_IMPORTED_MODULE_14_date_fns_is_same_second___default()(eventStart, periodEnd)) {
        return true;
    }
    if (__WEBPACK_IMPORTED_MODULE_14_date_fns_is_same_second___default()(eventEnd, periodStart) ||
        __WEBPACK_IMPORTED_MODULE_14_date_fns_is_same_second___default()(eventEnd, periodEnd)) {
        return true;
    }
    return false;
}
function getEventsInPeriod(_a) {
    var events = _a.events, periodStart = _a.periodStart, periodEnd = _a.periodEnd;
    return events.filter(function (event) {
        return isEventIsPeriod({ event: event, periodStart: periodStart, periodEnd: periodEnd });
    });
}
function getWeekDay(_a) {
    var date = _a.date, _b = _a.weekendDays, weekendDays = _b === void 0 ? DEFAULT_WEEKEND_DAYS : _b;
    var today = __WEBPACK_IMPORTED_MODULE_18_date_fns_start_of_day___default()(new Date());
    return {
        date: date,
        isPast: date < today,
        isToday: __WEBPACK_IMPORTED_MODULE_12_date_fns_is_same_day___default()(date, today),
        isFuture: date > today,
        isWeekend: weekendDays.indexOf(__WEBPACK_IMPORTED_MODULE_10_date_fns_get_day___default()(date)) > -1
    };
}
function getWeekViewHeader(_a) {
    var viewDate = _a.viewDate, weekStartsOn = _a.weekStartsOn, _b = _a.excluded, excluded = _b === void 0 ? [] : _b, weekendDays = _a.weekendDays;
    var start = __WEBPACK_IMPORTED_MODULE_21_date_fns_start_of_week___default()(viewDate, { weekStartsOn: weekStartsOn });
    var days = [];
    var _loop_2 = function (i) {
        var date = __WEBPACK_IMPORTED_MODULE_0_date_fns_add_days___default()(start, i);
        if (!excluded.some(function (e) { return date.getDay() === e; })) {
            days.push(getWeekDay({ date: date, weekendDays: weekendDays }));
        }
    };
    for (var i = 0; i < DAYS_IN_WEEK; i++) {
        _loop_2(i);
    }
    return days;
}
function getWeekView(_a) {
    var _b = _a.events, events = _b === void 0 ? [] : _b, viewDate = _a.viewDate, weekStartsOn = _a.weekStartsOn, _c = _a.excluded, excluded = _c === void 0 ? [] : _c, _d = _a.precision, precision = _d === void 0 ? 'days' : _d, _e = _a.absolutePositionedEvents, absolutePositionedEvents = _e === void 0 ? false : _e;
    if (!events) {
        events = [];
    }
    var startOfViewWeek = __WEBPACK_IMPORTED_MODULE_21_date_fns_start_of_week___default()(viewDate, { weekStartsOn: weekStartsOn });
    var endOfViewWeek = __WEBPACK_IMPORTED_MODULE_9_date_fns_end_of_week___default()(viewDate, { weekStartsOn: weekStartsOn });
    var maxRange = DAYS_IN_WEEK - excluded.length;
    var eventsInPeriod = getEventsInPeriod({
        events: events,
        periodStart: startOfViewWeek,
        periodEnd: endOfViewWeek
    });
    var eventsMapped = eventsInPeriod
        .map(function (event) {
        var offset = getWeekViewEventOffset({
            event: event,
            startOfWeek: startOfViewWeek,
            excluded: excluded,
            precision: precision
        });
        var span = getWeekViewEventSpan({
            event: event,
            offset: offset,
            startOfWeekDate: startOfViewWeek,
            excluded: excluded,
            precision: precision
        });
        return { event: event, offset: offset, span: span };
    })
        .filter(function (e) { return e.offset < maxRange; })
        .filter(function (e) { return e.span > 0; })
        .map(function (entry) { return ({
        event: entry.event,
        offset: entry.offset,
        span: entry.span,
        startsBeforeWeek: entry.event.start < startOfViewWeek,
        endsAfterWeek: (entry.event.end || entry.event.start) > endOfViewWeek
    }); })
        .sort(function (itemA, itemB) {
        var startSecondsDiff = __WEBPACK_IMPORTED_MODULE_6_date_fns_difference_in_seconds___default()(itemA.event.start, itemB.event.start);
        if (startSecondsDiff === 0) {
            return __WEBPACK_IMPORTED_MODULE_6_date_fns_difference_in_seconds___default()(itemB.event.end || itemB.event.start, itemA.event.end || itemA.event.start);
        }
        return startSecondsDiff;
    });
    var eventRows = [];
    var allocatedEvents = [];
    eventsMapped.forEach(function (event, index) {
        if (allocatedEvents.indexOf(event) === -1) {
            allocatedEvents.push(event);
            var rowSpan_1 = event.span + event.offset;
            var otherRowEvents = eventsMapped
                .slice(index + 1)
                .filter(function (nextEvent) {
                if (nextEvent.offset >= rowSpan_1 &&
                    rowSpan_1 + nextEvent.span <= DAYS_IN_WEEK &&
                    allocatedEvents.indexOf(nextEvent) === -1) {
                    var nextEventOffset = nextEvent.offset - rowSpan_1;
                    if (!absolutePositionedEvents) {
                        nextEvent.offset = nextEventOffset;
                    }
                    rowSpan_1 += nextEvent.span + nextEventOffset;
                    allocatedEvents.push(nextEvent);
                    return true;
                }
            });
            eventRows.push({
                row: [event].concat(otherRowEvents)
            });
        }
    });
    return {
        eventRows: eventRows,
        period: {
            events: eventsInPeriod,
            start: startOfViewWeek,
            end: endOfViewWeek
        }
    };
}
function getMonthView(_a) {
    var _b = _a.events, events = _b === void 0 ? [] : _b, viewDate = _a.viewDate, weekStartsOn = _a.weekStartsOn, _c = _a.excluded, excluded = _c === void 0 ? [] : _c, _d = _a.viewStart, viewStart = _d === void 0 ? __WEBPACK_IMPORTED_MODULE_20_date_fns_start_of_month___default()(viewDate) : _d, _e = _a.viewEnd, viewEnd = _e === void 0 ? __WEBPACK_IMPORTED_MODULE_8_date_fns_end_of_month___default()(viewDate) : _e, weekendDays = _a.weekendDays;
    if (!events) {
        events = [];
    }
    var start = __WEBPACK_IMPORTED_MODULE_21_date_fns_start_of_week___default()(viewStart, { weekStartsOn: weekStartsOn });
    var end = __WEBPACK_IMPORTED_MODULE_9_date_fns_end_of_week___default()(viewEnd, { weekStartsOn: weekStartsOn });
    var eventsInMonth = getEventsInPeriod({
        events: events,
        periodStart: start,
        periodEnd: end
    });
    var initialViewDays = [];
    var previousDate;
    var _loop_3 = function (i) {
        // hacky fix for https://github.com/mattlewis92/angular-calendar/issues/173
        var date;
        if (previousDate) {
            date = __WEBPACK_IMPORTED_MODULE_18_date_fns_start_of_day___default()(__WEBPACK_IMPORTED_MODULE_1_date_fns_add_hours___default()(previousDate, HOURS_IN_DAY));
            if (previousDate.getTime() === date.getTime()) {
                // DST change, so need to add 25 hours
                date = __WEBPACK_IMPORTED_MODULE_18_date_fns_start_of_day___default()(__WEBPACK_IMPORTED_MODULE_1_date_fns_add_hours___default()(previousDate, HOURS_IN_DAY + 1));
            }
            previousDate = date;
        }
        else {
            date = previousDate = start;
        }
        if (!excluded.some(function (e) { return date.getDay() === e; })) {
            var day = getWeekDay({
                date: date,
                weekendDays: weekendDays
            });
            var eventsInPeriod = getEventsInPeriod({
                events: eventsInMonth,
                periodStart: __WEBPACK_IMPORTED_MODULE_18_date_fns_start_of_day___default()(date),
                periodEnd: __WEBPACK_IMPORTED_MODULE_7_date_fns_end_of_day___default()(date)
            });
            day.inMonth = __WEBPACK_IMPORTED_MODULE_13_date_fns_is_same_month___default()(date, viewDate);
            day.events = eventsInPeriod;
            day.badgeTotal = eventsInPeriod.length;
            initialViewDays.push(day);
        }
    };
    for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_4_date_fns_difference_in_days___default()(end, start) + 1; i++) {
        _loop_3(i);
    }
    var days = [];
    var totalDaysVisibleInWeek = DAYS_IN_WEEK - excluded.length;
    if (totalDaysVisibleInWeek < DAYS_IN_WEEK) {
        for (var i = 0; i < initialViewDays.length; i += totalDaysVisibleInWeek) {
            var row = initialViewDays.slice(i, i + totalDaysVisibleInWeek);
            var isRowInMonth = row.some(function (day) { return day.date.getMonth() === viewDate.getMonth(); });
            if (isRowInMonth) {
                days = days.concat(row);
            }
        }
    }
    else {
        days = initialViewDays;
    }
    var rows = Math.floor(days.length / totalDaysVisibleInWeek);
    var rowOffsets = [];
    for (var i = 0; i < rows; i++) {
        rowOffsets.push(i * totalDaysVisibleInWeek);
    }
    return {
        rowOffsets: rowOffsets,
        totalDaysVisibleInWeek: totalDaysVisibleInWeek,
        days: days,
        period: {
            start: start,
            end: end,
            events: eventsInMonth
        }
    };
}
function getDayView(_a) {
    var _b = _a.events, events = _b === void 0 ? [] : _b, viewDate = _a.viewDate, hourSegments = _a.hourSegments, dayStart = _a.dayStart, dayEnd = _a.dayEnd, eventWidth = _a.eventWidth, segmentHeight = _a.segmentHeight;
    if (!events) {
        events = [];
    }
    var startOfView = __WEBPACK_IMPORTED_MODULE_17_date_fns_set_minutes___default()(__WEBPACK_IMPORTED_MODULE_16_date_fns_set_hours___default()(__WEBPACK_IMPORTED_MODULE_18_date_fns_start_of_day___default()(viewDate), dayStart.hour), dayStart.minute);
    var endOfView = __WEBPACK_IMPORTED_MODULE_17_date_fns_set_minutes___default()(__WEBPACK_IMPORTED_MODULE_16_date_fns_set_hours___default()(__WEBPACK_IMPORTED_MODULE_19_date_fns_start_of_minute___default()(__WEBPACK_IMPORTED_MODULE_7_date_fns_end_of_day___default()(viewDate)), dayEnd.hour), dayEnd.minute);
    var previousDayEvents = [];
    var eventsInPeriod = getEventsInPeriod({
        events: events.filter(function (event) { return !event.allDay; }),
        periodStart: startOfView,
        periodEnd: endOfView
    });
    var dayViewEvents = eventsInPeriod
        .sort(function (eventA, eventB) {
        return eventA.start.valueOf() - eventB.start.valueOf();
    })
        .map(function (event) {
        var eventStart = event.start;
        var eventEnd = event.end || eventStart;
        var startsBeforeDay = eventStart < startOfView;
        var endsAfterDay = eventEnd > endOfView;
        var hourHeightModifier = hourSegments * segmentHeight / MINUTES_IN_HOUR;
        var top = 0;
        if (eventStart > startOfView) {
            top += __WEBPACK_IMPORTED_MODULE_5_date_fns_difference_in_minutes___default()(eventStart, startOfView);
        }
        top *= hourHeightModifier;
        var startDate = startsBeforeDay ? startOfView : eventStart;
        var endDate = endsAfterDay ? endOfView : eventEnd;
        var height = __WEBPACK_IMPORTED_MODULE_5_date_fns_difference_in_minutes___default()(endDate, startDate);
        if (!event.end) {
            height = segmentHeight;
        }
        else {
            height *= hourHeightModifier;
        }
        var bottom = top + height;
        var overlappingPreviousEvents = previousDayEvents.filter(function (previousEvent) {
            var previousEventTop = previousEvent.top;
            var previousEventBottom = previousEvent.top + previousEvent.height;
            if (top < previousEventBottom && previousEventBottom < bottom) {
                return true;
            }
            else if (previousEventTop <= top && bottom <= previousEventBottom) {
                return true;
            }
            return false;
        });
        var left = 0;
        while (overlappingPreviousEvents.some(function (previousEvent) { return previousEvent.left === left; })) {
            left += eventWidth;
        }
        var dayEvent = {
            event: event,
            height: height,
            width: eventWidth,
            top: top,
            left: left,
            startsBeforeDay: startsBeforeDay,
            endsAfterDay: endsAfterDay
        };
        if (height > 0) {
            previousDayEvents.push(dayEvent);
        }
        return dayEvent;
    })
        .filter(function (dayEvent) { return dayEvent.height > 0; });
    var width = Math.max.apply(Math, dayViewEvents.map(function (event) { return event.left + event.width; }));
    var allDayEvents = getEventsInPeriod({
        events: events.filter(function (event) { return event.allDay; }),
        periodStart: __WEBPACK_IMPORTED_MODULE_18_date_fns_start_of_day___default()(startOfView),
        periodEnd: __WEBPACK_IMPORTED_MODULE_7_date_fns_end_of_day___default()(endOfView)
    });
    return {
        events: dayViewEvents,
        width: width,
        allDayEvents: allDayEvents,
        period: {
            events: eventsInPeriod,
            start: startOfView,
            end: endOfView
        }
    };
}
function getDayViewHourGrid(_a) {
    var viewDate = _a.viewDate, hourSegments = _a.hourSegments, dayStart = _a.dayStart, dayEnd = _a.dayEnd;
    var hours = [];
    var startOfView = __WEBPACK_IMPORTED_MODULE_17_date_fns_set_minutes___default()(__WEBPACK_IMPORTED_MODULE_16_date_fns_set_hours___default()(__WEBPACK_IMPORTED_MODULE_18_date_fns_start_of_day___default()(viewDate), dayStart.hour), dayStart.minute);
    var endOfView = __WEBPACK_IMPORTED_MODULE_17_date_fns_set_minutes___default()(__WEBPACK_IMPORTED_MODULE_16_date_fns_set_hours___default()(__WEBPACK_IMPORTED_MODULE_19_date_fns_start_of_minute___default()(__WEBPACK_IMPORTED_MODULE_7_date_fns_end_of_day___default()(viewDate)), dayEnd.hour), dayEnd.minute);
    var segmentDuration = MINUTES_IN_HOUR / hourSegments;
    var startOfViewDay = __WEBPACK_IMPORTED_MODULE_18_date_fns_start_of_day___default()(viewDate);
    for (var i = 0; i < HOURS_IN_DAY; i++) {
        var segments = [];
        for (var j = 0; j < hourSegments; j++) {
            var date = __WEBPACK_IMPORTED_MODULE_2_date_fns_add_minutes___default()(__WEBPACK_IMPORTED_MODULE_1_date_fns_add_hours___default()(startOfViewDay, i), j * segmentDuration);
            if (date >= startOfView && date < endOfView) {
                segments.push({
                    date: date,
                    isStart: j === 0
                });
            }
        }
        if (segments.length > 0) {
            hours.push({ segments: segments });
        }
    }
    return hours;
}
var EventValidationErrorMessage;
(function (EventValidationErrorMessage) {
    EventValidationErrorMessage["NotArray"] = "Events must be an array";
    EventValidationErrorMessage["StartPropertyMissing"] = "Event is missing the `start` property";
    EventValidationErrorMessage["StartPropertyNotDate"] = "Event `start` property should be a javascript date object. Do `new Date(event.start)` to fix it.";
    EventValidationErrorMessage["EndPropertyNotDate"] = "Event `end` property should be a javascript date object. Do `new Date(event.end)` to fix it.";
    EventValidationErrorMessage["EndsBeforeStart"] = "Event `start` property occurs after the `end`";
})(EventValidationErrorMessage || (EventValidationErrorMessage = {}));
function validateEvents(events, log) {
    var isValid = true;
    function isError(msg, event) {
        log(msg, event);
        isValid = false;
    }
    if (!Array.isArray(events)) {
        log(EventValidationErrorMessage.NotArray, events);
        return false;
    }
    events.forEach(function (event) {
        if (!event.start) {
            isError(EventValidationErrorMessage.StartPropertyMissing, event);
        }
        else if (!__WEBPACK_IMPORTED_MODULE_11_date_fns_is_date___default()(event.start)) {
            isError(EventValidationErrorMessage.StartPropertyNotDate, event);
        }
        if (event.end) {
            if (!__WEBPACK_IMPORTED_MODULE_11_date_fns_is_date___default()(event.end)) {
                isError(EventValidationErrorMessage.EndPropertyNotDate, event);
            }
            if (event.start > event.end) {
                isError(EventValidationErrorMessage.EndsBeforeStart, event);
            }
        }
    });
    return isValid;
}
//# sourceMappingURL=calendar-utils.js.map

/***/ }),

/***/ "../../../../positioning/dist/positioning.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Positioning; });
/* unused harmony export positionElements */
// previous version:
// https://github.com/angular-ui/bootstrap/blob/07c31d0731f7cb068a1932b8e01d2312b796b4ec/src/position/position.js
var Positioning = (function () {
    function Positioning() {
    }
    Positioning.prototype.getAllStyles = function (element) { return window.getComputedStyle(element); };
    Positioning.prototype.getStyle = function (element, prop) { return this.getAllStyles(element)[prop]; };
    Positioning.prototype.isStaticPositioned = function (element) {
        return (this.getStyle(element, 'position') || 'static') === 'static';
    };
    Positioning.prototype.offsetParent = function (element) {
        var offsetParentEl = element.offsetParent || document.documentElement;
        while (offsetParentEl && offsetParentEl !== document.documentElement && this.isStaticPositioned(offsetParentEl)) {
            offsetParentEl = offsetParentEl.offsetParent;
        }
        return offsetParentEl || document.documentElement;
    };
    Positioning.prototype.position = function (element, round) {
        if (round === void 0) { round = true; }
        var elPosition;
        var parentOffset = { width: 0, height: 0, top: 0, bottom: 0, left: 0, right: 0 };
        if (this.getStyle(element, 'position') === 'fixed') {
            elPosition = element.getBoundingClientRect();
        }
        else {
            var offsetParentEl = this.offsetParent(element);
            elPosition = this.offset(element, false);
            if (offsetParentEl !== document.documentElement) {
                parentOffset = this.offset(offsetParentEl, false);
            }
            parentOffset.top += offsetParentEl.clientTop;
            parentOffset.left += offsetParentEl.clientLeft;
        }
        elPosition.top -= parentOffset.top;
        elPosition.bottom -= parentOffset.top;
        elPosition.left -= parentOffset.left;
        elPosition.right -= parentOffset.left;
        if (round) {
            elPosition.top = Math.round(elPosition.top);
            elPosition.bottom = Math.round(elPosition.bottom);
            elPosition.left = Math.round(elPosition.left);
            elPosition.right = Math.round(elPosition.right);
        }
        return elPosition;
    };
    Positioning.prototype.offset = function (element, round) {
        if (round === void 0) { round = true; }
        var elBcr = element.getBoundingClientRect();
        var viewportOffset = {
            top: window.pageYOffset - document.documentElement.clientTop,
            left: window.pageXOffset - document.documentElement.clientLeft
        };
        var elOffset = {
            height: elBcr.height || element.offsetHeight,
            width: elBcr.width || element.offsetWidth,
            top: elBcr.top + viewportOffset.top,
            bottom: elBcr.bottom + viewportOffset.top,
            left: elBcr.left + viewportOffset.left,
            right: elBcr.right + viewportOffset.left
        };
        if (round) {
            elOffset.height = Math.round(elOffset.height);
            elOffset.width = Math.round(elOffset.width);
            elOffset.top = Math.round(elOffset.top);
            elOffset.bottom = Math.round(elOffset.bottom);
            elOffset.left = Math.round(elOffset.left);
            elOffset.right = Math.round(elOffset.right);
        }
        return elOffset;
    };
    Positioning.prototype.positionElements = function (hostElement, targetElement, placement, appendToBody) {
        var hostElPosition = appendToBody ? this.offset(hostElement, false) : this.position(hostElement, false);
        var targetElStyles = this.getAllStyles(targetElement);
        var targetElBCR = targetElement.getBoundingClientRect();
        var placementPrimary = placement.split('-')[0] || 'top';
        var placementSecondary = placement.split('-')[1] || 'center';
        var targetElPosition = {
            'height': targetElBCR.height || targetElement.offsetHeight,
            'width': targetElBCR.width || targetElement.offsetWidth,
            'top': 0,
            'bottom': targetElBCR.height || targetElement.offsetHeight,
            'left': 0,
            'right': targetElBCR.width || targetElement.offsetWidth
        };
        switch (placementPrimary) {
            case 'top':
                targetElPosition.top =
                    hostElPosition.top - (targetElement.offsetHeight + parseFloat(targetElStyles.marginBottom));
                break;
            case 'bottom':
                targetElPosition.top = hostElPosition.top + hostElPosition.height;
                break;
            case 'left':
                targetElPosition.left =
                    hostElPosition.left - (targetElement.offsetWidth + parseFloat(targetElStyles.marginRight));
                break;
            case 'right':
                targetElPosition.left = hostElPosition.left + hostElPosition.width;
                break;
        }
        switch (placementSecondary) {
            case 'top':
                targetElPosition.top = hostElPosition.top;
                break;
            case 'bottom':
                targetElPosition.top = hostElPosition.top + hostElPosition.height - targetElement.offsetHeight;
                break;
            case 'left':
                targetElPosition.left = hostElPosition.left;
                break;
            case 'right':
                targetElPosition.left = hostElPosition.left + hostElPosition.width - targetElement.offsetWidth;
                break;
            case 'center':
                if (placementPrimary === 'top' || placementPrimary === 'bottom') {
                    targetElPosition.left = hostElPosition.left + hostElPosition.width / 2 - targetElement.offsetWidth / 2;
                }
                else {
                    targetElPosition.top = hostElPosition.top + hostElPosition.height / 2 - targetElement.offsetHeight / 2;
                }
                break;
        }
        targetElPosition.top = Math.round(targetElPosition.top);
        targetElPosition.bottom = Math.round(targetElPosition.bottom);
        targetElPosition.left = Math.round(targetElPosition.left);
        targetElPosition.right = Math.round(targetElPosition.right);
        return targetElPosition;
    };
    return Positioning;
}());

var positionService = new Positioning();
function positionElements(hostElement, targetElement, placement, appendToBody) {
    var pos = positionService.positionElements(hostElement, targetElement, placement, appendToBody);
    targetElement.style.top = pos.top + "px";
    targetElement.style.left = pos.left + "px";
}
//# sourceMappingURL=positioning.js.map

/***/ })

});
//# sourceMappingURL=calendar.module.chunk.js.map