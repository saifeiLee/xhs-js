const XhsClient = require('../src/index.js')
const { SearchSortType, SearchNoteType } = require('../src/help.js');

// Replace with a valid cookie
const cookie = require('../config.js').cookie

const client = new XhsClient({ cookie });

// Increase the timeout for each test to 30 seconds
jest.setTimeout(30000);

describe('XhsClient', () => {
  test('getNoteById', async () => {
    const noteUrl = "https://www.xiaohongshu.com/explore/6733744a000000003c01675b?xsec_token=AB57n_T7V4_y7vHdEkH9igS6-y4BwN7uOHNWJW6PK0GNs=&xsec_source=pc_feed"
    // parse noteId, xsec_token, xsec_source from noteUrl
    const noteId = noteUrl.split('/explore/')[1].split('?')[0];
    const xsecToken = noteUrl.split('xsec_token=')[1].split('&')[0];
    const xsecSource = noteUrl.split('xsec_source=')[1];
    const result = await client.getNoteById(noteId, xsecToken, xsecSource);
    expect(result).toBeDefined();
    expect(result.note_id).toBe(noteId);
  });

  test('getNoteByIdFromHtml', async () => {
    const noteUrl = "https://www.xiaohongshu.com/explore/6733744a000000003c01675b?xsec_token=AB57n_T7V4_y7vHdEkH9igS6-y4BwN7uOHNWJW6PK0GNs=&xsec_source=pc_feed"
    // parse noteId, xsec_token, xsec_source from noteUrl
    const noteId = noteUrl.split('/explore/')[1].split('?')[0];
    const xsecToken = noteUrl.split('xsec_token=')[1].split('&')[0];
    const xsecSource = noteUrl.split('xsec_source=')[1];
    const result = await client.getNoteByIdFromHtml(noteId, xsecToken, xsecSource);
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

  test('getUserInfoFromHtml', async () => {
    const userId = '66ddd49f000000001d020d91';
    const result = await client.getUserInfoFromHtml(userId);
    expect(result).toBeDefined();
    expect(result.nickname).toBeDefined();
  });
});

