function iniciosessao(){
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let usuario = document.getElementById('usuario').value;
    let email = document.getElementById('email').value;
  
    

    alert("Nombre: "+nombre+"\nUsuário: "+apellido+"\nUsuário: "+usuario+"\nEmail: "+email     
    );

}

function darkmode(){
    document.body.classList.toggle('dark-mode');
}