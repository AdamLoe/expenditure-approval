webpackJsonp([0],{

/***/ 480:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(481);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(171)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
		var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./index.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 481:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(170)(false);
// imports


// module
exports.push([module.i, ".FloatRightContainer {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end; }\n\n.FloatCenterContainer {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n\nbutton {\n  cursor: pointer;\n  border: none; }\n\nselect {\n  cursor: pointer; }\n\noption {\n  cursor: pointer; }\n\n.App {\n  margin-top: 10px;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 900px;\n  width: 95%; }\n\nbody {\n  font-family: \"Helvetica Neue\", Helvetica, Roboto, Arial, sans-serif;\n  color: black;\n  background: white; }\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box; }\n\nh1 {\n  margin: 0;\n  padding: 0; }\n\nbutton:focus {\n  outline: 0; }\n\n/*\r\n        Header\r\n */\n.Header {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  font-size: 25px;\n  line-height: 24px;\n  text-rendering: optimizeLegibility; }\n\n.Header button:first-of-type {\n  margin-left: 20px; }\n\n.Header button {\n  padding: 5px 10px;\n  margin-left: 10px;\n  background: #218DAC;\n  color: white;\n  border-radius: 5px;\n  border: 0px;\n  font-size: 18px;\n  cursor: pointer; }\n\n.Header button:hover {\n  background: #1d7791; }\n\n.SettingsContainer {\n  position: relative;\n  height: 0;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n\n.SettingsPanel {\n  margin-top: 10px;\n  position: absolute;\n  width: 80%;\n  clear: both;\n  background: lightgray;\n  padding: 10px;\n  display: flex;\n  flex-direction: column; }\n\n/*\r\n     Settings Header\r\n */\n.ExitSettingsImg {\n  border: 1px solid lightgray;\n  cursor: pointer;\n  position: absolute;\n  height: 2em;\n  width: 2em;\n  border-radius: 2px; }\n\n.ExitSettingsImg:hover {\n  border: 1px solid #999999; }\n\n.SettingsPanel h2 {\n  flex-shrink: 1;\n  text-align: center;\n  font-size: 2.5em; }\n\n/*\r\n    Settings\r\n */\n.Settings {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch; }\n\n.SettingsRow {\n  display: flex;\n  justify-content: center;\n  flex-basis: 20%; }\n\n/*the container must be positioned relative:*/\n.RequestPanel {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid #999999;\n  border-bottom: 0;\n  margin-top: 10px; }\n\n.RequestItem {\n  background: #EEEEEE; }\n\n.RequestItem:nth-child(2n) {\n  background: #FAFAFA; }\n\n.RequestRow {\n  border-bottom: 1px solid #999999;\n  display: flex;\n  color: white;\n  cursor: pointer; }\n\n.RequestHeader {\n  background-color: #E0E0E0;\n  color: red; }\n\n.RequestColumn {\n  font-family: Arial, Helvetica, sans-serif;\n  color: #333333;\n  padding: 8px;\n  font-size: 12px;\n  border-right: 1px solid #999999; }\n\n.RequestColumn:last-child {\n  border: none; }\n\n.RequestRow .Date {\n  width: 10%; }\n\n.RequestRow .Approver {\n  width: 20%; }\n\n.RequestRow .Requester {\n  width: 20%; }\n\n.RequestRow .Name {\n  width: 10%;\n  flex-grow: 1; }\n\n.RequestRow .Amount {\n  width: 20%; }\n\n.RequestRowMore {\n  display: flex;\n  border-bottom: 1px solid #999999; }\n\n.RequestLeftSide {\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 10px;\n  border-right: 1px solid #999999; }\n\n.Overview {\n  padding: 5px 0;\n  display: flex;\n  width: 100%;\n  overflow: ellipsis;\n  font-size: 25px; }\n\n.Overview .Name {\n  padding-right: 10px; }\n\n.Description {\n  width: 100%; }\n\n.Heading {\n  font-size: 20px;\n  font-weight: bold; }\n\n.RequestAttributes {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%; }\n\n.attribute {\n  display: flex;\n  width: 100%;\n  padding: 5px 0px; }\n\n.attribute .key {\n  width: 30%; }\n\n.attribute .value {\n  width: 70%; }\n\n.RequestRightSide {\n  width: 50%;\n  padding: 5px;\n  display: flex;\n  flex-direction: column; }\n\n.CommentContainer {\n  height: 50px;\n  min-height: 200px;\n  overflow-y: auto;\n  flex-grow: 1; }\n\n.Comment {\n  padding: 2px;\n  display: flex;\n  flex-direction: column; }\n\n.CommentContent {\n  display: flex;\n  flex-flow: row wrap; }\n\n.Author {\n  font-weight: bold;\n  padding-right: 10px; }\n\n.CommentDate {\n  font-size: 12px; }\n\n.CreateComment {\n  margin-top: 10px;\n  display: flex;\n  align-content: center; }\n\n.CreateComment textarea {\n  padding: 5px;\n  height: 60px;\n  width: 80%; }\n\n.CreateComment .Submit {\n  flex-grow: 1;\n  background: none;\n  border: 1px solid #BBBBBB;\n  padding: 5px 10px;\n  margin-left: 10px;\n  color: #218DAC;\n  border-radius: 5px; }\n\n.CreateComment .Submit:hover {\n  border-color: #999999; }\n\n.UpdateRequest {\n  display: flex;\n  justify-content: space-around;\n  margin-top: 10px; }\n\n.UpdateRequest button {\n  padding: 10px 15px;\n  margin-left: 10px;\n  color: white;\n  border-radius: 5px;\n  width: 40%; }\n\n.UpdateRequest .Accept {\n  background: green; }\n\n.UpdateRequest .Accept:hover {\n  background: darkgreen; }\n\n.UpdateRequest .Reject {\n  background: Red; }\n\n.UpdateRequest .Reject:hover {\n  background: darkred; }\n\n.RequestFilters {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 10px;\n  flex-flow: row wrap;\n  align-items: center; }\n\n.Sort select {\n  padding: 5px;\n  margin-right: 5px; }\n\n.RequestFilters .refresh {\n  border: 1px solid #EEEEEE;\n  padding: 2px 20px;\n  border-radius: 2px;\n  display: flex;\n  align-content: center; }\n\n.RequestFilters .refresh:hover {\n  border-color: #BBBBBB;\n  cursor: pointer; }\n\n.refresh svg {\n  fill: #999999; }\n\n.refresh:hover svg {\n  fill: #000000; }\n\n.CreateRequestPanel {\n  position: absolute;\n  z-index: 3;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background: lightgray; }\n\n.Attribute {\n  margin: auto; }\n\n.ExitCreateRequest {\n  position: absolute;\n  right: 0;\n  top: 0; }\n\n.SelectRequestType {\n  margin: auto;\n  width: auto; }\n\n.Attribute * {\n  padding: 5px; }\n\n.Attribute input {\n  border: 0;\n  border-bottom-width: thin;\n  border-bottom-style: outset;\n  border-spacing: 14px;\n  background: inherit; }\n\n.Attribute div {\n  max-width: 300px;\n  min-height: 10px; }\n\n.Attribute .DeleteAttribute {\n  position: relative; }\n\n.DeleteAttribute img {\n  position: absolute;\n  right: 0; }\n\n.AppLogin {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: #218DAC; }\n\n.LoginContainer {\n  padding: 40px;\n  width: 470px;\n  margin: auto;\n  margin-top: 100px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: #FAFAFA; }\n\n.LoginContainer input {\n  width: 100%;\n  padding: 15px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  border: none;\n  background: none;\n  font-size: 18px; }\n\n.LoginContainer input::placeholder {\n  color: #BBBBBB; }\n\n.LoginContainer h3 {\n  font-size: 35px;\n  font-weight: lighter;\n  font-style: normal;\n  margin-bottom: 45px;\n  font-family: Roboto, sans-serif; }\n\n.LoginContainer button {\n  width: 100%;\n  padding: 15px;\n  margin-top: 20px;\n  background: #15cd72;\n  border: none;\n  border-radius: 3px;\n  color: white;\n  height: 51px;\n  font-size: 17px;\n  cursor: pointer; }\n\n.LoginContainer button:hover {\n  background: #11a65c; }\n\n.Pagination {\n  margin: auto;\n  width: 80px;\n  margin-top: 10px;\n  display: flex;\n  align-items: center; }\n\n.Pagination .hidden {\n  display: none; }\n\n.NotificationContainer {\n  position: absolute; }\n\n.Notification {\n  z-index: 10;\n  background: #FFBF2A;\n  padding: 4px 10px;\n  border-radius: 2px; }\n", ""]);

// exports


/***/ })

});