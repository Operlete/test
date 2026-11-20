const form = document.querySelector('#connection-form');
const status = document.querySelector('#status');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const url = document.querySelector('#project-url').value.trim().replace(/\/+$/, '');
  const key = document.querySelector('#anon-key').value.trim();
  status.textContent = 'Checking Supabase…';
  status.dataset.state = 'pending';

  try {
    const response = await fetch(`${url}/auth/v1/health`, {
      headers: { apikey: key }
    });
    if (!response.ok) throw new Error(`Supabase returned HTTP ${response.status}`);
    status.textContent = 'Connected. Supabase Auth is responding.';
    status.dataset.state = 'success';
  } catch (error) {
    status.textContent = error instanceof TypeError
      ? 'Could not reach this project. Check the URL, key, and network.'
      : error.message;
    status.dataset.state = 'error';
  }
});
