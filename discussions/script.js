async function fetchDiscussions() {
  const user = 'MilesONerd';
  const repo = 'milesonerd.github.io'; 
  const url = `https://api.github.com/repos/MilesONerd/milesonerd.github.io/discussions`;
  
  const response = await fetch(url);
  const data = await response.json();
  
  if (response.ok) {
    displayDiscussions(data); 
  } else {
    console.error('Error fetching discussions', data);
  }
}

// Função para exibir as discussões
function displayDiscussions(discussions) {
  const container = document.getElementById('discussions-container');
  container.innerHTML = ''; 
  
  discussions.forEach(discussion => {
    const discussionElement = document.createElement('div');
    discussionElement.classList.add('discussion');
    discussionElement.innerHTML = `
      <h3><a href="${discussion.html_url}" target="_blank">${discussion.title}</a></h3>
      <p>${discussion.body}</p>
      <small>Por ${discussion.user.login}</small>
    `;
    container.appendChild(discussionElement);
  });
}

fetchDiscussions();

setInterval(fetchDiscussions, 30000);
