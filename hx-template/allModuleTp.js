/**
 * @date 13-2-21
 * @describe: 对所有模版引用
 * @author: wulj
 * @version: 1.0
 */
define(function (require, exports, module) {
    module.exports = {
    <% for(var i in _data){ %>
        <% var comma = ',';%>
        "<%= i %>": require('./<%=i%>/<%=i%>')<%=comma%>
    <%}%>
    "":""
    };
});