import { insertLast } from "./insert.js";

const createUserCard = ({
  id = "",
  email = "",
  website = "",
  name = "",
} = {}) => {
  return /* html */ `
  <article class="user-card" data-index="user-${id}">
      <h3 class="user-name">${name}</h3>
      <div class="user-resouce-info">
        <div>
          <a class="user-email" href="mailto:${email}">${email}</a>
        </div>
        <div>
          <a
            class="user-website"
            href="${website}"
            target="_blank"
            rel="noopener noreferer"
            >${website}</a
          >
        </div>
      </div>
      <button class="delete">삭제</button>
    </article>`;
};

/* console.log(
  createUserCard({
    id: 1,
    name: "lee",
    email: "lee@naver.com",
    website: "lee.com",
  })
); */

export const renderUserCard = (target, data) => {
  insertLast(target, createUserCard(data));
};
