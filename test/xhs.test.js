const XhsClient = require('../src/index.js')
const { SearchSortType, SearchNoteType } = require('../src/help.js');

// Replace with a valid cookie
const cookie = 'abRequestId=6a42c3f7-5f4c-572e-9847-bc733cc61073; a1=18f74e3b0e2m6jaraiqcaajn8bmz3765wou17xhp030000156562; webId=6cf889e2d027fb9172e3e69efc3394dc; gid=yYiW4dqDYiEJyYiW4dqD8lCxdJ6KV0F03AS07U80VIYD6yq8uqWK2W888y2K2KJ8K8JJKiYi; x-user-id-creator.xiaohongshu.com=5ef20f0f000000000100483a; customerClientId=965656639764280; access-token-creator.xiaohongshu.com=customer.creator.AT-68c517410666577028087634yjkb5nvv6t2bnb14; galaxy_creator_session_id=LLUI5RgXpnMwRDhSjFKsVVYihXban6SgJrqJ; galaxy.creator.beaker.session.id=1725430269055031096045; webBuild=4.36.5; xsecappid=xhs-pc-web; web_session=0400698f864c4756186cbcfecd344b5cff29c7; unread={%22ub%22:%2266f53568000000001b0217b2%22%2C%22ue%22:%2266f3df36000000001b020636%22%2C%22uc%22:28}; websectiga=cffd9dcea65962b05ab048ac76962acee933d26157113bb213105a116241fa6c; sec_poison_id=7dcc2a59-35bc-420e-b69a-514f9231d3ef; acw_tc=553e2cf305642fc307a4b0d54df94bc14358a6dad7f663c852f4c2d2e421c3bc';

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
    expect(result).toBeDefined();
    expect(result.has_more).toBeDefined();
    expect(Array.isArray(result.items)).toBe(true);
  });

  test('getNoteComments', async () => {
    const noteId = '66adced2000000002701ca09';
    const result = await client.getNoteComments(noteId);
    expect(result).toBeDefined();
    expect(result.comments).toBeDefined();
  });

  test('getUserNotes', async () => {
    const userId = '5968981d6a6a6922a67e3035'; // Replace with a valid user ID
    const result = await client.getUserNotes(userId);
    // console.log('user notes:', result)
    expect(result).toBeDefined();
    expect(result.notes).toBeDefined();
  });

  test("getMentionNotifications", async () => {
    const result = await client.getMentionNotifications();
    expect(result).toBeDefined();
    expect(result.message_list).toBeDefined();
  });

  test('getLikeNotifications', async () => {
    const result = await client.getLikeNotifications();
    expect(result).toBeDefined();
    expect(result.message_list).toBeDefined();
  })

  test('getFollowNotifications', async () => {
    const result = await client.getFollowNotifications();
    expect(result).toBeDefined();
    expect(result.message_list).toBeDefined();
  });
});

