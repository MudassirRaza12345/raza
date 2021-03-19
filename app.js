const sign_in_btn=document.getElementById('sign-in-button');

const sign_up_btn=document.getElementById('sign-up-button');
const container=document.getElementById('container');
sign_up_btn.addEventListener('click',()=>{
    container.classList.add('sign-up-mode');
}
);
sign_in_btn.addEventListener('click',()=>{
    container.classList.remove('sign-up-mode');


}

);