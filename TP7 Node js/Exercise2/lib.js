"use strict";
exports.__esModule = true;
exports.khmerDateTest = void 0;
var khmerDateTest = /** @class */ (function () {
    function khmerDateTest(date) {
        this.date = new Date();
        this.dateNow = new Date();
        this.date = new Date(date);
        console.log(this.date);
    }
    khmerDateTest.prototype.getDate = function () {
        var seconds = Math.floor((this.dateNow.getTime() - this.date.getTime()) / 1000);
        var interval = seconds / 31536000;
        if (interval > 1) {
            return Math.floor(interval) + " ឆ្នាំមុន";
        }
        interval = seconds / 2592000;
        if (interval > 1) {
            return Math.floor(interval) + " ខែមុន";
        }
        interval = seconds / 604800;
        if (interval > 1) {
            return Math.floor(interval) + " សប្តាហ៍មុន";
        }
        interval = seconds / 86400;
        if (interval > 1) {
            return Math.floor(interval) + " ថ្ងៃមុន";
        }
        interval = seconds / 3600;
        if (interval > 1) {
            return Math.floor(interval) + " ម៉ោងមុន";
        }
        interval = seconds / 60;
        if (interval > 1) {
            return Math.floor(interval) + " នាទីមុន";
        }
        return "មុននេះបន្តិច";
    };
    return khmerDateTest;
}());
exports.khmerDateTest = khmerDateTest;
