const links_social_media = {
  github: 'ErneC',
  youtube: 'UCfp5OZSIzKTjtqy-jowgQjg',
  facebook: 'mv.ernestina',
  instagram: 'mv.ernestina',
  twitter: 'mv_ernestina'
}


function change_social_media_links() {
  for (let li of social_links.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${links_social_media[social]}` //atentar-se que é uma crase, nao aspas simples.

  }
}

// Chama a Funçao e apresenta o conteúdo na tela.
change_social_media_links()

function get_github_profile_infos(){
  const url = `https://api.github.com/users/${links_social_media.github}`
 
  fetch(url)
  .then(response => response.json())
  .then(data => {
    user_name.textContent = data.name
    user_bio.textContent = data.bio
    
  })
  

}

get_github_profile_infos()
