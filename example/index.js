const XhsClient = require('../src/index.js')
const cookie = 'abRequestId=6a42c3f7-5f4c-572e-9847-bc733cc61073; a1=18f74e3b0e2m6jaraiqcaajn8bmz3765wou17xhp030000156562; webId=6cf889e2d027fb9172e3e69efc3394dc; gid=yYiW4dqDYiEJyYiW4dqD8lCxdJ6KV0F03AS07U80VIYD6yq8uqWK2W888y2K2KJ8K8JJKiYi; customer-sso-sid=68c517410666572733120337df34ff2b8bc1aac1; x-user-id-creator.xiaohongshu.com=5ef20f0f000000000100483a; customerClientId=965656639764280; access-token-creator.xiaohongshu.com=customer.creator.AT-68c517410666577028087634yjkb5nvv6t2bnb14; galaxy_creator_session_id=LLUI5RgXpnMwRDhSjFKsVVYihXban6SgJrqJ; galaxy.creator.beaker.session.id=1725430269055031096045; xsecappid=xhs-pc-web; webBuild=4.33.2; acw_tc=333df3c205bdb6c32c0457025cf03a687f0dabeafc64dcc0e5c6b695b573b65c; websectiga=984412fef754c018e472127b8effd174be8a5d51061c991aadd200c69a2801d6; sec_poison_id=b5c7d113-9e67-4d18-a2b0-a7199fa956e1; web_session=0400698f864c4756186c9587ef344bd1d956c9; unread={%22ub%22:%2266d86929000000001f018799%22%2C%22ue%22:%2266d52f90000000001f0198b5%22%2C%22uc%22:29}';
const oldCookie = 'abRequestId=6a42c3f7-5f4c-572e-9847-bc733cc61073; a1=18f74e3b0e2m6jaraiqcaajn8bmz3765wou17xhp030000156562; webId=6cf889e2d027fb9172e3e69efc3394dc; gid=yYiW4dqDYiEJyYiW4dqD8lCxdJ6KV0F03AS07U80VIYD6yq8uqWK2W888y2K2KJ8K8JJKiYi; web_session=040069799389ab765b50575be0344b9d3c063b; customer-sso-sid=68c517410666572733120337df34ff2b8bc1aac1; x-user-id-creator.xiaohongshu.com=5ef20f0f000000000100483a; customerClientId=965656639764280; access-token-creator.xiaohongshu.com=customer.creator.AT-68c517410666577028087634yjkb5nvv6t2bnb14; galaxy_creator_session_id=LLUI5RgXpnMwRDhSjFKsVVYihXban6SgJrqJ; galaxy.creator.beaker.session.id=1725430269055031096045; xsecappid=xhs-pc-web; webBuild=4.33.2; acw_tc=516c79762347783762729be84a3278a50c63269cd67f21690139e726ddee98c2; websectiga=7750c37de43b7be9de8ed9ff8ea0e576519e8cd2157322eb972ecb429a7735d4; sec_poison_id=d8892cdd-5821-4891-8304-217ab4821b93; unread={%22ub%22:%2266d9e6bf0000000025033c16%22%2C%22ue%22:%2266da5a9a00000000250307c3%22%2C%22uc%22:29}';

const client = new XhsClient({
    cookie: cookie
}); 

const noteId = '66d90590000000001f01fe31';
client.getNoteById(noteId).then(res => {
    console.log('笔记数据:', res)
}).catch(err => {
    console.error('获取笔记失败:', err.message)
})