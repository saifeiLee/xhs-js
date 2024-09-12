const XhsClient = require('../src/index.js')
const { SearchSortType, SearchNoteType } = require('../src/help.js');

// Replace with a valid cookie
const cookie = 'abRequestId=6a42c3f7-5f4c-572e-9847-bc733cc61073; a1=18f74e3b0e2m6jaraiqcaajn8bmz3765wou17xhp030000156562; webId=6cf889e2d027fb9172e3e69efc3394dc; gid=yYiW4dqDYiEJyYiW4dqD8lCxdJ6KV0F03AS07U80VIYD6yq8uqWK2W888y2K2KJ8K8JJKiYi; x-user-id-creator.xiaohongshu.com=5ef20f0f000000000100483a; customerClientId=965656639764280; access-token-creator.xiaohongshu.com=customer.creator.AT-68c517410666577028087634yjkb5nvv6t2bnb14; galaxy_creator_session_id=LLUI5RgXpnMwRDhSjFKsVVYihXban6SgJrqJ; galaxy.creator.beaker.session.id=1725430269055031096045; xsecappid=xhs-pc-web; web_session=0400698f864c4756186cc36ed5344b8af3ba5b; unread={%22ub%22:%2266df51ff000000000c0184a6%22%2C%22ue%22:%2266deeffe000000000c01af9e%22%2C%22uc%22:21}; websectiga=82e85efc5500b609ac1166aaf086ff8aa4261153a448ef0be5b17417e4512f28; sec_poison_id=1e284041-7b77-47e7-a61d-05e6afc603df; acw_tc=60e3890c4c1c22ae5fc45d8a70b7264900e24eb1e09300274ee08e65e30dbdd1; webBuild=4.34.0';

const client = new XhsClient({ cookie });

// Increase the timeout for each test to 30 seconds
jest.setTimeout(30000);

describe('XhsClient', () => {
  test('getNoteById', async () => {
    const noteId = '66d90590000000001f01fe31';
    const result = await client.getNoteById(noteId);
    expect(result).toBeDefined();
    expect(result.note_id).toBe(noteId);
  });

  test('getNoteByIdFromHtml', async () => {
    const noteId = '66d90590000000001f01fe31';
    const result = await client.getNoteByIdFromHtml(noteId);
    expect(result).toBeDefined();
    expect(result.note_id).toBe(noteId);
  });

  test('getSelfInfo', async () => {
    const result = await client.getSelfInfo();
    expect(result).toBeDefined();
    expect(result.basic_info).toBeDefined();
  });

  test('getSelfInfoV2', async () => {
    const result = await client.getSelfInfoV2();
    expect(result).toBeDefined();
  });

  test('getUserInfo', async () => {
    const userId = '5ef20f0f000000000100483a'; // Replace with a valid user ID
    const result = await client.getUserInfo(userId);
    expect(result).toBeDefined();
    expect(result.basic_info).toBeDefined();
  });

  test('getNoteByKeyword', async () => {
    const keyword = '旅游';
    const result = await client.getNoteByKeyword(
      keyword,
      1,
      20,
      SearchSortType.GENERAL,
      SearchNoteType.ALL
    );
    console.log(result)
    expect(result).toBeDefined();
    expect(result.has_more).toBeDefined();
    expect(Array.isArray(result.items)).toBe(true);
  });
});

