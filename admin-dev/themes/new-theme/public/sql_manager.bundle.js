window.sql_manager=function(n){function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var t={};return e.m=n,e.c=t,e.i=function(n){return n},e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:r})},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="",e(e.s=389)}({0:function(n,e){var t;t=function(){return this}();try{t=t||Function("return this")()||(0,eval)("this")}catch(n){"object"==typeof window&&(t=window)}n.exports=t},10:function(n,e,t){"use strict";function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function n(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}(),a=window.$,i=function(){function n(){r(this,n)}return o(n,[{key:"extend",value:function(n){this.initRowLinks(n),this.initConfirmableActions(n)}},{key:"initConfirmableActions",value:function(n){n.getContainer().on("click",".js-link-row-action",function(n){var e=a(n.currentTarget).data("confirm-message");e.length&&!confirm(e)&&n.preventDefault()})}},{key:"initRowLinks",value:function(n){a("tr",n.getContainer()).each(function(){var n=a(this);a(".js-link-row-action[data-clickable-row=1]:first",n).each(function(){var e=a(this),t=e.closest("td");a("td.clickable",n).not(t).addClass("cursor-pointer").click(function(){var n=e.data("confirm-message");n.length&&!confirm(n)||(document.location=e.attr("href"))})})})}}]),n}();e.default=i},12:function(n,e,t){"use strict";(function(n){function t(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function n(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}(),o=n.$,a=function(){function n(e){t(this,n),this.selector=".ps-sortable-column",this.columns=o(e).find(this.selector)}return r(n,[{key:"attach",value:function(){var n=this;this.columns.on("click",function(e){var t=o(e.delegateTarget);n._sortByColumn(t,n._getToggledSortDirection(t))})}},{key:"sortBy",value:function(n,e){var t=this.columns.is('[data-sort-col-name="'+n+'"]');if(!t)throw new Error('Cannot sort by "'+n+'": invalid column');this._sortByColumn(t,e)}},{key:"_sortByColumn",value:function(n,e){window.location=this._getUrl(n.data("sortColName"),"desc"===e?"desc":"asc",n.data("sortPrefix"))}},{key:"_getToggledSortDirection",value:function(n){return"asc"===n.data("sortDirection")?"desc":"asc"}},{key:"_getUrl",value:function(n,e,t){var r=new URL(window.location.href),o=r.searchParams;return t?(o.set(t+"[orderBy]",n),o.set(t+"[sortOrder]",e)):(o.set("orderBy",n),o.set("sortOrder",e)),r.toString()}}]),n}();e.default=a}).call(e,t(0))},14:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0});/**
 * 2007-2019 PrestaShop SA and Contributors
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2019 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */
var t=n.$,r=function(n,e){t.post(n).then(function(){return window.location.assign(e)})};e.default=r}).call(e,t(0))},2:function(n,e,t){"use strict";function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function n(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}(),a=window.$,i=function(){function n(e){r(this,n),this.id=e,this.$container=a("#"+this.id+"_grid")}return o(n,[{key:"getId",value:function(){return this.id}},{key:"getContainer",value:function(){return this.$container}},{key:"getHeaderContainer",value:function(){return this.$container.closest(".js-grid-panel").find(".js-grid-header")}},{key:"addExtension",value:function(n){n.extend(this)}}]),n}();e.default=i},21:function(n,e,t){"use strict";function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function n(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}(),a=window.$,i=function(){function n(){var e=this;return r(this,n),{extend:function(n){return e.extend(n)}}}return o(n,[{key:"extend",value:function(n){var e=this;n.getHeaderContainer().on("click",".js-grid-action-submit-btn",function(t){e.handleSubmit(t,n)})}},{key:"handleSubmit",value:function(n,e){var t=a(n.currentTarget),r=t.data("confirm-message");if(!(void 0!==r&&0<r.length)||confirm(r)){var o=a("#"+e.getId()+"_filter_form");o.attr("action",t.data("url")),o.attr("method",t.data("method")),o.find('input[name="'+e.getId()+'[_token]"]').val(t.data("csrf")),o.submit()}}}]),n}();e.default=i},3:function(n,e,t){"use strict";function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function n(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}(),a=t(14),i=function(n){return n&&n.__esModule?n:{default:n}}(a),u=window.$,c=function(){function n(){r(this,n)}return o(n,[{key:"extend",value:function(n){n.getContainer().on("click",".js-reset-search",function(n){(0,i.default)(u(n.currentTarget).data("url"),u(n.currentTarget).data("redirect"))})}}]),n}();e.default=c},389:function(n,e,t){"use strict";function r(n){return n&&n.__esModule?n:{default:n}}function o(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}var a=function(){function n(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}(),i=t(2),u=r(i),c=t(5),l=r(c),f=t(6),s=r(f),d=t(3),b=r(d),v=t(4),h=r(v),m=t(8),y=r(m),p=t(9),g=r(p),k=t(21),w=r(k),_=t(10),C=r(_),j=t(7),x=r(j),T=window.$,E=function(){function n(){var e=this;o(this,n);var t=new u.default("sql_request");t.addExtension(new l.default),t.addExtension(new s.default),t.addExtension(new b.default),t.addExtension(new h.default),t.addExtension(new C.default),t.addExtension(new w.default),t.addExtension(new g.default),t.addExtension(new y.default),t.addExtension(new x.default),T(document).on("change",".js-db-tables-select",function(){return e.reloadDbTableColumns()}),T(document).on("click",".js-add-db-table-to-query-btn",function(n){return e.addDbTableToQuery(n)}),T(document).on("click",".js-add-db-table-column-to-query-btn",function(n){return e.addDbTableColumnToQuery(n)})}return a(n,[{key:"reloadDbTableColumns",value:function(){var n=T(".js-db-tables-select").find("option:selected"),e=T(".js-table-columns");T.ajax(n.data("table-columns-url")).then(function(n){T(".js-table-alert").addClass("d-none");var t=n.columns;e.removeClass("d-none"),e.find("tbody").empty(),t.forEach(function(n){var t=T("<tr>").append(T("<td>").html(n.name)).append(T("<td>").html(n.type)).append(T("<td>").addClass("text-right").append(T("<button>").addClass("btn btn-sm btn-outline-secondary js-add-db-table-column-to-query-btn").attr("data-column",n.name).html(e.data("action-btn"))));e.find("tbody").append(t)})})}},{key:"addDbTableToQuery",value:function(n){var e=T(".js-db-tables-select").find("option:selected");if(0===e.length)return void alert(T(n.target).data("choose-table-message"));this.addToQuery(e.val())}},{key:"addDbTableColumnToQuery",value:function(n){this.addToQuery(T(n.target).data("column"))}},{key:"addToQuery",value:function(n){var e=T("#sql_request_sql");e.val(e.val()+" "+n)}}]),n}();T(document).ready(function(){new E})},4:function(n,e,t){"use strict";function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function n(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}(),a=t(12),i=function(n){return n&&n.__esModule?n:{default:n}}(a),u=function(){function n(){r(this,n)}return o(n,[{key:"extend",value:function(n){var e=n.getContainer().find("table.table");new i.default(e).attach()}}]),n}();e.default=u},5:function(n,e,t){"use strict";function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function n(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}(),a=function(){function n(){r(this,n)}return o(n,[{key:"extend",value:function(n){n.getHeaderContainer().on("click",".js-common_refresh_list-grid-action",function(){location.reload()})}}]),n}();e.default=a},6:function(n,e,t){"use strict";function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function n(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}(),a=window.$,i=function(){function n(){r(this,n)}return o(n,[{key:"extend",value:function(n){var e=this;n.getHeaderContainer().on("click",".js-common_show_query-grid-action",function(){return e._onShowSqlQueryClick(n)}),n.getHeaderContainer().on("click",".js-common_export_sql_manager-grid-action",function(){return e._onExportSqlManagerClick(n)})}},{key:"_onShowSqlQueryClick",value:function(n){var e=a("#"+n.getId()+"_common_show_query_modal_form");this._fillExportForm(e,n);var t=a("#"+n.getId()+"_grid_common_show_query_modal");t.modal("show"),t.on("click",".btn-sql-submit",function(){return e.submit()})}},{key:"_onExportSqlManagerClick",value:function(n){var e=a("#"+n.getId()+"_common_show_query_modal_form");this._fillExportForm(e,n),e.submit()}},{key:"_fillExportForm",value:function(n,e){var t=e.getContainer().find(".js-grid-table").data("query");n.find('textarea[name="sql"]').val(t),n.find('input[name="name"]').val(this._getNameFromBreadcrumb())}},{key:"_getNameFromBreadcrumb",value:function(){var n=a(".header-toolbar").find(".breadcrumb-item"),e="";return n.each(function(n,t){var r=a(t),o=0<r.find("a").length?r.find("a").text():r.text();0<e.length&&(e=e.concat(" > ")),e=e.concat(o)}),e}}]),n}();e.default=i},7:function(n,e,t){"use strict";function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function n(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}(),a=function(){function n(){r(this,n)}return o(n,[{key:"extend",value:function(n){var e=n.getContainer().find(".column-filters");e.find(".grid-search-button").prop("disabled",!0),e.find("input, select").on("input dp.change",function(){e.find(".grid-search-button").prop("disabled",!1),e.find(".js-grid-reset-button").prop("hidden",!1)})}}]),n}();e.default=a},8:function(n,e,t){"use strict";function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function n(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}(),a=window.$,i=function(){function n(){r(this,n)}return o(n,[{key:"extend",value:function(n){this._handleBulkActionCheckboxSelect(n),this._handleBulkActionSelectAllCheckbox(n)}},{key:"_handleBulkActionSelectAllCheckbox",value:function(n){var e=this;n.getContainer().on("change",".js-bulk-action-select-all",function(t){var r=a(t.currentTarget),o=r.is(":checked");o?e._enableBulkActionsBtn(n):e._disableBulkActionsBtn(n),n.getContainer().find(".js-bulk-action-checkbox").prop("checked",o)})}},{key:"_handleBulkActionCheckboxSelect",value:function(n){var e=this;n.getContainer().on("change",".js-bulk-action-checkbox",function(){n.getContainer().find(".js-bulk-action-checkbox:checked").length>0?e._enableBulkActionsBtn(n):e._disableBulkActionsBtn(n)})}},{key:"_enableBulkActionsBtn",value:function(n){n.getContainer().find(".js-bulk-actions-btn").prop("disabled",!1)}},{key:"_disableBulkActionsBtn",value:function(n){n.getContainer().find(".js-bulk-actions-btn").prop("disabled",!0)}}]),n}();e.default=i},9:function(n,e,t){"use strict";function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function n(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}(),a=window.$,i=function(){function n(){var e=this;return r(this,n),{extend:function(n){return e.extend(n)}}}return o(n,[{key:"extend",value:function(n){var e=this;n.getContainer().on("click",".js-bulk-action-submit-btn",function(t){e.submit(t,n)})}},{key:"submit",value:function(n,e){var t=a(n.currentTarget),r=t.data("confirm-message");if(!(void 0!==r&&0<r.length)||confirm(r)){var o=a("#"+e.getId()+"_filter_form");o.attr("action",t.data("form-url")),o.attr("method",t.data("form-method")),o.submit()}}}]),n}();e.default=i}});