const BASE_URL = 'http://localhost:8000'
window.onload = async () => {
    await loadData()
}

const loadData = async () => {
    const response = await axios.get(`${BASE_URL}/users`)
    console.log(response.data)

    const userDom = document.getElementById('user')

    let htmlData = `<div > <ul>`

    response.data.forEach(users => {
        htmlData += `<li><div class='boxs'>
      <div class='box'> ${users.firstname} </div>
      <div class='box'>${users.lastname}</div>
      <a href='index.html?id=${users.id}'>
      <button class= 'button box' data-id='${users.id}'>Edit</button></a>
      <button class='button box delete' data-id='${users.id}'>Delete</button>
      </div>
    </li>`
    });
    
    htmlData += '</ul></div>'
    userDom.innerHTML = htmlData
    
    let deleteDOM = document.getElementsByClassName('delete');

    // Convert to an array with spread operator
    [...deleteDOM].forEach((element) => {
        element.addEventListener('click', async (event) => {
            let id = event.target.dataset.id;

            try {
                await axios.delete(`${BASE_URL}/users/${id}`);
                loadData();  // Reload data after deletion
            } catch (error) {
                console.log('error', error);
            }
        });
    });

}