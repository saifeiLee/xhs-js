const XhsClient = require('../src/index.js')
// const XhsClient = require('../dist/index.cjs.js')
const cookie = require('../config.js').cookie
const client = new XhsClient({
    cookie: cookie
});
function test_getNoteById() {
    const noteUrl = "https://www.xiaohongshu.com/explore/6733744a000000003c01675b?xsec_token=AB57n_T7V4_y7vHdEkH9igS6-y4BwN7uOHNWJW6PK0GNs=&xsec_source=pc_feed"
    // parse noteId, xsec_token, xsec_source from noteUrl
    const noteId = noteUrl.split('/explore/')[1].split('?')[0];
    const xsecToken = noteUrl.split('xsec_token=')[1].split('&')[0];
    const xsecSource = noteUrl.split('xsec_source=')[1];
    client.getNoteById(noteId, xsecToken, xsecSource).then(res => {
        console.log('笔记数据:', res)
    })
}
function test_getNoteByIdFromHtml() {
    const client = new XhsClient({
        cookie: cookie
    });
    const noteId = '66d90590000000001f01fe31';
    client.getNoteByIdFromHtml(noteId).then(res => {
        console.log('笔记数据:', res)
    })
}

// test_getNoteByIdFromHtml()
async function testSearchNote() {
    const keyword = '旅游';
    const client = new XhsClient({
        cookie: cookie
    });
    const result = await client.getNoteByKeyword(
        keyword,
    );
    console.log(result)
}   
// testSearchNote()
test_getNoteById()