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
  const int1 = document.createElement("img");
  const int2 = document.createElement("img");
  const int3 = document.createElement("img");


  profile_img.src = element.user.photo
  profile_name.innerText = element.user.first_name + " " + element.user.last_name
  text_posted.innerText = element.text

  postBaymax.classList.add("post-baymax")
  profile.classList.add('profile')
  profile_pic.classList.add('profile-pic')
  text.classList.add('text')
  interaction.classList.add('interaction')
  profile_img.classList.add("perfil")

  profile_verified.src = '../img/piu.svg'
  int1.src = "../img/like.svg"
  int2.src = "../img/comment.svg"
  int3.src = "../img/share.svg"

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
  interaction.appendChild(int1)
  interaction.appendChild(int2)
  interaction.appendChild(int3)



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

const validar = () => {
  alert("ola");
};


const word_count = () => {
  const text = document.querySelector("input")
  const div = document.querySelector(".contador")
  const input = document.createElement('p')
  input.classList.add("counter")
  text.onkeyup = (a) => {
    console.log((a.target.value).length)
    input.innerText = (a.target.value.length) + "/140"
    div.appendChild(input)

    if ((a.target.value.length) > 140)  {
      
      document.getElementsByClassName("counter")[0].style.color = "red";
      document.getElementsByClassName("mensagem")[0].style.color = "red";
    } 
    else {
      document.getElementsByClassName("counter")[0].style.color = "#f6f6f6";
      document.getElementsByClassName("mensagem")[0].style.color = "#f6f6f6";

    }
  };

  
};

word_count()
