

function create_post(element) {
  
  const postBaymax = document.createElement("div");
  const profile = document.createElement("div");
  const profile_pic = document.createElement("div");
  const profile_img = document.createElement("img");
  const profile_name = document.createElement("p");
  const profile_verified = document.createElement("img");
  const text = document.createElement("div");
  const text_posted = document.createElement("p");
  const interaction = document.createElement("div");
  const n_like = document.createElement("p")
  const int1 = document.createElement("img");
  const int2 = document.createElement("img");
  const int3 = document.createElement("img");
  const int4 = document.createElement("img");


 


  profile_img.src = element.user.photo
  profile_name.innerText = element.user.first_name + " " + element.user.last_name
  text_posted.innerText = element.text

  postBaymax.classList.add("post-baymax")
  profile.classList.add('profile')
  profile_pic.classList.add('profile-pic')
  text.classList.add('text')
  n_like.classList.add('engajement')
  n_like.setAttribute('id', element.id)
  interaction.classList.add('interaction')
  profile_img.classList.add("perfil")
  


  profile_verified.src = '../img/piu.svg'
  int1.src = "../img/like.svg"
  int2.src = "../img/comment.svg"
  int3.src = "../img/share.svg"
  int4.src = "../img/trash.svg"

  
  n_like.setAttribute("value", 0)
  n_like.innerText = 0


  int1.setAttribute("onclick", "like(this)")
  int4.setAttribute("onclick", "delete_post(this)")

  const posts = document.querySelector(".posts")

  posts.appendChild(postBaymax)
  postBaymax.appendChild(profile)
  profile.appendChild(profile_pic)
  profile_pic.appendChild(profile_img)
  profile_pic.appendChild(profile_name)
  profile_pic.appendChild(profile_verified)
  postBaymax.appendChild(text)
  text.appendChild(text_posted)
  postBaymax.appendChild(interaction)
  interaction.appendChild(n_like)
  interaction.appendChild(int1)
  interaction.appendChild(int2)
  interaction.appendChild(int3)
  interaction.appendChild(int4)
  

}

async function getData() {
  const response = await fetch(
    "https://api.json-generator.com/templates/BQZ3wDrI6ts0/data?access_token=n7lhzp6uj5oi5goj0h2qify7mi2o8wrmebe3n5ad"
  );

  const produtos = await response.json();

  produtos.forEach((element) => {
    create_post(element)

  });
}

getData();

const word_count = () => {
  const text = document.querySelector("input")
  const div = document.querySelector(".contador")
  const input = document.createElement('p')
  input.classList.add("counter")
  text.onkeyup = (a) => {

    input.innerText = (a.target.value.length) + "/140"
    div.appendChild(input)
    

    if ((a.target.value.length) > 140)  {
      
      document.getElementsByClassName("counter")[0].style.color = "red";
      document.getElementsByClassName("mensagem")[0].style.color = "red";
      
    } 
    else {
      document.getElementsByClassName("counter")[0].style.color = "#f6f6f6";
      document.getElementsByClassName("mensagem")[0].style.color = "#f6f6f6";
      

    };
    
  };

};

word_count()

const enviar = () => {
  const text = document.getElementById("formulario").value
  const size = document.getElementById("formulario").value.length
  console.log(size)

  element =  {
    user: {
      photo: '../img/baymax.svg',
      first_name: "Bay",
      last_name: "Max",
    },
    text
  };

  const div = document.querySelector(".alerta")
  const input = document.createElement('p')

  if (size < 140 && size > 1) {
    create_post(element);
    div.parentNode.removeChild(div)
  } else {
    
    
    input.classList.add("aviso")
    input.innerText = " - o texto deve ter entre 1 e 140 palavras - "
    div.appendChild(input)
  };
}




const like = (self) => {
  
  let like = self.parentNode.firstChild
  like.innerText =  parseInt(like.innerText) + parseInt(1)
  console.log(like.innerText)
}

const delete_post = (self) => {
  console.log("clicou")
  let parent = self.parentNode.parentNode
  parent.parentNode.removeChild(parent)

}


async function find_user(element) {
  const user = document.createElement('div')
  const profile_search = document.createElement("div")
  const img_search = document.createElement("img")
  const dados_search = document.createElement("div")
  const nome_search = document.createElement("p")
  const usuário_search = document.createElement("p")


  const foto = String(element.user.photo.value)

  console.log(foto)
 

  img_search.setAttribute("src","foto")
  nome_search.innerText = "Nome: " +  element.user.first_name + " " + element.user.last_name
  usuário_search.innerText = "Username: " + element.user.username

  user.classList.add("user")
  profile_search.classList.add("profile-search")
  img_search.src = "element.user.photo"
  dados_search.classList.add("dados")
  nome_search.classList.add("nome")


  const search_div = document.querySelector(".search")

  search_div.appendChild(user)
  user.appendChild(profile_search)
  profile_search.appendChild(img_search)
  profile_search.appendChild(dados_search)
  dados_search.appendChild(nome_search)
  dados_search.appendChild(usuário_search)


}

/*

<div class="user">
                <div class="profile-search">
                    <img src="../img/baymax.svg"> 
                    <div class="dados">
                        <p class="nome">nome</p>
                        <p class=" usuário">usuário</p>

                    </div>

*/

async function pesquisar() {
  const response = await fetch(
    "https://api.json-generator.com/templates/BQZ3wDrI6ts0/data?access_token=n7lhzp6uj5oi5goj0h2qify7mi2o8wrmebe3n5ad"
  );

  const produtos = await response.json();
  const aba  = document.getElementById('aba').value

  

  produtos.every((element) => {
    const nome = element.user.first_name + " " + element.user.last_name
    const username = (element.user.username)

    if ((aba == nome)|| (aba == username)) {
        console.log(element.user.photo)
        find_user(element)
        return false

    } else {
      console.log("Não Achei")
      return true
    }


  });

}