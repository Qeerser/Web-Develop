function submitData (){
    console.log("submit")

    let firstnameDom = document.querySelector('input[name=firstname]')
    let lastnameDom = document.querySelector('input[name=lastname]')
    let ageDom = document.querySelector('input[name=age]')
    let genderDom = document.querySelector('input[name=gender]:checked')
    let interestDom = document.querySelectorAll('input[name=interested]:checked')
    let descriptionDom = document.querySelector('textarea[name=description]')

    let interest  = ''
    for (let i = 0 ; i < interestDom.length ;i++){
        interest += interestDom[i].value
        if (i != interestDom.length - 1){
            interest += ', '
        }
    }
    let userData = {
        firstname : firstnameDom.value,
        lastname : lastnameDom.value,
        age : ageDom.value,
        gender : genderDom.value,
        interest : interest,
        description : descriptionDom.value
    }

    console.log(userData)
}