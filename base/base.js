let townhall = [
  {
    'image': 'base/img/th3_min.jpg',
    'name': 'Town Hall 3',
    'link': 'base/th/th3.html'
  },
  {
    'image': 'base/img/th4_min.jpg',
    'name': 'Town Hall 4',
    'link': 'base/th/th4.html'
  },
  {
    'image': 'base/img/th5_min.jpg',
    'name': 'Town Hall 5',
    'link': 'base/th/th5.html'
  },
  {
    'image': 'base/img/th6_min.jpg',
    'name': 'Town Hall 6',
    'link': 'base/th/th6.html'
  },
  {
    'image': 'base/img/th7_min.jpg',
    'name': 'Town Hall 7',
    'link': 'base/th/th7.html'
  },
  {
    'image': 'base/img/th8_min.jpg',
    'name': 'Town Hall 8',
    'link': 'base/th/th8.html'
  },
  {
    'image': 'base/img/th9_min.jpg',
    'name': 'Town Hall 9',
    'link': 'base/th/th9.html'
  },
  {
    'image': 'base/img/th10_min.jpg',
    'name': 'Town Hall 10',
    'link': 'base/th/th10.html'
  },
  {
    'image': 'base/img/th11_min.jpg',
    'name': 'Town Hall 11',
    'link': 'base/th/th11.html'
  },
  {
    'image': 'base/img/th12_min.jpg',
    'name': 'Town Hall 12',
    'link': 'base/th/th12.html'
  },
  {
    'image': 'base/img/th13_min.jpg',
    'name': 'Town Hall 13',
    'link': 'base/th/th13.html'
  },
  {
    'image': 'base/img/th14_min.jpg',
    'name': 'Town Hall 14',
    'link': 'base/th/th3.html'
  },
  {
    'image': 'base/img/th15_min.jpg',
    'name': 'Town Hall 15',
    'link': 'base/th/th15.html'
  }
];

let wrapper = document.getElementsByClassName('wrapper')[0];
let html = '';

townhall.map(th => {
  html += `
  <div class="card" onclick="location.href='error.html'">
    <img src="${th.image}" alt="${th.name}">
    <div class="desc">${th.name}</div>
  </div>
  `;
});
wrapper.innerHTML = html;
