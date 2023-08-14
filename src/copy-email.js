// https://stackoverflow.com/questions/7145514/whats-the-purpose-of-starting-semi-colon-at-beginning-of-javascript
import copyToClipboard from './helpers/clipboard';

async function copyLogin() {
    const url = window.location.pathname;
    let selector;

    if (url.includes('resume')) {
        selector = 'div[data-qa="resume-contact-email"] > a > span';
    } else if (url.includes('/admin/employer.do')) {
        selector = '.b-employerpage-managerlist > .b-emppage-manager-boss.b-emppage-manager-0 > td > a';
    }

    const element = document.querySelector(selector);

    if (!element) {
        console.log('Element is not available on this page.');
        return;
    }

    await copyToClipboard(element.textContent);
}

(copyLogin)();
