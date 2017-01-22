const child_process = require('child_process');
const path = require('path');

const basedir = path.resolve(__dirname, '../..');

const shouldNotify = () => {
  return process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID && process.env.TRAVIS_PULL_REQUEST !== 'false'
    && process.env.TRAVIS_TEST_RESULT && parseInt(process.env.TRAVIS_TEST_RESULT, 10) === 0;
};

const buildMessage = () => {

  const branch = process.env.TRAVIS_PULL_REQUEST_BRANCH;
  const pkg = require(path.resolve(`${basedir}/package.json`));
  const projectName = pkg.name;
  const repository = pkg.repository.url;
  const prUrl = `${repository}/pull/${process.env.TRAVIS_PULL_REQUEST}`;

  return `*${projectName}* Pending Review for branch [${branch}](${prUrl})`;
};

const init = () => {
  if (shouldNotify()) {


    const telegramToken = process.env.TELEGRAM_BOT_TOKEN;

    const message = buildMessage();

    const chatId = process.env.TELEGRAM_CHAT_ID;

    console.log('Notifying telegram');

    child_process.execSync(`curl -g -XGET "https://api.telegram.org/bot${telegramToken}/sendMessage?text=${message}&chat_id=${chatId}&parse_mode=markdown"`);

    process.exit();

  } else {
    console.log('Not notifying on telegram');
  }
};

init();
