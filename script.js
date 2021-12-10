// const element = document.querySelector('');
const addAccount = () => {
  const element = document.querySelector('#account-container');
  const div = document.createElement('div');
  const i = element.childElementCount;
  div.innerHTML = `<div class="container-row-left"><div class="item-center logo-small">H</div><div style="margin-left: 10px" class="container-col-left"><div>Hong Hong</div><div>Hong${i}@classum.com</div></div></div>`;
  element.appendChild(div);
};

const removeAccount = () => {
  const element = document.querySelector('#account-container');
  if (element.childElementCount < 1) {
    alert('지울 계정이 없습니다.');
    return null;
  }

  const last_element = element.lastChild;
  element.removeChild(last_element);
};

const responseList_0 = () => {
  // const element = document.querySelector('#responseList');
  const element = document.getElementById('responseList');
  fetch('https://jsonplaceholder.typicode.com/todos').then((res) => {
    console.log(res);
    res.json().then((res) => {
      renderingList(res, element);
    });
  });
};

const responseList_1 = () => {
  // const element = document.querySelector('#responseList');
  const element = document.getElementById('responseList');
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((json) => {
      console.log(json);
      renderingList(json, element);
    });
};

const responseList_2 = async () => {
  // const element = document.querySelector('#responseList');
  const element = document.getElementById('responseList');
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await res.json();
  renderingList(data, element);
};

const renderingList = (arr, element) => {
  let str = '';
  arr.forEach((el) => {
    // 최적화 (0)
    element.innerText = element.innerText + '\t' + el.id;
    element.innerText = element.innerText + '\t' + el.title;
    element.innerText = element.innerText + '\t' + el.completed;
    element.innerText = element.innerText + '\n';
    // 최적화 (1)
    // element.innerText = element.innerText + '\t' + el.id + '\t' + el.title + '\t' + el.completed + '\n';
    // 최적화 (2)
    // str += '\t' + el.id + '\t' + el.title + '\t' + el.completed + '\n';
    // str += '\t' + el.id + '\n';
  });
  // element.innerText = str;
};
