(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header{\n  text-align: center;\n  margin: 30px;\n  color: white;  /* Fallback: assume this color ON TOP of image */\n  background: url('title-background.gif');\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n\n}\nh1 {\n  text-transform: uppercase;\n  font-size: 70px;\n  letter-spacing: 30px;\n  font-weight: bold;\n}\n.sub-title{\n  letter-spacing: 10px;\n  font-weight: bold;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <header>\n    <h1>\n      {{ title }}\n    </h1>\n    <h5 class=\"sub-title\"> a place to share your favourite quotes</h5>\n  </header>\n  <app-quotes></app-quotes>\n\n\n  <footer>\n\n  </footer>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Inspire';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _quotes_quotes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./quotes/quotes.component */ "./src/app/quotes/quotes.component.ts");
/* harmony import */ var _quote_details_quote_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quote-details/quote-details.component */ "./src/app/quote-details/quote-details.component.ts");
/* harmony import */ var _time_count_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./time-count.pipe */ "./src/app/time-count.pipe.ts");
/* harmony import */ var _highlight_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./highlight.directive */ "./src/app/highlight.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _quotes_quotes_component__WEBPACK_IMPORTED_MODULE_4__["QuotesComponent"],
                _quote_details_quote_details_component__WEBPACK_IMPORTED_MODULE_5__["QuoteDetailsComponent"],
                _time_count_pipe__WEBPACK_IMPORTED_MODULE_6__["TimeCountPipe"],
                _highlight_directive__WEBPACK_IMPORTED_MODULE_7__["HighlightDirective"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/highlight.directive.ts":
/*!****************************************!*\
  !*** ./src/app/highlight.directive.ts ***!
  \****************************************/
/*! exports provided: HighlightDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightDirective", function() { return HighlightDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _quote__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quote */ "./src/app/quote.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HighlightDirective = /** @class */ (function () {
    function HighlightDirective() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _quote__WEBPACK_IMPORTED_MODULE_1__["Quote"])
    ], HighlightDirective.prototype, "quote", void 0);
    HighlightDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appHighlight]'
        })
    ], HighlightDirective);
    return HighlightDirective;
}());



/***/ }),

/***/ "./src/app/quote-details/quote-details.component.css":
/*!***********************************************************!*\
  !*** ./src/app/quote-details/quote-details.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".del{\n  color: red;\n  float: right;\n}\n"

/***/ }),

/***/ "./src/app/quote-details/quote-details.component.html":
/*!************************************************************!*\
  !*** ./src/app/quote-details/quote-details.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span>Posted by: {{quote.poster}}</span>\n<span> {{quote.posttime|timeCount}} hours ago</span>\n"

/***/ }),

/***/ "./src/app/quote-details/quote-details.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/quote-details/quote-details.component.ts ***!
  \**********************************************************/
/*! exports provided: QuoteDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteDetailsComponent", function() { return QuoteDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _quote__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../quote */ "./src/app/quote.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuoteDetailsComponent = /** @class */ (function () {
    function QuoteDetailsComponent() {
    }
    QuoteDetailsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _quote__WEBPACK_IMPORTED_MODULE_1__["Quote"])
    ], QuoteDetailsComponent.prototype, "quote", void 0);
    QuoteDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quote-details',
            template: __webpack_require__(/*! ./quote-details.component.html */ "./src/app/quote-details/quote-details.component.html"),
            styles: [__webpack_require__(/*! ./quote-details.component.css */ "./src/app/quote-details/quote-details.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], QuoteDetailsComponent);
    return QuoteDetailsComponent;
}());



/***/ }),

/***/ "./src/app/quote.ts":
/*!**************************!*\
  !*** ./src/app/quote.ts ***!
  \**************************/
/*! exports provided: Quote */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quote", function() { return Quote; });
var Quote = /** @class */ (function () {
    function Quote(text, author, poster, posttime, upvotes, downvotes) {
        this.text = text;
        this.author = author;
        this.poster = poster;
        this.posttime = posttime;
        this.upvotes = upvotes;
        this.downvotes = downvotes;
    }
    return Quote;
}());



/***/ }),

/***/ "./src/app/quotes/quotes.component.css":
/*!*********************************************!*\
  !*** ./src/app/quotes/quotes.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".author {\n  font-style: italic;\n  font-weight: bold;\n  text-align: right;\n}\n.btn{\n  margin: 10px;\n}\n.card{\n  margin: 20px;\n}\n.card-body{\n  text-align: center;\n  color: #ffffff;\n}\n.action{\n  text-align: center;\n  color: #777777;\n  font-size: 20px;\n}\nform{\n  padding: 20px;\n  background-color: #137a63;\n  width: 90%;\n  border-radius: 10px;\n  position: absolute;\n  z-index: 2;\n  left: 5%;\n}\nlabel{\n  font-weight: bold;\n  color: #ffffff;\n  letter-spacing: 2px;\n}\n.cancel-form{\n  text-align: right;\n}\n.form-btn{\n  margin-left: auto;\n  margin-right: auto;\n}\n.card:nth-child(6n-5) {\n  background-color: #0088ff;\n}\n.card:nth-child(6n-4) {\n  background-color: #ffaa00;\n}\n.card:nth-child(6n-3) {\n  background-color: #ff7700;\n}\n.card:nth-child(6n-2) {\n  background-color: #ff0033;\n}\n.card:nth-child(6n-1) {\n  background-color: #9911aa;\n}\n.card:nth-child(6n+0) {\n  background-color: #5ebd3e;\n}\n.card-footer{\n  background-color: #eeeeee;\n}\n.fa-quote-left{\n  float: left;\n  font-size: 30px;\n}\n.del{\n  color: red;\n  float: right;\n}\n\n"

/***/ }),

/***/ "./src/app/quotes/quotes.component.html":
/*!**********************************************!*\
  !*** ./src/app/quotes/quotes.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n  <button (click)=\"onNew()\" class=\"btn btn-info form-btn\" id=\"form-btn\">Post a new quote</button>\n\n  <form  (ngSubmit)=\"onSave()\" *ngIf=\"showNew\" id=\"quote-form\">\n\n    <span (click)=\"onCancel()\" class=\"del\"><i class=\"fa fa-times-circle\"></i></span>\n\n    <div class=\"form-group\">\n      <label for=\"text-input\">Quote</label>\n      <textarea class=\"form-control\" [(ngModel)]=\"quoteModel.text\" placeholder=\"Write your quote here\" rows=\"6\" name=\"text\" id=\"text-input\" required></textarea>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"author-input\">Author</label>\n      <input class=\"form-control\" type=\"text\" [(ngModel)]=\"quoteModel.author\" name=\"author\" id=\"author-input\" placeholder=\"Quote Author\" required>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"poster-input\">Poster</label>\n      <input id=\"poster-input\" class=\"form-control\" type=\"text\" [(ngModel)]=\"quoteModel.poster\" name=\"poster\" placeholder=\"Your name\" required>\n    </div>\n\n    <button type=\"submit\" class=\"btn btn-primary\">{{submitType}}</button>\n  </form>\n</div>\n\n<div class=\"container\">\n<div class=\"row\">\n  <div class=\"card-columns\">\n\n    <div class=\"card\" *ngFor='let quote of quotes;let i = index'  >\n      <div class=\"card-body\">\n        <i class=\"fa fa-quote-left\"></i>\n        <p appHighlight >{{quote.text}} </p>\n        <p>{{quote.author}}</p>\n      </div>\n      <div class=\"card-footer\">\n        <app-quote-details [quote]='quote'></app-quote-details>\n        <span (click)=\"delete(i)\" class=\"del\">\n          <i class=\"fa fa-trash\"></i>\n        </span>\n      </div>\n\n      <div class=\"card-footer\">\n        <div class=\"row\">\n          <div class=\"col-3 action\">\n            {{quote.upvotes}}\n          </div>\n          <div class=\"col-3 action\" (click)=\"quote.upvotes = quote.upvotes + 1\">\n            <i class=\"fa fa-thumbs-up\"></i>\n          </div>\n          <div class=\"col-3 action\" (click)=\"quote.downvotes = quote.downvotes + 1\">\n            <i class=\"fa fa-thumbs-down\"></i>\n          </div>\n          <div class=\"col-3 action\">\n            {{quote.downvotes}}\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/quotes/quotes.component.ts":
/*!********************************************!*\
  !*** ./src/app/quotes/quotes.component.ts ***!
  \********************************************/
/*! exports provided: QuotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotesComponent", function() { return QuotesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _quote__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../quote */ "./src/app/quote.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuotesComponent = /** @class */ (function () {
    function QuotesComponent() {
        // It maintains quote form display status. By default it will be false.
        this.showNew = false;
        // It will be either 'Save' or 'Update' based on operation.
        this.submitType = 'Save';
        this.quotes = [
            new _quote__WEBPACK_IMPORTED_MODULE_1__["Quote"]('Always find a reason to smile', 'Me', 'Admin', new Date(2018, 4, 27, 23, 1), 0, 0),
            new _quote__WEBPACK_IMPORTED_MODULE_1__["Quote"]('Coding is not for weaklings!', 'Adiela', 'Admin', new Date(2018, 4, 27, 23, 1), 0, 0),
            new _quote__WEBPACK_IMPORTED_MODULE_1__["Quote"]('People who use time wisely spend it on activities that advance their overall purpose in life.', 'John C. Maxwell', 'Admin', new Date(2018, 4, 27, 23, 5), 0, 0),
            new _quote__WEBPACK_IMPORTED_MODULE_1__["Quote"]('I would argue that nothing gives life more purpose than the realization that every moment of consciousness is a precious and fragile gift.', 'Steven Pinker', 'Admin', new Date(2018, 4, 27, 23, 8), 0, 0),
            new _quote__WEBPACK_IMPORTED_MODULE_1__["Quote"]('If you organize your life around your passion, you can turn your passion into your story and then turn your story into something bigger―something that matters.', 'Blake Mycoskie', 'Admin', new Date(2018, 4, 28, 7, 42), 0, 0),
            new _quote__WEBPACK_IMPORTED_MODULE_1__["Quote"]('The secret of success is constancy to purpose.', 'Benjamin Disraeli', 'Admin', new Date(2018, 4, 28, 7, 43), 0, 0),
            new _quote__WEBPACK_IMPORTED_MODULE_1__["Quote"]('It is hard to fail, but it is worse never have tried to succeed.', 'Theodore Roosevelt', 'Admin', new Date(2018, 4, 28, 7, 45), 0, 0),
            new _quote__WEBPACK_IMPORTED_MODULE_1__["Quote"]('We were born to succeed, not to fail.', 'Henry David Thoreau', 'Admin', new Date(2018, 4, 28, 7, 46), 0, 0),
            new _quote__WEBPACK_IMPORTED_MODULE_1__["Quote"](' Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma - which is living with the results of other people\'s thinking. Don\'t let the noise of others\' opinions drown out your own inner voice. And most important, have the courage to follow your heart and intuition. ', 'Steve Jobs', 'Admin', new Date(2018, 4, 28, 7, 49), 0, 0)
        ];
    }
    // This method associate to New Button.
    QuotesComponent.prototype.onNew = function () {
        // Initiate new quote.
        this.quoteModel = new _quote__WEBPACK_IMPORTED_MODULE_1__["Quote"]("", "", "", new Date(), 0, 0);
        // Change submitType to 'Save'.
        this.submitType = 'Save';
        // display quote entry section.
        this.showNew = true;
    };
    // This method associate to Save Button.
    QuotesComponent.prototype.onSave = function () {
        if (this.submitType === 'Save') {
            // Push quote model object into quote list.
            this.quotes.push(this.quoteModel);
        }
        // Hide quote entry section.
        this.showNew = false;
    };
    // This method associate to Cancel Button.
    QuotesComponent.prototype.onCancel = function () {
        // Hide quote entry section.
        this.showNew = false;
    };
    QuotesComponent.prototype.delete = function (i) {
        this.quotes.splice(i, 1);
    };
    QuotesComponent.prototype.ngOnInit = function () {
    };
    QuotesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quotes',
            template: __webpack_require__(/*! ./quotes.component.html */ "./src/app/quotes/quotes.component.html"),
            styles: [__webpack_require__(/*! ./quotes.component.css */ "./src/app/quotes/quotes.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], QuotesComponent);
    return QuotesComponent;
}());



/***/ }),

/***/ "./src/app/time-count.pipe.ts":
/*!************************************!*\
  !*** ./src/app/time-count.pipe.ts ***!
  \************************************/
/*! exports provided: TimeCountPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeCountPipe", function() { return TimeCountPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TimeCountPipe = /** @class */ (function () {
    function TimeCountPipe() {
    }
    TimeCountPipe.prototype.transform = function (value) {
        var today = new Date(); //get current date and time
        var dateDifference = Math.abs(value - today); // returns value in milliseconds
        var secondsInAnHour = 3600; //60 seconds*60 minutes in an hour
        var dateDifferenceSeconds = dateDifference * 0.001; //converts to seconds
        var dateCounter = Math.round(dateDifferenceSeconds / secondsInAnHour);
        if (dateCounter >= 1) {
            return dateCounter;
        }
        else {
            return 0;
        }
    };
    TimeCountPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'timeCount'
        })
    ], TimeCountPipe);
    return TimeCountPipe;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\tutoring\ahmed\angular\quotes-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map