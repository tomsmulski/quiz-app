import { navigation } from './modules/navigation.js';
import { bookmark, loadBookmarkQuestions } from './modules/bookmark.js';
import { answerShowHide } from './modules/answer.js';
import { cards } from './modules/cards.js';
import { questions } from './modules/questions.js';

navigation();
cards(questions);
bookmark(questions);
loadBookmarkQuestions(questions);
answerShowHide();
