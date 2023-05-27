export const enum REQUESTS {
  SELECT_ALL_USERS = 'select * from Dashboard',
  FIND_USER_BY_EMAIL = 'select * from Dashboard where email = ?',
  FIND_USER_BY_USERNAME_OR_EMAIL = 'select * from Dashboard where username = ? or email = ?',
  FIND_USER_BY_ID = 'select * from Dashboard where id = ?',
  UPDATE_LAST_VISIT = 'update Dashboard set last_visit = ? where id = ?',
  CREATE_USER = 'insert into Dashboard set ?',
  UPDATE_USER_STATUS = 'update Dashboard set status = ? where id in (?)',
  DELETE_USERS = 'delete from Dashboard where id in (?)',
}
