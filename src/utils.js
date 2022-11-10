//Local storage init
let tasks = [
  {
    id: 1,
    title: "clean the bathroom",
    completed: false,
  },
  {
    id: 2,
    title: "study 3 hours",
    completed: true,
  },
];

export function initStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
