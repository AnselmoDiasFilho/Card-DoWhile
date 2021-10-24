const linksSocialMedia = {
    gihub:'AnselmoDiasFilho',
    youtube:'UCirXe0bVhQmWQ49HEeYmGIg',
    instagram:'_anselmo_69',
    facebook:'anselmo.alves.96930',
    twitter:'TV45443921'
}

function getUrl() {
for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href =`https://${social}.com/${linksSocialMedia[social]}`
 
  }
}

getUrl()

function getGitHubProfileinfor() {
    const url = `https://api.github.com/users/${linksSocialMedia.gihub}`

    fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userLink.href = data.html_url
      userBio.textContent = data.bio
      userImage.src = data.avatar_url
      userNameLogin.textContent = data.login

    })
}

getGitHubProfileinfor()