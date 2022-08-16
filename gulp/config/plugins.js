import replace from 'gulp-replace'; // поиск и замена
import gulpPlumber from 'gulp-plumber'; // обработка ошибок
import notify from 'gulp-notify'; // сообщения (подсказки)
import browserSync from 'browser-sync'; // сообщения (подсказки)
import newer from 'gulp-newer';
import gulpIf from 'gulp-if';

export const plugins = {
  replace: replace,
  gulpPlumber: gulpPlumber,
  notify: notify,
  browserSync: browserSync,
  newer: newer,
  if: gulpIf,
};
