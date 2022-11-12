import Post from "./Post.js";

// test post list
const post1 = new Post('some.one@mail.utoronto.ca');
const post2 = new Post('hello.world@mail.utoronto.ca');
const post3 = new Post('cs.student@mail.utoronto.ca');

post1.add_tags('Uoft');
post1.add_tags("Math Major");

post2.add_tags('Uoft');
post2.add_tags('Cs Minor');

post3.add_tags('Uoft');
post3.add_tags('Cs Speciallist')

// array of posts
const posts = [post1,post2,post3];



const postTemplate = document.querySelector("[post-template]");
const postContainer = document.querySelector("[posts-container]");
const seachInput = document.querySelector("[tag-search]");

//Search functions
let searchResult = []

seachInput.addEventListener("input", (e) =>{

  const value = e.target.value.toLowerCase();
  searchResult.forEach(postData =>{
    const isVisible = 
      postData.tags.toString().toLowerCase().includes(value) || 
      postData.description.toLowerCase().includes(value);
    postData.element.classList.toggle("hide", !isVisible);
  })
  
})


//turn array into html list
searchResult = posts.map(postData => {
  // console.log(postTemplate)
  const post = postTemplate.content.cloneNode(true).children[0];
  const description = post.querySelector("[data-description]");
  const tags = post.querySelector("[data-tags]");
  description.textContent = postData.description;
  tags.textContent = 'tags:\t '+ postData.tags;
  postContainer.append(post)
  return{description: postData.description, tags: postData.tags, element: post}
})