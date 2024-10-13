let user = localStorage.getItem("user");
console.log(user);

const body = document.querySelector("body");
// chuyển user string sang json
if (user) {
  user = JSON.parse(user);
  console.log(user.user);
  if (user.user.role !== "admin") {
    body.innerHTML = "bạn không có quyền truy cập";
  }
} else {
  body.innerHTML = "bạn không có quyền truy cập";
}
