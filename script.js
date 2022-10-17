document.querySelector('.cross').style.display = 'none';
document.querySelector('.cross-ham').addEventListener("click" , removesidebar)
function removesidebar(){
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if( document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.ham').style.display = 'inline'
        document.querySelector('.cross').style.display = 'none'
    }
    else{
        document.querySelector('.ham').style.display = 'none'
        document.querySelector('.cross').style.display = 'inline'
    }
}