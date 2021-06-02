const divEl = document.createElement("div");
divEl.className = "title";
divEl.innerHTML = "你好啊，李银河";

document.body.appendChild(divEl);

// 这个文件没有被打包，因为没有在依赖关系里面
// 可以在任何一个已经被依赖的文件里面添加