import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';

dayjs.locale('pt-br');
var customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(customParseFormat)

export { dayjs };