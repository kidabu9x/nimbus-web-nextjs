import fetch from "isomorphic-fetch";

export function getPosts() {
  return fetch("https://jsonplaceholder.typicode.com/posts");
}

export function getPost(slug: any) {
  return fetch(`https://jsonplaceholder.typicode.com/posts?title=${slug}`);
}
