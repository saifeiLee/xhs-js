const XhsClient = require('../src/index.js')
// const XhsClient = require('../dist/index.cjs.js')
const cookie = 'abRequestId=6a42c3f7-5f4c-572e-9847-bc733cc61073; a1=18f74e3b0e2m6jaraiqcaajn8bmz3765wou17xhp030000156562; webId=6cf889e2d027fb9172e3e69efc3394dc; gid=yYiW4dqDYiEJyYiW4dqD8lCxdJ6KV0F03AS07U80VIYD6yq8uqWK2W888y2K2KJ8K8JJKiYi; x-user-id-creator.xiaohongshu.com=5ef20f0f000000000100483a; customerClientId=965656639764280; access-token-creator.xiaohongshu.com=customer.creator.AT-68c517410666577028087634yjkb5nvv6t2bnb14; galaxy_creator_session_id=LLUI5RgXpnMwRDhSjFKsVVYihXban6SgJrqJ; galaxy.creator.beaker.session.id=1725430269055031096045; xsecappid=xhs-pc-web; web_session=0400698f864c4756186cc36ed5344b8af3ba5b; unread={%22ub%22:%2266df51ff000000000c0184a6%22%2C%22ue%22:%2266deeffe000000000c01af9e%22%2C%22uc%22:21}; websectiga=82e85efc5500b609ac1166aaf086ff8aa4261153a448ef0be5b17417e4512f28; sec_poison_id=1e284041-7b77-47e7-a61d-05e6afc603df; acw_tc=60e3890c4c1c22ae5fc45d8a70b7264900e24eb1e09300274ee08e65e30dbdd1; webBuild=4.34.0';
const oldCookie = 'abRequestId=6a42c3f7-5f4c-572e-9847-bc733cc61073; a1=18f74e3b0e2m6jaraiqcaajn8bmz3765wou17xhp030000156562; webId=6cf889e2d027fb9172e3e69efc3394dc; gid=yYiW4dqDYiEJyYiW4dqD8lCxdJ6KV0F03AS07U80VIYD6yq8uqWK2W888y2K2KJ8K8JJKiYi; web_session=040069799389ab765b50575be0344b9d3c063b; customer-sso-sid=68c517410666572733120337df34ff2b8bc1aac1; x-user-id-creator.xiaohongshu.com=5ef20f0f000000000100483a; customerClientId=965656639764280; access-token-creator.xiaohongshu.com=customer.creator.AT-68c517410666577028087634yjkb5nvv6t2bnb14; galaxy_creator_session_id=LLUI5RgXpnMwRDhSjFKsVVYihXban6SgJrqJ; galaxy.creator.beaker.session.id=1725430269055031096045; xsecappid=xhs-pc-web; webBuild=4.33.2; acw_tc=516c79762347783762729be84a3278a50c63269cd67f21690139e726ddee98c2; websectiga=7750c37de43b7be9de8ed9ff8ea0e576519e8cd2157322eb972ecb429a7735d4; sec_poison_id=d8892cdd-5821-4891-8304-217ab4821b93; unread={%22ub%22:%2266d9e6bf0000000025033c16%22%2C%22ue%22:%2266da5a9a00000000250307c3%22%2C%22uc%22:29}';

const client = new XhsClient({
    cookie: cookie
}); 
function test_getNoteById() {
    const noteId = '66d90590000000001f01fe31';
    client.getNoteById(noteId).then(res => {
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

test_getNoteByIdFromHtml()