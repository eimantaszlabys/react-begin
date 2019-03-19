const courses = [
  {
    id: 1,
    title: "Some title",
    slug: "some-title",
    authorId: 1,
    category: "C#"
  }
];

const authors = [{ id: 1, name: "Author Nr1" }];

const newCourse = {
  id: null,
  title: "",
  authorId: null,
  category: ""
};

module.exports = {
  courses,
  authors,
  newCourse
};
