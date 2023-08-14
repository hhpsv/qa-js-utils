import copyToClipboard from './helpers/clipboard';

async function getSession() {
  try {
    const response = await fetch(`https://${location.hostname}/?debug`, {
      headers: { 'Frontik-Debug-Auth': 'debug:debug' },
    });

    if (!response.ok) throw new Error('Network response was not ok');

    const body = await response.text();
    const [session] = body.match(/(?<=Hh-Proto-Session: ).+?(?=')/);

    if (session) {
      await copyToClipboard(session);
    } else {
      console.error('Session was not found in response body');
    }

  } catch (err) {
    console.error('Error retrieving session:', err);
  }
}

(getSession)();